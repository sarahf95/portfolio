"use strict";var precacheConfig=[["/index.html","d42dda2b2faf538803709e8204e43d60"],["/static/css/main.073826c5.css","a9c89bcb6c771715775f59eb71a98cae"],["/static/js/main.9c259866.js","90ab3053713d91baa8bfc853a0408612"],["/static/media/AmericanTypewriterRegular.940ace70.ttf","940ace70d6c766e685a20dea33762abf"],["/static/media/amazon-hover.fa88b608.png","fa88b60831eabec8917319515b701f6d"],["/static/media/amazon.0785fb00.png","0785fb00d664a0c3299be1ecc014ac48"],["/static/media/ampr-hover.1f6378be.png","1f6378be50a09d8c6e3be020da03c088"],["/static/media/ampr.42532aea.png","42532aea89b3971cf08c6ca91b9452e3"],["/static/media/caffeinade-hover.2da6c536.png","2da6c536df5363b5bf5b8a15b15148e7"],["/static/media/caffeinade.ba426229.png","ba4262298675ba5005b62c52b47d429e"],["/static/media/cross-out.a5610bbd.svg","a5610bbda000b93f49c0865a35ac6cbc"],["/static/media/email.5815b96a.png","5815b96a1ea52c577f3b005f2d424e47"],["/static/media/github.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/static/media/mealmatch-hover.39698f93.png","39698f93248a0099739f799a95b8ed6c"],["/static/media/mealmatch.65da35b1.png","65da35b1876488a9d17c8104986d88f6"],["/static/media/resume.b72ee36e.pdf","b72ee36ecf25ef90965fa27de6d13ec9"],["/static/media/yumme-hover.3b367596.png","3b367596fe84924ff41fdd04dd3472cf"],["/static/media/yumme.a84edbae.png","a84edbae3d8353153766f84ad1b7b773"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});