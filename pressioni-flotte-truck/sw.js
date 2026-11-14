// MATE Pressioni Truck - cache per l'uso offline (prima la rete, poi la cache)
const C='mate-pressioni-v3';
const FILES=['./','./index.html','./jspdf.umd.min.js','./logo-mate-bianco.svg','./logo-mate-nero.svg','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||!e.request.url.startsWith(self.location.origin))return;
  const rete=fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r});
  const attesa=new Promise(res=>setTimeout(res,3500));
  e.respondWith((async()=>{
    const cached=await caches.match(e.request,{ignoreSearch:true});
    try{
      if(cached){const r=await Promise.race([rete,attesa]);return r||cached}
      return await rete;
    }catch(err){return cached||caches.match('./index.html')}
  })());
});
