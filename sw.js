const V='rg-a7dd7c6552';
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(['./','manifest.json','icon.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const net=r=>{const a=new AbortController();setTimeout(()=>a.abort(),3000);return fetch(r,{signal:a.signal})};
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(net(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./'))))});
