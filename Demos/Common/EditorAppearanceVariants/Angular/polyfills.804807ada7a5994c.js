"use strict";(self.webpackChunkcommon_editorappearancevariants=self.webpackChunkcommon_editorappearancevariants||[]).push([[429],{332:()=>{!function(e){const n=e.performance;function i(L){n&&n.mark&&n.mark(L)}function o(L,T){n&&n.measure&&n.measure(L,T)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function a(L){return c+L}const y=!0===e[a("forceDuplicateZoneCheck")];if(e.Zone){if(y||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let d=(()=>{class L{static#e=this.__symbol__=a;static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=L.current;for(;t.parent;)t=t.parent;return t}static get current(){return U.zone}static get currentTask(){return re}static __load_patch(t,r,k=!1){if(oe.hasOwnProperty(t)){if(!k&&y)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const C="Zone:"+t;i(C),oe[t]=r(e,L,z),o(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(t,r){this._parent=t,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}get(t){const r=this.getZoneWith(t);if(r)return r._properties[t]}getZoneWith(t){let r=this;for(;r;){if(r._properties.hasOwnProperty(t))return r;r=r._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,r){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const k=this._zoneDelegate.intercept(this,t,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(t,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,t,r,k,C)}finally{U=U.parent}}runGuarded(t,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,t,r,k,C)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{U=U.parent}}runTask(t,r,k){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===x&&(t.type===Q||t.type===P))return;const C=t.state!=E;C&&t._transitionTo(E,A),t.runCount++;const $=re;re=t,U={parent:U,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==x&&t.state!==h&&(t.type==Q||t.data&&t.data.isPeriodic?C&&t._transitionTo(A,E):(t.runCount=0,this._updateTaskCount(t,-1),C&&t._transitionTo(x,E,x))),U=U.parent,re=$}}scheduleTask(t){if(t.zone&&t.zone!==this){let k=this;for(;k;){if(k===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);k=k.parent}}t._transitionTo(X,x);const r=[];t._zoneDelegates=r,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(k){throw t._transitionTo(h,X,x),this._zoneDelegate.handleError(this,k),k}return t._zoneDelegates===r&&this._updateTaskCount(t,1),t.state==X&&t._transitionTo(A,X),t}scheduleMicroTask(t,r,k,C){return this.scheduleTask(new p(I,t,r,k,C,void 0))}scheduleMacroTask(t,r,k,C,$){return this.scheduleTask(new p(P,t,r,k,C,$))}scheduleEventTask(t,r,k,C,$){return this.scheduleTask(new p(Q,t,r,k,C,$))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===A||t.state===E){t._transitionTo(G,A,E);try{this._zoneDelegate.cancelTask(this,t)}catch(r){throw t._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(t,-1),t._transitionTo(x,G),t.runCount=0,t}}_updateTaskCount(t,r){const k=t._zoneDelegates;-1==r&&(t._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(t.type,r)}}return L})();const b={name:"",onHasTask:(L,T,t,r)=>L.hasTask(t,r),onScheduleTask:(L,T,t,r)=>L.scheduleTask(t,r),onInvokeTask:(L,T,t,r,k,C)=>L.invokeTask(t,r,k,C),onCancelTask:(L,T,t,r)=>L.cancelTask(t,r)};class v{constructor(T,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||t&&t._hasTaskZS)&&(this._hasTaskZS=k?r:b,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(T,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,t):new d(T,t)}intercept(T,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,t,r):t}invoke(T,t,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,t,r,k,C):t.apply(r,k)}handleError(T,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,t)}scheduleTask(T,t){let r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,t),r||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=I)throw new Error("Task is missing scheduleFn.");R(t)}return r}invokeTask(T,t,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,t,r,k):t.callback.apply(r,k)}cancelTask(T,t){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r}hasTask(T,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,t)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,t){const r=this._taskCounts,k=r[T],C=r[T]=k+t;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class p{constructor(T,t,r,k,C,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=t,this.data=k,this.scheduleFn=C,this.cancelFn=$,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=T===Q&&k&&k.useG?p.invokeTask:function(){return p.invokeTask.call(e,l,this,arguments)}}static invokeTask(T,t,r){T||(T=this),ee++;try{return T.runCount++,T.zone.runTask(T,t,r)}finally{1==ee&&_(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,X)}_transitionTo(T,t,r){if(this._state!==t&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${t}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==x&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const M=a("setTimeout"),Z=a("Promise"),N=a("then");let J,B=[],H=!1;function q(L){if(J||e[Z]&&(J=e[Z].resolve(0)),J){let T=J[N];T||(T=J.then),T.call(J,L)}else e[M](L,0)}function R(L){0===ee&&0===B.length&&q(_),L&&B.push(L)}function _(){if(!H){for(H=!0;B.length;){const L=B;B=[];for(let T=0;T<L.length;T++){const t=L[T];try{t.zone.runTask(t,null,null)}catch(r){z.onUnhandledError(r)}}}z.microtaskDrainDone(),H=!1}}const K={name:"NO ZONE"},x="notScheduled",X="scheduling",A="scheduled",E="running",G="canceling",h="unknown",I="microTask",P="macroTask",Q="eventTask",oe={},z={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q};let U={parent:null,zone:new d(null,null)},re=null,ee=0;function W(){}o("Zone","Zone"),e.Zone=d}(typeof window<"u"&&window||typeof self<"u"&&self||global);const ie=Object.getOwnPropertyDescriptor,Ee=Object.defineProperty,de=Object.getPrototypeOf,ge=Object.create,Ve=Array.prototype.slice,Se="addEventListener",Oe="removeEventListener",Ze=Zone.__symbol__(Se),Ne=Zone.__symbol__(Oe),ce="true",ae="false",ke=Zone.__symbol__("");function Ie(e,n){return Zone.current.wrap(e,n)}function Me(e,n,i,o,c){return Zone.current.scheduleMacroTask(e,n,i,o,c)}const j=Zone.__symbol__,Pe=typeof window<"u",Te=Pe?window:void 0,Y=Pe&&Te||"object"==typeof self&&self||global,ct="removeAttribute";function Le(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=Ie(e[i],n+"_"+i));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Be=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),Ae=!we&&!Be&&!(!Pe||!Te.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Be&&!(!Pe||!Te.HTMLElement),Re={},We=function(e){if(!(e=e||Y.event))return;let n=Re[e.type];n||(n=Re[e.type]=j("ON_PROPERTY"+e.type));const i=this||e.target||Y,o=i[n];let c;return Ae&&i===Te&&"error"===e.type?(c=o&&o.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===c&&e.preventDefault()):(c=o&&o.apply(this,arguments),null!=c&&!c&&e.preventDefault()),c};function qe(e,n,i){let o=ie(e,n);if(!o&&i&&ie(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=j("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete o.writable,delete o.value;const a=o.get,y=o.set,d=n.slice(2);let b=Re[d];b||(b=Re[d]=j("ON_PROPERTY"+d)),o.set=function(v){let p=this;!p&&e===Y&&(p=Y),p&&("function"==typeof p[b]&&p.removeEventListener(d,We),y&&y.call(p,null),p[b]=v,"function"==typeof v&&p.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&e===Y&&(v=Y),!v)return null;const p=v[b];if(p)return p;if(a){let M=a.call(this);if(M)return o.set.call(this,M),"function"==typeof v[ct]&&v.removeAttribute(n),M}return null},Ee(e,n,o),e[c]=!0}function Xe(e,n,i){if(n)for(let o=0;o<n.length;o++)qe(e,"on"+n[o],i);else{const o=[];for(const c in e)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)qe(e,o[c],i)}}const ne=j("originalInstance");function ve(e){const n=Y[e];if(!n)return;Y[j(e)]=n,Y[e]=function(){const c=Le(arguments,e);switch(c.length){case 0:this[ne]=new n;break;case 1:this[ne]=new n(c[0]);break;case 2:this[ne]=new n(c[0],c[1]);break;case 3:this[ne]=new n(c[0],c[1],c[2]);break;case 4:this[ne]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},ue(Y[e],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===e&&"responseBlob"===o||function(c){"function"==typeof i[c]?Y[e].prototype[c]=function(){return this[ne][c].apply(this[ne],arguments)}:Ee(Y[e].prototype,c,{set:function(a){"function"==typeof a?(this[ne][c]=Ie(a,e+"."+c),ue(this[ne][c],a)):this[ne][c]=a},get:function(){return this[ne][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(Y[e][o]=n[o])}function le(e,n,i){let o=e;for(;o&&!o.hasOwnProperty(n);)o=de(o);!o&&e[n]&&(o=e);const c=j(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Fe(o&&ie(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},ue(o[n],a)}return a}function lt(e,n,i){let o=null;function c(a){const y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=le(e,n,a=>function(y,d){const b=i(y,d);return b.cbIdx>=0&&"function"==typeof d[b.cbIdx]?Me(b.name,d[b.cbIdx],b,c):a.apply(y,d)})}function ue(e,n){e[j("OriginalDelegate")]=n}let ze=!1,je=!1;function ft(){if(ze)return je;ze=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(je=!0)}catch{}return je}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,y=i.symbol,d=[],b=!0===e[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=y("Promise"),p=y("then"),M="__creationTrace__";i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const Z=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[Z];"function"==typeof u&&u.call(this,l)}catch{}}function B(l){return l&&l.then}function H(l){return l}function J(l){return t.reject(l)}const q=y("state"),R=y("value"),_=y("finally"),K=y("parentPromiseValue"),x=y("parentPromiseState"),X="Promise.then",A=null,E=!0,G=!1,h=0;function I(l,u){return s=>{try{z(l,u,s)}catch(f){z(l,!1,f)}}}const P=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",oe=y("currentTaskTrace");function z(l,u,s){const f=P();if(l===s)throw new TypeError(Q);if(l[q]===A){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(w){return f(()=>{z(l,!1,w)})(),l}if(u!==G&&s instanceof t&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==A)re(s),z(l,s[q],s[R]);else if(u!==G&&"function"==typeof g)try{g.call(s,f(I(l,u)),f(I(l,!1)))}catch(w){f(()=>{z(l,!1,w)})()}else{l[q]=u;const w=l[R];if(l[R]=s,l[_]===_&&u===E&&(l[q]=l[x],l[R]=l[K]),u===G&&s instanceof Error){const m=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];m&&c(s,oe,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<w.length;)ee(l,w[m++],w[m++],w[m++],w[m++]);if(0==w.length&&u==G){l[q]=h;let m=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(D){m=D}b&&(m.throwOriginal=!0),m.rejection=s,m.promise=l,m.zone=n.current,m.task=n.currentTask,d.push(m),i.scheduleMicroTask()}}}return l}const U=y("rejectionHandledHandler");function re(l){if(l[q]===h){try{const u=n[U];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch{}l[q]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ee(l,u,s,f,g){re(l);const w=l[q],m=w?"function"==typeof f?f:H:"function"==typeof g?g:J;u.scheduleMicroTask(X,()=>{try{const D=l[R],S=!!s&&_===s[_];S&&(s[K]=D,s[x]=w);const O=u.run(m,void 0,S&&m!==J&&m!==H?[]:[D]);z(s,!0,O)}catch(D){z(s,!1,D)}},s)}const L=function(){},T=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return z(new this(null),E,u)}static reject(u){return z(new this(null),G,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let m of u)f++,s.push(t.resolve(m))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const w=[];return new t((m,D)=>{for(let S=0;S<s.length;S++)s[S].then(O=>{g||(g=!0,m(O))},O=>{w.push(O),f--,0===f&&(g=!0,D(new T(w,"All promises were rejected")))})})}static race(u){let s,f,g=new this((D,S)=>{s=D,f=S});function w(D){s(D)}function m(D){f(D)}for(let D of u)B(D)||(D=this.resolve(D)),D.then(w,m);return g}static all(u){return t.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,w=new this((O,V)=>{f=O,g=V}),m=2,D=0;const S=[];for(let O of u){B(O)||(O=this.resolve(O));const V=D;try{O.then(F=>{S[V]=s?s.thenCallback(F):F,m--,0===m&&f(S)},F=>{s?(S[V]=s.errorCallback(F),m--,0===m&&f(S)):g(F)})}catch(F){g(F)}m++,D++}return m-=2,0===m&&f(S),w}constructor(u){const s=this;if(!(s instanceof t))throw new Error("Must be an instanceof Promise.");s[q]=A,s[R]=[];try{const f=P();u&&u(f(I(s,E)),f(I(s,G)))}catch(f){z(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(u,s){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||t);const g=new f(L),w=n.current;return this[q]==A?this[R].push(w,g,u,s):ee(this,w,g,u,s),g}catch(u){return this.then(null,u)}finally(u){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=t);const f=new s(L);f[_]=_;const g=n.current;return this[q]==A?this[R].push(g,f,u,u):ee(this,g,f,u,u),f}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const r=e[v]=e.Promise;e.Promise=t;const k=y("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[p]=f,l.prototype.then=function(g,w){return new t((D,S)=>{f.call(this,D,S)}).then(g,w)},l[k]=!0}return i.patchThen=C,r&&(C(r),le(e,"fetch",l=>function $(l){return function(u,s){let f=l.apply(u,s);if(f instanceof t)return f;let g=f.constructor;return g[k]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=j("OriginalDelegate"),o=j("Promise"),c=j("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const p=e[o];if(p)return n.call(p)}if(this===Error){const p=e[c];if(p)return n.call(p)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});let ye=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ye=!1}const ht={useG:!0},te={},Ye={},$e=new RegExp("^"+ke+"(\\w+)(true|false)$"),Ke=j("propagationStopped");function Je(e,n){const i=(n?n(e):e)+ae,o=(n?n(e):e)+ce,c=ke+i,a=ke+o;te[e]={},te[e][ae]=c,te[e][ce]=a}function dt(e,n,i,o){const c=o&&o.add||Se,a=o&&o.rm||Oe,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",b=j(c),v="."+c+":",p="prependListener",M="."+p+":",Z=function(R,_,K){if(R.isRemoved)return;const x=R.callback;let X;"object"==typeof x&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);try{R.invoke(R,_,[K])}catch(E){X=E}const A=R.options;return A&&"object"==typeof A&&A.once&&_[a].call(_,K.type,R.originalDelegate?R.originalDelegate:R.callback,A),X};function N(R,_,K){if(!(_=_||e.event))return;const x=R||_.target||e,X=x[te[_.type][K?ce:ae]];if(X){const A=[];if(1===X.length){const E=Z(X[0],x,_);E&&A.push(E)}else{const E=X.slice();for(let G=0;G<E.length&&(!_||!0!==_[Ke]);G++){const h=Z(E[G],x,_);h&&A.push(h)}}if(1===A.length)throw A[0];for(let E=0;E<A.length;E++){const G=A[E];n.nativeScheduleMicroTask(()=>{throw G})}}}const B=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function J(R,_){if(!R)return!1;let K=!0;_&&void 0!==_.useG&&(K=_.useG);const x=_&&_.vh;let X=!0;_&&void 0!==_.chkDup&&(X=_.chkDup);let A=!1;_&&void 0!==_.rt&&(A=_.rt);let E=R;for(;E&&!E.hasOwnProperty(c);)E=de(E);if(!E&&R[c]&&(E=R),!E||E[b])return!1;const G=_&&_.eventNameToString,h={},I=E[b]=E[c],P=E[j(a)]=E[a],Q=E[j(y)]=E[y],oe=E[j(d)]=E[d];let z;_&&_.prepend&&(z=E[j(_.prepend)]=E[_.prepend]);const t=K?function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?H:B,h.options)}:function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},r=K?function(s){if(!s.isRemoved){const f=te[s.eventName];let g;f&&(g=f[s.capture?ce:ae]);const w=g&&s.target[g];if(w)for(let m=0;m<w.length;m++)if(w[m]===s){w.splice(m,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?H:B,s.options)}:function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},$=Zone[j("UNPATCHED_EVENTS")],l=e[j("PASSIVE_EVENTS")],u=function(s,f,g,w,m=!1,D=!1){return function(){const S=this||e;let O=arguments[0];_&&_.transferEventName&&(O=_.transferEventName(O));let V=arguments[1];if(!V)return s.apply(this,arguments);if(we&&"uncaughtException"===O)return s.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,S,arguments))return;const fe=ye&&!!l&&-1!==l.indexOf(O),se=function U(s,f){return!ye&&"object"==typeof s&&s?!!s.capture:ye&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],fe);if($)for(let _e=0;_e<$.length;_e++)if(O===$[_e])return fe?s.call(S,O,V,se):s.apply(this,arguments);const xe=!!se&&("boolean"==typeof se||se.capture),nt=!(!se||"object"!=typeof se)&&se.once,kt=Zone.current;let Ge=te[O];Ge||(Je(O,G),Ge=te[O]);const rt=Ge[xe?ce:ae];let De,me=S[rt],ot=!1;if(me){if(ot=!0,X)for(let _e=0;_e<me.length;_e++)if(C(me[_e],V))return}else me=S[rt]=[];const st=S.constructor.name,it=Ye[st];it&&(De=it[O]),De||(De=st+f+(G?G(O):O)),h.options=se,nt&&(h.options.once=!1),h.target=S,h.capture=xe,h.eventName=O,h.isExisting=ot;const be=K?ht:void 0;be&&(be.taskData=h);const he=kt.scheduleEventTask(De,V,be,g,w);return h.target=null,be&&(be.taskData=null),nt&&(se.once=!0),!ye&&"boolean"==typeof he.options||(he.options=se),he.target=S,he.capture=xe,he.eventName=O,F&&(he.originalDelegate=V),D?me.unshift(he):me.push(he),m?S:void 0}};return E[c]=u(I,v,t,r,A),z&&(E[p]=u(z,M,function(s){return z.call(h.target,h.eventName,s.invoke,h.options)},r,A,!0)),E[a]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],w=!!g&&("boolean"==typeof g||g.capture),m=arguments[1];if(!m)return P.apply(this,arguments);if(x&&!x(P,m,s,arguments))return;const D=te[f];let S;D&&(S=D[w?ce:ae]);const O=S&&s[S];if(O)for(let V=0;V<O.length;V++){const F=O[V];if(C(F,m))return O.splice(V,1),F.isRemoved=!0,0===O.length&&(F.allRemoved=!0,s[S]=null,"string"==typeof f)&&(s[ke+"ON_PROPERTY"+f]=null),F.zone.cancelTask(F),A?s:void 0}return P.apply(this,arguments)},E[y]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],w=Qe(s,G?G(f):f);for(let m=0;m<w.length;m++){const D=w[m];g.push(D.originalDelegate?D.originalDelegate:D.callback)}return g},E[d]=function(){const s=this||e;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=te[f];if(g){const D=s[g[ae]],S=s[g[ce]];if(D){const O=D.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(S){const O=S.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const g=Object.keys(s);for(let w=0;w<g.length;w++){const D=$e.exec(g[w]);let S=D&&D[1];S&&"removeListener"!==S&&this[d].call(this,S)}this[d].call(this,"removeListener")}if(A)return this},ue(E[c],I),ue(E[a],P),oe&&ue(E[d],oe),Q&&ue(E[y],Q),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=J(i[R],o);return q}function Qe(e,n){if(!n){const a=[];for(let y in e){const d=$e.exec(y);let b=d&&d[1];if(b&&(!n||b===n)){const v=e[y];if(v)for(let p=0;p<v.length;p++)a.push(v[p])}}return a}let i=te[n];i||(Je(n),i=te[n]);const o=e[i[ae]],c=e[i[ce]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Ke]=!0,o&&o.apply(c,a)})}function Et(e,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const y=n[a]=n[o];n[o]=function(d,b,v){return b&&b.prototype&&c.forEach(function(p){const M=`${i}.${o}::`+p,Z=b.prototype;try{if(Z.hasOwnProperty(p)){const N=e.ObjectGetOwnPropertyDescriptor(Z,p);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(b.prototype,p,N)):Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],M))}else Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],M))}catch{}}),y.call(n,d,b,v)},e.attachOriginToPatched(n[o],y)}function et(e,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===e);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(e,n,i,o){e&&Xe(e,et(e,n,i),o)}function He(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,i)=>{const o=He(e);i.patchOnProperties=Xe,i.patchMethod=le,i.bindArguments=Le,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");e[a]&&(e[c]=e[a]),e[c]&&(n[c]=n[a]=e[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=Ee,i.ObjectGetOwnPropertyDescriptor=ie,i.ObjectCreate=ge,i.ArraySlice=Ve,i.patchClass=ve,i.wrapWithCurrentZone=Ie,i.filterProperties=et,i.attachOriginToPatched=ue,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Et,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:te,eventNames:o,isBrowser:Ae,isMix:Ue,isNode:we,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ke,ADD_EVENT_LISTENER_STR:Se,REMOVE_EVENT_LISTENER_STR:Oe})});const Ce=j("zoneTask");function pe(e,n,i,o){let c=null,a=null;i+=o;const y={};function d(v){const p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=c.apply(e,p.args),v}function b(v){return a.call(e,v.data.handleId)}c=le(e,n+=o,v=>function(p,M){if("function"==typeof M[0]){const Z={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete y[Z.handleId]:Z.handleId&&(Z.handleId[Ce]=null))}};const B=Me(n,M[0],Z,d,b);if(!B)return B;const H=B.data.handleId;return"number"==typeof H?y[H]=B:H&&(H[Ce]=B),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(B.ref=H.ref.bind(H),B.unref=H.unref.bind(H)),"number"==typeof H||H?H:B}return v.apply(e,M)}),a=le(e,i,v=>function(p,M){const Z=M[0];let N;"number"==typeof Z?N=y[Z]:(N=Z&&Z[Ce],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete y[Z]:Z&&(Z[Ce]=null),N.zone.cancelTask(N)):v.apply(e,M)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",i="clear";pe(e,n,i,"Timeout"),pe(e,n,i,"Interval"),pe(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{pe(e,"request","cancel","AnimationFrame"),pe(e,"mozRequest","mozCancel","AnimationFrame"),pe(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)le(e,i[o],(a,y,d)=>function(b,v){return n.current.run(a,e,v,d)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function gt(e,n){n.patchEventPrototype(e,n)})(e,i),function mt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let b=0;b<i.length;b++){const v=i[b],Z=y+(v+a),N=y+(v+c);o[v]={},o[v][a]=Z,o[v][c]=N}const d=e.EventTarget;d&&d.prototype&&n.patchEventTarget(e,n,[d&&d.prototype])}(e,i);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{ve("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{ve("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function Tt(e,n){if(we&&!Ue||Zone[e.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(Ae){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,He(c),i&&i.concat(a),de(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,He(a.prototype),i)}}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function pt(e,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function b(v){const p=v.XMLHttpRequest;if(!p)return;const M=p.prototype;let N=M[Ze],B=M[Ne];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const I=h.prototype;N=I[Ze],B=I[Ne]}}const H="readystatechange",J="scheduled";function q(h){const I=h.data,P=I.target;P[a]=!1,P[d]=!1;const Q=P[c];N||(N=P[Ze],B=P[Ne]),Q&&B.call(P,H,Q);const oe=P[c]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[a]&&h.state===J){const U=P[n.__symbol__("loadfalse")];if(0!==P.status&&U&&U.length>0){const re=h.invoke;h.invoke=function(){const ee=P[n.__symbol__("loadfalse")];for(let W=0;W<ee.length;W++)ee[W]===h&&ee.splice(W,1);!I.aborted&&h.state===J&&re.call(h)},U.push(h)}else h.invoke()}else!I.aborted&&!1===P[a]&&(P[d]=!0)};return N.call(P,H,oe),P[i]||(P[i]=h),E.apply(P,I.args),P[a]=!0,h}function R(){}function _(h){const I=h.data;return I.aborted=!0,G.apply(I.target,I.args)}const K=le(M,"open",()=>function(h,I){return h[o]=0==I[2],h[y]=I[1],K.apply(h,I)}),X=j("fetchTaskAborting"),A=j("fetchTaskScheduling"),E=le(M,"send",()=>function(h,I){if(!0===n.current[A]||h[o])return E.apply(h,I);{const P={target:h,url:h[y],isPeriodic:!1,args:I,aborted:!1},Q=Me("XMLHttpRequest.send",R,P,q,_);h&&!0===h[d]&&!P.aborted&&Q.state===J&&Q.invoke()}}),G=le(M,"abort",()=>function(h,I){const P=function Z(h){return h[i]}(h);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[X])return G.apply(h,I)})}(e);const i=j("xhrTask"),o=j("xhrSync"),c=j("xhrListener"),a=j("xhrScheduled"),y=j("xhrURL"),d=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const i=e.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=e[c];if(a){if(!Fe(ie(e,c)))continue;e[c]=(d=>{const b=function(){return d.apply(this,Le(arguments,i+"."+c))};return ue(b,d),b})(a)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(o){return function(c){Qe(e,o).forEach(y=>{const d=e.PromiseRejectionEvent;if(d){const b=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(b)}})}}e.PromiseRejectionEvent&&(n[j("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[j("rejectionHandledHandler")]=i("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{!function yt(e,n){n.patchMethod(e,"queueMicrotask",i=>function(o,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0])})}(e,i)})},493:(ie,Ee,de)=>{de(332)}},ie=>{ie(ie.s=493)}]);