var lt=Object.defineProperty;var ut=(n,e,t)=>e in n?lt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ge=(n,e,t)=>ut(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();class oe{constructor(){this.fetches={},this.responses={},this.urls={}}static normalizeUrl(e,t){return`${e}${e.endsWith("/")?"":"/"}`+(t.startsWith("/")?t.substr(1):t)}async fetchFromApi(e){this.fetches[e]||(this.fetches[e]=fetch(e));let t=await this.fetches[e];return this.responses[e]||(this.responses[e]=t.json()),await this.responses[e]}async fetchHash(e,t){if(this.urls[e])return this.urls[e][t]?this.urls[e][t].hash:!1;let i=oe.normalizeUrl(e,"api/urls.json"),a=await this.fetchFromApi(i);return a[t]?a[t].hash:!1}async fetchData(e,t){let i=oe.normalizeUrl(e,`api/${t}.json`);return this.fetchFromApi(i)}}const Ge=new oe,S=class S extends HTMLElement{static register(e){customElements.define(e||"speedlify-score",S)}connectedCallback(){if(!(!("replaceSync"in CSSStyleSheet.prototype)||this.shadowRoot)){if(this.speedlifyUrl=this.getAttribute(S.attrs.speedlifyUrl),this.shorthash=this.getAttribute(S.attrs.hash),this.rawData=this.getAttribute(S.attrs.rawData),this.url=this.getAttribute(S.attrs.url)||window.location.href,!this.rawData&&!this.speedlifyUrl){console.error(`Missing \`${S.attrs.speedlifyUrl}\` attribute:`,this);return}this.init()}}_initTemplate(e,t=!1){if(this.shadowRoot&&!t)return;if(this.shadowRoot){this.shadowRoot.innerHTML=this.render(e);return}let i=this.attachShadow({mode:"open"}),a=new CSSStyleSheet;a.replaceSync(S.css),i.adoptedStyleSheets=[a];let s=document.createElement("template");s.innerHTML=this.render(e),i.appendChild(s.content.cloneNode(!0))}async init(){if(this.rawData){let a=JSON.parse(this.rawData);this._initTemplate(a);return}let e=this.shorthash,t=!1;if(e||(this._initTemplate(),t=!0,e=await Ge.fetchHash(this.speedlifyUrl,this.url)),!e){console.error(`<speedlify-score> could not find hash for URL (${this.url}):`,this);return}t||(this._initTemplate(),t=!0);let i=await Ge.fetchData(this.speedlifyUrl,e);this._initTemplate(i,t)}getScoreClass(e){return e===""||e===void 0?"circle":e<.5?"circle circle-bad":e<.9?"circle circle-ok":"circle circle-good"}getScoreHtml(e,t=""){return`<span title="${e}" class="${this.getScoreClass(t)}">${t?parseInt(t*100,10):"…"}</span>`}render(e={}){var d,f,E,c,u,m,v,b,y,P;let t=S.attrs,i=[];(!this.hasAttribute(t.requests)&&!this.hasAttribute(t.weight)&&!this.hasAttribute(t.rank)&&!this.hasAttribute(t.rankChange)||this.hasAttribute(t.score))&&(i.push(this.getScoreHtml("Performance",(d=e.lighthouse)==null?void 0:d.performance)),i.push(this.getScoreHtml("Accessibility",(f=e.lighthouse)==null?void 0:f.accessibility)),i.push(this.getScoreHtml("Best Practices",(E=e.lighthouse)==null?void 0:E.bestPractices)),i.push(this.getScoreHtml("SEO",(c=e.lighthouse)==null?void 0:c.seo)));let a=[],s=((m=(u=e.weight)==null?void 0:u.summary)==null?void 0:m.split(" • "))||[];if(this.hasAttribute(t.requests)&&s.length&&a.push(`<span class="requests">${s[0]}</span>`),this.hasAttribute(t.weight)&&s.length&&a.push(`<span class="weight">${s[1]}</span>`),(v=e.ranks)!=null&&v.cumulative){if(this.hasAttribute(t.rank)){let C=this.getAttribute("rank-url");a.push(`<${C?`a href="${C}"`:"span"} class="rank">${(b=e.ranks)==null?void 0:b.cumulative}</${C?"a":"span"}>`)}if(this.hasAttribute(t.rankChange)&&e.previousRanks){let C=((y=e.previousRanks)==null?void 0:y.cumulative)-((P=e.ranks)==null?void 0:P.cumulative);a.push(`<span class="rank-change ${C>0?"up":C<0?"down":"same"}">${C!==0?Math.abs(C):""}</span>`)}}return a.length&&i.push(`<span class="meta">${a.join("")}</span>`),i.join("")}};ge(S,"attrs",{url:"url",speedlifyUrl:"speedlify-url",hash:"hash",rawData:"raw-data",requests:"requests",weight:"weight",rank:"rank",rankChange:"rank-change",score:"score"}),ge(S,"css",`
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
	color: var(--_circle, #088846);
	border-color: var(--_circle, #0cce6b);
}
.circle-ok {
	color: var(--_circle, #A56900);
	border-color: var(--_circle, currentColor);
}
.circle-bad {
	color: var(--_circle, #EC0D00);
	border-color: var(--_circle, currentColor);
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
`);let ve=S;"customElements"in window&&"fetch"in window&&ve.register();/*!
 * iframemanager v1.3.0
 * Author Orest Bida
 * Released under the MIT License
 */(()=>{const n="api",e="click",t="{data-id}",i="accept",a="reject",s="c-h-n",d="c-h-b",f="show-ph";let E,c,u,m,v={},b={},y={},P={},C="",V={},D=[],A=new Map,q=n;const nt=["onload","onerror","src","params"],G=r=>typeof r=="function",U=r=>typeof r=="string",J=r=>c.createElement(r),L=()=>J("div"),be=()=>{const r=J("button");return r.type="button",r},I=(r,o)=>r.className=o,H=(r,o)=>r.classList.add(o),O=(r,o)=>r.appendChild(o),le=r=>r&&Object.keys(r)||[],Z=(r,o)=>{for(const l in o)ot(r,l,o[l])},it=r=>{const o=r.dataset,l={},g="data-iframe-",_=r.getAttributeNames().filter(R=>R.slice(0,12)===g).map(R=>R.slice(12)),h=r.querySelector("[data-placeholder]"),T=h&&h.hasAttribute("data-visible");T&&h.removeAttribute("data-visible");const p=h&&h.cloneNode(!0);for(const R of _)l[R]=r.getAttribute(g+R);return{t:o.id,o:o.title,i:o.thumbnail,l:o.params,v:r,u:null,m:h,p,h:null,_:!1,$:!1,S:!0,T:"widget"in o,I:T,P:l}},at=(r,o)=>{const l=v[r];"IntersectionObserver"in E&&(g=>{y[g]=new IntersectionObserver(_=>{for(const h of _)h.isIntersecting&&(st(o,l[h.target.dataset.index]),y[g].unobserve(h.target))});for(const _ of l)y[g].observe(_.v)})(r)},st=(r,o)=>{const l=g=>{o.h.style.backgroundImage=`url('${g}')`;const _=new Image;_.onload=()=>H(o.h,"loaded"),_.src=g};if(U(o.i))o.i!==""&&l(o.i);else if(G(r))r(o.t,g=>l(g));else if(U(r)){const g=r.replace(t,o.t);l(g)}},Re=(r,o)=>{if(r._)return;if(r._=!0,r.m){const p=r.p.cloneNode(!0);r.m.replaceWith(p),r.m=p}const l=o.iframe;if(G(o.onAccept))return void o.onAccept(r.v,p=>{if(!(p instanceof HTMLIFrameElement))return!1;Z(p,l),Z(p,r.P),r.D=p,r._=!0,H(r.v,d),(!r.I||r.T)&&H(r.v,f)});r.D=J("iframe");const g=o.iframe,_=r.l||g&&g.params;let h=o.embedUrl||"";G(h)&&(h=String(h()));let T=h.replace(t,r.t);r.o&&(r.D.title=r.o),_&&U(_)&&(T+=_.slice(0,1)==="?"?_:`?${_}`),r.D.onload=()=>{H(r.v,d),r.D.onload=void 0,G(l&&l.onload)&&l.onload(r.t,r.D)},Z(r.D,l),Z(r.D,r.P),r.D.src=T,O(r.u,r.D)},ot=(r,o,l)=>{nt.includes(o)||r.setAttribute(o,l)},ye=r=>{H(r.v,s),r.S=!1},Ce=r=>{r.v.classList.remove(s,d,f),r.S=!0},ue=r=>(r=c.cookie.match(`(^|;)\\s*${r}\\s*=\\s*([^;]+)`))?r.pop():"",we=(r,o,l)=>{const g=v[r],_=o.languages;g.forEach(h=>{if(!h.$&&_){const T=_[C],p=T&&T.loadBtn,R=T&&(T.notice||"").replace(t,h.t),w=T&&T.loadAllBtn,B=c.createElement("div"),k=L(),F=L(),de=L(),Q=L();I(B,"cll"),h.u=B;const De=()=>{ye(h),Re(h,o)};if(p){const N=be();N.textContent=p,I(N,"c-l-b"),N.addEventListener(e,De),O(Q,N)}if(w){const N=be();N.textContent=w,I(N,p?"c-la-b":"c-l-b"),N.addEventListener(e,()=>{De(),q=e,Ae.acceptService(r)}),O(Q,N)}const X=L(),fe=L(),Be=L(),he=L(),ee=L();I(X,"cc-text"),I(he,"c-bg-i"),h.h=he,I(Be,"c-ld"),U(h.i)&&h.i===""||I(fe,"c-bg");const Ve=h.o,Le=c.createDocumentFragment();if(Ve){const N=J("span");I(N,"c-tl"),N.insertAdjacentHTML("beforeend",Ve),O(Le,N)}O(X,Le),k&&X.insertAdjacentHTML("beforeend",R||""),O(F,X),I(ee,"c-t-cn"),I(F,"c-n-t"),I(de,"c-n-c"),I(k,"c-nt"),I(Q,"c-n-a"),O(ee,F),(p||w)&&O(ee,Q),O(de,ee),O(k,de),O(fe,he),O(B,k),(o.thumbnailUrl||h.i)&&O(B,fe),O(B,Be),l&&H(h.v,s),h.v.prepend(B),h.$=!0,setTimeout(()=>H(h.v,"c-an"),20)}})},Oe=(r,o)=>{const l=v[r];l.forEach(g=>{g._||((_,h)=>{b[h]||(b[h]=new IntersectionObserver(T=>{if(P[h])b[h].disconnect();else for(let p=0;p<T.length;++p)T[p].isIntersecting&&(R=>{const w=T[R].target,B=w.dataset.index;Re(l[B],o),setTimeout(()=>{ye(l[B])},50*R),b[h].unobserve(w)})(p)})),b[h].observe(_)})(g.v,r)})},Pe=(r,o)=>r in o?r:le(o).length>0?C in o?C:le(o)[0]:void 0,Ie=(r,o)=>{const{cookie:l}=o;ue(l.name)||(g=>{const{hostname:_,protocol:h}=location,T=g.name,p=new Date,R=g.path||"/",w=864e5*(g.expiration||182),B=g.sameSite||"Lax",k=g.domain||_;p.setTime(p.getTime()+w);let F=T+"=1"+(w!==0?`; Expires=${p.toUTCString()}`:"")+`; Path=${R}; SameSite=${B}`;k.indexOf(".")>-1&&(F+=`; Domain=${k}`),h==="https:"&&(F+="; Secure"),c.cookie=F})(l),Oe(r,o)},Ne=(r,o)=>{const{cookie:l}=o;ue(l.name)&&(g=>{const _=g.name,h=g.path||"/",T=g.domain||location.hostname;c.cookie=`${_}=; Path=${h}; Domain=${T}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`})(l),((g,_)=>{const h=v[g];for(let T=0;T<h.length;T++)(p=>{var R;h[p]._&&(G(_.onReject)?(_.onReject(h[p].D,h[p].v,()=>Ce(h[p])),h[p]._=!1):((R=h[p]).D&&R.D.remove(),R._=!1)),Ce(h[p])})(T)})(r,o)},z=(r,o,l)=>{G(m)&&m({eventSource:{type:q,service:r,action:o},changedServices:l})},ct=r=>{if(r.hasAttribute("data-service")){r.removeAttribute("class"),r.removeAttribute("data-index");for(const o of r.children)o.hasAttribute("data-placeholder")||o.remove()}},Ae={acceptService:r=>{const o=[];if(r==="all"){for(const l of D)P[l]=!1,A.get(l)||(A.set(l,!0),Ie(l,V[l]),o.push(l));o.length>0&&z(r,i,o)}else D.includes(r)&&(P[r]=!1,A.get(r)||(A.set(r,!0),Ie(r,V[r]),o.push(r),z(r,i,o)));q=n},rejectService:r=>{const o=[];if(r==="all"){for(const l of D)P[l]=!0,Ne(l,V[l]),A.get(l)&&(A.set(l,!1),o.push(l));o.length>0&&z(r,a,o)}else D.includes(r)&&(P[r]=!0,Ne(r,V[r]),A.get(r)&&(A.set(r,!1),o.push(r),z(r,a,o)))},childExists:async({parent:r=E,childProperty:o,childSelector:l="iframe",timeout:g=1e3,maxTimeout:_=15e3})=>{let h=1;const T=o?()=>r[o]:()=>r.querySelector(l);return new Promise(p=>{const R=()=>{if(T()||h++*g>_)return p(T()!==void 0);setTimeout(R,g)};R()})},getState:()=>({services:new Map(A),acceptedServices:[...A].filter(([,r])=>!!r).map(([r])=>r)}),getConfig:()=>u,reset:r=>{if(r)for(const o of D)for(const l of v[o])ct(l.v);(()=>{var o,l;for(const g of D)(o=b[g])==null||o.disconnect(),(l=y[g])==null||l.disconnect(),delete b[g],delete y[g];b={},y={},P={}})(),E=void 0,c=void 0,u=void 0,m=void 0,v={},C="",V={},D=[],A=new Map,q=n,window._imRun=!1},run:r=>{if(window._imRun||(c=document,E=window,u=r,V=u.services,m=u.onChange,D=le(V),D.length===0))return;C=u.currLang;const o=V[D[0]].languages;u.autoLang===!0?C=Pe(navigator.language.slice(0,2).toLowerCase(),o):U(u.currLang)&&(C=Pe(u.currLang,o));for(const l of D){const g=V[l],_=g.cookie=g.cookie||{},h=_.name=_.name||`im_${l}`,T=ue(h);A.set(l,!!T),v[l]=[];const p=c.querySelectorAll(`div[data-service="${l}"]`),R=p.length;if(R!==0){for(let w=0;w<R;w++)p[w].dataset.index=w,v[l].push(it(p[w]));T?(we(l,g,!0),Oe(l,g)):we(l,g,!1),at(l,g.thumbnailUrl)}}window._imRun=!0}},Se="iframemanager";typeof window>"u"||G(window[Se])||(window[Se]=()=>Ae)})();const dt=519,ft=475,ht=0,He=72e-12,gt=429e-12,mt=152e-12,Et=884e-12,me=(gt+mt+Et)/3;class pt{constructor(e){this.allowRatings=!1,this.options=e,this.KWH_PER_BYTE_FOR_NETWORK=me}perByte(e,t){if(e<1)return 0;if(t){const a=e*He*ht,s=e*me*ft;return a+s}const i=He+me;return e*i*dt}}var ke=pt;const vt=1e3*1e3*1e3;var _e={GIGABYTE:vt};const _t={AFG:132.53,AFRICA:547.83,ALB:24.29,DZA:634.61,ASM:611.11,AGO:174.73,ATG:611.11,ARG:353.96,ARM:264.54,ABW:561.22,ASEAN:570.43,ASIA:591.02,AUS:556.3,AUT:110.14,AZE:671.39,BHS:660.1,BHR:904.62,BGD:691.41,BRB:605.51,BLR:441.74,BEL:138.11,BLZ:225.81,BEN:584.07,BTN:23.33,BOL:531.69,BIH:600.94,BWA:847.91,BRA:96.4,BRN:893.91,BGR:335.33,BFA:467.53,BDI:250,CPV:558.14,KHM:417.71,CMR:305.42,CAN:165.15,CYM:642.86,CAF:0,TCD:628.57,CHL:291.11,CHN:583.61,COL:259.51,COM:642.86,COG:700,COD:24.46,COK:250,CRI:53.38,CIV:393.89,HRV:202.68,CUB:637.61,CYP:526.02,CZE:449.72,DNK:151.65,DJI:692.31,DMA:529.41,DOM:578.41,ECU:166.91,EGY:574.04,SLV:224.76,GNQ:591.84,ERI:631.58,EST:416.67,SWZ:172.41,ETH:24.64,EU:243.55,EUROPE:302.09,FLK:500,FRO:404.76,FJI:288.46,FIN:79.39,FRA:56.02,GUF:217.82,PYF:442.86,G20:477.79,G7:341.49,GAB:491.6,GMB:666.67,GEO:167.59,DEU:381.41,GHA:484,GRC:336.57,GRL:178.57,GRD:640,GLP:500,GUM:622.86,GTM:328.27,GIN:236.84,GNB:625,GUY:640.35,HTI:567.31,HND:282.27,HKG:699.5,HUN:204.01,ISL:27.68,IND:713.01,IDN:682.43,IRN:641.73,IRQ:688.81,IRL:283.71,ISR:582.93,ITA:330.72,JAM:555.56,JPN:493.59,JOR:540.92,KAZ:821.9,KEN:71.2,KIR:666.67,XKX:894.65,KWT:649.16,KGZ:147.29,LAO:265.51,"LATIN AMERICA AND CARIBBEAN":259.77,LVA:123.99,LBN:599.01,LSO:20,LBR:227.85,LBY:818.69,LTU:160.07,LUX:105.26,MAC:448.98,MDG:436.44,MWI:66.67,MYS:607.88,MDV:611.77,MLI:408,MLT:444.03,MTQ:523.18,MRT:464.71,MUS:632.48,MEX:492.34,"MIDDLE EAST":643.04,MDA:643.46,MNG:775.31,MNE:418.09,MSR:1e3,MAR:624.45,MOZ:135.65,MMR:440.37,NAM:59.26,NRU:750,NPL:24.44,NLD:268.48,NCL:660.58,NZL:112.76,NIC:265.12,NER:670.89,NGA:523.25,"NORTH AMERICA":343.03,PRK:389.59,MKD:539.55,NOR:30.05,OCEANIA:495.74,OECD:341.25,OMN:564.55,PAK:440.61,PSE:516.13,PAN:161.68,PNG:507.25,PRY:24.31,PER:266.48,POL:661.93,PRT:164.86,PRI:677.96,QAT:602.5,REU:572.82,ROU:238.65,RUS:445.02,RWA:316.33,KNA:636.36,LCA:666.67,SPM:600,VCT:529.41,WSM:473.68,STP:642.86,SAU:696.31,SEN:511.6,SRB:648.2,SYC:564.52,SLE:50,SGP:470.87,SVK:116.77,SVN:230.87,SLB:700,SOM:578.95,ZAF:709.69,KOR:432.11,SSD:629.03,ESP:172.2,LKA:509.78,SDN:263.16,SUR:349.28,SWE:40.77,CHE:29.56,SYR:701.66,TWN:644.36,TJK:116.86,TZA:339.25,THA:549.85,PHL:610.74,TGO:443.18,TON:625,TTO:681.53,TUN:563.96,TUR:464.59,TKM:1306.03,TCA:653.85,UGA:44.53,UKR:256.21,ARE:492.7,GBR:228.25,USA:369.53,URY:128.79,UZB:1167.6,VUT:571.43,VEN:185.8,VNM:472.47,VGB:647.06,VIR:632.35,WORLD:481.6,YEM:566.1,ZMB:111.97,ZWE:297.87},Tt="average";var Te={data:_t,type:Tt};const bt=.81,Fe=.52,$e=.14,Me=.15,We=.19,$=Te.data.WORLD,Rt=50,ie=.75,ae=.25,se=.02,ze={OPERATIONAL_KWH_PER_GB_DATACENTER:.055,OPERATIONAL_KWH_PER_GB_NETWORK:.059,OPERATIONAL_KWH_PER_GB_DEVICE:.08,EMBODIED_KWH_PER_GB_DATACENTER:.012,EMBODIED_KWH_PER_GB_NETWORK:.013,EMBODIED_KWH_PER_GB_DEVICE:.081,GLOBAL_GRID_INTENSITY:494},yt={FIFTH_PERCENTILE:.095,TENTH_PERCENTILE:.186,TWENTIETH_PERCENTILE:.341,THIRTIETH_PERCENTILE:.493,FORTIETH_PERCENTILE:.656,FIFTIETH_PERCENTILE:.846},M={FIFTH_PERCENTILE:.04,TENTH_PERCENTILE:.079,TWENTIETH_PERCENTILE:.145,THIRTIETH_PERCENTILE:.209,FORTIETH_PERCENTILE:.278,FIFTIETH_PERCENTILE:.359},Ct=ze.GLOBAL_GRID_INTENSITY,Y=n=>parseFloat(n.toFixed(2)),W=(n,e)=>n<=e;function Qe(n={},e=3,t=!1){const i=e===4?Ct:$;if(typeof n!="object")throw new Error("Options must be an object");const a={};function s(d,f){var E,c;f||f===0?typeof f=="object"?(Te.data[(E=f.country)==null?void 0:E.toUpperCase()]||(console.warn(`"${f.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information. 
Falling back to global average grid intensity.`),a.gridIntensity[d]={value:i}),a.gridIntensity[d]={country:f.country,value:parseFloat(Te.data[(c=f.country)==null?void 0:c.toUpperCase()])}):typeof f=="number"?a.gridIntensity[d]={value:f}:(a.gridIntensity[d]={value:i},console.warn(`The ${d} grid intensity must be a number or an object. You passed in a ${typeof f}. 
Falling back to global average grid intensity.`)):a.gridIntensity[d]={value:i}}if(n!=null&&n.gridIntensity){a.gridIntensity={};const{device:d,dataCenter:f,network:E}=n.gridIntensity;s("device",d),s("dataCenter",f),s("network",E)}else a.gridIntensity={device:{value:i},dataCenter:{value:i},network:{value:i}};return n!=null&&n.greenHostingFactor||n.greenHostingFactor===0&&e===4?typeof n.greenHostingFactor=="number"?n.greenHostingFactor>=0&&n.greenHostingFactor<=1?a.greenHostingFactor=n.greenHostingFactor:(a.greenHostingFactor=0,console.warn(`The returnVisitPercentage option must be a number between 0 and 1. You passed in ${n.returnVisitPercentage}. 
Falling back to default value.`)):(a.greenHostingFactor=0,console.warn(`The returnVisitPercentage option must be a number. You passed in a ${typeof n.returnVisitPercentage}. 
Falling back to default value.`)):e===4&&(a.greenHostingFactor=0),t&&(a.greenHostingFactor=1),a}function wt(n={},e=3,t=!1){if(typeof n!="object")throw new Error("Options must be an object");const i=Qe(n,e,t);return n!=null&&n.dataReloadRatio||n.dataReloadRatio===0?typeof n.dataReloadRatio=="number"?n.dataReloadRatio>=0&&n.dataReloadRatio<=1?i.dataReloadRatio=n.dataReloadRatio:(i.dataReloadRatio=e===3?se:0,console.warn(`The dataReloadRatio option must be a number between 0 and 1. You passed in ${n.dataReloadRatio}. 
Falling back to default value.`)):(i.dataReloadRatio=e===3?se:0,console.warn(`The dataReloadRatio option must be a number. You passed in a ${typeof n.dataReloadRatio}. 
Falling back to default value.`)):(i.dataReloadRatio=e===3?se:0,console.warn(`The dataReloadRatio option must be a number. You passed in a ${typeof n.dataReloadRatio}. 
Falling back to default value.`)),n!=null&&n.firstVisitPercentage||n.firstVisitPercentage===0?typeof n.firstVisitPercentage=="number"?n.firstVisitPercentage>=0&&n.firstVisitPercentage<=1?i.firstVisitPercentage=n.firstVisitPercentage:(i.firstVisitPercentage=e===3?ie:1,console.warn(`The firstVisitPercentage option must be a number between 0 and 1. You passed in ${n.firstVisitPercentage}. 
Falling back to default value.`)):(i.firstVisitPercentage=e===3?ie:1,console.warn(`The firstVisitPercentage option must be a number. You passed in a ${typeof n.firstVisitPercentage}. 
Falling back to default value.`)):(i.firstVisitPercentage=e===3?ie:1,console.warn(`The firstVisitPercentage option must be a number. You passed in a ${typeof n.firstVisitPercentage}. 
Falling back to default value.`)),n!=null&&n.returnVisitPercentage||n.returnVisitPercentage===0?typeof n.returnVisitPercentage=="number"?n.returnVisitPercentage>=0&&n.returnVisitPercentage<=1?i.returnVisitPercentage=n.returnVisitPercentage:(i.returnVisitPercentage=e===3?ae:0,console.warn(`The returnVisitPercentage option must be a number between 0 and 1. You passed in ${n.returnVisitPercentage}. 
Falling back to default value.`)):(i.returnVisitPercentage=e===3?ae:0,console.warn(`The returnVisitPercentage option must be a number. You passed in a ${typeof n.returnVisitPercentage}. 
Falling back to default value.`)):(i.returnVisitPercentage=e===3?ae:0,console.warn(`The returnVisitPercentage option must be a number. You passed in a ${typeof n.returnVisitPercentage}. 
Falling back to default value.`)),i}function Xe(n,e){let{FIFTH_PERCENTILE:t,TENTH_PERCENTILE:i,TWENTIETH_PERCENTILE:a,THIRTIETH_PERCENTILE:s,FORTIETH_PERCENTILE:d,FIFTIETH_PERCENTILE:f}=yt;return e===4&&(t=M.FIFTH_PERCENTILE,i=M.TENTH_PERCENTILE,a=M.TWENTIETH_PERCENTILE,s=M.THIRTIETH_PERCENTILE,d=M.FORTIETH_PERCENTILE,f=M.FIFTIETH_PERCENTILE),W(n,t)?"A+":W(n,i)?"A":W(n,a)?"B":W(n,s)?"C":W(n,d)?"D":W(n,f)?"E":"F"}var Ot=Object.defineProperty,Pt=Object.defineProperties,It=Object.getOwnPropertyDescriptors,je=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,Ke=(n,e,t)=>e in n?Ot(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,te=(n,e)=>{for(var t in e||(e={}))Nt.call(e,t)&&Ke(n,t,e[t]);if(je)for(var t of je(e))At.call(e,t)&&Ke(n,t,e[t]);return n},re=(n,e)=>Pt(n,It(e));let St=class{constructor(e){this.allowRatings=!0,this.options=e,this.version=3}energyPerByteByComponent(e){const i=e/_e.GIGABYTE*bt;return{consumerDeviceEnergy:i*Fe,networkEnergy:i*$e,productionEnergy:i*We,dataCenterEnergy:i*Me}}co2byComponent(e,t=$,i={}){let a=$,s=$,d=$,f=$;if(i!=null&&i.gridIntensity){const{device:c,network:u,dataCenter:m}=i.gridIntensity;(c!=null&&c.value||(c==null?void 0:c.value)===0)&&(a=c.value),(u!=null&&u.value||(u==null?void 0:u.value)===0)&&(s=u.value),(m!=null&&m.value||(m==null?void 0:m.value)===0)&&(d=m.value)}t===!0&&(d=Rt);const E={};for(const[c,u]of Object.entries(e))c.startsWith("dataCenterEnergy")?E[c.replace("Energy","CO2")]=u*d:c.startsWith("consumerDeviceEnergy")?E[c.replace("Energy","CO2")]=u*a:c.startsWith("networkEnergy")?E[c.replace("Energy","CO2")]=u*s:E[c.replace("Energy","CO2")]=u*f;return E}perByte(e,t=!1,i=!1,a=!1,s={}){e<1&&(e=0);const d=this.energyPerByteByComponent(e,s);if(typeof t!="boolean")throw new Error(`perByte expects a boolean for the carbon intensity value. Received: ${t}`);const f=this.co2byComponent(d,t,s),c=Object.values(f).reduce((m,v)=>m+v);let u=null;return a&&(u=this.ratingScale(c)),i?a?re(te({},f),{total:c,rating:u}):re(te({},f),{total:c}):a?{total:c,rating:u}:c}perVisit(e,t=!1,i=!1,a=!1,s={}){const d=this.energyPerVisitByComponent(e,s);if(typeof t!="boolean")throw new Error(`perVisit expects a boolean for the carbon intensity value. Received: ${t}`);const f=this.co2byComponent(d,t,s),c=Object.values(f).reduce((m,v)=>m+v);let u=null;return a&&(u=this.ratingScale(c)),i?a?re(te({},f),{total:c,rating:u}):re(te({},f),{total:c}):a?{total:c,rating:u}:c}energyPerByte(e){const t=this.energyPerByteByComponent(e);return Object.values(t).reduce((a,s)=>a+s)}energyPerVisitByComponent(e,t={},i=ie,a=ae,s=se){(t.dataReloadRatio||t.dataReloadRatio===0)&&(s=t.dataReloadRatio),(t.firstVisitPercentage||t.firstVisitPercentage===0)&&(i=t.firstVisitPercentage),(t.returnVisitPercentage||t.returnVisitPercentage===0)&&(a=t.returnVisitPercentage);const d=this.energyPerByteByComponent(e),f={};Object.values(d);for(const[E,c]of Object.entries(d))f[`${E} - first`]=c*i,f[`${E} - subsequent`]=c*a*s;return f}energyPerVisit(e){let t=0,i=0;const a=Object.entries(this.energyPerVisitByComponent(e));for(const[s,d]of a)s.indexOf("first")>0&&(t+=d);for(const[s,d]of a)s.indexOf("subsequent")>0&&(i+=d);return t+i}emissionsPerVisitInGrams(e,t=$){return Y(e*t)}annualEnergyInKwh(e,t=1e3){return e*t*12}annualEmissionsInGrams(e,t=1e3){return e*t*12}annualSegmentEnergy(e){return{consumerDeviceEnergy:Y(e*Fe),networkEnergy:Y(e*$e),dataCenterEnergy:Y(e*Me),productionEnergy:Y(e*We)}}ratingScale(e){return Xe(e,this.version)}};var Ee=St,Dt=Object.defineProperty,Bt=Object.defineProperties,Vt=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,Ye=(n,e,t)=>e in n?Dt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,j=(n,e)=>{for(var t in e||(e={}))Lt.call(e,t)&&Ye(n,t,e[t]);if(Ue)for(var t of Ue(e))Gt.call(e,t)&&Ye(n,t,e[t]);return n},x=(n,e)=>Bt(n,Vt(e));const{OPERATIONAL_KWH_PER_GB_DATACENTER:Ht,OPERATIONAL_KWH_PER_GB_NETWORK:kt,OPERATIONAL_KWH_PER_GB_DEVICE:Ft,EMBODIED_KWH_PER_GB_DATACENTER:$t,EMBODIED_KWH_PER_GB_NETWORK:Mt,EMBODIED_KWH_PER_GB_DEVICE:Wt,GLOBAL_GRID_INTENSITY:K}=ze;function xe(n,e){const t=n.dataCenter+n.network+n.device,i=e.dataCenter+e.network+e.device,a=n.dataCenter+e.dataCenter,s=n.network+e.network,d=n.device+e.device;return{dataCenterOperationalCO2e:n.dataCenter,networkOperationalCO2e:n.network,consumerDeviceOperationalCO2e:n.device,dataCenterEmbodiedCO2e:e.dataCenter,networkEmbodiedCO2e:e.network,consumerDeviceEmbodiedCO2e:e.device,totalEmbodiedCO2e:i,totalOperationalCO2e:t,dataCenterCO2e:a,networkCO2e:s,consumerDeviceCO2e:d}}function qe(n,e){return n?1:e!=null&&e.greenHostingFactor||(e==null?void 0:e.greenHostingFactor)===0?e.greenHostingFactor:0}class jt{constructor(e){this.allowRatings=!0,this.options=e,this.version=4}operationalEnergyPerSegment(e){const t=e/_e.GIGABYTE,i=t*Ht,a=t*kt,s=t*Ft;return{dataCenter:i,network:a,device:s}}operationalEmissions(e,t={}){const{dataCenter:i,network:a,device:s}=this.operationalEnergyPerSegment(e);let d=K,f=K,E=K;if(t!=null&&t.gridIntensity){const{device:v,network:b,dataCenter:y}=t.gridIntensity;(v!=null&&v.value||(v==null?void 0:v.value)===0)&&(E=v.value),(b!=null&&b.value||(b==null?void 0:b.value)===0)&&(f=b.value),(y!=null&&y.value||(y==null?void 0:y.value)===0)&&(d=y.value)}const c=i*d,u=a*f,m=s*E;return{dataCenter:c,network:u,device:m}}embodiedEnergyPerSegment(e){const t=e/_e.GIGABYTE,i=t*$t,a=t*Mt,s=t*Wt;return{dataCenter:i,network:a,device:s}}embodiedEmissions(e){const{dataCenter:t,network:i,device:a}=this.embodiedEnergyPerSegment(e),s=K,d=K,f=K,E=t*s,c=i*d,u=a*f;return{dataCenter:E,network:c,device:u}}perByte(e,t=!1,i=!1,a=!1,s={}){if(e<1)return 0;const d=this.operationalEmissions(e,s),f=this.embodiedEmissions(e),E=qe(t,s),c={dataCenter:d.dataCenter*(1-E)+f.dataCenter,network:d.network+f.network,device:d.device+f.device},u=c.dataCenter+c.network+c.device;let m=null;if(a&&(m=this.ratingScale(u)),i){const v=j({},xe(d,f));return a?x(j({},v),{total:u,rating:m}):x(j({},v),{total:u})}return a?{total:u,rating:m}:u}perVisit(e,t=!1,i=!1,a=!1,s={}){let d=1,f=0,E=0;const c=qe(t,s),u=this.operationalEmissions(e,s),m=this.embodiedEmissions(e);if(e<1)return 0;(s.firstVisitPercentage||s.firstVisitPercentage===0)&&(d=s.firstVisitPercentage),(s.returnVisitPercentage||s.returnVisitPercentage===0)&&(f=s.returnVisitPercentage),(s.dataReloadRatio||s.dataReloadRatio===0)&&(E=s.dataReloadRatio);const v=u.dataCenter*(1-c)+m.dataCenter+u.network+m.network+u.device+m.device,b=(u.dataCenter*(1-c)+m.dataCenter+u.network+m.network+u.device+m.device)*(1-E),y=v*d+b*f;let P=null;if(a&&(P=this.ratingScale(y)),i){const C=x(j({},xe(u,m)),{firstVisitCO2e:v,returnVisitCO2e:b});return a?x(j({},C),{total:y,rating:P}):x(j({},C),{total:y})}return a?{total:y,rating:P}:y}ratingScale(e){return Xe(e,this.version)}}var Je=jt,Kt=Object.defineProperty,ce=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,Ze=(n,e,t)=>e in n?Kt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ne=(n,e)=>{for(var t in e||(e={}))et.call(e,t)&&Ze(n,t,e[t]);if(ce)for(var t of ce(e))tt.call(e,t)&&Ze(n,t,e[t]);return n},pe=(n,e)=>{var t={};for(var i in n)et.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&ce)for(var i of ce(n))e.indexOf(i)<0&&tt.call(n,i)&&(t[i]=n[i]);return t};class Ut{constructor(e){if(this.model=new Ee,(e==null?void 0:e.model)==="1byte")this.model=new ke;else if((e==null?void 0:e.model)==="swd")this.model=new Ee,(e==null?void 0:e.version)===4&&(this.model=new Je);else if(e!=null&&e.model)throw new Error(`"${e.model}" is not a valid model. Please use "1byte" for the OneByte model, and "swd" for the Sustainable Web Design model.
See https://developers.thegreenwebfoundation.org/co2js/models/ to learn more about the models available in CO2.js.`);if(e!=null&&e.rating&&typeof e.rating!="boolean")throw new Error(`The rating option must be a boolean. Please use true or false.
See https://developers.thegreenwebfoundation.org/co2js/options/ to learn more about the options available in CO2.js.`);const t=!!this.model.allowRatings;if(this._segment=(e==null?void 0:e.results)==="segment",this._rating=(e==null?void 0:e.rating)===!0,!t&&this._rating)throw new Error(`The rating system is not supported in the model you are using. Try using the Sustainable Web Design model instead.
See https://developers.thegreenwebfoundation.org/co2js/models/ to learn more about the models available in CO2.js.`)}perByte(e,t=!1){return this.model.perByte(e,t,this._segment,this._rating)}perVisit(e,t=!1){var i;if((i=this.model)!=null&&i.perVisit)return this.model.perVisit(e,t,this._segment,this._rating);throw new Error(`The perVisit() method is not supported in the model you are using. Try using perByte() instead.
See https://developers.thegreenwebfoundation.org/co2js/methods/ to learn more about the methods available in CO2.js.`)}perByteTrace(e,t=!1,i={}){const a=Qe(i,this.model.version,t),f=pe(a,["gridIntensity"]),E=pe(f,["dataReloadRatio","firstVisitPercentage","returnVisitPercentage"]);return{co2:this.model.perByte(e,t,this._segment,this._rating,a),green:t,variables:ne({description:"Below are the variables used to calculate this CO2 estimate.",bytes:e,gridIntensity:ne({description:"The grid intensity (grams per kilowatt-hour) used to calculate this CO2 estimate."},a.gridIntensity)},E)}}perVisitTrace(e,t=!1,i={}){var a;if((a=this.model)!=null&&a.perVisit){const s=wt(i,this.model.version,t),d=s,f=pe(d,["gridIntensity"]);return{co2:this.model.perVisit(e,t,this._segment,this._rating,s),green:t,variables:ne({description:"Below are the variables used to calculate this CO2 estimate.",bytes:e,gridIntensity:ne({description:"The grid intensity (grams per kilowatt-hour) used to calculate this CO2 estimate."},s.gridIntensity)},f)}}else throw new Error(`The perVisitTrace() method is not supported in the model you are using. Try using perByte() instead.
See https://developers.thegreenwebfoundation.org/co2js/methods/ to learn more about the methods available in CO2.js.`)}SustainableWebDesignV3(){return new Ee}SustainableWebDesignV4(){return new Je}OneByte(){return new ke}}var Yt=Ut,xt=Object.getOwnPropertyNames,qt=(n,e)=>function(){return e||(0,n[xt(n)[0]])((e={exports:{}}).exports,e),e.exports},Jt=qt({"src/hosting-json.js"(n,e){async function t(c,u){return typeof c=="string"?i(c,u):s(c,u)}function i(c,u){return u.indexOf(c)>-1}function a(c){return Object.entries(c).filter(([v,b])=>b.green).map(([v,b])=>b.url)}function s(c,u){let m=[];for(let v of c)u.indexOf(v)>-1&&m.push(v);return m}function d(c,u){return typeof c=="string"?f(c,u):E(c,u)}function f(c,u){return u.indexOf(c)>-1?c:{url:c,green:!1}}function E(c,u){const m={};for(let v of c)m[v]=f(v,u);return m}e.exports={check:t,greenDomainsFromResults:a,find:d}}});Jt();const Zt=new Yt;function zt(n){return n.replace(/(\d+)+(\.(\d+))?\s?(k|m|g|t)?b?/i,function(e,t,i,a,s){return parseFloat(t+(i||""))*({K:1024,M:1<<20,G:1<<30,T:256}[s]||1)}).replace(/[^\d.-]/g,"")}async function Qt(){await new Promise(e=>setTimeout(e,1e3));const n=document.getElementsByTagName("speedlify-score");if(n.length){const e=n[0].shadowRoot.childNodes[4].childNodes[0].firstChild.data,t=zt(e),i=Zt.perVisit(t,!1),a=`You consume an average of ${i.toFixed(3)} grams of CO2 to view this page.`,s=`Consumi in media ${i.toFixed(3)} grammi di CO2 per visualizzare questa pagina.`;let d;document.documentElement.lang=="en"?d=a:d=s;const f=document.createTextNode(d);document.getElementsByClassName("estimatedCo2")[0].appendChild(f)}}Qt();const rt=iframemanager();rt.run({currLang:document.documentElement.lang,services:{youtube:{embedUrl:"https://www.youtube-nocookie.com/embed/{data-id}",thumbnailUrl:"https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg",iframe:{allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;"},languages:{en:{notice:'Accept YouTube cookies to play the video.<br />Learn more about the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms">terms and conditions of youtube.com</a>',loadBtn:"Accept and load"},it:{notice:'Accetta i cookie di Youtube per riprodurre il video.<br />Scopri di più sui <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms">termini e le condizioni di youtube.com</a>',loadBtn:"Accetta e carica"}}}}});rt.rejectService("all");
//# sourceMappingURL=main-Cj270YXF.js.map
