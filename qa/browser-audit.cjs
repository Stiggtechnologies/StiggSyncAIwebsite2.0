const puppeteer = require('../syncai-website/node_modules/puppeteer');
const fs = require('fs');
(async () => {
 const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox'],userDataDir:'/tmp/syncai-launch-qa-chrome'});
 const page = await browser.newPage();
 await page.setCacheEnabled(false);
 const routes = Object.keys(JSON.parse(fs.readFileSync('.next/server/app-paths-manifest.json'))).filter(x=>x.endsWith('/page')).map(x=>x.replace(/\/page$/,'')||'/').filter(x=>x!='/_not-found');
 const results=[]; const links=new Set(); const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,768,390,375,320]) {
  await page.setViewport({width,height:900});
  for(const route of routes) {
   const response=await page.goto('http://127.0.0.1:3100'+route,{waitUntil:'domcontentloaded'});
   await page.waitForNetworkIdle({idleTime:50});
   await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,10));}window.scrollTo(0,0);});
   const data=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,canonical:document.querySelector('link[rel=canonical]')?.href,links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),badButtons:[...document.querySelectorAll('a button')].length}));
   data.links.forEach(l=>{if(l.startsWith('/')&&!l.startsWith('//'))links.add(l.split('#')[0]);});
   delete data.links;results.push({width,route,status:response.status(),...data});
   if([390,1440].includes(width)&&['/','/platform','/contact','/industries','/microsoft','/training'].includes(route))await page.screenshot({path:`../qa-evidence/${width===390?'mobile':'desktop'}-${route==='/'?'home':route.slice(1)}.png`,fullPage:true});
  }
 }
 await page.setViewport({width:390,height:844});await page.goto('http://127.0.0.1:3100');await page.click('button[aria-controls="mobile-navigation"]');const menuOpen=await page.$('#mobile-navigation')!==null;await page.keyboard.press('Escape');const menuClosed=await page.$('#mobile-navigation')===null;
 const internal=[];for(const link of links){const r=await page.goto('http://127.0.0.1:3100'+link);internal.push({link,status:r.status()});}
 const forms=[];for(const route of ['/contact','/strategic-pilot','/reliability-assessment']){await page.goto('http://127.0.0.1:3100'+route);forms.push({route,emptyFormBlocked:await page.$eval('form',f=>!f.checkValidity())});}
 const report={results,internal,errors,menuOpen,menuClosed,forms};fs.writeFileSync('../qa-evidence/browser-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify({pages:results.length,issues:results.filter(r=>r.status>=400||r.overflow||r.h1!==1||r.badButtons),brokenLinks:internal.filter(l=>l.status>=400),errors,menuOpen,menuClosed,forms},null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
