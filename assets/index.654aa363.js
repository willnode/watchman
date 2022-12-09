(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function pt(){}function u_(i){return i()}function zg(){return Object.create(null)}function Qr(i){i.forEach(u_)}function d_(i){return typeof i=="function"}function xi(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function M1(i){return Object.keys(i).length===0}function z(i,e){i.appendChild(e)}function wn(i,e,n){i.insertBefore(e,n||null)}function un(i){i.parentNode.removeChild(i)}function Oe(i){return document.createElement(i)}function _t(i){return document.createTextNode(i)}function ht(){return _t(" ")}function x1(){return _t("")}function fo(i,e,n,s){return i.addEventListener(e,n,s),()=>i.removeEventListener(e,n,s)}function Ee(i,e,n){n==null?i.removeAttribute(e):i.getAttribute(e)!==n&&i.setAttribute(e,n)}function F1(i){return Array.from(i.childNodes)}function wo(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function qn(i,e,n){i.classList[n?"add":"remove"](e)}let Oo;function Co(i){Oo=i}function h_(){if(!Oo)throw new Error("Function called outside component initialization");return Oo}function $l(i){h_().$$.on_mount.push(i)}function f_(i){h_().$$.on_destroy.push(i)}const Io=[],Kg=[],wl=[],qg=[],U1=Promise.resolve();let ud=!1;function B1(){ud||(ud=!0,U1.then(p_))}function dd(i){wl.push(i)}const zu=new Set;let ml=0;function p_(){const i=Oo;do{for(;ml<Io.length;){const e=Io[ml];ml++,Co(e),j1(e.$$)}for(Co(null),Io.length=0,ml=0;Kg.length;)Kg.pop()();for(let e=0;e<wl.length;e+=1){const n=wl[e];zu.has(n)||(zu.add(n),n())}wl.length=0}while(Io.length);for(;qg.length;)qg.pop()();ud=!1,zu.clear(),Co(i)}function j1(i){if(i.fragment!==null){i.update(),Qr(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(dd)}}const Il=new Set;let Si;function gl(){Si={r:0,c:[],p:Si}}function vl(){Si.r||Qr(Si.c),Si=Si.p}function Be(i,e){i&&i.i&&(Il.delete(i),i.i(e))}function ft(i,e,n,s){if(i&&i.o){if(Il.has(i))return;Il.add(i),Si.c.push(()=>{Il.delete(i),s&&(n&&i.d(1),s())}),i.o(e)}else s&&s()}function Zr(i){i&&i.c()}function Fi(i,e,n,s){const{fragment:a,after_update:c}=i.$$;a&&a.m(e,n),s||dd(()=>{const h=i.$$.on_mount.map(u_).filter(d_);i.$$.on_destroy?i.$$.on_destroy.push(...h):Qr(h),i.$$.on_mount=[]}),c.forEach(dd)}function Ui(i,e){const n=i.$$;n.fragment!==null&&(Qr(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W1(i,e){i.$$.dirty[0]===-1&&(Io.push(i),B1(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Bi(i,e,n,s,a,c,h,f=[-1]){const p=Oo;Co(i);const g=i.$$={fragment:null,ctx:[],props:c,update:pt,not_equal:a,bound:zg(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:zg(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};h&&h(g.root);let b=!1;if(g.ctx=n?n(i,e.props||{},(v,E,...A)=>{const M=A.length?A[0]:E;return g.ctx&&a(g.ctx[v],g.ctx[v]=M)&&(!g.skip_bound&&g.bound[v]&&g.bound[v](M),b&&W1(i,v)),E}):[],g.update(),b=!0,Qr(g.before_update),g.fragment=s?s(g.ctx):!1,e.target){if(e.hydrate){const v=F1(e.target);g.fragment&&g.fragment.l(v),v.forEach(un)}else g.fragment&&g.fragment.c();e.intro&&Be(i.$$.fragment),Fi(i,e.target,e.anchor,e.customElement),p_()}Co(p)}class ji{$destroy(){Ui(this,1),this.$destroy=pt}$on(e,n){if(!d_(n))return pt;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}$set(e){this.$$set&&!M1(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const m_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(i,e){if(!i)throw es(e)},es=function(i){return new Error("Firebase Database ("+m_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const g_=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},H1=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],h=i[n++],f=i[n++],p=((a&7)<<18|(c&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=i[n++],h=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|h&63)}}return e.join("")},xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],h=a+1<i.length,f=h?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,b=c>>2,v=(c&3)<<4|f>>4;let E=(f&15)<<2|g>>6,A=g&63;p||(A=64,h||(E=64)),s.push(n[b],n[v],n[E],n[A])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(g_(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):H1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],f=a<i.length?n[i.charAt(a)]:0;++a;const g=a<i.length?n[i.charAt(a)]:64;++a;const v=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||f==null||g==null||v==null)throw Error();const E=c<<2|f>>4;if(s.push(E),g!==64){const A=f<<4&240|g>>2;if(s.push(A),v!==64){const M=g<<6&192|v;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},v_=function(i){const e=g_(i);return xd.encodeByteArray(e,!0)},Tl=function(i){return v_(i).replace(/\./g,"")},kl=function(i){try{return xd.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function V1(i){return Do(void 0,i)}function Do(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$1(n)||(i[n]=Do(i[n],e[n]));return i}function $1(i){return i!=="__proto__"}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function __(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function G1(){return typeof self=="object"&&self.self===self}function y_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Gl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b_(){const i=je();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function w_(){return m_.NODE_ADMIN===!0}function Rl(){return typeof indexedDB=="object"}function z1(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}function K1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q1=()=>K1().__FIREBASE_DEFAULTS__,Y1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i=process.env.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},J1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&kl(i[1]);return e&&JSON.parse(e)},Ud=()=>{try{return q1()||Y1()||J1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},I_=i=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},X1=i=>{const e=I_(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Q1=()=>{var i;return(i=Ud())===null||i===void 0?void 0:i.config},E_=i=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Z1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i),f="";return[Tl(JSON.stringify(n)),Tl(JSON.stringify(h)),f].join(".")}/**
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
 */const eI="FirebaseError";class bt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=eI,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],h=c?tI(c,s):"Error",f=`${this.serviceName}: ${h} (${a}).`;return new bt(a,f,s)}}function tI(i,e){return i.replace(nI,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const nI=/\{\$([^}]+)}/g;/**
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
 */function Lo(i){return JSON.parse(i)}function it(i){return JSON.stringify(i)}/**
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
 */const S_=function(i){let e={},n={},s={},a="";try{const c=i.split(".");e=Lo(kl(c[0])||""),n=Lo(kl(c[1])||""),a=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:a}},iI=function(i){const e=S_(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rI=function(i){const e=S_(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Jt(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function zr(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function hd(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Al(i,e,n){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(n,i[a],a,i));return s}function Nl(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],h=e[a];if(Yg(c)&&Yg(h)){if(!Nl(c,h))return!1}else if(c!==h)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Yg(i){return i!==null&&typeof i=="object"}/**
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
 */function Hi(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fr(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,c]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function Eo(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
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
 */class sI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const E=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(E<<1|E>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],h=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,b;for(let v=0;v<80;v++){v<40?v<20?(g=f^c&(h^f),b=1518500249):(g=c^h^f,b=1859775393):v<60?(g=c&h|f&(c|h),b=2400959708):(g=c^h^f,b=3395469782);const E=(a<<5|a>>>27)+g+p+b+s[v]&4294967295;p=f,f=h,h=(c<<30|c>>>2)&4294967295,c=a,a=E}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let a=0;const c=this.buf_;let h=this.inbuf_;for(;a<n;){if(h===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[h]=e.charCodeAt(a),++h,++a,h===this.blockSize){this.compress_(c),h=0;break}}else for(;a<n;)if(c[h]=e[a],++h,++a,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[a]>>c&255,++s;return e}}function C_(i,e){const n=new oI(i,e);return n.subscribe.bind(n)}class oI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Ku),a.error===void 0&&(a.error=Ku),a.complete===void 0&&(a.complete=Ku);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Ku(){}function lI(i,e){return`${i} failed: ${e} argument `}/**
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
 */const cI=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const c=a-55296;s++,P(s<i.length,"Surrogate pair missing trail surrogate.");const h=i.charCodeAt(s)-56320;a=65536+(c<<10)+h}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},zl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function K(i){return i&&i._delegate?i._delegate:i}class Cn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ii="[DEFAULT]";/**
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
 */class uI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hI(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&h.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const h=this.instances.get(a);return h&&e(h,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dI(i){return i===Ii?void 0:i}function hI(i){return i.instantiationMode==="EAGER"}/**
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
 */class fI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const jd=[];var de;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(de||(de={}));const T_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},pI=de.INFO,mI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},gI=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=mI[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=pI,this._logHandler=gI,this._userLogHandler=null,jd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}function vI(i){jd.forEach(e=>{e.setLogLevel(i)})}function _I(i,e){for(const n of jd){let s=null;e&&e.level&&(s=T_[e.level]),i===null?n.userLogHandler=null:n.userLogHandler=(a,c,...h)=>{const f=h.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");c>=(s!=null?s:a.logLevel)&&i({level:de[c].toLowerCase(),message:f,args:h,type:a.name})}}}const yI=(i,e)=>e.some(n=>i instanceof n);let Jg,Xg;function bI(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wI(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,fd=new WeakMap,R_=new WeakMap,qu=new WeakMap,Wd=new WeakMap;function II(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{n(Xn(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&k_.set(n,i)}).catch(()=>{}),Wd.set(e,i),e}function EI(i){if(fd.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{n(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});fd.set(i,e)}let pd={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return fd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||R_.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function SI(i){pd=i(pd)}function CI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Yu(this),e,...n);return R_.set(s,e.sort?e.sort():[e]),Xn(s)}:wI().includes(i)?function(...e){return i.apply(Yu(this),e),Xn(k_.get(this))}:function(...e){return Xn(i.apply(Yu(this),e))}}function TI(i){return typeof i=="function"?CI(i):(i instanceof IDBTransaction&&EI(i),yI(i,bI())?new Proxy(i,pd):i)}function Xn(i){if(i instanceof IDBRequest)return II(i);if(qu.has(i))return qu.get(i);const e=TI(i);return e!==i&&(qu.set(i,e),Wd.set(e,i)),e}const Yu=i=>Wd.get(i);function kI(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const h=indexedDB.open(i,e),f=Xn(h);return s&&h.addEventListener("upgradeneeded",p=>{s(Xn(h.result),p.oldVersion,p.newVersion,Xn(h.transaction))}),n&&h.addEventListener("blocked",()=>n()),f.then(p=>{c&&p.addEventListener("close",()=>c()),a&&p.addEventListener("versionchange",()=>a())}).catch(()=>{}),f}const RI=["get","getKey","getAll","getAllKeys","count"],AI=["put","add","delete","clear"],Ju=new Map;function Qg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ju.get(e))return Ju.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=AI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||RI.includes(n)))return;const c=async function(h,...f){const p=this.transaction(h,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),a&&p.done]))[0]};return Ju.set(e,c),c}SI(i=>({...i,get:(e,n,s)=>Qg(e,n)||i.get(e,n,s),has:(e,n)=>!!Qg(e,n)||i.has(e,n)}));/**
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
 */class NI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function PI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",Zg="0.8.2";/**
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
 */const Pi=new Kl("@firebase/app"),OI="@firebase/app-compat",DI="@firebase/analytics-compat",LI="@firebase/analytics",MI="@firebase/app-check-compat",xI="@firebase/app-check",FI="@firebase/auth",UI="@firebase/auth-compat",BI="@firebase/database",jI="@firebase/database-compat",WI="@firebase/functions",HI="@firebase/functions-compat",VI="@firebase/installations",$I="@firebase/installations-compat",GI="@firebase/messaging",zI="@firebase/messaging-compat",KI="@firebase/performance",qI="@firebase/performance-compat",YI="@firebase/remote-config",JI="@firebase/remote-config-compat",XI="@firebase/storage",QI="@firebase/storage-compat",ZI="@firebase/firestore",eE="@firebase/firestore-compat",tE="firebase",nE="9.12.1";/**
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
 */const Zn="[DEFAULT]",iE={[md]:"fire-core",[OI]:"fire-core-compat",[LI]:"fire-analytics",[DI]:"fire-analytics-compat",[xI]:"fire-app-check",[MI]:"fire-app-check-compat",[FI]:"fire-auth",[UI]:"fire-auth-compat",[BI]:"fire-rtdb",[jI]:"fire-rtdb-compat",[WI]:"fire-fn",[HI]:"fire-fn-compat",[VI]:"fire-iid",[$I]:"fire-iid-compat",[GI]:"fire-fcm",[zI]:"fire-fcm-compat",[KI]:"fire-perf",[qI]:"fire-perf-compat",[YI]:"fire-rc",[JI]:"fire-rc-compat",[XI]:"fire-gcs",[QI]:"fire-gcs-compat",[ZI]:"fire-fst",[eE]:"fire-fst-compat","fire-js":"fire-js",[tE]:"fire-js-all"};/**
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
 */const ei=new Map,Mo=new Map;function Pl(i,e){try{i.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function A_(i,e){i.container.addOrOverwriteComponent(e)}function ti(i){const e=i.name;if(Mo.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;Mo.set(e,i);for(const n of ei.values())Pl(n,i);return!0}function Vo(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function rE(i,e,n=Zn){Vo(i,e).clearInstance(n)}function sE(){Mo.clear()}/**
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
 */const oE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new Wi("app","Firebase",oE);/**
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
 */class aE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=nE;function ql(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zn,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw In.create("bad-app-name",{appName:String(a)});if(n||(n=Q1()),!n)throw In.create("no-options");const c=ei.get(a);if(c){if(Nl(n,c.options)&&Nl(s,c.config))return c;throw In.create("duplicate-app",{appName:a})}const h=new fI(a);for(const p of Mo.values())h.addComponent(p);const f=new aE(n,s,h);return ei.set(a,f),f}function Hd(i=Zn){const e=ei.get(i);if(!e&&i===Zn)return ql();if(!e)throw In.create("no-app",{appName:i});return e}function lE(){return Array.from(ei.values())}async function N_(i){const e=i.name;ei.has(e)&&(ei.delete(e),await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function Kt(i,e,n){var s;let a=(s=iE[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const f=[`Unable to register library "${a}" with version "${e}":`];c&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(f.join(" "));return}ti(new Cn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function P_(i,e){if(i!==null&&typeof i!="function")throw In.create("invalid-log-argument");_I(i,e)}function O_(i){vI(i)}/**
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
 */const cE="firebase-heartbeat-database",uE=1,xo="firebase-heartbeat-store";let Xu=null;function D_(){return Xu||(Xu=kI(cE,uE,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(xo)}}}).catch(i=>{throw In.create("idb-open",{originalErrorMessage:i.message})})),Xu}async function dE(i){var e;try{return(await D_()).transaction(xo).objectStore(xo).get(L_(i))}catch(n){if(n instanceof bt)Pi.warn(n.message);else{const s=In.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Pi.warn(s.message)}}}async function ev(i,e){var n;try{const a=(await D_()).transaction(xo,"readwrite");return await a.objectStore(xo).put(e,L_(i)),a.done}catch(s){if(s instanceof bt)Pi.warn(s.message);else{const a=In.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Pi.warn(a.message)}}}function L_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const hE=1024,fE=30*24*60*60*1e3;class pE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=fE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tv(),{heartbeatsToSend:n,unsentEntries:s}=mE(this._heartbeatsCache.heartbeats),a=Tl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function tv(){return new Date().toISOString().substring(0,10)}function mE(i,e=hE){const n=[];let s=i.slice();for(const a of i){const c=n.find(h=>h.agent===a.agent);if(c){if(c.dates.push(a.date),nv(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),nv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rl()?z1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function nv(i){return Tl(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function vE(i){ti(new Cn("platform-logger",e=>new NI(e),"PRIVATE")),ti(new Cn("heartbeat",e=>new pE(e),"PRIVATE")),Kt(md,Zg,i),Kt(md,Zg,"esm2017"),Kt("fire-js","")}vE("");const _E=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Vi,_DEFAULT_ENTRY_NAME:Zn,_addComponent:Pl,_addOrOverwriteComponent:A_,_apps:ei,_clearComponents:sE,_components:Mo,_getProvider:Vo,_registerComponent:ti,_removeServiceInstance:rE,deleteApp:N_,getApp:Hd,getApps:lE,initializeApp:ql,onLog:P_,registerVersion:Kt,setLogLevel:O_,FirebaseError:bt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class yE{constructor(e,n){this._delegate=e,this.firebase=n,Pl(e,new Cn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),N_(this._delegate)))}_getService(e,n=Zn){var s;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((s=a.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:n})}_removeServiceInstance(e,n=Zn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Pl(this._delegate,e)}_addOrOverwriteComponent(e){A_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const bE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},iv=new Wi("app-compat","Firebase",bE);/**
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
 */function wE(i){const e={},n={__esModule:!0,initializeApp:c,app:a,registerVersion:Kt,setLogLevel:O_,onLog:P_,apps:null,SDK_VERSION:Vi,INTERNAL:{registerComponent:f,removeApp:s,useAsService:p,modularAPIs:_E}};n.default=n,Object.defineProperty(n,"apps",{get:h});function s(g){delete e[g]}function a(g){if(g=g||Zn,!Jt(e,g))throw iv.create("no-app",{appName:g});return e[g]}a.App=i;function c(g,b={}){const v=ql(g,b);if(Jt(e,v.name))return e[v.name];const E=new i(v,n);return e[v.name]=E,E}function h(){return Object.keys(e).map(g=>e[g])}function f(g){const b=g.name,v=b.replace("-compat","");if(ti(g)&&g.type==="PUBLIC"){const E=(A=a())=>{if(typeof A[v]!="function")throw iv.create("invalid-app-argument",{appName:b});return A[v]()};g.serviceProps!==void 0&&Do(E,g.serviceProps),n[v]=E,i.prototype[v]=function(...A){return this._getService.bind(this,b).apply(this,g.multipleInstances?A:[])}}return g.type==="PUBLIC"?n[v]:null}function p(g,b){return b==="serverAuth"?null:b}return n}/**
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
 */function M_(){const i=wE(yE);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:M_,extendNamespace:e,createSubscribe:C_,ErrorFactory:Wi,deepExtend:Do});function e(n){Do(i,n)}return i}const IE=M_();/**
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
 */const rv=new Kl("@firebase/app-compat"),EE="@firebase/app-compat",SE="0.1.37";/**
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
 */function CE(i){Kt(EE,SE,i)}/**
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
 */if(G1()&&self.firebase!==void 0){rv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const i=self.firebase.SDK_VERSION;i&&i.indexOf("LITE")>=0&&rv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const x=IE;CE();var TE="firebase",kE="9.12.1";/**
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
 */x.registerVersion(TE,kE,"app-compat");function Vd(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}const po={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Mr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function RE(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function x_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AE=RE,NE=x_,F_=new Wi("auth","Firebase",x_());/**
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
 */const sv=new Kl("@firebase/auth");function El(i,...e){sv.logLevel<=de.ERROR&&sv.error(`Auth (${Vi}): ${i}`,...e)}/**
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
 */function Xe(i,...e){throw $d(i,...e)}function rt(i,...e){return $d(i,...e)}function U_(i,e,n){const s=Object.assign(Object.assign({},NE()),{[e]:n});return new Wi("auth","Firebase",s).create(e,{appName:i.name})}function ts(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xe(i,"argument-error"),U_(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $d(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return F_.create(i,...e)}function R(i,e,...n){if(!i)throw $d(e,...n)}function ln(i){const e="INTERNAL ASSERTION FAILED: "+i;throw El(e),new Error(e)}function Xt(i,e){i||ln(e)}/**
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
 */const ov=new Map;function Nt(i){Xt(i instanceof Function,"Expected a class definition");let e=ov.get(i);return e?(Xt(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ov.set(i,e),e)}/**
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
 */function PE(i,e){const n=Vo(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Nl(c,e!=null?e:{}))return a;Xe(a,"already-initialized")}return n.initialize({options:e})}function OE(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Fo(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Gd(){return av()==="http:"||av()==="https:"}function av(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function DE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gd()||y_()||"connection"in navigator)?navigator.onLine:!0}function LE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Fd()||Gl()}get(){return DE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zd(i,e){Xt(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class B_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ME={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xE=new $o(3e4,6e4);function $e(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ze(i,e,n,s,a={}){return j_(i,a,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const f=Hi(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode),B_.fetch()(W_(i,i.config.apiHost,n,f),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},c))})}async function j_(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},ME),e);try{const a=new FE(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw So(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const f=c.ok?h.errorMessage:h.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw So(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw So(i,"user-disabled",h);const b=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw U_(i,b,g);Xe(i,b)}}catch(a){if(a instanceof bt)throw a;Xe(i,"network-request-failed")}}async function Rn(i,e,n,s,a={}){const c=await Ze(i,e,n,s,a);return"mfaPendingCredential"in c&&Xe(i,"multi-factor-auth-required",{_serverResponse:c}),c}function W_(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?zd(i.config,a):`${i.config.apiScheme}://${a}`}class FE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rt(this.auth,"network-request-failed")),xE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=rt(i,e,s);return a.customData._tokenResponse=n,a}/**
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
 */async function UE(i,e){return Ze(i,"POST","/v1/accounts:delete",e)}async function BE(i,e){return Ze(i,"POST","/v1/accounts:update",e)}async function jE(i,e){return Ze(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function To(i){if(!!i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WE(i,e=!1){const n=K(i),s=await n.getIdToken(e),a=Yl(s);R(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:To(Qu(a.auth_time)),issuedAtTime:To(Qu(a.iat)),expirationTime:To(Qu(a.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Qu(i){return Number(i)*1e3}function Yl(i){var e;const[n,s,a]=i.split(".");if(n===void 0||s===void 0||a===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const c=kl(s);return c?JSON.parse(c):(El("Failed to decode base64 JWT payload"),null)}catch(c){return El("Caught error parsing JWT payload as JSON",(e=c)===null||e===void 0?void 0:e.toString()),null}}function HE(i){const e=Yl(i);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bt&&VE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function VE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class $E{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class H_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uo(i){var e;const n=i.auth,s=await i.getIdToken(),a=await Tn(i,jE(n,{idToken:s}));R(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?KE(c.providerUserInfo):[],f=zE(i.providerData,h),p=i.isAnonymous,g=!(i.email&&c.passwordHash)&&!(f!=null&&f.length),b=p?g:!1,v={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:f,metadata:new H_(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,v)}async function GE(i){const e=K(i);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zE(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function KE(i){return i.map(e=>{var{providerId:n}=e,s=Vd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qE(i,e){const n=await j_(i,{},async()=>{const s=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,h=W_(i,a,"/v1/token",`key=${c}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",B_.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await qE(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,h=new Bo;return s&&(R(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(R(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),c&&(R(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
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
 */function Yn(i,e){R(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ki{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=Vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $E(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new H_(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Tn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WE(this,e)}reload(){return GE(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ki(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tn(this,UE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,h,f,p,g,b;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,E=(a=n.email)!==null&&a!==void 0?a:void 0,A=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,M=(h=n.photoURL)!==null&&h!==void 0?h:void 0,y=(f=n.tenantId)!==null&&f!==void 0?f:void 0,I=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,S=(g=n.createdAt)!==null&&g!==void 0?g:void 0,N=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:F,emailVerified:U,isAnonymous:V,providerData:H,stsTokenManager:re}=n;R(F&&re,e,"internal-error");const et=Bo.fromJSON(this.name,re);R(typeof F=="string",e,"internal-error"),Yn(v,e.name),Yn(E,e.name),R(typeof U=="boolean",e,"internal-error"),R(typeof V=="boolean",e,"internal-error"),Yn(A,e.name),Yn(M,e.name),Yn(y,e.name),Yn(I,e.name),Yn(S,e.name),Yn(N,e.name);const Ot=new ki({uid:F,auth:e,email:E,emailVerified:U,displayName:v,isAnonymous:V,photoURL:M,phoneNumber:A,tenantId:y,stsTokenManager:et,createdAt:S,lastLoginAt:N});return H&&Array.isArray(H)&&(Ot.providerData=H.map(wt=>Object.assign({},wt))),I&&(Ot._redirectEventId=I),Ot}static async _fromIdTokenResponse(e,n,s=!1){const a=new Bo;a.updateFromServerResponse(n);const c=new ki({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Uo(c),c}}/**
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
 */class V_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V_.type="NONE";const Kr=V_;/**
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
 */function Ri(i,e,n){return`firebase:${i}:${e}:${n}`}class jr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Ri(this.userKey,a.apiKey,c),this.fullPersistenceKey=Ri("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ki._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new jr(Nt(Kr),e,s);const a=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=a[0]||Nt(Kr);const h=Ri(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const b=await g._get(h);if(b){const v=ki._fromJSON(e,b);g!==c&&(f=v),c=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new jr(c,e,s):(c=p[0],f&&await c._set(h,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new jr(c,e,s))}}/**
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
 */function lv(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K_(e))return"Blackberry";if(q_(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Go(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $_(i=je()){return/firefox\//i.test(i)}function Kd(i=je()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(i=je()){return/crios\//i.test(i)}function z_(i=je()){return/iemobile/i.test(i)}function Go(i=je()){return/android/i.test(i)}function K_(i=je()){return/blackberry/i.test(i)}function q_(i=je()){return/webos/i.test(i)}function ns(i=je()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function YE(i=je()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function JE(i=je()){var e;return ns(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XE(){return b_()&&document.documentMode===10}function Y_(i=je()){return ns(i)||Go(i)||q_(i)||K_(i)||/windows phone/i.test(i)||z_(i)}function QE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function J_(i,e=[]){let n;switch(i){case"Browser":n=lv(je());break;case"Worker":n=`${lv(je())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${s}`}/**
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
 */class ZE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((h,f)=>{try{const p=e(c);h(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const a of this.queue)await a(e),a.onAbort&&s.push(a.onAbort)}catch(a){s.reverse();for(const c of s)try{c()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=a)===null||n===void 0?void 0:n.message})}}}/**
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
 */class eS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new ZE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p==null?void 0:p.user)&&(a=p.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Uo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?K(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n),h=this._isInitialized?Promise.resolve():this._initializationPromise;return R(h,this,"internal-error"),h.then(()=>c(this.currentUser)),typeof n=="function"?e.addObserver(n,s,a):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Qe(i){return K(i)}class cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=C_(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function X_(i,e,n){const s=Qe(i);R(s._canInitEmulator,s,"emulator-config-failed"),R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!!(n!=null&&n.disableWarnings),c=Q_(e),{host:h,port:f}=tS(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${c}//${h}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||nS()}function Q_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function tS(i){const e=Q_(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:uv(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:uv(h)}}}function uv(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function nS(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class is{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
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
 */async function Z_(i,e){return Ze(i,"POST","/v1/accounts:resetPassword",$e(i,e))}async function ey(i,e){return Ze(i,"POST","/v1/accounts:update",e)}async function iS(i,e){return Ze(i,"POST","/v1/accounts:update",$e(i,e))}/**
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
 */async function rS(i,e){return Rn(i,"POST","/v1/accounts:signInWithPassword",$e(i,e))}async function Jl(i,e){return Ze(i,"POST","/v1/accounts:sendOobCode",$e(i,e))}async function sS(i,e){return Jl(i,e)}async function oS(i,e){return Jl(i,e)}async function aS(i,e){return Jl(i,e)}async function lS(i,e){return Jl(i,e)}/**
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
 */async function cS(i,e){return Rn(i,"POST","/v1/accounts:signInWithEmailLink",$e(i,e))}async function uS(i,e){return Rn(i,"POST","/v1/accounts:signInWithEmailLink",$e(i,e))}/**
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
 */class jo extends is{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new jo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cS(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ey(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uS(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function En(i,e){return Rn(i,"POST","/v1/accounts:signInWithIdp",$e(i,e))}/**
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
 */const dS="http://localhost";class dn extends is{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=Vd(n,["providerId","signInMethod"]);if(!s||!a)return null;const h=new dn(s,a);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,En(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}buildRequest(){const e={requestUri:dS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
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
 */async function hS(i,e){return Ze(i,"POST","/v1/accounts:sendVerificationCode",$e(i,e))}async function fS(i,e){return Rn(i,"POST","/v1/accounts:signInWithPhoneNumber",$e(i,e))}async function pS(i,e){const n=await Rn(i,"POST","/v1/accounts:signInWithPhoneNumber",$e(i,e));if(n.temporaryProof)throw So(i,"account-exists-with-different-credential",n);return n}const mS={USER_NOT_FOUND:"user-not-found"};async function gS(i,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Rn(i,"POST","/v1/accounts:signInWithPhoneNumber",$e(i,n),mS)}/**
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
 */class Ai extends is{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ai({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ai({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return fS(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return pS(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:a}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:c}=e;return!s&&!n&&!a&&!c?null:new Ai({verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:c})}}/**
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
 */function vS(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _S(i){const e=Fr(Eo(i)).link,n=e?Fr(Eo(e)).deep_link_id:null,s=Fr(Eo(i)).deep_link_id;return(s?Fr(Eo(s)).link:null)||s||n||e||i}class Xl{constructor(e){var n,s,a,c,h,f;const p=Fr(Eo(e)),g=(n=p.apiKey)!==null&&n!==void 0?n:null,b=(s=p.oobCode)!==null&&s!==void 0?s:null,v=vS((a=p.mode)!==null&&a!==void 0?a:null);R(g&&b&&v,"argument-error"),this.apiKey=g,this.operation=v,this.code=b,this.continueUrl=(c=p.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=_S(e);try{return new Xl(n)}catch{return null}}}/**
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
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xl.parseLink(n);return R(s,"argument-error"),jo._fromEmailAndCode(e,s.code,s.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rs extends Nn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Wr extends rs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return R("providerId"in n&&"signInMethod"in n,"argument-error"),dn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),dn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Wr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Wr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:c,nonce:h,providerId:f}=e;if(!s&&!a&&!n&&!c||!f)return null;try{return new Wr(f)._credential({idToken:n,accessToken:s,nonce:h,pendingToken:c})}catch{return null}}}/**
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
 */class rn extends rs{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class sn extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
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
 */class on extends rs{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */const yS="http://localhost";class qr extends is{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,En(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,pendingToken:c}=n;return!s||!a||!c||s!==a?null:new qr(s,c)}static _create(e,n){return new qr(e,n)}buildRequest(){return{requestUri:yS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const bS="saml.";class Ol extends Nn{constructor(e){R(e.startsWith(bS),"argument-error"),super(e)}static credentialFromResult(e){return Ol.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ol.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=qr.fromJSON(e);return R(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return qr._create(s,n)}catch{return null}}}/**
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
 */class an extends rs{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function ty(i,e){return Rn(i,"POST","/v1/accounts:signUp",$e(i,e))}/**
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
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await ki._fromIdTokenResponse(e,s,a),h=dv(s);return new xt({user:c,providerId:h,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=dv(s);return new xt({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function dv(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function wS(i){var e;const n=Qe(i);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xt({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await ty(n,{returnSecureToken:!0}),a=await xt._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(a.user),a}/**
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
 */class Dl extends bt{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Dl(e,n,s,a)}}function ny(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(i,c,e,s):c})}/**
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
 */function iy(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function IS(i,e){const n=K(i);await Ql(!0,n,e);const{providerUserInfo:s}=await BE(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),a=iy(s||[]);return n.providerData=n.providerData.filter(c=>a.has(c.providerId)),a.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function qd(i,e,n=!1){const s=await Tn(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return xt._forOperation(i,"link",s)}async function Ql(i,e,n){await Uo(e);const s=iy(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";R(s.has(n)===i,e.auth,a)}/**
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
 */async function ry(i,e,n=!1){var s;const{auth:a}=i,c="reauthenticate";try{const h=await Tn(i,ny(a,c,e,i),n);R(h.idToken,a,"internal-error");const f=Yl(h.idToken);R(f,a,"internal-error");const{sub:p}=f;return R(i.uid===p,a,"user-mismatch"),xt._forOperation(i,c,h)}catch(h){throw((s=h)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Xe(a,"user-mismatch"),h}}/**
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
 */async function sy(i,e,n=!1){const s="signIn",a=await ny(i,s,e),c=await xt._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}async function Zl(i,e){return sy(Qe(i),e)}async function oy(i,e){const n=K(i);return await Ql(!1,n,e.providerId),qd(n,e)}async function ay(i,e){return ry(K(i),e)}/**
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
 */async function ES(i,e){return Rn(i,"POST","/v1/accounts:signInWithCustomToken",$e(i,e))}/**
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
 */async function SS(i,e){const n=Qe(i),s=await ES(n,{token:e,returnSecureToken:!0}),a=await xt._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}/**
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
 */class ec{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Yd._fromServerResponse(e,n):Xe(e,"internal-error")}}class Yd extends ec{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Yd(n)}}/**
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
 */function tc(i,e,n){var s;R(((s=n.url)===null||s===void 0?void 0:s.length)>0,i,"invalid-continue-uri"),R(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(R(n.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(R(n.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function CS(i,e,n){const s=K(i),a={requestType:"PASSWORD_RESET",email:e};n&&tc(s,a,n),await oS(s,a)}async function TS(i,e,n){await Z_(K(i),{oobCode:e,newPassword:n})}async function kS(i,e){await iS(K(i),{oobCode:e})}async function ly(i,e){const n=K(i),s=await Z_(n,{oobCode:e}),a=s.requestType;switch(R(a,n,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(s.mfaInfo,n,"internal-error");default:R(s.email,n,"internal-error")}let c=null;return s.mfaInfo&&(c=ec._fromServerResponse(Qe(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:c},operation:a}}async function RS(i,e){const{data:n}=await ly(K(i),e);return n.email}async function AS(i,e,n){const s=Qe(i),a=await ty(s,{returnSecureToken:!0,email:e,password:n}),c=await xt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function NS(i,e,n){return Zl(K(i),An.credential(e,n))}/**
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
 */async function PS(i,e,n){const s=K(i),a={requestType:"EMAIL_SIGNIN",email:e};R(n.handleCodeInApp,s,"argument-error"),n&&tc(s,a,n),await aS(s,a)}function OS(i,e){const n=Xl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function DS(i,e,n){const s=K(i),a=An.credentialWithLink(e,n||Fo());return R(a._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Zl(s,a)}/**
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
 */async function LS(i,e){return Ze(i,"POST","/v1/accounts:createAuthUri",$e(i,e))}/**
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
 */async function MS(i,e){const n=Gd()?Fo():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:a}=await LS(K(i),s);return a||[]}async function xS(i,e){const n=K(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&tc(n.auth,a,e);const{email:c}=await sS(n.auth,a);c!==i.email&&await i.reload()}async function FS(i,e,n){const s=K(i),c={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};n&&tc(s.auth,c,n);const{email:h}=await lS(s.auth,c);h!==i.email&&await i.reload()}/**
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
 */async function US(i,e){return Ze(i,"POST","/v1/accounts:update",e)}/**
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
 */async function BS(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=K(i),c={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},h=await Tn(s,US(s.auth,c));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function jS(i,e){return cy(K(i),e,null)}function WS(i,e){return cy(K(i),null,e)}async function cy(i,e,n){const{auth:s}=i,c={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(c.email=e),n&&(c.password=n);const h=await Tn(i,ey(s,c));await i._updateTokensIfNecessary(h,!0)}/**
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
 */function HS(i){var e,n;if(!i)return null;const{providerId:s}=i,a=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},c=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(i==null?void 0:i.idToken)){const h=(n=(e=Yl(i.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(h){const f=h!=="anonymous"&&h!=="custom"?h:null;return new Hr(c,f)}}if(!s)return null;switch(s){case"facebook.com":return new VS(c,a);case"github.com":return new $S(c,a);case"google.com":return new GS(c,a);case"twitter.com":return new zS(c,a,i.screenName||null);case"custom":case"anonymous":return new Hr(c,null);default:return new Hr(c,s,a)}}class Hr{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class uy extends Hr{constructor(e,n,s,a){super(e,n,s),this.username=a}}class VS extends Hr{constructor(e,n){super(e,"facebook.com",n)}}class $S extends uy{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class GS extends Hr{constructor(e,n){super(e,"google.com",n)}}class zS extends uy{constructor(e,n,s){super(e,"twitter.com",n,s)}}function KS(i){const{user:e,_tokenResponse:n}=i;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:HS(n)}function qS(i,e,n,s){return K(i).onIdTokenChanged(e,n,s)}function YS(i,e,n){return K(i).beforeAuthStateChanged(e,n)}class Ci{constructor(e,n,s){this.type=e,this.credential=n,this.auth=s}static _fromIdtoken(e,n){return new Ci("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ci("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ci._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Ci._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Jd{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=Qe(e),a=n.customData._serverResponse,c=(a.mfaInfo||[]).map(f=>ec._fromServerResponse(s,f));R(a.mfaPendingCredential,s,"internal-error");const h=Ci._fromMfaPendingCredential(a.mfaPendingCredential);return new Jd(h,c,async f=>{const p=await f._process(s,h);delete a.mfaInfo,delete a.mfaPendingCredential;const g=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(n.operationType){case"signIn":const b=await xt._fromIdTokenResponse(s,n.operationType,g);return await s._updateCurrentUser(b.user),b;case"reauthenticate":return R(n.user,s,"internal-error"),xt._forOperation(n.user,n.operationType,g);default:Xe(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function JS(i,e){var n;const s=K(i),a=e;return R(e.customData.operationType,s,"argument-error"),R((n=a.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,s,"argument-error"),Jd._fromError(s,a)}/**
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
 */function XS(i,e){return Ze(i,"POST","/v2/accounts/mfaEnrollment:start",$e(i,e))}function QS(i,e){return Ze(i,"POST","/v2/accounts/mfaEnrollment:finalize",$e(i,e))}function ZS(i,e){return Ze(i,"POST","/v2/accounts/mfaEnrollment:withdraw",$e(i,e))}class Xd{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>ec._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Xd(e)}async getSession(){return Ci._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const s=e,a=await this.getSession(),c=await Tn(this.user,s._process(this.user.auth,a,n));return await this.user._updateTokensIfNecessary(c),this.user.reload()}async unenroll(e){var n;const s=typeof e=="string"?e:e.uid,a=await this.user.getIdToken(),c=await Tn(this.user,ZS(this.user.auth,{idToken:a,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:h})=>h!==s),await this.user._updateTokensIfNecessary(c);try{await this.user.reload()}catch(h){if(((n=h)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw h}}}const Zu=new WeakMap;function eC(i){const e=K(i);return Zu.has(e)||Zu.set(e,Xd._fromUser(e)),Zu.get(e)}const Ll="__sak";/**
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
 */class dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tC(){const i=je();return Kd(i)||ns(i)}const nC=1e3,iC=10;class hy extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tC()&&QE(),this.fallbackToPolling=Y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const h=this.storage.getItem(s);if(e.newValue!==h)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const a=()=>{const h=this.storage.getItem(s);!n&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);XE()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,iC):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hy.type="LOCAL";const nc=hy;/**
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
 */class fy extends dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fy.type="SESSION";const ni=fy;/**
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
 */function rC(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(h).map(async g=>g(n.origin,c)),p=await rC(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function zo(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class sC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,h;return new Promise((f,p)=>{const g=zo("",20);a.port1.start();const b=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(v){const E=v;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(E.data.response);break;default:clearTimeout(b),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Ve(){return window}function oC(i){Ve().location.href=i}/**
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
 */function Qd(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function aC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lC(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function cC(){return Qd()?self:null}/**
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
 */const py="firebaseLocalStorageDb",uC=1,Ml="firebaseLocalStorage",my="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(i,e){return i.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function dC(){const i=indexedDB.deleteDatabase(py);return new Ko(i).toPromise()}function gd(){const i=indexedDB.open(py,uC);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ml,{keyPath:my})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ml)?e(s):(s.close(),await dC(),e(await gd()))})})}async function hv(i,e,n){const s=rc(i,!0).put({[my]:e,value:n});return new Ko(s).toPromise()}async function hC(i,e){const n=rc(i,!1).get(e),s=await new Ko(n).toPromise();return s===void 0?null:s.value}function fv(i,e){const n=rc(i,!0).delete(e);return new Ko(n).toPromise()}const fC=800,pC=3;class gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(cC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aC(),!this.activeServiceWorker)return;this.sender=new sC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await hv(e,Ll,"1"),await fv(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>hv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=rc(a,!1).getAll();return new Ko(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gy.type="LOCAL";const Yr=gy;/**
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
 */function mC(i,e){return Ze(i,"POST","/v2/accounts/mfaSignIn:start",$e(i,e))}function gC(i,e){return Ze(i,"POST","/v2/accounts/mfaSignIn:finalize",$e(i,e))}/**
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
 */async function vC(i){return(await Ze(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function _C(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}function vy(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=rt("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",_C().appendChild(s)})}function _y(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const yC=500,bC=6e4,_l=1e12;class wC{constructor(e){this.auth=e,this.counter=_l,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new IC(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||_l;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||_l;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||_l;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class IC{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;R(a,"argument-error",{appName:n}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=EC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bC)},yC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function EC(i){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const ed=_y("rcb"),SC=new $o(3e4,6e4),CC="https://www.google.com/recaptcha/api.js?";class TC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ve().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return R(kC(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ve().grecaptcha):new Promise((s,a)=>{const c=Ve().setTimeout(()=>{a(rt(e,"network-request-failed"))},SC.get());Ve()[ed]=()=>{Ve().clearTimeout(c),delete Ve()[ed];const f=Ve().grecaptcha;if(!f){a(rt(e,"internal-error"));return}const p=f.render;f.render=(g,b)=>{const v=p(g,b);return this.counter++,v},this.hostLanguage=n,s(f)};const h=`${CC}?${Hi({onload:ed,render:"explicit",hl:n})}`;vy(h).catch(()=>{clearTimeout(c),a(rt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ve().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function kC(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class RC{async load(e){return new wC(e)}clearedOneInstance(){}}/**
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
 */const yy="recaptcha",AC={theme:"light",type:"image"};class NC{constructor(e,n=Object.assign({},AC),s){this.parameters=n,this.type=yy,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qe(s),this.isInvisible=this.parameters.size==="invisible",R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof e=="string"?document.getElementById(e):e;R(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new RC:new TC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(a=>{const c=h=>{!h||(this.tokenChangeListeners.delete(c),a(h))};this.tokenChangeListeners.add(c),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=Ve()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(Gd()&&!Qd(),this.auth,"internal-error"),await PC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vC(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function PC(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class Zd{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ai._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function OC(i,e,n){const s=Qe(i),a=await sc(s,e,K(n));return new Zd(a,c=>Zl(s,c))}async function DC(i,e,n){const s=K(i);await Ql(!1,s,"phone");const a=await sc(s.auth,e,K(n));return new Zd(a,c=>oy(s,c))}async function LC(i,e,n){const s=K(i),a=await sc(s.auth,e,K(n));return new Zd(a,c=>ay(s,c))}async function sc(i,e,n){var s;const a=await n.verify();try{R(typeof a=="string",i,"argument-error"),R(n.type===yy,i,"argument-error");let c;if(typeof e=="string"?c={phoneNumber:e}:c=e,"session"in c){const h=c.session;if("phoneNumber"in c)return R(h.type==="enroll",i,"internal-error"),(await XS(i,{idToken:h.credential,phoneEnrollmentInfo:{phoneNumber:c.phoneNumber,recaptchaToken:a}})).phoneSessionInfo.sessionInfo;{R(h.type==="signin",i,"internal-error");const f=((s=c.multiFactorHint)===null||s===void 0?void 0:s.uid)||c.multiFactorUid;return R(f,i,"missing-multi-factor-info"),(await mC(i,{mfaPendingCredential:h.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:h}=await hS(i,{phoneNumber:c.phoneNumber,recaptchaToken:a});return h}}finally{n._reset()}}async function MC(i,e){await qd(K(i),e)}/**
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
 */class qt{constructor(e){this.providerId=qt.PROVIDER_ID,this.auth=Qe(e)}verifyPhoneNumber(e,n){return sc(this.auth,e,K(n))}static credential(e,n){return Ai._fromVerification(e,n)}static credentialFromResult(e){const n=e;return qt.credentialFromTaggedObject(n)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?Ai._fromTokenResponse(n,s):null}}qt.PROVIDER_ID="phone";qt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function $i(i,e){return e?Nt(e):(R(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class eh extends is{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,n){return En(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xC(i){return sy(i.auth,new eh(i),i.bypassAuthState)}function FC(i){const{auth:e,user:n}=i;return R(n,e,"internal-error"),ry(n,new eh(i),i.bypassAuthState)}async function UC(i){const{auth:e,user:n}=i;return R(n,e,"internal-error"),qd(n,new eh(i),i.bypassAuthState)}/**
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
 */class by{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xC;case"linkViaPopup":case"linkViaRedirect":return UC;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:Xe(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BC=new $o(2e3,1e4);async function jC(i,e,n){const s=Qe(i);ts(i,e,Nn);const a=$i(s,n);return new _n(s,"signInViaPopup",e,a).executeNotNull()}async function WC(i,e,n){const s=K(i);ts(s.auth,e,Nn);const a=$i(s.auth,n);return new _n(s.auth,"reauthViaPopup",e,a,s).executeNotNull()}async function HC(i,e,n){const s=K(i);ts(s.auth,e,Nn);const a=$i(s.auth,n);return new _n(s.auth,"linkViaPopup",e,a,s).executeNotNull()}class _n extends by{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BC.get())};e()}}_n.currentPopupAction=null;/**
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
 */const VC="pendingRedirect",ko=new Map;class $C extends by{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const s=await GC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GC(i,e){const n=Iy(e),s=wy(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}async function th(i,e){return wy(i)._set(Iy(e),"true")}function zC(){ko.clear()}function nh(i,e){ko.set(i._key(),e)}function wy(i){return Nt(i._redirectPersistence)}function Iy(i){return Ri(VC,i.config.apiKey,i.name)}/**
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
 */function KC(i,e,n){return qC(i,e,n)}async function qC(i,e,n){const s=Qe(i);ts(i,e,Nn);const a=$i(s,n);return await th(a,s),a._openRedirect(s,e,"signInViaRedirect")}function YC(i,e,n){return JC(i,e,n)}async function JC(i,e,n){const s=K(i);ts(s.auth,e,Nn);const a=$i(s.auth,n);await th(a,s.auth);const c=await Ey(s);return a._openRedirect(s.auth,e,"reauthViaRedirect",c)}function XC(i,e,n){return QC(i,e,n)}async function QC(i,e,n){const s=K(i);ts(s.auth,e,Nn);const a=$i(s.auth,n);await Ql(!1,s,e.providerId),await th(a,s.auth);const c=await Ey(s);return a._openRedirect(s.auth,e,"linkViaRedirect",c)}async function ZC(i,e){return await Qe(i)._initializationPromise,oc(i,e,!1)}async function oc(i,e,n=!1){const s=Qe(i),a=$i(s,e),h=await new $C(s,a,n).execute();return h&&!n&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}async function Ey(i){const e=zo(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const eT=10*60*1e3;class Sy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Cy(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eT&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Cy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cy(i);default:return!1}}/**
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
 */async function Ty(i,e={}){return Ze(i,"GET","/v1/projects",e)}/**
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
 */const nT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function rT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Ty(i);for(const n of e)try{if(sT(n))return}catch{}Xe(i,"unauthorized-domain")}function sT(i){const e=Fo(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===s}if(!iT.test(n))return!1;if(nT.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const oT=new $o(3e4,6e4);function mv(){const i=Ve().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function aT(i){return new Promise((e,n)=>{var s,a,c;function h(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(rt(i,"network-request-failed"))},timeout:oT.get()})}if(!((a=(s=Ve().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=Ve().gapi)===null||c===void 0)&&c.load)h();else{const f=_y("iframefcb");return Ve()[f]=()=>{gapi.load?h():n(rt(i,"network-request-failed"))},vy(`https://apis.google.com/js/api.js?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function lT(i){return Sl=Sl||aT(i),Sl}/**
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
 */const cT=new $o(5e3,15e3),uT="__/auth/iframe",dT="emulator/auth/iframe",hT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pT(i){const e=i.config;R(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?zd(e,dT):`https://${i.config.authDomain}/${uT}`,s={apiKey:e.apiKey,appName:i.name,v:Vi},a=fT.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Hi(s).slice(1)}`}async function mT(i){const e=await lT(i),n=Ve().gapi;return R(n,i,"internal-error"),e.open({where:document.body,url:pT(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hT,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const h=rt(i,"network-request-failed"),f=Ve().setTimeout(()=>{c(h)},cT.get());function p(){Ve().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{c(h)})}))}/**
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
 */const gT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vT=500,_T=600,yT="_blank",bT="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wT(i,e,n,s=vT,a=_T){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},gT),{width:s.toString(),height:a.toString(),top:c,left:h}),g=je().toLowerCase();n&&(f=G_(g)?yT:n),$_(g)&&(e=e||bT,p.scrollbars="yes");const b=Object.entries(p).reduce((E,[A,M])=>`${E}${A}=${M},`,"");if(JE(g)&&f!=="_self")return IT(e||"",f),new gv(null);const v=window.open(e||"",f,b);R(v,i,"popup-blocked");try{v.focus()}catch{}return new gv(v)}function IT(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ET="__/auth/handler",ST="emulator/auth/handler";function vd(i,e,n,s,a,c){R(i.config.authDomain,i,"auth-domain-config-required"),R(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Vi,eventId:a};if(e instanceof Nn){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",hd(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries(c||{}))h[p]=g}if(e instanceof rs){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(h.scopes=p.join(","))}i.tenantId&&(h.tid=i.tenantId);const f=h;for(const p of Object.keys(f))f[p]===void 0&&delete f[p];return`${CT(i)}?${Hi(f).slice(1)}`}function CT({config:i}){return i.emulator?zd(i,ST):`https://${i.authDomain}/${ET}`}/**
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
 */const td="webStorageSupport";class TT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ni,this._completeRedirectFn=oc,this._overrideRedirectResult=nh}async _openPopup(e,n,s,a){var c;Xt((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=vd(e,n,s,Fo(),a);return wT(e,h,zo())}async _openRedirect(e,n,s,a){return await this._originValidation(e),oC(vd(e,n,s,Fo(),a)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Xt(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mT(e),s=new Sy(e);return n.register("authEvent",a=>(R(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(td,{type:td},a=>{var c;const h=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[td];h!==void 0&&n(!!h),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Y_()||Kd()||ns()}}const ky=TT;class kT{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return ln("unexpected MultiFactorSessionType")}}}class ih extends kT{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ih(e)}_finalizeEnroll(e,n,s){return QS(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return gC(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ry{constructor(){}static assertion(e){return ih._fromCredential(e)}}Ry.FACTOR_ID="phone";var vv="@firebase/auth",_v="0.20.10";/**
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
 */class RT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var a;e(((a=s)===null||a===void 0?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NT(i){ti(new Cn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),{apiKey:c,authDomain:h}=s.options;return((f,p)=>{R(c&&!c.includes(":"),"invalid-api-key",{appName:f.name}),R(!(h!=null&&h.includes(":")),"argument-error",{appName:f.name});const g={apiKey:c,authDomain:h,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(i)},b=new eS(f,p,g);return OE(b,n),b})(s,a)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ti(new Cn("auth-internal",e=>{const n=Qe(e.getProvider("auth").getImmediate());return(s=>new RT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(vv,_v,AT(i)),Kt(vv,_v,"esm2017")}/**
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
 */const PT=5*60,OT=E_("authIdTokenMaxAge")||PT;let yv=null;const DT=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>OT)return;const a=n==null?void 0:n.token;yv!==a&&(yv=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function LT(i=Hd()){const e=Vo(i,"auth");if(e.isInitialized())return e.getImmediate();const n=PE(i,{popupRedirectResolver:ky,persistence:[Yr,nc,ni]}),s=E_("authTokenSyncURL");if(s){const c=DT(s);YS(n,c,()=>c(n.currentUser)),qS(n,h=>c(h))}const a=I_("auth");return a&&X_(n,`http://${a}`),n}NT("Browser");/**
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
 */function Oi(){return window}/**
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
 */const MT=2e3;async function xT(i,e,n){var s;const{BuildInfo:a}=Oi();Xt(e.sessionId,"AuthEvent did not contain a session ID");const c=await WT(e.sessionId),h={};return ns()?h.ibi=a.packageName:Go()?h.apn=a.packageName:Xe(i,"operation-not-supported-in-this-environment"),a.displayName&&(h.appDisplayName=a.displayName),h.sessionId=c,vd(i,n,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,h)}async function FT(i){const{BuildInfo:e}=Oi(),n={};ns()?n.iosBundleId=e.packageName:Go()?n.androidPackageName=e.packageName:Xe(i,"operation-not-supported-in-this-environment"),await Ty(i,n)}function UT(i){const{cordova:e}=Oi();return new Promise(n=>{e.plugins.browsertab.isAvailable(s=>{let a=null;s?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,YE()?"_blank":"_system","location=yes"),n(a)})})}async function BT(i,e,n){const{cordova:s}=Oi();let a=()=>{};try{await new Promise((c,h)=>{let f=null;function p(){var v;c();const E=(v=s.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof E=="function"&&E(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function g(){f||(f=window.setTimeout(()=>{h(rt(i,"redirect-cancelled-by-user"))},MT))}function b(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Go()&&document.addEventListener("visibilitychange",b,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",b,!1),f&&window.clearTimeout(f)}})}finally{a()}}function jT(i){var e,n,s,a,c,h,f,p,g,b;const v=Oi();R(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),R(typeof((n=v==null?void 0:v.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),R(typeof((c=(a=(s=v==null?void 0:v.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((p=(f=(h=v==null?void 0:v.cordova)===null||h===void 0?void 0:h.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((b=(g=v==null?void 0:v.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||b===void 0?void 0:b.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function WT(i){const e=HT(i),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(a=>a.toString(16).padStart(2,"0")).join("")}function HT(i){if(Xt(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),n=new Uint8Array(e);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);return n}/**
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
 */const VT=20;class $T extends Sy{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function GT(i,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qT(),postBody:null,tenantId:i.tenantId,error:rt(i,"no-auth-event")}}function zT(i,e){return _d()._set(yd(i),e)}async function bv(i){const e=await _d()._get(yd(i));return e&&await _d()._remove(yd(i)),e}function KT(i,e){var n,s;const a=JT(e);if(a.includes("/__/auth/callback")){const c=Cl(a),h=c.firebaseError?YT(decodeURIComponent(c.firebaseError)):null,f=(s=(n=h==null?void 0:h.code)===null||n===void 0?void 0:n.split("auth/"))===null||s===void 0?void 0:s[1],p=f?rt(f):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function qT(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<VT;n++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function _d(){return Nt(nc)}function yd(i){return Ri("authEvent",i.config.apiKey,i.name)}function YT(i){try{return JSON.parse(i)}catch{return null}}function JT(i){const e=Cl(i),n=e.link?decodeURIComponent(e.link):void 0,s=Cl(n).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Cl(a).link||a||s||n||i}function Cl(i){if(!(i!=null&&i.includes("?")))return{};const[e,...n]=i.split("?");return Fr(n.join("?"))}/**
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
 */const XT=500;class QT{constructor(){this._redirectPersistence=ni,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=oc,this._overrideRedirectResult=nh}async _initialize(e){const n=e._key();let s=this.eventManagers.get(n);return s||(s=new $T(e),this.eventManagers.set(n,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){Xe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,s,a){jT(e);const c=await this._initialize(e);await c.initialized(),c.resetRedirect(),zC(),await this._originValidation(e);const h=GT(e,s,a);await zT(e,h);const f=await xT(e,h,n),p=await UT(f);return BT(e,c,p)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FT(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:s,handleOpenURL:a,BuildInfo:c}=Oi(),h=setTimeout(async()=>{await bv(e),n.onEvent(wv())},XT),f=async b=>{clearTimeout(h);const v=await bv(e);let E=null;v&&(b==null?void 0:b.url)&&(E=KT(v,b.url)),n.onEvent(E||wv())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,f);const p=a,g=`${c.packageName.toLowerCase()}://`;Oi().handleOpenURL=async b=>{if(b.toLowerCase().startsWith(g)&&f({url:b}),typeof p=="function")try{p(b)}catch(v){console.error(v)}}}}const ZT=QT;function wv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:rt("no-auth-event")}}/**
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
 */function ek(i,e){Qe(i)._logFramework(e)}var tk="@firebase/auth-compat",nk="0.2.23";/**
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
 */const ik=1e3;function Ro(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function rk(){return Ro()==="http:"||Ro()==="https:"}function Ay(i=je()){return!!((Ro()==="file:"||Ro()==="ionic:"||Ro()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function sk(){return Gl()||__()}function ok(){return b_()&&(document==null?void 0:document.documentMode)===11}function ak(i=je()){return/Edge\/\d+/.test(i)}function lk(i=je()){return ok()||ak(i)}function Ny(){try{const i=self.localStorage,e=zo();if(i)return i.setItem(e,"1"),i.removeItem(e),lk()?Rl():!0}catch{return rh()&&Rl()}return!1}function rh(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function nd(){return(rk()||y_()||Ay())&&!sk()&&Ny()&&!rh()}function Py(){return Ay()&&typeof document<"u"}async function ck(){return Py()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},ik);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function uk(){return typeof window<"u"?window:null}/**
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
 */const At={LOCAL:"local",NONE:"none",SESSION:"session"},mo=R,Oy="persistence";function dk(i,e){if(mo(Object.values(At).includes(e),i,"invalid-persistence-type"),Gl()){mo(e!==At.SESSION,i,"unsupported-persistence-type");return}if(__()){mo(e===At.NONE,i,"unsupported-persistence-type");return}if(rh()){mo(e===At.NONE||e===At.LOCAL&&Rl(),i,"unsupported-persistence-type");return}mo(e===At.NONE||Ny(),i,"unsupported-persistence-type")}async function bd(i){await i._initializationPromise;const e=Dy(),n=Ri(Oy,i.config.apiKey,i.name);e&&e.setItem(n,i._getPersistence())}function hk(i,e){const n=Dy();if(!n)return[];const s=Ri(Oy,i,e);switch(n.getItem(s)){case At.NONE:return[Kr];case At.LOCAL:return[Yr,ni];case At.SESSION:return[ni];default:return[]}}function Dy(){var i;try{return((i=uk())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const fk=R;class Jn{constructor(){this.browserResolver=Nt(ky),this.cordovaResolver=Nt(ZT),this.underlyingResolver=null,this._redirectPersistence=ni,this._completeRedirectFn=oc,this._overrideRedirectResult=nh}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,s,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,s,a)}async _openRedirect(e,n,s,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,s,a)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Py()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return fk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ck();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Ly(i){return i.unwrap()}function pk(i){return i.wrapped()}/**
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
 */function mk(i){return My(i)}function gk(i,e){var n,s;const a=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const c=e;c.resolver=new vk(i,JS(i,e))}else if(a){const c=My(e),h=e;c&&(h.credential=c,h.tenantId=a.tenantId||void 0,h.email=a.email||void 0,h.phoneNumber=a.phoneNumber||void 0)}}function My(i){const{_tokenResponse:e}=i instanceof bt?i.customData:i;if(!e)return null;if(!(i instanceof bt)&&"temporaryProof"in e&&"phoneNumber"in e)return qt.credentialFromResult(i);const n=e.providerId;if(!n||n===po.PASSWORD)return null;let s;switch(n){case po.GOOGLE:s=sn;break;case po.FACEBOOK:s=rn;break;case po.GITHUB:s=on;break;case po.TWITTER:s=an;break;default:const{oauthIdToken:a,oauthAccessToken:c,oauthTokenSecret:h,pendingToken:f,nonce:p}=e;return!c&&!h&&!a&&!f?null:f?n.startsWith("saml.")?qr._create(n,f):dn._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:a,accessToken:c}):new Wr(n).credential({idToken:a,accessToken:c,rawNonce:p})}return i instanceof bt?s.credentialFromError(i):s.credentialFromResult(i)}function vt(i,e){return e.catch(n=>{throw n instanceof bt&&gk(i,n),n}).then(n=>{const s=n.operationType,a=n.user;return{operationType:s,credential:mk(n),additionalUserInfo:KS(n),user:yn.getOrCreate(a)}})}async function wd(i,e){const n=await e;return{verificationId:n.verificationId,confirm:s=>vt(i,n.confirm(s))}}class vk{constructor(e,n){this.resolver=n,this.auth=pk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return vt(Ly(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class yn{constructor(e){this._delegate=e,this.multiFactor=eC(e)}static getOrCreate(e){return yn.USER_MAP.has(e)||yn.USER_MAP.set(e,new yn(e)),yn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return vt(this.auth,oy(this._delegate,e))}async linkWithPhoneNumber(e,n){return wd(this.auth,DC(this._delegate,e,n))}async linkWithPopup(e){return vt(this.auth,HC(this._delegate,e,Jn))}async linkWithRedirect(e){return await bd(Qe(this.auth)),XC(this._delegate,e,Jn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return vt(this.auth,ay(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return wd(this.auth,LC(this._delegate,e,n))}reauthenticateWithPopup(e){return vt(this.auth,WC(this._delegate,e,Jn))}async reauthenticateWithRedirect(e){return await bd(Qe(this.auth)),YC(this._delegate,e,Jn)}sendEmailVerification(e){return xS(this._delegate,e)}async unlink(e){return await IS(this._delegate,e),this}updateEmail(e){return jS(this._delegate,e)}updatePassword(e){return WS(this._delegate,e)}updatePhoneNumber(e){return MC(this._delegate,e)}updateProfile(e){return BS(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return FS(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}yn.USER_MAP=new WeakMap;/**
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
 */const go=R;class Id{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;go(s,"invalid-api-key",{appName:e.name}),go(s,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Jn:void 0;this._delegate=n.initialize({options:{persistence:_k(s,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(AE),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?yn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){X_(this._delegate,e,n)}applyActionCode(e){return kS(this._delegate,e)}checkActionCode(e){return ly(this._delegate,e)}confirmPasswordReset(e,n){return TS(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return vt(this._delegate,AS(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return MS(this._delegate,e)}isSignInWithEmailLink(e){return OS(this._delegate,e)}async getRedirectResult(){go(nd(),this._delegate,"operation-not-supported-in-this-environment");const e=await ZC(this._delegate,Jn);return e?vt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ek(this._delegate,e)}onAuthStateChanged(e,n,s){const{next:a,error:c,complete:h}=Iv(e,n,s);return this._delegate.onAuthStateChanged(a,c,h)}onIdTokenChanged(e,n,s){const{next:a,error:c,complete:h}=Iv(e,n,s);return this._delegate.onIdTokenChanged(a,c,h)}sendSignInLinkToEmail(e,n){return PS(this._delegate,e,n)}sendPasswordResetEmail(e,n){return CS(this._delegate,e,n||void 0)}async setPersistence(e){dk(this._delegate,e);let n;switch(e){case At.SESSION:n=ni;break;case At.LOCAL:n=await Nt(Yr)._isAvailable()?Yr:nc;break;case At.NONE:n=Kr;break;default:return Xe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return vt(this._delegate,wS(this._delegate))}signInWithCredential(e){return vt(this._delegate,Zl(this._delegate,e))}signInWithCustomToken(e){return vt(this._delegate,SS(this._delegate,e))}signInWithEmailAndPassword(e,n){return vt(this._delegate,NS(this._delegate,e,n))}signInWithEmailLink(e,n){return vt(this._delegate,DS(this._delegate,e,n))}signInWithPhoneNumber(e,n){return wd(this._delegate,OC(this._delegate,e,n))}async signInWithPopup(e){return go(nd(),this._delegate,"operation-not-supported-in-this-environment"),vt(this._delegate,jC(this._delegate,e,Jn))}async signInWithRedirect(e){return go(nd(),this._delegate,"operation-not-supported-in-this-environment"),await bd(this._delegate),KC(this._delegate,e,Jn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return RS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Id.Persistence=At;function Iv(i,e,n){let s=i;typeof i!="function"&&({next:s,error:e,complete:n}=i);const a=s;return{next:h=>a(h&&yn.getOrCreate(h)),error:e,complete:n}}function _k(i,e){const n=hk(i,e);if(typeof self<"u"&&!n.includes(Yr)&&n.push(Yr),typeof window<"u")for(const s of[nc,ni])n.includes(s)||n.push(s);return n.includes(Kr)||n.push(Kr),n}/**
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
 */class sh{constructor(){this.providerId="phone",this._delegate=new qt(Ly(x.auth()))}static credential(e,n){return qt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sh.PHONE_SIGN_IN_METHOD=qt.PHONE_SIGN_IN_METHOD;sh.PROVIDER_ID=qt.PROVIDER_ID;/**
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
 */const yk=R;class bk{constructor(e,n,s=x.app()){var a;yk((a=s.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new NC(e,n,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const wk="auth-compat";function Ik(i){i.INTERNAL.registerComponent(new Cn(wk,e=>{const n=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Id(n,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Mr.EMAIL_SIGNIN,PASSWORD_RESET:Mr.PASSWORD_RESET,RECOVER_EMAIL:Mr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Mr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Mr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Mr.VERIFY_EMAIL}},EmailAuthProvider:An,FacebookAuthProvider:rn,GithubAuthProvider:on,GoogleAuthProvider:sn,OAuthProvider:Wr,SAMLAuthProvider:Ol,PhoneAuthProvider:sh,PhoneMultiFactorGenerator:Ry,RecaptchaVerifier:bk,TwitterAuthProvider:an,Auth:Id,AuthCredential:is,Error:bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(tk,nk)}Ik(x);var xy={exports:{}};(function(i){(function(){var e=window.CustomEvent;(!e||typeof e=="object")&&(e=function(I,S){S=S||{};var N=document.createEvent("CustomEvent");return N.initCustomEvent(I,!!S.bubbles,!!S.cancelable,S.detail||null),N},e.prototype=window.Event.prototype);function n(y){for(;y&&y!==document.body;){var I=window.getComputedStyle(y),S=function(N,F){return!(I[N]===void 0||I[N]===F)};if(I.opacity<1||S("zIndex","auto")||S("transform","none")||S("mixBlendMode","normal")||S("filter","none")||S("perspective","none")||I.isolation==="isolate"||I.position==="fixed"||I.webkitOverflowScrolling==="touch")return!0;y=y.parentElement}return!1}function s(y){for(;y;){if(y.localName==="dialog")return y;y=y.parentElement}return null}function a(y){y&&y.blur&&y!==document.body&&y.blur()}function c(y,I){for(var S=0;S<y.length;++S)if(y[S]===I)return!0;return!1}function h(y){return!y||!y.hasAttribute("method")?!1:y.getAttribute("method").toLowerCase()==="dialog"}function f(y){if(this.dialog_=y,this.replacedStyleTop_=!1,this.openAsModal_=!1,y.hasAttribute("role")||y.setAttribute("role","dialog"),y.show=this.show.bind(this),y.showModal=this.showModal.bind(this),y.close=this.close.bind(this),"returnValue"in y||(y.returnValue=""),"MutationObserver"in window){var I=new MutationObserver(this.maybeHideModal.bind(this));I.observe(y,{attributes:!0,attributeFilter:["open"]})}else{var S=!1,N=function(){S?this.downgradeModal():this.maybeHideModal(),S=!1}.bind(this),F,U=function(V){if(V.target===y){var H="DOMNodeRemoved";S|=V.type.substr(0,H.length)===H,window.clearTimeout(F),F=window.setTimeout(N,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(V){y.addEventListener(V,U)})}Object.defineProperty(y,"open",{set:this.setOpen.bind(this),get:y.hasAttribute.bind(y,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}f.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),p.dm.removeDialog(this))},setOpen:function(y){y?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(y){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var I=document.createElement("div");this.dialog_.insertBefore(I,this.dialog_.firstChild),I.tabIndex=-1,I.focus(),this.dialog_.removeChild(I)}var S=document.createEvent("MouseEvents");S.initMouseEvent(y.type,y.bubbles,y.cancelable,window,y.detail,y.screenX,y.screenY,y.clientX,y.clientY,y.ctrlKey,y.altKey,y.shiftKey,y.metaKey,y.button,y.relatedTarget),this.dialog_.dispatchEvent(S),y.stopPropagation()},focus_:function(){var y=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!y&&this.dialog_.tabIndex>=0&&(y=this.dialog_),!y){var I=["button","input","keygen","select","textarea"],S=I.map(function(N){return N+":not([disabled])"});S.push('[tabindex]:not([disabled]):not([tabindex=""])'),y=this.dialog_.querySelector(S.join(", "))}a(document.activeElement),y&&y.focus()},updateZIndex:function(y,I){if(y<I)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=y,this.backdrop_.style.zIndex=I},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!p.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");n(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,p.needsCentering(this.dialog_)?(p.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(y){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),y!==void 0&&(this.dialog_.returnValue=y);var I=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(I)}};var p={};if(p.reposition=function(y){var I=document.body.scrollTop||document.documentElement.scrollTop,S=I+(window.innerHeight-y.offsetHeight)/2;y.style.top=Math.max(I,S)+"px"},p.isInlinePositionSetByStylesheet=function(y){for(var I=0;I<document.styleSheets.length;++I){var S=document.styleSheets[I],N=null;try{N=S.cssRules}catch{}if(!!N)for(var F=0;F<N.length;++F){var U=N[F],V=null;try{V=document.querySelectorAll(U.selectorText)}catch{}if(!(!V||!c(V,y))){var H=U.style.getPropertyValue("top"),re=U.style.getPropertyValue("bottom");if(H&&H!=="auto"||re&&re!=="auto")return!0}}}return!1},p.needsCentering=function(y){var I=window.getComputedStyle(y);return I.position!=="absolute"||y.style.top!=="auto"&&y.style.top!==""||y.style.bottom!=="auto"&&y.style.bottom!==""?!1:!p.isInlinePositionSetByStylesheet(y)},p.forceRegisterDialog=function(y){if((window.HTMLDialogElement||y.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",y),y.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new f(y)},p.registerDialog=function(y){y.showModal||p.forceRegisterDialog(y)},p.DialogManager=function(){this.pendingDialogStack=[];var y=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(I){this.forwardTab_=void 0,I.stopPropagation(),y([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(I){var S=[];I.forEach(function(N){for(var F=0,U;U=N.removedNodes[F];++F){if(U instanceof Element)U.localName==="dialog"&&S.push(U);else continue;S=S.concat(U.querySelectorAll("dialog"))}}),S.length&&y(S)}))},p.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},p.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},p.DialogManager.prototype.updateStacking=function(){for(var y=this.zIndexHigh_,I=0,S;S=this.pendingDialogStack[I];++I)S.updateZIndex(--y,--y),I===0&&(this.overlay.style.zIndex=--y);var N=this.pendingDialogStack[0];if(N){var F=N.dialog.parentNode||document.body;F.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},p.DialogManager.prototype.containedByTopDialog_=function(y){for(;y=s(y);){for(var I=0,S;S=this.pendingDialogStack[I];++I)if(S.dialog===y)return I===0;y=y.parentElement}return!1},p.DialogManager.prototype.handleFocus_=function(y){if(!this.containedByTopDialog_(y.target)&&(y.preventDefault(),y.stopPropagation(),a(y.target),this.forwardTab_!==void 0)){var I=this.pendingDialogStack[0],S=I.dialog,N=S.compareDocumentPosition(y.target);return N&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?I.focus_():document.documentElement.focus()),!1}},p.DialogManager.prototype.handleKey_=function(y){if(this.forwardTab_=void 0,y.keyCode===27){y.preventDefault(),y.stopPropagation();var I=new e("cancel",{bubbles:!1,cancelable:!0}),S=this.pendingDialogStack[0];S&&S.dialog.dispatchEvent(I)&&S.dialog.close()}else y.keyCode===9&&(this.forwardTab_=!y.shiftKey)},p.DialogManager.prototype.checkDOM_=function(y){var I=this.pendingDialogStack.slice();I.forEach(function(S){y.indexOf(S.dialog)!==-1?S.downgradeModal():S.maybeHideModal()})},p.DialogManager.prototype.pushDialog=function(y){var I=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=I?!1:(this.pendingDialogStack.unshift(y)===1&&this.blockDocument(),this.updateStacking(),!0)},p.DialogManager.prototype.removeDialog=function(y){var I=this.pendingDialogStack.indexOf(y);I!==-1&&(this.pendingDialogStack.splice(I,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},p.dm=new p.DialogManager,p.formSubmitter=null,p.useValue=null,window.HTMLDialogElement===void 0){var g=document.createElement("form");if(g.setAttribute("method","dialog"),g.method!=="dialog"){var b=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(b){var v=b.get;b.get=function(){return h(this)?"dialog":v.call(this)};var E=b.set;b.set=function(y){return typeof y=="string"&&y.toLowerCase()==="dialog"?this.setAttribute("method",y):E.call(this,y)},Object.defineProperty(HTMLFormElement.prototype,"method",b)}}document.addEventListener("click",function(y){if(p.formSubmitter=null,p.useValue=null,!y.defaultPrevented){var I=y.target;if(!(!I||!h(I.form))){var S=I.type==="submit"&&["button","input"].indexOf(I.localName)>-1;if(!S){if(!(I.localName==="input"&&I.type==="image"))return;p.useValue=y.offsetX+","+y.offsetY}var N=s(I);!N||(p.formSubmitter=I)}}},!1);var A=HTMLFormElement.prototype.submit,M=function(){if(!h(this))return A.call(this);var y=s(this);y&&y.close()};HTMLFormElement.prototype.submit=M,document.addEventListener("submit",function(y){var I=y.target;if(!!h(I)){y.preventDefault();var S=s(I);if(!!S){var N=p.formSubmitter;N&&N.form===I?S.close(p.useValue||N.value):S.close(),p.formSubmitter=null}}},!0)}p.forceRegisterDialog=p.forceRegisterDialog,p.registerDialog=p.registerDialog,typeof i.exports=="object"?i.exports=p:window.dialogPolyfill=p})()})(xy);const Ek=xy.exports;/**
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
 */var Se={upgradeDom:function(i,e){},upgradeElement:function(i,e){},upgradeElements:function(i){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(i,e){},register:function(i){},downgradeElements:function(i){}};Se=function(){var i=[],e=[],n="mdlComponentConfigInternal_";function s(y,I){for(var S=0;S<i.length;S++)if(i[S].className===y)return typeof I<"u"&&(i[S]=I),i[S];return!1}function a(y){var I=y.getAttribute("data-upgraded");return I===null?[""]:I.split(",")}function c(y,I){var S=a(y);return S.indexOf(I)!==-1}function h(y,I,S){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(y,{bubbles:I,cancelable:S});var N=document.createEvent("Events");return N.initEvent(y,I,S),N}function f(y,I){if(typeof y>"u"&&typeof I>"u")for(var S=0;S<i.length;S++)f(i[S].className,i[S].cssClass);else{var N=y;if(typeof I>"u"){var F=s(N);F&&(I=F.cssClass)}for(var U=document.querySelectorAll("."+I),V=0;V<U.length;V++)p(U[V],N)}}function p(y,I){if(!(typeof y=="object"&&y instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var S=h("mdl-componentupgrading",!0,!0);if(y.dispatchEvent(S),!S.defaultPrevented){var N=a(y),F=[];if(I)c(y,I)||F.push(s(I));else{var U=y.classList;i.forEach(function(De){U.contains(De.cssClass)&&F.indexOf(De)===-1&&!c(y,De.className)&&F.push(De)})}for(var V=0,H=F.length,re;V<H;V++){if(re=F[V],re){N.push(re.className),y.setAttribute("data-upgraded",N.join(","));var et=new re.classConstructor(y);et[n]=re,e.push(et);for(var Ot=0,wt=re.callbacks.length;Ot<wt;Ot++)re.callbacks[Ot](y);re.widget&&(y[re.className]=et)}else throw new Error("Unable to find a registered component for the given class.");var Z=h("mdl-componentupgraded",!0,!1);y.dispatchEvent(Z)}}}function g(y){Array.isArray(y)||(y instanceof Element?y=[y]:y=Array.prototype.slice.call(y));for(var I=0,S=y.length,N;I<S;I++)N=y[I],N instanceof HTMLElement&&(p(N),N.children.length>0&&g(N.children))}function b(y){var I=typeof y.widget>"u"&&typeof y.widget>"u",S=!0;I||(S=y.widget||y.widget);var N={classConstructor:y.constructor||y.constructor,className:y.classAsString||y.classAsString,cssClass:y.cssClass||y.cssClass,widget:S,callbacks:[]};if(i.forEach(function(U){if(U.cssClass===N.cssClass)throw new Error("The provided cssClass has already been registered: "+U.cssClass);if(U.className===N.className)throw new Error("The provided className has already been registered")}),y.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");var F=s(y.classAsString,N);F||i.push(N)}function v(y,I){var S=s(y);S&&S.callbacks.push(I)}function E(){for(var y=0;y<i.length;y++)f(i[y].className)}function A(y){if(y){var I=e.indexOf(y);e.splice(I,1);var S=y.element_.getAttribute("data-upgraded").split(","),N=S.indexOf(y[n].classAsString);S.splice(N,1),y.element_.setAttribute("data-upgraded",S.join(","));var F=h("mdl-componentdowngraded",!0,!1);y.element_.dispatchEvent(F)}}function M(y){var I=function(N){e.filter(function(F){return F.element_===N}).forEach(A)};if(y instanceof Array||y instanceof NodeList)for(var S=0;S<y.length;S++)I(y[S]);else if(y instanceof Node)I(y);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:f,upgradeElement:p,upgradeElements:g,upgradeAllRegistered:E,registerUpgradedCallback:v,register:b,downgradeElements:M}}();Se.ComponentConfigPublic;Se.ComponentConfig;Se.Component;Se.upgradeDom=Se.upgradeDom;Se.upgradeElement=Se.upgradeElement;Se.upgradeElements=Se.upgradeElements;Se.upgradeAllRegistered=Se.upgradeAllRegistered;Se.registerUpgradedCallback=Se.registerUpgradedCallback;Se.register=Se.register;Se.downgradeElements=Se.downgradeElements;window.componentHandler=Se;window.componentHandler=Se;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Se.upgradeAllRegistered()):(Se.upgradeElement=function(){},Se.register=function(){})});/**
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
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialSpinner=i,i.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},i.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},i.prototype.createLayer=function(e){var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var c=document.createElement("div");c.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),c.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var h=[s,a,c],f=0;f<h.length;f++){var p=document.createElement("div");p.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),h[f].appendChild(p)}n.appendChild(s),n.appendChild(a),n.appendChild(c),this.element_.appendChild(n)},i.prototype.createLayer=i.prototype.createLayer,i.prototype.stop=function(){this.element_.classList.remove("is-active")},i.prototype.stop=i.prototype.stop,i.prototype.start=function(){this.element_.classList.add("is-active")},i.prototype.start=i.prototype.start,i.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();/**
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
`).length;e.keyCode===13&&n>=this.maxRows&&e.preventDefault()},i.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},i.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.onReset_=function(e){this.updateClasses_()},i.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},i.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},i.prototype.checkDisabled=i.prototype.checkDisabled,i.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.checkFocus=i.prototype.checkFocus,i.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},i.prototype.checkValidity=i.prototype.checkValidity,i.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},i.prototype.checkDirty=i.prototype.checkDirty,i.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},i.prototype.enable=i.prototype.enable,i.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},i.prototype.change=i.prototype.change,i.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:i,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var i,e=typeof Object.create=="function"?Object.create:function(t){function r(){}return r.prototype=t,new r},n;if(typeof Object.setPrototypeOf=="function")n=Object.setPrototypeOf;else{var s;e:{var a={xb:!0},c={};try{c.__proto__=a,s=c.xb;break e}catch{}s=!1}n=s?function(t,r){if(t.__proto__=r,t.__proto__!==r)throw new TypeError(t+" is not extensible");return t}:null}var h=n;function f(t,r){if(t.prototype=e(r.prototype),t.prototype.constructor=t,h)h(t,r);else for(var o in r)if(o!="prototype")if(Object.defineProperties){var l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l)}else t[o]=r[o];t.K=r.prototype}var p=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){t!=Array.prototype&&t!=Object.prototype&&(t[r]=o.value)},g=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function b(t,r){if(r){var o=g;t=t.split(".");for(var l=0;l<t.length-1;l++){var u=t[l];u in o||(o[u]={}),o=o[u]}t=t[t.length-1],l=o[t],r=r(l),r!=l&&r!=null&&p(o,t,{configurable:!0,writable:!0,value:r})}}b("Object.is",function(t){return t||function(r,o){return r===o?r!==0||1/r===1/o:r!==r&&o!==o}}),b("Array.prototype.includes",function(t){return t||function(r,o){var l=this;l instanceof String&&(l=String(l));var u=l.length;for(o=o||0,0>o&&(o=Math.max(o+u,0));o<u;o++){var d=l[o];if(d===r||Object.is(d,r))return!0}return!1}});var v=this;function E(t){return t!==void 0}function A(t){return typeof t=="string"}var M=/^[\w+/_-]+[=]{0,2}$/,y=null;function I(){}function S(t){t.W=void 0,t.Xa=function(){return t.W?t.W:t.W=new t}}function N(t){var r=typeof t;if(r=="object")if(t){if(t instanceof Array)return"array";if(t instanceof Object)return r;var o=Object.prototype.toString.call(t);if(o=="[object Window]")return"object";if(o=="[object Array]"||typeof t.length=="number"&&typeof t.splice<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("splice"))return"array";if(o=="[object Function]"||typeof t.call<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("call"))return"function"}else return"null";else if(r=="function"&&typeof t.call>"u")return"object";return r}function F(t){return N(t)=="array"}function U(t){var r=N(t);return r=="array"||r=="object"&&typeof t.length=="number"}function V(t){return N(t)=="function"}function H(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}var re="closure_uid_"+(1e9*Math.random()>>>0),et=0;function Ot(t,r,o){return t.call.apply(t.bind,arguments)}function wt(t,r,o){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var u=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(u,l),t.apply(r,u)}}return function(){return t.apply(r,arguments)}}function Z(t,r,o){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Ot:Z=wt,Z.apply(null,arguments)}function De(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var l=o.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function ce(t,r){for(var o in r)t[o]=r[o]}var Ut=Date.now||function(){return+new Date};function ue(t,r){t=t.split(".");var o=v;t[0]in o||typeof o.execScript>"u"||o.execScript("var "+t[0]);for(var l;t.length&&(l=t.shift());)!t.length&&E(r)?o[l]=r:o[l]&&o[l]!==Object.prototype[l]?o=o[l]:o=o[l]={}}function W(t,r){function o(){}o.prototype=r.prototype,t.K=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.vc=function(l,u,d){for(var m=Array(arguments.length-2),_=2;_<arguments.length;_++)m[_-2]=arguments[_];return r.prototype[u].apply(l,m)}}function me(t){if(Error.captureStackTrace)Error.captureStackTrace(this,me);else{var r=Error().stack;r&&(this.stack=r)}t&&(this.message=String(t))}W(me,Error),me.prototype.name="CustomError";var Ki;function qi(t,r){t=t.split("%s");for(var o="",l=t.length-1,u=0;u<l;u++)o+=t[u]+(u<r.length?r[u]:"%s");me.call(this,o+t[l])}W(qi,me),qi.prototype.name="AssertionError";function fe(t,r){throw new qi("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}var Le=Array.prototype.indexOf?function(t,r){return Array.prototype.indexOf.call(t,r,void 0)}:function(t,r){if(A(t))return A(r)&&r.length==1?t.indexOf(r,0):-1;for(var o=0;o<t.length;o++)if(o in t&&t[o]===r)return o;return-1},be=Array.prototype.forEach?function(t,r,o){Array.prototype.forEach.call(t,r,o)}:function(t,r,o){for(var l=t.length,u=A(t)?t.split(""):t,d=0;d<l;d++)d in u&&r.call(o,u[d],d,t)};function We(t,r){for(var o=A(t)?t.split(""):t,l=t.length-1;0<=l;--l)l in o&&r.call(void 0,o[l],l,t)}var we=Array.prototype.filter?function(t,r){return Array.prototype.filter.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=[],u=0,d=A(t)?t.split(""):t,m=0;m<o;m++)if(m in d){var _=d[m];r.call(void 0,_,m,t)&&(l[u++]=_)}return l},tt=Array.prototype.map?function(t,r){return Array.prototype.map.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=Array(o),u=A(t)?t.split(""):t,d=0;d<o;d++)d in u&&(l[d]=r.call(void 0,u[d],d,t));return l},X0=Array.prototype.some?function(t,r){return Array.prototype.some.call(t,r,void 0)}:function(t,r){for(var o=t.length,l=A(t)?t.split(""):t,u=0;u<o;u++)if(u in l&&r.call(void 0,l[u],u,t))return!0;return!1};function Dt(t,r){return 0<=Le(t,r)}function Rh(t,r){r=Le(t,r);var o;return(o=0<=r)&&Zo(t,r),o}function Zo(t,r){return Array.prototype.splice.call(t,r,1).length==1}function Q0(t,r){e:{for(var o=t.length,l=A(t)?t.split(""):t,u=0;u<o;u++)if(u in l&&r.call(void 0,l[u],u,t)){r=u;break e}r=-1}0<=r&&Zo(t,r)}function Z0(t,r){var o=0;We(t,function(l,u){r.call(void 0,l,u,t)&&Zo(t,u)&&o++})}function Ah(t){return Array.prototype.concat.apply([],arguments)}function Nh(t){var r=t.length;if(0<r){for(var o=Array(r),l=0;l<r;l++)o[l]=t[l];return o}return[]}function eb(t,r,o){return 2>=arguments.length?Array.prototype.slice.call(t,r):Array.prototype.slice.call(t,r,o)}var It=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},tb=/&/g,nb=/</g,ib=/>/g,rb=/"/g,sb=/'/g,ob=/\x00/g,ab=/[\x00&<>"']/;function hc(t,r){return t<r?-1:t>r?1:0}function Yi(t){return ab.test(t)&&(t.indexOf("&")!=-1&&(t=t.replace(tb,"&amp;")),t.indexOf("<")!=-1&&(t=t.replace(nb,"&lt;")),t.indexOf(">")!=-1&&(t=t.replace(ib,"&gt;")),t.indexOf('"')!=-1&&(t=t.replace(rb,"&quot;")),t.indexOf("'")!=-1&&(t=t.replace(sb,"&#39;")),t.indexOf("\0")!=-1&&(t=t.replace(ob,"&#0;"))),t}function Ph(t,r,o){for(var l in t)r.call(o,t[l],l,t)}function fc(t){var r={},o;for(o in t)r[o]=t[o];return r}var Oh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ea(t,r){for(var o,l,u=1;u<arguments.length;u++){l=arguments[u];for(o in l)t[o]=l[o];for(var d=0;d<Oh.length;d++)o=Oh[d],Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}}var Ji="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function ri(){}ri.prototype.next=function(){throw Ji},ri.prototype.ha=function(){return this};function Dh(t){if(t instanceof ri)return t;if(typeof t.ha=="function")return t.ha(!1);if(U(t)){var r=0,o=new ri;return o.next=function(){for(;;){if(r>=t.length)throw Ji;if(r in t)return t[r++];r++}},o}throw Error("Not implemented")}function lb(t,r){if(U(t))try{be(t,r,void 0)}catch(o){if(o!==Ji)throw o}else{t=Dh(t);try{for(;;)r.call(void 0,t.next(),void 0,t)}catch(o){if(o!==Ji)throw o}}}function cb(t){if(U(t))return Nh(t);t=Dh(t);var r=[];return lb(t,function(o){r.push(o)}),r}function ta(t,r){this.g={},this.a=[],this.j=this.h=0;var o=arguments.length;if(1<o){if(o%2)throw Error("Uneven number of arguments");for(var l=0;l<o;l+=2)this.set(arguments[l],arguments[l+1])}else if(t)if(t instanceof ta)for(o=t.ja(),l=0;l<o.length;l++)this.set(o[l],t.get(o[l]));else for(l in t)this.set(l,t[l])}i=ta.prototype,i.la=function(){na(this);for(var t=[],r=0;r<this.a.length;r++)t.push(this.g[this.a[r]]);return t},i.ja=function(){return na(this),this.a.concat()},i.clear=function(){this.g={},this.j=this.h=this.a.length=0};function na(t){if(t.h!=t.a.length){for(var r=0,o=0;r<t.a.length;){var l=t.a[r];si(t.g,l)&&(t.a[o++]=l),r++}t.a.length=o}if(t.h!=t.a.length){var u={};for(o=r=0;r<t.a.length;)l=t.a[r],si(u,l)||(t.a[o++]=l,u[l]=1),r++;t.a.length=o}}i.get=function(t,r){return si(this.g,t)?this.g[t]:r},i.set=function(t,r){si(this.g,t)||(this.h++,this.a.push(t),this.j++),this.g[t]=r},i.forEach=function(t,r){for(var o=this.ja(),l=0;l<o.length;l++){var u=o[l],d=this.get(u);t.call(r,d,u,this)}},i.ha=function(t){na(this);var r=0,o=this.j,l=this,u=new ri;return u.next=function(){if(o!=l.j)throw Error("The map has changed since the iterator was created");if(r>=l.a.length)throw Ji;var d=l.a[r++];return t?d:l.g[d]},u};function si(t,r){return Object.prototype.hasOwnProperty.call(t,r)}var ub=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function db(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var l=t[o].indexOf("="),u=null;if(0<=l){var d=t[o].substring(0,l);u=t[o].substring(l+1)}else d=t[o];r(d,u?decodeURIComponent(u.replace(/\+/g," ")):"")}}}function Lh(t,r,o,l){for(var u=o.length;0<=(r=t.indexOf(o,r))&&r<l;){var d=t.charCodeAt(r-1);if((d==38||d==63)&&(d=t.charCodeAt(r+u),!d||d==61||d==38||d==35))return r;r+=u+1}return-1}var Mh=/#|$/;function ia(t,r){var o=t.search(Mh),l=Lh(t,0,r,o);if(0>l)return null;var u=t.indexOf("&",l);return(0>u||u>o)&&(u=o),l+=r.length+1,decodeURIComponent(t.substr(l,u-l).replace(/\+/g," "))}var hb=/[?&]($|#)/;function Pn(t,r){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var o;t instanceof Pn?(this.i=E(r)?r:t.i,pc(this,t.j),this.A=t.A,this.h=t.h,mc(this,t.C),this.g=t.g,gc(this,Uh(t.a)),this.s=t.s):t&&(o=String(t).match(ub))?(this.i=!!r,pc(this,o[1]||"",!0),this.A=ls(o[2]||""),this.h=ls(o[3]||"",!0),mc(this,o[4]),this.g=ls(o[5]||"",!0),gc(this,o[6]||"",!0),this.s=ls(o[7]||"")):(this.i=!!r,this.a=new us(null,this.i))}Pn.prototype.toString=function(){var t=[],r=this.j;r&&t.push(cs(r,xh,!0),":");var o=this.h;return(o||r=="file")&&(t.push("//"),(r=this.A)&&t.push(cs(r,xh,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.C,o!=null&&t.push(":",String(o))),(o=this.g)&&(this.h&&o.charAt(0)!="/"&&t.push("/"),t.push(cs(o,o.charAt(0)=="/"?mb:pb,!0))),(o=this.a.toString())&&t.push("?",o),(o=this.s)&&t.push("#",cs(o,vb)),t.join("")};function pc(t,r,o){t.j=o?ls(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function mc(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.C=r}else t.C=null}function gc(t,r,o){r instanceof us?(t.a=r,_b(t.a,t.i)):(o||(r=cs(r,gb)),t.a=new us(r,t.i))}function vc(t){return t instanceof Pn?new Pn(t):new Pn(t,void 0)}function ls(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cs(t,r,o){return A(t)?(t=encodeURI(t).replace(r,fb),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xh=/[#\/\?@]/g,pb=/[#\?:]/g,mb=/[#\?]/g,gb=/[#\?@]/g,vb=/#/g;function us(t,r){this.g=this.a=null,this.h=t||null,this.j=!!r}function On(t){t.a||(t.a=new ta,t.g=0,t.h&&db(t.h,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=us.prototype,i.add=function(t,r){On(this),this.h=null,t=Xi(this,t);var o=this.a.get(t);return o||this.a.set(t,o=[]),o.push(r),this.g+=1,this};function oi(t,r){On(t),r=Xi(t,r),si(t.a.g,r)&&(t.h=null,t.g-=t.a.get(r).length,t=t.a,si(t.g,r)&&(delete t.g[r],t.h--,t.j++,t.a.length>2*t.h&&na(t)))}i.clear=function(){this.a=this.h=null,this.g=0};function Fh(t,r){return On(t),r=Xi(t,r),si(t.a.g,r)}i.forEach=function(t,r){On(this),this.a.forEach(function(o,l){be(o,function(u){t.call(r,u,l,this)},this)},this)},i.ja=function(){On(this);for(var t=this.a.la(),r=this.a.ja(),o=[],l=0;l<r.length;l++)for(var u=t[l],d=0;d<u.length;d++)o.push(r[l]);return o},i.la=function(t){On(this);var r=[];if(A(t))Fh(this,t)&&(r=Ah(r,this.a.get(Xi(this,t))));else{t=this.a.la();for(var o=0;o<t.length;o++)r=Ah(r,t[o])}return r},i.set=function(t,r){return On(this),this.h=null,t=Xi(this,t),Fh(this,t)&&(this.g-=this.a.get(t).length),this.a.set(t,[r]),this.g+=1,this},i.get=function(t,r){return t?(t=this.la(t),0<t.length?String(t[0]):r):r},i.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var t=[],r=this.a.ja(),o=0;o<r.length;o++){var l=r[o],u=encodeURIComponent(String(l));l=this.la(l);for(var d=0;d<l.length;d++){var m=u;l[d]!==""&&(m+="="+encodeURIComponent(String(l[d]))),t.push(m)}}return this.h=t.join("&")};function Uh(t){var r=new us;return r.h=t.h,t.a&&(r.a=new ta(t.a),r.g=t.g),r}function Xi(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function _b(t,r){r&&!t.j&&(On(t),t.h=null,t.a.forEach(function(o,l){var u=l.toLowerCase();l!=u&&(oi(this,l),oi(this,u),0<o.length&&(this.h=null,this.a.set(Xi(this,u),Nh(o)),this.g+=o.length))},t)),t.j=r}function ai(t){this.a=vc(t)}function yb(t,r){r?t.a.a.set(Me.Sa,r):oi(t.a.a,Me.Sa)}function bb(t,r){r!==null?t.a.a.set(Me.Qa,r?"1":"0"):oi(t.a.a,Me.Qa)}function Bh(t){return t.a.a.get(Me.Pa)||null}function jh(t,r){r?t.a.a.set(Me.PROVIDER_ID,r):oi(t.a.a,Me.PROVIDER_ID)}ai.prototype.toString=function(){return this.a.toString()};var Me={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},Qi;e:{var Wh=v.navigator;if(Wh){var Hh=Wh.userAgent;if(Hh){Qi=Hh;break e}}Qi=""}function q(t){return Qi.indexOf(t)!=-1}function Vh(){return(q("Chrome")||q("CriOS"))&&!q("Edge")}function _c(t){return _c[" "](t),t}_c[" "]=I;function wb(t,r){var o=Sb;return Object.prototype.hasOwnProperty.call(o,t)?o[t]:o[t]=r(t)}var $h=q("Opera"),Ce=q("Trident")||q("MSIE"),Dn=q("Edge"),Ib=Dn||Ce,Bt=q("Gecko")&&!(Qi.toLowerCase().indexOf("webkit")!=-1&&!q("Edge"))&&!(q("Trident")||q("MSIE"))&&!q("Edge"),lt=Qi.toLowerCase().indexOf("webkit")!=-1&&!q("Edge"),Eb=lt&&q("Mobile"),Ln=q("Macintosh");function Gh(){var t=v.document;return t?t.documentMode:void 0}var ra;e:{var yc="",bc=function(){var t=Qi;if(Bt)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dn)return/Edge\/([\d\.]+)/.exec(t);if(Ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lt)return/WebKit\/(\S+)/.exec(t);if($h)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bc&&(yc=bc?bc[1]:""),Ce){var wc=Gh();if(wc!=null&&wc>parseFloat(yc)){ra=String(wc);break e}}ra=yc}var Sb={};function li(t){return wb(t,function(){for(var r=0,o=It(String(ra)).split("."),l=It(String(t)).split("."),u=Math.max(o.length,l.length),d=0;r==0&&d<u;d++){var m=o[d]||"",_=l[d]||"";do{if(m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""],_=/(\d*)(\D*)(.*)/.exec(_)||["","","",""],m[0].length==0&&_[0].length==0)break;r=hc(m[1].length==0?0:parseInt(m[1],10),_[1].length==0?0:parseInt(_[1],10))||hc(m[2].length==0,_[2].length==0)||hc(m[2],_[2]),m=m[3],_=_[3]}while(r==0)}return 0<=r})}var ds,zh=v.document;ds=zh&&Ce?Gh()||(zh.compatMode=="CSS1Compat"?parseInt(ra,10):5):void 0;function Zi(t,r){this.a=t===qh&&r||"",this.g=Kh}Zi.prototype.ma=!0,Zi.prototype.ka=function(){return this.a},Zi.prototype.toString=function(){return"Const{"+this.a+"}"};var Kh={},qh={};function ci(){this.a="",this.h=Jh}ci.prototype.ma=!0,ci.prototype.ka=function(){return this.a.toString()},ci.prototype.g=function(){return 1},ci.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function Yh(t){return t instanceof ci&&t.constructor===ci&&t.h===Jh?t.a:(fe("expected object of type TrustedResourceUrl, got '"+t+"' of type "+N(t)),"type_error:TrustedResourceUrl")}function Cb(){var t=gw;t instanceof Zi&&t.constructor===Zi&&t.g===Kh?t=t.a:(fe("expected object of type Const, got '"+t+"'"),t="type_error:Const");var r=new ci;return r.a=t,r}var Jh={};function Et(){this.a="",this.h=Zh}Et.prototype.ma=!0,Et.prototype.ka=function(){return this.a.toString()},Et.prototype.g=function(){return 1},Et.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Mn(t){return t instanceof Et&&t.constructor===Et&&t.h===Zh?t.a:(fe("expected object of type SafeUrl, got '"+t+"' of type "+N(t)),"type_error:SafeUrl")}var Xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function sa(t){return t instanceof Et?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),Xh.test(t)||(t="about:invalid#zClosurez"),Ic(t))}function Qh(t){return t instanceof Et?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),Xh.test(t)||(t="about:invalid#zClosurez"),Ic(t))}var Zh={};function Ic(t){var r=new Et;return r.a=t,r}Ic("about:blank");function er(){this.a="",this.g=ef}er.prototype.ma=!0;var ef={};er.prototype.ka=function(){return this.a},er.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function xn(){this.a="",this.j=tf,this.h=null}xn.prototype.g=function(){return this.h},xn.prototype.ma=!0,xn.prototype.ka=function(){return this.a.toString()},xn.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function oa(t){return t instanceof xn&&t.constructor===xn&&t.j===tf?t.a:(fe("expected object of type SafeHtml, got '"+t+"' of type "+N(t)),"type_error:SafeHtml")}var tf={};function hs(t,r){var o=new xn;return o.a=t,o.h=r,o}hs("<!DOCTYPE html>",0);var Tb=hs("",0);hs("<br>",0);var kb=function(t){var r=!1,o;return function(){return r||(o=t(),r=!0),o}}(function(){if(typeof document>"u")return!1;var t=document.createElement("div"),r=document.createElement("div");return r.appendChild(document.createElement("div")),t.appendChild(r),t.firstChild?(r=t.firstChild.firstChild,t.innerHTML=oa(Tb),!r.parentElement):!1});function Rb(t,r){if(t.src=Yh(r),y===null)e:{if(r=v.document,(r=r.querySelector&&r.querySelector("script[nonce]"))&&(r=r.nonce||r.getAttribute("nonce"))&&M.test(r)){y=r;break e}y=""}r=y,r&&t.setAttribute("nonce",r)}function tr(t,r){r=r instanceof Et?r:Qh(r),t.assign(Mn(r))}function Fn(t,r){this.a=E(t)?t:0,this.g=E(r)?r:0}Fn.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Fn.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Fn.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Fn.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function Ec(t,r){this.width=t,this.height=r}i=Ec.prototype,i.toString=function(){return"("+this.width+" x "+this.height+")"},i.aspectRatio=function(){return this.width/this.height},i.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},i.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},i.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function aa(t){return t?new kc(fs(t)):Ki||(Ki=new kc)}function Sc(t,r){var o=r||document;return o.querySelectorAll&&o.querySelector?o.querySelectorAll("."+t):nf(document,t,r)}function Cc(t,r){var o=r||document;if(o.getElementsByClassName)t=o.getElementsByClassName(t)[0];else{o=document;var l=r||o;t=l.querySelectorAll&&l.querySelector&&t?l.querySelector(t?"."+t:""):nf(o,t,r)[0]||null}return t||null}function nf(t,r,o){var l;if(t=o||t,t.querySelectorAll&&t.querySelector&&r)return t.querySelectorAll(r?"."+r:"");if(r&&t.getElementsByClassName){var u=t.getElementsByClassName(r);return u}if(u=t.getElementsByTagName("*"),r){var d={};for(o=l=0;t=u[o];o++){var m=t.className;typeof m.split=="function"&&Dt(m.split(/\s+/),r)&&(d[l++]=t)}return d.length=l,d}return u}function Ab(t,r){Ph(r,function(o,l){o&&typeof o=="object"&&o.ma&&(o=o.ka()),l=="style"?t.style.cssText=o:l=="class"?t.className=o:l=="for"?t.htmlFor=o:rf.hasOwnProperty(l)?t.setAttribute(rf[l],o):l.lastIndexOf("aria-",0)==0||l.lastIndexOf("data-",0)==0?t.setAttribute(l,o):t[l]=o})}var rf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function la(t){return t.scrollingElement?t.scrollingElement:(lt||t.compatMode!="CSS1Compat")&&t.body||t.documentElement}function ui(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function fs(t){return t.nodeType==9?t:t.ownerDocument||t.document}function Tc(t,r){if("textContent"in t)t.textContent=r;else if(t.nodeType==3)t.data=String(r);else if(t.firstChild&&t.firstChild.nodeType==3){for(;t.lastChild!=t.firstChild;)t.removeChild(t.lastChild);t.firstChild.data=String(r)}else{for(var o;o=t.firstChild;)t.removeChild(o);t.appendChild(fs(t).createTextNode(String(r)))}}function sf(t,r){return r?Nb(t,function(o){return!r||A(o.className)&&Dt(o.className.split(/\s+/),r)}):null}function Nb(t,r){for(var o=0;t;){if(r(t))return t;t=t.parentNode,o++}return null}function kc(t){this.a=t||v.document||document}kc.prototype.N=function(){return A(void 0)?this.a.getElementById(void 0):void 0};var ca={Fc:!0},of={Hc:!0},Pb={Ec:!0},af={Gc:!0};function Un(){throw Error("Do not instantiate directly")}Un.prototype.va=null,Un.prototype.toString=function(){return this.content};function ps(t,r,o,l){if(t=t(r||Lb,void 0,o),l=(l||aa()).a.createElement("DIV"),t=Ob(t),t.match(Db),t=hs(t,null),kb())for(;l.lastChild;)l.removeChild(l.lastChild);return l.innerHTML=oa(t),l.childNodes.length==1&&(t=l.firstChild,t.nodeType==1&&(l=t)),l}function Ob(t){if(!H(t))return Yi(String(t));if(t instanceof Un){if(t.fa===ca)return t.content;if(t.fa===af)return Yi(t.content)}return fe("Soy template output is unsafe for use as HTML: "+t),"zSoyz"}var Db=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,Lb={};function Mb(t){if(t!=null)switch(t.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function ua(){Un.call(this)}W(ua,Un),ua.prototype.fa=ca;function j(t){return t!=null&&t.fa===ca?t:t instanceof xn?O(oa(t).toString(),t.g()):O(Yi(String(String(t))),Mb(t))}function da(){Un.call(this)}W(da,Un),da.prototype.fa=of,da.prototype.va=1;function ha(t,r){this.content=String(t),this.va=r!=null?r:null}W(ha,Un),ha.prototype.fa=af;function ne(t){return new ha(t,void 0)}var O=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o,l){return o=new r(String(o)),l!==void 0&&(o.va=l),o}}(ua),xb=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o){return new r(String(o))}}(da);function Fb(t){function r(){}var o={label:Te("New password")};r.prototype=t,t=new r;for(var l in o)t[l]=o[l];return t}function Te(t){return(t=String(t))?new ha(t,void 0):""}var lf=function(t){function r(o){this.content=o}return r.prototype=t.prototype,function(o,l){return o=String(o),o?(o=new r(o),l!==void 0&&(o.va=l),o):""}}(ua);function ct(t){return t!=null&&t.fa===ca?String(String(t.content).replace($b,"").replace(Gb,"&lt;")).replace(Wb,Bb):Yi(String(t))}function di(t){return t!=null&&t.fa===of?t=String(t).replace(Ac,Rc):t instanceof Et?t=String(Mn(t).toString()).replace(Ac,Rc):(t=String(t),Vb.test(t)?t=t.replace(Ac,Rc):(fe("Bad value `%s` for |filterNormalizeUri",[t]),t="#zSoyz")),t}function cf(t){return t!=null&&t.fa===Pb?t=t.content:t==null?t="":t instanceof er?t instanceof er&&t.constructor===er&&t.g===ef?t=t.a:(fe("expected object of type SafeStyle, got '"+t+"' of type "+N(t)),t="type_error:SafeStyle"):(t=String(t),Hb.test(t)||(fe("Bad value `%s` for |filterCssValue",[t]),t="zSoyz")),t}var Ub={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\x85":"&#133;","\xA0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Bb(t){return Ub[t]}var jb={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\x7F":"%7F","\x85":"%C2%85","\xA0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uFF01":"%EF%BC%81","\uFF03":"%EF%BC%83","\uFF04":"%EF%BC%84","\uFF06":"%EF%BC%86","\uFF07":"%EF%BC%87","\uFF08":"%EF%BC%88","\uFF09":"%EF%BC%89","\uFF0A":"%EF%BC%8A","\uFF0B":"%EF%BC%8B","\uFF0C":"%EF%BC%8C","\uFF0F":"%EF%BC%8F","\uFF1A":"%EF%BC%9A","\uFF1B":"%EF%BC%9B","\uFF1D":"%EF%BC%9D","\uFF1F":"%EF%BC%9F","\uFF20":"%EF%BC%A0","\uFF3B":"%EF%BC%BB","\uFF3D":"%EF%BC%BD"};function Rc(t){return jb[t]}var Wb=/[\x00\x22\x27\x3c\x3e]/g,Ac=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Hb=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Vb=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,$b=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Gb=/</g;function Nc(){return ne("Enter a valid phone number")}function uf(){return ne("Unable to send password reset code to specified email")}function df(){return ne("Something went wrong. Please try again.")}function hf(){return ne("This email already exists without any means of sign-in. Please reset the password to recover.")}function ff(t){t=t||{};var r="";switch(t.code){case"invalid-argument":r+="Client specified an invalid argument.";break;case"invalid-configuration":r+="Client specified an invalid project configuration.";break;case"failed-precondition":r+="Request can not be executed in the current system state.";break;case"out-of-range":r+="Client specified an invalid range.";break;case"unauthenticated":r+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":r+="Client does not have sufficient permission.";break;case"not-found":r+="Specified resource is not found.";break;case"aborted":r+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":r+="The resource that a client tried to create already exists.";break;case"resource-exhausted":r+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":r+="Request cancelled by the client.";break;case"data-loss":r+="Unrecoverable data loss or data corruption.";break;case"unknown":r+="Unknown server error.";break;case"internal":r+="Internal server error.";break;case"not-implemented":r+="API method not implemented by the server.";break;case"unavailable":r+="Service unavailable.";break;case"deadline-exceeded":r+="Request deadline exceeded.";break;case"auth/user-disabled":r+="The user account has been disabled by an administrator.";break;case"auth/timeout":r+="The operation has timed out.";break;case"auth/too-many-requests":r+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":r+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":r+="A network error has occurred. Try again later.";break;case"restart-process":r+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":r+="No sign-in provider is available for the given email, please try with a different email."}return ne(r)}function pf(){return ne("Please login again to perform this operation")}function ms(t,r,o){var l=Error.call(this);if(this.message=l.message,"stack"in l&&(this.stack=l.stack),this.code=zb+t,!(t=r)){switch(t="",this.code){case"firebaseui/merge-conflict":t+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:t+=df()}t=ne(t).toString()}this.message=t||"",this.credential=o||null}f(ms,Error),ms.prototype.toJSON=function(){return{code:this.code,message:this.message}};var zb="firebaseui/";function hi(){this.T=this.T,this.C=this.C}var Kb=0;hi.prototype.T=!1,hi.prototype.m=function(){!this.T&&(this.T=!0,this.o(),Kb!=0)&&(this[re]||(this[re]=++et))};function gs(t,r){t.T?E(void 0)?r.call(void 0):r():(t.C||(t.C=[]),t.C.push(E(void 0)?Z(r,void 0):r))}hi.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function vs(t){t&&typeof t.m=="function"&&t.m()}var qb=Object.freeze||function(t){return t},mf=!Ce||9<=Number(ds),Yb=Ce&&!li("9"),Jb=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",I,r),v.removeEventListener("test",I,r)}catch{}return t}();function hn(t,r){this.type=t,this.g=this.target=r,this.h=!1,this.qb=!0}hn.prototype.stopPropagation=function(){this.h=!0},hn.prototype.preventDefault=function(){this.qb=!1};function ut(t,r){if(hn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var o=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(Bt){e:{try{_c(r.nodeName);var u=!0;break e}catch{}u=!1}u||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.keyCode=t.keyCode||0,this.key=t.key||"",this.j=t.charCode||(o=="keypress"?t.keyCode:0),this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=A(t.pointerType)?t.pointerType:Xb[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}W(ut,hn);var Xb=qb({2:"touch",3:"pen",4:"mouse"});ut.prototype.stopPropagation=function(){ut.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},ut.prototype.preventDefault=function(){ut.K.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,Yb)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch{}};var _s="closure_listenable_"+(1e6*Math.random()|0),Qb=0;function Zb(t,r,o,l,u){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!l,this.La=u,this.key=++Qb,this.sa=this.Ia=!1}function fa(t){t.sa=!0,t.listener=null,t.proxy=null,t.src=null,t.La=null}function pa(t){this.src=t,this.a={},this.g=0}pa.prototype.add=function(t,r,o,l,u){var d=t.toString();t=this.a[d],t||(t=this.a[d]=[],this.g++);var m=Oc(t,r,l,u);return-1<m?(r=t[m],o||(r.Ia=!1)):(r=new Zb(r,this.src,d,!!l,u),r.Ia=o,t.push(r)),r};function Pc(t,r){var o=r.type;o in t.a&&Rh(t.a[o],r)&&(fa(r),t.a[o].length==0&&(delete t.a[o],t.g--))}function Oc(t,r,o,l){for(var u=0;u<t.length;++u){var d=t[u];if(!d.sa&&d.listener==r&&d.capture==!!o&&d.La==l)return u}return-1}var Dc="closure_lm_"+(1e6*Math.random()|0),Lc={};function jt(t,r,o,l,u){if(l&&l.once)return ys(t,r,o,l,u);if(F(r)){for(var d=0;d<r.length;d++)jt(t,r[d],o,l,u);return null}return o=xc(o),t&&t[_s]?t.J.add(String(r),o,!1,H(l)?!!l.capture:!!l,u):gf(t,r,o,!1,l,u)}function gf(t,r,o,l,u,d){if(!r)throw Error("Invalid event type");var m=H(u)?!!u.capture:!!u,_=ma(t);if(_||(t[Dc]=_=new pa(t)),o=_.add(r,o,l,m,d),o.proxy)return o;if(l=ew(),o.proxy=l,l.src=t,l.listener=o,t.addEventListener)Jb||(u=m),u===void 0&&(u=!1),t.addEventListener(r.toString(),l,u);else if(t.attachEvent)t.attachEvent(vf(r.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return o}function ew(){var t=tw,r=mf?function(o){return t.call(r.src,r.listener,o)}:function(o){if(o=t.call(r.src,r.listener,o),!o)return o};return r}function ys(t,r,o,l,u){if(F(r)){for(var d=0;d<r.length;d++)ys(t,r[d],o,l,u);return null}return o=xc(o),t&&t[_s]?t.J.add(String(r),o,!0,H(l)?!!l.capture:!!l,u):gf(t,r,o,!0,l,u)}function fi(t,r,o,l,u){if(F(r))for(var d=0;d<r.length;d++)fi(t,r[d],o,l,u);else l=H(l)?!!l.capture:!!l,o=xc(o),t&&t[_s]?(t=t.J,r=String(r).toString(),r in t.a&&(d=t.a[r],o=Oc(d,o,l,u),-1<o&&(fa(d[o]),Zo(d,o),d.length==0&&(delete t.a[r],t.g--)))):t&&(t=ma(t))&&(r=t.a[r.toString()],t=-1,r&&(t=Oc(r,o,l,u)),(o=-1<t?r[t]:null)&&Bn(o))}function Bn(t){if(typeof t!="number"&&t&&!t.sa){var r=t.src;if(r&&r[_s])Pc(r.J,t);else{var o=t.type,l=t.proxy;r.removeEventListener?r.removeEventListener(o,l,t.capture):r.detachEvent?r.detachEvent(vf(o),l):r.addListener&&r.removeListener&&r.removeListener(l),(o=ma(r))?(Pc(o,t),o.g==0&&(o.src=null,r[Dc]=null)):fa(t)}}}function vf(t){return t in Lc?Lc[t]:Lc[t]="on"+t}function _f(t,r,o,l){var u=!0;if((t=ma(t))&&(r=t.a[r.toString()]))for(r=r.concat(),t=0;t<r.length;t++){var d=r[t];d&&d.capture==o&&!d.sa&&(d=yf(d,l),u=u&&d!==!1)}return u}function yf(t,r){var o=t.listener,l=t.La||t.src;return t.Ia&&Bn(t),o.call(l,r)}function tw(t,r){if(t.sa)return!0;if(!mf){if(!r)e:{r=["window","event"];for(var o=v,l=0;l<r.length;l++)if(o=o[r[l]],o==null){r=null;break e}r=o}if(l=r,r=new ut(l,this),o=!0,!(0>l.keyCode||l.returnValue!=null)){e:{var u=!1;if(l.keyCode==0)try{l.keyCode=-1;break e}catch{u=!0}(u||l.returnValue==null)&&(l.returnValue=!0)}for(l=[],u=r.g;u;u=u.parentNode)l.push(u);for(t=t.type,u=l.length-1;!r.h&&0<=u;u--){r.g=l[u];var d=_f(l[u],t,!0,r);o=o&&d}for(u=0;!r.h&&u<l.length;u++)r.g=l[u],d=_f(l[u],t,!1,r),o=o&&d}return o}return yf(t,new ut(r,this))}function ma(t){return t=t[Dc],t instanceof pa?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(t){return V(t)?t:(t[Mc]||(t[Mc]=function(r){return t.handleEvent(r)}),t[Mc])}function xe(){hi.call(this),this.J=new pa(this),this.wb=this,this.Ha=null}W(xe,hi),xe.prototype[_s]=!0,xe.prototype.Za=function(t){this.Ha=t},xe.prototype.removeEventListener=function(t,r,o,l){fi(this,t,r,o,l)};function jn(t,r){var o,l=t.Ha;if(l)for(o=[];l;l=l.Ha)o.push(l);if(t=t.wb,l=r.type||r,A(r))r=new hn(r,t);else if(r instanceof hn)r.target=r.target||t;else{var u=r;r=new hn(l,t),ea(r,u)}if(u=!0,o)for(var d=o.length-1;!r.h&&0<=d;d--){var m=r.g=o[d];u=ga(m,l,!0,r)&&u}if(r.h||(m=r.g=t,u=ga(m,l,!0,r)&&u,r.h||(u=ga(m,l,!1,r)&&u)),o)for(d=0;!r.h&&d<o.length;d++)m=r.g=o[d],u=ga(m,l,!1,r)&&u;return u}xe.prototype.o=function(){if(xe.K.o.call(this),this.J){var t=this.J,r;for(r in t.a){for(var o=t.a[r],l=0;l<o.length;l++)fa(o[l]);delete t.a[r],t.g--}}this.Ha=null};function ga(t,r,o,l){if(r=t.J.a[String(r)],!r)return!0;r=r.concat();for(var u=!0,d=0;d<r.length;++d){var m=r[d];if(m&&!m.sa&&m.capture==o){var _=m.listener,w=m.La||m.src;m.Ia&&Pc(t.J,m),u=_.call(w,l)!==!1&&u}}return u&&l.qb!=0}var St={},bf=0;function wf(t,r){if(!t)throw Error("Event target element must be provided!");if(t=Fc(t),St[t]&&St[t].length)for(var o=0;o<St[t].length;o++)jn(St[t][o],r)}function nw(t){var r=Fc(t.N());St[r]&&St[r].length&&(Q0(St[r],function(o){return o==t}),St[r].length||delete St[r])}function Fc(t){return typeof t.a>"u"&&(t.a=bf,bf++),t.a}function va(t){if(!t)throw Error("Event target element must be provided!");xe.call(this),this.a=t}f(va,xe),va.prototype.N=function(){return this.a},va.prototype.register=function(){var t=Fc(this.N());St[t]?Dt(St[t],this)||St[t].push(this):St[t]=[this]};function If(t){if(!t)return!1;try{return!!t.$goog_Thenable}catch{return!1}}function Uc(t,r){this.h=t,this.j=r,this.g=0,this.a=null}Uc.prototype.get=function(){if(0<this.g){this.g--;var t=this.a;this.a=t.next,t.next=null}else t=this.h();return t};function Ef(t,r){t.j(r),100>t.g&&(t.g++,r.next=t.a,t.a=r)}function Sf(){this.g=this.a=null}var Cf=new Uc(function(){return new Bc},function(t){t.reset()});Sf.prototype.add=function(t,r){var o=Cf.get();o.set(t,r),this.g?this.g.next=o:this.a=o,this.g=o};function iw(){var t=kf,r=null;return t.a&&(r=t.a,t.a=t.a.next,t.a||(t.g=null),r.next=null),r}function Bc(){this.next=this.g=this.a=null}Bc.prototype.set=function(t,r){this.a=t,this.g=r,this.next=null},Bc.prototype.reset=function(){this.next=this.g=this.a=null};function Tf(t){v.setTimeout(function(){throw t},0)}var jc;function rw(){var t=v.MessageChannel;if(typeof t>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!q("Presto")&&(t=function(){var u=document.createElement("IFRAME");u.style.display="none",u.src="",document.documentElement.appendChild(u);var d=u.contentWindow;u=d.document,u.open(),u.write(""),u.close();var m="callImmediate"+Math.random(),_=d.location.protocol=="file:"?"*":d.location.protocol+"//"+d.location.host;u=Z(function(w){(_=="*"||w.origin==_)&&w.data==m&&this.port1.onmessage()},this),d.addEventListener("message",u,!1),this.port1={},this.port2={postMessage:function(){d.postMessage(m,_)}}}),typeof t<"u"&&!q("Trident")&&!q("MSIE")){var r=new t,o={},l=o;return r.port1.onmessage=function(){if(E(o.next)){o=o.next;var u=o.gb;o.gb=null,u()}},function(u){l.next={gb:u},l=l.next,r.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(u){var d=document.createElement("SCRIPT");d.onreadystatechange=function(){d.onreadystatechange=null,d.parentNode.removeChild(d),d=null,u(),u=null},document.documentElement.appendChild(d)}:function(u){v.setTimeout(u,0)}}function Wc(t,r){_a||sw(),Hc||(_a(),Hc=!0),kf.add(t,r)}var _a;function sw(){if(v.Promise&&v.Promise.resolve){var t=v.Promise.resolve(void 0);_a=function(){t.then(Rf)}}else _a=function(){var r=Rf;!V(v.setImmediate)||v.Window&&v.Window.prototype&&!q("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(jc||(jc=rw()),jc(r)):v.setImmediate(r)}}var Hc=!1,kf=new Sf;function Rf(){for(var t;t=iw();){try{t.a.call(t.g)}catch(r){Tf(r)}Ef(Cf,t)}Hc=!1}function Fe(t){if(this.a=pi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,t!=I)try{var r=this;t.call(void 0,function(o){mi(r,bs,o)},function(o){if(!(o instanceof ir))try{throw o instanceof Error?o:Error("Promise rejected.")}catch{}mi(r,fn,o)})}catch(o){mi(this,fn,o)}}var pi=0,bs=2,fn=3;function Af(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Af.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Nf=new Uc(function(){return new Af},function(t){t.reset()});function Vc(t,r,o){var l=Nf.get();return l.s=t,l.g=r,l.j=o,l}function ke(t){if(t instanceof Fe)return t;var r=new Fe(I);return mi(r,bs,t),r}function nr(t){return new Fe(function(r,o){o(t)})}Fe.prototype.then=function(t,r,o){return Of(this,V(t)?t:null,V(r)?r:null,o)},Fe.prototype.$goog_Thenable=!0,i=Fe.prototype,i.fc=function(t,r){return t=Vc(t,t,r),t.h=!0,$c(this,t),this},i.Ca=function(t,r){return Of(this,null,t,r)},i.cancel=function(t){this.a==pi&&Wc(function(){var r=new ir(t);Pf(this,r)},this)};function Pf(t,r){if(t.a==pi)if(t.h){var o=t.h;if(o.g){for(var l=0,u=null,d=null,m=o.g;m&&(m.h||(l++,m.a==t&&(u=m),!(u&&1<l)));m=m.next)u||(d=m);u&&(o.a==pi&&l==1?Pf(o,r):(d?(l=d,l.next==o.j&&(o.j=l),l.next=l.next.next):Lf(o),Mf(o,u,fn,r)))}t.h=null}else mi(t,fn,r)}function $c(t,r){t.g||t.a!=bs&&t.a!=fn||Df(t),t.j?t.j.next=r:t.g=r,t.j=r}function Of(t,r,o,l){var u=Vc(null,null,null);return u.a=new Fe(function(d,m){u.s=r?function(_){try{var w=r.call(l,_);d(w)}catch(k){m(k)}}:d,u.g=o?function(_){try{var w=o.call(l,_);!E(w)&&_ instanceof ir?m(_):d(w)}catch(k){m(k)}}:m}),u.a.h=t,$c(t,u),u.a}i.hc=function(t){this.a=pi,mi(this,bs,t)},i.ic=function(t){this.a=pi,mi(this,fn,t)};function mi(t,r,o){if(t.a==pi){t===o&&(r=fn,o=new TypeError("Promise cannot resolve to itself")),t.a=1;e:{var l=o,u=t.hc,d=t.ic;if(l instanceof Fe){$c(l,Vc(u||I,d||null,t));var m=!0}else if(If(l))l.then(u,d,t),m=!0;else{if(H(l))try{var _=l.then;if(V(_)){ow(l,_,u,d,t),m=!0;break e}}catch(w){d.call(t,w),m=!0;break e}m=!1}}m||(t.A=o,t.a=r,t.h=null,Df(t),r!=fn||o instanceof ir||aw(t,o))}}function ow(t,r,o,l,u){function d(w){_||(_=!0,l.call(u,w))}function m(w){_||(_=!0,o.call(u,w))}var _=!1;try{r.call(t,m,d)}catch(w){d(w)}}function Df(t){t.i||(t.i=!0,Wc(t.Hb,t))}function Lf(t){var r=null;return t.g&&(r=t.g,t.g=r.next,r.next=null),t.g||(t.j=null),r}i.Hb=function(){for(var t;t=Lf(this);)Mf(this,t,this.a,this.A);this.i=!1};function Mf(t,r,o,l){if(o==fn&&r.g&&!r.h)for(;t&&t.s;t=t.h)t.s=!1;if(r.a)r.a.h=null,xf(r,o,l);else try{r.h?r.s.call(r.j):xf(r,o,l)}catch(u){Ff.call(null,u)}Ef(Nf,r)}function xf(t,r,o){r==bs?t.s.call(t.j,o):t.g&&t.g.call(t.j,o)}function aw(t,r){t.s=!0,Wc(function(){t.s&&Ff.call(null,r)})}var Ff=Tf;function ir(t){me.call(this,t)}W(ir,me),ir.prototype.name="cancel";function Uf(t,r,o){r||(r={}),o=o||window;var l=t instanceof Et?t:sa(typeof t.href<"u"?t.href:String(t));t=r.target||t.target;var u=[];for(d in r)switch(d){case"width":case"height":case"top":case"left":u.push(d+"="+r[d]);break;case"target":case"noopener":case"noreferrer":break;default:u.push(d+"="+(r[d]?1:0))}var d=u.join(",");return(q("iPhone")&&!q("iPod")&&!q("iPad")||q("iPad")||q("iPod"))&&o.navigator&&o.navigator.standalone&&t&&t!="_self"?(d=o.document.createElement("A"),l=l instanceof Et?l:Qh(l),d.href=Mn(l),d.setAttribute("target",t),r.noreferrer&&d.setAttribute("rel","noreferrer"),r=document.createEvent("MouseEvent"),r.initMouseEvent("click",!0,!0,o,1),d.dispatchEvent(r),o={}):r.noreferrer?(o=o.open("",t,d),r=Mn(l).toString(),o&&(Ib&&r.indexOf(";")!=-1&&(r="'"+r.replace(/'/g,"%27")+"'"),o.opener=null,r=hs('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Yi(r)+'">',null),o.document.write(oa(r)),o.document.close())):(o=o.open(Mn(l).toString(),t,d))&&r.noopener&&(o.opener=null),o}function Bf(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function rr(t){Uf(t,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function ya(t,r){if(t=H(t)&&t.nodeType==1?t:document.querySelector(String(t)),t==null)throw Error(r||"Cannot find element.");return t}function pn(){return window.location.href}function lw(){var t=null;return new Fe(function(r){v.document.readyState=="complete"?r():(t=function(){r()},ys(window,"load",t))}).Ca(function(r){throw fi(window,"load",t),r})}function cw(){for(var t=32,r=[];0<t;)r.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return r.join("")}function uw(t,r,o){return o=o===void 0?{}:o,Object.keys(t).filter(function(l){return r.includes(l)}).reduce(function(l,u){return l[u]=t[u],l},o)}function Wn(t){var r=fw;this.s=[],this.T=r,this.O=t||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}Wn.prototype.cancel=function(t){if(this.a)this.h instanceof Wn&&this.h.cancel();else{if(this.g){var r=this.g;delete this.g,t?r.cancel(t):(r.C--,0>=r.C&&r.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(t=new Is,ba(this),ws(this,!1,t))}},Wn.prototype.L=function(t,r){this.A=!1,ws(this,t,r)};function ws(t,r,o){t.a=!0,t.h=o,t.j=!r,Hf(t)}function ba(t){if(t.a){if(!t.J)throw new wa;t.J=!1}}Wn.prototype.callback=function(t){ba(this),ws(this,!0,t)};function jf(t,r,o){t.s.push([r,o,void 0]),t.a&&Hf(t)}Wn.prototype.then=function(t,r,o){var l,u,d=new Fe(function(m,_){l=m,u=_});return jf(this,l,function(m){m instanceof Is?d.cancel():u(m)}),d.then(t,r,o)},Wn.prototype.$goog_Thenable=!0;function Wf(t){return X0(t.s,function(r){return V(r[1])})}function Hf(t){if(t.i&&t.a&&Wf(t)){var r=t.i,o=Ia[r];o&&(v.clearTimeout(o.a),delete Ia[r]),t.i=0}t.g&&(t.g.C--,delete t.g),r=t.h;for(var l=o=!1;t.s.length&&!t.A;){var u=t.s.shift(),d=u[0],m=u[1];if(u=u[2],d=t.j?m:d)try{var _=d.call(u||t.O,r);E(_)&&(t.j=t.j&&(_==r||_ instanceof Error),t.h=r=_),(If(r)||typeof v.Promise=="function"&&r instanceof v.Promise)&&(l=!0,t.A=!0)}catch(w){r=w,t.j=!0,Wf(t)||(o=!0)}}t.h=r,l&&(_=Z(t.L,t,!0),l=Z(t.L,t,!1),r instanceof Wn?(jf(r,_,l),r.l=!0):r.then(_,l)),o&&(r=new Vf(r),Ia[r.a]=r,t.i=r.a)}function wa(){me.call(this)}W(wa,me),wa.prototype.message="Deferred has already fired",wa.prototype.name="AlreadyCalledError";function Is(){me.call(this)}W(Is,me),Is.prototype.message="Deferred was canceled",Is.prototype.name="CanceledError";function Vf(t){this.a=v.setTimeout(Z(this.h,this),0),this.g=t}Vf.prototype.h=function(){throw delete Ia[this.a],this.g};var Ia={};function dw(t){var r={},o=r.document||document,l=Yh(t).toString(),u=document.createElement("SCRIPT"),d={rb:u,sb:void 0},m=new Wn(d),_=null,w=r.timeout!=null?r.timeout:5e3;return 0<w&&(_=window.setTimeout(function(){Ea(u,!0);var k=new Gc(mw,"Timeout reached for loading script "+l);ba(m),ws(m,!1,k)},w),d.sb=_),u.onload=u.onreadystatechange=function(){u.readyState&&u.readyState!="loaded"&&u.readyState!="complete"||(Ea(u,r.xc||!1,_),m.callback(null))},u.onerror=function(){Ea(u,!0,_);var k=new Gc(pw,"Error while loading script "+l);ba(m),ws(m,!1,k)},d=r.attributes||{},ea(d,{type:"text/javascript",charset:"UTF-8"}),Ab(u,d),Rb(u,t),hw(o).appendChild(u),m}function hw(t){var r=(t||document).getElementsByTagName("HEAD");return r&&r.length!=0?r[0]:t.documentElement}function fw(){if(this&&this.rb){var t=this.rb;t&&t.tagName=="SCRIPT"&&Ea(t,!0,this.sb)}}function Ea(t,r,o){o!=null&&v.clearTimeout(o),t.onload=I,t.onerror=I,t.onreadystatechange=I,r&&window.setTimeout(function(){ui(t)},0)}var pw=0,mw=1;function Gc(t,r){var o="Jsloader error (code #"+t+")";r&&(o+=": "+r),me.call(this,o),this.code=t}W(Gc,me);function Es(){return v.google&&v.google.accounts&&v.google.accounts.id||null}function zc(t){this.a=t||Es(),this.h=!1,this.g=null}zc.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function $f(t,r,o){if(t.a&&r)return function(){return t.h=!0,new Fe(function(u){t.g=u,t.a.initialize({client_id:r,callback:u,auto_select:!o}),t.a.prompt()})}();if(r){var l=Kc.Xa().load().then(function(){return t.a=Es(),$f(t,r,o)}).Ca(function(){return null});return ke(l)}return ke(null)}S(zc);var gw=new Zi(qh,"https://accounts.google.com/gsi/client");function Kc(){this.a=null}Kc.prototype.load=function(){var t=this;if(this.a)return this.a;var r=Cb();return Es()?ke():this.a=lw().then(function(){if(!Es())return new Fe(function(o,l){var u=setTimeout(function(){t.a=null,l(Error("Network error!"))},1e4);v.onGoogleLibraryLoad=function(){clearTimeout(u),o()},ke(dw(r)).then(function(){Es()&&o()}).Ca(function(d){clearTimeout(u),t.a=null,l(d)})})})},S(Kc);function qc(t,r){this.a=t,this.g=r||function(o){throw o}}qc.prototype.confirm=function(t){return ke(this.a.confirm(t)).Ca(this.g)};function Yc(t,r,o){this.reset(t,r,o,void 0,void 0)}Yc.prototype.a=null,Yc.prototype.reset=function(t,r,o,l,u){this.h=l||Ut(),this.j=t,this.s=r,this.g=o,delete this.a};function Jc(t){this.s=t,this.a=this.h=this.j=this.g=null}function Sa(t,r){this.name=t,this.value=r}Sa.prototype.toString=function(){return this.name};var Gf=new Sa("SEVERE",1e3),zf=new Sa("WARNING",900),Kf=new Sa("CONFIG",700);function qf(t){return t.j?t.j:t.g?qf(t.g):(fe("Root logger has no level set."),null)}Jc.prototype.log=function(t,r,o){if(t.value>=qf(this).value)for(V(r)&&(r=r()),t=new Yc(t,String(r),this.s),o&&(t.a=o),o=this;o;){var l=o,u=t;if(l.a)for(var d=0;r=l.a[d];d++)r(u);o=o.g}};var Xc={},Ss=null;function Yf(){Ss||(Ss=new Jc(""),Xc[""]=Ss,Ss.j=Kf)}function Jf(t){Yf();var r;if(!(r=Xc[t])){r=new Jc(t);var o=t.lastIndexOf("."),l=t.substr(o+1);o=Jf(t.substr(0,o)),o.h||(o.h={}),o.h[l]=r,r.g=o,Xc[t]=r}return r}function Ca(){this.a=Ut()}var Qc=null;Ca.prototype.set=function(t){this.a=t},Ca.prototype.reset=function(){this.set(Ut())},Ca.prototype.get=function(){return this.a};function Cs(t){this.j=t||"",Qc||(Qc=new Ca),this.s=Qc}Cs.prototype.a=!0,Cs.prototype.g=!0,Cs.prototype.h=!1;function gi(t){return 10>t?"0"+t:String(t)}function vw(t,r){t=(t.h-r)/1e3,r=t.toFixed(3);var o=0;if(1>t)o=2;else for(;100>t;)o++,t*=10;for(;0<o--;)r=" "+r;return r}function Xf(t){Cs.call(this,t)}W(Xf,Cs);function _w(t,r){var o=[];if(o.push(t.j," "),t.g){var l=new Date(r.h);o.push("[",gi(l.getFullYear()-2e3)+gi(l.getMonth()+1)+gi(l.getDate())+" "+gi(l.getHours())+":"+gi(l.getMinutes())+":"+gi(l.getSeconds())+"."+gi(Math.floor(l.getMilliseconds()/10)),"] ")}return o.push("[",vw(r,t.s.get()),"s] "),o.push("[",r.g,"] "),o.push(r.s),t.h&&(r=r.a)&&o.push(`
`,r instanceof Error?r.message:r.toString()),t.a&&o.push(`
`),o.join("")}function Qf(){this.s=Z(this.h,this),this.a=new Xf,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Qf.prototype.h=function(t){function r(d){if(d){if(d.value>=Gf.value)return"error";if(d.value>=zf.value)return"warn";if(d.value>=Kf.value)return"log"}return"debug"}if(!this.j[t.g]){var o=_w(this.a,t),l=yw;if(l){var u=r(t.j);bw(l,u,o,t.a)}}};var yw=v.console;function bw(t,r,o,l){t[r]?t[r](o,l||""):t.log(o,l||"")}function Ct(t,r){var o=Zc;o&&o.log(Gf,t,r)}var Zc;Zc=Jf("firebaseui");var eu=new Qf;if(eu.g!=1){var Ta;Yf(),Ta=Ss;var ww=eu.s;Ta.a||(Ta.a=[]),Ta.a.push(ww),eu.g=!0}function Hn(t){var r=Zc;r&&r.log(zf,t,void 0)}function Zf(){this.a=(typeof document>"u"?null:document)||{cookie:""}}i=Zf.prototype,i.set=function(t,r,o,l,u,d){if(/[;=\s]/.test(t))throw Error('Invalid cookie name "'+t+'"');if(/[;\r\n]/.test(r))throw Error('Invalid cookie value "'+r+'"');E(o)||(o=-1),u=u?";domain="+u:"",l=l?";path="+l:"",d=d?";secure":"",o=0>o?"":o==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(Ut()+1e3*o).toUTCString(),this.a.cookie=t+"="+r+u+l+o+d},i.get=function(t,r){for(var o=t+"=",l=(this.a.cookie||"").split(";"),u=0,d;u<l.length;u++){if(d=It(l[u]),d.lastIndexOf(o,0)==0)return d.substr(o.length);if(d==t)return""}return r},i.ja=function(){return tu(this).keys},i.la=function(){return tu(this).values},i.clear=function(){for(var t=tu(this).keys,r=t.length-1;0<=r;r--){var o=t[r];this.get(o),this.set(o,"",0,void 0,void 0)}};function tu(t){t=(t.a.cookie||"").split(";");for(var r=[],o=[],l,u,d=0;d<t.length;d++)u=It(t[d]),l=u.indexOf("="),l==-1?(r.push(""),o.push(u)):(r.push(u.substring(0,l)),o.push(u.substring(l+1)));return{keys:r,values:o}}var ka=new Zf;function ep(){}function sr(t,r,o,l){this.h=typeof t<"u"&&t!==null?t:-1,this.g=r||null,this.a=o||null,this.j=!!l}f(sr,ep),sr.prototype.set=function(t,r){ka.set(t,r,this.h,this.g,this.a,this.j)},sr.prototype.get=function(t){return ka.get(t)||null},sr.prototype.ra=function(t){var r=this.g,o=this.a;ka.get(t),ka.set(t,"",0,r,o)};function nu(t,r){this.g=t,this.a=r||null}function tp(t){return{email:t.g,credential:t.a&&t.a.toJSON()}}function np(t){if(t&&t.email){var r=t.credential&&x.auth.AuthCredential.fromJSON(t.credential);return new nu(t.email,r)}return null}function ip(t){this.a=t||null}function rp(t){for(var r=[],o=0,l=0;l<t.length;l++){var u=t.charCodeAt(l);255<u&&(r[o++]=u&255,u>>=8),r[o++]=u}return r}function Iw(t){return tt(t,function(r){return r=r.toString(16),1<r.length?r:"0"+r}).join("")}function Ra(t){for(this.i=t,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(or*(this.j+1)),t=0;t<this.g;t++)this.a[t]=[this.i[4*t],this.i[4*t+1],this.i[4*t+2],this.i[4*t+3]];var r=Array(4);for(t=this.g;t<or*(this.j+1);t++){if(r[0]=this.a[t-1][0],r[1]=this.a[t-1][1],r[2]=this.a[t-1][2],r[3]=this.a[t-1][3],t%this.g==0){var o=r,l=o[0];o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=l,cp(r),r[0]^=Na[t/this.g][0],r[1]^=Na[t/this.g][1],r[2]^=Na[t/this.g][2],r[3]^=Na[t/this.g][3]}else 6<this.g&&t%this.g==4&&cp(r);this.a[t]=Array(4),this.a[t][0]=this.a[t-this.g][0]^r[0],this.a[t][1]=this.a[t-this.g][1]^r[1],this.a[t][2]=this.a[t-this.g][2]^r[2],this.a[t][3]=this.a[t-this.g][3]^r[3]}}Ra.prototype.A=16;var or=Ra.prototype.A/4;function sp(t,r){for(var o,l=0;l<or;l++)for(var u=0;4>u;u++)o=4*u+l,o=r[o],t.h[l][u]=o}function op(t){for(var r=[],o=0;o<or;o++)for(var l=0;4>l;l++)r[4*l+o]=t.h[o][l];return r}function ar(t,r){for(var o=0;4>o;o++)for(var l=0;4>l;l++)t.h[o][l]^=t.a[4*r+l][o]}function Aa(t,r){for(var o=0;4>o;o++)for(var l=0;4>l;l++)t.h[o][l]=r[t.h[o][l]]}function ap(t){for(var r=1;4>r;r++)for(var o=0;4>o;o++)t.s[r][o]=t.h[r][o];for(r=1;4>r;r++)for(o=0;4>o;o++)t.h[r][o]=t.s[r][(o+r)%or]}function lp(t){for(var r=1;4>r;r++)for(var o=0;4>o;o++)t.s[r][(o+r)%or]=t.h[r][o];for(r=1;4>r;r++)for(o=0;4>o;o++)t.h[r][o]=t.s[r][o]}function cp(t){t[0]=lr[t[0]],t[1]=lr[t[1]],t[2]=lr[t[2]],t[3]=lr[t[3]]}var lr=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],up=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Na=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Pa=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Oa=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Da=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],La=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Ma=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],xa=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function dp(t,r){t=new Ra(fp(t)),r=rp(r);for(var o=r.splice(0,16),l="",u;o.length;){u=16-o.length;for(var d=0;d<u;d++)o.push(0);for(u=t,sp(u,o),ar(u,0),o=1;o<u.j;++o){Aa(u,lr),ap(u),d=u.h;for(var m=u.s[0],_=0;4>_;_++)m[0]=d[0][_],m[1]=d[1][_],m[2]=d[2][_],m[3]=d[3][_],d[0][_]=Pa[m[0]]^Oa[m[1]]^m[2]^m[3],d[1][_]=m[0]^Pa[m[1]]^Oa[m[2]]^m[3],d[2][_]=m[0]^m[1]^Pa[m[2]]^Oa[m[3]],d[3][_]=Oa[m[0]]^m[1]^m[2]^Pa[m[3]];ar(u,o)}Aa(u,lr),ap(u),ar(u,u.j),l+=Iw(op(u)),o=r.splice(0,16)}return l}function hp(t,r){t=new Ra(fp(t));for(var o=[],l=0;l<r.length;l+=2)o.push(parseInt(r.substring(l,l+2),16));var u=o.splice(0,16);for(r="";u.length;){for(l=t,sp(l,u),ar(l,l.j),u=1;u<l.j;++u){lp(l),Aa(l,up),ar(l,l.j-u);for(var d=l.h,m=l.s[0],_=0;4>_;_++)m[0]=d[0][_],m[1]=d[1][_],m[2]=d[2][_],m[3]=d[3][_],d[0][_]=xa[m[0]]^La[m[1]]^Ma[m[2]]^Da[m[3]],d[1][_]=Da[m[0]]^xa[m[1]]^La[m[2]]^Ma[m[3]],d[2][_]=Ma[m[0]]^Da[m[1]]^xa[m[2]]^La[m[3]],d[3][_]=La[m[0]]^Ma[m[1]]^Da[m[2]]^xa[m[3]]}if(lp(l),Aa(l,up),ar(l,0),l=op(l),8192>=l.length)l=String.fromCharCode.apply(null,l);else{for(u="",d=0;d<l.length;d+=8192)u+=String.fromCharCode.apply(null,eb(l,d,d+8192));l=u}r+=l,u=o.splice(0,16)}return r.replace(/(\x00)+$/,"")}function fp(t){t=rp(t.substring(0,32));for(var r=32-t.length,o=0;o<r;o++)t.push(0);return t}function pp(t){var r=[];return iu(new Ew,t,r),r.join("")}function Ew(){}function iu(t,r,o){if(r==null)o.push("null");else{if(typeof r=="object"){if(F(r)){var l=r;r=l.length,o.push("[");for(var u="",d=0;d<r;d++)o.push(u),iu(t,l[d],o),u=",";o.push("]");return}if(r instanceof String||r instanceof Number||r instanceof Boolean)r=r.valueOf();else{o.push("{"),u="";for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(d=r[l],typeof d!="function"&&(o.push(u),gp(l,o),o.push(":"),iu(t,d,o),u=","));o.push("}");return}}switch(typeof r){case"string":gp(r,o);break;case"number":o.push(isFinite(r)&&!isNaN(r)?String(r):"null");break;case"boolean":o.push(String(r));break;case"function":o.push("null");break;default:throw Error("Unknown type: "+typeof r)}}}var mp={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},Sw=/\uffff/.test("\uFFFF")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function gp(t,r){r.push('"',t.replace(Sw,function(o){var l=mp[o];return l||(l="\\u"+(o.charCodeAt(0)|65536).toString(16).substr(1),mp[o]=l),l}),'"')}function Ts(t){this.a=t}Ts.prototype.set=function(t,r){E(r)?this.a.set(t,pp(r)):this.a.ra(t)},Ts.prototype.get=function(t){try{var r=this.a.get(t)}catch{return}if(r!==null)try{return JSON.parse(r)}catch{throw"Storage: Invalid value was encountered"}};function Fa(){}W(Fa,ep),Fa.prototype.clear=function(){var t=cb(this.ha(!0)),r=this;be(t,function(o){r.ra(o)})};function Ua(t){this.a=t}W(Ua,Fa);function Ba(t){if(!t.a)return!1;try{return t.a.setItem("__sak","1"),t.a.removeItem("__sak"),!0}catch{return!1}}i=Ua.prototype,i.set=function(t,r){try{this.a.setItem(t,r)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},i.get=function(t){if(t=this.a.getItem(t),!A(t)&&t!==null)throw"Storage mechanism: Invalid value was encountered";return t},i.ra=function(t){this.a.removeItem(t)},i.ha=function(t){var r=0,o=this.a,l=new ri;return l.next=function(){if(r>=o.length)throw Ji;var u=o.key(r++);if(t)return u;if(u=o.getItem(u),!A(u))throw"Storage mechanism: Invalid value was encountered";return u},l},i.clear=function(){this.a.clear()},i.key=function(t){return this.a.key(t)};function ru(){var t=null;try{t=window.localStorage||null}catch{}this.a=t}W(ru,Ua);function su(){var t=null;try{t=window.sessionStorage||null}catch{}this.a=t}W(su,Ua);function cr(t,r){this.g=t,this.a=r+"::"}W(cr,Fa),cr.prototype.set=function(t,r){this.g.set(this.a+t,r)},cr.prototype.get=function(t){return this.g.get(this.a+t)},cr.prototype.ra=function(t){this.g.ra(this.a+t)},cr.prototype.ha=function(t){var r=this.g.ha(!0),o=this,l=new ri;return l.next=function(){for(var u=r.next();u.substr(0,o.a.length)!=o.a;)u=r.next();return t?u.substr(o.a.length):o.g.get(u)},l},Ba(new ru);var vp,_p=new su;vp=Ba(_p)?new cr(_p,"firebaseui"):null;var ou=new Ts(vp),au={name:"pendingEmailCredential",storage:ou},vi={name:"redirectStatus",storage:ou},ks={name:"redirectUrl",storage:ou},ur={name:"emailForSignIn",storage:new Ts(new sr(3600,"/"))},Rs={name:"pendingEncryptedCredential",storage:new Ts(new sr(3600,"/"))};function dr(t,r){return t.storage.get(r?t.name+":"+r:t.name)}function mt(t,r){t.storage.a.ra(r?t.name+":"+r:t.name)}function hr(t,r,o){t.storage.set(o?t.name+":"+o:t.name,r)}function yp(t){return dr(ks,t)||null}function Qt(t){return t=dr(au,t)||null,np(t)}function Zt(t){mt(au,t)}function bp(t,r){hr(au,tp(t),r)}function lu(t){return(t=dr(vi,t)||null)&&typeof t.tenantId<"u"?new ip(t.tenantId):null}function Cw(t,r){hr(vi,{tenantId:t.a},r)}function Tw(t,r){r=dr(ur,r);var o=null;if(r)try{var l=hp(t,r),u=JSON.parse(l);o=u&&u.email||null}catch{}return o}function kw(t,r){r=dr(Rs,r);var o=null;if(r)try{var l=hp(t,r);o=JSON.parse(l)}catch{}return np(o||null)}function Rw(t,r,o){hr(Rs,dp(t,JSON.stringify(tp(r))),o)}function cu(){this.W={}}function Ae(t,r,o){if(r.toLowerCase()in t.W)throw Error("Configuration "+r+" has already been defined.");t.W[r.toLowerCase()]=o}function uu(t,r,o){if(!(r.toLowerCase()in t.W))throw Error("Configuration "+r+" is not defined.");t.W[r.toLowerCase()]=o}cu.prototype.get=function(t){if(!(t.toLowerCase()in this.W))throw Error("Configuration "+t+" is not defined.");return this.W[t.toLowerCase()]};function du(t,r){if(t=t.get(r),!t)throw Error("Configuration "+r+" is required.");return t}function hu(){this.g=void 0,this.a={}}i=hu.prototype,i.set=function(t,r){wp(this,t,r,!1)},i.add=function(t,r){wp(this,t,r,!0)};function wp(t,r,o,l){for(var u=0;u<r.length;u++){var d=r.charAt(u);t.a[d]||(t.a[d]=new hu),t=t.a[d]}if(l&&t.g!==void 0)throw Error('The collection already contains the key "'+r+'"');t.g=o}i.get=function(t){e:{for(var r=this,o=0;o<t.length;o++)if(r=r.a[t.charAt(o)],!r){t=void 0;break e}t=r}return t?t.g:void 0},i.la=function(){var t=[];return Ip(this,t),t};function Ip(t,r){t.g!==void 0&&r.push(t.g);for(var o in t.a)Ip(t.a[o],r)}i.ja=function(){var t=[];return Ep(this,"",t),t};function Ep(t,r,o){t.g!==void 0&&o.push(r);for(var l in t.a)Ep(t.a[l],r+l,o)}i.clear=function(){this.a={},this.g=void 0};function Sp(t){for(this.a=t,this.g=new hu,t=0;t<this.a.length;t++){var r=this.g.get("+"+this.a[t].b);r?r.push(this.a[t]):this.g.add("+"+this.a[t].b,[this.a[t]])}}function ja(t,r){t=t.g;var o={},l=0;for(t.g!==void 0&&(o[l]=t.g);l<r.length;l++){var u=r.charAt(l);if(!(u in t.a))break;t=t.a[u],t.g!==void 0&&(o[l]=t.g)}for(var d in o)if(o.hasOwnProperty(d))return o[d];return[]}function _i(t){for(var r=0;r<dt.length;r++)if(dt[r].c===t)return dt[r];return null}function Cp(t){t=t.toUpperCase();for(var r=[],o=0;o<dt.length;o++)dt[o].f===t&&r.push(dt[o]);return r}function Tp(t){if(0<t.length&&t.charAt(0)=="+"){t=t.substring(1);for(var r=[],o=0;o<dt.length;o++)dt[o].b==t&&r.push(dt[o]);t=r}else t=Cp(t);return t}function kp(t){t.sort(function(r,o){return r.name.localeCompare(o.name,"en")})}var dt=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"\xC5land Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"C\xF4te d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Cura\xE7ao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"R\xE9union",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barth\xE9lemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"S\xE3o Tom\xE9 and Pr\xEDncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];kp(dt);var As=new Sp(dt);function Rp(t,r){this.a=t,this.Aa=r}function Ap(t){t=It(t);var r=ja(As,t);return 0<r.length?new Rp(r[0].b=="1"?"1-US-0":r[0].c,It(t.substr(r[0].b.length+1))):null}function fu(t){var r=_i(t.a);if(!r)throw Error("Country ID "+t.a+" not found.");return"+"+r.b+t.Aa}function Np(t,r){for(var o=0;o<t.length;o++)if(!Dt(Pp,t[o])&&(fr!==null&&t[o]in fr||Dt(r,t[o])))return t[o];return null}var Pp=["emailLink","password","phone"],fr={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Aw(){this.a=new cu,Ae(this.a,"autoUpgradeAnonymousUsers"),Ae(this.a,"callbacks"),Ae(this.a,"credentialHelper",Va),Ae(this.a,"immediateFederatedRedirect",!1),Ae(this.a,"popupMode",!1),Ae(this.a,"privacyPolicyUrl"),Ae(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),Ae(this.a,"queryParameterForWidgetMode","mode"),Ae(this.a,"signInFlow"),Ae(this.a,"signInOptions"),Ae(this.a,"signInSuccessUrl"),Ae(this.a,"siteName"),Ae(this.a,"tosUrl"),Ae(this.a,"widgetUrl"),Ae(this.a,"adminRestrictedOperation")}function Wa(t){var r=!!t.a.get("autoUpgradeAnonymousUsers");return r&&!Wp(t)&&Ct('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),r}function Ha(t){t=t.a.get("signInOptions")||[];for(var r=[],o=0;o<t.length;o++){var l=t[o];l=H(l)?l:{provider:l},l.provider&&r.push(l)}return r}function Tt(t,r){t=Ha(t);for(var o=0;o<t.length;o++)if(t[o].provider===r)return t[o];return null}function pr(t){return Ha(t).map(function(r){return r.provider})}function Ns(t,r){t=Op(t);for(var o=0;o<t.length;o++)if(t[o].providerId===r)return t[o];return null}function Op(t){return Ha(t).map(function(r){if(fr[r.provider]||Dt(Bw,r.provider)){r={providerId:r.provider,S:r.providerName||null,V:r.fullLabel||null,ta:r.buttonColor||null,za:r.iconUrl?Mn(sa(r.iconUrl)).toString():null};for(var o in r)r[o]===null&&delete r[o];return r}return{providerId:r.provider,S:r.providerName||null,V:r.fullLabel||null,ta:r.buttonColor||null,za:r.iconUrl?Mn(sa(r.iconUrl)).toString():null,Ob:r.loginHintKey||null}})}function Dp(t){var r=Tt(t,x.auth.GoogleAuthProvider.PROVIDER_ID),o;if(o=r&&r.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(l in t=t.a.get("credentialHelper"),_u)if(_u[l]===t){var l=_u[l];break e}}l=Va}o=l===vu}return o&&r.clientId||null}function Lp(t){return t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID),!!(t&&t.disableSignUp&&t.disableSignUp.status)}function yi(t){return t=t.a.get("adminRestrictedOperation")||null,!(!t||!t.status)}function Nw(t){var r=null;if(Ha(t).forEach(function(l){l.provider==x.auth.PhoneAuthProvider.PROVIDER_ID&&H(l.recaptchaParameters)&&!Array.isArray(l.recaptchaParameters)&&(r=fc(l.recaptchaParameters))}),r){var o=[];jw.forEach(function(l){typeof r[l]<"u"&&(o.push(l),delete r[l])}),o.length&&Hn('The following provided "recaptchaParameters" keys are not allowed: '+o.join(", "))}return r}function Pw(t){return(t=t.a.get("adminRestrictedOperation"))&&t.adminEmail?t.adminEmail:null}function Ow(t){if(t=t.a.get("adminRestrictedOperation")||null){var r=t.helpLink||null;if(r&&typeof r=="string")return function(){rr(r)}}return null}function Dw(t){return(t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp&&t.disableSignUp.adminEmail||null}function Lw(t){if((t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp){var r=t.disableSignUp.helpLink||null;if(r&&typeof r=="string")return function(){rr(r)}}return null}function Mp(t,r){return t=(t=Tt(t,r))&&t.scopes,Array.isArray(t)?t:[]}function xp(t,r){return t=(t=Tt(t,r))&&t.customParameters,H(t)?(t=fc(t),r===x.auth.GoogleAuthProvider.PROVIDER_ID&&delete t.login_hint,r===x.auth.GithubAuthProvider.PROVIDER_ID&&delete t.login,t):null}function Mw(t){t=Tt(t,x.auth.PhoneAuthProvider.PROVIDER_ID);var r=null;return t&&typeof t.loginHint=="string"&&(r=Ap(t.loginHint)),t&&t.defaultNationalNumber||r&&r.Aa||null}function xw(t){var r=(t=Tt(t,x.auth.PhoneAuthProvider.PROVIDER_ID))&&t.defaultCountry||null;r=r&&Cp(r);var o=null;return t&&typeof t.loginHint=="string"&&(o=Ap(t.loginHint)),r&&r[0]||o&&_i(o.a)||null}function pu(t){if(t=Tt(t,x.auth.PhoneAuthProvider.PROVIDER_ID),!t)return null;var r=t.whitelistedCountries,o=t.blacklistedCountries;if(typeof r<"u"&&(!Array.isArray(r)||r.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof o<"u"&&!Array.isArray(o))throw Error("BlacklistedCountries must be an array.");if(r&&o)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!r&&!o)return dt;if(t=[],r){o={};for(var l=0;l<r.length;l++)for(var u=Tp(r[l]),d=0;d<u.length;d++)o[u[d].c]=u[d];for(var m in o)o.hasOwnProperty(m)&&t.push(o[m])}else{for(m={},r=0;r<o.length;r++)for(u=Tp(o[r]),l=0;l<u.length;l++)m[u[l].c]=u[l];for(u=0;u<dt.length;u++)m!==null&&dt[u].c in m||t.push(dt[u])}return t}function Fp(t){return du(t.a,"queryParameterForWidgetMode")}function Ne(t){var r=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,r&&!t&&Hn("Privacy Policy URL is missing, the link will not be displayed."),r&&t){if(typeof r=="function")return r;if(typeof r=="string")return function(){rr(r)}}return null}function Pe(t){var r=t.a.get("tosUrl")||null,o=t.a.get("privacyPolicyUrl")||null;if(o&&!r&&Hn("Term of Service URL is missing, the link will not be displayed."),r&&o){if(typeof o=="function")return o;if(typeof o=="string")return function(){rr(o)}}return null}function Up(t){return(t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.requireDisplayName<"u"?!!t.requireDisplayName:!0}function mr(t){return t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID),!(!t||t.signInMethod!==x.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Fw(t){return t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID),!(!t||!t.forceSameDevice)}function Uw(t){if(mr(t)){var r={url:pn(),handleCodeInApp:!0};(t=Tt(t,x.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.emailLinkSignIn=="function"&&ea(r,t.emailLinkSignIn()),t=r.url;var o=pn();o instanceof Pn||(o=vc(o)),t instanceof Pn||(t=vc(t));var l=o;o=new Pn(l);var u=!!t.j;u?pc(o,t.j):u=!!t.A,u?o.A=t.A:u=!!t.h,u?o.h=t.h:u=t.C!=null;var d=t.g;if(u)mc(o,t.C);else if(u=!!t.g){if(d.charAt(0)!="/"&&(l.h&&!l.g?d="/"+d:(l=o.g.lastIndexOf("/"),l!=-1&&(d=o.g.substr(0,l+1)+d))),d==".."||d==".")d="";else if(d.indexOf("./")!=-1||d.indexOf("/.")!=-1){l=d.lastIndexOf("/",0)==0,d=d.split("/");for(var m=[],_=0;_<d.length;){var w=d[_++];w=="."?l&&_==d.length&&m.push(""):w==".."?((1<m.length||m.length==1&&m[0]!="")&&m.pop(),l&&_==d.length&&m.push("")):(m.push(w),l=!0)}d=m.join("/")}}return u?o.g=d:u=t.a.toString()!=="",u?gc(o,Uh(t.a)):u=!!t.s,u&&(o.s=t.s),r.url=o.toString(),r}return null}function mu(t){var r=!!t.a.get("immediateFederatedRedirect"),o=pr(t);return t=Bp(t),r&&o.length==1&&!Dt(Pp,o[0])&&t==$a}function Bp(t){t=t.a.get("signInFlow");for(var r in yu)if(yu[r]==t)return yu[r];return $a}function gu(t){return Ps(t).signInSuccess||null}function jp(t){return Ps(t).signInSuccessWithAuthResult||null}function Wp(t){return Ps(t).signInFailure||null}function Ps(t){return t.a.get("callbacks")||{}}var vu="googleyolo",Va="none",_u={nc:vu,NONE:Va},$a="redirect",yu={qc:"popup",rc:$a},bu={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},Bw=["anonymous"],jw=["sitekey","tabindex","callback","expired-callback"],Os,gr,wu,Hp,ie={};function D(t,r,o,l){ie[t].apply(null,Array.prototype.slice.call(arguments,1))}function Vp(t){return t.classList?t.classList:(t=t.className,A(t)&&t.match(/\S+/g)||[])}function Ds(t,r){return t.classList?t.classList.contains(r):Dt(Vp(t),r)}function en(t,r){t.classList?t.classList.add(r):Ds(t,r)||(t.className+=0<t.className.length?" "+r:r)}function tn(t,r){t.classList?t.classList.remove(r):Ds(t,r)&&(t.className=we(Vp(t),function(o){return o!=r}).join(" "))}function Ge(t){var r=t.type;switch(A(r)&&r.toLowerCase()){case"checkbox":case"radio":return t.checked?t.value:null;case"select-one":return r=t.selectedIndex,0<=r?t.options[r].value:null;case"select-multiple":r=[];for(var o,l=0;o=t.options[l];l++)o.selected&&r.push(o.value);return r.length?r:null;default:return t.value!=null?t.value:null}}function $p(t,r){var o=t.type;switch(A(o)&&o.toLowerCase()){case"checkbox":case"radio":t.checked=r;break;case"select-one":if(t.selectedIndex=-1,A(r)){for(var l=0;o=t.options[l];l++)if(o.value==r){o.selected=!0;break}}break;case"select-multiple":for(A(r)&&(r=[r]),l=0;o=t.options[l];l++)if(o.selected=!1,r)for(var u,d=0;u=r[d];d++)o.value==u&&(o.selected=!0);break;default:t.value=r!=null?r:""}}function Ww(t){if(t.altKey&&!t.ctrlKey||t.metaKey||112<=t.keyCode&&123>=t.keyCode)return!1;if(Ls(t.keyCode))return!0;switch(t.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!Bt;default:return 166>t.keyCode||183<t.keyCode}}function Gp(t,r,o,l,u,d){if(lt&&!li("525"))return!0;if(Ln&&u)return Ls(t);if(u&&!l)return!1;if(!Bt){typeof r=="number"&&(r=Iu(r));var m=r==17||r==18||Ln&&r==91;if((!o||Ln)&&m||Ln&&r==16&&(l||d))return!1}if((lt||Dn)&&l&&o)switch(t){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Ce&&l&&r==t)return!1;switch(t){case 13:return Bt?d||u?!1:!(o&&l):!0;case 27:return!(lt||Dn||Bt)}return Bt&&(l||u||d)?!1:Ls(t)}function Ls(t){if(48<=t&&57>=t||96<=t&&106>=t||65<=t&&90>=t||(lt||Dn)&&t==0)return!0;switch(t){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return Bt;default:return!1}}function Iu(t){if(Bt)t=Hw(t);else if(Ln&&lt)switch(t){case 93:t=91}return t}function Hw(t){switch(t){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return t}}function vr(t){xe.call(this),this.a=t,jt(t,"keydown",this.g,!1,this),jt(t,"click",this.h,!1,this)}W(vr,xe),vr.prototype.g=function(t){(t.keyCode==13||lt&&t.keyCode==3)&&zp(this,t)},vr.prototype.h=function(t){zp(this,t)};function zp(t,r){var o=new qp(r);if(jn(t,o)){o=new Kp(r);try{jn(t,o)}finally{r.stopPropagation()}}}vr.prototype.o=function(){vr.K.o.call(this),fi(this.a,"keydown",this.g,!1,this),fi(this.a,"click",this.h,!1,this),delete this.a};function Kp(t){ut.call(this,t.a),this.type="action"}W(Kp,ut);function qp(t){ut.call(this,t.a),this.type="beforeaction"}W(qp,ut);function _r(t){xe.call(this),this.a=t,t=Ce?"focusout":"blur",this.g=jt(this.a,Ce?"focusin":"focus",this,!Ce),this.h=jt(this.a,t,this,!Ce)}W(_r,xe),_r.prototype.handleEvent=function(t){var r=new ut(t.a);r.type=t.type=="focusin"||t.type=="focus"?"focusin":"focusout",jn(this,r)},_r.prototype.o=function(){_r.K.o.call(this),Bn(this.g),Bn(this.h),delete this.a};function Ga(t,r){xe.call(this),this.g=t||1,this.a=r||v,this.h=Z(this.gc,this),this.j=Ut()}W(Ga,xe),i=Ga.prototype,i.Ka=!1,i.aa=null,i.gc=function(){if(this.Ka){var t=Ut()-this.j;0<t&&t<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-t):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),jn(this,"tick"),this.Ka&&(za(this),this.start()))}},i.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=Ut())};function za(t){t.Ka=!1,t.aa&&(t.a.clearTimeout(t.aa),t.aa=null)}i.o=function(){Ga.K.o.call(this),za(this),delete this.a};function Vw(t,r){if(V(t))r&&(t=Z(t,r));else if(t&&typeof t.handleEvent=="function")t=Z(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(0)?-1:v.setTimeout(t,0)}function yr(t){hi.call(this),this.g=t,this.a={}}W(yr,hi);var Yp=[];function br(t,r,o,l){F(o)||(o&&(Yp[0]=o.toString()),o=Yp);for(var u=0;u<o.length;u++){var d=jt(r,o[u],l||t.handleEvent,!1,t.g||t);if(!d)break;t.a[d.key]=d}}function Jp(t){Ph(t.a,function(r,o){this.a.hasOwnProperty(o)&&Bn(r)},t),t.a={}}yr.prototype.o=function(){yr.K.o.call(this),Jp(this)},yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ms(t){xe.call(this),this.a=null,this.g=t,t=Ce||Dn||lt&&!li("531")&&t.tagName=="TEXTAREA",this.h=new yr(this),br(this.h,this.g,t?["keydown","paste","cut","drop","input"]:"input",this)}W(Ms,xe),Ms.prototype.handleEvent=function(t){if(t.type=="input")Ce&&li(10)&&t.keyCode==0&&t.j==0||(Eu(this),jn(this,Xp(t)));else if(t.type!="keydown"||Ww(t)){var r=t.type=="keydown"?this.g.value:null;Ce&&t.keyCode==229&&(r=null);var o=Xp(t);Eu(this),this.a=Vw(function(){this.a=null,this.g.value!=r&&jn(this,o)},this)}};function Eu(t){t.a!=null&&(v.clearTimeout(t.a),t.a=null)}function Xp(t){return t=new ut(t.a),t.type="input",t}Ms.prototype.o=function(){Ms.K.o.call(this),this.h.m(),Eu(this),delete this.g};function xs(t,r){xe.call(this),t&&(this.Oa&&nm(this),this.qa=t,this.Na=jt(this.qa,"keypress",this,r),this.Ya=jt(this.qa,"keydown",this.Jb,r,this),this.Oa=jt(this.qa,"keyup",this.Kb,r,this))}W(xs,xe),i=xs.prototype,i.qa=null,i.Na=null,i.Ya=null,i.Oa=null,i.R=-1,i.X=-1,i.Ua=!1;var Qp={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Zp={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},em=!lt||li("525"),tm=Ln&&Bt;i=xs.prototype,i.Jb=function(t){(lt||Dn)&&(this.R==17&&!t.ctrlKey||this.R==18&&!t.altKey||Ln&&this.R==91&&!t.metaKey)&&(this.X=this.R=-1),this.R==-1&&(t.ctrlKey&&t.keyCode!=17?this.R=17:t.altKey&&t.keyCode!=18?this.R=18:t.metaKey&&t.keyCode!=91&&(this.R=91)),em&&!Gp(t.keyCode,this.R,t.shiftKey,t.ctrlKey,t.altKey,t.metaKey)?this.handleEvent(t):(this.X=Iu(t.keyCode),tm&&(this.Ua=t.altKey))},i.Kb=function(t){this.X=this.R=-1,this.Ua=t.altKey},i.handleEvent=function(t){var r=t.a,o=r.altKey;if(Ce&&t.type=="keypress")var l=this.X,u=l!=13&&l!=27?r.keyCode:0;else(lt||Dn)&&t.type=="keypress"?(l=this.X,u=0<=r.charCode&&63232>r.charCode&&Ls(l)?r.charCode:0):$h&&!lt?(l=this.X,u=Ls(l)?r.keyCode:0):(t.type=="keypress"?(tm&&(o=this.Ua),r.keyCode==r.charCode?32>r.keyCode?(l=r.keyCode,u=0):(l=this.X,u=r.charCode):(l=r.keyCode||this.X,u=r.charCode||0)):(l=r.keyCode||this.X,u=r.charCode||0),Ln&&u==63&&l==224&&(l=191));var d=l=Iu(l);l?63232<=l&&l in Qp?d=Qp[l]:l==25&&t.shiftKey&&(d=9):r.keyIdentifier&&r.keyIdentifier in Zp&&(d=Zp[r.keyIdentifier]),Bt&&em&&t.type=="keypress"&&!Gp(d,this.R,t.shiftKey,t.ctrlKey,o,t.metaKey)||(t=d==this.R,this.R=d,r=new im(d,u,t,r),r.altKey=o,jn(this,r))},i.N=function(){return this.qa};function nm(t){t.Na&&(Bn(t.Na),Bn(t.Ya),Bn(t.Oa),t.Na=null,t.Ya=null,t.Oa=null),t.qa=null,t.R=-1,t.X=-1}i.o=function(){xs.K.o.call(this),nm(this)};function im(t,r,o,l){ut.call(this,l),this.type="key",this.keyCode=t,this.j=r,this.repeat=o}W(im,ut);function wr(t,r,o,l){this.top=t,this.right=r,this.bottom=o,this.left=l}wr.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},wr.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},wr.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},wr.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function Ka(t,r){var o=fs(t);return o.defaultView&&o.defaultView.getComputedStyle&&(t=o.defaultView.getComputedStyle(t,null))&&(t[r]||t.getPropertyValue(r))||""}function rm(t){try{var r=t.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return Ce&&t.ownerDocument.body&&(t=t.ownerDocument,r.left-=t.documentElement.clientLeft+t.body.clientLeft,r.top-=t.documentElement.clientTop+t.body.clientTop),r}function $w(t,r){r=r||la(document);var o=r||la(document),l=sm(t),u=sm(o);if(!Ce||9<=Number(ds)){m=Ka(o,"borderLeftWidth");var d=Ka(o,"borderRightWidth");_=Ka(o,"borderTopWidth"),w=Ka(o,"borderBottomWidth"),d=new wr(parseFloat(_),parseFloat(d),parseFloat(w),parseFloat(m))}else{var m=qa(o,"borderLeft");d=qa(o,"borderRight");var _=qa(o,"borderTop"),w=qa(o,"borderBottom");d=new wr(_,d,w,m)}o==la(document)?(m=l.a-o.scrollLeft,l=l.g-o.scrollTop,!Ce||10<=Number(ds)||(m+=d.left,l+=d.top)):(m=l.a-u.a-d.left,l=l.g-u.g-d.top),u=t.offsetWidth,d=t.offsetHeight,_=lt&&!u&&!d,E(u)&&!_||!t.getBoundingClientRect?t=new Ec(u,d):(t=rm(t),t=new Ec(t.right-t.left,t.bottom-t.top)),u=o.clientHeight-t.height,d=o.scrollLeft,_=o.scrollTop,d+=Math.min(m,Math.max(m-(o.clientWidth-t.width),0)),_+=Math.min(l,Math.max(l-u,0)),o=new Fn(d,_),r.scrollLeft=o.a,r.scrollTop=o.g}function sm(t){var r=fs(t),o=new Fn(0,0),l=r?fs(r):document;return l=!Ce||9<=Number(ds)||aa(l).a.compatMode=="CSS1Compat"?l.documentElement:l.body,t==l||(t=rm(t),l=aa(r).a,r=la(l),l=l.parentWindow||l.defaultView,r=Ce&&li("10")&&l.pageYOffset!=r.scrollTop?new Fn(r.scrollLeft,r.scrollTop):new Fn(l.pageXOffset||r.scrollLeft,l.pageYOffset||r.scrollTop),o.a=t.left+r.a,o.g=t.top+r.g),o}var om={thin:2,medium:4,thick:6};function qa(t,r){if((t.currentStyle?t.currentStyle[r+"Style"]:null)=="none")return 0;var o=t.currentStyle?t.currentStyle[r+"Width"]:null;if(o in om)t=om[o];else if(/^\d+px?$/.test(o))t=parseInt(o,10);else{r=t.style.left;var l=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,t.style.left=o,o=t.style.pixelLeft,t.style.left=r,t.runtimeStyle.left=l,t=+o}return t}function Su(){}S(Su),Su.prototype.a=0;function bi(t){xe.call(this),this.s=t||aa(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}W(bi,xe),i=bi.prototype,i.Lb=Su.Xa(),i.N=function(){return this.g};function J(t,r){return t.g?Cc(r,t.g||t.s.a):null}function Fs(t){return t.L||(t.L=new yr(t)),t.L}i.Za=function(t){if(this.Y&&this.Y!=t)throw Error("Method not supported");bi.K.Za.call(this,t)},i.kb=function(){this.g=this.s.a.createElement("DIV")},i.render=function(t){if(this.na)throw Error("Component already rendered");this.g||this.kb(),t?t.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},i.v=function(){this.na=!0,Cu(this,function(t){!t.na&&t.N()&&t.v()})},i.ya=function(){Cu(this,function(t){t.na&&t.ya()}),this.L&&Jp(this.L),this.na=!1},i.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Cu(this,function(t){t.m()}),this.g&&ui(this.g),this.Y=this.g=this.oa=this.Ea=null,bi.K.o.call(this)};function Cu(t,r){t.Ea&&be(t.Ea,r,void 0)}i.removeChild=function(t,r){if(t){var o=A(t)?t:t.cb||(t.cb=":"+(t.Lb.a++).toString(36));if(this.oa&&o?(t=this.oa,t=(t!==null&&o in t?t[o]:void 0)||null):t=null,o&&t){var l=this.oa;if(o in l&&delete l[o],Rh(this.Ea,t),r&&(t.ya(),t.g&&ui(t.g)),r=t,r==null)throw Error("Unable to set parent component");r.Y=null,bi.K.Za.call(r,null)}}if(!t)throw Error("Child is not in parent component");return t};function Re(t,r){var o=sf(t,"firebaseui-textfield");r?(tn(t,"firebaseui-input-invalid"),en(t,"firebaseui-input"),o&&tn(o,"firebaseui-textfield-invalid")):(tn(t,"firebaseui-input"),en(t,"firebaseui-input-invalid"),o&&en(o,"firebaseui-textfield-invalid"))}function Ir(t,r,o){r=new Ms(r),gs(t,De(vs,r)),br(Fs(t),r,"input",o)}function Us(t,r,o){r=new xs(r),gs(t,De(vs,r)),br(Fs(t),r,"key",function(l){l.keyCode==13&&(l.stopPropagation(),l.preventDefault(),o(l))})}function Gw(t,r,o){r=new _r(r),gs(t,De(vs,r)),br(Fs(t),r,"focusin",o)}function zw(t,r,o){r=new _r(r),gs(t,De(vs,r)),br(Fs(t),r,"focusout",o)}function Ie(t,r,o){r=new vr(r),gs(t,De(vs,r)),br(Fs(t),r,"action",function(l){l.stopPropagation(),l.preventDefault(),o(l)})}function kt(t){en(t,"firebaseui-hidden")}function ze(t,r){r&&Tc(t,r),tn(t,"firebaseui-hidden")}function Er(t){return!Ds(t,"firebaseui-hidden")&&t.style.display!="none"}function Sr(t){t=t||{};var r=t.email,o=t.disabled,l='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return l=t.wc?l+"Enter new email address":l+"Email",l+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+ct(r!=null?r:"")+'"'+(o?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',O(l)}function gt(t){t=t||{},t=t.label;var r='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return r=t?r+j(t):r+"Next",O(r+"</button>")}function Tu(){var t=""+gt({label:Te("Sign In")});return O(t)}function am(){var t=""+gt({label:Te("Save")});return O(t)}function Wt(){var t=""+gt({label:Te("Continue")});return O(t)}function lm(t){t=t||{},t=t.label;var r='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return r=t?r+j(t):r+"Choose password",O(r+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function cm(){var t={},r='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return r=t.current?r+"Current password":r+"Password",O(r+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function um(){return O('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function Rt(t){t=t||{},t=t.label;var r='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return r=t?r+j(t):r+"Cancel",O(r+"</button>")}function nt(t){var r="";return t.F&&t.D&&(r+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),O(r)}function Cr(t){var r="";return t.F&&t.D&&(r+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),O(r)}function dm(t){return t='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+j(t.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',O(t)}dm.a="firebaseui.auth.soy2.element.infoBar";function hm(t){var r=t.content;return t=t.Ab,O('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(t?" "+ct(t):"")+'">'+j(r)+"</dialog>")}function fm(t){var r=t.message;return O(hm({content:lf('<div class="firebaseui-dialog-icon-wrapper"><div class="'+ct(t.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+j(r)+"</div>")}))}fm.a="firebaseui.auth.soy2.element.progressDialog";function pm(t){var r='<div class="firebaseui-list-box-actions">';t=t.items;for(var o=t.length,l=0;l<o;l++){var u=t[l];r+='<button type="button" data-listboxid="'+ct(u.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(u.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+ct(u.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+j(u.label)+"</div></button>"}return r=""+hm({Ab:Te("firebaseui-list-box-dialog"),content:lf(r+"</div>")}),O(r)}pm.a="firebaseui.auth.soy2.element.listBoxDialog";function Ya(t){return t=t||{},O(t.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}Ya.a="firebaseui.auth.soy2.element.busyIndicator";function Vn(t,r){return t=t||{},t=t.ga,ne(t.S?t.S:r.hb[t.providerId]?""+r.hb[t.providerId]:t.providerId&&t.providerId.indexOf("saml.")==0||t.providerId&&t.providerId.indexOf("oidc.")==0?t.providerId.substring(5):""+t.providerId)}function ku(t){mm(t,"upgradeElement")}function Ru(t){mm(t,"downgradeElements")}var Kw=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function mm(t,r){t&&window.componentHandler&&window.componentHandler[r]&&Kw.forEach(function(o){Ds(t,o)&&window.componentHandler[r](t),be(Sc(o,t),function(l){window.componentHandler[r](l)})})}function gm(t,r,o){if(Ja.call(this),document.body.appendChild(t),t.showModal||window.dialogPolyfill.registerDialog(t),t.showModal(),ku(t),r&&Ie(this,t,function(d){var m=t.getBoundingClientRect();(d.clientX<m.left||m.left+m.width<d.clientX||d.clientY<m.top||m.top+m.height<d.clientY)&&Ja.call(this)}),!o){var l=this.N().parentElement||this.N().parentNode;if(l){var u=this;this.da=function(){if(t.open){var d=t.getBoundingClientRect().height,m=l.getBoundingClientRect().height,_=l.getBoundingClientRect().top-document.body.getBoundingClientRect().top,w=l.getBoundingClientRect().left-document.body.getBoundingClientRect().left,k=t.getBoundingClientRect().width,L=l.getBoundingClientRect().width;t.style.top=(_+(m-d)/2).toString()+"px",d=w+(L-k)/2,t.style.left=d.toString()+"px",t.style.right=(document.body.getBoundingClientRect().width-d-k).toString()+"px"}else window.removeEventListener("resize",u.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ja(){var t=Au.call(this);t&&(Ru(t),t.open&&t.close(),ui(t),this.da&&window.removeEventListener("resize",this.da))}function Au(){return Cc("firebaseui-id-dialog")}function vm(){ui(_m.call(this))}function _m(){return J(this,"firebaseui-id-info-bar")}function ym(){return J(this,"firebaseui-id-dismiss-info-bar")}var qw={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Nu(t,r,o){hn.call(this,t,r);for(var l in o)this[l]=o[l]}W(Nu,hn);function C(t,r,o,l,u){bi.call(this,o),this.fb=t,this.eb=r,this.Fa=!1,this.Ga=l||null,this.A=this.ca=null,this.Z=fc(qw),ea(this.Z,u||{})}W(C,bi),i=C.prototype,i.kb=function(){var t=ps(this.fb,this.eb,this.Z,this.s);ku(t),this.g=t},i.v=function(){if(C.K.v.call(this),wf(ye(this),new Nu("pageEnter",ye(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var t=this.Z.F;Ie(this,this.bb(),function(){t()})}if(this.ab()&&this.Z.D){var r=this.Z.D;Ie(this,this.ab(),function(){r()})}},i.ya=function(){wf(ye(this),new Nu("pageExit",ye(this),{pageId:this.Ga})),C.K.ya.call(this)},i.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Ru(this.N()),C.K.o.call(this)};function Yw(t){t.Fa=!0;var r=Ds(t.N(),"firebaseui-use-spinner");t.ca=window.setTimeout(function(){t.N()&&t.A===null&&(t.A=ps(Ya,{tb:r},null,t.s),t.N().appendChild(t.A),ku(t.A))},500)}i.I=function(t,r,o,l){function u(){if(d.T)return null;d.Fa=!1,window.clearTimeout(d.ca),d.ca=null,d.A&&(Ru(d.A),ui(d.A),d.A=null)}var d=this;return d.Fa?null:(Yw(d),t.apply(null,r).then(o,l).then(u,u))};function ye(t){return t.N().parentElement||t.N().parentNode}function Bs(t,r,o){Us(t,r,function(){o.focus()})}function Tr(t,r,o){Us(t,r,function(){o()})}ce(C.prototype,{a:function(t){vm.call(this);var r=ps(dm,{message:t},null,this.s);this.N().appendChild(r),Ie(this,ym.call(this),function(){ui(r)})},yc:vm,Ac:_m,zc:ym,$:function(t,r){t=ps(fm,{Ma:t,message:r},null,this.s),gm.call(this,t)},h:Ja,Cb:Au,Cc:function(){return J(this,"firebaseui-tos")},bb:function(){return J(this,"firebaseui-tos-link")},ab:function(){return J(this,"firebaseui-pp-link")},Dc:function(){return J(this,"firebaseui-tos-list")}});function bm(t,r,o){t=t||{},r=t.Va;var l=t.ia;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Sr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?Rt(null):"")+gt(null)+'</div></div><div class="firebaseui-card-footer">'+(l?Cr(o):nt(o))+"</div></form></div>",O(t)}bm.a="firebaseui.auth.soy2.page.signIn";function wm(t,r,o){return t=t||{},r=t.ia,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Sr(t)+cm()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+um()+'</div><div class="firebaseui-form-actions">'+Tu()+'</div></div><div class="firebaseui-card-footer">'+(r?Cr(o):nt(o))+"</div></form></div>",O(t)}wm.a="firebaseui.auth.soy2.page.passwordSignIn";function Im(t,r,o){t=t||{};var l=t.Tb;r=t.Ta;var u=t.ia,d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Sr(t);return l?(t=t||{},t=t.name,t='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+ct(t!=null?t:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',t=O(t)):t="",o=d+t+lm(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?Rt(null):"")+am()+'</div></div><div class="firebaseui-card-footer">'+(u?Cr(o):nt(o))+"</div></form></div>",O(o)}Im.a="firebaseui.auth.soy2.page.passwordSignUp";function Em(t,r,o){return t=t||{},r=t.Ta,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Sr(t)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(r?Rt(null):"")+gt({label:Te("Send")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(t)}Em.a="firebaseui.auth.soy2.page.passwordRecovery";function Sm(t,r,o){r=t.G;var l="";return t="Follow the instructions sent to <strong>"+(j(t.email)+"</strong> to recover your password"),l+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">',r&&(l+='<div class="firebaseui-form-actions">'+gt({label:Te("Done")})+"</div>"),l+='</div><div class="firebaseui-card-footer">'+nt(o)+"</div></div>",O(l)}Sm.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function Cm(t,r,o){return O('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Ya(null)+"</div></div>")}Cm.a="firebaseui.auth.soy2.page.callback";function Tm(t,r,o){return O('<div class="firebaseui-container firebaseui-id-page-spinner">'+Ya({tb:!0})+"</div>")}Tm.a="firebaseui.auth.soy2.page.spinner";function km(){return O('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}km.a="firebaseui.auth.soy2.page.blank";function Rm(t,r,o){r="",t="A sign-in email with additional instructions was sent to <strong>"+(j(t.email)+"</strong>. Check your email to complete sign-in.");var l=O('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+l+'</div><div class="firebaseui-form-actions">'+Rt({label:Te("Back")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}Rm.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function Am(t,r,o){return t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+O('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+Rt({label:Te("Back")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(t)}Am.a="firebaseui.auth.soy2.page.emailNotReceived";function Nm(t,r,o){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Sr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rt(null)+gt(null)+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(t)}Nm.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function Pm(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rt({label:Te("Dismiss")})+"</div></div></div>";return O(t)}Pm.a="firebaseui.auth.soy2.page.differentDeviceError";function Om(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rt({label:Te("Dismiss")})+"</div></div></div>";return O(t)}Om.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function Dm(t,r,o){return r="",t="You\u2019ve already used <strong>"+(j(t.email)+"</strong> to sign in. Enter your password for that account."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+t+"</p>"+cm()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+um()+'</div><div class="firebaseui-form-actions">'+Tu()+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}Dm.a="firebaseui.auth.soy2.page.passwordLinking";function Lm(t,r,o){var l=t.email;return r="",t=""+Vn(t,o),t=Te(t),l="You\u2019ve already used <strong>"+(j(l)+("</strong>. You can connect your <strong>"+(j(t)+("</strong> account with <strong>"+(j(l)+"</strong> by signing in with email link below."))))),t="For this flow to successfully connect your "+(j(t)+" account with this email, you have to open the link on the same device or browser."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+l+'<p class="firebaseui-text firebaseui-text-justify">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Tu()+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}Lm.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function Mm(t,r,o){r="";var l=""+Vn(t,o);return l=Te(l),t="You originally intended to connect <strong>"+(j(l)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),l="If you still want to connect your <strong>"+(j(l)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+t+'</p><p class="firebaseui-text firebaseui-text-justify">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Wt()+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}Mm.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function xm(t,r,o){var l=t.email;return r="",t=""+Vn(t,o),t=Te(t),l="You\u2019ve already used <strong>"+(j(l)+("</strong>. Sign in with "+(j(t)+" to continue."))),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gt({label:Te("Sign in with "+t)})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}xm.a="firebaseui.auth.soy2.page.federatedLinking";function Fm(t,r,o){t=t||{};var l=t.kc;r=t.yb,t=t.Eb;var u='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return l?(l="<strong>"+(j(l)+"</strong> is not authorized to view the requested page."),u+=l):u+="User is not authorized to view the requested page.",u+="</p>",r&&(r="Please contact <strong>"+(j(r)+"</strong> for authorization."),u+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+r+"</p>"),u+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',t&&(u+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),u+='</div><div class="firebaseui-form-actions">'+Rt({label:Te("Back")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(u)}Fm.a="firebaseui.auth.soy2.page.unauthorizedUser";function Um(t,r,o){return r="",t="To continue sign in with <strong>"+(j(t.email)+"</strong> on this device, you have to recover the password."),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rt(null)+gt({label:Te("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}Um.a="firebaseui.auth.soy2.page.unsupportedProvider";function Bm(t){var r="",o='<p class="firebaseui-text">for <strong>'+(j(t.email)+"</strong></p>");return r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+o+lm(Fb(t))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+am()+"</div></div></form></div>",O(r)}Bm.a="firebaseui.auth.soy2.page.passwordReset";function jm(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}jm.a="firebaseui.auth.soy2.page.passwordResetSuccess";function Wm(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}Wm.a="firebaseui.auth.soy2.page.passwordResetFailure";function Hm(t){var r=t.G,o="";return t="Your sign-in email address has been changed back to <strong>"+(j(t.email)+"</strong>."),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(r?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></form></div>",O(o)}Hm.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function Vm(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}Vm.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function $m(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}$m.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function Gm(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}Gm.a="firebaseui.auth.soy2.page.emailVerificationFailure";function zm(t){var r=t.G,o="";return t="You can now sign in with your new email <strong>"+(j(t.email)+"</strong>."),o+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">'+(r?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(o)}zm.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function Km(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}Km.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function qm(t){var r=t.factorId,o=t.phoneNumber;t=t.G;var l='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(r){case"phone":r="The <strong>"+(j(r)+(" "+(j(o)+"</strong> was removed as a second authentication step."))),l+=r;break;default:l+="The device or app was removed as a second authentication step."}return l+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(t?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></form></div>",O(l)}qm.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function Ym(t){return t=t||{},t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(t.G?'<div class="firebaseui-form-actions">'+Wt()+"</div>":"")+"</div></div>",O(t)}Ym.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function Jm(t){var r=t.zb;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+j(t.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',r&&(t+=gt({label:Te("Retry")})),O(t+"</div></div></div>")}Jm.a="firebaseui.auth.soy2.page.recoverableError";function Xm(t){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+j(t.errorMessage)+"</p></div></div>",O(t)}Xm.a="firebaseui.auth.soy2.page.unrecoverableError";function Qm(t,r,o){var l=t.Qb;return r="",t="Continue with "+(j(t.jc)+"?"),l="You originally wanted to sign in with "+j(l),r+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+t+'</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rt(null)+gt({label:Te("Continue")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form></div>",O(r)}Qm.a="firebaseui.auth.soy2.page.emailMismatch";function Zm(t,r,o){var l='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=t.Sb,r=t.length;for(var u=0;u<r;u++){var d={ga:t[u]},m=o;d=d||{};var _=d.ga,w=d;w=w||{};var k="";switch(w.ga.providerId){case"google.com":k+="firebaseui-idp-google";break;case"github.com":k+="firebaseui-idp-github";break;case"facebook.com":k+="firebaseui-idp-facebook";break;case"twitter.com":k+="firebaseui-idp-twitter";break;case"phone":k+="firebaseui-idp-phone";break;case"anonymous":k+="firebaseui-idp-anonymous";break;case"password":k+="firebaseui-idp-password";break;default:k+="firebaseui-idp-generic"}w='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+ct(ne(k))+' firebaseui-id-idp-button" data-provider-id="'+ct(_.providerId)+'" style="background-color:',k=(k=d)||{},k=k.ga,w=w+ct(cf(ne(k.ta?k.ta:m.wa[k.providerId]?""+m.wa[k.providerId]:k.providerId.indexOf("saml.")==0?""+m.wa.saml:k.providerId.indexOf("oidc.")==0?""+m.wa.oidc:""+m.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var L=d;k=m,L=L||{},L=L.ga,k=xb(L.za?di(L.za):k.xa[L.providerId]?di(k.xa[L.providerId]):L.providerId.indexOf("saml.")==0?di(k.xa.saml):L.providerId.indexOf("oidc.")==0?di(k.xa.oidc):di(k.xa.password)),w=w+ct(di(k))+'"></span>',_.providerId=="password"?(w+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',_.V?w+=j(_.V):_.S?(d="Sign in with "+j(Vn(d,m)),w+=d):w+="Sign in with email",w+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',w=_.S?w+j(_.S):w+"Email",w+="</span>"):_.providerId=="phone"?(w+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',_.V?w+=j(_.V):_.S?(d="Sign in with "+j(Vn(d,m)),w+=d):w+="Sign in with phone",w+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',w=_.S?w+j(_.S):w+"Phone",w+="</span>"):_.providerId=="anonymous"?(w+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',_.V?w+=j(_.V):_.S?(d="Sign in with "+j(Vn(d,m)),w+=d):w+="Continue as guest",w+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',w=_.S?w+j(_.S):w+"Guest",w+="</span>"):(w+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',_.V?w+=j(_.V):(k="Sign in with "+j(Vn(d,m)),w+=k),w+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(_.S?j(_.S):j(Vn(d,m)))+"</span>"),_=O(w+"</button>"),l+='<li class="firebaseui-list-item">'+_+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Cr(o)+"</div></div>",O(l)}Zm.a="firebaseui.auth.soy2.page.providerSignIn";function eg(t,r,o){t=t||{};var l=t.Gb,u=t.Va;r=t.ia,t=t||{},t=t.Aa,t='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+ct(t!=null?t:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+O(t);var d;return l?d=O('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):d="",d=t+d+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(u?Rt(null):"")+gt({label:Te("Verify")})+'</div></div><div class="firebaseui-card-footer">',r?(r='<p class="firebaseui-tos firebaseui-phone-tos">',r=o.F&&o.D?r+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':r+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",o=O(r+"</p>")):o=O('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+nt(o),O(d+o+"</div></form></div>")}eg.a="firebaseui.auth.soy2.page.phoneSignInStart";function tg(t,r,o){t=t||{},r=t.phoneNumber;var l="";return t='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(j(r)+"</a>"),j(r),r=l,l=O('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),o='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+"</p>"+l+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rt(null)+gt({label:Te("Continue")})+'</div></div><div class="firebaseui-card-footer">'+nt(o)+"</div></form>",t=O('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),O(r+(o+t+"</div>"))}tg.a="firebaseui.auth.soy2.page.phoneSignInFinish";function ng(){return O('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}ng.a="firebaseui.auth.soy2.page.signOut";function ig(t,r,o){var l='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=t.ec,r=t.length;for(var u=0;u<r;u++){var d=t[u],m="",_=j(d.displayName),w=d.tenantId?d.tenantId:"top-level-project";w=Te(w),m+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+ct(w)+' firebaseui-id-tenant-selection-button"'+(d.tenantId?'data-tenant-id="'+ct(d.tenantId)+'"':"")+'style="background-color:'+ct(cf(d.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+ct(di(d.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',d.V?m+=j(d.V):(d="Sign in to "+j(d.displayName),m+=d),m=O(m+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+_+"</span></button>")),l+='<li class="firebaseui-list-item">'+m+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Cr(o)+"</div></div>",O(l)}ig.a="firebaseui.auth.soy2.page.selectTenant";function rg(t,r,o){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Sr(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+gt(null)+'</div></div><div class="firebaseui-card-footer">'+Cr(o)+"</div></form></div>",O(t)}rg.a="firebaseui.auth.soy2.page.providerMatchByEmail";function He(){return J(this,"firebaseui-id-submit")}function Ue(){return J(this,"firebaseui-id-secondary-link")}function Ke(t,r){Ie(this,He.call(this),function(l){t(l)});var o=Ue.call(this);o&&r&&Ie(this,o,function(l){r(l)})}function Xa(){return J(this,"firebaseui-id-password")}function Qa(){return J(this,"firebaseui-id-password-error")}function sg(){var t=Xa.call(this),r=Qa.call(this);Ir(this,t,function(){Er(r)&&(Re(t,!0),kt(r))})}function og(){var t=Xa.call(this),r=Qa.call(this);return Ge(t)?(Re(t,!0),kt(r),r=!0):(Re(t,!1),ze(r,ne("Enter your password").toString()),r=!1),r?Ge(t):null}function kr(t,r,o,l,u,d){C.call(this,Dm,{email:t},d,"passwordLinking",{F:l,D:u}),this.w=r,this.H=o}f(kr,C),kr.prototype.v=function(){this.P(),this.M(this.w,this.H),Tr(this,this.i(),this.w),this.i().focus(),C.prototype.v.call(this)},kr.prototype.o=function(){this.w=null,C.prototype.o.call(this)},kr.prototype.j=function(){return Ge(J(this,"firebaseui-id-email"))},ce(kr.prototype,{i:Xa,B:Qa,P:sg,u:og,ea:He,ba:Ue,M:Ke});var Jw=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function mn(){return J(this,"firebaseui-id-email")}function $n(){return J(this,"firebaseui-id-email-error")}function Rr(t){var r=mn.call(this),o=$n.call(this);Ir(this,r,function(){Er(o)&&(Re(r,!0),kt(o))}),t&&Us(this,r,function(){t()})}function Ar(){return It(Ge(mn.call(this))||"")}function Nr(){var t=mn.call(this),r=$n.call(this),o=Ge(t)||"";return o?Jw.test(o)?(Re(t,!0),kt(r),r=!0):(Re(t,!1),ze(r,ne("That email address isn't correct").toString()),r=!1):(Re(t,!1),ze(r,ne("Enter your email address to continue").toString()),r=!1),r?It(Ge(t)):null}function js(t,r,o,l,u,d,m){C.call(this,wm,{email:o,ia:!!d},m,"passwordSignIn",{F:l,D:u}),this.w=t,this.H=r}f(js,C),js.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Bs(this,this.l(),this.i()),Tr(this,this.i(),this.w),Ge(this.l())?this.i().focus():this.l().focus(),C.prototype.v.call(this)},js.prototype.o=function(){this.H=this.w=null,C.prototype.o.call(this)},ce(js.prototype,{l:mn,U:$n,P:Rr,M:Ar,j:Nr,i:Xa,B:Qa,ea:sg,u:og,ua:He,pa:Ue,ba:Ke});function se(t,r,o,l,u,d){C.call(this,t,r,l,u||"notice",d),this.i=o||null}W(se,C),se.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),se.K.v.call(this)},se.prototype.o=function(){this.i=null,se.K.o.call(this)},ce(se.prototype,{l:He,w:Ue,u:Ke});function Za(t,r,o,l,u){se.call(this,Sm,{email:t,G:!!r},r,u,"passwordRecoveryEmailSent",{F:o,D:l})}W(Za,se);function ag(t,r){se.call(this,$m,{G:!!t},t,r,"emailVerificationSuccess")}W(ag,se);function lg(t,r){se.call(this,Gm,{G:!!t},t,r,"emailVerificationFailure")}W(lg,se);function cg(t,r,o){se.call(this,zm,{email:t,G:!!r},r,o,"verifyAndChangeEmailSuccess")}W(cg,se);function ug(t,r){se.call(this,Km,{G:!!t},t,r,"verifyAndChangeEmailFailure")}W(ug,se);function dg(t,r){se.call(this,Ym,{G:!!t},t,r,"revertSecondFactorAdditionFailure")}W(dg,se);function hg(t){se.call(this,ng,void 0,void 0,t,"signOut")}W(hg,se);function fg(t,r){se.call(this,jm,{G:!!t},t,r,"passwordResetSuccess")}W(fg,se);function pg(t,r){se.call(this,Wm,{G:!!t},t,r,"passwordResetFailure")}W(pg,se);function mg(t,r){se.call(this,Vm,{G:!!t},t,r,"emailChangeRevokeFailure")}W(mg,se);function gg(t,r,o){se.call(this,Jm,{errorMessage:t,zb:!!r},r,o,"recoverableError")}W(gg,se);function vg(t,r){se.call(this,Xm,{errorMessage:t},void 0,r,"unrecoverableError")}W(vg,se);function Ws(t){if(t.code==="auth/invalid-credential"&&t.message&&t.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(t.message&&t.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var r=JSON.parse(t.message.substring(t.message.indexOf("{"),t.message.lastIndexOf("}")+1));return{code:t.code,message:r&&r.error&&r.error.message||t.message}}return t}function gn(t,r,o,l){function u(m){if(!m.name||m.name!="cancel"){e:{var _=m.message;try{var w=((JSON.parse(_).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(w&&w.length){var k=!0;break e}}catch{}k=!1}if(k)m=ye(r),r.m(),pe(t,m,void 0,ne("Your sign-in session has expired. Please try again.").toString());else{if(k=m&&m.message||"",m.code){if(m.code=="auth/email-already-in-use"||m.code=="auth/credential-already-in-use")return;k=le(m)}r.a(k)}}}if(Bg(t),l)return _g(t,o),ke();if(!o.credential)throw Error("No credential found!");if(!Y(t).currentUser&&!o.user)throw Error("User not logged in.");try{var d=R1(t,o)}catch(m){return Ct(m.code||m.message,m),r.a(m.code||m.message),ke()}return o=d.then(function(m){_g(t,m)},u).then(void 0,u),$(t,d),ke(o)}function _g(t,r){if(!r.user)throw Error("No user found");var o=jp(T(t));if(gu(T(t))&&o&&Hn("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),o){o=jp(T(t));var l=yp(B(t))||void 0;mt(ks,B(t));var u=!1;Bf()?((!o||o(r,l))&&(u=!0,tr(window.opener.location,el(t,l))),o||window.close()):(!o||o(r,l))&&(u=!0,tr(window.location,el(t,l))),u||t.reset()}else{o=r.user,r=r.credential,l=gu(T(t)),u=yp(B(t))||void 0,mt(ks,B(t));var d=!1;Bf()?((!l||l(o,r,u))&&(d=!0,tr(window.opener.location,el(t,u))),l||window.close()):(!l||l(o,r,u))&&(d=!0,tr(window.location,el(t,u))),d||t.reset()}}function el(t,r){if(t=r||T(t).a.get("signInSuccessUrl"),!t)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return t}function le(t){var r={code:t.code};r=r||{};var o="";switch(r.code){case"auth/email-already-in-use":o+="The email address is already used by another account";break;case"auth/requires-recent-login":o+=pf();break;case"auth/too-many-requests":o+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":o+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":o+="That email address doesn't match an existing account";break;case"auth/user-token-expired":o+=pf();break;case"auth/weak-password":o+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":o+="The email and password you entered don't match";break;case"auth/network-request-failed":o+="A network error has occurred";break;case"auth/invalid-phone-number":o+=Nc();break;case"auth/invalid-verification-code":o+=ne("Wrong code. Try again.");break;case"auth/code-expired":o+="This code is no longer valid";break;case"auth/expired-action-code":o+="This code has expired.";break;case"auth/invalid-action-code":o+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(r=ne(o).toString())return r;try{return JSON.parse(t.message),Ct("Internal error: "+t.message,void 0),df().toString()}catch{return t.message}}function Xw(t,r,o){var l=fr[r]&&x.auth[fr[r]]?new x.auth[fr[r]]:r.indexOf("saml.")==0?new x.auth.SAMLAuthProvider(r):new x.auth.OAuthProvider(r);if(!l)throw Error("Invalid Firebase Auth provider!");var u=Mp(T(t),r);if(l.addScope)for(var d=0;d<u.length;d++)l.addScope(u[d]);return u=xp(T(t),r)||{},o&&(r==x.auth.GoogleAuthProvider.PROVIDER_ID?t="login_hint":r==x.auth.GithubAuthProvider.PROVIDER_ID?t="login":t=(t=Ns(T(t),r))&&t.Ob,t&&(u[t]=o)),l.setCustomParameters&&l.setCustomParameters(u),l}function Hs(t,r,o,l){function u(){Cw(new ip(t.h.tenantId||null),B(t)),$(t,r.I(Z(t.dc,t),[w],function(){if((window.location&&window.location.protocol)==="file:")return $(t,Lg(t).then(function(k){r.m(),mt(vi,B(t)),D("callback",t,_,ke(k))},d))},m))}function d(k){if(mt(vi,B(t)),!k.name||k.name!="cancel")switch(k=Ws(k),k.code){case"auth/popup-blocked":u();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":r.a(le(k));break;case"auth/admin-restricted-operation":r.m(),yi(T(t))?D("handleUnauthorizedUser",t,_,null,o):D("callback",t,_,nr(k));break;default:r.m(),D("callback",t,_,nr(k))}}function m(k){mt(vi,B(t)),k.name&&k.name=="cancel"||(Ct("signInWithRedirect: "+k.code,void 0),k=le(k),r.Ga=="blank"&&mu(T(t))?(r.m(),D("providerSignIn",t,_,k)):r.a(k))}var _=ye(r),w=Xw(t,o,l);Bp(T(t))==$a?u():$(t,k1(t,w).then(function(k){r.m(),D("callback",t,_,ke(k))},d))}function Qw(t,r){$(t,r.I(Z(t.$b,t),[],function(o){return r.m(),gn(t,r,o,!0)},function(o){o.name&&o.name=="cancel"||(Ct("ContinueAsGuest: "+o.code,void 0),o=le(o),r.a(o))}))}function Zw(t,r,o){function l(d){var m=!1;return d=r.I(Z(t.ac,t),[d],function(_){var w=ye(r);r.m(),D("callback",t,w,ke(_)),m=!0},function(_){if((!_.name||_.name!="cancel")&&(!_||_.code!="auth/credential-already-in-use"))if(_&&_.code=="auth/email-already-in-use"&&_.email&&_.credential){var w=ye(r);r.m(),D("callback",t,w,nr(_))}else _&&_.code=="auth/admin-restricted-operation"&&yi(T(t))?(_=ye(r),r.m(),D("handleUnauthorizedUser",t,_,null,x.auth.GoogleAuthProvider.PROVIDER_ID)):(_=le(_),r.a(_))}),$(t,d),d.then(function(){return m},function(){return!1})}if(o&&o.credential&&o.clientId===Dp(T(t))){if(Mp(T(t),x.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var u=JSON.parse(atob(o.credential.split(".")[1])).email}catch{}return Hs(t,r,x.auth.GoogleAuthProvider.PROVIDER_ID,u),ke(!0)}return l(x.auth.GoogleAuthProvider.credential(o.credential))}return o&&r.a(ne("The selected credential for the authentication provider is not supported!").toString()),ke(!1)}function e1(t,r){var o=r.j(),l=r.u();if(o)if(l){var u=x.auth.EmailAuthProvider.credential(o,l);$(t,r.I(Z(t.bc,t),[o,l],function(d){return gn(t,r,{user:d.user,credential:u,operationType:d.operationType,additionalUserInfo:d.additionalUserInfo})},function(d){if(!d.name||d.name!="cancel")switch(d.code){case"auth/email-already-in-use":break;case"auth/email-exists":Re(r.l(),!1),ze(r.U(),le(d));break;case"auth/too-many-requests":case"auth/wrong-password":Re(r.i(),!1),ze(r.B(),le(d));break;default:Ct("verifyPassword: "+d.message,void 0),r.a(le(d))}}))}else r.i().focus();else r.l().focus()}function tl(t){return t=pr(T(t)),t.length==1&&t[0]==x.auth.EmailAuthProvider.PROVIDER_ID}function yg(t){return t=pr(T(t)),t.length==1&&t[0]==x.auth.PhoneAuthProvider.PROVIDER_ID}function pe(t,r,o,l){tl(t)?l?D("signIn",t,r,o,l):Ou(t,r,o):t&&yg(t)&&!l?D("phoneSignInStart",t,r):t&&mu(T(t))&&!l?D("federatedRedirect",t,r,o):D("providerSignIn",t,r,l,o)}function bg(t,r,o,l){var u=ye(r);$(t,r.I(Z(Y(t).fetchSignInMethodsForEmail,Y(t)),[o],function(d){r.m(),wg(t,u,d,o,l)},function(d){d=le(d),r.a(d)}))}function wg(t,r,o,l,u,d){o.length||mr(T(t))&&!mr(T(t))?Dt(o,x.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?D("passwordSignIn",t,r,l,d):o.length==1&&o[0]===x.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?mr(T(t))?D("sendEmailLinkForSignIn",t,r,l,function(){D("signIn",t,r)}):D("unsupportedProvider",t,r,l):(o=Np(o,pr(T(t))))?(bp(new nu(l),B(t)),D("federatedSignIn",t,r,l,o,u)):D("unsupportedProvider",t,r,l):Lp(T(t))?D("handleUnauthorizedUser",t,r,l,x.auth.EmailAuthProvider.PROVIDER_ID):mr(T(t))?D("sendEmailLinkForSignIn",t,r,l,function(){D("signIn",t,r)}):D("passwordSignUp",t,r,l,void 0,void 0,d)}function Pu(t,r,o,l,u,d){var m=ye(r);$(t,r.I(Z(t.Ib,t),[o,d],function(){r.m(),D("emailLinkSignInSent",t,m,o,l,d)},u))}function Ou(t,r,o){o?D("prefilledEmailSignIn",t,r,o):D("signIn",t,r)}function Vs(){return ia(pn(),"oobCode")}function Du(){var t=ia(pn(),"continueUrl");return t?function(){tr(window.location,t)}:null}function $s(t,r){C.call(this,Om,void 0,r,"anonymousUserMismatch"),this.i=t}f($s,C),$s.prototype.v=function(){var t=this;Ie(this,this.l(),function(){t.i()}),this.l().focus(),C.prototype.v.call(this)},$s.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce($s.prototype,{l:Ue}),ie.anonymousUserMismatch=function(t,r){var o=new $s(function(){o.m(),pe(t,r)});o.render(r),G(t,o)};function nl(t){C.call(this,Cm,void 0,t,"callback")}f(nl,C),nl.prototype.I=function(t,r,o,l){return t.apply(null,r).then(o,l)};function Ig(t,r,o){if(o.user){var l={user:o.user,credential:o.credential,operationType:o.operationType,additionalUserInfo:o.additionalUserInfo},u=Qt(B(t)),d=u&&u.g;if(d&&!n1(o.user,d))t1(t,r,l);else{var m=u&&u.a;m?$(t,o.user.linkWithCredential(m).then(function(_){l={user:_.user,credential:m,operationType:_.operationType,additionalUserInfo:_.additionalUserInfo},Eg(t,r,l)},function(_){il(t,r,_)})):Eg(t,r,l)}}else o=ye(r),r.m(),Zt(B(t)),pe(t,o)}function Eg(t,r,o){Zt(B(t)),gn(t,r,o)}function il(t,r,o){var l=ye(r);Zt(B(t)),o=le(o),r.m(),pe(t,l,void 0,o)}function Sg(t,r,o,l){var u=ye(r);$(t,Y(t).fetchSignInMethodsForEmail(o).then(function(d){r.m(),d.length?Dt(d,x.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?D("passwordLinking",t,u,o):d.length==1&&d[0]===x.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?D("emailLinkSignInLinking",t,u,o):(d=Np(d,pr(T(t))))?D("federatedLinking",t,u,o,d,l):(Zt(B(t)),D("unsupportedProvider",t,u,o)):(Zt(B(t)),D("passwordRecovery",t,u,o,!1,hf().toString()))},function(d){il(t,r,d)}))}function t1(t,r,o){var l=ye(r);$(t,Gn(t).then(function(){r.m(),D("emailMismatch",t,l,o)},function(u){u.name&&u.name=="cancel"||(u=le(u.code),r.a(u))}))}function n1(t,r){if(r==t.email)return!0;if(t.providerData){for(var o=0;o<t.providerData.length;o++)if(r==t.providerData[o].email)return!0}return!1}ie.callback=function(t,r,o){var l=new nl;l.render(r),G(t,l),o=o||Lg(t),$(t,o.then(function(u){Ig(t,l,u)},function(u){if((u=Ws(u))&&(u.code=="auth/account-exists-with-different-credential"||u.code=="auth/email-already-in-use")&&u.email&&u.credential)bp(new nu(u.email,u.credential),B(t)),Sg(t,l,u.email);else if(u&&u.code=="auth/user-cancelled"){var d=Qt(B(t)),m=le(u);d&&d.a?Sg(t,l,d.g,m):d?bg(t,l,d.g,m):il(t,l,u)}else u&&u.code=="auth/credential-already-in-use"||(u&&u.code=="auth/operation-not-supported-in-this-environment"&&tl(t)?Ig(t,l,{user:null,credential:null}):u&&u.code=="auth/admin-restricted-operation"&&yi(T(t))?(l.m(),Zt(B(t)),D("handleUnauthorizedUser",t,r,null,null)):il(t,l,u))}))};function Gs(t,r){C.call(this,Pm,void 0,r,"differentDeviceError"),this.i=t}f(Gs,C),Gs.prototype.v=function(){var t=this;Ie(this,this.l(),function(){t.i()}),this.l().focus(),C.prototype.v.call(this)},Gs.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(Gs.prototype,{l:Ue}),ie.differentDeviceError=function(t,r){var o=new Gs(function(){o.m(),pe(t,r)});o.render(r),G(t,o)};function zs(t,r,o,l){C.call(this,Hm,{email:t,G:!!o},l,"emailChangeRevoke"),this.l=r,this.i=o||null}f(zs,C),zs.prototype.v=function(){var t=this;Ie(this,J(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),C.prototype.v.call(this)},zs.prototype.o=function(){this.l=this.i=null,C.prototype.o.call(this)},ce(zs.prototype,{u:He,B:Ue,w:Ke});function Ks(){return J(this,"firebaseui-id-new-password")}function rl(){return J(this,"firebaseui-id-password-toggle")}function i1(){this.Ra=!this.Ra;var t=rl.call(this),r=Ks.call(this);this.Ra?(r.type="text",en(t,"firebaseui-input-toggle-off"),tn(t,"firebaseui-input-toggle-on")):(r.type="password",en(t,"firebaseui-input-toggle-on"),tn(t,"firebaseui-input-toggle-off")),r.focus()}function sl(){return J(this,"firebaseui-id-new-password-error")}function Cg(){this.Ra=!1;var t=Ks.call(this);t.type="password";var r=sl.call(this);Ir(this,t,function(){Er(r)&&(Re(t,!0),kt(r))});var o=rl.call(this);en(o,"firebaseui-input-toggle-on"),tn(o,"firebaseui-input-toggle-off"),Gw(this,t,function(){en(o,"firebaseui-input-toggle-focus"),tn(o,"firebaseui-input-toggle-blur")}),zw(this,t,function(){en(o,"firebaseui-input-toggle-blur"),tn(o,"firebaseui-input-toggle-focus")}),Ie(this,o,Z(i1,this))}function Tg(){var t=Ks.call(this),r=sl.call(this);return Ge(t)?(Re(t,!0),kt(r),r=!0):(Re(t,!1),ze(r,ne("Enter your password").toString()),r=!1),r?Ge(t):null}function qs(t,r,o){C.call(this,Bm,{email:t},o,"passwordReset"),this.l=r}f(qs,C),qs.prototype.v=function(){this.H(),this.B(this.l),Tr(this,this.i(),this.l),this.i().focus(),C.prototype.v.call(this)},qs.prototype.o=function(){this.l=null,C.prototype.o.call(this)},ce(qs.prototype,{i:Ks,w:sl,M:rl,H:Cg,u:Tg,U:He,P:Ue,B:Ke});function Ys(t,r,o,l,u){C.call(this,qm,{factorId:t,phoneNumber:o||null,G:!!l},u,"revertSecondFactorAdditionSuccess"),this.l=r,this.i=l||null}f(Ys,C),Ys.prototype.v=function(){var t=this;Ie(this,J(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),C.prototype.v.call(this)},Ys.prototype.o=function(){this.l=this.i=null,C.prototype.o.call(this)},ce(Ys.prototype,{u:He,B:Ue,w:Ke});function r1(t,r,o,l,u){var d=o.u();d&&$(t,o.I(Z(Y(t).confirmPasswordReset,Y(t)),[l,d],function(){o.m();var m=new fg(u);m.render(r),G(t,m)},function(m){kg(t,r,o,m)}))}function kg(t,r,o,l){(l&&l.code)=="auth/weak-password"?(t=le(l),Re(o.i(),!1),ze(o.w(),t),o.i().focus()):(o&&o.m(),o=new pg,o.render(r),G(t,o))}function s1(t,r,o){var l=new zs(o,function(){$(t,l.I(Z(Y(t).sendPasswordResetEmail,Y(t)),[o],function(){l.m(),l=new Za(o,void 0,Ne(T(t)),Pe(T(t))),l.render(r),G(t,l)},function(){l.a(uf().toString())}))});l.render(r),G(t,l)}function o1(t,r,o,l){var u=new Ys(l.factorId,function(){u.I(Z(Y(t).sendPasswordResetEmail,Y(t)),[o],function(){u.m(),u=new Za(o,void 0,Ne(T(t)),Pe(T(t))),u.render(r),G(t,u)},function(){u.a(uf().toString())})},l.phoneNumber);u.render(r),G(t,u)}ie.passwordReset=function(t,r,o,l){$(t,Y(t).verifyPasswordResetCode(o).then(function(u){var d=new qs(u,function(){r1(t,r,d,o,l)});d.render(r),G(t,d)},function(){kg(t,r)}))},ie.emailChangeRevocation=function(t,r,o){var l=null;$(t,Y(t).checkActionCode(o).then(function(u){return l=u.data.email,Y(t).applyActionCode(o)}).then(function(){s1(t,r,l)},function(){var u=new mg;u.render(r),G(t,u)}))},ie.emailVerification=function(t,r,o,l){$(t,Y(t).applyActionCode(o).then(function(){var u=new ag(l);u.render(r),G(t,u)},function(){var u=new lg;u.render(r),G(t,u)}))},ie.revertSecondFactorAddition=function(t,r,o){var l=null,u=null;$(t,Y(t).checkActionCode(o).then(function(d){return l=d.data.email,u=d.data.multiFactorInfo,Y(t).applyActionCode(o)}).then(function(){o1(t,r,l,u)},function(){var d=new dg;d.render(r),G(t,d)}))},ie.verifyAndChangeEmail=function(t,r,o,l){var u=null;$(t,Y(t).checkActionCode(o).then(function(d){return u=d.data.email,Y(t).applyActionCode(o)}).then(function(){var d=new cg(u,l);d.render(r),G(t,d)},function(){var d=new ug;d.render(r),G(t,d)}))};function ol(t,r){try{var o=typeof t.selectionStart=="number"}catch{o=!1}o?(t.selectionStart=r,t.selectionEnd=r):Ce&&!li("9")&&(t.type=="textarea"&&(r=t.value.substring(0,r).replace(/(\r\n|\r|\n)/g,`
`).length),t=t.createTextRange(),t.collapse(!0),t.move("character",r),t.select())}function Js(t,r,o,l,u,d){C.call(this,Nm,{email:o},d,"emailLinkSignInConfirmation",{F:l,D:u}),this.l=t,this.u=r}f(Js,C),Js.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),ol(this.i(),(this.i().value||"").length),C.prototype.v.call(this)},Js.prototype.o=function(){this.u=this.l=null,C.prototype.o.call(this)},ce(Js.prototype,{i:mn,M:$n,w:Rr,H:Ar,j:Nr,U:He,P:Ue,B:Ke}),ie.emailLinkConfirmation=function(t,r,o,l,u,d){var m=new Js(function(){var _=m.j();_?(m.m(),l(t,r,_,o)):m.i().focus()},function(){m.m(),pe(t,r,u||void 0)},u||void 0,Ne(T(t)),Pe(T(t)));m.render(r),G(t,m),d&&m.a(d)};function Xs(t,r,o,l,u){C.call(this,Mm,{ga:t},u,"emailLinkSignInLinkingDifferentDevice",{F:o,D:l}),this.i=r}f(Xs,C),Xs.prototype.v=function(){this.u(this.i),this.l().focus(),C.prototype.v.call(this)},Xs.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(Xs.prototype,{l:He,u:Ke}),ie.emailLinkNewDeviceLinking=function(t,r,o,l){var u=new ai(o);if(o=u.a.a.get(Me.PROVIDER_ID)||null,jh(u,null),o){var d=new Xs(Ns(T(t),o),function(){d.m(),l(t,r,u.toString())},Ne(T(t)),Pe(T(t)));d.render(r),G(t,d)}else pe(t,r)};function al(t){C.call(this,km,void 0,t,"blank")}f(al,C);function Lu(t,r,o,l,u){var d=new al,m=new ai(o),_=m.a.a.get(Me.$a)||"",w=m.a.a.get(Me.Sa)||"",k=m.a.a.get(Me.Qa)==="1",L=Bh(m),oe=m.a.a.get(Me.PROVIDER_ID)||null;m=m.a.a.get(Me.vb)||null,jg(t,m);var $t=!dr(ur,B(t)),Gg=l||Tw(w,B(t)),uo=(l=kw(w,B(t)))&&l.a;oe&&uo&&uo.providerId!==oe&&(uo=null),d.render(r),G(t,d),$(t,d.I(function(){var Lt=ke(null);Lt=L&&$t||$t&&k?nr(Error("anonymous-user-not-found")):S1(t,o).then(function(Gu){if(oe&&!uo)throw Error("pending-credential-not-found");return Gu});var ho=null;return Lt.then(function(Gu){return ho=Gu,u?null:Y(t).checkActionCode(_)}).then(function(){return ho})},[],function(Lt){Gg?l1(t,d,Gg,o,uo,Lt):k?(d.m(),D("differentDeviceError",t,r)):(d.m(),D("emailLinkConfirmation",t,r,o,Rg))},function(Lt){var ho=void 0;if(!Lt||!Lt.name||Lt.name!="cancel")switch(d.m(),Lt&&Lt.message){case"anonymous-user-not-found":D("differentDeviceError",t,r);break;case"anonymous-user-mismatch":D("anonymousUserMismatch",t,r);break;case"pending-credential-not-found":D("emailLinkNewDeviceLinking",t,r,o,a1);break;default:Lt&&(ho=le(Lt)),pe(t,r,void 0,ho)}}))}function Rg(t,r,o,l){Lu(t,r,l,o,!0)}function a1(t,r,o){Lu(t,r,o)}function l1(t,r,o,l,u,d){var m=ye(r);r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ne("Signing in...").toString());var _=null;u=(d?C1(t,d,o,l,u):T1(t,o,l,u)).then(function(w){mt(Rs,B(t)),mt(ur,B(t)),r.h(),r.$("firebaseui-icon-done",ne("Signed in!").toString()),_=setTimeout(function(){r.h(),gn(t,r,w,!0)},1e3),$(t,function(){r&&(r.h(),r.m()),clearTimeout(_)})},function(w){if(r.h(),r.m(),!w.name||w.name!="cancel"){w=Ws(w);var k=le(w);w.code=="auth/email-already-in-use"||w.code=="auth/credential-already-in-use"?(mt(Rs,B(t)),mt(ur,B(t))):w.code=="auth/invalid-email"?(k=ne("The email provided does not match the current sign-in session.").toString(),D("emailLinkConfirmation",t,m,l,Rg,null,k)):pe(t,m,o,k)}}),$(t,u)}ie.emailLinkSignInCallback=Lu;function Qs(t,r,o,l,u,d){C.call(this,Lm,{email:t,ga:r},d,"emailLinkSignInLinking",{F:l,D:u}),this.i=o}f(Qs,C),Qs.prototype.v=function(){this.u(this.i),this.l().focus(),C.prototype.v.call(this)},Qs.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(Qs.prototype,{l:He,u:Ke});function c1(t,r,o,l){var u=ye(r);Pu(t,r,o,function(){pe(t,u,o)},function(d){if(!d.name||d.name!="cancel"){var m=le(d);d&&d.code=="auth/network-request-failed"?r.a(m):(r.m(),pe(t,u,o,m))}},l)}ie.emailLinkSignInLinking=function(t,r,o){var l=Qt(B(t));if(Zt(B(t)),l){var u=l.a.providerId,d=new Qs(o,Ns(T(t),u),function(){c1(t,d,o,l)},Ne(T(t)),Pe(T(t)));d.render(r),G(t,d)}else pe(t,r)};function Zs(t,r,o,l,u,d){C.call(this,Rm,{email:t},d,"emailLinkSignInSent",{F:l,D:u}),this.u=r,this.i=o}f(Zs,C),Zs.prototype.v=function(){var t=this;Ie(this,this.l(),function(){t.i()}),Ie(this,J(this,"firebaseui-id-trouble-getting-email-link"),function(){t.u()}),this.l().focus(),C.prototype.v.call(this)},Zs.prototype.o=function(){this.i=this.u=null,C.prototype.o.call(this)},ce(Zs.prototype,{l:Ue}),ie.emailLinkSignInSent=function(t,r,o,l,u){var d=new Zs(o,function(){d.m(),D("emailNotReceived",t,r,o,l,u)},function(){d.m(),l()},Ne(T(t)),Pe(T(t)));d.render(r),G(t,d)};function eo(t,r,o,l,u,d,m){C.call(this,Qm,{jc:t,Qb:r},m,"emailMismatch",{F:u,D:d}),this.l=o,this.i=l}f(eo,C),eo.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),C.prototype.v.call(this)},eo.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(eo.prototype,{u:He,B:Ue,w:Ke}),ie.emailMismatch=function(t,r,o){var l=Qt(B(t));if(l){var u=new eo(o.user.email,l.g,function(){var d=u;Zt(B(t)),gn(t,d,o)},function(){var d=o.credential.providerId,m=ye(u);u.m(),l.a?D("federatedLinking",t,m,l.g,d):D("federatedSignIn",t,m,l.g,d)},Ne(T(t)),Pe(T(t)));u.render(r),G(t,u)}else pe(t,r)};function Pr(t,r,o,l,u){C.call(this,Am,void 0,u,"emailNotReceived",{F:o,D:l}),this.l=t,this.i=r}f(Pr,C),Pr.prototype.v=function(){var t=this;Ie(this,this.u(),function(){t.i()}),Ie(this,this.Da(),function(){t.l()}),this.u().focus(),C.prototype.v.call(this)},Pr.prototype.Da=function(){return J(this,"firebaseui-id-resend-email-link")},Pr.prototype.o=function(){this.i=this.l=null,C.prototype.o.call(this)},ce(Pr.prototype,{u:Ue}),ie.emailNotReceived=function(t,r,o,l,u){var d=new Pr(function(){Pu(t,d,o,l,function(m){m=le(m),d.a(m)},u)},function(){d.m(),pe(t,r,o)},Ne(T(t)),Pe(T(t)));d.render(r),G(t,d)};function Or(t,r,o,l,u,d){C.call(this,xm,{email:t,ga:r},d,"federatedLinking",{F:l,D:u}),this.i=o}f(Or,C),Or.prototype.v=function(){this.u(this.i),this.l().focus(),C.prototype.v.call(this)},Or.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(Or.prototype,{l:He,u:Ke}),ie.federatedLinking=function(t,r,o,l,u){var d=Qt(B(t));if(d&&d.a){var m=new Or(o,Ns(T(t),l),function(){Hs(t,m,l,o)},Ne(T(t)),Pe(T(t)));m.render(r),G(t,m),u&&m.a(u)}else pe(t,r)},ie.federatedRedirect=function(t,r,o){var l=new al;l.render(r),G(t,l),r=pr(T(t))[0],Hs(t,l,r,o)},ie.federatedSignIn=function(t,r,o,l,u){var d=new Or(o,Ns(T(t),l),function(){Hs(t,d,l,o)},Ne(T(t)),Pe(T(t)));d.render(r),G(t,d),u&&d.a(u)};function u1(t,r,o,l){var u=r.u();u?$(t,r.I(Z(t.Xb,t),[o,u],function(d){return d=d.user.linkWithCredential(l).then(function(m){return gn(t,r,{user:m.user,credential:l,operationType:m.operationType,additionalUserInfo:m.additionalUserInfo})}),$(t,d),d},function(d){if(!d.name||d.name!="cancel")switch(d.code){case"auth/wrong-password":Re(r.i(),!1),ze(r.B(),le(d));break;case"auth/too-many-requests":r.a(le(d));break;default:Ct("signInWithEmailAndPassword: "+d.message,void 0),r.a(le(d))}})):r.i().focus()}ie.passwordLinking=function(t,r,o){var l=Qt(B(t));Zt(B(t));var u=l&&l.a;if(u){var d=new kr(o,function(){u1(t,d,o,u)},function(){d.m(),D("passwordRecovery",t,r,o)},Ne(T(t)),Pe(T(t)));d.render(r),G(t,d)}else pe(t,r)};function to(t,r,o,l,u,d){C.call(this,Em,{email:o,Ta:!!r},d,"passwordRecovery",{F:l,D:u}),this.l=t,this.u=r}f(to,C),to.prototype.v=function(){this.B(),this.H(this.l,this.u),Ge(this.i())||this.i().focus(),Tr(this,this.i(),this.l),C.prototype.v.call(this)},to.prototype.o=function(){this.u=this.l=null,C.prototype.o.call(this)},ce(to.prototype,{i:mn,w:$n,B:Rr,M:Ar,j:Nr,U:He,P:Ue,H:Ke});function d1(t,r){var o=r.j();if(o){var l=ye(r);$(t,r.I(Z(Y(t).sendPasswordResetEmail,Y(t)),[o],function(){r.m();var u=new Za(o,function(){u.m(),pe(t,l)},Ne(T(t)),Pe(T(t)));u.render(l),G(t,u)},function(u){Re(r.i(),!1),ze(r.w(),le(u))}))}else r.i().focus()}ie.passwordRecovery=function(t,r,o,l,u){var d=new to(function(){d1(t,d)},l?void 0:function(){d.m(),pe(t,r)},o,Ne(T(t)),Pe(T(t)));d.render(r),G(t,d),u&&d.a(u)},ie.passwordSignIn=function(t,r,o,l){var u=new js(function(){e1(t,u)},function(){var d=u.M();u.m(),D("passwordRecovery",t,r,d)},o,Ne(T(t)),Pe(T(t)),l);u.render(r),G(t,u)};function Mu(){return J(this,"firebaseui-id-name")}function xu(){return J(this,"firebaseui-id-name-error")}function no(t,r,o,l,u,d,m,_,w){C.call(this,Im,{email:l,Tb:t,name:u,Ta:!!o,ia:!!_},w,"passwordSignUp",{F:d,D:m}),this.w=r,this.H=o,this.B=t}f(no,C),no.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Bs(this,this.i(),this.u()),Bs(this,this.u(),this.l())):Bs(this,this.i(),this.l()),this.w&&Tr(this,this.l(),this.w),Ge(this.i())?this.B&&!Ge(this.u())?this.u().focus():this.l().focus():this.i().focus(),C.prototype.v.call(this)},no.prototype.o=function(){this.H=this.w=null,C.prototype.o.call(this)},ce(no.prototype,{i:mn,U:$n,ea:Rr,jb:Ar,j:Nr,u:Mu,Bc:xu,Ja:function(){var t=Mu.call(this),r=xu.call(this);Ir(this,t,function(){Er(r)&&(Re(t,!0),kt(r))})},M:function(){var t=Mu.call(this),r=xu.call(this),o=Ge(t);return o=!/^[\s\xa0]*$/.test(o==null?"":String(o)),Re(t,o),o?(kt(r),r=!0):(ze(r,ne("Enter your account name").toString()),r=!1),r?It(Ge(t)):null},l:Ks,ba:sl,lb:rl,ua:Cg,P:Tg,Nb:He,Mb:Ue,pa:Ke});function h1(t,r){var o=Up(T(t)),l=r.j(),u=null;o&&(u=r.M());var d=r.P();if(l){if(o)if(u)u=Yi(u);else{r.u().focus();return}if(d){var m=x.auth.EmailAuthProvider.credential(l,d);$(t,r.I(Z(t.Yb,t),[l,d],function(_){var w={user:_.user,credential:m,operationType:_.operationType,additionalUserInfo:_.additionalUserInfo};return o?(_=_.user.updateProfile({displayName:u}).then(function(){return gn(t,r,w)}),$(t,_),_):gn(t,r,w)},function(_){if(!_.name||_.name!="cancel"){var w=Ws(_);switch(_=le(w),w.code){case"auth/email-already-in-use":return f1(t,r,l,w);case"auth/too-many-requests":_=ne("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Re(r.l(),!1),ze(r.ba(),_);break;case"auth/admin-restricted-operation":yi(T(t))?(_=ye(r),r.m(),D("handleUnauthorizedUser",t,_,l,x.auth.EmailAuthProvider.PROVIDER_ID)):r.a(_);break;default:w="setAccountInfo: "+pp(w),Ct(w,void 0),r.a(_)}}}))}else r.l().focus()}else r.i().focus()}function f1(t,r,o,l){function u(){var m=le(l);Re(r.i(),!1),ze(r.U(),m),r.i().focus()}var d=Y(t).fetchSignInMethodsForEmail(o).then(function(m){m.length?u():(m=ye(r),r.m(),D("passwordRecovery",t,m,o,!1,hf().toString()))},function(){u()});return $(t,d),d}ie.passwordSignUp=function(t,r,o,l,u,d){function m(){_.m(),pe(t,r)}var _=new no(Up(T(t)),function(){h1(t,_)},u?void 0:m,o,l,Ne(T(t)),Pe(T(t)),d);_.render(r),G(t,_)};function Fu(){return J(this,"firebaseui-id-phone-confirmation-code")}function Ag(){return J(this,"firebaseui-id-phone-confirmation-code-error")}function Ng(){return J(this,"firebaseui-id-resend-countdown")}function Dr(t,r,o,l,u,d,m,_,w){C.call(this,tg,{phoneNumber:u},w,"phoneSignInFinish",{F:m,D:_}),this.jb=d,this.i=new Ga(1e3),this.B=d,this.P=t,this.l=r,this.H=o,this.M=l}f(Dr,C),Dr.prototype.v=function(){var t=this;this.U(this.jb),jt(this.i,"tick",this.w,!1,this),this.i.start(),Ie(this,J(this,"firebaseui-id-change-phone-number-link"),function(){t.P()}),Ie(this,this.Da(),function(){t.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),C.prototype.v.call(this)},Dr.prototype.o=function(){this.M=this.H=this.l=this.P=null,za(this.i),fi(this.i,"tick",this.w),this.i=null,C.prototype.o.call(this)},Dr.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(za(this.i),fi(this.i,"tick",this.w),this.ua(),this.lb())},ce(Dr.prototype,{u:Fu,pa:Ag,Ja:function(t){var r=Fu.call(this),o=Ag.call(this);Ir(this,r,function(){Er(o)&&(Re(r,!0),kt(o))}),t&&Us(this,r,function(){t()})},ba:function(){var t=It(Ge(Fu.call(this))||"");return/^\d{6}$/.test(t)?t:null},Fb:Ng,U:function(t){Tc(Ng.call(this),ne("Resend code in "+((9<t?"0:":"0:0")+t)).toString())},ua:function(){kt(this.Fb())},Da:function(){return J(this,"firebaseui-id-resend-link")},lb:function(){ze(this.Da())},Nb:He,Mb:Ue,ea:Ke});function p1(t,r,o,l){function u(m){r.u().focus(),Re(r.u(),!1),ze(r.pa(),m)}var d=r.ba();d?(r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ne("Verifying...").toString()),$(t,r.I(Z(l.confirm,l),[d],function(m){r.h(),r.$("firebaseui-icon-done",ne("Verified!").toString());var _=setTimeout(function(){r.h(),r.m();var w={user:Ht(t).currentUser,credential:null,operationType:m.operationType,additionalUserInfo:m.additionalUserInfo};gn(t,r,w,!0)},1e3);$(t,function(){r&&r.h(),clearTimeout(_)})},function(m){if(m.name&&m.name=="cancel")r.h();else{var _=Ws(m);switch(m=le(_),_.code){case"auth/credential-already-in-use":r.h();break;case"auth/code-expired":_=ye(r),r.h(),r.m(),D("phoneSignInStart",t,_,o,m);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":r.h(),u(m);break;default:r.h(),r.a(m)}}}))):u(ne("Wrong code. Try again.").toString())}ie.phoneSignInFinish=function(t,r,o,l,u,d){var m=new Dr(function(){m.m(),D("phoneSignInStart",t,r,o)},function(){p1(t,m,o,u)},function(){m.m(),pe(t,r)},function(){m.m(),D("phoneSignInStart",t,r,o)},fu(o),l,Ne(T(t)),Pe(T(t)));m.render(r),G(t,m),d&&m.a(d)};var m1=!Ce&&!(q("Safari")&&!(Vh()||q("Coast")||q("Opera")||q("Edge")||q("Firefox")||q("FxiOS")||q("Silk")||q("Android")));function ll(t,r){return/-[a-z]/.test(r)?null:m1&&t.dataset?!q("Android")||Vh()||q("Firefox")||q("FxiOS")||q("Opera")||q("Silk")||r in t.dataset?(t=t.dataset[r],t===void 0?null:t):null:t.getAttribute("data-"+String(r).replace(/([A-Z])/g,"-$1").toLowerCase())}function g1(t,r,o){var l=this;t=ps(pm,{items:t},null,this.s),gm.call(this,t,!0,!0),o&&(o=v1(t,o))&&(o.focus(),$w(o,t)),Ie(this,t,function(u){(u=(u=sf(u.target,"firebaseui-id-list-box-dialog-button"))&&ll(u,"listboxid"))&&(Ja.call(l),r(u))})}function v1(t,r){t=(t||document).getElementsByTagName("BUTTON");for(var o=0;o<t.length;o++)if(ll(t[o],"listboxid")===r)return t[o];return null}function wi(){return J(this,"firebaseui-id-phone-number")}function Pg(){return J(this,"firebaseui-id-country-selector")}function Uu(){return J(this,"firebaseui-id-phone-number-error")}function _1(t,r){var o=t.a,l=Bu("1-US-0",o),u=null;if(r&&Bu(r,o)?u=r:l?u="1-US-0":u=0<o.length?o[0].c:null,!u)throw Error("No available default country");cl.call(this,u,t)}function Bu(t,r){return t=_i(t),!(!t||!Dt(r,t))}function y1(t){return t.map(function(r){return{id:r.c,Ma:"firebaseui-flag "+ju(r),label:r.name+" "+("\u200E+"+r.b)}})}function ju(t){return"firebaseui-flag-"+t.f}function b1(t){var r=this;g1.call(this,y1(t.a),function(o){cl.call(r,o,t,!0),r.O().focus()},this.Ba)}function cl(t,r,o){var l=_i(t);l&&(o&&(o=It(Ge(wi.call(this))||""),r=ja(r,o),r.length&&r[0].b!=l.b&&(o="+"+l.b+o.substr(r[0].b.length+1),$p(wi.call(this),o))),r=_i(this.Ba),this.Ba=t,t=J(this,"firebaseui-id-country-selector-flag"),r&&tn(t,ju(r)),en(t,ju(l)),Tc(J(this,"firebaseui-id-country-selector-code"),"\u200E+"+l.b))}function io(t,r,o,l,u,d,m,_,w,k){C.call(this,eg,{Gb:r,Aa:w||null,Va:!!o,ia:!!d},k,"phoneSignInStart",{F:l,D:u}),this.H=_||null,this.M=r,this.l=t,this.w=o||null,this.pa=m||null}f(io,C),io.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Bs(this,this.O(),this.i()),Tr(this,this.i(),this.l),this.O().focus(),ol(this.O(),(this.O().value||"").length),C.prototype.v.call(this)},io.prototype.o=function(){this.w=this.l=null,C.prototype.o.call(this)},ce(io.prototype,{Cb:Au,O:wi,B:Uu,ea:function(t,r,o){var l=this,u=wi.call(this),d=Pg.call(this),m=Uu.call(this),_=t||As,w=_.a;if(w.length==0)throw Error("No available countries provided.");_1.call(l,_,r),Ie(this,d,function(){b1.call(l,_)}),Ir(this,u,function(){Er(m)&&(Re(u,!0),kt(m));var k=It(Ge(u)||""),L=_i(this.Ba),oe=ja(_,k);k=Bu("1-US-0",w),oe.length&&oe[0].b!=L.b&&(L=oe[0],cl.call(l,L.b=="1"&&k?"1-US-0":L.c,_))}),o&&Us(this,u,function(){o()})},U:function(t){var r=It(Ge(wi.call(this))||"");t=t||As;var o=t.a,l=ja(As,r);if(l.length&&!Dt(o,l[0]))throw $p(wi.call(this)),wi.call(this).focus(),ze(Uu.call(this),ne("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return o=_i(this.Ba),l.length&&l[0].b!=o.b&&cl.call(this,l[0].c,t),l.length&&(r=r.substr(l[0].b.length+1)),r?new Rp(this.Ba,r):null},Ja:Pg,ba:function(){return J(this,"firebaseui-recaptcha-container")},u:function(){return J(this,"firebaseui-id-recaptcha-error")},i:He,ua:Ue,P:Ke});function Og(t,r,o,l){try{var u=r.U(wu)}catch{return}u?Os?(r.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ne("Verifying...").toString()),$(t,r.I(Z(t.cc,t),[fu(u),o],function(d){var m=ye(r);r.$("firebaseui-icon-done",ne("Code sent!").toString());var _=setTimeout(function(){r.h(),r.m(),D("phoneSignInFinish",t,m,u,15,d)},1e3);$(t,function(){r&&r.h(),clearTimeout(_)})},function(d){if(r.h(),!d.name||d.name!="cancel"){grecaptcha.reset(Hp),Os=null;var m=d&&d.message||"";if(d.code)switch(d.code){case"auth/too-many-requests":m=ne("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":r.O().focus(),ze(r.B(),Nc().toString());return;case"auth/admin-restricted-operation":if(yi(T(t))){d=ye(r),r.m(),D("handleUnauthorizedUser",t,d,fu(u),x.auth.PhoneAuthProvider.PROVIDER_ID);return}m=le(d);break;default:m=le(d)}r.a(m)}}))):gr?ze(r.u(),ne("Solve the reCAPTCHA").toString()):!gr&&l&&r.i().click():(r.O().focus(),ze(r.B(),Nc().toString()))}ie.phoneSignInStart=function(t,r,o,l){var u=Nw(T(t))||{};Os=null,gr=!(u&&u.size==="invisible");var d=yg(t),m=xw(T(t)),_=d?Mw(T(t)):null;m=o&&o.a||m&&m.c||null,o=o&&o.Aa||_,(_=pu(T(t)))&&kp(_),wu=_?new Sp(pu(T(t))):As;var w=new io(function(L){Og(t,w,k,!(!L||!L.keyCode))},gr,d?null:function(){k.clear(),w.m(),pe(t,r)},Ne(T(t)),Pe(T(t)),d,wu,m,o);w.render(r),G(t,w),l&&w.a(l),u.callback=function(L){w.u()&&kt(w.u()),Os=L,gr||Og(t,w,k)},u["expired-callback"]=function(){Os=null};var k=new x.auth.RecaptchaVerifier(gr?w.ba():w.i(),u,Ht(t).app);$(t,w.I(Z(k.render,k),[],function(L){Hp=L},function(L){L.name&&L.name=="cancel"||(L=le(L),w.m(),pe(t,r,void 0,L))}))},ie.prefilledEmailSignIn=function(t,r,o){var l=new al;l.render(r),G(t,l),$(t,l.I(Z(Y(t).fetchSignInMethodsForEmail,Y(t)),[o],function(u){l.m();var d=!(!tl(t)||!Mg(t));wg(t,r,u,o,void 0,d)},function(u){u=le(u),l.m(),D("signIn",t,r,o,u)}))};function ro(t,r,o,l,u){C.call(this,Zm,{Sb:r},u,"providerSignIn",{F:o,D:l}),this.i=t}f(ro,C),ro.prototype.v=function(){this.l(this.i),C.prototype.v.call(this)},ro.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(ro.prototype,{l:function(t){function r(m){t(m)}for(var o=this.g?Sc("firebaseui-id-idp-button",this.g||this.s.a):[],l=0;l<o.length;l++){var u=o[l],d=ll(u,"providerId");Ie(this,u,De(r,d))}}}),ie.providerSignIn=function(t,r,o,l){var u=new ro(function(d){d==x.auth.EmailAuthProvider.PROVIDER_ID?(u.m(),Ou(t,r,l)):d==x.auth.PhoneAuthProvider.PROVIDER_ID?(u.m(),D("phoneSignInStart",t,r)):d=="anonymous"?Qw(t,u):Hs(t,u,d,l),X(t),t.l.cancel()},Op(T(t)),Ne(T(t)),Pe(T(t)));u.render(r),G(t,u),o&&u.a(o),E1(t)},ie.sendEmailLinkForSignIn=function(t,r,o,l){var u=new nl;u.render(r),G(t,u),Pu(t,u,o,l,function(d){u.m(),d&&d.code=="auth/admin-restricted-operation"&&yi(T(t))?D("handleUnauthorizedUser",t,r,o,x.auth.EmailAuthProvider.PROVIDER_ID):(d=le(d),D("signIn",t,r,o,d))})};function so(t,r,o,l,u,d,m){C.call(this,bm,{email:o,Va:!!r,ia:!!d},m,"signIn",{F:l,D:u}),this.i=t,this.u=r}f(so,C),so.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),ol(this.l(),(this.l().value||"").length),C.prototype.v.call(this)},so.prototype.o=function(){this.u=this.i=null,C.prototype.o.call(this)},ce(so.prototype,{l:mn,M:$n,w:Rr,H:Ar,j:Nr,U:He,P:Ue,B:Ke}),ie.signIn=function(t,r,o,l){var u=tl(t),d=new so(function(){var m=d,_=m.j()||"";_&&bg(t,m,_)},u?null:function(){d.m(),pe(t,r,o)},o,Ne(T(t)),Pe(T(t)),u);d.render(r),G(t,d),l&&d.a(l)};function oo(t,r,o,l,u,d,m){C.call(this,Fm,{kc:t,yb:o,Eb:!!l},m,"unauthorizedUser",{F:u,D:d}),this.l=r,this.i=l}f(oo,C),oo.prototype.v=function(){var t=this,r=J(this,"firebaseui-id-unauthorized-user-help-link");this.i&&r&&Ie(this,r,function(){t.i()}),Ie(this,this.u(),function(){t.l()}),this.u().focus(),C.prototype.v.call(this)},oo.prototype.o=function(){this.i=this.l=null,C.prototype.o.call(this)},ce(oo.prototype,{u:Ue}),ie.handleUnauthorizedUser=function(t,r,o,l){function u(){pe(t,r)}l===x.auth.EmailAuthProvider.PROVIDER_ID?u=function(){Ou(t,r)}:l===x.auth.PhoneAuthProvider.PROVIDER_ID&&(u=function(){D("phoneSignInStart",t,r)});var d=null,m=null;l===x.auth.EmailAuthProvider.PROVIDER_ID&&Lp(T(t))?(d=Dw(T(t)),m=Lw(T(t))):yi(T(t))&&(d=Pw(T(t)),m=Ow(T(t)));var _=new oo(o,function(){_.m(),u()},d,m,Ne(T(t)),Pe(T(t)));_.render(r),G(t,_)};function ao(t,r,o,l,u,d){C.call(this,Um,{email:t},d,"unsupportedProvider",{F:l,D:u}),this.l=r,this.i=o}f(ao,C),ao.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),C.prototype.v.call(this)},ao.prototype.o=function(){this.i=this.l=null,C.prototype.o.call(this)},ce(ao.prototype,{u:He,B:Ue,w:Ke}),ie.unsupportedProvider=function(t,r,o){var l=new ao(o,function(){l.m(),D("passwordRecovery",t,r,o)},function(){l.m(),pe(t,r,o)},Ne(T(t)),Pe(T(t)));l.render(r),G(t,l)};function nn(t,r){this.$=!1;var o=Wu(r);if(lo[o])throw Error('An AuthUI instance already exists for the key "'+o+'"');lo[o]=this,this.a=t,this.u=null,this.Y=!1,Dg(this.a),this.h=x.initializeApp({apiKey:t.app.options.apiKey,authDomain:t.app.options.authDomain},t.app.name+"-firebaseui-temp").auth(),(t=t.emulatorConfig)&&(o=t.port,this.h.useEmulator(t.protocol+"://"+t.host+(o===null?"":":"+o),t.options)),Dg(this.h),this.h.setPersistence&&this.h.setPersistence(x.auth.Auth.Persistence.SESSION),this.oa=r,this.ca=new Aw,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=zc.Xa(),this.j=this.C=null,this.da=this.A=!1}function Dg(t){t&&t.INTERNAL&&t.INTERNAL.logFramework&&t.INTERNAL.logFramework("FirebaseUI-web")}var lo={};function Wu(t){return t||"[DEFAULT]"}function Lg(t){return X(t),t.i||(t.i=vn(t,function(r){return r&&!Qt(B(t))?ke(Ht(t).getRedirectResult().then(function(o){return o},function(o){if(o&&o.code=="auth/email-already-in-use"&&o.email&&o.credential)throw o;return zn(t,o)})):ke(Y(t).getRedirectResult().then(function(o){return Wa(T(t))&&!o.user&&t.j&&!t.j.isAnonymous?Ht(t).getRedirectResult():o}))})),t.i}function G(t,r){X(t),t.g=r}var Lr=null;function Y(t){return X(t),t.h}function Ht(t){return X(t),t.a}function B(t){return X(t),t.oa}function Mg(t){return X(t),t.O?t.O.emailHint:void 0}i=nn.prototype,i.nb=function(){return X(this),!!lu(B(this))||xg(pn())};function xg(t){return t=new ai(t),(t.a.a.get(Me.ub)||null)==="signIn"&&!!t.a.a.get(Me.$a)}i.start=function(t,r){Fg(this,t,r)};function Fg(t,r,o,l){X(t),typeof t.a.languageCode<"u"&&(t.u=t.a.languageCode);var u="en".replace(/_/g,"-");t.a.languageCode=u,t.h.languageCode=u,t.Y=!0,typeof t.a.tenantId<"u"&&(t.h.tenantId=t.a.tenantId),t.ib(o),t.O=l||null;var d=v.document;t.C?t.C.then(function(){d.readyState=="complete"?ul(t,r):ys(window,"load",function(){ul(t,r)})}):d.readyState=="complete"?ul(t,r):ys(window,"load",function(){ul(t,r)})}function ul(t,r){var o=ya(r,"Could not find the FirebaseUI widget element on the page.");if(o.setAttribute("lang","en".replace(/_/g,"-")),Lr){var l=Lr;X(l),Qt(B(l))&&Hn("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Lr.reset()}if(Lr=t,t.T=o,I1(t,o),Ba(new ru)&&Ba(new su)){r=ya(r,"Could not find the FirebaseUI widget element on the page."),o=pn(),l=du(T(t).a,"queryParameterForSignInSuccessUrl"),o=(o=ia(o,l))?Mn(sa(o)).toString():null;e:{l=pn();var u=Fp(T(t));l=ia(l,u)||"";for(d in bu)if(bu[d].toLowerCase()==l.toLowerCase()){var d=bu[d];break e}d="callback"}switch(d){case"callback":o&&(d=B(t),hr(ks,o,d)),t.nb()?D("callback",t,r):pe(t,r,Mg(t));break;case"resetPassword":D("passwordReset",t,r,Vs(),Du());break;case"recoverEmail":D("emailChangeRevocation",t,r,Vs());break;case"revertSecondFactorAddition":D("revertSecondFactorAddition",t,r,Vs());break;case"verifyEmail":D("emailVerification",t,r,Vs(),Du());break;case"verifyAndChangeEmail":D("verifyAndChangeEmail",t,r,Vs(),Du());break;case"signIn":D("emailLinkSignInCallback",t,r,pn()),Wg();break;case"select":o&&(d=B(t),hr(ks,o,d)),pe(t,r);break;default:throw Error("Unhandled widget operation.")}r=T(t),(r=Ps(r).uiShown||null)&&r()}else r=ya(r,"Could not find the FirebaseUI widget element on the page."),d=new vg(ne("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),d.render(r),G(t,d);r=t.g&&t.g.Ga=="blank"&&mu(T(t)),lu(B(t))&&!r&&(r=lu(B(t)),jg(t,r.a),mt(vi,B(t)))}function vn(t,r){if(t.A)return r(Ug(t));if($(t,function(){t.A=!1}),Wa(T(t))){var o=new Fe(function(l){$(t,t.a.onAuthStateChanged(function(u){t.j=u,t.A||(t.A=!0,l(r(Ug(t))))}))});return $(t,o),o}return t.A=!0,r(null)}function Ug(t){return X(t),Wa(T(t))&&t.j&&t.j.isAnonymous?t.j:null}function $(t,r){if(X(t),r){t.s.push(r);var o=function(){Z0(t.s,function(l){return l==r})};typeof r!="function"&&r.then(o,o)}}i.Db=function(){X(this),this.Z=!0};function w1(t){X(t);var r;return(r=t.Z)||(t=T(t),t=xp(t,x.auth.GoogleAuthProvider.PROVIDER_ID),r=!(!t||t.prompt!=="select_account")),r}function Bg(t){typeof t.a.languageCode<"u"&&t.Y&&(t.Y=!1,t.a.languageCode=t.u)}function jg(t,r){t.a.tenantId=r,t.h.tenantId=r}i.reset=function(){X(this);var t=this;this.T&&this.T.removeAttribute("lang"),this.J&&nw(this.J),Bg(this),this.O=null,Wg(),mt(vi,B(this)),X(this),this.l.cancel(),this.i=ke({user:null,credential:null}),Lr==this&&(Lr=null),this.T=null;for(var r=0;r<this.s.length;r++)typeof this.s[r]=="function"?this.s[r]():this.s[r].cancel&&this.s[r].cancel();this.s=[],Zt(B(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Gn(this).then(function(){t.C=null},function(){t.C=null}))};function I1(t,r){t.L=null,t.J=new va(r),t.J.register(),jt(t.J,"pageEnter",function(o){if(o=o&&o.pageId,t.L!=o){var l=T(t);(l=Ps(l).uiChanged||null)&&l(t.L,o),t.L=o}})}i.ib=function(t){X(this);var r=this.ca,o;for(o in t)try{uu(r.a,o,t[o])}catch{Ct('Invalid config: "'+o+'"',void 0)}Eb&&uu(r.a,"popupMode",!1),pu(r),!this.da&&gu(T(this))&&(Hn("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function T(t){return X(t),t.ca}i.Wb=function(){X(this);var t=T(this),r=du(t.a,"widgetUrl");t=Fp(t);for(var o=r.search(Mh),l=0,u,d=[];0<=(u=Lh(r,l,t,o));)d.push(r.substring(l,u)),l=Math.min(r.indexOf("&",u)+1||o,o);d.push(r.substr(l)),r=d.join("").replace(hb,"$1"),o="="+encodeURIComponent("select"),(t+=o)?(o=r.indexOf("#"),0>o&&(o=r.length),l=r.indexOf("?"),0>l||l>o?(l=o,u=""):u=r.substring(l+1,o),r=[r.substr(0,l),u,r.substr(o)],o=r[1],r[1]=t?o?o+"&"+t:t:o,o=r[0]+(r[1]?"?"+r[1]:"")+r[2]):o=r,T(this).a.get("popupMode")?(t=(window.screen.availHeight-600)/2,r=(window.screen.availWidth-500)/2,o=o||"about:blank",t={width:500,height:600,top:0<t?t:0,left:0<r?r:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},t.target=t.target||o.target||"google_popup",t.width=t.width||690,t.height=t.height||500,(t=Uf(o,t))&&t.focus()):tr(window.location,o)};function X(t){if(t.$)throw Error("AuthUI instance is deleted!")}i.Wa=function(){var t=this;return X(this),this.h.app.delete().then(function(){var r=Wu(B(t));delete lo[r],t.reset(),t.$=!0})};function E1(t){X(t);try{$f(t.l,Dp(T(t)),w1(t)).then(function(r){return t.g?Zw(t,t.g,r):!1})}catch{}}i.Ib=function(t,r){X(this);var o=this,l=cw();if(!mr(T(this)))return nr(Error("Email link sign-in should be enabled to trigger email sending."));var u=Uw(T(this)),d=new ai(u.url);return yb(d,l),r&&r.a&&(Rw(l,r,B(this)),jh(d,r.a.providerId)),bb(d,Fw(T(this))),vn(this,function(m){return m&&((m=m.uid)?d.a.a.set(Me.Pa,m):oi(d.a.a,Me.Pa)),u.url=d.toString(),Y(o).sendSignInLinkToEmail(t,u)}).then(function(){var m=B(o),_={};_.email=t,hr(ur,dp(l,JSON.stringify(_)),m)},function(m){throw mt(Rs,B(o)),mt(ur,B(o)),m})};function S1(t,r){var o=Bh(new ai(r));return o?(r=new Fe(function(l,u){var d=Ht(t).onAuthStateChanged(function(m){d(),m&&m.isAnonymous&&m.uid===o?l(m):m&&m.isAnonymous&&m.uid!==o?u(Error("anonymous-user-mismatch")):u(Error("anonymous-user-not-found"))});$(t,d)}),$(t,r),r):ke(null)}function C1(t,r,o,l,u){X(t);var d=u||null,m=x.auth.EmailAuthProvider.credentialWithLink(o,l);return o=d?Y(t).signInWithEmailLink(o,l).then(function(_){return _.user.linkWithCredential(d)}).then(function(){return Gn(t)}).then(function(){return zn(t,{code:"auth/email-already-in-use"},d)}):Y(t).fetchSignInMethodsForEmail(o).then(function(_){return _.length?zn(t,{code:"auth/email-already-in-use"},m):r.linkWithCredential(m)}),$(t,o),o}function T1(t,r,o,l){X(t);var u=l||null,d;return r=Y(t).signInWithEmailLink(r,o).then(function(m){if(d={user:m.user,credential:null,operationType:m.operationType,additionalUserInfo:m.additionalUserInfo},u)return m.user.linkWithCredential(u).then(function(_){d={user:_.user,credential:u,operationType:d.operationType,additionalUserInfo:_.additionalUserInfo}})}).then(function(){Gn(t)}).then(function(){return Ht(t).updateCurrentUser(d.user)}).then(function(){return d.user=Ht(t).currentUser,d}),$(t,r),r}function Wg(){var t=pn();if(xg(t)){t=new ai(t);for(var r in Me)Me.hasOwnProperty(r)&&oi(t.a.a,Me[r]);r={state:"signIn",mode:"emailLink",operation:"clear"};var o=v.document.title;v.history&&v.history.replaceState&&v.history.replaceState(r,o,t.toString())}}i.bc=function(t,r){X(this);var o=this;return Y(this).signInWithEmailAndPassword(t,r).then(function(l){return vn(o,function(u){return u?Gn(o).then(function(){return zn(o,{code:"auth/email-already-in-use"},x.auth.EmailAuthProvider.credential(t,r))}):l})})},i.Yb=function(t,r){X(this);var o=this;return vn(this,function(l){if(l){var u=x.auth.EmailAuthProvider.credential(t,r);return l.linkWithCredential(u)}return Y(o).createUserWithEmailAndPassword(t,r)})},i.ac=function(t){X(this);var r=this;return vn(this,function(o){return o?o.linkWithCredential(t).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return zn(r,l,t)}):Y(r).signInWithCredential(t)})};function k1(t,r){return X(t),vn(t,function(o){return o&&!Qt(B(t))?o.linkWithPopup(r).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return zn(t,l)}):Y(t).signInWithPopup(r)})}i.dc=function(t){X(this);var r=this,o=this.i;return this.i=null,vn(this,function(l){return l&&!Qt(B(r))?l.linkWithRedirect(t):Y(r).signInWithRedirect(t)}).then(function(){},function(l){throw r.i=o,l})},i.cc=function(t,r){X(this);var o=this;return vn(this,function(l){return l?l.linkWithPhoneNumber(t,r).then(function(u){return new qc(u,function(d){if(d.code=="auth/credential-already-in-use")return zn(o,d);throw d})}):Ht(o).signInWithPhoneNumber(t,r).then(function(u){return new qc(u)})})},i.$b=function(){return X(this),Ht(this).signInAnonymously()};function R1(t,r){return X(t),vn(t,function(o){if(t.j&&!t.j.isAnonymous&&Wa(T(t))&&!Y(t).currentUser)return Gn(t).then(function(){return r.credential.providerId=="password"&&(r.credential=null),r});if(o)return Gn(t).then(function(){return o.linkWithCredential(r.credential)}).then(function(l){return r.user=l.user,r.credential=l.credential,r.operationType=l.operationType,r.additionalUserInfo=l.additionalUserInfo,r},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return zn(t,l,r.credential)});if(!r.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Gn(t).then(function(){return Ht(t).updateCurrentUser(r.user)}).then(function(){return r.user=Ht(t).currentUser,r.operationType="signIn",r.credential&&r.credential.providerId&&r.credential.providerId=="password"&&(r.credential=null),r})})}i.Xb=function(t,r){return X(this),Y(this).signInWithEmailAndPassword(t,r)};function Gn(t){return X(t),Y(t).signOut()}function zn(t,r,o){if(X(t),r&&r.code&&(r.code=="auth/email-already-in-use"||r.code=="auth/credential-already-in-use")){var l=Wp(T(t));return ke().then(function(){return l(new ms("anonymous-upgrade-merge-conflict",null,o||r.credential))}).then(function(){throw t.g&&(t.g.m(),t.g=null),r})}return nr(r)}function co(t,r,o,l){C.call(this,rg,void 0,l,"providerMatchByEmail",{F:r,D:o}),this.i=t}f(co,C),co.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),ol(this.l(),(this.l().value||"").length),C.prototype.v.call(this)},co.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ce(co.prototype,{l:mn,H:$n,u:Rr,B:Ar,j:Nr,M:He,w:Ke});function dl(t,r,o,l,u){C.call(this,ig,{ec:r},u,"selectTenant",{F:o,D:l}),this.i=t}f(dl,C),dl.prototype.v=function(){A1(this,this.i),C.prototype.v.call(this)},dl.prototype.o=function(){this.i=null,C.prototype.o.call(this)};function A1(t,r){function o(_){r(_)}for(var l=t.g?Sc("firebaseui-id-tenant-selection-button",t.g||t.s.a):[],u=0;u<l.length;u++){var d=l[u],m=ll(d,"tenantId");Ie(t,d,De(o,m))}}function Hu(t){C.call(this,Tm,void 0,t,"spinner")}f(Hu,C);function N1(t){this.a=new cu,Ae(this.a,"authDomain"),Ae(this.a,"displayMode",fl),Ae(this.a,"tenants"),Ae(this.a,"callbacks"),Ae(this.a,"tosUrl"),Ae(this.a,"privacyPolicyUrl");for(var r in t)if(t.hasOwnProperty(r))try{uu(this.a,r,t[r])}catch{Ct('Invalid config: "'+r+'"',void 0)}}function P1(t){t=t.a.get("displayMode");for(var r in $u)if($u[r]===t)return $u[r];return fl}function hl(t){return t.a.get("callbacks")||{}}function Hg(t){var r=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,r&&!t&&Hn("Privacy Policy URL is missing, the link will not be displayed."),r&&t){if(typeof r=="function")return r;if(typeof r=="string")return function(){rr(r)}}return null}function Vg(t){var r=t.a.get("tosUrl")||null,o=t.a.get("privacyPolicyUrl")||null;if(o&&!r&&Hn("Terms of Service URL is missing, the link will not be displayed."),r&&o){if(typeof o=="function")return o;if(typeof o=="string")return function(){rr(o)}}return null}function Vu(t,r){if(t=t.a.get("tenants"),!t||!t.hasOwnProperty(r)&&!t.hasOwnProperty(pl))throw Error("Invalid tenant configuration!")}function $g(t,r,o){if(t=t.a.get("tenants"),!t)throw Error("Invalid tenant configuration!");var l=[];if(t=t[r]||t[pl],!t)return Ct("Invalid tenant configuration: "+(r+" is not configured!"),void 0),l;if(r=t.signInOptions,!r)throw Error("Invalid tenant configuration: signInOptions are invalid!");return r.forEach(function(u){if(typeof u=="string")l.push(u);else if(typeof u.provider=="string"){var d=u.hd;d&&o?(d instanceof RegExp?d:new RegExp("@"+d.replace(".","\\.")+"$")).test(o)&&l.push(u.provider):l.push(u.provider)}else u="Invalid tenant configuration: signInOption "+(JSON.stringify(u)+" is invalid!"),Ct(u,void 0)}),l}function O1(t,r,o){return t=D1(t,r),(r=t.signInOptions)&&o&&(r=r.filter(function(l){return typeof l=="string"?o.includes(l):o.includes(l.provider)}),t.signInOptions=r),t}function D1(t,r){var o=L1,l=l===void 0?{}:l;return Vu(t,r),t=t.a.get("tenants"),uw(t[r]||t[pl],o,l)}var L1=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],fl="optionFirst",$u={pc:fl,oc:"identifierFirst"},pl="*";function Vt(t,r){var o=this;this.s=ya(t),this.a={},Object.keys(r).forEach(function(l){o.a[l]=new N1(r[l])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(l){this.ob=l||null},enumerable:!1})}i=Vt.prototype,i.Ub=function(t,r){var o=this;Kn(this);var l=t.apiKey;return new Fe(function(u,d){if(o.a.hasOwnProperty(l)){var m=hl(o.a[l]).selectTenantUiHidden||null;if(P1(o.a[l])===fl){var _=[];r.forEach(function(L){L=L||"_";var oe=o.a[l].a.get("tenants");if(!oe)throw Error("Invalid tenant configuration!");(oe=oe[L]||oe[pl])?L={tenantId:L!=="_"?L:null,V:oe.fullLabel||null,displayName:oe.displayName,za:oe.iconUrl,ta:oe.buttonColor}:(Ct("Invalid tenant configuration: "+(L+" is not configured!"),void 0),L=null),L&&_.push(L)});var w=function(L){L={tenantId:L,providerIds:$g(o.a[l],L||"_")},u(L)};if(_.length===1){w(_[0].tenantId);return}o.g=new dl(function(L){Kn(o),m&&m(),w(L)},_,Hg(o.a[l]),Vg(o.a[l]))}else o.g=new co(function(){var L=o.g.j();if(L){for(var oe=0;oe<r.length;oe++){var $t=$g(o.a[l],r[oe]||"_",L);if($t.length!==0){L={tenantId:r[oe],providerIds:$t,email:L},Kn(o),m&&m(),u(L);return}}o.g.a(ff({code:"no-matching-tenant-for-email"}).toString())}},Hg(o.a[l]),Vg(o.a[l]));o.g.render(o.s),(d=hl(o.a[l]).selectTenantUiShown||null)&&d()}else{var k=Error("Invalid project configuration: API key is invalid!");k.code="invalid-configuration",o.pb(k),d(k)}})},i.Pb=function(t,r){if(!this.a.hasOwnProperty(t))throw Error("Invalid project configuration: API key is invalid!");var o=r||void 0;Vu(this.a[t],r||"_");try{this.i=x.app(o).auth()}catch{var l=this.a[t].a.get("authDomain");if(!l)throw Error("Invalid project configuration: authDomain is required!");t=x.initializeApp({apiKey:t,authDomain:l},o),t.auth().tenantId=r,this.i=t.auth()}return this.i},i.Zb=function(t,r){var o=this;return new Fe(function(l,u){function d(oe,$t){o.j=new nn(t),Fg(o.j,o.s,oe,$t)}var m=t.app.options.apiKey;o.a.hasOwnProperty(m)||u(Error("Invalid project configuration: API key is invalid!"));var _=O1(o.a[m],t.tenantId||"_",r&&r.providerIds);Kn(o),u={signInSuccessWithAuthResult:function(oe){return l(oe),!1}};var w=hl(o.a[m]).signInUiShown||null,k=!1;u.uiChanged=function(oe,$t){oe===null&&$t==="callback"?((oe=Cc("firebaseui-id-page-callback",o.s))&&kt(oe),o.h=new Hu,o.h.render(o.s)):k||oe===null&&$t==="spinner"||$t==="blank"||(o.h&&(o.h.m(),o.h=null),k=!0,w&&w(t.tenantId))},_.callbacks=u,_.credentialHelper="none";var L;r&&r.email&&(L={emailHint:r.email}),o.j?o.j.Wa().then(function(){d(_,L)}):d(_,L)})},i.reset=function(){var t=this;return ke().then(function(){t.j&&t.j.Wa()}).then(function(){t.j=null,Kn(t)})},i.Vb=function(){var t=this;this.h||this.A||(this.A=window.setTimeout(function(){Kn(t),t.h=new Hu,t.g=t.h,t.h.render(t.s),t.A=null},500))},i.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},i.Bb=function(){return Kn(this),this.g=new hg,this.g.render(this.s),ke()};function Kn(t){t.j&&t.j.reset(),t.mb(),t.g&&t.g.m()}i.pb=function(t){var r=this,o=ff({code:t.code}).toString()||t.message;Kn(this);var l;t.retry&&typeof t.retry=="function"&&(l=function(){r.reset(),t.retry()}),this.g=new gg(o,l),this.g.render(this.s)},i.Rb=function(t){var r=this;return ke().then(function(){var o=r.i&&r.i.app.options.apiKey;if(!r.a.hasOwnProperty(o))throw Error("Invalid project configuration: API key is invalid!");if(Vu(r.a[o],t.tenantId||"_"),!r.i.currentUser||r.i.currentUser.uid!==t.uid)throw Error("The user being processed does not match the signed in user!");return(o=hl(r.a[o]).beforeSignInSuccess||null)?o(t):t}).then(function(o){if(o.uid!==t.uid)throw Error("User with mismatching UID returned.");return o})},ue("firebaseui.auth.FirebaseUiHandler",Vt),ue("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Vt.prototype.Ub),ue("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Vt.prototype.Pb),ue("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Vt.prototype.Zb),ue("firebaseui.auth.FirebaseUiHandler.prototype.reset",Vt.prototype.reset),ue("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Vt.prototype.Vb),ue("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Vt.prototype.mb),ue("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Vt.prototype.Bb),ue("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Vt.prototype.pb),ue("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Vt.prototype.Rb),ue("firebaseui.auth.AuthUI",nn),ue("firebaseui.auth.AuthUI.getInstance",function(t){return t=Wu(t),lo[t]?lo[t]:null}),ue("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",nn.prototype.Db),ue("firebaseui.auth.AuthUI.prototype.start",nn.prototype.start),ue("firebaseui.auth.AuthUI.prototype.setConfig",nn.prototype.ib),ue("firebaseui.auth.AuthUI.prototype.signIn",nn.prototype.Wb),ue("firebaseui.auth.AuthUI.prototype.reset",nn.prototype.reset),ue("firebaseui.auth.AuthUI.prototype.delete",nn.prototype.Wa),ue("firebaseui.auth.AuthUI.prototype.isPendingRedirect",nn.prototype.nb),ue("firebaseui.auth.AuthUIError",ms),ue("firebaseui.auth.AuthUIError.prototype.toJSON",ms.prototype.toJSON),ue("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",vu),ue("firebaseui.auth.CredentialHelper.NONE",Va),ue("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Fe.prototype.catch=Fe.prototype.Ca,Fe.prototype.finally=Fe.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=Ek);var Sk=firebaseui.auth,Ck="firebase",Tk="9.12.1";/**
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
 */Kt(Ck,Tk,"app");const Ev="@firebase/database",Sv="0.13.9";/**
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
 */let Fy="";function kk(i){Fy=i}/**
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
 */class Rk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Lo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ak{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Uy=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rk(e)}}catch{}return new Ak},Ti=Uy("localStorage"),Ed=Uy("sessionStorage");/**
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
 */const Vr=new Kl("@firebase/database"),Nk=function(){let i=1;return function(){return i++}}(),By=function(i){const e=cI(i),n=new sI;n.update(e);const s=n.digest();return xd.encodeByteArray(s)},qo=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qo.apply(null,s):typeof s=="object"?e+=it(s):e+=s,e+=" "}return e};let Ni=null,Cv=!0;const Pk=function(i,e){P(!e||i===!0||i===!1,"Can't turn on custom loggers persistently."),i===!0?(Vr.logLevel=de.VERBOSE,Ni=Vr.log.bind(Vr),e&&Ed.set("logging_enabled",!0)):typeof i=="function"?Ni=i:(Ni=null,Ed.remove("logging_enabled"))},st=function(...i){if(Cv===!0&&(Cv=!1,Ni===null&&Ed.get("logging_enabled")===!0&&Pk(!0)),Ni){const e=qo.apply(null,i);Ni(e)}},Yo=function(i){return function(...e){st(i,...e)}},Sd=function(...i){const e="FIREBASE INTERNAL ERROR: "+qo(...i);Vr.error(e)},kn=function(...i){const e=`FIREBASE FATAL ERROR: ${qo(...i)}`;throw Vr.error(e),new Error(e)},Pt=function(...i){const e="FIREBASE WARNING: "+qo(...i);Vr.warn(e)},Ok=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jy=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},Dk=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jr="[MIN_NAME]",Di="[MAX_NAME]",ss=function(i,e){if(i===e)return 0;if(i===Jr||e===Di)return-1;if(e===Jr||i===Di)return 1;{const n=Tv(i),s=Tv(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},Lk=function(i,e){return i===e?0:i<e?-1:1},vo=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+it(e))},oh=function(i){if(typeof i!="object"||i===null)return it(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=it(e[s]),n+=":",n+=oh(i[e[s]]);return n+="}",n},Wy=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let a=0;a<n;a+=e)a+e>n?s.push(i.substring(a,n)):s.push(i.substring(a,a+e));return s};function Ft(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Hy=function(i){P(!jy(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let a,c,h,f,p;i===0?(c=0,h=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),c=f+s,h=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,h=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(p=e;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(a?1:0),g.reverse();const b=g.join("");let v="";for(p=0;p<64;p+=8){let E=parseInt(b.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},Mk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Fk=new RegExp("^-?(0*)\\d{1,10}$"),Uk=-2147483648,Bk=2147483647,Tv=function(i){if(Fk.test(i)){const e=Number(i);if(e>=Uk&&e<=Bk)return e}return null},Jo=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},jk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ao=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Wk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class $r{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$r.OWNER="owner";/**
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
 */const ah="5",Vy="v",$y="s",Gy="r",zy="f",Ky=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qy="ls",Yy="p",Cd="ac",Jy="websocket",Xy="long_polling";/**
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
 */class Qy{constructor(e,n,s,a,c=!1,h="",f=!1){this.secure=n,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Vk(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Zy(i,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===Jy)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Xy)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Vk(i)&&(n.ns=i.namespace);const a=[];return Ft(n,(c,h)=>{a.push(c+"="+h)}),s+a.join("&")}/**
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
 */class $k{constructor(){this.counters_={}}incrementCounter(e,n=1){Jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return V1(this.counters_)}}/**
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
 */const id={},rd={};function lh(i){const e=i.toString();return id[e]||(id[e]=new $k),id[e]}function Gk(i,e){const n=i.toString();return rd[n]||(rd[n]=e()),rd[n]}/**
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
 */class zk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Jo(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kv="start",Kk="close",qk="pLPCommand",Yk="pRTLPCB",e0="id",t0="pw",n0="ser",Jk="cb",Xk="seg",Qk="ts",Zk="d",e2="dframe",i0=1870,r0=30,t2=i0-r0,n2=25e3,i2=3e4;class Ur{constructor(e,n,s,a,c,h,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.transportSessionId=h,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yo(e),this.stats_=lh(n),this.urlFn=p=>(this.appCheckToken&&(p[Cd]=this.appCheckToken),Zy(n,Xy,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(i2)),Dk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ch((...c)=>{const[h,f,p,g,b]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===kv)this.id=f,this.password=p;else if(h===Kk)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[kv]="t",s[n0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vy]=ah,this.transportSessionId&&(s[$y]=this.transportSessionId),this.lastSessionId&&(s[qy]=this.lastSessionId),this.applicationId&&(s[Yy]=this.applicationId),this.appCheckToken&&(s[Cd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ky.test(location.hostname)&&(s[Gy]=zy);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ur.forceAllow_=!0}static forceDisallow(){Ur.forceDisallow_=!0}static isAvailable(){return Ur.forceAllow_?!0:!Ur.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Mk()&&!xk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=v_(n),a=Wy(s,t2);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[e2]="t",s[e0]=e,s[t0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ch{constructor(e,n,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nk(),window[qk+this.uniqueCallbackIdentifier]=e,window[Yk+this.uniqueCallbackIdentifier]=n,this.myIFrame=ch.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(f){st("frame writing exception"),f.stack&&st(f.stack),st(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[e0]=this.myID,e[t0]=this.myPW,e[n0]=this.currentSerial;let n=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+r0+s.length<=i0;){const h=this.pendingSegs.shift();s=s+"&"+Xk+a+"="+h.seg+"&"+Qk+a+"="+h.ts+"&"+Zk+a+"="+h.d,a++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(s,Math.floor(n2)),c=()=>{clearTimeout(a),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const r2=16384,s2=45e3;let xl=null;typeof MozWebSocket<"u"?xl=MozWebSocket:typeof WebSocket<"u"&&(xl=WebSocket);class Gt{constructor(e,n,s,a,c,h,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yo(this.connId),this.stats_=lh(n),this.connURL=Gt.connectionURL_(n,h,f,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,a,c){const h={};return h[Vy]=ah,typeof location<"u"&&location.hostname&&Ky.test(location.hostname)&&(h[Gy]=zy),n&&(h[$y]=n),s&&(h[qy]=s),a&&(h[Cd]=a),c&&(h[Yy]=c),Zy(e,Jy,h)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ti.set("previous_websocket_failure",!0);try{let s;w_(),this.mySock=new xl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xl!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Ti.isInMemoryStorage||Ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Lo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wy(n,r2);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(s2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
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
 */class Wo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ur,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const a=this.transports_=[];for(const c of Wo.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Wo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wo.globalTransportInitialized_=!1;/**
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
 */const o2=6e4,a2=5e3,l2=10*1024,c2=100*1024,sd="t",Rv="d",u2="s",Av="r",d2="e",Nv="o",Pv="a",Ov="n",Dv="p",h2="h";class f2{constructor(e,n,s,a,c,h,f,p,g,b){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=h,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=b,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yo("c:"+this.id+":"),this.transportManager_=new Wo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ao(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>c2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>l2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sd in e){const n=e[sd];n===Pv?this.upgradeIfSecondaryHealthy_():n===Av?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vo("t",e),s=vo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ov,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vo("t",e),s=vo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vo(sd,e);if(Rv in e){const s=e[Rv];if(n===h2)this.onHandshake_(s);else if(n===Ov){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===u2?this.onConnectionShutdown_(s):n===Av?this.onReset_(s):n===d2?Sd("Server Error: "+s):n===Nv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ah!==s&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ao(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(o2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ao(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(a2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class s0{put(e,n,s,a){}merge(e,n,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class o0{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const a=this.getInitialEvent(e);a&&n.apply(s,a)}off(e,n,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!s||s===a[c].context)){a.splice(c,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Fl extends o0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fl}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Lv=32,Mv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new _e("")}function ee(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function ii(i){return i.pieces_.length-i.pieceNum_}function ve(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new _e(i.pieces_,e)}function a0(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function p2(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function l0(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function c0(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new _e(e,0)}function Je(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&n.push(s[a])}return new _e(n,0)}function Q(i){return i.pieceNum_>=i.pieces_.length}function Mt(i,e){const n=ee(i),s=ee(e);if(n===null)return e;if(n===s)return Mt(ve(i),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function u0(i,e){if(ii(i)!==ii(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function zt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(ii(i)>ii(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class m2{constructor(e,n){this.errorPrefix_=n,this.parts_=l0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zl(this.parts_[s]);d0(this)}}function g2(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=zl(e),d0(i)}function v2(i){const e=i.parts_.pop();i.byteLength_-=zl(e),i.parts_.length>0&&(i.byteLength_-=1)}function d0(i){if(i.byteLength_>Mv)throw new Error(i.errorPrefix_+"has a key path longer than "+Mv+" bytes ("+i.byteLength_+").");if(i.parts_.length>Lv)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lv+") or object contains a cycle "+Ei(i))}function Ei(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class uh extends o0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new uh}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _o=1e3,_2=60*5*1e3,xv=30*1e3,y2=1.3,b2=3e4,w2="server_kill",Fv=3;class Sn extends s0{constructor(e,n,s,a,c,h,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Sn.nextPersistentConnectionId_++,this.log_=Yo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_o,this.maxReconnectDelay_=_2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!w_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_(it(c)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const n=new Bd,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const f=h.d;h.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,a){this.initConnection_();const c=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:e,tag:s};this.listens.get(h).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+s+" for "+a);const c={p:s},h="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(h,c,f=>{const p=f.d,g=f.s;Sn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jt(e,"w")){const s=zr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=iI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,a=>{const c=a.s,h=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,n)}sendUnlisten_(e,n,s,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},h="n";a&&(c.q=s,c.t=a),this.sendRequest(h,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,a){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,h=>{a&&setTimeout(()=>{a(h.s,h.d)},Math.floor(0))})}put(e,n,s,a){this.putInternal("p",e,n,s,a)}merge(e,n,s,a){this.putInternal("m",e,n,s,a)}putInternal(e,n,s,a,c){this.initConnection_();const h={p:n,d:s};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:e,request:h,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sd("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>b2&&(this.reconnectDelay_=_o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*y2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Sn.nextConnectionId_++,c=this.lastSessionId;let h=!1,f=null;const p=function(){f?f.close():(h=!0,s())},g=function(v){P(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const b=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(b),this.appCheckTokenProvider_.getToken(b)]);h?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,f=new f2(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,A=>{Pt(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(w2)},c))}catch(v){this.log_("Failed to get token: "+v),h||(this.repoInfo_.nodeAdmin&&Pt(v),p())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hd(this.interruptReasons_)&&(this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>oh(c)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let a;if(this.listens.has(s)){const c=this.listens.get(s);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fv&&(this.reconnectDelay_=xv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fy.replace(/\./g,"-")]=1,Fd()?e["framework.cordova"]=1:Gl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fl.getInstance().currentlyOnline();return hd(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
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
 */class ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new te(Jr,e),a=new te(Jr,n);return this.compare(s,a)!==0}minPost(){return te.MIN}}/**
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
 */let yl;class h0 extends ac{static get __EMPTY_NODE(){return yl}static set __EMPTY_NODE(e){yl=e}compare(e,n){return ss(e.name,n.name)}isDefinedOn(e){throw es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Di,yl)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,yl)}toString(){return".key"}}const Gr=new h0;/**
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
 */class bl{constructor(e,n,s,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=n?s(e.key,n):1,a&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s!=null?s:Ye.RED,this.left=a!=null?a:yt.EMPTY_NODE,this.right=c!=null?c:yt.EMPTY_NODE}copy(e,n,s,a,c){return new Ye(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,a!=null?a:this.left,c!=null?c:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,a;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class I2{copy(e,n,s,a,c){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,a=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bl(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new I2;/**
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
 */function E2(i,e){return ss(i.name,e.name)}function dh(i,e){return ss(i,e)}/**
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
 */let Td;function S2(i){Td=i}const f0=function(i){return typeof i=="number"?"number:"+Hy(i):"string:"+i},p0=function(i){if(i.isLeafNode()){const e=i.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jt(e,".sv"),"Priority must be a string or number.")}else P(i===Td||i.isEmpty(),"priority of unexpected type.");P(i===Td||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Uv;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),p0(this.priorityNode_)}static set __childrenNodeConstructor(e){Uv=e}static get __childrenNodeConstructor(){return Uv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:ee(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hy(this.value_):e+=this.value_,this.lazyHash_=By(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,a=qe.VALUE_TYPE_ORDER.indexOf(n),c=qe.VALUE_TYPE_ORDER.indexOf(s);return P(a>=0,"Unknown leaf type: "+n),P(c>=0,"Unknown leaf type: "+s),a===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let m0,g0;function C2(i){m0=i}function T2(i){g0=i}class k2 extends ac{compare(e,n){const s=e.node.getPriority(),a=n.node.getPriority(),c=s.compareTo(a);return c===0?ss(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Di,new qe("[PRIORITY-POST]",g0))}makePost(e,n){const s=m0(e);return new te(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const at=new k2;/**
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
 */const R2=Math.log(2);class A2{constructor(e){const n=c=>parseInt(Math.log(c)/R2,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ul=function(i,e,n,s){i.sort(e);const a=function(p,g){const b=g-p;let v,E;if(b===0)return null;if(b===1)return v=i[p],E=n?n(v):v,new Ye(E,v.node,Ye.BLACK,null,null);{const A=parseInt(b/2,10)+p,M=a(p,A),y=a(A+1,g);return v=i[A],E=n?n(v):v,new Ye(E,v.node,Ye.BLACK,M,y)}},c=function(p){let g=null,b=null,v=i.length;const E=function(M,y){const I=v-M,S=v;v-=M;const N=a(I+1,S),F=i[I],U=n?n(F):F;A(new Ye(U,F.node,y,null,N))},A=function(M){g?(g.left=M,g=M):(b=M,g=M)};for(let M=0;M<p.count;++M){const y=p.nextBitIsOne(),I=Math.pow(2,p.count-(M+1));y?E(I,Ye.BLACK):(E(I,Ye.BLACK),E(I,Ye.RED))}return b},h=new A2(i.length),f=c(h);return new yt(s||e,f)};/**
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
 */let od;const xr={};class bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(xr&&at,"ChildrenNode.ts has not been loaded"),od=od||new bn({".priority":xr},{".priority":at}),od}get(e){const n=zr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Jt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Gr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const c=n.getIterator(te.Wrap);let h=c.getNext();for(;h;)a=a||e.isDefinedOn(h.node),s.push(h),h=c.getNext();let f;a?f=Ul(s,e.getCompare()):f=xr;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const b=Object.assign({},this.indexes_);return b[p]=f,new bn(b,g)}addToIndexes(e,n){const s=Al(this.indexes_,(a,c)=>{const h=zr(this.indexSet_,c);if(P(h,"Missing index implementation for "+c),a===xr)if(h.isDefinedOn(e.node)){const f=[],p=n.getIterator(te.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Ul(f,h.getCompare())}else return xr;else{const f=n.get(e.name);let p=a;return f&&(p=p.remove(new te(e.name,f))),p.insert(e,e.node)}});return new bn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Al(this.indexes_,a=>{if(a===xr)return a;{const c=n.get(e.name);return c?a.remove(new te(e.name,c)):a}});return new bn(s,this.indexSet_)}}/**
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
 */let yo;class ae{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&p0(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yo||(yo=new ae(new yt(dh),null,bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yo}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yo:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new te(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const h=a.isEmpty()?yo:this.priorityNode_;return new ae(a,h,c)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{P(ee(e)!==".priority"||ii(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,a=0,c=!0;if(this.forEachChild(at,(h,f)=>{n[h]=f.val(e),s++,c&&ae.INTEGER_REGEXP_.test(h)?a=Math.max(a,Number(h)):c=!1}),!e&&c&&a<2*s){const h=[];for(const f in n)h[f]=n[f];return h}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f0(this.getPriority().val())+":"),this.forEachChild(at,(n,s)=>{const a=s.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":By(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const a=this.resolveIndex_(s);if(a){const c=a.getPredecessorKey(new te(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,te.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xo?-1:0}withIndex(e){if(e===Gr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(at),a=n.getIterator(at);let c=s.getNext(),h=a.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=s.getNext(),h=a.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===Gr?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class N2 extends ae{constructor(){super(new yt(dh),ae.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const Xo=new N2;Object.defineProperties(te,{MIN:{value:new te(Jr,ae.EMPTY_NODE)},MAX:{value:new te(Di,Xo)}});h0.__EMPTY_NODE=ae.EMPTY_NODE;qe.__childrenNodeConstructor=ae;S2(Xo);T2(Xo);/**
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
 */const P2=!0;function ot(i,e=null){if(i===null)return ae.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new qe(n,ot(e))}if(!(i instanceof Array)&&P2){const n=[];let s=!1;if(Ft(i,(h,f)=>{if(h.substring(0,1)!=="."){const p=ot(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new te(h,p)))}}),n.length===0)return ae.EMPTY_NODE;const c=Ul(n,E2,h=>h.name,dh);if(s){const h=Ul(n,at.getCompare());return new ae(c,ot(e),new bn({".priority":h},{".priority":at}))}else return new ae(c,ot(e),bn.Default)}else{let n=ae.EMPTY_NODE;return Ft(i,(s,a)=>{if(Jt(i,s)&&s.substring(0,1)!=="."){const c=ot(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(ot(e))}}C2(ot);/**
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
 */class O2 extends ac{constructor(e){super(),this.indexPath_=e,P(!Q(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),a=this.extractChild(n.node),c=s.compareTo(a);return c===0?ss(e.name,n.name):c}makePost(e,n){const s=ot(e),a=ae.EMPTY_NODE.updateChild(this.indexPath_,s);return new te(n,a)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,Xo);return new te(Di,e)}toString(){return l0(this.indexPath_,0).join("/")}}/**
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
 */class D2 extends ac{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ss(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const s=ot(e);return new te(n,s)}toString(){return".value"}}const L2=new D2;/**
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
 */function M2(i){return{type:"value",snapshotNode:i}}function x2(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function F2(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Bv(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function U2(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class hh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=at}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jr}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Di}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===at}copy(){const e=new hh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jv(i){const e={};if(i.isDefault())return e;let n;return i.index_===at?n="$priority":i.index_===L2?n="$value":i.index_===Gr?n="$key":(P(i.index_ instanceof O2,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=it(n),i.startSet_&&(e.startAt=it(i.indexStartValue_),i.startNameSet_&&(e.startAt+=","+it(i.indexStartName_))),i.endSet_&&(e.endAt=it(i.indexEndValue_),i.endNameSet_&&(e.endAt+=","+it(i.indexEndName_))),i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Wv(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_)),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_)),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==at&&(e.i=i.index_.toString()),e}/**
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
 */class Bl extends s0{constructor(e,n,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Yo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const h=Bl.getListenId_(e,s),f={};this.listens_[h]=f;const p=jv(e._queryParams);this.restRequest_(c+".json",p,(g,b)=>{let v=b;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(c,v,!1,s),zr(this.listens_,h)===f){let E;g?g===401?E="permission_denied":E="rest_error:"+g:E="ok",a(E,null)}})}unlisten(e,n){const s=Bl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=jv(e._queryParams),s=e._path.toString(),a=new Bd;return this.restRequest_(s+".json",n,(c,h)=>{let f=h;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hi(n);this.log_("Sending REST request for "+h);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+h+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Lo(f.responseText)}catch{Pt("Failed to parse JSON response for "+h+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Pt("Got unsuccessful REST response for "+h+" Status: "+f.status),s(f.status);s=null}},f.open("GET",h,!0),f.send()})}}/**
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
 */class B2{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jl(){return{value:null,children:new Map}}function v0(i,e,n){if(Q(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=ee(e);i.children.has(s)||i.children.set(s,jl());const a=i.children.get(s);e=ve(e),v0(a,e,n)}}function kd(i,e,n){i.value!==null?n(e,i.value):j2(i,(s,a)=>{const c=new _e(e.toString()+"/"+s);kd(a,c,n)})}function j2(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class W2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ft(this.last_,(s,a)=>{n[s]=n[s]-a}),this.last_=e,n}}/**
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
 */const Hv=10*1e3,H2=30*1e3,V2=5*60*1e3;class $2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new W2(e);const s=Hv+(H2-Hv)*Math.random();Ao(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ft(e,(a,c)=>{c>0&&Jt(this.statsToReport_,a)&&(n[a]=c,s=!0)}),s&&this.server_.reportStats(n),Ao(this.reportStats_.bind(this),Math.floor(Math.random()*2*V2))}}/**
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
 */var cn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cn||(cn={}));function _0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function y0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function b0(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class Wl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=cn.ACK_USER_WRITE,this.source=_0()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Wl(he(),n,this.revert)}}else return P(ee(this.path)===e,"operationForChild called for unrelated child."),new Wl(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class Li{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=cn.OVERWRITE}operationForChild(e){return Q(this.path)?new Li(this.source,he(),this.snap.getImmediateChild(e)):new Li(this.source,ve(this.path),this.snap)}}/**
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
 */class Ho{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=cn.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Li(this.source,he(),n.value):new Ho(this.source,he(),n)}else return P(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ho(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fh{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function G2(i,e,n,s){const a=[],c=[];return e.forEach(h=>{h.type==="child_changed"&&i.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(U2(h.childName,h.snapshotNode))}),bo(i,a,"child_removed",e,s,n),bo(i,a,"child_added",e,s,n),bo(i,a,"child_moved",c,s,n),bo(i,a,"child_changed",e,s,n),bo(i,a,"value",e,s,n),a}function bo(i,e,n,s,a,c){const h=s.filter(f=>f.type===n);h.sort((f,p)=>K2(i,f,p)),h.forEach(f=>{const p=z2(i,f,c);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function z2(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function K2(i,e,n){if(e.childName==null||n.childName==null)throw es("Should only compare child_ events.");const s=new te(e.childName,e.snapshotNode),a=new te(n.childName,n.snapshotNode);return i.index_.compare(s,a)}/**
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
 */function w0(i,e){return{eventCache:i,serverCache:e}}function No(i,e,n,s){return w0(new fh(e,n,s),i.serverCache)}function I0(i,e,n,s){return w0(i.eventCache,new fh(e,n,s))}function Rd(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Mi(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let ad;const q2=()=>(ad||(ad=new yt(Lk)),ad);class ge{constructor(e,n=q2()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return Ft(e,(s,a)=>{n=n.set(new _e(s),a)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(Q(e))return null;{const s=ee(e),a=this.children.get(s);if(a!==null){const c=a.findRootMostMatchingPathAndValue(ve(e),n);return c!=null?{path:Je(new _e(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new ge(null)}}set(e,n){if(Q(e))return new ge(n,this.children);{const s=ee(e),c=(this.children.get(s)||new ge(null)).set(ve(e),n),h=this.children.insert(s,c);return new ge(this.value,h)}}remove(e){if(Q(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const a=s.remove(ve(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new ge(null):new ge(this.value,c)}else return this}}get(e){if(Q(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(Q(e))return n;{const s=ee(e),c=(this.children.get(s)||new ge(null)).setTree(ve(e),n);let h;return c.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,c),new ge(this.value,h)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((a,c)=>{s[a]=c.fold_(Je(e,a),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,s){const a=this.value?s(n,this.value):!1;if(a)return a;if(Q(e))return null;{const c=ee(e),h=this.children.get(c);return h?h.findOnPath_(ve(e),Je(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,s){if(Q(e))return this;{this.value&&s(n,this.value);const a=ee(e),c=this.children.get(a);return c?c.foreachOnPath_(ve(e),Je(n,a),s):new ge(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((s,a)=>{a.foreach_(Je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new ge(null))}}function Po(i,e,n){if(Q(e))return new Yt(new ge(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let c=s.value;const h=Mt(a,e);return c=c.updateChild(h,n),new Yt(i.writeTree_.set(a,c))}else{const a=new ge(n),c=i.writeTree_.setTree(e,a);return new Yt(c)}}}function Vv(i,e,n){let s=i;return Ft(n,(a,c)=>{s=Po(s,Je(e,a),c)}),s}function $v(i,e){if(Q(e))return Yt.empty();{const n=i.writeTree_.setTree(e,new ge(null));return new Yt(n)}}function Ad(i,e){return Gi(i,e)!=null}function Gi(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function Gv(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(at,(s,a)=>{e.push(new te(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new te(s,a.value))}),e}function Qn(i,e){if(Q(e))return i;{const n=Gi(i,e);return n!=null?new Yt(new ge(n)):new Yt(i.writeTree_.subtree(e))}}function Nd(i){return i.writeTree_.isEmpty()}function Xr(i,e){return E0(he(),i.writeTree_,e)}function E0(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(P(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=E0(Je(i,a),c,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Je(i,".priority"),s)),n}}/**
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
 */function S0(i,e){return A0(e,i)}function Y2(i,e,n,s,a){P(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:a}),a&&(i.visibleWrites=Po(i.visibleWrites,e,n)),i.lastWriteId=s}function J2(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function X2(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let a=s.visible,c=!1,h=i.allWrites.length-1;for(;a&&h>=0;){const f=i.allWrites[h];f.visible&&(h>=n&&Q2(f,s.path)?a=!1:zt(s.path,f.path)&&(c=!0)),h--}if(a){if(c)return Z2(i),!0;if(s.snap)i.visibleWrites=$v(i.visibleWrites,s.path);else{const f=s.children;Ft(f,p=>{i.visibleWrites=$v(i.visibleWrites,Je(s.path,p))})}return!0}else return!1}function Q2(i,e){if(i.snap)return zt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&zt(Je(i.path,n),e))return!0;return!1}function Z2(i){i.visibleWrites=C0(i.allWrites,eR,he()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function eR(i){return i.visible}function C0(i,e,n){let s=Yt.empty();for(let a=0;a<i.length;++a){const c=i[a];if(e(c)){const h=c.path;let f;if(c.snap)zt(n,h)?(f=Mt(n,h),s=Po(s,f,c.snap)):zt(h,n)&&(f=Mt(h,n),s=Po(s,he(),c.snap.getChild(f)));else if(c.children){if(zt(n,h))f=Mt(n,h),s=Vv(s,f,c.children);else if(zt(h,n))if(f=Mt(h,n),Q(f))s=Vv(s,he(),c.children);else{const p=zr(c.children,ee(f));if(p){const g=p.getChild(ve(f));s=Po(s,he(),g)}}}else throw es("WriteRecord should have .snap or .children")}}return s}function T0(i,e,n,s,a){if(!s&&!a){const c=Gi(i.visibleWrites,e);if(c!=null)return c;{const h=Qn(i.visibleWrites,e);if(Nd(h))return n;if(n==null&&!Ad(h,he()))return null;{const f=n||ae.EMPTY_NODE;return Xr(h,f)}}}else{const c=Qn(i.visibleWrites,e);if(!a&&Nd(c))return n;if(!a&&n==null&&!Ad(c,he()))return null;{const h=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(zt(g.path,e)||zt(e,g.path))},f=C0(i.allWrites,h,e),p=n||ae.EMPTY_NODE;return Xr(f,p)}}}function tR(i,e,n){let s=ae.EMPTY_NODE;const a=Gi(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(at,(c,h)=>{s=s.updateImmediateChild(c,h)}),s;if(n){const c=Qn(i.visibleWrites,e);return n.forEachChild(at,(h,f)=>{const p=Xr(Qn(c,new _e(h)),f);s=s.updateImmediateChild(h,p)}),Gv(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const c=Qn(i.visibleWrites,e);return Gv(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function nR(i,e,n,s,a){P(s||a,"Either existingEventSnap or existingServerSnap must exist");const c=Je(e,n);if(Ad(i.visibleWrites,c))return null;{const h=Qn(i.visibleWrites,c);return Nd(h)?a.getChild(n):Xr(h,a.getChild(n))}}function iR(i,e,n,s){const a=Je(e,n),c=Gi(i.visibleWrites,a);if(c!=null)return c;if(s.isCompleteForChild(n)){const h=Qn(i.visibleWrites,a);return Xr(h,s.getNode().getImmediateChild(n))}else return null}function rR(i,e){return Gi(i.visibleWrites,e)}function sR(i,e,n,s,a,c,h){let f;const p=Qn(i.visibleWrites,e),g=Gi(p,he());if(g!=null)f=g;else if(n!=null)f=Xr(p,n);else return[];if(f=f.withIndex(h),!f.isEmpty()&&!f.isLeafNode()){const b=[],v=h.getCompare(),E=c?f.getReverseIteratorFrom(s,h):f.getIteratorFrom(s,h);let A=E.getNext();for(;A&&b.length<a;)v(A,s)!==0&&b.push(A),A=E.getNext();return b}else return[]}function oR(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Pd(i,e,n,s){return T0(i.writeTree,i.treePath,e,n,s)}function k0(i,e){return tR(i.writeTree,i.treePath,e)}function zv(i,e,n,s){return nR(i.writeTree,i.treePath,e,n,s)}function Hl(i,e){return rR(i.writeTree,Je(i.treePath,e))}function aR(i,e,n,s,a,c){return sR(i.writeTree,i.treePath,e,n,s,a,c)}function ph(i,e,n){return iR(i.writeTree,i.treePath,e,n)}function R0(i,e){return A0(Je(i.treePath,e),i.writeTree)}function A0(i,e){return{treePath:i,writeTree:e}}/**
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
 */class lR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Bv(s,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,F2(s,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,x2(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Bv(s,e.snapshotNode,a.oldSnap));else throw es("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const N0=new cR;class mh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new fh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ph(this.writes_,e,s)}}getChildAfterChild(e,n,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mi(this.viewCache_),c=aR(this.writes_,a,n,1,s,e);return c.length===0?null:c[0]}}function uR(i,e){P(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function dR(i,e,n,s,a){const c=new lR;let h,f;if(n.type===cn.OVERWRITE){const g=n;g.source.fromUser?h=Od(i,e,g.path,g.snap,s,a,c):(P(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Q(g.path),h=Vl(i,e,g.path,g.snap,s,a,f,c))}else if(n.type===cn.MERGE){const g=n;g.source.fromUser?h=fR(i,e,g.path,g.children,s,a,c):(P(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),h=Dd(i,e,g.path,g.children,s,a,f,c))}else if(n.type===cn.ACK_USER_WRITE){const g=n;g.revert?h=gR(i,e,g.path,s,a,c):h=pR(i,e,g.path,g.affectedTree,s,a,c)}else if(n.type===cn.LISTEN_COMPLETE)h=mR(i,e,n.path,s,c);else throw es("Unknown operation type: "+n.type);const p=c.getChanges();return hR(e,h,p),{viewCache:h,changes:p}}function hR(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Rd(i);(n.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(M2(Rd(e)))}}function P0(i,e,n,s,a,c){const h=e.eventCache;if(Hl(s,n)!=null)return e;{let f,p;if(Q(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Mi(e),b=g instanceof ae?g:ae.EMPTY_NODE,v=k0(s,b);f=i.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const g=Pd(s,Mi(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,c)}else{const g=ee(n);if(g===".priority"){P(ii(n)===1,"Can't have a priority with additional path components");const b=h.getNode();p=e.serverCache.getNode();const v=zv(s,n,b,p);v!=null?f=i.filter.updatePriority(b,v):f=h.getNode()}else{const b=ve(n);let v;if(h.isCompleteForChild(g)){p=e.serverCache.getNode();const E=zv(s,n,h.getNode(),p);E!=null?v=h.getNode().getImmediateChild(g).updateChild(b,E):v=h.getNode().getImmediateChild(g)}else v=ph(s,g,e.serverCache);v!=null?f=i.filter.updateChild(h.getNode(),g,v,b,a,c):f=h.getNode()}}return No(e,f,h.isFullyInitialized()||Q(n),i.filter.filtersNodes())}}function Vl(i,e,n,s,a,c,h,f){const p=e.serverCache;let g;const b=h?i.filter:i.filter.getIndexedFilter();if(Q(n))g=b.updateFullNode(p.getNode(),s,null);else if(b.filtersNodes()&&!p.isFiltered()){const A=p.getNode().updateChild(n,s);g=b.updateFullNode(p.getNode(),A,null)}else{const A=ee(n);if(!p.isCompleteForPath(n)&&ii(n)>1)return e;const M=ve(n),I=p.getNode().getImmediateChild(A).updateChild(M,s);A===".priority"?g=b.updatePriority(p.getNode(),I):g=b.updateChild(p.getNode(),A,I,M,N0,null)}const v=I0(e,g,p.isFullyInitialized()||Q(n),b.filtersNodes()),E=new mh(a,v,c);return P0(i,v,n,a,E,f)}function Od(i,e,n,s,a,c,h){const f=e.eventCache;let p,g;const b=new mh(a,e,c);if(Q(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,h),p=No(e,g,!0,i.filter.filtersNodes());else{const v=ee(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=No(e,g,f.isFullyInitialized(),f.isFiltered());else{const E=ve(n),A=f.getNode().getImmediateChild(v);let M;if(Q(E))M=s;else{const y=b.getCompleteChild(v);y!=null?a0(E)===".priority"&&y.getChild(c0(E)).isEmpty()?M=y:M=y.updateChild(E,s):M=ae.EMPTY_NODE}if(A.equals(M))p=e;else{const y=i.filter.updateChild(f.getNode(),v,M,E,b,h);p=No(e,y,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function Kv(i,e){return i.eventCache.isCompleteForChild(e)}function fR(i,e,n,s,a,c,h){let f=e;return s.foreach((p,g)=>{const b=Je(n,p);Kv(e,ee(b))&&(f=Od(i,f,b,g,a,c,h))}),s.foreach((p,g)=>{const b=Je(n,p);Kv(e,ee(b))||(f=Od(i,f,b,g,a,c,h))}),f}function qv(i,e,n){return n.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Dd(i,e,n,s,a,c,h,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Q(n)?g=s:g=new ge(null).setTree(n,s);const b=e.serverCache.getNode();return g.children.inorderTraversal((v,E)=>{if(b.hasChild(v)){const A=e.serverCache.getNode().getImmediateChild(v),M=qv(i,A,E);p=Vl(i,p,new _e(v),M,a,c,h,f)}}),g.children.inorderTraversal((v,E)=>{const A=!e.serverCache.isCompleteForChild(v)&&E.value===null;if(!b.hasChild(v)&&!A){const M=e.serverCache.getNode().getImmediateChild(v),y=qv(i,M,E);p=Vl(i,p,new _e(v),y,a,c,h,f)}}),p}function pR(i,e,n,s,a,c,h){if(Hl(a,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Q(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Vl(i,e,n,p.getNode().getChild(n),a,c,f,h);if(Q(n)){let g=new ge(null);return p.getNode().forEachChild(Gr,(b,v)=>{g=g.set(new _e(b),v)}),Dd(i,e,n,g,a,c,f,h)}else return e}else{let g=new ge(null);return s.foreach((b,v)=>{const E=Je(n,b);p.isCompleteForPath(E)&&(g=g.set(b,p.getNode().getChild(E)))}),Dd(i,e,n,g,a,c,f,h)}}function mR(i,e,n,s,a){const c=e.serverCache,h=I0(e,c.getNode(),c.isFullyInitialized()||Q(n),c.isFiltered());return P0(i,h,n,s,N0,a)}function gR(i,e,n,s,a,c){let h;if(Hl(s,n)!=null)return e;{const f=new mh(s,e,a),p=e.eventCache.getNode();let g;if(Q(n)||ee(n)===".priority"){let b;if(e.serverCache.isFullyInitialized())b=Pd(s,Mi(e));else{const v=e.serverCache.getNode();P(v instanceof ae,"serverChildren would be complete if leaf node"),b=k0(s,v)}b=b,g=i.filter.updateFullNode(p,b,c)}else{const b=ee(n);let v=ph(s,b,e.serverCache);v==null&&e.serverCache.isCompleteForChild(b)&&(v=p.getImmediateChild(b)),v!=null?g=i.filter.updateChild(p,b,v,ve(n),f,c):e.eventCache.getNode().hasChild(b)?g=i.filter.updateChild(p,b,ae.EMPTY_NODE,ve(n),f,c):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Pd(s,Mi(e)),h.isLeafNode()&&(g=i.filter.updateFullNode(g,h,c)))}return h=e.serverCache.isFullyInitialized()||Hl(s,he())!=null,No(e,g,h,i.filter.filtersNodes())}}function vR(i,e){const n=Mi(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Yv(i,e,n,s){e.type===cn.MERGE&&e.source.queryId!==null&&(P(Mi(i.viewCache_),"We should always have a full cache before handling merges"),P(Rd(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,c=dR(i.processor_,a,e,n,s);return uR(i.processor_,c.viewCache),P(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=c.viewCache,_R(i,c.changes,c.viewCache.eventCache.getNode(),null)}function _R(i,e,n,s){const a=s?[s]:i.eventRegistrations_;return G2(i.eventGenerator_,e,n,a)}/**
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
 */let Jv;function yR(i){P(!Jv,"__referenceConstructor has already been defined"),Jv=i}function gh(i,e,n,s){const a=e.source.queryId;if(a!==null){const c=i.views.get(a);return P(c!=null,"SyncTree gave us an op for an invalid query."),Yv(c,e,n,s)}else{let c=[];for(const h of i.views.values())c=c.concat(Yv(h,e,n,s));return c}}function vh(i,e){let n=null;for(const s of i.views.values())n=n||vR(s,e);return n}/**
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
 */let Xv;function bR(i){P(!Xv,"__referenceConstructor has already been defined"),Xv=i}class Qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=oR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wR(i,e,n,s,a){return Y2(i.pendingWriteTree_,e,n,s,a),a?cc(i,new Li(_0(),e,n)):[]}function Br(i,e,n=!1){const s=J2(i.pendingWriteTree_,e);if(X2(i.pendingWriteTree_,e)){let c=new ge(null);return s.snap!=null?c=c.set(he(),!0):Ft(s.children,h=>{c=c.set(new _e(h),!0)}),cc(i,new Wl(s.path,c,n))}else return[]}function lc(i,e,n){return cc(i,new Li(y0(),e,n))}function IR(i,e,n){const s=ge.fromObject(n);return cc(i,new Ho(y0(),e,s))}function ER(i,e,n,s){const a=M0(i,s);if(a!=null){const c=x0(a),h=c.path,f=c.queryId,p=Mt(h,e),g=new Li(b0(f),p,n);return F0(i,h,g)}else return[]}function SR(i,e,n,s){const a=M0(i,s);if(a){const c=x0(a),h=c.path,f=c.queryId,p=Mt(h,e),g=ge.fromObject(n),b=new Ho(b0(f),p,g);return F0(i,h,b)}else return[]}function O0(i,e,n){const a=i.pendingWriteTree_,c=i.syncPointTree_.findOnPath(e,(h,f)=>{const p=Mt(h,e),g=vh(f,p);if(g)return g});return T0(a,e,c,n,!0)}function cc(i,e){return D0(e,i.syncPointTree_,null,S0(i.pendingWriteTree_,he()))}function D0(i,e,n,s){if(Q(i.path))return L0(i,e,n,s);{const a=e.get(he());n==null&&a!=null&&(n=vh(a,he()));let c=[];const h=ee(i.path),f=i.operationForChild(h),p=e.children.get(h);if(p&&f){const g=n?n.getImmediateChild(h):null,b=R0(s,h);c=c.concat(D0(f,p,g,b))}return a&&(c=c.concat(gh(a,i,s,n))),c}}function L0(i,e,n,s){const a=e.get(he());n==null&&a!=null&&(n=vh(a,he()));let c=[];return e.children.inorderTraversal((h,f)=>{const p=n?n.getImmediateChild(h):null,g=R0(s,h),b=i.operationForChild(h);b&&(c=c.concat(L0(b,f,p,g)))}),a&&(c=c.concat(gh(a,i,s,n))),c}function M0(i,e){return i.tagToQueryMap.get(e)}function x0(i){const e=i.indexOf("$");return P(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new _e(i.substr(0,e))}}function F0(i,e,n){const s=i.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const a=S0(i.pendingWriteTree_,e);return gh(s,n,a,null)}/**
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
 */class _h{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _h(n)}node(){return this.node_}}class yh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Je(this.path_,e);return new yh(this.syncTree_,n)}node(){return O0(this.syncTree_,this.path_)}}const CR=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Zv=function(i,e,n){if(!i||typeof i!="object")return i;if(P(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return TR(i[".sv"],e,n);if(typeof i[".sv"]=="object")return kR(i[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},TR=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+i)}},kR=function(i,e,n){i.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const a=e.node();if(P(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const h=a.getValue();return typeof h!="number"?s:h+s},RR=function(i,e,n,s){return bh(e,new yh(n,i),s)},AR=function(i,e,n){return bh(i,new _h(e),n)};function bh(i,e,n){const s=i.getPriority().val(),a=Zv(s,e.getImmediateChild(".priority"),n);let c;if(i.isLeafNode()){const h=i,f=Zv(h.getValue(),e,n);return f!==h.getValue()||a!==h.getPriority().val()?new qe(f,ot(a)):i}else{const h=i;return c=h,a!==h.getPriority().val()&&(c=c.updatePriority(new qe(a))),h.forEachChild(at,(f,p)=>{const g=bh(p,e.getImmediateChild(f),n);g!==p&&(c=c.updateImmediateChild(f,g))}),c}}/**
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
 */class wh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ih(i,e){let n=e instanceof _e?e:new _e(e),s=i,a=ee(n);for(;a!==null;){const c=zr(s.node.children,a)||{children:{},childCount:0};s=new wh(a,s,c),n=ve(n),a=ee(n)}return s}function os(i){return i.node.value}function U0(i,e){i.node.value=e,Ld(i)}function B0(i){return i.node.childCount>0}function NR(i){return os(i)===void 0&&!B0(i)}function uc(i,e){Ft(i.node.children,(n,s)=>{e(new wh(n,i,s))})}function j0(i,e,n,s){n&&!s&&e(i),uc(i,a=>{j0(a,e,!0,s)}),n&&s&&e(i)}function PR(i,e,n){let s=n?i:i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qo(i){return new _e(i.parent===null?i.name:Qo(i.parent)+"/"+i.name)}function Ld(i){i.parent!==null&&OR(i.parent,i.name,i)}function OR(i,e,n){const s=NR(n),a=Jt(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,Ld(i)):!s&&!a&&(i.node.children[e]=n.node,i.node.childCount++,Ld(i))}/**
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
 */const DR=/[\[\].#$\/\u0000-\u001F\u007F]/,LR=/[\[\].#$\u0000-\u001F\u007F]/,ld=10*1024*1024,W0=function(i){return typeof i=="string"&&i.length!==0&&!DR.test(i)},MR=function(i){return typeof i=="string"&&i.length!==0&&!LR.test(i)},xR=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),MR(i)},H0=function(i,e,n){const s=n instanceof _e?new m2(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+Ei(s));if(typeof e=="function")throw new Error(i+"contains a function "+Ei(s)+" with contents = "+e.toString());if(jy(e))throw new Error(i+"contains "+e.toString()+" "+Ei(s));if(typeof e=="string"&&e.length>ld/3&&zl(e)>ld)throw new Error(i+"contains a string greater than "+ld+" utf8 bytes "+Ei(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(Ft(e,(h,f)=>{if(h===".value")a=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!W0(h)))throw new Error(i+" contains an invalid key ("+h+") "+Ei(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);g2(s,h),H0(i,f,s),v2(s)}),a&&c)throw new Error(i+' contains ".value" child '+Ei(s)+" in addition to actual children.")}},FR=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!W0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xR(n))throw new Error(lI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class UR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BR(i,e){let n=null;for(let s=0;s<e.length;s++){const a=e[s],c=a.getPath();n!==null&&!u0(c,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&i.eventLists_.push(n)}function zi(i,e,n){BR(i,n),jR(i,s=>zt(s,e)||zt(e,s))}function jR(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const c=a.path;e(c)?(WR(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function WR(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ni&&st("event: "+n.toString()),Jo(s)}}}/**
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
 */const HR="repo_interrupt",VR=25;class $R{constructor(e,n,s,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jl(),this.transactionQueueTree_=new wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GR(i,e,n){if(i.stats_=lh(i.repoInfo_),i.forceRestClient_||jk())i.server_=new Bl(i.repoInfo_,(s,a,c,h)=>{e_(i,s,a,c,h)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>t_(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new Sn(i.repoInfo_,e,(s,a,c,h)=>{e_(i,s,a,c,h)},s=>{t_(i,s)},s=>{KR(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=Gk(i.repoInfo_,()=>new $2(i.stats_,i.server_)),i.infoData_=new B2,i.infoSyncTree_=new Qv({startListening:(s,a,c,h)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=lc(i.infoSyncTree_,s._path,p),setTimeout(()=>{h("ok")},0)),f},stopListening:()=>{}}),Eh(i,"connected",!1),i.serverSyncTree_=new Qv({startListening:(s,a,c,h)=>(i.server_.listen(s,c,a,(f,p)=>{const g=h(f,p);zi(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function zR(i){const n=i.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function V0(i){return CR({timestamp:zR(i)})}function e_(i,e,n,s,a){i.dataUpdateCount++;const c=new _e(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let h=[];if(a)if(s){const p=Al(n,g=>ot(g));h=SR(i.serverSyncTree_,c,p,a)}else{const p=ot(n);h=ER(i.serverSyncTree_,c,p,a)}else if(s){const p=Al(n,g=>ot(g));h=IR(i.serverSyncTree_,c,p)}else{const p=ot(n);h=lc(i.serverSyncTree_,c,p)}let f=c;h.length>0&&(f=Ch(i,c)),zi(i.eventQueue_,f,h)}function t_(i,e){Eh(i,"connected",e),e===!1&&YR(i)}function KR(i,e){Ft(e,(n,s)=>{Eh(i,n,s)})}function Eh(i,e,n){const s=new _e("/.info/"+e),a=ot(n);i.infoData_.updateSnapshot(s,a);const c=lc(i.infoSyncTree_,s,a);zi(i.eventQueue_,s,c)}function qR(i){return i.nextWriteId_++}function YR(i){$0(i,"onDisconnectEvents");const e=V0(i),n=jl();kd(i.onDisconnect_,he(),(a,c)=>{const h=RR(a,c,i.serverSyncTree_,e);v0(n,a,h)});let s=[];kd(n,he(),(a,c)=>{s=s.concat(lc(i.serverSyncTree_,a,c));const h=ZR(i,a);Ch(i,h)}),i.onDisconnect_=jl(),zi(i.eventQueue_,he(),s)}function JR(i){i.persistentConnection_&&i.persistentConnection_.interrupt(HR)}function $0(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),st(n,...e)}function G0(i,e,n){return O0(i.serverSyncTree_,e,n)||ae.EMPTY_NODE}function Sh(i,e=i.transactionQueueTree_){if(e||dc(i,e),os(e)){const n=K0(i,e);P(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&XR(i,Qo(e),n)}else B0(e)&&uc(e,n=>{Sh(i,n)})}function XR(i,e,n){const s=n.map(g=>g.currentWriteId),a=G0(i,e,s);let c=a;const h=a.hash();for(let g=0;g<n.length;g++){const b=n[g];P(b.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),b.status=1,b.retryCount++;const v=Mt(e,b.path);c=c.updateChild(v,b.currentOutputSnapshotRaw)}const f=c.val(!0),p=e;i.server_.put(p.toString(),f,g=>{$0(i,"transaction put response",{path:p.toString(),status:g});let b=[];if(g==="ok"){const v=[];for(let E=0;E<n.length;E++)n[E].status=2,b=b.concat(Br(i.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&v.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();dc(i,Ih(i.transactionQueueTree_,e)),Sh(i,i.transactionQueueTree_),zi(i.eventQueue_,e,b);for(let E=0;E<v.length;E++)Jo(v[E])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{Pt("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}Ch(i,e)}},h)}function Ch(i,e){const n=z0(i,e),s=Qo(n),a=K0(i,n);return QR(i,a,s),s}function QR(i,e,n){if(e.length===0)return;const s=[];let a=[];const h=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Mt(n,p.path);let b=!1,v;if(P(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)b=!0,v=p.abortReason,a=a.concat(Br(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=VR)b=!0,v="maxretry",a=a.concat(Br(i.serverSyncTree_,p.currentWriteId,!0));else{const E=G0(i,p.path,h);p.currentInputSnapshot=E;const A=e[f].update(E.val());if(A!==void 0){H0("transaction failed: Data returned ",A,p.path);let M=ot(A);typeof A=="object"&&A!=null&&Jt(A,".priority")||(M=M.updatePriority(E.getPriority()));const I=p.currentWriteId,S=V0(i),N=AR(M,E,S);p.currentOutputSnapshotRaw=M,p.currentOutputSnapshotResolved=N,p.currentWriteId=qR(i),h.splice(h.indexOf(I),1),a=a.concat(wR(i.serverSyncTree_,p.path,N,p.currentWriteId,p.applyLocally)),a=a.concat(Br(i.serverSyncTree_,I,!0))}else b=!0,v="nodata",a=a.concat(Br(i.serverSyncTree_,p.currentWriteId,!0))}zi(i.eventQueue_,n,a),a=[],b&&(e[f].status=2,function(E){setTimeout(E,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}dc(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Jo(s[f]);Sh(i,i.transactionQueueTree_)}function z0(i,e){let n,s=i.transactionQueueTree_;for(n=ee(e);n!==null&&os(s)===void 0;)s=Ih(s,n),e=ve(e),n=ee(e);return s}function K0(i,e){const n=[];return q0(i,e,n),n.sort((s,a)=>s.order-a.order),n}function q0(i,e,n){const s=os(e);if(s)for(let a=0;a<s.length;a++)n.push(s[a]);uc(e,a=>{q0(i,a,n)})}function dc(i,e){const n=os(e);if(n){let s=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[s]=n[a],s++);n.length=s,U0(e,n.length>0?n:void 0)}uc(e,s=>{dc(i,s)})}function ZR(i,e){const n=Qo(z0(i,e)),s=Ih(i.transactionQueueTree_,e);return PR(s,a=>{cd(i,a)}),cd(i,s),j0(s,a=>{cd(i,a)}),n}function cd(i,e){const n=os(e);if(n){const s=[];let a=[],c=-1;for(let h=0;h<n.length;h++)n[h].status===3||(n[h].status===1?(P(c===h-1,"All SENT items should be at beginning of queue."),c=h,n[h].status=3,n[h].abortReason="set"):(P(n[h].status===0,"Unexpected transaction status in abort"),n[h].unwatcher(),a=a.concat(Br(i.serverSyncTree_,n[h].currentWriteId,!0)),n[h].onComplete&&s.push(n[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?U0(e,void 0):n.length=c+1,zi(i.eventQueue_,Qo(e),a);for(let h=0;h<s.length;h++)Jo(s[h])}}/**
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
 */function eA(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let a=n[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function tA(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pt(`Invalid query segment '${n}' in query '${i}'`)}return e}const n_=function(i,e){const n=nA(i),s=n.namespace;n.domain==="firebase.com"&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ok();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qy(n.host,n.secure,s,a,e,"",s!==n.subdomain),path:new _e(n.pathString)}},nA=function(i){let e="",n="",s="",a="",c="",h=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let b=i.indexOf("/");b===-1&&(b=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(b,v)),b<v&&(a=eA(i.substring(b,v)));const E=tA(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(h=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const A=e.slice(0,g);if(A.toLowerCase()==="localhost")n="localhost";else if(A.split(".").length<=2)n=A;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),n=e.substring(M+1),c=s}"ns"in E&&(c=E.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:h,scheme:f,pathString:a,namespace:c}};/**
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
 */class Th{constructor(e,n,s,a){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=a}get key(){return Q(this._path)?null:a0(this._path)}get ref(){return new as(this._repo,this._path)}get _queryIdentifier(){const e=Wv(this._queryParams),n=oh(e);return n==="{}"?"default":n}get _queryObject(){return Wv(this._queryParams)}isEqual(e){if(e=K(e),!(e instanceof Th))return!1;const n=this._repo===e._repo,s=u0(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+p2(this._path)}}class as extends Th{constructor(e,n){super(e,n,new hh,!1)}get parent(){const e=c0(this._path);return e===null?null:new as(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}yR(as);bR(as);/**
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
 */const iA="FIREBASE_DATABASE_EMULATOR_HOST",Md={};let rA=!1;function sA(i,e,n,s){i.repoInfo_=new Qy(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams),s&&(i.authTokenProvider_=s)}function oA(i,e,n,s,a){let c=s||i.options.databaseURL;c===void 0&&(i.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",i.options.projectId),c=`${i.options.projectId}-default-rtdb.firebaseio.com`);let h=n_(c,a),f=h.repoInfo,p,g;typeof process<"u"&&process.env&&(g=process.env[iA]),g?(p=!0,c=`http://${g}?ns=${f.namespace}`,h=n_(c,a),f=h.repoInfo):p=!h.repoInfo.secure;const b=a&&p?new $r($r.OWNER):new Hk(i.name,i.options,e);FR("Invalid Firebase Database URL",h),Q(h.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=lA(f,i,b,new Wk(i.name,n));return new cA(v,i)}function aA(i,e){const n=Md[e];(!n||n[i.key]!==i)&&kn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),JR(i),delete n[i.key]}function lA(i,e,n,s){let a=Md[e.name];a||(a={},Md[e.name]=a);let c=a[i.toURLString()];return c&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new $R(i,rA,n,s),a[i.toURLString()]=c,c}class cA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new as(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kn("Cannot call "+e+" on a deleted database.")}}function uA(i=Hd(),e){const n=Vo(i,"database").getImmediate({identifier:e}),s=X1("database");return s&&dA(n,...s),n}function dA(i,e,n,s={}){i=K(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&kn("Cannot call useEmulator() after instance has already been initialized.");const a=i._repoInternal;let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new $r($r.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:Z1(s.mockUserToken,i.app.options.projectId);c=new $r(h)}sA(a,e,n,c)}/**
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
 */function hA(i){kk(Vi),ti(new Cn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return oA(s,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Kt(Ev,Sv,i),Kt(Ev,Sv,"esm2017")}Sn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};Sn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};hA();function i_(i){const e=new Date,[n,s]=i.split(":");return e.setHours(parseInt(n)),e.setMinutes(parseInt(s)),Number(e)}function r_(i){const e=Number(new Date(i.getFullYear(),0,0)),n=i-e,s=1e3*60*60*24;return n/s/365}const Y0=ql({databaseURL:"https://watchman-willnode-default-rtdb.asia-southeast1.firebasedatabase.app/",apiKey:"AIzaSyCrG9gLErgO0YmZE37PnIF0Vzb-fjbZ4Rg"});uA(Y0);const fA=LT(Y0),kh=JSON.parse(localStorage.getItem("user")||"null");var J0=[{id:"sleep",context:"Sleep",detail:"Relax. Take a rest and sleep.",times:[["02:30","04:30"],["11:00","12:00"],["21:00","02:00"]]},{id:"rest",context:"Rest",detail:"Eat. Shower. Relax. Set your mood.",times:[["02:00","02:30"],["04:30","06:00"],["08:30","09:00"],["12:00","12:30"],["15:00","15:30"],["17:30","19:30"]]},{id:"work",context:"Work",detail:"Work. Study. Learn. Do productive things.",times:[["06:00","08:30"],["09:00","11:00"],["12:30","15:00"],["15:30","17:30"],["19:30","21:00"]]}],pA=J0.map(i=>{var e=i.times.map(n=>{var[s,a]=n;return[i_(s),i_(a)]});return{...i,timesParsed:e}}).reduce((i,e)=>{for(let n=0;n<e.times.length;n++)i.push({id:e.id,start:e.times[n][0],end:e.times[n][1],startParsed:e.timesParsed[n][0],endParsed:e.timesParsed[n][1]});return i},[]).sort((i,e)=>i.startParsed-e.startParsed);function mA(i){let e;return{c(){e=Oe("div"),Ee(e,"id","firebaseui-auth-container")},m(n,s){wn(n,e,s)},p:pt,i:pt,o:pt,d(n){n&&un(e)}}}function gA(i){return $l(()=>{var e=new Sk.AuthUI(fA);e.start("#firebaseui-auth-container",{callbacks:{signInSuccessWithAuthResult(n,s){return n.user&&(localStorage.setItem("user",JSON.stringify(n.user)),location.href="/"),!1},uiShown(){console.log("firebase login loaded")}},signInOptions:[An.PROVIDER_ID]})}),[]}class vA extends ji{constructor(e){super(),Bi(this,e,gA,mA,xi,{})}}function s_(i){let e,n,s,a,c=i[2][i[0].id].context+"",h,f,p,g=i[2][i[0].id].detail+"",b,v,E,A=i[0].start+"",M,y,I=i[0].end+"",S,N,F,U,V;return{c(){e=Oe("div"),n=Oe("p"),n.textContent="Now is the time to...",s=ht(),a=Oe("h3"),h=_t(c),f=ht(),p=Oe("h4"),b=_t(g),v=ht(),E=Oe("p"),M=_t(A),y=_t(" - "),S=_t(I),N=ht(),F=Oe("progress"),Ee(n,"class","text-slate-600"),Ee(a,"class","text-5xl my-3"),Ee(p,"class","text-xl my-3"),Ee(E,"class","my-3"),Ee(F,"class","progress bg-stone-900 progress-primary"),F.value=U=i[1]-i[0].startParsed,Ee(F,"max",V=i[0].endParsed-i[0].startParsed)},m(H,re){wn(H,e,re),z(e,n),z(e,s),z(e,a),z(a,h),z(e,f),z(e,p),z(p,b),z(e,v),z(e,E),z(E,M),z(E,y),z(E,S),z(e,N),z(e,F)},p(H,re){re&1&&c!==(c=H[2][H[0].id].context+"")&&wo(h,c),re&1&&g!==(g=H[2][H[0].id].detail+"")&&wo(b,g),re&1&&A!==(A=H[0].start+"")&&wo(M,A),re&1&&I!==(I=H[0].end+"")&&wo(S,I),re&3&&U!==(U=H[1]-H[0].startParsed)&&(F.value=U),re&1&&V!==(V=H[0].endParsed-H[0].startParsed)&&Ee(F,"max",V)},d(H){H&&un(e)}}}function _A(i){let e,n=i[0]&&s_(i);return{c(){n&&n.c(),e=x1()},m(s,a){n&&n.m(s,a),wn(s,e,a)},p(s,[a]){s[0]?n?n.p(s,a):(n=s_(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:pt,o:pt,d(s){n&&n.d(s),s&&un(e)}}}function yA(i,e,n){let s,a,c=Date.now(),h=J0.reduce((p,g)=>(p[g.id]=g,p),{});$l(async()=>{a=setInterval(f,1e3),f()});const f=()=>{n(1,c=Date.now()),!(s&&c<s.endParsed)&&n(0,s=pA.find(p=>c>=p.startParsed&&c<p.endParsed))};return f_(()=>{clearInterval(a)}),[s,c,h]}class bA extends ji{constructor(e){super(),Bi(this,e,yA,_A,xi,{})}}function wA(i){let e;return{c(){e=_t("TODO.")},m(n,s){wn(n,e,s)},p:pt,i:pt,o:pt,d(n){n&&un(e)}}}class IA extends ji{constructor(e){super(),Bi(this,e,null,wA,xi,{})}}class EA extends ji{constructor(e){super(),Bi(this,e,null,null,xi,{})}}function SA(i){let e;return{c(){e=_t("TODO.")},m(n,s){wn(n,e,s)},p:pt,i:pt,o:pt,d(n){n&&un(e)}}}class CA extends ji{constructor(e){super(),Bi(this,e,null,SA,xi,{})}}function o_(i){let e,n;return e=new bA({}),{c(){Zr(e.$$.fragment)},m(s,a){Fi(e,s,a),n=!0},i(s){n||(Be(e.$$.fragment,s),n=!0)},o(s){ft(e.$$.fragment,s),n=!1},d(s){Ui(e,s)}}}function a_(i){let e,n;return e=new IA({}),{c(){Zr(e.$$.fragment)},m(s,a){Fi(e,s,a),n=!0},i(s){n||(Be(e.$$.fragment,s),n=!0)},o(s){ft(e.$$.fragment,s),n=!1},d(s){Ui(e,s)}}}function l_(i){let e,n;return e=new EA({}),{c(){Zr(e.$$.fragment)},m(s,a){Fi(e,s,a),n=!0},i(s){n||(Be(e.$$.fragment,s),n=!0)},o(s){ft(e.$$.fragment,s),n=!1},d(s){Ui(e,s)}}}function c_(i){let e,n;return e=new CA({}),{c(){Zr(e.$$.fragment)},m(s,a){Fi(e,s,a),n=!0},i(s){n||(Be(e.$$.fragment,s),n=!0)},o(s){ft(e.$$.fragment,s),n=!1},d(s){Ui(e,s)}}}function TA(i){let e,n,s,a,c,h,f,p,g,b=new Date().toLocaleDateString()+"",v,E,A=(i[0]*100).toFixed(2)+"",M,y,I,S,N,F,U,V,H,re,et,Ot,wt,Z,De,ce,Ut,ue,W,me,Ki,qi,fe=i[1]==0&&o_(),Le=i[1]==1&&a_(),be=i[1]==2&&l_(),We=i[1]==3&&c_();return{c(){e=Oe("div"),n=Oe("h1"),n.textContent="Journal Theme",s=ht(),a=Oe("p"),c=_t("Hi, "),h=Oe("a"),h.textContent=`${kh.displayName}`,f=ht(),p=Oe("p"),g=Oe("b"),v=_t(b),E=_t(" ("),M=_t(A),y=_t("%)"),I=ht(),S=Oe("progress"),F=ht(),U=Oe("div"),V=Oe("div"),H=Oe("button"),H.textContent="Summary",re=ht(),et=Oe("button"),et.textContent="Your Tasks",Ot=ht(),wt=Oe("button"),wt.textContent="Historical Journal",Z=ht(),De=Oe("button"),De.textContent="Daily Routine Clock",ce=ht(),fe&&fe.c(),Ut=ht(),Le&&Le.c(),ue=ht(),be&&be.c(),W=ht(),We&&We.c(),Ee(n,"class","text-3xl my-2"),Ee(h,"href","?login=1"),Ee(h,"title","Click to logout"),Ee(p,"class","my-2"),Ee(S,"title",N=(i[0]*100).toFixed(5)+"%"),Ee(S,"class","progress progress-secondary"),S.value=i[0],Ee(S,"max",1),Ee(e,"class","text-center text-white-100 my-3"),Ee(H,"class","tab tab-lifted"),qn(H,"tab-active",i[1]==0),Ee(et,"class","tab tab-lifted"),qn(et,"tab-active",i[1]==1),Ee(wt,"class","tab tab-lifted"),qn(wt,"tab-active",i[1]==2),Ee(De,"class","tab tab-lifted"),qn(De,"tab-active",i[1]==3),Ee(V,"class","tabs mb-5"),Ee(U,"class","container max-w-screen-sm mx-auto px-5")},m(we,tt){wn(we,e,tt),z(e,n),z(e,s),z(e,a),z(a,c),z(a,h),z(e,f),z(e,p),z(p,g),z(g,v),z(g,E),z(g,M),z(g,y),z(e,I),z(e,S),wn(we,F,tt),wn(we,U,tt),z(U,V),z(V,H),z(V,re),z(V,et),z(V,Ot),z(V,wt),z(V,Z),z(V,De),z(U,ce),fe&&fe.m(U,null),z(U,Ut),Le&&Le.m(U,null),z(U,ue),be&&be.m(U,null),z(U,W),We&&We.m(U,null),me=!0,Ki||(qi=[fo(h,"click",kA),fo(H,"click",i[2]),fo(et,"click",i[3]),fo(wt,"click",i[4]),fo(De,"click",i[5])],Ki=!0)},p(we,[tt]){(!me||tt&1)&&A!==(A=(we[0]*100).toFixed(2)+"")&&wo(M,A),(!me||tt&1&&N!==(N=(we[0]*100).toFixed(5)+"%"))&&Ee(S,"title",N),(!me||tt&1)&&(S.value=we[0]),(!me||tt&2)&&qn(H,"tab-active",we[1]==0),(!me||tt&2)&&qn(et,"tab-active",we[1]==1),(!me||tt&2)&&qn(wt,"tab-active",we[1]==2),(!me||tt&2)&&qn(De,"tab-active",we[1]==3),we[1]==0?fe?tt&2&&Be(fe,1):(fe=o_(),fe.c(),Be(fe,1),fe.m(U,Ut)):fe&&(gl(),ft(fe,1,1,()=>{fe=null}),vl()),we[1]==1?Le?tt&2&&Be(Le,1):(Le=a_(),Le.c(),Be(Le,1),Le.m(U,ue)):Le&&(gl(),ft(Le,1,1,()=>{Le=null}),vl()),we[1]==2?be?tt&2&&Be(be,1):(be=l_(),be.c(),Be(be,1),be.m(U,W)):be&&(gl(),ft(be,1,1,()=>{be=null}),vl()),we[1]==3?We?tt&2&&Be(We,1):(We=c_(),We.c(),Be(We,1),We.m(U,null)):We&&(gl(),ft(We,1,1,()=>{We=null}),vl())},i(we){me||(Be(fe),Be(Le),Be(be),Be(We),me=!0)},o(we){ft(fe),ft(Le),ft(be),ft(We),me=!1},d(we){we&&un(e),we&&un(F),we&&un(U),fe&&fe.d(),Le&&Le.d(),be&&be.d(),We&&We.d(),Ki=!1,Qr(qi)}}}function kA(){localStorage.removeItem("user"),window.location.href="?login=1"}function RA(i,e,n){let s=r_(new Date),a,c=0;return $l(async()=>{a=setInterval(()=>{n(0,s=r_(new Date))},1e3)}),f_(()=>{clearInterval(a)}),[s,c,()=>n(1,c=0),()=>n(1,c=1),()=>n(1,c=2),()=>n(1,c=3)]}class AA extends ji{constructor(e){super(),Bi(this,e,RA,TA,xi,{})}}function NA(i){let e,n;return e=new AA({}),{c(){Zr(e.$$.fragment)},m(s,a){Fi(e,s,a),n=!0},i(s){n||(Be(e.$$.fragment,s),n=!0)},o(s){ft(e.$$.fragment,s),n=!1},d(s){Ui(e,s)}}}function PA(i){let e,n;return e=new vA({}),{c(){Zr(e.$$.fragment)},m(s,a){Fi(e,s,a),n=!0},i(s){n||(Be(e.$$.fragment,s),n=!0)},o(s){ft(e.$$.fragment,s),n=!1},d(s){Ui(e,s)}}}function OA(i){let e,n,s,a;const c=[PA,NA],h=[];function f(p,g){return p[0]?0:kh?1:-1}return~(n=f(i))&&(s=h[n]=c[n](i)),{c(){e=Oe("main"),s&&s.c()},m(p,g){wn(p,e,g),~n&&h[n].m(e,null),a=!0},p:pt,i(p){a||(Be(s),a=!0)},o(p){ft(s),a=!1},d(p){p&&un(e),~n&&h[n].d()}}}function DA(i){var e=!!new URLSearchParams(window.location.search).get("login");return $l(()=>{kh==null&&!e&&(window.location.href="?login=1")}),[e]}class LA extends ji{constructor(e){super(),Bi(this,e,DA,OA,xi,{})}}new LA({target:document.getElementById("app")});
