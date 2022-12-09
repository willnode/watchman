(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Ye(){}function ny(i){return i()}function Nv(){return Object.create(null)}function Nn(i){i.forEach(ny)}function iy(i){return typeof i=="function"}function ci(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function AI(i){return Object.keys(i).length===0}function NI(i,...e){if(i==null)return Ye;const n=i.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function U(i,e){i.appendChild(e)}function Me(i,e,n){i.insertBefore(e,n||null)}function Pe(i){i.parentNode.removeChild(i)}function Dd(i,e){for(let n=0;n<i.length;n+=1)i[n]&&i[n].d(e)}function re(i){return document.createElement(i)}function nt(i){return document.createTextNode(i)}function Se(){return nt(" ")}function ry(){return nt("")}function qt(i,e,n,s){return i.addEventListener(e,n,s),()=>i.removeEventListener(e,n,s)}function ie(i,e,n){n==null?i.removeAttribute(e):i.getAttribute(e)!==n&&i.setAttribute(e,n)}function PI(i){return Array.from(i.childNodes)}function Ni(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function Qn(i,e,n){i.classList[n?"add":"remove"](e)}let jo;function Po(i){jo=i}function sy(){if(!jo)throw new Error("Function called outside component initialization");return jo}function na(i){sy().$$.on_mount.push(i)}function oh(i){sy().$$.on_destroy.push(i)}const Ro=[],Pv=[],xl=[],Ov=[],OI=Promise.resolve();let Ld=!1;function DI(){Ld||(Ld=!0,OI.then(oy))}function xd(i){xl.push(i)}const md=new Set;let Al=0;function oy(){const i=jo;do{for(;Al<Ro.length;){const e=Ro[Al];Al++,Po(e),LI(e.$$)}for(Po(null),Ro.length=0,Al=0;Pv.length;)Pv.pop()();for(let e=0;e<xl.length;e+=1){const n=xl[e];md.has(n)||(md.add(n),n())}xl.length=0}while(Ro.length);for(;Ov.length;)Ov.pop()();Ld=!1,md.clear(),Po(i)}function LI(i){if(i.fragment!==null){i.update(),Nn(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(xd)}}const Ml=new Set;let Pi;function Nl(){Pi={r:0,c:[],p:Pi}}function Pl(){Pi.r||Nn(Pi.c),Pi=Pi.p}function Ve(i,e){i&&i.i&&(Ml.delete(i),i.i(e))}function vt(i,e,n,s){if(i&&i.o){if(Ml.has(i))return;Ml.add(i),Pi.c.push(()=>{Ml.delete(i),s&&(n&&i.d(1),s())}),i.o(e)}else s&&s()}function as(i){i&&i.c()}function Gi(i,e,n,s){const{fragment:a,after_update:c}=i.$$;a&&a.m(e,n),s||xd(()=>{const u=i.$$.on_mount.map(ny).filter(iy);i.$$.on_destroy?i.$$.on_destroy.push(...u):Nn(u),i.$$.on_mount=[]}),c.forEach(xd)}function zi(i,e){const n=i.$$;n.fragment!==null&&(Nn(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xI(i,e){i.$$.dirty[0]===-1&&(Ro.push(i),DI(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function qi(i,e,n,s,a,c,u,f=[-1]){const p=jo;Po(i);const m=i.$$={fragment:null,ctx:[],props:c,update:Ye,not_equal:a,bound:Nv(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:Nv(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};u&&u(m.root);let b=!1;if(m.ctx=n?n(i,e.props||{},(v,I,...S)=>{const A=S.length?S[0]:I;return m.ctx&&a(m.ctx[v],m.ctx[v]=A)&&(!m.skip_bound&&m.bound[v]&&m.bound[v](A),b&&xI(i,v)),I}):[],m.update(),b=!0,Nn(m.before_update),m.fragment=s?s(m.ctx):!1,e.target){if(e.hydrate){const v=PI(e.target);m.fragment&&m.fragment.l(v),v.forEach(Pe)}else m.fragment&&m.fragment.c();e.intro&&Ve(i.$$.fragment),Gi(i,e.target,e.anchor,e.customElement),oy()}Po(p)}class Ki{$destroy(){zi(this,1),this.$destroy=Ye}$on(e,n){if(!iy(n))return Ye;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}$set(e){this.$$set&&!AI(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(i,e){if(!i)throw ls(e)},ls=function(i){return new Error("Firebase Database ("+ay.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},MI=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],u=i[n++],f=i[n++],p=((a&7)<<18|(c&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=i[n++],u=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|u&63)}}return e.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],u=a+1<i.length,f=u?i[a+1]:0,p=a+2<i.length,m=p?i[a+2]:0,b=c>>2,v=(c&3)<<4|f>>4;let I=(f&15)<<2|m>>6,S=m&63;p||(S=64,u||(I=64)),s.push(n[b],n[v],n[I],n[S])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ly(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):MI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],f=a<i.length?n[i.charAt(a)]:0;++a;const m=a<i.length?n[i.charAt(a)]:64;++a;const v=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||f==null||m==null||v==null)throw Error();const I=c<<2|f>>4;if(s.push(I),m!==64){const S=f<<4&240|m>>2;if(s.push(S),v!==64){const A=m<<6&192|v;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},cy=function(i){const e=ly(i);return ah.encodeByteArray(e,!0)},jl=function(i){return cy(i).replace(/\./g,"")},Wl=function(i){try{return ah.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(i){return Wo(void 0,i)}function Wo(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UI(n)||(i[n]=Wo(i[n],e[n]));return i}function UI(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function uy(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BI(){return typeof self=="object"&&self.self===self}function dy(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function cc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hy(){const i=$e();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function fy(){return ay.NODE_ADMIN===!0}function Hl(){return typeof indexedDB=="object"}function jI(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function WI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=()=>WI().__FIREBASE_DEFAULTS__,VI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i=process.env.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},$I=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Wl(i[1]);return e&&JSON.parse(e)},ch=()=>{try{return HI()||VI()||$I()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},py=i=>{var e,n;return(n=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},GI=i=>{const e=py(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zI=()=>{var i;return(i=ch())===null||i===void 0?void 0:i.config},my=i=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i),f="";return[jl(JSON.stringify(n)),jl(JSON.stringify(u)),f].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="FirebaseError";class Et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=KI,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],u=c?YI(c,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new Et(a,f,s)}}function YI(i,e){return i.replace(JI,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const JI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(i){return JSON.parse(i)}function it(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=function(i){let e={},n={},s={},a="";try{const c=i.split(".");e=Ho(Wl(c[0])||""),n=Ho(Wl(c[1])||""),a=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},XI=function(i){const e=gy(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QI=function(i){const e=gy(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function es(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Md(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Vl(i,e,n){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(n,i[a],a,i));return s}function $l(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],u=e[a];if(Dv(c)&&Dv(u)){if(!$l(c,u))return!1}else if(c!==u)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Dv(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gr(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function Ao(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const I=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(I<<1|I>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,b;for(let v=0;v<80;v++){v<40?v<20?(m=f^c&(u^f),b=1518500249):(m=c^u^f,b=1859775393):v<60?(m=c&u|f&(c|u),b=2400959708):(m=c^u^f,b=3395469782);const I=(a<<5|a>>>27)+m+p+b+s[v]&4294967295;p=f,f=u,u=(c<<30|c>>>2)&4294967295,c=a,a=I}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const c=this.buf_;let u=this.inbuf_;for(;a<n;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(c),u=0;break}}else for(;a<n;)if(c[u]=e[a],++u,++a,u===this.blockSize){this.compress_(c),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[a]>>c&255,++s;return e}}function vy(i,e){const n=new eE(i,e);return n.subscribe.bind(n)}class eE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=gd),a.error===void 0&&(a.error=gd),a.complete===void 0&&(a.complete=gd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function gd(){}function uh(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const c=a-55296;s++,O(s<i.length,"Surrogate pair missing trail surrogate.");const u=i.charCodeAt(s)-56320;a=65536+(c<<10)+u}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},dc=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(i){return i&&i._delegate?i._delegate:i}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new uc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&u.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const u=this.instances.get(a);return u&&e(u,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(i){return i===Ri?void 0:i}function sE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=[];var pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(pe||(pe={}));const _y={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},aE=pe.INFO,lE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},cE=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=lE[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=cE,this._userLogHandler=null,dh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function uE(i){dh.forEach(e=>{e.setLogLevel(i)})}function dE(i,e){for(const n of dh){let s=null;e&&e.level&&(s=_y[e.level]),i===null?n.userLogHandler=null:n.userLogHandler=(a,c,...u)=>{const f=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");c>=(s!=null?s:a.logLevel)&&i({level:pe[c].toLowerCase(),message:f,args:u,type:a.name})}}}const hE=(i,e)=>e.some(n=>i instanceof n);let Lv,xv;function fE(){return Lv||(Lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pE(){return xv||(xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,Fd=new WeakMap,by=new WeakMap,vd=new WeakMap,hh=new WeakMap;function mE(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",u)},c=()=>{n(ti(i.result)),a()},u=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&yy.set(n,i)}).catch(()=>{}),hh.set(e,i),e}function gE(i){if(Fd.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",u),i.removeEventListener("abort",u)},c=()=>{n(),a()},u=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",u),i.addEventListener("abort",u)});Fd.set(i,e)}let Ud={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Fd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||by.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function vE(i){Ud=i(Ud)}function _E(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(_d(this),e,...n);return by.set(s,e.sort?e.sort():[e]),ti(s)}:pE().includes(i)?function(...e){return i.apply(_d(this),e),ti(yy.get(this))}:function(...e){return ti(i.apply(_d(this),e))}}function yE(i){return typeof i=="function"?_E(i):(i instanceof IDBTransaction&&gE(i),hE(i,fE())?new Proxy(i,Ud):i)}function ti(i){if(i instanceof IDBRequest)return mE(i);if(vd.has(i))return vd.get(i);const e=yE(i);return e!==i&&(vd.set(i,e),hh.set(e,i)),e}const _d=i=>hh.get(i);function bE(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const u=indexedDB.open(i,e),f=ti(u);return s&&u.addEventListener("upgradeneeded",p=>{s(ti(u.result),p.oldVersion,p.newVersion,ti(u.transaction))}),n&&u.addEventListener("blocked",()=>n()),f.then(p=>{c&&p.addEventListener("close",()=>c()),a&&p.addEventListener("versionchange",()=>a())}).catch(()=>{}),f}const wE=["get","getKey","getAll","getAllKeys","count"],IE=["put","add","delete","clear"],yd=new Map;function Mv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=IE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||wE.includes(n)))return;const c=async function(u,...f){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),a&&p.done]))[0]};return yd.set(e,c),c}vE(i=>({...i,get:(e,n,s)=>Mv(e,n)||i.get(e,n,s),has:(e,n)=>!!Mv(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function CE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",Fv="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new hc("@firebase/app"),SE="@firebase/app-compat",TE="@firebase/analytics-compat",kE="@firebase/analytics",RE="@firebase/app-check-compat",AE="@firebase/app-check",NE="@firebase/auth",PE="@firebase/auth-compat",OE="@firebase/database",DE="@firebase/database-compat",LE="@firebase/functions",xE="@firebase/functions-compat",ME="@firebase/installations",FE="@firebase/installations-compat",UE="@firebase/messaging",BE="@firebase/messaging-compat",jE="@firebase/performance",WE="@firebase/performance-compat",HE="@firebase/remote-config",VE="@firebase/remote-config-compat",$E="@firebase/storage",GE="@firebase/storage-compat",zE="@firebase/firestore",qE="@firebase/firestore-compat",KE="firebase",YE="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]",JE={[Bd]:"fire-core",[SE]:"fire-core-compat",[kE]:"fire-analytics",[TE]:"fire-analytics-compat",[AE]:"fire-app-check",[RE]:"fire-app-check-compat",[NE]:"fire-auth",[PE]:"fire-auth-compat",[OE]:"fire-rtdb",[DE]:"fire-rtdb-compat",[LE]:"fire-fn",[xE]:"fire-fn-compat",[ME]:"fire-iid",[FE]:"fire-iid-compat",[UE]:"fire-fcm",[BE]:"fire-fcm-compat",[jE]:"fire-perf",[WE]:"fire-perf-compat",[HE]:"fire-rc",[VE]:"fire-rc-compat",[$E]:"fire-gcs",[GE]:"fire-gcs-compat",[zE]:"fire-fst",[qE]:"fire-fst-compat","fire-js":"fire-js",[KE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Map,Vo=new Map;function Gl(i,e){try{i.container.addComponent(e)}catch(n){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function wy(i,e){i.container.addOrOverwriteComponent(e)}function si(i){const e=i.name;if(Vo.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,i);for(const n of ri.values())Gl(n,i);return!0}function ia(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function XE(i,e,n=ii){ia(i,e).clearInstance(n)}function QE(){Vo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new Yi("app","Firebase",ZE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=YE;function fc(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ii,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw En.create("bad-app-name",{appName:String(a)});if(n||(n=zI()),!n)throw En.create("no-options");const c=ri.get(a);if(c){if($l(n,c.options)&&$l(s,c.config))return c;throw En.create("duplicate-app",{appName:a})}const u=new oE(a);for(const p of Vo.values())u.addComponent(p);const f=new eC(n,s,u);return ri.set(a,f),f}function fh(i=ii){const e=ri.get(i);if(!e&&i===ii)return fc();if(!e)throw En.create("no-app",{appName:i});return e}function tC(){return Array.from(ri.values())}async function Iy(i){const e=i.name;ri.has(e)&&(ri.delete(e),await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function Xt(i,e,n){var s;let a=(s=JE[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),u=e.match(/\s|\//);if(c||u){const f=[`Unable to register library "${a}" with version "${e}":`];c&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(f.join(" "));return}si(new Tn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function Ey(i,e){if(i!==null&&typeof i!="function")throw En.create("invalid-log-argument");dE(i,e)}function Cy(i){uE(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-heartbeat-database",iC=1,$o="firebase-heartbeat-store";let bd=null;function Sy(){return bd||(bd=bE(nC,iC,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore($o)}}}).catch(i=>{throw En.create("idb-open",{originalErrorMessage:i.message})})),bd}async function rC(i){var e;try{return(await Sy()).transaction($o).objectStore($o).get(Ty(i))}catch(n){if(n instanceof Et)Bi.warn(n.message);else{const s=En.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bi.warn(s.message)}}}async function Uv(i,e){var n;try{const a=(await Sy()).transaction($o,"readwrite");return await a.objectStore($o).put(e,Ty(i)),a.done}catch(s){if(s instanceof Et)Bi.warn(s.message);else{const a=En.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Bi.warn(a.message)}}}function Ty(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1024,oC=30*24*60*60*1e3;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=oC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bv(),{heartbeatsToSend:n,unsentEntries:s}=lC(this._heartbeatsCache.heartbeats),a=jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Bv(){return new Date().toISOString().substring(0,10)}function lC(i,e=sC){const n=[];let s=i.slice();for(const a of i){const c=n.find(u=>u.agent===a.agent);if(c){if(c.dates.push(a.date),jv(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),jv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hl()?jI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function jv(i){return jl(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(i){si(new Tn("platform-logger",e=>new EE(e),"PRIVATE")),si(new Tn("heartbeat",e=>new aC(e),"PRIVATE")),Xt(Bd,Fv,i),Xt(Bd,Fv,"esm2017"),Xt("fire-js","")}uC("");const dC=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Xi,_DEFAULT_ENTRY_NAME:ii,_addComponent:Gl,_addOrOverwriteComponent:wy,_apps:ri,_clearComponents:QE,_components:Vo,_getProvider:ia,_registerComponent:si,_removeServiceInstance:XE,deleteApp:Iy,getApp:fh,getApps:tC,initializeApp:fc,onLog:Ey,registerVersion:Xt,setLogLevel:Cy,FirebaseError:Et},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this._delegate=e,this.firebase=n,Gl(e,new Tn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Iy(this._delegate)))}_getService(e,n=ii){var s;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((s=a.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:n})}_removeServiceInstance(e,n=ii){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Gl(this._delegate,e)}_addOrOverwriteComponent(e){wy(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Wv=new Yi("app-compat","Firebase",fC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(i){const e={},n={__esModule:!0,initializeApp:c,app:a,registerVersion:Xt,setLogLevel:Cy,onLog:Ey,apps:null,SDK_VERSION:Xi,INTERNAL:{registerComponent:f,removeApp:s,useAsService:p,modularAPIs:dC}};n.default=n,Object.defineProperty(n,"apps",{get:u});function s(m){delete e[m]}function a(m){if(m=m||ii,!en(e,m))throw Wv.create("no-app",{appName:m});return e[m]}a.App=i;function c(m,b={}){const v=fc(m,b);if(en(e,v.name))return e[v.name];const I=new i(v,n);return e[v.name]=I,I}function u(){return Object.keys(e).map(m=>e[m])}function f(m){const b=m.name,v=b.replace("-compat","");if(si(m)&&m.type==="PUBLIC"){const I=(S=a())=>{if(typeof S[v]!="function")throw Wv.create("invalid-app-argument",{appName:b});return S[v]()};m.serviceProps!==void 0&&Wo(I,m.serviceProps),n[v]=I,i.prototype[v]=function(...S){return this._getService.bind(this,b).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?n[v]:null}function p(m,b){return b==="serverAuth"?null:b}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(){const i=pC(hC);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:ky,extendNamespace:e,createSubscribe:vy,ErrorFactory:Yi,deepExtend:Wo});function e(n){Wo(i,n)}return i}const mC=ky();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new hc("@firebase/app-compat"),gC="@firebase/app-compat",vC="0.1.37";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(i){Xt(gC,vC,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(BI()&&self.firebase!==void 0){Hv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const i=self.firebase.SDK_VERSION;i&&i.indexOf("LITE")>=0&&Hv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const F=mC;_C();var yC="firebase",bC="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */F.registerVersion(yC,bC,"app-compat");function ph(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}const wo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Ry(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IC=wC,EC=Ry,Ay=new Yi("auth","Firebase",Ry());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new hc("@firebase/auth");function Fl(i,...e){Vv.logLevel<=pe.ERROR&&Vv.error(`Auth (${Xi}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(i,...e){throw mh(i,...e)}function dt(i,...e){return mh(i,...e)}function Ny(i,e,n){const s=Object.assign(Object.assign({},EC()),{[e]:n});return new Yi("auth","Firebase",s).create(e,{appName:i.name})}function cs(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rt(i,"argument-error"),Ny(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mh(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Ay.create(i,...e)}function P(i,e,...n){if(!i)throw mh(e,...n)}function hn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Fl(e),new Error(e)}function tn(i,e){i||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new Map;function xt(i){tn(i instanceof Function,"Expected a class definition");let e=$v.get(i);return e?(tn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,$v.set(i,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(i,e){const n=ia(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if($l(c,e!=null?e:{}))return a;rt(a,"already-initialized")}return n.initialize({options:e})}function SC(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function gh(){return Gv()==="http:"||Gv()==="https:"}function Gv(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gh()||dy()||"connection"in navigator)?navigator.onLine:!0}function kC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=lh()||cc()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(i,e){tn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new ra(3e4,6e4);function Je(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ot(i,e,n,s,a={}){return Oy(i,a,async()=>{let c={},u={};s&&(e==="GET"?u=s:c={body:JSON.stringify(s)});const f=Ji(Object.assign({key:i.config.apiKey},u)).slice(1),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode),Py.fetch()(Dy(i,i.config.apiHost,n,f),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},c))})}async function Oy(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},RC),e);try{const a=new NC(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw No(i,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const f=c.ok?u.errorMessage:u.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(i,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw No(i,"email-already-in-use",u);if(p==="USER_DISABLED")throw No(i,"user-disabled",u);const b=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Ny(i,b,m);rt(i,b)}}catch(a){if(a instanceof Et)throw a;rt(i,"network-request-failed")}}async function Pn(i,e,n,s,a={}){const c=await ot(i,e,n,s,a);return"mfaPendingCredential"in c&&rt(i,"multi-factor-auth-required",{_serverResponse:c}),c}function Dy(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?vh(i.config,a):`${i.config.apiScheme}://${a}`}class NC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dt(this.auth,"network-request-failed")),AC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function No(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=dt(i,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(i,e){return ot(i,"POST","/v1/accounts:delete",e)}async function OC(i,e){return ot(i,"POST","/v1/accounts:update",e)}async function DC(i,e){return ot(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(i){if(!!i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LC(i,e=!1){const n=q(i),s=await n.getIdToken(e),a=pc(s);P(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:Oo(wd(a.auth_time)),issuedAtTime:Oo(wd(a.iat)),expirationTime:Oo(wd(a.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function wd(i){return Number(i)*1e3}function pc(i){var e;const[n,s,a]=i.split(".");if(n===void 0||s===void 0||a===void 0)return Fl("JWT malformed, contained fewer than 3 sections"),null;try{const c=Wl(s);return c?JSON.parse(c):(Fl("Failed to decode base64 JWT payload"),null)}catch(c){return Fl("Caught error parsing JWT payload as JSON",(e=c)===null||e===void 0?void 0:e.toString()),null}}function xC(i){const e=pc(i);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Et&&MC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function MC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(i){var e;const n=i.auth,s=await i.getIdToken(),a=await kn(i,DC(n,{idToken:s}));P(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const u=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?jC(c.providerUserInfo):[],f=BC(i.providerData,u),p=i.isAnonymous,m=!(i.email&&c.passwordHash)&&!(f!=null&&f.length),b=p?m:!1,v={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:f,metadata:new Ly(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,v)}async function UC(i){const e=q(i);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BC(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function jC(i){return i.map(e=>{var{providerId:n}=e,s=ph(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(i,e){const n=await Oy(i,{},async()=>{const s=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,u=Dy(i,a,"/v1/token",`key=${c}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Py.fetch()(u,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await WC(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,u=new qo;return s&&(P(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(P(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),c&&(P(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(i,e){P(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=ph(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ly(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await kn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LC(this,e)}reload(){return UC(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kn(this,PC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,u,f,p,m,b;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,I=(a=n.email)!==null&&a!==void 0?a:void 0,S=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,A=(u=n.photoURL)!==null&&u!==void 0?u:void 0,_=(f=n.tenantId)!==null&&f!==void 0?f:void 0,w=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,E=(m=n.createdAt)!==null&&m!==void 0?m:void 0,T=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:L,emailVerified:B,isAnonymous:G,providerData:$,stsTokenManager:le}=n;P(L&&le,e,"internal-error");const at=qo.fromJSON(this.name,le);P(typeof L=="string",e,"internal-error"),Zn(v,e.name),Zn(I,e.name),P(typeof B=="boolean",e,"internal-error"),P(typeof G=="boolean",e,"internal-error"),Zn(S,e.name),Zn(A,e.name),Zn(_,e.name),Zn(w,e.name),Zn(E,e.name),Zn(T,e.name);const Mt=new xi({uid:L,auth:e,email:I,emailVerified:B,displayName:v,isAnonymous:G,photoURL:A,phoneNumber:S,tenantId:_,stsTokenManager:at,createdAt:E,lastLoginAt:T});return $&&Array.isArray($)&&(Mt.providerData=$.map(Tt=>Object.assign({},Tt))),w&&(Mt._redirectEventId=w),Mt}static async _fromIdTokenResponse(e,n,s=!1){const a=new qo;a.updateFromServerResponse(n);const c=new xi({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await zo(c),c}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xy.type="NONE";const ts=xy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(i,e,n){return`firebase:${i}:${e}:${n}`}class qr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Mi(this.userKey,a.apiKey,c),this.fullPersistenceKey=Mi("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qr(xt(ts),e,s);const a=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=a[0]||xt(ts);const u=Mi(s,e.config.apiKey,e.name);let f=null;for(const m of n)try{const b=await m._get(u);if(b){const v=xi._fromJSON(e,b);m!==c&&(f=v),c=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new qr(c,e,s):(c=p[0],f&&await c._set(u,f.toJSON()),await Promise.all(n.map(async m=>{if(m!==c)try{await m._remove(u)}catch{}})),new qr(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(By(e))return"Blackberry";if(jy(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(sa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function My(i=$e()){return/firefox\//i.test(i)}function _h(i=$e()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(i=$e()){return/crios\//i.test(i)}function Uy(i=$e()){return/iemobile/i.test(i)}function sa(i=$e()){return/android/i.test(i)}function By(i=$e()){return/blackberry/i.test(i)}function jy(i=$e()){return/webos/i.test(i)}function us(i=$e()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function HC(i=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function VC(i=$e()){var e;return us(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $C(){return hy()&&document.documentMode===10}function Wy(i=$e()){return us(i)||sa(i)||jy(i)||By(i)||/windows phone/i.test(i)||Uy(i)}function GC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(i,e=[]){let n;switch(i){case"Browser":n=zv($e());break;case"Worker":n=`${zv($e())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((u,f)=>{try{const p=e(c);u(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const a of this.queue)await a(e),a.onAbort&&s.push(a.onAbort)}catch(a){s.reverse();for(const c of s)try{c()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=a)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qv(this),this.idTokenSubscription=new qv(this),this.beforeStateQueue=new zC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ay,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p==null?void 0:p.user)&&(a=p.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await zo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?q(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n),u=this._isInitialized?Promise.resolve():this._initializationPromise;return P(u,this,"internal-error"),u.then(()=>c(this.currentUser)),typeof n=="function"?e.addObserver(n,s,a):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function st(i){return q(i)}class qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=vy(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Vy(i,e,n){const s=st(i);P(s._canInitEmulator,s,"emulator-config-failed"),P(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!!(n!=null&&n.disableWarnings),c=$y(e),{host:u,port:f}=KC(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${c}//${u}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:u,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||YC()}function $y(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function KC(i){const e=$y(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:Kv(s.substr(c.length+1))}}else{const[c,u]=s.split(":");return{host:c,port:Kv(u)}}}function Kv(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function YC(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(i,e){return ot(i,"POST","/v1/accounts:resetPassword",Je(i,e))}async function zy(i,e){return ot(i,"POST","/v1/accounts:update",e)}async function JC(i,e){return ot(i,"POST","/v1/accounts:update",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(i,e){return Pn(i,"POST","/v1/accounts:signInWithPassword",Je(i,e))}async function mc(i,e){return ot(i,"POST","/v1/accounts:sendOobCode",Je(i,e))}async function QC(i,e){return mc(i,e)}async function ZC(i,e){return mc(i,e)}async function eS(i,e){return mc(i,e)}async function tS(i,e){return mc(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(i,e){return Pn(i,"POST","/v1/accounts:signInWithEmailLink",Je(i,e))}async function iS(i,e){return Pn(i,"POST","/v1/accounts:signInWithEmailLink",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends ds{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Ko(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ko(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return XC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nS(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iS(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(i,e){return Pn(i,"POST","/v1/accounts:signInWithIdp",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="http://localhost";class fn extends ds{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=ph(n,["providerId","signInMethod"]);if(!s||!a)return null;const u=new fn(s,a);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}buildRequest(){const e={requestUri:rS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(i,e){return ot(i,"POST","/v1/accounts:sendVerificationCode",Je(i,e))}async function oS(i,e){return Pn(i,"POST","/v1/accounts:signInWithPhoneNumber",Je(i,e))}async function aS(i,e){const n=await Pn(i,"POST","/v1/accounts:signInWithPhoneNumber",Je(i,e));if(n.temporaryProof)throw No(i,"account-exists-with-different-credential",n);return n}const lS={USER_NOT_FOUND:"user-not-found"};async function cS(i,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Pn(i,"POST","/v1/accounts:signInWithPhoneNumber",Je(i,n),lS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends ds{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Fi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Fi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return oS(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return aS(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return cS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:a}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:c}=e;return!s&&!n&&!a&&!c?null:new Fi({verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dS(i){const e=Gr(Ao(i)).link,n=e?Gr(Ao(e)).deep_link_id:null,s=Gr(Ao(i)).deep_link_id;return(s?Gr(Ao(s)).link:null)||s||n||e||i}class gc{constructor(e){var n,s,a,c,u,f;const p=Gr(Ao(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,b=(s=p.oobCode)!==null&&s!==void 0?s:null,v=uS((a=p.mode)!==null&&a!==void 0?a:null);P(m&&b&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=b,this.continueUrl=(c=p.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=dS(e);try{return new gc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,n){return Ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=gc.parseLink(n);return P(s,"argument-error"),Ko._fromEmailAndCode(e,s.code,s.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Dn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Kr extends hs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),fn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),fn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Kr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Kr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:c,nonce:u,providerId:f}=e;if(!s&&!a&&!n&&!c||!f)return null;try{return new Kr(f)._credential({idToken:n,accessToken:s,nonce:u,pendingToken:c})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends hs{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends hs{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="http://localhost";class ns extends ds{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,pendingToken:c}=n;return!s||!a||!c||s!==a?null:new ns(s,c)}static _create(e,n){return new ns(e,n)}buildRequest(){return{requestUri:hS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="saml.";class zl extends Dn{constructor(e){P(e.startsWith(fS),"argument-error"),super(e)}static credentialFromResult(e){return zl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ns.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return ns._create(s,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends hs{constructor(){super("twitter.com")}static credential(e,n){return fn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(i,e){return Pn(i,"POST","/v1/accounts:signUp",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await xi._fromIdTokenResponse(e,s,a),u=Yv(s);return new Bt({user:c,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Yv(s);return new Bt({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Yv(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(i){var e;const n=st(i);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Bt({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await qy(n,{returnSecureToken:!0}),a=await Bt._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Et{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new ql(e,n,s,a)}}function Ky(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(i,c,e,s):c})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(i,e){const n=q(i);await vc(!0,n,e);const{providerUserInfo:s}=await OC(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),a=Yy(s||[]);return n.providerData=n.providerData.filter(c=>a.has(c.providerId)),a.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function yh(i,e,n=!1){const s=await kn(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Bt._forOperation(i,"link",s)}async function vc(i,e,n){await zo(e);const s=Yy(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";P(s.has(n)===i,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(i,e,n=!1){var s;const{auth:a}=i,c="reauthenticate";try{const u=await kn(i,Ky(a,c,e,i),n);P(u.idToken,a,"internal-error");const f=pc(u.idToken);P(f,a,"internal-error");const{sub:p}=f;return P(i.uid===p,a,"user-mismatch"),Bt._forOperation(i,c,u)}catch(u){throw((s=u)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&rt(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(i,e,n=!1){const s="signIn",a=await Ky(i,s,e),c=await Bt._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}async function _c(i,e){return Xy(st(i),e)}async function Qy(i,e){const n=q(i);return await vc(!1,n,e.providerId),yh(n,e)}async function Zy(i,e){return Jy(q(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(i,e){return Pn(i,"POST","/v1/accounts:signInWithCustomToken",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(i,e){const n=st(i),s=await gS(n,{token:e,returnSecureToken:!0}),a=await Bt._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?bh._fromServerResponse(e,n):rt(e,"internal-error")}}class bh extends yc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new bh(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(i,e,n){var s;P(((s=n.url)===null||s===void 0?void 0:s.length)>0,i,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(i,e,n){const s=q(i),a={requestType:"PASSWORD_RESET",email:e};n&&bc(s,a,n),await ZC(s,a)}async function yS(i,e,n){await Gy(q(i),{oobCode:e,newPassword:n})}async function bS(i,e){await JC(q(i),{oobCode:e})}async function eb(i,e){const n=q(i),s=await Gy(n,{oobCode:e}),a=s.requestType;switch(P(a,n,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(s.mfaInfo,n,"internal-error");default:P(s.email,n,"internal-error")}let c=null;return s.mfaInfo&&(c=yc._fromServerResponse(st(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:c},operation:a}}async function wS(i,e){const{data:n}=await eb(q(i),e);return n.email}async function IS(i,e,n){const s=st(i),a=await qy(s,{returnSecureToken:!0,email:e,password:n}),c=await Bt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function ES(i,e,n){return _c(q(i),On.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(i,e,n){const s=q(i),a={requestType:"EMAIL_SIGNIN",email:e};P(n.handleCodeInApp,s,"argument-error"),n&&bc(s,a,n),await eS(s,a)}function SS(i,e){const n=gc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function TS(i,e,n){const s=q(i),a=On.credentialWithLink(e,n||Go());return P(a._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),_c(s,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(i,e){return ot(i,"POST","/v1/accounts:createAuthUri",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(i,e){const n=gh()?Go():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:a}=await kS(q(i),s);return a||[]}async function AS(i,e){const n=q(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&bc(n.auth,a,e);const{email:c}=await QC(n.auth,a);c!==i.email&&await i.reload()}async function NS(i,e,n){const s=q(i),c={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};n&&bc(s.auth,c,n);const{email:u}=await tS(s.auth,c);u!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(i,e){return ot(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=q(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},u=await kn(s,PS(s.auth,c));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function DS(i,e){return tb(q(i),e,null)}function LS(i,e){return tb(q(i),null,e)}async function tb(i,e,n){const{auth:s}=i,c={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(c.email=e),n&&(c.password=n);const u=await kn(i,zy(s,c));await i._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(i){var e,n;if(!i)return null;const{providerId:s}=i,a=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},c=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(i==null?void 0:i.idToken)){const u=(n=(e=pc(i.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(u){const f=u!=="anonymous"&&u!=="custom"?u:null;return new Yr(c,f)}}if(!s)return null;switch(s){case"facebook.com":return new MS(c,a);case"github.com":return new FS(c,a);case"google.com":return new US(c,a);case"twitter.com":return new BS(c,a,i.screenName||null);case"custom":case"anonymous":return new Yr(c,null);default:return new Yr(c,s,a)}}class Yr{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class nb extends Yr{constructor(e,n,s,a){super(e,n,s),this.username=a}}class MS extends Yr{constructor(e,n){super(e,"facebook.com",n)}}class FS extends nb{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class US extends Yr{constructor(e,n){super(e,"google.com",n)}}class BS extends nb{constructor(e,n,s){super(e,"twitter.com",n,s)}}function jS(i){const{user:e,_tokenResponse:n}=i;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:xS(n)}function WS(i,e,n,s){return q(i).onIdTokenChanged(e,n,s)}function HS(i,e,n){return q(i).beforeAuthStateChanged(e,n)}class Oi{constructor(e,n,s){this.type=e,this.credential=n,this.auth=s}static _fromIdtoken(e,n){return new Oi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Oi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Oi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Oi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=st(e),a=n.customData._serverResponse,c=(a.mfaInfo||[]).map(f=>yc._fromServerResponse(s,f));P(a.mfaPendingCredential,s,"internal-error");const u=Oi._fromMfaPendingCredential(a.mfaPendingCredential);return new wh(u,c,async f=>{const p=await f._process(s,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(n.operationType){case"signIn":const b=await Bt._fromIdTokenResponse(s,n.operationType,m);return await s._updateCurrentUser(b.user),b;case"reauthenticate":return P(n.user,s,"internal-error"),Bt._forOperation(n.user,n.operationType,m);default:rt(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function VS(i,e){var n;const s=q(i),a=e;return P(e.customData.operationType,s,"argument-error"),P((n=a.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,s,"argument-error"),wh._fromError(s,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(i,e){return ot(i,"POST","/v2/accounts/mfaEnrollment:start",Je(i,e))}function GS(i,e){return ot(i,"POST","/v2/accounts/mfaEnrollment:finalize",Je(i,e))}function zS(i,e){return ot(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Je(i,e))}class Ih{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>yc._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Ih(e)}async getSession(){return Oi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const s=e,a=await this.getSession(),c=await kn(this.user,s._process(this.user.auth,a,n));return await this.user._updateTokensIfNecessary(c),this.user.reload()}async unenroll(e){var n;const s=typeof e=="string"?e:e.uid,a=await this.user.getIdToken(),c=await kn(this.user,zS(this.user.auth,{idToken:a,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==s),await this.user._updateTokensIfNecessary(c);try{await this.user.reload()}catch(u){if(((n=u)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw u}}}const Id=new WeakMap;function qS(i){const e=q(i);return Id.has(e)||Id.set(e,Ih._fromUser(e)),Id.get(e)}const Kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(){const i=$e();return _h(i)||us(i)}const YS=1e3,JS=10;class rb extends ib{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KS()&&GC(),this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const u=this.storage.getItem(s);if(e.newValue!==u)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const a=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},c=this.storage.getItem(s);$C()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,JS):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rb.type="LOCAL";const wc=rb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb extends ib{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sb.type="SESSION";const oi=sb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(u).map(async m=>m(n.origin,c)),p=await XS(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,u;return new Promise((f,p)=>{const m=oa("",20);a.port1.start();const b=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(v){const I=v;if(I.data.eventId===m)switch(I.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(I.data.response);break;default:clearTimeout(b),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function ZS(i){qe().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function eT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function nT(){return Eh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firebaseLocalStorageDb",iT=1,Yl="firebaseLocalStorage",ab="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ec(i,e){return i.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function rT(){const i=indexedDB.deleteDatabase(ob);return new aa(i).toPromise()}function jd(){const i=indexedDB.open(ob,iT);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Yl,{keyPath:ab})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Yl)?e(s):(s.close(),await rT(),e(await jd()))})})}async function Jv(i,e,n){const s=Ec(i,!0).put({[ab]:e,value:n});return new aa(s).toPromise()}async function sT(i,e){const n=Ec(i,!1).get(e),s=await new aa(n).toPromise();return s===void 0?null:s.value}function Xv(i,e){const n=Ec(i,!0).delete(e);return new aa(n).toPromise()}const oT=800,aT=3;class lb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>aT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(nT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eT(),!this.activeServiceWorker)return;this.sender=new QS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Jv(e,Kl,"1"),await Xv(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Ec(a,!1).getAll();return new aa(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lb.type="LOCAL";const is=lb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(i,e){return ot(i,"POST","/v2/accounts/mfaSignIn:start",Je(i,e))}function cT(i,e){return ot(i,"POST","/v2/accounts/mfaSignIn:finalize",Je(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(i){return(await ot(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}function cb(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=dt("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",dT().appendChild(s)})}function ub(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=500,fT=6e4,Ol=1e12;class pT{constructor(e){this.auth=e,this.counter=Ol,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new mT(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||Ol;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||Ol;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||Ol;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class mT{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;P(a,"argument-error",{appName:n}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=gT(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},fT)},hT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gT(i){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=ub("rcb"),vT=new ra(3e4,6e4),_T="https://www.google.com/recaptcha/api.js?";class yT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(bT(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(qe().grecaptcha):new Promise((s,a)=>{const c=qe().setTimeout(()=>{a(dt(e,"network-request-failed"))},vT.get());qe()[Ed]=()=>{qe().clearTimeout(c),delete qe()[Ed];const f=qe().grecaptcha;if(!f){a(dt(e,"internal-error"));return}const p=f.render;f.render=(m,b)=>{const v=p(m,b);return this.counter++,v},this.hostLanguage=n,s(f)};const u=`${_T}?${Ji({onload:Ed,render:"explicit",hl:n})}`;cb(u).catch(()=>{clearTimeout(c),a(dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=qe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bT(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class wT{async load(e){return new pT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="recaptcha",IT={theme:"light",type:"image"};class ET{constructor(e,n=Object.assign({},IT),s){this.parameters=n,this.type=db,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=st(s),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof e=="string"?document.getElementById(e):e;P(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wT:new yT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(a=>{const c=u=>{!u||(this.tokenChangeListeners.delete(c),a(u))};this.tokenChangeListeners.add(c),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=qe()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(gh()&&!Eh(),this.auth,"internal-error"),await CT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await uT(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function CT(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Fi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ST(i,e,n){const s=st(i),a=await Cc(s,e,q(n));return new Ch(a,c=>_c(s,c))}async function TT(i,e,n){const s=q(i);await vc(!1,s,"phone");const a=await Cc(s.auth,e,q(n));return new Ch(a,c=>Qy(s,c))}async function kT(i,e,n){const s=q(i),a=await Cc(s.auth,e,q(n));return new Ch(a,c=>Zy(s,c))}async function Cc(i,e,n){var s;const a=await n.verify();try{P(typeof a=="string",i,"argument-error"),P(n.type===db,i,"argument-error");let c;if(typeof e=="string"?c={phoneNumber:e}:c=e,"session"in c){const u=c.session;if("phoneNumber"in c)return P(u.type==="enroll",i,"internal-error"),(await $S(i,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:c.phoneNumber,recaptchaToken:a}})).phoneSessionInfo.sessionInfo;{P(u.type==="signin",i,"internal-error");const f=((s=c.multiFactorHint)===null||s===void 0?void 0:s.uid)||c.multiFactorUid;return P(f,i,"missing-multi-factor-info"),(await lT(i,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:u}=await sS(i,{phoneNumber:c.phoneNumber,recaptchaToken:a});return u}}finally{n._reset()}}async function RT(i,e){await yh(q(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,n){return Cc(this.auth,e,q(n))}static credential(e,n){return Fi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Qt.credentialFromTaggedObject(n)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?Fi._fromTokenResponse(n,s):null}}Qt.PROVIDER_ID="phone";Qt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(i,e){return e?xt(e):(P(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends ds{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AT(i){return Xy(i.auth,new Sh(i),i.bypassAuthState)}function NT(i){const{auth:e,user:n}=i;return P(n,e,"internal-error"),Jy(n,new Sh(i),i.bypassAuthState)}async function PT(i){const{auth:e,user:n}=i;return P(n,e,"internal-error"),yh(n,new Sh(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AT;case"linkViaPopup":case"linkViaRedirect":return PT;case"reauthViaPopup":case"reauthViaRedirect":return NT;default:rt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new ra(2e3,1e4);async function DT(i,e,n){const s=st(i);cs(i,e,Dn);const a=Qi(s,n);return new bn(s,"signInViaPopup",e,a).executeNotNull()}async function LT(i,e,n){const s=q(i);cs(s.auth,e,Dn);const a=Qi(s.auth,n);return new bn(s.auth,"reauthViaPopup",e,a,s).executeNotNull()}async function xT(i,e,n){const s=q(i);cs(s.auth,e,Dn);const a=Qi(s.auth,n);return new bn(s.auth,"linkViaPopup",e,a,s).executeNotNull()}class bn extends hb{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,OT.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="pendingRedirect",Do=new Map;class FT extends hb{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const s=await UT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UT(i,e){const n=pb(e),s=fb(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}async function Th(i,e){return fb(i)._set(pb(e),"true")}function BT(){Do.clear()}function kh(i,e){Do.set(i._key(),e)}function fb(i){return xt(i._redirectPersistence)}function pb(i){return Mi(MT,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(i,e,n){return WT(i,e,n)}async function WT(i,e,n){const s=st(i);cs(i,e,Dn);const a=Qi(s,n);return await Th(a,s),a._openRedirect(s,e,"signInViaRedirect")}function HT(i,e,n){return VT(i,e,n)}async function VT(i,e,n){const s=q(i);cs(s.auth,e,Dn);const a=Qi(s.auth,n);await Th(a,s.auth);const c=await mb(s);return a._openRedirect(s.auth,e,"reauthViaRedirect",c)}function $T(i,e,n){return GT(i,e,n)}async function GT(i,e,n){const s=q(i);cs(s.auth,e,Dn);const a=Qi(s.auth,n);await vc(!1,s,e.providerId),await Th(a,s.auth);const c=await mb(s);return a._openRedirect(s.auth,e,"linkViaRedirect",c)}async function zT(i,e){return await st(i)._initializationPromise,Sc(i,e,!1)}async function Sc(i,e,n=!1){const s=st(i),a=Qi(s,e),u=await new FT(s,a,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}async function mb(i){const e=oa(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=10*60*1e3;class gb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vb(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qv(e))}saveEventToCache(e){this.cachedEventUids.add(Qv(e)),this.lastProcessedEventTime=Date.now()}}function Qv(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function vb({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vb(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(i,e={}){return ot(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JT=/^https?/;async function XT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _b(i);for(const n of e)try{if(QT(n))return}catch{}rt(i,"unauthorized-domain")}function QT(i){const e=Go(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!JT.test(n))return!1;if(YT.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new ra(3e4,6e4);function Zv(){const i=qe().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function ek(i){return new Promise((e,n)=>{var s,a,c;function u(){Zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zv(),n(dt(i,"network-request-failed"))},timeout:ZT.get()})}if(!((a=(s=qe().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=qe().gapi)===null||c===void 0)&&c.load)u();else{const f=ub("iframefcb");return qe()[f]=()=>{gapi.load?u():n(dt(i,"network-request-failed"))},cb(`https://apis.google.com/js/api.js?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function tk(i){return Ul=Ul||ek(i),Ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new ra(5e3,15e3),ik="__/auth/iframe",rk="emulator/auth/iframe",sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ak(i){const e=i.config;P(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?vh(e,rk):`https://${i.config.authDomain}/${ik}`,s={apiKey:e.apiKey,appName:i.name,v:Xi},a=ok.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ji(s).slice(1)}`}async function lk(i){const e=await tk(i),n=qe().gapi;return P(n,i,"internal-error"),e.open({where:document.body,url:ak(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sk,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const u=dt(i,"network-request-failed"),f=qe().setTimeout(()=>{c(u)},nk.get());function p(){qe().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{c(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uk=500,dk=600,hk="_blank",fk="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pk(i,e,n,s=uk,a=dk){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},ck),{width:s.toString(),height:a.toString(),top:c,left:u}),m=$e().toLowerCase();n&&(f=Fy(m)?hk:n),My(m)&&(e=e||fk,p.scrollbars="yes");const b=Object.entries(p).reduce((I,[S,A])=>`${I}${S}=${A},`,"");if(VC(m)&&f!=="_self")return mk(e||"",f),new e_(null);const v=window.open(e||"",f,b);P(v,i,"popup-blocked");try{v.focus()}catch{}return new e_(v)}function mk(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="__/auth/handler",vk="emulator/auth/handler";function Wd(i,e,n,s,a,c){P(i.config.authDomain,i,"auth-domain-config-required"),P(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Xi,eventId:a};if(e instanceof Dn){e.setDefaultLanguage(i.languageCode),u.providerId=e.providerId||"",Md(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries(c||{}))u[p]=m}if(e instanceof hs){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(u.scopes=p.join(","))}i.tenantId&&(u.tid=i.tenantId);const f=u;for(const p of Object.keys(f))f[p]===void 0&&delete f[p];return`${_k(i)}?${Ji(f).slice(1)}`}function _k({config:i}){return i.emulator?vh(i,vk):`https://${i.authDomain}/${gk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="webStorageSupport";class yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oi,this._completeRedirectFn=Sc,this._overrideRedirectResult=kh}async _openPopup(e,n,s,a){var c;tn((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const u=Wd(e,n,s,Go(),a);return pk(e,u,oa())}async _openRedirect(e,n,s,a){return await this._originValidation(e),ZS(Wd(e,n,s,Go(),a)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(tn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await lk(e),s=new gb(e);return n.register("authEvent",a=>(P(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cd,{type:Cd},a=>{var c;const u=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Cd];u!==void 0&&n(!!u),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wy()||_h()||us()}}const yb=yk;class bk{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return hn("unexpected MultiFactorSessionType")}}}class Rh extends bk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Rh(e)}_finalizeEnroll(e,n,s){return GS(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return cT(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bb{constructor(){}static assertion(e){return Rh._fromCredential(e)}}bb.FACTOR_ID="phone";var t_="@firebase/auth",n_="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var a;e(((a=s)===null||a===void 0?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ek(i){si(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),{apiKey:c,authDomain:u}=s.options;return((f,p)=>{P(c&&!c.includes(":"),"invalid-api-key",{appName:f.name}),P(!(u!=null&&u.includes(":")),"argument-error",{appName:f.name});const m={apiKey:c,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(i)},b=new qC(f,p,m);return SC(b,n),b})(s,a)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),si(new Tn("auth-internal",e=>{const n=st(e.getProvider("auth").getImmediate());return(s=>new wk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(t_,n_,Ik(i)),Xt(t_,n_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=5*60,Sk=my("authIdTokenMaxAge")||Ck;let i_=null;const Tk=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Sk)return;const a=n==null?void 0:n.token;i_!==a&&(i_=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function kk(i=fh()){const e=ia(i,"auth");if(e.isInitialized())return e.getImmediate();const n=CC(i,{popupRedirectResolver:yb,persistence:[is,wc,oi]}),s=my("authTokenSyncURL");if(s){const c=Tk(s);HS(n,c,()=>c(n.currentUser)),WS(n,u=>c(u))}const a=py("auth");return a&&Vy(n,`http://${a}`),n}Ek("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=2e3;async function Ak(i,e,n){var s;const{BuildInfo:a}=ji();tn(e.sessionId,"AuthEvent did not contain a session ID");const c=await Lk(e.sessionId),u={};return us()?u.ibi=a.packageName:sa()?u.apn=a.packageName:rt(i,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=c,Wd(i,n,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,u)}async function Nk(i){const{BuildInfo:e}=ji(),n={};us()?n.iosBundleId=e.packageName:sa()?n.androidPackageName=e.packageName:rt(i,"operation-not-supported-in-this-environment"),await _b(i,n)}function Pk(i){const{cordova:e}=ji();return new Promise(n=>{e.plugins.browsertab.isAvailable(s=>{let a=null;s?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,HC()?"_blank":"_system","location=yes"),n(a)})})}async function Ok(i,e,n){const{cordova:s}=ji();let a=()=>{};try{await new Promise((c,u)=>{let f=null;function p(){var v;c();const I=(v=s.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof I=="function"&&I(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function m(){f||(f=window.setTimeout(()=>{u(dt(i,"redirect-cancelled-by-user"))},Rk))}function b(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),sa()&&document.addEventListener("visibilitychange",b,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",b,!1),f&&window.clearTimeout(f)}})}finally{a()}}function Dk(i){var e,n,s,a,c,u,f,p,m,b;const v=ji();P(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=v==null?void 0:v.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((c=(a=(s=v==null?void 0:v.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((p=(f=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((b=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||b===void 0?void 0:b.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Lk(i){const e=xk(i),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function xk(i){if(tn(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),n=new Uint8Array(e);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=20;class Fk extends gb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Uk(i,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Wk(),postBody:null,tenantId:i.tenantId,error:dt(i,"no-auth-event")}}function Bk(i,e){return Hd()._set(Vd(i),e)}async function r_(i){const e=await Hd()._get(Vd(i));return e&&await Hd()._remove(Vd(i)),e}function jk(i,e){var n,s;const a=Vk(e);if(a.includes("/__/auth/callback")){const c=Bl(a),u=c.firebaseError?Hk(decodeURIComponent(c.firebaseError)):null,f=(s=(n=u==null?void 0:u.code)===null||n===void 0?void 0:n.split("auth/"))===null||s===void 0?void 0:s[1],p=f?dt(f):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function Wk(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Mk;n++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function Hd(){return xt(wc)}function Vd(i){return Mi("authEvent",i.config.apiKey,i.name)}function Hk(i){try{return JSON.parse(i)}catch{return null}}function Vk(i){const e=Bl(i),n=e.link?decodeURIComponent(e.link):void 0,s=Bl(n).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Bl(a).link||a||s||n||i}function Bl(i){if(!(i!=null&&i.includes("?")))return{};const[e,...n]=i.split("?");return Gr(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=500;class Gk{constructor(){this._redirectPersistence=oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sc,this._overrideRedirectResult=kh}async _initialize(e){const n=e._key();let s=this.eventManagers.get(n);return s||(s=new Fk(e),this.eventManagers.set(n,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,s,a){Dk(e);const c=await this._initialize(e);await c.initialized(),c.resetRedirect(),BT(),await this._originValidation(e);const u=Uk(e,s,a);await Bk(e,u);const f=await Ak(e,u,n),p=await Pk(f);return Ok(e,c,p)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Nk(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:s,handleOpenURL:a,BuildInfo:c}=ji(),u=setTimeout(async()=>{await r_(e),n.onEvent(s_())},$k),f=async b=>{clearTimeout(u);const v=await r_(e);let I=null;v&&(b==null?void 0:b.url)&&(I=jk(v,b.url)),n.onEvent(I||s_())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,f);const p=a,m=`${c.packageName.toLowerCase()}://`;ji().handleOpenURL=async b=>{if(b.toLowerCase().startsWith(m)&&f({url:b}),typeof p=="function")try{p(b)}catch(v){console.error(v)}}}}const zk=Gk;function s_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:dt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(i,e){st(i)._logFramework(e)}var Kk="@firebase/auth-compat",Yk="0.2.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1e3;function Lo(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function Xk(){return Lo()==="http:"||Lo()==="https:"}function wb(i=$e()){return!!((Lo()==="file:"||Lo()==="ionic:"||Lo()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function Qk(){return cc()||uy()}function Zk(){return hy()&&(document==null?void 0:document.documentMode)===11}function e2(i=$e()){return/Edge\/\d+/.test(i)}function t2(i=$e()){return Zk()||e2(i)}function Ib(){try{const i=self.localStorage,e=oa();if(i)return i.setItem(e,"1"),i.removeItem(e),t2()?Hl():!0}catch{return Ah()&&Hl()}return!1}function Ah(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Sd(){return(Xk()||dy()||wb())&&!Qk()&&Ib()&&!Ah()}function Eb(){return wb()&&typeof document<"u"}async function n2(){return Eb()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},Jk);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function i2(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={LOCAL:"local",NONE:"none",SESSION:"session"},Io=P,Cb="persistence";function r2(i,e){if(Io(Object.values(Lt).includes(e),i,"invalid-persistence-type"),cc()){Io(e!==Lt.SESSION,i,"unsupported-persistence-type");return}if(uy()){Io(e===Lt.NONE,i,"unsupported-persistence-type");return}if(Ah()){Io(e===Lt.NONE||e===Lt.LOCAL&&Hl(),i,"unsupported-persistence-type");return}Io(e===Lt.NONE||Ib(),i,"unsupported-persistence-type")}async function $d(i){await i._initializationPromise;const e=Sb(),n=Mi(Cb,i.config.apiKey,i.name);e&&e.setItem(n,i._getPersistence())}function s2(i,e){const n=Sb();if(!n)return[];const s=Mi(Cb,i,e);switch(n.getItem(s)){case Lt.NONE:return[ts];case Lt.LOCAL:return[is,oi];case Lt.SESSION:return[oi];default:return[]}}function Sb(){var i;try{return((i=i2())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=P;class ei{constructor(){this.browserResolver=xt(yb),this.cordovaResolver=xt(zk),this.underlyingResolver=null,this._redirectPersistence=oi,this._completeRedirectFn=Sc,this._overrideRedirectResult=kh}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,s,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,s,a)}async _openRedirect(e,n,s,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,s,a)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Eb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return o2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await n2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(i){return i.unwrap()}function a2(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(i){return kb(i)}function c2(i,e){var n,s;const a=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const c=e;c.resolver=new u2(i,VS(i,e))}else if(a){const c=kb(e),u=e;c&&(u.credential=c,u.tenantId=a.tenantId||void 0,u.email=a.email||void 0,u.phoneNumber=a.phoneNumber||void 0)}}function kb(i){const{_tokenResponse:e}=i instanceof Et?i.customData:i;if(!e)return null;if(!(i instanceof Et)&&"temporaryProof"in e&&"phoneNumber"in e)return Qt.credentialFromResult(i);const n=e.providerId;if(!n||n===wo.PASSWORD)return null;let s;switch(n){case wo.GOOGLE:s=cn;break;case wo.FACEBOOK:s=ln;break;case wo.GITHUB:s=un;break;case wo.TWITTER:s=dn;break;default:const{oauthIdToken:a,oauthAccessToken:c,oauthTokenSecret:u,pendingToken:f,nonce:p}=e;return!c&&!u&&!a&&!f?null:f?n.startsWith("saml.")?ns._create(n,f):fn._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:a,accessToken:c}):new Kr(n).credential({idToken:a,accessToken:c,rawNonce:p})}return i instanceof Et?s.credentialFromError(i):s.credentialFromResult(i)}function bt(i,e){return e.catch(n=>{throw n instanceof Et&&c2(i,n),n}).then(n=>{const s=n.operationType,a=n.user;return{operationType:s,credential:l2(n),additionalUserInfo:jS(n),user:wn.getOrCreate(a)}})}async function Gd(i,e){const n=await e;return{verificationId:n.verificationId,confirm:s=>bt(i,n.confirm(s))}}class u2{constructor(e,n){this.resolver=n,this.auth=a2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return bt(Tb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._delegate=e,this.multiFactor=qS(e)}static getOrCreate(e){return wn.USER_MAP.has(e)||wn.USER_MAP.set(e,new wn(e)),wn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return bt(this.auth,Qy(this._delegate,e))}async linkWithPhoneNumber(e,n){return Gd(this.auth,TT(this._delegate,e,n))}async linkWithPopup(e){return bt(this.auth,xT(this._delegate,e,ei))}async linkWithRedirect(e){return await $d(st(this.auth)),$T(this._delegate,e,ei)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return bt(this.auth,Zy(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Gd(this.auth,kT(this._delegate,e,n))}reauthenticateWithPopup(e){return bt(this.auth,LT(this._delegate,e,ei))}async reauthenticateWithRedirect(e){return await $d(st(this.auth)),HT(this._delegate,e,ei)}sendEmailVerification(e){return AS(this._delegate,e)}async unlink(e){return await mS(this._delegate,e),this}updateEmail(e){return DS(this._delegate,e)}updatePassword(e){return LS(this._delegate,e)}updatePhoneNumber(e){return RT(this._delegate,e)}updateProfile(e){return OS(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return NS(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}wn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=P;class zd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;Eo(s,"invalid-api-key",{appName:e.name}),Eo(s,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?ei:void 0;this._delegate=n.initialize({options:{persistence:d2(s,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(IC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Vy(this._delegate,e,n)}applyActionCode(e){return bS(this._delegate,e)}checkActionCode(e){return eb(this._delegate,e)}confirmPasswordReset(e,n){return yS(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return bt(this._delegate,IS(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return RS(this._delegate,e)}isSignInWithEmailLink(e){return SS(this._delegate,e)}async getRedirectResult(){Eo(Sd(),this._delegate,"operation-not-supported-in-this-environment");const e=await zT(this._delegate,ei);return e?bt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qk(this._delegate,e)}onAuthStateChanged(e,n,s){const{next:a,error:c,complete:u}=o_(e,n,s);return this._delegate.onAuthStateChanged(a,c,u)}onIdTokenChanged(e,n,s){const{next:a,error:c,complete:u}=o_(e,n,s);return this._delegate.onIdTokenChanged(a,c,u)}sendSignInLinkToEmail(e,n){return CS(this._delegate,e,n)}sendPasswordResetEmail(e,n){return _S(this._delegate,e,n||void 0)}async setPersistence(e){r2(this._delegate,e);let n;switch(e){case Lt.SESSION:n=oi;break;case Lt.LOCAL:n=await xt(is)._isAvailable()?is:wc;break;case Lt.NONE:n=ts;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return bt(this._delegate,pS(this._delegate))}signInWithCredential(e){return bt(this._delegate,_c(this._delegate,e))}signInWithCustomToken(e){return bt(this._delegate,vS(this._delegate,e))}signInWithEmailAndPassword(e,n){return bt(this._delegate,ES(this._delegate,e,n))}signInWithEmailLink(e,n){return bt(this._delegate,TS(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Gd(this._delegate,ST(this._delegate,e,n))}async signInWithPopup(e){return Eo(Sd(),this._delegate,"operation-not-supported-in-this-environment"),bt(this._delegate,DT(this._delegate,e,ei))}async signInWithRedirect(e){return Eo(Sd(),this._delegate,"operation-not-supported-in-this-environment"),await $d(this._delegate),jT(this._delegate,e,ei)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return wS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}zd.Persistence=Lt;function o_(i,e,n){let s=i;typeof i!="function"&&({next:s,error:e,complete:n}=i);const a=s;return{next:u=>a(u&&wn.getOrCreate(u)),error:e,complete:n}}function d2(i,e){const n=s2(i,e);if(typeof self<"u"&&!n.includes(is)&&n.push(is),typeof window<"u")for(const s of[wc,oi])n.includes(s)||n.push(s);return n.includes(ts)||n.push(ts),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.providerId="phone",this._delegate=new Qt(Tb(F.auth()))}static credential(e,n){return Qt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Nh.PHONE_SIGN_IN_METHOD=Qt.PHONE_SIGN_IN_METHOD;Nh.PROVIDER_ID=Qt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=P;class f2{constructor(e,n,s=F.app()){var a;h2((a=s.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new ET(e,n,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="auth-compat";function m2(i){i.INTERNAL.registerComponent(new Tn(p2,e=>{const n=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new zd(n,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hr.EMAIL_SIGNIN,PASSWORD_RESET:Hr.PASSWORD_RESET,RECOVER_EMAIL:Hr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hr.VERIFY_EMAIL}},EmailAuthProvider:On,FacebookAuthProvider:ln,GithubAuthProvider:un,GoogleAuthProvider:cn,OAuthProvider:Kr,SAMLAuthProvider:zl,PhoneAuthProvider:Nh,PhoneMultiFactorGenerator:bb,RecaptchaVerifier:f2,TwitterAuthProvider:dn,Auth:zd,AuthCredential:ds,Error:Et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(Kk,Yk)}m2(F);var Rb={exports:{}};(function(i){(function(){var e=window.CustomEvent;(!e||typeof e=="object")&&(e=function(w,E){E=E||{};var T=document.createEvent("CustomEvent");return T.initCustomEvent(w,!!E.bubbles,!!E.cancelable,E.detail||null),T},e.prototype=window.Event.prototype);function n(_){for(;_&&_!==document.body;){var w=window.getComputedStyle(_),E=function(T,L){return!(w[T]===void 0||w[T]===L)};if(w.opacity<1||E("zIndex","auto")||E("transform","none")||E("mixBlendMode","normal")||E("filter","none")||E("perspective","none")||w.isolation==="isolate"||w.position==="fixed"||w.webkitOverflowScrolling==="touch")return!0;_=_.parentElement}return!1}function s(_){for(;_;){if(_.localName==="dialog")return _;_=_.parentElement}return null}function a(_){_&&_.blur&&_!==document.body&&_.blur()}function c(_,w){for(var E=0;E<_.length;++E)if(_[E]===w)return!0;return!1}function u(_){return!_||!_.hasAttribute("method")?!1:_.getAttribute("method").toLowerCase()==="dialog"}function f(_){if(this.dialog_=_,this.replacedStyleTop_=!1,this.openAsModal_=!1,_.hasAttribute("role")||_.setAttribute("role","dialog"),_.show=this.show.bind(this),_.showModal=this.showModal.bind(this),_.close=this.close.bind(this),"returnValue"in _||(_.returnValue=""),"MutationObserver"in window){var w=new MutationObserver(this.maybeHideModal.bind(this));w.observe(_,{attributes:!0,attributeFilter:["open"]})}else{var E=!1,T=function(){E?this.downgradeModal():this.maybeHideModal(),E=!1}.bind(this),L,B=function(G){if(G.target===_){var $="DOMNodeRemoved";E|=G.type.substr(0,$.length)===$,window.clearTimeout(L),L=window.setTimeout(T,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(G){_.addEventListener(G,B)})}Object.defineProperty(_,"open",{set:this.setOpen.bind(this),get:_.hasAttribute.bind(_,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}f.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),p.dm.removeDialog(this))},setOpen:function(_){_?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(_){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var w=document.createElement("div");this.dialog_.insertBefore(w,this.dialog_.firstChild),w.tabIndex=-1,w.focus(),this.dialog_.removeChild(w)}var E=document.createEvent("MouseEvents");E.initMouseEvent(_.type,_.bubbles,_.cancelable,window,_.detail,_.screenX,_.screenY,_.clientX,_.clientY,_.ctrlKey,_.altKey,_.shiftKey,_.metaKey,_.button,_.relatedTarget),this.dialog_.dispatchEvent(E),_.stopPropagation()},focus_:function(){var _=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!_&&this.dialog_.tabIndex>=0&&(_=this.dialog_),!_){var w=["button","input","keygen","select","textarea"],E=w.map(function(T){return T+":not([disabled])"});E.push('[tabindex]:not([disabled]):not([tabindex=""])'),_=this.dialog_.querySelector(E.join(", "))}a(document.activeElement),_&&_.focus()},updateZIndex:function(_,w){if(_<w)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=_,this.backdrop_.style.zIndex=w},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!p.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");n(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,p.needsCentering(this.dialog_)?(p.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(_){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),_!==void 0&&(this.dialog_.returnValue=_);var w=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(w)}};var p={};if(p.reposition=function(_){var w=document.body.scrollTop||document.documentElement.scrollTop,E=w+(window.innerHeight-_.offsetHeight)/2;_.style.top=Math.max(w,E)+"px"},p.isInlinePositionSetByStylesheet=function(_){for(var w=0;w<document.styleSheets.length;++w){var E=document.styleSheets[w],T=null;try{T=E.cssRules}catch{}if(!!T)for(var L=0;L<T.length;++L){var B=T[L],G=null;try{G=document.querySelectorAll(B.selectorText)}catch{}if(!(!G||!c(G,_))){var $=B.style.getPropertyValue("top"),le=B.style.getPropertyValue("bottom");if($&&$!=="auto"||le&&le!=="auto")return!0}}}return!1},p.needsCentering=function(_){var w=window.getComputedStyle(_);return w.position!=="absolute"||_.style.top!=="auto"&&_.style.top!==""||_.style.bottom!=="auto"&&_.style.bottom!==""?!1:!p.isInlinePositionSetByStylesheet(_)},p.forceRegisterDialog=function(_){if((window.HTMLDialogElement||_.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",_),_.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new f(_)},p.registerDialog=function(_){_.showModal||p.forceRegisterDialog(_)},p.DialogManager=function(){this.pendingDialogStack=[];var _=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(w){this.forwardTab_=void 0,w.stopPropagation(),_([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(w){var E=[];w.forEach(function(T){for(var L=0,B;B=T.removedNodes[L];++L){if(B instanceof Element)B.localName==="dialog"&&E.push(B);else continue;E=E.concat(B.querySelectorAll("dialog"))}}),E.length&&_(E)}))},p.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},p.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},p.DialogManager.prototype.updateStacking=function(){for(var _=this.zIndexHigh_,w=0,E;E=this.pendingDialogStack[w];++w)E.updateZIndex(--_,--_),w===0&&(this.overlay.style.zIndex=--_);var T=this.pendingDialogStack[0];if(T){var L=T.dialog.parentNode||document.body;L.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},p.DialogManager.prototype.containedByTopDialog_=function(_){for(;_=s(_);){for(var w=0,E;E=this.pendingDialogStack[w];++w)if(E.dialog===_)return w===0;_=_.parentElement}return!1},p.DialogManager.prototype.handleFocus_=function(_){if(!this.containedByTopDialog_(_.target)&&(_.preventDefault(),_.stopPropagation(),a(_.target),this.forwardTab_!==void 0)){var w=this.pendingDialogStack[0],E=w.dialog,T=E.compareDocumentPosition(_.target);return T&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?w.focus_():document.documentElement.focus()),!1}},p.DialogManager.prototype.handleKey_=function(_){if(this.forwardTab_=void 0,_.keyCode===27){_.preventDefault(),_.stopPropagation();var w=new e("cancel",{bubbles:!1,cancelable:!0}),E=this.pendingDialogStack[0];E&&E.dialog.dispatchEvent(w)&&E.dialog.close()}else _.keyCode===9&&(this.forwardTab_=!_.shiftKey)},p.DialogManager.prototype.checkDOM_=function(_){var w=this.pendingDialogStack.slice();w.forEach(function(E){_.indexOf(E.dialog)!==-1?E.downgradeModal():E.maybeHideModal()})},p.DialogManager.prototype.pushDialog=function(_){var w=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=w?!1:(this.pendingDialogStack.unshift(_)===1&&this.blockDocument(),this.updateStacking(),!0)},p.DialogManager.prototype.removeDialog=function(_){var w=this.pendingDialogStack.indexOf(_);w!==-1&&(this.pendingDialogStack.splice(w,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},p.dm=new p.DialogManager,p.formSubmitter=null,p.useValue=null,window.HTMLDialogElement===void 0){var m=document.createElement("form");if(m.setAttribute("method","dialog"),m.method!=="dialog"){var b=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(b){var v=b.get;b.get=function(){return u(this)?"dialog":v.call(this)};var I=b.set;b.set=function(_){return typeof _=="string"&&_.toLowerCase()==="dialog"?this.setAttribute("method",_):I.call(this,_)},Object.defineProperty(HTMLFormElement.prototype,"method",b)}}document.addEventListener("click",function(_){if(p.formSubmitter=null,p.useValue=null,!_.defaultPrevented){var w=_.target;if(!(!w||!u(w.form))){var E=w.type==="submit"&&["button","input"].indexOf(w.localName)>-1;if(!E){if(!(w.localName==="input"&&w.type==="image"))return;p.useValue=_.offsetX+","+_.offsetY}var T=s(w);!T||(p.formSubmitter=w)}}},!1);var S=HTMLFormElement.prototype.submit,A=function(){if(!u(this))return S.call(this);var _=s(this);_&&_.close()};HTMLFormElement.prototype.submit=A,document.addEventListener("submit",function(_){var w=_.target;if(!!u(w)){_.preventDefault();var E=s(w);if(!!E){var T=p.formSubmitter;T&&T.form===w?E.close(p.useValue||T.value):E.close(),p.formSubmitter=null}}},!0)}p.forceRegisterDialog=p.forceRegisterDialog,p.registerDialog=p.registerDialog,typeof i.exports=="object"?i.exports=p:window.dialogPolyfill=p})()})(Rb);const g2=Rb.exports;/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te={upgradeDom:function(i,e){},upgradeElement:function(i,e){},upgradeElements:function(i){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(i,e){},register:function(i){},downgradeElements:function(i){}};Te=function(){var i=[],e=[],n="mdlComponentConfigInternal_";function s(_,w){for(var E=0;E<i.length;E++)if(i[E].className===_)return typeof w<"u"&&(i[E]=w),i[E];return!1}function a(_){var w=_.getAttribute("data-upgraded");return w===null?[""]:w.split(",")}function c(_,w){var E=a(_);return E.indexOf(w)!==-1}function u(_,w,E){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(_,{bubbles:w,cancelable:E});var T=document.createEvent("Events");return T.initEvent(_,w,E),T}function f(_,w){if(typeof _>"u"&&typeof w>"u")for(var E=0;E<i.length;E++)f(i[E].className,i[E].cssClass);else{var T=_;if(typeof w>"u"){var L=s(T);L&&(w=L.cssClass)}for(var B=document.querySelectorAll("."+w),G=0;G<B.length;G++)p(B[G],T)}}function p(_,w){if(!(typeof _=="object"&&_ instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var E=u("mdl-componentupgrading",!0,!0);if(_.dispatchEvent(E),!E.defaultPrevented){var T=a(_),L=[];if(w)c(_,w)||L.push(s(w));else{var B=_.classList;i.forEach(function(Fe){B.contains(Fe.cssClass)&&L.indexOf(Fe)===-1&&!c(_,Fe.className)&&L.push(Fe)})}for(var G=0,$=L.length,le;G<$;G++){if(le=L[G],le){T.push(le.className),_.setAttribute("data-upgraded",T.join(","));var at=new le.classConstructor(_);at[n]=le,e.push(at);for(var Mt=0,Tt=le.callbacks.length;Mt<Tt;Mt++)le.callbacks[Mt](_);le.widget&&(_[le.className]=at)}else throw new Error("Unable to find a registered component for the given class.");var ne=u("mdl-componentupgraded",!0,!1);_.dispatchEvent(ne)}}}function m(_){Array.isArray(_)||(_ instanceof Element?_=[_]:_=Array.prototype.slice.call(_));for(var w=0,E=_.length,T;w<E;w++)T=_[w],T instanceof HTMLElement&&(p(T),T.children.length>0&&m(T.children))}function b(_){var w=typeof _.widget>"u"&&typeof _.widget>"u",E=!0;w||(E=_.widget||_.widget);var T={classConstructor:_.constructor||_.constructor,className:_.classAsString||_.classAsString,cssClass:_.cssClass||_.cssClass,widget:E,callbacks:[]};if(i.forEach(function(B){if(B.cssClass===T.cssClass)throw new Error("The provided cssClass has already been registered: "+B.cssClass);if(B.className===T.className)throw new Error("The provided className has already been registered")}),_.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");var L=s(_.classAsString,T);L||i.push(T)}function v(_,w){var E=s(_);E&&E.callbacks.push(w)}function I(){for(var _=0;_<i.length;_++)f(i[_].className)}function S(_){if(_){var w=e.indexOf(_);e.splice(w,1);var E=_.element_.getAttribute("data-upgraded").split(","),T=E.indexOf(_[n].classAsString);E.splice(T,1),_.element_.setAttribute("data-upgraded",E.join(","));var L=u("mdl-componentdowngraded",!0,!1);_.element_.dispatchEvent(L)}}function A(_){var w=function(T){e.filter(function(L){return L.element_===T}).forEach(S)};if(_ instanceof Array||_ instanceof NodeList)for(var E=0;E<_.length;E++)w(_[E]);else if(_ instanceof Node)w(_);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:f,upgradeElement:p,upgradeElements:m,upgradeAllRegistered:I,registerUpgradedCallback:v,register:b,downgradeElements:A}}();Te.ComponentConfigPublic;Te.ComponentConfig;Te.Component;Te.upgradeDom=Te.upgradeDom;Te.upgradeElement=Te.upgradeElement;Te.upgradeElements=Te.upgradeElements;Te.upgradeAllRegistered=Te.upgradeAllRegistered;Te.registerUpgradedCallback=Te.registerUpgradedCallback;Te.register=Te.register;Te.downgradeElements=Te.downgradeElements;window.componentHandler=Te;window.componentHandler=Te;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Te.upgradeAllRegistered()):(Te.upgradeElement=function(){},Te.register=function(){})});/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialButton=i,i.prototype.Constant_={},i.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},i.prototype.blurHandler_=function(e){e&&this.element_.blur()},i.prototype.disable=function(){this.element_.disabled=!0},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.element_.disabled=!1},i.prototype.enable=i.prototype.enable,i.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:i,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialProgress=i,i.prototype.Constant_={},i.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},i.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},i.prototype.setProgress=i.prototype.setProgress,i.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},i.prototype.setBuffer=i.prototype.setBuffer,i.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialSpinner=i,i.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},i.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},i.prototype.createLayer=function(e){var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var c=document.createElement("div");c.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),c.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var u=[s,a,c],f=0;f<u.length;f++){var p=document.createElement("div");p.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),u[f].appendChild(p)}n.appendChild(s),n.appendChild(a),n.appendChild(c),this.element_.appendChild(n)},i.prototype.createLayer=i.prototype.createLayer,i.prototype.stop=function(){this.element_.classList.remove("is-active")},i.prototype.stop=i.prototype.stop,i.prototype.start=function(){this.element_.classList.add("is-active")},i.prototype.start=i.prototype.start,i.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=i,i.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},i.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},i.prototype.onKeyDown_=function(e){var n=e.target.value.split(`
`).length;e.keyCode===13&&n>=this.maxRows&&e.preventDefault()},i.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},i.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.onReset_=function(e){this.updateClasses_()},i.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},i.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},i.prototype.checkDisabled=i.prototype.checkDisabled,i.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.checkFocus=i.prototype.checkFocus,i.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},i.prototype.checkValidity=i.prototype.checkValidity,i.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},i.prototype.checkDirty=i.prototype.checkDirty,i.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},i.prototype.enable=i.prototype.enable,i.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},i.prototype.change=i.prototype.change,i.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:i,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var i,e=typeof Object.create=="function"?Object.create:function(t){function r(){}return r.prototype=t,new r},n;if(typeof Object.setPrototypeOf=="function")n=Object.setPrototypeOf;else{var s;e:{var a={xb:!0},c={};try{c.__proto__=a,s=c.xb;break e}catch{}s=!1}n=s?function(t,r){if(t.__proto__=r,t.__proto__!==r)throw new TypeError(t+" is not extensible");return t}:null}var u=n;function f(t,r){if(t.prototype=e(r.prototype),t.prototype.constructor=t,u)u(t,r);else for(var o in r)if(o!="prototype")if(Object.defineProperties){var l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l)}else t[o]=r[o];t.K=r.prototype}var p=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){t!=Array.prototype&&t!=Object.prototype&&(t[r]=o.value)},m=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function b(t,r){if(r){var o=m;t=t.split(".");for(var l=0;l<t.length-1;l++){var d=t[l];d in o||(o[d]={}),o=o[d]}t=t[t.length-1],l=o[t],r=r(l),r!=l&&r!=null&&p(o,t,{configurable:!0,writable:!0,value:r})}}b("Object.is",function(t){return t||function(r,o){return r===o?r!==0||1/r===1/o:r!==r&&o!==o}}),b("Array.prototype.includes",function(t){return t||function(r,o){var l=this;l instanceof String&&(l=String(l));var d=l.length;for(o=o||0,0>o&&(o=Math.max(o+d,0));o<d;o++){var h=l[o];if(h===r||Object.is(h,r))return!0}return!1}});var v=this;function I(t){return t!==void 0}function S(t){return typeof t=="string"}var A=/^[\w+/_-]+[=]{0,2}$/,_=null;function w(){}function E(t){t.W=void 0,t.Xa=function(){return t.W?t.W:t.W=new t}}function T(t){var r=typeof t;if(r=="object")if(t){if(t instanceof Array)return"array";if(t instanceof Object)return r;var o=Object.prototype.toString.call(t);if(o=="[object Window]")return"object";if(o=="[object Array]"||typeof t.length=="number"&&typeof t.splice<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("splice"))return"array";if(o=="[object Function]"||typeof t.call<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("call"))return"function"}else return"null";else if(r=="function"&&typeof t.call>"u")return"object";return r}function L(t){return T(t)=="array"}function B(t){var r=T(t);return r=="array"||r=="object"&&typeof t.length=="number"}function G(t){return T(t)=="function"}function $(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}var le="closure_uid_"+(1e9*Math.random()>>>0),at=0;function Mt(t,r,o){return t.call.apply(t.bind,arguments)}function Tt(t,r,o){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,l),t.apply(r,d)}}return function(){return t.apply(r,arguments)}}function ne(t,r,o){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ne=Mt:ne=Tt,ne.apply(null,arguments)}function Fe(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var l=o.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function he(t,r){for(var o in r)t[o]=r[o]}var jt=Date.now||function(){return+new Date};function fe(t,r){t=t.split(".");var o=v;t[0]in o||typeof o.execScript>"u"||o.execScript("var "+t[0]);for(var l;t.length&&(l=t.shift());)!t.length&&I(r)?o[l]=r:o[l]&&o[l]!==Object.prototype[l]?o=o[l]:o=o[l]={}}function V(t,r){function o(){}o.prototype=r.prototype,t.K=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.vc=function(l,d,h){for(var g=Array(arguments.length-2),y=2;y<arguments.length;y++)g[y-2]=arguments[y];return r.prototype[d].apply(l,g)}}function ye(t){if(Error.captureStackTrace)Error.captureStackTrace(this,ye);else{var r=Error().stack;r&&(this.stack=r)}t&&(this.message=String(t))}V(ye,Error),ye.prototype.name="CustomError";var er;function tr(t,r){t=t.split("%s");for(var o="",l=t.length-1,d=0;d<l;d++)o+=t[d]+(d<r.length?r[d]:"%s");ye.call(this,o+t[l])}V(tr,ye),tr.prototype.name="AssertionError";function me(t,r){throw new tr("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}var Ue=Array.prototype.indexOf?function(t,r){return Array.prototype.indexOf.call(t,r,void 0)}:function(t,r){if(S(t))return S(r)&&r.length==1?t.indexOf(r,0):-1;for(var o=0;o<t.length;o++)if(o in t&&t[o]===r)return o;return-1},Ie=Array.prototype.forEach?function(t,r,o){Array.prototype.forEach.call(t,r,o)}:function(t,r,o){for(var l=t.length,d=S(t)?t.split(""):t,h=0;h<l;h++)h in d&&r.call(o,d[h],h,t)};function Ge(t,r){for(var o=S(t)?t.split(""):t,l=t.length-1;0<=l;--l)l in o&&r.call(void 0,o[l],l,t)}var Ee=Array.prototype.filter?function(t,r){return Array.prototype.filter.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=[],d=0,h=S(t)?t.split(""):t,g=0;g<o;g++)if(g in h){var y=h[g];r.call(void 0,y,g,t)&&(l[d++]=y)}return l},lt=Array.prototype.map?function(t,r){return Array.prototype.map.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=Array(o),d=S(t)?t.split(""):t,h=0;h<o;h++)h in d&&(l[h]=r.call(void 0,d[h],h,t));return l},G0=Array.prototype.some?function(t,r){return Array.prototype.some.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=S(t)?t.split(""):t,d=0;d<o;d++)if(d in l&&r.call(void 0,l[d],d,t))return!0;return!1};function Ft(t,r){return 0<=Ue(t,r)}function ff(t,r){r=Ue(t,r);var o;return(o=0<=r)&&fa(t,r),o}function fa(t,r){return Array.prototype.splice.call(t,r,1).length==1}function z0(t,r){e:{for(var o=t.length,l=S(t)?t.split(""):t,d=0;d<o;d++)if(d in l&&r.call(void 0,l[d],d,t)){r=d;break e}r=-1}0<=r&&fa(t,r)}function q0(t,r){var o=0;Ge(t,function(l,d){r.call(void 0,l,d,t)&&fa(t,d)&&o++})}function pf(t){return Array.prototype.concat.apply([],arguments)}function mf(t){var r=t.length;if(0<r){for(var o=Array(r),l=0;l<r;l++)o[l]=t[l];return o}return[]}function K0(t,r,o){return 2>=arguments.length?Array.prototype.slice.call(t,r):Array.prototype.slice.call(t,r,o)}var kt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},Y0=/&/g,J0=/</g,X0=/>/g,Q0=/"/g,Z0=/'/g,ew=/\x00/g,tw=/[\x00&<>"']/;function xc(t,r){return t<r?-1:t>r?1:0}function nr(t){return tw.test(t)&&(t.indexOf("&")!=-1&&(t=t.replace(Y0,"&amp;")),t.indexOf("<")!=-1&&(t=t.replace(J0,"&lt;")),t.indexOf(">")!=-1&&(t=t.replace(X0,"&gt;")),t.indexOf('"')!=-1&&(t=t.replace(Q0,"&quot;")),t.indexOf("'")!=-1&&(t=t.replace(Z0,"&#39;")),t.indexOf("\0")!=-1&&(t=t.replace(ew,"&#0;"))),t}function gf(t,r,o){for(var l in t)r.call(o,t[l],l,t)}function Mc(t){var r={},o;for(o in t)r[o]=t[o];return r}var vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(t,r){for(var o,l,d=1;d<arguments.length;d++){l=arguments[d];for(o in l)t[o]=l[o];for(var h=0;h<vf.length;h++)o=vf[h],Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}}var ir="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function ui(){}ui.prototype.next=function(){throw ir},ui.prototype.ha=function(){return this};function _f(t){if(t instanceof ui)return t;if(typeof t.ha=="function")return t.ha(!1);if(B(t)){var r=0,o=new ui;return o.next=function(){for(;;){if(r>=t.length)throw ir;if(r in t)return t[r++];r++}},o}throw Error("Not implemented")}function nw(t,r){if(B(t))try{Ie(t,r,void 0)}catch(o){if(o!==ir)throw o}else{t=_f(t);try{for(;;)r.call(void 0,t.next(),void 0,t)}catch(o){if(o!==ir)throw o}}}function iw(t){if(B(t))return mf(t);t=_f(t);var r=[];return nw(t,function(o){r.push(o)}),r}function ma(t,r){this.g={},this.a=[],this.j=this.h=0;var o=arguments.length;if(1<o){if(o%2)throw Error("Uneven number of arguments");for(var l=0;l<o;l+=2)this.set(arguments[l],arguments[l+1])}else if(t)if(t instanceof ma)for(o=t.ja(),l=0;l<o.length;l++)this.set(o[l],t.get(o[l]));else for(l in t)this.set(l,t[l])}i=ma.prototype,i.la=function(){ga(this);for(var t=[],r=0;r<this.a.length;r++)t.push(this.g[this.a[r]]);return t},i.ja=function(){return ga(this),this.a.concat()},i.clear=function(){this.g={},this.j=this.h=this.a.length=0};function ga(t){if(t.h!=t.a.length){for(var r=0,o=0;r<t.a.length;){var l=t.a[r];di(t.g,l)&&(t.a[o++]=l),r++}t.a.length=o}if(t.h!=t.a.length){var d={};for(o=r=0;r<t.a.length;)l=t.a[r],di(d,l)||(t.a[o++]=l,d[l]=1),r++;t.a.length=o}}i.get=function(t,r){return di(this.g,t)?this.g[t]:r},i.set=function(t,r){di(this.g,t)||(this.h++,this.a.push(t),this.j++),this.g[t]=r},i.forEach=function(t,r){for(var o=this.ja(),l=0;l<o.length;l++){var d=o[l],h=this.get(d);t.call(r,h,d,this)}},i.ha=function(t){ga(this);var r=0,o=this.j,l=this,d=new ui;return d.next=function(){if(o!=l.j)throw Error("The map has changed since the iterator was created");if(r>=l.a.length)throw ir;var h=l.a[r++];return t?h:l.g[h]},d};function di(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var rw=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sw(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var l=t[o].indexOf("="),d=null;if(0<=l){var h=t[o].substring(0,l);d=t[o].substring(l+1)}else h=t[o];r(h,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function yf(t,r,o,l){for(var d=o.length;0<=(r=t.indexOf(o,r))&&r<l;){var h=t.charCodeAt(r-1);if((h==38||h==63)&&(h=t.charCodeAt(r+d),!h||h==61||h==38||h==35))return r;r+=d+1}return-1}var bf=/#|$/;function va(t,r){var o=t.search(bf),l=yf(t,0,r,o);if(0>l)return null;var d=t.indexOf("&",l);return(0>d||d>o)&&(d=o),l+=r.length+1,decodeURIComponent(t.substr(l,d-l).replace(/\+/g," "))}var ow=/[?&]($|#)/;function xn(t,r){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var o;t instanceof xn?(this.i=I(r)?r:t.i,Fc(this,t.j),this.A=t.A,this.h=t.h,Uc(this,t.C),this.g=t.g,Bc(this,Ef(t.a)),this.s=t.s):t&&(o=String(t).match(rw))?(this.i=!!r,Fc(this,o[1]||"",!0),this.A=gs(o[2]||""),this.h=gs(o[3]||"",!0),Uc(this,o[4]),this.g=gs(o[5]||"",!0),Bc(this,o[6]||"",!0),this.s=gs(o[7]||"")):(this.i=!!r,this.a=new _s(null,this.i))}xn.prototype.toString=function(){var t=[],r=this.j;r&&t.push(vs(r,wf,!0),":");var o=this.h;return(o||r=="file")&&(t.push("//"),(r=this.A)&&t.push(vs(r,wf,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.C,o!=null&&t.push(":",String(o))),(o=this.g)&&(this.h&&o.charAt(0)!="/"&&t.push("/"),t.push(vs(o,o.charAt(0)=="/"?cw:lw,!0))),(o=this.a.toString())&&t.push("?",o),(o=this.s)&&t.push("#",vs(o,dw)),t.join("")};function Fc(t,r,o){t.j=o?gs(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Uc(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.C=r}else t.C=null}function Bc(t,r,o){r instanceof _s?(t.a=r,hw(t.a,t.i)):(o||(r=vs(r,uw)),t.a=new _s(r,t.i))}function jc(t){return t instanceof xn?new xn(t):new xn(t,void 0)}function gs(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vs(t,r,o){return S(t)?(t=encodeURI(t).replace(r,aw),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wf=/[#\/\?@]/g,lw=/[#\?:]/g,cw=/[#\?]/g,uw=/[#\?@]/g,dw=/#/g;function _s(t,r){this.g=this.a=null,this.h=t||null,this.j=!!r}function Mn(t){t.a||(t.a=new ma,t.g=0,t.h&&sw(t.h,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=_s.prototype,i.add=function(t,r){Mn(this),this.h=null,t=rr(this,t);var o=this.a.get(t);return o||this.a.set(t,o=[]),o.push(r),this.g+=1,this};function hi(t,r){Mn(t),r=rr(t,r),di(t.a.g,r)&&(t.h=null,t.g-=t.a.get(r).length,t=t.a,di(t.g,r)&&(delete t.g[r],t.h--,t.j++,t.a.length>2*t.h&&ga(t)))}i.clear=function(){this.a=this.h=null,this.g=0};function If(t,r){return Mn(t),r=rr(t,r),di(t.a.g,r)}i.forEach=function(t,r){Mn(this),this.a.forEach(function(o,l){Ie(o,function(d){t.call(r,d,l,this)},this)},this)},i.ja=function(){Mn(this);for(var t=this.a.la(),r=this.a.ja(),o=[],l=0;l<r.length;l++)for(var d=t[l],h=0;h<d.length;h++)o.push(r[l]);return o},i.la=function(t){Mn(this);var r=[];if(S(t))If(this,t)&&(r=pf(r,this.a.get(rr(this,t))));else{t=this.a.la();for(var o=0;o<t.length;o++)r=pf(r,t[o])}return r},i.set=function(t,r){return Mn(this),this.h=null,t=rr(this,t),If(this,t)&&(this.g-=this.a.get(t).length),this.a.set(t,[r]),this.g+=1,this},i.get=function(t,r){return t?(t=this.la(t),0<t.length?String(t[0]):r):r},i.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var t=[],r=this.a.ja(),o=0;o<r.length;o++){var l=r[o],d=encodeURIComponent(String(l));l=this.la(l);for(var h=0;h<l.length;h++){var g=d;l[h]!==""&&(g+="="+encodeURIComponent(String(l[h]))),t.push(g)}}return this.h=t.join("&")};function Ef(t){var r=new _s;return r.h=t.h,t.a&&(r.a=new ma(t.a),r.g=t.g),r}function rr(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function hw(t,r){r&&!t.j&&(Mn(t),t.h=null,t.a.forEach(function(o,l){var d=l.toLowerCase();l!=d&&(hi(this,l),hi(this,d),0<o.length&&(this.h=null,this.a.set(rr(this,d),mf(o)),this.g+=o.length))},t)),t.j=r}function fi(t){this.a=jc(t)}function fw(t,r){r?t.a.a.set(Be.Sa,r):hi(t.a.a,Be.Sa)}function pw(t,r){r!==null?t.a.a.set(Be.Qa,r?"1":"0"):hi(t.a.a,Be.Qa)}function Cf(t){return t.a.a.get(Be.Pa)||null}function Sf(t,r){r?t.a.a.set(Be.PROVIDER_ID,r):hi(t.a.a,Be.PROVIDER_ID)}fi.prototype.toString=function(){return this.a.toString()};var Be={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},sr;e:{var Tf=v.navigator;if(Tf){var kf=Tf.userAgent;if(kf){sr=kf;break e}}sr=""}function X(t){return sr.indexOf(t)!=-1}function Rf(){return(X("Chrome")||X("CriOS"))&&!X("Edge")}function Wc(t){return Wc[" "](t),t}Wc[" "]=w;function mw(t,r){var o=_w;return Object.prototype.hasOwnProperty.call(o,t)?o[t]:o[t]=r(t)}var Af=X("Opera"),ke=X("Trident")||X("MSIE"),Fn=X("Edge"),gw=Fn||ke,Wt=X("Gecko")&&!(sr.toLowerCase().indexOf("webkit")!=-1&&!X("Edge"))&&!(X("Trident")||X("MSIE"))&&!X("Edge"),ft=sr.toLowerCase().indexOf("webkit")!=-1&&!X("Edge"),vw=ft&&X("Mobile"),Un=X("Macintosh");function Nf(){var t=v.document;return t?t.documentMode:void 0}var _a;e:{var Hc="",Vc=function(){var t=sr;if(Wt)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fn)return/Edge\/([\d\.]+)/.exec(t);if(ke)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ft)return/WebKit\/(\S+)/.exec(t);if(Af)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vc&&(Hc=Vc?Vc[1]:""),ke){var $c=Nf();if($c!=null&&$c>parseFloat(Hc)){_a=String($c);break e}}_a=Hc}var _w={};function pi(t){return mw(t,function(){for(var r=0,o=kt(String(_a)).split("."),l=kt(String(t)).split("."),d=Math.max(o.length,l.length),h=0;r==0&&h<d;h++){var g=o[h]||"",y=l[h]||"";do{if(g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],y=/(\d*)(\D*)(.*)/.exec(y)||["","","",""],g[0].length==0&&y[0].length==0)break;r=xc(g[1].length==0?0:parseInt(g[1],10),y[1].length==0?0:parseInt(y[1],10))||xc(g[2].length==0,y[2].length==0)||xc(g[2],y[2]),g=g[3],y=y[3]}while(r==0)}return 0<=r})}var ys,Pf=v.document;ys=Pf&&ke?Nf()||(Pf.compatMode=="CSS1Compat"?parseInt(_a,10):5):void 0;function or(t,r){this.a=t===Df&&r||"",this.g=Of}or.prototype.ma=!0,or.prototype.ka=function(){return this.a},or.prototype.toString=function(){return"Const{"+this.a+"}"};var Of={},Df={};function mi(){this.a="",this.h=xf}mi.prototype.ma=!0,mi.prototype.ka=function(){return this.a.toString()},mi.prototype.g=function(){return 1},mi.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function Lf(t){return t instanceof mi&&t.constructor===mi&&t.h===xf?t.a:(me("expected object of type TrustedResourceUrl, got '"+t+"' of type "+T(t)),"type_error:TrustedResourceUrl")}function yw(){var t=u1;t instanceof or&&t.constructor===or&&t.g===Of?t=t.a:(me("expected object of type Const, got '"+t+"'"),t="type_error:Const");var r=new mi;return r.a=t,r}var xf={};function Rt(){this.a="",this.h=Uf}Rt.prototype.ma=!0,Rt.prototype.ka=function(){return this.a.toString()},Rt.prototype.g=function(){return 1},Rt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Bn(t){return t instanceof Rt&&t.constructor===Rt&&t.h===Uf?t.a:(me("expected object of type SafeUrl, got '"+t+"' of type "+T(t)),"type_error:SafeUrl")}var Mf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ya(t){return t instanceof Rt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),Mf.test(t)||(t="about:invalid#zClosurez"),Gc(t))}function Ff(t){return t instanceof Rt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),Mf.test(t)||(t="about:invalid#zClosurez"),Gc(t))}var Uf={};function Gc(t){var r=new Rt;return r.a=t,r}Gc("about:blank");function ar(){this.a="",this.g=Bf}ar.prototype.ma=!0;var Bf={};ar.prototype.ka=function(){return this.a},ar.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function jn(){this.a="",this.j=jf,this.h=null}jn.prototype.g=function(){return this.h},jn.prototype.ma=!0,jn.prototype.ka=function(){return this.a.toString()},jn.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function ba(t){return t instanceof jn&&t.constructor===jn&&t.j===jf?t.a:(me("expected object of type SafeHtml, got '"+t+"' of type "+T(t)),"type_error:SafeHtml")}var jf={};function bs(t,r){var o=new jn;return o.a=t,o.h=r,o}bs("<!DOCTYPE html>",0);var bw=bs("",0);bs("<br>",0);var ww=function(t){var r=!1,o;return function(){return r||(o=t(),r=!0),o}}(function(){if(typeof document>"u")return!1;var t=document.createElement("div"),r=document.createElement("div");return r.appendChild(document.createElement("div")),t.appendChild(r),t.firstChild?(r=t.firstChild.firstChild,t.innerHTML=ba(bw),!r.parentElement):!1});function Iw(t,r){if(t.src=Lf(r),_===null)e:{if(r=v.document,(r=r.querySelector&&r.querySelector("script[nonce]"))&&(r=r.nonce||r.getAttribute("nonce"))&&A.test(r)){_=r;break e}_=""}r=_,r&&t.setAttribute("nonce",r)}function lr(t,r){r=r instanceof Rt?r:Ff(r),t.assign(Bn(r))}function Wn(t,r){this.a=I(t)?t:0,this.g=I(r)?r:0}Wn.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Wn.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Wn.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Wn.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function zc(t,r){this.width=t,this.height=r}i=zc.prototype,i.toString=function(){return"("+this.width+" x "+this.height+")"},i.aspectRatio=function(){return this.width/this.height},i.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},i.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},i.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function wa(t){return t?new Jc(ws(t)):er||(er=new Jc)}function qc(t,r){var o=r||document;return o.querySelectorAll&&o.querySelector?o.querySelectorAll("."+t):Wf(document,t,r)}function Kc(t,r){var o=r||document;if(o.getElementsByClassName)t=o.getElementsByClassName(t)[0];else{o=document;var l=r||o;t=l.querySelectorAll&&l.querySelector&&t?l.querySelector(t?"."+t:""):Wf(o,t,r)[0]||null}return t||null}function Wf(t,r,o){var l;if(t=o||t,t.querySelectorAll&&t.querySelector&&r)return t.querySelectorAll(r?"."+r:"");if(r&&t.getElementsByClassName){var d=t.getElementsByClassName(r);return d}if(d=t.getElementsByTagName("*"),r){var h={};for(o=l=0;t=d[o];o++){var g=t.className;typeof g.split=="function"&&Ft(g.split(/\s+/),r)&&(h[l++]=t)}return h.length=l,h}return d}function Ew(t,r){gf(r,function(o,l){o&&typeof o=="object"&&o.ma&&(o=o.ka()),l=="style"?t.style.cssText=o:l=="class"?t.className=o:l=="for"?t.htmlFor=o:Hf.hasOwnProperty(l)?t.setAttribute(Hf[l],o):l.lastIndexOf("aria-",0)==0||l.lastIndexOf("data-",0)==0?t.setAttribute(l,o):t[l]=o})}var Hf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ia(t){return t.scrollingElement?t.scrollingElement:(ft||t.compatMode!="CSS1Compat")&&t.body||t.documentElement}function gi(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function ws(t){return t.nodeType==9?t:t.ownerDocument||t.document}function Yc(t,r){if("textContent"in t)t.textContent=r;else if(t.nodeType==3)t.data=String(r);else if(t.firstChild&&t.firstChild.nodeType==3){for(;t.lastChild!=t.firstChild;)t.removeChild(t.lastChild);t.firstChild.data=String(r)}else{for(var o;o=t.firstChild;)t.removeChild(o);t.appendChild(ws(t).createTextNode(String(r)))}}function Vf(t,r){return r?Cw(t,function(o){return!r||S(o.className)&&Ft(o.className.split(/\s+/),r)}):null}function Cw(t,r){for(var o=0;t;){if(r(t))return t;t=t.parentNode,o++}return null}function Jc(t){this.a=t||v.document||document}Jc.prototype.N=function(){return S(void 0)?this.a.getElementById(void 0):void 0};var Ea={Fc:!0},$f={Hc:!0},Sw={Ec:!0},Gf={Gc:!0};function Hn(){throw Error("Do not instantiate directly")}Hn.prototype.va=null,Hn.prototype.toString=function(){return this.content};function Is(t,r,o,l){if(t=t(r||Rw,void 0,o),l=(l||wa()).a.createElement("DIV"),t=Tw(t),t.match(kw),t=bs(t,null),ww())for(;l.lastChild;)l.removeChild(l.lastChild);return l.innerHTML=ba(t),l.childNodes.length==1&&(t=l.firstChild,t.nodeType==1&&(l=t)),l}function Tw(t){if(!$(t))return nr(String(t));if(t instanceof Hn){if(t.fa===Ea)return t.content;if(t.fa===Gf)return nr(t.content)}return me("Soy template output is unsafe for use as HTML: "+t),"zSoyz"}var kw=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,Rw={};function Aw(t){if(t!=null)switch(t.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function Ca(){Hn.call(this)}V(Ca,Hn),Ca.prototype.fa=Ea;function W(t){return t!=null&&t.fa===Ea?t:t instanceof jn?D(ba(t).toString(),t.g()):D(nr(String(String(t))),Aw(t))}function Sa(){Hn.call(this)}V(Sa,Hn),Sa.prototype.fa=$f,Sa.prototype.va=1;function Ta(t,r){this.content=String(t),this.va=r!=null?r:null}V(Ta,Hn),Ta.prototype.fa=Gf;function se(t){return new Ta(t,void 0)}var D=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o,l){return o=new r(String(o)),l!==void 0&&(o.va=l),o}}(Ca),Nw=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o){return new r(String(o))}}(Sa);function Pw(t){function r(){}var o={label:Re("New password")};r.prototype=t,t=new r;for(var l in o)t[l]=o[l];return t}function Re(t){return(t=String(t))?new Ta(t,void 0):""}var zf=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o,l){return o=String(o),o?(o=new r(o),l!==void 0&&(o.va=l),o):""}}(Ca);function pt(t){return t!=null&&t.fa===Ea?String(String(t.content).replace(Uw,"").replace(Bw,"&lt;")).replace(xw,Dw):nr(String(t))}function vi(t){return t!=null&&t.fa===$f?t=String(t).replace(Qc,Xc):t instanceof Rt?t=String(Bn(t).toString()).replace(Qc,Xc):(t=String(t),Fw.test(t)?t=t.replace(Qc,Xc):(me("Bad value `%s` for |filterNormalizeUri",[t]),t="#zSoyz")),t}function qf(t){return t!=null&&t.fa===Sw?t=t.content:t==null?t="":t instanceof ar?t instanceof ar&&t.constructor===ar&&t.g===Bf?t=t.a:(me("expected object of type SafeStyle, got '"+t+"' of type "+T(t)),t="type_error:SafeStyle"):(t=String(t),Mw.test(t)||(me("Bad value `%s` for |filterCssValue",[t]),t="zSoyz")),t}var Ow={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\x85":"&#133;","\xA0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Dw(t){return Ow[t]}var Lw={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7F":"%7F","\x85":"%C2%85","\xA0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uFF01":"%EF%BC%81","\uFF03":"%EF%BC%83","\uFF04":"%EF%BC%84","\uFF06":"%EF%BC%86","\uFF07":"%EF%BC%87","\uFF08":"%EF%BC%88","\uFF09":"%EF%BC%89","\uFF0A":"%EF%BC%8A","\uFF0B":"%EF%BC%8B","\uFF0C":"%EF%BC%8C","\uFF0F":"%EF%BC%8F","\uFF1A":"%EF%BC%9A","\uFF1B":"%EF%BC%9B","\uFF1D":"%EF%BC%9D","\uFF1F":"%EF%BC%9F","\uFF20":"%EF%BC%A0","\uFF3B":"%EF%BC%BB","\uFF3D":"%EF%BC%BD"};function Xc(t){return Lw[t]}var xw=/[\x00\x22\x27\x3c\x3e]/g,Qc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mw=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Fw=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Uw=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Bw=/</g;function Zc(){return se("Enter a valid phone number")}function Kf(){return se("Unable to send password reset code to specified email")}function Yf(){return se("Something went wrong. Please try again.")}function Jf(){return se("This email already exists without any means of sign-in. Please reset the password to recover.")}function Xf(t){t=t||{};var r="";switch(t.code){case"invalid-argument":r+="Client specified an invalid argument.";break;case"invalid-configuration":r+="Client specified an invalid project configuration.";break;case"failed-precondition":r+="Request can not be executed in the current system state.";break;case"out-of-range":r+="Client specified an invalid range.";break;case"unauthenticated":r+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":r+="Client does not have sufficient permission.";break;case"not-found":r+="Specified resource is not found.";break;case"aborted":r+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":r+="The resource that a client tried to create already exists.";break;case"resource-exhausted":r+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":r+="Request cancelled by the client.";break;case"data-loss":r+="Unrecoverable data loss or data corruption.";break;case"unknown":r+="Unknown server error.";break;case"internal":r+="Internal server error.";break;case"not-implemented":r+="API method not implemented by the server.";break;case"unavailable":r+="Service unavailable.";break;case"deadline-exceeded":r+="Request deadline exceeded.";break;case"auth/user-disabled":r+="The user account has been disabled by an administrator.";break;case"auth/timeout":r+="The operation has timed out.";break;case"auth/too-many-requests":r+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":r+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":r+="A network error has occurred. Try again later.";break;case"restart-process":r+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":r+="No sign-in provider is available for the given email, please try with a different email."}return se(r)}function Qf(){return se("Please login again to perform this operation")}function Es(t,r,o){var l=Error.call(this);if(this.message=l.message,"stack"in l&&(this.stack=l.stack),this.code=jw+t,!(t=r)){switch(t="",this.code){case"firebaseui/merge-conflict":t+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:t+=Yf()}t=se(t).toString()}this.message=t||"",this.credential=o||null}f(Es,Error),Es.prototype.toJSON=function(){return{code:this.code,message:this.message}};var jw="firebaseui/";function _i(){this.T=this.T,this.C=this.C}var Ww=0;_i.prototype.T=!1,_i.prototype.m=function(){!this.T&&(this.T=!0,this.o(),Ww!=0)&&(this[le]||(this[le]=++at))};function Cs(t,r){t.T?I(void 0)?r.call(void 0):r():(t.C||(t.C=[]),t.C.push(I(void 0)?ne(r,void 0):r))}_i.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ss(t){t&&typeof t.m=="function"&&t.m()}var Hw=Object.freeze||function(t){return t},Zf=!ke||9<=Number(ys),Vw=ke&&!pi("9"),$w=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",w,r),v.removeEventListener("test",w,r)}catch{}return t}();function pn(t,r){this.type=t,this.g=this.target=r,this.h=!1,this.qb=!0}pn.prototype.stopPropagation=function(){this.h=!0},pn.prototype.preventDefault=function(){this.qb=!1};function mt(t,r){if(pn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var o=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(Wt){e:{try{Wc(r.nodeName);var d=!0;break e}catch{}d=!1}d||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.keyCode=t.keyCode||0,this.key=t.key||"",this.j=t.charCode||(o=="keypress"?t.keyCode:0),this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=S(t.pointerType)?t.pointerType:Gw[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}V(mt,pn);var Gw=Hw({2:"touch",3:"pen",4:"mouse"});mt.prototype.stopPropagation=function(){mt.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},mt.prototype.preventDefault=function(){mt.K.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Vw)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch{}};var Ts="closure_listenable_"+(1e6*Math.random()|0),zw=0;function qw(t,r,o,l,d){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!l,this.La=d,this.key=++zw,this.sa=this.Ia=!1}function ka(t){t.sa=!0,t.listener=null,t.proxy=null,t.src=null,t.La=null}function Ra(t){this.src=t,this.a={},this.g=0}Ra.prototype.add=function(t,r,o,l,d){var h=t.toString();t=this.a[h],t||(t=this.a[h]=[],this.g++);var g=tu(t,r,l,d);return-1<g?(r=t[g],o||(r.Ia=!1)):(r=new qw(r,this.src,h,!!l,d),r.Ia=o,t.push(r)),r};function eu(t,r){var o=r.type;o in t.a&&ff(t.a[o],r)&&(ka(r),t.a[o].length==0&&(delete t.a[o],t.g--))}function tu(t,r,o,l){for(var d=0;d<t.length;++d){var h=t[d];if(!h.sa&&h.listener==r&&h.capture==!!o&&h.La==l)return d}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),iu={};function Ht(t,r,o,l,d){if(l&&l.once)return ks(t,r,o,l,d);if(L(r)){for(var h=0;h<r.length;h++)Ht(t,r[h],o,l,d);return null}return o=su(o),t&&t[Ts]?t.J.add(String(r),o,!1,$(l)?!!l.capture:!!l,d):ep(t,r,o,!1,l,d)}function ep(t,r,o,l,d,h){if(!r)throw Error("Invalid event type");var g=$(d)?!!d.capture:!!d,y=Aa(t);if(y||(t[nu]=y=new Ra(t)),o=y.add(r,o,l,g,h),o.proxy)return o;if(l=Kw(),o.proxy=l,l.src=t,l.listener=o,t.addEventListener)$w||(d=g),d===void 0&&(d=!1),t.addEventListener(r.toString(),l,d);else if(t.attachEvent)t.attachEvent(tp(r.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Kw(){var t=Yw,r=Zf?function(o){return t.call(r.src,r.listener,o)}:function(o){if(o=t.call(r.src,r.listener,o),!o)return o};return r}function ks(t,r,o,l,d){if(L(r)){for(var h=0;h<r.length;h++)ks(t,r[h],o,l,d);return null}return o=su(o),t&&t[Ts]?t.J.add(String(r),o,!0,$(l)?!!l.capture:!!l,d):ep(t,r,o,!0,l,d)}function yi(t,r,o,l,d){if(L(r))for(var h=0;h<r.length;h++)yi(t,r[h],o,l,d);else l=$(l)?!!l.capture:!!l,o=su(o),t&&t[Ts]?(t=t.J,r=String(r).toString(),r in t.a&&(h=t.a[r],o=tu(h,o,l,d),-1<o&&(ka(h[o]),fa(h,o),h.length==0&&(delete t.a[r],t.g--)))):t&&(t=Aa(t))&&(r=t.a[r.toString()],t=-1,r&&(t=tu(r,o,l,d)),(o=-1<t?r[t]:null)&&Vn(o))}function Vn(t){if(typeof t!="number"&&t&&!t.sa){var r=t.src;if(r&&r[Ts])eu(r.J,t);else{var o=t.type,l=t.proxy;r.removeEventListener?r.removeEventListener(o,l,t.capture):r.detachEvent?r.detachEvent(tp(o),l):r.addListener&&r.removeListener&&r.removeListener(l),(o=Aa(r))?(eu(o,t),o.g==0&&(o.src=null,r[nu]=null)):ka(t)}}}function tp(t){return t in iu?iu[t]:iu[t]="on"+t}function np(t,r,o,l){var d=!0;if((t=Aa(t))&&(r=t.a[r.toString()]))for(r=r.concat(),t=0;t<r.length;t++){var h=r[t];h&&h.capture==o&&!h.sa&&(h=ip(h,l),d=d&&h!==!1)}return d}function ip(t,r){var o=t.listener,l=t.La||t.src;return t.Ia&&Vn(t),o.call(l,r)}function Yw(t,r){if(t.sa)return!0;if(!Zf){if(!r)e:{r=["window","event"];for(var o=v,l=0;l<r.length;l++)if(o=o[r[l]],o==null){r=null;break e}r=o}if(l=r,r=new mt(l,this),o=!0,!(0>l.keyCode||l.returnValue!=null)){e:{var d=!1;if(l.keyCode==0)try{l.keyCode=-1;break e}catch{d=!0}(d||l.returnValue==null)&&(l.returnValue=!0)}for(l=[],d=r.g;d;d=d.parentNode)l.push(d);for(t=t.type,d=l.length-1;!r.h&&0<=d;d--){r.g=l[d];var h=np(l[d],t,!0,r);o=o&&h}for(d=0;!r.h&&d<l.length;d++)r.g=l[d],h=np(l[d],t,!1,r),o=o&&h}return o}return ip(t,new mt(r,this))}function Aa(t){return t=t[nu],t instanceof Ra?t:null}var ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function su(t){return G(t)?t:(t[ru]||(t[ru]=function(r){return t.handleEvent(r)}),t[ru])}function je(){_i.call(this),this.J=new Ra(this),this.wb=this,this.Ha=null}V(je,_i),je.prototype[Ts]=!0,je.prototype.Za=function(t){this.Ha=t},je.prototype.removeEventListener=function(t,r,o,l){yi(this,t,r,o,l)};function $n(t,r){var o,l=t.Ha;if(l)for(o=[];l;l=l.Ha)o.push(l);if(t=t.wb,l=r.type||r,S(r))r=new pn(r,t);else if(r instanceof pn)r.target=r.target||t;else{var d=r;r=new pn(l,t),pa(r,d)}if(d=!0,o)for(var h=o.length-1;!r.h&&0<=h;h--){var g=r.g=o[h];d=Na(g,l,!0,r)&&d}if(r.h||(g=r.g=t,d=Na(g,l,!0,r)&&d,r.h||(d=Na(g,l,!1,r)&&d)),o)for(h=0;!r.h&&h<o.length;h++)g=r.g=o[h],d=Na(g,l,!1,r)&&d;return d}je.prototype.o=function(){if(je.K.o.call(this),this.J){var t=this.J,r;for(r in t.a){for(var o=t.a[r],l=0;l<o.length;l++)ka(o[l]);delete t.a[r],t.g--}}this.Ha=null};function Na(t,r,o,l){if(r=t.J.a[String(r)],!r)return!0;r=r.concat();for(var d=!0,h=0;h<r.length;++h){var g=r[h];if(g&&!g.sa&&g.capture==o){var y=g.listener,C=g.La||g.src;g.Ia&&eu(t.J,g),d=y.call(C,l)!==!1&&d}}return d&&l.qb!=0}var At={},rp=0;function sp(t,r){if(!t)throw Error("Event target element must be provided!");if(t=ou(t),At[t]&&At[t].length)for(var o=0;o<At[t].length;o++)$n(At[t][o],r)}function Jw(t){var r=ou(t.N());At[r]&&At[r].length&&(z0(At[r],function(o){return o==t}),At[r].length||delete At[r])}function ou(t){return typeof t.a>"u"&&(t.a=rp,rp++),t.a}function Pa(t){if(!t)throw Error("Event target element must be provided!");je.call(this),this.a=t}f(Pa,je),Pa.prototype.N=function(){return this.a},Pa.prototype.register=function(){var t=ou(this.N());At[t]?Ft(At[t],this)||At[t].push(this):At[t]=[this]};function op(t){if(!t)return!1;try{return!!t.$goog_Thenable}catch{return!1}}function au(t,r){this.h=t,this.j=r,this.g=0,this.a=null}au.prototype.get=function(){if(0<this.g){this.g--;var t=this.a;this.a=t.next,t.next=null}else t=this.h();return t};function ap(t,r){t.j(r),100>t.g&&(t.g++,r.next=t.a,t.a=r)}function lp(){this.g=this.a=null}var cp=new au(function(){return new lu},function(t){t.reset()});lp.prototype.add=function(t,r){var o=cp.get();o.set(t,r),this.g?this.g.next=o:this.a=o,this.g=o};function Xw(){var t=dp,r=null;return t.a&&(r=t.a,t.a=t.a.next,t.a||(t.g=null),r.next=null),r}function lu(){this.next=this.g=this.a=null}lu.prototype.set=function(t,r){this.a=t,this.g=r,this.next=null},lu.prototype.reset=function(){this.next=this.g=this.a=null};function up(t){v.setTimeout(function(){throw t},0)}var cu;function Qw(){var t=v.MessageChannel;if(typeof t>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!X("Presto")&&(t=function(){var d=document.createElement("IFRAME");d.style.display="none",d.src="",document.documentElement.appendChild(d);var h=d.contentWindow;d=h.document,d.open(),d.write(""),d.close();var g="callImmediate"+Math.random(),y=h.location.protocol=="file:"?"*":h.location.protocol+"//"+h.location.host;d=ne(function(C){(y=="*"||C.origin==y)&&C.data==g&&this.port1.onmessage()},this),h.addEventListener("message",d,!1),this.port1={},this.port2={postMessage:function(){h.postMessage(g,y)}}}),typeof t<"u"&&!X("Trident")&&!X("MSIE")){var r=new t,o={},l=o;return r.port1.onmessage=function(){if(I(o.next)){o=o.next;var d=o.gb;o.gb=null,d()}},function(d){l.next={gb:d},l=l.next,r.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(d){var h=document.createElement("SCRIPT");h.onreadystatechange=function(){h.onreadystatechange=null,h.parentNode.removeChild(h),h=null,d(),d=null},document.documentElement.appendChild(h)}:function(d){v.setTimeout(d,0)}}function uu(t,r){Oa||Zw(),du||(Oa(),du=!0),dp.add(t,r)}var Oa;function Zw(){if(v.Promise&&v.Promise.resolve){var t=v.Promise.resolve(void 0);Oa=function(){t.then(hp)}}else Oa=function(){var r=hp;!G(v.setImmediate)||v.Window&&v.Window.prototype&&!X("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(cu||(cu=Qw()),cu(r)):v.setImmediate(r)}}var du=!1,dp=new lp;function hp(){for(var t;t=Xw();){try{t.a.call(t.g)}catch(r){up(r)}ap(cp,t)}du=!1}function We(t){if(this.a=bi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,t!=w)try{var r=this;t.call(void 0,function(o){wi(r,Rs,o)},function(o){if(!(o instanceof ur))try{throw o instanceof Error?o:Error("Promise rejected.")}catch{}wi(r,mn,o)})}catch(o){wi(this,mn,o)}}var bi=0,Rs=2,mn=3;function fp(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}fp.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var pp=new au(function(){return new fp},function(t){t.reset()});function hu(t,r,o){var l=pp.get();return l.s=t,l.g=r,l.j=o,l}function Ae(t){if(t instanceof We)return t;var r=new We(w);return wi(r,Rs,t),r}function cr(t){return new We(function(r,o){o(t)})}We.prototype.then=function(t,r,o){return gp(this,G(t)?t:null,G(r)?r:null,o)},We.prototype.$goog_Thenable=!0,i=We.prototype,i.fc=function(t,r){return t=hu(t,t,r),t.h=!0,fu(this,t),this},i.Ca=function(t,r){return gp(this,null,t,r)},i.cancel=function(t){this.a==bi&&uu(function(){var r=new ur(t);mp(this,r)},this)};function mp(t,r){if(t.a==bi)if(t.h){var o=t.h;if(o.g){for(var l=0,d=null,h=null,g=o.g;g&&(g.h||(l++,g.a==t&&(d=g),!(d&&1<l)));g=g.next)d||(h=g);d&&(o.a==bi&&l==1?mp(o,r):(h?(l=h,l.next==o.j&&(o.j=l),l.next=l.next.next):_p(o),yp(o,d,mn,r)))}t.h=null}else wi(t,mn,r)}function fu(t,r){t.g||t.a!=Rs&&t.a!=mn||vp(t),t.j?t.j.next=r:t.g=r,t.j=r}function gp(t,r,o,l){var d=hu(null,null,null);return d.a=new We(function(h,g){d.s=r?function(y){try{var C=r.call(l,y);h(C)}catch(N){g(N)}}:h,d.g=o?function(y){try{var C=o.call(l,y);!I(C)&&y instanceof ur?g(y):h(C)}catch(N){g(N)}}:g}),d.a.h=t,fu(t,d),d.a}i.hc=function(t){this.a=bi,wi(this,Rs,t)},i.ic=function(t){this.a=bi,wi(this,mn,t)};function wi(t,r,o){if(t.a==bi){t===o&&(r=mn,o=new TypeError("Promise cannot resolve to itself")),t.a=1;e:{var l=o,d=t.hc,h=t.ic;if(l instanceof We){fu(l,hu(d||w,h||null,t));var g=!0}else if(op(l))l.then(d,h,t),g=!0;else{if($(l))try{var y=l.then;if(G(y)){e1(l,y,d,h,t),g=!0;break e}}catch(C){h.call(t,C),g=!0;break e}g=!1}}g||(t.A=o,t.a=r,t.h=null,vp(t),r!=mn||o instanceof ur||t1(t,o))}}function e1(t,r,o,l,d){function h(C){y||(y=!0,l.call(d,C))}function g(C){y||(y=!0,o.call(d,C))}var y=!1;try{r.call(t,g,h)}catch(C){h(C)}}function vp(t){t.i||(t.i=!0,uu(t.Hb,t))}function _p(t){var r=null;return t.g&&(r=t.g,t.g=r.next,r.next=null),t.g||(t.j=null),r}i.Hb=function(){for(var t;t=_p(this);)yp(this,t,this.a,this.A);this.i=!1};function yp(t,r,o,l){if(o==mn&&r.g&&!r.h)for(;t&&t.s;t=t.h)t.s=!1;if(r.a)r.a.h=null,bp(r,o,l);else try{r.h?r.s.call(r.j):bp(r,o,l)}catch(d){wp.call(null,d)}ap(pp,r)}function bp(t,r,o){r==Rs?t.s.call(t.j,o):t.g&&t.g.call(t.j,o)}function t1(t,r){t.s=!0,uu(function(){t.s&&wp.call(null,r)})}var wp=up;function ur(t){ye.call(this,t)}V(ur,ye),ur.prototype.name="cancel";function Ip(t,r,o){r||(r={}),o=o||window;var l=t instanceof Rt?t:ya(typeof t.href<"u"?t.href:String(t));t=r.target||t.target;var d=[];for(h in r)switch(h){case"width":case"height":case"top":case"left":d.push(h+"="+r[h]);break;case"target":case"noopener":case"noreferrer":break;default:d.push(h+"="+(r[h]?1:0))}var h=d.join(",");return(X("iPhone")&&!X("iPod")&&!X("iPad")||X("iPad")||X("iPod"))&&o.navigator&&o.navigator.standalone&&t&&t!="_self"?(h=o.document.createElement("A"),l=l instanceof Rt?l:Ff(l),h.href=Bn(l),h.setAttribute("target",t),r.noreferrer&&h.setAttribute("rel","noreferrer"),r=document.createEvent("MouseEvent"),r.initMouseEvent("click",!0,!0,o,1),h.dispatchEvent(r),o={}):r.noreferrer?(o=o.open("",t,h),r=Bn(l).toString(),o&&(gw&&r.indexOf(";")!=-1&&(r="'"+r.replace(/'/g,"%27")+"'"),o.opener=null,r=bs('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+nr(r)+'">',null),o.document.write(ba(r)),o.document.close())):(o=o.open(Bn(l).toString(),t,h))&&r.noopener&&(o.opener=null),o}function Ep(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function dr(t){Ip(t,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function Da(t,r){if(t=$(t)&&t.nodeType==1?t:document.querySelector(String(t)),t==null)throw Error(r||"Cannot find element.");return t}function gn(){return window.location.href}function n1(){var t=null;return new We(function(r){v.document.readyState=="complete"?r():(t=function(){r()},ks(window,"load",t))}).Ca(function(r){throw yi(window,"load",t),r})}function i1(){for(var t=32,r=[];0<t;)r.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return r.join("")}function r1(t,r,o){return o=o===void 0?{}:o,Object.keys(t).filter(function(l){return r.includes(l)}).reduce(function(l,d){return l[d]=t[d],l},o)}function Gn(t){var r=a1;this.s=[],this.T=r,this.O=t||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}Gn.prototype.cancel=function(t){if(this.a)this.h instanceof Gn&&this.h.cancel();else{if(this.g){var r=this.g;delete this.g,t?r.cancel(t):(r.C--,0>=r.C&&r.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(t=new Ns,La(this),As(this,!1,t))}},Gn.prototype.L=function(t,r){this.A=!1,As(this,t,r)};function As(t,r,o){t.a=!0,t.h=o,t.j=!r,Tp(t)}function La(t){if(t.a){if(!t.J)throw new xa;t.J=!1}}Gn.prototype.callback=function(t){La(this),As(this,!0,t)};function Cp(t,r,o){t.s.push([r,o,void 0]),t.a&&Tp(t)}Gn.prototype.then=function(t,r,o){var l,d,h=new We(function(g,y){l=g,d=y});return Cp(this,l,function(g){g instanceof Ns?h.cancel():d(g)}),h.then(t,r,o)},Gn.prototype.$goog_Thenable=!0;function Sp(t){return G0(t.s,function(r){return G(r[1])})}function Tp(t){if(t.i&&t.a&&Sp(t)){var r=t.i,o=Ma[r];o&&(v.clearTimeout(o.a),delete Ma[r]),t.i=0}t.g&&(t.g.C--,delete t.g),r=t.h;for(var l=o=!1;t.s.length&&!t.A;){var d=t.s.shift(),h=d[0],g=d[1];if(d=d[2],h=t.j?g:h)try{var y=h.call(d||t.O,r);I(y)&&(t.j=t.j&&(y==r||y instanceof Error),t.h=r=y),(op(r)||typeof v.Promise=="function"&&r instanceof v.Promise)&&(l=!0,t.A=!0)}catch(C){r=C,t.j=!0,Sp(t)||(o=!0)}}t.h=r,l&&(y=ne(t.L,t,!0),l=ne(t.L,t,!1),r instanceof Gn?(Cp(r,y,l),r.l=!0):r.then(y,l)),o&&(r=new kp(r),Ma[r.a]=r,t.i=r.a)}function xa(){ye.call(this)}V(xa,ye),xa.prototype.message="Deferred has already fired",xa.prototype.name="AlreadyCalledError";function Ns(){ye.call(this)}V(Ns,ye),Ns.prototype.message="Deferred was canceled",Ns.prototype.name="CanceledError";function kp(t){this.a=v.setTimeout(ne(this.h,this),0),this.g=t}kp.prototype.h=function(){throw delete Ma[this.a],this.g};var Ma={};function s1(t){var r={},o=r.document||document,l=Lf(t).toString(),d=document.createElement("SCRIPT"),h={rb:d,sb:void 0},g=new Gn(h),y=null,C=r.timeout!=null?r.timeout:5e3;return 0<C&&(y=window.setTimeout(function(){Fa(d,!0);var N=new pu(c1,"Timeout reached for loading script "+l);La(g),As(g,!1,N)},C),h.sb=y),d.onload=d.onreadystatechange=function(){d.readyState&&d.readyState!="loaded"&&d.readyState!="complete"||(Fa(d,r.xc||!1,y),g.callback(null))},d.onerror=function(){Fa(d,!0,y);var N=new pu(l1,"Error while loading script "+l);La(g),As(g,!1,N)},h=r.attributes||{},pa(h,{type:"text/javascript",charset:"UTF-8"}),Ew(d,h),Iw(d,t),o1(o).appendChild(d),g}function o1(t){var r=(t||document).getElementsByTagName("HEAD");return r&&r.length!=0?r[0]:t.documentElement}function a1(){if(this&&this.rb){var t=this.rb;t&&t.tagName=="SCRIPT"&&Fa(t,!0,this.sb)}}function Fa(t,r,o){o!=null&&v.clearTimeout(o),t.onload=w,t.onerror=w,t.onreadystatechange=w,r&&window.setTimeout(function(){gi(t)},0)}var l1=0,c1=1;function pu(t,r){var o="Jsloader error (code #"+t+")";r&&(o+=": "+r),ye.call(this,o),this.code=t}V(pu,ye);function Ps(){return v.google&&v.google.accounts&&v.google.accounts.id||null}function mu(t){this.a=t||Ps(),this.h=!1,this.g=null}mu.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function Rp(t,r,o){if(t.a&&r)return function(){return t.h=!0,new We(function(d){t.g=d,t.a.initialize({client_id:r,callback:d,auto_select:!o}),t.a.prompt()})}();if(r){var l=gu.Xa().load().then(function(){return t.a=Ps(),Rp(t,r,o)}).Ca(function(){return null});return Ae(l)}return Ae(null)}E(mu);var u1=new or(Df,"https://accounts.google.com/gsi/client");function gu(){this.a=null}gu.prototype.load=function(){var t=this;if(this.a)return this.a;var r=yw();return Ps()?Ae():this.a=n1().then(function(){if(!Ps())return new We(function(o,l){var d=setTimeout(function(){t.a=null,l(Error("Network error!"))},1e4);v.onGoogleLibraryLoad=function(){clearTimeout(d),o()},Ae(s1(r)).then(function(){Ps()&&o()}).Ca(function(h){clearTimeout(d),t.a=null,l(h)})})})},E(gu);function vu(t,r){this.a=t,this.g=r||function(o){throw o}}vu.prototype.confirm=function(t){return Ae(this.a.confirm(t)).Ca(this.g)};function _u(t,r,o){this.reset(t,r,o,void 0,void 0)}_u.prototype.a=null,_u.prototype.reset=function(t,r,o,l,d){this.h=l||jt(),this.j=t,this.s=r,this.g=o,delete this.a};function yu(t){this.s=t,this.a=this.h=this.j=this.g=null}function Ua(t,r){this.name=t,this.value=r}Ua.prototype.toString=function(){return this.name};var Ap=new Ua("SEVERE",1e3),Np=new Ua("WARNING",900),Pp=new Ua("CONFIG",700);function Op(t){return t.j?t.j:t.g?Op(t.g):(me("Root logger has no level set."),null)}yu.prototype.log=function(t,r,o){if(t.value>=Op(this).value)for(G(r)&&(r=r()),t=new _u(t,String(r),this.s),o&&(t.a=o),o=this;o;){var l=o,d=t;if(l.a)for(var h=0;r=l.a[h];h++)r(d);o=o.g}};var bu={},Os=null;function Dp(){Os||(Os=new yu(""),bu[""]=Os,Os.j=Pp)}function Lp(t){Dp();var r;if(!(r=bu[t])){r=new yu(t);var o=t.lastIndexOf("."),l=t.substr(o+1);o=Lp(t.substr(0,o)),o.h||(o.h={}),o.h[l]=r,r.g=o,bu[t]=r}return r}function Ba(){this.a=jt()}var wu=null;Ba.prototype.set=function(t){this.a=t},Ba.prototype.reset=function(){this.set(jt())},Ba.prototype.get=function(){return this.a};function Ds(t){this.j=t||"",wu||(wu=new Ba),this.s=wu}Ds.prototype.a=!0,Ds.prototype.g=!0,Ds.prototype.h=!1;function Ii(t){return 10>t?"0"+t:String(t)}function d1(t,r){t=(t.h-r)/1e3,r=t.toFixed(3);var o=0;if(1>t)o=2;else for(;100>t;)o++,t*=10;for(;0<o--;)r=" "+r;return r}function xp(t){Ds.call(this,t)}V(xp,Ds);function h1(t,r){var o=[];if(o.push(t.j," "),t.g){var l=new Date(r.h);o.push("[",Ii(l.getFullYear()-2e3)+Ii(l.getMonth()+1)+Ii(l.getDate())+" "+Ii(l.getHours())+":"+Ii(l.getMinutes())+":"+Ii(l.getSeconds())+"."+Ii(Math.floor(l.getMilliseconds()/10)),"] ")}return o.push("[",d1(r,t.s.get()),"s] "),o.push("[",r.g,"] "),o.push(r.s),t.h&&(r=r.a)&&o.push(`
`,r instanceof Error?r.message:r.toString()),t.a&&o.push(`
`),o.join("")}function Mp(){this.s=ne(this.h,this),this.a=new xp,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Mp.prototype.h=function(t){function r(h){if(h){if(h.value>=Ap.value)return"error";if(h.value>=Np.value)return"warn";if(h.value>=Pp.value)return"log"}return"debug"}if(!this.j[t.g]){var o=h1(this.a,t),l=f1;if(l){var d=r(t.j);p1(l,d,o,t.a)}}};var f1=v.console;function p1(t,r,o,l){t[r]?t[r](o,l||""):t.log(o,l||"")}function Nt(t,r){var o=Iu;o&&o.log(Ap,t,r)}var Iu;Iu=Lp("firebaseui");var Eu=new Mp;if(Eu.g!=1){var ja;Dp(),ja=Os;var m1=Eu.s;ja.a||(ja.a=[]),ja.a.push(m1),Eu.g=!0}function zn(t){var r=Iu;r&&r.log(Np,t,void 0)}function Fp(){this.a=(typeof document>"u"?null:document)||{cookie:""}}i=Fp.prototype,i.set=function(t,r,o,l,d,h){if(/[;=\s]/.test(t))throw Error('Invalid cookie name "'+t+'"');if(/[;\r\n]/.test(r))throw Error('Invalid cookie value "'+r+'"');I(o)||(o=-1),d=d?";domain="+d:"",l=l?";path="+l:"",h=h?";secure":"",o=0>o?"":o==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(jt()+1e3*o).toUTCString(),this.a.cookie=t+"="+r+d+l+o+h},i.get=function(t,r){for(var o=t+"=",l=(this.a.cookie||"").split(";"),d=0,h;d<l.length;d++){if(h=kt(l[d]),h.lastIndexOf(o,0)==0)return h.substr(o.length);if(h==t)return""}return r},i.ja=function(){return Cu(this).keys},i.la=function(){return Cu(this).values},i.clear=function(){for(var t=Cu(this).keys,r=t.length-1;0<=r;r--){var o=t[r];this.get(o),this.set(o,"",0,void 0,void 0)}};function Cu(t){t=(t.a.cookie||"").split(";");for(var r=[],o=[],l,d,h=0;h<t.length;h++)d=kt(t[h]),l=d.indexOf("="),l==-1?(r.push(""),o.push(d)):(r.push(d.substring(0,l)),o.push(d.substring(l+1)));return{keys:r,values:o}}var Wa=new Fp;function Up(){}function hr(t,r,o,l){this.h=typeof t<"u"&&t!==null?t:-1,this.g=r||null,this.a=o||null,this.j=!!l}f(hr,Up),hr.prototype.set=function(t,r){Wa.set(t,r,this.h,this.g,this.a,this.j)},hr.prototype.get=function(t){return Wa.get(t)||null},hr.prototype.ra=function(t){var r=this.g,o=this.a;Wa.get(t),Wa.set(t,"",0,r,o)};function Su(t,r){this.g=t,this.a=r||null}function Bp(t){return{email:t.g,credential:t.a&&t.a.toJSON()}}function jp(t){if(t&&t.email){var r=t.credential&&F.auth.AuthCredential.fromJSON(t.credential);return new Su(t.email,r)}return null}function Wp(t){this.a=t||null}function Hp(t){for(var r=[],o=0,l=0;l<t.length;l++){var d=t.charCodeAt(l);255<d&&(r[o++]=d&255,d>>=8),r[o++]=d}return r}function g1(t){return lt(t,function(r){return r=r.toString(16),1<r.length?r:"0"+r}).join("")}function Ha(t){for(this.i=t,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(fr*(this.j+1)),t=0;t<this.g;t++)this.a[t]=[this.i[4*t],this.i[4*t+1],this.i[4*t+2],this.i[4*t+3]];var r=Array(4);for(t=this.g;t<fr*(this.j+1);t++){if(r[0]=this.a[t-1][0],r[1]=this.a[t-1][1],r[2]=this.a[t-1][2],r[3]=this.a[t-1][3],t%this.g==0){var o=r,l=o[0];o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=l,qp(r),r[0]^=$a[t/this.g][0],r[1]^=$a[t/this.g][1],r[2]^=$a[t/this.g][2],r[3]^=$a[t/this.g][3]}else 6<this.g&&t%this.g==4&&qp(r);this.a[t]=Array(4),this.a[t][0]=this.a[t-this.g][0]^r[0],this.a[t][1]=this.a[t-this.g][1]^r[1],this.a[t][2]=this.a[t-this.g][2]^r[2],this.a[t][3]=this.a[t-this.g][3]^r[3]}}Ha.prototype.A=16;var fr=Ha.prototype.A/4;function Vp(t,r){for(var o,l=0;l<fr;l++)for(var d=0;4>d;d++)o=4*d+l,o=r[o],t.h[l][d]=o}function $p(t){for(var r=[],o=0;o<fr;o++)for(var l=0;4>l;l++)r[4*l+o]=t.h[o][l];return r}function pr(t,r){for(var o=0;4>o;o++)for(var l=0;4>l;l++)t.h[o][l]^=t.a[4*r+l][o]}function Va(t,r){for(var o=0;4>o;o++)for(var l=0;4>l;l++)t.h[o][l]=r[t.h[o][l]]}function Gp(t){for(var r=1;4>r;r++)for(var o=0;4>o;o++)t.s[r][o]=t.h[r][o];for(r=1;4>r;r++)for(o=0;4>o;o++)t.h[r][o]=t.s[r][(o+r)%fr]}function zp(t){for(var r=1;4>r;r++)for(var o=0;4>o;o++)t.s[r][(o+r)%fr]=t.h[r][o];for(r=1;4>r;r++)for(o=0;4>o;o++)t.h[r][o]=t.s[r][o]}function qp(t){t[0]=mr[t[0]],t[1]=mr[t[1]],t[2]=mr[t[2]],t[3]=mr[t[3]]}var mr=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Kp=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],$a=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Ga=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],za=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],qa=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Ka=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ya=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Ja=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Yp(t,r){t=new Ha(Xp(t)),r=Hp(r);for(var o=r.splice(0,16),l="",d;o.length;){d=16-o.length;for(var h=0;h<d;h++)o.push(0);for(d=t,Vp(d,o),pr(d,0),o=1;o<d.j;++o){Va(d,mr),Gp(d),h=d.h;for(var g=d.s[0],y=0;4>y;y++)g[0]=h[0][y],g[1]=h[1][y],g[2]=h[2][y],g[3]=h[3][y],h[0][y]=Ga[g[0]]^za[g[1]]^g[2]^g[3],h[1][y]=g[0]^Ga[g[1]]^za[g[2]]^g[3],h[2][y]=g[0]^g[1]^Ga[g[2]]^za[g[3]],h[3][y]=za[g[0]]^g[1]^g[2]^Ga[g[3]];pr(d,o)}Va(d,mr),Gp(d),pr(d,d.j),l+=g1($p(d)),o=r.splice(0,16)}return l}function Jp(t,r){t=new Ha(Xp(t));for(var o=[],l=0;l<r.length;l+=2)o.push(parseInt(r.substring(l,l+2),16));var d=o.splice(0,16);for(r="";d.length;){for(l=t,Vp(l,d),pr(l,l.j),d=1;d<l.j;++d){zp(l),Va(l,Kp),pr(l,l.j-d);for(var h=l.h,g=l.s[0],y=0;4>y;y++)g[0]=h[0][y],g[1]=h[1][y],g[2]=h[2][y],g[3]=h[3][y],h[0][y]=Ja[g[0]]^Ka[g[1]]^Ya[g[2]]^qa[g[3]],h[1][y]=qa[g[0]]^Ja[g[1]]^Ka[g[2]]^Ya[g[3]],h[2][y]=Ya[g[0]]^qa[g[1]]^Ja[g[2]]^Ka[g[3]],h[3][y]=Ka[g[0]]^Ya[g[1]]^qa[g[2]]^Ja[g[3]]}if(zp(l),Va(l,Kp),pr(l,0),l=$p(l),8192>=l.length)l=String.fromCharCode.apply(null,l);else{for(d="",h=0;h<l.length;h+=8192)d+=String.fromCharCode.apply(null,K0(l,h,h+8192));l=d}r+=l,d=o.splice(0,16)}return r.replace(/(\x00)+$/,"")}function Xp(t){t=Hp(t.substring(0,32));for(var r=32-t.length,o=0;o<r;o++)t.push(0);return t}function Qp(t){var r=[];return Tu(new v1,t,r),r.join("")}function v1(){}function Tu(t,r,o){if(r==null)o.push("null");else{if(typeof r=="object"){if(L(r)){var l=r;r=l.length,o.push("[");for(var d="",h=0;h<r;h++)o.push(d),Tu(t,l[h],o),d=",";o.push("]");return}if(r instanceof String||r instanceof Number||r instanceof Boolean)r=r.valueOf();else{o.push("{"),d="";for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(h=r[l],typeof h!="function"&&(o.push(d),em(l,o),o.push(":"),Tu(t,h,o),d=","));o.push("}");return}}switch(typeof r){case"string":em(r,o);break;case"number":o.push(isFinite(r)&&!isNaN(r)?String(r):"null");break;case"boolean":o.push(String(r));break;case"function":o.push("null");break;default:throw Error("Unknown type: "+typeof r)}}}var Zp={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},_1=/\uffff/.test("\uFFFF")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function em(t,r){r.push('"',t.replace(_1,function(o){var l=Zp[o];return l||(l="\\u"+(o.charCodeAt(0)|65536).toString(16).substr(1),Zp[o]=l),l}),'"')}function Ls(t){this.a=t}Ls.prototype.set=function(t,r){I(r)?this.a.set(t,Qp(r)):this.a.ra(t)},Ls.prototype.get=function(t){try{var r=this.a.get(t)}catch{return}if(r!==null)try{return JSON.parse(r)}catch{throw"Storage: Invalid value was encountered"}};function Xa(){}V(Xa,Up),Xa.prototype.clear=function(){var t=iw(this.ha(!0)),r=this;Ie(t,function(o){r.ra(o)})};function Qa(t){this.a=t}V(Qa,Xa);function Za(t){if(!t.a)return!1;try{return t.a.setItem("__sak","1"),t.a.removeItem("__sak"),!0}catch{return!1}}i=Qa.prototype,i.set=function(t,r){try{this.a.setItem(t,r)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},i.get=function(t){if(t=this.a.getItem(t),!S(t)&&t!==null)throw"Storage mechanism: Invalid value was encountered";return t},i.ra=function(t){this.a.removeItem(t)},i.ha=function(t){var r=0,o=this.a,l=new ui;return l.next=function(){if(r>=o.length)throw ir;var d=o.key(r++);if(t)return d;if(d=o.getItem(d),!S(d))throw"Storage mechanism: Invalid value was encountered";return d},l},i.clear=function(){this.a.clear()},i.key=function(t){return this.a.key(t)};function ku(){var t=null;try{t=window.localStorage||null}catch{}this.a=t}V(ku,Qa);function Ru(){var t=null;try{t=window.sessionStorage||null}catch{}this.a=t}V(Ru,Qa);function gr(t,r){this.g=t,this.a=r+"::"}V(gr,Xa),gr.prototype.set=function(t,r){this.g.set(this.a+t,r)},gr.prototype.get=function(t){return this.g.get(this.a+t)},gr.prototype.ra=function(t){this.g.ra(this.a+t)},gr.prototype.ha=function(t){var r=this.g.ha(!0),o=this,l=new ui;return l.next=function(){for(var d=r.next();d.substr(0,o.a.length)!=o.a;)d=r.next();return t?d.substr(o.a.length):o.g.get(d)},l},Za(new ku);var tm,nm=new Ru;tm=Za(nm)?new gr(nm,"firebaseui"):null;var Au=new Ls(tm),Nu={name:"pendingEmailCredential",storage:Au},Ei={name:"redirectStatus",storage:Au},xs={name:"redirectUrl",storage:Au},vr={name:"emailForSignIn",storage:new Ls(new hr(3600,"/"))},Ms={name:"pendingEncryptedCredential",storage:new Ls(new hr(3600,"/"))};function _r(t,r){return t.storage.get(r?t.name+":"+r:t.name)}function _t(t,r){t.storage.a.ra(r?t.name+":"+r:t.name)}function yr(t,r,o){t.storage.set(o?t.name+":"+o:t.name,r)}function im(t){return _r(xs,t)||null}function nn(t){return t=_r(Nu,t)||null,jp(t)}function rn(t){_t(Nu,t)}function rm(t,r){yr(Nu,Bp(t),r)}function Pu(t){return(t=_r(Ei,t)||null)&&typeof t.tenantId<"u"?new Wp(t.tenantId):null}function y1(t,r){yr(Ei,{tenantId:t.a},r)}function b1(t,r){r=_r(vr,r);var o=null;if(r)try{var l=Jp(t,r),d=JSON.parse(l);o=d&&d.email||null}catch{}return o}function w1(t,r){r=_r(Ms,r);var o=null;if(r)try{var l=Jp(t,r);o=JSON.parse(l)}catch{}return jp(o||null)}function I1(t,r,o){yr(Ms,Yp(t,JSON.stringify(Bp(r))),o)}function Ou(){this.W={}}function De(t,r,o){if(r.toLowerCase()in t.W)throw Error("Configuration "+r+" has already been defined.");t.W[r.toLowerCase()]=o}function Du(t,r,o){if(!(r.toLowerCase()in t.W))throw Error("Configuration "+r+" is not defined.");t.W[r.toLowerCase()]=o}Ou.prototype.get=function(t){if(!(t.toLowerCase()in this.W))throw Error("Configuration "+t+" is not defined.");return this.W[t.toLowerCase()]};function Lu(t,r){if(t=t.get(r),!t)throw Error("Configuration "+r+" is required.");return t}function xu(){this.g=void 0,this.a={}}i=xu.prototype,i.set=function(t,r){sm(this,t,r,!1)},i.add=function(t,r){sm(this,t,r,!0)};function sm(t,r,o,l){for(var d=0;d<r.length;d++){var h=r.charAt(d);t.a[h]||(t.a[h]=new xu),t=t.a[h]}if(l&&t.g!==void 0)throw Error('The collection already contains the key "'+r+'"');t.g=o}i.get=function(t){e:{for(var r=this,o=0;o<t.length;o++)if(r=r.a[t.charAt(o)],!r){t=void 0;break e}t=r}return t?t.g:void 0},i.la=function(){var t=[];return om(this,t),t};function om(t,r){t.g!==void 0&&r.push(t.g);for(var o in t.a)om(t.a[o],r)}i.ja=function(){var t=[];return am(this,"",t),t};function am(t,r,o){t.g!==void 0&&o.push(r);for(var l in t.a)am(t.a[l],r+l,o)}i.clear=function(){this.a={},this.g=void 0};function lm(t){for(this.a=t,this.g=new xu,t=0;t<this.a.length;t++){var r=this.g.get("+"+this.a[t].b);r?r.push(this.a[t]):this.g.add("+"+this.a[t].b,[this.a[t]])}}function el(t,r){t=t.g;var o={},l=0;for(t.g!==void 0&&(o[l]=t.g);l<r.length;l++){var d=r.charAt(l);if(!(d in t.a))break;t=t.a[d],t.g!==void 0&&(o[l]=t.g)}for(var h in o)if(o.hasOwnProperty(h))return o[h];return[]}function Ci(t){for(var r=0;r<gt.length;r++)if(gt[r].c===t)return gt[r];return null}function cm(t){t=t.toUpperCase();for(var r=[],o=0;o<gt.length;o++)gt[o].f===t&&r.push(gt[o]);return r}function um(t){if(0<t.length&&t.charAt(0)=="+"){t=t.substring(1);for(var r=[],o=0;o<gt.length;o++)gt[o].b==t&&r.push(gt[o]);t=r}else t=cm(t);return t}function dm(t){t.sort(function(r,o){return r.name.localeCompare(o.name,"en")})}var gt=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"\xC5land Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"C\xF4te d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Cura\xE7ao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"R\xE9union",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barth\xE9lemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"S\xE3o Tom\xE9 and Pr\xEDncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];dm(gt);var Fs=new lm(gt);function hm(t,r){this.a=t,this.Aa=r}function fm(t){t=kt(t);var r=el(Fs,t);return 0<r.length?new hm(r[0].b=="1"?"1-US-0":r[0].c,kt(t.substr(r[0].b.length+1))):null}function Mu(t){var r=Ci(t.a);if(!r)throw Error("Country ID "+t.a+" not found.");return"+"+r.b+t.Aa}function pm(t,r){for(var o=0;o<t.length;o++)if(!Ft(mm,t[o])&&(br!==null&&t[o]in br||Ft(r,t[o])))return t[o];return null}var mm=["emailLink","password","phone"],br={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function E1(){this.a=new Ou,De(this.a,"autoUpgradeAnonymousUsers"),De(this.a,"callbacks"),De(this.a,"credentialHelper",il),De(this.a,"immediateFederatedRedirect",!1),De(this.a,"popupMode",!1),De(this.a,"privacyPolicyUrl"),De(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),De(this.a,"queryParameterForWidgetMode","mode"),De(this.a,"signInFlow"),De(this.a,"signInOptions"),De(this.a,"signInSuccessUrl"),De(this.a,"siteName"),De(this.a,"tosUrl"),De(this.a,"widgetUrl"),De(this.a,"adminRestrictedOperation")}function tl(t){var r=!!t.a.get("autoUpgradeAnonymousUsers");return r&&!Sm(t)&&Nt('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),r}function nl(t){t=t.a.get("signInOptions")||[];for(var r=[],o=0;o<t.length;o++){var l=t[o];l=$(l)?l:{provider:l},l.provider&&r.push(l)}return r}function Pt(t,r){t=nl(t);for(var o=0;o<t.length;o++)if(t[o].provider===r)return t[o];return null}function wr(t){return nl(t).map(function(r){return r.provider})}function Us(t,r){t=gm(t);for(var o=0;o<t.length;o++)if(t[o].providerId===r)return t[o];return null}function gm(t){return nl(t).map(function(r){if(br[r.provider]||Ft(D1,r.provider)){r={providerId:r.provider,S:r.providerName||null,V:r.fullLabel||null,ta:r.buttonColor||null,za:r.iconUrl?Bn(ya(r.iconUrl)).toString():null};for(var o in r)r[o]===null&&delete r[o];return r}return{providerId:r.provider,S:r.providerName||null,V:r.fullLabel||null,ta:r.buttonColor||null,za:r.iconUrl?Bn(ya(r.iconUrl)).toString():null,Ob:r.loginHintKey||null}})}function vm(t){var r=Pt(t,F.auth.GoogleAuthProvider.PROVIDER_ID),o;if(o=r&&r.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(l in t=t.a.get("credentialHelper"),Wu)if(Wu[l]===t){var l=Wu[l];break e}}l=il}o=l===ju}return o&&r.clientId||null}function _m(t){return t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID),!!(t&&t.disableSignUp&&t.disableSignUp.status)}function Si(t){return t=t.a.get("adminRestrictedOperation")||null,!(!t||!t.status)}function C1(t){var r=null;if(nl(t).forEach(function(l){l.provider==F.auth.PhoneAuthProvider.PROVIDER_ID&&$(l.recaptchaParameters)&&!Array.isArray(l.recaptchaParameters)&&(r=Mc(l.recaptchaParameters))}),r){var o=[];L1.forEach(function(l){typeof r[l]<"u"&&(o.push(l),delete r[l])}),o.length&&zn('The following provided "recaptchaParameters" keys are not allowed: '+o.join(", "))}return r}function S1(t){return(t=t.a.get("adminRestrictedOperation"))&&t.adminEmail?t.adminEmail:null}function T1(t){if(t=t.a.get("adminRestrictedOperation")||null){var r=t.helpLink||null;if(r&&typeof r=="string")return function(){dr(r)}}return null}function k1(t){return(t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp&&t.disableSignUp.adminEmail||null}function R1(t){if((t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp){var r=t.disableSignUp.helpLink||null;if(r&&typeof r=="string")return function(){dr(r)}}return null}function ym(t,r){return t=(t=Pt(t,r))&&t.scopes,Array.isArray(t)?t:[]}function bm(t,r){return t=(t=Pt(t,r))&&t.customParameters,$(t)?(t=Mc(t),r===F.auth.GoogleAuthProvider.PROVIDER_ID&&delete t.login_hint,r===F.auth.GithubAuthProvider.PROVIDER_ID&&delete t.login,t):null}function A1(t){t=Pt(t,F.auth.PhoneAuthProvider.PROVIDER_ID);var r=null;return t&&typeof t.loginHint=="string"&&(r=fm(t.loginHint)),t&&t.defaultNationalNumber||r&&r.Aa||null}function N1(t){var r=(t=Pt(t,F.auth.PhoneAuthProvider.PROVIDER_ID))&&t.defaultCountry||null;r=r&&cm(r);var o=null;return t&&typeof t.loginHint=="string"&&(o=fm(t.loginHint)),r&&r[0]||o&&Ci(o.a)||null}function Fu(t){if(t=Pt(t,F.auth.PhoneAuthProvider.PROVIDER_ID),!t)return null;var r=t.whitelistedCountries,o=t.blacklistedCountries;if(typeof r<"u"&&(!Array.isArray(r)||r.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof o<"u"&&!Array.isArray(o))throw Error("BlacklistedCountries must be an array.");if(r&&o)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!r&&!o)return gt;if(t=[],r){o={};for(var l=0;l<r.length;l++)for(var d=um(r[l]),h=0;h<d.length;h++)o[d[h].c]=d[h];for(var g in o)o.hasOwnProperty(g)&&t.push(o[g])}else{for(g={},r=0;r<o.length;r++)for(d=um(o[r]),l=0;l<d.length;l++)g[d[l].c]=d[l];for(d=0;d<gt.length;d++)g!==null&&gt[d].c in g||t.push(gt[d])}return t}function wm(t){return Lu(t.a,"queryParameterForWidgetMode")}function Le(t){var r=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,r&&!t&&zn("Privacy Policy URL is missing, the link will not be displayed."),r&&t){if(typeof r=="function")return r;if(typeof r=="string")return function(){dr(r)}}return null}function xe(t){var r=t.a.get("tosUrl")||null,o=t.a.get("privacyPolicyUrl")||null;if(o&&!r&&zn("Term of Service URL is missing, the link will not be displayed."),r&&o){if(typeof o=="function")return o;if(typeof o=="string")return function(){dr(o)}}return null}function Im(t){return(t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.requireDisplayName<"u"?!!t.requireDisplayName:!0}function Ir(t){return t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID),!(!t||t.signInMethod!==F.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function P1(t){return t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID),!(!t||!t.forceSameDevice)}function O1(t){if(Ir(t)){var r={url:gn(),handleCodeInApp:!0};(t=Pt(t,F.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.emailLinkSignIn=="function"&&pa(r,t.emailLinkSignIn()),t=r.url;var o=gn();o instanceof xn||(o=jc(o)),t instanceof xn||(t=jc(t));var l=o;o=new xn(l);var d=!!t.j;d?Fc(o,t.j):d=!!t.A,d?o.A=t.A:d=!!t.h,d?o.h=t.h:d=t.C!=null;var h=t.g;if(d)Uc(o,t.C);else if(d=!!t.g){if(h.charAt(0)!="/"&&(l.h&&!l.g?h="/"+h:(l=o.g.lastIndexOf("/"),l!=-1&&(h=o.g.substr(0,l+1)+h))),h==".."||h==".")h="";else if(h.indexOf("./")!=-1||h.indexOf("/.")!=-1){l=h.lastIndexOf("/",0)==0,h=h.split("/");for(var g=[],y=0;y<h.length;){var C=h[y++];C=="."?l&&y==h.length&&g.push(""):C==".."?((1<g.length||g.length==1&&g[0]!="")&&g.pop(),l&&y==h.length&&g.push("")):(g.push(C),l=!0)}h=g.join("/")}}return d?o.g=h:d=t.a.toString()!=="",d?Bc(o,Ef(t.a)):d=!!t.s,d&&(o.s=t.s),r.url=o.toString(),r}return null}function Uu(t){var r=!!t.a.get("immediateFederatedRedirect"),o=wr(t);return t=Em(t),r&&o.length==1&&!Ft(mm,o[0])&&t==rl}function Em(t){t=t.a.get("signInFlow");for(var r in Hu)if(Hu[r]==t)return Hu[r];return rl}function Bu(t){return Bs(t).signInSuccess||null}function Cm(t){return Bs(t).signInSuccessWithAuthResult||null}function Sm(t){return Bs(t).signInFailure||null}function Bs(t){return t.a.get("callbacks")||{}}var ju="googleyolo",il="none",Wu={nc:ju,NONE:il},rl="redirect",Hu={qc:"popup",rc:rl},Vu={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},D1=["anonymous"],L1=["sitekey","tabindex","callback","expired-callback"],js,Er,$u,Tm,oe={};function x(t,r,o,l){oe[t].apply(null,Array.prototype.slice.call(arguments,1))}function km(t){return t.classList?t.classList:(t=t.className,S(t)&&t.match(/\S+/g)||[])}function Ws(t,r){return t.classList?t.classList.contains(r):Ft(km(t),r)}function sn(t,r){t.classList?t.classList.add(r):Ws(t,r)||(t.className+=0<t.className.length?" "+r:r)}function on(t,r){t.classList?t.classList.remove(r):Ws(t,r)&&(t.className=Ee(km(t),function(o){return o!=r}).join(" "))}function Xe(t){var r=t.type;switch(S(r)&&r.toLowerCase()){case"checkbox":case"radio":return t.checked?t.value:null;case"select-one":return r=t.selectedIndex,0<=r?t.options[r].value:null;case"select-multiple":r=[];for(var o,l=0;o=t.options[l];l++)o.selected&&r.push(o.value);return r.length?r:null;default:return t.value!=null?t.value:null}}function Rm(t,r){var o=t.type;switch(S(o)&&o.toLowerCase()){case"checkbox":case"radio":t.checked=r;break;case"select-one":if(t.selectedIndex=-1,S(r)){for(var l=0;o=t.options[l];l++)if(o.value==r){o.selected=!0;break}}break;case"select-multiple":for(S(r)&&(r=[r]),l=0;o=t.options[l];l++)if(o.selected=!1,r)for(var d,h=0;d=r[h];h++)o.value==d&&(o.selected=!0);break;default:t.value=r!=null?r:""}}function x1(t){if(t.altKey&&!t.ctrlKey||t.metaKey||112<=t.keyCode&&123>=t.keyCode)return!1;if(Hs(t.keyCode))return!0;switch(t.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!Wt;default:return 166>t.keyCode||183<t.keyCode}}function Am(t,r,o,l,d,h){if(ft&&!pi("525"))return!0;if(Un&&d)return Hs(t);if(d&&!l)return!1;if(!Wt){typeof r=="number"&&(r=Gu(r));var g=r==17||r==18||Un&&r==91;if((!o||Un)&&g||Un&&r==16&&(l||h))return!1}if((ft||Fn)&&l&&o)switch(t){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(ke&&l&&r==t)return!1;switch(t){case 13:return Wt?h||d?!1:!(o&&l):!0;case 27:return!(ft||Fn||Wt)}return Wt&&(l||d||h)?!1:Hs(t)}function Hs(t){if(48<=t&&57>=t||96<=t&&106>=t||65<=t&&90>=t||(ft||Fn)&&t==0)return!0;switch(t){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return Wt;default:return!1}}function Gu(t){if(Wt)t=M1(t);else if(Un&&ft)switch(t){case 93:t=91}return t}function M1(t){switch(t){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return t}}function Cr(t){je.call(this),this.a=t,Ht(t,"keydown",this.g,!1,this),Ht(t,"click",this.h,!1,this)}V(Cr,je),Cr.prototype.g=function(t){(t.keyCode==13||ft&&t.keyCode==3)&&Nm(this,t)},Cr.prototype.h=function(t){Nm(this,t)};function Nm(t,r){var o=new Om(r);if($n(t,o)){o=new Pm(r);try{$n(t,o)}finally{r.stopPropagation()}}}Cr.prototype.o=function(){Cr.K.o.call(this),yi(this.a,"keydown",this.g,!1,this),yi(this.a,"click",this.h,!1,this),delete this.a};function Pm(t){mt.call(this,t.a),this.type="action"}V(Pm,mt);function Om(t){mt.call(this,t.a),this.type="beforeaction"}V(Om,mt);function Sr(t){je.call(this),this.a=t,t=ke?"focusout":"blur",this.g=Ht(this.a,ke?"focusin":"focus",this,!ke),this.h=Ht(this.a,t,this,!ke)}V(Sr,je),Sr.prototype.handleEvent=function(t){var r=new mt(t.a);r.type=t.type=="focusin"||t.type=="focus"?"focusin":"focusout",$n(this,r)},Sr.prototype.o=function(){Sr.K.o.call(this),Vn(this.g),Vn(this.h),delete this.a};function sl(t,r){je.call(this),this.g=t||1,this.a=r||v,this.h=ne(this.gc,this),this.j=jt()}V(sl,je),i=sl.prototype,i.Ka=!1,i.aa=null,i.gc=function(){if(this.Ka){var t=jt()-this.j;0<t&&t<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-t):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),$n(this,"tick"),this.Ka&&(ol(this),this.start()))}},i.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=jt())};function ol(t){t.Ka=!1,t.aa&&(t.a.clearTimeout(t.aa),t.aa=null)}i.o=function(){sl.K.o.call(this),ol(this),delete this.a};function F1(t,r){if(G(t))r&&(t=ne(t,r));else if(t&&typeof t.handleEvent=="function")t=ne(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(0)?-1:v.setTimeout(t,0)}function Tr(t){_i.call(this),this.g=t,this.a={}}V(Tr,_i);var Dm=[];function kr(t,r,o,l){L(o)||(o&&(Dm[0]=o.toString()),o=Dm);for(var d=0;d<o.length;d++){var h=Ht(r,o[d],l||t.handleEvent,!1,t.g||t);if(!h)break;t.a[h.key]=h}}function Lm(t){gf(t.a,function(r,o){this.a.hasOwnProperty(o)&&Vn(r)},t),t.a={}}Tr.prototype.o=function(){Tr.K.o.call(this),Lm(this)},Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vs(t){je.call(this),this.a=null,this.g=t,t=ke||Fn||ft&&!pi("531")&&t.tagName=="TEXTAREA",this.h=new Tr(this),kr(this.h,this.g,t?["keydown","paste","cut","drop","input"]:"input",this)}V(Vs,je),Vs.prototype.handleEvent=function(t){if(t.type=="input")ke&&pi(10)&&t.keyCode==0&&t.j==0||(zu(this),$n(this,xm(t)));else if(t.type!="keydown"||x1(t)){var r=t.type=="keydown"?this.g.value:null;ke&&t.keyCode==229&&(r=null);var o=xm(t);zu(this),this.a=F1(function(){this.a=null,this.g.value!=r&&$n(this,o)},this)}};function zu(t){t.a!=null&&(v.clearTimeout(t.a),t.a=null)}function xm(t){return t=new mt(t.a),t.type="input",t}Vs.prototype.o=function(){Vs.K.o.call(this),this.h.m(),zu(this),delete this.g};function $s(t,r){je.call(this),t&&(this.Oa&&jm(this),this.qa=t,this.Na=Ht(this.qa,"keypress",this,r),this.Ya=Ht(this.qa,"keydown",this.Jb,r,this),this.Oa=Ht(this.qa,"keyup",this.Kb,r,this))}V($s,je),i=$s.prototype,i.qa=null,i.Na=null,i.Ya=null,i.Oa=null,i.R=-1,i.X=-1,i.Ua=!1;var Mm={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Fm={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Um=!ft||pi("525"),Bm=Un&&Wt;i=$s.prototype,i.Jb=function(t){(ft||Fn)&&(this.R==17&&!t.ctrlKey||this.R==18&&!t.altKey||Un&&this.R==91&&!t.metaKey)&&(this.X=this.R=-1),this.R==-1&&(t.ctrlKey&&t.keyCode!=17?this.R=17:t.altKey&&t.keyCode!=18?this.R=18:t.metaKey&&t.keyCode!=91&&(this.R=91)),Um&&!Am(t.keyCode,this.R,t.shiftKey,t.ctrlKey,t.altKey,t.metaKey)?this.handleEvent(t):(this.X=Gu(t.keyCode),Bm&&(this.Ua=t.altKey))},i.Kb=function(t){this.X=this.R=-1,this.Ua=t.altKey},i.handleEvent=function(t){var r=t.a,o=r.altKey;if(ke&&t.type=="keypress")var l=this.X,d=l!=13&&l!=27?r.keyCode:0;else(ft||Fn)&&t.type=="keypress"?(l=this.X,d=0<=r.charCode&&63232>r.charCode&&Hs(l)?r.charCode:0):Af&&!ft?(l=this.X,d=Hs(l)?r.keyCode:0):(t.type=="keypress"?(Bm&&(o=this.Ua),r.keyCode==r.charCode?32>r.keyCode?(l=r.keyCode,d=0):(l=this.X,d=r.charCode):(l=r.keyCode||this.X,d=r.charCode||0)):(l=r.keyCode||this.X,d=r.charCode||0),Un&&d==63&&l==224&&(l=191));var h=l=Gu(l);l?63232<=l&&l in Mm?h=Mm[l]:l==25&&t.shiftKey&&(h=9):r.keyIdentifier&&r.keyIdentifier in Fm&&(h=Fm[r.keyIdentifier]),Wt&&Um&&t.type=="keypress"&&!Am(h,this.R,t.shiftKey,t.ctrlKey,o,t.metaKey)||(t=h==this.R,this.R=h,r=new Wm(h,d,t,r),r.altKey=o,$n(this,r))},i.N=function(){return this.qa};function jm(t){t.Na&&(Vn(t.Na),Vn(t.Ya),Vn(t.Oa),t.Na=null,t.Ya=null,t.Oa=null),t.qa=null,t.R=-1,t.X=-1}i.o=function(){$s.K.o.call(this),jm(this)};function Wm(t,r,o,l){mt.call(this,l),this.type="key",this.keyCode=t,this.j=r,this.repeat=o}V(Wm,mt);function Rr(t,r,o,l){this.top=t,this.right=r,this.bottom=o,this.left=l}Rr.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Rr.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Rr.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Rr.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function al(t,r){var o=ws(t);return o.defaultView&&o.defaultView.getComputedStyle&&(t=o.defaultView.getComputedStyle(t,null))&&(t[r]||t.getPropertyValue(r))||""}function Hm(t){try{var r=t.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return ke&&t.ownerDocument.body&&(t=t.ownerDocument,r.left-=t.documentElement.clientLeft+t.body.clientLeft,r.top-=t.documentElement.clientTop+t.body.clientTop),r}function U1(t,r){r=r||Ia(document);var o=r||Ia(document),l=Vm(t),d=Vm(o);if(!ke||9<=Number(ys)){g=al(o,"borderLeftWidth");var h=al(o,"borderRightWidth");y=al(o,"borderTopWidth"),C=al(o,"borderBottomWidth"),h=new Rr(parseFloat(y),parseFloat(h),parseFloat(C),parseFloat(g))}else{var g=ll(o,"borderLeft");h=ll(o,"borderRight");var y=ll(o,"borderTop"),C=ll(o,"borderBottom");h=new Rr(y,h,C,g)}o==Ia(document)?(g=l.a-o.scrollLeft,l=l.g-o.scrollTop,!ke||10<=Number(ys)||(g+=h.left,l+=h.top)):(g=l.a-d.a-h.left,l=l.g-d.g-h.top),d=t.offsetWidth,h=t.offsetHeight,y=ft&&!d&&!h,I(d)&&!y||!t.getBoundingClientRect?t=new zc(d,h):(t=Hm(t),t=new zc(t.right-t.left,t.bottom-t.top)),d=o.clientHeight-t.height,h=o.scrollLeft,y=o.scrollTop,h+=Math.min(g,Math.max(g-(o.clientWidth-t.width),0)),y+=Math.min(l,Math.max(l-d,0)),o=new Wn(h,y),r.scrollLeft=o.a,r.scrollTop=o.g}function Vm(t){var r=ws(t),o=new Wn(0,0),l=r?ws(r):document;return l=!ke||9<=Number(ys)||wa(l).a.compatMode=="CSS1Compat"?l.documentElement:l.body,t==l||(t=Hm(t),l=wa(r).a,r=Ia(l),l=l.parentWindow||l.defaultView,r=ke&&pi("10")&&l.pageYOffset!=r.scrollTop?new Wn(r.scrollLeft,r.scrollTop):new Wn(l.pageXOffset||r.scrollLeft,l.pageYOffset||r.scrollTop),o.a=t.left+r.a,o.g=t.top+r.g),o}var $m={thin:2,medium:4,thick:6};function ll(t,r){if((t.currentStyle?t.currentStyle[r+"Style"]:null)=="none")return 0;var o=t.currentStyle?t.currentStyle[r+"Width"]:null;if(o in $m)t=$m[o];else if(/^\d+px?$/.test(o))t=parseInt(o,10);else{r=t.style.left;var l=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,t.style.left=o,o=t.style.pixelLeft,t.style.left=r,t.runtimeStyle.left=l,t=+o}return t}function qu(){}E(qu),qu.prototype.a=0;function Ti(t){je.call(this),this.s=t||wa(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}V(Ti,je),i=Ti.prototype,i.Lb=qu.Xa(),i.N=function(){return this.g};function ee(t,r){return t.g?Kc(r,t.g||t.s.a):null}function Gs(t){return t.L||(t.L=new Tr(t)),t.L}i.Za=function(t){if(this.Y&&this.Y!=t)throw Error("Method not supported");Ti.K.Za.call(this,t)},i.kb=function(){this.g=this.s.a.createElement("DIV")},i.render=function(t){if(this.na)throw Error("Component already rendered");this.g||this.kb(),t?t.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},i.v=function(){this.na=!0,Ku(this,function(t){!t.na&&t.N()&&t.v()})},i.ya=function(){Ku(this,function(t){t.na&&t.ya()}),this.L&&Lm(this.L),this.na=!1},i.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Ku(this,function(t){t.m()}),this.g&&gi(this.g),this.Y=this.g=this.oa=this.Ea=null,Ti.K.o.call(this)};function Ku(t,r){t.Ea&&Ie(t.Ea,r,void 0)}i.removeChild=function(t,r){if(t){var o=S(t)?t:t.cb||(t.cb=":"+(t.Lb.a++).toString(36));if(this.oa&&o?(t=this.oa,t=(t!==null&&o in t?t[o]:void 0)||null):t=null,o&&t){var l=this.oa;if(o in l&&delete l[o],ff(this.Ea,t),r&&(t.ya(),t.g&&gi(t.g)),r=t,r==null)throw Error("Unable to set parent component");r.Y=null,Ti.K.Za.call(r,null)}}if(!t)throw Error("Child is not in parent component");return t};function Ne(t,r){var o=Vf(t,"firebaseui-textfield");r?(on(t,"firebaseui-input-invalid"),sn(t,"firebaseui-input"),o&&on(o,"firebaseui-textfield-invalid")):(on(t,"firebaseui-input"),sn(t,"firebaseui-input-invalid"),o&&sn(o,"firebaseui-textfield-invalid"))}function Ar(t,r,o){r=new Vs(r),Cs(t,Fe(Ss,r)),kr(Gs(t),r,"input",o)}function zs(t,r,o){r=new $s(r),Cs(t,Fe(Ss,r)),kr(Gs(t),r,"key",function(l){l.keyCode==13&&(l.stopPropagation(),l.preventDefault(),o(l))})}function B1(t,r,o){r=new Sr(r),Cs(t,Fe(Ss,r)),kr(Gs(t),r,"focusin",o)}function j1(t,r,o){r=new Sr(r),Cs(t,Fe(Ss,r)),kr(Gs(t),r,"focusout",o)}function Ce(t,r,o){r=new Cr(r),Cs(t,Fe(Ss,r)),kr(Gs(t),r,"action",function(l){l.stopPropagation(),l.preventDefault(),o(l)})}function Ot(t){sn(t,"firebaseui-hidden")}function Qe(t,r){r&&Yc(t,r),on(t,"firebaseui-hidden")}function Nr(t){return!Ws(t,"firebaseui-hidden")&&t.style.display!="none"}function Pr(t){t=t||{};var r=t.email,o=t.disabled,l='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return l=t.wc?l+"Enter new email address":l+"Email",l+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+pt(r!=null?r:"")+'"'+(o?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',D(l)}function yt(t){t=t||{},t=t.label;var r='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return r=t?r+W(t):r+"Next",D(r+"</button>")}function Yu(){var t=""+yt({label:Re("Sign In")});return D(t)}function Gm(){var t=""+yt({label:Re("Save")});return D(t)}function Vt(){var t=""+yt({label:Re("Continue")});return D(t)}function zm(t){t=t||{},t=t.label;var r='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return r=t?r+W(t):r+"Choose password",D(r+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function qm(){var t={},r='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return r=t.current?r+"Current password":r+"Password",D(r+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function Km(){return D('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function Dt(t){t=t||{},t=t.label;var r='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return r=t?r+W(t):r+"Cancel",D(r+"</button>")}function ct(t){var r="";return t.F&&t.D&&(r+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),D(r)}function Or(t){var r="";return t.F&&t.D&&(r+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),D(r)}function Ym(t){return t='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+W(t.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',D(t)}Ym.a="firebaseui.auth.soy2.element.infoBar";function Jm(t){var r=t.content;return t=t.Ab,D('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(t?" "+pt(t):"")+'">'+W(r)+"</dialog>")}function Xm(t){var r=t.message;return D(Jm({content:zf('<div class="firebaseui-dialog-icon-wrapper"><div class="'+pt(t.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+W(r)+"</div>")}))}Xm.a="firebaseui.auth.soy2.element.progressDialog";function Qm(t){var r='<div class="firebaseui-list-box-actions">';t=t.items;for(var o=t.length,l=0;l<o;l++){var d=t[l];r+='<button type="button" data-listboxid="'+pt(d.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(d.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+pt(d.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+W(d.label)+"</div></button>"}return r=""+Jm({Ab:Re("firebaseui-list-box-dialog"),content:zf(r+"</div>")}),D(r)}Qm.a="firebaseui.auth.soy2.element.listBoxDialog";function cl(t){return t=t||{},D(t.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}cl.a="firebaseui.auth.soy2.element.busyIndicator";function qn(t,r){return t=t||{},t=t.ga,se(t.S?t.S:r.hb[t.providerId]?""+r.hb[t.providerId]:t.providerId&&t.providerId.indexOf("saml.")==0||t.providerId&&t.providerId.indexOf("oidc.")==0?t.providerId.substring(5):""+t.providerId)}function Ju(t){Zm(t,"upgradeElement")}function Xu(t){Zm(t,"downgradeElements")}var W1=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Zm(t,r){t&&window.componentHandler&&window.componentHandler[r]&&W1.forEach(function(o){Ws(t,o)&&window.componentHandler[r](t),Ie(qc(o,t),function(l){window.componentHandler[r](l)})})}function eg(t,r,o){if(ul.call(this),document.body.appendChild(t),t.showModal||window.dialogPolyfill.registerDialog(t),t.showModal(),Ju(t),r&&Ce(this,t,function(h){var g=t.getBoundingClientRect();(h.clientX<g.left||g.left+g.width<h.clientX||h.clientY<g.top||g.top+g.height<h.clientY)&&ul.call(this)}),!o){var l=this.N().parentElement||this.N().parentNode;if(l){var d=this;this.da=function(){if(t.open){var h=t.getBoundingClientRect().height,g=l.getBoundingClientRect().height,y=l.getBoundingClientRect().top-document.body.getBoundingClientRect().top,C=l.getBoundingClientRect().left-document.body.getBoundingClientRect().left,N=t.getBoundingClientRect().width,M=l.getBoundingClientRect().width;t.style.top=(y+(g-h)/2).toString()+"px",h=C+(M-N)/2,t.style.left=h.toString()+"px",t.style.right=(document.body.getBoundingClientRect().width-h-N).toString()+"px"}else window.removeEventListener("resize",d.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function ul(){var t=Qu.call(this);t&&(Xu(t),t.open&&t.close(),gi(t),this.da&&window.removeEventListener("resize",this.da))}function Qu(){return Kc("firebaseui-id-dialog")}function tg(){gi(ng.call(this))}function ng(){return ee(this,"firebaseui-id-info-bar")}function ig(){return ee(this,"firebaseui-id-dismiss-info-bar")}var H1={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Zu(t,r,o){pn.call(this,t,r);for(var l in o)this[l]=o[l]}V(Zu,pn);function k(t,r,o,l,d){Ti.call(this,o),this.fb=t,this.eb=r,this.Fa=!1,this.Ga=l||null,this.A=this.ca=null,this.Z=Mc(H1),pa(this.Z,d||{})}V(k,Ti),i=k.prototype,i.kb=function(){var t=Is(this.fb,this.eb,this.Z,this.s);Ju(t),this.g=t},i.v=function(){if(k.K.v.call(this),sp(we(this),new Zu("pageEnter",we(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var t=this.Z.F;Ce(this,this.bb(),function(){t()})}if(this.ab()&&this.Z.D){var r=this.Z.D;Ce(this,this.ab(),function(){r()})}},i.ya=function(){sp(we(this),new Zu("pageExit",we(this),{pageId:this.Ga})),k.K.ya.call(this)},i.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Xu(this.N()),k.K.o.call(this)};function V1(t){t.Fa=!0;var r=Ws(t.N(),"firebaseui-use-spinner");t.ca=window.setTimeout(function(){t.N()&&t.A===null&&(t.A=Is(cl,{tb:r},null,t.s),t.N().appendChild(t.A),Ju(t.A))},500)}i.I=function(t,r,o,l){function d(){if(h.T)return null;h.Fa=!1,window.clearTimeout(h.ca),h.ca=null,h.A&&(Xu(h.A),gi(h.A),h.A=null)}var h=this;return h.Fa?null:(V1(h),t.apply(null,r).then(o,l).then(d,d))};function we(t){return t.N().parentElement||t.N().parentNode}function qs(t,r,o){zs(t,r,function(){o.focus()})}function Dr(t,r,o){zs(t,r,function(){o()})}he(k.prototype,{a:function(t){tg.call(this);var r=Is(Ym,{message:t},null,this.s);this.N().appendChild(r),Ce(this,ig.call(this),function(){gi(r)})},yc:tg,Ac:ng,zc:ig,$:function(t,r){t=Is(Xm,{Ma:t,message:r},null,this.s),eg.call(this,t)},h:ul,Cb:Qu,Cc:function(){return ee(this,"firebaseui-tos")},bb:function(){return ee(this,"firebaseui-tos-link")},ab:function(){return ee(this,"firebaseui-pp-link")},Dc:function(){return ee(this,"firebaseui-tos-list")}});function rg(t,r,o){t=t||{},r=t.Va;var l=t.ia;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Pr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?Dt(null):"")+yt(null)+'</div></div><div class="firebaseui-card-footer">'+(l?Or(o):ct(o))+"</div></form></div>",D(t)}rg.a="firebaseui.auth.soy2.page.signIn";function sg(t,r,o){return t=t||{},r=t.ia,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Pr(t)+qm()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Km()+'</div><div class="firebaseui-form-actions">'+Yu()+'</div></div><div class="firebaseui-card-footer">'+(r?Or(o):ct(o))+"</div></form></div>",D(t)}sg.a="firebaseui.auth.soy2.page.passwordSignIn";function og(t,r,o){t=t||{};var l=t.Tb;r=t.Ta;var d=t.ia,h='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Pr(t);return l?(t=t||{},t=t.name,t='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+pt(t!=null?t:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',t=D(t)):t="",o=h+t+zm(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?Dt(null):"")+Gm()+'</div></div><div class="firebaseui-card-footer">'+(d?Or(o):ct(o))+"</div></form></div>",D(o)}og.a="firebaseui.auth.soy2.page.passwordSignUp";function ag(t,r,o){return t=t||{},r=t.Ta,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Pr(t)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?Dt(null):"")+yt({label:Re("Send")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(t)}ag.a="firebaseui.auth.soy2.page.passwordRecovery";function lg(t,r,o){r=t.G;var l="";return t="Follow the instructions sent to <strong>"+(W(t.email)+"</strong> to recover your password"),l+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">',r&&(l+='<div class="firebaseui-form-actions">'+yt({label:Re("Done")})+"</div>"),l+='</div><div class="firebaseui-card-footer">'+ct(o)+"</div></div>",D(l)}lg.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function cg(t,r,o){return D('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+cl(null)+"</div></div>")}cg.a="firebaseui.auth.soy2.page.callback";function ug(t,r,o){return D('<div class="firebaseui-container firebaseui-id-page-spinner">'+cl({tb:!0})+"</div>")}ug.a="firebaseui.auth.soy2.page.spinner";function dg(){return D('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}dg.a="firebaseui.auth.soy2.page.blank";function hg(t,r,o){r="",t="A sign-in email with additional instructions was sent to <strong>"+(W(t.email)+"</strong>. Check your email to complete sign-in.");var l=D('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+l+'</div><div class="firebaseui-form-actions">'+Dt({label:Re("Back")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}hg.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function fg(t,r,o){return t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+D('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+Dt({label:Re("Back")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(t)}fg.a="firebaseui.auth.soy2.page.emailNotReceived";function pg(t,r,o){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Pr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+yt(null)+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(t)}pg.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function mg(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt({label:Re("Dismiss")})+"</div></div></div>";return D(t)}mg.a="firebaseui.auth.soy2.page.differentDeviceError";function gg(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt({label:Re("Dismiss")})+"</div></div></div>";return D(t)}gg.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function vg(t,r,o){return r="",t="You\u2019ve already used <strong>"+(W(t.email)+"</strong> to sign in. Enter your password for that account."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+t+"</p>"+qm()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Km()+'</div><div class="firebaseui-form-actions">'+Yu()+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}vg.a="firebaseui.auth.soy2.page.passwordLinking";function _g(t,r,o){var l=t.email;return r="",t=""+qn(t,o),t=Re(t),l="You\u2019ve already used <strong>"+(W(l)+("</strong>. You can connect your <strong>"+(W(t)+("</strong> account with <strong>"+(W(l)+"</strong> by signing in with email link below."))))),t="For this flow to successfully connect your "+(W(t)+" account with this email, you have to open the link on the same device or browser."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+l+'<p class="firebaseui-text firebaseui-text-justify">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yu()+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}_g.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function yg(t,r,o){r="";var l=""+qn(t,o);return l=Re(l),t="You originally intended to connect <strong>"+(W(l)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),l="If you still want to connect your <strong>"+(W(l)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+t+'</p><p class="firebaseui-text firebaseui-text-justify">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Vt()+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}yg.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function bg(t,r,o){var l=t.email;return r="",t=""+qn(t,o),t=Re(t),l="You\u2019ve already used <strong>"+(W(l)+("</strong>. Sign in with "+(W(t)+" to continue."))),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+yt({label:Re("Sign in with "+t)})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}bg.a="firebaseui.auth.soy2.page.federatedLinking";function wg(t,r,o){t=t||{};var l=t.kc;r=t.yb,t=t.Eb;var d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return l?(l="<strong>"+(W(l)+"</strong> is not authorized to view the requested page."),d+=l):d+="User is not authorized to view the requested page.",d+="</p>",r&&(r="Please contact <strong>"+(W(r)+"</strong> for authorization."),d+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+r+"</p>"),d+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',t&&(d+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),d+='</div><div class="firebaseui-form-actions">'+Dt({label:Re("Back")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(d)}wg.a="firebaseui.auth.soy2.page.unauthorizedUser";function Ig(t,r,o){return r="",t="To continue sign in with <strong>"+(W(t.email)+"</strong> on this device, you have to recover the password."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+yt({label:Re("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}Ig.a="firebaseui.auth.soy2.page.unsupportedProvider";function Eg(t){var r="",o='<p class="firebaseui-text">for <strong>'+(W(t.email)+"</strong></p>");return r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+o+zm(Pw(t))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Gm()+"</div></div></form></div>",D(r)}Eg.a="firebaseui.auth.soy2.page.passwordReset";function Cg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}Cg.a="firebaseui.auth.soy2.page.passwordResetSuccess";function Sg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}Sg.a="firebaseui.auth.soy2.page.passwordResetFailure";function Tg(t){var r=t.G,o="";return t="Your sign-in email address has been changed back to <strong>"+(W(t.email)+"</strong>."),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(r?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></form></div>",D(o)}Tg.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function kg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}kg.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function Rg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}Rg.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function Ag(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}Ag.a="firebaseui.auth.soy2.page.emailVerificationFailure";function Ng(t){var r=t.G,o="";return t="You can now sign in with your new email <strong>"+(W(t.email)+"</strong>."),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">'+(r?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(o)}Ng.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function Pg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}Pg.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function Og(t){var r=t.factorId,o=t.phoneNumber;t=t.G;var l='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(r){case"phone":r="The <strong>"+(W(r)+(" "+(W(o)+"</strong> was removed as a second authentication step."))),l+=r;break;default:l+="The device or app was removed as a second authentication step."}return l+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(t?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></form></div>",D(l)}Og.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function Dg(t){return t=t||{},t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(t.G?'<div class="firebaseui-form-actions">'+Vt()+"</div>":"")+"</div></div>",D(t)}Dg.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function Lg(t){var r=t.zb;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+W(t.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',r&&(t+=yt({label:Re("Retry")})),D(t+"</div></div></div>")}Lg.a="firebaseui.auth.soy2.page.recoverableError";function xg(t){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+W(t.errorMessage)+"</p></div></div>",D(t)}xg.a="firebaseui.auth.soy2.page.unrecoverableError";function Mg(t,r,o){var l=t.Qb;return r="",t="Continue with "+(W(t.jc)+"?"),l="You originally wanted to sign in with "+W(l),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+t+'</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+yt({label:Re("Continue")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form></div>",D(r)}Mg.a="firebaseui.auth.soy2.page.emailMismatch";function Fg(t,r,o){var l='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=t.Sb,r=t.length;for(var d=0;d<r;d++){var h={ga:t[d]},g=o;h=h||{};var y=h.ga,C=h;C=C||{};var N="";switch(C.ga.providerId){case"google.com":N+="firebaseui-idp-google";break;case"github.com":N+="firebaseui-idp-github";break;case"facebook.com":N+="firebaseui-idp-facebook";break;case"twitter.com":N+="firebaseui-idp-twitter";break;case"phone":N+="firebaseui-idp-phone";break;case"anonymous":N+="firebaseui-idp-anonymous";break;case"password":N+="firebaseui-idp-password";break;default:N+="firebaseui-idp-generic"}C='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+pt(se(N))+' firebaseui-id-idp-button" data-provider-id="'+pt(y.providerId)+'" style="background-color:',N=(N=h)||{},N=N.ga,C=C+pt(qf(se(N.ta?N.ta:g.wa[N.providerId]?""+g.wa[N.providerId]:N.providerId.indexOf("saml.")==0?""+g.wa.saml:N.providerId.indexOf("oidc.")==0?""+g.wa.oidc:""+g.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var M=h;N=g,M=M||{},M=M.ga,N=Nw(M.za?vi(M.za):N.xa[M.providerId]?vi(N.xa[M.providerId]):M.providerId.indexOf("saml.")==0?vi(N.xa.saml):M.providerId.indexOf("oidc.")==0?vi(N.xa.oidc):vi(N.xa.password)),C=C+pt(vi(N))+'"></span>',y.providerId=="password"?(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=W(y.V):y.S?(h="Sign in with "+W(qn(h,g)),C+=h):C+="Sign in with email",C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',C=y.S?C+W(y.S):C+"Email",C+="</span>"):y.providerId=="phone"?(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=W(y.V):y.S?(h="Sign in with "+W(qn(h,g)),C+=h):C+="Sign in with phone",C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',C=y.S?C+W(y.S):C+"Phone",C+="</span>"):y.providerId=="anonymous"?(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=W(y.V):y.S?(h="Sign in with "+W(qn(h,g)),C+=h):C+="Continue as guest",C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',C=y.S?C+W(y.S):C+"Guest",C+="</span>"):(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=W(y.V):(N="Sign in with "+W(qn(h,g)),C+=N),C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(y.S?W(y.S):W(qn(h,g)))+"</span>"),y=D(C+"</button>"),l+='<li class="firebaseui-list-item">'+y+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Or(o)+"</div></div>",D(l)}Fg.a="firebaseui.auth.soy2.page.providerSignIn";function Ug(t,r,o){t=t||{};var l=t.Gb,d=t.Va;r=t.ia,t=t||{},t=t.Aa,t='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+pt(t!=null?t:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+D(t);var h;return l?h=D('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):h="",h=t+h+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(d?Dt(null):"")+yt({label:Re("Verify")})+'</div></div><div class="firebaseui-card-footer">',r?(r='<p class="firebaseui-tos firebaseui-phone-tos">',r=o.F&&o.D?r+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':r+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",o=D(r+"</p>")):o=D('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+ct(o),D(h+o+"</div></form></div>")}Ug.a="firebaseui.auth.soy2.page.phoneSignInStart";function Bg(t,r,o){t=t||{},r=t.phoneNumber;var l="";return t='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(W(r)+"</a>"),W(r),r=l,l=D('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),o='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+"</p>"+l+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+yt({label:Re("Continue")})+'</div></div><div class="firebaseui-card-footer">'+ct(o)+"</div></form>",t=D('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),D(r+(o+t+"</div>"))}Bg.a="firebaseui.auth.soy2.page.phoneSignInFinish";function jg(){return D('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}jg.a="firebaseui.auth.soy2.page.signOut";function Wg(t,r,o){var l='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=t.ec,r=t.length;for(var d=0;d<r;d++){var h=t[d],g="",y=W(h.displayName),C=h.tenantId?h.tenantId:"top-level-project";C=Re(C),g+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+pt(C)+' firebaseui-id-tenant-selection-button"'+(h.tenantId?'data-tenant-id="'+pt(h.tenantId)+'"':"")+'style="background-color:'+pt(qf(h.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+pt(vi(h.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',h.V?g+=W(h.V):(h="Sign in to "+W(h.displayName),g+=h),g=D(g+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+y+"</span></button>")),l+='<li class="firebaseui-list-item">'+g+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Or(o)+"</div></div>",D(l)}Wg.a="firebaseui.auth.soy2.page.selectTenant";function Hg(t,r,o){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Pr(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+yt(null)+'</div></div><div class="firebaseui-card-footer">'+Or(o)+"</div></form></div>",D(t)}Hg.a="firebaseui.auth.soy2.page.providerMatchByEmail";function ze(){return ee(this,"firebaseui-id-submit")}function He(){return ee(this,"firebaseui-id-secondary-link")}function Ze(t,r){Ce(this,ze.call(this),function(l){t(l)});var o=He.call(this);o&&r&&Ce(this,o,function(l){r(l)})}function dl(){return ee(this,"firebaseui-id-password")}function hl(){return ee(this,"firebaseui-id-password-error")}function Vg(){var t=dl.call(this),r=hl.call(this);Ar(this,t,function(){Nr(r)&&(Ne(t,!0),Ot(r))})}function $g(){var t=dl.call(this),r=hl.call(this);return Xe(t)?(Ne(t,!0),Ot(r),r=!0):(Ne(t,!1),Qe(r,se("Enter your password").toString()),r=!1),r?Xe(t):null}function Lr(t,r,o,l,d,h){k.call(this,vg,{email:t},h,"passwordLinking",{F:l,D:d}),this.w=r,this.H=o}f(Lr,k),Lr.prototype.v=function(){this.P(),this.M(this.w,this.H),Dr(this,this.i(),this.w),this.i().focus(),k.prototype.v.call(this)},Lr.prototype.o=function(){this.w=null,k.prototype.o.call(this)},Lr.prototype.j=function(){return Xe(ee(this,"firebaseui-id-email"))},he(Lr.prototype,{i:dl,B:hl,P:Vg,u:$g,ea:ze,ba:He,M:Ze});var $1=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function vn(){return ee(this,"firebaseui-id-email")}function Kn(){return ee(this,"firebaseui-id-email-error")}function xr(t){var r=vn.call(this),o=Kn.call(this);Ar(this,r,function(){Nr(o)&&(Ne(r,!0),Ot(o))}),t&&zs(this,r,function(){t()})}function Mr(){return kt(Xe(vn.call(this))||"")}function Fr(){var t=vn.call(this),r=Kn.call(this),o=Xe(t)||"";return o?$1.test(o)?(Ne(t,!0),Ot(r),r=!0):(Ne(t,!1),Qe(r,se("That email address isn't correct").toString()),r=!1):(Ne(t,!1),Qe(r,se("Enter your email address to continue").toString()),r=!1),r?kt(Xe(t)):null}function Ks(t,r,o,l,d,h,g){k.call(this,sg,{email:o,ia:!!h},g,"passwordSignIn",{F:l,D:d}),this.w=t,this.H=r}f(Ks,k),Ks.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),qs(this,this.l(),this.i()),Dr(this,this.i(),this.w),Xe(this.l())?this.i().focus():this.l().focus(),k.prototype.v.call(this)},Ks.prototype.o=function(){this.H=this.w=null,k.prototype.o.call(this)},he(Ks.prototype,{l:vn,U:Kn,P:xr,M:Mr,j:Fr,i:dl,B:hl,ea:Vg,u:$g,ua:ze,pa:He,ba:Ze});function ce(t,r,o,l,d,h){k.call(this,t,r,l,d||"notice",h),this.i=o||null}V(ce,k),ce.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),ce.K.v.call(this)},ce.prototype.o=function(){this.i=null,ce.K.o.call(this)},he(ce.prototype,{l:ze,w:He,u:Ze});function fl(t,r,o,l,d){ce.call(this,lg,{email:t,G:!!r},r,d,"passwordRecoveryEmailSent",{F:o,D:l})}V(fl,ce);function Gg(t,r){ce.call(this,Rg,{G:!!t},t,r,"emailVerificationSuccess")}V(Gg,ce);function zg(t,r){ce.call(this,Ag,{G:!!t},t,r,"emailVerificationFailure")}V(zg,ce);function qg(t,r,o){ce.call(this,Ng,{email:t,G:!!r},r,o,"verifyAndChangeEmailSuccess")}V(qg,ce);function Kg(t,r){ce.call(this,Pg,{G:!!t},t,r,"verifyAndChangeEmailFailure")}V(Kg,ce);function Yg(t,r){ce.call(this,Dg,{G:!!t},t,r,"revertSecondFactorAdditionFailure")}V(Yg,ce);function Jg(t){ce.call(this,jg,void 0,void 0,t,"signOut")}V(Jg,ce);function Xg(t,r){ce.call(this,Cg,{G:!!t},t,r,"passwordResetSuccess")}V(Xg,ce);function Qg(t,r){ce.call(this,Sg,{G:!!t},t,r,"passwordResetFailure")}V(Qg,ce);function Zg(t,r){ce.call(this,kg,{G:!!t},t,r,"emailChangeRevokeFailure")}V(Zg,ce);function ev(t,r,o){ce.call(this,Lg,{errorMessage:t,zb:!!r},r,o,"recoverableError")}V(ev,ce);function tv(t,r){ce.call(this,xg,{errorMessage:t},void 0,r,"unrecoverableError")}V(tv,ce);function Ys(t){if(t.code==="auth/invalid-credential"&&t.message&&t.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(t.message&&t.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var r=JSON.parse(t.message.substring(t.message.indexOf("{"),t.message.lastIndexOf("}")+1));return{code:t.code,message:r&&r.error&&r.error.message||t.message}}return t}function _n(t,r,o,l){function d(g){if(!g.name||g.name!="cancel"){e:{var y=g.message;try{var C=((JSON.parse(y).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(C&&C.length){var N=!0;break e}}catch{}N=!1}if(N)g=we(r),r.m(),ge(t,g,void 0,se("Your sign-in session has expired. Please try again.").toString());else{if(N=g&&g.message||"",g.code){if(g.code=="auth/email-already-in-use"||g.code=="auth/credential-already-in-use")return;N=de(g)}r.a(N)}}}if(Ev(t),l)return nv(t,o),Ae();if(!o.credential)throw Error("No credential found!");if(!Q(t).currentUser&&!o.user)throw Error("User not logged in.");try{var h=II(t,o)}catch(g){return Nt(g.code||g.message,g),r.a(g.code||g.message),Ae()}return o=h.then(function(g){nv(t,g)},d).then(void 0,d),z(t,h),Ae(o)}function nv(t,r){if(!r.user)throw Error("No user found");var o=Cm(R(t));if(Bu(R(t))&&o&&zn("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),o){o=Cm(R(t));var l=im(j(t))||void 0;_t(xs,j(t));var d=!1;Ep()?((!o||o(r,l))&&(d=!0,lr(window.opener.location,pl(t,l))),o||window.close()):(!o||o(r,l))&&(d=!0,lr(window.location,pl(t,l))),d||t.reset()}else{o=r.user,r=r.credential,l=Bu(R(t)),d=im(j(t))||void 0,_t(xs,j(t));var h=!1;Ep()?((!l||l(o,r,d))&&(h=!0,lr(window.opener.location,pl(t,d))),l||window.close()):(!l||l(o,r,d))&&(h=!0,lr(window.location,pl(t,d))),h||t.reset()}}function pl(t,r){if(t=r||R(t).a.get("signInSuccessUrl"),!t)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return t}function de(t){var r={code:t.code};r=r||{};var o="";switch(r.code){case"auth/email-already-in-use":o+="The email address is already used by another account";break;case"auth/requires-recent-login":o+=Qf();break;case"auth/too-many-requests":o+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":o+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":o+="That email address doesn't match an existing account";break;case"auth/user-token-expired":o+=Qf();break;case"auth/weak-password":o+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":o+="The email and password you entered don't match";break;case"auth/network-request-failed":o+="A network error has occurred";break;case"auth/invalid-phone-number":o+=Zc();break;case"auth/invalid-verification-code":o+=se("Wrong code. Try again.");break;case"auth/code-expired":o+="This code is no longer valid";break;case"auth/expired-action-code":o+="This code has expired.";break;case"auth/invalid-action-code":o+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(r=se(o).toString())return r;try{return JSON.parse(t.message),Nt("Internal error: "+t.message,void 0),Yf().toString()}catch{return t.message}}function G1(t,r,o){var l=br[r]&&F.auth[br[r]]?new F.auth[br[r]]:r.indexOf("saml.")==0?new F.auth.SAMLAuthProvider(r):new F.auth.OAuthProvider(r);if(!l)throw Error("Invalid Firebase Auth provider!");var d=ym(R(t),r);if(l.addScope)for(var h=0;h<d.length;h++)l.addScope(d[h]);return d=bm(R(t),r)||{},o&&(r==F.auth.GoogleAuthProvider.PROVIDER_ID?t="login_hint":r==F.auth.GithubAuthProvider.PROVIDER_ID?t="login":t=(t=Us(R(t),r))&&t.Ob,t&&(d[t]=o)),l.setCustomParameters&&l.setCustomParameters(d),l}function Js(t,r,o,l){function d(){y1(new Wp(t.h.tenantId||null),j(t)),z(t,r.I(ne(t.dc,t),[C],function(){if((window.location&&window.location.protocol)==="file:")return z(t,_v(t).then(function(N){r.m(),_t(Ei,j(t)),x("callback",t,y,Ae(N))},h))},g))}function h(N){if(_t(Ei,j(t)),!N.name||N.name!="cancel")switch(N=Ys(N),N.code){case"auth/popup-blocked":d();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":r.a(de(N));break;case"auth/admin-restricted-operation":r.m(),Si(R(t))?x("handleUnauthorizedUser",t,y,null,o):x("callback",t,y,cr(N));break;default:r.m(),x("callback",t,y,cr(N))}}function g(N){_t(Ei,j(t)),N.name&&N.name=="cancel"||(Nt("signInWithRedirect: "+N.code,void 0),N=de(N),r.Ga=="blank"&&Uu(R(t))?(r.m(),x("providerSignIn",t,y,N)):r.a(N))}var y=we(r),C=G1(t,o,l);Em(R(t))==rl?d():z(t,wI(t,C).then(function(N){r.m(),x("callback",t,y,Ae(N))},h))}function z1(t,r){z(t,r.I(ne(t.$b,t),[],function(o){return r.m(),_n(t,r,o,!0)},function(o){o.name&&o.name=="cancel"||(Nt("ContinueAsGuest: "+o.code,void 0),o=de(o),r.a(o))}))}function q1(t,r,o){function l(h){var g=!1;return h=r.I(ne(t.ac,t),[h],function(y){var C=we(r);r.m(),x("callback",t,C,Ae(y)),g=!0},function(y){if((!y.name||y.name!="cancel")&&(!y||y.code!="auth/credential-already-in-use"))if(y&&y.code=="auth/email-already-in-use"&&y.email&&y.credential){var C=we(r);r.m(),x("callback",t,C,cr(y))}else y&&y.code=="auth/admin-restricted-operation"&&Si(R(t))?(y=we(r),r.m(),x("handleUnauthorizedUser",t,y,null,F.auth.GoogleAuthProvider.PROVIDER_ID)):(y=de(y),r.a(y))}),z(t,h),h.then(function(){return g},function(){return!1})}if(o&&o.credential&&o.clientId===vm(R(t))){if(ym(R(t),F.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var d=JSON.parse(atob(o.credential.split(".")[1])).email}catch{}return Js(t,r,F.auth.GoogleAuthProvider.PROVIDER_ID,d),Ae(!0)}return l(F.auth.GoogleAuthProvider.credential(o.credential))}return o&&r.a(se("The selected credential for the authentication provider is not supported!").toString()),Ae(!1)}function K1(t,r){var o=r.j(),l=r.u();if(o)if(l){var d=F.auth.EmailAuthProvider.credential(o,l);z(t,r.I(ne(t.bc,t),[o,l],function(h){return _n(t,r,{user:h.user,credential:d,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo})},function(h){if(!h.name||h.name!="cancel")switch(h.code){case"auth/email-already-in-use":break;case"auth/email-exists":Ne(r.l(),!1),Qe(r.U(),de(h));break;case"auth/too-many-requests":case"auth/wrong-password":Ne(r.i(),!1),Qe(r.B(),de(h));break;default:Nt("verifyPassword: "+h.message,void 0),r.a(de(h))}}))}else r.i().focus();else r.l().focus()}function ml(t){return t=wr(R(t)),t.length==1&&t[0]==F.auth.EmailAuthProvider.PROVIDER_ID}function iv(t){return t=wr(R(t)),t.length==1&&t[0]==F.auth.PhoneAuthProvider.PROVIDER_ID}function ge(t,r,o,l){ml(t)?l?x("signIn",t,r,o,l):td(t,r,o):t&&iv(t)&&!l?x("phoneSignInStart",t,r):t&&Uu(R(t))&&!l?x("federatedRedirect",t,r,o):x("providerSignIn",t,r,l,o)}function rv(t,r,o,l){var d=we(r);z(t,r.I(ne(Q(t).fetchSignInMethodsForEmail,Q(t)),[o],function(h){r.m(),sv(t,d,h,o,l)},function(h){h=de(h),r.a(h)}))}function sv(t,r,o,l,d,h){o.length||Ir(R(t))&&!Ir(R(t))?Ft(o,F.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?x("passwordSignIn",t,r,l,h):o.length==1&&o[0]===F.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Ir(R(t))?x("sendEmailLinkForSignIn",t,r,l,function(){x("signIn",t,r)}):x("unsupportedProvider",t,r,l):(o=pm(o,wr(R(t))))?(rm(new Su(l),j(t)),x("federatedSignIn",t,r,l,o,d)):x("unsupportedProvider",t,r,l):_m(R(t))?x("handleUnauthorizedUser",t,r,l,F.auth.EmailAuthProvider.PROVIDER_ID):Ir(R(t))?x("sendEmailLinkForSignIn",t,r,l,function(){x("signIn",t,r)}):x("passwordSignUp",t,r,l,void 0,void 0,h)}function ed(t,r,o,l,d,h){var g=we(r);z(t,r.I(ne(t.Ib,t),[o,h],function(){r.m(),x("emailLinkSignInSent",t,g,o,l,h)},d))}function td(t,r,o){o?x("prefilledEmailSignIn",t,r,o):x("signIn",t,r)}function Xs(){return va(gn(),"oobCode")}function nd(){var t=va(gn(),"continueUrl");return t?function(){lr(window.location,t)}:null}function Qs(t,r){k.call(this,gg,void 0,r,"anonymousUserMismatch"),this.i=t}f(Qs,k),Qs.prototype.v=function(){var t=this;Ce(this,this.l(),function(){t.i()}),this.l().focus(),k.prototype.v.call(this)},Qs.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(Qs.prototype,{l:He}),oe.anonymousUserMismatch=function(t,r){var o=new Qs(function(){o.m(),ge(t,r)});o.render(r),K(t,o)};function gl(t){k.call(this,cg,void 0,t,"callback")}f(gl,k),gl.prototype.I=function(t,r,o,l){return t.apply(null,r).then(o,l)};function ov(t,r,o){if(o.user){var l={user:o.user,credential:o.credential,operationType:o.operationType,additionalUserInfo:o.additionalUserInfo},d=nn(j(t)),h=d&&d.g;if(h&&!J1(o.user,h))Y1(t,r,l);else{var g=d&&d.a;g?z(t,o.user.linkWithCredential(g).then(function(y){l={user:y.user,credential:g,operationType:y.operationType,additionalUserInfo:y.additionalUserInfo},av(t,r,l)},function(y){vl(t,r,y)})):av(t,r,l)}}else o=we(r),r.m(),rn(j(t)),ge(t,o)}function av(t,r,o){rn(j(t)),_n(t,r,o)}function vl(t,r,o){var l=we(r);rn(j(t)),o=de(o),r.m(),ge(t,l,void 0,o)}function lv(t,r,o,l){var d=we(r);z(t,Q(t).fetchSignInMethodsForEmail(o).then(function(h){r.m(),h.length?Ft(h,F.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?x("passwordLinking",t,d,o):h.length==1&&h[0]===F.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?x("emailLinkSignInLinking",t,d,o):(h=pm(h,wr(R(t))))?x("federatedLinking",t,d,o,h,l):(rn(j(t)),x("unsupportedProvider",t,d,o)):(rn(j(t)),x("passwordRecovery",t,d,o,!1,Jf().toString()))},function(h){vl(t,r,h)}))}function Y1(t,r,o){var l=we(r);z(t,Yn(t).then(function(){r.m(),x("emailMismatch",t,l,o)},function(d){d.name&&d.name=="cancel"||(d=de(d.code),r.a(d))}))}function J1(t,r){if(r==t.email)return!0;if(t.providerData){for(var o=0;o<t.providerData.length;o++)if(r==t.providerData[o].email)return!0}return!1}oe.callback=function(t,r,o){var l=new gl;l.render(r),K(t,l),o=o||_v(t),z(t,o.then(function(d){ov(t,l,d)},function(d){if((d=Ys(d))&&(d.code=="auth/account-exists-with-different-credential"||d.code=="auth/email-already-in-use")&&d.email&&d.credential)rm(new Su(d.email,d.credential),j(t)),lv(t,l,d.email);else if(d&&d.code=="auth/user-cancelled"){var h=nn(j(t)),g=de(d);h&&h.a?lv(t,l,h.g,g):h?rv(t,l,h.g,g):vl(t,l,d)}else d&&d.code=="auth/credential-already-in-use"||(d&&d.code=="auth/operation-not-supported-in-this-environment"&&ml(t)?ov(t,l,{user:null,credential:null}):d&&d.code=="auth/admin-restricted-operation"&&Si(R(t))?(l.m(),rn(j(t)),x("handleUnauthorizedUser",t,r,null,null)):vl(t,l,d))}))};function Zs(t,r){k.call(this,mg,void 0,r,"differentDeviceError"),this.i=t}f(Zs,k),Zs.prototype.v=function(){var t=this;Ce(this,this.l(),function(){t.i()}),this.l().focus(),k.prototype.v.call(this)},Zs.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(Zs.prototype,{l:He}),oe.differentDeviceError=function(t,r){var o=new Zs(function(){o.m(),ge(t,r)});o.render(r),K(t,o)};function eo(t,r,o,l){k.call(this,Tg,{email:t,G:!!o},l,"emailChangeRevoke"),this.l=r,this.i=o||null}f(eo,k),eo.prototype.v=function(){var t=this;Ce(this,ee(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),k.prototype.v.call(this)},eo.prototype.o=function(){this.l=this.i=null,k.prototype.o.call(this)},he(eo.prototype,{u:ze,B:He,w:Ze});function to(){return ee(this,"firebaseui-id-new-password")}function _l(){return ee(this,"firebaseui-id-password-toggle")}function X1(){this.Ra=!this.Ra;var t=_l.call(this),r=to.call(this);this.Ra?(r.type="text",sn(t,"firebaseui-input-toggle-off"),on(t,"firebaseui-input-toggle-on")):(r.type="password",sn(t,"firebaseui-input-toggle-on"),on(t,"firebaseui-input-toggle-off")),r.focus()}function yl(){return ee(this,"firebaseui-id-new-password-error")}function cv(){this.Ra=!1;var t=to.call(this);t.type="password";var r=yl.call(this);Ar(this,t,function(){Nr(r)&&(Ne(t,!0),Ot(r))});var o=_l.call(this);sn(o,"firebaseui-input-toggle-on"),on(o,"firebaseui-input-toggle-off"),B1(this,t,function(){sn(o,"firebaseui-input-toggle-focus"),on(o,"firebaseui-input-toggle-blur")}),j1(this,t,function(){sn(o,"firebaseui-input-toggle-blur"),on(o,"firebaseui-input-toggle-focus")}),Ce(this,o,ne(X1,this))}function uv(){var t=to.call(this),r=yl.call(this);return Xe(t)?(Ne(t,!0),Ot(r),r=!0):(Ne(t,!1),Qe(r,se("Enter your password").toString()),r=!1),r?Xe(t):null}function no(t,r,o){k.call(this,Eg,{email:t},o,"passwordReset"),this.l=r}f(no,k),no.prototype.v=function(){this.H(),this.B(this.l),Dr(this,this.i(),this.l),this.i().focus(),k.prototype.v.call(this)},no.prototype.o=function(){this.l=null,k.prototype.o.call(this)},he(no.prototype,{i:to,w:yl,M:_l,H:cv,u:uv,U:ze,P:He,B:Ze});function io(t,r,o,l,d){k.call(this,Og,{factorId:t,phoneNumber:o||null,G:!!l},d,"revertSecondFactorAdditionSuccess"),this.l=r,this.i=l||null}f(io,k),io.prototype.v=function(){var t=this;Ce(this,ee(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),k.prototype.v.call(this)},io.prototype.o=function(){this.l=this.i=null,k.prototype.o.call(this)},he(io.prototype,{u:ze,B:He,w:Ze});function Q1(t,r,o,l,d){var h=o.u();h&&z(t,o.I(ne(Q(t).confirmPasswordReset,Q(t)),[l,h],function(){o.m();var g=new Xg(d);g.render(r),K(t,g)},function(g){dv(t,r,o,g)}))}function dv(t,r,o,l){(l&&l.code)=="auth/weak-password"?(t=de(l),Ne(o.i(),!1),Qe(o.w(),t),o.i().focus()):(o&&o.m(),o=new Qg,o.render(r),K(t,o))}function Z1(t,r,o){var l=new eo(o,function(){z(t,l.I(ne(Q(t).sendPasswordResetEmail,Q(t)),[o],function(){l.m(),l=new fl(o,void 0,Le(R(t)),xe(R(t))),l.render(r),K(t,l)},function(){l.a(Kf().toString())}))});l.render(r),K(t,l)}function eI(t,r,o,l){var d=new io(l.factorId,function(){d.I(ne(Q(t).sendPasswordResetEmail,Q(t)),[o],function(){d.m(),d=new fl(o,void 0,Le(R(t)),xe(R(t))),d.render(r),K(t,d)},function(){d.a(Kf().toString())})},l.phoneNumber);d.render(r),K(t,d)}oe.passwordReset=function(t,r,o,l){z(t,Q(t).verifyPasswordResetCode(o).then(function(d){var h=new no(d,function(){Q1(t,r,h,o,l)});h.render(r),K(t,h)},function(){dv(t,r)}))},oe.emailChangeRevocation=function(t,r,o){var l=null;z(t,Q(t).checkActionCode(o).then(function(d){return l=d.data.email,Q(t).applyActionCode(o)}).then(function(){Z1(t,r,l)},function(){var d=new Zg;d.render(r),K(t,d)}))},oe.emailVerification=function(t,r,o,l){z(t,Q(t).applyActionCode(o).then(function(){var d=new Gg(l);d.render(r),K(t,d)},function(){var d=new zg;d.render(r),K(t,d)}))},oe.revertSecondFactorAddition=function(t,r,o){var l=null,d=null;z(t,Q(t).checkActionCode(o).then(function(h){return l=h.data.email,d=h.data.multiFactorInfo,Q(t).applyActionCode(o)}).then(function(){eI(t,r,l,d)},function(){var h=new Yg;h.render(r),K(t,h)}))},oe.verifyAndChangeEmail=function(t,r,o,l){var d=null;z(t,Q(t).checkActionCode(o).then(function(h){return d=h.data.email,Q(t).applyActionCode(o)}).then(function(){var h=new qg(d,l);h.render(r),K(t,h)},function(){var h=new Kg;h.render(r),K(t,h)}))};function bl(t,r){try{var o=typeof t.selectionStart=="number"}catch{o=!1}o?(t.selectionStart=r,t.selectionEnd=r):ke&&!pi("9")&&(t.type=="textarea"&&(r=t.value.substring(0,r).replace(/(\r\n|\r|\n)/g,`
`).length),t=t.createTextRange(),t.collapse(!0),t.move("character",r),t.select())}function ro(t,r,o,l,d,h){k.call(this,pg,{email:o},h,"emailLinkSignInConfirmation",{F:l,D:d}),this.l=t,this.u=r}f(ro,k),ro.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),bl(this.i(),(this.i().value||"").length),k.prototype.v.call(this)},ro.prototype.o=function(){this.u=this.l=null,k.prototype.o.call(this)},he(ro.prototype,{i:vn,M:Kn,w:xr,H:Mr,j:Fr,U:ze,P:He,B:Ze}),oe.emailLinkConfirmation=function(t,r,o,l,d,h){var g=new ro(function(){var y=g.j();y?(g.m(),l(t,r,y,o)):g.i().focus()},function(){g.m(),ge(t,r,d||void 0)},d||void 0,Le(R(t)),xe(R(t)));g.render(r),K(t,g),h&&g.a(h)};function so(t,r,o,l,d){k.call(this,yg,{ga:t},d,"emailLinkSignInLinkingDifferentDevice",{F:o,D:l}),this.i=r}f(so,k),so.prototype.v=function(){this.u(this.i),this.l().focus(),k.prototype.v.call(this)},so.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(so.prototype,{l:ze,u:Ze}),oe.emailLinkNewDeviceLinking=function(t,r,o,l){var d=new fi(o);if(o=d.a.a.get(Be.PROVIDER_ID)||null,Sf(d,null),o){var h=new so(Us(R(t),o),function(){h.m(),l(t,r,d.toString())},Le(R(t)),xe(R(t)));h.render(r),K(t,h)}else ge(t,r)};function wl(t){k.call(this,dg,void 0,t,"blank")}f(wl,k);function id(t,r,o,l,d){var h=new wl,g=new fi(o),y=g.a.a.get(Be.$a)||"",C=g.a.a.get(Be.Sa)||"",N=g.a.a.get(Be.Qa)==="1",M=Cf(g),ue=g.a.a.get(Be.PROVIDER_ID)||null;g=g.a.a.get(Be.vb)||null,Cv(t,g);var zt=!_r(vr,j(t)),Av=l||b1(C,j(t)),yo=(l=w1(C,j(t)))&&l.a;ue&&yo&&yo.providerId!==ue&&(yo=null),h.render(r),K(t,h),z(t,h.I(function(){var Ut=Ae(null);Ut=M&&zt||zt&&N?cr(Error("anonymous-user-not-found")):_I(t,o).then(function(pd){if(ue&&!yo)throw Error("pending-credential-not-found");return pd});var bo=null;return Ut.then(function(pd){return bo=pd,d?null:Q(t).checkActionCode(y)}).then(function(){return bo})},[],function(Ut){Av?nI(t,h,Av,o,yo,Ut):N?(h.m(),x("differentDeviceError",t,r)):(h.m(),x("emailLinkConfirmation",t,r,o,hv))},function(Ut){var bo=void 0;if(!Ut||!Ut.name||Ut.name!="cancel")switch(h.m(),Ut&&Ut.message){case"anonymous-user-not-found":x("differentDeviceError",t,r);break;case"anonymous-user-mismatch":x("anonymousUserMismatch",t,r);break;case"pending-credential-not-found":x("emailLinkNewDeviceLinking",t,r,o,tI);break;default:Ut&&(bo=de(Ut)),ge(t,r,void 0,bo)}}))}function hv(t,r,o,l){id(t,r,l,o,!0)}function tI(t,r,o){id(t,r,o)}function nI(t,r,o,l,d,h){var g=we(r);r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",se("Signing in...").toString());var y=null;d=(h?yI(t,h,o,l,d):bI(t,o,l,d)).then(function(C){_t(Ms,j(t)),_t(vr,j(t)),r.h(),r.$("firebaseui-icon-done",se("Signed in!").toString()),y=setTimeout(function(){r.h(),_n(t,r,C,!0)},1e3),z(t,function(){r&&(r.h(),r.m()),clearTimeout(y)})},function(C){if(r.h(),r.m(),!C.name||C.name!="cancel"){C=Ys(C);var N=de(C);C.code=="auth/email-already-in-use"||C.code=="auth/credential-already-in-use"?(_t(Ms,j(t)),_t(vr,j(t))):C.code=="auth/invalid-email"?(N=se("The email provided does not match the current sign-in session.").toString(),x("emailLinkConfirmation",t,g,l,hv,null,N)):ge(t,g,o,N)}}),z(t,d)}oe.emailLinkSignInCallback=id;function oo(t,r,o,l,d,h){k.call(this,_g,{email:t,ga:r},h,"emailLinkSignInLinking",{F:l,D:d}),this.i=o}f(oo,k),oo.prototype.v=function(){this.u(this.i),this.l().focus(),k.prototype.v.call(this)},oo.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(oo.prototype,{l:ze,u:Ze});function iI(t,r,o,l){var d=we(r);ed(t,r,o,function(){ge(t,d,o)},function(h){if(!h.name||h.name!="cancel"){var g=de(h);h&&h.code=="auth/network-request-failed"?r.a(g):(r.m(),ge(t,d,o,g))}},l)}oe.emailLinkSignInLinking=function(t,r,o){var l=nn(j(t));if(rn(j(t)),l){var d=l.a.providerId,h=new oo(o,Us(R(t),d),function(){iI(t,h,o,l)},Le(R(t)),xe(R(t)));h.render(r),K(t,h)}else ge(t,r)};function ao(t,r,o,l,d,h){k.call(this,hg,{email:t},h,"emailLinkSignInSent",{F:l,D:d}),this.u=r,this.i=o}f(ao,k),ao.prototype.v=function(){var t=this;Ce(this,this.l(),function(){t.i()}),Ce(this,ee(this,"firebaseui-id-trouble-getting-email-link"),function(){t.u()}),this.l().focus(),k.prototype.v.call(this)},ao.prototype.o=function(){this.i=this.u=null,k.prototype.o.call(this)},he(ao.prototype,{l:He}),oe.emailLinkSignInSent=function(t,r,o,l,d){var h=new ao(o,function(){h.m(),x("emailNotReceived",t,r,o,l,d)},function(){h.m(),l()},Le(R(t)),xe(R(t)));h.render(r),K(t,h)};function lo(t,r,o,l,d,h,g){k.call(this,Mg,{jc:t,Qb:r},g,"emailMismatch",{F:d,D:h}),this.l=o,this.i=l}f(lo,k),lo.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),k.prototype.v.call(this)},lo.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(lo.prototype,{u:ze,B:He,w:Ze}),oe.emailMismatch=function(t,r,o){var l=nn(j(t));if(l){var d=new lo(o.user.email,l.g,function(){var h=d;rn(j(t)),_n(t,h,o)},function(){var h=o.credential.providerId,g=we(d);d.m(),l.a?x("federatedLinking",t,g,l.g,h):x("federatedSignIn",t,g,l.g,h)},Le(R(t)),xe(R(t)));d.render(r),K(t,d)}else ge(t,r)};function Ur(t,r,o,l,d){k.call(this,fg,void 0,d,"emailNotReceived",{F:o,D:l}),this.l=t,this.i=r}f(Ur,k),Ur.prototype.v=function(){var t=this;Ce(this,this.u(),function(){t.i()}),Ce(this,this.Da(),function(){t.l()}),this.u().focus(),k.prototype.v.call(this)},Ur.prototype.Da=function(){return ee(this,"firebaseui-id-resend-email-link")},Ur.prototype.o=function(){this.i=this.l=null,k.prototype.o.call(this)},he(Ur.prototype,{u:He}),oe.emailNotReceived=function(t,r,o,l,d){var h=new Ur(function(){ed(t,h,o,l,function(g){g=de(g),h.a(g)},d)},function(){h.m(),ge(t,r,o)},Le(R(t)),xe(R(t)));h.render(r),K(t,h)};function Br(t,r,o,l,d,h){k.call(this,bg,{email:t,ga:r},h,"federatedLinking",{F:l,D:d}),this.i=o}f(Br,k),Br.prototype.v=function(){this.u(this.i),this.l().focus(),k.prototype.v.call(this)},Br.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(Br.prototype,{l:ze,u:Ze}),oe.federatedLinking=function(t,r,o,l,d){var h=nn(j(t));if(h&&h.a){var g=new Br(o,Us(R(t),l),function(){Js(t,g,l,o)},Le(R(t)),xe(R(t)));g.render(r),K(t,g),d&&g.a(d)}else ge(t,r)},oe.federatedRedirect=function(t,r,o){var l=new wl;l.render(r),K(t,l),r=wr(R(t))[0],Js(t,l,r,o)},oe.federatedSignIn=function(t,r,o,l,d){var h=new Br(o,Us(R(t),l),function(){Js(t,h,l,o)},Le(R(t)),xe(R(t)));h.render(r),K(t,h),d&&h.a(d)};function rI(t,r,o,l){var d=r.u();d?z(t,r.I(ne(t.Xb,t),[o,d],function(h){return h=h.user.linkWithCredential(l).then(function(g){return _n(t,r,{user:g.user,credential:l,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo})}),z(t,h),h},function(h){if(!h.name||h.name!="cancel")switch(h.code){case"auth/wrong-password":Ne(r.i(),!1),Qe(r.B(),de(h));break;case"auth/too-many-requests":r.a(de(h));break;default:Nt("signInWithEmailAndPassword: "+h.message,void 0),r.a(de(h))}})):r.i().focus()}oe.passwordLinking=function(t,r,o){var l=nn(j(t));rn(j(t));var d=l&&l.a;if(d){var h=new Lr(o,function(){rI(t,h,o,d)},function(){h.m(),x("passwordRecovery",t,r,o)},Le(R(t)),xe(R(t)));h.render(r),K(t,h)}else ge(t,r)};function co(t,r,o,l,d,h){k.call(this,ag,{email:o,Ta:!!r},h,"passwordRecovery",{F:l,D:d}),this.l=t,this.u=r}f(co,k),co.prototype.v=function(){this.B(),this.H(this.l,this.u),Xe(this.i())||this.i().focus(),Dr(this,this.i(),this.l),k.prototype.v.call(this)},co.prototype.o=function(){this.u=this.l=null,k.prototype.o.call(this)},he(co.prototype,{i:vn,w:Kn,B:xr,M:Mr,j:Fr,U:ze,P:He,H:Ze});function sI(t,r){var o=r.j();if(o){var l=we(r);z(t,r.I(ne(Q(t).sendPasswordResetEmail,Q(t)),[o],function(){r.m();var d=new fl(o,function(){d.m(),ge(t,l)},Le(R(t)),xe(R(t)));d.render(l),K(t,d)},function(d){Ne(r.i(),!1),Qe(r.w(),de(d))}))}else r.i().focus()}oe.passwordRecovery=function(t,r,o,l,d){var h=new co(function(){sI(t,h)},l?void 0:function(){h.m(),ge(t,r)},o,Le(R(t)),xe(R(t)));h.render(r),K(t,h),d&&h.a(d)},oe.passwordSignIn=function(t,r,o,l){var d=new Ks(function(){K1(t,d)},function(){var h=d.M();d.m(),x("passwordRecovery",t,r,h)},o,Le(R(t)),xe(R(t)),l);d.render(r),K(t,d)};function rd(){return ee(this,"firebaseui-id-name")}function sd(){return ee(this,"firebaseui-id-name-error")}function uo(t,r,o,l,d,h,g,y,C){k.call(this,og,{email:l,Tb:t,name:d,Ta:!!o,ia:!!y},C,"passwordSignUp",{F:h,D:g}),this.w=r,this.H=o,this.B=t}f(uo,k),uo.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(qs(this,this.i(),this.u()),qs(this,this.u(),this.l())):qs(this,this.i(),this.l()),this.w&&Dr(this,this.l(),this.w),Xe(this.i())?this.B&&!Xe(this.u())?this.u().focus():this.l().focus():this.i().focus(),k.prototype.v.call(this)},uo.prototype.o=function(){this.H=this.w=null,k.prototype.o.call(this)},he(uo.prototype,{i:vn,U:Kn,ea:xr,jb:Mr,j:Fr,u:rd,Bc:sd,Ja:function(){var t=rd.call(this),r=sd.call(this);Ar(this,t,function(){Nr(r)&&(Ne(t,!0),Ot(r))})},M:function(){var t=rd.call(this),r=sd.call(this),o=Xe(t);return o=!/^[\s\xa0]*$/.test(o==null?"":String(o)),Ne(t,o),o?(Ot(r),r=!0):(Qe(r,se("Enter your account name").toString()),r=!1),r?kt(Xe(t)):null},l:to,ba:yl,lb:_l,ua:cv,P:uv,Nb:ze,Mb:He,pa:Ze});function oI(t,r){var o=Im(R(t)),l=r.j(),d=null;o&&(d=r.M());var h=r.P();if(l){if(o)if(d)d=nr(d);else{r.u().focus();return}if(h){var g=F.auth.EmailAuthProvider.credential(l,h);z(t,r.I(ne(t.Yb,t),[l,h],function(y){var C={user:y.user,credential:g,operationType:y.operationType,additionalUserInfo:y.additionalUserInfo};return o?(y=y.user.updateProfile({displayName:d}).then(function(){return _n(t,r,C)}),z(t,y),y):_n(t,r,C)},function(y){if(!y.name||y.name!="cancel"){var C=Ys(y);switch(y=de(C),C.code){case"auth/email-already-in-use":return aI(t,r,l,C);case"auth/too-many-requests":y=se("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Ne(r.l(),!1),Qe(r.ba(),y);break;case"auth/admin-restricted-operation":Si(R(t))?(y=we(r),r.m(),x("handleUnauthorizedUser",t,y,l,F.auth.EmailAuthProvider.PROVIDER_ID)):r.a(y);break;default:C="setAccountInfo: "+Qp(C),Nt(C,void 0),r.a(y)}}}))}else r.l().focus()}else r.i().focus()}function aI(t,r,o,l){function d(){var g=de(l);Ne(r.i(),!1),Qe(r.U(),g),r.i().focus()}var h=Q(t).fetchSignInMethodsForEmail(o).then(function(g){g.length?d():(g=we(r),r.m(),x("passwordRecovery",t,g,o,!1,Jf().toString()))},function(){d()});return z(t,h),h}oe.passwordSignUp=function(t,r,o,l,d,h){function g(){y.m(),ge(t,r)}var y=new uo(Im(R(t)),function(){oI(t,y)},d?void 0:g,o,l,Le(R(t)),xe(R(t)),h);y.render(r),K(t,y)};function od(){return ee(this,"firebaseui-id-phone-confirmation-code")}function fv(){return ee(this,"firebaseui-id-phone-confirmation-code-error")}function pv(){return ee(this,"firebaseui-id-resend-countdown")}function jr(t,r,o,l,d,h,g,y,C){k.call(this,Bg,{phoneNumber:d},C,"phoneSignInFinish",{F:g,D:y}),this.jb=h,this.i=new sl(1e3),this.B=h,this.P=t,this.l=r,this.H=o,this.M=l}f(jr,k),jr.prototype.v=function(){var t=this;this.U(this.jb),Ht(this.i,"tick",this.w,!1,this),this.i.start(),Ce(this,ee(this,"firebaseui-id-change-phone-number-link"),function(){t.P()}),Ce(this,this.Da(),function(){t.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),k.prototype.v.call(this)},jr.prototype.o=function(){this.M=this.H=this.l=this.P=null,ol(this.i),yi(this.i,"tick",this.w),this.i=null,k.prototype.o.call(this)},jr.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(ol(this.i),yi(this.i,"tick",this.w),this.ua(),this.lb())},he(jr.prototype,{u:od,pa:fv,Ja:function(t){var r=od.call(this),o=fv.call(this);Ar(this,r,function(){Nr(o)&&(Ne(r,!0),Ot(o))}),t&&zs(this,r,function(){t()})},ba:function(){var t=kt(Xe(od.call(this))||"");return/^\d{6}$/.test(t)?t:null},Fb:pv,U:function(t){Yc(pv.call(this),se("Resend code in "+((9<t?"0:":"0:0")+t)).toString())},ua:function(){Ot(this.Fb())},Da:function(){return ee(this,"firebaseui-id-resend-link")},lb:function(){Qe(this.Da())},Nb:ze,Mb:He,ea:Ze});function lI(t,r,o,l){function d(g){r.u().focus(),Ne(r.u(),!1),Qe(r.pa(),g)}var h=r.ba();h?(r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",se("Verifying...").toString()),z(t,r.I(ne(l.confirm,l),[h],function(g){r.h(),r.$("firebaseui-icon-done",se("Verified!").toString());var y=setTimeout(function(){r.h(),r.m();var C={user:$t(t).currentUser,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};_n(t,r,C,!0)},1e3);z(t,function(){r&&r.h(),clearTimeout(y)})},function(g){if(g.name&&g.name=="cancel")r.h();else{var y=Ys(g);switch(g=de(y),y.code){case"auth/credential-already-in-use":r.h();break;case"auth/code-expired":y=we(r),r.h(),r.m(),x("phoneSignInStart",t,y,o,g);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":r.h(),d(g);break;default:r.h(),r.a(g)}}}))):d(se("Wrong code. Try again.").toString())}oe.phoneSignInFinish=function(t,r,o,l,d,h){var g=new jr(function(){g.m(),x("phoneSignInStart",t,r,o)},function(){lI(t,g,o,d)},function(){g.m(),ge(t,r)},function(){g.m(),x("phoneSignInStart",t,r,o)},Mu(o),l,Le(R(t)),xe(R(t)));g.render(r),K(t,g),h&&g.a(h)};var cI=!ke&&!(X("Safari")&&!(Rf()||X("Coast")||X("Opera")||X("Edge")||X("Firefox")||X("FxiOS")||X("Silk")||X("Android")));function Il(t,r){return/-[a-z]/.test(r)?null:cI&&t.dataset?!X("Android")||Rf()||X("Firefox")||X("FxiOS")||X("Opera")||X("Silk")||r in t.dataset?(t=t.dataset[r],t===void 0?null:t):null:t.getAttribute("data-"+String(r).replace(/([A-Z])/g,"-$1").toLowerCase())}function uI(t,r,o){var l=this;t=Is(Qm,{items:t},null,this.s),eg.call(this,t,!0,!0),o&&(o=dI(t,o))&&(o.focus(),U1(o,t)),Ce(this,t,function(d){(d=(d=Vf(d.target,"firebaseui-id-list-box-dialog-button"))&&Il(d,"listboxid"))&&(ul.call(l),r(d))})}function dI(t,r){t=(t||document).getElementsByTagName("BUTTON");for(var o=0;o<t.length;o++)if(Il(t[o],"listboxid")===r)return t[o];return null}function ki(){return ee(this,"firebaseui-id-phone-number")}function mv(){return ee(this,"firebaseui-id-country-selector")}function ad(){return ee(this,"firebaseui-id-phone-number-error")}function hI(t,r){var o=t.a,l=ld("1-US-0",o),d=null;if(r&&ld(r,o)?d=r:l?d="1-US-0":d=0<o.length?o[0].c:null,!d)throw Error("No available default country");El.call(this,d,t)}function ld(t,r){return t=Ci(t),!(!t||!Ft(r,t))}function fI(t){return t.map(function(r){return{id:r.c,Ma:"firebaseui-flag "+cd(r),label:r.name+" "+("\u200E+"+r.b)}})}function cd(t){return"firebaseui-flag-"+t.f}function pI(t){var r=this;uI.call(this,fI(t.a),function(o){El.call(r,o,t,!0),r.O().focus()},this.Ba)}function El(t,r,o){var l=Ci(t);l&&(o&&(o=kt(Xe(ki.call(this))||""),r=el(r,o),r.length&&r[0].b!=l.b&&(o="+"+l.b+o.substr(r[0].b.length+1),Rm(ki.call(this),o))),r=Ci(this.Ba),this.Ba=t,t=ee(this,"firebaseui-id-country-selector-flag"),r&&on(t,cd(r)),sn(t,cd(l)),Yc(ee(this,"firebaseui-id-country-selector-code"),"\u200E+"+l.b))}function ho(t,r,o,l,d,h,g,y,C,N){k.call(this,Ug,{Gb:r,Aa:C||null,Va:!!o,ia:!!h},N,"phoneSignInStart",{F:l,D:d}),this.H=y||null,this.M=r,this.l=t,this.w=o||null,this.pa=g||null}f(ho,k),ho.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||qs(this,this.O(),this.i()),Dr(this,this.i(),this.l),this.O().focus(),bl(this.O(),(this.O().value||"").length),k.prototype.v.call(this)},ho.prototype.o=function(){this.w=this.l=null,k.prototype.o.call(this)},he(ho.prototype,{Cb:Qu,O:ki,B:ad,ea:function(t,r,o){var l=this,d=ki.call(this),h=mv.call(this),g=ad.call(this),y=t||Fs,C=y.a;if(C.length==0)throw Error("No available countries provided.");hI.call(l,y,r),Ce(this,h,function(){pI.call(l,y)}),Ar(this,d,function(){Nr(g)&&(Ne(d,!0),Ot(g));var N=kt(Xe(d)||""),M=Ci(this.Ba),ue=el(y,N);N=ld("1-US-0",C),ue.length&&ue[0].b!=M.b&&(M=ue[0],El.call(l,M.b=="1"&&N?"1-US-0":M.c,y))}),o&&zs(this,d,function(){o()})},U:function(t){var r=kt(Xe(ki.call(this))||"");t=t||Fs;var o=t.a,l=el(Fs,r);if(l.length&&!Ft(o,l[0]))throw Rm(ki.call(this)),ki.call(this).focus(),Qe(ad.call(this),se("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return o=Ci(this.Ba),l.length&&l[0].b!=o.b&&El.call(this,l[0].c,t),l.length&&(r=r.substr(l[0].b.length+1)),r?new hm(this.Ba,r):null},Ja:mv,ba:function(){return ee(this,"firebaseui-recaptcha-container")},u:function(){return ee(this,"firebaseui-id-recaptcha-error")},i:ze,ua:He,P:Ze});function gv(t,r,o,l){try{var d=r.U($u)}catch{return}d?js?(r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",se("Verifying...").toString()),z(t,r.I(ne(t.cc,t),[Mu(d),o],function(h){var g=we(r);r.$("firebaseui-icon-done",se("Code sent!").toString());var y=setTimeout(function(){r.h(),r.m(),x("phoneSignInFinish",t,g,d,15,h)},1e3);z(t,function(){r&&r.h(),clearTimeout(y)})},function(h){if(r.h(),!h.name||h.name!="cancel"){grecaptcha.reset(Tm),js=null;var g=h&&h.message||"";if(h.code)switch(h.code){case"auth/too-many-requests":g=se("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":r.O().focus(),Qe(r.B(),Zc().toString());return;case"auth/admin-restricted-operation":if(Si(R(t))){h=we(r),r.m(),x("handleUnauthorizedUser",t,h,Mu(d),F.auth.PhoneAuthProvider.PROVIDER_ID);return}g=de(h);break;default:g=de(h)}r.a(g)}}))):Er?Qe(r.u(),se("Solve the reCAPTCHA").toString()):!Er&&l&&r.i().click():(r.O().focus(),Qe(r.B(),Zc().toString()))}oe.phoneSignInStart=function(t,r,o,l){var d=C1(R(t))||{};js=null,Er=!(d&&d.size==="invisible");var h=iv(t),g=N1(R(t)),y=h?A1(R(t)):null;g=o&&o.a||g&&g.c||null,o=o&&o.Aa||y,(y=Fu(R(t)))&&dm(y),$u=y?new lm(Fu(R(t))):Fs;var C=new ho(function(M){gv(t,C,N,!(!M||!M.keyCode))},Er,h?null:function(){N.clear(),C.m(),ge(t,r)},Le(R(t)),xe(R(t)),h,$u,g,o);C.render(r),K(t,C),l&&C.a(l),d.callback=function(M){C.u()&&Ot(C.u()),js=M,Er||gv(t,C,N)},d["expired-callback"]=function(){js=null};var N=new F.auth.RecaptchaVerifier(Er?C.ba():C.i(),d,$t(t).app);z(t,C.I(ne(N.render,N),[],function(M){Tm=M},function(M){M.name&&M.name=="cancel"||(M=de(M),C.m(),ge(t,r,void 0,M))}))},oe.prefilledEmailSignIn=function(t,r,o){var l=new wl;l.render(r),K(t,l),z(t,l.I(ne(Q(t).fetchSignInMethodsForEmail,Q(t)),[o],function(d){l.m();var h=!(!ml(t)||!yv(t));sv(t,r,d,o,void 0,h)},function(d){d=de(d),l.m(),x("signIn",t,r,o,d)}))};function fo(t,r,o,l,d){k.call(this,Fg,{Sb:r},d,"providerSignIn",{F:o,D:l}),this.i=t}f(fo,k),fo.prototype.v=function(){this.l(this.i),k.prototype.v.call(this)},fo.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(fo.prototype,{l:function(t){function r(g){t(g)}for(var o=this.g?qc("firebaseui-id-idp-button",this.g||this.s.a):[],l=0;l<o.length;l++){var d=o[l],h=Il(d,"providerId");Ce(this,d,Fe(r,h))}}}),oe.providerSignIn=function(t,r,o,l){var d=new fo(function(h){h==F.auth.EmailAuthProvider.PROVIDER_ID?(d.m(),td(t,r,l)):h==F.auth.PhoneAuthProvider.PROVIDER_ID?(d.m(),x("phoneSignInStart",t,r)):h=="anonymous"?z1(t,d):Js(t,d,h,l),te(t),t.l.cancel()},gm(R(t)),Le(R(t)),xe(R(t)));d.render(r),K(t,d),o&&d.a(o),vI(t)},oe.sendEmailLinkForSignIn=function(t,r,o,l){var d=new gl;d.render(r),K(t,d),ed(t,d,o,l,function(h){d.m(),h&&h.code=="auth/admin-restricted-operation"&&Si(R(t))?x("handleUnauthorizedUser",t,r,o,F.auth.EmailAuthProvider.PROVIDER_ID):(h=de(h),x("signIn",t,r,o,h))})};function po(t,r,o,l,d,h,g){k.call(this,rg,{email:o,Va:!!r,ia:!!h},g,"signIn",{F:l,D:d}),this.i=t,this.u=r}f(po,k),po.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),bl(this.l(),(this.l().value||"").length),k.prototype.v.call(this)},po.prototype.o=function(){this.u=this.i=null,k.prototype.o.call(this)},he(po.prototype,{l:vn,M:Kn,w:xr,H:Mr,j:Fr,U:ze,P:He,B:Ze}),oe.signIn=function(t,r,o,l){var d=ml(t),h=new po(function(){var g=h,y=g.j()||"";y&&rv(t,g,y)},d?null:function(){h.m(),ge(t,r,o)},o,Le(R(t)),xe(R(t)),d);h.render(r),K(t,h),l&&h.a(l)};function mo(t,r,o,l,d,h,g){k.call(this,wg,{kc:t,yb:o,Eb:!!l},g,"unauthorizedUser",{F:d,D:h}),this.l=r,this.i=l}f(mo,k),mo.prototype.v=function(){var t=this,r=ee(this,"firebaseui-id-unauthorized-user-help-link");this.i&&r&&Ce(this,r,function(){t.i()}),Ce(this,this.u(),function(){t.l()}),this.u().focus(),k.prototype.v.call(this)},mo.prototype.o=function(){this.i=this.l=null,k.prototype.o.call(this)},he(mo.prototype,{u:He}),oe.handleUnauthorizedUser=function(t,r,o,l){function d(){ge(t,r)}l===F.auth.EmailAuthProvider.PROVIDER_ID?d=function(){td(t,r)}:l===F.auth.PhoneAuthProvider.PROVIDER_ID&&(d=function(){x("phoneSignInStart",t,r)});var h=null,g=null;l===F.auth.EmailAuthProvider.PROVIDER_ID&&_m(R(t))?(h=k1(R(t)),g=R1(R(t))):Si(R(t))&&(h=S1(R(t)),g=T1(R(t)));var y=new mo(o,function(){y.m(),d()},h,g,Le(R(t)),xe(R(t)));y.render(r),K(t,y)};function go(t,r,o,l,d,h){k.call(this,Ig,{email:t},h,"unsupportedProvider",{F:l,D:d}),this.l=r,this.i=o}f(go,k),go.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),k.prototype.v.call(this)},go.prototype.o=function(){this.i=this.l=null,k.prototype.o.call(this)},he(go.prototype,{u:ze,B:He,w:Ze}),oe.unsupportedProvider=function(t,r,o){var l=new go(o,function(){l.m(),x("passwordRecovery",t,r,o)},function(){l.m(),ge(t,r,o)},Le(R(t)),xe(R(t)));l.render(r),K(t,l)};function an(t,r){this.$=!1;var o=ud(r);if(vo[o])throw Error('An AuthUI instance already exists for the key "'+o+'"');vo[o]=this,this.a=t,this.u=null,this.Y=!1,vv(this.a),this.h=F.initializeApp({apiKey:t.app.options.apiKey,authDomain:t.app.options.authDomain},t.app.name+"-firebaseui-temp").auth(),(t=t.emulatorConfig)&&(o=t.port,this.h.useEmulator(t.protocol+"://"+t.host+(o===null?"":":"+o),t.options)),vv(this.h),this.h.setPersistence&&this.h.setPersistence(F.auth.Auth.Persistence.SESSION),this.oa=r,this.ca=new E1,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=mu.Xa(),this.j=this.C=null,this.da=this.A=!1}function vv(t){t&&t.INTERNAL&&t.INTERNAL.logFramework&&t.INTERNAL.logFramework("FirebaseUI-web")}var vo={};function ud(t){return t||"[DEFAULT]"}function _v(t){return te(t),t.i||(t.i=yn(t,function(r){return r&&!nn(j(t))?Ae($t(t).getRedirectResult().then(function(o){return o},function(o){if(o&&o.code=="auth/email-already-in-use"&&o.email&&o.credential)throw o;return Jn(t,o)})):Ae(Q(t).getRedirectResult().then(function(o){return tl(R(t))&&!o.user&&t.j&&!t.j.isAnonymous?$t(t).getRedirectResult():o}))})),t.i}function K(t,r){te(t),t.g=r}var Wr=null;function Q(t){return te(t),t.h}function $t(t){return te(t),t.a}function j(t){return te(t),t.oa}function yv(t){return te(t),t.O?t.O.emailHint:void 0}i=an.prototype,i.nb=function(){return te(this),!!Pu(j(this))||bv(gn())};function bv(t){return t=new fi(t),(t.a.a.get(Be.ub)||null)==="signIn"&&!!t.a.a.get(Be.$a)}i.start=function(t,r){wv(this,t,r)};function wv(t,r,o,l){te(t),typeof t.a.languageCode<"u"&&(t.u=t.a.languageCode);var d="en".replace(/_/g,"-");t.a.languageCode=d,t.h.languageCode=d,t.Y=!0,typeof t.a.tenantId<"u"&&(t.h.tenantId=t.a.tenantId),t.ib(o),t.O=l||null;var h=v.document;t.C?t.C.then(function(){h.readyState=="complete"?Cl(t,r):ks(window,"load",function(){Cl(t,r)})}):h.readyState=="complete"?Cl(t,r):ks(window,"load",function(){Cl(t,r)})}function Cl(t,r){var o=Da(r,"Could not find the FirebaseUI widget element on the page.");if(o.setAttribute("lang","en".replace(/_/g,"-")),Wr){var l=Wr;te(l),nn(j(l))&&zn("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Wr.reset()}if(Wr=t,t.T=o,gI(t,o),Za(new ku)&&Za(new Ru)){r=Da(r,"Could not find the FirebaseUI widget element on the page."),o=gn(),l=Lu(R(t).a,"queryParameterForSignInSuccessUrl"),o=(o=va(o,l))?Bn(ya(o)).toString():null;e:{l=gn();var d=wm(R(t));l=va(l,d)||"";for(h in Vu)if(Vu[h].toLowerCase()==l.toLowerCase()){var h=Vu[h];break e}h="callback"}switch(h){case"callback":o&&(h=j(t),yr(xs,o,h)),t.nb()?x("callback",t,r):ge(t,r,yv(t));break;case"resetPassword":x("passwordReset",t,r,Xs(),nd());break;case"recoverEmail":x("emailChangeRevocation",t,r,Xs());break;case"revertSecondFactorAddition":x("revertSecondFactorAddition",t,r,Xs());break;case"verifyEmail":x("emailVerification",t,r,Xs(),nd());break;case"verifyAndChangeEmail":x("verifyAndChangeEmail",t,r,Xs(),nd());break;case"signIn":x("emailLinkSignInCallback",t,r,gn()),Sv();break;case"select":o&&(h=j(t),yr(xs,o,h)),ge(t,r);break;default:throw Error("Unhandled widget operation.")}r=R(t),(r=Bs(r).uiShown||null)&&r()}else r=Da(r,"Could not find the FirebaseUI widget element on the page."),h=new tv(se("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),h.render(r),K(t,h);r=t.g&&t.g.Ga=="blank"&&Uu(R(t)),Pu(j(t))&&!r&&(r=Pu(j(t)),Cv(t,r.a),_t(Ei,j(t)))}function yn(t,r){if(t.A)return r(Iv(t));if(z(t,function(){t.A=!1}),tl(R(t))){var o=new We(function(l){z(t,t.a.onAuthStateChanged(function(d){t.j=d,t.A||(t.A=!0,l(r(Iv(t))))}))});return z(t,o),o}return t.A=!0,r(null)}function Iv(t){return te(t),tl(R(t))&&t.j&&t.j.isAnonymous?t.j:null}function z(t,r){if(te(t),r){t.s.push(r);var o=function(){q0(t.s,function(l){return l==r})};typeof r!="function"&&r.then(o,o)}}i.Db=function(){te(this),this.Z=!0};function mI(t){te(t);var r;return(r=t.Z)||(t=R(t),t=bm(t,F.auth.GoogleAuthProvider.PROVIDER_ID),r=!(!t||t.prompt!=="select_account")),r}function Ev(t){typeof t.a.languageCode<"u"&&t.Y&&(t.Y=!1,t.a.languageCode=t.u)}function Cv(t,r){t.a.tenantId=r,t.h.tenantId=r}i.reset=function(){te(this);var t=this;this.T&&this.T.removeAttribute("lang"),this.J&&Jw(this.J),Ev(this),this.O=null,Sv(),_t(Ei,j(this)),te(this),this.l.cancel(),this.i=Ae({user:null,credential:null}),Wr==this&&(Wr=null),this.T=null;for(var r=0;r<this.s.length;r++)typeof this.s[r]=="function"?this.s[r]():this.s[r].cancel&&this.s[r].cancel();this.s=[],rn(j(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Yn(this).then(function(){t.C=null},function(){t.C=null}))};function gI(t,r){t.L=null,t.J=new Pa(r),t.J.register(),Ht(t.J,"pageEnter",function(o){if(o=o&&o.pageId,t.L!=o){var l=R(t);(l=Bs(l).uiChanged||null)&&l(t.L,o),t.L=o}})}i.ib=function(t){te(this);var r=this.ca,o;for(o in t)try{Du(r.a,o,t[o])}catch{Nt('Invalid config: "'+o+'"',void 0)}vw&&Du(r.a,"popupMode",!1),Fu(r),!this.da&&Bu(R(this))&&(zn("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function R(t){return te(t),t.ca}i.Wb=function(){te(this);var t=R(this),r=Lu(t.a,"widgetUrl");t=wm(t);for(var o=r.search(bf),l=0,d,h=[];0<=(d=yf(r,l,t,o));)h.push(r.substring(l,d)),l=Math.min(r.indexOf("&",d)+1||o,o);h.push(r.substr(l)),r=h.join("").replace(ow,"$1"),o="="+encodeURIComponent("select"),(t+=o)?(o=r.indexOf("#"),0>o&&(o=r.length),l=r.indexOf("?"),0>l||l>o?(l=o,d=""):d=r.substring(l+1,o),r=[r.substr(0,l),d,r.substr(o)],o=r[1],r[1]=t?o?o+"&"+t:t:o,o=r[0]+(r[1]?"?"+r[1]:"")+r[2]):o=r,R(this).a.get("popupMode")?(t=(window.screen.availHeight-600)/2,r=(window.screen.availWidth-500)/2,o=o||"about:blank",t={width:500,height:600,top:0<t?t:0,left:0<r?r:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},t.target=t.target||o.target||"google_popup",t.width=t.width||690,t.height=t.height||500,(t=Ip(o,t))&&t.focus()):lr(window.location,o)};function te(t){if(t.$)throw Error("AuthUI instance is deleted!")}i.Wa=function(){var t=this;return te(this),this.h.app.delete().then(function(){var r=ud(j(t));delete vo[r],t.reset(),t.$=!0})};function vI(t){te(t);try{Rp(t.l,vm(R(t)),mI(t)).then(function(r){return t.g?q1(t,t.g,r):!1})}catch{}}i.Ib=function(t,r){te(this);var o=this,l=i1();if(!Ir(R(this)))return cr(Error("Email link sign-in should be enabled to trigger email sending."));var d=O1(R(this)),h=new fi(d.url);return fw(h,l),r&&r.a&&(I1(l,r,j(this)),Sf(h,r.a.providerId)),pw(h,P1(R(this))),yn(this,function(g){return g&&((g=g.uid)?h.a.a.set(Be.Pa,g):hi(h.a.a,Be.Pa)),d.url=h.toString(),Q(o).sendSignInLinkToEmail(t,d)}).then(function(){var g=j(o),y={};y.email=t,yr(vr,Yp(l,JSON.stringify(y)),g)},function(g){throw _t(Ms,j(o)),_t(vr,j(o)),g})};function _I(t,r){var o=Cf(new fi(r));return o?(r=new We(function(l,d){var h=$t(t).onAuthStateChanged(function(g){h(),g&&g.isAnonymous&&g.uid===o?l(g):g&&g.isAnonymous&&g.uid!==o?d(Error("anonymous-user-mismatch")):d(Error("anonymous-user-not-found"))});z(t,h)}),z(t,r),r):Ae(null)}function yI(t,r,o,l,d){te(t);var h=d||null,g=F.auth.EmailAuthProvider.credentialWithLink(o,l);return o=h?Q(t).signInWithEmailLink(o,l).then(function(y){return y.user.linkWithCredential(h)}).then(function(){return Yn(t)}).then(function(){return Jn(t,{code:"auth/email-already-in-use"},h)}):Q(t).fetchSignInMethodsForEmail(o).then(function(y){return y.length?Jn(t,{code:"auth/email-already-in-use"},g):r.linkWithCredential(g)}),z(t,o),o}function bI(t,r,o,l){te(t);var d=l||null,h;return r=Q(t).signInWithEmailLink(r,o).then(function(g){if(h={user:g.user,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo},d)return g.user.linkWithCredential(d).then(function(y){h={user:y.user,credential:d,operationType:h.operationType,additionalUserInfo:y.additionalUserInfo}})}).then(function(){Yn(t)}).then(function(){return $t(t).updateCurrentUser(h.user)}).then(function(){return h.user=$t(t).currentUser,h}),z(t,r),r}function Sv(){var t=gn();if(bv(t)){t=new fi(t);for(var r in Be)Be.hasOwnProperty(r)&&hi(t.a.a,Be[r]);r={state:"signIn",mode:"emailLink",operation:"clear"};var o=v.document.title;v.history&&v.history.replaceState&&v.history.replaceState(r,o,t.toString())}}i.bc=function(t,r){te(this);var o=this;return Q(this).signInWithEmailAndPassword(t,r).then(function(l){return yn(o,function(d){return d?Yn(o).then(function(){return Jn(o,{code:"auth/email-already-in-use"},F.auth.EmailAuthProvider.credential(t,r))}):l})})},i.Yb=function(t,r){te(this);var o=this;return yn(this,function(l){if(l){var d=F.auth.EmailAuthProvider.credential(t,r);return l.linkWithCredential(d)}return Q(o).createUserWithEmailAndPassword(t,r)})},i.ac=function(t){te(this);var r=this;return yn(this,function(o){return o?o.linkWithCredential(t).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return Jn(r,l,t)}):Q(r).signInWithCredential(t)})};function wI(t,r){return te(t),yn(t,function(o){return o&&!nn(j(t))?o.linkWithPopup(r).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return Jn(t,l)}):Q(t).signInWithPopup(r)})}i.dc=function(t){te(this);var r=this,o=this.i;return this.i=null,yn(this,function(l){return l&&!nn(j(r))?l.linkWithRedirect(t):Q(r).signInWithRedirect(t)}).then(function(){},function(l){throw r.i=o,l})},i.cc=function(t,r){te(this);var o=this;return yn(this,function(l){return l?l.linkWithPhoneNumber(t,r).then(function(d){return new vu(d,function(h){if(h.code=="auth/credential-already-in-use")return Jn(o,h);throw h})}):$t(o).signInWithPhoneNumber(t,r).then(function(d){return new vu(d)})})},i.$b=function(){return te(this),$t(this).signInAnonymously()};function II(t,r){return te(t),yn(t,function(o){if(t.j&&!t.j.isAnonymous&&tl(R(t))&&!Q(t).currentUser)return Yn(t).then(function(){return r.credential.providerId=="password"&&(r.credential=null),r});if(o)return Yn(t).then(function(){return o.linkWithCredential(r.credential)}).then(function(l){return r.user=l.user,r.credential=l.credential,r.operationType=l.operationType,r.additionalUserInfo=l.additionalUserInfo,r},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return Jn(t,l,r.credential)});if(!r.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Yn(t).then(function(){return $t(t).updateCurrentUser(r.user)}).then(function(){return r.user=$t(t).currentUser,r.operationType="signIn",r.credential&&r.credential.providerId&&r.credential.providerId=="password"&&(r.credential=null),r})})}i.Xb=function(t,r){return te(this),Q(this).signInWithEmailAndPassword(t,r)};function Yn(t){return te(t),Q(t).signOut()}function Jn(t,r,o){if(te(t),r&&r.code&&(r.code=="auth/email-already-in-use"||r.code=="auth/credential-already-in-use")){var l=Sm(R(t));return Ae().then(function(){return l(new Es("anonymous-upgrade-merge-conflict",null,o||r.credential))}).then(function(){throw t.g&&(t.g.m(),t.g=null),r})}return cr(r)}function _o(t,r,o,l){k.call(this,Hg,void 0,l,"providerMatchByEmail",{F:r,D:o}),this.i=t}f(_o,k),_o.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),bl(this.l(),(this.l().value||"").length),k.prototype.v.call(this)},_o.prototype.o=function(){this.i=null,k.prototype.o.call(this)},he(_o.prototype,{l:vn,H:Kn,u:xr,B:Mr,j:Fr,M:ze,w:Ze});function Sl(t,r,o,l,d){k.call(this,Wg,{ec:r},d,"selectTenant",{F:o,D:l}),this.i=t}f(Sl,k),Sl.prototype.v=function(){EI(this,this.i),k.prototype.v.call(this)},Sl.prototype.o=function(){this.i=null,k.prototype.o.call(this)};function EI(t,r){function o(y){r(y)}for(var l=t.g?qc("firebaseui-id-tenant-selection-button",t.g||t.s.a):[],d=0;d<l.length;d++){var h=l[d],g=Il(h,"tenantId");Ce(t,h,Fe(o,g))}}function dd(t){k.call(this,ug,void 0,t,"spinner")}f(dd,k);function CI(t){this.a=new Ou,De(this.a,"authDomain"),De(this.a,"displayMode",kl),De(this.a,"tenants"),De(this.a,"callbacks"),De(this.a,"tosUrl"),De(this.a,"privacyPolicyUrl");for(var r in t)if(t.hasOwnProperty(r))try{Du(this.a,r,t[r])}catch{Nt('Invalid config: "'+r+'"',void 0)}}function SI(t){t=t.a.get("displayMode");for(var r in fd)if(fd[r]===t)return fd[r];return kl}function Tl(t){return t.a.get("callbacks")||{}}function Tv(t){var r=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,r&&!t&&zn("Privacy Policy URL is missing, the link will not be displayed."),r&&t){if(typeof r=="function")return r;if(typeof r=="string")return function(){dr(r)}}return null}function kv(t){var r=t.a.get("tosUrl")||null,o=t.a.get("privacyPolicyUrl")||null;if(o&&!r&&zn("Terms of Service URL is missing, the link will not be displayed."),r&&o){if(typeof o=="function")return o;if(typeof o=="string")return function(){dr(o)}}return null}function hd(t,r){if(t=t.a.get("tenants"),!t||!t.hasOwnProperty(r)&&!t.hasOwnProperty(Rl))throw Error("Invalid tenant configuration!")}function Rv(t,r,o){if(t=t.a.get("tenants"),!t)throw Error("Invalid tenant configuration!");var l=[];if(t=t[r]||t[Rl],!t)return Nt("Invalid tenant configuration: "+(r+" is not configured!"),void 0),l;if(r=t.signInOptions,!r)throw Error("Invalid tenant configuration: signInOptions are invalid!");return r.forEach(function(d){if(typeof d=="string")l.push(d);else if(typeof d.provider=="string"){var h=d.hd;h&&o?(h instanceof RegExp?h:new RegExp("@"+h.replace(".","\\.")+"$")).test(o)&&l.push(d.provider):l.push(d.provider)}else d="Invalid tenant configuration: signInOption "+(JSON.stringify(d)+" is invalid!"),Nt(d,void 0)}),l}function TI(t,r,o){return t=kI(t,r),(r=t.signInOptions)&&o&&(r=r.filter(function(l){return typeof l=="string"?o.includes(l):o.includes(l.provider)}),t.signInOptions=r),t}function kI(t,r){var o=RI,l=l===void 0?{}:l;return hd(t,r),t=t.a.get("tenants"),r1(t[r]||t[Rl],o,l)}var RI=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],kl="optionFirst",fd={pc:kl,oc:"identifierFirst"},Rl="*";function Gt(t,r){var o=this;this.s=Da(t),this.a={},Object.keys(r).forEach(function(l){o.a[l]=new CI(r[l])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(l){this.ob=l||null},enumerable:!1})}i=Gt.prototype,i.Ub=function(t,r){var o=this;Xn(this);var l=t.apiKey;return new We(function(d,h){if(o.a.hasOwnProperty(l)){var g=Tl(o.a[l]).selectTenantUiHidden||null;if(SI(o.a[l])===kl){var y=[];r.forEach(function(M){M=M||"_";var ue=o.a[l].a.get("tenants");if(!ue)throw Error("Invalid tenant configuration!");(ue=ue[M]||ue[Rl])?M={tenantId:M!=="_"?M:null,V:ue.fullLabel||null,displayName:ue.displayName,za:ue.iconUrl,ta:ue.buttonColor}:(Nt("Invalid tenant configuration: "+(M+" is not configured!"),void 0),M=null),M&&y.push(M)});var C=function(M){M={tenantId:M,providerIds:Rv(o.a[l],M||"_")},d(M)};if(y.length===1){C(y[0].tenantId);return}o.g=new Sl(function(M){Xn(o),g&&g(),C(M)},y,Tv(o.a[l]),kv(o.a[l]))}else o.g=new _o(function(){var M=o.g.j();if(M){for(var ue=0;ue<r.length;ue++){var zt=Rv(o.a[l],r[ue]||"_",M);if(zt.length!==0){M={tenantId:r[ue],providerIds:zt,email:M},Xn(o),g&&g(),d(M);return}}o.g.a(Xf({code:"no-matching-tenant-for-email"}).toString())}},Tv(o.a[l]),kv(o.a[l]));o.g.render(o.s),(h=Tl(o.a[l]).selectTenantUiShown||null)&&h()}else{var N=Error("Invalid project configuration: API key is invalid!");N.code="invalid-configuration",o.pb(N),h(N)}})},i.Pb=function(t,r){if(!this.a.hasOwnProperty(t))throw Error("Invalid project configuration: API key is invalid!");var o=r||void 0;hd(this.a[t],r||"_");try{this.i=F.app(o).auth()}catch{var l=this.a[t].a.get("authDomain");if(!l)throw Error("Invalid project configuration: authDomain is required!");t=F.initializeApp({apiKey:t,authDomain:l},o),t.auth().tenantId=r,this.i=t.auth()}return this.i},i.Zb=function(t,r){var o=this;return new We(function(l,d){function h(ue,zt){o.j=new an(t),wv(o.j,o.s,ue,zt)}var g=t.app.options.apiKey;o.a.hasOwnProperty(g)||d(Error("Invalid project configuration: API key is invalid!"));var y=TI(o.a[g],t.tenantId||"_",r&&r.providerIds);Xn(o),d={signInSuccessWithAuthResult:function(ue){return l(ue),!1}};var C=Tl(o.a[g]).signInUiShown||null,N=!1;d.uiChanged=function(ue,zt){ue===null&&zt==="callback"?((ue=Kc("firebaseui-id-page-callback",o.s))&&Ot(ue),o.h=new dd,o.h.render(o.s)):N||ue===null&&zt==="spinner"||zt==="blank"||(o.h&&(o.h.m(),o.h=null),N=!0,C&&C(t.tenantId))},y.callbacks=d,y.credentialHelper="none";var M;r&&r.email&&(M={emailHint:r.email}),o.j?o.j.Wa().then(function(){h(y,M)}):h(y,M)})},i.reset=function(){var t=this;return Ae().then(function(){t.j&&t.j.Wa()}).then(function(){t.j=null,Xn(t)})},i.Vb=function(){var t=this;this.h||this.A||(this.A=window.setTimeout(function(){Xn(t),t.h=new dd,t.g=t.h,t.h.render(t.s),t.A=null},500))},i.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},i.Bb=function(){return Xn(this),this.g=new Jg,this.g.render(this.s),Ae()};function Xn(t){t.j&&t.j.reset(),t.mb(),t.g&&t.g.m()}i.pb=function(t){var r=this,o=Xf({code:t.code}).toString()||t.message;Xn(this);var l;t.retry&&typeof t.retry=="function"&&(l=function(){r.reset(),t.retry()}),this.g=new ev(o,l),this.g.render(this.s)},i.Rb=function(t){var r=this;return Ae().then(function(){var o=r.i&&r.i.app.options.apiKey;if(!r.a.hasOwnProperty(o))throw Error("Invalid project configuration: API key is invalid!");if(hd(r.a[o],t.tenantId||"_"),!r.i.currentUser||r.i.currentUser.uid!==t.uid)throw Error("The user being processed does not match the signed in user!");return(o=Tl(r.a[o]).beforeSignInSuccess||null)?o(t):t}).then(function(o){if(o.uid!==t.uid)throw Error("User with mismatching UID returned.");return o})},fe("firebaseui.auth.FirebaseUiHandler",Gt),fe("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Gt.prototype.Ub),fe("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Gt.prototype.Pb),fe("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Gt.prototype.Zb),fe("firebaseui.auth.FirebaseUiHandler.prototype.reset",Gt.prototype.reset),fe("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Gt.prototype.Vb),fe("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Gt.prototype.mb),fe("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Gt.prototype.Bb),fe("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Gt.prototype.pb),fe("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Gt.prototype.Rb),fe("firebaseui.auth.AuthUI",an),fe("firebaseui.auth.AuthUI.getInstance",function(t){return t=ud(t),vo[t]?vo[t]:null}),fe("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",an.prototype.Db),fe("firebaseui.auth.AuthUI.prototype.start",an.prototype.start),fe("firebaseui.auth.AuthUI.prototype.setConfig",an.prototype.ib),fe("firebaseui.auth.AuthUI.prototype.signIn",an.prototype.Wb),fe("firebaseui.auth.AuthUI.prototype.reset",an.prototype.reset),fe("firebaseui.auth.AuthUI.prototype.delete",an.prototype.Wa),fe("firebaseui.auth.AuthUI.prototype.isPendingRedirect",an.prototype.nb),fe("firebaseui.auth.AuthUIError",Es),fe("firebaseui.auth.AuthUIError.prototype.toJSON",Es.prototype.toJSON),fe("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",ju),fe("firebaseui.auth.CredentialHelper.NONE",il),fe("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),We.prototype.catch=We.prototype.Ca,We.prototype.finally=We.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=g2);var v2=firebaseui.auth,_2="firebase",y2="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(_2,y2,"app");const a_="@firebase/database",l_="0.13.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ab="";function b2(i){Ab=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ho(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return en(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w2(e)}}catch{}return new I2},Di=Nb("localStorage"),qd=Nb("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new hc("@firebase/database"),E2=function(){let i=1;return function(){return i++}}(),Pb=function(i){const e=nE(i),n=new ZI;n.update(e);const s=n.digest();return ah.encodeByteArray(s)},la=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=la.apply(null,s):typeof s=="object"?e+=it(s):e+=s,e+=" "}return e};let Ui=null,c_=!0;const C2=function(i,e){O(!e||i===!0||i===!1,"Can't turn on custom loggers persistently."),i===!0?(Jr.logLevel=pe.VERBOSE,Ui=Jr.log.bind(Jr),e&&qd.set("logging_enabled",!0)):typeof i=="function"?Ui=i:(Ui=null,qd.remove("logging_enabled"))},ht=function(...i){if(c_===!0&&(c_=!1,Ui===null&&qd.get("logging_enabled")===!0&&C2(!0)),Ui){const e=la.apply(null,i);Ui(e)}},ca=function(i){return function(...e){ht(i,...e)}},Kd=function(...i){const e="FIREBASE INTERNAL ERROR: "+la(...i);Jr.error(e)},Rn=function(...i){const e=`FIREBASE FATAL ERROR: ${la(...i)}`;throw Jr.error(e),new Error(e)},Ct=function(...i){const e="FIREBASE WARNING: "+la(...i);Jr.warn(e)},S2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ob=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},T2=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rs="[MIN_NAME]",Wi="[MAX_NAME]",fs=function(i,e){if(i===e)return 0;if(i===rs||e===Wi)return-1;if(e===rs||i===Wi)return 1;{const n=u_(i),s=u_(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},k2=function(i,e){return i===e?0:i<e?-1:1},Co=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+it(e))},Ph=function(i){if(typeof i!="object"||i===null)return it(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=it(e[s]),n+=":",n+=Ph(i[e[s]]);return n+="}",n},Db=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(i.substring(a,n)):s.push(i.substring(a,a+e));return s};function St(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Lb=function(i){O(!Ob(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,c,u,f,p;i===0?(c=0,u=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),c=f+s,u=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,u=Math.round(i/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(a?1:0),m.reverse();const b=m.join("");let v="";for(p=0;p<64;p+=8){let I=parseInt(b.substr(p,8),2).toString(16);I.length===1&&(I="0"+I),v=v+I}return v.toLowerCase()},R2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function N2(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const P2=new RegExp("^-?(0*)\\d{1,10}$"),O2=-2147483648,D2=2147483647,u_=function(i){if(P2.test(i)){const e=Number(i);if(e>=O2&&e<=D2)return e}return null},ps=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},L2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xo=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ct(e)}}class Xr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="5",xb="v",Mb="s",Fb="r",Ub="f",Bb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jb="ls",Wb="p",Yd="ac",Hb="websocket",Vb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,s,a,c=!1,u="",f=!1){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function F2(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Gb(i,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Hb)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Vb)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);F2(i)&&(n.ns=i.namespace);const a=[];return St(n,(c,u)=>{a.push(c+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.counters_={}}incrementCounter(e,n=1){en(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td={},kd={};function Dh(i){const e=i.toString();return Td[e]||(Td[e]=new U2),Td[e]}function B2(i,e){const n=i.toString();return kd[n]||(kd[n]=e()),kd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&ps(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="start",W2="close",H2="pLPCommand",V2="pRTLPCB",zb="id",qb="pw",Kb="ser",$2="cb",G2="seg",z2="ts",q2="d",K2="dframe",Yb=1870,Jb=30,Y2=Yb-Jb,J2=25e3,X2=3e4;class zr{constructor(e,n,s,a,c,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ca(e),this.stats_=Dh(n),this.urlFn=p=>(this.appCheckToken&&(p[Yd]=this.appCheckToken),Gb(n,Vb,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new j2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(X2)),T2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lh((...c)=>{const[u,f,p,m,b]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===d_)this.id=f,this.password=p;else if(u===W2)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...c)=>{const[u,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[d_]="t",s[Kb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[$2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xb]=Oh,this.transportSessionId&&(s[Mb]=this.transportSessionId),this.lastSessionId&&(s[jb]=this.lastSessionId),this.applicationId&&(s[Wb]=this.applicationId),this.appCheckToken&&(s[Yd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bb.test(location.hostname)&&(s[Fb]=Ub);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zr.forceAllow_=!0}static forceDisallow(){zr.forceDisallow_=!0}static isAvailable(){return zr.forceAllow_?!0:!zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!R2()&&!A2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cy(n),a=Db(s,Y2);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[K2]="t",s[zb]=e,s[qb]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lh{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=E2(),window[H2+this.uniqueCallbackIdentifier]=e,window[V2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){ht("frame writing exception"),f.stack&&ht(f.stack),ht(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zb]=this.myID,e[qb]=this.myPW,e[Kb]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jb+s.length<=Yb;){const u=this.pendingSegs.shift();s=s+"&"+G2+a+"="+u.seg+"&"+z2+a+"="+u.ts+"&"+q2+a+"="+u.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(J2)),c=()=>{clearTimeout(a),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=16384,Z2=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class Kt{constructor(e,n,s,a,c,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ca(this.connId),this.stats_=Dh(n),this.connURL=Kt.connectionURL_(n,u,f,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,c){const u={};return u[xb]=Oh,typeof location<"u"&&location.hostname&&Bb.test(location.hostname)&&(u[Fb]=Ub),n&&(u[Mb]=n),s&&(u[jb]=s),a&&(u[Yd]=a),c&&(u[Wb]=c),Gb(e,Hb,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Di.set("previous_websocket_failure",!0);try{let s;fy(),this.mySock=new Jl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Di.isInMemoryStorage||Di.get("previous_websocket_failure")===!0}markConnectionHealthy(){Di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ho(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Db(n,Q2);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zr,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let s=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||Ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kt];else{const a=this.transports_=[];for(const c of Yo.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=6e4,tR=5e3,nR=10*1024,iR=100*1024,Rd="t",h_="d",rR="s",f_="r",sR="e",p_="o",m_="a",g_="n",v_="p",oR="h";class aR{constructor(e,n,s,a,c,u,f,p,m,b){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=b,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ca("c:"+this.id+":"),this.transportManager_=new Yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rd in e){const n=e[Rd];n===m_?this.upgradeIfSecondaryHealthy_():n===f_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===p_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Co("t",e),s=Co("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:v_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Co("t",e),s=Co("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Co(Rd,e);if(h_ in e){const s=e[h_];if(n===oR)this.onHandshake_(s);else if(n===g_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rR?this.onConnectionShutdown_(s):n===f_?this.onReset_(s):n===sR?Kd("Server Error: "+s):n===p_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Oh!==s&&Ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:v_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{put(e,n,s,a){}merge(e,n,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!s||s===a[c].context)){a.splice(c,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Qb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xl}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=32,y_=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new ve("")}function Y(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function ai(i){return i.pieces_.length-i.pieceNum_}function _e(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ve(i.pieces_,e)}function Zb(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function lR(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function e0(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function t0(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new ve(e,0)}function Ke(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new ve(n,0)}function Z(i){return i.pieceNum_>=i.pieces_.length}function wt(i,e){const n=Y(i),s=Y(e);if(n===null)return e;if(n===s)return wt(_e(i),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function xh(i,e){if(ai(i)!==ai(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Yt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(ai(i)>ai(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class cR{constructor(e,n){this.errorPrefix_=n,this.parts_=e0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dc(this.parts_[s]);n0(this)}}function uR(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=dc(e),n0(i)}function dR(i){const e=i.parts_.pop();i.byteLength_-=dc(e),i.parts_.length>0&&(i.byteLength_-=1)}function n0(i){if(i.byteLength_>y_)throw new Error(i.errorPrefix_+"has a key path longer than "+y_+" bytes ("+i.byteLength_+").");if(i.parts_.length>__)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+__+") or object contains a cycle "+Ai(i))}function Ai(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends Qb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Mh}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=1e3,hR=60*5*1e3,b_=30*1e3,fR=1.3,pR=3e4,mR="server_kill",w_=3;class Sn extends Xb{constructor(e,n,s,a,c,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Sn.nextPersistentConnectionId_++,this.log_=ca("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=So,this.maxReconnectDelay_=hR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!fy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_(it(c)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new uc,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,a){this.initConnection_();const c=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+c),this.listens.has(u)||this.listens.set(u,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(u).has(c),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(u).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const c={p:s},u="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(u,c,f=>{const p=f.d,m=f.s;Sn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&en(e,"w")){const s=es(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();Ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=b_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const c=a.s,u=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},u="n";a&&(c.q=s,c.t=a),this.sendRequest(u,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,c){this.initConnection_();const u={p:n,d:s};c!==void 0&&(u.h=c),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kd("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pR&&(this.reconnectDelay_=So),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Sn.nextConnectionId_++,c=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},m=function(v){O(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:m};const b=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,I]=await Promise.all([this.authTokenProvider_.getToken(b),this.appCheckTokenProvider_.getToken(b)]);u?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=I&&I.token,f=new aR(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,S=>{Ct(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(mR)},c))}catch(v){this.log_("Failed to get token: "+v),u||(this.repoInfo_.nodeAdmin&&Ct(v),p())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Md(this.interruptReasons_)&&(this.reconnectDelay_=So,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>Ph(c)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let a;if(this.listens.has(s)){const c=this.listens.get(s);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w_&&(this.reconnectDelay_=b_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ab.replace(/\./g,"-")]=1,lh()?e["framework.cordova"]=1:cc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xl.getInstance().currentlyOnline();return Md(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(rs,e),a=new J(rs,n);return this.compare(s,a)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class i0 extends Tc{static get __EMPTY_NODE(){return Dl}static set __EMPTY_NODE(e){Dl=e}compare(e,n){return fs(e.name,n.name)}isDefinedOn(e){throw ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(Wi,Dl)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Dl)}toString(){return".key"}}const Qr=new i0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,s,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s!=null?s:tt.RED,this.left=a!=null?a:It.EMPTY_NODE,this.right=c!=null?c:It.EMPTY_NODE}copy(e,n,s,a,c){return new tt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,a!=null?a:this.left,c!=null?c:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class gR{copy(e,n,s,a,c){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ll(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ll(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new gR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(i,e){return fs(i.name,e.name)}function Fh(i,e){return fs(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd;function _R(i){Jd=i}const r0=function(i){return typeof i=="number"?"number:"+Lb(i):"string:"+i},s0=function(i){if(i.isLeafNode()){const e=i.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&en(e,".sv"),"Priority must be a string or number.")}else O(i===Jd||i.isEmpty(),"priority of unexpected type.");O(i===Jd||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),s0(this.priorityNode_)}static set __childrenNodeConstructor(e){I_=e}static get __childrenNodeConstructor(){return I_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:Y(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+r0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Lb(this.value_):e+=this.value_,this.lazyHash_=Pb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=et.VALUE_TYPE_ORDER.indexOf(n),c=et.VALUE_TYPE_ORDER.indexOf(s);return O(a>=0,"Unknown leaf type: "+n),O(c>=0,"Unknown leaf type: "+s),a===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0,a0;function yR(i){o0=i}function bR(i){a0=i}class wR extends Tc{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),c=s.compareTo(a);return c===0?fs(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(Wi,new et("[PRIORITY-POST]",a0))}makePost(e,n){const s=o0(e);return new J(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new wR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=Math.log(2);class ER{constructor(e){const n=c=>parseInt(Math.log(c)/IR,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ql=function(i,e,n,s){i.sort(e);const a=function(p,m){const b=m-p;let v,I;if(b===0)return null;if(b===1)return v=i[p],I=n?n(v):v,new tt(I,v.node,tt.BLACK,null,null);{const S=parseInt(b/2,10)+p,A=a(p,S),_=a(S+1,m);return v=i[S],I=n?n(v):v,new tt(I,v.node,tt.BLACK,A,_)}},c=function(p){let m=null,b=null,v=i.length;const I=function(A,_){const w=v-A,E=v;v-=A;const T=a(w+1,E),L=i[w],B=n?n(L):L;S(new tt(B,L.node,_,null,T))},S=function(A){m?(m.left=A,m=A):(b=A,m=A)};for(let A=0;A<p.count;++A){const _=p.nextBitIsOne(),w=Math.pow(2,p.count-(A+1));_?I(w,tt.BLACK):(I(w,tt.BLACK),I(w,tt.RED))}return b},u=new ER(i.length),f=c(u);return new It(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;const Vr={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Vr&&Oe,"ChildrenNode.ts has not been loaded"),Ad=Ad||new In({".priority":Vr},{".priority":Oe}),Ad}get(e){const n=es(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return en(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Qr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const c=n.getIterator(J.Wrap);let u=c.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=c.getNext();let f;a?f=Ql(s,e.getCompare()):f=Vr;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const b=Object.assign({},this.indexes_);return b[p]=f,new In(b,m)}addToIndexes(e,n){const s=Vl(this.indexes_,(a,c)=>{const u=es(this.indexSet_,c);if(O(u,"Missing index implementation for "+c),a===Vr)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(J.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),Ql(f,u.getCompare())}else return Vr;else{const f=n.get(e.name);let p=a;return f&&(p=p.remove(new J(e.name,f))),p.insert(e,e.node)}});return new In(s,this.indexSet_)}removeFromIndexes(e,n){const s=Vl(this.indexes_,a=>{if(a===Vr)return a;{const c=n.get(e.name);return c?a.remove(new J(e.name,c)):a}});return new In(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&s0(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return To||(To=new H(new It(Fh),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||To}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?To:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?To:this.priorityNode_;return new H(a,u,c)}}updateChild(e,n){const s=Y(e);if(s===null)return n;{O(Y(e)!==".priority"||ai(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,c=!0;if(this.forEachChild(Oe,(u,f)=>{n[u]=f.val(e),s++,c&&H.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):c=!1}),!e&&c&&a<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+r0(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":Pb(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const c=a.getPredecessorKey(new J(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,J.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ua?-1:0}withIndex(e){if(e===Qr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),a=n.getIterator(Oe);let c=s.getNext(),u=a.getNext();for(;c&&u;){if(c.name!==u.name||!c.node.equals(u.node))return!1;c=s.getNext(),u=a.getNext()}return c===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Qr?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CR extends H{constructor(){super(new It(Fh),H.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const ua=new CR;Object.defineProperties(J,{MIN:{value:new J(rs,H.EMPTY_NODE)},MAX:{value:new J(Wi,ua)}});i0.__EMPTY_NODE=H.EMPTY_NODE;et.__childrenNodeConstructor=H;_R(ua);bR(ua);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=!0;function ut(i,e=null){if(i===null)return H.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new et(n,ut(e))}if(!(i instanceof Array)&&SR){const n=[];let s=!1;if(St(i,(u,f)=>{if(u.substring(0,1)!=="."){const p=ut(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new J(u,p)))}}),n.length===0)return H.EMPTY_NODE;const c=Ql(n,vR,u=>u.name,Fh);if(s){const u=Ql(n,Oe.getCompare());return new H(c,ut(e),new In({".priority":u},{".priority":Oe}))}else return new H(c,ut(e),In.Default)}else{let n=H.EMPTY_NODE;return St(i,(s,a)=>{if(en(i,s)&&s.substring(0,1)!=="."){const c=ut(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(ut(e))}}yR(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR extends Tc{constructor(e){super(),this.indexPath_=e,O(!Z(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),c=s.compareTo(a);return c===0?fs(e.name,n.name):c}makePost(e,n){const s=ut(e),a=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,a)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,ua);return new J(Wi,e)}toString(){return e0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR extends Tc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=ut(e);return new J(n,s)}toString(){return".value"}}const RR=new kR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(i){return{type:"value",snapshotNode:i}}function ss(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Jo(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Xo(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function AR(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.index_=e}updateChild(e,n,s,a,c,u){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Jo(n,f)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(ss(n,s)):u.trackChildChange(Xo(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(a,c)=>{n.hasChild(a)||s.trackChildChange(Jo(a,c))}),n.isLeafNode()||n.forEachChild(Oe,(a,c)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(c)||s.trackChildChange(Xo(a,c,u))}else s.trackChildChange(ss(a,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.indexedFilter_=new Uh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qo.getStartPost_(e),this.endPost_=Qo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,a,c,u){return this.matches(new J(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,a,c,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(H.EMPTY_NODE);const c=this;return n.forEachChild(Oe,(u,f)=>{c.matches(new J(u,f))||(a=a.updateImmediateChild(u,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.rangedFilter_=new Qo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,a,c,u){return this.rangedFilter_.matches(new J(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,a,c,u):this.fullLimitUpdateChild_(e,n,s,c,u)}updateFullNode(e,n,s){let a;if(n.isLeafNode()||n.isEmpty())a=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=H.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;c.hasNext()&&u<this.limit_;){const f=c.getNext();let p;if(this.reverse_?p=this.index_.compare(this.rangedFilter_.getStartPost(),f)<=0:p=this.index_.compare(f,this.rangedFilter_.getEndPost())<=0,p)a=a.updateImmediateChild(f.name,f.node),u++;else break}}else{a=n.withIndex(this.index_),a=a.updatePriority(H.EMPTY_NODE);let c,u,f,p;if(this.reverse_){p=a.getReverseIterator(this.index_),c=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();const v=this.index_.getCompare();f=(I,S)=>v(S,I)}else p=a.getIterator(this.index_),c=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();let m=0,b=!1;for(;p.hasNext();){const v=p.getNext();!b&&f(c,v)<=0&&(b=!0),b&&m<this.limit_&&f(v,u)<=0?m++:a=a.updateImmediateChild(v.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,a,c){let u;if(this.reverse_){const v=this.index_.getCompare();u=(I,S)=>v(S,I)}else u=this.index_.getCompare();const f=e;O(f.numChildren()===this.limit_,"");const p=new J(n,s),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),b=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let I=a.getChildAfterChild(this.index_,m,this.reverse_);for(;I!=null&&(I.name===n||f.hasChild(I.name));)I=a.getChildAfterChild(this.index_,I,this.reverse_);const S=I==null?1:u(I,p);if(b&&!s.isEmpty()&&S>=0)return c!=null&&c.trackChildChange(Xo(n,s,v)),f.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(Jo(n,v));const _=f.updateImmediateChild(n,H.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(c!=null&&c.trackChildChange(ss(I.name,I.node)),_.updateImmediateChild(I.name,I.node)):_}}else return s.isEmpty()?e:b&&u(m,p)>=0?(c!=null&&(c.trackChildChange(Jo(m.name,m.node)),c.trackChildChange(ss(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(m.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rs}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Bh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PR(i){return i.loadsAllData()?new Uh(i.getIndex()):i.hasLimit()?new NR(i):new Qo(i)}function E_(i){const e={};if(i.isDefault())return e;let n;return i.index_===Oe?n="$priority":i.index_===RR?n="$value":i.index_===Qr?n="$key":(O(i.index_ instanceof TR,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=it(n),i.startSet_&&(e.startAt=it(i.indexStartValue_),i.startNameSet_&&(e.startAt+=","+it(i.indexStartName_))),i.endSet_&&(e.endAt=it(i.indexEndValue_),i.endNameSet_&&(e.endAt+=","+it(i.indexEndName_))),i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function C_(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_)),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_)),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Oe&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Xb{constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=ca("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const u=Zl.getListenId_(e,s),f={};this.listens_[u]=f;const p=E_(e._queryParams);this.restRequest_(c+".json",p,(m,b)=>{let v=b;if(m===404&&(v=null,m=null),m===null&&this.onDataUpdate_(c,v,!1,s),es(this.listens_,u)===f){let I;m?m===401?I="permission_denied":I="rest_error:"+m:I="ok",a(I,null)}})}unlisten(e,n){const s=Zl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=E_(e._queryParams),s=e._path.toString(),a=new uc;return this.restRequest_(s+".json",n,(c,u)=>{let f=u;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ji(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ho(f.responseText)}catch{Ct("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Ct("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){return{value:null,children:new Map}}function c0(i,e,n){if(Z(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=Y(e);i.children.has(s)||i.children.set(s,ec());const a=i.children.get(s);e=_e(e),c0(a,e,n)}}function Xd(i,e,n){i.value!==null?n(e,i.value):DR(i,(s,a)=>{const c=new ve(e.toString()+"/"+s);Xd(a,c,n)})}function DR(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&St(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=10*1e3,xR=30*1e3,MR=5*60*1e3;class FR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LR(e);const s=S_+(xR-S_)*Math.random();xo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;St(e,(a,c)=>{c>0&&en(this.statsToReport_,a)&&(n[a]=c,s=!0)}),s&&this.server_.reportStats(n),xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*MR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function u0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wh(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Jt.ACK_USER_WRITE,this.source=u0()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new tc(ae(),n,this.revert)}}else return O(Y(this.path)===e,"operationForChild called for unrelated child."),new tc(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.source=e,this.path=n,this.type=Jt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new Zo(this.source,ae()):new Zo(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Jt.OVERWRITE}operationForChild(e){return Z(this.path)?new Hi(this.source,ae(),this.snap.getImmediateChild(e)):new Hi(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Jt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Hi(this.source,ae(),n.value):new ea(this.source,ae(),n)}else return O(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ea(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function BR(i,e,n,s){const a=[],c=[];return e.forEach(u=>{u.type==="child_changed"&&i.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&c.push(AR(u.childName,u.snapshotNode))}),ko(i,a,"child_removed",e,s,n),ko(i,a,"child_added",e,s,n),ko(i,a,"child_moved",c,s,n),ko(i,a,"child_changed",e,s,n),ko(i,a,"value",e,s,n),a}function ko(i,e,n,s,a,c){const u=s.filter(f=>f.type===n);u.sort((f,p)=>WR(i,f,p)),u.forEach(f=>{const p=jR(i,f,c);a.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,i.query_))})})}function jR(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function WR(i,e,n){if(e.childName==null||n.childName==null)throw ls("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),a=new J(n.childName,n.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(i,e){return{eventCache:i,serverCache:e}}function Mo(i,e,n,s){return kc(new Vi(e,n,s),i.serverCache)}function d0(i,e,n,s){return kc(i.eventCache,new Vi(e,n,s))}function Qd(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function $i(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd;const HR=()=>(Nd||(Nd=new It(k2)),Nd);class be{constructor(e,n=HR()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return St(e,(s,a)=>{n=n.set(new ve(s),a)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(Z(e))return null;{const s=Y(e),a=this.children.get(s);if(a!==null){const c=a.findRootMostMatchingPathAndValue(_e(e),n);return c!=null?{path:Ke(new ve(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=Y(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new be(null)}}set(e,n){if(Z(e))return new be(n,this.children);{const s=Y(e),c=(this.children.get(s)||new be(null)).set(_e(e),n),u=this.children.insert(s,c);return new be(this.value,u)}}remove(e){if(Z(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=Y(e),s=this.children.get(n);if(s){const a=s.remove(_e(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new be(null):new be(this.value,c)}else return this}}get(e){if(Z(e))return this.value;{const n=Y(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(Z(e))return n;{const s=Y(e),c=(this.children.get(s)||new be(null)).setTree(_e(e),n);let u;return c.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,c),new be(this.value,u)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,c)=>{s[a]=c.fold_(Ke(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(Z(e))return null;{const c=Y(e),u=this.children.get(c);return u?u.findOnPath_(_e(e),Ke(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,s){if(Z(e))return this;{this.value&&s(n,this.value);const a=Y(e),c=this.children.get(a);return c?c.foreachOnPath_(_e(e),Ke(n,a),s):new be(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(Ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new be(null))}}function Fo(i,e,n){if(Z(e))return new Zt(new be(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let c=s.value;const u=wt(a,e);return c=c.updateChild(u,n),new Zt(i.writeTree_.set(a,c))}else{const a=new be(n),c=i.writeTree_.setTree(e,a);return new Zt(c)}}}function T_(i,e,n){let s=i;return St(n,(a,c)=>{s=Fo(s,Ke(e,a),c)}),s}function k_(i,e){if(Z(e))return Zt.empty();{const n=i.writeTree_.setTree(e,new be(null));return new Zt(n)}}function Zd(i,e){return Zi(i,e)!=null}function Zi(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(wt(n.path,e)):null}function R_(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,a)=>{e.push(new J(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new J(s,a.value))}),e}function ni(i,e){if(Z(e))return i;{const n=Zi(i,e);return n!=null?new Zt(new be(n)):new Zt(i.writeTree_.subtree(e))}}function eh(i){return i.writeTree_.isEmpty()}function os(i,e){return h0(ae(),i.writeTree_,e)}function h0(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(O(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=h0(Ke(i,a),c,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ke(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(i,e){return g0(e,i)}function VR(i,e,n,s,a){O(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(i.visibleWrites=Fo(i.visibleWrites,e,n)),i.lastWriteId=s}function $R(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function GR(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let a=s.visible,c=!1,u=i.allWrites.length-1;for(;a&&u>=0;){const f=i.allWrites[u];f.visible&&(u>=n&&zR(f,s.path)?a=!1:Yt(s.path,f.path)&&(c=!0)),u--}if(a){if(c)return qR(i),!0;if(s.snap)i.visibleWrites=k_(i.visibleWrites,s.path);else{const f=s.children;St(f,p=>{i.visibleWrites=k_(i.visibleWrites,Ke(s.path,p))})}return!0}else return!1}function zR(i,e){if(i.snap)return Yt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Yt(Ke(i.path,n),e))return!0;return!1}function qR(i){i.visibleWrites=f0(i.allWrites,KR,ae()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function KR(i){return i.visible}function f0(i,e,n){let s=Zt.empty();for(let a=0;a<i.length;++a){const c=i[a];if(e(c)){const u=c.path;let f;if(c.snap)Yt(n,u)?(f=wt(n,u),s=Fo(s,f,c.snap)):Yt(u,n)&&(f=wt(u,n),s=Fo(s,ae(),c.snap.getChild(f)));else if(c.children){if(Yt(n,u))f=wt(n,u),s=T_(s,f,c.children);else if(Yt(u,n))if(f=wt(u,n),Z(f))s=T_(s,ae(),c.children);else{const p=es(c.children,Y(f));if(p){const m=p.getChild(_e(f));s=Fo(s,ae(),m)}}}else throw ls("WriteRecord should have .snap or .children")}}return s}function p0(i,e,n,s,a){if(!s&&!a){const c=Zi(i.visibleWrites,e);if(c!=null)return c;{const u=ni(i.visibleWrites,e);if(eh(u))return n;if(n==null&&!Zd(u,ae()))return null;{const f=n||H.EMPTY_NODE;return os(u,f)}}}else{const c=ni(i.visibleWrites,e);if(!a&&eh(c))return n;if(!a&&n==null&&!Zd(c,ae()))return null;{const u=function(m){return(m.visible||a)&&(!s||!~s.indexOf(m.writeId))&&(Yt(m.path,e)||Yt(e,m.path))},f=f0(i.allWrites,u,e),p=n||H.EMPTY_NODE;return os(f,p)}}}function YR(i,e,n){let s=H.EMPTY_NODE;const a=Zi(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Oe,(c,u)=>{s=s.updateImmediateChild(c,u)}),s;if(n){const c=ni(i.visibleWrites,e);return n.forEachChild(Oe,(u,f)=>{const p=os(ni(c,new ve(u)),f);s=s.updateImmediateChild(u,p)}),R_(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const c=ni(i.visibleWrites,e);return R_(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function JR(i,e,n,s,a){O(s||a,"Either existingEventSnap or existingServerSnap must exist");const c=Ke(e,n);if(Zd(i.visibleWrites,c))return null;{const u=ni(i.visibleWrites,c);return eh(u)?a.getChild(n):os(u,a.getChild(n))}}function XR(i,e,n,s){const a=Ke(e,n),c=Zi(i.visibleWrites,a);if(c!=null)return c;if(s.isCompleteForChild(n)){const u=ni(i.visibleWrites,a);return os(u,s.getNode().getImmediateChild(n))}else return null}function QR(i,e){return Zi(i.visibleWrites,e)}function ZR(i,e,n,s,a,c,u){let f;const p=ni(i.visibleWrites,e),m=Zi(p,ae());if(m!=null)f=m;else if(n!=null)f=os(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const b=[],v=u.getCompare(),I=c?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let S=I.getNext();for(;S&&b.length<a;)v(S,s)!==0&&b.push(S),S=I.getNext();return b}else return[]}function eA(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function nc(i,e,n,s){return p0(i.writeTree,i.treePath,e,n,s)}function Vh(i,e){return YR(i.writeTree,i.treePath,e)}function A_(i,e,n,s){return JR(i.writeTree,i.treePath,e,n,s)}function ic(i,e){return QR(i.writeTree,Ke(i.treePath,e))}function tA(i,e,n,s,a,c){return ZR(i.writeTree,i.treePath,e,n,s,a,c)}function $h(i,e,n){return XR(i.writeTree,i.treePath,e,n)}function m0(i,e){return g0(Ke(i.treePath,e),i.writeTree)}function g0(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Xo(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Jo(s,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,ss(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Xo(s,e.snapshotNode,a.oldSnap));else throw ls("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const v0=new iA;class Gh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Vi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $h(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),c=tA(this.writes_,a,n,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(i){return{filter:i}}function sA(i,e){O(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function oA(i,e,n,s,a){const c=new nA;let u,f;if(n.type===Jt.OVERWRITE){const m=n;m.source.fromUser?u=th(i,e,m.path,m.snap,s,a,c):(O(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!Z(m.path),u=rc(i,e,m.path,m.snap,s,a,f,c))}else if(n.type===Jt.MERGE){const m=n;m.source.fromUser?u=lA(i,e,m.path,m.children,s,a,c):(O(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),u=nh(i,e,m.path,m.children,s,a,f,c))}else if(n.type===Jt.ACK_USER_WRITE){const m=n;m.revert?u=dA(i,e,m.path,s,a,c):u=cA(i,e,m.path,m.affectedTree,s,a,c)}else if(n.type===Jt.LISTEN_COMPLETE)u=uA(i,e,n.path,s,c);else throw ls("Unknown operation type: "+n.type);const p=c.getChanges();return aA(e,u,p),{viewCache:u,changes:p}}function aA(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Qd(i);(n.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(l0(Qd(e)))}}function _0(i,e,n,s,a,c){const u=e.eventCache;if(ic(s,n)!=null)return e;{let f,p;if(Z(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=$i(e),b=m instanceof H?m:H.EMPTY_NODE,v=Vh(s,b);f=i.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const m=nc(s,$i(e));f=i.filter.updateFullNode(e.eventCache.getNode(),m,c)}else{const m=Y(n);if(m===".priority"){O(ai(n)===1,"Can't have a priority with additional path components");const b=u.getNode();p=e.serverCache.getNode();const v=A_(s,n,b,p);v!=null?f=i.filter.updatePriority(b,v):f=u.getNode()}else{const b=_e(n);let v;if(u.isCompleteForChild(m)){p=e.serverCache.getNode();const I=A_(s,n,u.getNode(),p);I!=null?v=u.getNode().getImmediateChild(m).updateChild(b,I):v=u.getNode().getImmediateChild(m)}else v=$h(s,m,e.serverCache);v!=null?f=i.filter.updateChild(u.getNode(),m,v,b,a,c):f=u.getNode()}}return Mo(e,f,u.isFullyInitialized()||Z(n),i.filter.filtersNodes())}}function rc(i,e,n,s,a,c,u,f){const p=e.serverCache;let m;const b=u?i.filter:i.filter.getIndexedFilter();if(Z(n))m=b.updateFullNode(p.getNode(),s,null);else if(b.filtersNodes()&&!p.isFiltered()){const S=p.getNode().updateChild(n,s);m=b.updateFullNode(p.getNode(),S,null)}else{const S=Y(n);if(!p.isCompleteForPath(n)&&ai(n)>1)return e;const A=_e(n),w=p.getNode().getImmediateChild(S).updateChild(A,s);S===".priority"?m=b.updatePriority(p.getNode(),w):m=b.updateChild(p.getNode(),S,w,A,v0,null)}const v=d0(e,m,p.isFullyInitialized()||Z(n),b.filtersNodes()),I=new Gh(a,v,c);return _0(i,v,n,a,I,f)}function th(i,e,n,s,a,c,u){const f=e.eventCache;let p,m;const b=new Gh(a,e,c);if(Z(n))m=i.filter.updateFullNode(e.eventCache.getNode(),s,u),p=Mo(e,m,!0,i.filter.filtersNodes());else{const v=Y(n);if(v===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),p=Mo(e,m,f.isFullyInitialized(),f.isFiltered());else{const I=_e(n),S=f.getNode().getImmediateChild(v);let A;if(Z(I))A=s;else{const _=b.getCompleteChild(v);_!=null?Zb(I)===".priority"&&_.getChild(t0(I)).isEmpty()?A=_:A=_.updateChild(I,s):A=H.EMPTY_NODE}if(S.equals(A))p=e;else{const _=i.filter.updateChild(f.getNode(),v,A,I,b,u);p=Mo(e,_,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function N_(i,e){return i.eventCache.isCompleteForChild(e)}function lA(i,e,n,s,a,c,u){let f=e;return s.foreach((p,m)=>{const b=Ke(n,p);N_(e,Y(b))&&(f=th(i,f,b,m,a,c,u))}),s.foreach((p,m)=>{const b=Ke(n,p);N_(e,Y(b))||(f=th(i,f,b,m,a,c,u))}),f}function P_(i,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function nh(i,e,n,s,a,c,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Z(n)?m=s:m=new be(null).setTree(n,s);const b=e.serverCache.getNode();return m.children.inorderTraversal((v,I)=>{if(b.hasChild(v)){const S=e.serverCache.getNode().getImmediateChild(v),A=P_(i,S,I);p=rc(i,p,new ve(v),A,a,c,u,f)}}),m.children.inorderTraversal((v,I)=>{const S=!e.serverCache.isCompleteForChild(v)&&I.value===null;if(!b.hasChild(v)&&!S){const A=e.serverCache.getNode().getImmediateChild(v),_=P_(i,A,I);p=rc(i,p,new ve(v),_,a,c,u,f)}}),p}function cA(i,e,n,s,a,c,u){if(ic(a,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Z(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return rc(i,e,n,p.getNode().getChild(n),a,c,f,u);if(Z(n)){let m=new be(null);return p.getNode().forEachChild(Qr,(b,v)=>{m=m.set(new ve(b),v)}),nh(i,e,n,m,a,c,f,u)}else return e}else{let m=new be(null);return s.foreach((b,v)=>{const I=Ke(n,b);p.isCompleteForPath(I)&&(m=m.set(b,p.getNode().getChild(I)))}),nh(i,e,n,m,a,c,f,u)}}function uA(i,e,n,s,a){const c=e.serverCache,u=d0(e,c.getNode(),c.isFullyInitialized()||Z(n),c.isFiltered());return _0(i,u,n,s,v0,a)}function dA(i,e,n,s,a,c){let u;if(ic(s,n)!=null)return e;{const f=new Gh(s,e,a),p=e.eventCache.getNode();let m;if(Z(n)||Y(n)===".priority"){let b;if(e.serverCache.isFullyInitialized())b=nc(s,$i(e));else{const v=e.serverCache.getNode();O(v instanceof H,"serverChildren would be complete if leaf node"),b=Vh(s,v)}b=b,m=i.filter.updateFullNode(p,b,c)}else{const b=Y(n);let v=$h(s,b,e.serverCache);v==null&&e.serverCache.isCompleteForChild(b)&&(v=p.getImmediateChild(b)),v!=null?m=i.filter.updateChild(p,b,v,_e(n),f,c):e.eventCache.getNode().hasChild(b)?m=i.filter.updateChild(p,b,H.EMPTY_NODE,_e(n),f,c):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=nc(s,$i(e)),u.isLeafNode()&&(m=i.filter.updateFullNode(m,u,c)))}return u=e.serverCache.isFullyInitialized()||ic(s,ae())!=null,Mo(e,m,u,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Uh(s.getIndex()),c=PR(s);this.processor_=rA(c);const u=n.serverCache,f=n.eventCache,p=a.updateFullNode(H.EMPTY_NODE,u.getNode(),null),m=c.updateFullNode(H.EMPTY_NODE,f.getNode(),null),b=new Vi(p,u.isFullyInitialized(),a.filtersNodes()),v=new Vi(m,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=kc(v,b),this.eventGenerator_=new UR(this.query_)}get query(){return this.query_}}function fA(i){return i.viewCache_.serverCache.getNode()}function pA(i,e){const n=$i(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function O_(i){return i.eventRegistrations_.length===0}function mA(i,e){i.eventRegistrations_.push(e)}function D_(i,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const a=i.query._path;i.eventRegistrations_.forEach(c=>{const u=c.createCancelEvent(n,a);u&&s.push(u)})}if(e){let a=[];for(let c=0;c<i.eventRegistrations_.length;++c){const u=i.eventRegistrations_[c];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(i.eventRegistrations_.slice(c+1));break}}i.eventRegistrations_=a}else i.eventRegistrations_=[];return s}function L_(i,e,n,s){e.type===Jt.MERGE&&e.source.queryId!==null&&(O($i(i.viewCache_),"We should always have a full cache before handling merges"),O(Qd(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,c=oA(i.processor_,a,e,n,s);return sA(i.processor_,c.viewCache),O(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=c.viewCache,y0(i,c.changes,c.viewCache.eventCache.getNode(),null)}function gA(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(c,u)=>{s.push(ss(c,u))}),n.isFullyInitialized()&&s.push(l0(n.getNode())),y0(i,s,n.getNode(),e)}function y0(i,e,n,s){const a=s?[s]:i.eventRegistrations_;return BR(i.eventGenerator_,e,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class vA{constructor(){this.views=new Map}}function _A(i){O(!sc,"__referenceConstructor has already been defined"),sc=i}function yA(){return O(sc,"Reference.ts has not been loaded"),sc}function bA(i){return i.views.size===0}function zh(i,e,n,s){const a=e.source.queryId;if(a!==null){const c=i.views.get(a);return O(c!=null,"SyncTree gave us an op for an invalid query."),L_(c,e,n,s)}else{let c=[];for(const u of i.views.values())c=c.concat(L_(u,e,n,s));return c}}function wA(i,e,n,s,a){const c=e._queryIdentifier,u=i.views.get(c);if(!u){let f=nc(n,a?s:null),p=!1;f?p=!0:s instanceof H?(f=Vh(n,s),p=!1):(f=H.EMPTY_NODE,p=!1);const m=kc(new Vi(f,p,!1),new Vi(s,a,!1));return new hA(e,m)}return u}function IA(i,e,n,s,a,c){const u=wA(i,e,s,a,c);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,u),mA(u,n),gA(u,n)}function EA(i,e,n,s){const a=e._queryIdentifier,c=[];let u=[];const f=li(i);if(a==="default")for(const[p,m]of i.views.entries())u=u.concat(D_(m,n,s)),O_(m)&&(i.views.delete(p),m.query._queryParams.loadsAllData()||c.push(m.query));else{const p=i.views.get(a);p&&(u=u.concat(D_(p,n,s)),O_(p)&&(i.views.delete(a),p.query._queryParams.loadsAllData()||c.push(p.query)))}return f&&!li(i)&&c.push(new(yA())(e._repo,e._path)),{removed:c,events:u}}function b0(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zr(i,e){let n=null;for(const s of i.views.values())n=n||pA(s,e);return n}function w0(i,e){if(e._queryParams.loadsAllData())return Rc(i);{const s=e._queryIdentifier;return i.views.get(s)}}function I0(i,e){return w0(i,e)!=null}function li(i){return Rc(i)!=null}function Rc(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc;function CA(i){O(!oc,"__referenceConstructor has already been defined"),oc=i}function SA(){return O(oc,"Reference.ts has not been loaded"),oc}let TA=1;class x_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=eA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function E0(i,e,n,s,a){return VR(i.pendingWriteTree_,e,n,s,a),a?da(i,new Hi(u0(),e,n)):[]}function Li(i,e,n=!1){const s=$R(i.pendingWriteTree_,e);if(GR(i.pendingWriteTree_,e)){let c=new be(null);return s.snap!=null?c=c.set(ae(),!0):St(s.children,u=>{c=c.set(new ve(u),!0)}),da(i,new tc(s.path,c,n))}else return[]}function Ac(i,e,n){return da(i,new Hi(jh(),e,n))}function kA(i,e,n){const s=be.fromObject(n);return da(i,new ea(jh(),e,s))}function RA(i,e){return da(i,new Zo(jh(),e))}function AA(i,e,n){const s=Kh(i,n);if(s){const a=Yh(s),c=a.path,u=a.queryId,f=wt(c,e),p=new Zo(Wh(u),f);return Jh(i,c,p)}else return[]}function ih(i,e,n,s,a=!1){const c=e._path,u=i.syncPointTree_.get(c);let f=[];if(u&&(e._queryIdentifier==="default"||I0(u,e))){const p=EA(u,e,n,s);bA(u)&&(i.syncPointTree_=i.syncPointTree_.remove(c));const m=p.removed;if(f=p.events,!a){const b=m.findIndex(I=>I._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(c,(I,S)=>li(S));if(b&&!v){const I=i.syncPointTree_.subtree(c);if(!I.isEmpty()){const S=OA(I);for(let A=0;A<S.length;++A){const _=S[A],w=_.query,E=T0(i,_);i.listenProvider_.startListening(Uo(w),ac(i,w),E.hashFn,E.onComplete)}}}!v&&m.length>0&&!s&&(b?i.listenProvider_.stopListening(Uo(e),null):m.forEach(I=>{const S=i.queryToTagMap.get(Nc(I));i.listenProvider_.stopListening(Uo(I),S)}))}DA(i,m)}return f}function NA(i,e,n,s){const a=Kh(i,s);if(a!=null){const c=Yh(a),u=c.path,f=c.queryId,p=wt(u,e),m=new Hi(Wh(f),p,n);return Jh(i,u,m)}else return[]}function PA(i,e,n,s){const a=Kh(i,s);if(a){const c=Yh(a),u=c.path,f=c.queryId,p=wt(u,e),m=be.fromObject(n),b=new ea(Wh(f),p,m);return Jh(i,u,b)}else return[]}function M_(i,e,n,s=!1){const a=e._path;let c=null,u=!1;i.syncPointTree_.foreachOnPath(a,(I,S)=>{const A=wt(I,a);c=c||Zr(S,A),u=u||li(S)});let f=i.syncPointTree_.get(a);f?(u=u||li(f),c=c||Zr(f,ae())):(f=new vA,i.syncPointTree_=i.syncPointTree_.set(a,f));let p;c!=null?p=!0:(p=!1,c=H.EMPTY_NODE,i.syncPointTree_.subtree(a).foreachChild((S,A)=>{const _=Zr(A,ae());_&&(c=c.updateImmediateChild(S,_))}));const m=I0(f,e);if(!m&&!e._queryParams.loadsAllData()){const I=Nc(e);O(!i.queryToTagMap.has(I),"View does not exist, but we have a tag");const S=LA();i.queryToTagMap.set(I,S),i.tagToQueryMap.set(S,I)}const b=Hh(i.pendingWriteTree_,a);let v=IA(f,e,n,b,c,p);if(!m&&!u&&!s){const I=w0(f,e);v=v.concat(xA(i,e,I))}return v}function qh(i,e,n){const a=i.pendingWriteTree_,c=i.syncPointTree_.findOnPath(e,(u,f)=>{const p=wt(u,e),m=Zr(f,p);if(m)return m});return p0(a,e,c,n,!0)}function da(i,e){return C0(e,i.syncPointTree_,null,Hh(i.pendingWriteTree_,ae()))}function C0(i,e,n,s){if(Z(i.path))return S0(i,e,n,s);{const a=e.get(ae());n==null&&a!=null&&(n=Zr(a,ae()));let c=[];const u=Y(i.path),f=i.operationForChild(u),p=e.children.get(u);if(p&&f){const m=n?n.getImmediateChild(u):null,b=m0(s,u);c=c.concat(C0(f,p,m,b))}return a&&(c=c.concat(zh(a,i,s,n))),c}}function S0(i,e,n,s){const a=e.get(ae());n==null&&a!=null&&(n=Zr(a,ae()));let c=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,m=m0(s,u),b=i.operationForChild(u);b&&(c=c.concat(S0(b,f,p,m)))}),a&&(c=c.concat(zh(a,i,s,n))),c}function T0(i,e){const n=e.query,s=ac(i,n);return{hashFn:()=>(fA(e)||H.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?AA(i,n._path,s):RA(i,n._path);{const c=N2(a,n);return ih(i,n,null,c)}}}}function ac(i,e){const n=Nc(e);return i.queryToTagMap.get(n)}function Nc(i){return i._path.toString()+"$"+i._queryIdentifier}function Kh(i,e){return i.tagToQueryMap.get(e)}function Yh(i){const e=i.indexOf("$");return O(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ve(i.substr(0,e))}}function Jh(i,e,n){const s=i.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const a=Hh(i.pendingWriteTree_,e);return zh(s,n,a,null)}function OA(i){return i.fold((e,n,s)=>{if(n&&li(n))return[Rc(n)];{let a=[];return n&&(a=b0(n)),St(s,(c,u)=>{a=a.concat(u)}),a}})}function Uo(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(SA())(i._repo,i._path):i}function DA(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const a=Nc(s),c=i.queryToTagMap.get(a);i.queryToTagMap.delete(a),i.tagToQueryMap.delete(c)}}}function LA(){return TA++}function xA(i,e,n){const s=e._path,a=ac(i,e),c=T0(i,n),u=i.listenProvider_.startListening(Uo(e),a,c.hashFn,c.onComplete),f=i.syncPointTree_.subtree(s);if(a)O(!li(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,b,v)=>{if(!Z(m)&&b&&li(b))return[Rc(b).query];{let I=[];return b&&(I=I.concat(b0(b).map(S=>S.query))),St(v,(S,A)=>{I=I.concat(A)}),I}});for(let m=0;m<p.length;++m){const b=p[m];i.listenProvider_.stopListening(Uo(b),ac(i,b))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xh(n)}node(){return this.node_}}class Qh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Qh(this.syncTree_,n)}node(){return qh(this.syncTree_,this.path_)}}const MA=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},F_=function(i,e,n){if(!i||typeof i!="object")return i;if(O(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return FA(i[".sv"],e,n);if(typeof i[".sv"]=="object")return UA(i[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},FA=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+i)}},UA=function(i,e,n){i.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const a=e.node();if(O(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},BA=function(i,e,n,s){return Zh(e,new Qh(n,i),s)},k0=function(i,e,n){return Zh(i,new Xh(e),n)};function Zh(i,e,n){const s=i.getPriority().val(),a=F_(s,e.getImmediateChild(".priority"),n);let c;if(i.isLeafNode()){const u=i,f=F_(u.getValue(),e,n);return f!==u.getValue()||a!==u.getPriority().val()?new et(f,ut(a)):i}else{const u=i;return c=u,a!==u.getPriority().val()&&(c=c.updatePriority(new et(a))),u.forEachChild(Oe,(f,p)=>{const m=Zh(p,e.getImmediateChild(f),n);m!==p&&(c=c.updateImmediateChild(f,m))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function tf(i,e){let n=e instanceof ve?e:new ve(e),s=i,a=Y(n);for(;a!==null;){const c=es(s.node.children,a)||{children:{},childCount:0};s=new ef(a,s,c),n=_e(n),a=Y(n)}return s}function ms(i){return i.node.value}function R0(i,e){i.node.value=e,rh(i)}function A0(i){return i.node.childCount>0}function jA(i){return ms(i)===void 0&&!A0(i)}function Pc(i,e){St(i.node.children,(n,s)=>{e(new ef(n,i,s))})}function N0(i,e,n,s){n&&!s&&e(i),Pc(i,a=>{N0(a,e,!0,s)}),n&&s&&e(i)}function WA(i,e,n){let s=n?i:i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ha(i){return new ve(i.parent===null?i.name:ha(i.parent)+"/"+i.name)}function rh(i){i.parent!==null&&HA(i.parent,i.name,i)}function HA(i,e,n){const s=jA(n),a=en(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,rh(i)):!s&&!a&&(i.node.children[e]=n.node,i.node.childCount++,rh(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/[\[\].#$\/\u0000-\u001F\u007F]/,$A=/[\[\].#$\u0000-\u001F\u007F]/,Pd=10*1024*1024,P0=function(i){return typeof i=="string"&&i.length!==0&&!VA.test(i)},O0=function(i){return typeof i=="string"&&i.length!==0&&!$A.test(i)},GA=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),O0(i)},zA=function(i,e,n,s){s&&e===void 0||nf(uh(i,"value"),e,n)},nf=function(i,e,n){const s=n instanceof ve?new cR(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+Ai(s));if(typeof e=="function")throw new Error(i+"contains a function "+Ai(s)+" with contents = "+e.toString());if(Ob(e))throw new Error(i+"contains "+e.toString()+" "+Ai(s));if(typeof e=="string"&&e.length>Pd/3&&dc(e)>Pd)throw new Error(i+"contains a string greater than "+Pd+" utf8 bytes "+Ai(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(St(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(c=!0,!P0(u)))throw new Error(i+" contains an invalid key ("+u+") "+Ai(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uR(s,u),nf(i,f,s),dR(s)}),a&&c)throw new Error(i+' contains ".value" child '+Ai(s)+" in addition to actual children.")}},D0=function(i,e,n,s){if(!(s&&n===void 0)&&!O0(n))throw new Error(uh(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qA=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),D0(i,e,n,s)},KA=function(i,e){if(Y(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},YA=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!P0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GA(n))throw new Error(uh(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rf(i,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],c=a.getPath();n!==null&&!xh(c,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&i.eventLists_.push(n)}function L0(i,e,n){rf(i,n),x0(i,s=>xh(s,e))}function An(i,e,n){rf(i,n),x0(i,s=>Yt(s,e)||Yt(e,s))}function x0(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const c=a.path;e(c)?(XA(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function XA(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ui&&ht("event: "+n.toString()),ps(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="repo_interrupt",ZA=25;class eN{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tN(i,e,n){if(i.stats_=Dh(i.repoInfo_),i.forceRestClient_||L2())i.server_=new Zl(i.repoInfo_,(s,a,c,u)=>{U_(i,s,a,c,u)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>B_(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Sn(i.repoInfo_,e,(s,a,c,u)=>{U_(i,s,a,c,u)},s=>{B_(i,s)},s=>{iN(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=B2(i.repoInfo_,()=>new FR(i.stats_,i.server_)),i.infoData_=new OR,i.infoSyncTree_=new x_({startListening:(s,a,c,u)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Ac(i.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),of(i,"connected",!1),i.serverSyncTree_=new x_({startListening:(s,a,c,u)=>(i.server_.listen(s,c,a,(f,p)=>{const m=u(f,p);An(i.eventQueue_,s._path,m)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function nN(i){const n=i.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sf(i){return MA({timestamp:nN(i)})}function U_(i,e,n,s,a){i.dataUpdateCount++;const c=new ve(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let u=[];if(a)if(s){const p=Vl(n,m=>ut(m));u=PA(i.serverSyncTree_,c,p,a)}else{const p=ut(n);u=NA(i.serverSyncTree_,c,p,a)}else if(s){const p=Vl(n,m=>ut(m));u=kA(i.serverSyncTree_,c,p)}else{const p=ut(n);u=Ac(i.serverSyncTree_,c,p)}let f=c;u.length>0&&(f=Oc(i,c)),An(i.eventQueue_,f,u)}function B_(i,e){of(i,"connected",e),e===!1&&sN(i)}function iN(i,e){St(e,(n,s)=>{of(i,n,s)})}function of(i,e,n){const s=new ve("/.info/"+e),a=ut(n);i.infoData_.updateSnapshot(s,a);const c=Ac(i.infoSyncTree_,s,a);An(i.eventQueue_,s,c)}function M0(i){return i.nextWriteId_++}function rN(i,e,n,s,a){af(i,"set",{path:e.toString(),value:n,priority:s});const c=sf(i),u=ut(n,s),f=qh(i.serverSyncTree_,e),p=k0(u,f,c),m=M0(i),b=E0(i.serverSyncTree_,e,p,m,!0);rf(i.eventQueue_,b),i.server_.put(e.toString(),u.val(!0),(I,S)=>{const A=I==="ok";A||Ct("set at "+e+" failed: "+I);const _=Li(i.serverSyncTree_,m,!A);An(i.eventQueue_,e,_),lN(i,a,I,S)});const v=W0(i,e);Oc(i,v),An(i.eventQueue_,v,[])}function sN(i){af(i,"onDisconnectEvents");const e=sf(i),n=ec();Xd(i.onDisconnect_,ae(),(a,c)=>{const u=BA(a,c,i.serverSyncTree_,e);c0(n,a,u)});let s=[];Xd(n,ae(),(a,c)=>{s=s.concat(Ac(i.serverSyncTree_,a,c));const u=W0(i,a);Oc(i,u)}),i.onDisconnect_=ec(),An(i.eventQueue_,ae(),s)}function oN(i,e,n){let s;Y(e._path)===".info"?s=M_(i.infoSyncTree_,e,n):s=M_(i.serverSyncTree_,e,n),L0(i.eventQueue_,e._path,s)}function j_(i,e,n){let s;Y(e._path)===".info"?s=ih(i.infoSyncTree_,e,n):s=ih(i.serverSyncTree_,e,n),L0(i.eventQueue_,e._path,s)}function aN(i){i.persistentConnection_&&i.persistentConnection_.interrupt(QA)}function af(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),ht(n,...e)}function lN(i,e,n,s){e&&ps(()=>{if(n==="ok")e(null);else{const a=(n||"error").toUpperCase();let c=a;s&&(c+=": "+s);const u=new Error(c);u.code=a,e(u)}})}function F0(i,e,n){return qh(i.serverSyncTree_,e,n)||H.EMPTY_NODE}function lf(i,e=i.transactionQueueTree_){if(e||Dc(i,e),ms(e)){const n=B0(i,e);O(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&cN(i,ha(e),n)}else A0(e)&&Pc(e,n=>{lf(i,n)})}function cN(i,e,n){const s=n.map(m=>m.currentWriteId),a=F0(i,e,s);let c=a;const u=a.hash();for(let m=0;m<n.length;m++){const b=n[m];O(b.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),b.status=1,b.retryCount++;const v=wt(e,b.path);c=c.updateChild(v,b.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;i.server_.put(p.toString(),f,m=>{af(i,"transaction put response",{path:p.toString(),status:m});let b=[];if(m==="ok"){const v=[];for(let I=0;I<n.length;I++)n[I].status=2,b=b.concat(Li(i.serverSyncTree_,n[I].currentWriteId)),n[I].onComplete&&v.push(()=>n[I].onComplete(null,!0,n[I].currentOutputSnapshotResolved)),n[I].unwatcher();Dc(i,tf(i.transactionQueueTree_,e)),lf(i,i.transactionQueueTree_),An(i.eventQueue_,e,b);for(let I=0;I<v.length;I++)ps(v[I])}else{if(m==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{Ct("transaction at "+p.toString()+" failed: "+m);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=m}Oc(i,e)}},u)}function Oc(i,e){const n=U0(i,e),s=ha(n),a=B0(i,n);return uN(i,a,s),s}function uN(i,e,n){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=wt(n,p.path);let b=!1,v;if(O(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)b=!0,v=p.abortReason,a=a.concat(Li(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=ZA)b=!0,v="maxretry",a=a.concat(Li(i.serverSyncTree_,p.currentWriteId,!0));else{const I=F0(i,p.path,u);p.currentInputSnapshot=I;const S=e[f].update(I.val());if(S!==void 0){nf("transaction failed: Data returned ",S,p.path);let A=ut(S);typeof S=="object"&&S!=null&&en(S,".priority")||(A=A.updatePriority(I.getPriority()));const w=p.currentWriteId,E=sf(i),T=k0(A,I,E);p.currentOutputSnapshotRaw=A,p.currentOutputSnapshotResolved=T,p.currentWriteId=M0(i),u.splice(u.indexOf(w),1),a=a.concat(E0(i.serverSyncTree_,p.path,T,p.currentWriteId,p.applyLocally)),a=a.concat(Li(i.serverSyncTree_,w,!0))}else b=!0,v="nodata",a=a.concat(Li(i.serverSyncTree_,p.currentWriteId,!0))}An(i.eventQueue_,n,a),a=[],b&&(e[f].status=2,function(I){setTimeout(I,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Dc(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)ps(s[f]);lf(i,i.transactionQueueTree_)}function U0(i,e){let n,s=i.transactionQueueTree_;for(n=Y(e);n!==null&&ms(s)===void 0;)s=tf(s,n),e=_e(e),n=Y(e);return s}function B0(i,e){const n=[];return j0(i,e,n),n.sort((s,a)=>s.order-a.order),n}function j0(i,e,n){const s=ms(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);Pc(e,a=>{j0(i,a,n)})}function Dc(i,e){const n=ms(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,R0(e,n.length>0?n:void 0)}Pc(e,s=>{Dc(i,s)})}function W0(i,e){const n=ha(U0(i,e)),s=tf(i.transactionQueueTree_,e);return WA(s,a=>{Od(i,a)}),Od(i,s),N0(s,a=>{Od(i,a)}),n}function Od(i,e){const n=ms(e);if(n){const s=[];let a=[],c=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(O(c===u-1,"All SENT items should be at beginning of queue."),c=u,n[u].status=3,n[u].abortReason="set"):(O(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),a=a.concat(Li(i.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));c===-1?R0(e,void 0):n.length=c+1,An(i.eventQueue_,ha(e),a);for(let u=0;u<s.length;u++)ps(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function hN(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ct(`Invalid query segment '${n}' in query '${i}'`)}return e}const W_=function(i,e){const n=fN(i),s=n.namespace;n.domain==="firebase.com"&&Rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S2();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $b(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new ve(n.pathString)}},fN=function(i){let e="",n="",s="",a="",c="",u=!0,f="https",p=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(f=i.substring(0,m-1),i=i.substring(m+2));let b=i.indexOf("/");b===-1&&(b=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(b,v)),b<v&&(a=dN(i.substring(b,v)));const I=hN(i.substring(Math.min(i.length,v)));m=e.indexOf(":"),m>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const S=e.slice(0,m);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),c=s}"ns"in I&&(c=I.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:a,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,s,a){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class V0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return Z(this._path)?null:Zb(this._path)}get ref(){return new Ln(this._repo,this._path)}get _queryIdentifier(){const e=C_(this._queryParams),n=Ph(e);return n==="{}"?"default":n}get _queryObject(){return C_(this._queryParams)}isEqual(e){if(e=q(e),!(e instanceof cf))return!1;const n=this._repo===e._repo,s=xh(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+lR(this._path)}}class Ln extends cf{constructor(e,n){super(e,n,new Bh,!1)}get parent(){const e=t0(this._path);return e===null?null:new Ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ta{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=lc(this.ref,e);return new ta(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new ta(a,lc(this.ref,s),Oe)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mN(i,e){return i=q(i),i._checkNotDeleted("ref"),e!==void 0?lc(i._root,e):i._root}function lc(i,e){return i=q(i),Y(i._path)===null?qA("child","path",e,!1):D0("child","path",e,!1),new Ln(i._repo,Ke(i._path,e))}function gN(i,e){i=q(i),KA("set",i._path),zA("set",e,i._path,!1);const n=new uc;return rN(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}class uf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new H0("value",this,new ta(e.snapshotNode,new Ln(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new V0(this,e,n):null}matches(e){return e instanceof uf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class df{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new V0(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const s=lc(new Ln(n._repo,n._path),e.childName),a=n._queryParams.getIndex();return new H0(e.type,this,new ta(e.snapshotNode,s,a),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof df?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function vN(i,e,n,s,a){let c;if(typeof s=="object"&&(c=void 0,a=s),typeof s=="function"&&(c=s),a&&a.onlyOnce){const p=n,m=(b,v)=>{j_(i._repo,i,f),p(b,v)};m.userCallback=n.userCallback,m.context=n.context,n=m}const u=new pN(n,c||void 0),f=e==="value"?new uf(u):new df(e,u);return oN(i._repo,i,f),()=>j_(i._repo,i,f)}function _N(i,e,n,s){return vN(i,"value",e,n,s)}_A(Ln);CA(Ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="FIREBASE_DATABASE_EMULATOR_HOST",sh={};let bN=!1;function wN(i,e,n,s){i.repoInfo_=new $b(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams),s&&(i.authTokenProvider_=s)}function IN(i,e,n,s,a){let c=s||i.options.databaseURL;c===void 0&&(i.options.projectId||Rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",i.options.projectId),c=`${i.options.projectId}-default-rtdb.firebaseio.com`);let u=W_(c,a),f=u.repoInfo,p,m;typeof process<"u"&&process.env&&(m=process.env[yN]),m?(p=!0,c=`http://${m}?ns=${f.namespace}`,u=W_(c,a),f=u.repoInfo):p=!u.repoInfo.secure;const b=a&&p?new Xr(Xr.OWNER):new M2(i.name,i.options,e);YA("Invalid Firebase Database URL",u),Z(u.path)||Rn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=CN(f,i,b,new x2(i.name,n));return new SN(v,i)}function EN(i,e){const n=sh[e];(!n||n[i.key]!==i)&&Rn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),aN(i),delete n[i.key]}function CN(i,e,n,s){let a=sh[e.name];a||(a={},sh[e.name]=a);let c=a[i.toURLString()];return c&&Rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new eN(i,bN,n,s),a[i.toURLString()]=c,c}class SN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ln(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rn("Cannot call "+e+" on a deleted database.")}}function TN(i=fh(),e){const n=ia(i,"database").getImmediate({identifier:e}),s=GI("database");return s&&kN(n,...s),n}function kN(i,e,n,s={}){i=q(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&Rn("Cannot call useEmulator() after instance has already been initialized.");const a=i._repoInternal;let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&Rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Xr(Xr.OWNER);else if(s.mockUserToken){const u=typeof s.mockUserToken=="string"?s.mockUserToken:qI(s.mockUserToken,i.app.options.projectId);c=new Xr(u)}wN(a,e,n,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(i){b2(Xi),si(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return IN(s,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Xt(a_,l_,i),Xt(a_,l_,"esm2017")}Sn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Sn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};RN();const $r=[];function AN(i,e=Ye){let n;const s=new Set;function a(f){if(ci(i,f)&&(i=f,n)){const p=!$r.length;for(const m of s)m[1](),$r.push(m,i);if(p){for(let m=0;m<$r.length;m+=2)$r[m][0]($r[m+1]);$r.length=0}}}function c(f){a(f(i))}function u(f,p=Ye){const m=[f,p];return s.add(m),s.size===1&&(n=e(a)||Ye),f(i),()=>{s.delete(m),s.size===0&&(n(),n=null)}}return{set:a,update:c,subscribe:u}}function H_(i){const e=new Date,[n,s]=i.split(":");return e.setHours(parseInt(n)),e.setMinutes(parseInt(s)),Number(e)}function V_(i){const e=Number(new Date(i.getFullYear(),0,0)),n=i-e,s=1e3*60*60*24;return n/s/365}const $0=fc({databaseURL:"https://watchman-willnode-default-rtdb.asia-southeast1.firebasedatabase.app/",apiKey:"AIzaSyCrG9gLErgO0YmZE37PnIF0Vzb-fjbZ4Rg"}),NN=TN($0),PN=kk($0),Lc=JSON.parse(localStorage.getItem("user")||"null");var hf=[{id:"sleep",context:"Sleep",detail:"Relax. Take a rest and sleep.",times:[["03:30","04:30"],["11:00","12:00"],["21:00","03:00"]]},{id:"rest",context:"Rest",detail:"Eat. Shower. Relax. Set your mood.",times:[["03:00","03:30"],["04:30","06:00"],["08:30","09:00"],["12:00","12:30"],["15:00","15:30"],["17:30","19:30"]]},{id:"work",context:"Work",detail:"Work. Study. Learn. Do productive things.",times:[["06:00","08:30"],["09:00","11:00"],["12:30","15:00"],["15:30","17:30"],["19:30","21:00"]]}],Bo=hf.map(i=>{var e=i.times.map(n=>{var[s,a]=n;return[H_(s),H_(a)]});return{...i,timesParsed:e}}).reduce((i,e)=>{for(let n=0;n<e.times.length;n++)i.push({id:e.id,start:e.times[n][0],end:e.times[n][1],startParsed:e.timesParsed[n][0],endParsed:e.timesParsed[n][1]});return i},[]).sort((i,e)=>i.startParsed-e.startParsed);function ON(i,e={}){var n=mN(NN,`${Lc.uid}/${i}`),s=AN(null),a=0,c=_N(n,f=>{const p=f.val();s.set(Object.assign({...e,ver:0},p||{}))}),u=s.subscribe(f=>{f&&f.ver>a&&(a=f.ver,gN(n,f))});return{store:s,unsub:function(){c(),u()}}}function DN(i){let e;return{c(){e=re("div"),ie(e,"id","firebaseui-auth-container")},m(n,s){Me(n,e,s)},p:Ye,i:Ye,o:Ye,d(n){n&&Pe(e)}}}function LN(i){return na(()=>{var e=new v2.AuthUI(PN);e.start("#firebaseui-auth-container",{callbacks:{signInSuccessWithAuthResult(n,s){return n.user&&(localStorage.setItem("user",JSON.stringify(n.user)),location.href="/"),!1},uiShown(){console.log("firebase login loaded")}},signInOptions:[On.PROVIDER_ID]})}),[]}class xN extends Ki{constructor(e){super(),qi(this,e,LN,DN,ci,{})}}function $_(i){let e,n,s,a,c=i[2][i[0].id].context+"",u,f,p,m=i[2][i[0].id].detail+"",b,v,I,S=i[0].start+"",A,_,w=i[0].end+"",E,T,L,B,G;return{c(){e=re("div"),n=re("p"),n.textContent="Now is the time to...",s=Se(),a=re("h3"),u=nt(c),f=Se(),p=re("h4"),b=nt(m),v=Se(),I=re("p"),A=nt(S),_=nt(" - "),E=nt(w),T=Se(),L=re("progress"),ie(n,"class","text-slate-600"),ie(a,"class","text-5xl my-3"),ie(p,"class","text-xl my-3"),ie(I,"class","my-3"),ie(L,"class","progress bg-stone-900 progress-primary"),L.value=B=i[1]-i[0].startParsed,ie(L,"max",G=i[0].endParsed-i[0].startParsed)},m($,le){Me($,e,le),U(e,n),U(e,s),U(e,a),U(a,u),U(e,f),U(e,p),U(p,b),U(e,v),U(e,I),U(I,A),U(I,_),U(I,E),U(e,T),U(e,L)},p($,le){le&1&&c!==(c=$[2][$[0].id].context+"")&&Ni(u,c),le&1&&m!==(m=$[2][$[0].id].detail+"")&&Ni(b,m),le&1&&S!==(S=$[0].start+"")&&Ni(A,S),le&1&&w!==(w=$[0].end+"")&&Ni(E,w),le&3&&B!==(B=$[1]-$[0].startParsed)&&(L.value=B),le&1&&G!==(G=$[0].endParsed-$[0].startParsed)&&ie(L,"max",G)},d($){$&&Pe(e)}}}function MN(i){let e,n=i[0]&&$_(i);return{c(){n&&n.c(),e=ry()},m(s,a){n&&n.m(s,a),Me(s,e,a)},p(s,[a]){s[0]?n?n.p(s,a):(n=$_(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:Ye,o:Ye,d(s){n&&n.d(s),s&&Pe(e)}}}function FN(i,e,n){let s,a,c=Date.now(),u=hf.reduce((p,m)=>(p[m.id]=m,p),{});na(async()=>{a=setInterval(f,1e3),f()});const f=()=>{n(1,c=Date.now()),!(s&&c<s.endParsed)&&n(0,s=Bo.find(p=>c>=p.startParsed&&c<p.endParsed)||(p=>({...p,endParsed:p.endParsed+864e5}))(Bo[Bo.length-1]))};return oh(()=>{clearInterval(a)}),[s,c,u]}class UN extends Ki{constructor(e){super(),qi(this,e,FN,MN,ci,{})}}function G_(i,e,n){const s=i.slice();return s[9]=e[n],s}function z_(i,e,n){const s=i.slice();return s[12]=e[n],s}function q_(i){let e,n,s,a,c,u,f,p,m,b,v,I=i[1].tasks,S=[];for(let w=0;w<I.length;w+=1)S[w]=K_(z_(i,I,w));let A=i[1].habits,_=[];for(let w=0;w<A.length;w+=1)_[w]=Y_(G_(i,A,w));return{c(){e=re("h2"),e.textContent="Tasks",n=Se();for(let w=0;w<S.length;w+=1)S[w].c();s=Se(),a=re("button"),a.textContent="Add new task",c=Se(),u=re("h2"),u.textContent="Habits",f=Se();for(let w=0;w<_.length;w+=1)_[w].c();p=Se(),m=re("button"),m.textContent="Add new habit",ie(e,"class","text-xl"),ie(a,"class","btn btn-primary btn-sm my-2"),ie(u,"class","text-xl mt-2"),ie(m,"class","btn btn-primary btn-sm my-2")},m(w,E){Me(w,e,E),Me(w,n,E);for(let T=0;T<S.length;T+=1)S[T].m(w,E);Me(w,s,E),Me(w,a,E),Me(w,c,E),Me(w,u,E),Me(w,f,E);for(let T=0;T<_.length;T+=1)_[T].m(w,E);Me(w,p,E),Me(w,m,E),b||(v=[qt(a,"click",i[5]),qt(m,"click",i[7])],b=!0)},p(w,E){if(E&10){I=w[1].tasks;let T;for(T=0;T<I.length;T+=1){const L=z_(w,I,T);S[T]?S[T].p(L,E):(S[T]=K_(L),S[T].c(),S[T].m(s.parentNode,s))}for(;T<S.length;T+=1)S[T].d(1);S.length=I.length}if(E&10){A=w[1].habits;let T;for(T=0;T<A.length;T+=1){const L=G_(w,A,T);_[T]?_[T].p(L,E):(_[T]=Y_(L),_[T].c(),_[T].m(p.parentNode,p))}for(;T<_.length;T+=1)_[T].d(1);_.length=A.length}},d(w){w&&Pe(e),w&&Pe(n),Dd(S,w),w&&Pe(s),w&&Pe(a),w&&Pe(c),w&&Pe(u),w&&Pe(f),Dd(_,w),w&&Pe(p),w&&Pe(m),b=!1,Nn(v)}}}function K_(i){let e,n,s=i[12].title+"",a,c,u;function f(){return i[4](i[12])}return{c(){e=re("div"),n=re("h3"),a=nt(s),ie(n,"class","text-2xl my-1"),ie(e,"class","card mb-2 bg-base-100 shadow-xl py-2 px-4")},m(p,m){Me(p,e,m),U(e,n),U(n,a),c||(u=[qt(n,"click",f),qt(n,"keydown",jN)],c=!0)},p(p,m){i=p,m&2&&s!==(s=i[12].title+"")&&Ni(a,s)},d(p){p&&Pe(e),c=!1,Nn(u)}}}function Y_(i){let e,n,s=i[9].title+"",a,c,u;function f(){return i[6](i[9])}return{c(){e=re("div"),n=re("h3"),a=nt(s),ie(n,"class","text-2xl my-1"),ie(e,"class","card mb-2 bg-base-100 shadow-xl py-2 px-4")},m(p,m){Me(p,e,m),U(e,n),U(n,a),c||(u=[qt(n,"click",f),qt(n,"keydown",WN)],c=!0)},p(p,m){i=p,m&2&&s!==(s=i[9].title+"")&&Ni(a,s)},d(p){p&&Pe(e),c=!1,Nn(u)}}}function BN(i){let e,n=i[0]&&i[1]&&q_(i);return{c(){n&&n.c(),e=ry()},m(s,a){n&&n.m(s,a),Me(s,e,a)},p(s,[a]){s[0]&&s[1]?n?n.p(s,a):(n=q_(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:Ye,o:Ye,d(s){n&&n.d(s),s&&Pe(e)}}}const jN=()=>{},WN=()=>{};function HN(i,e,n){let s,a=Ye,c=()=>(a(),a=NI(u,A=>n(1,s=A)),u);i.$$.on_destroy.push(()=>a());let u,f;na(async()=>{var A=ON("tasks",{tasks:[],habits:[]});c(n(0,u=A.store)),f=A.unsub}),oh(()=>{f()});const p=A=>{var _=prompt("Task title","New item");_&&u.update(w=>(w[A].push({id:Math.random().toString(36).substr(2,9),title:_,count:0,progress:{}}),w.ver++,w))},m=(A,_)=>{var w=s[_].find(T=>T.id===A),E=prompt("Task title",w.title);E!="-"&&E!=w.title&&E?u.update(T=>(T[_].find(L=>L.id===A).title=E,T.ver++,T)):E&&u.update(T=>(T[_]=T[_].filter(L=>L.id!==A),T.ver++,T))};return[u,s,p,m,A=>m(A.id,"tasks"),()=>p("tasks"),A=>m(A.id,"habits"),()=>p("habits")]}class VN extends Ki{constructor(e){super(),qi(this,e,HN,BN,ci,{})}}class $N extends Ki{constructor(e){super(),qi(this,e,null,null,ci,{})}}function J_(i,e,n){const s=i.slice();return s[1]=e[n],s}function X_(i){let e,n,s=i[0][i[1].id].context+"",a,c,u,f=i[1].start+"",p,m,b=i[1].end+"",v,I;return{c(){e=re("div"),n=re("h3"),a=nt(s),c=Se(),u=re("p"),p=nt(f),m=nt(" - "),v=nt(b),I=Se(),ie(n,"class","text-2xl my-1"),ie(u,"class","my-1"),ie(e,"class","card mb-2 bg-base-100 shadow-xl py-2 px-4")},m(S,A){Me(S,e,A),U(e,n),U(n,a),U(e,c),U(e,u),U(u,p),U(u,m),U(u,v),U(e,I)},p:Ye,d(S){S&&Pe(e)}}}function GN(i){let e,n,s,a=Bo,c=[];for(let u=0;u<a.length;u+=1)c[u]=X_(J_(i,a,u));return{c(){e=re("div"),n=re("p"),n.innerHTML="<i>This currently can&#39;t be changed yet </i>\u{1FAE0}",s=Se();for(let u=0;u<c.length;u+=1)c[u].c()},m(u,f){Me(u,e,f),U(e,n),U(e,s);for(let p=0;p<c.length;p+=1)c[p].m(e,null)},p(u,[f]){if(f&1){a=Bo;let p;for(p=0;p<a.length;p+=1){const m=J_(u,a,p);c[p]?c[p].p(m,f):(c[p]=X_(m),c[p].c(),c[p].m(e,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=a.length}},i:Ye,o:Ye,d(u){u&&Pe(e),Dd(c,u)}}}function zN(i){return[hf.reduce((n,s)=>(n[s.id]=s,n),{})]}class qN extends Ki{constructor(e){super(),qi(this,e,zN,GN,ci,{})}}function Q_(i){let e,n;return e=new UN({}),{c(){as(e.$$.fragment)},m(s,a){Gi(e,s,a),n=!0},i(s){n||(Ve(e.$$.fragment,s),n=!0)},o(s){vt(e.$$.fragment,s),n=!1},d(s){zi(e,s)}}}function Z_(i){let e,n;return e=new VN({}),{c(){as(e.$$.fragment)},m(s,a){Gi(e,s,a),n=!0},i(s){n||(Ve(e.$$.fragment,s),n=!0)},o(s){vt(e.$$.fragment,s),n=!1},d(s){zi(e,s)}}}function ey(i){let e,n;return e=new $N({}),{c(){as(e.$$.fragment)},m(s,a){Gi(e,s,a),n=!0},i(s){n||(Ve(e.$$.fragment,s),n=!0)},o(s){vt(e.$$.fragment,s),n=!1},d(s){zi(e,s)}}}function ty(i){let e,n;return e=new qN({}),{c(){as(e.$$.fragment)},m(s,a){Gi(e,s,a),n=!0},i(s){n||(Ve(e.$$.fragment,s),n=!0)},o(s){vt(e.$$.fragment,s),n=!1},d(s){zi(e,s)}}}function KN(i){let e,n,s,a,c,u,f,p,m,b=new Date().toLocaleDateString()+"",v,I,S=(i[0]*100).toFixed(2)+"",A,_,w,E,T,L,B,G,$,le,at,Mt,Tt,ne,Fe,he,jt,fe,V,ye,er,tr,me=i[1]==0&&Q_(),Ue=i[1]==1&&Z_(),Ie=i[1]==2&&ey(),Ge=i[1]==3&&ty();return{c(){e=re("div"),n=re("h1"),n.textContent="Journal Theme",s=Se(),a=re("p"),c=nt("Hi, "),u=re("a"),u.textContent=`${Lc.displayName}`,f=Se(),p=re("p"),m=re("b"),v=nt(b),I=nt(" ("),A=nt(S),_=nt("%)"),w=Se(),E=re("progress"),L=Se(),B=re("div"),G=re("div"),$=re("button"),$.textContent="Summary",le=Se(),at=re("button"),at.textContent="Your Tasks",Mt=Se(),Tt=re("button"),Tt.textContent="Historical Journal",ne=Se(),Fe=re("button"),Fe.textContent="Daily Routine Clock",he=Se(),me&&me.c(),jt=Se(),Ue&&Ue.c(),fe=Se(),Ie&&Ie.c(),V=Se(),Ge&&Ge.c(),ie(n,"class","text-3xl my-2"),ie(u,"href","?login=1"),ie(u,"title","Click to logout"),ie(p,"class","my-2"),ie(E,"title",T=(i[0]*100).toFixed(5)+"%"),ie(E,"class","progress progress-secondary"),E.value=i[0],ie(E,"max",1),ie(e,"class","text-center text-white-100 my-3"),ie($,"class","tab tab-lifted"),Qn($,"tab-active",i[1]==0),ie(at,"class","tab tab-lifted"),Qn(at,"tab-active",i[1]==1),ie(Tt,"class","tab tab-lifted"),Qn(Tt,"tab-active",i[1]==2),ie(Fe,"class","tab tab-lifted"),Qn(Fe,"tab-active",i[1]==3),ie(G,"class","tabs mb-5"),ie(B,"class","container max-w-screen-sm mx-auto px-5")},m(Ee,lt){Me(Ee,e,lt),U(e,n),U(e,s),U(e,a),U(a,c),U(a,u),U(e,f),U(e,p),U(p,m),U(m,v),U(m,I),U(m,A),U(m,_),U(e,w),U(e,E),Me(Ee,L,lt),Me(Ee,B,lt),U(B,G),U(G,$),U(G,le),U(G,at),U(G,Mt),U(G,Tt),U(G,ne),U(G,Fe),U(B,he),me&&me.m(B,null),U(B,jt),Ue&&Ue.m(B,null),U(B,fe),Ie&&Ie.m(B,null),U(B,V),Ge&&Ge.m(B,null),ye=!0,er||(tr=[qt(u,"click",YN),qt($,"click",i[2]),qt(at,"click",i[3]),qt(Tt,"click",i[4]),qt(Fe,"click",i[5])],er=!0)},p(Ee,[lt]){(!ye||lt&1)&&S!==(S=(Ee[0]*100).toFixed(2)+"")&&Ni(A,S),(!ye||lt&1&&T!==(T=(Ee[0]*100).toFixed(5)+"%"))&&ie(E,"title",T),(!ye||lt&1)&&(E.value=Ee[0]),(!ye||lt&2)&&Qn($,"tab-active",Ee[1]==0),(!ye||lt&2)&&Qn(at,"tab-active",Ee[1]==1),(!ye||lt&2)&&Qn(Tt,"tab-active",Ee[1]==2),(!ye||lt&2)&&Qn(Fe,"tab-active",Ee[1]==3),Ee[1]==0?me?lt&2&&Ve(me,1):(me=Q_(),me.c(),Ve(me,1),me.m(B,jt)):me&&(Nl(),vt(me,1,1,()=>{me=null}),Pl()),Ee[1]==1?Ue?lt&2&&Ve(Ue,1):(Ue=Z_(),Ue.c(),Ve(Ue,1),Ue.m(B,fe)):Ue&&(Nl(),vt(Ue,1,1,()=>{Ue=null}),Pl()),Ee[1]==2?Ie?lt&2&&Ve(Ie,1):(Ie=ey(),Ie.c(),Ve(Ie,1),Ie.m(B,V)):Ie&&(Nl(),vt(Ie,1,1,()=>{Ie=null}),Pl()),Ee[1]==3?Ge?lt&2&&Ve(Ge,1):(Ge=ty(),Ge.c(),Ve(Ge,1),Ge.m(B,null)):Ge&&(Nl(),vt(Ge,1,1,()=>{Ge=null}),Pl())},i(Ee){ye||(Ve(me),Ve(Ue),Ve(Ie),Ve(Ge),ye=!0)},o(Ee){vt(me),vt(Ue),vt(Ie),vt(Ge),ye=!1},d(Ee){Ee&&Pe(e),Ee&&Pe(L),Ee&&Pe(B),me&&me.d(),Ue&&Ue.d(),Ie&&Ie.d(),Ge&&Ge.d(),er=!1,Nn(tr)}}}function YN(){localStorage.removeItem("user"),window.location.href="?login=1"}function JN(i,e,n){let s=V_(new Date),a,c=0;return na(async()=>{a=setInterval(()=>{n(0,s=V_(new Date))},1e3)}),oh(()=>{clearInterval(a)}),[s,c,()=>n(1,c=0),()=>n(1,c=1),()=>n(1,c=2),()=>n(1,c=3)]}class XN extends Ki{constructor(e){super(),qi(this,e,JN,KN,ci,{})}}function QN(i){let e,n;return e=new XN({}),{c(){as(e.$$.fragment)},m(s,a){Gi(e,s,a),n=!0},i(s){n||(Ve(e.$$.fragment,s),n=!0)},o(s){vt(e.$$.fragment,s),n=!1},d(s){zi(e,s)}}}function ZN(i){let e,n;return e=new xN({}),{c(){as(e.$$.fragment)},m(s,a){Gi(e,s,a),n=!0},i(s){n||(Ve(e.$$.fragment,s),n=!0)},o(s){vt(e.$$.fragment,s),n=!1},d(s){zi(e,s)}}}function eP(i){let e,n,s,a;const c=[ZN,QN],u=[];function f(p,m){return p[0]?0:Lc?1:-1}return~(n=f(i))&&(s=u[n]=c[n](i)),{c(){e=re("main"),s&&s.c()},m(p,m){Me(p,e,m),~n&&u[n].m(e,null),a=!0},p:Ye,i(p){a||(Ve(s),a=!0)},o(p){vt(s),a=!1},d(p){p&&Pe(e),~n&&u[n].d()}}}function tP(i){var e=!!new URLSearchParams(window.location.search).get("login");return na(()=>{Lc==null&&!e&&(window.location.href="?login=1")}),[e]}class nP extends Ki{constructor(e){super(),qi(this,e,tP,eP,ci,{})}}new nP({target:document.getElementById("app")});
