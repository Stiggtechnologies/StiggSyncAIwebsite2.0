const puppeteer = require('../syncai-website/node_modules/puppeteer');
const fs = require('fs');
const assert = require('assert');
(async () => {
 const buildId=fs.readFileSync('.next/BUILD_ID','utf8').trim();
 const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox','--disable-extensions'],userDataDir:'/tmp/syncai-launch-qa-'+Date.now()});
 const page = await browser.newPage();
 await page.setCacheEnabled(false);
 const routes = Object.keys(JSON.parse(fs.readFileSync('.next/server/app-paths-manifest.json'))).filter(x=>x.endsWith('/page')).map(x=>x.replace(/\/page$/,'')||'/').filter(x=>x!='/_not-found').filter(x=>!process.env.QA_ROUTES||process.env.QA_ROUTES.split(',').includes(x));
 assert(routes.length>0,'No QA routes selected');
 const results=[]; const links=new Set(); const errors=[];
 page.on('pageerror',e=>{errors.push({route:page.url(),message:e.message,stack:e.stack});console.error('Runtime error on '+page.url()+': '+e.message);});
 for(const width of [1440,768,390,375,320]) {
  await page.setViewport({width,height:900});
  for(const route of routes) {
   const response=await page.goto('http://127.0.0.1:3100'+route,{waitUntil:'networkidle0'});
   await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,10));}window.scrollTo(0,0);});
   const data=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,mainTarget:document.querySelectorAll('main#main-content[tabindex="-1"]').length,overflow:document.documentElement.scrollWidth>innerWidth,canonical:document.querySelector('link[rel=canonical]')?.href,links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),badButtons:[...document.querySelectorAll('a button')].length,unsafeGuidedLinks:[...document.querySelectorAll('a[href]')].filter(a=>a.href.includes('app.syncai.ca/get-started')||(a.href==='https://app.syncai.ca/workspace'&&!/customer/i.test(a.textContent))).length}));
   data.links.forEach(l=>{if(l.startsWith('/')&&!l.startsWith('//'))links.add(l.split('#')[0]);});
   delete data.links;results.push({width,route,status:response.status(),...data});
   if([390,1440].includes(width)&&['/','/platform','/contact','/industries','/microsoft','/training'].includes(route))await page.screenshot({path:`../qa-evidence/${width===390?'mobile':'desktop'}-${route==='/'?'home':route.slice(1)}.png`,fullPage:true});
  }
  console.log('Completed viewport '+width+'; runtime errors: '+errors.length);
 }
 await page.setViewport({width:390,height:844});await page.goto('http://127.0.0.1:3100');await page.click('button[aria-controls="mobile-navigation"]');const menuOpen=await page.$('#mobile-navigation')!==null;await page.keyboard.press('Escape');const menuClosed=await page.$('#mobile-navigation')===null;
 const internal=[];for(const link of links){const r=await page.goto('http://127.0.0.1:3100'+link);internal.push({link,status:r.status()});}
 const forms=[];for(const route of ['/contact','/strategic-pilot','/reliability-assessment']){await page.goto('http://127.0.0.1:3100'+route);forms.push({route,emptyFormBlocked:await page.$eval('form',f=>!f.checkValidity())});}
 const unchangedBuild=buildId===fs.readFileSync('.next/BUILD_ID','utf8').trim(); const report={buildId,unchangedBuild,results,internal,errors,menuOpen,menuClosed,forms};fs.writeFileSync('../qa-evidence/browser-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify({pages:results.length,issues:results.filter(r=>r.status>=400||r.overflow||r.h1!==1||r.mainTarget!==1||r.badButtons||r.unsafeGuidedLinks),brokenLinks:internal.filter(l=>l.status>=400),errors,menuOpen,menuClosed,forms},null,2));await browser.close();assert(unchangedBuild,'Production build changed during audit');assert.equal(errors.length,0,'Browser runtime/hydration errors');assert.equal(results.filter(r=>r.status>=400||r.overflow||r.h1!==1||r.mainTarget!==1||r.badButtons||r.unsafeGuidedLinks).length,0);assert.equal(internal.filter(l=>l.status>=400).length,0);assert(menuOpen&&menuClosed);assert(forms.every(f=>f.emptyFormBlocked));
})().catch(e=>{console.error(e);process.exit(1)});
