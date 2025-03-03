function T(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var u={},x;function C(){if(x)return u;x=1,Object.defineProperty(u,"__esModule",{value:!0}),u.parse=b,u.serialize=v;const c=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,p=/^[\u0021-\u003A\u003C-\u007E]*$/,w=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,g=/^[\u0020-\u003A\u003D-\u007E]*$/,S=Object.prototype.toString,E=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function b(t,i){const e=new E,a=t.length;if(a<2)return e;const o=i?.decode||I;let r=0;do{const n=t.indexOf("=",r);if(n===-1)break;const s=t.indexOf(";",r),d=s===-1?a:s;if(n>d){r=t.lastIndexOf(";",n-1)+1;continue}const m=l(t,r,n),k=f(t,n,m),y=t.slice(m,k);if(e[y]===void 0){let h=l(t,n+1,d),$=f(t,d,h);const A=o(t.slice(h,$));e[y]=A}r=d+1}while(r<a);return e}function l(t,i,e){do{const a=t.charCodeAt(i);if(a!==32&&a!==9)return i}while(++i<e);return e}function f(t,i,e){for(;i>e;){const a=t.charCodeAt(--i);if(a!==32&&a!==9)return i+1}return e}function v(t,i,e){const a=e?.encode||encodeURIComponent;if(!c.test(t))throw new TypeError(`argument name is invalid: ${t}`);const o=a(i);if(!p.test(o))throw new TypeError(`argument val is invalid: ${i}`);let r=t+"="+o;if(!e)return r;if(e.maxAge!==void 0){if(!Number.isInteger(e.maxAge))throw new TypeError(`option maxAge is invalid: ${e.maxAge}`);r+="; Max-Age="+e.maxAge}if(e.domain){if(!w.test(e.domain))throw new TypeError(`option domain is invalid: ${e.domain}`);r+="; Domain="+e.domain}if(e.path){if(!g.test(e.path))throw new TypeError(`option path is invalid: ${e.path}`);r+="; Path="+e.path}if(e.expires){if(!O(e.expires)||!Number.isFinite(e.expires.valueOf()))throw new TypeError(`option expires is invalid: ${e.expires}`);r+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(r+="; HttpOnly"),e.secure&&(r+="; Secure"),e.partitioned&&(r+="; Partitioned"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():void 0){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${e.priority}`)}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${e.sameSite}`)}return r}function I(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function O(t){return S.call(t)==="[object Date]"}return u}C();export{T as g};
