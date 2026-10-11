const fs=require('node:fs'),vm=require('node:vm'),ts=require('typescript'),assert=require('node:assert/strict');
function load(path,dependency,context={}) {
 const compiledModule={exports:{}};
 const source=fs.readFileSync(path,'utf8');
 const compiled=ts.transpileModule(source,{fileName:path,reportDiagnostics:true,compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX}});
 assert.equal((compiled.diagnostics||[]).filter(d=>d.category===ts.DiagnosticCategory.Error).length,0,path+' syntax');
 vm.runInNewContext(compiled.outputText,{module:compiledModule,exports:compiledModule.exports,require:dependency,process:{env:{}},...context});
 return compiledModule.exports;
}
(async()=>{
 const contact=load('lib/contact-email.ts',()=>{throw Error('No draft dependencies');});
 const w=load('lib/webinar.ts',name=>{assert.equal(name,'@/lib/contact-email');return contact;});
 for(const NODE_ENV of ['production','test',undefined])assert.equal(w.webinarDraftEnabled({NODE_ENV,WEBINAR_DRAFT_ENABLED:'true'}),false);
 assert.equal(w.webinarDraftEnabled({NODE_ENV:'development'}),false);
 assert.equal(w.webinarDraftEnabled({NODE_ENV:'development',WEBINAR_DRAFT_ENABLED:'true'}),true);
 const value={name:'Controlled local test',email:'qa@example.test',company:'Example organization',recordingUpdate:false};
 assert.equal(w.prepareWebinarInterest({ ...value,name:'',email:'bad',company:'' }).ok,false);
 assert.equal(w.prepareWebinarInterest({ ...value,name:'a'.repeat(161) }).ok,false);
 assert.equal(w.prepareWebinarInterest({ ...value,email:'qa@example.test\r\nBcc: somebody@example.test' }).ok,false);
 assert.equal(w.prepareWebinarInterest({...value,name:'',company:''}).ok,true,'Only work email is required');
 assert.equal(w.prepareWebinarInterest({...value,role:'x'.repeat(161)}).ok,false);
 for(const purpose of ['marketing','qa'])assert.equal(w.maySendWebinarFollowup({marketingFollowup:true,qaInvitations:true,unsubscribed:true},purpose),false,'Unsubscribe suppresses queued/retried optional sends');
 assert.equal(w.maySendWebinarFollowup({marketingFollowup:false,qaInvitations:true,unsubscribed:false},'marketing'),false);
 assert.equal(w.maySendWebinarFollowup({marketingFollowup:false,qaInvitations:true,unsubscribed:false},'qa'),true);
 const a=w.prepareWebinarInterest(value), b=w.prepareWebinarInterest(value);
 assert(a.ok&&b.ok);assert.equal(a.draft.href,b.draft.href);
 assert(a.draft.text.includes('No requested-link email delivery'));
 const delivery=w.prepareWebinarInterest({...value,recordingUpdate:true});
 assert(delivery.draft.text.includes('Send the replay link and pilot readiness checklist'));
 assert(delivery.draft.text.includes('No permission for marketing follow-ups'));
 assert(delivery.draft.text.includes('No permission for future Q&A invitations'));
 const marketing=w.prepareWebinarInterest({...value,marketingFollowup:true});
 assert(marketing.draft.text.includes('No requested-link email delivery'));
 assert(marketing.draft.text.includes('three follow-up emails from Stigg Security Inc. DBA SyncAI'));
 assert(marketing.draft.text.includes('No permission for future Q&A invitations'));
 const qa=w.prepareWebinarInterest({...value,qaInvitations:true});
 assert(qa.draft.text.includes('invitations to future SyncAI live Q&A sessions'));
 assert(qa.draft.text.includes('No permission for marketing follow-ups'));
 assert.equal(w.webinar.title,'From Maintenance Evidence to a Defensible Next Action');
 assert.equal(w.webinar.primaryCta,'Discuss a 30-minute reliability workflow consultation');
 for(const key of ['bookingUrl','checklistUrl','recordedDate','productVersion'])assert.equal(w.webinar[key],null);
 // Existing measurement adapter is inert by default; enable + consent required; no user properties.
 let sent=[];
 for(const [enabled,consent,throws,expected] of [['false','granted',false,0],['true','denied',false,0],['true','granted',true,0],['true','granted',false,1]]) {
   sent=[];
   const measured=load('lib/webinar.ts',()=>contact,{process:{env:{NEXT_PUBLIC_WEBINAR_MEASUREMENT_ENABLED:enabled}},window:{localStorage:{getItem(){if(throws)throw Error('blocked');return consent;}},gtag:(...args)=>sent.push(args)}});
   measured.measureWebinar('interest_draft_prepared');assert.equal(sent.length,expected);
   if(expected){assert.equal(sent[0][1],'webinar_interest_draft_prepared');assert.equal(Object.keys(sent[0][2]).join(','),'webinar_id');}
 }
 // Exercise real component callbacks using deterministic local hooks; no browser/network APIs.
 let slots=[],cursor=0,events=[],focused=[];
 const hooks={useEffect(callback){const i=cursor++;if(!(i in slots)){slots[i]=true;callback();}},useState(initial){const i=cursor++;if(!(i in slots))slots[i]=initial;return [slots[i],v=>slots[i]=v];},useRef(initial){const i=cursor++;if(!(i in slots))slots[i]={current:initial};return slots[i];}};
 const Form=load('components/WebinarInterestForm.tsx',name=>{
   if(name==='react')return hooks;if(name==='react/jsx-runtime')return require('react/jsx-runtime');
   if(name==='next/link')return {__esModule:true,default:'a'};
   if(name==='@/lib/contact-email')return contact;
   if(name==='@/lib/webinar')return {...w,measureWebinar:event=>events.push(event)};
   throw Error(name);
 },{requestAnimationFrame:callback=>callback(),navigator:{clipboard:{writeText:async()=>{throw Error('Controlled denied clipboard');}}}}).default;
 const render=()=>{cursor=0;return Form();};
 const walk=node=>{if(!node||typeof node!=='object')return [];if(Array.isArray(node))return node.flatMap(walk);return [node,...walk(node.props?.children)];};
 const find=(type,predicate=()=>true)=>walk(render()).find(n=>n.type===type&&predicate(n.props));
 for(const name of ['name','company','role'])assert.equal(find('input',p=>p.name===name).props.required,false,'Optional fields do not block requested links');
 assert.equal(find('input',p=>p.name==='email').props.required,true);
 for(const name of ['marketingFollowup','qaInvitations'])assert.equal(find('input',p=>p.name===name).props.checked,false,'All optional permissions start unchecked');
 const submitEvent={preventDefault(){},currentTarget:{querySelector:selector=>({focus:()=>focused.push(selector)})}};
 find('form').props.onSubmit(submitEvent);
 assert(focused[0].includes('email'));assert(walk(render()).some(n=>n.props?.['aria-invalid']===true));
 for(const name of ['name','email','company'])find('input',p=>p.name===name).props.onChange({target:{value:value[name]}});
 const submit=find('form').props.onSubmit;submit(submitEvent);submit(submitEvent);
 assert.equal(events.filter(e=>e==='interest_draft_prepared').length,1,'Rapid duplicate clicks only prepare one draft');
 assert.equal(find('form'),undefined);assert(find('h2').props.children.includes('draft is ready'));
 await find('button',p=>p.children==='Copy email draft').props.onClick();
 assert(find('p',p=>p.role==='status').props.children.includes('copy it manually'));
 assert(find('textarea').props.readOnly);assert(find('a',p=>p.href?.startsWith('mailto:')));
 find('button',p=>p.children==='Edit this request').props.onClick();assert(find('form'));
 const watch=fs.readFileSync('app/webinars/maintenance-decisions/watch/page.tsx','utf8');
 assert(!/<video|<iframe|autoplay|fake viewers/.test(watch));assert(watch.includes('Not recorded')&&watch.includes('Product version shown'));
 assert(watch.includes('without registration or marketing permission'));
 assert(watch.includes('captions')&&watch.includes('timestamps')&&watch.includes('6–8 week'));
 assert(fs.readFileSync('app/webinars/layout.tsx','utf8').includes('index: false'));
 assert.equal(JSON.parse(fs.readFileSync('vercel.json')).git.deploymentEnabled['feat/webinar-draft'],false);
 const ServerForm=load('components/WebinarInterestForm.tsx',name=>{
   if(name==='react'||name==='react/jsx-runtime')return require(name);
   if(name==='next/link')return {__esModule:true,default:'a'};
   if(name==='@/lib/contact-email')return contact;
   if(name==='@/lib/webinar')return w;
   throw Error(name);
 }).default;
 const html=require('react-dom/server').renderToStaticMarkup(require('react').createElement(ServerForm));
 assert(html.includes('<fieldset disabled=""'),'SSR disables native form submission before hydration');
 assert(html.includes('name="email"')&&html.includes('<noscript>'));
 const ui=fs.readFileSync('components/WebinarInterestForm.tsx','utf8');
 assert(!/fetch\(|localStorage|sessionStorage|sendBeacon|trackContactSubmit/.test(ui));
 assert(ui.includes('fieldset disabled={!ready}')&&ui.includes('if (!ready || prepared.current) return'),'No-JS and pre-hydration controls cannot submit native personal-data requests');
 assert(ui.includes('data-clarity-mask="true"')&&ui.includes('aria-live="polite"')&&ui.includes('<noscript>'));
 console.log('PASS webinar draft: exposure gates, validation, duplicate preparation, truthful confirmation, optional follow-up, clipboard failure, disabled/consented PII-free measurement, no player or provider calls. UI callbacks tested in memory; rendered browser checks still required.');
})().catch(e=>{console.error(e);process.exitCode=1;});
