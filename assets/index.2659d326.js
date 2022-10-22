(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function rt(){}function V_(i){return i()}function _v(){return Object.create(null)}function Gr(i){i.forEach(V_)}function H_(i){return typeof i=="function"}function Wo(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function yI(i){return Object.keys(i).length===0}function bI(i,...e){if(i==null)return rt;const n=i.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wI(i,e,n){return i.set(n),e}function fe(i,e){i.appendChild(e)}function Xe(i,e,n){i.insertBefore(e,n||null)}function Ge(i){i.parentNode.removeChild(i)}function G_(i,e){for(let n=0;n<i.length;n+=1)i[n]&&i[n].d(e)}function Ce(i){return document.createElement(i)}function qt(i){return document.createTextNode(i)}function Lt(){return qt(" ")}function II(){return qt("")}function bd(i,e,n,s){return i.addEventListener(e,n,s),()=>i.removeEventListener(e,n,s)}function ve(i,e,n){n==null?i.removeAttribute(e):i.getAttribute(e)!==n&&i.setAttribute(e,n)}function EI(i){return Array.from(i.childNodes)}function Co(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function yv(i,e){i.value=e==null?"":e}function CI(i,e,n){i.classList[n?"add":"remove"](e)}let So;function go(i){So=i}function $_(){if(!So)throw new Error("Function called outside component initialization");return So}function z_(i){$_().$$.on_mount.push(i)}function SI(i){$_().$$.on_destroy.push(i)}const fo=[],bv=[],_l=[],wv=[],TI=Promise.resolve();let wd=!1;function kI(){wd||(wd=!0,TI.then(q_))}function Id(i){_l.push(i)}const nd=new Set;let pl=0;function q_(){const i=So;do{for(;pl<fo.length;){const e=fo[pl];pl++,go(e),RI(e.$$)}for(go(null),fo.length=0,pl=0;bv.length;)bv.pop()();for(let e=0;e<_l.length;e+=1){const n=_l[e];nd.has(n)||(nd.add(n),n())}_l.length=0}while(fo.length);for(;wv.length;)wv.pop()();wd=!1,nd.clear(),go(i)}function RI(i){if(i.fragment!==null){i.update(),Gr(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Id)}}const yl=new Set;let yi;function AI(){yi={r:0,c:[],p:yi}}function NI(){yi.r||Gr(yi.c),yi=yi.p}function Hn(i,e){i&&i.i&&(yl.delete(i),i.i(e))}function xr(i,e,n,s){if(i&&i.o){if(yl.has(i))return;yl.add(i),yi.c.push(()=>{yl.delete(i),s&&(n&&i.d(1),s())}),i.o(e)}else s&&s()}function qd(i){i&&i.c()}function zl(i,e,n,s){const{fragment:a,after_update:c}=i.$$;a&&a.m(e,n),s||Id(()=>{const u=i.$$.on_mount.map(V_).filter(H_);i.$$.on_destroy?i.$$.on_destroy.push(...u):Gr(u),i.$$.on_mount=[]}),c.forEach(Id)}function ql(i,e){const n=i.$$;n.fragment!==null&&(Gr(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function PI(i,e){i.$$.dirty[0]===-1&&(fo.push(i),kI(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Kl(i,e,n,s,a,c,u,f=[-1]){const p=So;go(i);const m=i.$$={fragment:null,ctx:[],props:c,update:rt,not_equal:a,bound:_v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:_v(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};u&&u(m.root);let b=!1;if(m.ctx=n?n(i,e.props||{},(v,w,...E)=>{const A=E.length?E[0]:w;return m.ctx&&a(m.ctx[v],m.ctx[v]=A)&&(!m.skip_bound&&m.bound[v]&&m.bound[v](A),b&&PI(i,v)),w}):[],m.update(),b=!0,Gr(m.before_update),m.fragment=s?s(m.ctx):!1,e.target){if(e.hydrate){const v=EI(e.target);m.fragment&&m.fragment.l(v),v.forEach(Ge)}else m.fragment&&m.fragment.c();e.intro&&Hn(i.$$.fragment),zl(i,e.target,e.anchor,e.customElement),q_()}go(p)}class Yl{$destroy(){ql(this,1),this.$destroy=rt}$on(e,n){if(!H_(n))return rt;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}$set(e){this.$$set&&!yI(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const K_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(i,e){if(!i)throw $r(e)},$r=function(i){return new Error("Firebase Database ("+K_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const Y_=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},OI=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],u=i[n++],f=i[n++],p=((a&7)<<18|(c&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=i[n++],u=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|u&63)}}return e.join("")},Kd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],u=a+1<i.length,f=u?i[a+1]:0,p=a+2<i.length,m=p?i[a+2]:0,b=c>>2,v=(c&3)<<4|f>>4;let w=(f&15)<<2|m>>6,E=m&63;p||(E=64,u||(w=64)),s.push(n[b],n[v],n[w],n[E])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Y_(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):OI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],f=a<i.length?n[i.charAt(a)]:0;++a;const m=a<i.length?n[i.charAt(a)]:64;++a;const v=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||f==null||m==null||v==null)throw Error();const w=c<<2|f>>4;if(s.push(w),m!==64){const E=f<<4&240|m>>2;if(s.push(E),v!==64){const A=m<<6&192|v;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},J_=function(i){const e=Y_(i);return Kd.encodeByteArray(e,!0)},El=function(i){return J_(i).replace(/\./g,"")},Cl=function(i){try{return Kd.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DI(i){return To(void 0,i)}function To(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LI(n)||(i[n]=To(i[n],e[n]));return i}function LI(i){return i!=="__proto__"}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function X_(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MI(){return typeof self=="object"&&self.self===self}function Q_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Jl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z_(){const i=De();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ey(){return K_.NODE_ADMIN===!0}function Sl(){return typeof indexedDB=="object"}function xI(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function FI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UI=()=>FI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i=process.env.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},jI=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Cl(i[1]);return e&&JSON.parse(e)},Jd=()=>{try{return UI()||BI()||jI()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ty=i=>{var e,n;return(n=(e=Jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},WI=i=>{const e=ty(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},VI=()=>{var i;return(i=Jd())===null||i===void 0?void 0:i.config},ny=i=>{var e;return(e=Jd())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function HI(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i),f="";return[El(JSON.stringify(n)),El(JSON.stringify(u)),f].join(".")}/**
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
 */const GI="FirebaseError";class ut extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=GI,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],u=c?$I(c,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new ut(a,f,s)}}function $I(i,e){return i.replace(zI,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const zI=/\{\$([^}]+)}/g;/**
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
 */function ko(i){return JSON.parse(i)}function $e(i){return JSON.stringify(i)}/**
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
 */const iy=function(i){let e={},n={},s={},a="";try{const c=i.split(".");e=ko(Cl(c[0])||""),n=ko(Cl(c[1])||""),a=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},qI=function(i){const e=iy(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},KI=function(i){const e=iy(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function jt(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Fr(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Ed(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Tl(i,e,n){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(n,i[a],a,i));return s}function kl(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],u=e[a];if(Iv(c)&&Iv(u)){if(!kl(c,u))return!1}else if(c!==u)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Iv(i){return i!==null&&typeof i=="object"}/**
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
 */function Li(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kr(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function po(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
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
 */class YI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const w=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,b;for(let v=0;v<80;v++){v<40?v<20?(m=f^c&(u^f),b=1518500249):(m=c^u^f,b=1859775393):v<60?(m=c&u|f&(c|u),b=2400959708):(m=c^u^f,b=3395469782);const w=(a<<5|a>>>27)+m+p+b+s[v]&4294967295;p=f,f=u,u=(c<<30|c>>>2)&4294967295,c=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const c=this.buf_;let u=this.inbuf_;for(;a<n;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(c),u=0;break}}else for(;a<n;)if(c[u]=e[a],++u,++a,u===this.blockSize){this.compress_(c),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[a]>>c&255,++s;return e}}function ry(i,e){const n=new JI(i,e);return n.subscribe.bind(n)}class JI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");XI(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=id),a.error===void 0&&(a.error=id),a.complete===void 0&&(a.complete=id);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XI(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function id(){}function Xd(i,e){return`${i} failed: ${e} argument `}/**
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
 */const QI=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const c=a-55296;s++,O(s<i.length,"Surrogate pair missing trail surrogate.");const u=i.charCodeAt(s)-56320;a=65536+(c<<10)+u}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Ql=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function H(i){return i&&i._delegate?i._delegate:i}class gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vi="[DEFAULT]";/**
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
 */class ZI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tE(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&u.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const u=this.instances.get(a);return u&&e(u,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eE(i){return i===vi?void 0:i}function tE(i){return i.instantiationMode==="EAGER"}/**
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
 */class nE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Qd=[];var ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ae||(ae={}));const sy={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},iE=ae.INFO,rE={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},sE=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=rE[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=iE,this._logHandler=sE,this._userLogHandler=null,Qd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function oE(i){Qd.forEach(e=>{e.setLogLevel(i)})}function aE(i,e){for(const n of Qd){let s=null;e&&e.level&&(s=sy[e.level]),i===null?n.userLogHandler=null:n.userLogHandler=(a,c,...u)=>{const f=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");c>=(s!=null?s:a.logLevel)&&i({level:ae[c].toLowerCase(),message:f,args:u,type:a.name})}}}const lE=(i,e)=>e.some(n=>i instanceof n);let Ev,Cv;function cE(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uE(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oy=new WeakMap,Cd=new WeakMap,ay=new WeakMap,rd=new WeakMap,Zd=new WeakMap;function dE(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",u)},c=()=>{n(Gn(i.result)),a()},u=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&oy.set(n,i)}).catch(()=>{}),Zd.set(e,i),e}function hE(i){if(Cd.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",u),i.removeEventListener("abort",u)},c=()=>{n(),a()},u=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",u),i.addEventListener("abort",u)});Cd.set(i,e)}let Sd={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Cd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ay.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function fE(i){Sd=i(Sd)}function pE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(sd(this),e,...n);return ay.set(s,e.sort?e.sort():[e]),Gn(s)}:uE().includes(i)?function(...e){return i.apply(sd(this),e),Gn(oy.get(this))}:function(...e){return Gn(i.apply(sd(this),e))}}function mE(i){return typeof i=="function"?pE(i):(i instanceof IDBTransaction&&hE(i),lE(i,cE())?new Proxy(i,Sd):i)}function Gn(i){if(i instanceof IDBRequest)return dE(i);if(rd.has(i))return rd.get(i);const e=mE(i);return e!==i&&(rd.set(i,e),Zd.set(e,i)),e}const sd=i=>Zd.get(i);function gE(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const u=indexedDB.open(i,e),f=Gn(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Gn(u.result),p.oldVersion,p.newVersion,Gn(u.transaction))}),n&&u.addEventListener("blocked",()=>n()),f.then(p=>{c&&p.addEventListener("close",()=>c()),a&&p.addEventListener("versionchange",()=>a())}).catch(()=>{}),f}const vE=["get","getKey","getAll","getAllKeys","count"],_E=["put","add","delete","clear"],od=new Map;function Sv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=_E.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||vE.includes(n)))return;const c=async function(u,...f){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),a&&p.done]))[0]};return od.set(e,c),c}fE(i=>({...i,get:(e,n,s)=>Sv(e,n)||i.get(e,n,s),has:(e,n)=>!!Sv(e,n)||i.has(e,n)}));/**
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
 */class yE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",Tv="0.8.2";/**
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
 */const ki=new Zl("@firebase/app"),wE="@firebase/app-compat",IE="@firebase/analytics-compat",EE="@firebase/analytics",CE="@firebase/app-check-compat",SE="@firebase/app-check",TE="@firebase/auth",kE="@firebase/auth-compat",RE="@firebase/database",AE="@firebase/database-compat",NE="@firebase/functions",PE="@firebase/functions-compat",OE="@firebase/installations",DE="@firebase/installations-compat",LE="@firebase/messaging",ME="@firebase/messaging-compat",xE="@firebase/performance",FE="@firebase/performance-compat",UE="@firebase/remote-config",BE="@firebase/remote-config-compat",jE="@firebase/storage",WE="@firebase/storage-compat",VE="@firebase/firestore",HE="@firebase/firestore-compat",GE="firebase",$E="9.12.1";/**
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
 */const zn="[DEFAULT]",zE={[Td]:"fire-core",[wE]:"fire-core-compat",[EE]:"fire-analytics",[IE]:"fire-analytics-compat",[SE]:"fire-app-check",[CE]:"fire-app-check-compat",[TE]:"fire-auth",[kE]:"fire-auth-compat",[RE]:"fire-rtdb",[AE]:"fire-rtdb-compat",[NE]:"fire-fn",[PE]:"fire-fn-compat",[OE]:"fire-iid",[DE]:"fire-iid-compat",[LE]:"fire-fcm",[ME]:"fire-fcm-compat",[xE]:"fire-perf",[FE]:"fire-perf-compat",[UE]:"fire-rc",[BE]:"fire-rc-compat",[jE]:"fire-gcs",[WE]:"fire-gcs-compat",[VE]:"fire-fst",[HE]:"fire-fst-compat","fire-js":"fire-js",[GE]:"fire-js-all"};/**
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
 */const qn=new Map,Ro=new Map;function Rl(i,e){try{i.container.addComponent(e)}catch(n){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ly(i,e){i.container.addOrOverwriteComponent(e)}function Kn(i){const e=i.name;if(Ro.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,i);for(const n of qn.values())Rl(n,i);return!0}function Vo(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function qE(i,e,n=zn){Vo(i,e).clearInstance(n)}function KE(){Ro.clear()}/**
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
 */const YE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new Di("app","Firebase",YE);/**
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
 */class JE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=$E;function ec(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zn,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw fn.create("bad-app-name",{appName:String(a)});if(n||(n=VI()),!n)throw fn.create("no-options");const c=qn.get(a);if(c){if(kl(n,c.options)&&kl(s,c.config))return c;throw fn.create("duplicate-app",{appName:a})}const u=new nE(a);for(const p of Ro.values())u.addComponent(p);const f=new JE(n,s,u);return qn.set(a,f),f}function eh(i=zn){const e=qn.get(i);if(!e&&i===zn)return ec();if(!e)throw fn.create("no-app",{appName:i});return e}function XE(){return Array.from(qn.values())}async function cy(i){const e=i.name;qn.has(e)&&(qn.delete(e),await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function Ft(i,e,n){var s;let a=(s=zE[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),u=e.match(/\s|\//);if(c||u){const f=[`Unable to register library "${a}" with version "${e}":`];c&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(f.join(" "));return}Kn(new gn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function uy(i,e){if(i!==null&&typeof i!="function")throw fn.create("invalid-log-argument");aE(i,e)}function dy(i){oE(i)}/**
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
 */const QE="firebase-heartbeat-database",ZE=1,Ao="firebase-heartbeat-store";let ad=null;function hy(){return ad||(ad=gE(QE,ZE,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Ao)}}}).catch(i=>{throw fn.create("idb-open",{originalErrorMessage:i.message})})),ad}async function eC(i){var e;try{return(await hy()).transaction(Ao).objectStore(Ao).get(fy(i))}catch(n){if(n instanceof ut)ki.warn(n.message);else{const s=fn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ki.warn(s.message)}}}async function kv(i,e){var n;try{const a=(await hy()).transaction(Ao,"readwrite");return await a.objectStore(Ao).put(e,fy(i)),a.done}catch(s){if(s instanceof ut)ki.warn(s.message);else{const a=fn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ki.warn(a.message)}}}function fy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const tC=1024,nC=30*24*60*60*1e3;class iC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=nC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rv(),{heartbeatsToSend:n,unsentEntries:s}=rC(this._heartbeatsCache.heartbeats),a=El(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Rv(){return new Date().toISOString().substring(0,10)}function rC(i,e=tC){const n=[];let s=i.slice();for(const a of i){const c=n.find(u=>u.agent===a.agent);if(c){if(c.dates.push(a.date),Av(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Av(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sl()?xI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Av(i){return El(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function oC(i){Kn(new gn("platform-logger",e=>new yE(e),"PRIVATE")),Kn(new gn("heartbeat",e=>new iC(e),"PRIVATE")),Ft(Td,Tv,i),Ft(Td,Tv,"esm2017"),Ft("fire-js","")}oC("");const aC=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Mi,_DEFAULT_ENTRY_NAME:zn,_addComponent:Rl,_addOrOverwriteComponent:ly,_apps:qn,_clearComponents:KE,_components:Ro,_getProvider:Vo,_registerComponent:Kn,_removeServiceInstance:qE,deleteApp:cy,getApp:eh,getApps:XE,initializeApp:ec,onLog:uy,registerVersion:Ft,setLogLevel:dy,FirebaseError:ut},Symbol.toStringTag,{value:"Module"}));/**
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
 */class lC{constructor(e,n){this._delegate=e,this.firebase=n,Rl(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),cy(this._delegate)))}_getService(e,n=zn){var s;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((s=a.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:n})}_removeServiceInstance(e,n=zn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Rl(this._delegate,e)}_addOrOverwriteComponent(e){ly(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const cC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Nv=new Di("app-compat","Firebase",cC);/**
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
 */function uC(i){const e={},n={__esModule:!0,initializeApp:c,app:a,registerVersion:Ft,setLogLevel:dy,onLog:uy,apps:null,SDK_VERSION:Mi,INTERNAL:{registerComponent:f,removeApp:s,useAsService:p,modularAPIs:aC}};n.default=n,Object.defineProperty(n,"apps",{get:u});function s(m){delete e[m]}function a(m){if(m=m||zn,!jt(e,m))throw Nv.create("no-app",{appName:m});return e[m]}a.App=i;function c(m,b={}){const v=ec(m,b);if(jt(e,v.name))return e[v.name];const w=new i(v,n);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function f(m){const b=m.name,v=b.replace("-compat","");if(Kn(m)&&m.type==="PUBLIC"){const w=(E=a())=>{if(typeof E[v]!="function")throw Nv.create("invalid-app-argument",{appName:b});return E[v]()};m.serviceProps!==void 0&&To(w,m.serviceProps),n[v]=w,i.prototype[v]=function(...E){return this._getService.bind(this,b).apply(this,m.multipleInstances?E:[])}}return m.type==="PUBLIC"?n[v]:null}function p(m,b){return b==="serverAuth"?null:b}return n}/**
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
 */function py(){const i=uC(lC);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:py,extendNamespace:e,createSubscribe:ry,ErrorFactory:Di,deepExtend:To});function e(n){To(i,n)}return i}const dC=py();/**
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
 */const Pv=new Zl("@firebase/app-compat"),hC="@firebase/app-compat",fC="0.1.37";/**
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
 */function pC(i){Ft(hC,fC,i)}/**
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
 */if(MI()&&self.firebase!==void 0){Pv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const i=self.firebase.SDK_VERSION;i&&i.indexOf("LITE")>=0&&Pv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const x=dC;pC();var mC="firebase",gC="9.12.1";/**
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
 */x.registerVersion(mC,gC,"app-compat");function th(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}const so={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Cr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function vC(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function my(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=vC,yC=my,gy=new Di("auth","Firebase",my());/**
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
 */const Ov=new Zl("@firebase/auth");function bl(i,...e){Ov.logLevel<=ae.ERROR&&Ov.error(`Auth (${Mi}): ${i}`,...e)}/**
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
 */function ze(i,...e){throw nh(i,...e)}function Qe(i,...e){return nh(i,...e)}function vy(i,e,n){const s=Object.assign(Object.assign({},yC()),{[e]:n});return new Di("auth","Firebase",s).create(e,{appName:i.name})}function zr(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ze(i,"argument-error"),vy(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nh(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return gy.create(i,...e)}function N(i,e,...n){if(!i)throw nh(e,...n)}function Qt(i){const e="INTERNAL ASSERTION FAILED: "+i;throw bl(e),new Error(e)}function Wt(i,e){i||Qt(e)}/**
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
 */const Dv=new Map;function It(i){Wt(i instanceof Function,"Expected a class definition");let e=Dv.get(i);return e?(Wt(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Dv.set(i,e),e)}/**
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
 */function bC(i,e){const n=Vo(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(kl(c,e!=null?e:{}))return a;ze(a,"already-initialized")}return n.initialize({options:e})}function wC(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(It);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function No(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function ih(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ih()||Q_()||"connection"in navigator)?navigator.onLine:!0}function EC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||Jl()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rh(i,e){Wt(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _y{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const SC=new Ho(3e4,6e4);function Fe(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ke(i,e,n,s,a={}){return yy(i,a,async()=>{let c={},u={};s&&(e==="GET"?u=s:c={body:JSON.stringify(s)});const f=Li(Object.assign({key:i.config.apiKey},u)).slice(1),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode),_y.fetch()(by(i,i.config.apiHost,n,f),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},c))})}async function yy(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},CC),e);try{const a=new TC(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const u=await c.json();if("needConfirmation"in u)throw mo(i,"account-exists-with-different-credential",u);if(c.ok&&!("errorMessage"in u))return u;{const f=c.ok?u.errorMessage:u.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(i,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw mo(i,"email-already-in-use",u);if(p==="USER_DISABLED")throw mo(i,"user-disabled",u);const b=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw vy(i,b,m);ze(i,b)}}catch(a){if(a instanceof ut)throw a;ze(i,"network-request-failed")}}async function bn(i,e,n,s,a={}){const c=await Ke(i,e,n,s,a);return"mfaPendingCredential"in c&&ze(i,"multi-factor-auth-required",{_serverResponse:c}),c}function by(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?rh(i.config,a):`${i.config.apiScheme}://${a}`}class TC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qe(this.auth,"network-request-failed")),SC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=Qe(i,e,s);return a.customData._tokenResponse=n,a}/**
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
 */async function kC(i,e){return Ke(i,"POST","/v1/accounts:delete",e)}async function RC(i,e){return Ke(i,"POST","/v1/accounts:update",e)}async function AC(i,e){return Ke(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function vo(i){if(!!i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NC(i,e=!1){const n=H(i),s=await n.getIdToken(e),a=tc(s);N(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,u=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:vo(ld(a.auth_time)),issuedAtTime:vo(ld(a.iat)),expirationTime:vo(ld(a.exp)),signInProvider:u||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function ld(i){return Number(i)*1e3}function tc(i){var e;const[n,s,a]=i.split(".");if(n===void 0||s===void 0||a===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const c=Cl(s);return c?JSON.parse(c):(bl("Failed to decode base64 JWT payload"),null)}catch(c){return bl("Caught error parsing JWT payload as JSON",(e=c)===null||e===void 0?void 0:e.toString()),null}}function PC(i){const e=tc(i);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ut&&OC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function OC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class DC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Po(i){var e;const n=i.auth,s=await i.getIdToken(),a=await vn(i,AC(n,{idToken:s}));N(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const u=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?xC(c.providerUserInfo):[],f=MC(i.providerData,u),p=i.isAnonymous,m=!(i.email&&c.passwordHash)&&!(f!=null&&f.length),b=p?m:!1,v={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:f,metadata:new wy(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,v)}async function LC(i){const e=H(i);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MC(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function xC(i){return i.map(e=>{var{providerId:n}=e,s=th(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function FC(i,e){const n=await yy(i,{},async()=>{const s=Li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,u=by(i,a,"/v1/token",`key=${c}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",_y.fetch()(u,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await FC(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,u=new Oo;return s&&(N(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(N(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),c&&(N(typeof c=="number","internal-error",{appName:e}),u.expirationTime=c),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function Wn(i,e){N(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new wy(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await vn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vn(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,u,f,p,m,b;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(a=n.email)!==null&&a!==void 0?a:void 0,E=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,A=(u=n.photoURL)!==null&&u!==void 0?u:void 0,_=(f=n.tenantId)!==null&&f!==void 0?f:void 0,I=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,S=(m=n.createdAt)!==null&&m!==void 0?m:void 0,P=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:j,emailVerified:re,isAnonymous:oe,providerData:ye,stsTokenManager:Ue}=n;N(j&&Ue,e,"internal-error");const en=Oo.fromJSON(this.name,Ue);N(typeof j=="string",e,"internal-error"),Wn(v,e.name),Wn(w,e.name),N(typeof re=="boolean",e,"internal-error"),N(typeof oe=="boolean",e,"internal-error"),Wn(E,e.name),Wn(A,e.name),Wn(_,e.name),Wn(I,e.name),Wn(S,e.name),Wn(P,e.name);const tn=new Ei({uid:j,auth:e,email:w,emailVerified:re,displayName:v,isAnonymous:oe,photoURL:A,phoneNumber:E,tenantId:_,stsTokenManager:en,createdAt:S,lastLoginAt:P});return ye&&Array.isArray(ye)&&(tn.providerData=ye.map(Zr=>Object.assign({},Zr))),I&&(tn._redirectEventId=I),tn}static async _fromIdTokenResponse(e,n,s=!1){const a=new Oo;a.updateFromServerResponse(n);const c=new Ei({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Po(c),c}}/**
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
 */class Iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iy.type="NONE";const Ur=Iy;/**
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
 */function Ci(i,e,n){return`firebase:${i}:${e}:${n}`}class Ar{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Ci(this.userKey,a.apiKey,c),this.fullPersistenceKey=Ci("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ar(It(Ur),e,s);const a=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=a[0]||It(Ur);const u=Ci(s,e.config.apiKey,e.name);let f=null;for(const m of n)try{const b=await m._get(u);if(b){const v=Ei._fromJSON(e,b);m!==c&&(f=v),c=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Ar(c,e,s):(c=p[0],f&&await c._set(u,f.toJSON()),await Promise.all(n.map(async m=>{if(m!==c)try{await m._remove(u)}catch{}})),new Ar(c,e,s))}}/**
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
 */function Mv(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ty(e))return"Blackberry";if(ky(e))return"Webos";if(sh(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(Go(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ey(i=De()){return/firefox\//i.test(i)}function sh(i=De()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(i=De()){return/crios\//i.test(i)}function Sy(i=De()){return/iemobile/i.test(i)}function Go(i=De()){return/android/i.test(i)}function Ty(i=De()){return/blackberry/i.test(i)}function ky(i=De()){return/webos/i.test(i)}function qr(i=De()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function UC(i=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function BC(i=De()){var e;return qr(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jC(){return Z_()&&document.documentMode===10}function Ry(i=De()){return qr(i)||Go(i)||ky(i)||Ty(i)||/windows phone/i.test(i)||Sy(i)}function WC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ay(i,e=[]){let n;switch(i){case"Browser":n=Mv(De());break;case"Worker":n=`${Mv(De())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${s}`}/**
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
 */class VC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((u,f)=>{try{const p=e(c);u(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const a of this.queue)await a(e),a.onAbort&&s.push(a.onAbort)}catch(a){s.reverse();for(const c of s)try{c()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=a)===null||n===void 0?void 0:n.message})}}}/**
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
 */class HC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xv(this),this.idTokenSubscription=new xv(this),this.beforeStateQueue=new VC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p==null?void 0:p.user)&&(a=p.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Po(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&It(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n),u=this._isInitialized?Promise.resolve():this._initializationPromise;return N(u,this,"internal-error"),u.then(()=>c(this.currentUser)),typeof n=="function"?e.addObserver(n,s,a):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function qe(i){return H(i)}class xv{constructor(e){this.auth=e,this.observer=null,this.addObserver=ry(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ny(i,e,n){const s=qe(i);N(s._canInitEmulator,s,"emulator-config-failed"),N(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!!(n!=null&&n.disableWarnings),c=Py(e),{host:u,port:f}=GC(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${c}//${u}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:u,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||$C()}function Py(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function GC(i){const e=Py(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:Fv(s.substr(c.length+1))}}else{const[c,u]=s.split(":");return{host:c,port:Fv(u)}}}function Fv(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function $C(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Kr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
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
 */async function Oy(i,e){return Ke(i,"POST","/v1/accounts:resetPassword",Fe(i,e))}async function Dy(i,e){return Ke(i,"POST","/v1/accounts:update",e)}async function zC(i,e){return Ke(i,"POST","/v1/accounts:update",Fe(i,e))}/**
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
 */async function qC(i,e){return bn(i,"POST","/v1/accounts:signInWithPassword",Fe(i,e))}async function nc(i,e){return Ke(i,"POST","/v1/accounts:sendOobCode",Fe(i,e))}async function KC(i,e){return nc(i,e)}async function YC(i,e){return nc(i,e)}async function JC(i,e){return nc(i,e)}async function XC(i,e){return nc(i,e)}/**
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
 */async function QC(i,e){return bn(i,"POST","/v1/accounts:signInWithEmailLink",Fe(i,e))}async function ZC(i,e){return bn(i,"POST","/v1/accounts:signInWithEmailLink",Fe(i,e))}/**
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
 */class Do extends Kr{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Do(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Do(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QC(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Dy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZC(e,{idToken:n,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pn(i,e){return bn(i,"POST","/v1/accounts:signInWithIdp",Fe(i,e))}/**
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
 */const eS="http://localhost";class Zt extends Kr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=th(n,["providerId","signInMethod"]);if(!s||!a)return null;const u=new Zt(s,a);return u.idToken=c.idToken||void 0,u.accessToken=c.accessToken||void 0,u.secret=c.secret,u.nonce=c.nonce,u.pendingToken=c.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:eS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Li(n)}return e}}/**
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
 */async function tS(i,e){return Ke(i,"POST","/v1/accounts:sendVerificationCode",Fe(i,e))}async function nS(i,e){return bn(i,"POST","/v1/accounts:signInWithPhoneNumber",Fe(i,e))}async function iS(i,e){const n=await bn(i,"POST","/v1/accounts:signInWithPhoneNumber",Fe(i,e));if(n.temporaryProof)throw mo(i,"account-exists-with-different-credential",n);return n}const rS={USER_NOT_FOUND:"user-not-found"};async function sS(i,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return bn(i,"POST","/v1/accounts:signInWithPhoneNumber",Fe(i,n),rS)}/**
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
 */class Si extends Kr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Si({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Si({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return nS(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return iS(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return sS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:a}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:c}=e;return!s&&!n&&!a&&!c?null:new Si({verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:c})}}/**
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
 */function oS(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aS(i){const e=kr(po(i)).link,n=e?kr(po(e)).deep_link_id:null,s=kr(po(i)).deep_link_id;return(s?kr(po(s)).link:null)||s||n||e||i}class ic{constructor(e){var n,s,a,c,u,f;const p=kr(po(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,b=(s=p.oobCode)!==null&&s!==void 0?s:null,v=oS((a=p.mode)!==null&&a!==void 0?a:null);N(m&&b&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=b,this.continueUrl=(c=p.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(u=p.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=aS(e);try{return new ic(n)}catch{return null}}}/**
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
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return Do._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ic.parseLink(n);return N(s,"argument-error"),Do._fromEmailAndCode(e,s.code,s.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class In{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yr extends In{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Nr extends Yr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),Zt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),Zt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Nr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Nr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:c,nonce:u,providerId:f}=e;if(!s&&!a&&!n&&!c||!f)return null;try{return new Nr(f)._credential({idToken:n,accessToken:s,nonce:u,pendingToken:c})}catch{return null}}}/**
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
 */class Kt extends Yr{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Jt extends Yr{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
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
 */const lS="http://localhost";class Br extends Kr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,pendingToken:c}=n;return!s||!a||!c||s!==a?null:new Br(s,c)}static _create(e,n){return new Br(e,n)}buildRequest(){return{requestUri:lS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const cS="saml.";class Al extends In{constructor(e){N(e.startsWith(cS),"argument-error"),super(e)}static credentialFromResult(e){return Al.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Al.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Br.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return Br._create(s,n)}catch{return null}}}/**
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
 */class Xt extends Yr{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xt.credential(n,s)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */async function Ly(i,e){return bn(i,"POST","/v1/accounts:signUp",Fe(i,e))}/**
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
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await Ei._fromIdTokenResponse(e,s,a),u=Uv(s);return new Tt({user:c,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Uv(s);return new Tt({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Uv(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function uS(i){var e;const n=qe(i);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await Ly(n,{returnSecureToken:!0}),a=await Tt._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(a.user),a}/**
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
 */class Nl extends ut{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Nl(e,n,s,a)}}function My(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(i,c,e,s):c})}/**
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
 */function xy(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function dS(i,e){const n=H(i);await rc(!0,n,e);const{providerUserInfo:s}=await RC(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),a=xy(s||[]);return n.providerData=n.providerData.filter(c=>a.has(c.providerId)),a.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function oh(i,e,n=!1){const s=await vn(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Tt._forOperation(i,"link",s)}async function rc(i,e,n){await Po(e);const s=xy(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";N(s.has(n)===i,e.auth,a)}/**
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
 */async function Fy(i,e,n=!1){var s;const{auth:a}=i,c="reauthenticate";try{const u=await vn(i,My(a,c,e,i),n);N(u.idToken,a,"internal-error");const f=tc(u.idToken);N(f,a,"internal-error");const{sub:p}=f;return N(i.uid===p,a,"user-mismatch"),Tt._forOperation(i,c,u)}catch(u){throw((s=u)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ze(a,"user-mismatch"),u}}/**
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
 */async function Uy(i,e,n=!1){const s="signIn",a=await My(i,s,e),c=await Tt._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}async function sc(i,e){return Uy(qe(i),e)}async function By(i,e){const n=H(i);return await rc(!1,n,e.providerId),oh(n,e)}async function jy(i,e){return Fy(H(i),e)}/**
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
 */async function hS(i,e){return bn(i,"POST","/v1/accounts:signInWithCustomToken",Fe(i,e))}/**
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
 */async function fS(i,e){const n=qe(i),s=await hS(n,{token:e,returnSecureToken:!0}),a=await Tt._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}/**
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
 */class oc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ah._fromServerResponse(e,n):ze(e,"internal-error")}}class ah extends oc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ah(n)}}/**
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
 */function ac(i,e,n){var s;N(((s=n.url)===null||s===void 0?void 0:s.length)>0,i,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function pS(i,e,n){const s=H(i),a={requestType:"PASSWORD_RESET",email:e};n&&ac(s,a,n),await YC(s,a)}async function mS(i,e,n){await Oy(H(i),{oobCode:e,newPassword:n})}async function gS(i,e){await zC(H(i),{oobCode:e})}async function Wy(i,e){const n=H(i),s=await Oy(n,{oobCode:e}),a=s.requestType;switch(N(a,n,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(s.mfaInfo,n,"internal-error");default:N(s.email,n,"internal-error")}let c=null;return s.mfaInfo&&(c=oc._fromServerResponse(qe(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:c},operation:a}}async function vS(i,e){const{data:n}=await Wy(H(i),e);return n.email}async function _S(i,e,n){const s=qe(i),a=await Ly(s,{returnSecureToken:!0,email:e,password:n}),c=await Tt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function yS(i,e,n){return sc(H(i),wn.credential(e,n))}/**
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
 */async function bS(i,e,n){const s=H(i),a={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,s,"argument-error"),n&&ac(s,a,n),await JC(s,a)}function wS(i,e){const n=ic.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function IS(i,e,n){const s=H(i),a=wn.credentialWithLink(e,n||No());return N(a._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),sc(s,a)}/**
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
 */async function ES(i,e){return Ke(i,"POST","/v1/accounts:createAuthUri",Fe(i,e))}/**
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
 */async function CS(i,e){const n=ih()?No():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:a}=await ES(H(i),s);return a||[]}async function SS(i,e){const n=H(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&ac(n.auth,a,e);const{email:c}=await KC(n.auth,a);c!==i.email&&await i.reload()}async function TS(i,e,n){const s=H(i),c={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};n&&ac(s.auth,c,n);const{email:u}=await XC(s.auth,c);u!==i.email&&await i.reload()}/**
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
 */async function kS(i,e){return Ke(i,"POST","/v1/accounts:update",e)}/**
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
 */async function RS(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=H(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},u=await vn(s,kS(s.auth,c));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(u)}function AS(i,e){return Vy(H(i),e,null)}function NS(i,e){return Vy(H(i),null,e)}async function Vy(i,e,n){const{auth:s}=i,c={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(c.email=e),n&&(c.password=n);const u=await vn(i,Dy(s,c));await i._updateTokensIfNecessary(u,!0)}/**
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
 */function PS(i){var e,n;if(!i)return null;const{providerId:s}=i,a=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},c=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(i==null?void 0:i.idToken)){const u=(n=(e=tc(i.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(u){const f=u!=="anonymous"&&u!=="custom"?u:null;return new Pr(c,f)}}if(!s)return null;switch(s){case"facebook.com":return new OS(c,a);case"github.com":return new DS(c,a);case"google.com":return new LS(c,a);case"twitter.com":return new MS(c,a,i.screenName||null);case"custom":case"anonymous":return new Pr(c,null);default:return new Pr(c,s,a)}}class Pr{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class Hy extends Pr{constructor(e,n,s,a){super(e,n,s),this.username=a}}class OS extends Pr{constructor(e,n){super(e,"facebook.com",n)}}class DS extends Hy{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class LS extends Pr{constructor(e,n){super(e,"google.com",n)}}class MS extends Hy{constructor(e,n,s){super(e,"twitter.com",n,s)}}function xS(i){const{user:e,_tokenResponse:n}=i;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:PS(n)}function FS(i,e,n,s){return H(i).onIdTokenChanged(e,n,s)}function US(i,e,n){return H(i).beforeAuthStateChanged(e,n)}class bi{constructor(e,n,s){this.type=e,this.credential=n,this.auth=s}static _fromIdtoken(e,n){return new bi("enroll",e,n)}static _fromMfaPendingCredential(e){return new bi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return bi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return bi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class lh{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=qe(e),a=n.customData._serverResponse,c=(a.mfaInfo||[]).map(f=>oc._fromServerResponse(s,f));N(a.mfaPendingCredential,s,"internal-error");const u=bi._fromMfaPendingCredential(a.mfaPendingCredential);return new lh(u,c,async f=>{const p=await f._process(s,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(n.operationType){case"signIn":const b=await Tt._fromIdTokenResponse(s,n.operationType,m);return await s._updateCurrentUser(b.user),b;case"reauthenticate":return N(n.user,s,"internal-error"),Tt._forOperation(n.user,n.operationType,m);default:ze(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function BS(i,e){var n;const s=H(i),a=e;return N(e.customData.operationType,s,"argument-error"),N((n=a.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,s,"argument-error"),lh._fromError(s,a)}/**
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
 */function jS(i,e){return Ke(i,"POST","/v2/accounts/mfaEnrollment:start",Fe(i,e))}function WS(i,e){return Ke(i,"POST","/v2/accounts/mfaEnrollment:finalize",Fe(i,e))}function VS(i,e){return Ke(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Fe(i,e))}class ch{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>oc._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new ch(e)}async getSession(){return bi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const s=e,a=await this.getSession(),c=await vn(this.user,s._process(this.user.auth,a,n));return await this.user._updateTokensIfNecessary(c),this.user.reload()}async unenroll(e){var n;const s=typeof e=="string"?e:e.uid,a=await this.user.getIdToken(),c=await vn(this.user,VS(this.user.auth,{idToken:a,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==s),await this.user._updateTokensIfNecessary(c);try{await this.user.reload()}catch(u){if(((n=u)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw u}}}const cd=new WeakMap;function HS(i){const e=H(i);return cd.has(e)||cd.set(e,ch._fromUser(e)),cd.get(e)}const Pl="__sak";/**
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
 */class Gy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function GS(){const i=De();return sh(i)||qr(i)}const $S=1e3,zS=10;class $y extends Gy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GS()&&WC(),this.fallbackToPolling=Ry(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const u=this.storage.getItem(s);if(e.newValue!==u)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const a=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},c=this.storage.getItem(s);jC()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,zS):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$y.type="LOCAL";const lc=$y;/**
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
 */class zy extends Gy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zy.type="SESSION";const Yn=zy;/**
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
 */function qS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new cc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(u).map(async m=>m(n.origin,c)),p=await qS(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function $o(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class KS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,u;return new Promise((f,p)=>{const m=$o("",20);a.port1.start();const b=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(w.data.response);break;default:clearTimeout(b),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Me(){return window}function YS(i){Me().location.href=i}/**
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
 */function uh(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function JS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XS(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function QS(){return uh()?self:null}/**
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
 */const qy="firebaseLocalStorageDb",ZS=1,Ol="firebaseLocalStorage",Ky="fbase_key";class zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(i,e){return i.transaction([Ol],e?"readwrite":"readonly").objectStore(Ol)}function eT(){const i=indexedDB.deleteDatabase(qy);return new zo(i).toPromise()}function kd(){const i=indexedDB.open(qy,ZS);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ol,{keyPath:Ky})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ol)?e(s):(s.close(),await eT(),e(await kd()))})})}async function Bv(i,e,n){const s=uc(i,!0).put({[Ky]:e,value:n});return new zo(s).toPromise()}async function tT(i,e){const n=uc(i,!1).get(e),s=await new zo(n).toPromise();return s===void 0?null:s.value}function jv(i,e){const n=uc(i,!0).delete(e);return new zo(n).toPromise()}const nT=800,iT=3;class Yy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>iT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(QS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JS(),!this.activeServiceWorker)return;this.sender=new KS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await Bv(e,Pl,"1"),await jv(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=uc(a,!1).getAll();return new zo(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yy.type="LOCAL";const jr=Yy;/**
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
 */function rT(i,e){return Ke(i,"POST","/v2/accounts/mfaSignIn:start",Fe(i,e))}function sT(i,e){return Ke(i,"POST","/v2/accounts/mfaSignIn:finalize",Fe(i,e))}/**
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
 */async function oT(i){return(await Ke(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function aT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}function Jy(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Qe("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",aT().appendChild(s)})}function Xy(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const lT=500,cT=6e4,ml=1e12;class uT{constructor(e){this.auth=e,this.counter=ml,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new dT(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||ml;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||ml;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||ml;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class dT{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;N(a,"argument-error",{appName:n}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=hT(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cT)},lT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function hT(i){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const ud=Xy("rcb"),fT=new Ho(3e4,6e4),pT="https://www.google.com/recaptcha/api.js?";class mT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Me().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(gT(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Me().grecaptcha):new Promise((s,a)=>{const c=Me().setTimeout(()=>{a(Qe(e,"network-request-failed"))},fT.get());Me()[ud]=()=>{Me().clearTimeout(c),delete Me()[ud];const f=Me().grecaptcha;if(!f){a(Qe(e,"internal-error"));return}const p=f.render;f.render=(m,b)=>{const v=p(m,b);return this.counter++,v},this.hostLanguage=n,s(f)};const u=`${pT}?${Li({onload:ud,render:"explicit",hl:n})}`;Jy(u).catch(()=>{clearTimeout(c),a(Qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Me().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gT(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class vT{async load(e){return new uT(e)}clearedOneInstance(){}}/**
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
 */const Qy="recaptcha",_T={theme:"light",type:"image"};class yT{constructor(e,n=Object.assign({},_T),s){this.parameters=n,this.type=Qy,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=qe(s),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof e=="string"?document.getElementById(e):e;N(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new vT:new mT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(a=>{const c=u=>{!u||(this.tokenChangeListeners.delete(c),a(u))};this.tokenChangeListeners.add(c),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=Me()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(ih()&&!uh(),this.auth,"internal-error"),await bT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await oT(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function bT(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class dh{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Si._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function wT(i,e,n){const s=qe(i),a=await dc(s,e,H(n));return new dh(a,c=>sc(s,c))}async function IT(i,e,n){const s=H(i);await rc(!1,s,"phone");const a=await dc(s.auth,e,H(n));return new dh(a,c=>By(s,c))}async function ET(i,e,n){const s=H(i),a=await dc(s.auth,e,H(n));return new dh(a,c=>jy(s,c))}async function dc(i,e,n){var s;const a=await n.verify();try{N(typeof a=="string",i,"argument-error"),N(n.type===Qy,i,"argument-error");let c;if(typeof e=="string"?c={phoneNumber:e}:c=e,"session"in c){const u=c.session;if("phoneNumber"in c)return N(u.type==="enroll",i,"internal-error"),(await jS(i,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:c.phoneNumber,recaptchaToken:a}})).phoneSessionInfo.sessionInfo;{N(u.type==="signin",i,"internal-error");const f=((s=c.multiFactorHint)===null||s===void 0?void 0:s.uid)||c.multiFactorUid;return N(f,i,"missing-multi-factor-info"),(await rT(i,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:u}=await tS(i,{phoneNumber:c.phoneNumber,recaptchaToken:a});return u}}finally{n._reset()}}async function CT(i,e){await oh(H(i),e)}/**
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
 */class Ut{constructor(e){this.providerId=Ut.PROVIDER_ID,this.auth=qe(e)}verifyPhoneNumber(e,n){return dc(this.auth,e,H(n))}static credential(e,n){return Si._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Ut.credentialFromTaggedObject(n)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?Si._fromTokenResponse(n,s):null}}Ut.PROVIDER_ID="phone";Ut.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function xi(i,e){return e?It(e):(N(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class hh extends Kr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ST(i){return Uy(i.auth,new hh(i),i.bypassAuthState)}function TT(i){const{auth:e,user:n}=i;return N(n,e,"internal-error"),Fy(n,new hh(i),i.bypassAuthState)}async function kT(i){const{auth:e,user:n}=i;return N(n,e,"internal-error"),oh(n,new hh(i),i.bypassAuthState)}/**
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
 */class Zy{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return kT;case"reauthViaPopup":case"reauthViaRedirect":return TT;default:ze(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RT=new Ho(2e3,1e4);async function AT(i,e,n){const s=qe(i);zr(i,e,In);const a=xi(s,n);return new un(s,"signInViaPopup",e,a).executeNotNull()}async function NT(i,e,n){const s=H(i);zr(s.auth,e,In);const a=xi(s.auth,n);return new un(s.auth,"reauthViaPopup",e,a,s).executeNotNull()}async function PT(i,e,n){const s=H(i);zr(s.auth,e,In);const a=xi(s.auth,n);return new un(s.auth,"linkViaPopup",e,a,s).executeNotNull()}class un extends Zy{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RT.get())};e()}}un.currentPopupAction=null;/**
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
 */const OT="pendingRedirect",_o=new Map;class DT extends Zy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const s=await LT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LT(i,e){const n=tb(e),s=eb(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}async function fh(i,e){return eb(i)._set(tb(e),"true")}function MT(){_o.clear()}function ph(i,e){_o.set(i._key(),e)}function eb(i){return It(i._redirectPersistence)}function tb(i){return Ci(OT,i.config.apiKey,i.name)}/**
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
 */function xT(i,e,n){return FT(i,e,n)}async function FT(i,e,n){const s=qe(i);zr(i,e,In);const a=xi(s,n);return await fh(a,s),a._openRedirect(s,e,"signInViaRedirect")}function UT(i,e,n){return BT(i,e,n)}async function BT(i,e,n){const s=H(i);zr(s.auth,e,In);const a=xi(s.auth,n);await fh(a,s.auth);const c=await nb(s);return a._openRedirect(s.auth,e,"reauthViaRedirect",c)}function jT(i,e,n){return WT(i,e,n)}async function WT(i,e,n){const s=H(i);zr(s.auth,e,In);const a=xi(s.auth,n);await rc(!1,s,e.providerId),await fh(a,s.auth);const c=await nb(s);return a._openRedirect(s.auth,e,"linkViaRedirect",c)}async function VT(i,e){return await qe(i)._initializationPromise,hc(i,e,!1)}async function hc(i,e,n=!1){const s=qe(i),a=xi(s,e),u=await new DT(s,a,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}async function nb(i){const e=$o(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const HT=10*60*1e3;class ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rb(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wv(e))}saveEventToCache(e){this.cachedEventUids.add(Wv(e)),this.lastProcessedEventTime=Date.now()}}function Wv(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function rb({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rb(i);default:return!1}}/**
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
 */async function sb(i,e={}){return Ke(i,"GET","/v1/projects",e)}/**
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
 */const $T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zT=/^https?/;async function qT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await sb(i);for(const n of e)try{if(KT(n))return}catch{}ze(i,"unauthorized-domain")}function KT(i){const e=No(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!zT.test(n))return!1;if($T.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const YT=new Ho(3e4,6e4);function Vv(){const i=Me().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function JT(i){return new Promise((e,n)=>{var s,a,c;function u(){Vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vv(),n(Qe(i,"network-request-failed"))},timeout:YT.get()})}if(!((a=(s=Me().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=Me().gapi)===null||c===void 0)&&c.load)u();else{const f=Xy("iframefcb");return Me()[f]=()=>{gapi.load?u():n(Qe(i,"network-request-failed"))},Jy(`https://apis.google.com/js/api.js?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw wl=null,e})}let wl=null;function XT(i){return wl=wl||JT(i),wl}/**
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
 */const QT=new Ho(5e3,15e3),ZT="__/auth/iframe",ek="emulator/auth/iframe",tk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ik(i){const e=i.config;N(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?rh(e,ek):`https://${i.config.authDomain}/${ZT}`,s={apiKey:e.apiKey,appName:i.name,v:Mi},a=nk.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Li(s).slice(1)}`}async function rk(i){const e=await XT(i),n=Me().gapi;return N(n,i,"internal-error"),e.open({where:document.body,url:ik(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tk,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const u=Qe(i,"network-request-failed"),f=Me().setTimeout(()=>{c(u)},QT.get());function p(){Me().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{c(u)})}))}/**
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
 */const sk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ok=500,ak=600,lk="_blank",ck="http://localhost";class Hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uk(i,e,n,s=ok,a=ak){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},sk),{width:s.toString(),height:a.toString(),top:c,left:u}),m=De().toLowerCase();n&&(f=Cy(m)?lk:n),Ey(m)&&(e=e||ck,p.scrollbars="yes");const b=Object.entries(p).reduce((w,[E,A])=>`${w}${E}=${A},`,"");if(BC(m)&&f!=="_self")return dk(e||"",f),new Hv(null);const v=window.open(e||"",f,b);N(v,i,"popup-blocked");try{v.focus()}catch{}return new Hv(v)}function dk(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const hk="__/auth/handler",fk="emulator/auth/handler";function Rd(i,e,n,s,a,c){N(i.config.authDomain,i,"auth-domain-config-required"),N(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Mi,eventId:a};if(e instanceof In){e.setDefaultLanguage(i.languageCode),u.providerId=e.providerId||"",Ed(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries(c||{}))u[p]=m}if(e instanceof Yr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(u.scopes=p.join(","))}i.tenantId&&(u.tid=i.tenantId);const f=u;for(const p of Object.keys(f))f[p]===void 0&&delete f[p];return`${pk(i)}?${Li(f).slice(1)}`}function pk({config:i}){return i.emulator?rh(i,fk):`https://${i.authDomain}/${hk}`}/**
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
 */const dd="webStorageSupport";class mk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=hc,this._overrideRedirectResult=ph}async _openPopup(e,n,s,a){var c;Wt((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const u=Rd(e,n,s,No(),a);return uk(e,u,$o())}async _openRedirect(e,n,s,a){return await this._originValidation(e),YS(Rd(e,n,s,No(),a)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Wt(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rk(e),s=new ib(e);return n.register("authEvent",a=>(N(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dd,{type:dd},a=>{var c;const u=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[dd];u!==void 0&&n(!!u),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ry()||sh()||qr()}}const ob=mk;class gk{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return Qt("unexpected MultiFactorSessionType")}}}class mh extends gk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new mh(e)}_finalizeEnroll(e,n,s){return WS(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return sT(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ab{constructor(){}static assertion(e){return mh._fromCredential(e)}}ab.FACTOR_ID="phone";var Gv="@firebase/auth",$v="0.20.10";/**
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
 */class vk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var a;e(((a=s)===null||a===void 0?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _k(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yk(i){Kn(new gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),{apiKey:c,authDomain:u}=s.options;return((f,p)=>{N(c&&!c.includes(":"),"invalid-api-key",{appName:f.name}),N(!(u!=null&&u.includes(":")),"argument-error",{appName:f.name});const m={apiKey:c,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ay(i)},b=new HC(f,p,m);return wC(b,n),b})(s,a)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new gn("auth-internal",e=>{const n=qe(e.getProvider("auth").getImmediate());return(s=>new vk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Gv,$v,_k(i)),Ft(Gv,$v,"esm2017")}/**
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
 */const bk=5*60,wk=ny("authIdTokenMaxAge")||bk;let zv=null;const Ik=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wk)return;const a=n==null?void 0:n.token;zv!==a&&(zv=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Ek(i=eh()){const e=Vo(i,"auth");if(e.isInitialized())return e.getImmediate();const n=bC(i,{popupRedirectResolver:ob,persistence:[jr,lc,Yn]}),s=ny("authTokenSyncURL");if(s){const c=Ik(s);US(n,c,()=>c(n.currentUser)),FS(n,u=>c(u))}const a=ty("auth");return a&&Ny(n,`http://${a}`),n}yk("Browser");/**
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
 */function Ri(){return window}/**
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
 */const Ck=2e3;async function Sk(i,e,n){var s;const{BuildInfo:a}=Ri();Wt(e.sessionId,"AuthEvent did not contain a session ID");const c=await Nk(e.sessionId),u={};return qr()?u.ibi=a.packageName:Go()?u.apn=a.packageName:ze(i,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=c,Rd(i,n,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,u)}async function Tk(i){const{BuildInfo:e}=Ri(),n={};qr()?n.iosBundleId=e.packageName:Go()?n.androidPackageName=e.packageName:ze(i,"operation-not-supported-in-this-environment"),await sb(i,n)}function kk(i){const{cordova:e}=Ri();return new Promise(n=>{e.plugins.browsertab.isAvailable(s=>{let a=null;s?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,UC()?"_blank":"_system","location=yes"),n(a)})})}async function Rk(i,e,n){const{cordova:s}=Ri();let a=()=>{};try{await new Promise((c,u)=>{let f=null;function p(){var v;c();const w=(v=s.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function m(){f||(f=window.setTimeout(()=>{u(Qe(i,"redirect-cancelled-by-user"))},Ck))}function b(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),Go()&&document.addEventListener("visibilitychange",b,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",b,!1),f&&window.clearTimeout(f)}})}finally{a()}}function Ak(i){var e,n,s,a,c,u,f,p,m,b;const v=Ri();N(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=v==null?void 0:v.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((c=(a=(s=v==null?void 0:v.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((p=(f=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((b=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||b===void 0?void 0:b.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Nk(i){const e=Pk(i),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function Pk(i){if(Wt(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),n=new Uint8Array(e);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);return n}/**
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
 */const Ok=20;class Dk extends ib{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Lk(i,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Fk(),postBody:null,tenantId:i.tenantId,error:Qe(i,"no-auth-event")}}function Mk(i,e){return Ad()._set(Nd(i),e)}async function qv(i){const e=await Ad()._get(Nd(i));return e&&await Ad()._remove(Nd(i)),e}function xk(i,e){var n,s;const a=Bk(e);if(a.includes("/__/auth/callback")){const c=Il(a),u=c.firebaseError?Uk(decodeURIComponent(c.firebaseError)):null,f=(s=(n=u==null?void 0:u.code)===null||n===void 0?void 0:n.split("auth/"))===null||s===void 0?void 0:s[1],p=f?Qe(f):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function Fk(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Ok;n++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function Ad(){return It(lc)}function Nd(i){return Ci("authEvent",i.config.apiKey,i.name)}function Uk(i){try{return JSON.parse(i)}catch{return null}}function Bk(i){const e=Il(i),n=e.link?decodeURIComponent(e.link):void 0,s=Il(n).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Il(a).link||a||s||n||i}function Il(i){if(!(i!=null&&i.includes("?")))return{};const[e,...n]=i.split("?");return kr(n.join("?"))}/**
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
 */const jk=500;class Wk{constructor(){this._redirectPersistence=Yn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=hc,this._overrideRedirectResult=ph}async _initialize(e){const n=e._key();let s=this.eventManagers.get(n);return s||(s=new Dk(e),this.eventManagers.set(n,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){ze(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,s,a){Ak(e);const c=await this._initialize(e);await c.initialized(),c.resetRedirect(),MT(),await this._originValidation(e);const u=Lk(e,s,a);await Mk(e,u);const f=await Sk(e,u,n),p=await kk(f);return Rk(e,c,p)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tk(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:s,handleOpenURL:a,BuildInfo:c}=Ri(),u=setTimeout(async()=>{await qv(e),n.onEvent(Kv())},jk),f=async b=>{clearTimeout(u);const v=await qv(e);let w=null;v&&(b==null?void 0:b.url)&&(w=xk(v,b.url)),n.onEvent(w||Kv())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,f);const p=a,m=`${c.packageName.toLowerCase()}://`;Ri().handleOpenURL=async b=>{if(b.toLowerCase().startsWith(m)&&f({url:b}),typeof p=="function")try{p(b)}catch(v){console.error(v)}}}}const Vk=Wk;function Kv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Qe("no-auth-event")}}/**
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
 */function Hk(i,e){qe(i)._logFramework(e)}var Gk="@firebase/auth-compat",$k="0.2.23";/**
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
 */const zk=1e3;function yo(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function qk(){return yo()==="http:"||yo()==="https:"}function lb(i=De()){return!!((yo()==="file:"||yo()==="ionic:"||yo()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function Kk(){return Jl()||X_()}function Yk(){return Z_()&&(document==null?void 0:document.documentMode)===11}function Jk(i=De()){return/Edge\/\d+/.test(i)}function Xk(i=De()){return Yk()||Jk(i)}function cb(){try{const i=self.localStorage,e=$o();if(i)return i.setItem(e,"1"),i.removeItem(e),Xk()?Sl():!0}catch{return gh()&&Sl()}return!1}function gh(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function hd(){return(qk()||Q_()||lb())&&!Kk()&&cb()&&!gh()}function ub(){return lb()&&typeof document<"u"}async function Qk(){return ub()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},zk);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function Zk(){return typeof window<"u"?window:null}/**
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
 */const wt={LOCAL:"local",NONE:"none",SESSION:"session"},oo=N,db="persistence";function e2(i,e){if(oo(Object.values(wt).includes(e),i,"invalid-persistence-type"),Jl()){oo(e!==wt.SESSION,i,"unsupported-persistence-type");return}if(X_()){oo(e===wt.NONE,i,"unsupported-persistence-type");return}if(gh()){oo(e===wt.NONE||e===wt.LOCAL&&Sl(),i,"unsupported-persistence-type");return}oo(e===wt.NONE||cb(),i,"unsupported-persistence-type")}async function Pd(i){await i._initializationPromise;const e=hb(),n=Ci(db,i.config.apiKey,i.name);e&&e.setItem(n,i._getPersistence())}function t2(i,e){const n=hb();if(!n)return[];const s=Ci(db,i,e);switch(n.getItem(s)){case wt.NONE:return[Ur];case wt.LOCAL:return[jr,Yn];case wt.SESSION:return[Yn];default:return[]}}function hb(){var i;try{return((i=Zk())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const n2=N;class Vn{constructor(){this.browserResolver=It(ob),this.cordovaResolver=It(Vk),this.underlyingResolver=null,this._redirectPersistence=Yn,this._completeRedirectFn=hc,this._overrideRedirectResult=ph}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,s,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,s,a)}async _openRedirect(e,n,s,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,s,a)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ub()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return n2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Qk();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function fb(i){return i.unwrap()}function i2(i){return i.wrapped()}/**
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
 */function r2(i){return pb(i)}function s2(i,e){var n,s;const a=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const c=e;c.resolver=new o2(i,BS(i,e))}else if(a){const c=pb(e),u=e;c&&(u.credential=c,u.tenantId=a.tenantId||void 0,u.email=a.email||void 0,u.phoneNumber=a.phoneNumber||void 0)}}function pb(i){const{_tokenResponse:e}=i instanceof ut?i.customData:i;if(!e)return null;if(!(i instanceof ut)&&"temporaryProof"in e&&"phoneNumber"in e)return Ut.credentialFromResult(i);const n=e.providerId;if(!n||n===so.PASSWORD)return null;let s;switch(n){case so.GOOGLE:s=Yt;break;case so.FACEBOOK:s=Kt;break;case so.GITHUB:s=Jt;break;case so.TWITTER:s=Xt;break;default:const{oauthIdToken:a,oauthAccessToken:c,oauthTokenSecret:u,pendingToken:f,nonce:p}=e;return!c&&!u&&!a&&!f?null:f?n.startsWith("saml.")?Br._create(n,f):Zt._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:a,accessToken:c}):new Nr(n).credential({idToken:a,accessToken:c,rawNonce:p})}return i instanceof ut?s.credentialFromError(i):s.credentialFromResult(i)}function at(i,e){return e.catch(n=>{throw n instanceof ut&&s2(i,n),n}).then(n=>{const s=n.operationType,a=n.user;return{operationType:s,credential:r2(n),additionalUserInfo:xS(n),user:dn.getOrCreate(a)}})}async function Od(i,e){const n=await e;return{verificationId:n.verificationId,confirm:s=>at(i,n.confirm(s))}}class o2{constructor(e,n){this.resolver=n,this.auth=i2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return at(fb(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class dn{constructor(e){this._delegate=e,this.multiFactor=HS(e)}static getOrCreate(e){return dn.USER_MAP.has(e)||dn.USER_MAP.set(e,new dn(e)),dn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return at(this.auth,By(this._delegate,e))}async linkWithPhoneNumber(e,n){return Od(this.auth,IT(this._delegate,e,n))}async linkWithPopup(e){return at(this.auth,PT(this._delegate,e,Vn))}async linkWithRedirect(e){return await Pd(qe(this.auth)),jT(this._delegate,e,Vn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return at(this.auth,jy(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Od(this.auth,ET(this._delegate,e,n))}reauthenticateWithPopup(e){return at(this.auth,NT(this._delegate,e,Vn))}async reauthenticateWithRedirect(e){return await Pd(qe(this.auth)),UT(this._delegate,e,Vn)}sendEmailVerification(e){return SS(this._delegate,e)}async unlink(e){return await dS(this._delegate,e),this}updateEmail(e){return AS(this._delegate,e)}updatePassword(e){return NS(this._delegate,e)}updatePhoneNumber(e){return CT(this._delegate,e)}updateProfile(e){return RS(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return TS(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}dn.USER_MAP=new WeakMap;/**
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
 */const ao=N;class Dd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;ao(s,"invalid-api-key",{appName:e.name}),ao(s,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Vn:void 0;this._delegate=n.initialize({options:{persistence:a2(s,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(_C),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?dn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Ny(this._delegate,e,n)}applyActionCode(e){return gS(this._delegate,e)}checkActionCode(e){return Wy(this._delegate,e)}confirmPasswordReset(e,n){return mS(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return at(this._delegate,_S(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return CS(this._delegate,e)}isSignInWithEmailLink(e){return wS(this._delegate,e)}async getRedirectResult(){ao(hd(),this._delegate,"operation-not-supported-in-this-environment");const e=await VT(this._delegate,Vn);return e?at(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Hk(this._delegate,e)}onAuthStateChanged(e,n,s){const{next:a,error:c,complete:u}=Yv(e,n,s);return this._delegate.onAuthStateChanged(a,c,u)}onIdTokenChanged(e,n,s){const{next:a,error:c,complete:u}=Yv(e,n,s);return this._delegate.onIdTokenChanged(a,c,u)}sendSignInLinkToEmail(e,n){return bS(this._delegate,e,n)}sendPasswordResetEmail(e,n){return pS(this._delegate,e,n||void 0)}async setPersistence(e){e2(this._delegate,e);let n;switch(e){case wt.SESSION:n=Yn;break;case wt.LOCAL:n=await It(jr)._isAvailable()?jr:lc;break;case wt.NONE:n=Ur;break;default:return ze("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return at(this._delegate,uS(this._delegate))}signInWithCredential(e){return at(this._delegate,sc(this._delegate,e))}signInWithCustomToken(e){return at(this._delegate,fS(this._delegate,e))}signInWithEmailAndPassword(e,n){return at(this._delegate,yS(this._delegate,e,n))}signInWithEmailLink(e,n){return at(this._delegate,IS(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Od(this._delegate,wT(this._delegate,e,n))}async signInWithPopup(e){return ao(hd(),this._delegate,"operation-not-supported-in-this-environment"),at(this._delegate,AT(this._delegate,e,Vn))}async signInWithRedirect(e){return ao(hd(),this._delegate,"operation-not-supported-in-this-environment"),await Pd(this._delegate),xT(this._delegate,e,Vn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return vS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Dd.Persistence=wt;function Yv(i,e,n){let s=i;typeof i!="function"&&({next:s,error:e,complete:n}=i);const a=s;return{next:u=>a(u&&dn.getOrCreate(u)),error:e,complete:n}}function a2(i,e){const n=t2(i,e);if(typeof self<"u"&&!n.includes(jr)&&n.push(jr),typeof window<"u")for(const s of[lc,Yn])n.includes(s)||n.push(s);return n.includes(Ur)||n.push(Ur),n}/**
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
 */class vh{constructor(){this.providerId="phone",this._delegate=new Ut(fb(x.auth()))}static credential(e,n){return Ut.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}vh.PHONE_SIGN_IN_METHOD=Ut.PHONE_SIGN_IN_METHOD;vh.PROVIDER_ID=Ut.PROVIDER_ID;/**
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
 */const l2=N;class c2{constructor(e,n,s=x.app()){var a;l2((a=s.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new yT(e,n,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const u2="auth-compat";function d2(i){i.INTERNAL.registerComponent(new gn(u2,e=>{const n=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Dd(n,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Cr.EMAIL_SIGNIN,PASSWORD_RESET:Cr.PASSWORD_RESET,RECOVER_EMAIL:Cr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Cr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Cr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Cr.VERIFY_EMAIL}},EmailAuthProvider:wn,FacebookAuthProvider:Kt,GithubAuthProvider:Jt,GoogleAuthProvider:Yt,OAuthProvider:Nr,SAMLAuthProvider:Al,PhoneAuthProvider:vh,PhoneMultiFactorGenerator:ab,RecaptchaVerifier:c2,TwitterAuthProvider:Xt,Auth:Dd,AuthCredential:Kr,Error:ut}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(Gk,$k)}d2(x);var mb={exports:{}};(function(i){(function(){var e=window.CustomEvent;(!e||typeof e=="object")&&(e=function(I,S){S=S||{};var P=document.createEvent("CustomEvent");return P.initCustomEvent(I,!!S.bubbles,!!S.cancelable,S.detail||null),P},e.prototype=window.Event.prototype);function n(_){for(;_&&_!==document.body;){var I=window.getComputedStyle(_),S=function(P,j){return!(I[P]===void 0||I[P]===j)};if(I.opacity<1||S("zIndex","auto")||S("transform","none")||S("mixBlendMode","normal")||S("filter","none")||S("perspective","none")||I.isolation==="isolate"||I.position==="fixed"||I.webkitOverflowScrolling==="touch")return!0;_=_.parentElement}return!1}function s(_){for(;_;){if(_.localName==="dialog")return _;_=_.parentElement}return null}function a(_){_&&_.blur&&_!==document.body&&_.blur()}function c(_,I){for(var S=0;S<_.length;++S)if(_[S]===I)return!0;return!1}function u(_){return!_||!_.hasAttribute("method")?!1:_.getAttribute("method").toLowerCase()==="dialog"}function f(_){if(this.dialog_=_,this.replacedStyleTop_=!1,this.openAsModal_=!1,_.hasAttribute("role")||_.setAttribute("role","dialog"),_.show=this.show.bind(this),_.showModal=this.showModal.bind(this),_.close=this.close.bind(this),"returnValue"in _||(_.returnValue=""),"MutationObserver"in window){var I=new MutationObserver(this.maybeHideModal.bind(this));I.observe(_,{attributes:!0,attributeFilter:["open"]})}else{var S=!1,P=function(){S?this.downgradeModal():this.maybeHideModal(),S=!1}.bind(this),j,re=function(oe){if(oe.target===_){var ye="DOMNodeRemoved";S|=oe.type.substr(0,ye.length)===ye,window.clearTimeout(j),j=window.setTimeout(P,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(oe){_.addEventListener(oe,re)})}Object.defineProperty(_,"open",{set:this.setOpen.bind(this),get:_.hasAttribute.bind(_,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}f.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),p.dm.removeDialog(this))},setOpen:function(_){_?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(_){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var I=document.createElement("div");this.dialog_.insertBefore(I,this.dialog_.firstChild),I.tabIndex=-1,I.focus(),this.dialog_.removeChild(I)}var S=document.createEvent("MouseEvents");S.initMouseEvent(_.type,_.bubbles,_.cancelable,window,_.detail,_.screenX,_.screenY,_.clientX,_.clientY,_.ctrlKey,_.altKey,_.shiftKey,_.metaKey,_.button,_.relatedTarget),this.dialog_.dispatchEvent(S),_.stopPropagation()},focus_:function(){var _=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!_&&this.dialog_.tabIndex>=0&&(_=this.dialog_),!_){var I=["button","input","keygen","select","textarea"],S=I.map(function(P){return P+":not([disabled])"});S.push('[tabindex]:not([disabled]):not([tabindex=""])'),_=this.dialog_.querySelector(S.join(", "))}a(document.activeElement),_&&_.focus()},updateZIndex:function(_,I){if(_<I)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=_,this.backdrop_.style.zIndex=I},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!p.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");n(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,p.needsCentering(this.dialog_)?(p.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(_){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),_!==void 0&&(this.dialog_.returnValue=_);var I=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(I)}};var p={};if(p.reposition=function(_){var I=document.body.scrollTop||document.documentElement.scrollTop,S=I+(window.innerHeight-_.offsetHeight)/2;_.style.top=Math.max(I,S)+"px"},p.isInlinePositionSetByStylesheet=function(_){for(var I=0;I<document.styleSheets.length;++I){var S=document.styleSheets[I],P=null;try{P=S.cssRules}catch{}if(!!P)for(var j=0;j<P.length;++j){var re=P[j],oe=null;try{oe=document.querySelectorAll(re.selectorText)}catch{}if(!(!oe||!c(oe,_))){var ye=re.style.getPropertyValue("top"),Ue=re.style.getPropertyValue("bottom");if(ye&&ye!=="auto"||Ue&&Ue!=="auto")return!0}}}return!1},p.needsCentering=function(_){var I=window.getComputedStyle(_);return I.position!=="absolute"||_.style.top!=="auto"&&_.style.top!==""||_.style.bottom!=="auto"&&_.style.bottom!==""?!1:!p.isInlinePositionSetByStylesheet(_)},p.forceRegisterDialog=function(_){if((window.HTMLDialogElement||_.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",_),_.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new f(_)},p.registerDialog=function(_){_.showModal||p.forceRegisterDialog(_)},p.DialogManager=function(){this.pendingDialogStack=[];var _=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(I){this.forwardTab_=void 0,I.stopPropagation(),_([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(I){var S=[];I.forEach(function(P){for(var j=0,re;re=P.removedNodes[j];++j){if(re instanceof Element)re.localName==="dialog"&&S.push(re);else continue;S=S.concat(re.querySelectorAll("dialog"))}}),S.length&&_(S)}))},p.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},p.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},p.DialogManager.prototype.updateStacking=function(){for(var _=this.zIndexHigh_,I=0,S;S=this.pendingDialogStack[I];++I)S.updateZIndex(--_,--_),I===0&&(this.overlay.style.zIndex=--_);var P=this.pendingDialogStack[0];if(P){var j=P.dialog.parentNode||document.body;j.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},p.DialogManager.prototype.containedByTopDialog_=function(_){for(;_=s(_);){for(var I=0,S;S=this.pendingDialogStack[I];++I)if(S.dialog===_)return I===0;_=_.parentElement}return!1},p.DialogManager.prototype.handleFocus_=function(_){if(!this.containedByTopDialog_(_.target)&&(_.preventDefault(),_.stopPropagation(),a(_.target),this.forwardTab_!==void 0)){var I=this.pendingDialogStack[0],S=I.dialog,P=S.compareDocumentPosition(_.target);return P&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?I.focus_():document.documentElement.focus()),!1}},p.DialogManager.prototype.handleKey_=function(_){if(this.forwardTab_=void 0,_.keyCode===27){_.preventDefault(),_.stopPropagation();var I=new e("cancel",{bubbles:!1,cancelable:!0}),S=this.pendingDialogStack[0];S&&S.dialog.dispatchEvent(I)&&S.dialog.close()}else _.keyCode===9&&(this.forwardTab_=!_.shiftKey)},p.DialogManager.prototype.checkDOM_=function(_){var I=this.pendingDialogStack.slice();I.forEach(function(S){_.indexOf(S.dialog)!==-1?S.downgradeModal():S.maybeHideModal()})},p.DialogManager.prototype.pushDialog=function(_){var I=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=I?!1:(this.pendingDialogStack.unshift(_)===1&&this.blockDocument(),this.updateStacking(),!0)},p.DialogManager.prototype.removeDialog=function(_){var I=this.pendingDialogStack.indexOf(_);I!==-1&&(this.pendingDialogStack.splice(I,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},p.dm=new p.DialogManager,p.formSubmitter=null,p.useValue=null,window.HTMLDialogElement===void 0){var m=document.createElement("form");if(m.setAttribute("method","dialog"),m.method!=="dialog"){var b=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(b){var v=b.get;b.get=function(){return u(this)?"dialog":v.call(this)};var w=b.set;b.set=function(_){return typeof _=="string"&&_.toLowerCase()==="dialog"?this.setAttribute("method",_):w.call(this,_)},Object.defineProperty(HTMLFormElement.prototype,"method",b)}}document.addEventListener("click",function(_){if(p.formSubmitter=null,p.useValue=null,!_.defaultPrevented){var I=_.target;if(!(!I||!u(I.form))){var S=I.type==="submit"&&["button","input"].indexOf(I.localName)>-1;if(!S){if(!(I.localName==="input"&&I.type==="image"))return;p.useValue=_.offsetX+","+_.offsetY}var P=s(I);!P||(p.formSubmitter=I)}}},!1);var E=HTMLFormElement.prototype.submit,A=function(){if(!u(this))return E.call(this);var _=s(this);_&&_.close()};HTMLFormElement.prototype.submit=A,document.addEventListener("submit",function(_){var I=_.target;if(!!u(I)){_.preventDefault();var S=s(I);if(!!S){var P=p.formSubmitter;P&&P.form===I?S.close(p.useValue||P.value):S.close(),p.formSubmitter=null}}},!0)}p.forceRegisterDialog=p.forceRegisterDialog,p.registerDialog=p.registerDialog,typeof i.exports=="object"?i.exports=p:window.dialogPolyfill=p})()})(mb);const h2=mb.exports;/**
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
 */var _e={upgradeDom:function(i,e){},upgradeElement:function(i,e){},upgradeElements:function(i){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(i,e){},register:function(i){},downgradeElements:function(i){}};_e=function(){var i=[],e=[],n="mdlComponentConfigInternal_";function s(_,I){for(var S=0;S<i.length;S++)if(i[S].className===_)return typeof I<"u"&&(i[S]=I),i[S];return!1}function a(_){var I=_.getAttribute("data-upgraded");return I===null?[""]:I.split(",")}function c(_,I){var S=a(_);return S.indexOf(I)!==-1}function u(_,I,S){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(_,{bubbles:I,cancelable:S});var P=document.createEvent("Events");return P.initEvent(_,I,S),P}function f(_,I){if(typeof _>"u"&&typeof I>"u")for(var S=0;S<i.length;S++)f(i[S].className,i[S].cssClass);else{var P=_;if(typeof I>"u"){var j=s(P);j&&(I=j.cssClass)}for(var re=document.querySelectorAll("."+I),oe=0;oe<re.length;oe++)p(re[oe],P)}}function p(_,I){if(!(typeof _=="object"&&_ instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var S=u("mdl-componentupgrading",!0,!0);if(_.dispatchEvent(S),!S.defaultPrevented){var P=a(_),j=[];if(I)c(_,I)||j.push(s(I));else{var re=_.classList;i.forEach(function(Et){re.contains(Et.cssClass)&&j.indexOf(Et)===-1&&!c(_,Et.className)&&j.push(Et)})}for(var oe=0,ye=j.length,Ue;oe<ye;oe++){if(Ue=j[oe],Ue){P.push(Ue.className),_.setAttribute("data-upgraded",P.join(","));var en=new Ue.classConstructor(_);en[n]=Ue,e.push(en);for(var tn=0,Zr=Ue.callbacks.length;tn<Zr;tn++)Ue.callbacks[tn](_);Ue.widget&&(_[Ue.className]=en)}else throw new Error("Unable to find a registered component for the given class.");var Z=u("mdl-componentupgraded",!0,!1);_.dispatchEvent(Z)}}}function m(_){Array.isArray(_)||(_ instanceof Element?_=[_]:_=Array.prototype.slice.call(_));for(var I=0,S=_.length,P;I<S;I++)P=_[I],P instanceof HTMLElement&&(p(P),P.children.length>0&&m(P.children))}function b(_){var I=typeof _.widget>"u"&&typeof _.widget>"u",S=!0;I||(S=_.widget||_.widget);var P={classConstructor:_.constructor||_.constructor,className:_.classAsString||_.classAsString,cssClass:_.cssClass||_.cssClass,widget:S,callbacks:[]};if(i.forEach(function(re){if(re.cssClass===P.cssClass)throw new Error("The provided cssClass has already been registered: "+re.cssClass);if(re.className===P.className)throw new Error("The provided className has already been registered")}),_.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");var j=s(_.classAsString,P);j||i.push(P)}function v(_,I){var S=s(_);S&&S.callbacks.push(I)}function w(){for(var _=0;_<i.length;_++)f(i[_].className)}function E(_){if(_){var I=e.indexOf(_);e.splice(I,1);var S=_.element_.getAttribute("data-upgraded").split(","),P=S.indexOf(_[n].classAsString);S.splice(P,1),_.element_.setAttribute("data-upgraded",S.join(","));var j=u("mdl-componentdowngraded",!0,!1);_.element_.dispatchEvent(j)}}function A(_){var I=function(P){e.filter(function(j){return j.element_===P}).forEach(E)};if(_ instanceof Array||_ instanceof NodeList)for(var S=0;S<_.length;S++)I(_[S]);else if(_ instanceof Node)I(_);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:f,upgradeElement:p,upgradeElements:m,upgradeAllRegistered:w,registerUpgradedCallback:v,register:b,downgradeElements:A}}();_e.ComponentConfigPublic;_e.ComponentConfig;_e.Component;_e.upgradeDom=_e.upgradeDom;_e.upgradeElement=_e.upgradeElement;_e.upgradeElements=_e.upgradeElements;_e.upgradeAllRegistered=_e.upgradeAllRegistered;_e.registerUpgradedCallback=_e.registerUpgradedCallback;_e.register=_e.register;_e.downgradeElements=_e.downgradeElements;window.componentHandler=_e;window.componentHandler=_e;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),_e.upgradeAllRegistered()):(_e.upgradeElement=function(){},_e.register=function(){})});/**
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
`).length;e.keyCode===13&&n>=this.maxRows&&e.preventDefault()},i.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},i.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.onReset_=function(e){this.updateClasses_()},i.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},i.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},i.prototype.checkDisabled=i.prototype.checkDisabled,i.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.checkFocus=i.prototype.checkFocus,i.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},i.prototype.checkValidity=i.prototype.checkValidity,i.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},i.prototype.checkDirty=i.prototype.checkDirty,i.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},i.prototype.enable=i.prototype.enable,i.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},i.prototype.change=i.prototype.change,i.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:i,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var i,e=typeof Object.create=="function"?Object.create:function(t){function r(){}return r.prototype=t,new r},n;if(typeof Object.setPrototypeOf=="function")n=Object.setPrototypeOf;else{var s;e:{var a={xb:!0},c={};try{c.__proto__=a,s=c.xb;break e}catch{}s=!1}n=s?function(t,r){if(t.__proto__=r,t.__proto__!==r)throw new TypeError(t+" is not extensible");return t}:null}var u=n;function f(t,r){if(t.prototype=e(r.prototype),t.prototype.constructor=t,u)u(t,r);else for(var o in r)if(o!="prototype")if(Object.defineProperties){var l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l)}else t[o]=r[o];t.K=r.prototype}var p=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){t!=Array.prototype&&t!=Object.prototype&&(t[r]=o.value)},m=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function b(t,r){if(r){var o=m;t=t.split(".");for(var l=0;l<t.length-1;l++){var d=t[l];d in o||(o[d]={}),o=o[d]}t=t[t.length-1],l=o[t],r=r(l),r!=l&&r!=null&&p(o,t,{configurable:!0,writable:!0,value:r})}}b("Object.is",function(t){return t||function(r,o){return r===o?r!==0||1/r===1/o:r!==r&&o!==o}}),b("Array.prototype.includes",function(t){return t||function(r,o){var l=this;l instanceof String&&(l=String(l));var d=l.length;for(o=o||0,0>o&&(o=Math.max(o+d,0));o<d;o++){var h=l[o];if(h===r||Object.is(h,r))return!0}return!1}});var v=this;function w(t){return t!==void 0}function E(t){return typeof t=="string"}var A=/^[\w+/_-]+[=]{0,2}$/,_=null;function I(){}function S(t){t.W=void 0,t.Xa=function(){return t.W?t.W:t.W=new t}}function P(t){var r=typeof t;if(r=="object")if(t){if(t instanceof Array)return"array";if(t instanceof Object)return r;var o=Object.prototype.toString.call(t);if(o=="[object Window]")return"object";if(o=="[object Array]"||typeof t.length=="number"&&typeof t.splice<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("splice"))return"array";if(o=="[object Function]"||typeof t.call<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("call"))return"function"}else return"null";else if(r=="function"&&typeof t.call>"u")return"object";return r}function j(t){return P(t)=="array"}function re(t){var r=P(t);return r=="array"||r=="object"&&typeof t.length=="number"}function oe(t){return P(t)=="function"}function ye(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}var Ue="closure_uid_"+(1e9*Math.random()>>>0),en=0;function tn(t,r,o){return t.call.apply(t.bind,arguments)}function Zr(t,r,o){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,l),t.apply(r,d)}}return function(){return t.apply(r,arguments)}}function Z(t,r,o){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=tn:Z=Zr,Z.apply(null,arguments)}function Et(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var l=o.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function de(t,r){for(var o in r)t[o]=r[o]}var Qn=Date.now||function(){return+new Date};function pe(t,r){t=t.split(".");var o=v;t[0]in o||typeof o.execScript>"u"||o.execScript("var "+t[0]);for(var l;t.length&&(l=t.shift());)!t.length&&w(r)?o[l]=r:o[l]&&o[l]!==Object.prototype[l]?o=o[l]:o=o[l]={}}function W(t,r){function o(){}o.prototype=r.prototype,t.K=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.vc=function(l,d,h){for(var g=Array(arguments.length-2),y=2;y<arguments.length;y++)g[y-2]=arguments[y];return r.prototype[d].apply(l,g)}}function ft(t){if(Error.captureStackTrace)Error.captureStackTrace(this,ft);else{var r=Error().stack;r&&(this.stack=r)}t&&(this.message=String(t))}W(ft,Error),ft.prototype.name="CustomError";var Qh;function wc(t,r){t=t.split("%s");for(var o="",l=t.length-1,d=0;d<l;d++)o+=t[d]+(d<r.length?r[d]:"%s");ft.call(this,o+t[l])}W(wc,ft),wc.prototype.name="AssertionError";function nn(t,r){throw new wc("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}var Zh=Array.prototype.indexOf?function(t,r){return Array.prototype.indexOf.call(t,r,void 0)}:function(t,r){if(E(t))return E(r)&&r.length==1?t.indexOf(r,0):-1;for(var o=0;o<t.length;o++)if(o in t&&t[o]===r)return o;return-1},es=Array.prototype.forEach?function(t,r,o){Array.prototype.forEach.call(t,r,o)}:function(t,r,o){for(var l=t.length,d=E(t)?t.split(""):t,h=0;h<l;h++)h in d&&r.call(o,d[h],h,t)};function O0(t,r){for(var o=E(t)?t.split(""):t,l=t.length-1;0<=l;--l)l in o&&r.call(void 0,o[l],l,t)}var D0=Array.prototype.filter?function(t,r){return Array.prototype.filter.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=[],d=0,h=E(t)?t.split(""):t,g=0;g<o;g++)if(g in h){var y=h[g];r.call(void 0,y,g,t)&&(l[d++]=y)}return l},L0=Array.prototype.map?function(t,r){return Array.prototype.map.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=Array(o),d=E(t)?t.split(""):t,h=0;h<o;h++)h in d&&(l[h]=r.call(void 0,d[h],h,t));return l},M0=Array.prototype.some?function(t,r){return Array.prototype.some.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=E(t)?t.split(""):t,d=0;d<o;d++)if(d in l&&r.call(void 0,l[d],d,t))return!0;return!1};function Ct(t,r){return 0<=Zh(t,r)}function ef(t,r){r=Zh(t,r);var o;return(o=0<=r)&&Qo(t,r),o}function Qo(t,r){return Array.prototype.splice.call(t,r,1).length==1}function x0(t,r){e:{for(var o=t.length,l=E(t)?t.split(""):t,d=0;d<o;d++)if(d in l&&r.call(void 0,l[d],d,t)){r=d;break e}r=-1}0<=r&&Qo(t,r)}function F0(t,r){var o=0;O0(t,function(l,d){r.call(void 0,l,d,t)&&Qo(t,d)&&o++})}function tf(t){return Array.prototype.concat.apply([],arguments)}function nf(t){var r=t.length;if(0<r){for(var o=Array(r),l=0;l<r;l++)o[l]=t[l];return o}return[]}function U0(t,r,o){return 2>=arguments.length?Array.prototype.slice.call(t,r):Array.prototype.slice.call(t,r,o)}var pt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},B0=/&/g,j0=/</g,W0=/>/g,V0=/"/g,H0=/'/g,G0=/\x00/g,$0=/[\x00&<>"']/;function Ic(t,r){return t<r?-1:t>r?1:0}function Ui(t){return $0.test(t)&&(t.indexOf("&")!=-1&&(t=t.replace(B0,"&amp;")),t.indexOf("<")!=-1&&(t=t.replace(j0,"&lt;")),t.indexOf(">")!=-1&&(t=t.replace(W0,"&gt;")),t.indexOf('"')!=-1&&(t=t.replace(V0,"&quot;")),t.indexOf("'")!=-1&&(t=t.replace(H0,"&#39;")),t.indexOf("\0")!=-1&&(t=t.replace(G0,"&#0;"))),t}function rf(t,r,o){for(var l in t)r.call(o,t[l],l,t)}function Ec(t){var r={},o;for(o in t)r[o]=t[o];return r}var sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zo(t,r){for(var o,l,d=1;d<arguments.length;d++){l=arguments[d];for(o in l)t[o]=l[o];for(var h=0;h<sf.length;h++)o=sf[h],Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}}var Bi="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function Zn(){}Zn.prototype.next=function(){throw Bi},Zn.prototype.ha=function(){return this};function of(t){if(t instanceof Zn)return t;if(typeof t.ha=="function")return t.ha(!1);if(re(t)){var r=0,o=new Zn;return o.next=function(){for(;;){if(r>=t.length)throw Bi;if(r in t)return t[r++];r++}},o}throw Error("Not implemented")}function z0(t,r){if(re(t))try{es(t,r,void 0)}catch(o){if(o!==Bi)throw o}else{t=of(t);try{for(;;)r.call(void 0,t.next(),void 0,t)}catch(o){if(o!==Bi)throw o}}}function q0(t){if(re(t))return nf(t);t=of(t);var r=[];return z0(t,function(o){r.push(o)}),r}function ea(t,r){this.g={},this.a=[],this.j=this.h=0;var o=arguments.length;if(1<o){if(o%2)throw Error("Uneven number of arguments");for(var l=0;l<o;l+=2)this.set(arguments[l],arguments[l+1])}else if(t)if(t instanceof ea)for(o=t.ja(),l=0;l<o.length;l++)this.set(o[l],t.get(o[l]));else for(l in t)this.set(l,t[l])}i=ea.prototype,i.la=function(){ta(this);for(var t=[],r=0;r<this.a.length;r++)t.push(this.g[this.a[r]]);return t},i.ja=function(){return ta(this),this.a.concat()},i.clear=function(){this.g={},this.j=this.h=this.a.length=0};function ta(t){if(t.h!=t.a.length){for(var r=0,o=0;r<t.a.length;){var l=t.a[r];ei(t.g,l)&&(t.a[o++]=l),r++}t.a.length=o}if(t.h!=t.a.length){var d={};for(o=r=0;r<t.a.length;)l=t.a[r],ei(d,l)||(t.a[o++]=l,d[l]=1),r++;t.a.length=o}}i.get=function(t,r){return ei(this.g,t)?this.g[t]:r},i.set=function(t,r){ei(this.g,t)||(this.h++,this.a.push(t),this.j++),this.g[t]=r},i.forEach=function(t,r){for(var o=this.ja(),l=0;l<o.length;l++){var d=o[l],h=this.get(d);t.call(r,h,d,this)}},i.ha=function(t){ta(this);var r=0,o=this.j,l=this,d=new Zn;return d.next=function(){if(o!=l.j)throw Error("The map has changed since the iterator was created");if(r>=l.a.length)throw Bi;var h=l.a[r++];return t?h:l.g[h]},d};function ei(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var K0=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Y0(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var l=t[o].indexOf("="),d=null;if(0<=l){var h=t[o].substring(0,l);d=t[o].substring(l+1)}else h=t[o];r(h,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function af(t,r,o,l){for(var d=o.length;0<=(r=t.indexOf(o,r))&&r<l;){var h=t.charCodeAt(r-1);if((h==38||h==63)&&(h=t.charCodeAt(r+d),!h||h==61||h==38||h==35))return r;r+=d+1}return-1}var lf=/#|$/;function na(t,r){var o=t.search(lf),l=af(t,0,r,o);if(0>l)return null;var d=t.indexOf("&",l);return(0>d||d>o)&&(d=o),l+=r.length+1,decodeURIComponent(t.substr(l,d-l).replace(/\+/g," "))}var J0=/[?&]($|#)/;function Cn(t,r){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var o;t instanceof Cn?(this.i=w(r)?r:t.i,Cc(this,t.j),this.A=t.A,this.h=t.h,Sc(this,t.C),this.g=t.g,Tc(this,df(t.a)),this.s=t.s):t&&(o=String(t).match(K0))?(this.i=!!r,Cc(this,o[1]||"",!0),this.A=ts(o[2]||""),this.h=ts(o[3]||"",!0),Sc(this,o[4]),this.g=ts(o[5]||"",!0),Tc(this,o[6]||"",!0),this.s=ts(o[7]||"")):(this.i=!!r,this.a=new is(null,this.i))}Cn.prototype.toString=function(){var t=[],r=this.j;r&&t.push(ns(r,cf,!0),":");var o=this.h;return(o||r=="file")&&(t.push("//"),(r=this.A)&&t.push(ns(r,cf,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.C,o!=null&&t.push(":",String(o))),(o=this.g)&&(this.h&&o.charAt(0)!="/"&&t.push("/"),t.push(ns(o,o.charAt(0)=="/"?Z0:Q0,!0))),(o=this.a.toString())&&t.push("?",o),(o=this.s)&&t.push("#",ns(o,tw)),t.join("")};function Cc(t,r,o){t.j=o?ts(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Sc(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.C=r}else t.C=null}function Tc(t,r,o){r instanceof is?(t.a=r,nw(t.a,t.i)):(o||(r=ns(r,ew)),t.a=new is(r,t.i))}function kc(t){return t instanceof Cn?new Cn(t):new Cn(t,void 0)}function ts(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,r,o){return E(t)?(t=encodeURI(t).replace(r,X0),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function X0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cf=/[#\/\?@]/g,Q0=/[#\?:]/g,Z0=/[#\?]/g,ew=/[#\?@]/g,tw=/#/g;function is(t,r){this.g=this.a=null,this.h=t||null,this.j=!!r}function Sn(t){t.a||(t.a=new ea,t.g=0,t.h&&Y0(t.h,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=is.prototype,i.add=function(t,r){Sn(this),this.h=null,t=ji(this,t);var o=this.a.get(t);return o||this.a.set(t,o=[]),o.push(r),this.g+=1,this};function ti(t,r){Sn(t),r=ji(t,r),ei(t.a.g,r)&&(t.h=null,t.g-=t.a.get(r).length,t=t.a,ei(t.g,r)&&(delete t.g[r],t.h--,t.j++,t.a.length>2*t.h&&ta(t)))}i.clear=function(){this.a=this.h=null,this.g=0};function uf(t,r){return Sn(t),r=ji(t,r),ei(t.a.g,r)}i.forEach=function(t,r){Sn(this),this.a.forEach(function(o,l){es(o,function(d){t.call(r,d,l,this)},this)},this)},i.ja=function(){Sn(this);for(var t=this.a.la(),r=this.a.ja(),o=[],l=0;l<r.length;l++)for(var d=t[l],h=0;h<d.length;h++)o.push(r[l]);return o},i.la=function(t){Sn(this);var r=[];if(E(t))uf(this,t)&&(r=tf(r,this.a.get(ji(this,t))));else{t=this.a.la();for(var o=0;o<t.length;o++)r=tf(r,t[o])}return r},i.set=function(t,r){return Sn(this),this.h=null,t=ji(this,t),uf(this,t)&&(this.g-=this.a.get(t).length),this.a.set(t,[r]),this.g+=1,this},i.get=function(t,r){return t?(t=this.la(t),0<t.length?String(t[0]):r):r},i.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var t=[],r=this.a.ja(),o=0;o<r.length;o++){var l=r[o],d=encodeURIComponent(String(l));l=this.la(l);for(var h=0;h<l.length;h++){var g=d;l[h]!==""&&(g+="="+encodeURIComponent(String(l[h]))),t.push(g)}}return this.h=t.join("&")};function df(t){var r=new is;return r.h=t.h,t.a&&(r.a=new ea(t.a),r.g=t.g),r}function ji(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function nw(t,r){r&&!t.j&&(Sn(t),t.h=null,t.a.forEach(function(o,l){var d=l.toLowerCase();l!=d&&(ti(this,l),ti(this,d),0<o.length&&(this.h=null,this.a.set(ji(this,d),nf(o)),this.g+=o.length))},t)),t.j=r}function ni(t){this.a=kc(t)}function iw(t,r){r?t.a.a.set(Ae.Sa,r):ti(t.a.a,Ae.Sa)}function rw(t,r){r!==null?t.a.a.set(Ae.Qa,r?"1":"0"):ti(t.a.a,Ae.Qa)}function hf(t){return t.a.a.get(Ae.Pa)||null}function ff(t,r){r?t.a.a.set(Ae.PROVIDER_ID,r):ti(t.a.a,Ae.PROVIDER_ID)}ni.prototype.toString=function(){return this.a.toString()};var Ae={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},Wi;e:{var pf=v.navigator;if(pf){var mf=pf.userAgent;if(mf){Wi=mf;break e}}Wi=""}function q(t){return Wi.indexOf(t)!=-1}function gf(){return(q("Chrome")||q("CriOS"))&&!q("Edge")}function Rc(t){return Rc[" "](t),t}Rc[" "]=I;function sw(t,r){var o=lw;return Object.prototype.hasOwnProperty.call(o,t)?o[t]:o[t]=r(t)}var vf=q("Opera"),be=q("Trident")||q("MSIE"),Tn=q("Edge"),ow=Tn||be,kt=q("Gecko")&&!(Wi.toLowerCase().indexOf("webkit")!=-1&&!q("Edge"))&&!(q("Trident")||q("MSIE"))&&!q("Edge"),et=Wi.toLowerCase().indexOf("webkit")!=-1&&!q("Edge"),aw=et&&q("Mobile"),kn=q("Macintosh");function _f(){var t=v.document;return t?t.documentMode:void 0}var ia;e:{var Ac="",Nc=function(){var t=Wi;if(kt)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tn)return/Edge\/([\d\.]+)/.exec(t);if(be)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(et)return/WebKit\/(\S+)/.exec(t);if(vf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Ac=Nc?Nc[1]:""),be){var Pc=_f();if(Pc!=null&&Pc>parseFloat(Ac)){ia=String(Pc);break e}}ia=Ac}var lw={};function ii(t){return sw(t,function(){for(var r=0,o=pt(String(ia)).split("."),l=pt(String(t)).split("."),d=Math.max(o.length,l.length),h=0;r==0&&h<d;h++){var g=o[h]||"",y=l[h]||"";do{if(g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],y=/(\d*)(\D*)(.*)/.exec(y)||["","","",""],g[0].length==0&&y[0].length==0)break;r=Ic(g[1].length==0?0:parseInt(g[1],10),y[1].length==0?0:parseInt(y[1],10))||Ic(g[2].length==0,y[2].length==0)||Ic(g[2],y[2]),g=g[3],y=y[3]}while(r==0)}return 0<=r})}var rs,yf=v.document;rs=yf&&be?_f()||(yf.compatMode=="CSS1Compat"?parseInt(ia,10):5):void 0;function Vi(t,r){this.a=t===wf&&r||"",this.g=bf}Vi.prototype.ma=!0,Vi.prototype.ka=function(){return this.a},Vi.prototype.toString=function(){return"Const{"+this.a+"}"};var bf={},wf={};function ri(){this.a="",this.h=Ef}ri.prototype.ma=!0,ri.prototype.ka=function(){return this.a.toString()},ri.prototype.g=function(){return 1},ri.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function If(t){return t instanceof ri&&t.constructor===ri&&t.h===Ef?t.a:(nn("expected object of type TrustedResourceUrl, got '"+t+"' of type "+P(t)),"type_error:TrustedResourceUrl")}function cw(){var t=e1;t instanceof Vi&&t.constructor===Vi&&t.g===bf?t=t.a:(nn("expected object of type Const, got '"+t+"'"),t="type_error:Const");var r=new ri;return r.a=t,r}var Ef={};function mt(){this.a="",this.h=Tf}mt.prototype.ma=!0,mt.prototype.ka=function(){return this.a.toString()},mt.prototype.g=function(){return 1},mt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Rn(t){return t instanceof mt&&t.constructor===mt&&t.h===Tf?t.a:(nn("expected object of type SafeUrl, got '"+t+"' of type "+P(t)),"type_error:SafeUrl")}var Cf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ra(t){return t instanceof mt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),Cf.test(t)||(t="about:invalid#zClosurez"),Oc(t))}function Sf(t){return t instanceof mt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),Cf.test(t)||(t="about:invalid#zClosurez"),Oc(t))}var Tf={};function Oc(t){var r=new mt;return r.a=t,r}Oc("about:blank");function Hi(){this.a="",this.g=kf}Hi.prototype.ma=!0;var kf={};Hi.prototype.ka=function(){return this.a},Hi.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function An(){this.a="",this.j=Rf,this.h=null}An.prototype.g=function(){return this.h},An.prototype.ma=!0,An.prototype.ka=function(){return this.a.toString()},An.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function sa(t){return t instanceof An&&t.constructor===An&&t.j===Rf?t.a:(nn("expected object of type SafeHtml, got '"+t+"' of type "+P(t)),"type_error:SafeHtml")}var Rf={};function ss(t,r){var o=new An;return o.a=t,o.h=r,o}ss("<!DOCTYPE html>",0);var uw=ss("",0);ss("<br>",0);var dw=function(t){var r=!1,o;return function(){return r||(o=t(),r=!0),o}}(function(){if(typeof document>"u")return!1;var t=document.createElement("div"),r=document.createElement("div");return r.appendChild(document.createElement("div")),t.appendChild(r),t.firstChild?(r=t.firstChild.firstChild,t.innerHTML=sa(uw),!r.parentElement):!1});function hw(t,r){if(t.src=If(r),_===null)e:{if(r=v.document,(r=r.querySelector&&r.querySelector("script[nonce]"))&&(r=r.nonce||r.getAttribute("nonce"))&&A.test(r)){_=r;break e}_=""}r=_,r&&t.setAttribute("nonce",r)}function Gi(t,r){r=r instanceof mt?r:Sf(r),t.assign(Rn(r))}function Nn(t,r){this.a=w(t)?t:0,this.g=w(r)?r:0}Nn.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Nn.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Nn.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Nn.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function Dc(t,r){this.width=t,this.height=r}i=Dc.prototype,i.toString=function(){return"("+this.width+" x "+this.height+")"},i.aspectRatio=function(){return this.width/this.height},i.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},i.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},i.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function oa(t){return t?new Fc(os(t)):Qh||(Qh=new Fc)}function Lc(t,r){var o=r||document;return o.querySelectorAll&&o.querySelector?o.querySelectorAll("."+t):Af(document,t,r)}function Mc(t,r){var o=r||document;if(o.getElementsByClassName)t=o.getElementsByClassName(t)[0];else{o=document;var l=r||o;t=l.querySelectorAll&&l.querySelector&&t?l.querySelector(t?"."+t:""):Af(o,t,r)[0]||null}return t||null}function Af(t,r,o){var l;if(t=o||t,t.querySelectorAll&&t.querySelector&&r)return t.querySelectorAll(r?"."+r:"");if(r&&t.getElementsByClassName){var d=t.getElementsByClassName(r);return d}if(d=t.getElementsByTagName("*"),r){var h={};for(o=l=0;t=d[o];o++){var g=t.className;typeof g.split=="function"&&Ct(g.split(/\s+/),r)&&(h[l++]=t)}return h.length=l,h}return d}function fw(t,r){rf(r,function(o,l){o&&typeof o=="object"&&o.ma&&(o=o.ka()),l=="style"?t.style.cssText=o:l=="class"?t.className=o:l=="for"?t.htmlFor=o:Nf.hasOwnProperty(l)?t.setAttribute(Nf[l],o):l.lastIndexOf("aria-",0)==0||l.lastIndexOf("data-",0)==0?t.setAttribute(l,o):t[l]=o})}var Nf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function aa(t){return t.scrollingElement?t.scrollingElement:(et||t.compatMode!="CSS1Compat")&&t.body||t.documentElement}function si(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function os(t){return t.nodeType==9?t:t.ownerDocument||t.document}function xc(t,r){if("textContent"in t)t.textContent=r;else if(t.nodeType==3)t.data=String(r);else if(t.firstChild&&t.firstChild.nodeType==3){for(;t.lastChild!=t.firstChild;)t.removeChild(t.lastChild);t.firstChild.data=String(r)}else{for(var o;o=t.firstChild;)t.removeChild(o);t.appendChild(os(t).createTextNode(String(r)))}}function Pf(t,r){return r?pw(t,function(o){return!r||E(o.className)&&Ct(o.className.split(/\s+/),r)}):null}function pw(t,r){for(var o=0;t;){if(r(t))return t;t=t.parentNode,o++}return null}function Fc(t){this.a=t||v.document||document}Fc.prototype.N=function(){return E(void 0)?this.a.getElementById(void 0):void 0};var la={Fc:!0},Of={Hc:!0},mw={Ec:!0},Df={Gc:!0};function Pn(){throw Error("Do not instantiate directly")}Pn.prototype.va=null,Pn.prototype.toString=function(){return this.content};function as(t,r,o,l){if(t=t(r||_w,void 0,o),l=(l||oa()).a.createElement("DIV"),t=gw(t),t.match(vw),t=ss(t,null),dw())for(;l.lastChild;)l.removeChild(l.lastChild);return l.innerHTML=sa(t),l.childNodes.length==1&&(t=l.firstChild,t.nodeType==1&&(l=t)),l}function gw(t){if(!ye(t))return Ui(String(t));if(t instanceof Pn){if(t.fa===la)return t.content;if(t.fa===Df)return Ui(t.content)}return nn("Soy template output is unsafe for use as HTML: "+t),"zSoyz"}var vw=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,_w={};function yw(t){if(t!=null)switch(t.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function ca(){Pn.call(this)}W(ca,Pn),ca.prototype.fa=la;function U(t){return t!=null&&t.fa===la?t:t instanceof An?D(sa(t).toString(),t.g()):D(Ui(String(String(t))),yw(t))}function ua(){Pn.call(this)}W(ua,Pn),ua.prototype.fa=Of,ua.prototype.va=1;function da(t,r){this.content=String(t),this.va=r!=null?r:null}W(da,Pn),da.prototype.fa=Df;function Q(t){return new da(t,void 0)}var D=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o,l){return o=new r(String(o)),l!==void 0&&(o.va=l),o}}(ca),bw=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o){return new r(String(o))}}(ua);function ww(t){function r(){}var o={label:we("New password")};r.prototype=t,t=new r;for(var l in o)t[l]=o[l];return t}function we(t){return(t=String(t))?new da(t,void 0):""}var Lf=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o,l){return o=String(o),o?(o=new r(o),l!==void 0&&(o.va=l),o):""}}(ca);function tt(t){return t!=null&&t.fa===la?String(String(t.content).replace(Rw,"").replace(Aw,"&lt;")).replace(Sw,Ew):Ui(String(t))}function oi(t){return t!=null&&t.fa===Of?t=String(t).replace(Bc,Uc):t instanceof mt?t=String(Rn(t).toString()).replace(Bc,Uc):(t=String(t),kw.test(t)?t=t.replace(Bc,Uc):(nn("Bad value `%s` for |filterNormalizeUri",[t]),t="#zSoyz")),t}function Mf(t){return t!=null&&t.fa===mw?t=t.content:t==null?t="":t instanceof Hi?t instanceof Hi&&t.constructor===Hi&&t.g===kf?t=t.a:(nn("expected object of type SafeStyle, got '"+t+"' of type "+P(t)),t="type_error:SafeStyle"):(t=String(t),Tw.test(t)||(nn("Bad value `%s` for |filterCssValue",[t]),t="zSoyz")),t}var Iw={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\x85":"&#133;","\xA0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Ew(t){return Iw[t]}var Cw={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7F":"%7F","\x85":"%C2%85","\xA0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uFF01":"%EF%BC%81","\uFF03":"%EF%BC%83","\uFF04":"%EF%BC%84","\uFF06":"%EF%BC%86","\uFF07":"%EF%BC%87","\uFF08":"%EF%BC%88","\uFF09":"%EF%BC%89","\uFF0A":"%EF%BC%8A","\uFF0B":"%EF%BC%8B","\uFF0C":"%EF%BC%8C","\uFF0F":"%EF%BC%8F","\uFF1A":"%EF%BC%9A","\uFF1B":"%EF%BC%9B","\uFF1D":"%EF%BC%9D","\uFF1F":"%EF%BC%9F","\uFF20":"%EF%BC%A0","\uFF3B":"%EF%BC%BB","\uFF3D":"%EF%BC%BD"};function Uc(t){return Cw[t]}var Sw=/[\x00\x22\x27\x3c\x3e]/g,Bc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Tw=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,kw=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,Rw=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Aw=/</g;function jc(){return Q("Enter a valid phone number")}function xf(){return Q("Unable to send password reset code to specified email")}function Ff(){return Q("Something went wrong. Please try again.")}function Uf(){return Q("This email already exists without any means of sign-in. Please reset the password to recover.")}function Bf(t){t=t||{};var r="";switch(t.code){case"invalid-argument":r+="Client specified an invalid argument.";break;case"invalid-configuration":r+="Client specified an invalid project configuration.";break;case"failed-precondition":r+="Request can not be executed in the current system state.";break;case"out-of-range":r+="Client specified an invalid range.";break;case"unauthenticated":r+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":r+="Client does not have sufficient permission.";break;case"not-found":r+="Specified resource is not found.";break;case"aborted":r+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":r+="The resource that a client tried to create already exists.";break;case"resource-exhausted":r+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":r+="Request cancelled by the client.";break;case"data-loss":r+="Unrecoverable data loss or data corruption.";break;case"unknown":r+="Unknown server error.";break;case"internal":r+="Internal server error.";break;case"not-implemented":r+="API method not implemented by the server.";break;case"unavailable":r+="Service unavailable.";break;case"deadline-exceeded":r+="Request deadline exceeded.";break;case"auth/user-disabled":r+="The user account has been disabled by an administrator.";break;case"auth/timeout":r+="The operation has timed out.";break;case"auth/too-many-requests":r+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":r+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":r+="A network error has occurred. Try again later.";break;case"restart-process":r+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":r+="No sign-in provider is available for the given email, please try with a different email."}return Q(r)}function jf(){return Q("Please login again to perform this operation")}function ls(t,r,o){var l=Error.call(this);if(this.message=l.message,"stack"in l&&(this.stack=l.stack),this.code=Nw+t,!(t=r)){switch(t="",this.code){case"firebaseui/merge-conflict":t+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:t+=Ff()}t=Q(t).toString()}this.message=t||"",this.credential=o||null}f(ls,Error),ls.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Nw="firebaseui/";function ai(){this.T=this.T,this.C=this.C}var Pw=0;ai.prototype.T=!1,ai.prototype.m=function(){!this.T&&(this.T=!0,this.o(),Pw!=0)&&(this[Ue]||(this[Ue]=++en))};function cs(t,r){t.T?w(void 0)?r.call(void 0):r():(t.C||(t.C=[]),t.C.push(w(void 0)?Z(r,void 0):r))}ai.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function us(t){t&&typeof t.m=="function"&&t.m()}var Ow=Object.freeze||function(t){return t},Wf=!be||9<=Number(rs),Dw=be&&!ii("9"),Lw=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",I,r),v.removeEventListener("test",I,r)}catch{}return t}();function rn(t,r){this.type=t,this.g=this.target=r,this.h=!1,this.qb=!0}rn.prototype.stopPropagation=function(){this.h=!0},rn.prototype.preventDefault=function(){this.qb=!1};function nt(t,r){if(rn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var o=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(kt){e:{try{Rc(r.nodeName);var d=!0;break e}catch{}d=!1}d||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.keyCode=t.keyCode||0,this.key=t.key||"",this.j=t.charCode||(o=="keypress"?t.keyCode:0),this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=E(t.pointerType)?t.pointerType:Mw[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}W(nt,rn);var Mw=Ow({2:"touch",3:"pen",4:"mouse"});nt.prototype.stopPropagation=function(){nt.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},nt.prototype.preventDefault=function(){nt.K.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Dw)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch{}};var ds="closure_listenable_"+(1e6*Math.random()|0),xw=0;function Fw(t,r,o,l,d){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!l,this.La=d,this.key=++xw,this.sa=this.Ia=!1}function ha(t){t.sa=!0,t.listener=null,t.proxy=null,t.src=null,t.La=null}function fa(t){this.src=t,this.a={},this.g=0}fa.prototype.add=function(t,r,o,l,d){var h=t.toString();t=this.a[h],t||(t=this.a[h]=[],this.g++);var g=Vc(t,r,l,d);return-1<g?(r=t[g],o||(r.Ia=!1)):(r=new Fw(r,this.src,h,!!l,d),r.Ia=o,t.push(r)),r};function Wc(t,r){var o=r.type;o in t.a&&ef(t.a[o],r)&&(ha(r),t.a[o].length==0&&(delete t.a[o],t.g--))}function Vc(t,r,o,l){for(var d=0;d<t.length;++d){var h=t[d];if(!h.sa&&h.listener==r&&h.capture==!!o&&h.La==l)return d}return-1}var Hc="closure_lm_"+(1e6*Math.random()|0),Gc={};function Rt(t,r,o,l,d){if(l&&l.once)return hs(t,r,o,l,d);if(j(r)){for(var h=0;h<r.length;h++)Rt(t,r[h],o,l,d);return null}return o=zc(o),t&&t[ds]?t.J.add(String(r),o,!1,ye(l)?!!l.capture:!!l,d):Vf(t,r,o,!1,l,d)}function Vf(t,r,o,l,d,h){if(!r)throw Error("Invalid event type");var g=ye(d)?!!d.capture:!!d,y=pa(t);if(y||(t[Hc]=y=new fa(t)),o=y.add(r,o,l,g,h),o.proxy)return o;if(l=Uw(),o.proxy=l,l.src=t,l.listener=o,t.addEventListener)Lw||(d=g),d===void 0&&(d=!1),t.addEventListener(r.toString(),l,d);else if(t.attachEvent)t.attachEvent(Hf(r.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Uw(){var t=Bw,r=Wf?function(o){return t.call(r.src,r.listener,o)}:function(o){if(o=t.call(r.src,r.listener,o),!o)return o};return r}function hs(t,r,o,l,d){if(j(r)){for(var h=0;h<r.length;h++)hs(t,r[h],o,l,d);return null}return o=zc(o),t&&t[ds]?t.J.add(String(r),o,!0,ye(l)?!!l.capture:!!l,d):Vf(t,r,o,!0,l,d)}function li(t,r,o,l,d){if(j(r))for(var h=0;h<r.length;h++)li(t,r[h],o,l,d);else l=ye(l)?!!l.capture:!!l,o=zc(o),t&&t[ds]?(t=t.J,r=String(r).toString(),r in t.a&&(h=t.a[r],o=Vc(h,o,l,d),-1<o&&(ha(h[o]),Qo(h,o),h.length==0&&(delete t.a[r],t.g--)))):t&&(t=pa(t))&&(r=t.a[r.toString()],t=-1,r&&(t=Vc(r,o,l,d)),(o=-1<t?r[t]:null)&&On(o))}function On(t){if(typeof t!="number"&&t&&!t.sa){var r=t.src;if(r&&r[ds])Wc(r.J,t);else{var o=t.type,l=t.proxy;r.removeEventListener?r.removeEventListener(o,l,t.capture):r.detachEvent?r.detachEvent(Hf(o),l):r.addListener&&r.removeListener&&r.removeListener(l),(o=pa(r))?(Wc(o,t),o.g==0&&(o.src=null,r[Hc]=null)):ha(t)}}}function Hf(t){return t in Gc?Gc[t]:Gc[t]="on"+t}function Gf(t,r,o,l){var d=!0;if((t=pa(t))&&(r=t.a[r.toString()]))for(r=r.concat(),t=0;t<r.length;t++){var h=r[t];h&&h.capture==o&&!h.sa&&(h=$f(h,l),d=d&&h!==!1)}return d}function $f(t,r){var o=t.listener,l=t.La||t.src;return t.Ia&&On(t),o.call(l,r)}function Bw(t,r){if(t.sa)return!0;if(!Wf){if(!r)e:{r=["window","event"];for(var o=v,l=0;l<r.length;l++)if(o=o[r[l]],o==null){r=null;break e}r=o}if(l=r,r=new nt(l,this),o=!0,!(0>l.keyCode||l.returnValue!=null)){e:{var d=!1;if(l.keyCode==0)try{l.keyCode=-1;break e}catch{d=!0}(d||l.returnValue==null)&&(l.returnValue=!0)}for(l=[],d=r.g;d;d=d.parentNode)l.push(d);for(t=t.type,d=l.length-1;!r.h&&0<=d;d--){r.g=l[d];var h=Gf(l[d],t,!0,r);o=o&&h}for(d=0;!r.h&&d<l.length;d++)r.g=l[d],h=Gf(l[d],t,!1,r),o=o&&h}return o}return $f(t,new nt(r,this))}function pa(t){return t=t[Hc],t instanceof fa?t:null}var $c="__closure_events_fn_"+(1e9*Math.random()>>>0);function zc(t){return oe(t)?t:(t[$c]||(t[$c]=function(r){return t.handleEvent(r)}),t[$c])}function Ne(){ai.call(this),this.J=new fa(this),this.wb=this,this.Ha=null}W(Ne,ai),Ne.prototype[ds]=!0,Ne.prototype.Za=function(t){this.Ha=t},Ne.prototype.removeEventListener=function(t,r,o,l){li(this,t,r,o,l)};function Dn(t,r){var o,l=t.Ha;if(l)for(o=[];l;l=l.Ha)o.push(l);if(t=t.wb,l=r.type||r,E(r))r=new rn(r,t);else if(r instanceof rn)r.target=r.target||t;else{var d=r;r=new rn(l,t),Zo(r,d)}if(d=!0,o)for(var h=o.length-1;!r.h&&0<=h;h--){var g=r.g=o[h];d=ma(g,l,!0,r)&&d}if(r.h||(g=r.g=t,d=ma(g,l,!0,r)&&d,r.h||(d=ma(g,l,!1,r)&&d)),o)for(h=0;!r.h&&h<o.length;h++)g=r.g=o[h],d=ma(g,l,!1,r)&&d;return d}Ne.prototype.o=function(){if(Ne.K.o.call(this),this.J){var t=this.J,r;for(r in t.a){for(var o=t.a[r],l=0;l<o.length;l++)ha(o[l]);delete t.a[r],t.g--}}this.Ha=null};function ma(t,r,o,l){if(r=t.J.a[String(r)],!r)return!0;r=r.concat();for(var d=!0,h=0;h<r.length;++h){var g=r[h];if(g&&!g.sa&&g.capture==o){var y=g.listener,C=g.La||g.src;g.Ia&&Wc(t.J,g),d=y.call(C,l)!==!1&&d}}return d&&l.qb!=0}var gt={},zf=0;function qf(t,r){if(!t)throw Error("Event target element must be provided!");if(t=qc(t),gt[t]&&gt[t].length)for(var o=0;o<gt[t].length;o++)Dn(gt[t][o],r)}function jw(t){var r=qc(t.N());gt[r]&&gt[r].length&&(x0(gt[r],function(o){return o==t}),gt[r].length||delete gt[r])}function qc(t){return typeof t.a>"u"&&(t.a=zf,zf++),t.a}function ga(t){if(!t)throw Error("Event target element must be provided!");Ne.call(this),this.a=t}f(ga,Ne),ga.prototype.N=function(){return this.a},ga.prototype.register=function(){var t=qc(this.N());gt[t]?Ct(gt[t],this)||gt[t].push(this):gt[t]=[this]};function Kf(t){if(!t)return!1;try{return!!t.$goog_Thenable}catch{return!1}}function Kc(t,r){this.h=t,this.j=r,this.g=0,this.a=null}Kc.prototype.get=function(){if(0<this.g){this.g--;var t=this.a;this.a=t.next,t.next=null}else t=this.h();return t};function Yf(t,r){t.j(r),100>t.g&&(t.g++,r.next=t.a,t.a=r)}function Jf(){this.g=this.a=null}var Xf=new Kc(function(){return new Yc},function(t){t.reset()});Jf.prototype.add=function(t,r){var o=Xf.get();o.set(t,r),this.g?this.g.next=o:this.a=o,this.g=o};function Ww(){var t=Zf,r=null;return t.a&&(r=t.a,t.a=t.a.next,t.a||(t.g=null),r.next=null),r}function Yc(){this.next=this.g=this.a=null}Yc.prototype.set=function(t,r){this.a=t,this.g=r,this.next=null},Yc.prototype.reset=function(){this.next=this.g=this.a=null};function Qf(t){v.setTimeout(function(){throw t},0)}var Jc;function Vw(){var t=v.MessageChannel;if(typeof t>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!q("Presto")&&(t=function(){var d=document.createElement("IFRAME");d.style.display="none",d.src="",document.documentElement.appendChild(d);var h=d.contentWindow;d=h.document,d.open(),d.write(""),d.close();var g="callImmediate"+Math.random(),y=h.location.protocol=="file:"?"*":h.location.protocol+"//"+h.location.host;d=Z(function(C){(y=="*"||C.origin==y)&&C.data==g&&this.port1.onmessage()},this),h.addEventListener("message",d,!1),this.port1={},this.port2={postMessage:function(){h.postMessage(g,y)}}}),typeof t<"u"&&!q("Trident")&&!q("MSIE")){var r=new t,o={},l=o;return r.port1.onmessage=function(){if(w(o.next)){o=o.next;var d=o.gb;o.gb=null,d()}},function(d){l.next={gb:d},l=l.next,r.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(d){var h=document.createElement("SCRIPT");h.onreadystatechange=function(){h.onreadystatechange=null,h.parentNode.removeChild(h),h=null,d(),d=null},document.documentElement.appendChild(h)}:function(d){v.setTimeout(d,0)}}function Xc(t,r){va||Hw(),Qc||(va(),Qc=!0),Zf.add(t,r)}var va;function Hw(){if(v.Promise&&v.Promise.resolve){var t=v.Promise.resolve(void 0);va=function(){t.then(ep)}}else va=function(){var r=ep;!oe(v.setImmediate)||v.Window&&v.Window.prototype&&!q("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(Jc||(Jc=Vw()),Jc(r)):v.setImmediate(r)}}var Qc=!1,Zf=new Jf;function ep(){for(var t;t=Ww();){try{t.a.call(t.g)}catch(r){Qf(r)}Yf(Xf,t)}Qc=!1}function Pe(t){if(this.a=ci,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,t!=I)try{var r=this;t.call(void 0,function(o){ui(r,fs,o)},function(o){if(!(o instanceof zi))try{throw o instanceof Error?o:Error("Promise rejected.")}catch{}ui(r,sn,o)})}catch(o){ui(this,sn,o)}}var ci=0,fs=2,sn=3;function tp(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}tp.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var np=new Kc(function(){return new tp},function(t){t.reset()});function Zc(t,r,o){var l=np.get();return l.s=t,l.g=r,l.j=o,l}function Ie(t){if(t instanceof Pe)return t;var r=new Pe(I);return ui(r,fs,t),r}function $i(t){return new Pe(function(r,o){o(t)})}Pe.prototype.then=function(t,r,o){return rp(this,oe(t)?t:null,oe(r)?r:null,o)},Pe.prototype.$goog_Thenable=!0,i=Pe.prototype,i.fc=function(t,r){return t=Zc(t,t,r),t.h=!0,eu(this,t),this},i.Ca=function(t,r){return rp(this,null,t,r)},i.cancel=function(t){this.a==ci&&Xc(function(){var r=new zi(t);ip(this,r)},this)};function ip(t,r){if(t.a==ci)if(t.h){var o=t.h;if(o.g){for(var l=0,d=null,h=null,g=o.g;g&&(g.h||(l++,g.a==t&&(d=g),!(d&&1<l)));g=g.next)d||(h=g);d&&(o.a==ci&&l==1?ip(o,r):(h?(l=h,l.next==o.j&&(o.j=l),l.next=l.next.next):op(o),ap(o,d,sn,r)))}t.h=null}else ui(t,sn,r)}function eu(t,r){t.g||t.a!=fs&&t.a!=sn||sp(t),t.j?t.j.next=r:t.g=r,t.j=r}function rp(t,r,o,l){var d=Zc(null,null,null);return d.a=new Pe(function(h,g){d.s=r?function(y){try{var C=r.call(l,y);h(C)}catch(R){g(R)}}:h,d.g=o?function(y){try{var C=o.call(l,y);!w(C)&&y instanceof zi?g(y):h(C)}catch(R){g(R)}}:g}),d.a.h=t,eu(t,d),d.a}i.hc=function(t){this.a=ci,ui(this,fs,t)},i.ic=function(t){this.a=ci,ui(this,sn,t)};function ui(t,r,o){if(t.a==ci){t===o&&(r=sn,o=new TypeError("Promise cannot resolve to itself")),t.a=1;e:{var l=o,d=t.hc,h=t.ic;if(l instanceof Pe){eu(l,Zc(d||I,h||null,t));var g=!0}else if(Kf(l))l.then(d,h,t),g=!0;else{if(ye(l))try{var y=l.then;if(oe(y)){Gw(l,y,d,h,t),g=!0;break e}}catch(C){h.call(t,C),g=!0;break e}g=!1}}g||(t.A=o,t.a=r,t.h=null,sp(t),r!=sn||o instanceof zi||$w(t,o))}}function Gw(t,r,o,l,d){function h(C){y||(y=!0,l.call(d,C))}function g(C){y||(y=!0,o.call(d,C))}var y=!1;try{r.call(t,g,h)}catch(C){h(C)}}function sp(t){t.i||(t.i=!0,Xc(t.Hb,t))}function op(t){var r=null;return t.g&&(r=t.g,t.g=r.next,r.next=null),t.g||(t.j=null),r}i.Hb=function(){for(var t;t=op(this);)ap(this,t,this.a,this.A);this.i=!1};function ap(t,r,o,l){if(o==sn&&r.g&&!r.h)for(;t&&t.s;t=t.h)t.s=!1;if(r.a)r.a.h=null,lp(r,o,l);else try{r.h?r.s.call(r.j):lp(r,o,l)}catch(d){cp.call(null,d)}Yf(np,r)}function lp(t,r,o){r==fs?t.s.call(t.j,o):t.g&&t.g.call(t.j,o)}function $w(t,r){t.s=!0,Xc(function(){t.s&&cp.call(null,r)})}var cp=Qf;function zi(t){ft.call(this,t)}W(zi,ft),zi.prototype.name="cancel";function up(t,r,o){r||(r={}),o=o||window;var l=t instanceof mt?t:ra(typeof t.href<"u"?t.href:String(t));t=r.target||t.target;var d=[];for(h in r)switch(h){case"width":case"height":case"top":case"left":d.push(h+"="+r[h]);break;case"target":case"noopener":case"noreferrer":break;default:d.push(h+"="+(r[h]?1:0))}var h=d.join(",");return(q("iPhone")&&!q("iPod")&&!q("iPad")||q("iPad")||q("iPod"))&&o.navigator&&o.navigator.standalone&&t&&t!="_self"?(h=o.document.createElement("A"),l=l instanceof mt?l:Sf(l),h.href=Rn(l),h.setAttribute("target",t),r.noreferrer&&h.setAttribute("rel","noreferrer"),r=document.createEvent("MouseEvent"),r.initMouseEvent("click",!0,!0,o,1),h.dispatchEvent(r),o={}):r.noreferrer?(o=o.open("",t,h),r=Rn(l).toString(),o&&(ow&&r.indexOf(";")!=-1&&(r="'"+r.replace(/'/g,"%27")+"'"),o.opener=null,r=ss('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ui(r)+'">',null),o.document.write(sa(r)),o.document.close())):(o=o.open(Rn(l).toString(),t,h))&&r.noopener&&(o.opener=null),o}function dp(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function qi(t){up(t,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function _a(t,r){if(t=ye(t)&&t.nodeType==1?t:document.querySelector(String(t)),t==null)throw Error(r||"Cannot find element.");return t}function on(){return window.location.href}function zw(){var t=null;return new Pe(function(r){v.document.readyState=="complete"?r():(t=function(){r()},hs(window,"load",t))}).Ca(function(r){throw li(window,"load",t),r})}function qw(){for(var t=32,r=[];0<t;)r.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return r.join("")}function Kw(t,r,o){return o=o===void 0?{}:o,Object.keys(t).filter(function(l){return r.includes(l)}).reduce(function(l,d){return l[d]=t[d],l},o)}function Ln(t){var r=Xw;this.s=[],this.T=r,this.O=t||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}Ln.prototype.cancel=function(t){if(this.a)this.h instanceof Ln&&this.h.cancel();else{if(this.g){var r=this.g;delete this.g,t?r.cancel(t):(r.C--,0>=r.C&&r.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(t=new ms,ya(this),ps(this,!1,t))}},Ln.prototype.L=function(t,r){this.A=!1,ps(this,t,r)};function ps(t,r,o){t.a=!0,t.h=o,t.j=!r,pp(t)}function ya(t){if(t.a){if(!t.J)throw new ba;t.J=!1}}Ln.prototype.callback=function(t){ya(this),ps(this,!0,t)};function hp(t,r,o){t.s.push([r,o,void 0]),t.a&&pp(t)}Ln.prototype.then=function(t,r,o){var l,d,h=new Pe(function(g,y){l=g,d=y});return hp(this,l,function(g){g instanceof ms?h.cancel():d(g)}),h.then(t,r,o)},Ln.prototype.$goog_Thenable=!0;function fp(t){return M0(t.s,function(r){return oe(r[1])})}function pp(t){if(t.i&&t.a&&fp(t)){var r=t.i,o=wa[r];o&&(v.clearTimeout(o.a),delete wa[r]),t.i=0}t.g&&(t.g.C--,delete t.g),r=t.h;for(var l=o=!1;t.s.length&&!t.A;){var d=t.s.shift(),h=d[0],g=d[1];if(d=d[2],h=t.j?g:h)try{var y=h.call(d||t.O,r);w(y)&&(t.j=t.j&&(y==r||y instanceof Error),t.h=r=y),(Kf(r)||typeof v.Promise=="function"&&r instanceof v.Promise)&&(l=!0,t.A=!0)}catch(C){r=C,t.j=!0,fp(t)||(o=!0)}}t.h=r,l&&(y=Z(t.L,t,!0),l=Z(t.L,t,!1),r instanceof Ln?(hp(r,y,l),r.l=!0):r.then(y,l)),o&&(r=new mp(r),wa[r.a]=r,t.i=r.a)}function ba(){ft.call(this)}W(ba,ft),ba.prototype.message="Deferred has already fired",ba.prototype.name="AlreadyCalledError";function ms(){ft.call(this)}W(ms,ft),ms.prototype.message="Deferred was canceled",ms.prototype.name="CanceledError";function mp(t){this.a=v.setTimeout(Z(this.h,this),0),this.g=t}mp.prototype.h=function(){throw delete wa[this.a],this.g};var wa={};function Yw(t){var r={},o=r.document||document,l=If(t).toString(),d=document.createElement("SCRIPT"),h={rb:d,sb:void 0},g=new Ln(h),y=null,C=r.timeout!=null?r.timeout:5e3;return 0<C&&(y=window.setTimeout(function(){Ia(d,!0);var R=new tu(Zw,"Timeout reached for loading script "+l);ya(g),ps(g,!1,R)},C),h.sb=y),d.onload=d.onreadystatechange=function(){d.readyState&&d.readyState!="loaded"&&d.readyState!="complete"||(Ia(d,r.xc||!1,y),g.callback(null))},d.onerror=function(){Ia(d,!0,y);var R=new tu(Qw,"Error while loading script "+l);ya(g),ps(g,!1,R)},h=r.attributes||{},Zo(h,{type:"text/javascript",charset:"UTF-8"}),fw(d,h),hw(d,t),Jw(o).appendChild(d),g}function Jw(t){var r=(t||document).getElementsByTagName("HEAD");return r&&r.length!=0?r[0]:t.documentElement}function Xw(){if(this&&this.rb){var t=this.rb;t&&t.tagName=="SCRIPT"&&Ia(t,!0,this.sb)}}function Ia(t,r,o){o!=null&&v.clearTimeout(o),t.onload=I,t.onerror=I,t.onreadystatechange=I,r&&window.setTimeout(function(){si(t)},0)}var Qw=0,Zw=1;function tu(t,r){var o="Jsloader error (code #"+t+")";r&&(o+=": "+r),ft.call(this,o),this.code=t}W(tu,ft);function gs(){return v.google&&v.google.accounts&&v.google.accounts.id||null}function nu(t){this.a=t||gs(),this.h=!1,this.g=null}nu.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function gp(t,r,o){if(t.a&&r)return function(){return t.h=!0,new Pe(function(d){t.g=d,t.a.initialize({client_id:r,callback:d,auto_select:!o}),t.a.prompt()})}();if(r){var l=iu.Xa().load().then(function(){return t.a=gs(),gp(t,r,o)}).Ca(function(){return null});return Ie(l)}return Ie(null)}S(nu);var e1=new Vi(wf,"https://accounts.google.com/gsi/client");function iu(){this.a=null}iu.prototype.load=function(){var t=this;if(this.a)return this.a;var r=cw();return gs()?Ie():this.a=zw().then(function(){if(!gs())return new Pe(function(o,l){var d=setTimeout(function(){t.a=null,l(Error("Network error!"))},1e4);v.onGoogleLibraryLoad=function(){clearTimeout(d),o()},Ie(Yw(r)).then(function(){gs()&&o()}).Ca(function(h){clearTimeout(d),t.a=null,l(h)})})})},S(iu);function ru(t,r){this.a=t,this.g=r||function(o){throw o}}ru.prototype.confirm=function(t){return Ie(this.a.confirm(t)).Ca(this.g)};function su(t,r,o){this.reset(t,r,o,void 0,void 0)}su.prototype.a=null,su.prototype.reset=function(t,r,o,l,d){this.h=l||Qn(),this.j=t,this.s=r,this.g=o,delete this.a};function ou(t){this.s=t,this.a=this.h=this.j=this.g=null}function Ea(t,r){this.name=t,this.value=r}Ea.prototype.toString=function(){return this.name};var vp=new Ea("SEVERE",1e3),_p=new Ea("WARNING",900),yp=new Ea("CONFIG",700);function bp(t){return t.j?t.j:t.g?bp(t.g):(nn("Root logger has no level set."),null)}ou.prototype.log=function(t,r,o){if(t.value>=bp(this).value)for(oe(r)&&(r=r()),t=new su(t,String(r),this.s),o&&(t.a=o),o=this;o;){var l=o,d=t;if(l.a)for(var h=0;r=l.a[h];h++)r(d);o=o.g}};var au={},vs=null;function wp(){vs||(vs=new ou(""),au[""]=vs,vs.j=yp)}function Ip(t){wp();var r;if(!(r=au[t])){r=new ou(t);var o=t.lastIndexOf("."),l=t.substr(o+1);o=Ip(t.substr(0,o)),o.h||(o.h={}),o.h[l]=r,r.g=o,au[t]=r}return r}function Ca(){this.a=Qn()}var lu=null;Ca.prototype.set=function(t){this.a=t},Ca.prototype.reset=function(){this.set(Qn())},Ca.prototype.get=function(){return this.a};function _s(t){this.j=t||"",lu||(lu=new Ca),this.s=lu}_s.prototype.a=!0,_s.prototype.g=!0,_s.prototype.h=!1;function di(t){return 10>t?"0"+t:String(t)}function t1(t,r){t=(t.h-r)/1e3,r=t.toFixed(3);var o=0;if(1>t)o=2;else for(;100>t;)o++,t*=10;for(;0<o--;)r=" "+r;return r}function Ep(t){_s.call(this,t)}W(Ep,_s);function n1(t,r){var o=[];if(o.push(t.j," "),t.g){var l=new Date(r.h);o.push("[",di(l.getFullYear()-2e3)+di(l.getMonth()+1)+di(l.getDate())+" "+di(l.getHours())+":"+di(l.getMinutes())+":"+di(l.getSeconds())+"."+di(Math.floor(l.getMilliseconds()/10)),"] ")}return o.push("[",t1(r,t.s.get()),"s] "),o.push("[",r.g,"] "),o.push(r.s),t.h&&(r=r.a)&&o.push(`
`,r instanceof Error?r.message:r.toString()),t.a&&o.push(`
`),o.join("")}function Cp(){this.s=Z(this.h,this),this.a=new Ep,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Cp.prototype.h=function(t){function r(h){if(h){if(h.value>=vp.value)return"error";if(h.value>=_p.value)return"warn";if(h.value>=yp.value)return"log"}return"debug"}if(!this.j[t.g]){var o=n1(this.a,t),l=i1;if(l){var d=r(t.j);r1(l,d,o,t.a)}}};var i1=v.console;function r1(t,r,o,l){t[r]?t[r](o,l||""):t.log(o,l||"")}function vt(t,r){var o=cu;o&&o.log(vp,t,r)}var cu;cu=Ip("firebaseui");var uu=new Cp;if(uu.g!=1){var Sa;wp(),Sa=vs;var s1=uu.s;Sa.a||(Sa.a=[]),Sa.a.push(s1),uu.g=!0}function Mn(t){var r=cu;r&&r.log(_p,t,void 0)}function Sp(){this.a=(typeof document>"u"?null:document)||{cookie:""}}i=Sp.prototype,i.set=function(t,r,o,l,d,h){if(/[;=\s]/.test(t))throw Error('Invalid cookie name "'+t+'"');if(/[;\r\n]/.test(r))throw Error('Invalid cookie value "'+r+'"');w(o)||(o=-1),d=d?";domain="+d:"",l=l?";path="+l:"",h=h?";secure":"",o=0>o?"":o==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(Qn()+1e3*o).toUTCString(),this.a.cookie=t+"="+r+d+l+o+h},i.get=function(t,r){for(var o=t+"=",l=(this.a.cookie||"").split(";"),d=0,h;d<l.length;d++){if(h=pt(l[d]),h.lastIndexOf(o,0)==0)return h.substr(o.length);if(h==t)return""}return r},i.ja=function(){return du(this).keys},i.la=function(){return du(this).values},i.clear=function(){for(var t=du(this).keys,r=t.length-1;0<=r;r--){var o=t[r];this.get(o),this.set(o,"",0,void 0,void 0)}};function du(t){t=(t.a.cookie||"").split(";");for(var r=[],o=[],l,d,h=0;h<t.length;h++)d=pt(t[h]),l=d.indexOf("="),l==-1?(r.push(""),o.push(d)):(r.push(d.substring(0,l)),o.push(d.substring(l+1)));return{keys:r,values:o}}var Ta=new Sp;function Tp(){}function Ki(t,r,o,l){this.h=typeof t<"u"&&t!==null?t:-1,this.g=r||null,this.a=o||null,this.j=!!l}f(Ki,Tp),Ki.prototype.set=function(t,r){Ta.set(t,r,this.h,this.g,this.a,this.j)},Ki.prototype.get=function(t){return Ta.get(t)||null},Ki.prototype.ra=function(t){var r=this.g,o=this.a;Ta.get(t),Ta.set(t,"",0,r,o)};function hu(t,r){this.g=t,this.a=r||null}function kp(t){return{email:t.g,credential:t.a&&t.a.toJSON()}}function Rp(t){if(t&&t.email){var r=t.credential&&x.auth.AuthCredential.fromJSON(t.credential);return new hu(t.email,r)}return null}function Ap(t){this.a=t||null}function Np(t){for(var r=[],o=0,l=0;l<t.length;l++){var d=t.charCodeAt(l);255<d&&(r[o++]=d&255,d>>=8),r[o++]=d}return r}function o1(t){return L0(t,function(r){return r=r.toString(16),1<r.length?r:"0"+r}).join("")}function ka(t){for(this.i=t,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(Yi*(this.j+1)),t=0;t<this.g;t++)this.a[t]=[this.i[4*t],this.i[4*t+1],this.i[4*t+2],this.i[4*t+3]];var r=Array(4);for(t=this.g;t<Yi*(this.j+1);t++){if(r[0]=this.a[t-1][0],r[1]=this.a[t-1][1],r[2]=this.a[t-1][2],r[3]=this.a[t-1][3],t%this.g==0){var o=r,l=o[0];o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=l,Mp(r),r[0]^=Aa[t/this.g][0],r[1]^=Aa[t/this.g][1],r[2]^=Aa[t/this.g][2],r[3]^=Aa[t/this.g][3]}else 6<this.g&&t%this.g==4&&Mp(r);this.a[t]=Array(4),this.a[t][0]=this.a[t-this.g][0]^r[0],this.a[t][1]=this.a[t-this.g][1]^r[1],this.a[t][2]=this.a[t-this.g][2]^r[2],this.a[t][3]=this.a[t-this.g][3]^r[3]}}ka.prototype.A=16;var Yi=ka.prototype.A/4;function Pp(t,r){for(var o,l=0;l<Yi;l++)for(var d=0;4>d;d++)o=4*d+l,o=r[o],t.h[l][d]=o}function Op(t){for(var r=[],o=0;o<Yi;o++)for(var l=0;4>l;l++)r[4*l+o]=t.h[o][l];return r}function Ji(t,r){for(var o=0;4>o;o++)for(var l=0;4>l;l++)t.h[o][l]^=t.a[4*r+l][o]}function Ra(t,r){for(var o=0;4>o;o++)for(var l=0;4>l;l++)t.h[o][l]=r[t.h[o][l]]}function Dp(t){for(var r=1;4>r;r++)for(var o=0;4>o;o++)t.s[r][o]=t.h[r][o];for(r=1;4>r;r++)for(o=0;4>o;o++)t.h[r][o]=t.s[r][(o+r)%Yi]}function Lp(t){for(var r=1;4>r;r++)for(var o=0;4>o;o++)t.s[r][(o+r)%Yi]=t.h[r][o];for(r=1;4>r;r++)for(o=0;4>o;o++)t.h[r][o]=t.s[r][o]}function Mp(t){t[0]=Xi[t[0]],t[1]=Xi[t[1]],t[2]=Xi[t[2]],t[3]=Xi[t[3]]}var Xi=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],xp=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Aa=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Na=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Pa=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Oa=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Da=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],La=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Ma=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Fp(t,r){t=new ka(Bp(t)),r=Np(r);for(var o=r.splice(0,16),l="",d;o.length;){d=16-o.length;for(var h=0;h<d;h++)o.push(0);for(d=t,Pp(d,o),Ji(d,0),o=1;o<d.j;++o){Ra(d,Xi),Dp(d),h=d.h;for(var g=d.s[0],y=0;4>y;y++)g[0]=h[0][y],g[1]=h[1][y],g[2]=h[2][y],g[3]=h[3][y],h[0][y]=Na[g[0]]^Pa[g[1]]^g[2]^g[3],h[1][y]=g[0]^Na[g[1]]^Pa[g[2]]^g[3],h[2][y]=g[0]^g[1]^Na[g[2]]^Pa[g[3]],h[3][y]=Pa[g[0]]^g[1]^g[2]^Na[g[3]];Ji(d,o)}Ra(d,Xi),Dp(d),Ji(d,d.j),l+=o1(Op(d)),o=r.splice(0,16)}return l}function Up(t,r){t=new ka(Bp(t));for(var o=[],l=0;l<r.length;l+=2)o.push(parseInt(r.substring(l,l+2),16));var d=o.splice(0,16);for(r="";d.length;){for(l=t,Pp(l,d),Ji(l,l.j),d=1;d<l.j;++d){Lp(l),Ra(l,xp),Ji(l,l.j-d);for(var h=l.h,g=l.s[0],y=0;4>y;y++)g[0]=h[0][y],g[1]=h[1][y],g[2]=h[2][y],g[3]=h[3][y],h[0][y]=Ma[g[0]]^Da[g[1]]^La[g[2]]^Oa[g[3]],h[1][y]=Oa[g[0]]^Ma[g[1]]^Da[g[2]]^La[g[3]],h[2][y]=La[g[0]]^Oa[g[1]]^Ma[g[2]]^Da[g[3]],h[3][y]=Da[g[0]]^La[g[1]]^Oa[g[2]]^Ma[g[3]]}if(Lp(l),Ra(l,xp),Ji(l,0),l=Op(l),8192>=l.length)l=String.fromCharCode.apply(null,l);else{for(d="",h=0;h<l.length;h+=8192)d+=String.fromCharCode.apply(null,U0(l,h,h+8192));l=d}r+=l,d=o.splice(0,16)}return r.replace(/(\x00)+$/,"")}function Bp(t){t=Np(t.substring(0,32));for(var r=32-t.length,o=0;o<r;o++)t.push(0);return t}function jp(t){var r=[];return fu(new a1,t,r),r.join("")}function a1(){}function fu(t,r,o){if(r==null)o.push("null");else{if(typeof r=="object"){if(j(r)){var l=r;r=l.length,o.push("[");for(var d="",h=0;h<r;h++)o.push(d),fu(t,l[h],o),d=",";o.push("]");return}if(r instanceof String||r instanceof Number||r instanceof Boolean)r=r.valueOf();else{o.push("{"),d="";for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(h=r[l],typeof h!="function"&&(o.push(d),Vp(l,o),o.push(":"),fu(t,h,o),d=","));o.push("}");return}}switch(typeof r){case"string":Vp(r,o);break;case"number":o.push(isFinite(r)&&!isNaN(r)?String(r):"null");break;case"boolean":o.push(String(r));break;case"function":o.push("null");break;default:throw Error("Unknown type: "+typeof r)}}}var Wp={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},l1=/\uffff/.test("\uFFFF")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Vp(t,r){r.push('"',t.replace(l1,function(o){var l=Wp[o];return l||(l="\\u"+(o.charCodeAt(0)|65536).toString(16).substr(1),Wp[o]=l),l}),'"')}function ys(t){this.a=t}ys.prototype.set=function(t,r){w(r)?this.a.set(t,jp(r)):this.a.ra(t)},ys.prototype.get=function(t){try{var r=this.a.get(t)}catch{return}if(r!==null)try{return JSON.parse(r)}catch{throw"Storage: Invalid value was encountered"}};function xa(){}W(xa,Tp),xa.prototype.clear=function(){var t=q0(this.ha(!0)),r=this;es(t,function(o){r.ra(o)})};function Fa(t){this.a=t}W(Fa,xa);function Ua(t){if(!t.a)return!1;try{return t.a.setItem("__sak","1"),t.a.removeItem("__sak"),!0}catch{return!1}}i=Fa.prototype,i.set=function(t,r){try{this.a.setItem(t,r)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},i.get=function(t){if(t=this.a.getItem(t),!E(t)&&t!==null)throw"Storage mechanism: Invalid value was encountered";return t},i.ra=function(t){this.a.removeItem(t)},i.ha=function(t){var r=0,o=this.a,l=new Zn;return l.next=function(){if(r>=o.length)throw Bi;var d=o.key(r++);if(t)return d;if(d=o.getItem(d),!E(d))throw"Storage mechanism: Invalid value was encountered";return d},l},i.clear=function(){this.a.clear()},i.key=function(t){return this.a.key(t)};function pu(){var t=null;try{t=window.localStorage||null}catch{}this.a=t}W(pu,Fa);function mu(){var t=null;try{t=window.sessionStorage||null}catch{}this.a=t}W(mu,Fa);function Qi(t,r){this.g=t,this.a=r+"::"}W(Qi,xa),Qi.prototype.set=function(t,r){this.g.set(this.a+t,r)},Qi.prototype.get=function(t){return this.g.get(this.a+t)},Qi.prototype.ra=function(t){this.g.ra(this.a+t)},Qi.prototype.ha=function(t){var r=this.g.ha(!0),o=this,l=new Zn;return l.next=function(){for(var d=r.next();d.substr(0,o.a.length)!=o.a;)d=r.next();return t?d.substr(o.a.length):o.g.get(d)},l},Ua(new pu);var Hp,Gp=new mu;Hp=Ua(Gp)?new Qi(Gp,"firebaseui"):null;var gu=new ys(Hp),vu={name:"pendingEmailCredential",storage:gu},hi={name:"redirectStatus",storage:gu},bs={name:"redirectUrl",storage:gu},Zi={name:"emailForSignIn",storage:new ys(new Ki(3600,"/"))},ws={name:"pendingEncryptedCredential",storage:new ys(new Ki(3600,"/"))};function er(t,r){return t.storage.get(r?t.name+":"+r:t.name)}function st(t,r){t.storage.a.ra(r?t.name+":"+r:t.name)}function tr(t,r,o){t.storage.set(o?t.name+":"+o:t.name,r)}function $p(t){return er(bs,t)||null}function Vt(t){return t=er(vu,t)||null,Rp(t)}function Ht(t){st(vu,t)}function zp(t,r){tr(vu,kp(t),r)}function _u(t){return(t=er(hi,t)||null)&&typeof t.tenantId<"u"?new Ap(t.tenantId):null}function c1(t,r){tr(hi,{tenantId:t.a},r)}function u1(t,r){r=er(Zi,r);var o=null;if(r)try{var l=Up(t,r),d=JSON.parse(l);o=d&&d.email||null}catch{}return o}function d1(t,r){r=er(ws,r);var o=null;if(r)try{var l=Up(t,r);o=JSON.parse(l)}catch{}return Rp(o||null)}function h1(t,r,o){tr(ws,Fp(t,JSON.stringify(kp(r))),o)}function yu(){this.W={}}function Te(t,r,o){if(r.toLowerCase()in t.W)throw Error("Configuration "+r+" has already been defined.");t.W[r.toLowerCase()]=o}function bu(t,r,o){if(!(r.toLowerCase()in t.W))throw Error("Configuration "+r+" is not defined.");t.W[r.toLowerCase()]=o}yu.prototype.get=function(t){if(!(t.toLowerCase()in this.W))throw Error("Configuration "+t+" is not defined.");return this.W[t.toLowerCase()]};function wu(t,r){if(t=t.get(r),!t)throw Error("Configuration "+r+" is required.");return t}function Iu(){this.g=void 0,this.a={}}i=Iu.prototype,i.set=function(t,r){qp(this,t,r,!1)},i.add=function(t,r){qp(this,t,r,!0)};function qp(t,r,o,l){for(var d=0;d<r.length;d++){var h=r.charAt(d);t.a[h]||(t.a[h]=new Iu),t=t.a[h]}if(l&&t.g!==void 0)throw Error('The collection already contains the key "'+r+'"');t.g=o}i.get=function(t){e:{for(var r=this,o=0;o<t.length;o++)if(r=r.a[t.charAt(o)],!r){t=void 0;break e}t=r}return t?t.g:void 0},i.la=function(){var t=[];return Kp(this,t),t};function Kp(t,r){t.g!==void 0&&r.push(t.g);for(var o in t.a)Kp(t.a[o],r)}i.ja=function(){var t=[];return Yp(this,"",t),t};function Yp(t,r,o){t.g!==void 0&&o.push(r);for(var l in t.a)Yp(t.a[l],r+l,o)}i.clear=function(){this.a={},this.g=void 0};function Jp(t){for(this.a=t,this.g=new Iu,t=0;t<this.a.length;t++){var r=this.g.get("+"+this.a[t].b);r?r.push(this.a[t]):this.g.add("+"+this.a[t].b,[this.a[t]])}}function Ba(t,r){t=t.g;var o={},l=0;for(t.g!==void 0&&(o[l]=t.g);l<r.length;l++){var d=r.charAt(l);if(!(d in t.a))break;t=t.a[d],t.g!==void 0&&(o[l]=t.g)}for(var h in o)if(o.hasOwnProperty(h))return o[h];return[]}function fi(t){for(var r=0;r<it.length;r++)if(it[r].c===t)return it[r];return null}function Xp(t){t=t.toUpperCase();for(var r=[],o=0;o<it.length;o++)it[o].f===t&&r.push(it[o]);return r}function Qp(t){if(0<t.length&&t.charAt(0)=="+"){t=t.substring(1);for(var r=[],o=0;o<it.length;o++)it[o].b==t&&r.push(it[o]);t=r}else t=Xp(t);return t}function Zp(t){t.sort(function(r,o){return r.name.localeCompare(o.name,"en")})}var it=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"\xC5land Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"C\xF4te d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Cura\xE7ao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"R\xE9union",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barth\xE9lemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"S\xE3o Tom\xE9 and Pr\xEDncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];Zp(it);var Is=new Jp(it);function em(t,r){this.a=t,this.Aa=r}function tm(t){t=pt(t);var r=Ba(Is,t);return 0<r.length?new em(r[0].b=="1"?"1-US-0":r[0].c,pt(t.substr(r[0].b.length+1))):null}function Eu(t){var r=fi(t.a);if(!r)throw Error("Country ID "+t.a+" not found.");return"+"+r.b+t.Aa}function nm(t,r){for(var o=0;o<t.length;o++)if(!Ct(im,t[o])&&(nr!==null&&t[o]in nr||Ct(r,t[o])))return t[o];return null}var im=["emailLink","password","phone"],nr={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function f1(){this.a=new yu,Te(this.a,"autoUpgradeAnonymousUsers"),Te(this.a,"callbacks"),Te(this.a,"credentialHelper",Va),Te(this.a,"immediateFederatedRedirect",!1),Te(this.a,"popupMode",!1),Te(this.a,"privacyPolicyUrl"),Te(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),Te(this.a,"queryParameterForWidgetMode","mode"),Te(this.a,"signInFlow"),Te(this.a,"signInOptions"),Te(this.a,"signInSuccessUrl"),Te(this.a,"siteName"),Te(this.a,"tosUrl"),Te(this.a,"widgetUrl"),Te(this.a,"adminRestrictedOperation")}function ja(t){var r=!!t.a.get("autoUpgradeAnonymousUsers");return r&&!fm(t)&&vt('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),r}function Wa(t){t=t.a.get("signInOptions")||[];for(var r=[],o=0;o<t.length;o++){var l=t[o];l=ye(l)?l:{provider:l},l.provider&&r.push(l)}return r}function _t(t,r){t=Wa(t);for(var o=0;o<t.length;o++)if(t[o].provider===r)return t[o];return null}function ir(t){return Wa(t).map(function(r){return r.provider})}function Es(t,r){t=rm(t);for(var o=0;o<t.length;o++)if(t[o].providerId===r)return t[o];return null}function rm(t){return Wa(t).map(function(r){if(nr[r.provider]||Ct(E1,r.provider)){r={providerId:r.provider,S:r.providerName||null,V:r.fullLabel||null,ta:r.buttonColor||null,za:r.iconUrl?Rn(ra(r.iconUrl)).toString():null};for(var o in r)r[o]===null&&delete r[o];return r}return{providerId:r.provider,S:r.providerName||null,V:r.fullLabel||null,ta:r.buttonColor||null,za:r.iconUrl?Rn(ra(r.iconUrl)).toString():null,Ob:r.loginHintKey||null}})}function sm(t){var r=_t(t,x.auth.GoogleAuthProvider.PROVIDER_ID),o;if(o=r&&r.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(l in t=t.a.get("credentialHelper"),Ru)if(Ru[l]===t){var l=Ru[l];break e}}l=Va}o=l===ku}return o&&r.clientId||null}function om(t){return t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID),!!(t&&t.disableSignUp&&t.disableSignUp.status)}function pi(t){return t=t.a.get("adminRestrictedOperation")||null,!(!t||!t.status)}function p1(t){var r=null;if(Wa(t).forEach(function(l){l.provider==x.auth.PhoneAuthProvider.PROVIDER_ID&&ye(l.recaptchaParameters)&&!Array.isArray(l.recaptchaParameters)&&(r=Ec(l.recaptchaParameters))}),r){var o=[];C1.forEach(function(l){typeof r[l]<"u"&&(o.push(l),delete r[l])}),o.length&&Mn('The following provided "recaptchaParameters" keys are not allowed: '+o.join(", "))}return r}function m1(t){return(t=t.a.get("adminRestrictedOperation"))&&t.adminEmail?t.adminEmail:null}function g1(t){if(t=t.a.get("adminRestrictedOperation")||null){var r=t.helpLink||null;if(r&&typeof r=="string")return function(){qi(r)}}return null}function v1(t){return(t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp&&t.disableSignUp.adminEmail||null}function _1(t){if((t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp){var r=t.disableSignUp.helpLink||null;if(r&&typeof r=="string")return function(){qi(r)}}return null}function am(t,r){return t=(t=_t(t,r))&&t.scopes,Array.isArray(t)?t:[]}function lm(t,r){return t=(t=_t(t,r))&&t.customParameters,ye(t)?(t=Ec(t),r===x.auth.GoogleAuthProvider.PROVIDER_ID&&delete t.login_hint,r===x.auth.GithubAuthProvider.PROVIDER_ID&&delete t.login,t):null}function y1(t){t=_t(t,x.auth.PhoneAuthProvider.PROVIDER_ID);var r=null;return t&&typeof t.loginHint=="string"&&(r=tm(t.loginHint)),t&&t.defaultNationalNumber||r&&r.Aa||null}function b1(t){var r=(t=_t(t,x.auth.PhoneAuthProvider.PROVIDER_ID))&&t.defaultCountry||null;r=r&&Xp(r);var o=null;return t&&typeof t.loginHint=="string"&&(o=tm(t.loginHint)),r&&r[0]||o&&fi(o.a)||null}function Cu(t){if(t=_t(t,x.auth.PhoneAuthProvider.PROVIDER_ID),!t)return null;var r=t.whitelistedCountries,o=t.blacklistedCountries;if(typeof r<"u"&&(!Array.isArray(r)||r.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof o<"u"&&!Array.isArray(o))throw Error("BlacklistedCountries must be an array.");if(r&&o)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!r&&!o)return it;if(t=[],r){o={};for(var l=0;l<r.length;l++)for(var d=Qp(r[l]),h=0;h<d.length;h++)o[d[h].c]=d[h];for(var g in o)o.hasOwnProperty(g)&&t.push(o[g])}else{for(g={},r=0;r<o.length;r++)for(d=Qp(o[r]),l=0;l<d.length;l++)g[d[l].c]=d[l];for(d=0;d<it.length;d++)g!==null&&it[d].c in g||t.push(it[d])}return t}function cm(t){return wu(t.a,"queryParameterForWidgetMode")}function ke(t){var r=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,r&&!t&&Mn("Privacy Policy URL is missing, the link will not be displayed."),r&&t){if(typeof r=="function")return r;if(typeof r=="string")return function(){qi(r)}}return null}function Re(t){var r=t.a.get("tosUrl")||null,o=t.a.get("privacyPolicyUrl")||null;if(o&&!r&&Mn("Term of Service URL is missing, the link will not be displayed."),r&&o){if(typeof o=="function")return o;if(typeof o=="string")return function(){qi(o)}}return null}function um(t){return(t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.requireDisplayName<"u"?!!t.requireDisplayName:!0}function rr(t){return t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID),!(!t||t.signInMethod!==x.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function w1(t){return t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID),!(!t||!t.forceSameDevice)}function I1(t){if(rr(t)){var r={url:on(),handleCodeInApp:!0};(t=_t(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.emailLinkSignIn=="function"&&Zo(r,t.emailLinkSignIn()),t=r.url;var o=on();o instanceof Cn||(o=kc(o)),t instanceof Cn||(t=kc(t));var l=o;o=new Cn(l);var d=!!t.j;d?Cc(o,t.j):d=!!t.A,d?o.A=t.A:d=!!t.h,d?o.h=t.h:d=t.C!=null;var h=t.g;if(d)Sc(o,t.C);else if(d=!!t.g){if(h.charAt(0)!="/"&&(l.h&&!l.g?h="/"+h:(l=o.g.lastIndexOf("/"),l!=-1&&(h=o.g.substr(0,l+1)+h))),h==".."||h==".")h="";else if(h.indexOf("./")!=-1||h.indexOf("/.")!=-1){l=h.lastIndexOf("/",0)==0,h=h.split("/");for(var g=[],y=0;y<h.length;){var C=h[y++];C=="."?l&&y==h.length&&g.push(""):C==".."?((1<g.length||g.length==1&&g[0]!="")&&g.pop(),l&&y==h.length&&g.push("")):(g.push(C),l=!0)}h=g.join("/")}}return d?o.g=h:d=t.a.toString()!=="",d?Tc(o,df(t.a)):d=!!t.s,d&&(o.s=t.s),r.url=o.toString(),r}return null}function Su(t){var r=!!t.a.get("immediateFederatedRedirect"),o=ir(t);return t=dm(t),r&&o.length==1&&!Ct(im,o[0])&&t==Ha}function dm(t){t=t.a.get("signInFlow");for(var r in Au)if(Au[r]==t)return Au[r];return Ha}function Tu(t){return Cs(t).signInSuccess||null}function hm(t){return Cs(t).signInSuccessWithAuthResult||null}function fm(t){return Cs(t).signInFailure||null}function Cs(t){return t.a.get("callbacks")||{}}var ku="googleyolo",Va="none",Ru={nc:ku,NONE:Va},Ha="redirect",Au={qc:"popup",rc:Ha},Nu={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},E1=["anonymous"],C1=["sitekey","tabindex","callback","expired-callback"],Ss,sr,Pu,pm,ee={};function L(t,r,o,l){ee[t].apply(null,Array.prototype.slice.call(arguments,1))}function mm(t){return t.classList?t.classList:(t=t.className,E(t)&&t.match(/\S+/g)||[])}function Ts(t,r){return t.classList?t.classList.contains(r):Ct(mm(t),r)}function Gt(t,r){t.classList?t.classList.add(r):Ts(t,r)||(t.className+=0<t.className.length?" "+r:r)}function $t(t,r){t.classList?t.classList.remove(r):Ts(t,r)&&(t.className=D0(mm(t),function(o){return o!=r}).join(" "))}function Be(t){var r=t.type;switch(E(r)&&r.toLowerCase()){case"checkbox":case"radio":return t.checked?t.value:null;case"select-one":return r=t.selectedIndex,0<=r?t.options[r].value:null;case"select-multiple":r=[];for(var o,l=0;o=t.options[l];l++)o.selected&&r.push(o.value);return r.length?r:null;default:return t.value!=null?t.value:null}}function gm(t,r){var o=t.type;switch(E(o)&&o.toLowerCase()){case"checkbox":case"radio":t.checked=r;break;case"select-one":if(t.selectedIndex=-1,E(r)){for(var l=0;o=t.options[l];l++)if(o.value==r){o.selected=!0;break}}break;case"select-multiple":for(E(r)&&(r=[r]),l=0;o=t.options[l];l++)if(o.selected=!1,r)for(var d,h=0;d=r[h];h++)o.value==d&&(o.selected=!0);break;default:t.value=r!=null?r:""}}function S1(t){if(t.altKey&&!t.ctrlKey||t.metaKey||112<=t.keyCode&&123>=t.keyCode)return!1;if(ks(t.keyCode))return!0;switch(t.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!kt;default:return 166>t.keyCode||183<t.keyCode}}function vm(t,r,o,l,d,h){if(et&&!ii("525"))return!0;if(kn&&d)return ks(t);if(d&&!l)return!1;if(!kt){typeof r=="number"&&(r=Ou(r));var g=r==17||r==18||kn&&r==91;if((!o||kn)&&g||kn&&r==16&&(l||h))return!1}if((et||Tn)&&l&&o)switch(t){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(be&&l&&r==t)return!1;switch(t){case 13:return kt?h||d?!1:!(o&&l):!0;case 27:return!(et||Tn||kt)}return kt&&(l||d||h)?!1:ks(t)}function ks(t){if(48<=t&&57>=t||96<=t&&106>=t||65<=t&&90>=t||(et||Tn)&&t==0)return!0;switch(t){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return kt;default:return!1}}function Ou(t){if(kt)t=T1(t);else if(kn&&et)switch(t){case 93:t=91}return t}function T1(t){switch(t){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return t}}function or(t){Ne.call(this),this.a=t,Rt(t,"keydown",this.g,!1,this),Rt(t,"click",this.h,!1,this)}W(or,Ne),or.prototype.g=function(t){(t.keyCode==13||et&&t.keyCode==3)&&_m(this,t)},or.prototype.h=function(t){_m(this,t)};function _m(t,r){var o=new bm(r);if(Dn(t,o)){o=new ym(r);try{Dn(t,o)}finally{r.stopPropagation()}}}or.prototype.o=function(){or.K.o.call(this),li(this.a,"keydown",this.g,!1,this),li(this.a,"click",this.h,!1,this),delete this.a};function ym(t){nt.call(this,t.a),this.type="action"}W(ym,nt);function bm(t){nt.call(this,t.a),this.type="beforeaction"}W(bm,nt);function ar(t){Ne.call(this),this.a=t,t=be?"focusout":"blur",this.g=Rt(this.a,be?"focusin":"focus",this,!be),this.h=Rt(this.a,t,this,!be)}W(ar,Ne),ar.prototype.handleEvent=function(t){var r=new nt(t.a);r.type=t.type=="focusin"||t.type=="focus"?"focusin":"focusout",Dn(this,r)},ar.prototype.o=function(){ar.K.o.call(this),On(this.g),On(this.h),delete this.a};function Ga(t,r){Ne.call(this),this.g=t||1,this.a=r||v,this.h=Z(this.gc,this),this.j=Qn()}W(Ga,Ne),i=Ga.prototype,i.Ka=!1,i.aa=null,i.gc=function(){if(this.Ka){var t=Qn()-this.j;0<t&&t<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-t):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),Dn(this,"tick"),this.Ka&&($a(this),this.start()))}},i.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=Qn())};function $a(t){t.Ka=!1,t.aa&&(t.a.clearTimeout(t.aa),t.aa=null)}i.o=function(){Ga.K.o.call(this),$a(this),delete this.a};function k1(t,r){if(oe(t))r&&(t=Z(t,r));else if(t&&typeof t.handleEvent=="function")t=Z(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(0)?-1:v.setTimeout(t,0)}function lr(t){ai.call(this),this.g=t,this.a={}}W(lr,ai);var wm=[];function cr(t,r,o,l){j(o)||(o&&(wm[0]=o.toString()),o=wm);for(var d=0;d<o.length;d++){var h=Rt(r,o[d],l||t.handleEvent,!1,t.g||t);if(!h)break;t.a[h.key]=h}}function Im(t){rf(t.a,function(r,o){this.a.hasOwnProperty(o)&&On(r)},t),t.a={}}lr.prototype.o=function(){lr.K.o.call(this),Im(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rs(t){Ne.call(this),this.a=null,this.g=t,t=be||Tn||et&&!ii("531")&&t.tagName=="TEXTAREA",this.h=new lr(this),cr(this.h,this.g,t?["keydown","paste","cut","drop","input"]:"input",this)}W(Rs,Ne),Rs.prototype.handleEvent=function(t){if(t.type=="input")be&&ii(10)&&t.keyCode==0&&t.j==0||(Du(this),Dn(this,Em(t)));else if(t.type!="keydown"||S1(t)){var r=t.type=="keydown"?this.g.value:null;be&&t.keyCode==229&&(r=null);var o=Em(t);Du(this),this.a=k1(function(){this.a=null,this.g.value!=r&&Dn(this,o)},this)}};function Du(t){t.a!=null&&(v.clearTimeout(t.a),t.a=null)}function Em(t){return t=new nt(t.a),t.type="input",t}Rs.prototype.o=function(){Rs.K.o.call(this),this.h.m(),Du(this),delete this.g};function As(t,r){Ne.call(this),t&&(this.Oa&&Rm(this),this.qa=t,this.Na=Rt(this.qa,"keypress",this,r),this.Ya=Rt(this.qa,"keydown",this.Jb,r,this),this.Oa=Rt(this.qa,"keyup",this.Kb,r,this))}W(As,Ne),i=As.prototype,i.qa=null,i.Na=null,i.Ya=null,i.Oa=null,i.R=-1,i.X=-1,i.Ua=!1;var Cm={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Sm={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Tm=!et||ii("525"),km=kn&&kt;i=As.prototype,i.Jb=function(t){(et||Tn)&&(this.R==17&&!t.ctrlKey||this.R==18&&!t.altKey||kn&&this.R==91&&!t.metaKey)&&(this.X=this.R=-1),this.R==-1&&(t.ctrlKey&&t.keyCode!=17?this.R=17:t.altKey&&t.keyCode!=18?this.R=18:t.metaKey&&t.keyCode!=91&&(this.R=91)),Tm&&!vm(t.keyCode,this.R,t.shiftKey,t.ctrlKey,t.altKey,t.metaKey)?this.handleEvent(t):(this.X=Ou(t.keyCode),km&&(this.Ua=t.altKey))},i.Kb=function(t){this.X=this.R=-1,this.Ua=t.altKey},i.handleEvent=function(t){var r=t.a,o=r.altKey;if(be&&t.type=="keypress")var l=this.X,d=l!=13&&l!=27?r.keyCode:0;else(et||Tn)&&t.type=="keypress"?(l=this.X,d=0<=r.charCode&&63232>r.charCode&&ks(l)?r.charCode:0):vf&&!et?(l=this.X,d=ks(l)?r.keyCode:0):(t.type=="keypress"?(km&&(o=this.Ua),r.keyCode==r.charCode?32>r.keyCode?(l=r.keyCode,d=0):(l=this.X,d=r.charCode):(l=r.keyCode||this.X,d=r.charCode||0)):(l=r.keyCode||this.X,d=r.charCode||0),kn&&d==63&&l==224&&(l=191));var h=l=Ou(l);l?63232<=l&&l in Cm?h=Cm[l]:l==25&&t.shiftKey&&(h=9):r.keyIdentifier&&r.keyIdentifier in Sm&&(h=Sm[r.keyIdentifier]),kt&&Tm&&t.type=="keypress"&&!vm(h,this.R,t.shiftKey,t.ctrlKey,o,t.metaKey)||(t=h==this.R,this.R=h,r=new Am(h,d,t,r),r.altKey=o,Dn(this,r))},i.N=function(){return this.qa};function Rm(t){t.Na&&(On(t.Na),On(t.Ya),On(t.Oa),t.Na=null,t.Ya=null,t.Oa=null),t.qa=null,t.R=-1,t.X=-1}i.o=function(){As.K.o.call(this),Rm(this)};function Am(t,r,o,l){nt.call(this,l),this.type="key",this.keyCode=t,this.j=r,this.repeat=o}W(Am,nt);function ur(t,r,o,l){this.top=t,this.right=r,this.bottom=o,this.left=l}ur.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},ur.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},ur.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},ur.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function za(t,r){var o=os(t);return o.defaultView&&o.defaultView.getComputedStyle&&(t=o.defaultView.getComputedStyle(t,null))&&(t[r]||t.getPropertyValue(r))||""}function Nm(t){try{var r=t.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return be&&t.ownerDocument.body&&(t=t.ownerDocument,r.left-=t.documentElement.clientLeft+t.body.clientLeft,r.top-=t.documentElement.clientTop+t.body.clientTop),r}function R1(t,r){r=r||aa(document);var o=r||aa(document),l=Pm(t),d=Pm(o);if(!be||9<=Number(rs)){g=za(o,"borderLeftWidth");var h=za(o,"borderRightWidth");y=za(o,"borderTopWidth"),C=za(o,"borderBottomWidth"),h=new ur(parseFloat(y),parseFloat(h),parseFloat(C),parseFloat(g))}else{var g=qa(o,"borderLeft");h=qa(o,"borderRight");var y=qa(o,"borderTop"),C=qa(o,"borderBottom");h=new ur(y,h,C,g)}o==aa(document)?(g=l.a-o.scrollLeft,l=l.g-o.scrollTop,!be||10<=Number(rs)||(g+=h.left,l+=h.top)):(g=l.a-d.a-h.left,l=l.g-d.g-h.top),d=t.offsetWidth,h=t.offsetHeight,y=et&&!d&&!h,w(d)&&!y||!t.getBoundingClientRect?t=new Dc(d,h):(t=Nm(t),t=new Dc(t.right-t.left,t.bottom-t.top)),d=o.clientHeight-t.height,h=o.scrollLeft,y=o.scrollTop,h+=Math.min(g,Math.max(g-(o.clientWidth-t.width),0)),y+=Math.min(l,Math.max(l-d,0)),o=new Nn(h,y),r.scrollLeft=o.a,r.scrollTop=o.g}function Pm(t){var r=os(t),o=new Nn(0,0),l=r?os(r):document;return l=!be||9<=Number(rs)||oa(l).a.compatMode=="CSS1Compat"?l.documentElement:l.body,t==l||(t=Nm(t),l=oa(r).a,r=aa(l),l=l.parentWindow||l.defaultView,r=be&&ii("10")&&l.pageYOffset!=r.scrollTop?new Nn(r.scrollLeft,r.scrollTop):new Nn(l.pageXOffset||r.scrollLeft,l.pageYOffset||r.scrollTop),o.a=t.left+r.a,o.g=t.top+r.g),o}var Om={thin:2,medium:4,thick:6};function qa(t,r){if((t.currentStyle?t.currentStyle[r+"Style"]:null)=="none")return 0;var o=t.currentStyle?t.currentStyle[r+"Width"]:null;if(o in Om)t=Om[o];else if(/^\d+px?$/.test(o))t=parseInt(o,10);else{r=t.style.left;var l=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,t.style.left=o,o=t.style.pixelLeft,t.style.left=r,t.runtimeStyle.left=l,t=+o}return t}function Lu(){}S(Lu),Lu.prototype.a=0;function mi(t){Ne.call(this),this.s=t||oa(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}W(mi,Ne),i=mi.prototype,i.Lb=Lu.Xa(),i.N=function(){return this.g};function J(t,r){return t.g?Mc(r,t.g||t.s.a):null}function Ns(t){return t.L||(t.L=new lr(t)),t.L}i.Za=function(t){if(this.Y&&this.Y!=t)throw Error("Method not supported");mi.K.Za.call(this,t)},i.kb=function(){this.g=this.s.a.createElement("DIV")},i.render=function(t){if(this.na)throw Error("Component already rendered");this.g||this.kb(),t?t.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},i.v=function(){this.na=!0,Mu(this,function(t){!t.na&&t.N()&&t.v()})},i.ya=function(){Mu(this,function(t){t.na&&t.ya()}),this.L&&Im(this.L),this.na=!1},i.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Mu(this,function(t){t.m()}),this.g&&si(this.g),this.Y=this.g=this.oa=this.Ea=null,mi.K.o.call(this)};function Mu(t,r){t.Ea&&es(t.Ea,r,void 0)}i.removeChild=function(t,r){if(t){var o=E(t)?t:t.cb||(t.cb=":"+(t.Lb.a++).toString(36));if(this.oa&&o?(t=this.oa,t=(t!==null&&o in t?t[o]:void 0)||null):t=null,o&&t){var l=this.oa;if(o in l&&delete l[o],ef(this.Ea,t),r&&(t.ya(),t.g&&si(t.g)),r=t,r==null)throw Error("Unable to set parent component");r.Y=null,mi.K.Za.call(r,null)}}if(!t)throw Error("Child is not in parent component");return t};function Ee(t,r){var o=Pf(t,"firebaseui-textfield");r?($t(t,"firebaseui-input-invalid"),Gt(t,"firebaseui-input"),o&&$t(o,"firebaseui-textfield-invalid")):($t(t,"firebaseui-input"),Gt(t,"firebaseui-input-invalid"),o&&Gt(o,"firebaseui-textfield-invalid"))}function dr(t,r,o){r=new Rs(r),cs(t,Et(us,r)),cr(Ns(t),r,"input",o)}function Ps(t,r,o){r=new As(r),cs(t,Et(us,r)),cr(Ns(t),r,"key",function(l){l.keyCode==13&&(l.stopPropagation(),l.preventDefault(),o(l))})}function A1(t,r,o){r=new ar(r),cs(t,Et(us,r)),cr(Ns(t),r,"focusin",o)}function N1(t,r,o){r=new ar(r),cs(t,Et(us,r)),cr(Ns(t),r,"focusout",o)}function ge(t,r,o){r=new or(r),cs(t,Et(us,r)),cr(Ns(t),r,"action",function(l){l.stopPropagation(),l.preventDefault(),o(l)})}function yt(t){Gt(t,"firebaseui-hidden")}function je(t,r){r&&xc(t,r),$t(t,"firebaseui-hidden")}function hr(t){return!Ts(t,"firebaseui-hidden")&&t.style.display!="none"}function fr(t){t=t||{};var r=t.email,o=t.disabled,l='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return l=t.wc?l+"Enter new email address":l+"Email",l+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+tt(r!=null?r:"")+'"'+(o?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',D(l)}function ot(t){t=t||{},t=t.label;var r='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return r=t?r+U(t):r+"Next",D(r+"</button>")}function xu(){var t=""+ot({label:we("Sign In")});return D(t)}function Dm(){var t=""+ot({label:we("Save")});return D(t)}function At(){var t=""+ot({label:we("Continue")});return D(t)}function Lm(t){t=t||{},t=t.label;var r='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return r=t?r+U(t):r+"Choose password",D(r+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function Mm(){var t={},r='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return r=t.current?r+"Current password":r+"Password",D(r+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function xm(){return D('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function bt(t){t=t||{},t=t.label;var r='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return r=t?r+U(t):r+"Cancel",D(r+"</button>")}function Ye(t){var r="";return t.F&&t.D&&(r+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),D(r)}function pr(t){var r="";return t.F&&t.D&&(r+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),D(r)}function Fm(t){return t='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+U(t.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',D(t)}Fm.a="firebaseui.auth.soy2.element.infoBar";function Um(t){var r=t.content;return t=t.Ab,D('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(t?" "+tt(t):"")+'">'+U(r)+"</dialog>")}function Bm(t){var r=t.message;return D(Um({content:Lf('<div class="firebaseui-dialog-icon-wrapper"><div class="'+tt(t.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+U(r)+"</div>")}))}Bm.a="firebaseui.auth.soy2.element.progressDialog";function jm(t){var r='<div class="firebaseui-list-box-actions">';t=t.items;for(var o=t.length,l=0;l<o;l++){var d=t[l];r+='<button type="button" data-listboxid="'+tt(d.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(d.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+tt(d.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+U(d.label)+"</div></button>"}return r=""+Um({Ab:we("firebaseui-list-box-dialog"),content:Lf(r+"</div>")}),D(r)}jm.a="firebaseui.auth.soy2.element.listBoxDialog";function Ka(t){return t=t||{},D(t.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}Ka.a="firebaseui.auth.soy2.element.busyIndicator";function xn(t,r){return t=t||{},t=t.ga,Q(t.S?t.S:r.hb[t.providerId]?""+r.hb[t.providerId]:t.providerId&&t.providerId.indexOf("saml.")==0||t.providerId&&t.providerId.indexOf("oidc.")==0?t.providerId.substring(5):""+t.providerId)}function Fu(t){Wm(t,"upgradeElement")}function Uu(t){Wm(t,"downgradeElements")}var P1=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Wm(t,r){t&&window.componentHandler&&window.componentHandler[r]&&P1.forEach(function(o){Ts(t,o)&&window.componentHandler[r](t),es(Lc(o,t),function(l){window.componentHandler[r](l)})})}function Vm(t,r,o){if(Ya.call(this),document.body.appendChild(t),t.showModal||window.dialogPolyfill.registerDialog(t),t.showModal(),Fu(t),r&&ge(this,t,function(h){var g=t.getBoundingClientRect();(h.clientX<g.left||g.left+g.width<h.clientX||h.clientY<g.top||g.top+g.height<h.clientY)&&Ya.call(this)}),!o){var l=this.N().parentElement||this.N().parentNode;if(l){var d=this;this.da=function(){if(t.open){var h=t.getBoundingClientRect().height,g=l.getBoundingClientRect().height,y=l.getBoundingClientRect().top-document.body.getBoundingClientRect().top,C=l.getBoundingClientRect().left-document.body.getBoundingClientRect().left,R=t.getBoundingClientRect().width,M=l.getBoundingClientRect().width;t.style.top=(y+(g-h)/2).toString()+"px",h=C+(M-R)/2,t.style.left=h.toString()+"px",t.style.right=(document.body.getBoundingClientRect().width-h-R).toString()+"px"}else window.removeEventListener("resize",d.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ya(){var t=Bu.call(this);t&&(Uu(t),t.open&&t.close(),si(t),this.da&&window.removeEventListener("resize",this.da))}function Bu(){return Mc("firebaseui-id-dialog")}function Hm(){si(Gm.call(this))}function Gm(){return J(this,"firebaseui-id-info-bar")}function $m(){return J(this,"firebaseui-id-dismiss-info-bar")}var O1={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function ju(t,r,o){rn.call(this,t,r);for(var l in o)this[l]=o[l]}W(ju,rn);function T(t,r,o,l,d){mi.call(this,o),this.fb=t,this.eb=r,this.Fa=!1,this.Ga=l||null,this.A=this.ca=null,this.Z=Ec(O1),Zo(this.Z,d||{})}W(T,mi),i=T.prototype,i.kb=function(){var t=as(this.fb,this.eb,this.Z,this.s);Fu(t),this.g=t},i.v=function(){if(T.K.v.call(this),qf(me(this),new ju("pageEnter",me(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var t=this.Z.F;ge(this,this.bb(),function(){t()})}if(this.ab()&&this.Z.D){var r=this.Z.D;ge(this,this.ab(),function(){r()})}},i.ya=function(){qf(me(this),new ju("pageExit",me(this),{pageId:this.Ga})),T.K.ya.call(this)},i.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Uu(this.N()),T.K.o.call(this)};function D1(t){t.Fa=!0;var r=Ts(t.N(),"firebaseui-use-spinner");t.ca=window.setTimeout(function(){t.N()&&t.A===null&&(t.A=as(Ka,{tb:r},null,t.s),t.N().appendChild(t.A),Fu(t.A))},500)}i.I=function(t,r,o,l){function d(){if(h.T)return null;h.Fa=!1,window.clearTimeout(h.ca),h.ca=null,h.A&&(Uu(h.A),si(h.A),h.A=null)}var h=this;return h.Fa?null:(D1(h),t.apply(null,r).then(o,l).then(d,d))};function me(t){return t.N().parentElement||t.N().parentNode}function Os(t,r,o){Ps(t,r,function(){o.focus()})}function mr(t,r,o){Ps(t,r,function(){o()})}de(T.prototype,{a:function(t){Hm.call(this);var r=as(Fm,{message:t},null,this.s);this.N().appendChild(r),ge(this,$m.call(this),function(){si(r)})},yc:Hm,Ac:Gm,zc:$m,$:function(t,r){t=as(Bm,{Ma:t,message:r},null,this.s),Vm.call(this,t)},h:Ya,Cb:Bu,Cc:function(){return J(this,"firebaseui-tos")},bb:function(){return J(this,"firebaseui-tos-link")},ab:function(){return J(this,"firebaseui-pp-link")},Dc:function(){return J(this,"firebaseui-tos-list")}});function zm(t,r,o){t=t||{},r=t.Va;var l=t.ia;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+fr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?bt(null):"")+ot(null)+'</div></div><div class="firebaseui-card-footer">'+(l?pr(o):Ye(o))+"</div></form></div>",D(t)}zm.a="firebaseui.auth.soy2.page.signIn";function qm(t,r,o){return t=t||{},r=t.ia,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+fr(t)+Mm()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+xm()+'</div><div class="firebaseui-form-actions">'+xu()+'</div></div><div class="firebaseui-card-footer">'+(r?pr(o):Ye(o))+"</div></form></div>",D(t)}qm.a="firebaseui.auth.soy2.page.passwordSignIn";function Km(t,r,o){t=t||{};var l=t.Tb;r=t.Ta;var d=t.ia,h='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+fr(t);return l?(t=t||{},t=t.name,t='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+tt(t!=null?t:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',t=D(t)):t="",o=h+t+Lm(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?bt(null):"")+Dm()+'</div></div><div class="firebaseui-card-footer">'+(d?pr(o):Ye(o))+"</div></form></div>",D(o)}Km.a="firebaseui.auth.soy2.page.passwordSignUp";function Ym(t,r,o){return t=t||{},r=t.Ta,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+fr(t)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?bt(null):"")+ot({label:we("Send")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(t)}Ym.a="firebaseui.auth.soy2.page.passwordRecovery";function Jm(t,r,o){r=t.G;var l="";return t="Follow the instructions sent to <strong>"+(U(t.email)+"</strong> to recover your password"),l+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">',r&&(l+='<div class="firebaseui-form-actions">'+ot({label:we("Done")})+"</div>"),l+='</div><div class="firebaseui-card-footer">'+Ye(o)+"</div></div>",D(l)}Jm.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function Xm(t,r,o){return D('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Ka(null)+"</div></div>")}Xm.a="firebaseui.auth.soy2.page.callback";function Qm(t,r,o){return D('<div class="firebaseui-container firebaseui-id-page-spinner">'+Ka({tb:!0})+"</div>")}Qm.a="firebaseui.auth.soy2.page.spinner";function Zm(){return D('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}Zm.a="firebaseui.auth.soy2.page.blank";function eg(t,r,o){r="",t="A sign-in email with additional instructions was sent to <strong>"+(U(t.email)+"</strong>. Check your email to complete sign-in.");var l=D('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+l+'</div><div class="firebaseui-form-actions">'+bt({label:we("Back")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}eg.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function tg(t,r,o){return t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+D('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+bt({label:we("Back")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(t)}tg.a="firebaseui.auth.soy2.page.emailNotReceived";function ng(t,r,o){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+fr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt(null)+ot(null)+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(t)}ng.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function ig(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt({label:we("Dismiss")})+"</div></div></div>";return D(t)}ig.a="firebaseui.auth.soy2.page.differentDeviceError";function rg(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt({label:we("Dismiss")})+"</div></div></div>";return D(t)}rg.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function sg(t,r,o){return r="",t="You\u2019ve already used <strong>"+(U(t.email)+"</strong> to sign in. Enter your password for that account."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+t+"</p>"+Mm()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+xm()+'</div><div class="firebaseui-form-actions">'+xu()+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}sg.a="firebaseui.auth.soy2.page.passwordLinking";function og(t,r,o){var l=t.email;return r="",t=""+xn(t,o),t=we(t),l="You\u2019ve already used <strong>"+(U(l)+("</strong>. You can connect your <strong>"+(U(t)+("</strong> account with <strong>"+(U(l)+"</strong> by signing in with email link below."))))),t="For this flow to successfully connect your "+(U(t)+" account with this email, you have to open the link on the same device or browser."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+l+'<p class="firebaseui-text firebaseui-text-justify">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+xu()+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}og.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function ag(t,r,o){r="";var l=""+xn(t,o);return l=we(l),t="You originally intended to connect <strong>"+(U(l)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),l="If you still want to connect your <strong>"+(U(l)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+t+'</p><p class="firebaseui-text firebaseui-text-justify">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+At()+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}ag.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function lg(t,r,o){var l=t.email;return r="",t=""+xn(t,o),t=we(t),l="You\u2019ve already used <strong>"+(U(l)+("</strong>. Sign in with "+(U(t)+" to continue."))),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ot({label:we("Sign in with "+t)})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}lg.a="firebaseui.auth.soy2.page.federatedLinking";function cg(t,r,o){t=t||{};var l=t.kc;r=t.yb,t=t.Eb;var d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return l?(l="<strong>"+(U(l)+"</strong> is not authorized to view the requested page."),d+=l):d+="User is not authorized to view the requested page.",d+="</p>",r&&(r="Please contact <strong>"+(U(r)+"</strong> for authorization."),d+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+r+"</p>"),d+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',t&&(d+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),d+='</div><div class="firebaseui-form-actions">'+bt({label:we("Back")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(d)}cg.a="firebaseui.auth.soy2.page.unauthorizedUser";function ug(t,r,o){return r="",t="To continue sign in with <strong>"+(U(t.email)+"</strong> on this device, you have to recover the password."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt(null)+ot({label:we("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}ug.a="firebaseui.auth.soy2.page.unsupportedProvider";function dg(t){var r="",o='<p class="firebaseui-text">for <strong>'+(U(t.email)+"</strong></p>");return r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+o+Lm(ww(t))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dm()+"</div></div></form></div>",D(r)}dg.a="firebaseui.auth.soy2.page.passwordReset";function hg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}hg.a="firebaseui.auth.soy2.page.passwordResetSuccess";function fg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}fg.a="firebaseui.auth.soy2.page.passwordResetFailure";function pg(t){var r=t.G,o="";return t="Your sign-in email address has been changed back to <strong>"+(U(t.email)+"</strong>."),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(r?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></form></div>",D(o)}pg.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function mg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}mg.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function gg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}gg.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function vg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}vg.a="firebaseui.auth.soy2.page.emailVerificationFailure";function _g(t){var r=t.G,o="";return t="You can now sign in with your new email <strong>"+(U(t.email)+"</strong>."),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">'+(r?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(o)}_g.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function yg(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}yg.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function bg(t){var r=t.factorId,o=t.phoneNumber;t=t.G;var l='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(r){case"phone":r="The <strong>"+(U(r)+(" "+(U(o)+"</strong> was removed as a second authentication step."))),l+=r;break;default:l+="The device or app was removed as a second authentication step."}return l+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(t?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></form></div>",D(l)}bg.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function wg(t){return t=t||{},t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(t.G?'<div class="firebaseui-form-actions">'+At()+"</div>":"")+"</div></div>",D(t)}wg.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function Ig(t){var r=t.zb;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+U(t.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',r&&(t+=ot({label:we("Retry")})),D(t+"</div></div></div>")}Ig.a="firebaseui.auth.soy2.page.recoverableError";function Eg(t){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+U(t.errorMessage)+"</p></div></div>",D(t)}Eg.a="firebaseui.auth.soy2.page.unrecoverableError";function Cg(t,r,o){var l=t.Qb;return r="",t="Continue with "+(U(t.jc)+"?"),l="You originally wanted to sign in with "+U(l),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+t+'</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt(null)+ot({label:we("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form></div>",D(r)}Cg.a="firebaseui.auth.soy2.page.emailMismatch";function Sg(t,r,o){var l='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=t.Sb,r=t.length;for(var d=0;d<r;d++){var h={ga:t[d]},g=o;h=h||{};var y=h.ga,C=h;C=C||{};var R="";switch(C.ga.providerId){case"google.com":R+="firebaseui-idp-google";break;case"github.com":R+="firebaseui-idp-github";break;case"facebook.com":R+="firebaseui-idp-facebook";break;case"twitter.com":R+="firebaseui-idp-twitter";break;case"phone":R+="firebaseui-idp-phone";break;case"anonymous":R+="firebaseui-idp-anonymous";break;case"password":R+="firebaseui-idp-password";break;default:R+="firebaseui-idp-generic"}C='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+tt(Q(R))+' firebaseui-id-idp-button" data-provider-id="'+tt(y.providerId)+'" style="background-color:',R=(R=h)||{},R=R.ga,C=C+tt(Mf(Q(R.ta?R.ta:g.wa[R.providerId]?""+g.wa[R.providerId]:R.providerId.indexOf("saml.")==0?""+g.wa.saml:R.providerId.indexOf("oidc.")==0?""+g.wa.oidc:""+g.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var M=h;R=g,M=M||{},M=M.ga,R=bw(M.za?oi(M.za):R.xa[M.providerId]?oi(R.xa[M.providerId]):M.providerId.indexOf("saml.")==0?oi(R.xa.saml):M.providerId.indexOf("oidc.")==0?oi(R.xa.oidc):oi(R.xa.password)),C=C+tt(oi(R))+'"></span>',y.providerId=="password"?(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=U(y.V):y.S?(h="Sign in with "+U(xn(h,g)),C+=h):C+="Sign in with email",C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',C=y.S?C+U(y.S):C+"Email",C+="</span>"):y.providerId=="phone"?(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=U(y.V):y.S?(h="Sign in with "+U(xn(h,g)),C+=h):C+="Sign in with phone",C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',C=y.S?C+U(y.S):C+"Phone",C+="</span>"):y.providerId=="anonymous"?(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=U(y.V):y.S?(h="Sign in with "+U(xn(h,g)),C+=h):C+="Continue as guest",C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',C=y.S?C+U(y.S):C+"Guest",C+="</span>"):(C+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',y.V?C+=U(y.V):(R="Sign in with "+U(xn(h,g)),C+=R),C+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(y.S?U(y.S):U(xn(h,g)))+"</span>"),y=D(C+"</button>"),l+='<li class="firebaseui-list-item">'+y+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+pr(o)+"</div></div>",D(l)}Sg.a="firebaseui.auth.soy2.page.providerSignIn";function Tg(t,r,o){t=t||{};var l=t.Gb,d=t.Va;r=t.ia,t=t||{},t=t.Aa,t='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+tt(t!=null?t:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+D(t);var h;return l?h=D('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):h="",h=t+h+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(d?bt(null):"")+ot({label:we("Verify")})+'</div></div><div class="firebaseui-card-footer">',r?(r='<p class="firebaseui-tos firebaseui-phone-tos">',r=o.F&&o.D?r+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':r+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",o=D(r+"</p>")):o=D('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+Ye(o),D(h+o+"</div></form></div>")}Tg.a="firebaseui.auth.soy2.page.phoneSignInStart";function kg(t,r,o){t=t||{},r=t.phoneNumber;var l="";return t='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(U(r)+"</a>"),U(r),r=l,l=D('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),o='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+"</p>"+l+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt(null)+ot({label:we("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Ye(o)+"</div></form>",t=D('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),D(r+(o+t+"</div>"))}kg.a="firebaseui.auth.soy2.page.phoneSignInFinish";function Rg(){return D('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}Rg.a="firebaseui.auth.soy2.page.signOut";function Ag(t,r,o){var l='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=t.ec,r=t.length;for(var d=0;d<r;d++){var h=t[d],g="",y=U(h.displayName),C=h.tenantId?h.tenantId:"top-level-project";C=we(C),g+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+tt(C)+' firebaseui-id-tenant-selection-button"'+(h.tenantId?'data-tenant-id="'+tt(h.tenantId)+'"':"")+'style="background-color:'+tt(Mf(h.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+tt(oi(h.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',h.V?g+=U(h.V):(h="Sign in to "+U(h.displayName),g+=h),g=D(g+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+y+"</span></button>")),l+='<li class="firebaseui-list-item">'+g+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+pr(o)+"</div></div>",D(l)}Ag.a="firebaseui.auth.soy2.page.selectTenant";function Ng(t,r,o){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+fr(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ot(null)+'</div></div><div class="firebaseui-card-footer">'+pr(o)+"</div></form></div>",D(t)}Ng.a="firebaseui.auth.soy2.page.providerMatchByEmail";function Le(){return J(this,"firebaseui-id-submit")}function Oe(){return J(this,"firebaseui-id-secondary-link")}function We(t,r){ge(this,Le.call(this),function(l){t(l)});var o=Oe.call(this);o&&r&&ge(this,o,function(l){r(l)})}function Ja(){return J(this,"firebaseui-id-password")}function Xa(){return J(this,"firebaseui-id-password-error")}function Pg(){var t=Ja.call(this),r=Xa.call(this);dr(this,t,function(){hr(r)&&(Ee(t,!0),yt(r))})}function Og(){var t=Ja.call(this),r=Xa.call(this);return Be(t)?(Ee(t,!0),yt(r),r=!0):(Ee(t,!1),je(r,Q("Enter your password").toString()),r=!1),r?Be(t):null}function gr(t,r,o,l,d,h){T.call(this,sg,{email:t},h,"passwordLinking",{F:l,D:d}),this.w=r,this.H=o}f(gr,T),gr.prototype.v=function(){this.P(),this.M(this.w,this.H),mr(this,this.i(),this.w),this.i().focus(),T.prototype.v.call(this)},gr.prototype.o=function(){this.w=null,T.prototype.o.call(this)},gr.prototype.j=function(){return Be(J(this,"firebaseui-id-email"))},de(gr.prototype,{i:Ja,B:Xa,P:Pg,u:Og,ea:Le,ba:Oe,M:We});var L1=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function an(){return J(this,"firebaseui-id-email")}function Fn(){return J(this,"firebaseui-id-email-error")}function vr(t){var r=an.call(this),o=Fn.call(this);dr(this,r,function(){hr(o)&&(Ee(r,!0),yt(o))}),t&&Ps(this,r,function(){t()})}function _r(){return pt(Be(an.call(this))||"")}function yr(){var t=an.call(this),r=Fn.call(this),o=Be(t)||"";return o?L1.test(o)?(Ee(t,!0),yt(r),r=!0):(Ee(t,!1),je(r,Q("That email address isn't correct").toString()),r=!1):(Ee(t,!1),je(r,Q("Enter your email address to continue").toString()),r=!1),r?pt(Be(t)):null}function Ds(t,r,o,l,d,h,g){T.call(this,qm,{email:o,ia:!!h},g,"passwordSignIn",{F:l,D:d}),this.w=t,this.H=r}f(Ds,T),Ds.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Os(this,this.l(),this.i()),mr(this,this.i(),this.w),Be(this.l())?this.i().focus():this.l().focus(),T.prototype.v.call(this)},Ds.prototype.o=function(){this.H=this.w=null,T.prototype.o.call(this)},de(Ds.prototype,{l:an,U:Fn,P:vr,M:_r,j:yr,i:Ja,B:Xa,ea:Pg,u:Og,ua:Le,pa:Oe,ba:We});function ne(t,r,o,l,d,h){T.call(this,t,r,l,d||"notice",h),this.i=o||null}W(ne,T),ne.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),ne.K.v.call(this)},ne.prototype.o=function(){this.i=null,ne.K.o.call(this)},de(ne.prototype,{l:Le,w:Oe,u:We});function Qa(t,r,o,l,d){ne.call(this,Jm,{email:t,G:!!r},r,d,"passwordRecoveryEmailSent",{F:o,D:l})}W(Qa,ne);function Dg(t,r){ne.call(this,gg,{G:!!t},t,r,"emailVerificationSuccess")}W(Dg,ne);function Lg(t,r){ne.call(this,vg,{G:!!t},t,r,"emailVerificationFailure")}W(Lg,ne);function Mg(t,r,o){ne.call(this,_g,{email:t,G:!!r},r,o,"verifyAndChangeEmailSuccess")}W(Mg,ne);function xg(t,r){ne.call(this,yg,{G:!!t},t,r,"verifyAndChangeEmailFailure")}W(xg,ne);function Fg(t,r){ne.call(this,wg,{G:!!t},t,r,"revertSecondFactorAdditionFailure")}W(Fg,ne);function Ug(t){ne.call(this,Rg,void 0,void 0,t,"signOut")}W(Ug,ne);function Bg(t,r){ne.call(this,hg,{G:!!t},t,r,"passwordResetSuccess")}W(Bg,ne);function jg(t,r){ne.call(this,fg,{G:!!t},t,r,"passwordResetFailure")}W(jg,ne);function Wg(t,r){ne.call(this,mg,{G:!!t},t,r,"emailChangeRevokeFailure")}W(Wg,ne);function Vg(t,r,o){ne.call(this,Ig,{errorMessage:t,zb:!!r},r,o,"recoverableError")}W(Vg,ne);function Hg(t,r){ne.call(this,Eg,{errorMessage:t},void 0,r,"unrecoverableError")}W(Hg,ne);function Ls(t){if(t.code==="auth/invalid-credential"&&t.message&&t.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(t.message&&t.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var r=JSON.parse(t.message.substring(t.message.indexOf("{"),t.message.lastIndexOf("}")+1));return{code:t.code,message:r&&r.error&&r.error.message||t.message}}return t}function ln(t,r,o,l){function d(g){if(!g.name||g.name!="cancel"){e:{var y=g.message;try{var C=((JSON.parse(y).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(C&&C.length){var R=!0;break e}}catch{}R=!1}if(R)g=me(r),r.m(),le(t,g,void 0,Q("Your sign-in session has expired. Please try again.").toString());else{if(R=g&&g.message||"",g.code){if(g.code=="auth/email-already-in-use"||g.code=="auth/credential-already-in-use")return;R=se(g)}r.a(R)}}}if(dv(t),l)return Gg(t,o),Ie();if(!o.credential)throw Error("No credential found!");if(!K(t).currentUser&&!o.user)throw Error("User not logged in.");try{var h=hI(t,o)}catch(g){return vt(g.code||g.message,g),r.a(g.code||g.message),Ie()}return o=h.then(function(g){Gg(t,g)},d).then(void 0,d),V(t,h),Ie(o)}function Gg(t,r){if(!r.user)throw Error("No user found");var o=hm(k(t));if(Tu(k(t))&&o&&Mn("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),o){o=hm(k(t));var l=$p(F(t))||void 0;st(bs,F(t));var d=!1;dp()?((!o||o(r,l))&&(d=!0,Gi(window.opener.location,Za(t,l))),o||window.close()):(!o||o(r,l))&&(d=!0,Gi(window.location,Za(t,l))),d||t.reset()}else{o=r.user,r=r.credential,l=Tu(k(t)),d=$p(F(t))||void 0,st(bs,F(t));var h=!1;dp()?((!l||l(o,r,d))&&(h=!0,Gi(window.opener.location,Za(t,d))),l||window.close()):(!l||l(o,r,d))&&(h=!0,Gi(window.location,Za(t,d))),h||t.reset()}}function Za(t,r){if(t=r||k(t).a.get("signInSuccessUrl"),!t)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return t}function se(t){var r={code:t.code};r=r||{};var o="";switch(r.code){case"auth/email-already-in-use":o+="The email address is already used by another account";break;case"auth/requires-recent-login":o+=jf();break;case"auth/too-many-requests":o+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":o+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":o+="That email address doesn't match an existing account";break;case"auth/user-token-expired":o+=jf();break;case"auth/weak-password":o+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":o+="The email and password you entered don't match";break;case"auth/network-request-failed":o+="A network error has occurred";break;case"auth/invalid-phone-number":o+=jc();break;case"auth/invalid-verification-code":o+=Q("Wrong code. Try again.");break;case"auth/code-expired":o+="This code is no longer valid";break;case"auth/expired-action-code":o+="This code has expired.";break;case"auth/invalid-action-code":o+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(r=Q(o).toString())return r;try{return JSON.parse(t.message),vt("Internal error: "+t.message,void 0),Ff().toString()}catch{return t.message}}function M1(t,r,o){var l=nr[r]&&x.auth[nr[r]]?new x.auth[nr[r]]:r.indexOf("saml.")==0?new x.auth.SAMLAuthProvider(r):new x.auth.OAuthProvider(r);if(!l)throw Error("Invalid Firebase Auth provider!");var d=am(k(t),r);if(l.addScope)for(var h=0;h<d.length;h++)l.addScope(d[h]);return d=lm(k(t),r)||{},o&&(r==x.auth.GoogleAuthProvider.PROVIDER_ID?t="login_hint":r==x.auth.GithubAuthProvider.PROVIDER_ID?t="login":t=(t=Es(k(t),r))&&t.Ob,t&&(d[t]=o)),l.setCustomParameters&&l.setCustomParameters(d),l}function Ms(t,r,o,l){function d(){c1(new Ap(t.h.tenantId||null),F(t)),V(t,r.I(Z(t.dc,t),[C],function(){if((window.location&&window.location.protocol)==="file:")return V(t,ov(t).then(function(R){r.m(),st(hi,F(t)),L("callback",t,y,Ie(R))},h))},g))}function h(R){if(st(hi,F(t)),!R.name||R.name!="cancel")switch(R=Ls(R),R.code){case"auth/popup-blocked":d();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":r.a(se(R));break;case"auth/admin-restricted-operation":r.m(),pi(k(t))?L("handleUnauthorizedUser",t,y,null,o):L("callback",t,y,$i(R));break;default:r.m(),L("callback",t,y,$i(R))}}function g(R){st(hi,F(t)),R.name&&R.name=="cancel"||(vt("signInWithRedirect: "+R.code,void 0),R=se(R),r.Ga=="blank"&&Su(k(t))?(r.m(),L("providerSignIn",t,y,R)):r.a(R))}var y=me(r),C=M1(t,o,l);dm(k(t))==Ha?d():V(t,dI(t,C).then(function(R){r.m(),L("callback",t,y,Ie(R))},h))}function x1(t,r){V(t,r.I(Z(t.$b,t),[],function(o){return r.m(),ln(t,r,o,!0)},function(o){o.name&&o.name=="cancel"||(vt("ContinueAsGuest: "+o.code,void 0),o=se(o),r.a(o))}))}function F1(t,r,o){function l(h){var g=!1;return h=r.I(Z(t.ac,t),[h],function(y){var C=me(r);r.m(),L("callback",t,C,Ie(y)),g=!0},function(y){if((!y.name||y.name!="cancel")&&(!y||y.code!="auth/credential-already-in-use"))if(y&&y.code=="auth/email-already-in-use"&&y.email&&y.credential){var C=me(r);r.m(),L("callback",t,C,$i(y))}else y&&y.code=="auth/admin-restricted-operation"&&pi(k(t))?(y=me(r),r.m(),L("handleUnauthorizedUser",t,y,null,x.auth.GoogleAuthProvider.PROVIDER_ID)):(y=se(y),r.a(y))}),V(t,h),h.then(function(){return g},function(){return!1})}if(o&&o.credential&&o.clientId===sm(k(t))){if(am(k(t),x.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var d=JSON.parse(atob(o.credential.split(".")[1])).email}catch{}return Ms(t,r,x.auth.GoogleAuthProvider.PROVIDER_ID,d),Ie(!0)}return l(x.auth.GoogleAuthProvider.credential(o.credential))}return o&&r.a(Q("The selected credential for the authentication provider is not supported!").toString()),Ie(!1)}function U1(t,r){var o=r.j(),l=r.u();if(o)if(l){var d=x.auth.EmailAuthProvider.credential(o,l);V(t,r.I(Z(t.bc,t),[o,l],function(h){return ln(t,r,{user:h.user,credential:d,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo})},function(h){if(!h.name||h.name!="cancel")switch(h.code){case"auth/email-already-in-use":break;case"auth/email-exists":Ee(r.l(),!1),je(r.U(),se(h));break;case"auth/too-many-requests":case"auth/wrong-password":Ee(r.i(),!1),je(r.B(),se(h));break;default:vt("verifyPassword: "+h.message,void 0),r.a(se(h))}}))}else r.i().focus();else r.l().focus()}function el(t){return t=ir(k(t)),t.length==1&&t[0]==x.auth.EmailAuthProvider.PROVIDER_ID}function $g(t){return t=ir(k(t)),t.length==1&&t[0]==x.auth.PhoneAuthProvider.PROVIDER_ID}function le(t,r,o,l){el(t)?l?L("signIn",t,r,o,l):Vu(t,r,o):t&&$g(t)&&!l?L("phoneSignInStart",t,r):t&&Su(k(t))&&!l?L("federatedRedirect",t,r,o):L("providerSignIn",t,r,l,o)}function zg(t,r,o,l){var d=me(r);V(t,r.I(Z(K(t).fetchSignInMethodsForEmail,K(t)),[o],function(h){r.m(),qg(t,d,h,o,l)},function(h){h=se(h),r.a(h)}))}function qg(t,r,o,l,d,h){o.length||rr(k(t))&&!rr(k(t))?Ct(o,x.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?L("passwordSignIn",t,r,l,h):o.length==1&&o[0]===x.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?rr(k(t))?L("sendEmailLinkForSignIn",t,r,l,function(){L("signIn",t,r)}):L("unsupportedProvider",t,r,l):(o=nm(o,ir(k(t))))?(zp(new hu(l),F(t)),L("federatedSignIn",t,r,l,o,d)):L("unsupportedProvider",t,r,l):om(k(t))?L("handleUnauthorizedUser",t,r,l,x.auth.EmailAuthProvider.PROVIDER_ID):rr(k(t))?L("sendEmailLinkForSignIn",t,r,l,function(){L("signIn",t,r)}):L("passwordSignUp",t,r,l,void 0,void 0,h)}function Wu(t,r,o,l,d,h){var g=me(r);V(t,r.I(Z(t.Ib,t),[o,h],function(){r.m(),L("emailLinkSignInSent",t,g,o,l,h)},d))}function Vu(t,r,o){o?L("prefilledEmailSignIn",t,r,o):L("signIn",t,r)}function xs(){return na(on(),"oobCode")}function Hu(){var t=na(on(),"continueUrl");return t?function(){Gi(window.location,t)}:null}function Fs(t,r){T.call(this,rg,void 0,r,"anonymousUserMismatch"),this.i=t}f(Fs,T),Fs.prototype.v=function(){var t=this;ge(this,this.l(),function(){t.i()}),this.l().focus(),T.prototype.v.call(this)},Fs.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(Fs.prototype,{l:Oe}),ee.anonymousUserMismatch=function(t,r){var o=new Fs(function(){o.m(),le(t,r)});o.render(r),G(t,o)};function tl(t){T.call(this,Xm,void 0,t,"callback")}f(tl,T),tl.prototype.I=function(t,r,o,l){return t.apply(null,r).then(o,l)};function Kg(t,r,o){if(o.user){var l={user:o.user,credential:o.credential,operationType:o.operationType,additionalUserInfo:o.additionalUserInfo},d=Vt(F(t)),h=d&&d.g;if(h&&!j1(o.user,h))B1(t,r,l);else{var g=d&&d.a;g?V(t,o.user.linkWithCredential(g).then(function(y){l={user:y.user,credential:g,operationType:y.operationType,additionalUserInfo:y.additionalUserInfo},Yg(t,r,l)},function(y){nl(t,r,y)})):Yg(t,r,l)}}else o=me(r),r.m(),Ht(F(t)),le(t,o)}function Yg(t,r,o){Ht(F(t)),ln(t,r,o)}function nl(t,r,o){var l=me(r);Ht(F(t)),o=se(o),r.m(),le(t,l,void 0,o)}function Jg(t,r,o,l){var d=me(r);V(t,K(t).fetchSignInMethodsForEmail(o).then(function(h){r.m(),h.length?Ct(h,x.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?L("passwordLinking",t,d,o):h.length==1&&h[0]===x.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?L("emailLinkSignInLinking",t,d,o):(h=nm(h,ir(k(t))))?L("federatedLinking",t,d,o,h,l):(Ht(F(t)),L("unsupportedProvider",t,d,o)):(Ht(F(t)),L("passwordRecovery",t,d,o,!1,Uf().toString()))},function(h){nl(t,r,h)}))}function B1(t,r,o){var l=me(r);V(t,Un(t).then(function(){r.m(),L("emailMismatch",t,l,o)},function(d){d.name&&d.name=="cancel"||(d=se(d.code),r.a(d))}))}function j1(t,r){if(r==t.email)return!0;if(t.providerData){for(var o=0;o<t.providerData.length;o++)if(r==t.providerData[o].email)return!0}return!1}ee.callback=function(t,r,o){var l=new tl;l.render(r),G(t,l),o=o||ov(t),V(t,o.then(function(d){Kg(t,l,d)},function(d){if((d=Ls(d))&&(d.code=="auth/account-exists-with-different-credential"||d.code=="auth/email-already-in-use")&&d.email&&d.credential)zp(new hu(d.email,d.credential),F(t)),Jg(t,l,d.email);else if(d&&d.code=="auth/user-cancelled"){var h=Vt(F(t)),g=se(d);h&&h.a?Jg(t,l,h.g,g):h?zg(t,l,h.g,g):nl(t,l,d)}else d&&d.code=="auth/credential-already-in-use"||(d&&d.code=="auth/operation-not-supported-in-this-environment"&&el(t)?Kg(t,l,{user:null,credential:null}):d&&d.code=="auth/admin-restricted-operation"&&pi(k(t))?(l.m(),Ht(F(t)),L("handleUnauthorizedUser",t,r,null,null)):nl(t,l,d))}))};function Us(t,r){T.call(this,ig,void 0,r,"differentDeviceError"),this.i=t}f(Us,T),Us.prototype.v=function(){var t=this;ge(this,this.l(),function(){t.i()}),this.l().focus(),T.prototype.v.call(this)},Us.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(Us.prototype,{l:Oe}),ee.differentDeviceError=function(t,r){var o=new Us(function(){o.m(),le(t,r)});o.render(r),G(t,o)};function Bs(t,r,o,l){T.call(this,pg,{email:t,G:!!o},l,"emailChangeRevoke"),this.l=r,this.i=o||null}f(Bs,T),Bs.prototype.v=function(){var t=this;ge(this,J(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),T.prototype.v.call(this)},Bs.prototype.o=function(){this.l=this.i=null,T.prototype.o.call(this)},de(Bs.prototype,{u:Le,B:Oe,w:We});function js(){return J(this,"firebaseui-id-new-password")}function il(){return J(this,"firebaseui-id-password-toggle")}function W1(){this.Ra=!this.Ra;var t=il.call(this),r=js.call(this);this.Ra?(r.type="text",Gt(t,"firebaseui-input-toggle-off"),$t(t,"firebaseui-input-toggle-on")):(r.type="password",Gt(t,"firebaseui-input-toggle-on"),$t(t,"firebaseui-input-toggle-off")),r.focus()}function rl(){return J(this,"firebaseui-id-new-password-error")}function Xg(){this.Ra=!1;var t=js.call(this);t.type="password";var r=rl.call(this);dr(this,t,function(){hr(r)&&(Ee(t,!0),yt(r))});var o=il.call(this);Gt(o,"firebaseui-input-toggle-on"),$t(o,"firebaseui-input-toggle-off"),A1(this,t,function(){Gt(o,"firebaseui-input-toggle-focus"),$t(o,"firebaseui-input-toggle-blur")}),N1(this,t,function(){Gt(o,"firebaseui-input-toggle-blur"),$t(o,"firebaseui-input-toggle-focus")}),ge(this,o,Z(W1,this))}function Qg(){var t=js.call(this),r=rl.call(this);return Be(t)?(Ee(t,!0),yt(r),r=!0):(Ee(t,!1),je(r,Q("Enter your password").toString()),r=!1),r?Be(t):null}function Ws(t,r,o){T.call(this,dg,{email:t},o,"passwordReset"),this.l=r}f(Ws,T),Ws.prototype.v=function(){this.H(),this.B(this.l),mr(this,this.i(),this.l),this.i().focus(),T.prototype.v.call(this)},Ws.prototype.o=function(){this.l=null,T.prototype.o.call(this)},de(Ws.prototype,{i:js,w:rl,M:il,H:Xg,u:Qg,U:Le,P:Oe,B:We});function Vs(t,r,o,l,d){T.call(this,bg,{factorId:t,phoneNumber:o||null,G:!!l},d,"revertSecondFactorAdditionSuccess"),this.l=r,this.i=l||null}f(Vs,T),Vs.prototype.v=function(){var t=this;ge(this,J(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),T.prototype.v.call(this)},Vs.prototype.o=function(){this.l=this.i=null,T.prototype.o.call(this)},de(Vs.prototype,{u:Le,B:Oe,w:We});function V1(t,r,o,l,d){var h=o.u();h&&V(t,o.I(Z(K(t).confirmPasswordReset,K(t)),[l,h],function(){o.m();var g=new Bg(d);g.render(r),G(t,g)},function(g){Zg(t,r,o,g)}))}function Zg(t,r,o,l){(l&&l.code)=="auth/weak-password"?(t=se(l),Ee(o.i(),!1),je(o.w(),t),o.i().focus()):(o&&o.m(),o=new jg,o.render(r),G(t,o))}function H1(t,r,o){var l=new Bs(o,function(){V(t,l.I(Z(K(t).sendPasswordResetEmail,K(t)),[o],function(){l.m(),l=new Qa(o,void 0,ke(k(t)),Re(k(t))),l.render(r),G(t,l)},function(){l.a(xf().toString())}))});l.render(r),G(t,l)}function G1(t,r,o,l){var d=new Vs(l.factorId,function(){d.I(Z(K(t).sendPasswordResetEmail,K(t)),[o],function(){d.m(),d=new Qa(o,void 0,ke(k(t)),Re(k(t))),d.render(r),G(t,d)},function(){d.a(xf().toString())})},l.phoneNumber);d.render(r),G(t,d)}ee.passwordReset=function(t,r,o,l){V(t,K(t).verifyPasswordResetCode(o).then(function(d){var h=new Ws(d,function(){V1(t,r,h,o,l)});h.render(r),G(t,h)},function(){Zg(t,r)}))},ee.emailChangeRevocation=function(t,r,o){var l=null;V(t,K(t).checkActionCode(o).then(function(d){return l=d.data.email,K(t).applyActionCode(o)}).then(function(){H1(t,r,l)},function(){var d=new Wg;d.render(r),G(t,d)}))},ee.emailVerification=function(t,r,o,l){V(t,K(t).applyActionCode(o).then(function(){var d=new Dg(l);d.render(r),G(t,d)},function(){var d=new Lg;d.render(r),G(t,d)}))},ee.revertSecondFactorAddition=function(t,r,o){var l=null,d=null;V(t,K(t).checkActionCode(o).then(function(h){return l=h.data.email,d=h.data.multiFactorInfo,K(t).applyActionCode(o)}).then(function(){G1(t,r,l,d)},function(){var h=new Fg;h.render(r),G(t,h)}))},ee.verifyAndChangeEmail=function(t,r,o,l){var d=null;V(t,K(t).checkActionCode(o).then(function(h){return d=h.data.email,K(t).applyActionCode(o)}).then(function(){var h=new Mg(d,l);h.render(r),G(t,h)},function(){var h=new xg;h.render(r),G(t,h)}))};function sl(t,r){try{var o=typeof t.selectionStart=="number"}catch{o=!1}o?(t.selectionStart=r,t.selectionEnd=r):be&&!ii("9")&&(t.type=="textarea"&&(r=t.value.substring(0,r).replace(/(\r\n|\r|\n)/g,`
`).length),t=t.createTextRange(),t.collapse(!0),t.move("character",r),t.select())}function Hs(t,r,o,l,d,h){T.call(this,ng,{email:o},h,"emailLinkSignInConfirmation",{F:l,D:d}),this.l=t,this.u=r}f(Hs,T),Hs.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),sl(this.i(),(this.i().value||"").length),T.prototype.v.call(this)},Hs.prototype.o=function(){this.u=this.l=null,T.prototype.o.call(this)},de(Hs.prototype,{i:an,M:Fn,w:vr,H:_r,j:yr,U:Le,P:Oe,B:We}),ee.emailLinkConfirmation=function(t,r,o,l,d,h){var g=new Hs(function(){var y=g.j();y?(g.m(),l(t,r,y,o)):g.i().focus()},function(){g.m(),le(t,r,d||void 0)},d||void 0,ke(k(t)),Re(k(t)));g.render(r),G(t,g),h&&g.a(h)};function Gs(t,r,o,l,d){T.call(this,ag,{ga:t},d,"emailLinkSignInLinkingDifferentDevice",{F:o,D:l}),this.i=r}f(Gs,T),Gs.prototype.v=function(){this.u(this.i),this.l().focus(),T.prototype.v.call(this)},Gs.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(Gs.prototype,{l:Le,u:We}),ee.emailLinkNewDeviceLinking=function(t,r,o,l){var d=new ni(o);if(o=d.a.a.get(Ae.PROVIDER_ID)||null,ff(d,null),o){var h=new Gs(Es(k(t),o),function(){h.m(),l(t,r,d.toString())},ke(k(t)),Re(k(t)));h.render(r),G(t,h)}else le(t,r)};function ol(t){T.call(this,Zm,void 0,t,"blank")}f(ol,T);function Gu(t,r,o,l,d){var h=new ol,g=new ni(o),y=g.a.a.get(Ae.$a)||"",C=g.a.a.get(Ae.Sa)||"",R=g.a.a.get(Ae.Qa)==="1",M=hf(g),ie=g.a.a.get(Ae.PROVIDER_ID)||null;g=g.a.a.get(Ae.vb)||null,hv(t,g);var Ot=!er(Zi,F(t)),vv=l||u1(C,F(t)),io=(l=d1(C,F(t)))&&l.a;ie&&io&&io.providerId!==ie&&(io=null),h.render(r),G(t,h),V(t,h.I(function(){var St=Ie(null);St=M&&Ot||Ot&&R?$i(Error("anonymous-user-not-found")):lI(t,o).then(function(td){if(ie&&!io)throw Error("pending-credential-not-found");return td});var ro=null;return St.then(function(td){return ro=td,d?null:K(t).checkActionCode(y)}).then(function(){return ro})},[],function(St){vv?z1(t,h,vv,o,io,St):R?(h.m(),L("differentDeviceError",t,r)):(h.m(),L("emailLinkConfirmation",t,r,o,ev))},function(St){var ro=void 0;if(!St||!St.name||St.name!="cancel")switch(h.m(),St&&St.message){case"anonymous-user-not-found":L("differentDeviceError",t,r);break;case"anonymous-user-mismatch":L("anonymousUserMismatch",t,r);break;case"pending-credential-not-found":L("emailLinkNewDeviceLinking",t,r,o,$1);break;default:St&&(ro=se(St)),le(t,r,void 0,ro)}}))}function ev(t,r,o,l){Gu(t,r,l,o,!0)}function $1(t,r,o){Gu(t,r,o)}function z1(t,r,o,l,d,h){var g=me(r);r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",Q("Signing in...").toString());var y=null;d=(h?cI(t,h,o,l,d):uI(t,o,l,d)).then(function(C){st(ws,F(t)),st(Zi,F(t)),r.h(),r.$("firebaseui-icon-done",Q("Signed in!").toString()),y=setTimeout(function(){r.h(),ln(t,r,C,!0)},1e3),V(t,function(){r&&(r.h(),r.m()),clearTimeout(y)})},function(C){if(r.h(),r.m(),!C.name||C.name!="cancel"){C=Ls(C);var R=se(C);C.code=="auth/email-already-in-use"||C.code=="auth/credential-already-in-use"?(st(ws,F(t)),st(Zi,F(t))):C.code=="auth/invalid-email"?(R=Q("The email provided does not match the current sign-in session.").toString(),L("emailLinkConfirmation",t,g,l,ev,null,R)):le(t,g,o,R)}}),V(t,d)}ee.emailLinkSignInCallback=Gu;function $s(t,r,o,l,d,h){T.call(this,og,{email:t,ga:r},h,"emailLinkSignInLinking",{F:l,D:d}),this.i=o}f($s,T),$s.prototype.v=function(){this.u(this.i),this.l().focus(),T.prototype.v.call(this)},$s.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de($s.prototype,{l:Le,u:We});function q1(t,r,o,l){var d=me(r);Wu(t,r,o,function(){le(t,d,o)},function(h){if(!h.name||h.name!="cancel"){var g=se(h);h&&h.code=="auth/network-request-failed"?r.a(g):(r.m(),le(t,d,o,g))}},l)}ee.emailLinkSignInLinking=function(t,r,o){var l=Vt(F(t));if(Ht(F(t)),l){var d=l.a.providerId,h=new $s(o,Es(k(t),d),function(){q1(t,h,o,l)},ke(k(t)),Re(k(t)));h.render(r),G(t,h)}else le(t,r)};function zs(t,r,o,l,d,h){T.call(this,eg,{email:t},h,"emailLinkSignInSent",{F:l,D:d}),this.u=r,this.i=o}f(zs,T),zs.prototype.v=function(){var t=this;ge(this,this.l(),function(){t.i()}),ge(this,J(this,"firebaseui-id-trouble-getting-email-link"),function(){t.u()}),this.l().focus(),T.prototype.v.call(this)},zs.prototype.o=function(){this.i=this.u=null,T.prototype.o.call(this)},de(zs.prototype,{l:Oe}),ee.emailLinkSignInSent=function(t,r,o,l,d){var h=new zs(o,function(){h.m(),L("emailNotReceived",t,r,o,l,d)},function(){h.m(),l()},ke(k(t)),Re(k(t)));h.render(r),G(t,h)};function qs(t,r,o,l,d,h,g){T.call(this,Cg,{jc:t,Qb:r},g,"emailMismatch",{F:d,D:h}),this.l=o,this.i=l}f(qs,T),qs.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),T.prototype.v.call(this)},qs.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(qs.prototype,{u:Le,B:Oe,w:We}),ee.emailMismatch=function(t,r,o){var l=Vt(F(t));if(l){var d=new qs(o.user.email,l.g,function(){var h=d;Ht(F(t)),ln(t,h,o)},function(){var h=o.credential.providerId,g=me(d);d.m(),l.a?L("federatedLinking",t,g,l.g,h):L("federatedSignIn",t,g,l.g,h)},ke(k(t)),Re(k(t)));d.render(r),G(t,d)}else le(t,r)};function br(t,r,o,l,d){T.call(this,tg,void 0,d,"emailNotReceived",{F:o,D:l}),this.l=t,this.i=r}f(br,T),br.prototype.v=function(){var t=this;ge(this,this.u(),function(){t.i()}),ge(this,this.Da(),function(){t.l()}),this.u().focus(),T.prototype.v.call(this)},br.prototype.Da=function(){return J(this,"firebaseui-id-resend-email-link")},br.prototype.o=function(){this.i=this.l=null,T.prototype.o.call(this)},de(br.prototype,{u:Oe}),ee.emailNotReceived=function(t,r,o,l,d){var h=new br(function(){Wu(t,h,o,l,function(g){g=se(g),h.a(g)},d)},function(){h.m(),le(t,r,o)},ke(k(t)),Re(k(t)));h.render(r),G(t,h)};function wr(t,r,o,l,d,h){T.call(this,lg,{email:t,ga:r},h,"federatedLinking",{F:l,D:d}),this.i=o}f(wr,T),wr.prototype.v=function(){this.u(this.i),this.l().focus(),T.prototype.v.call(this)},wr.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(wr.prototype,{l:Le,u:We}),ee.federatedLinking=function(t,r,o,l,d){var h=Vt(F(t));if(h&&h.a){var g=new wr(o,Es(k(t),l),function(){Ms(t,g,l,o)},ke(k(t)),Re(k(t)));g.render(r),G(t,g),d&&g.a(d)}else le(t,r)},ee.federatedRedirect=function(t,r,o){var l=new ol;l.render(r),G(t,l),r=ir(k(t))[0],Ms(t,l,r,o)},ee.federatedSignIn=function(t,r,o,l,d){var h=new wr(o,Es(k(t),l),function(){Ms(t,h,l,o)},ke(k(t)),Re(k(t)));h.render(r),G(t,h),d&&h.a(d)};function K1(t,r,o,l){var d=r.u();d?V(t,r.I(Z(t.Xb,t),[o,d],function(h){return h=h.user.linkWithCredential(l).then(function(g){return ln(t,r,{user:g.user,credential:l,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo})}),V(t,h),h},function(h){if(!h.name||h.name!="cancel")switch(h.code){case"auth/wrong-password":Ee(r.i(),!1),je(r.B(),se(h));break;case"auth/too-many-requests":r.a(se(h));break;default:vt("signInWithEmailAndPassword: "+h.message,void 0),r.a(se(h))}})):r.i().focus()}ee.passwordLinking=function(t,r,o){var l=Vt(F(t));Ht(F(t));var d=l&&l.a;if(d){var h=new gr(o,function(){K1(t,h,o,d)},function(){h.m(),L("passwordRecovery",t,r,o)},ke(k(t)),Re(k(t)));h.render(r),G(t,h)}else le(t,r)};function Ks(t,r,o,l,d,h){T.call(this,Ym,{email:o,Ta:!!r},h,"passwordRecovery",{F:l,D:d}),this.l=t,this.u=r}f(Ks,T),Ks.prototype.v=function(){this.B(),this.H(this.l,this.u),Be(this.i())||this.i().focus(),mr(this,this.i(),this.l),T.prototype.v.call(this)},Ks.prototype.o=function(){this.u=this.l=null,T.prototype.o.call(this)},de(Ks.prototype,{i:an,w:Fn,B:vr,M:_r,j:yr,U:Le,P:Oe,H:We});function Y1(t,r){var o=r.j();if(o){var l=me(r);V(t,r.I(Z(K(t).sendPasswordResetEmail,K(t)),[o],function(){r.m();var d=new Qa(o,function(){d.m(),le(t,l)},ke(k(t)),Re(k(t)));d.render(l),G(t,d)},function(d){Ee(r.i(),!1),je(r.w(),se(d))}))}else r.i().focus()}ee.passwordRecovery=function(t,r,o,l,d){var h=new Ks(function(){Y1(t,h)},l?void 0:function(){h.m(),le(t,r)},o,ke(k(t)),Re(k(t)));h.render(r),G(t,h),d&&h.a(d)},ee.passwordSignIn=function(t,r,o,l){var d=new Ds(function(){U1(t,d)},function(){var h=d.M();d.m(),L("passwordRecovery",t,r,h)},o,ke(k(t)),Re(k(t)),l);d.render(r),G(t,d)};function $u(){return J(this,"firebaseui-id-name")}function zu(){return J(this,"firebaseui-id-name-error")}function Ys(t,r,o,l,d,h,g,y,C){T.call(this,Km,{email:l,Tb:t,name:d,Ta:!!o,ia:!!y},C,"passwordSignUp",{F:h,D:g}),this.w=r,this.H=o,this.B=t}f(Ys,T),Ys.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Os(this,this.i(),this.u()),Os(this,this.u(),this.l())):Os(this,this.i(),this.l()),this.w&&mr(this,this.l(),this.w),Be(this.i())?this.B&&!Be(this.u())?this.u().focus():this.l().focus():this.i().focus(),T.prototype.v.call(this)},Ys.prototype.o=function(){this.H=this.w=null,T.prototype.o.call(this)},de(Ys.prototype,{i:an,U:Fn,ea:vr,jb:_r,j:yr,u:$u,Bc:zu,Ja:function(){var t=$u.call(this),r=zu.call(this);dr(this,t,function(){hr(r)&&(Ee(t,!0),yt(r))})},M:function(){var t=$u.call(this),r=zu.call(this),o=Be(t);return o=!/^[\s\xa0]*$/.test(o==null?"":String(o)),Ee(t,o),o?(yt(r),r=!0):(je(r,Q("Enter your account name").toString()),r=!1),r?pt(Be(t)):null},l:js,ba:rl,lb:il,ua:Xg,P:Qg,Nb:Le,Mb:Oe,pa:We});function J1(t,r){var o=um(k(t)),l=r.j(),d=null;o&&(d=r.M());var h=r.P();if(l){if(o)if(d)d=Ui(d);else{r.u().focus();return}if(h){var g=x.auth.EmailAuthProvider.credential(l,h);V(t,r.I(Z(t.Yb,t),[l,h],function(y){var C={user:y.user,credential:g,operationType:y.operationType,additionalUserInfo:y.additionalUserInfo};return o?(y=y.user.updateProfile({displayName:d}).then(function(){return ln(t,r,C)}),V(t,y),y):ln(t,r,C)},function(y){if(!y.name||y.name!="cancel"){var C=Ls(y);switch(y=se(C),C.code){case"auth/email-already-in-use":return X1(t,r,l,C);case"auth/too-many-requests":y=Q("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Ee(r.l(),!1),je(r.ba(),y);break;case"auth/admin-restricted-operation":pi(k(t))?(y=me(r),r.m(),L("handleUnauthorizedUser",t,y,l,x.auth.EmailAuthProvider.PROVIDER_ID)):r.a(y);break;default:C="setAccountInfo: "+jp(C),vt(C,void 0),r.a(y)}}}))}else r.l().focus()}else r.i().focus()}function X1(t,r,o,l){function d(){var g=se(l);Ee(r.i(),!1),je(r.U(),g),r.i().focus()}var h=K(t).fetchSignInMethodsForEmail(o).then(function(g){g.length?d():(g=me(r),r.m(),L("passwordRecovery",t,g,o,!1,Uf().toString()))},function(){d()});return V(t,h),h}ee.passwordSignUp=function(t,r,o,l,d,h){function g(){y.m(),le(t,r)}var y=new Ys(um(k(t)),function(){J1(t,y)},d?void 0:g,o,l,ke(k(t)),Re(k(t)),h);y.render(r),G(t,y)};function qu(){return J(this,"firebaseui-id-phone-confirmation-code")}function tv(){return J(this,"firebaseui-id-phone-confirmation-code-error")}function nv(){return J(this,"firebaseui-id-resend-countdown")}function Ir(t,r,o,l,d,h,g,y,C){T.call(this,kg,{phoneNumber:d},C,"phoneSignInFinish",{F:g,D:y}),this.jb=h,this.i=new Ga(1e3),this.B=h,this.P=t,this.l=r,this.H=o,this.M=l}f(Ir,T),Ir.prototype.v=function(){var t=this;this.U(this.jb),Rt(this.i,"tick",this.w,!1,this),this.i.start(),ge(this,J(this,"firebaseui-id-change-phone-number-link"),function(){t.P()}),ge(this,this.Da(),function(){t.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),T.prototype.v.call(this)},Ir.prototype.o=function(){this.M=this.H=this.l=this.P=null,$a(this.i),li(this.i,"tick",this.w),this.i=null,T.prototype.o.call(this)},Ir.prototype.w=function(){--this.B,0<this.B?this.U(this.B):($a(this.i),li(this.i,"tick",this.w),this.ua(),this.lb())},de(Ir.prototype,{u:qu,pa:tv,Ja:function(t){var r=qu.call(this),o=tv.call(this);dr(this,r,function(){hr(o)&&(Ee(r,!0),yt(o))}),t&&Ps(this,r,function(){t()})},ba:function(){var t=pt(Be(qu.call(this))||"");return/^\d{6}$/.test(t)?t:null},Fb:nv,U:function(t){xc(nv.call(this),Q("Resend code in "+((9<t?"0:":"0:0")+t)).toString())},ua:function(){yt(this.Fb())},Da:function(){return J(this,"firebaseui-id-resend-link")},lb:function(){je(this.Da())},Nb:Le,Mb:Oe,ea:We});function Q1(t,r,o,l){function d(g){r.u().focus(),Ee(r.u(),!1),je(r.pa(),g)}var h=r.ba();h?(r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",Q("Verifying...").toString()),V(t,r.I(Z(l.confirm,l),[h],function(g){r.h(),r.$("firebaseui-icon-done",Q("Verified!").toString());var y=setTimeout(function(){r.h(),r.m();var C={user:Nt(t).currentUser,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};ln(t,r,C,!0)},1e3);V(t,function(){r&&r.h(),clearTimeout(y)})},function(g){if(g.name&&g.name=="cancel")r.h();else{var y=Ls(g);switch(g=se(y),y.code){case"auth/credential-already-in-use":r.h();break;case"auth/code-expired":y=me(r),r.h(),r.m(),L("phoneSignInStart",t,y,o,g);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":r.h(),d(g);break;default:r.h(),r.a(g)}}}))):d(Q("Wrong code. Try again.").toString())}ee.phoneSignInFinish=function(t,r,o,l,d,h){var g=new Ir(function(){g.m(),L("phoneSignInStart",t,r,o)},function(){Q1(t,g,o,d)},function(){g.m(),le(t,r)},function(){g.m(),L("phoneSignInStart",t,r,o)},Eu(o),l,ke(k(t)),Re(k(t)));g.render(r),G(t,g),h&&g.a(h)};var Z1=!be&&!(q("Safari")&&!(gf()||q("Coast")||q("Opera")||q("Edge")||q("Firefox")||q("FxiOS")||q("Silk")||q("Android")));function al(t,r){return/-[a-z]/.test(r)?null:Z1&&t.dataset?!q("Android")||gf()||q("Firefox")||q("FxiOS")||q("Opera")||q("Silk")||r in t.dataset?(t=t.dataset[r],t===void 0?null:t):null:t.getAttribute("data-"+String(r).replace(/([A-Z])/g,"-$1").toLowerCase())}function eI(t,r,o){var l=this;t=as(jm,{items:t},null,this.s),Vm.call(this,t,!0,!0),o&&(o=tI(t,o))&&(o.focus(),R1(o,t)),ge(this,t,function(d){(d=(d=Pf(d.target,"firebaseui-id-list-box-dialog-button"))&&al(d,"listboxid"))&&(Ya.call(l),r(d))})}function tI(t,r){t=(t||document).getElementsByTagName("BUTTON");for(var o=0;o<t.length;o++)if(al(t[o],"listboxid")===r)return t[o];return null}function gi(){return J(this,"firebaseui-id-phone-number")}function iv(){return J(this,"firebaseui-id-country-selector")}function Ku(){return J(this,"firebaseui-id-phone-number-error")}function nI(t,r){var o=t.a,l=Yu("1-US-0",o),d=null;if(r&&Yu(r,o)?d=r:l?d="1-US-0":d=0<o.length?o[0].c:null,!d)throw Error("No available default country");ll.call(this,d,t)}function Yu(t,r){return t=fi(t),!(!t||!Ct(r,t))}function iI(t){return t.map(function(r){return{id:r.c,Ma:"firebaseui-flag "+Ju(r),label:r.name+" "+("\u200E+"+r.b)}})}function Ju(t){return"firebaseui-flag-"+t.f}function rI(t){var r=this;eI.call(this,iI(t.a),function(o){ll.call(r,o,t,!0),r.O().focus()},this.Ba)}function ll(t,r,o){var l=fi(t);l&&(o&&(o=pt(Be(gi.call(this))||""),r=Ba(r,o),r.length&&r[0].b!=l.b&&(o="+"+l.b+o.substr(r[0].b.length+1),gm(gi.call(this),o))),r=fi(this.Ba),this.Ba=t,t=J(this,"firebaseui-id-country-selector-flag"),r&&$t(t,Ju(r)),Gt(t,Ju(l)),xc(J(this,"firebaseui-id-country-selector-code"),"\u200E+"+l.b))}function Js(t,r,o,l,d,h,g,y,C,R){T.call(this,Tg,{Gb:r,Aa:C||null,Va:!!o,ia:!!h},R,"phoneSignInStart",{F:l,D:d}),this.H=y||null,this.M=r,this.l=t,this.w=o||null,this.pa=g||null}f(Js,T),Js.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Os(this,this.O(),this.i()),mr(this,this.i(),this.l),this.O().focus(),sl(this.O(),(this.O().value||"").length),T.prototype.v.call(this)},Js.prototype.o=function(){this.w=this.l=null,T.prototype.o.call(this)},de(Js.prototype,{Cb:Bu,O:gi,B:Ku,ea:function(t,r,o){var l=this,d=gi.call(this),h=iv.call(this),g=Ku.call(this),y=t||Is,C=y.a;if(C.length==0)throw Error("No available countries provided.");nI.call(l,y,r),ge(this,h,function(){rI.call(l,y)}),dr(this,d,function(){hr(g)&&(Ee(d,!0),yt(g));var R=pt(Be(d)||""),M=fi(this.Ba),ie=Ba(y,R);R=Yu("1-US-0",C),ie.length&&ie[0].b!=M.b&&(M=ie[0],ll.call(l,M.b=="1"&&R?"1-US-0":M.c,y))}),o&&Ps(this,d,function(){o()})},U:function(t){var r=pt(Be(gi.call(this))||"");t=t||Is;var o=t.a,l=Ba(Is,r);if(l.length&&!Ct(o,l[0]))throw gm(gi.call(this)),gi.call(this).focus(),je(Ku.call(this),Q("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return o=fi(this.Ba),l.length&&l[0].b!=o.b&&ll.call(this,l[0].c,t),l.length&&(r=r.substr(l[0].b.length+1)),r?new em(this.Ba,r):null},Ja:iv,ba:function(){return J(this,"firebaseui-recaptcha-container")},u:function(){return J(this,"firebaseui-id-recaptcha-error")},i:Le,ua:Oe,P:We});function rv(t,r,o,l){try{var d=r.U(Pu)}catch{return}d?Ss?(r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",Q("Verifying...").toString()),V(t,r.I(Z(t.cc,t),[Eu(d),o],function(h){var g=me(r);r.$("firebaseui-icon-done",Q("Code sent!").toString());var y=setTimeout(function(){r.h(),r.m(),L("phoneSignInFinish",t,g,d,15,h)},1e3);V(t,function(){r&&r.h(),clearTimeout(y)})},function(h){if(r.h(),!h.name||h.name!="cancel"){grecaptcha.reset(pm),Ss=null;var g=h&&h.message||"";if(h.code)switch(h.code){case"auth/too-many-requests":g=Q("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":r.O().focus(),je(r.B(),jc().toString());return;case"auth/admin-restricted-operation":if(pi(k(t))){h=me(r),r.m(),L("handleUnauthorizedUser",t,h,Eu(d),x.auth.PhoneAuthProvider.PROVIDER_ID);return}g=se(h);break;default:g=se(h)}r.a(g)}}))):sr?je(r.u(),Q("Solve the reCAPTCHA").toString()):!sr&&l&&r.i().click():(r.O().focus(),je(r.B(),jc().toString()))}ee.phoneSignInStart=function(t,r,o,l){var d=p1(k(t))||{};Ss=null,sr=!(d&&d.size==="invisible");var h=$g(t),g=b1(k(t)),y=h?y1(k(t)):null;g=o&&o.a||g&&g.c||null,o=o&&o.Aa||y,(y=Cu(k(t)))&&Zp(y),Pu=y?new Jp(Cu(k(t))):Is;var C=new Js(function(M){rv(t,C,R,!(!M||!M.keyCode))},sr,h?null:function(){R.clear(),C.m(),le(t,r)},ke(k(t)),Re(k(t)),h,Pu,g,o);C.render(r),G(t,C),l&&C.a(l),d.callback=function(M){C.u()&&yt(C.u()),Ss=M,sr||rv(t,C,R)},d["expired-callback"]=function(){Ss=null};var R=new x.auth.RecaptchaVerifier(sr?C.ba():C.i(),d,Nt(t).app);V(t,C.I(Z(R.render,R),[],function(M){pm=M},function(M){M.name&&M.name=="cancel"||(M=se(M),C.m(),le(t,r,void 0,M))}))},ee.prefilledEmailSignIn=function(t,r,o){var l=new ol;l.render(r),G(t,l),V(t,l.I(Z(K(t).fetchSignInMethodsForEmail,K(t)),[o],function(d){l.m();var h=!(!el(t)||!av(t));qg(t,r,d,o,void 0,h)},function(d){d=se(d),l.m(),L("signIn",t,r,o,d)}))};function Xs(t,r,o,l,d){T.call(this,Sg,{Sb:r},d,"providerSignIn",{F:o,D:l}),this.i=t}f(Xs,T),Xs.prototype.v=function(){this.l(this.i),T.prototype.v.call(this)},Xs.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(Xs.prototype,{l:function(t){function r(g){t(g)}for(var o=this.g?Lc("firebaseui-id-idp-button",this.g||this.s.a):[],l=0;l<o.length;l++){var d=o[l],h=al(d,"providerId");ge(this,d,Et(r,h))}}}),ee.providerSignIn=function(t,r,o,l){var d=new Xs(function(h){h==x.auth.EmailAuthProvider.PROVIDER_ID?(d.m(),Vu(t,r,l)):h==x.auth.PhoneAuthProvider.PROVIDER_ID?(d.m(),L("phoneSignInStart",t,r)):h=="anonymous"?x1(t,d):Ms(t,d,h,l),X(t),t.l.cancel()},rm(k(t)),ke(k(t)),Re(k(t)));d.render(r),G(t,d),o&&d.a(o),aI(t)},ee.sendEmailLinkForSignIn=function(t,r,o,l){var d=new tl;d.render(r),G(t,d),Wu(t,d,o,l,function(h){d.m(),h&&h.code=="auth/admin-restricted-operation"&&pi(k(t))?L("handleUnauthorizedUser",t,r,o,x.auth.EmailAuthProvider.PROVIDER_ID):(h=se(h),L("signIn",t,r,o,h))})};function Qs(t,r,o,l,d,h,g){T.call(this,zm,{email:o,Va:!!r,ia:!!h},g,"signIn",{F:l,D:d}),this.i=t,this.u=r}f(Qs,T),Qs.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),sl(this.l(),(this.l().value||"").length),T.prototype.v.call(this)},Qs.prototype.o=function(){this.u=this.i=null,T.prototype.o.call(this)},de(Qs.prototype,{l:an,M:Fn,w:vr,H:_r,j:yr,U:Le,P:Oe,B:We}),ee.signIn=function(t,r,o,l){var d=el(t),h=new Qs(function(){var g=h,y=g.j()||"";y&&zg(t,g,y)},d?null:function(){h.m(),le(t,r,o)},o,ke(k(t)),Re(k(t)),d);h.render(r),G(t,h),l&&h.a(l)};function Zs(t,r,o,l,d,h,g){T.call(this,cg,{kc:t,yb:o,Eb:!!l},g,"unauthorizedUser",{F:d,D:h}),this.l=r,this.i=l}f(Zs,T),Zs.prototype.v=function(){var t=this,r=J(this,"firebaseui-id-unauthorized-user-help-link");this.i&&r&&ge(this,r,function(){t.i()}),ge(this,this.u(),function(){t.l()}),this.u().focus(),T.prototype.v.call(this)},Zs.prototype.o=function(){this.i=this.l=null,T.prototype.o.call(this)},de(Zs.prototype,{u:Oe}),ee.handleUnauthorizedUser=function(t,r,o,l){function d(){le(t,r)}l===x.auth.EmailAuthProvider.PROVIDER_ID?d=function(){Vu(t,r)}:l===x.auth.PhoneAuthProvider.PROVIDER_ID&&(d=function(){L("phoneSignInStart",t,r)});var h=null,g=null;l===x.auth.EmailAuthProvider.PROVIDER_ID&&om(k(t))?(h=v1(k(t)),g=_1(k(t))):pi(k(t))&&(h=m1(k(t)),g=g1(k(t)));var y=new Zs(o,function(){y.m(),d()},h,g,ke(k(t)),Re(k(t)));y.render(r),G(t,y)};function eo(t,r,o,l,d,h){T.call(this,ug,{email:t},h,"unsupportedProvider",{F:l,D:d}),this.l=r,this.i=o}f(eo,T),eo.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),T.prototype.v.call(this)},eo.prototype.o=function(){this.i=this.l=null,T.prototype.o.call(this)},de(eo.prototype,{u:Le,B:Oe,w:We}),ee.unsupportedProvider=function(t,r,o){var l=new eo(o,function(){l.m(),L("passwordRecovery",t,r,o)},function(){l.m(),le(t,r,o)},ke(k(t)),Re(k(t)));l.render(r),G(t,l)};function zt(t,r){this.$=!1;var o=Xu(r);if(to[o])throw Error('An AuthUI instance already exists for the key "'+o+'"');to[o]=this,this.a=t,this.u=null,this.Y=!1,sv(this.a),this.h=x.initializeApp({apiKey:t.app.options.apiKey,authDomain:t.app.options.authDomain},t.app.name+"-firebaseui-temp").auth(),(t=t.emulatorConfig)&&(o=t.port,this.h.useEmulator(t.protocol+"://"+t.host+(o===null?"":":"+o),t.options)),sv(this.h),this.h.setPersistence&&this.h.setPersistence(x.auth.Auth.Persistence.SESSION),this.oa=r,this.ca=new f1,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=nu.Xa(),this.j=this.C=null,this.da=this.A=!1}function sv(t){t&&t.INTERNAL&&t.INTERNAL.logFramework&&t.INTERNAL.logFramework("FirebaseUI-web")}var to={};function Xu(t){return t||"[DEFAULT]"}function ov(t){return X(t),t.i||(t.i=cn(t,function(r){return r&&!Vt(F(t))?Ie(Nt(t).getRedirectResult().then(function(o){return o},function(o){if(o&&o.code=="auth/email-already-in-use"&&o.email&&o.credential)throw o;return Bn(t,o)})):Ie(K(t).getRedirectResult().then(function(o){return ja(k(t))&&!o.user&&t.j&&!t.j.isAnonymous?Nt(t).getRedirectResult():o}))})),t.i}function G(t,r){X(t),t.g=r}var Er=null;function K(t){return X(t),t.h}function Nt(t){return X(t),t.a}function F(t){return X(t),t.oa}function av(t){return X(t),t.O?t.O.emailHint:void 0}i=zt.prototype,i.nb=function(){return X(this),!!_u(F(this))||lv(on())};function lv(t){return t=new ni(t),(t.a.a.get(Ae.ub)||null)==="signIn"&&!!t.a.a.get(Ae.$a)}i.start=function(t,r){cv(this,t,r)};function cv(t,r,o,l){X(t),typeof t.a.languageCode<"u"&&(t.u=t.a.languageCode);var d="en".replace(/_/g,"-");t.a.languageCode=d,t.h.languageCode=d,t.Y=!0,typeof t.a.tenantId<"u"&&(t.h.tenantId=t.a.tenantId),t.ib(o),t.O=l||null;var h=v.document;t.C?t.C.then(function(){h.readyState=="complete"?cl(t,r):hs(window,"load",function(){cl(t,r)})}):h.readyState=="complete"?cl(t,r):hs(window,"load",function(){cl(t,r)})}function cl(t,r){var o=_a(r,"Could not find the FirebaseUI widget element on the page.");if(o.setAttribute("lang","en".replace(/_/g,"-")),Er){var l=Er;X(l),Vt(F(l))&&Mn("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Er.reset()}if(Er=t,t.T=o,oI(t,o),Ua(new pu)&&Ua(new mu)){r=_a(r,"Could not find the FirebaseUI widget element on the page."),o=on(),l=wu(k(t).a,"queryParameterForSignInSuccessUrl"),o=(o=na(o,l))?Rn(ra(o)).toString():null;e:{l=on();var d=cm(k(t));l=na(l,d)||"";for(h in Nu)if(Nu[h].toLowerCase()==l.toLowerCase()){var h=Nu[h];break e}h="callback"}switch(h){case"callback":o&&(h=F(t),tr(bs,o,h)),t.nb()?L("callback",t,r):le(t,r,av(t));break;case"resetPassword":L("passwordReset",t,r,xs(),Hu());break;case"recoverEmail":L("emailChangeRevocation",t,r,xs());break;case"revertSecondFactorAddition":L("revertSecondFactorAddition",t,r,xs());break;case"verifyEmail":L("emailVerification",t,r,xs(),Hu());break;case"verifyAndChangeEmail":L("verifyAndChangeEmail",t,r,xs(),Hu());break;case"signIn":L("emailLinkSignInCallback",t,r,on()),fv();break;case"select":o&&(h=F(t),tr(bs,o,h)),le(t,r);break;default:throw Error("Unhandled widget operation.")}r=k(t),(r=Cs(r).uiShown||null)&&r()}else r=_a(r,"Could not find the FirebaseUI widget element on the page."),h=new Hg(Q("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),h.render(r),G(t,h);r=t.g&&t.g.Ga=="blank"&&Su(k(t)),_u(F(t))&&!r&&(r=_u(F(t)),hv(t,r.a),st(hi,F(t)))}function cn(t,r){if(t.A)return r(uv(t));if(V(t,function(){t.A=!1}),ja(k(t))){var o=new Pe(function(l){V(t,t.a.onAuthStateChanged(function(d){t.j=d,t.A||(t.A=!0,l(r(uv(t))))}))});return V(t,o),o}return t.A=!0,r(null)}function uv(t){return X(t),ja(k(t))&&t.j&&t.j.isAnonymous?t.j:null}function V(t,r){if(X(t),r){t.s.push(r);var o=function(){F0(t.s,function(l){return l==r})};typeof r!="function"&&r.then(o,o)}}i.Db=function(){X(this),this.Z=!0};function sI(t){X(t);var r;return(r=t.Z)||(t=k(t),t=lm(t,x.auth.GoogleAuthProvider.PROVIDER_ID),r=!(!t||t.prompt!=="select_account")),r}function dv(t){typeof t.a.languageCode<"u"&&t.Y&&(t.Y=!1,t.a.languageCode=t.u)}function hv(t,r){t.a.tenantId=r,t.h.tenantId=r}i.reset=function(){X(this);var t=this;this.T&&this.T.removeAttribute("lang"),this.J&&jw(this.J),dv(this),this.O=null,fv(),st(hi,F(this)),X(this),this.l.cancel(),this.i=Ie({user:null,credential:null}),Er==this&&(Er=null),this.T=null;for(var r=0;r<this.s.length;r++)typeof this.s[r]=="function"?this.s[r]():this.s[r].cancel&&this.s[r].cancel();this.s=[],Ht(F(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Un(this).then(function(){t.C=null},function(){t.C=null}))};function oI(t,r){t.L=null,t.J=new ga(r),t.J.register(),Rt(t.J,"pageEnter",function(o){if(o=o&&o.pageId,t.L!=o){var l=k(t);(l=Cs(l).uiChanged||null)&&l(t.L,o),t.L=o}})}i.ib=function(t){X(this);var r=this.ca,o;for(o in t)try{bu(r.a,o,t[o])}catch{vt('Invalid config: "'+o+'"',void 0)}aw&&bu(r.a,"popupMode",!1),Cu(r),!this.da&&Tu(k(this))&&(Mn("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function k(t){return X(t),t.ca}i.Wb=function(){X(this);var t=k(this),r=wu(t.a,"widgetUrl");t=cm(t);for(var o=r.search(lf),l=0,d,h=[];0<=(d=af(r,l,t,o));)h.push(r.substring(l,d)),l=Math.min(r.indexOf("&",d)+1||o,o);h.push(r.substr(l)),r=h.join("").replace(J0,"$1"),o="="+encodeURIComponent("select"),(t+=o)?(o=r.indexOf("#"),0>o&&(o=r.length),l=r.indexOf("?"),0>l||l>o?(l=o,d=""):d=r.substring(l+1,o),r=[r.substr(0,l),d,r.substr(o)],o=r[1],r[1]=t?o?o+"&"+t:t:o,o=r[0]+(r[1]?"?"+r[1]:"")+r[2]):o=r,k(this).a.get("popupMode")?(t=(window.screen.availHeight-600)/2,r=(window.screen.availWidth-500)/2,o=o||"about:blank",t={width:500,height:600,top:0<t?t:0,left:0<r?r:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},t.target=t.target||o.target||"google_popup",t.width=t.width||690,t.height=t.height||500,(t=up(o,t))&&t.focus()):Gi(window.location,o)};function X(t){if(t.$)throw Error("AuthUI instance is deleted!")}i.Wa=function(){var t=this;return X(this),this.h.app.delete().then(function(){var r=Xu(F(t));delete to[r],t.reset(),t.$=!0})};function aI(t){X(t);try{gp(t.l,sm(k(t)),sI(t)).then(function(r){return t.g?F1(t,t.g,r):!1})}catch{}}i.Ib=function(t,r){X(this);var o=this,l=qw();if(!rr(k(this)))return $i(Error("Email link sign-in should be enabled to trigger email sending."));var d=I1(k(this)),h=new ni(d.url);return iw(h,l),r&&r.a&&(h1(l,r,F(this)),ff(h,r.a.providerId)),rw(h,w1(k(this))),cn(this,function(g){return g&&((g=g.uid)?h.a.a.set(Ae.Pa,g):ti(h.a.a,Ae.Pa)),d.url=h.toString(),K(o).sendSignInLinkToEmail(t,d)}).then(function(){var g=F(o),y={};y.email=t,tr(Zi,Fp(l,JSON.stringify(y)),g)},function(g){throw st(ws,F(o)),st(Zi,F(o)),g})};function lI(t,r){var o=hf(new ni(r));return o?(r=new Pe(function(l,d){var h=Nt(t).onAuthStateChanged(function(g){h(),g&&g.isAnonymous&&g.uid===o?l(g):g&&g.isAnonymous&&g.uid!==o?d(Error("anonymous-user-mismatch")):d(Error("anonymous-user-not-found"))});V(t,h)}),V(t,r),r):Ie(null)}function cI(t,r,o,l,d){X(t);var h=d||null,g=x.auth.EmailAuthProvider.credentialWithLink(o,l);return o=h?K(t).signInWithEmailLink(o,l).then(function(y){return y.user.linkWithCredential(h)}).then(function(){return Un(t)}).then(function(){return Bn(t,{code:"auth/email-already-in-use"},h)}):K(t).fetchSignInMethodsForEmail(o).then(function(y){return y.length?Bn(t,{code:"auth/email-already-in-use"},g):r.linkWithCredential(g)}),V(t,o),o}function uI(t,r,o,l){X(t);var d=l||null,h;return r=K(t).signInWithEmailLink(r,o).then(function(g){if(h={user:g.user,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo},d)return g.user.linkWithCredential(d).then(function(y){h={user:y.user,credential:d,operationType:h.operationType,additionalUserInfo:y.additionalUserInfo}})}).then(function(){Un(t)}).then(function(){return Nt(t).updateCurrentUser(h.user)}).then(function(){return h.user=Nt(t).currentUser,h}),V(t,r),r}function fv(){var t=on();if(lv(t)){t=new ni(t);for(var r in Ae)Ae.hasOwnProperty(r)&&ti(t.a.a,Ae[r]);r={state:"signIn",mode:"emailLink",operation:"clear"};var o=v.document.title;v.history&&v.history.replaceState&&v.history.replaceState(r,o,t.toString())}}i.bc=function(t,r){X(this);var o=this;return K(this).signInWithEmailAndPassword(t,r).then(function(l){return cn(o,function(d){return d?Un(o).then(function(){return Bn(o,{code:"auth/email-already-in-use"},x.auth.EmailAuthProvider.credential(t,r))}):l})})},i.Yb=function(t,r){X(this);var o=this;return cn(this,function(l){if(l){var d=x.auth.EmailAuthProvider.credential(t,r);return l.linkWithCredential(d)}return K(o).createUserWithEmailAndPassword(t,r)})},i.ac=function(t){X(this);var r=this;return cn(this,function(o){return o?o.linkWithCredential(t).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return Bn(r,l,t)}):K(r).signInWithCredential(t)})};function dI(t,r){return X(t),cn(t,function(o){return o&&!Vt(F(t))?o.linkWithPopup(r).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return Bn(t,l)}):K(t).signInWithPopup(r)})}i.dc=function(t){X(this);var r=this,o=this.i;return this.i=null,cn(this,function(l){return l&&!Vt(F(r))?l.linkWithRedirect(t):K(r).signInWithRedirect(t)}).then(function(){},function(l){throw r.i=o,l})},i.cc=function(t,r){X(this);var o=this;return cn(this,function(l){return l?l.linkWithPhoneNumber(t,r).then(function(d){return new ru(d,function(h){if(h.code=="auth/credential-already-in-use")return Bn(o,h);throw h})}):Nt(o).signInWithPhoneNumber(t,r).then(function(d){return new ru(d)})})},i.$b=function(){return X(this),Nt(this).signInAnonymously()};function hI(t,r){return X(t),cn(t,function(o){if(t.j&&!t.j.isAnonymous&&ja(k(t))&&!K(t).currentUser)return Un(t).then(function(){return r.credential.providerId=="password"&&(r.credential=null),r});if(o)return Un(t).then(function(){return o.linkWithCredential(r.credential)}).then(function(l){return r.user=l.user,r.credential=l.credential,r.operationType=l.operationType,r.additionalUserInfo=l.additionalUserInfo,r},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return Bn(t,l,r.credential)});if(!r.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Un(t).then(function(){return Nt(t).updateCurrentUser(r.user)}).then(function(){return r.user=Nt(t).currentUser,r.operationType="signIn",r.credential&&r.credential.providerId&&r.credential.providerId=="password"&&(r.credential=null),r})})}i.Xb=function(t,r){return X(this),K(this).signInWithEmailAndPassword(t,r)};function Un(t){return X(t),K(t).signOut()}function Bn(t,r,o){if(X(t),r&&r.code&&(r.code=="auth/email-already-in-use"||r.code=="auth/credential-already-in-use")){var l=fm(k(t));return Ie().then(function(){return l(new ls("anonymous-upgrade-merge-conflict",null,o||r.credential))}).then(function(){throw t.g&&(t.g.m(),t.g=null),r})}return $i(r)}function no(t,r,o,l){T.call(this,Ng,void 0,l,"providerMatchByEmail",{F:r,D:o}),this.i=t}f(no,T),no.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),sl(this.l(),(this.l().value||"").length),T.prototype.v.call(this)},no.prototype.o=function(){this.i=null,T.prototype.o.call(this)},de(no.prototype,{l:an,H:Fn,u:vr,B:_r,j:yr,M:Le,w:We});function ul(t,r,o,l,d){T.call(this,Ag,{ec:r},d,"selectTenant",{F:o,D:l}),this.i=t}f(ul,T),ul.prototype.v=function(){fI(this,this.i),T.prototype.v.call(this)},ul.prototype.o=function(){this.i=null,T.prototype.o.call(this)};function fI(t,r){function o(y){r(y)}for(var l=t.g?Lc("firebaseui-id-tenant-selection-button",t.g||t.s.a):[],d=0;d<l.length;d++){var h=l[d],g=al(h,"tenantId");ge(t,h,Et(o,g))}}function Qu(t){T.call(this,Qm,void 0,t,"spinner")}f(Qu,T);function pI(t){this.a=new yu,Te(this.a,"authDomain"),Te(this.a,"displayMode",hl),Te(this.a,"tenants"),Te(this.a,"callbacks"),Te(this.a,"tosUrl"),Te(this.a,"privacyPolicyUrl");for(var r in t)if(t.hasOwnProperty(r))try{bu(this.a,r,t[r])}catch{vt('Invalid config: "'+r+'"',void 0)}}function mI(t){t=t.a.get("displayMode");for(var r in ed)if(ed[r]===t)return ed[r];return hl}function dl(t){return t.a.get("callbacks")||{}}function pv(t){var r=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,r&&!t&&Mn("Privacy Policy URL is missing, the link will not be displayed."),r&&t){if(typeof r=="function")return r;if(typeof r=="string")return function(){qi(r)}}return null}function mv(t){var r=t.a.get("tosUrl")||null,o=t.a.get("privacyPolicyUrl")||null;if(o&&!r&&Mn("Terms of Service URL is missing, the link will not be displayed."),r&&o){if(typeof o=="function")return o;if(typeof o=="string")return function(){qi(o)}}return null}function Zu(t,r){if(t=t.a.get("tenants"),!t||!t.hasOwnProperty(r)&&!t.hasOwnProperty(fl))throw Error("Invalid tenant configuration!")}function gv(t,r,o){if(t=t.a.get("tenants"),!t)throw Error("Invalid tenant configuration!");var l=[];if(t=t[r]||t[fl],!t)return vt("Invalid tenant configuration: "+(r+" is not configured!"),void 0),l;if(r=t.signInOptions,!r)throw Error("Invalid tenant configuration: signInOptions are invalid!");return r.forEach(function(d){if(typeof d=="string")l.push(d);else if(typeof d.provider=="string"){var h=d.hd;h&&o?(h instanceof RegExp?h:new RegExp("@"+h.replace(".","\\.")+"$")).test(o)&&l.push(d.provider):l.push(d.provider)}else d="Invalid tenant configuration: signInOption "+(JSON.stringify(d)+" is invalid!"),vt(d,void 0)}),l}function gI(t,r,o){return t=vI(t,r),(r=t.signInOptions)&&o&&(r=r.filter(function(l){return typeof l=="string"?o.includes(l):o.includes(l.provider)}),t.signInOptions=r),t}function vI(t,r){var o=_I,l=l===void 0?{}:l;return Zu(t,r),t=t.a.get("tenants"),Kw(t[r]||t[fl],o,l)}var _I=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],hl="optionFirst",ed={pc:hl,oc:"identifierFirst"},fl="*";function Pt(t,r){var o=this;this.s=_a(t),this.a={},Object.keys(r).forEach(function(l){o.a[l]=new pI(r[l])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(l){this.ob=l||null},enumerable:!1})}i=Pt.prototype,i.Ub=function(t,r){var o=this;jn(this);var l=t.apiKey;return new Pe(function(d,h){if(o.a.hasOwnProperty(l)){var g=dl(o.a[l]).selectTenantUiHidden||null;if(mI(o.a[l])===hl){var y=[];r.forEach(function(M){M=M||"_";var ie=o.a[l].a.get("tenants");if(!ie)throw Error("Invalid tenant configuration!");(ie=ie[M]||ie[fl])?M={tenantId:M!=="_"?M:null,V:ie.fullLabel||null,displayName:ie.displayName,za:ie.iconUrl,ta:ie.buttonColor}:(vt("Invalid tenant configuration: "+(M+" is not configured!"),void 0),M=null),M&&y.push(M)});var C=function(M){M={tenantId:M,providerIds:gv(o.a[l],M||"_")},d(M)};if(y.length===1){C(y[0].tenantId);return}o.g=new ul(function(M){jn(o),g&&g(),C(M)},y,pv(o.a[l]),mv(o.a[l]))}else o.g=new no(function(){var M=o.g.j();if(M){for(var ie=0;ie<r.length;ie++){var Ot=gv(o.a[l],r[ie]||"_",M);if(Ot.length!==0){M={tenantId:r[ie],providerIds:Ot,email:M},jn(o),g&&g(),d(M);return}}o.g.a(Bf({code:"no-matching-tenant-for-email"}).toString())}},pv(o.a[l]),mv(o.a[l]));o.g.render(o.s),(h=dl(o.a[l]).selectTenantUiShown||null)&&h()}else{var R=Error("Invalid project configuration: API key is invalid!");R.code="invalid-configuration",o.pb(R),h(R)}})},i.Pb=function(t,r){if(!this.a.hasOwnProperty(t))throw Error("Invalid project configuration: API key is invalid!");var o=r||void 0;Zu(this.a[t],r||"_");try{this.i=x.app(o).auth()}catch{var l=this.a[t].a.get("authDomain");if(!l)throw Error("Invalid project configuration: authDomain is required!");t=x.initializeApp({apiKey:t,authDomain:l},o),t.auth().tenantId=r,this.i=t.auth()}return this.i},i.Zb=function(t,r){var o=this;return new Pe(function(l,d){function h(ie,Ot){o.j=new zt(t),cv(o.j,o.s,ie,Ot)}var g=t.app.options.apiKey;o.a.hasOwnProperty(g)||d(Error("Invalid project configuration: API key is invalid!"));var y=gI(o.a[g],t.tenantId||"_",r&&r.providerIds);jn(o),d={signInSuccessWithAuthResult:function(ie){return l(ie),!1}};var C=dl(o.a[g]).signInUiShown||null,R=!1;d.uiChanged=function(ie,Ot){ie===null&&Ot==="callback"?((ie=Mc("firebaseui-id-page-callback",o.s))&&yt(ie),o.h=new Qu,o.h.render(o.s)):R||ie===null&&Ot==="spinner"||Ot==="blank"||(o.h&&(o.h.m(),o.h=null),R=!0,C&&C(t.tenantId))},y.callbacks=d,y.credentialHelper="none";var M;r&&r.email&&(M={emailHint:r.email}),o.j?o.j.Wa().then(function(){h(y,M)}):h(y,M)})},i.reset=function(){var t=this;return Ie().then(function(){t.j&&t.j.Wa()}).then(function(){t.j=null,jn(t)})},i.Vb=function(){var t=this;this.h||this.A||(this.A=window.setTimeout(function(){jn(t),t.h=new Qu,t.g=t.h,t.h.render(t.s),t.A=null},500))},i.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},i.Bb=function(){return jn(this),this.g=new Ug,this.g.render(this.s),Ie()};function jn(t){t.j&&t.j.reset(),t.mb(),t.g&&t.g.m()}i.pb=function(t){var r=this,o=Bf({code:t.code}).toString()||t.message;jn(this);var l;t.retry&&typeof t.retry=="function"&&(l=function(){r.reset(),t.retry()}),this.g=new Vg(o,l),this.g.render(this.s)},i.Rb=function(t){var r=this;return Ie().then(function(){var o=r.i&&r.i.app.options.apiKey;if(!r.a.hasOwnProperty(o))throw Error("Invalid project configuration: API key is invalid!");if(Zu(r.a[o],t.tenantId||"_"),!r.i.currentUser||r.i.currentUser.uid!==t.uid)throw Error("The user being processed does not match the signed in user!");return(o=dl(r.a[o]).beforeSignInSuccess||null)?o(t):t}).then(function(o){if(o.uid!==t.uid)throw Error("User with mismatching UID returned.");return o})},pe("firebaseui.auth.FirebaseUiHandler",Pt),pe("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Pt.prototype.Ub),pe("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Pt.prototype.Pb),pe("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Pt.prototype.Zb),pe("firebaseui.auth.FirebaseUiHandler.prototype.reset",Pt.prototype.reset),pe("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Pt.prototype.Vb),pe("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Pt.prototype.mb),pe("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Pt.prototype.Bb),pe("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Pt.prototype.pb),pe("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Pt.prototype.Rb),pe("firebaseui.auth.AuthUI",zt),pe("firebaseui.auth.AuthUI.getInstance",function(t){return t=Xu(t),to[t]?to[t]:null}),pe("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",zt.prototype.Db),pe("firebaseui.auth.AuthUI.prototype.start",zt.prototype.start),pe("firebaseui.auth.AuthUI.prototype.setConfig",zt.prototype.ib),pe("firebaseui.auth.AuthUI.prototype.signIn",zt.prototype.Wb),pe("firebaseui.auth.AuthUI.prototype.reset",zt.prototype.reset),pe("firebaseui.auth.AuthUI.prototype.delete",zt.prototype.Wa),pe("firebaseui.auth.AuthUI.prototype.isPendingRedirect",zt.prototype.nb),pe("firebaseui.auth.AuthUIError",ls),pe("firebaseui.auth.AuthUIError.prototype.toJSON",ls.prototype.toJSON),pe("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",ku),pe("firebaseui.auth.CredentialHelper.NONE",Va),pe("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Pe.prototype.catch=Pe.prototype.Ca,Pe.prototype.finally=Pe.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=h2);var f2=firebaseui.auth,p2="firebase",m2="9.12.1";/**
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
 */Ft(p2,m2,"app");const Jv="@firebase/database",Xv="0.13.9";/**
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
 */let gb="";function g2(i){gb=i}/**
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
 */class v2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ko(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vb=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v2(e)}}catch{}return new _2},wi=vb("localStorage"),Ld=vb("sessionStorage");/**
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
 */const Or=new Zl("@firebase/database"),y2=function(){let i=1;return function(){return i++}}(),_b=function(i){const e=QI(i),n=new YI;n.update(e);const s=n.digest();return Kd.encodeByteArray(s)},qo=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qo.apply(null,s):typeof s=="object"?e+=$e(s):e+=s,e+=" "}return e};let Ti=null,Qv=!0;const b2=function(i,e){O(!e||i===!0||i===!1,"Can't turn on custom loggers persistently."),i===!0?(Or.logLevel=ae.VERBOSE,Ti=Or.log.bind(Or),e&&Ld.set("logging_enabled",!0)):typeof i=="function"?Ti=i:(Ti=null,Ld.remove("logging_enabled"))},Ze=function(...i){if(Qv===!0&&(Qv=!1,Ti===null&&Ld.get("logging_enabled")===!0&&b2(!0)),Ti){const e=qo.apply(null,i);Ti(e)}},Ko=function(i){return function(...e){Ze(i,...e)}},Md=function(...i){const e="FIREBASE INTERNAL ERROR: "+qo(...i);Or.error(e)},_n=function(...i){const e=`FIREBASE FATAL ERROR: ${qo(...i)}`;throw Or.error(e),new Error(e)},dt=function(...i){const e="FIREBASE WARNING: "+qo(...i);Or.warn(e)},w2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yb=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},I2=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wr="[MIN_NAME]",Ai="[MAX_NAME]",Jr=function(i,e){if(i===e)return 0;if(i===Wr||e===Ai)return-1;if(e===Wr||i===Ai)return 1;{const n=Zv(i),s=Zv(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},E2=function(i,e){return i===e?0:i<e?-1:1},lo=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+$e(e))},_h=function(i){if(typeof i!="object"||i===null)return $e(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=$e(e[s]),n+=":",n+=_h(i[e[s]]);return n+="}",n},bb=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(i.substring(a,n)):s.push(i.substring(a,a+e));return s};function ht(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const wb=function(i){O(!yb(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,c,u,f,p;i===0?(c=0,u=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),c=f+s,u=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,u=Math.round(i/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(a?1:0),m.reverse();const b=m.join("");let v="";for(p=0;p<64;p+=8){let w=parseInt(b.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),v=v+w}return v.toLowerCase()},C2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},S2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function T2(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const k2=new RegExp("^-?(0*)\\d{1,10}$"),R2=-2147483648,A2=2147483647,Zv=function(i){if(k2.test(i)){const e=Number(i);if(e>=R2&&e<=A2)return e}return null},Xr=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},N2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bo=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class O2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Dr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dr.OWNER="owner";/**
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
 */const yh="5",Ib="v",Eb="s",Cb="r",Sb="f",Tb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kb="ls",Rb="p",xd="ac",Ab="websocket",Nb="long_polling";/**
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
 */class Pb{constructor(e,n,s,a,c=!1,u="",f=!1){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function D2(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Ob(i,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Ab)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Nb)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);D2(i)&&(n.ns=i.namespace);const a=[];return ht(n,(c,u)=>{a.push(c+"="+u)}),s+a.join("&")}/**
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
 */class L2{constructor(){this.counters_={}}incrementCounter(e,n=1){jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DI(this.counters_)}}/**
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
 */const fd={},pd={};function bh(i){const e=i.toString();return fd[e]||(fd[e]=new L2),fd[e]}function M2(i,e){const n=i.toString();return pd[n]||(pd[n]=e()),pd[n]}/**
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
 */class x2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Xr(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const e_="start",F2="close",U2="pLPCommand",B2="pRTLPCB",Db="id",Lb="pw",Mb="ser",j2="cb",W2="seg",V2="ts",H2="d",G2="dframe",xb=1870,Fb=30,$2=xb-Fb,z2=25e3,q2=3e4;class Rr{constructor(e,n,s,a,c,u,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ko(e),this.stats_=bh(n),this.urlFn=p=>(this.appCheckToken&&(p[xd]=this.appCheckToken),Ob(n,Nb,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new x2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(q2)),I2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wh((...c)=>{const[u,f,p,m,b]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===e_)this.id=f,this.password=p;else if(u===F2)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...c)=>{const[u,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[e_]="t",s[Mb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[j2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ib]=yh,this.transportSessionId&&(s[Eb]=this.transportSessionId),this.lastSessionId&&(s[kb]=this.lastSessionId),this.applicationId&&(s[Rb]=this.applicationId),this.appCheckToken&&(s[xd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tb.test(location.hostname)&&(s[Cb]=Sb);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rr.forceAllow_=!0}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){return Rr.forceAllow_?!0:!Rr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!C2()&&!S2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=J_(n),a=bb(s,$2);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[G2]="t",s[Db]=e,s[Lb]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wh{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=y2(),window[U2+this.uniqueCallbackIdentifier]=e,window[B2+this.uniqueCallbackIdentifier]=n,this.myIFrame=wh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Ze("frame writing exception"),f.stack&&Ze(f.stack),Ze(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Db]=this.myID,e[Lb]=this.myPW,e[Mb]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fb+s.length<=xb;){const u=this.pendingSegs.shift();s=s+"&"+W2+a+"="+u.seg+"&"+V2+a+"="+u.ts+"&"+H2+a+"="+u.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(z2)),c=()=>{clearTimeout(a),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const K2=16384,Y2=45e3;let Dl=null;typeof MozWebSocket<"u"?Dl=MozWebSocket:typeof WebSocket<"u"&&(Dl=WebSocket);class Dt{constructor(e,n,s,a,c,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ko(this.connId),this.stats_=bh(n),this.connURL=Dt.connectionURL_(n,u,f,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,c){const u={};return u[Ib]=yh,typeof location<"u"&&location.hostname&&Tb.test(location.hostname)&&(u[Cb]=Sb),n&&(u[Eb]=n),s&&(u[kb]=s),a&&(u[xd]=a),c&&(u[Rb]=c),Ob(e,Ab,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wi.set("previous_websocket_failure",!0);try{let s;ey(),this.mySock=new Dl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Dl!==null&&!Dt.forceDisallow_}static previouslyFailed(){return wi.isInMemoryStorage||wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ko(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bb(n,K2);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
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
 */class Lo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rr,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Dt&&Dt.isAvailable();let s=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dt];else{const a=this.transports_=[];for(const c of Lo.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lo.globalTransportInitialized_=!1;/**
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
 */const J2=6e4,X2=5e3,Q2=10*1024,Z2=100*1024,md="t",t_="d",eR="s",n_="r",tR="e",i_="o",r_="a",s_="n",o_="p",nR="h";class iR{constructor(e,n,s,a,c,u,f,p,m,b){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=b,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ko("c:"+this.id+":"),this.transportManager_=new Lo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Q2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(md in e){const n=e[md];n===r_?this.upgradeIfSecondaryHealthy_():n===n_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===i_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=lo("t",e),s=lo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:o_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:r_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:s_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=lo("t",e),s=lo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=lo(md,e);if(t_ in e){const s=e[t_];if(n===nR)this.onHandshake_(s);else if(n===s_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eR?this.onConnectionShutdown_(s):n===n_?this.onReset_(s):n===tR?Md("Server Error: "+s):n===i_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Md("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yh!==s&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(J2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:o_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ub{put(e,n,s,a){}merge(e,n,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Bb{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!s||s===a[c].context)){a.splice(c,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ll extends Bb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ll}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const a_=32,l_=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new ce("")}function $(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Jn(i){return i.pieces_.length-i.pieceNum_}function ue(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ce(i.pieces_,e)}function jb(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function rR(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Wb(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Vb(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new ce(e,0)}function xe(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new ce(n,0)}function Y(i){return i.pieceNum_>=i.pieces_.length}function lt(i,e){const n=$(i),s=$(e);if(n===null)return e;if(n===s)return lt(ue(i),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Ih(i,e){if(Jn(i)!==Jn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Jn(i)>Jn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sR{constructor(e,n){this.errorPrefix_=n,this.parts_=Wb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ql(this.parts_[s]);Hb(this)}}function oR(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ql(e),Hb(i)}function aR(i){const e=i.parts_.pop();i.byteLength_-=Ql(e),i.parts_.length>0&&(i.byteLength_-=1)}function Hb(i){if(i.byteLength_>l_)throw new Error(i.errorPrefix_+"has a key path longer than "+l_+" bytes ("+i.byteLength_+").");if(i.parts_.length>a_)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+a_+") or object contains a cycle "+_i(i))}function _i(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class Eh extends Bb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Eh}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const co=1e3,lR=60*5*1e3,c_=30*1e3,cR=1.3,uR=3e4,dR="server_kill",u_=3;class mn extends Ub{constructor(e,n,s,a,c,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=mn.nextPersistentConnectionId_++,this.log_=Ko("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=co,this.maxReconnectDelay_=lR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!ey())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Eh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_($e(c)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new Xl,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,a){this.initConnection_();const c=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+c),this.listens.has(u)||this.listens.set(u,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(u).has(c),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(u).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const c={p:s},u="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(u,c,f=>{const p=f.d,m=f.s;mn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jt(e,"w")){const s=Fr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||KI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=c_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const c=a.s,u=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},u="n";a&&(c.q=s,c.t=a),this.sendRequest(u,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,c){this.initConnection_();const u={p:n,d:s};c!==void 0&&(u.h=c),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Md("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uR&&(this.reconnectDelay_=co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+mn.nextConnectionId_++,c=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},m=function(v){O(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:m};const b=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,w]=await Promise.all([this.authTokenProvider_.getToken(b),this.appCheckTokenProvider_.getToken(b)]);u?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=w&&w.token,f=new iR(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,E=>{dt(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(dR)},c))}catch(v){this.log_("Failed to get token: "+v),u||(this.repoInfo_.nodeAdmin&&dt(v),p())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ed(this.interruptReasons_)&&(this.reconnectDelay_=co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>_h(c)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let a;if(this.listens.has(s)){const c=this.listens.get(s);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=u_&&(this.reconnectDelay_=c_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=u_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gb.replace(/\./g,"-")]=1,Yd()?e["framework.cordova"]=1:Jl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ll.getInstance().currentlyOnline();return Ed(this.interruptReasons_)&&e}}mn.nextPersistentConnectionId_=0;mn.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(Wr,e),a=new z(Wr,n);return this.compare(s,a)!==0}minPost(){return z.MIN}}/**
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
 */let gl;class Gb extends fc{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(e){gl=e}compare(e,n){return Jr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Ai,gl)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,gl)}toString(){return".key"}}const Lr=new Gb;/**
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
 */class vl{constructor(e,n,s,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s!=null?s:He.RED,this.left=a!=null?a:ct.EMPTY_NODE,this.right=c!=null?c:ct.EMPTY_NODE}copy(e,n,s,a,c){return new He(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,a!=null?a:this.left,c!=null?c:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class hR{copy(e,n,s,a,c){return this}insert(e,n,s){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vl(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new hR;/**
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
 */function fR(i,e){return Jr(i.name,e.name)}function Ch(i,e){return Jr(i,e)}/**
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
 */let Fd;function pR(i){Fd=i}const $b=function(i){return typeof i=="number"?"number:"+wb(i):"string:"+i},zb=function(i){if(i.isLeafNode()){const e=i.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jt(e,".sv"),"Priority must be a string or number.")}else O(i===Fd||i.isEmpty(),"priority of unexpected type.");O(i===Fd||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let d_;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zb(this.priorityNode_)}static set __childrenNodeConstructor(e){d_=e}static get __childrenNodeConstructor(){return d_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:$(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$b(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wb(this.value_):e+=this.value_,this.lazyHash_=_b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=Ve.VALUE_TYPE_ORDER.indexOf(n),c=Ve.VALUE_TYPE_ORDER.indexOf(s);return O(a>=0,"Unknown leaf type: "+n),O(c>=0,"Unknown leaf type: "+s),a===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qb,Kb;function mR(i){qb=i}function gR(i){Kb=i}class vR extends fc{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),c=s.compareTo(a);return c===0?Jr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Ai,new Ve("[PRIORITY-POST]",Kb))}makePost(e,n){const s=qb(e);return new z(n,new Ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const Se=new vR;/**
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
 */const _R=Math.log(2);class yR{constructor(e){const n=c=>parseInt(Math.log(c)/_R,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ml=function(i,e,n,s){i.sort(e);const a=function(p,m){const b=m-p;let v,w;if(b===0)return null;if(b===1)return v=i[p],w=n?n(v):v,new He(w,v.node,He.BLACK,null,null);{const E=parseInt(b/2,10)+p,A=a(p,E),_=a(E+1,m);return v=i[E],w=n?n(v):v,new He(w,v.node,He.BLACK,A,_)}},c=function(p){let m=null,b=null,v=i.length;const w=function(A,_){const I=v-A,S=v;v-=A;const P=a(I+1,S),j=i[I],re=n?n(j):j;E(new He(re,j.node,_,null,P))},E=function(A){m?(m.left=A,m=A):(b=A,m=A)};for(let A=0;A<p.count;++A){const _=p.nextBitIsOne(),I=Math.pow(2,p.count-(A+1));_?w(I,He.BLACK):(w(I,He.BLACK),w(I,He.RED))}return b},u=new yR(i.length),f=c(u);return new ct(s||e,f)};/**
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
 */let gd;const Sr={};class hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Sr&&Se,"ChildrenNode.ts has not been loaded"),gd=gd||new hn({".priority":Sr},{".priority":Se}),gd}get(e){const n=Fr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return jt(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const c=n.getIterator(z.Wrap);let u=c.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=c.getNext();let f;a?f=Ml(s,e.getCompare()):f=Sr;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const b=Object.assign({},this.indexes_);return b[p]=f,new hn(b,m)}addToIndexes(e,n){const s=Tl(this.indexes_,(a,c)=>{const u=Fr(this.indexSet_,c);if(O(u,"Missing index implementation for "+c),a===Sr)if(u.isDefinedOn(e.node)){const f=[],p=n.getIterator(z.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),Ml(f,u.getCompare())}else return Sr;else{const f=n.get(e.name);let p=a;return f&&(p=p.remove(new z(e.name,f))),p.insert(e,e.node)}});return new hn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Tl(this.indexes_,a=>{if(a===Sr)return a;{const c=n.get(e.name);return c?a.remove(new z(e.name,c)):a}});return new hn(s,this.indexSet_)}}/**
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
 */let uo;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zb(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return uo||(uo=new B(new ct(Ch),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||uo}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?uo:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?uo:this.priorityNode_;return new B(a,u,c)}}updateChild(e,n){const s=$(e);if(s===null)return n;{O($(e)!==".priority"||Jn(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,c=!0;if(this.forEachChild(Se,(u,f)=>{n[u]=f.val(e),s++,c&&B.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):c=!1}),!e&&c&&a<2*s){const u=[];for(const f in n)u[f]=n[f];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$b(this.getPriority().val())+":"),this.forEachChild(Se,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":_b(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const c=a.getPredecessorKey(new z(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,z.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yo?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Se),a=n.getIterator(Se);let c=s.getNext(),u=a.getNext();for(;c&&u;){if(c.name!==u.name||!c.node.equals(u.node))return!1;c=s.getNext(),u=a.getNext()}return c===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bR extends B{constructor(){super(new ct(Ch),B.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Yo=new bR;Object.defineProperties(z,{MIN:{value:new z(Wr,B.EMPTY_NODE)},MAX:{value:new z(Ai,Yo)}});Gb.__EMPTY_NODE=B.EMPTY_NODE;Ve.__childrenNodeConstructor=B;pR(Yo);gR(Yo);/**
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
 */const wR=!0;function Je(i,e=null){if(i===null)return B.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new Ve(n,Je(e))}if(!(i instanceof Array)&&wR){const n=[];let s=!1;if(ht(i,(u,f)=>{if(u.substring(0,1)!=="."){const p=Je(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new z(u,p)))}}),n.length===0)return B.EMPTY_NODE;const c=Ml(n,fR,u=>u.name,Ch);if(s){const u=Ml(n,Se.getCompare());return new B(c,Je(e),new hn({".priority":u},{".priority":Se}))}else return new B(c,Je(e),hn.Default)}else{let n=B.EMPTY_NODE;return ht(i,(s,a)=>{if(jt(i,s)&&s.substring(0,1)!=="."){const c=Je(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(Je(e))}}mR(Je);/**
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
 */class IR extends fc{constructor(e){super(),this.indexPath_=e,O(!Y(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),c=s.compareTo(a);return c===0?Jr(e.name,n.name):c}makePost(e,n){const s=Je(e),a=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,a)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Yo);return new z(Ai,e)}toString(){return Wb(this.indexPath_,0).join("/")}}/**
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
 */class ER extends fc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Jr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Je(e);return new z(n,s)}toString(){return".value"}}const CR=new ER;/**
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
 */function Yb(i){return{type:"value",snapshotNode:i}}function Vr(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Mo(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function xo(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function SR(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Sh{constructor(e){this.index_=e}updateChild(e,n,s,a,c,u){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Mo(n,f)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Vr(n,s)):u.trackChildChange(xo(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Se,(a,c)=>{n.hasChild(a)||s.trackChildChange(Mo(a,c))}),n.isLeafNode()||n.forEachChild(Se,(a,c)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(c)||s.trackChildChange(xo(a,c,u))}else s.trackChildChange(Vr(a,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Fo{constructor(e){this.indexedFilter_=new Sh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fo.getStartPost_(e),this.endPost_=Fo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,a,c,u){return this.matches(new z(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,a,c,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(B.EMPTY_NODE);const c=this;return n.forEachChild(Se,(u,f)=>{c.matches(new z(u,f))||(a=a.updateImmediateChild(u,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class TR{constructor(e){this.rangedFilter_=new Fo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,a,c,u){return this.rangedFilter_.matches(new z(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,a,c,u):this.fullLimitUpdateChild_(e,n,s,c,u)}updateFullNode(e,n,s){let a;if(n.isLeafNode()||n.isEmpty())a=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=B.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;c.hasNext()&&u<this.limit_;){const f=c.getNext();let p;if(this.reverse_?p=this.index_.compare(this.rangedFilter_.getStartPost(),f)<=0:p=this.index_.compare(f,this.rangedFilter_.getEndPost())<=0,p)a=a.updateImmediateChild(f.name,f.node),u++;else break}}else{a=n.withIndex(this.index_),a=a.updatePriority(B.EMPTY_NODE);let c,u,f,p;if(this.reverse_){p=a.getReverseIterator(this.index_),c=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();const v=this.index_.getCompare();f=(w,E)=>v(E,w)}else p=a.getIterator(this.index_),c=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();let m=0,b=!1;for(;p.hasNext();){const v=p.getNext();!b&&f(c,v)<=0&&(b=!0),b&&m<this.limit_&&f(v,u)<=0?m++:a=a.updateImmediateChild(v.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,a,c){let u;if(this.reverse_){const v=this.index_.getCompare();u=(w,E)=>v(E,w)}else u=this.index_.getCompare();const f=e;O(f.numChildren()===this.limit_,"");const p=new z(n,s),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),b=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let w=a.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const E=w==null?1:u(w,p);if(b&&!s.isEmpty()&&E>=0)return c!=null&&c.trackChildChange(xo(n,s,v)),f.updateImmediateChild(n,s);{c!=null&&c.trackChildChange(Mo(n,v));const _=f.updateImmediateChild(n,B.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(c!=null&&c.trackChildChange(Vr(w.name,w.node)),_.updateImmediateChild(w.name,w.node)):_}}else return s.isEmpty()?e:b&&u(m,p)>=0?(c!=null&&(c.trackChildChange(Mo(m.name,m.node)),c.trackChildChange(Vr(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(m.name,B.EMPTY_NODE)):e}}/**
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
 */class Th{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wr}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Th;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kR(i){return i.loadsAllData()?new Sh(i.getIndex()):i.hasLimit()?new TR(i):new Fo(i)}function h_(i){const e={};if(i.isDefault())return e;let n;return i.index_===Se?n="$priority":i.index_===CR?n="$value":i.index_===Lr?n="$key":(O(i.index_ instanceof IR,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=$e(n),i.startSet_&&(e.startAt=$e(i.indexStartValue_),i.startNameSet_&&(e.startAt+=","+$e(i.indexStartName_))),i.endSet_&&(e.endAt=$e(i.indexEndValue_),i.endNameSet_&&(e.endAt+=","+$e(i.indexEndName_))),i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function f_(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_)),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_)),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Se&&(e.i=i.index_.toString()),e}/**
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
 */class xl extends Ub{constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Ko("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const u=xl.getListenId_(e,s),f={};this.listens_[u]=f;const p=h_(e._queryParams);this.restRequest_(c+".json",p,(m,b)=>{let v=b;if(m===404&&(v=null,m=null),m===null&&this.onDataUpdate_(c,v,!1,s),Fr(this.listens_,u)===f){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",a(w,null)}})}unlisten(e,n){const s=xl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=h_(e._queryParams),s=e._path.toString(),a=new Xl;return this.restRequest_(s+".json",n,(c,u)=>{let f=u;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Li(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ko(f.responseText)}catch{dt("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&dt("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class RR{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fl(){return{value:null,children:new Map}}function Jb(i,e,n){if(Y(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=$(e);i.children.has(s)||i.children.set(s,Fl());const a=i.children.get(s);e=ue(e),Jb(a,e,n)}}function Ud(i,e,n){i.value!==null?n(e,i.value):AR(i,(s,a)=>{const c=new ce(e.toString()+"/"+s);Ud(a,c,n)})}function AR(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class NR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
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
 */const p_=10*1e3,PR=30*1e3,OR=5*60*1e3;class DR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NR(e);const s=p_+(PR-p_)*Math.random();bo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ht(e,(a,c)=>{c>0&&jt(this.statsToReport_,a)&&(n[a]=c,s=!0)}),s&&this.server_.reportStats(n),bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*OR))}}/**
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
 */var xt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function Xb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rh(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class Ul{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=xt.ACK_USER_WRITE,this.source=Xb()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new Ul(te(),n,this.revert)}}else return O($(this.path)===e,"operationForChild called for unrelated child."),new Ul(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class Uo{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Uo(this.source,te()):new Uo(this.source,ue(this.path))}}/**
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
 */class Ni{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=xt.OVERWRITE}operationForChild(e){return Y(this.path)?new Ni(this.source,te(),this.snap.getImmediateChild(e)):new Ni(this.source,ue(this.path),this.snap)}}/**
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
 */class Bo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=xt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Ni(this.source,te(),n.value):new Bo(this.source,te(),n)}else return O($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bo(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pi{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class LR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MR(i,e,n,s){const a=[],c=[];return e.forEach(u=>{u.type==="child_changed"&&i.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&c.push(SR(u.childName,u.snapshotNode))}),ho(i,a,"child_removed",e,s,n),ho(i,a,"child_added",e,s,n),ho(i,a,"child_moved",c,s,n),ho(i,a,"child_changed",e,s,n),ho(i,a,"value",e,s,n),a}function ho(i,e,n,s,a,c){const u=s.filter(f=>f.type===n);u.sort((f,p)=>FR(i,f,p)),u.forEach(f=>{const p=xR(i,f,c);a.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,i.query_))})})}function xR(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function FR(i,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),a=new z(n.childName,n.snapshotNode);return i.index_.compare(s,a)}/**
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
 */function pc(i,e){return{eventCache:i,serverCache:e}}function wo(i,e,n,s){return pc(new Pi(e,n,s),i.serverCache)}function Qb(i,e,n,s){return pc(i.eventCache,new Pi(e,n,s))}function Bd(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Oi(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let vd;const UR=()=>(vd||(vd=new ct(E2)),vd);class he{constructor(e,n=UR()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return ht(e,(s,a)=>{n=n.set(new ce(s),a)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Y(e))return null;{const s=$(e),a=this.children.get(s);if(a!==null){const c=a.findRootMostMatchingPathAndValue(ue(e),n);return c!=null?{path:xe(new ce(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new he(null)}}set(e,n){if(Y(e))return new he(n,this.children);{const s=$(e),c=(this.children.get(s)||new he(null)).set(ue(e),n),u=this.children.insert(s,c);return new he(this.value,u)}}remove(e){if(Y(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const a=s.remove(ue(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new he(null):new he(this.value,c)}else return this}}get(e){if(Y(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(Y(e))return n;{const s=$(e),c=(this.children.get(s)||new he(null)).setTree(ue(e),n);let u;return c.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,c),new he(this.value,u)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,c)=>{s[a]=c.fold_(xe(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(Y(e))return null;{const c=$(e),u=this.children.get(c);return u?u.findOnPath_(ue(e),xe(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const a=$(e),c=this.children.get(a);return c?c.foreachOnPath_(ue(e),xe(n,a),s):new he(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(xe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new he(null))}}function Io(i,e,n){if(Y(e))return new Bt(new he(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let c=s.value;const u=lt(a,e);return c=c.updateChild(u,n),new Bt(i.writeTree_.set(a,c))}else{const a=new he(n),c=i.writeTree_.setTree(e,a);return new Bt(c)}}}function m_(i,e,n){let s=i;return ht(n,(a,c)=>{s=Io(s,xe(e,a),c)}),s}function g_(i,e){if(Y(e))return Bt.empty();{const n=i.writeTree_.setTree(e,new he(null));return new Bt(n)}}function jd(i,e){return Fi(i,e)!=null}function Fi(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function v_(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(s,a)=>{e.push(new z(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new z(s,a.value))}),e}function $n(i,e){if(Y(e))return i;{const n=Fi(i,e);return n!=null?new Bt(new he(n)):new Bt(i.writeTree_.subtree(e))}}function Wd(i){return i.writeTree_.isEmpty()}function Hr(i,e){return Zb(te(),i.writeTree_,e)}function Zb(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(O(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=Zb(xe(i,a),c,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(xe(i,".priority"),s)),n}}/**
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
 */function Ah(i,e){return i0(e,i)}function BR(i,e,n,s,a){O(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(i.visibleWrites=Io(i.visibleWrites,e,n)),i.lastWriteId=s}function jR(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function WR(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let a=s.visible,c=!1,u=i.allWrites.length-1;for(;a&&u>=0;){const f=i.allWrites[u];f.visible&&(u>=n&&VR(f,s.path)?a=!1:Mt(s.path,f.path)&&(c=!0)),u--}if(a){if(c)return HR(i),!0;if(s.snap)i.visibleWrites=g_(i.visibleWrites,s.path);else{const f=s.children;ht(f,p=>{i.visibleWrites=g_(i.visibleWrites,xe(s.path,p))})}return!0}else return!1}function VR(i,e){if(i.snap)return Mt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Mt(xe(i.path,n),e))return!0;return!1}function HR(i){i.visibleWrites=e0(i.allWrites,GR,te()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function GR(i){return i.visible}function e0(i,e,n){let s=Bt.empty();for(let a=0;a<i.length;++a){const c=i[a];if(e(c)){const u=c.path;let f;if(c.snap)Mt(n,u)?(f=lt(n,u),s=Io(s,f,c.snap)):Mt(u,n)&&(f=lt(u,n),s=Io(s,te(),c.snap.getChild(f)));else if(c.children){if(Mt(n,u))f=lt(n,u),s=m_(s,f,c.children);else if(Mt(u,n))if(f=lt(u,n),Y(f))s=m_(s,te(),c.children);else{const p=Fr(c.children,$(f));if(p){const m=p.getChild(ue(f));s=Io(s,te(),m)}}}else throw $r("WriteRecord should have .snap or .children")}}return s}function t0(i,e,n,s,a){if(!s&&!a){const c=Fi(i.visibleWrites,e);if(c!=null)return c;{const u=$n(i.visibleWrites,e);if(Wd(u))return n;if(n==null&&!jd(u,te()))return null;{const f=n||B.EMPTY_NODE;return Hr(u,f)}}}else{const c=$n(i.visibleWrites,e);if(!a&&Wd(c))return n;if(!a&&n==null&&!jd(c,te()))return null;{const u=function(m){return(m.visible||a)&&(!s||!~s.indexOf(m.writeId))&&(Mt(m.path,e)||Mt(e,m.path))},f=e0(i.allWrites,u,e),p=n||B.EMPTY_NODE;return Hr(f,p)}}}function $R(i,e,n){let s=B.EMPTY_NODE;const a=Fi(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Se,(c,u)=>{s=s.updateImmediateChild(c,u)}),s;if(n){const c=$n(i.visibleWrites,e);return n.forEachChild(Se,(u,f)=>{const p=Hr($n(c,new ce(u)),f);s=s.updateImmediateChild(u,p)}),v_(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const c=$n(i.visibleWrites,e);return v_(c).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function zR(i,e,n,s,a){O(s||a,"Either existingEventSnap or existingServerSnap must exist");const c=xe(e,n);if(jd(i.visibleWrites,c))return null;{const u=$n(i.visibleWrites,c);return Wd(u)?a.getChild(n):Hr(u,a.getChild(n))}}function qR(i,e,n,s){const a=xe(e,n),c=Fi(i.visibleWrites,a);if(c!=null)return c;if(s.isCompleteForChild(n)){const u=$n(i.visibleWrites,a);return Hr(u,s.getNode().getImmediateChild(n))}else return null}function KR(i,e){return Fi(i.visibleWrites,e)}function YR(i,e,n,s,a,c,u){let f;const p=$n(i.visibleWrites,e),m=Fi(p,te());if(m!=null)f=m;else if(n!=null)f=Hr(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const b=[],v=u.getCompare(),w=c?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let E=w.getNext();for(;E&&b.length<a;)v(E,s)!==0&&b.push(E),E=w.getNext();return b}else return[]}function JR(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function Bl(i,e,n,s){return t0(i.writeTree,i.treePath,e,n,s)}function Nh(i,e){return $R(i.writeTree,i.treePath,e)}function __(i,e,n,s){return zR(i.writeTree,i.treePath,e,n,s)}function jl(i,e){return KR(i.writeTree,xe(i.treePath,e))}function XR(i,e,n,s,a,c){return YR(i.writeTree,i.treePath,e,n,s,a,c)}function Ph(i,e,n){return qR(i.writeTree,i.treePath,e,n)}function n0(i,e){return i0(xe(i.treePath,e),i.writeTree)}function i0(i,e){return{treePath:i,writeTree:e}}/**
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
 */class QR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,xo(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Mo(s,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,Vr(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,xo(s,e.snapshotNode,a.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ZR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const r0=new ZR;class Oh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ph(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Oi(this.viewCache_),c=XR(this.writes_,a,n,1,s,e);return c.length===0?null:c[0]}}/**
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
 */function eA(i){return{filter:i}}function tA(i,e){O(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function nA(i,e,n,s,a){const c=new QR;let u,f;if(n.type===xt.OVERWRITE){const m=n;m.source.fromUser?u=Vd(i,e,m.path,m.snap,s,a,c):(O(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!Y(m.path),u=Wl(i,e,m.path,m.snap,s,a,f,c))}else if(n.type===xt.MERGE){const m=n;m.source.fromUser?u=rA(i,e,m.path,m.children,s,a,c):(O(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),u=Hd(i,e,m.path,m.children,s,a,f,c))}else if(n.type===xt.ACK_USER_WRITE){const m=n;m.revert?u=aA(i,e,m.path,s,a,c):u=sA(i,e,m.path,m.affectedTree,s,a,c)}else if(n.type===xt.LISTEN_COMPLETE)u=oA(i,e,n.path,s,c);else throw $r("Unknown operation type: "+n.type);const p=c.getChanges();return iA(e,u,p),{viewCache:u,changes:p}}function iA(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Bd(i);(n.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(Yb(Bd(e)))}}function s0(i,e,n,s,a,c){const u=e.eventCache;if(jl(s,n)!=null)return e;{let f,p;if(Y(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Oi(e),b=m instanceof B?m:B.EMPTY_NODE,v=Nh(s,b);f=i.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const m=Bl(s,Oi(e));f=i.filter.updateFullNode(e.eventCache.getNode(),m,c)}else{const m=$(n);if(m===".priority"){O(Jn(n)===1,"Can't have a priority with additional path components");const b=u.getNode();p=e.serverCache.getNode();const v=__(s,n,b,p);v!=null?f=i.filter.updatePriority(b,v):f=u.getNode()}else{const b=ue(n);let v;if(u.isCompleteForChild(m)){p=e.serverCache.getNode();const w=__(s,n,u.getNode(),p);w!=null?v=u.getNode().getImmediateChild(m).updateChild(b,w):v=u.getNode().getImmediateChild(m)}else v=Ph(s,m,e.serverCache);v!=null?f=i.filter.updateChild(u.getNode(),m,v,b,a,c):f=u.getNode()}}return wo(e,f,u.isFullyInitialized()||Y(n),i.filter.filtersNodes())}}function Wl(i,e,n,s,a,c,u,f){const p=e.serverCache;let m;const b=u?i.filter:i.filter.getIndexedFilter();if(Y(n))m=b.updateFullNode(p.getNode(),s,null);else if(b.filtersNodes()&&!p.isFiltered()){const E=p.getNode().updateChild(n,s);m=b.updateFullNode(p.getNode(),E,null)}else{const E=$(n);if(!p.isCompleteForPath(n)&&Jn(n)>1)return e;const A=ue(n),I=p.getNode().getImmediateChild(E).updateChild(A,s);E===".priority"?m=b.updatePriority(p.getNode(),I):m=b.updateChild(p.getNode(),E,I,A,r0,null)}const v=Qb(e,m,p.isFullyInitialized()||Y(n),b.filtersNodes()),w=new Oh(a,v,c);return s0(i,v,n,a,w,f)}function Vd(i,e,n,s,a,c,u){const f=e.eventCache;let p,m;const b=new Oh(a,e,c);if(Y(n))m=i.filter.updateFullNode(e.eventCache.getNode(),s,u),p=wo(e,m,!0,i.filter.filtersNodes());else{const v=$(n);if(v===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),p=wo(e,m,f.isFullyInitialized(),f.isFiltered());else{const w=ue(n),E=f.getNode().getImmediateChild(v);let A;if(Y(w))A=s;else{const _=b.getCompleteChild(v);_!=null?jb(w)===".priority"&&_.getChild(Vb(w)).isEmpty()?A=_:A=_.updateChild(w,s):A=B.EMPTY_NODE}if(E.equals(A))p=e;else{const _=i.filter.updateChild(f.getNode(),v,A,w,b,u);p=wo(e,_,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function y_(i,e){return i.eventCache.isCompleteForChild(e)}function rA(i,e,n,s,a,c,u){let f=e;return s.foreach((p,m)=>{const b=xe(n,p);y_(e,$(b))&&(f=Vd(i,f,b,m,a,c,u))}),s.foreach((p,m)=>{const b=xe(n,p);y_(e,$(b))||(f=Vd(i,f,b,m,a,c,u))}),f}function b_(i,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Hd(i,e,n,s,a,c,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Y(n)?m=s:m=new he(null).setTree(n,s);const b=e.serverCache.getNode();return m.children.inorderTraversal((v,w)=>{if(b.hasChild(v)){const E=e.serverCache.getNode().getImmediateChild(v),A=b_(i,E,w);p=Wl(i,p,new ce(v),A,a,c,u,f)}}),m.children.inorderTraversal((v,w)=>{const E=!e.serverCache.isCompleteForChild(v)&&w.value===null;if(!b.hasChild(v)&&!E){const A=e.serverCache.getNode().getImmediateChild(v),_=b_(i,A,w);p=Wl(i,p,new ce(v),_,a,c,u,f)}}),p}function sA(i,e,n,s,a,c,u){if(jl(a,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Y(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Wl(i,e,n,p.getNode().getChild(n),a,c,f,u);if(Y(n)){let m=new he(null);return p.getNode().forEachChild(Lr,(b,v)=>{m=m.set(new ce(b),v)}),Hd(i,e,n,m,a,c,f,u)}else return e}else{let m=new he(null);return s.foreach((b,v)=>{const w=xe(n,b);p.isCompleteForPath(w)&&(m=m.set(b,p.getNode().getChild(w)))}),Hd(i,e,n,m,a,c,f,u)}}function oA(i,e,n,s,a){const c=e.serverCache,u=Qb(e,c.getNode(),c.isFullyInitialized()||Y(n),c.isFiltered());return s0(i,u,n,s,r0,a)}function aA(i,e,n,s,a,c){let u;if(jl(s,n)!=null)return e;{const f=new Oh(s,e,a),p=e.eventCache.getNode();let m;if(Y(n)||$(n)===".priority"){let b;if(e.serverCache.isFullyInitialized())b=Bl(s,Oi(e));else{const v=e.serverCache.getNode();O(v instanceof B,"serverChildren would be complete if leaf node"),b=Nh(s,v)}b=b,m=i.filter.updateFullNode(p,b,c)}else{const b=$(n);let v=Ph(s,b,e.serverCache);v==null&&e.serverCache.isCompleteForChild(b)&&(v=p.getImmediateChild(b)),v!=null?m=i.filter.updateChild(p,b,v,ue(n),f,c):e.eventCache.getNode().hasChild(b)?m=i.filter.updateChild(p,b,B.EMPTY_NODE,ue(n),f,c):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Bl(s,Oi(e)),u.isLeafNode()&&(m=i.filter.updateFullNode(m,u,c)))}return u=e.serverCache.isFullyInitialized()||jl(s,te())!=null,wo(e,m,u,i.filter.filtersNodes())}}/**
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
 */class lA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Sh(s.getIndex()),c=kR(s);this.processor_=eA(c);const u=n.serverCache,f=n.eventCache,p=a.updateFullNode(B.EMPTY_NODE,u.getNode(),null),m=c.updateFullNode(B.EMPTY_NODE,f.getNode(),null),b=new Pi(p,u.isFullyInitialized(),a.filtersNodes()),v=new Pi(m,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=pc(v,b),this.eventGenerator_=new LR(this.query_)}get query(){return this.query_}}function cA(i){return i.viewCache_.serverCache.getNode()}function uA(i,e){const n=Oi(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function w_(i){return i.eventRegistrations_.length===0}function dA(i,e){i.eventRegistrations_.push(e)}function I_(i,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const a=i.query._path;i.eventRegistrations_.forEach(c=>{const u=c.createCancelEvent(n,a);u&&s.push(u)})}if(e){let a=[];for(let c=0;c<i.eventRegistrations_.length;++c){const u=i.eventRegistrations_[c];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(i.eventRegistrations_.slice(c+1));break}}i.eventRegistrations_=a}else i.eventRegistrations_=[];return s}function E_(i,e,n,s){e.type===xt.MERGE&&e.source.queryId!==null&&(O(Oi(i.viewCache_),"We should always have a full cache before handling merges"),O(Bd(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,c=nA(i.processor_,a,e,n,s);return tA(i.processor_,c.viewCache),O(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=c.viewCache,o0(i,c.changes,c.viewCache.eventCache.getNode(),null)}function hA(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(c,u)=>{s.push(Vr(c,u))}),n.isFullyInitialized()&&s.push(Yb(n.getNode())),o0(i,s,n.getNode(),e)}function o0(i,e,n,s){const a=s?[s]:i.eventRegistrations_;return MR(i.eventGenerator_,e,n,a)}/**
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
 */let Vl;class fA{constructor(){this.views=new Map}}function pA(i){O(!Vl,"__referenceConstructor has already been defined"),Vl=i}function mA(){return O(Vl,"Reference.ts has not been loaded"),Vl}function gA(i){return i.views.size===0}function Dh(i,e,n,s){const a=e.source.queryId;if(a!==null){const c=i.views.get(a);return O(c!=null,"SyncTree gave us an op for an invalid query."),E_(c,e,n,s)}else{let c=[];for(const u of i.views.values())c=c.concat(E_(u,e,n,s));return c}}function vA(i,e,n,s,a){const c=e._queryIdentifier,u=i.views.get(c);if(!u){let f=Bl(n,a?s:null),p=!1;f?p=!0:s instanceof B?(f=Nh(n,s),p=!1):(f=B.EMPTY_NODE,p=!1);const m=pc(new Pi(f,p,!1),new Pi(s,a,!1));return new lA(e,m)}return u}function _A(i,e,n,s,a,c){const u=vA(i,e,s,a,c);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,u),dA(u,n),hA(u,n)}function yA(i,e,n,s){const a=e._queryIdentifier,c=[];let u=[];const f=Xn(i);if(a==="default")for(const[p,m]of i.views.entries())u=u.concat(I_(m,n,s)),w_(m)&&(i.views.delete(p),m.query._queryParams.loadsAllData()||c.push(m.query));else{const p=i.views.get(a);p&&(u=u.concat(I_(p,n,s)),w_(p)&&(i.views.delete(a),p.query._queryParams.loadsAllData()||c.push(p.query)))}return f&&!Xn(i)&&c.push(new(mA())(e._repo,e._path)),{removed:c,events:u}}function a0(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mr(i,e){let n=null;for(const s of i.views.values())n=n||uA(s,e);return n}function l0(i,e){if(e._queryParams.loadsAllData())return mc(i);{const s=e._queryIdentifier;return i.views.get(s)}}function c0(i,e){return l0(i,e)!=null}function Xn(i){return mc(i)!=null}function mc(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Hl;function bA(i){O(!Hl,"__referenceConstructor has already been defined"),Hl=i}function wA(){return O(Hl,"Reference.ts has not been loaded"),Hl}let IA=1;class C_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=JR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function u0(i,e,n,s,a){return BR(i.pendingWriteTree_,e,n,s,a),a?Jo(i,new Ni(Xb(),e,n)):[]}function Ii(i,e,n=!1){const s=jR(i.pendingWriteTree_,e);if(WR(i.pendingWriteTree_,e)){let c=new he(null);return s.snap!=null?c=c.set(te(),!0):ht(s.children,u=>{c=c.set(new ce(u),!0)}),Jo(i,new Ul(s.path,c,n))}else return[]}function gc(i,e,n){return Jo(i,new Ni(kh(),e,n))}function EA(i,e,n){const s=he.fromObject(n);return Jo(i,new Bo(kh(),e,s))}function CA(i,e){return Jo(i,new Uo(kh(),e))}function SA(i,e,n){const s=Mh(i,n);if(s){const a=xh(s),c=a.path,u=a.queryId,f=lt(c,e),p=new Uo(Rh(u),f);return Fh(i,c,p)}else return[]}function Gd(i,e,n,s,a=!1){const c=e._path,u=i.syncPointTree_.get(c);let f=[];if(u&&(e._queryIdentifier==="default"||c0(u,e))){const p=yA(u,e,n,s);gA(u)&&(i.syncPointTree_=i.syncPointTree_.remove(c));const m=p.removed;if(f=p.events,!a){const b=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(c,(w,E)=>Xn(E));if(b&&!v){const w=i.syncPointTree_.subtree(c);if(!w.isEmpty()){const E=RA(w);for(let A=0;A<E.length;++A){const _=E[A],I=_.query,S=f0(i,_);i.listenProvider_.startListening(Eo(I),Gl(i,I),S.hashFn,S.onComplete)}}}!v&&m.length>0&&!s&&(b?i.listenProvider_.stopListening(Eo(e),null):m.forEach(w=>{const E=i.queryToTagMap.get(vc(w));i.listenProvider_.stopListening(Eo(w),E)}))}AA(i,m)}return f}function TA(i,e,n,s){const a=Mh(i,s);if(a!=null){const c=xh(a),u=c.path,f=c.queryId,p=lt(u,e),m=new Ni(Rh(f),p,n);return Fh(i,u,m)}else return[]}function kA(i,e,n,s){const a=Mh(i,s);if(a){const c=xh(a),u=c.path,f=c.queryId,p=lt(u,e),m=he.fromObject(n),b=new Bo(Rh(f),p,m);return Fh(i,u,b)}else return[]}function S_(i,e,n,s=!1){const a=e._path;let c=null,u=!1;i.syncPointTree_.foreachOnPath(a,(w,E)=>{const A=lt(w,a);c=c||Mr(E,A),u=u||Xn(E)});let f=i.syncPointTree_.get(a);f?(u=u||Xn(f),c=c||Mr(f,te())):(f=new fA,i.syncPointTree_=i.syncPointTree_.set(a,f));let p;c!=null?p=!0:(p=!1,c=B.EMPTY_NODE,i.syncPointTree_.subtree(a).foreachChild((E,A)=>{const _=Mr(A,te());_&&(c=c.updateImmediateChild(E,_))}));const m=c0(f,e);if(!m&&!e._queryParams.loadsAllData()){const w=vc(e);O(!i.queryToTagMap.has(w),"View does not exist, but we have a tag");const E=NA();i.queryToTagMap.set(w,E),i.tagToQueryMap.set(E,w)}const b=Ah(i.pendingWriteTree_,a);let v=_A(f,e,n,b,c,p);if(!m&&!u&&!s){const w=l0(f,e);v=v.concat(PA(i,e,w))}return v}function Lh(i,e,n){const a=i.pendingWriteTree_,c=i.syncPointTree_.findOnPath(e,(u,f)=>{const p=lt(u,e),m=Mr(f,p);if(m)return m});return t0(a,e,c,n,!0)}function Jo(i,e){return d0(e,i.syncPointTree_,null,Ah(i.pendingWriteTree_,te()))}function d0(i,e,n,s){if(Y(i.path))return h0(i,e,n,s);{const a=e.get(te());n==null&&a!=null&&(n=Mr(a,te()));let c=[];const u=$(i.path),f=i.operationForChild(u),p=e.children.get(u);if(p&&f){const m=n?n.getImmediateChild(u):null,b=n0(s,u);c=c.concat(d0(f,p,m,b))}return a&&(c=c.concat(Dh(a,i,s,n))),c}}function h0(i,e,n,s){const a=e.get(te());n==null&&a!=null&&(n=Mr(a,te()));let c=[];return e.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,m=n0(s,u),b=i.operationForChild(u);b&&(c=c.concat(h0(b,f,p,m)))}),a&&(c=c.concat(Dh(a,i,s,n))),c}function f0(i,e){const n=e.query,s=Gl(i,n);return{hashFn:()=>(cA(e)||B.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?SA(i,n._path,s):CA(i,n._path);{const c=T2(a,n);return Gd(i,n,null,c)}}}}function Gl(i,e){const n=vc(e);return i.queryToTagMap.get(n)}function vc(i){return i._path.toString()+"$"+i._queryIdentifier}function Mh(i,e){return i.tagToQueryMap.get(e)}function xh(i){const e=i.indexOf("$");return O(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ce(i.substr(0,e))}}function Fh(i,e,n){const s=i.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const a=Ah(i.pendingWriteTree_,e);return Dh(s,n,a,null)}function RA(i){return i.fold((e,n,s)=>{if(n&&Xn(n))return[mc(n)];{let a=[];return n&&(a=a0(n)),ht(s,(c,u)=>{a=a.concat(u)}),a}})}function Eo(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(wA())(i._repo,i._path):i}function AA(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const a=vc(s),c=i.queryToTagMap.get(a);i.queryToTagMap.delete(a),i.tagToQueryMap.delete(c)}}}function NA(){return IA++}function PA(i,e,n){const s=e._path,a=Gl(i,e),c=f0(i,n),u=i.listenProvider_.startListening(Eo(e),a,c.hashFn,c.onComplete),f=i.syncPointTree_.subtree(s);if(a)O(!Xn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,b,v)=>{if(!Y(m)&&b&&Xn(b))return[mc(b).query];{let w=[];return b&&(w=w.concat(a0(b).map(E=>E.query))),ht(v,(E,A)=>{w=w.concat(A)}),w}});for(let m=0;m<p.length;++m){const b=p[m];i.listenProvider_.stopListening(Eo(b),Gl(i,b))}}return u}/**
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
 */class Uh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uh(n)}node(){return this.node_}}class Bh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Bh(this.syncTree_,n)}node(){return Lh(this.syncTree_,this.path_)}}const OA=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},T_=function(i,e,n){if(!i||typeof i!="object")return i;if(O(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return DA(i[".sv"],e,n);if(typeof i[".sv"]=="object")return LA(i[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},DA=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+i)}},LA=function(i,e,n){i.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const a=e.node();if(O(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},MA=function(i,e,n,s){return jh(e,new Bh(n,i),s)},p0=function(i,e,n){return jh(i,new Uh(e),n)};function jh(i,e,n){const s=i.getPriority().val(),a=T_(s,e.getImmediateChild(".priority"),n);let c;if(i.isLeafNode()){const u=i,f=T_(u.getValue(),e,n);return f!==u.getValue()||a!==u.getPriority().val()?new Ve(f,Je(a)):i}else{const u=i;return c=u,a!==u.getPriority().val()&&(c=c.updatePriority(new Ve(a))),u.forEachChild(Se,(f,p)=>{const m=jh(p,e.getImmediateChild(f),n);m!==p&&(c=c.updateImmediateChild(f,m))}),c}}/**
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
 */class Wh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Vh(i,e){let n=e instanceof ce?e:new ce(e),s=i,a=$(n);for(;a!==null;){const c=Fr(s.node.children,a)||{children:{},childCount:0};s=new Wh(a,s,c),n=ue(n),a=$(n)}return s}function Qr(i){return i.node.value}function m0(i,e){i.node.value=e,$d(i)}function g0(i){return i.node.childCount>0}function xA(i){return Qr(i)===void 0&&!g0(i)}function _c(i,e){ht(i.node.children,(n,s)=>{e(new Wh(n,i,s))})}function v0(i,e,n,s){n&&!s&&e(i),_c(i,a=>{v0(a,e,!0,s)}),n&&s&&e(i)}function FA(i,e,n){let s=n?i:i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xo(i){return new ce(i.parent===null?i.name:Xo(i.parent)+"/"+i.name)}function $d(i){i.parent!==null&&UA(i.parent,i.name,i)}function UA(i,e,n){const s=xA(n),a=jt(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,$d(i)):!s&&!a&&(i.node.children[e]=n.node,i.node.childCount++,$d(i))}/**
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
 */const BA=/[\[\].#$\/\u0000-\u001F\u007F]/,jA=/[\[\].#$\u0000-\u001F\u007F]/,_d=10*1024*1024,_0=function(i){return typeof i=="string"&&i.length!==0&&!BA.test(i)},y0=function(i){return typeof i=="string"&&i.length!==0&&!jA.test(i)},WA=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),y0(i)},VA=function(i,e,n,s){s&&e===void 0||Hh(Xd(i,"value"),e,n)},Hh=function(i,e,n){const s=n instanceof ce?new sR(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+_i(s));if(typeof e=="function")throw new Error(i+"contains a function "+_i(s)+" with contents = "+e.toString());if(yb(e))throw new Error(i+"contains "+e.toString()+" "+_i(s));if(typeof e=="string"&&e.length>_d/3&&Ql(e)>_d)throw new Error(i+"contains a string greater than "+_d+" utf8 bytes "+_i(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(ht(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(c=!0,!_0(u)))throw new Error(i+" contains an invalid key ("+u+") "+_i(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oR(s,u),Hh(i,f,s),aR(s)}),a&&c)throw new Error(i+' contains ".value" child '+_i(s)+" in addition to actual children.")}},b0=function(i,e,n,s){if(!(s&&n===void 0)&&!y0(n))throw new Error(Xd(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HA=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),b0(i,e,n,s)},GA=function(i,e){if($(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},$A=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WA(n))throw new Error(Xd(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gh(i,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],c=a.getPath();n!==null&&!Ih(c,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&i.eventLists_.push(n)}function w0(i,e,n){Gh(i,n),I0(i,s=>Ih(s,e))}function yn(i,e,n){Gh(i,n),I0(i,s=>Mt(s,e)||Mt(e,s))}function I0(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const c=a.path;e(c)?(qA(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function qA(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ti&&Ze("event: "+n.toString()),Xr(s)}}}/**
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
 */const KA="repo_interrupt",YA=25;class JA{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fl(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XA(i,e,n){if(i.stats_=bh(i.repoInfo_),i.forceRestClient_||N2())i.server_=new xl(i.repoInfo_,(s,a,c,u)=>{k_(i,s,a,c,u)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>R_(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new mn(i.repoInfo_,e,(s,a,c,u)=>{k_(i,s,a,c,u)},s=>{R_(i,s)},s=>{ZA(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=M2(i.repoInfo_,()=>new DR(i.stats_,i.server_)),i.infoData_=new RR,i.infoSyncTree_=new C_({startListening:(s,a,c,u)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=gc(i.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),zh(i,"connected",!1),i.serverSyncTree_=new C_({startListening:(s,a,c,u)=>(i.server_.listen(s,c,a,(f,p)=>{const m=u(f,p);yn(i.eventQueue_,s._path,m)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function QA(i){const n=i.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $h(i){return OA({timestamp:QA(i)})}function k_(i,e,n,s,a){i.dataUpdateCount++;const c=new ce(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let u=[];if(a)if(s){const p=Tl(n,m=>Je(m));u=kA(i.serverSyncTree_,c,p,a)}else{const p=Je(n);u=TA(i.serverSyncTree_,c,p,a)}else if(s){const p=Tl(n,m=>Je(m));u=EA(i.serverSyncTree_,c,p)}else{const p=Je(n);u=gc(i.serverSyncTree_,c,p)}let f=c;u.length>0&&(f=yc(i,c)),yn(i.eventQueue_,f,u)}function R_(i,e){zh(i,"connected",e),e===!1&&tN(i)}function ZA(i,e){ht(e,(n,s)=>{zh(i,n,s)})}function zh(i,e,n){const s=new ce("/.info/"+e),a=Je(n);i.infoData_.updateSnapshot(s,a);const c=gc(i.infoSyncTree_,s,a);yn(i.eventQueue_,s,c)}function E0(i){return i.nextWriteId_++}function eN(i,e,n,s,a){qh(i,"set",{path:e.toString(),value:n,priority:s});const c=$h(i),u=Je(n,s),f=Lh(i.serverSyncTree_,e),p=p0(u,f,c),m=E0(i),b=u0(i.serverSyncTree_,e,p,m,!0);Gh(i.eventQueue_,b),i.server_.put(e.toString(),u.val(!0),(w,E)=>{const A=w==="ok";A||dt("set at "+e+" failed: "+w);const _=Ii(i.serverSyncTree_,m,!A);yn(i.eventQueue_,e,_),rN(i,a,w,E)});const v=R0(i,e);yc(i,v),yn(i.eventQueue_,v,[])}function tN(i){qh(i,"onDisconnectEvents");const e=$h(i),n=Fl();Ud(i.onDisconnect_,te(),(a,c)=>{const u=MA(a,c,i.serverSyncTree_,e);Jb(n,a,u)});let s=[];Ud(n,te(),(a,c)=>{s=s.concat(gc(i.serverSyncTree_,a,c));const u=R0(i,a);yc(i,u)}),i.onDisconnect_=Fl(),yn(i.eventQueue_,te(),s)}function nN(i,e,n){let s;$(e._path)===".info"?s=S_(i.infoSyncTree_,e,n):s=S_(i.serverSyncTree_,e,n),w0(i.eventQueue_,e._path,s)}function A_(i,e,n){let s;$(e._path)===".info"?s=Gd(i.infoSyncTree_,e,n):s=Gd(i.serverSyncTree_,e,n),w0(i.eventQueue_,e._path,s)}function iN(i){i.persistentConnection_&&i.persistentConnection_.interrupt(KA)}function qh(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Ze(n,...e)}function rN(i,e,n,s){e&&Xr(()=>{if(n==="ok")e(null);else{const a=(n||"error").toUpperCase();let c=a;s&&(c+=": "+s);const u=new Error(c);u.code=a,e(u)}})}function C0(i,e,n){return Lh(i.serverSyncTree_,e,n)||B.EMPTY_NODE}function Kh(i,e=i.transactionQueueTree_){if(e||bc(i,e),Qr(e)){const n=T0(i,e);O(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&sN(i,Xo(e),n)}else g0(e)&&_c(e,n=>{Kh(i,n)})}function sN(i,e,n){const s=n.map(m=>m.currentWriteId),a=C0(i,e,s);let c=a;const u=a.hash();for(let m=0;m<n.length;m++){const b=n[m];O(b.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),b.status=1,b.retryCount++;const v=lt(e,b.path);c=c.updateChild(v,b.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;i.server_.put(p.toString(),f,m=>{qh(i,"transaction put response",{path:p.toString(),status:m});let b=[];if(m==="ok"){const v=[];for(let w=0;w<n.length;w++)n[w].status=2,b=b.concat(Ii(i.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&v.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();bc(i,Vh(i.transactionQueueTree_,e)),Kh(i,i.transactionQueueTree_),yn(i.eventQueue_,e,b);for(let w=0;w<v.length;w++)Xr(v[w])}else{if(m==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{dt("transaction at "+p.toString()+" failed: "+m);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=m}yc(i,e)}},u)}function yc(i,e){const n=S0(i,e),s=Xo(n),a=T0(i,n);return oN(i,a,s),s}function oN(i,e,n){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=lt(n,p.path);let b=!1,v;if(O(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)b=!0,v=p.abortReason,a=a.concat(Ii(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=YA)b=!0,v="maxretry",a=a.concat(Ii(i.serverSyncTree_,p.currentWriteId,!0));else{const w=C0(i,p.path,u);p.currentInputSnapshot=w;const E=e[f].update(w.val());if(E!==void 0){Hh("transaction failed: Data returned ",E,p.path);let A=Je(E);typeof E=="object"&&E!=null&&jt(E,".priority")||(A=A.updatePriority(w.getPriority()));const I=p.currentWriteId,S=$h(i),P=p0(A,w,S);p.currentOutputSnapshotRaw=A,p.currentOutputSnapshotResolved=P,p.currentWriteId=E0(i),u.splice(u.indexOf(I),1),a=a.concat(u0(i.serverSyncTree_,p.path,P,p.currentWriteId,p.applyLocally)),a=a.concat(Ii(i.serverSyncTree_,I,!0))}else b=!0,v="nodata",a=a.concat(Ii(i.serverSyncTree_,p.currentWriteId,!0))}yn(i.eventQueue_,n,a),a=[],b&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}bc(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Xr(s[f]);Kh(i,i.transactionQueueTree_)}function S0(i,e){let n,s=i.transactionQueueTree_;for(n=$(e);n!==null&&Qr(s)===void 0;)s=Vh(s,n),e=ue(e),n=$(e);return s}function T0(i,e){const n=[];return k0(i,e,n),n.sort((s,a)=>s.order-a.order),n}function k0(i,e,n){const s=Qr(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);_c(e,a=>{k0(i,a,n)})}function bc(i,e){const n=Qr(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,m0(e,n.length>0?n:void 0)}_c(e,s=>{bc(i,s)})}function R0(i,e){const n=Xo(S0(i,e)),s=Vh(i.transactionQueueTree_,e);return FA(s,a=>{yd(i,a)}),yd(i,s),v0(s,a=>{yd(i,a)}),n}function yd(i,e){const n=Qr(e);if(n){const s=[];let a=[],c=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(O(c===u-1,"All SENT items should be at beginning of queue."),c=u,n[u].status=3,n[u].abortReason="set"):(O(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),a=a.concat(Ii(i.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));c===-1?m0(e,void 0):n.length=c+1,yn(i.eventQueue_,Xo(e),a);for(let u=0;u<s.length;u++)Xr(s[u])}}/**
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
 */function aN(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function lN(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dt(`Invalid query segment '${n}' in query '${i}'`)}return e}const N_=function(i,e){const n=cN(i),s=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||w2();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pb(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new ce(n.pathString)}},cN=function(i){let e="",n="",s="",a="",c="",u=!0,f="https",p=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(f=i.substring(0,m-1),i=i.substring(m+2));let b=i.indexOf("/");b===-1&&(b=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(b,v)),b<v&&(a=aN(i.substring(b,v)));const w=lN(i.substring(Math.min(i.length,v)));m=e.indexOf(":"),m>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const E=e.slice(0,m);if(E.toLowerCase()==="localhost")n="localhost";else if(E.split(".").length<=2)n=E;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),c=s}"ns"in w&&(c=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:u,scheme:f,pathString:a,namespace:c}};/**
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
 */class A0{constructor(e,n,s,a){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class N0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yh{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return Y(this._path)?null:jb(this._path)}get ref(){return new En(this._repo,this._path)}get _queryIdentifier(){const e=f_(this._queryParams),n=_h(e);return n==="{}"?"default":n}get _queryObject(){return f_(this._queryParams)}isEqual(e){if(e=H(e),!(e instanceof Yh))return!1;const n=this._repo===e._repo,s=Ih(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+rR(this._path)}}class En extends Yh{constructor(e,n){super(e,n,new Th,!1)}get parent(){const e=Vb(this._path);return e===null?null:new En(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),s=$l(this.ref,e);return new jo(this._node.getChild(n),s,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new jo(a,$l(this.ref,s),Se)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dN(i,e){return i=H(i),i._checkNotDeleted("ref"),e!==void 0?$l(i._root,e):i._root}function $l(i,e){return i=H(i),$(i._path)===null?HA("child","path",e,!1):b0("child","path",e,!1),new En(i._repo,xe(i._path,e))}function hN(i,e){i=H(i),GA("set",i._path),VA("set",e,i._path,!1);const n=new Xl;return eN(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}class Jh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new A0("value",this,new jo(e.snapshotNode,new En(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new N0(this,e,n):null}matches(e){return e instanceof Jh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Xh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new N0(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const s=$l(new En(n._repo,n._path),e.childName),a=n._queryParams.getIndex();return new A0(e.type,this,new jo(e.snapshotNode,s,a),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Xh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fN(i,e,n,s,a){let c;if(typeof s=="object"&&(c=void 0,a=s),typeof s=="function"&&(c=s),a&&a.onlyOnce){const p=n,m=(b,v)=>{A_(i._repo,i,f),p(b,v)};m.userCallback=n.userCallback,m.context=n.context,n=m}const u=new uN(n,c||void 0),f=e==="value"?new Jh(u):new Xh(e,u);return nN(i._repo,i,f),()=>A_(i._repo,i,f)}function pN(i,e,n,s){return fN(i,"value",e,n,s)}pA(En);bA(En);/**
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
 */const mN="FIREBASE_DATABASE_EMULATOR_HOST",zd={};let gN=!1;function vN(i,e,n,s){i.repoInfo_=new Pb(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams),s&&(i.authTokenProvider_=s)}function _N(i,e,n,s,a){let c=s||i.options.databaseURL;c===void 0&&(i.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",i.options.projectId),c=`${i.options.projectId}-default-rtdb.firebaseio.com`);let u=N_(c,a),f=u.repoInfo,p,m;typeof process<"u"&&process.env&&(m=process.env[mN]),m?(p=!0,c=`http://${m}?ns=${f.namespace}`,u=N_(c,a),f=u.repoInfo):p=!u.repoInfo.secure;const b=a&&p?new Dr(Dr.OWNER):new O2(i.name,i.options,e);$A("Invalid Firebase Database URL",u),Y(u.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const v=bN(f,i,b,new P2(i.name,n));return new wN(v,i)}function yN(i,e){const n=zd[e];(!n||n[i.key]!==i)&&_n(`Database ${e}(${i.repoInfo_}) has already been deleted.`),iN(i),delete n[i.key]}function bN(i,e,n,s){let a=zd[e.name];a||(a={},zd[e.name]=a);let c=a[i.toURLString()];return c&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new JA(i,gN,n,s),a[i.toURLString()]=c,c}class wN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new En(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function IN(i=eh(),e){const n=Vo(i,"database").getImmediate({identifier:e}),s=WI("database");return s&&EN(n,...s),n}function EN(i,e,n,s={}){i=H(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&_n("Cannot call useEmulator() after instance has already been initialized.");const a=i._repoInternal;let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Dr(Dr.OWNER);else if(s.mockUserToken){const u=typeof s.mockUserToken=="string"?s.mockUserToken:HI(s.mockUserToken,i.app.options.projectId);c=new Dr(u)}vN(a,e,n,c)}/**
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
 */function CN(i){g2(Mi),Kn(new gn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return _N(s,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Ft(Jv,Xv,i),Ft(Jv,Xv,"esm2017")}mn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};mn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};CN();const Tr=[];function SN(i,e=rt){let n;const s=new Set;function a(f){if(Wo(i,f)&&(i=f,n)){const p=!Tr.length;for(const m of s)m[1](),Tr.push(m,i);if(p){for(let m=0;m<Tr.length;m+=2)Tr[m][0](Tr[m+1]);Tr.length=0}}}function c(f){a(f(i))}function u(f,p=rt){const m=[f,p];return s.add(m),s.size===1&&(n=e(a)||rt),f(i),()=>{s.delete(m),s.size===0&&(n(),n=null)}}return{set:a,update:c,subscribe:u}}const P0=ec({databaseURL:"https://watchman-willnode-default-rtdb.asia-southeast1.firebasedatabase.app/",apiKey:"AIzaSyCrG9gLErgO0YmZE37PnIF0Vzb-fjbZ4Rg"}),TN=IN(P0),kN=Ek(P0),RN=JSON.parse(localStorage.getItem("user")||"null"),AN="rtI34B6L0Gdgs31EElbAsCvBJ582";var P_=[{id:"breafing",context:"What's on Today?",actions:["On Journey","On Fasting","Day Target Happily Archieved"]},{id:"get-up",time:["04:00","07:00"],context:"Get Up",actions:["Bangun","Tahajud","Subuh","Jogging","Mandi","Dhuha","Breakfast","Bikin Kopi"],limits:["Meeting","WhatsApp","Sosmed"]},{id:"morning",time:["07:00","08:00"],context:"Cold Shower",input:"What I'll do?",limits:["Meeting"]},{id:"work-1",time:["08:00","11:30"],context:"Working Round 1",input:"What I have done?",limits:["WhatsApp","Sosmed"]},{id:"noon",time:["11:30","13:30"],context:"Noon Break",actions:["Dhuhur","Lunch","Tidur"],limits:[]},{id:"work-2",time:["13:30","16:00"],context:"Working Round 2",input:"What I have done?",limits:["Sosmed","WhatsApp"]},{id:"evening",time:["16:00","18:00"],context:"Evening Break",actions:["Ashar","Mandi","Bersih-bersih"],limits:[]},{id:"dawn",time:["18:00","19:00"],context:"Dawn Break",actions:["Magrib","Tadarus","Dinner","Isyak"],limits:["Meeting","Sosmed","Whatsapp"]},{id:"work-3",time:["19:00","22:30"],context:"Working Round 3",input:"What I have done?",limits:["Sosmed"]}];function NN(i,e){var n=dN(TN,`${AN}/${e}/${i}`),s=SN(null),a=0,c=pN(n,f=>{const p=f.val();s.set(Object.assign({ver:0,input:"",actions:{}},p||{}))}),u=s.subscribe(f=>{f&&f.ver>a&&(a=f.ver,hN(n,f))});return{store:s,unsub:function(){c(),u()}}}function PN(i){let e;return{c(){e=Ce("div"),ve(e,"id","firebaseui-auth-container")},m(n,s){Xe(n,e,s)},p:rt,i:rt,o:rt,d(n){n&&Ge(e)}}}function ON(i){return z_(()=>{var e=new f2.AuthUI(kN);e.start("#firebaseui-auth-container",{callbacks:{signInSuccessWithAuthResult(n,s){return n.user&&(localStorage.setItem("user",JSON.stringify(n.user)),location.href="/"),!1},uiShown(){console.log("firebase login loaded")}},signInOptions:[wn.PROVIDER_ID]})}),[]}class DN extends Yl{constructor(e){super(),Kl(this,e,ON,PN,Wo,{})}}function O_(i){const e=new Date,[n,s]=i.split(":");return e.setHours(parseInt(n)),e.setMinutes(parseInt(s)),Number(e)}function LN(i){return i.toLocaleDateString("sv",{day:"2-digit",month:"2-digit",year:"numeric"})}function MN(i){return i.toLocaleTimeString("sv",{hour:"2-digit",minute:"2-digit",hour12:!1})}function D_(i,e,n){const s=i.slice();return s[13]=e[n],s}function L_(i){let e,n,s,a=i[0].context+"",c,u,f,p,m,b=i[0].time&&M_(i),v=i[0].time&&x_(i),w=i[0].actions&&F_(i),E=i[0].input&&B_(i);return{c(){e=Ce("div"),n=Ce("div"),s=Ce("h2"),c=qt(a),u=Lt(),b&&b.c(),f=Lt(),v&&v.c(),p=Lt(),w&&w.c(),m=Lt(),E&&E.c(),ve(s,"class","card-title"),ve(n,"class","card-body"),ve(e,"class","card bg-base-100 shadow-xl border border-primary")},m(A,_){Xe(A,e,_),fe(e,n),fe(n,s),fe(s,c),fe(s,u),b&&b.m(s,null),fe(n,f),v&&v.m(n,null),fe(n,p),w&&w.m(n,null),fe(n,m),E&&E.m(n,null)},p(A,_){_&1&&a!==(a=A[0].context+"")&&Co(c,a),A[0].time?b?b.p(A,_):(b=M_(A),b.c(),b.m(s,null)):b&&(b.d(1),b=null),A[0].time?v?v.p(A,_):(v=x_(A),v.c(),v.m(n,p)):v&&(v.d(1),v=null),A[0].actions?w?w.p(A,_):(w=F_(A),w.c(),w.m(n,m)):w&&(w.d(1),w=null),A[0].input?E?E.p(A,_):(E=B_(A),E.c(),E.m(n,null)):E&&(E.d(1),E=null)},d(A){A&&Ge(e),b&&b.d(),v&&v.d(),w&&w.d(),E&&E.d()}}}function M_(i){let e,n=i[0].time[0]+"",s,a,c=i[0].time[1]+"",u,f;return{c(){e=qt("("),s=qt(n),a=qt(" - "),u=qt(c),f=qt(")")},m(p,m){Xe(p,e,m),Xe(p,s,m),Xe(p,a,m),Xe(p,u,m),Xe(p,f,m)},p(p,m){m&1&&n!==(n=p[0].time[0]+"")&&Co(s,n),m&1&&c!==(c=p[0].time[1]+"")&&Co(u,c)},d(p){p&&Ge(e),p&&Ge(s),p&&Ge(a),p&&Ge(u),p&&Ge(f)}}}function x_(i){let e,n;return{c(){e=Ce("progress"),ve(e,"class","progress progress-primary"),e.value=n=i[1]-i[4],ve(e,"max",i[5]-i[4])},m(s,a){Xe(s,e,a)},p(s,a){a&2&&n!==(n=s[1]-s[4])&&(e.value=n)},d(s){s&&Ge(e)}}}function F_(i){let e,n=i[0].actions,s=[];for(let a=0;a<n.length;a+=1)s[a]=U_(D_(i,n,a));return{c(){e=Ce("div");for(let a=0;a<s.length;a+=1)s[a].c();ve(e,"class","flex flex-wrap")},m(a,c){Xe(a,e,c);for(let u=0;u<s.length;u+=1)s[u].m(e,null)},p(a,c){if(c&201){n=a[0].actions;let u;for(u=0;u<n.length;u+=1){const f=D_(a,n,u);s[u]?s[u].p(f,c):(s[u]=U_(f),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=n.length}},d(a){a&&Ge(e),G_(s,a)}}}function U_(i){let e,n,s,a=i[13]+"",c,u,f,p,m,b,v=(i[3].actions[i[13]]||"--:--")+"",w,E,A,_;function I(...S){return i[8](i[13],...S)}return{c(){e=Ce("div"),n=Ce("label"),s=Ce("span"),c=qt(a),u=Lt(),f=Ce("input"),m=Lt(),b=Ce("span"),w=qt(v),E=Lt(),ve(s,"class","label-text"),ve(f,"type","checkbox"),ve(f,"class","checkbox checkbox-primary mx-2"),f.checked=p=!!i[3].actions[i[13]],ve(b,"class","label-text font-mono"),ve(n,"class","cursor-pointer label"),ve(e,"class","form-control whitespace-nowrap")},m(S,P){Xe(S,e,P),fe(e,n),fe(n,s),fe(s,c),fe(n,u),fe(n,f),fe(n,m),fe(n,b),fe(b,w),fe(e,E),A||(_=bd(f,"change",I),A=!0)},p(S,P){i=S,P&1&&a!==(a=i[13]+"")&&Co(c,a),P&9&&p!==(p=!!i[3].actions[i[13]])&&(f.checked=p),P&9&&v!==(v=(i[3].actions[i[13]]||"--:--")+"")&&Co(w,v)},d(S){S&&Ge(e),A=!1,_()}}}function B_(i){let e,n,s,a,c;return{c(){e=Ce("div"),n=Ce("textarea"),ve(n,"class","textarea textarea-bordered min-w-0"),ve(n,"placeholder",s=i[0].input),n.readOnly=i[6],ve(e,"class","form-control")},m(u,f){Xe(u,e,f),fe(e,n),yv(n,i[3].input),a||(c=[bd(n,"input",i[9]),bd(n,"input",i[7])],a=!0)},p(u,f){f&1&&s!==(s=u[0].input)&&ve(n,"placeholder",s),f&8&&yv(n,u[3].input)},d(u){u&&Ge(e),a=!1,Gr(c)}}}function xN(i){let e,n=i[3]&&L_(i);return{c(){n&&n.c(),e=II()},m(s,a){n&&n.m(s,a),Xe(s,e,a)},p(s,[a]){s[3]?n?n.p(s,a):(n=L_(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:rt,o:rt,d(s){n&&n.d(s),s&&Ge(e)}}}function FN(i,e,n){let s,a=rt,c=()=>(a(),a=bI(v,P=>n(3,s=P)),v);i.$$.on_destroy.push(()=>a());let{item:u}=e,f=u.time?O_(u.time[0]):0,p=u.time?O_(u.time[1]):0,m=Date.now(),b,v,w,E=!RN,A=new Date().getDay();z_(()=>{b=setInterval(()=>{n(1,m=Date.now()),A!=new Date().getDay()&&location.reload()},1e3);var P=NN(u.id,LN(new Date));c(n(2,v=P.store)),w=P.unsub}),SI(()=>{clearInterval(b),w()});var _=()=>{v.update(P=>(P.ver++,P))};const I=(P,j)=>{if(E)return j.preventDefault(),j.currentTarget.checked=s.actions[P],!1;wI(v,s.actions[P]=j.currentTarget.checked?MN(new Date):null,s),_()};function S(){s.input=this.value,v.set(s)}return i.$$set=P=>{"item"in P&&n(0,u=P.item)},[u,m,v,s,f,p,E,_,I,S]}class UN extends Yl{constructor(e){super(),Kl(this,e,FN,xN,Wo,{item:0})}}function j_(i,e,n){const s=i.slice();return s[0]=e[n],s[2]=n,s}function W_(i){let e,n,s,a;return n=new UN({props:{item:i[0]}}),{c(){e=Ce("div"),qd(n.$$.fragment),s=Lt(),CI(e,"md:col-span-2",i[2]==0)},m(c,u){Xe(c,e,u),zl(n,e,null),fe(e,s),a=!0},p:rt,i(c){a||(Hn(n.$$.fragment,c),a=!0)},o(c){xr(n.$$.fragment,c),a=!1},d(c){c&&Ge(e),ql(n)}}}function BN(i){let e,n,s,a,c,u,f,p,m,b,v,w=P_,E=[];for(let _=0;_<w.length;_+=1)E[_]=W_(j_(i,w,_));const A=_=>xr(E[_],1,1,()=>{E[_]=null});return{c(){e=Ce("div"),n=Ce("h1"),n.textContent="Watchman",s=Lt(),a=Ce("p"),a.textContent="Tracking my progress through Atomic Habits",c=Lt(),u=Ce("p"),f=Ce("b"),f.textContent=`${new Date().toLocaleDateString()}`,p=Lt(),m=Ce("div"),b=Ce("div");for(let _=0;_<E.length;_+=1)E[_].c();ve(n,"class","text-3xl"),ve(a,"class","my-2"),ve(u,"class","my-2"),ve(e,"class","text-center text-white-100 my-3"),ve(b,"class","grid grid-cols-1 gap-4 md:grid-cols-2"),ve(m,"class","container mx-auto px-4")},m(_,I){Xe(_,e,I),fe(e,n),fe(e,s),fe(e,a),fe(e,c),fe(e,u),fe(u,f),Xe(_,p,I),Xe(_,m,I),fe(m,b);for(let S=0;S<E.length;S+=1)E[S].m(b,null);v=!0},p(_,[I]){if(I&0){w=P_;let S;for(S=0;S<w.length;S+=1){const P=j_(_,w,S);E[S]?(E[S].p(P,I),Hn(E[S],1)):(E[S]=W_(P),E[S].c(),Hn(E[S],1),E[S].m(b,null))}for(AI(),S=w.length;S<E.length;S+=1)A(S);NI()}},i(_){if(!v){for(let I=0;I<w.length;I+=1)Hn(E[I]);v=!0}},o(_){E=E.filter(Boolean);for(let I=0;I<E.length;I+=1)xr(E[I]);v=!1},d(_){_&&Ge(e),_&&Ge(p),_&&Ge(m),G_(E,_)}}}class jN extends Yl{constructor(e){super(),Kl(this,e,null,BN,Wo,{})}}function WN(i){let e,n;return e=new jN({}),{c(){qd(e.$$.fragment)},m(s,a){zl(e,s,a),n=!0},i(s){n||(Hn(e.$$.fragment,s),n=!0)},o(s){xr(e.$$.fragment,s),n=!1},d(s){ql(e,s)}}}function VN(i){let e,n;return e=new DN({}),{c(){qd(e.$$.fragment)},m(s,a){zl(e,s,a),n=!0},i(s){n||(Hn(e.$$.fragment,s),n=!0)},o(s){xr(e.$$.fragment,s),n=!1},d(s){ql(e,s)}}}function HN(i){let e,n,s,a;const c=[VN,WN],u=[];function f(p,m){return p[0]?0:1}return n=f(i),s=u[n]=c[n](i),{c(){e=Ce("main"),s.c()},m(p,m){Xe(p,e,m),u[n].m(e,null),a=!0},p:rt,i(p){a||(Hn(s),a=!0)},o(p){xr(s),a=!1},d(p){p&&Ge(e),u[n].d()}}}function GN(i){var e=!!new URLSearchParams(window.location.search).get("login");return[e]}class $N extends Yl{constructor(e){super(),Kl(this,e,GN,HN,Wo,{})}}new $N({target:document.getElementById("app")});
