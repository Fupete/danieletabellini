var P=Object.defineProperty;var $=(l,e,t)=>e in l?P(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var y=(l,e,t)=>($(l,typeof e!="symbol"?e+"":e,t),t);import{P as O}from"./PhotoSwipe-0117c151.js";import{P as x}from"./PhotoSwipeLightbox-36b1ec8a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();var D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(l,e){(function(t,s){s()})(D,function(){function t(i){var n=!0,u=!1,f=null,p={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(r){return!!(r&&r!==document&&r.nodeName!=="HTML"&&r.nodeName!=="BODY"&&"classList"in r&&"contains"in r.classList)}function g(r){var N=r.type,A=r.tagName;return!!(A==="INPUT"&&p[N]&&!r.readOnly||A==="TEXTAREA"&&!r.readOnly||r.isContentEditable)}function m(r){r.classList.contains("focus-visible")||(r.classList.add("focus-visible"),r.setAttribute("data-focus-visible-added",""))}function v(r){r.hasAttribute("data-focus-visible-added")&&(r.classList.remove("focus-visible"),r.removeAttribute("data-focus-visible-added"))}function b(r){r.metaKey||r.altKey||r.ctrlKey||(d(i.activeElement)&&m(i.activeElement),n=!0)}function h(r){n=!1}function c(r){d(r.target)&&(n||g(r.target))&&m(r.target)}function S(r){d(r.target)&&(r.target.classList.contains("focus-visible")||r.target.hasAttribute("data-focus-visible-added"))&&(u=!0,window.clearTimeout(f),f=window.setTimeout(function(){u=!1},100),v(r.target))}function k(r){document.visibilityState==="hidden"&&(u&&(n=!0),L())}function L(){document.addEventListener("mousemove",o),document.addEventListener("mousedown",o),document.addEventListener("mouseup",o),document.addEventListener("pointermove",o),document.addEventListener("pointerdown",o),document.addEventListener("pointerup",o),document.addEventListener("touchmove",o),document.addEventListener("touchstart",o),document.addEventListener("touchend",o)}function C(){document.removeEventListener("mousemove",o),document.removeEventListener("mousedown",o),document.removeEventListener("mouseup",o),document.removeEventListener("pointermove",o),document.removeEventListener("pointerdown",o),document.removeEventListener("pointerup",o),document.removeEventListener("touchmove",o),document.removeEventListener("touchstart",o),document.removeEventListener("touchend",o)}function o(r){r.target.nodeName&&r.target.nodeName.toLowerCase()==="html"||(n=!1,C())}document.addEventListener("keydown",b,!0),document.addEventListener("mousedown",h,!0),document.addEventListener("pointerdown",h,!0),document.addEventListener("touchstart",h,!0),document.addEventListener("visibilitychange",k,!0),L(),i.addEventListener("focus",c,!0),i.addEventListener("blur",S,!0),i.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&i.host?i.host.setAttribute("data-js-focus-visible",""):i.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window<"u"&&typeof document<"u"){window.applyFocusVisiblePolyfill=t;var s;try{s=new CustomEvent("focus-visible-polyfill-ready")}catch{s=document.createEvent("CustomEvent"),s.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(s)}typeof document<"u"&&t(document)})})();class w{constructor(){this.fetches={},this.responses={},this.urls={}}static normalizeUrl(e,t){return`${e}${e.endsWith("/")?"":"/"}`+(t.startsWith("/")?t.substr(1):t)}async fetchFromApi(e){this.fetches[e]||(this.fetches[e]=fetch(e));let t=await this.fetches[e];return this.responses[e]||(this.responses[e]=t.json()),await this.responses[e]}async fetchHash(e,t){if(this.urls[e])return this.urls[e][t]?this.urls[e][t].hash:!1;let s=w.normalizeUrl(e,"api/urls.json"),i=await this.fetchFromApi(s);return i[t]?i[t].hash:!1}async fetchData(e,t){let s=w.normalizeUrl(e,`api/${t}.json`);return this.fetchFromApi(s)}}const T=new w,a=class a extends HTMLElement{static register(e){customElements.define(e||"speedlify-score",a)}connectedCallback(){if(!(!("replaceSync"in CSSStyleSheet.prototype)||this.shadowRoot)){if(this.speedlifyUrl=this.getAttribute(a.attrs.speedlifyUrl),this.shorthash=this.getAttribute(a.attrs.hash),this.rawData=this.getAttribute(a.attrs.rawData),this.url=this.getAttribute(a.attrs.url)||window.location.href,!this.rawData&&!this.speedlifyUrl){console.error(`Missing \`${a.attrs.speedlifyUrl}\` attribute:`,this);return}this.init()}}_initTemplate(e,t=!1){if(this.shadowRoot&&!t)return;if(this.shadowRoot){this.shadowRoot.innerHTML=this.render(e);return}let s=this.attachShadow({mode:"open"}),i=new CSSStyleSheet;i.replaceSync(a.css),s.adoptedStyleSheets=[i];let n=document.createElement("template");n.innerHTML=this.render(e),s.appendChild(n.content.cloneNode(!0))}async init(){if(this.rawData){let i=JSON.parse(this.rawData);this._initTemplate(i);return}let e=this.shorthash,t=!1;if(e||(this._initTemplate(),t=!0,e=await T.fetchHash(this.speedlifyUrl,this.url)),!e){console.error(`<speedlify-score> could not find hash for URL (${this.url}):`,this);return}t||(this._initTemplate(),t=!0);let s=await T.fetchData(this.speedlifyUrl,e);this._initTemplate(s,t)}getScoreClass(e){return e===""||e===void 0?"circle":e<.5?"circle circle-bad":e<.9?"circle circle-ok":"circle circle-good"}getScoreHtml(e,t=""){return`<span title="${e}" class="${this.getScoreClass(t)}">${t?parseInt(t*100,10):"…"}</span>`}render(e={}){var u,f,p,d,g,m,v,b,h;let t=a.attrs,s=[];(!this.hasAttribute(t.requests)&&!this.hasAttribute(t.weight)&&!this.hasAttribute(t.rank)&&!this.hasAttribute(t.rankChange)||this.hasAttribute(t.score))&&(s.push(this.getScoreHtml("Performance",(u=e.lighthouse)==null?void 0:u.performance)),s.push(this.getScoreHtml("Accessibility",(f=e.lighthouse)==null?void 0:f.accessibility)),s.push(this.getScoreHtml("Best Practices",(p=e.lighthouse)==null?void 0:p.bestPractices)),s.push(this.getScoreHtml("SEO",(d=e.lighthouse)==null?void 0:d.seo)));let i=[],n=((m=(g=e.weight)==null?void 0:g.summary)==null?void 0:m.split(" • "))||[];if(this.hasAttribute(t.requests)&&n.length&&i.push(`<span class="requests">${n[0]}</span>`),this.hasAttribute(t.weight)&&n.length&&i.push(`<span class="weight">${n[1]}</span>`),this.hasAttribute(t.rank)){let c=this.getAttribute("rank-url");i.push(`<${c?`a href="${c}"`:"span"} class="rank">${(v=e.ranks)==null?void 0:v.cumulative}</${c?"a":"span"}>`)}if(this.hasAttribute(t.rankChange)&&e.previousRanks){let c=((b=e.previousRanks)==null?void 0:b.cumulative)-((h=e.ranks)==null?void 0:h.cumulative);i.push(`<span class="rank-change ${c>0?"up":c<0?"down":"same"}">${c!==0?Math.abs(c):""}</span>`)}return i.length&&s.push(`<span class="meta">${i.join("")}</span>`),s.join("")}};y(a,"attrs",{url:"url",speedlifyUrl:"speedlify-url",hash:"hash",rawData:"raw-data",requests:"requests",weight:"weight",rank:"rank",rankChange:"rank-change",score:"score"}),y(a,"css",`
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
	color: #088645;
	border-color: #0cce6b;
}
.circle-ok {
	color: #ffa400;
	border-color: currentColor;
}
.circle-bad {
	color: #ff4e42;
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
	color: green;
}
.rank-change.up:before {
	content: "⬆";
}
.rank-change.down {
	color: red;
}
.rank-change.down:before {
	content: "⬇";
}
`);let E=a;"customElements"in window&&"fetch"in window&&E.register();const M=document.querySelectorAll(".gallery");M.forEach(l=>{new x({zoomSVG:"",zoom:!1,closeSVG:"",arrowPrevSVG:"",arrowNextSVG:"",gallery:l,children:"a",showHideAnimationType:"zoom",pswpModule:O,bgOpacity:.9,preload:[1,1],padding:{top:48,bottom:48,left:16,right:16}}).init()});
//# sourceMappingURL=main-12ad6dd7.js.map
