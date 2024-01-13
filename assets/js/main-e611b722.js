var Ae=Object.defineProperty;var ke=(y,s,n)=>s in y?Ae(y,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):y[s]=n;var X=(y,s,n)=>(ke(y,typeof s!="symbol"?s+"":s,n),n);import{P as $e}from"./PhotoSwipe-0117c151.js";import{P as Pe}from"./PhotoSwipeLightbox-36b1ec8a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function n(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=n(c);fetch(c.href,d)}})();class B{constructor(){this.fetches={},this.responses={},this.urls={}}static normalizeUrl(s,n){return`${s}${s.endsWith("/")?"":"/"}`+(n.startsWith("/")?n.substr(1):n)}async fetchFromApi(s){this.fetches[s]||(this.fetches[s]=fetch(s));let n=await this.fetches[s];return this.responses[s]||(this.responses[s]=n.json()),await this.responses[s]}async fetchHash(s,n){if(this.urls[s])return this.urls[s][n]?this.urls[s][n].hash:!1;let u=B.normalizeUrl(s,"api/urls.json"),c=await this.fetchFromApi(u);return c[n]?c[n].hash:!1}async fetchData(s,n){let u=B.normalizeUrl(s,`api/${n}.json`);return this.fetchFromApi(u)}}const pe=new B,v=class v extends HTMLElement{static register(s){customElements.define(s||"speedlify-score",v)}connectedCallback(){if(!(!("replaceSync"in CSSStyleSheet.prototype)||this.shadowRoot)){if(this.speedlifyUrl=this.getAttribute(v.attrs.speedlifyUrl),this.shorthash=this.getAttribute(v.attrs.hash),this.rawData=this.getAttribute(v.attrs.rawData),this.url=this.getAttribute(v.attrs.url)||window.location.href,!this.rawData&&!this.speedlifyUrl){console.error(`Missing \`${v.attrs.speedlifyUrl}\` attribute:`,this);return}this.init()}}_initTemplate(s,n=!1){if(this.shadowRoot&&!n)return;if(this.shadowRoot){this.shadowRoot.innerHTML=this.render(s);return}let u=this.attachShadow({mode:"open"}),c=new CSSStyleSheet;c.replaceSync(v.css),u.adoptedStyleSheets=[c];let d=document.createElement("template");d.innerHTML=this.render(s),u.appendChild(d.content.cloneNode(!0))}async init(){if(this.rawData){let c=JSON.parse(this.rawData);this._initTemplate(c);return}let s=this.shorthash,n=!1;if(s||(this._initTemplate(),n=!0,s=await pe.fetchHash(this.speedlifyUrl,this.url)),!s){console.error(`<speedlify-score> could not find hash for URL (${this.url}):`,this);return}n||(this._initTemplate(),n=!0);let u=await pe.fetchData(this.speedlifyUrl,s);this._initTemplate(u,n)}getScoreClass(s){return s===""||s===void 0?"circle":s<.5?"circle circle-bad":s<.9?"circle circle-ok":"circle circle-good"}getScoreHtml(s,n=""){return`<span title="${s}" class="${this.getScoreClass(n)}">${n?parseInt(n*100,10):"…"}</span>`}render(s={}){var x,M,S,A,k,I,L,C,E;let n=v.attrs,u=[];(!this.hasAttribute(n.requests)&&!this.hasAttribute(n.weight)&&!this.hasAttribute(n.rank)&&!this.hasAttribute(n.rankChange)||this.hasAttribute(n.score))&&(u.push(this.getScoreHtml("Performance",(x=s.lighthouse)==null?void 0:x.performance)),u.push(this.getScoreHtml("Accessibility",(M=s.lighthouse)==null?void 0:M.accessibility)),u.push(this.getScoreHtml("Best Practices",(S=s.lighthouse)==null?void 0:S.bestPractices)),u.push(this.getScoreHtml("SEO",(A=s.lighthouse)==null?void 0:A.seo)));let c=[],d=((I=(k=s.weight)==null?void 0:k.summary)==null?void 0:I.split(" • "))||[];if(this.hasAttribute(n.requests)&&d.length&&c.push(`<span class="requests">${d[0]}</span>`),this.hasAttribute(n.weight)&&d.length&&c.push(`<span class="weight">${d[1]}</span>`),this.hasAttribute(n.rank)){let f=this.getAttribute("rank-url");c.push(`<${f?`a href="${f}"`:"span"} class="rank">${(L=s.ranks)==null?void 0:L.cumulative}</${f?"a":"span"}>`)}if(this.hasAttribute(n.rankChange)&&s.previousRanks){let f=((C=s.previousRanks)==null?void 0:C.cumulative)-((E=s.ranks)==null?void 0:E.cumulative);c.push(`<span class="rank-change ${f>0?"up":f<0?"down":"same"}">${f!==0?Math.abs(f):""}</span>`)}return c.length&&u.push(`<span class="meta">${c.join("")}</span>`),u.join("")}};X(v,"attrs",{url:"url",speedlifyUrl:"speedlify-url",hash:"hash",rawData:"raw-data",requests:"requests",weight:"weight",rank:"rank",rankChange:"rank-change",score:"score"}),X(v,"css",`
:host {
	--_circle: var(--speedlify-circle);
	display: flex;
	align-items: center;
	gap: 0.375em; /* 6px /16 */
}
.circle {
	font-size: 0.8125em; /* 13px /16 */
	min-width: 2.6em;
	height: 2.6em;
	line-height: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 0.15384615em solid currentColor; /* 2px /13 */
	color: var(--_circle, #666);
}
.circle-good {
	color: #088846;
	border-color: currentColor;
}
.circle-ok {
	color: #A56900;
	border-color: currentColor;
}
.circle-bad {
	color: #EC0D00;
	border-color: currentColor;
}
.meta {
	display: flex;
	align-items: center;
	gap: 0.625em; /* 10px /16 */
}
.circle + .meta {
	margin-left: 0.25em; /* 4px /16 */
}
.rank:before {
	content: "Rank #";
}
.rank-change:before {
	line-height: 1;
}
.rank-change.up {
	color: #088846;
}
.rank-change.up:before {
	content: "⬆";
}
.rank-change.down {
	color: #EC0D00;
}
.rank-change.down:before {
	content: "⬇";
}
`);let Z=v;"customElements"in window&&"fetch"in window&&Z.register();/*!
 * iframemanager v1.2.5
 * Author Orest Bida
 * Released under the MIT License
 */(()=>{const y="click",s="{data-id}",n="accept",u="reject",c="c-h-n",d="c-h-b",x="show-ph";let M,S,A,k,I,L={},C={},E={},f="",j={},$=new Map,V="api";const be=["onload","onerror","src"],q=e=>typeof e=="function",N=e=>typeof e=="string",R=e=>S.createElement(e),T=()=>R("div"),ee=()=>{const e=R("button");return e.type="button",e},b=(e,t)=>e.className=t,D=(e,t)=>e.classList.add(t),g=(e,t)=>e.appendChild(t),W=e=>e&&Object.keys(e)||[],z=(e,t)=>{for(const r in t)Se(e,r,t[r])},we=e=>{const t=e.dataset,r={},o="data-iframe-",l=e.getAttributeNames().filter(m=>m.slice(0,12)===o).map(m=>m.slice(12)),i=e.querySelector("[data-placeholder]"),a=i&&i.hasAttribute("data-visible");a&&i.removeAttribute("data-visible");const h=i&&i.cloneNode(!0);for(const m of l)r[m]=e.getAttribute(o+m);return{t:t.id,o:t.title,i:t.thumbnail,l:t.params,u:e,m:null,v:i,p:h,h:null,_:!1,g:!1,$:!0,S:"widget"in t,T:a,I:r}},ye=(e,t)=>{const r=L[e];if("IntersectionObserver"in M){const o=new IntersectionObserver(l=>{for(const i of l)i.isIntersecting&&(ve(t,r[i.target.dataset.index]),o.unobserve(i.target))});for(const l of r)o.observe(l.u)}},ve=(e,t)=>{const r=o=>{t.h.style.backgroundImage=`url('${o}')`;const l=new Image;l.onload=()=>D(t.h,"loaded"),l.src=o};if(N(t.i))t.i!==""&&r(t.i);else if(q(e))e(t.t,o=>r(o));else if(N(e)){const o=e.replace(s,t.t);r(o)}},te=(e,t)=>{if(e._)return;if(e._=!0,e.v){const a=e.p.cloneNode(!0);e.v.replaceWith(a),e.v=a}const r=t.iframe;if(q(t.onAccept))return void t.onAccept(e.u,a=>{if(!(a instanceof HTMLIFrameElement))return!1;z(a,r),z(a,e.I),e.P=a,e._=!0,D(e.u,d),(!e.T||e.S)&&D(e.u,x)});e.P=R("iframe");const o=t.iframe,l=e.l||o&&o.params;let i=(t.embedUrl||"").replace(s,e.t);e.o&&(e.P.title=e.o),l&&N(l)&&(i+=l.slice(0,1)==="?"?l:`?${l}`),e.P.onload=()=>{D(e.u,d),e.P.onload=void 0,q(r&&r.onload)&&r.onload(e.t,e.P)},z(e.P,r),z(e.P,e.I),e.P.src=i,g(e.m,e.P)},Se=(e,t,r)=>{be.includes(t)||e.setAttribute(t,r)},re=e=>{D(e.u,c),e.$=!1},se=e=>{e.u.classList.remove(c,d,x),e.$=!0},J=e=>(e=S.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]+)`))?e.pop():"",ie=(e,t,r)=>{const o=L[e],l=t.languages;o.forEach(i=>{if(!i.g&&l){const a=l[f],h=a&&a.loadBtn,m=a&&a.notice,p=a&&a.loadAllBtn,P=S.createElement("div"),O=T(),H=T(),Y=T(),F=T();b(P,"cll"),i.m=P;const ue=()=>{re(i),te(i,t)};if(h){const w=ee();w.textContent=h,b(w,"c-l-b"),w.addEventListener(y,ue),g(F,w)}if(p){const w=ee();w.textContent=p,b(w,h?"c-la-b":"c-l-b"),w.addEventListener(y,()=>{ue(),V=y,le.acceptService(e)}),g(F,w)}const G=T(),K=T(),de=T(),Q=T(),_=T();b(G,"cc-text"),b(Q,"c-bg-i"),i.h=Q,b(de,"c-ld"),N(i.i)&&i.i===""||b(K,"c-bg");const me=i.o,fe=S.createDocumentFragment();if(me){const w=R("span");b(w,"c-tl"),w.insertAdjacentHTML("beforeend",me),g(fe,w)}g(G,fe),O&&G.insertAdjacentHTML("beforeend",m||""),g(H,G),b(_,"c-t-cn"),b(H,"c-n-t"),b(Y,"c-n-c"),b(O,"c-nt"),b(F,"c-n-a"),g(_,H),(h||p)&&g(_,F),g(Y,_),g(O,Y),g(K,Q),g(P,O),(t.thumbnailUrl||i.i)&&g(P,K),g(P,de),r&&D(i.u,c),i.u.prepend(P),i.g=!0,setTimeout(()=>D(i.u,"c-an"),20)}})},ne=(e,t)=>{const r=L[e];r.forEach(o=>{o._||((l,i)=>{C[i]||(C[i]=new IntersectionObserver(a=>{if(E[i])C[i].disconnect();else for(let h=0;h<a.length;++h)a[h].isIntersecting&&(m=>{const p=a[m].target,P=p.dataset.index;te(r[P],t),setTimeout(()=>{re(r[P])},50*m),C[i].unobserve(p)})(h)})),C[i].observe(l)})(o.u,e)})},oe=(e,t)=>e in t?e:W(t).length>0?f in t?f:W(t)[0]:void 0,ae=(e,t)=>{const{cookie:r}=t;J(r.name)||(o=>{const{hostname:l,protocol:i}=location,a=o.name,h=new Date,m=o.path||"/",p=864e5*(o.expiration||182),P=o.sameSite||"Lax",O=o.domain||l;h.setTime(h.getTime()+p);let H=a+"=1"+(p!==0?`; Expires=${h.toUTCString()}`:"")+`; Path=${m}; SameSite=${P}`;O.indexOf(".")>-1&&(H+=`; Domain=${O}`),i==="https:"&&(H+="; Secure"),S.cookie=H})(r),ne(e,t)},ce=(e,t)=>{const{cookie:r}=t;J(r.name)&&(o=>{const l=o.name,i=o.path||"/",a=o.domain||location.hostname;S.cookie=`${l}=; Path=${i}; Domain=${a}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`})(r),((o,l)=>{const i=L[o];for(let a=0;a<i.length;a++)(h=>{var m;i[h]._&&(q(l.onReject)?(l.onReject(i[h].P,i[h].u,()=>se(i[h])),i[h]._=!1):((m=i[h]).P&&m.P.remove(),m._=!1)),se(i[h])})(a)})(e,t)},U=(e,t,r)=>{q(I)&&I({eventSource:{type:V,service:e,action:t},changedServices:r})},le={acceptService:e=>{const t=[];if(e==="all"){for(const r of k)E[r]=!1,$.get(r)||($.set(r,!0),ae(r,j[r]),t.push(r));t.length>0&&U(e,n,t)}else k.includes(e)&&(E[e]=!1,$.get(e)||($.set(e,!0),ae(e,j[e]),t.push(e),U(e,n,t)));V="api"},rejectService:e=>{const t=[];if(e==="all"){for(const r of k)E[r]=!0,ce(r,j[r]),$.get(r)&&($.set(r,!1),t.push(r));t.length>0&&U(e,u,t)}else k.includes(e)&&(E[e]=!0,ce(e,j[e]),$.get(e)&&($.set(e,!1),t.push(e),U(e,u,t)))},childExists:async({parent:e=M,childProperty:t,childSelector:r="iframe",timeout:o=1e3,maxTimeout:l=15e3})=>{let i=1;const a=t?()=>e[t]:()=>e.querySelector(r);return new Promise(h=>{const m=()=>{if(a()||i++*o>l)return h(a()!==void 0);setTimeout(m,o)};m()})},getState:()=>({services:new Map($),acceptedServices:[...$].filter(([,e])=>!!e).map(([e])=>e)}),getConfig:()=>A,run:e=>{if(S=document,M=window,A=e,j=A.services,I=A.onChange,k=W(j),k.length===0)return;f=A.currLang;const t=j[k[0]].languages;A.autoLang===!0?f=oe(navigator.language.slice(0,2).toLowerCase(),t):N(A.currLang)&&(f=oe(A.currLang,t));for(const r of k){const o=j[r],l=o.cookie=o.cookie||{},i=l.name=l.name||`im_${r}`,a=J(i);$.set(r,!!a),L[r]=[];const h=S.querySelectorAll(`div[data-service="${r}"]`),m=h.length;if(m!==0){for(let p=0;p<m;p++)h[p].dataset.index=p,L[r].push(we(h[p]));a?(ie(r,o,!0),ne(r,o)):ie(r,o,!1),ye(r,o.thumbnailUrl)}}}},he="iframemanager";typeof window>"u"||q(window[he])||(window[he]=()=>le)})();const ge=iframemanager();ge.run({currLang:document.documentElement.lang,services:{youtube:{embedUrl:"https://www.youtube-nocookie.com/embed/{data-id}",thumbnailUrl:"https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg",iframe:{allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;"},languages:{en:{notice:'Accept YouTube cookies to play the video.<br />Learn more about the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms">terms and conditions of youtube.com</a>',loadBtn:"Accept and load"},it:{notice:'Accetta i cookie di Youtube per riprodurre il video.<br />Scopri di più sui <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms">termini e le condizioni di youtube.com</a>',loadBtn:"Accetta e carica"}}}}});ge.rejectService("all");const xe=document.querySelectorAll(".gallery");xe.forEach(y=>{new Pe({zoomSVG:"",zoom:!1,closeSVG:"",arrowPrevSVG:"",arrowNextSVG:"",gallery:y,children:"a",showHideAnimationType:"zoom",pswpModule:$e,bgOpacity:.9,preload:[1,1],padding:{top:48,bottom:48,left:16,right:16}}).init()});
//# sourceMappingURL=main-e611b722.js.map
