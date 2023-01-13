function yS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vo={},SS={get exports(){return Vo},set exports(e){Vo=e}},Tl={},S={},bS={get exports(){return S},set exports(e){S=e}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),xS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),ES=Symbol.for("react.strict_mode"),kS=Symbol.for("react.profiler"),CS=Symbol.for("react.provider"),RS=Symbol.for("react.context"),PS=Symbol.for("react.forward_ref"),IS=Symbol.for("react.suspense"),TS=Symbol.for("react.memo"),OS=Symbol.for("react.lazy"),wp=Symbol.iterator;function NS(e){return e===null||typeof e!="object"?null:(e=wp&&e[wp]||e["@@iterator"],typeof e=="function"?e:null)}var Cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Pv={};function Ji(e,t,n){this.props=e,this.context=t,this.refs=Pv,this.updater=n||Cv}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iv(){}Iv.prototype=Ji.prototype;function Pf(e,t,n){this.props=e,this.context=t,this.refs=Pv,this.updater=n||Cv}var If=Pf.prototype=new Iv;If.constructor=Pf;Rv(If,Ji.prototype);If.isPureReactComponent=!0;var Sp=Array.isArray,Tv=Object.prototype.hasOwnProperty,Tf={current:null},Ov={key:!0,ref:!0,__self:!0,__source:!0};function Nv(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Tv.call(t,r)&&!Ov.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:wa,type:e,key:o,ref:a,props:i,_owner:Tf.current}}function AS(e,t){return{$$typeof:wa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Of(e){return typeof e=="object"&&e!==null&&e.$$typeof===wa}function $S(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bp=/\/+/g;function Nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$S(""+e.key):t.toString(36)}function gs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wa:case xS:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Nu(a,0):r,Sp(i)?(n="",e!=null&&(n=e.replace(bp,"$&/")+"/"),gs(i,t,n,"",function(u){return u})):i!=null&&(Of(i)&&(i=AS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Sp(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Nu(o,s);a+=gs(o,t,n,l,i)}else if(l=NS(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Nu(o,s++),a+=gs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(e,t,n){if(e==null)return e;var r=[],i=0;return gs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function MS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},vs={transition:null},DS={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:vs,ReactCurrentOwner:Tf};oe.Children={map:qa,forEach:function(e,t,n){qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qa(e,function(){t++}),t},toArray:function(e){return qa(e,function(t){return t})||[]},only:function(e){if(!Of(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Ji;oe.Fragment=_S;oe.Profiler=kS;oe.PureComponent=Pf;oe.StrictMode=ES;oe.Suspense=IS;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DS;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Tf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Tv.call(t,l)&&!Ov.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:wa,type:e.type,key:i,ref:o,props:r,_owner:a}};oe.createContext=function(e){return e={$$typeof:RS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:CS,_context:e},e.Consumer=e};oe.createElement=Nv;oe.createFactory=function(e){var t=Nv.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:PS,render:e}};oe.isValidElement=Of;oe.lazy=function(e){return{$$typeof:OS,_payload:{_status:-1,_result:e},_init:MS}};oe.memo=function(e,t){return{$$typeof:TS,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(e,t){return ft.current.useCallback(e,t)};oe.useContext=function(e){return ft.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};oe.useEffect=function(e,t){return ft.current.useEffect(e,t)};oe.useId=function(){return ft.current.useId()};oe.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return ft.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};oe.useRef=function(e){return ft.current.useRef(e)};oe.useState=function(e){return ft.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return ft.current.useTransition()};oe.version="18.2.0";(function(e){e.exports=oe})(bS);const ie=wS(S),Wc=yS({__proto__:null,default:ie},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=S,zS=Symbol.for("react.element"),jS=Symbol.for("react.fragment"),FS=Object.prototype.hasOwnProperty,US=LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BS={key:!0,ref:!0,__self:!0,__source:!0};function Av(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)FS.call(t,r)&&!BS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zS,type:e,key:o,ref:a,props:i,_owner:US.current}}Tl.Fragment=jS;Tl.jsx=Av;Tl.jsxs=Av;(function(e){e.exports=Tl})(SS);const Ol=Vo.Fragment,w=Vo.jsx,N=Vo.jsxs;var Hc={},$i={},VS={get exports(){return $i},set exports(e){$i=e}},Rt={},Kc={},WS={get exports(){return Kc},set exports(e){Kc=e}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var V=T.length;T.push(F);e:for(;0<V;){var W=V-1>>>1,P=T[W];if(0<i(P,F))T[W]=F,T[V]=P,V=W;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],V=T.pop();if(V!==F){T[0]=V;e:for(var W=0,P=T.length,D=P>>>1;W<D;){var j=2*(W+1)-1,H=T[j],E=j+1,Y=T[E];if(0>i(H,V))E<P&&0>i(Y,H)?(T[W]=Y,T[E]=V,W=E):(T[W]=H,T[j]=V,W=j);else if(E<P&&0>i(Y,V))T[W]=Y,T[E]=V,W=E;else break e}}return F}function i(T,F){var V=T.sortIndex-F.sortIndex;return V!==0?V:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,h=!1,p=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=T)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function x(T){if(g=!1,y(T),!p)if(n(l)!==null)p=!0,ye(_);else{var F=n(u);F!==null&&ne(x,F.startTime-T)}}function _(T,F){p=!1,g&&(g=!1,v(O),O=-1),h=!0;var V=f;try{for(y(F),d=n(l);d!==null&&(!(d.expirationTime>F)||T&&!J());){var W=d.callback;if(typeof W=="function"){d.callback=null,f=d.priorityLevel;var P=W(d.expirationTime<=F);F=e.unstable_now(),typeof P=="function"?d.callback=P:d===n(l)&&r(l),y(F)}else r(l);d=n(l)}if(d!==null)var D=!0;else{var j=n(u);j!==null&&ne(x,j.startTime-F),D=!1}return D}finally{d=null,f=V,h=!1}}var k=!1,I=null,O=-1,z=5,$=-1;function J(){return!(e.unstable_now()-$<z)}function Z(){if(I!==null){var T=e.unstable_now();$=T;var F=!0;try{F=I(!0,T)}finally{F?te():(k=!1,I=null)}}else k=!1}var te;if(typeof m=="function")te=function(){m(Z)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ce=ue.port2;ue.port1.onmessage=Z,te=function(){ce.postMessage(null)}}else te=function(){b(Z,0)};function ye(T){I=T,k||(k=!0,te())}function ne(T,F){O=b(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,ye(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return T()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var V=f;f=T;try{return F()}finally{f=V}},e.unstable_scheduleCallback=function(T,F,V){var W=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?W+V:W):V=W,T){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=V+P,T={id:c++,callback:F,priorityLevel:T,startTime:V,expirationTime:P,sortIndex:-1},V>W?(T.sortIndex=V,t(u,T),n(l)===null&&T===n(u)&&(g?(v(O),O=-1):g=!0,ne(x,V-W))):(T.sortIndex=P,t(l,T),p||h||(p=!0,ye(_))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var F=f;return function(){var V=f;f=F;try{return T.apply(this,arguments)}finally{f=V}}}})($v);(function(e){e.exports=$v})(WS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=S,kt=Kc;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dv=new Set,Wo={};function Jr(e,t){Mi(e,t),Mi(e+"Capture",t)}function Mi(e,t){for(Wo[e]=t,e=0;e<t.length;e++)Dv.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=Object.prototype.hasOwnProperty,HS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},_p={};function KS(e){return Gc.call(_p,e)?!0:Gc.call(xp,e)?!1:HS.test(e)?_p[e]=!0:(xp[e]=!0,!1)}function GS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qS(e,t,n,r){if(t===null||typeof t>"u"||GS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Af(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nf,Af);Ze[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nf,Af);Ze[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nf,Af);Ze[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function $f(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qS(t,n,i,r)&&(n=null),r||i===null?KS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var In=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),jv=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=Ep&&e[Ep]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Au;function bo(e){if(Au===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Au=t&&t[1]||""}return`
`+Au+e}var $u=!1;function Mu(e,t){if(!e||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bo(e):""}function JS(e){switch(e.tag){case 5:return bo(e.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return e=Mu(e.type,!1),e;case 11:return e=Mu(e.type.render,!1),e;case 1:return e=Mu(e.type,!0),e;default:return""}}function Yc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ci:return"Fragment";case ui:return"Portal";case qc:return"Profiler";case Mf:return"StrictMode";case Jc:return"Suspense";case Qc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zv:return(e.displayName||"Context")+".Consumer";case Lv:return(e._context.displayName||"Context")+".Provider";case Df:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lf:return t=e.displayName||null,t!==null?t:Yc(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return Yc(e(t))}catch{}}return null}function QS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(t);case 8:return t===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function YS(e){var t=Fv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qa(e){e._valueTracker||(e._valueTracker=YS(e))}function Uv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xc(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bv(e,t){t=t.checked,t!=null&&$f(e,"checked",t,!1)}function Zc(e,t){Bv(e,t);var n=cr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ed(e,t.type,n):t.hasOwnProperty("defaultValue")&&ed(e,t.type,cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ed(e,t,n){(t!=="number"||zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xo=Array.isArray;function _i(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function td(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(xo(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cr(n)}}function Vv(e,t){var n=cr(t.value),r=cr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ya,Hv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XS=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){XS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function Kv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function Gv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ZS=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(e,t){if(t){if(ZS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function id(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function zf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ad=null,Ei=null,ki=null;function Ip(e){if(e=xa(e)){if(typeof ad!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Dl(t),ad(e.stateNode,e.type,t))}}function qv(e){Ei?ki?ki.push(e):ki=[e]:Ei=e}function Jv(){if(Ei){var e=Ei,t=ki;if(ki=Ei=null,Ip(e),t)for(e=0;e<t.length;e++)Ip(t[e])}}function Qv(e,t){return e(t)}function Yv(){}var Du=!1;function Xv(e,t,n){if(Du)return e(t,n);Du=!0;try{return Qv(e,t,n)}finally{Du=!1,(Ei!==null||ki!==null)&&(Yv(),Jv())}}function Ko(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var sd=!1;if(_n)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){sd=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{sd=!1}function eb(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Oo=!1,js=null,Fs=!1,ld=null,tb={onError:function(e){Oo=!0,js=e}};function nb(e,t,n,r,i,o,a,s,l){Oo=!1,js=null,eb.apply(tb,arguments)}function rb(e,t,n,r,i,o,a,s,l){if(nb.apply(this,arguments),Oo){if(Oo){var u=js;Oo=!1,js=null}else throw Error(A(198));Fs||(Fs=!0,ld=u)}}function Qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tp(e){if(Qr(e)!==e)throw Error(A(188))}function ib(e){var t=e.alternate;if(!t){if(t=Qr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tp(i),e;if(o===r)return Tp(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function e0(e){return e=ib(e),e!==null?t0(e):null}function t0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=t0(e);if(t!==null)return t;e=e.sibling}return null}var n0=kt.unstable_scheduleCallback,Op=kt.unstable_cancelCallback,ob=kt.unstable_shouldYield,ab=kt.unstable_requestPaint,ze=kt.unstable_now,sb=kt.unstable_getCurrentPriorityLevel,jf=kt.unstable_ImmediatePriority,r0=kt.unstable_UserBlockingPriority,Us=kt.unstable_NormalPriority,lb=kt.unstable_LowPriority,i0=kt.unstable_IdlePriority,Nl=null,rn=null;function ub(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:fb,cb=Math.log,db=Math.LN2;function fb(e){return e>>>=0,e===0?32:31-(cb(e)/db|0)|0}var Xa=64,Za=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=_o(s):(o&=a,o!==0&&(r=_o(o)))}else a=n&~i,a!==0?r=_o(a):o!==0&&(r=_o(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jt(t),i=1<<n,r|=e[n],t&=~i;return r}function hb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Jt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=hb(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function ud(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function o0(){var e=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),e}function Lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jt(t),e[t]=n}function mb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ff(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function a0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var s0,Uf,l0,u0,c0,cd=!1,es=[],qn=null,Jn=null,Qn=null,Go=new Map,qo=new Map,zn=[],gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Np(e,t){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(t.pointerId)}}function ho(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xa(t),t!==null&&Uf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vb(e,t,n,r,i){switch(t){case"focusin":return qn=ho(qn,e,t,n,r,i),!0;case"dragenter":return Jn=ho(Jn,e,t,n,r,i),!0;case"mouseover":return Qn=ho(Qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Go.set(o,ho(Go.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qo.set(o,ho(qo.get(o)||null,e,t,n,r,i)),!0}return!1}function d0(e){var t=Rr(e.target);if(t!==null){var n=Qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zv(n),t!==null){e.blockedOn=t,c0(e.priority,function(){l0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);od=r,n.target.dispatchEvent(r),od=null}else return t=xa(n),t!==null&&Uf(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){ys(e)&&n.delete(t)}function yb(){cd=!1,qn!==null&&ys(qn)&&(qn=null),Jn!==null&&ys(Jn)&&(Jn=null),Qn!==null&&ys(Qn)&&(Qn=null),Go.forEach(Ap),qo.forEach(Ap)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,cd||(cd=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,yb)))}function Jo(e){function t(i){return po(i,e)}if(0<es.length){po(es[0],e);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qn!==null&&po(qn,e),Jn!==null&&po(Jn,e),Qn!==null&&po(Qn,e),Go.forEach(t),qo.forEach(t),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&zn.shift()}var Ci=In.ReactCurrentBatchConfig,Vs=!0;function wb(e,t,n,r){var i=me,o=Ci.transition;Ci.transition=null;try{me=1,Bf(e,t,n,r)}finally{me=i,Ci.transition=o}}function Sb(e,t,n,r){var i=me,o=Ci.transition;Ci.transition=null;try{me=4,Bf(e,t,n,r)}finally{me=i,Ci.transition=o}}function Bf(e,t,n,r){if(Vs){var i=dd(e,t,n,r);if(i===null)Gu(e,t,r,Ws,n),Np(e,r);else if(vb(i,e,t,n,r))r.stopPropagation();else if(Np(e,r),t&4&&-1<gb.indexOf(e)){for(;i!==null;){var o=xa(i);if(o!==null&&s0(o),o=dd(e,t,n,r),o===null&&Gu(e,t,r,Ws,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gu(e,t,r,null,n)}}var Ws=null;function dd(e,t,n,r){if(Ws=null,e=zf(r),e=Rr(e),e!==null)if(t=Qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function f0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sb()){case jf:return 1;case r0:return 4;case Us:case lb:return 16;case i0:return 536870912;default:return 16}default:return 16}}var Wn=null,Vf=null,ws=null;function h0(){if(ws)return ws;var e,t=Vf,n=t.length,r,i="value"in Wn?Wn.value:Wn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ws=i.slice(e,1<r?1-r:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function $p(){return!1}function Pt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ts:$p,this.isPropagationStopped=$p,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wf=Pt(Qi),ba=Ne({},Qi,{view:0,detail:0}),bb=Pt(ba),zu,ju,mo,Al=Ne({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(zu=e.screenX-mo.screenX,ju=e.screenY-mo.screenY):ju=zu=0,mo=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),Mp=Pt(Al),xb=Ne({},Al,{dataTransfer:0}),_b=Pt(xb),Eb=Ne({},ba,{relatedTarget:0}),Fu=Pt(Eb),kb=Ne({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=Pt(kb),Rb=Ne({},Qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pb=Pt(Rb),Ib=Ne({},Qi,{data:0}),Dp=Pt(Ib),Tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ab(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nb[e])?!!t[e]:!1}function Hf(){return Ab}var $b=Ne({},ba,{key:function(e){if(e.key){var t=Tb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ob[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mb=Pt($b),Db=Ne({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Pt(Db),Lb=Ne({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),zb=Pt(Lb),jb=Ne({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fb=Pt(jb),Ub=Ne({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bb=Pt(Ub),Vb=[9,13,27,32],Kf=_n&&"CompositionEvent"in window,No=null;_n&&"documentMode"in document&&(No=document.documentMode);var Wb=_n&&"TextEvent"in window&&!No,p0=_n&&(!Kf||No&&8<No&&11>=No),zp=String.fromCharCode(32),jp=!1;function m0(e,t){switch(e){case"keyup":return Vb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var di=!1;function Hb(e,t){switch(e){case"compositionend":return g0(t);case"keypress":return t.which!==32?null:(jp=!0,zp);case"textInput":return e=t.data,e===zp&&jp?null:e;default:return null}}function Kb(e,t){if(di)return e==="compositionend"||!Kf&&m0(e,t)?(e=h0(),ws=Vf=Wn=null,di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return p0&&t.locale!=="ko"?null:t.data;default:return null}}var Gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gb[e.type]:t==="textarea"}function v0(e,t,n,r){qv(r),t=Hs(t,"onChange"),0<t.length&&(n=new Wf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,Qo=null;function qb(e){P0(e,0)}function $l(e){var t=pi(e);if(Uv(t))return e}function Jb(e,t){if(e==="change")return t}var y0=!1;if(_n){var Uu;if(_n){var Bu="oninput"in document;if(!Bu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Bu=typeof Up.oninput=="function"}Uu=Bu}else Uu=!1;y0=Uu&&(!document.documentMode||9<document.documentMode)}function Bp(){Ao&&(Ao.detachEvent("onpropertychange",w0),Qo=Ao=null)}function w0(e){if(e.propertyName==="value"&&$l(Qo)){var t=[];v0(t,Qo,e,zf(e)),Xv(qb,t)}}function Qb(e,t,n){e==="focusin"?(Bp(),Ao=t,Qo=n,Ao.attachEvent("onpropertychange",w0)):e==="focusout"&&Bp()}function Yb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Qo)}function Xb(e,t){if(e==="click")return $l(t)}function Zb(e,t){if(e==="input"||e==="change")return $l(t)}function ex(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:ex;function Yo(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gc.call(t,i)||!Yt(e[i],t[i]))return!1}return!0}function Vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,t){var n=Vp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vp(n)}}function S0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?S0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function b0(){for(var e=window,t=zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zs(e.document)}return t}function Gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tx(e){var t=b0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(r!==null&&Gf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wp(n,o);var a=Wp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nx=_n&&"documentMode"in document&&11>=document.documentMode,fi=null,fd=null,$o=null,hd=!1;function Hp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hd||fi==null||fi!==zs(r)||(r=fi,"selectionStart"in r&&Gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&Yo($o,r)||($o=r,r=Hs(fd,"onSelect"),0<r.length&&(t=new Wf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fi)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hi={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},Vu={},x0={};_n&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function Ml(e){if(Vu[e])return Vu[e];if(!hi[e])return e;var t=hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x0)return Vu[e]=t[n];return e}var _0=Ml("animationend"),E0=Ml("animationiteration"),k0=Ml("animationstart"),C0=Ml("transitionend"),R0=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,t){R0.set(e,t),Jr(t,[e])}for(var Wu=0;Wu<Kp.length;Wu++){var Hu=Kp[Wu],rx=Hu.toLowerCase(),ix=Hu[0].toUpperCase()+Hu.slice(1);mr(rx,"on"+ix)}mr(_0,"onAnimationEnd");mr(E0,"onAnimationIteration");mr(k0,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(C0,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Gp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rb(r,t,void 0,e),e.currentTarget=null}function P0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Gp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Gp(i,s,u),o=l}}}if(Fs)throw e=ld,Fs=!1,ld=null,e}function Ee(e,t){var n=t[yd];n===void 0&&(n=t[yd]=new Set);var r=e+"__bubble";n.has(r)||(I0(t,e,2,!1),n.add(r))}function Ku(e,t,n){var r=0;t&&(r|=4),I0(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[rs]){e[rs]=!0,Dv.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||Ku(n,!1,e),Ku(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Ku("selectionchange",!1,t))}}function I0(e,t,n,r){switch(f0(t)){case 1:var i=wb;break;case 4:i=Sb;break;default:i=Bf}n=i.bind(null,t,n,e),i=void 0,!sd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Rr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Xv(function(){var u=o,c=zf(n),d=[];e:{var f=R0.get(e);if(f!==void 0){var h=Wf,p=e;switch(e){case"keypress":if(Ss(n)===0)break e;case"keydown":case"keyup":h=Mb;break;case"focusin":p="focus",h=Fu;break;case"focusout":p="blur",h=Fu;break;case"beforeblur":case"afterblur":h=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=_b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=zb;break;case _0:case E0:case k0:h=Cb;break;case C0:h=Fb;break;case"scroll":h=bb;break;case"wheel":h=Bb;break;case"copy":case"cut":case"paste":h=Pb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Lp}var g=(t&4)!==0,b=!g&&e==="scroll",v=g?f!==null?f+"Capture":null:f;g=[];for(var m=u,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,v!==null&&(x=Ko(m,v),x!=null&&g.push(Zo(m,x,y)))),b)break;m=m.return}0<g.length&&(f=new h(f,p,null,n,c),d.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==od&&(p=n.relatedTarget||n.fromElement)&&(Rr(p)||p[En]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=u,p=p?Rr(p):null,p!==null&&(b=Qr(p),p!==b||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=u),h!==p)){if(g=Mp,x="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(g=Lp,x="onPointerLeave",v="onPointerEnter",m="pointer"),b=h==null?f:pi(h),y=p==null?f:pi(p),f=new g(x,m+"leave",h,n,c),f.target=b,f.relatedTarget=y,x=null,Rr(c)===u&&(g=new g(v,m+"enter",p,n,c),g.target=y,g.relatedTarget=b,x=g),b=x,h&&p)t:{for(g=h,v=p,m=0,y=g;y;y=ii(y))m++;for(y=0,x=v;x;x=ii(x))y++;for(;0<m-y;)g=ii(g),m--;for(;0<y-m;)v=ii(v),y--;for(;m--;){if(g===v||v!==null&&g===v.alternate)break t;g=ii(g),v=ii(v)}g=null}else g=null;h!==null&&qp(d,f,h,g,!1),p!==null&&b!==null&&qp(d,b,p,g,!0)}}e:{if(f=u?pi(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var _=Jb;else if(Fp(f))if(y0)_=Zb;else{_=Yb;var k=Qb}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=Xb);if(_&&(_=_(e,u))){v0(d,_,n,c);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&ed(f,"number",f.value)}switch(k=u?pi(u):window,e){case"focusin":(Fp(k)||k.contentEditable==="true")&&(fi=k,fd=u,$o=null);break;case"focusout":$o=fd=fi=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,Hp(d,n,c);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":Hp(d,n,c)}var I;if(Kf)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else di?m0(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(p0&&n.locale!=="ko"&&(di||O!=="onCompositionStart"?O==="onCompositionEnd"&&di&&(I=h0()):(Wn=c,Vf="value"in Wn?Wn.value:Wn.textContent,di=!0)),k=Hs(u,O),0<k.length&&(O=new Dp(O,e,null,n,c),d.push({event:O,listeners:k}),I?O.data=I:(I=g0(n),I!==null&&(O.data=I)))),(I=Wb?Hb(e,n):Kb(e,n))&&(u=Hs(u,"onBeforeInput"),0<u.length&&(c=new Dp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}P0(d,t)})}function Zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ko(e,n),o!=null&&r.unshift(Zo(e,o,i)),o=Ko(e,t),o!=null&&r.push(Zo(e,o,i))),e=e.return}return r}function ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Ko(n,o),l!=null&&a.unshift(Zo(n,l,s))):i||(l=Ko(n,o),l!=null&&a.push(Zo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ax=/\r\n?/g,sx=/\u0000|\uFFFD/g;function Jp(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(sx,"")}function is(e,t,n){if(t=Jp(t),Jp(e)!==t&&n)throw Error(A(425))}function Ks(){}var pd=null,md=null;function gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(e){return Qp.resolve(null).then(e).catch(cx)}:vd;function cx(e){setTimeout(function(){throw e})}function qu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(t)}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),tn="__reactFiber$"+Yi,ea="__reactProps$"+Yi,En="__reactContainer$"+Yi,yd="__reactEvents$"+Yi,dx="__reactListeners$"+Yi,fx="__reactHandles$"+Yi;function Rr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[En]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yp(e);e!==null;){if(n=e[tn])return n;e=Yp(e)}return t}e=n,n=e.parentNode}return null}function xa(e){return e=e[tn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Dl(e){return e[ea]||null}var wd=[],mi=-1;function gr(e){return{current:e}}function ke(e){0>mi||(e.current=wd[mi],wd[mi]=null,mi--)}function _e(e,t){mi++,wd[mi]=e.current,e.current=t}var dr={},at=gr(dr),yt=gr(!1),Lr=dr;function Di(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function wt(e){return e=e.childContextTypes,e!=null}function Gs(){ke(yt),ke(at)}function Xp(e,t,n){if(at.current!==dr)throw Error(A(168));_e(at,t),_e(yt,n)}function T0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,QS(e)||"Unknown",i));return Ne({},n,r)}function qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Lr=at.current,_e(at,e),_e(yt,yt.current),!0}function Zp(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=T0(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,ke(yt),ke(at),_e(at,e)):ke(yt),_e(yt,n)}var fn=null,Ll=!1,Ju=!1;function O0(e){fn===null?fn=[e]:fn.push(e)}function hx(e){Ll=!0,O0(e)}function vr(){if(!Ju&&fn!==null){Ju=!0;var e=0,t=me;try{var n=fn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fn=null,Ll=!1}catch(i){throw fn!==null&&(fn=fn.slice(e+1)),n0(jf,vr),i}finally{me=t,Ju=!1}}return null}var gi=[],vi=0,Js=null,Qs=0,At=[],$t=0,zr=null,pn=1,mn="";function br(e,t){gi[vi++]=Qs,gi[vi++]=Js,Js=e,Qs=t}function N0(e,t,n){At[$t++]=pn,At[$t++]=mn,At[$t++]=zr,zr=e;var r=pn;e=mn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var o=32-Jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,pn=1<<32-Jt(t)+i|n<<i|r,mn=o+e}else pn=1<<o|n<<i|r,mn=e}function qf(e){e.return!==null&&(br(e,1),N0(e,1,0))}function Jf(e){for(;e===Js;)Js=gi[--vi],gi[vi]=null,Qs=gi[--vi],gi[vi]=null;for(;e===zr;)zr=At[--$t],At[$t]=null,mn=At[--$t],At[$t]=null,pn=At[--$t],At[$t]=null}var Et=null,_t=null,Pe=!1,Gt=null;function A0(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function em(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,_t=Yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:pn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Et=e,_t=null,!0):!1;default:return!1}}function Sd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bd(e){if(Pe){var t=_t;if(t){var n=t;if(!em(e,t)){if(Sd(e))throw Error(A(418));t=Yn(n.nextSibling);var r=Et;t&&em(e,t)?A0(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Et=e)}}else{if(Sd(e))throw Error(A(418));e.flags=e.flags&-4097|2,Pe=!1,Et=e}}}function tm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function os(e){if(e!==Et)return!1;if(!Pe)return tm(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gd(e.type,e.memoizedProps)),t&&(t=_t)){if(Sd(e))throw $0(),Error(A(418));for(;t;)A0(e,t),t=Yn(t.nextSibling)}if(tm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=Yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Et?Yn(e.stateNode.nextSibling):null;return!0}function $0(){for(var e=_t;e;)e=Yn(e.nextSibling)}function Li(){_t=Et=null,Pe=!1}function Qf(e){Gt===null?Gt=[e]:Gt.push(e)}var px=In.ReactCurrentBatchConfig;function Ht(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ys=gr(null),Xs=null,yi=null,Yf=null;function Xf(){Yf=yi=Xs=null}function Zf(e){var t=Ys.current;ke(Ys),e._currentValue=t}function xd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ri(e,t){Xs=e,Yf=yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(Yf!==e)if(e={context:e,memoizedValue:t,next:null},yi===null){if(Xs===null)throw Error(A(308));yi=e,Xs.dependencies={lanes:0,firstContext:e}}else yi=yi.next=e;return t}var Pr=null;function eh(e){Pr===null?Pr=[e]:Pr.push(e)}function M0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eh(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function th(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,eh(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ff(e,n)}}function nm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zs(e,t,n,r){var i=e.updateQueue;Ln=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,h=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,g=s;switch(f=t,h=n,g.tag){case 1:if(p=g.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=g.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=Ne({},d,f);break e;case 2:Ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fr|=a,e.lanes=a,e.memoizedState=d}}function rm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var L0=new Mv.Component().refs;function _d(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=er(e),o=Sn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Xn(e,o,i),t!==null&&(Qt(t,e,i,r),bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=er(e),o=Sn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Xn(e,o,i),t!==null&&(Qt(t,e,i,r),bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=er(e),i=Sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Xn(e,i,r),t!==null&&(Qt(t,e,r,n),bs(t,e,r))}};function im(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,o):!0}function z0(e,t,n){var r=!1,i=dr,o=t.contextType;return typeof o=="object"&&o!==null?o=zt(o):(i=wt(t)?Lr:at.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):dr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function om(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Ed(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=L0,th(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=zt(o):(o=wt(t)?Lr:at.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_d(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zl.enqueueReplaceState(i,i.state,null),Zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===L0&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function am(e){var t=e._init;return t(e._payload)}function j0(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=tr(v,m),v.index=0,v.sibling=null,v}function o(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,y,x){return m===null||m.tag!==6?(m=nc(y,v.mode,x),m.return=v,m):(m=i(m,y),m.return=v,m)}function l(v,m,y,x){var _=y.type;return _===ci?c(v,m,y.props.children,x,y.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Dn&&am(_)===m.type)?(x=i(m,y.props),x.ref=go(v,m,y),x.return=v,x):(x=Rs(y.type,y.key,y.props,null,v.mode,x),x.ref=go(v,m,y),x.return=v,x)}function u(v,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=rc(y,v.mode,x),m.return=v,m):(m=i(m,y.children||[]),m.return=v,m)}function c(v,m,y,x,_){return m===null||m.tag!==7?(m=$r(y,v.mode,x,_),m.return=v,m):(m=i(m,y),m.return=v,m)}function d(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=nc(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return y=Rs(m.type,m.key,m.props,null,v.mode,y),y.ref=go(v,null,m),y.return=v,y;case ui:return m=rc(m,v.mode,y),m.return=v,m;case Dn:var x=m._init;return d(v,x(m._payload),y)}if(xo(m)||co(m))return m=$r(m,v.mode,y,null),m.return=v,m;as(v,m)}return null}function f(v,m,y,x){var _=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:s(v,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return y.key===_?l(v,m,y,x):null;case ui:return y.key===_?u(v,m,y,x):null;case Dn:return _=y._init,f(v,m,_(y._payload),x)}if(xo(y)||co(y))return _!==null?null:c(v,m,y,x,null);as(v,y)}return null}function h(v,m,y,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(y)||null,s(m,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ja:return v=v.get(x.key===null?y:x.key)||null,l(m,v,x,_);case ui:return v=v.get(x.key===null?y:x.key)||null,u(m,v,x,_);case Dn:var k=x._init;return h(v,m,y,k(x._payload),_)}if(xo(x)||co(x))return v=v.get(y)||null,c(m,v,x,_,null);as(m,x)}return null}function p(v,m,y,x){for(var _=null,k=null,I=m,O=m=0,z=null;I!==null&&O<y.length;O++){I.index>O?(z=I,I=null):z=I.sibling;var $=f(v,I,y[O],x);if($===null){I===null&&(I=z);break}e&&I&&$.alternate===null&&t(v,I),m=o($,m,O),k===null?_=$:k.sibling=$,k=$,I=z}if(O===y.length)return n(v,I),Pe&&br(v,O),_;if(I===null){for(;O<y.length;O++)I=d(v,y[O],x),I!==null&&(m=o(I,m,O),k===null?_=I:k.sibling=I,k=I);return Pe&&br(v,O),_}for(I=r(v,I);O<y.length;O++)z=h(I,v,O,y[O],x),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?O:z.key),m=o(z,m,O),k===null?_=z:k.sibling=z,k=z);return e&&I.forEach(function(J){return t(v,J)}),Pe&&br(v,O),_}function g(v,m,y,x){var _=co(y);if(typeof _!="function")throw Error(A(150));if(y=_.call(y),y==null)throw Error(A(151));for(var k=_=null,I=m,O=m=0,z=null,$=y.next();I!==null&&!$.done;O++,$=y.next()){I.index>O?(z=I,I=null):z=I.sibling;var J=f(v,I,$.value,x);if(J===null){I===null&&(I=z);break}e&&I&&J.alternate===null&&t(v,I),m=o(J,m,O),k===null?_=J:k.sibling=J,k=J,I=z}if($.done)return n(v,I),Pe&&br(v,O),_;if(I===null){for(;!$.done;O++,$=y.next())$=d(v,$.value,x),$!==null&&(m=o($,m,O),k===null?_=$:k.sibling=$,k=$);return Pe&&br(v,O),_}for(I=r(v,I);!$.done;O++,$=y.next())$=h(I,v,O,$.value,x),$!==null&&(e&&$.alternate!==null&&I.delete($.key===null?O:$.key),m=o($,m,O),k===null?_=$:k.sibling=$,k=$);return e&&I.forEach(function(Z){return t(v,Z)}),Pe&&br(v,O),_}function b(v,m,y,x){if(typeof y=="object"&&y!==null&&y.type===ci&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:e:{for(var _=y.key,k=m;k!==null;){if(k.key===_){if(_=y.type,_===ci){if(k.tag===7){n(v,k.sibling),m=i(k,y.props.children),m.return=v,v=m;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Dn&&am(_)===k.type){n(v,k.sibling),m=i(k,y.props),m.ref=go(v,k,y),m.return=v,v=m;break e}n(v,k);break}else t(v,k);k=k.sibling}y.type===ci?(m=$r(y.props.children,v.mode,x,y.key),m.return=v,v=m):(x=Rs(y.type,y.key,y.props,null,v.mode,x),x.ref=go(v,m,y),x.return=v,v=x)}return a(v);case ui:e:{for(k=y.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(v,m.sibling),m=i(m,y.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=rc(y,v.mode,x),m.return=v,v=m}return a(v);case Dn:return k=y._init,b(v,m,k(y._payload),x)}if(xo(y))return p(v,m,y,x);if(co(y))return g(v,m,y,x);as(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,y),m.return=v,v=m):(n(v,m),m=nc(y,v.mode,x),m.return=v,v=m),a(v)):n(v,m)}return b}var zi=j0(!0),F0=j0(!1),_a={},on=gr(_a),ta=gr(_a),na=gr(_a);function Ir(e){if(e===_a)throw Error(A(174));return e}function nh(e,t){switch(_e(na,t),_e(ta,e),_e(on,_a),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nd(t,e)}ke(on),_e(on,t)}function ji(){ke(on),ke(ta),ke(na)}function U0(e){Ir(na.current);var t=Ir(on.current),n=nd(t,e.type);t!==n&&(_e(ta,e),_e(on,n))}function rh(e){ta.current===e&&(ke(on),ke(ta))}var Ie=gr(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qu=[];function ih(){for(var e=0;e<Qu.length;e++)Qu[e]._workInProgressVersionPrimary=null;Qu.length=0}var xs=In.ReactCurrentDispatcher,Yu=In.ReactCurrentBatchConfig,jr=0,Oe=null,Be=null,He=null,tl=!1,Mo=!1,ra=0,mx=0;function tt(){throw Error(A(321))}function oh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function ah(e,t,n,r,i,o){if(jr=o,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xs.current=e===null||e.memoizedState===null?wx:Sx,e=n(r,i),Mo){o=0;do{if(Mo=!1,ra=0,25<=o)throw Error(A(301));o+=1,He=Be=null,t.updateQueue=null,xs.current=bx,e=n(r,i)}while(Mo)}if(xs.current=nl,t=Be!==null&&Be.next!==null,jr=0,He=Be=Oe=null,tl=!1,t)throw Error(A(300));return e}function sh(){var e=ra!==0;return ra=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Oe.memoizedState=He=e:He=He.next=e,He}function jt(){if(Be===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=He===null?Oe.memoizedState:He.next;if(t!==null)He=t,Be=e;else{if(e===null)throw Error(A(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},He===null?Oe.memoizedState=He=e:He=He.next=e}return He}function ia(e,t){return typeof t=="function"?t(e):t}function Xu(e){var t=jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,Oe.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Yt(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Oe.lanes|=o,Fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zu(e){var t=jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Yt(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function B0(){}function V0(e,t){var n=Oe,r=jt(),i=t(),o=!Yt(r.memoizedState,i);if(o&&(r.memoizedState=i,vt=!0),r=r.queue,lh(K0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,oa(9,H0.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(A(349));jr&30||W0(n,t,i)}return i}function W0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function H0(e,t,n,r){t.value=n,t.getSnapshot=r,G0(t)&&q0(e)}function K0(e,t,n){return n(function(){G0(t)&&q0(e)})}function G0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function q0(e){var t=kn(e,1);t!==null&&Qt(t,e,1,-1)}function sm(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t.queue=e,e=e.dispatch=yx.bind(null,Oe,e),[t.memoizedState,e]}function oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function J0(){return jt().memoizedState}function _s(e,t,n,r){var i=en();Oe.flags|=e,i.memoizedState=oa(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Be!==null){var a=Be.memoizedState;if(o=a.destroy,r!==null&&oh(r,a.deps)){i.memoizedState=oa(t,n,o,r);return}}Oe.flags|=e,i.memoizedState=oa(1|t,n,o,r)}function lm(e,t){return _s(8390656,8,e,t)}function lh(e,t){return jl(2048,8,e,t)}function Q0(e,t){return jl(4,2,e,t)}function Y0(e,t){return jl(4,4,e,t)}function X0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Z0(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,X0.bind(null,t,e),n)}function uh(){}function ey(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ty(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ny(e,t,n){return jr&21?(Yt(n,t)||(n=o0(),Oe.lanes|=n,Fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function gx(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Yu.transition;Yu.transition={};try{e(!1),t()}finally{me=n,Yu.transition=r}}function ry(){return jt().memoizedState}function vx(e,t,n){var r=er(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iy(e))oy(t,n);else if(n=M0(e,t,n,r),n!==null){var i=dt();Qt(n,e,r,i),ay(n,t,r)}}function yx(e,t,n){var r=er(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iy(e))oy(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Yt(s,a)){var l=t.interleaved;l===null?(i.next=i,eh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=M0(e,t,i,r),n!==null&&(i=dt(),Qt(n,e,r,i),ay(n,t,r))}}function iy(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function oy(e,t){Mo=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ay(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ff(e,n)}}var nl={readContext:zt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},wx={readContext:zt,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:lm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_s(4194308,4,X0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _s(4194308,4,e,t)},useInsertionEffect:function(e,t){return _s(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=en();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vx.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:sm,useDebugValue:uh,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=sm(!1),t=e[0];return e=gx.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,i=en();if(Pe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ke===null)throw Error(A(349));jr&30||W0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,lm(K0.bind(null,r,o,e),[e]),r.flags|=2048,oa(9,H0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=en(),t=Ke.identifierPrefix;if(Pe){var n=mn,r=pn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sx={readContext:zt,useCallback:ey,useContext:zt,useEffect:lh,useImperativeHandle:Z0,useInsertionEffect:Q0,useLayoutEffect:Y0,useMemo:ty,useReducer:Xu,useRef:J0,useState:function(){return Xu(ia)},useDebugValue:uh,useDeferredValue:function(e){var t=jt();return ny(t,Be.memoizedState,e)},useTransition:function(){var e=Xu(ia)[0],t=jt().memoizedState;return[e,t]},useMutableSource:B0,useSyncExternalStore:V0,useId:ry,unstable_isNewReconciler:!1},bx={readContext:zt,useCallback:ey,useContext:zt,useEffect:lh,useImperativeHandle:Z0,useInsertionEffect:Q0,useLayoutEffect:Y0,useMemo:ty,useReducer:Zu,useRef:J0,useState:function(){return Zu(ia)},useDebugValue:uh,useDeferredValue:function(e){var t=jt();return Be===null?t.memoizedState=e:ny(t,Be.memoizedState,e)},useTransition:function(){var e=Zu(ia)[0],t=jt().memoizedState;return[e,t]},useMutableSource:B0,useSyncExternalStore:V0,useId:ry,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=JS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ec(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function sy(e,t,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,Md=r),kd(e,t)},n}function ly(e,t,n){n=Sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){kd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){kd(e,t),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function um(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dx.bind(null,e,t,n),t.then(e,e))}function cm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Sn(-1,1),t.tag=2,Xn(n,t,1))),n.lanes|=1),e)}var _x=In.ReactCurrentOwner,vt=!1;function ct(e,t,n,r){t.child=e===null?F0(t,null,n,r):zi(t,e.child,n,r)}function fm(e,t,n,r,i){n=n.render;var o=t.ref;return Ri(t,i),r=ah(e,t,n,r,o,i),n=sh(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Cn(e,t,i)):(Pe&&n&&qf(t),t.flags|=1,ct(e,t,r,i),t.child)}function hm(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,uy(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(a,r)&&e.ref===t.ref)return Cn(e,t,i)}return t.flags|=1,e=tr(o,r),e.ref=t.ref,e.return=t,t.child=e}function uy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yo(o,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Cn(e,t,i)}return Cd(e,t,n,r,i)}function cy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Si,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Si,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(Si,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(Si,xt),xt|=r;return ct(e,t,i,n),t.child}function dy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cd(e,t,n,r,i){var o=wt(n)?Lr:at.current;return o=Di(t,o),Ri(t,i),n=ah(e,t,n,r,o,i),r=sh(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Cn(e,t,i)):(Pe&&r&&qf(t),t.flags|=1,ct(e,t,n,i),t.child)}function pm(e,t,n,r,i){if(wt(n)){var o=!0;qs(t)}else o=!1;if(Ri(t,i),t.stateNode===null)Es(e,t),z0(t,n,r),Ed(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=wt(n)?Lr:at.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&om(t,a,r,u),Ln=!1;var f=t.memoizedState;a.state=f,Zs(t,r,a,i),l=t.memoizedState,s!==r||f!==l||yt.current||Ln?(typeof c=="function"&&(_d(t,n,c,r),l=t.memoizedState),(s=Ln||im(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,D0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ht(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=wt(n)?Lr:at.current,l=Di(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&om(t,a,r,l),Ln=!1,f=t.memoizedState,a.state=f,Zs(t,r,a,i);var p=t.memoizedState;s!==d||f!==p||yt.current||Ln?(typeof h=="function"&&(_d(t,n,h,r),p=t.memoizedState),(u=Ln||im(t,n,u,r,f,p,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Rd(e,t,n,r,o,i)}function Rd(e,t,n,r,i,o){dy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Zp(t,n,!1),Cn(e,t,o);r=t.stateNode,_x.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zi(t,e.child,null,o),t.child=zi(t,null,s,o)):ct(e,t,s,o),t.memoizedState=r.state,i&&Zp(t,n,!0),t.child}function fy(e){var t=e.stateNode;t.pendingContext?Xp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xp(e,t.context,!1),nh(e,t.containerInfo)}function mm(e,t,n,r,i){return Li(),Qf(i),t.flags|=256,ct(e,t,n,r),t.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Id(e){return{baseLanes:e,cachePool:null,transitions:null}}function hy(e,t,n){var r=t.pendingProps,i=Ie.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Ie,i&1),e===null)return bd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Bl(a,r,0,null),e=$r(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Id(n),t.memoizedState=Pd,e):ch(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ex(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=tr(s,o):(o=$r(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Id(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Pd,r}return o=e.child,e=o.sibling,r=tr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ch(e,t){return t=Bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ss(e,t,n,r){return r!==null&&Qf(r),zi(t,e.child,null,n),e=ch(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ex(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ec(Error(A(422))),ss(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bl({mode:"visible",children:r.children},i,0,null),o=$r(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zi(t,e.child,null,a),t.child.memoizedState=Id(a),t.memoizedState=Pd,o);if(!(t.mode&1))return ss(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=ec(o,r,void 0),ss(e,t,a,r)}if(s=(a&e.childLanes)!==0,vt||s){if(r=Ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Qt(r,e,i,-1))}return gh(),r=ec(Error(A(421))),ss(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_t=Yn(i.nextSibling),Et=t,Pe=!0,Gt=null,e!==null&&(At[$t++]=pn,At[$t++]=mn,At[$t++]=zr,pn=e.id,mn=e.overflow,zr=t),t=ch(t,r.children),t.flags|=4096,t)}function gm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xd(e.return,t,n)}function tc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function py(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gm(e,n,t);else if(e.tag===19)gm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&el(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tc(t,!0,n,null,o);break;case"together":tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=tr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kx(e,t,n){switch(t.tag){case 3:fy(t),Li();break;case 5:U0(t);break;case 1:wt(t.type)&&qs(t);break;case 4:nh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(Ys,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?hy(e,t,n):(_e(Ie,Ie.current&1),e=Cn(e,t,n),e!==null?e.sibling:null);_e(Ie,Ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return py(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ie,Ie.current),r)break;return null;case 22:case 23:return t.lanes=0,cy(e,t,n)}return Cn(e,t,n)}var my,Td,gy,vy;my=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};gy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ir(on.current);var o=null;switch(n){case"input":i=Xc(e,i),r=Xc(e,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=td(e,i),r=td(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ks)}rd(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};vy=function(e,t,n,r){n!==r&&(t.flags|=4)};function vo(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cx(e,t,n){var r=t.pendingProps;switch(Jf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return wt(t.type)&&Gs(),nt(t),null;case 3:return r=t.stateNode,ji(),ke(yt),ke(at),ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(zd(Gt),Gt=null))),Td(e,t),nt(t),null;case 5:rh(t);var i=Ir(na.current);if(n=t.type,e!==null&&t.stateNode!=null)gy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return nt(t),null}if(e=Ir(on.current),os(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tn]=t,r[ea]=o,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)Ee(Eo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":kp(r,o),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",r);break;case"textarea":Rp(r,o),Ee("invalid",r)}rd(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&is(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&is(r.textContent,s,e),i=["children",""+s]):Wo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Qa(r),Cp(r,o,!0);break;case"textarea":Qa(r),Pp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ks)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[tn]=t,e[ea]=r,my(e,t,!1,!1),t.stateNode=e;e:{switch(a=id(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),i=r;break;case"iframe":case"object":case"embed":Ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)Ee(Eo[i],e);i=r;break;case"source":Ee("error",e),i=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),i=r;break;case"details":Ee("toggle",e),i=r;break;case"input":kp(e,r),i=Xc(e,r),Ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Rp(e,r),i=td(e,r),Ee("invalid",e);break;default:i=r}rd(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Gv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hv(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(e,l):typeof l=="number"&&Ho(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ee("scroll",e):l!=null&&$f(e,o,l,a))}switch(n){case"input":Qa(e),Cp(e,r,!1);break;case"textarea":Qa(e),Pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?_i(e,!!r.multiple,o,!1):r.defaultValue!=null&&_i(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)vy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Ir(na.current),Ir(on.current),os(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(o=r.nodeValue!==n)&&(e=Et,e!==null))switch(e.tag){case 3:is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return nt(t),null;case 13:if(ke(Ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&_t!==null&&t.mode&1&&!(t.flags&128))$0(),Li(),t.flags|=98560,o=!1;else if(o=os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[tn]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Gt!==null&&(zd(Gt),Gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?Ve===0&&(Ve=3):gh())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return ji(),Td(e,t),e===null&&Xo(t.stateNode.containerInfo),nt(t),null;case 10:return Zf(t.type._context),nt(t),null;case 17:return wt(t.type)&&Gs(),nt(t),null;case 19:if(ke(Ie),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)vo(o,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=el(e),a!==null){for(t.flags|=128,vo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Ie,Ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Ui&&(t.flags|=128,r=!0,vo(o,!1),t.lanes=4194304)}else{if(!r)if(e=el(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Pe)return nt(t),null}else 2*ze()-o.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,vo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ie.current,_e(Ie,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return mh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Rx(e,t){switch(Jf(t),t.tag){case 1:return wt(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(),ke(yt),ke(at),ih(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rh(t),null;case 13:if(ke(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ie),null;case 4:return ji(),null;case 10:return Zf(t.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var ls=!1,ot=!1,Px=typeof WeakSet=="function"?WeakSet:Set,U=null;function wi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function Od(e,t,n){try{n()}catch(r){$e(e,t,r)}}var vm=!1;function Ix(e,t){if(pd=Vs,e=b0(),Gf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++c===r&&(l=a),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:e,selectionRange:n},Vs=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var g=p.memoizedProps,b=p.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ht(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){$e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return p=vm,vm=!1,p}function Do(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Od(t,n,o)}i=i.next}while(i!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yy(e){var t=e.alternate;t!==null&&(e.alternate=null,yy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[ea],delete t[yd],delete t[dx],delete t[fx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wy(e){return e.tag===5||e.tag===3||e.tag===4}function ym(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}function $d(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($d(e,t,n),e=e.sibling;e!==null;)$d(e,t,n),e=e.sibling}var Ye=null,Kt=!1;function On(e,t,n){for(n=n.child;n!==null;)Sy(e,t,n),n=n.sibling}function Sy(e,t,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:ot||wi(n,t);case 6:var r=Ye,i=Kt;Ye=null,On(e,t,n),Ye=r,Kt=i,Ye!==null&&(Kt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Kt?(e=Ye,n=n.stateNode,e.nodeType===8?qu(e.parentNode,n):e.nodeType===1&&qu(e,n),Jo(e)):qu(Ye,n.stateNode));break;case 4:r=Ye,i=Kt,Ye=n.stateNode.containerInfo,Kt=!0,On(e,t,n),Ye=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Od(n,t,a),i=i.next}while(i!==r)}On(e,t,n);break;case 1:if(!ot&&(wi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){$e(n,t,s)}On(e,t,n);break;case 21:On(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,On(e,t,n),ot=r):On(e,t,n);break;default:On(e,t,n)}}function wm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Px),t.forEach(function(r){var i=zx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ye=s.stateNode,Kt=!1;break e;case 3:Ye=s.stateNode.containerInfo,Kt=!0;break e;case 4:Ye=s.stateNode.containerInfo,Kt=!0;break e}s=s.return}if(Ye===null)throw Error(A(160));Sy(o,a,i),Ye=null,Kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){$e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)by(t,e),t=t.sibling}function by(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),Zt(e),r&4){try{Do(3,e,e.return),Fl(3,e)}catch(g){$e(e,e.return,g)}try{Do(5,e,e.return)}catch(g){$e(e,e.return,g)}}break;case 1:Vt(t,e),Zt(e),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Vt(t,e),Zt(e),r&512&&n!==null&&wi(n,n.return),e.flags&32){var i=e.stateNode;try{Ho(i,"")}catch(g){$e(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Bv(i,o),id(s,a);var u=id(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Gv(i,d):c==="dangerouslySetInnerHTML"?Hv(i,d):c==="children"?Ho(i,d):$f(i,c,d,u)}switch(s){case"input":Zc(i,o);break;case"textarea":Vv(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?_i(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?_i(i,!!o.multiple,o.defaultValue,!0):_i(i,!!o.multiple,o.multiple?[]:"",!1))}i[ea]=o}catch(g){$e(e,e.return,g)}}break;case 6:if(Vt(t,e),Zt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){$e(e,e.return,g)}}break;case 3:if(Vt(t,e),Zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(g){$e(e,e.return,g)}break;case 4:Vt(t,e),Zt(e);break;case 13:Vt(t,e),Zt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hh=ze())),r&4&&wm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||c,Vt(t,e),ot=u):Vt(t,e),Zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(f=U,h=f.child,f.tag){case 0:case 11:case 14:case 15:Do(4,f,f.return);break;case 1:wi(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(g){$e(r,n,g)}}break;case 5:wi(f,f.return);break;case 22:if(f.memoizedState!==null){bm(d);continue}}h!==null?(h.return=f,U=h):bm(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Kv("display",a))}catch(g){$e(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){$e(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vt(t,e),Zt(e),r&4&&wm(e);break;case 21:break;default:Vt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wy(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var o=ym(e);$d(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ym(e);Ad(e,s,a);break;default:throw Error(A(161))}}catch(l){$e(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tx(e,t,n){U=e,xy(e)}function xy(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ls;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ot;s=ls;var u=ot;if(ls=a,(ot=l)&&!u)for(U=i;U!==null;)a=U,l=a.child,a.tag===22&&a.memoizedState!==null?xm(i):l!==null?(l.return=a,U=l):xm(i);for(;o!==null;)U=o,xy(o),o=o.sibling;U=i,ls=s,ot=u}Sm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Sm(e)}}function Sm(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rm(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rm(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ot||t.flags&512&&Nd(t)}catch(f){$e(t,t.return,f)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function bm(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function xm(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(l){$e(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){$e(t,i,l)}}var o=t.return;try{Nd(t)}catch(l){$e(t,o,l)}break;case 5:var a=t.return;try{Nd(t)}catch(l){$e(t,a,l)}}}catch(l){$e(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var Ox=Math.ceil,rl=In.ReactCurrentDispatcher,dh=In.ReactCurrentOwner,Lt=In.ReactCurrentBatchConfig,he=0,Ke=null,Fe=null,Xe=0,xt=0,Si=gr(0),Ve=0,aa=null,Fr=0,Ul=0,fh=0,Lo=null,gt=null,hh=0,Ui=1/0,dn=null,il=!1,Md=null,Zn=null,us=!1,Hn=null,ol=0,zo=0,Dd=null,ks=-1,Cs=0;function dt(){return he&6?ze():ks!==-1?ks:ks=ze()}function er(e){return e.mode&1?he&2&&Xe!==0?Xe&-Xe:px.transition!==null?(Cs===0&&(Cs=o0()),Cs):(e=me,e!==0||(e=window.event,e=e===void 0?16:f0(e.type)),e):1}function Qt(e,t,n,r){if(50<zo)throw zo=0,Dd=null,Error(A(185));Sa(e,n,r),(!(he&2)||e!==Ke)&&(e===Ke&&(!(he&2)&&(Ul|=n),Ve===4&&jn(e,Xe)),St(e,r),n===1&&he===0&&!(t.mode&1)&&(Ui=ze()+500,Ll&&vr()))}function St(e,t){var n=e.callbackNode;pb(e,t);var r=Bs(e,e===Ke?Xe:0);if(r===0)n!==null&&Op(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Op(n),t===1)e.tag===0?hx(_m.bind(null,e)):O0(_m.bind(null,e)),ux(function(){!(he&6)&&vr()}),n=null;else{switch(a0(r)){case 1:n=jf;break;case 4:n=r0;break;case 16:n=Us;break;case 536870912:n=i0;break;default:n=Us}n=Ty(n,_y.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _y(e,t){if(ks=-1,Cs=0,he&6)throw Error(A(327));var n=e.callbackNode;if(Pi()&&e.callbackNode!==n)return null;var r=Bs(e,e===Ke?Xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var i=he;he|=2;var o=ky();(Ke!==e||Xe!==t)&&(dn=null,Ui=ze()+500,Ar(e,t));do try{$x();break}catch(s){Ey(e,s)}while(1);Xf(),rl.current=o,he=i,Fe!==null?t=0:(Ke=null,Xe=0,t=Ve)}if(t!==0){if(t===2&&(i=ud(e),i!==0&&(r=i,t=Ld(e,i))),t===1)throw n=aa,Ar(e,0),jn(e,r),St(e,ze()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nx(i)&&(t=al(e,r),t===2&&(o=ud(e),o!==0&&(r=o,t=Ld(e,o))),t===1))throw n=aa,Ar(e,0),jn(e,r),St(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:xr(e,gt,dn);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=hh+500-ze(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vd(xr.bind(null,e,gt,dn),t);break}xr(e,gt,dn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ox(r/1960))-r,10<r){e.timeoutHandle=vd(xr.bind(null,e,gt,dn),r);break}xr(e,gt,dn);break;case 5:xr(e,gt,dn);break;default:throw Error(A(329))}}}return St(e,ze()),e.callbackNode===n?_y.bind(null,e):null}function Ld(e,t){var n=Lo;return e.current.memoizedState.isDehydrated&&(Ar(e,t).flags|=256),e=al(e,t),e!==2&&(t=gt,gt=n,t!==null&&zd(t)),e}function zd(e){gt===null?gt=e:gt.push.apply(gt,e)}function Nx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~fh,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function _m(e){if(he&6)throw Error(A(327));Pi();var t=Bs(e,0);if(!(t&1))return St(e,ze()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=ud(e);r!==0&&(t=r,n=Ld(e,r))}if(n===1)throw n=aa,Ar(e,0),jn(e,t),St(e,ze()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xr(e,gt,dn),St(e,ze()),null}function ph(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Ui=ze()+500,Ll&&vr())}}function Ur(e){Hn!==null&&Hn.tag===0&&!(he&6)&&Pi();var t=he;he|=1;var n=Lt.transition,r=me;try{if(Lt.transition=null,me=1,e)return e()}finally{me=r,Lt.transition=n,he=t,!(he&6)&&vr()}}function mh(){xt=Si.current,ke(Si)}function Ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lx(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gs();break;case 3:ji(),ke(yt),ke(at),ih();break;case 5:rh(r);break;case 4:ji();break;case 13:ke(Ie);break;case 19:ke(Ie);break;case 10:Zf(r.type._context);break;case 22:case 23:mh()}n=n.return}if(Ke=e,Fe=e=tr(e.current,null),Xe=xt=t,Ve=0,aa=null,fh=Ul=Fr=0,gt=Lo=null,Pr!==null){for(t=0;t<Pr.length;t++)if(n=Pr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Pr=null}return e}function Ey(e,t){do{var n=Fe;try{if(Xf(),xs.current=nl,tl){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(jr=0,He=Be=Oe=null,Mo=!1,ra=0,dh.current=null,n===null||n.return===null){Ve=1,aa=t,Fe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Xe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=cm(a);if(h!==null){h.flags&=-257,dm(h,a,s,o,t),h.mode&1&&um(o,u,t),t=h,l=u;var p=t.updateQueue;if(p===null){var g=new Set;g.add(l),t.updateQueue=g}else p.add(l);break e}else{if(!(t&1)){um(o,u,t),gh();break e}l=Error(A(426))}}else if(Pe&&s.mode&1){var b=cm(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),dm(b,a,s,o,t),Qf(Fi(l,s));break e}}o=l=Fi(l,s),Ve!==4&&(Ve=2),Lo===null?Lo=[o]:Lo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=sy(o,l,t);nm(o,v);break e;case 1:s=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Zn===null||!Zn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ly(o,s,t);nm(o,x);break e}}o=o.return}while(o!==null)}Ry(n)}catch(_){t=_,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function ky(){var e=rl.current;return rl.current=nl,e===null?nl:e}function gh(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ke===null||!(Fr&268435455)&&!(Ul&268435455)||jn(Ke,Xe)}function al(e,t){var n=he;he|=2;var r=ky();(Ke!==e||Xe!==t)&&(dn=null,Ar(e,t));do try{Ax();break}catch(i){Ey(e,i)}while(1);if(Xf(),he=n,rl.current=r,Fe!==null)throw Error(A(261));return Ke=null,Xe=0,Ve}function Ax(){for(;Fe!==null;)Cy(Fe)}function $x(){for(;Fe!==null&&!ob();)Cy(Fe)}function Cy(e){var t=Iy(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Ry(e):Fe=t,dh.current=null}function Ry(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rx(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Fe=null;return}}else if(n=Cx(n,t,xt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ve===0&&(Ve=5)}function xr(e,t,n){var r=me,i=Lt.transition;try{Lt.transition=null,me=1,Mx(e,t,n,r)}finally{Lt.transition=i,me=r}return null}function Mx(e,t,n,r){do Pi();while(Hn!==null);if(he&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mb(e,o),e===Ke&&(Fe=Ke=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||us||(us=!0,Ty(Us,function(){return Pi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Lt.transition,Lt.transition=null;var a=me;me=1;var s=he;he|=4,dh.current=null,Ix(e,n),by(n,e),tx(md),Vs=!!pd,md=pd=null,e.current=n,Tx(n),ab(),he=s,me=a,Lt.transition=o}else e.current=n;if(us&&(us=!1,Hn=e,ol=i),o=e.pendingLanes,o===0&&(Zn=null),ub(n.stateNode),St(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,e=Md,Md=null,e;return ol&1&&e.tag!==0&&Pi(),o=e.pendingLanes,o&1?e===Dd?zo++:(zo=0,Dd=e):zo=0,vr(),null}function Pi(){if(Hn!==null){var e=a0(ol),t=Lt.transition,n=me;try{if(Lt.transition=null,me=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,ol=0,he&6)throw Error(A(331));var i=he;for(he|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Do(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var f=c.sibling,h=c.return;if(yy(c),c===u){U=null;break}if(f!==null){f.return=h,U=f;break}U=h}}}var p=o.alternate;if(p!==null){var g=p.child;if(g!==null){p.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Do(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,U=v;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){a=U;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,U=y;else e:for(a=m;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fl(9,s)}}catch(_){$e(s,s.return,_)}if(s===a){U=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,U=x;break e}U=s.return}}if(he=i,vr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Nl,e)}catch{}r=!0}return r}finally{me=n,Lt.transition=t}}return!1}function Em(e,t,n){t=Fi(n,t),t=sy(e,t,1),e=Xn(e,t,1),t=dt(),e!==null&&(Sa(e,1,t),St(e,t))}function $e(e,t,n){if(e.tag===3)Em(e,e,n);else for(;t!==null;){if(t.tag===3){Em(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=Fi(n,e),e=ly(t,e,1),t=Xn(t,e,1),e=dt(),t!==null&&(Sa(t,1,e),St(t,e));break}}t=t.return}}function Dx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Xe&n)===n&&(Ve===4||Ve===3&&(Xe&130023424)===Xe&&500>ze()-hh?Ar(e,0):fh|=n),St(e,t)}function Py(e,t){t===0&&(e.mode&1?(t=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):t=1);var n=dt();e=kn(e,t),e!==null&&(Sa(e,t,n),St(e,n))}function Lx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Py(e,n)}function zx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Py(e,n)}var Iy;Iy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,kx(e,t,n);vt=!!(e.flags&131072)}else vt=!1,Pe&&t.flags&1048576&&N0(t,Qs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Es(e,t),e=t.pendingProps;var i=Di(t,at.current);Ri(t,n),i=ah(null,t,r,e,i,n);var o=sh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(o=!0,qs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,th(t),i.updater=zl,t.stateNode=i,i._reactInternals=t,Ed(t,r,e,n),t=Rd(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&qf(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Es(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fx(r),e=Ht(r,e),i){case 0:t=Cd(null,t,r,e,n);break e;case 1:t=pm(null,t,r,e,n);break e;case 11:t=fm(null,t,r,e,n);break e;case 14:t=hm(null,t,r,Ht(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Cd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),pm(e,t,r,i,n);case 3:e:{if(fy(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,D0(e,t),Zs(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(A(423)),t),t=mm(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(A(424)),t),t=mm(e,t,r,n,i);break e}else for(_t=Yn(t.stateNode.containerInfo.firstChild),Et=t,Pe=!0,Gt=null,n=F0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){t=Cn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return U0(t),e===null&&bd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,gd(r,i)?a=null:o!==null&&gd(r,o)&&(t.flags|=32),dy(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&bd(t),null;case 13:return hy(e,t,n);case 4:return nh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),fm(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,_e(Ys,r._currentValue),r._currentValue=a,o!==null)if(Yt(o.value,a)){if(o.children===i.children&&!yt.current){t=Cn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xd(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),xd(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ri(t,n),i=zt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Ht(r,t.pendingProps),i=Ht(r.type,i),hm(e,t,r,i,n);case 15:return uy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Es(e,t),t.tag=1,wt(r)?(e=!0,qs(t)):e=!1,Ri(t,n),z0(t,r,i),Ed(t,r,i,n),Rd(null,t,r,!0,e,n);case 19:return py(e,t,n);case 22:return cy(e,t,n)}throw Error(A(156,t.tag))};function Ty(e,t){return n0(e,t)}function jx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new jx(e,t,n,r)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fx(e){if(typeof e=="function")return vh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Df)return 11;if(e===Lf)return 14}return 2}function tr(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")vh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ci:return $r(n.children,i,o,t);case Mf:a=8,i|=8;break;case qc:return e=Dt(12,n,t,i|2),e.elementType=qc,e.lanes=o,e;case Jc:return e=Dt(13,n,t,i),e.elementType=Jc,e.lanes=o,e;case Qc:return e=Dt(19,n,t,i),e.elementType=Qc,e.lanes=o,e;case jv:return Bl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lv:a=10;break e;case zv:a=9;break e;case Df:a=11;break e;case Lf:a=14;break e;case Dn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $r(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function Bl(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=jv,e.lanes=n,e.stateNode={isHidden:!1},e}function nc(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function rc(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ux(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yh(e,t,n,r,i,o,a,s,l){return e=new Ux(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(o),e}function Bx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oy(e){if(!e)return dr;e=e._reactInternals;e:{if(Qr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(wt(n))return T0(e,n,t)}return t}function Ny(e,t,n,r,i,o,a,s,l){return e=yh(n,r,!0,e,i,o,a,s,l),e.context=Oy(null),n=e.current,r=dt(),i=er(n),o=Sn(r,i),o.callback=t??null,Xn(n,o,i),e.current.lanes=i,Sa(e,i,r),St(e,r),e}function Vl(e,t,n,r){var i=t.current,o=dt(),a=er(i);return n=Oy(n),t.context===null?t.context=n:t.pendingContext=n,t=Sn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xn(i,t,a),e!==null&&(Qt(e,i,a,o),bs(e,i,a)),a}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function km(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wh(e,t){km(e,t),(e=e.alternate)&&km(e,t)}function Vx(){return null}var Ay=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sh(e){this._internalRoot=e}Wl.prototype.render=Sh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Vl(e,t,null,null)};Wl.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ur(function(){Vl(null,e,null,null)}),t[En]=null}};function Wl(e){this._internalRoot=e}Wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=u0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zn.length&&t!==0&&t<zn[n].priority;n++);zn.splice(n,0,e),n===0&&d0(e)}};function bh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function Wx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=sl(a);o.call(u)}}var a=Ny(t,r,e,0,null,!1,!1,"",Cm);return e._reactRootContainer=a,e[En]=a.current,Xo(e.nodeType===8?e.parentNode:e),Ur(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=sl(l);s.call(u)}}var l=yh(e,0,!1,null,null,!1,!1,"",Cm);return e._reactRootContainer=l,e[En]=l.current,Xo(e.nodeType===8?e.parentNode:e),Ur(function(){Vl(t,l,n,r)}),l}function Kl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=sl(a);s.call(l)}}Vl(t,a,e,i)}else a=Wx(n,t,e,i,r);return sl(a)}s0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_o(t.pendingLanes);n!==0&&(Ff(t,n|1),St(t,ze()),!(he&6)&&(Ui=ze()+500,vr()))}break;case 13:Ur(function(){var r=kn(e,1);if(r!==null){var i=dt();Qt(r,e,1,i)}}),wh(e,1)}};Uf=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=dt();Qt(t,e,134217728,n)}wh(e,134217728)}};l0=function(e){if(e.tag===13){var t=er(e),n=kn(e,t);if(n!==null){var r=dt();Qt(n,e,t,r)}wh(e,t)}};u0=function(){return me};c0=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};ad=function(e,t,n){switch(t){case"input":if(Zc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dl(r);if(!i)throw Error(A(90));Uv(r),Zc(r,i)}}}break;case"textarea":Vv(e,n);break;case"select":t=n.value,t!=null&&_i(e,!!n.multiple,t,!1)}};Qv=ph;Yv=Ur;var Hx={usingClientEntryPoint:!1,Events:[xa,pi,Dl,qv,Jv,ph]},yo={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kx={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=e0(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||Vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{Nl=cs.inject(Kx),rn=cs}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(t))throw Error(A(200));return Bx(e,t,null,n)};Rt.createRoot=function(e,t){if(!bh(e))throw Error(A(299));var n=!1,r="",i=Ay;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yh(e,1,!1,null,null,n,!1,r,i),e[En]=t.current,Xo(e.nodeType===8?e.parentNode:e),new Sh(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=e0(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Ur(e)};Rt.hydrate=function(e,t,n){if(!Hl(t))throw Error(A(200));return Kl(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!bh(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ny(t,null,e,1,n??null,i,!1,o,a),e[En]=t.current,Xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wl(t)};Rt.render=function(e,t,n){if(!Hl(t))throw Error(A(200));return Kl(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(A(40));return e._reactRootContainer?(Ur(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};Rt.unstable_batchedUpdates=ph;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Kl(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Rt})(VS);var Rm=$i;Hc.createRoot=Rm.createRoot,Hc.hydrateRoot=Rm.hydrateRoot;var jd={},Gx={get exports(){return jd},set exports(e){jd=e}},$y={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi=S;function qx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jx=typeof Object.is=="function"?Object.is:qx,Qx=Bi.useState,Yx=Bi.useEffect,Xx=Bi.useLayoutEffect,Zx=Bi.useDebugValue;function e_(e,t){var n=t(),r=Qx({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Xx(function(){i.value=n,i.getSnapshot=t,ic(i)&&o({inst:i})},[e,n,t]),Yx(function(){return ic(i)&&o({inst:i}),e(function(){ic(i)&&o({inst:i})})},[e]),Zx(n),n}function ic(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jx(e,n)}catch{return!0}}function t_(e,t){return t()}var n_=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?t_:e_;$y.useSyncExternalStore=Bi.useSyncExternalStore!==void 0?Bi.useSyncExternalStore:n_;(function(e){e.exports=$y})(Gx);var Fd={},r_={get exports(){return Fd},set exports(e){Fd=e}},My={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gl=S,i_=jd;function o_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a_=typeof Object.is=="function"?Object.is:o_,s_=i_.useSyncExternalStore,l_=Gl.useRef,u_=Gl.useEffect,c_=Gl.useMemo,d_=Gl.useDebugValue;My.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=l_(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=c_(function(){function l(h){if(!u){if(u=!0,c=h,h=r(h),i!==void 0&&a.hasValue){var p=a.value;if(i(p,h))return d=p}return d=h}if(p=d,a_(c,h))return p;var g=r(h);return i!==void 0&&i(p,g)?p:(c=h,d=g)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var s=s_(e,o[0],o[1]);return u_(function(){a.hasValue=!0,a.value=s},[s]),d_(s),s};(function(e){e.exports=My})(r_);function f_(e){e()}let Dy=f_;const h_=e=>Dy=e,p_=()=>Dy,fr=S.createContext(null);function Ly(){return S.useContext(fr)}const m_=()=>{throw new Error("uSES not initialized!")};let zy=m_;const g_=e=>{zy=e},v_=(e,t)=>e===t;function y_(e=fr){const t=e===fr?Ly:()=>S.useContext(e);return function(r,i=v_){const{store:o,subscription:a,getServerState:s}=t(),l=zy(a.addNestedSub,o.getState,s||o.getState,r,i);return S.useDebugValue(l),l}}const jy=y_();function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function xh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Ud={},w_={get exports(){return Ud},set exports(e){Ud=e}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,_h=qe?Symbol.for("react.element"):60103,Eh=qe?Symbol.for("react.portal"):60106,ql=qe?Symbol.for("react.fragment"):60107,Jl=qe?Symbol.for("react.strict_mode"):60108,Ql=qe?Symbol.for("react.profiler"):60114,Yl=qe?Symbol.for("react.provider"):60109,Xl=qe?Symbol.for("react.context"):60110,kh=qe?Symbol.for("react.async_mode"):60111,Zl=qe?Symbol.for("react.concurrent_mode"):60111,eu=qe?Symbol.for("react.forward_ref"):60112,tu=qe?Symbol.for("react.suspense"):60113,S_=qe?Symbol.for("react.suspense_list"):60120,nu=qe?Symbol.for("react.memo"):60115,ru=qe?Symbol.for("react.lazy"):60116,b_=qe?Symbol.for("react.block"):60121,x_=qe?Symbol.for("react.fundamental"):60117,__=qe?Symbol.for("react.responder"):60118,E_=qe?Symbol.for("react.scope"):60119;function It(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _h:switch(e=e.type,e){case kh:case Zl:case ql:case Ql:case Jl:case tu:return e;default:switch(e=e&&e.$$typeof,e){case Xl:case eu:case ru:case nu:case Yl:return e;default:return t}}case Eh:return t}}}function Fy(e){return It(e)===Zl}ge.AsyncMode=kh;ge.ConcurrentMode=Zl;ge.ContextConsumer=Xl;ge.ContextProvider=Yl;ge.Element=_h;ge.ForwardRef=eu;ge.Fragment=ql;ge.Lazy=ru;ge.Memo=nu;ge.Portal=Eh;ge.Profiler=Ql;ge.StrictMode=Jl;ge.Suspense=tu;ge.isAsyncMode=function(e){return Fy(e)||It(e)===kh};ge.isConcurrentMode=Fy;ge.isContextConsumer=function(e){return It(e)===Xl};ge.isContextProvider=function(e){return It(e)===Yl};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_h};ge.isForwardRef=function(e){return It(e)===eu};ge.isFragment=function(e){return It(e)===ql};ge.isLazy=function(e){return It(e)===ru};ge.isMemo=function(e){return It(e)===nu};ge.isPortal=function(e){return It(e)===Eh};ge.isProfiler=function(e){return It(e)===Ql};ge.isStrictMode=function(e){return It(e)===Jl};ge.isSuspense=function(e){return It(e)===tu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ql||e===Zl||e===Ql||e===Jl||e===tu||e===S_||typeof e=="object"&&e!==null&&(e.$$typeof===ru||e.$$typeof===nu||e.$$typeof===Yl||e.$$typeof===Xl||e.$$typeof===eu||e.$$typeof===x_||e.$$typeof===__||e.$$typeof===E_||e.$$typeof===b_)};ge.typeOf=It;(function(e){e.exports=ge})(w_);var Ch=Ud,k_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R_={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rh={};Rh[Ch.ForwardRef]=R_;Rh[Ch.Memo]=Uy;function Pm(e){return Ch.isMemo(e)?Uy:Rh[e.$$typeof]||k_}var P_=Object.defineProperty,I_=Object.getOwnPropertyNames,Im=Object.getOwnPropertySymbols,T_=Object.getOwnPropertyDescriptor,O_=Object.getPrototypeOf,Tm=Object.prototype;function By(e,t,n){if(typeof t!="string"){if(Tm){var r=O_(t);r&&r!==Tm&&By(e,r,n)}var i=I_(t);Im&&(i=i.concat(Im(t)));for(var o=Pm(e),a=Pm(t),s=0;s<i.length;++s){var l=i[s];if(!C_[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=T_(t,l);try{P_(e,l,u)}catch{}}}}return e}var Vy=By,Om={},N_={get exports(){return Om},set exports(e){Om=e}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=Symbol.for("react.element"),Ih=Symbol.for("react.portal"),iu=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),A_=Symbol.for("react.server_context"),uu=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),hu=Symbol.for("react.lazy"),$_=Symbol.for("react.offscreen"),Wy;Wy=Symbol.for("react.module.reference");function Ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ph:switch(e=e.type,e){case iu:case au:case ou:case cu:case du:return e;default:switch(e=e&&e.$$typeof,e){case A_:case lu:case uu:case hu:case fu:case su:return e;default:return t}}case Ih:return t}}}ve.ContextConsumer=lu;ve.ContextProvider=su;ve.Element=Ph;ve.ForwardRef=uu;ve.Fragment=iu;ve.Lazy=hu;ve.Memo=fu;ve.Portal=Ih;ve.Profiler=au;ve.StrictMode=ou;ve.Suspense=cu;ve.SuspenseList=du;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(e){return Ut(e)===lu};ve.isContextProvider=function(e){return Ut(e)===su};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ph};ve.isForwardRef=function(e){return Ut(e)===uu};ve.isFragment=function(e){return Ut(e)===iu};ve.isLazy=function(e){return Ut(e)===hu};ve.isMemo=function(e){return Ut(e)===fu};ve.isPortal=function(e){return Ut(e)===Ih};ve.isProfiler=function(e){return Ut(e)===au};ve.isStrictMode=function(e){return Ut(e)===ou};ve.isSuspense=function(e){return Ut(e)===cu};ve.isSuspenseList=function(e){return Ut(e)===du};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===iu||e===au||e===ou||e===cu||e===du||e===$_||typeof e=="object"&&e!==null&&(e.$$typeof===hu||e.$$typeof===fu||e.$$typeof===su||e.$$typeof===lu||e.$$typeof===uu||e.$$typeof===Wy||e.getModuleId!==void 0)};ve.typeOf=Ut;(function(e){e.exports=ve})(N_);function M_(){const e=p_();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Nm={notify(){},get:()=>[]};function D_(e,t){let n,r=Nm;function i(d){return l(),r.subscribe(d)}function o(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function s(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=M_())}function u(){n&&(n(),n=void 0,r.clear(),r=Nm)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:s,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const L_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z_=L_?S.useLayoutEffect:S.useEffect;function j_({store:e,context:t,children:n,serverState:r}){const i=S.useMemo(()=>{const s=D_(e);return{store:e,subscription:s,getServerState:r?()=>r:void 0}},[e,r]),o=S.useMemo(()=>e.getState(),[e]);z_(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),o!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,o]);const a=t||fr;return ie.createElement(a.Provider,{value:i},n)}function Hy(e=fr){const t=e===fr?Ly:()=>S.useContext(e);return function(){const{store:r}=t();return r}}const F_=Hy();function U_(e=fr){const t=e===fr?F_:Hy(e);return function(){return t().dispatch}}const B_=U_();g_(Fd.useSyncExternalStoreWithSelector);h_($i.unstable_batchedUpdates);/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}var Kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kn||(Kn={}));const Am="popstate";function V_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Bd("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sa(i)}return K_(t,n,null,e)}function We(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function W_(){return Math.random().toString(36).substr(2,8)}function $m(e){return{usr:e.state,key:e.key}}function Bd(e,t,n,r){return n===void 0&&(n=null),ll({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xi(t):t,{state:n,key:t&&t.key||r||W_()})}function sa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function H_(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:sa(e);return We(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function K_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Kn.Pop,l=null;function u(){s=Kn.Pop,l&&l({action:s,location:f.location})}function c(h,p){s=Kn.Push;let g=Bd(f.location,h,p);n&&n(g,h);let b=$m(g),v=f.createHref(g);try{a.pushState(b,"",v)}catch{i.location.assign(v)}o&&l&&l({action:s,location:f.location})}function d(h,p){s=Kn.Replace;let g=Bd(f.location,h,p);n&&n(g,h);let b=$m(g),v=f.createHref(g);a.replaceState(b,"",v),o&&l&&l({action:s,location:f.location})}let f={get action(){return s},get location(){return e(i,a)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Am,u),l=h,()=>{i.removeEventListener(Am,u),l=null}},createHref(h){return t(i,h)},encodeLocation(h){let p=H_(typeof h=="string"?h:sa(h));return{pathname:p.pathname,search:p.search,hash:p.hash}},push:c,replace:d,go(h){return a.go(h)}};return f}var Mm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mm||(Mm={}));function G_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Xi(t):t,i=qy(r.pathname||"/",n);if(i==null)return null;let o=Ky(e);q_(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=rE(o[s],aE(i));return a}function Ky(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=nr([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(We(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ky(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:tE(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Gy(o.path))i(o,a,l)}),t}function Gy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Gy(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function q_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J_=/^:\w+$/,Q_=3,Y_=2,X_=1,Z_=10,eE=-2,Dm=e=>e==="*";function tE(e,t){let n=e.split("/"),r=n.length;return n.some(Dm)&&(r+=eE),t&&(r+=Y_),n.filter(i=>!Dm(i)).reduce((i,o)=>i+(J_.test(o)?Q_:o===""?X_:Z_),r)}function nE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rE(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=iE({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;o.push({params:r,pathname:nr([i,c.pathname]),pathnameBase:cE(nr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=nr([i,c.pathnameBase]))}return o}function iE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=s[d]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=sE(s[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Th(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function aE(e){try{return decodeURI(e)}catch(t){return Th(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sE(e,t){try{return decodeURIComponent(e)}catch(n){return Th(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function qy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Th(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xi(e):e;return{pathname:n?n.startsWith("/")?n:uE(n,t):t,search:dE(r),hash:fE(i)}}function uE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Xi(e):(i=ll({},e),We(!i.pathname||!i.pathname.includes("?"),oc("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),oc("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),oc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let d=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=lE(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),cE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class hE{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pE(e){return e instanceof hE}const mE=["post","put","patch","delete"];[...mE];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vd(){return Vd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vd.apply(this,arguments)}function gE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const vE=typeof Object.is=="function"?Object.is:gE,{useState:yE,useEffect:wE,useLayoutEffect:SE,useDebugValue:bE}=Wc;function xE(e,t,n){const r=t(),[{inst:i},o]=yE({inst:{value:r,getSnapshot:t}});return SE(()=>{i.value=r,i.getSnapshot=t,ac(i)&&o({inst:i})},[e,r,t]),wE(()=>(ac(i)&&o({inst:i}),e(()=>{ac(i)&&o({inst:i})})),[e]),bE(r),r}function ac(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!vE(n,r)}catch{return!0}}function _E(e,t,n){return t()}const EE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kE=!EE,CE=kE?_E:xE;"useSyncExternalStore"in Wc&&(e=>e.useSyncExternalStore)(Wc);const RE=S.createContext(null),PE=S.createContext(null),Oh=S.createContext(null),Ea=S.createContext(null),pu=S.createContext(null),Yr=S.createContext({outlet:null,matches:[]}),Yy=S.createContext(null);function IE(e,t){let{relative:n}=t===void 0?{}:t;ka()||We(!1);let{basename:r,navigator:i}=S.useContext(Ea),{hash:o,pathname:a,search:s}=Nh(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:nr([r,a])),i.createHref({pathname:l,search:s,hash:o})}function ka(){return S.useContext(pu)!=null}function Ca(){return ka()||We(!1),S.useContext(pu).location}function Xr(){ka()||We(!1);let{basename:e,navigator:t}=S.useContext(Ea),{matches:n}=S.useContext(Yr),{pathname:r}=Ca(),i=JSON.stringify(Jy(n).map(s=>s.pathnameBase)),o=S.useRef(!1);return S.useEffect(()=>{o.current=!0}),S.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=Qy(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:nr([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function TE(){let{matches:e}=S.useContext(Yr),t=e[e.length-1];return t?t.params:{}}function Nh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(Yr),{pathname:i}=Ca(),o=JSON.stringify(Jy(r).map(a=>a.pathnameBase));return S.useMemo(()=>Qy(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function OE(e,t){ka()||We(!1);let{navigator:n}=S.useContext(Ea),r=S.useContext(Oh),{matches:i}=S.useContext(Yr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Ca(),u;if(t){var c;let g=typeof t=="string"?Xi(t):t;s==="/"||(c=g.pathname)!=null&&c.startsWith(s)||We(!1),u=g}else u=l;let d=u.pathname||"/",f=s==="/"?d:d.slice(s.length)||"/",h=G_(e,{pathname:f}),p=ME(h&&h.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:nr([s,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?s:nr([s,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r||void 0);return t&&p?S.createElement(pu.Provider,{value:{location:Vd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kn.Pop}},p):p}function NE(){let e=jE(),t=pE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unhandled Thrown Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:o},"errorElement")," props on ",S.createElement("code",{style:o},"<Route>")))}class AE extends S.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(Yr.Provider,{value:this.props.routeContext},S.createElement(Yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $E(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(RE);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S.createElement(Yr.Provider,{value:t},r)}function ME(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||We(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=n?a.route.errorElement||S.createElement(NE,null):null,c=t.concat(r.slice(0,s+1)),d=()=>S.createElement($E,{match:a,routeContext:{outlet:o,matches:c}},l?u:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||s===0)?S.createElement(AE,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Lm;(function(e){e.UseRevalidator="useRevalidator"})(Lm||(Lm={}));var ul;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ul||(ul={}));function DE(e){let t=S.useContext(Oh);return t||We(!1),t}function LE(e){let t=S.useContext(Yr);return t||We(!1),t}function zE(e){let t=LE(),n=t.matches[t.matches.length-1];return n.route.id||We(!1),n.route.id}function jE(){var e;let t=S.useContext(Yy),n=DE(ul.UseRouteError),r=zE(ul.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function _r(e){We(!1)}function FE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:o,static:a=!1}=e;ka()&&We(!1);let s=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Xi(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,p=S.useMemo(()=>{let g=qy(u,s);return g==null?null:{pathname:g,search:c,hash:d,state:f,key:h}},[s,u,c,d,f,h]);return p==null?null:S.createElement(Ea.Provider,{value:l},S.createElement(pu.Provider,{children:n,value:{location:p,navigationType:i}}))}function UE(e){let{children:t,location:n}=e,r=S.useContext(PE),i=r&&!t?r.router.routes:Wd(t);return OE(i,n)}var zm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(zm||(zm={}));new Promise(()=>{});function Wd(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,Wd(r.props.children,t));return}r.type!==_r&&We(!1),!r.props.index||!r.props.children||We(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Wd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cl.apply(this,arguments)}function Xy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function BE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function VE(e,t){return e.button===0&&(!t||t==="_self")&&!BE(e)}const WE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],HE=["aria-current","caseSensitive","className","end","style","to","children"];function KE(e){let{basename:t,children:n,window:r}=e,i=S.useRef();i.current==null&&(i.current=V_({window:r,v5Compat:!0}));let o=i.current,[a,s]=S.useState({action:o.action,location:o.location});return S.useLayoutEffect(()=>o.listen(s),[o]),S.createElement(FE,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Tr=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=t,d=Xy(t,WE),f=IE(u,{relative:i}),h=qE(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function p(g){r&&r(g),g.defaultPrevented||h(g)}return S.createElement("a",cl({},d,{href:f,onClick:o?r:p,ref:n,target:l}))}),GE=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=t,c=Xy(t,HE),d=Nh(l,{relative:c.relative}),f=Ca(),h=S.useContext(Oh),{navigator:p}=S.useContext(Ea),g=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,b=f.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;i||(b=b.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase());let m=b===g||!a&&b.startsWith(g)&&b.charAt(g.length)==="/",y=v!=null&&(v===g||!a&&v.startsWith(g)&&v.charAt(g.length)==="/"),x=m?r:void 0,_;typeof o=="function"?_=o({isActive:m,isPending:y}):_=[o,m?"active":null,y?"pending":null].filter(Boolean).join(" ");let k=typeof s=="function"?s({isActive:m,isPending:y}):s;return S.createElement(Tr,cl({},c,{"aria-current":x,className:_,ref:n,style:k,to:l}),typeof u=="function"?u({isActive:m,isPending:y}):u)});var jm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(jm||(jm={}));var Fm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fm||(Fm={}));function qE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=Xr(),l=Ca(),u=Nh(e,{relative:a});return S.useCallback(c=>{if(VE(c,n)){c.preventDefault();let d=r!==void 0?r:sa(l)===sa(u);s(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}function qt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function hr(e){return!!e&&!!e[Re]}function Rn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===rk}(e)||Array.isArray(e)||!!e[Gm]||!!(!((t=e.constructor)===null||t===void 0)&&t[Gm])||Ah(e)||$h(e))}function Br(e,t,n){n===void 0&&(n=!1),Zi(e)===0?(n?Object.keys:Ti)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Zi(e){var t=e[Re];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Ah(e)?2:$h(e)?3:0}function Ii(e,t){return Zi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function JE(e,t){return Zi(e)===2?e.get(t):e[t]}function Zy(e,t,n){var r=Zi(e);r===2?e.set(t,n):r===3?(e.delete(t),e.add(n)):e[t]=n}function e1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Ah(e){return tk&&e instanceof Map}function $h(e){return nk&&e instanceof Set}function Er(e){return e.o||e.t}function Mh(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=n1(e);delete t[Re];for(var n=Ti(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Dh(e,t){return t===void 0&&(t=!1),Lh(e)||hr(e)||!Rn(e)||(Zi(e)>1&&(e.set=e.add=e.clear=e.delete=QE),Object.freeze(e),t&&Br(e,function(n,r){return Dh(r,!0)},!0)),e}function QE(){qt(2)}function Lh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function an(e){var t=qd[e];return t||qt(18,e),t}function YE(e,t){qd[e]||(qd[e]=t)}function Hd(){return la}function sc(e,t){t&&(an("Patches"),e.u=[],e.s=[],e.v=t)}function dl(e){Kd(e),e.p.forEach(XE),e.p=null}function Kd(e){e===la&&(la=e.l)}function Um(e){return la={p:[],l:la,h:e,m:!0,_:0}}function XE(e){var t=e[Re];t.i===0||t.i===1?t.j():t.O=!0}function lc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||an("ES5").S(t,e,r),r?(n[Re].P&&(dl(t),qt(4)),Rn(e)&&(e=fl(t,e),t.l||hl(t,e)),t.u&&an("Patches").M(n[Re].t,e,t.u,t.s)):e=fl(t,n,[]),dl(t),t.u&&t.v(t.u,t.s),e!==t1?e:void 0}function fl(e,t,n){if(Lh(t))return t;var r=t[Re];if(!r)return Br(t,function(o,a){return Bm(e,r,t,o,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return hl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Mh(r.k):r.o;Br(r.i===3?new Set(i):i,function(o,a){return Bm(e,r,i,o,a,n)}),hl(e,i,!1),n&&e.u&&an("Patches").R(r,n,e.u,e.s)}return r.o}function Bm(e,t,n,r,i,o){if(hr(i)){var a=fl(e,i,o&&t&&t.i!==3&&!Ii(t.D,r)?o.concat(r):void 0);if(Zy(n,r,a),!hr(a))return;e.m=!1}if(Rn(i)&&!Lh(i)){if(!e.h.F&&e._<1)return;fl(e,i),t&&t.A.l||hl(e,i)}}function hl(e,t,n){n===void 0&&(n=!1),e.h.F&&e.m&&Dh(t,n)}function uc(e,t){var n=e[Re];return(n?Er(n):e)[t]}function Vm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Fn(e){e.P||(e.P=!0,e.l&&Fn(e.l))}function cc(e){e.o||(e.o=Mh(e.t))}function Gd(e,t,n){var r=Ah(t)?an("MapSet").N(t,n):$h(t)?an("MapSet").T(t,n):e.g?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:Hd(),P:!1,I:!1,D:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,u=ua;a&&(l=[s],u=ko);var c=Proxy.revocable(l,u),d=c.revoke,f=c.proxy;return s.k=f,s.j=d,f}(t,n):an("ES5").J(t,n);return(n?n.A:Hd()).p.push(r),r}function ZE(e){return hr(e)||qt(22,e),function t(n){if(!Rn(n))return n;var r,i=n[Re],o=Zi(n);if(i){if(!i.P&&(i.i<4||!an("ES5").K(i)))return i.t;i.I=!0,r=Wm(n,o),i.I=!1}else r=Wm(n,o);return Br(r,function(a,s){i&&JE(i.t,a)===s||Zy(r,a,t(s))}),o===3?new Set(r):r}(e)}function Wm(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Mh(e)}function ek(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[Re];return ua.get(l,o)},set:function(l){var u=this[Re];ua.set(u,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][Re];if(!s.P)switch(s.i){case 5:r(s)&&Fn(s);break;case 4:n(s)&&Fn(s)}}}function n(o){for(var a=o.t,s=o.k,l=Ti(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Re){var d=a[c];if(d===void 0&&!Ii(a,c))return!0;var f=s[c],h=f&&f[Re];if(h?h.t!==d:!e1(f,d))return!0}}var p=!!a[Re];return l.length!==Ti(a).length+(p?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};YE("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(c,d){if(c){for(var f=Array(d.length),h=0;h<d.length;h++)Object.defineProperty(f,""+h,e(h,!0));return f}var p=n1(d);delete p[Re];for(var g=Ti(p),b=0;b<g.length;b++){var v=g[b];p[v]=e(v,c||!!p[v].enumerable)}return Object.create(Object.getPrototypeOf(d),p)}(s,o),u={i:s?5:4,A:a?a.A:Hd(),P:!1,I:!1,D:{},l:a,t:o,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,Re,{value:u,writable:!0}),l},S:function(o,a,s){s?hr(a)&&a[Re].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[Re];if(c){var d=c.t,f=c.k,h=c.D,p=c.i;if(p===4)Br(f,function(y){y!==Re&&(d[y]!==void 0||Ii(d,y)?h[y]||l(f[y]):(h[y]=!0,Fn(c)))}),Br(d,function(y){f[y]!==void 0||Ii(f,y)||(h[y]=!1,Fn(c))});else if(p===5){if(r(c)&&(Fn(c),h.length=!0),f.length<d.length)for(var g=f.length;g<d.length;g++)h[g]=!1;else for(var b=d.length;b<f.length;b++)h[b]=!0;for(var v=Math.min(f.length,d.length),m=0;m<v;m++)f.hasOwnProperty(m)||(h[m]=!0),h[m]===void 0&&l(f[m])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Hm,la,zh=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",tk=typeof Map<"u",nk=typeof Set<"u",Km=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",t1=zh?Symbol.for("immer-nothing"):((Hm={})["immer-nothing"]=!0,Hm),Gm=zh?Symbol.for("immer-draftable"):"__$immer_draftable",Re=zh?Symbol.for("immer-state"):"__$immer_state",rk=""+Object.prototype.constructor,Ti=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,n1=Object.getOwnPropertyDescriptors||function(e){var t={};return Ti(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},qd={},ua={get:function(e,t){if(t===Re)return e;var n=Er(e);if(!Ii(n,t))return function(i,o,a){var s,l=Vm(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Rn(r)?r:r===uc(e.t,t)?(cc(e),e.o[t]=Gd(e.A.h,r,e)):r},has:function(e,t){return t in Er(e)},ownKeys:function(e){return Reflect.ownKeys(Er(e))},set:function(e,t,n){var r=Vm(Er(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=uc(Er(e),t),o=i==null?void 0:i[Re];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(e1(n,i)&&(n!==void 0||Ii(e.t,t)))return!0;cc(e),Fn(e)}return e.o[t]===n&&typeof n!="number"&&(n!==void 0||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return uc(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,cc(e),Fn(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Er(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){qt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){qt(12)}},ko={};Br(ua,function(e,t){ko[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ko.deleteProperty=function(e,t){return ko.set.call(this,e,t,void 0)},ko.set=function(e,t,n){return ua.set.call(this,e[0],t,n,e[0])};var ik=function(){function e(n){var r=this;this.g=Km,this.F=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(g){var b=this;g===void 0&&(g=s);for(var v=arguments.length,m=Array(v>1?v-1:0),y=1;y<v;y++)m[y-1]=arguments[y];return l.produce(g,function(x){var _;return(_=o).call.apply(_,[b,x].concat(m))})}}var u;if(typeof o!="function"&&qt(6),a!==void 0&&typeof a!="function"&&qt(7),Rn(i)){var c=Um(r),d=Gd(r,i,void 0),f=!0;try{u=o(d),f=!1}finally{f?dl(c):Kd(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(g){return sc(c,a),lc(g,c)},function(g){throw dl(c),g}):(sc(c,a),lc(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===t1&&(u=void 0),r.F&&Dh(u,!0),a){var h=[],p=[];an("Patches").M(i,u,h,p),a(h,p)}return u}qt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];return r.produceWithPatches(u,function(h){return i.apply(void 0,[h].concat(d))})};var a,s,l=r.produce(i,o,function(u,c){a=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Rn(n)||qt(8),hr(n)&&(n=ZE(n));var r=Um(this),i=Gd(this,n,void 0);return i[Re].C=!0,Kd(r),i},t.finishDraft=function(n,r){var i=n&&n[Re],o=i.A;return sc(o,r),lc(void 0,o)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!Km&&qt(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=an("Patches").$;return hr(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),Ct=new ik,r1=Ct.produce;Ct.produceWithPatches.bind(Ct);Ct.setAutoFreeze.bind(Ct);Ct.setUseProxies.bind(Ct);Ct.applyPatches.bind(Ct);Ct.createDraft.bind(Ct);Ct.finishDraft.bind(Ct);function Vi(e){return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vi(e)}function ok(e,t){if(Vi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Vi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function i1(e){var t=ok(e,"string");return Vi(t)==="symbol"?t:String(t)}function Mt(e,t,n){return t=i1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Jm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qm(Object(n),!0).forEach(function(r){Mt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Qm=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),dc=function(){return Math.random().toString(36).substring(7).split("").join(".")},pl={INIT:"@@redux/INIT"+dc(),REPLACE:"@@redux/REPLACE"+dc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+dc()}};function ak(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function o1(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(rt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(rt(1));return n(o1)(e,t)}if(typeof e!="function")throw new Error(rt(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(rt(3));return o}function d(g){if(typeof g!="function")throw new Error(rt(4));if(l)throw new Error(rt(5));var b=!0;return u(),s.push(g),function(){if(b){if(l)throw new Error(rt(6));b=!1,u();var m=s.indexOf(g);s.splice(m,1),a=null}}}function f(g){if(!ak(g))throw new Error(rt(7));if(typeof g.type>"u")throw new Error(rt(8));if(l)throw new Error(rt(9));try{l=!0,o=i(o,g)}finally{l=!1}for(var b=a=s,v=0;v<b.length;v++){var m=b[v];m()}return g}function h(g){if(typeof g!="function")throw new Error(rt(10));i=g,f({type:pl.REPLACE})}function p(){var g,b=d;return g={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(rt(11));function y(){m.next&&m.next(c())}y();var x=b(y);return{unsubscribe:x}}},g[Qm]=function(){return this},g}return f({type:pl.INIT}),r={dispatch:f,subscribe:d,getState:c,replaceReducer:h},r[Qm]=p,r}function sk(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:pl.INIT});if(typeof r>"u")throw new Error(rt(12));if(typeof n(void 0,{type:pl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rt(13))})}function lk(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{sk(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var c=!1,d={},f=0;f<o.length;f++){var h=o[f],p=n[h],g=l[h],b=p(g,u);if(typeof b>"u")throw u&&u.type,new Error(rt(14));d[h]=b,c=c||b!==g}return c=c||o.length!==Object.keys(l).length,c?d:l}}function ml(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function uk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(rt(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=ml.apply(void 0,s)(i.dispatch),Jm(Jm({},i),{},{dispatch:o})}}}function a1(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(s){return typeof s=="function"?s(i,o,e):a(s)}}};return t}var s1=a1();s1.withExtraArgument=a1;const Ym=s1;var ck=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),dk=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},gl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},fk=Object.defineProperty,hk=Object.defineProperties,pk=Object.getOwnPropertyDescriptors,Xm=Object.getOwnPropertySymbols,mk=Object.prototype.hasOwnProperty,gk=Object.prototype.propertyIsEnumerable,Zm=function(e,t,n){return t in e?fk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},rr=function(e,t){for(var n in t||(t={}))mk.call(t,n)&&Zm(e,n,t[n]);if(Xm)for(var r=0,i=Xm(t);r<i.length;r++){var n=i[r];gk.call(t,n)&&Zm(e,n,t[n])}return e},fc=function(e,t){return hk(e,pk(t))},vk=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(u){i(u)}},a=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})},yk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ml:ml.apply(null,arguments)};function wk(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Sk=function(e){ck(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,gl([void 0],n[0].concat(this)))):new(t.bind.apply(t,gl([void 0],n.concat(this))))},t}(Array);function Jd(e){return Rn(e)?r1(e,function(){}):e}function bk(e){return typeof e=="boolean"}function xk(){return function(t){return _k(t)}}function _k(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Sk;return n&&(bk(n)?r.push(Ym):r.push(Ym.withExtraArgument(n.extraArgument))),r}var Ek=!0;function kk(e){var t=xk(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,f=d===void 0?void 0:d,h;if(typeof i=="function")h=i;else if(wk(i))h=lk(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=a;typeof p=="function"&&(p=p(t));var g=uk.apply(void 0,p),b=ml;l&&(b=yk(rr({trace:!Ek},typeof l=="object"&&l)));var v=[g];Array.isArray(f)?v=gl([g],f):typeof f=="function"&&(v=f(v));var m=b.apply(void 0,v);return o1(h,c,m)}function ir(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return rr(rr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function l1(e){var t={},n=[],r,i={addCase:function(o,a){var s=typeof o=="string"?o:o.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function Ck(e){return typeof e=="function"}function Rk(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?l1(t):[t,n,r],o=i[0],a=i[1],s=i[2],l;if(Ck(e))l=function(){return Jd(e())};else{var u=Jd(e);l=function(){return u}}function c(d,f){d===void 0&&(d=l());var h=gl([o[f.type]],a.filter(function(p){var g=p.matcher;return g(f)}).map(function(p){var g=p.reducer;return g}));return h.filter(function(p){return!!p}).length===0&&(h=[s]),h.reduce(function(p,g){if(g)if(hr(p)){var b=p,v=g(b,f);return v===void 0?p:v}else{if(Rn(p))return r1(p,function(m){return g(m,f)});var v=g(p,f);if(v===void 0){if(p===null)return p;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}return p},d)}return c.getInitialState=l,c}function Pk(e,t){return e+"/"+t}function Ik(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Jd(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},s={};i.forEach(function(c){var d=r[c],f=Pk(t,c),h,p;"reducer"in d?(h=d.reducer,p=d.prepare):h=d,o[c]=h,a[f]=h,s[c]=p?ir(f,p):ir(f)});function l(){var c=typeof e.extraReducers=="function"?l1(e.extraReducers):[e.extraReducers],d=c[0],f=d===void 0?{}:d,h=c[1],p=h===void 0?[]:h,g=c[2],b=g===void 0?void 0:g,v=rr(rr({},f),a);return Rk(n,function(m){for(var y in v)m.addCase(y,v[y]);for(var x=0,_=p;x<_.length;x++){var k=_[x];m.addMatcher(k.matcher,k.reducer)}b&&m.addDefaultCase(b)})}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var Tk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ok=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Tk[Math.random()*64|0];return t},Nk=["name","message","stack","code"],hc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),eg=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ak=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Nk;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=ir(t+"/fulfilled",function(u,c,d,f){return{payload:u,meta:fc(rr({},f||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),o=ir(t+"/pending",function(u,c,d){return{payload:void 0,meta:fc(rr({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),a=ir(t+"/rejected",function(u,c,d,f,h){return{payload:f,error:(r&&r.serializeError||Ak)(u||"Rejected"),meta:fc(rr({},h||{}),{arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,f){var h=r!=null&&r.idGenerator?r.idGenerator(u):Ok(),p=new s,g;function b(m){g=m,p.abort()}var v=function(){return vk(this,null,function(){var m,y,x,_,k,I,O;return dk(this,function(z){switch(z.label){case 0:return z.trys.push([0,4,,5]),_=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,u,{getState:d,extra:f}),Mk(_)?[4,_]:[3,2];case 1:_=z.sent(),z.label=2;case 2:if(_===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return k=new Promise(function($,J){return p.signal.addEventListener("abort",function(){return J({name:"AbortError",message:g||"Aborted"})})}),c(o(h,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:h,arg:u},{getState:d,extra:f}))),[4,Promise.race([k,Promise.resolve(n(u,{dispatch:c,getState:d,extra:f,requestId:h,signal:p.signal,abort:b,rejectWithValue:function($,J){return new hc($,J)},fulfillWithValue:function($,J){return new eg($,J)}})).then(function($){if($ instanceof hc)throw $;return $ instanceof eg?i($.payload,h,u,$.meta):i($,h,u)})])];case 3:return x=z.sent(),[3,5];case 4:return I=z.sent(),x=I instanceof hc?a(null,h,u,I.payload,I.meta):a(I,h,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&a.match(x)&&x.meta.condition,O||c(x),[2,x]}})})}();return Object.assign(v,{abort:b,requestId:h,arg:u,unwrap:function(){return v.then($k)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function $k(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Mk(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var jh="listenerMiddleware";ir(jh+"/add");ir(jh+"/removeAll");ir(jh+"/remove");var tg;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ek();const u1=Ik({name:"user",initialState:{user:null},reducers:{login:(e,t)=>{e.user=t.payload},logout:e=>{e.user=null}}}),{login:Dk,logout:Lk}=u1.actions,c1=e=>e.user.user,zk=u1.reducer;/**
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
 *//**
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
 */const d1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},jk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},f1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|s>>4;let f=(s&15)<<2|u>>6,h=u&63;l||(h=64,a||(f=64)),r.push(n[c],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(d1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):jk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||u==null||d==null)throw Error();const f=o<<2|s>>4;if(r.push(f),u!==64){const h=s<<4&240|u>>2;if(r.push(h),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Fk=function(e){const t=d1(e);return f1.encodeByteArray(t,!0)},h1=function(e){return Fk(e).replace(/\./g,"")},p1=function(e){try{return f1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Bk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Vk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wk(){const e=st();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hk(){try{return typeof indexedDB=="object"}catch{return!1}}function Kk(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qk=()=>Gk().__FIREBASE_DEFAULTS__,Jk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Qk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&p1(e[1]);return t&&JSON.parse(t)},Fh=()=>{try{return qk()||Jk()||Qk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yk=e=>{var t,n;return(n=(t=Fh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Xk=()=>{var e;return(e=Fh())===null||e===void 0?void 0:e.config},m1=e=>{var t;return(t=Fh())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Zk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */const eC="FirebaseError";class yr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=eC,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?tC(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new yr(i,s,r)}}function tC(e,t){return e.replace(nC,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nC=/\{\$([^}]+)}/g;function rC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(ng(o)&&ng(a)){if(!vl(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ng(e){return e!==null&&typeof e=="object"}/**
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
 */function Pa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Co(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Ro(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function iC(e,t){const n=new oC(e,t);return n.subscribe.bind(n)}class oC{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aC(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aC(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function pc(){}/**
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
 */function un(e){return e&&e._delegate?e._delegate:e}class Wi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class sC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Zk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uC(t))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=kr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kr){return this.instances.has(t)}getOptions(t=kr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kr){return this.component?this.component.multipleInstances?t:kr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lC(e){return e===kr?void 0:e}function uC(e){return e.instantiationMode==="EAGER"}/**
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
 */class cC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(xe||(xe={}));const dC={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},fC=xe.INFO,hC={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},pC=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=hC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class g1{constructor(t){this.name=t,this._logLevel=fC,this._logHandler=pC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...t),this._logHandler(this,xe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...t),this._logHandler(this,xe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...t),this._logHandler(this,xe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...t),this._logHandler(this,xe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...t),this._logHandler(this,xe.ERROR,...t)}}const mC=(e,t)=>t.some(n=>e instanceof n);let rg,ig;function gC(){return rg||(rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vC(){return ig||(ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v1=new WeakMap,Qd=new WeakMap,y1=new WeakMap,mc=new WeakMap,Uh=new WeakMap;function yC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(or(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&v1.set(n,e)}).catch(()=>{}),Uh.set(t,e),t}function wC(e){if(Qd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Qd.set(e,t)}let Yd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||y1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function SC(e){Yd=e(Yd)}function bC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gc(this),t,...n);return y1.set(r,t.sort?t.sort():[t]),or(r)}:vC().includes(e)?function(...t){return e.apply(gc(this),t),or(v1.get(this))}:function(...t){return or(e.apply(gc(this),t))}}function xC(e){return typeof e=="function"?bC(e):(e instanceof IDBTransaction&&wC(e),mC(e,gC())?new Proxy(e,Yd):e)}function or(e){if(e instanceof IDBRequest)return yC(e);if(mc.has(e))return mc.get(e);const t=xC(e);return t!==e&&(mc.set(e,t),Uh.set(t,e)),t}const gc=e=>Uh.get(e);function _C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=or(a);return r&&a.addEventListener("upgradeneeded",l=>{r(or(a.result),l.oldVersion,l.newVersion,or(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const EC=["get","getKey","getAll","getAllKeys","count"],kC=["put","add","delete","clear"],vc=new Map;function og(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(vc.get(t))return vc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=kC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EC.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return vc.set(t,o),o}SC(e=>({...e,get:(t,n,r)=>og(t,n)||e.get(t,n,r),has:(t,n)=>!!og(t,n)||e.has(t,n)}));/**
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
 */class CC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xd="@firebase/app",ag="0.9.0";/**
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
 */const Vr=new g1("@firebase/app"),PC="@firebase/app-compat",IC="@firebase/analytics-compat",TC="@firebase/analytics",OC="@firebase/app-check-compat",NC="@firebase/app-check",AC="@firebase/auth",$C="@firebase/auth-compat",MC="@firebase/database",DC="@firebase/database-compat",LC="@firebase/functions",zC="@firebase/functions-compat",jC="@firebase/installations",FC="@firebase/installations-compat",UC="@firebase/messaging",BC="@firebase/messaging-compat",VC="@firebase/performance",WC="@firebase/performance-compat",HC="@firebase/remote-config",KC="@firebase/remote-config-compat",GC="@firebase/storage",qC="@firebase/storage-compat",JC="@firebase/firestore",QC="@firebase/firestore-compat",YC="firebase",XC="9.15.0";/**
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
 */const Zd="[DEFAULT]",ZC={[Xd]:"fire-core",[PC]:"fire-core-compat",[TC]:"fire-analytics",[IC]:"fire-analytics-compat",[NC]:"fire-app-check",[OC]:"fire-app-check-compat",[AC]:"fire-auth",[$C]:"fire-auth-compat",[MC]:"fire-rtdb",[DC]:"fire-rtdb-compat",[LC]:"fire-fn",[zC]:"fire-fn-compat",[jC]:"fire-iid",[FC]:"fire-iid-compat",[UC]:"fire-fcm",[BC]:"fire-fcm-compat",[VC]:"fire-perf",[WC]:"fire-perf-compat",[HC]:"fire-rc",[KC]:"fire-rc-compat",[GC]:"fire-gcs",[qC]:"fire-gcs-compat",[JC]:"fire-fst",[QC]:"fire-fst-compat","fire-js":"fire-js",[YC]:"fire-js-all"};/**
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
 */const yl=new Map,ef=new Map;function e2(e,t){try{e.container.addComponent(t)}catch(n){Vr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ca(e){const t=e.name;if(ef.has(t))return Vr.debug(`There were multiple attempts to register component ${t}.`),!1;ef.set(t,e);for(const n of yl.values())e2(n,e);return!0}function w1(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const t2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new Ra("app","Firebase",t2);/**
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
 */class n2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const mu=XC;function S1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=Xk()),!n)throw ar.create("no-options");const o=yl.get(i);if(o){if(vl(n,o.options)&&vl(r,o.config))return o;throw ar.create("duplicate-app",{appName:i})}const a=new cC(i);for(const l of ef.values())a.addComponent(l);const s=new n2(n,r,a);return yl.set(i,s),s}function r2(e=Zd){const t=yl.get(e);if(!t&&e===Zd)return S1();if(!t)throw ar.create("no-app",{appName:e});return t}function Oi(e,t,n){var r;let i=(r=ZC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vr.warn(s.join(" "));return}ca(new Wi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const i2="firebase-heartbeat-database",o2=1,da="firebase-heartbeat-store";let yc=null;function b1(){return yc||(yc=_C(i2,o2,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(da)}}}).catch(e=>{throw ar.create("idb-open",{originalErrorMessage:e.message})})),yc}async function a2(e){try{return(await b1()).transaction(da).objectStore(da).get(x1(e))}catch(t){if(t instanceof yr)Vr.warn(t.message);else{const n=ar.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(n.message)}}}async function sg(e,t){try{const r=(await b1()).transaction(da,"readwrite");return await r.objectStore(da).put(t,x1(e)),r.done}catch(n){if(n instanceof yr)Vr.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(r.message)}}}function x1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const s2=1024,l2=30*24*60*60*1e3;class u2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new d2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=l2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lg(),{heartbeatsToSend:n,unsentEntries:r}=c2(this._heartbeatsCache.heartbeats),i=h1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lg(){return new Date().toISOString().substring(0,10)}function c2(e,t=s2){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ug(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ug(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class d2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hk()?Kk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await a2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ug(e){return h1(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function f2(e){ca(new Wi("platform-logger",t=>new CC(t),"PRIVATE")),ca(new Wi("heartbeat",t=>new u2(t),"PRIVATE")),Oi(Xd,ag,e),Oi(Xd,ag,"esm2017"),Oi("fire-js","")}f2("");function Bh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function _1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h2=_1,E1=new Ra("auth","Firebase",_1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new g1("@firebase/auth");function Ps(e,...t){cg.logLevel<=xe.ERROR&&cg.error(`Auth (${mu}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,...t){throw Vh(e,...t)}function sn(e,...t){return Vh(e,...t)}function k1(e,t,n){const r=Object.assign(Object.assign({},h2()),{[t]:n});return new Ra("auth","Firebase",r).create(t,{appName:e.name})}function C1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ft(e,"argument-error"),k1(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vh(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return E1.create(e,...t)}function K(e,t,...n){if(!e)throw Vh(t,...n)}function gn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ps(t),new Error(t)}function Pn(e,t){e||gn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Map;function vn(e){Pn(e instanceof Function,"Expected a class definition");let t=dg.get(e);return t?(Pn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,dg.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(e,t){const n=w1(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(vl(o,t??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:t})}function m2(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function g2(){return fg()==="http:"||fg()==="https:"}function fg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g2()||Bk()||"connection"in navigator)?navigator.onLine:!0}function y2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,n){this.shortDelay=t,this.longDelay=n,Pn(n>t,"Short delay should be less than long delay!"),this.isMobile=Uk()||Vk()}get(){return v2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e,t){Pn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new Ia(3e4,6e4);function eo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function to(e,t,n,r,i={}){return P1(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=Pa(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),R1.fetch()(I1(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function P1(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},w2),t);try{const i=new b2(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ds(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ds(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw ds(e,"user-disabled",a);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw k1(e,c,u);Ft(e,c)}}catch(i){if(i instanceof yr)throw i;Ft(e,"network-request-failed")}}async function Ta(e,t,n,r,i={}){const o=await to(e,t,n,r,i);return"mfaPendingCredential"in o&&Ft(e,"multi-factor-auth-required",{_serverResponse:o}),o}function I1(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wh(e.config,i):`${e.config.apiScheme}://${i}`}class b2{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),S2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(e,t){return to(e,"POST","/v1/accounts:delete",t)}async function _2(e,t){return to(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function E2(e,t=!1){const n=un(e),r=await n.getIdToken(t),i=Hh(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:jo(wc(i.auth_time)),issuedAtTime:jo(wc(i.iat)),expirationTime:jo(wc(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function wc(e){return Number(e)*1e3}function Hh(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=p1(n);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function k2(e){const t=Hh(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof yr&&C2(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function C2({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await fa(e,_2(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?T2(o.providerUserInfo):[],s=I2(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new T1(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function P2(e){const t=un(e);await wl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function I2(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function T2(e){return e.map(t=>{var{providerId:n}=t,r=Bh(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(e,t){const n=await P1(e,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=I1(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",R1.fetch()(a,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):k2(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return K(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await O2(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new ha;return r&&(K(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(K(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Mr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Bh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new T1(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await fa(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return E2(this,t)}reload(){return P2(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Mr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fa(this,x2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,p=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(s=n.tenantId)!==null&&s!==void 0?s:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:x,isAnonymous:_,providerData:k,stsTokenManager:I}=n;K(y&&I,t,"internal-error");const O=ha.fromJSON(this.name,I);K(typeof y=="string",t,"internal-error"),Nn(d,t.name),Nn(f,t.name),K(typeof x=="boolean",t,"internal-error"),K(typeof _=="boolean",t,"internal-error"),Nn(h,t.name),Nn(p,t.name),Nn(g,t.name),Nn(b,t.name),Nn(v,t.name),Nn(m,t.name);const z=new Mr({uid:y,auth:t,email:f,emailVerified:x,displayName:d,isAnonymous:_,photoURL:p,phoneNumber:h,tenantId:g,stsTokenManager:O,createdAt:v,lastLoginAt:m});return k&&Array.isArray(k)&&(z.providerData=k.map($=>Object.assign({},$))),b&&(z._redirectEventId=b),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new ha;i.updateFromServerResponse(n);const o=new Mr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await wl(o),o}}/**
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
 */class O1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}O1.type="NONE";const hg=O1;/**
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
 */function Is(e,t,n){return`firebase:${e}:${t}:${n}`}class Ni{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,o),this.fullPersistenceKey=Is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ni(vn(hg),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||vn(hg);const a=Is(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(a);if(c){const d=Mr._fromJSON(t,c);u!==o&&(s=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ni(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new Ni(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(N1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(D1(t))return"Blackberry";if(L1(t))return"Webos";if(Kh(t))return"Safari";if((t.includes("chrome/")||A1(t))&&!t.includes("edge/"))return"Chrome";if(M1(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function N1(e=st()){return/firefox\//i.test(e)}function Kh(e=st()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function A1(e=st()){return/crios\//i.test(e)}function $1(e=st()){return/iemobile/i.test(e)}function M1(e=st()){return/android/i.test(e)}function D1(e=st()){return/blackberry/i.test(e)}function L1(e=st()){return/webos/i.test(e)}function gu(e=st()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function N2(e=st()){var t;return gu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function A2(){return Wk()&&document.documentMode===10}function z1(e=st()){return gu(e)||M1(e)||L1(e)||D1(e)||/windows phone/i.test(e)||$1(e)}function $2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(e,t=[]){let n;switch(e){case"Browser":n=pg(st());break;case"Worker":n=`${pg(st())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${mu}/${r}`}/**
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
 */class M2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new M2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await wl(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=y2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?un(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ra("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vn(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return K(a,this,"internal-error"),a.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=j1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zr(e){return un(e)}class mg{constructor(t){this.auth=t,this.observer=null,this.addObserver=iC(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function L2(e,t,n){const r=Zr(e);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=F1(t),{host:a,port:s}=z2(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||j2()}function F1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function z2(e){const t=F1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:gg(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:gg(a)}}}function gg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function j2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(t){return gn("not implemented")}_linkToIdToken(t,n){return gn("not implemented")}_getReauthenticationResolver(t){return gn("not implemented")}}async function F2(e,t){return to(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(e,t){return Ta(e,"POST","/v1/accounts:signInWithPassword",eo(e,t))}async function B2(e,t){return to(e,"POST","/v1/accounts:sendOobCode",eo(e,t))}async function V2(e,t){return B2(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(e,t){return Ta(e,"POST","/v1/accounts:signInWithEmailLink",eo(e,t))}async function H2(e,t){return Ta(e,"POST","/v1/accounts:signInWithEmailLink",eo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Gh{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new pa(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new pa(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return U2(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return W2(t,{email:this._email,oobCode:this._password});default:Ft(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return F2(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return H2(t,{idToken:n,email:this._email,oobCode:this._password});default:Ft(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e,t){return Ta(e,"POST","/v1/accounts:signInWithIdp",eo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="http://localhost";class Wr extends Gh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Wr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Bh(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Wr(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Ai(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ai(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ai(t,n)}buildRequest(){const t={requestUri:K2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Pa(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function q2(e){const t=Co(Ro(e)).link,n=t?Co(Ro(t)).deep_link_id:null,r=Co(Ro(e)).deep_link_id;return(r?Co(Ro(r)).link:null)||r||n||t||e}class qh{constructor(t){var n,r,i,o,a,s;const l=Co(Ro(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=G2((i=l.mode)!==null&&i!==void 0?i:null);K(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=q2(t);try{return new qh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(t,n){return pa._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qh.parseLink(n);return K(r,"argument-error"),pa._fromEmailAndCode(t,r.code,r.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oa extends vu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Oa{constructor(){super("facebook.com")}static credential(t){return Wr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Un.credential(t.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Wr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Oa{constructor(){super("github.com")}static credential(t){return Wr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bn.credentialFromTaggedObject(t)}static credentialFromError(t){return Bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bn.credential(t.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Oa{constructor(){super("twitter.com")}static credential(t,n){return Wr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vn.credentialFromTaggedObject(t)}static credentialFromError(t){return Vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(e,t){return Ta(e,"POST","/v1/accounts:signUp",eo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Mr._fromIdTokenResponse(t,r,i),a=vg(r);return new Hr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=vg(r);return new Hr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function vg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends yr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sl.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Sl(t,n,r,i)}}function U1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Sl._fromErrorAndOperation(e,o,t,r):o})}async function Q2(e,t,n=!1){const r=await fa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Hr._forOperation(e,"link",r)}/**
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
 */async function Y2(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await fa(e,U1(r,i,t,e),n);K(o.idToken,r,"internal-error");const a=Hh(o.idToken);K(a,r,"internal-error");const{sub:s}=a;return K(e.uid===s,r,"user-mismatch"),Hr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(e,t,n=!1){const r="signIn",i=await U1(e,r,t),o=await Hr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function X2(e,t){return B1(Zr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(e,t,n){var r;K(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(e,t,n){const r=un(e),i={requestType:"PASSWORD_RESET",email:t};n&&Z2(r,i,n),await V2(r,i)}async function tR(e,t,n){const r=Zr(e),i=await J2(r,{returnSecureToken:!0,email:t,password:n}),o=await Hr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function nR(e,t,n){return X2(un(e),no.credential(t,n))}function rR(e,t,n,r){return un(e).onIdTokenChanged(t,n,r)}function iR(e,t,n){return un(e).beforeAuthStateChanged(t,n)}function oR(e,t,n,r){return un(e).onAuthStateChanged(t,n,r)}function aR(e){return un(e).signOut()}const bl="__sak";/**
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
 */class V1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){const e=st();return Kh(e)||gu(e)}const lR=1e3,uR=10;class W1 extends V1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sR()&&$2(),this.fallbackToPolling=z1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);A2()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,uR):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}W1.type="LOCAL";const cR=W1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1 extends V1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}H1.type="SESSION";const K1=H1;/**
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
 */function dR(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new yu(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async u=>u(n.origin,o)),l=await dR(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const u=Jh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(f.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function hR(e){ln().location.href=e}/**
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
 */function G1(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function pR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mR(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function gR(){return G1()?self:null}/**
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
 */const q1="firebaseLocalStorageDb",vR=1,xl="firebaseLocalStorage",J1="fbase_key";class Na{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(e,t){return e.transaction([xl],t?"readwrite":"readonly").objectStore(xl)}function yR(){const e=indexedDB.deleteDatabase(q1);return new Na(e).toPromise()}function nf(){const e=indexedDB.open(q1,vR);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(xl,{keyPath:J1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(xl)?t(r):(r.close(),await yR(),t(await nf()))})})}async function yg(e,t,n){const r=wu(e,!0).put({[J1]:t,value:n});return new Na(r).toPromise()}async function wR(e,t){const n=wu(e,!1).get(t),r=await new Na(n).toPromise();return r===void 0?null:r.value}function wg(e,t){const n=wu(e,!0).delete(t);return new Na(n).toPromise()}const SR=800,bR=3;class Q1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>bR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(gR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await pR(),!this.activeServiceWorker)return;this.sender=new fR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await nf();return await yg(t,bl,"1"),await wg(t,bl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>wR(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=wu(i,!1).getAll();return new Na(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q1.type="LOCAL";const xR=Q1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function ER(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=sn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",_R().appendChild(r)})}function kR(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ia(3e4,6e4);/**
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
 */function Qh(e,t){return t?vn(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Yh extends Gh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ai(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ai(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ai(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function CR(e){return B1(e.auth,new Yh(e),e.bypassAuthState)}function RR(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Y2(n,new Yh(e),e.bypassAuthState)}async function PR(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Q2(n,new Yh(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return CR;case"linkViaPopup":case"linkViaRedirect":return PR;case"reauthViaPopup":case"reauthViaRedirect":return RR;default:Ft(this.auth,"internal-error")}}resolve(t){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Ia(2e3,1e4);async function TR(e,t,n){const r=Zr(e);C1(e,t,vu);const i=Qh(r,n);return new Or(r,"signInViaPopup",t,i).executeNotNull()}class Or extends Y1{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const t=Jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,IR.get())};t()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="pendingRedirect",Ts=new Map;class NR extends Y1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ts.get(this.auth._key());if(!t){try{const r=await AR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ts.set(this.auth._key(),t)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(e,t){const n=Z1(t),r=X1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function $R(e,t){return X1(e)._set(Z1(t),"true")}function MR(e,t){Ts.set(e._key(),t)}function X1(e){return vn(e._redirectPersistence)}function Z1(e){return Is(OR,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(e,t,n){return LR(e,t,n)}async function LR(e,t,n){const r=Zr(e);C1(e,t,vu);const i=Qh(r,n);return await $R(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function zR(e,t,n=!1){const r=Zr(e),i=Qh(r,t),a=await new NR(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=10*60*1e3;class FR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!UR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ew(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(t))}saveEventToCache(t){this.cachedEventUids.add(Sg(t)),this.lastProcessedEventTime=Date.now()}}function Sg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ew({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function UR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ew(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(e,t={}){return to(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WR=/^https?/;async function HR(e){if(e.config.emulator)return;const{authorizedDomains:t}=await BR(e);for(const n of t)try{if(KR(n))return}catch{}Ft(e,"unauthorized-domain")}function KR(e){const t=tf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!WR.test(n))return!1;if(VR.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GR=new Ia(3e4,6e4);function bg(){const e=ln().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function qR(e){return new Promise((t,n)=>{var r,i,o;function a(){bg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bg(),n(sn(e,"network-request-failed"))},timeout:GR.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ln().gapi)===null||o===void 0)&&o.load)a();else{const s=kR("iframefcb");return ln()[s]=()=>{gapi.load?a():n(sn(e,"network-request-failed"))},ER(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Os=null,t})}let Os=null;function JR(e){return Os=Os||qR(e),Os}/**
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
 */const QR=new Ia(5e3,15e3),YR="__/auth/iframe",XR="emulator/auth/iframe",ZR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tP(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wh(t,XR):`https://${e.config.authDomain}/${YR}`,r={apiKey:t.apiKey,appName:e.name,v:mu},i=eP.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Pa(r).slice(1)}`}async function nP(e){const t=await JR(e),n=ln().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:tP(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=sn(e,"network-request-failed"),s=ln().setTimeout(()=>{o(a)},QR.get());function l(){ln().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const rP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iP=500,oP=600,aP="_blank",sP="http://localhost";class xg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lP(e,t,n,r=iP,i=oP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},rP),{width:r.toString(),height:i.toString(),top:o,left:a}),u=st().toLowerCase();n&&(s=A1(u)?aP:n),N1(u)&&(t=t||sP,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(N2(u)&&s!=="_self")return uP(t||"",s),new xg(null);const d=window.open(t||"",s,c);K(d,e,"popup-blocked");try{d.focus()}catch{}return new xg(d)}function uP(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cP="__/auth/handler",dP="emulator/auth/handler";function _g(e,t,n,r,i,o){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mu,eventId:i};if(t instanceof vu){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",rC(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))a[l]=u}if(t instanceof Oa){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${fP(e)}?${Pa(s).slice(1)}`}function fP({config:e}){return e.emulator?Wh(e,dP):`https://${e.authDomain}/${cP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class hP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K1,this._completeRedirectFn=zR,this._overrideRedirectResult=MR}async _openPopup(t,n,r,i){var o;Pn((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=_g(t,n,r,tf(),i);return lP(t,a,Jh())}async _openRedirect(t,n,r,i){return await this._originValidation(t),hR(_g(t,n,r,tf(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await nP(t),r=new FR(t);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Sc,{type:Sc},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Sc];a!==void 0&&n(!!a),Ft(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return z1()||Kh()||gu()}}const pP=hP;var Eg="@firebase/auth",kg="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vP(e){ca(new Wi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:a}=r.options;return((s,l)=>{K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),K(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j1(e)},c=new D2(s,l,u);return m2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ca(new Wi("auth-internal",t=>{const n=Zr(t.getProvider("auth").getImmediate());return(r=>new mP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oi(Eg,kg,gP(e)),Oi(Eg,kg,"esm2017")}/**
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
 */const yP=5*60,wP=m1("authIdTokenMaxAge")||yP;let Cg=null;const SP=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wP)return;const i=n==null?void 0:n.token;Cg!==i&&(Cg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bP(e=r2()){const t=w1(e,"auth");if(t.isInitialized())return t.getImmediate();const n=p2(e,{popupRedirectResolver:pP,persistence:[xR,cR,K1]}),r=m1("authTokenSyncURL");if(r){const o=SP(r);iR(n,o,()=>o(n.currentUser)),rR(n,a=>o(a))}const i=Yk("auth");return i&&L2(n,`http://${i}`),n}vP("Browser");var xP="firebase",_P="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi(xP,_P,"app");const EP={apiKey:"AIzaSyDewzoKgwKgfQk_yobEMsjhZJc-GODfUTI",authDomain:"movie-39.firebaseapp.com",projectId:"movie-39",storageBucket:"movie-39.appspot.com",messagingSenderId:"960173928093",appId:"1:960173928093:web:fcf6ed556df581f0046e74",measurementId:"G-GL2W185183"},kP=S1(EP),Kr=bP(kP),tw=new hn;var _l={},CP={get exports(){return _l},set exports(e){_l=e}},Se={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=60103,bu=60106,Aa=60107,$a=60108,Ma=60114,Da=60109,La=60110,za=60112,ja=60113,Xh=60120,Fa=60115,Ua=60116,nw=60121,rw=60122,iw=60117,ow=60129,aw=60131;if(typeof Symbol=="function"&&Symbol.for){var Qe=Symbol.for;Su=Qe("react.element"),bu=Qe("react.portal"),Aa=Qe("react.fragment"),$a=Qe("react.strict_mode"),Ma=Qe("react.profiler"),Da=Qe("react.provider"),La=Qe("react.context"),za=Qe("react.forward_ref"),ja=Qe("react.suspense"),Xh=Qe("react.suspense_list"),Fa=Qe("react.memo"),Ua=Qe("react.lazy"),nw=Qe("react.block"),rw=Qe("react.server.block"),iw=Qe("react.fundamental"),ow=Qe("react.debug_trace_mode"),aw=Qe("react.legacy_hidden")}function Xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Su:switch(e=e.type,e){case Aa:case Ma:case $a:case ja:case Xh:return e;default:switch(e=e&&e.$$typeof,e){case La:case za:case Ua:case Fa:case Da:return e;default:return t}}case bu:return t}}}var RP=Da,PP=Su,IP=za,TP=Aa,OP=Ua,NP=Fa,AP=bu,$P=Ma,MP=$a,DP=ja;Se.ContextConsumer=La;Se.ContextProvider=RP;Se.Element=PP;Se.ForwardRef=IP;Se.Fragment=TP;Se.Lazy=OP;Se.Memo=NP;Se.Portal=AP;Se.Profiler=$P;Se.StrictMode=MP;Se.Suspense=DP;Se.isAsyncMode=function(){return!1};Se.isConcurrentMode=function(){return!1};Se.isContextConsumer=function(e){return Xt(e)===La};Se.isContextProvider=function(e){return Xt(e)===Da};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Su};Se.isForwardRef=function(e){return Xt(e)===za};Se.isFragment=function(e){return Xt(e)===Aa};Se.isLazy=function(e){return Xt(e)===Ua};Se.isMemo=function(e){return Xt(e)===Fa};Se.isPortal=function(e){return Xt(e)===bu};Se.isProfiler=function(e){return Xt(e)===Ma};Se.isStrictMode=function(e){return Xt(e)===$a};Se.isSuspense=function(e){return Xt(e)===ja};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Aa||e===Ma||e===ow||e===$a||e===ja||e===Xh||e===aw||typeof e=="object"&&e!==null&&(e.$$typeof===Ua||e.$$typeof===Fa||e.$$typeof===Da||e.$$typeof===La||e.$$typeof===za||e.$$typeof===iw||e.$$typeof===nw||e[0]===rw)};Se.typeOf=Xt;(function(e){e.exports=Se})(CP);function LP(e){function t(P,D,j,H,E){for(var Y=0,M=0,se=0,ee=0,le,G,Me=0,be=0,re,je=re=le=0,ae=0,pe=0,pt=0,Ae=0,Tt=j.length,Bt=Tt-1,et,q="",we="",wr="",Sr="",Je;ae<Tt;){if(G=j.charCodeAt(ae),ae===Bt&&M+ee+se+Y!==0&&(M!==0&&(G=M===47?10:47),ee=se=Y=0,Tt++,Bt++),M+ee+se+Y===0){if(ae===Bt&&(0<pe&&(q=q.replace(f,"")),0<q.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:q+=j.charAt(ae)}G=59}switch(G){case 123:for(q=q.trim(),le=q.charCodeAt(0),re=1,Ae=++ae;ae<Tt;){switch(G=j.charCodeAt(ae)){case 123:re++;break;case 125:re--;break;case 47:switch(G=j.charCodeAt(ae+1)){case 42:case 47:e:{for(je=ae+1;je<Bt;++je)switch(j.charCodeAt(je)){case 47:if(G===42&&j.charCodeAt(je-1)===42&&ae+2!==je){ae=je+1;break e}break;case 10:if(G===47){ae=je+1;break e}}ae=je}}break;case 91:G++;case 40:G++;case 34:case 39:for(;ae++<Bt&&j.charCodeAt(ae)!==G;);}if(re===0)break;ae++}switch(re=j.substring(Ae,ae),le===0&&(le=(q=q.replace(d,"").trim()).charCodeAt(0)),le){case 64:switch(0<pe&&(q=q.replace(f,"")),G=q.charCodeAt(1),G){case 100:case 109:case 115:case 45:pe=D;break;default:pe=ye}if(re=t(D,pe,re,G,E+1),Ae=re.length,0<T&&(pe=n(ye,q,pt),Je=s(3,re,pe,D,te,Z,Ae,G,E,H),q=pe.join(""),Je!==void 0&&(Ae=(re=Je.trim()).length)===0&&(G=0,re="")),0<Ae)switch(G){case 115:q=q.replace(k,a);case 100:case 109:case 45:re=q+"{"+re+"}";break;case 107:q=q.replace(m,"$1 $2"),re=q+"{"+re+"}",re=ce===1||ce===2&&o("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=q+re,H===112&&(re=(we+=re,""))}else re="";break;default:re=t(D,n(D,q,pt),re,H,E+1)}wr+=re,re=pt=pe=je=le=0,q="",G=j.charCodeAt(++ae);break;case 125:case 59:if(q=(0<pe?q.replace(f,""):q).trim(),1<(Ae=q.length))switch(je===0&&(le=q.charCodeAt(0),le===45||96<le&&123>le)&&(Ae=(q=q.replace(" ",":")).length),0<T&&(Je=s(1,q,D,P,te,Z,we.length,H,E,H))!==void 0&&(Ae=(q=Je.trim()).length)===0&&(q="\0\0"),le=q.charCodeAt(0),G=q.charCodeAt(1),le){case 0:break;case 64:if(G===105||G===99){Sr+=q+j.charAt(ae);break}default:q.charCodeAt(Ae-1)!==58&&(we+=i(q,le,G,q.charCodeAt(2)))}pt=pe=je=le=0,q="",G=j.charCodeAt(++ae)}}switch(G){case 13:case 10:M===47?M=0:1+le===0&&H!==107&&0<q.length&&(pe=1,q+="\0"),0<T*V&&s(0,q,D,P,te,Z,we.length,H,E,H),Z=1,te++;break;case 59:case 125:if(M+ee+se+Y===0){Z++;break}default:switch(Z++,et=j.charAt(ae),G){case 9:case 32:if(ee+Y+M===0)switch(Me){case 44:case 58:case 9:case 32:et="";break;default:G!==32&&(et=" ")}break;case 0:et="\\0";break;case 12:et="\\f";break;case 11:et="\\v";break;case 38:ee+M+Y===0&&(pe=pt=1,et="\f"+et);break;case 108:if(ee+M+Y+ue===0&&0<je)switch(ae-je){case 2:Me===112&&j.charCodeAt(ae-3)===58&&(ue=Me);case 8:be===111&&(ue=be)}break;case 58:ee+M+Y===0&&(je=ae);break;case 44:M+se+ee+Y===0&&(pe=1,et+="\r");break;case 34:case 39:M===0&&(ee=ee===G?0:ee===0?G:ee);break;case 91:ee+M+se===0&&Y++;break;case 93:ee+M+se===0&&Y--;break;case 41:ee+M+Y===0&&se--;break;case 40:if(ee+M+Y===0){if(le===0)switch(2*Me+3*be){case 533:break;default:le=1}se++}break;case 64:M+se+ee+Y+je+re===0&&(re=1);break;case 42:case 47:if(!(0<ee+Y+se))switch(M){case 0:switch(2*G+3*j.charCodeAt(ae+1)){case 235:M=47;break;case 220:Ae=ae,M=42}break;case 42:G===47&&Me===42&&Ae+2!==ae&&(j.charCodeAt(Ae+2)===33&&(we+=j.substring(Ae,ae+1)),et="",M=0)}}M===0&&(q+=et)}be=Me,Me=G,ae++}if(Ae=we.length,0<Ae){if(pe=D,0<T&&(Je=s(2,we,pe,P,te,Z,Ae,H,E,H),Je!==void 0&&(we=Je).length===0))return Sr+we+wr;if(we=pe.join(",")+"{"+we+"}",ce*ue!==0){switch(ce!==2||o(we,2)||(ue=0),ue){case 111:we=we.replace(x,":-moz-$1")+we;break;case 112:we=we.replace(y,"::-webkit-input-$1")+we.replace(y,"::-moz-$1")+we.replace(y,":-ms-input-$1")+we}ue=0}}return Sr+we+wr}function n(P,D,j){var H=D.trim().split(b);D=H;var E=H.length,Y=P.length;switch(Y){case 0:case 1:var M=0;for(P=Y===0?"":P[0]+" ";M<E;++M)D[M]=r(P,D[M],j).trim();break;default:var se=M=0;for(D=[];M<E;++M)for(var ee=0;ee<Y;++ee)D[se++]=r(P[ee]+" ",H[M],j).trim()}return D}function r(P,D,j){var H=D.charCodeAt(0);switch(33>H&&(H=(D=D.trim()).charCodeAt(0)),H){case 38:return D.replace(v,"$1"+P.trim());case 58:return P.trim()+D.replace(v,"$1"+P.trim());default:if(0<1*j&&0<D.indexOf("\f"))return D.replace(v,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+D}function i(P,D,j,H){var E=P+";",Y=2*D+3*j+4*H;if(Y===944){P=E.indexOf(":",9)+1;var M=E.substring(P,E.length-1).trim();return M=E.substring(0,P).trim()+M+";",ce===1||ce===2&&o(M,1)?"-webkit-"+M+M:M}if(ce===0||ce===2&&!o(E,1))return E;switch(Y){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(J,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return M=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+E+"-ms-flex-pack"+M+E;case 1005:return p.test(E)?E.replace(h,":-webkit-")+E.replace(h,":-moz-")+E:E;case 1e3:switch(M=E.substring(13).trim(),D=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(D)){case 226:M=E.replace(_,"tb");break;case 232:M=E.replace(_,"tb-rl");break;case 220:M=E.replace(_,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+M+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(D=(E=P).length-10,M=(E.charCodeAt(D)===33?E.substring(0,D):E).substring(P.indexOf(":",7)+1).trim(),Y=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:E=E.replace(M,"-webkit-"+M)+";"+E;break;case 207:case 102:E=E.replace(M,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+E.replace(M,"-webkit-"+M)+";"+E.replace(M,"-ms-"+M+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return M=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+M+"-ms-flex-"+M+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(O,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(O,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if($.test(P)===!0)return(M=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),D,j,H).replace(":fill-available",":stretch"):E.replace(M,"-webkit-"+M)+E.replace(M,"-moz-"+M.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,j+H===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+E}return E}function o(P,D){var j=P.indexOf(D===1?":":"{"),H=P.substring(0,D!==3?j:10);return j=P.substring(j+1,P.length-1),F(D!==2?H:H.replace(z,"$1"),j,D)}function a(P,D){var j=i(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return j!==D+";"?j.replace(I," or ($1)").substring(4):"("+D+")"}function s(P,D,j,H,E,Y,M,se,ee,le){for(var G=0,Me=D,be;G<T;++G)switch(be=ne[G].call(c,P,Me,j,H,E,Y,M,se,ee,le)){case void 0:case!1:case!0:case null:break;default:Me=be}if(Me!==D)return Me}function l(P){switch(P){case void 0:case null:T=ne.length=0;break;default:if(typeof P=="function")ne[T++]=P;else if(typeof P=="object")for(var D=0,j=P.length;D<j;++D)l(P[D]);else V=!!P|0}return l}function u(P){return P=P.prefix,P!==void 0&&(F=null,P?typeof P!="function"?ce=1:(ce=2,F=P):ce=0),u}function c(P,D){var j=P;if(33>j.charCodeAt(0)&&(j=j.trim()),W=j,j=[W],0<T){var H=s(-1,D,j,j,te,Z,0,0,0,0);H!==void 0&&typeof H=="string"&&(D=H)}var E=t(ye,j,D,0,0);return 0<T&&(H=s(-2,E,j,j,te,Z,E.length,0,0,0),H!==void 0&&(E=H)),W="",ue=0,Z=te=1,E}var d=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,p=/zoo|gra/,g=/([,: ])(transform)/g,b=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,x=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,O=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,Z=1,te=1,ue=0,ce=1,ye=[],ne=[],T=0,F=null,V=0,W="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var zP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var FP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rg=jP(function(e){return FP.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function yn(){return(yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pg=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},rf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_l.typeOf(e)},El=Object.freeze([]),sr=Object.freeze({});function ma(e){return typeof e=="function"}function Ig(e){return e.displayName||e.name||"Component"}function Zh(e){return e&&typeof e.styledComponentId=="string"}var Hi=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ep=typeof window<"u"&&"HTMLElement"in window,UP=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Ba(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var BP=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Ba(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Ns=new Map,kl=new Map,Fo=1,fs=function(e){if(Ns.has(e))return Ns.get(e);for(;kl.has(Fo);)Fo++;var t=Fo++;return Ns.set(e,t),kl.set(t,e),t},VP=function(e){return kl.get(e)},WP=function(e,t){t>=Fo&&(Fo=t+1),Ns.set(e,t),kl.set(t,e)},HP="style["+Hi+'][data-styled-version="5.3.6"]',KP=new RegExp("^"+Hi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),GP=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},qP=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(KP);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(WP(u,l),GP(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},JP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},sw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Hi))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Hi,"active"),r.setAttribute("data-styled-version","5.3.6");var a=JP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},QP=function(){function e(n){var r=this.element=sw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}Ba(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),YP=function(){function e(n){var r=this.element=sw(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),XP=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Tg=ep,ZP={isServer:!ep,useCSSOMInjection:!UP},lw=function(){function e(n,r,i){n===void 0&&(n=sr),r===void 0&&(r={}),this.options=yn({},ZP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ep&&Tg&&(Tg=!1,function(o){for(var a=document.querySelectorAll(HP),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Hi)!=="active"&&(qP(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return fs(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new XP(a):o?new QP(a):new YP(a),new BP(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(fs(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(fs(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(fs(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=VP(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=Hi+".g"+a+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),eI=/(a)(d)/gi,Og=function(e){return String.fromCharCode(e+(e>25?39:97))};function of(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Og(t%52)+n;return(Og(t%52)+n).replace(eI,"$1-$2")}var bi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},uw=function(e){return bi(5381,e)};function tI(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ma(n)&&!Zh(n))return!1}return!0}var nI=uw("5.3.6"),rI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&tI(t),this.componentId=n,this.baseHash=bi(nI,n),this.baseStyle=r,lw.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Ki(this.rules,t,n,r).join(""),s=of(bi(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=bi(this.baseHash,r.hash),d="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var p=Ki(h,t,n,r),g=Array.isArray(p)?p.join(""):p;c=bi(c,g+f),d+=g}}if(d){var b=of(c>>>0);if(!n.hasNameForId(i,b)){var v=r(d,"."+b,void 0,i);n.insertRules(i,b,v)}o.push(b)}}return o.join(" ")},e}(),iI=/^\s*\/\/.*$/gm,oI=[":","[",".","#"];function aI(e){var t,n,r,i,o=e===void 0?sr:e,a=o.options,s=a===void 0?sr:a,l=o.plugins,u=l===void 0?El:l,c=new LP(s),d=[],f=function(g){function b(v){if(v)try{g(v+"}")}catch{}}return function(v,m,y,x,_,k,I,O,z,$){switch(v){case 1:if(z===0&&m.charCodeAt(0)===64)return g(m+";"),"";break;case 2:if(O===0)return m+"/*|*/";break;case 3:switch(O){case 102:case 112:return g(y[0]+m),"";default:return m+($===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(b)}}}(function(g){d.push(g)}),h=function(g,b,v){return b===0&&oI.indexOf(v[n.length])!==-1||v.match(i)?g:"."+t};function p(g,b,v,m){m===void 0&&(m="&");var y=g.replace(iI,""),x=b&&v?v+" "+b+" { "+y+" }":y;return t=m,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(v||!b?"":b,x)}return c.use([].concat(u,[function(g,b,v){g===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(g){if(g===-2){var b=d;return d=[],b}}])),p.hash=u.length?u.reduce(function(g,b){return b.name||Ba(15),bi(g,b.name)},5381).toString():"",p}var cw=ie.createContext();cw.Consumer;var dw=ie.createContext(),sI=(dw.Consumer,new lw),af=aI();function lI(){return S.useContext(cw)||sI}function uI(){return S.useContext(dw)||af}var cI=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=af);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Ba(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=af),this.name+t.hash},e}(),dI=/([A-Z])/,fI=/([A-Z])/g,hI=/^ms-/,pI=function(e){return"-"+e.toLowerCase()};function Ng(e){return dI.test(e)?e.replace(fI,pI).replace(hI,"-ms-"):e}var Ag=function(e){return e==null||e===!1||e===""};function Ki(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=Ki(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Ag(e))return"";if(Zh(e))return"."+e.styledComponentId;if(ma(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Ki(l,t,n,r)}var u;return e instanceof cI?n?(e.inject(n,r),e.getName(r)):e:rf(e)?function c(d,f){var h,p,g=[];for(var b in d)d.hasOwnProperty(b)&&!Ag(d[b])&&(Array.isArray(d[b])&&d[b].isCss||ma(d[b])?g.push(Ng(b)+":",d[b],";"):rf(d[b])?g.push.apply(g,c(d[b],b)):g.push(Ng(b)+": "+(h=b,(p=d[b])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||h in zP?String(p).trim():p+"px")+";"));return f?[f+" {"].concat(g,["}"]):g}(e):e.toString()}var $g=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function mI(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ma(e)||rf(e)?$g(Ki(Pg(El,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:$g(Ki(Pg(e,n)))}var gI=function(e,t,n){return n===void 0&&(n=sr),e.theme!==n.theme&&e.theme||t||n.theme},vI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yI=/(^-|-$)/g;function bc(e){return e.replace(vI,"-").replace(yI,"")}var wI=function(e){return of(uw(e)>>>0)};function hs(e){return typeof e=="string"&&!0}var sf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},SI=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function bI(e,t,n){var r=e[n];sf(t)&&sf(r)?fw(r,t):e[n]=t}function fw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(sf(a))for(var s in a)SI(s)&&bI(e,a[s],s)}return e}var hw=ie.createContext();hw.Consumer;var xc={};function pw(e,t,n){var r=Zh(e),i=!hs(e),o=t.attrs,a=o===void 0?El:o,s=t.componentId,l=s===void 0?function(m,y){var x=typeof m!="string"?"sc":bc(m);xc[x]=(xc[x]||0)+1;var _=x+"-"+wI("5.3.6"+x+xc[x]);return y?y+"-"+_:_}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(m){return hs(m)?"styled."+m:"Styled("+Ig(m)+")"}(e):u,d=t.displayName&&t.componentId?bc(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(m,y,x){return e.shouldForwardProp(m,y,x)&&t.shouldForwardProp(m,y,x)}:e.shouldForwardProp);var p,g=new rI(n,d,r?e.componentStyle:void 0),b=g.isStatic&&a.length===0,v=function(m,y){return function(x,_,k,I){var O=x.attrs,z=x.componentStyle,$=x.defaultProps,J=x.foldedComponentIds,Z=x.shouldForwardProp,te=x.styledComponentId,ue=x.target,ce=function(H,E,Y){H===void 0&&(H=sr);var M=yn({},E,{theme:H}),se={};return Y.forEach(function(ee){var le,G,Me,be=ee;for(le in ma(be)&&(be=be(M)),be)M[le]=se[le]=le==="className"?(G=se[le],Me=be[le],G&&Me?G+" "+Me:G||Me):be[le]}),[M,se]}(gI(_,S.useContext(hw),$)||sr,_,O),ye=ce[0],ne=ce[1],T=function(H,E,Y,M){var se=lI(),ee=uI(),le=E?H.generateAndInjectStyles(sr,se,ee):H.generateAndInjectStyles(Y,se,ee);return le}(z,I,ye),F=k,V=ne.$as||_.$as||ne.as||_.as||ue,W=hs(V),P=ne!==_?yn({},_,{},ne):_,D={};for(var j in P)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?D.as=P[j]:(Z?Z(j,Rg,V):!W||Rg(j))&&(D[j]=P[j]));return _.style&&ne.style!==_.style&&(D.style=yn({},_.style,{},ne.style)),D.className=Array.prototype.concat(J,te,T!==te?T:null,_.className,ne.className).filter(Boolean).join(" "),D.ref=F,S.createElement(V,D)}(p,m,y,b)};return v.displayName=c,(p=ie.forwardRef(v)).attrs=f,p.componentStyle=g,p.displayName=c,p.shouldForwardProp=h,p.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):El,p.styledComponentId=d,p.target=r?e.target:e,p.withComponent=function(m){var y=t.componentId,x=function(k,I){if(k==null)return{};var O,z,$={},J=Object.keys(k);for(z=0;z<J.length;z++)O=J[z],I.indexOf(O)>=0||($[O]=k[O]);return $}(t,["componentId"]),_=y&&y+"-"+(hs(m)?m:bc(Ig(m)));return pw(m,yn({},x,{attrs:f,componentId:_}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?fw({},e.defaultProps,m):m}}),p.toString=function(){return"."+p.styledComponentId},i&&Vy(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var lf=function(e){return function t(n,r,i){if(i===void 0&&(i=sr),!_l.isValidElementType(r))return Ba(1,String(r));var o=function(){return n(r,i,mI.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,yn({},i,{},a))},o.attrs=function(a){return t(n,r,yn({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(pw,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){lf[e]=lf(e)});const lt=lf;function mw(e,t){return function(){return e.apply(t,arguments)}}const{toString:gw}=Object.prototype,{getPrototypeOf:tp}=Object,np=(e=>t=>{const n=gw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Tn=e=>(e=e.toLowerCase(),t=>np(t)===e),xu=e=>t=>typeof t===e,{isArray:ro}=Array,ga=xu("undefined");function xI(e){return e!==null&&!ga(e)&&e.constructor!==null&&!ga(e.constructor)&&Gr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const vw=Tn("ArrayBuffer");function _I(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&vw(e.buffer),t}const EI=xu("string"),Gr=xu("function"),yw=xu("number"),rp=e=>e!==null&&typeof e=="object",kI=e=>e===!0||e===!1,As=e=>{if(np(e)!=="object")return!1;const t=tp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},CI=Tn("Date"),RI=Tn("File"),PI=Tn("Blob"),II=Tn("FileList"),TI=e=>rp(e)&&Gr(e.pipe),OI=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||gw.call(e)===t||Gr(e.toString)&&e.toString()===t)},NI=Tn("URLSearchParams"),AI=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Va(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ro(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function ww(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Sw=typeof self>"u"?typeof global>"u"?globalThis:global:self,bw=e=>!ga(e)&&e!==Sw;function uf(){const{caseless:e}=bw(this)&&this||{},t={},n=(r,i)=>{const o=e&&ww(t,i)||i;As(t[o])&&As(r)?t[o]=uf(t[o],r):As(r)?t[o]=uf({},r):ro(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Va(arguments[r],n);return t}const $I=(e,t,n,{allOwnKeys:r}={})=>(Va(t,(i,o)=>{n&&Gr(i)?e[o]=mw(i,n):e[o]=i},{allOwnKeys:r}),e),MI=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),DI=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},LI=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&tp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},zI=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jI=e=>{if(!e)return null;if(ro(e))return e;let t=e.length;if(!yw(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},FI=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&tp(Uint8Array)),UI=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},BI=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},VI=Tn("HTMLFormElement"),WI=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Mg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),HI=Tn("RegExp"),xw=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Va(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},KI=e=>{xw(e,(t,n)=>{if(Gr(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Gr(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},GI=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ro(e)?r(e):r(String(e).split(t)),n},qI=()=>{},JI=(e,t)=>(e=+e,Number.isFinite(e)?e:t),QI=e=>{const t=new Array(10),n=(r,i)=>{if(rp(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ro(r)?[]:{};return Va(r,(a,s)=>{const l=n(a,i+1);!ga(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},R={isArray:ro,isArrayBuffer:vw,isBuffer:xI,isFormData:OI,isArrayBufferView:_I,isString:EI,isNumber:yw,isBoolean:kI,isObject:rp,isPlainObject:As,isUndefined:ga,isDate:CI,isFile:RI,isBlob:PI,isRegExp:HI,isFunction:Gr,isStream:TI,isURLSearchParams:NI,isTypedArray:FI,isFileList:II,forEach:Va,merge:uf,extend:$I,trim:AI,stripBOM:MI,inherits:DI,toFlatObject:LI,kindOf:np,kindOfTest:Tn,endsWith:zI,toArray:jI,forEachEntry:UI,matchAll:BI,isHTMLForm:VI,hasOwnProperty:Mg,hasOwnProp:Mg,reduceDescriptors:xw,freezeMethods:KI,toObjectSet:GI,toCamelCase:WI,noop:qI,toFiniteNumber:JI,findKey:ww,global:Sw,isContextDefined:bw,toJSONObject:QI};function fe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _w=fe.prototype,Ew={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ew[e]={value:e}});Object.defineProperties(fe,Ew);Object.defineProperty(_w,"isAxiosError",{value:!0});fe.from=(e,t,n,r,i,o)=>{const a=Object.create(_w);return R.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),fe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var YI=typeof self=="object"?self.FormData:window.FormData;const XI=YI;function cf(e){return R.isPlainObject(e)||R.isArray(e)}function kw(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Dg(e,t,n){return e?e.concat(t).map(function(i,o){return i=kw(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function ZI(e){return R.isArray(e)&&!e.some(cf)}const eT=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function tT(e){return e&&R.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function _u(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new(XI||FormData),n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,b){return!R.isUndefined(b[g])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&tT(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(R.isDate(p))return p.toISOString();if(!l&&R.isBlob(p))throw new fe("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(p)||R.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,g,b){let v=p;if(p&&!b&&typeof p=="object"){if(R.endsWith(g,"{}"))g=r?g:g.slice(0,-2),p=JSON.stringify(p);else if(R.isArray(p)&&ZI(p)||R.isFileList(p)||R.endsWith(g,"[]")&&(v=R.toArray(p)))return g=kw(g),v.forEach(function(y,x){!(R.isUndefined(y)||y===null)&&t.append(a===!0?Dg([g],x,o):a===null?g:g+"[]",u(y))}),!1}return cf(p)?!0:(t.append(Dg(b,g,o),u(p)),!1)}const d=[],f=Object.assign(eT,{defaultVisitor:c,convertValue:u,isVisitable:cf});function h(p,g){if(!R.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(p),R.forEach(p,function(v,m){(!(R.isUndefined(v)||v===null)&&i.call(t,v,R.isString(m)?m.trim():m,g,f))===!0&&h(v,g?g.concat(m):[m])}),d.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Lg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ip(e,t){this._pairs=[],e&&_u(e,this,t)}const Cw=ip.prototype;Cw.append=function(t,n){this._pairs.push([t,n])};Cw.toString=function(t){const n=t?function(r){return t.call(this,r,Lg)}:Lg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function nT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rw(e,t,n){if(!t)return e;const r=n&&n.encode||nT,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new ip(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class rT{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const zg=rT,Pw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iT=typeof URLSearchParams<"u"?URLSearchParams:ip,oT=FormData,aT=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),sT=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),nn={isBrowser:!0,classes:{URLSearchParams:iT,FormData:oT,Blob},isStandardBrowserEnv:aT,isStandardBrowserWebWorkerEnv:sT,protocols:["http","https","file","blob","url","data"]};function lT(e,t){return _u(e,new nn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return nn.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function uT(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function cT(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Iw(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&R.isArray(i)?i.length:a,l?(R.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!R.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&R.isArray(i[a])&&(i[a]=cT(i[a])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(uT(r),i,n,0)}),n}return null}const dT={"Content-Type":void 0};function fT(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Eu={transitional:Pw,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(Iw(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return lT(t,this.formSerializer).toString();if((s=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return _u(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),fT(t)):t}],transformResponse:[function(t){const n=this.transitional||Eu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?fe.from(s,fe.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nn.classes.FormData,Blob:nn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){Eu.headers[t]={}});R.forEach(["post","put","patch"],function(t){Eu.headers[t]=R.merge(dT)});const op=Eu,hT=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pT=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&hT[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},jg=Symbol("internals");function wo(e){return e&&String(e).trim().toLowerCase()}function $s(e){return e===!1||e==null?e:R.isArray(e)?e.map($s):String(e)}function mT(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function gT(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Fg(e,t,n,r){if(R.isFunction(r))return r.call(this,t,n);if(R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function vT(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function yT(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class ku{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const c=wo(l);if(!c)throw new Error("header name must be a non-empty string");const d=R.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=$s(s))}const a=(s,l)=>R.forEach(s,(u,c)=>o(u,c,l));return R.isPlainObject(t)||t instanceof this.constructor?a(t,n):R.isString(t)&&(t=t.trim())&&!gT(t)?a(pT(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=wo(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return mT(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=wo(t),t){const r=R.findKey(this,t);return!!(r&&(!n||Fg(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=wo(a),a){const s=R.findKey(r,a);s&&(!n||Fg(r,r[s],s,n))&&(delete r[s],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const a=R.findKey(r,o);if(a){n[a]=$s(i),delete n[o];return}const s=t?vT(o):String(o).trim();s!==o&&delete n[o],n[s]=$s(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[jg]=this[jg]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=wo(a);r[s]||(yT(i,a),r[s]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}ku.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);R.freezeMethods(ku.prototype);R.freezeMethods(ku);const bn=ku;function _c(e,t){const n=this||op,r=t||n,i=bn.from(r.headers);let o=r.data;return R.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Tw(e){return!!(e&&e.__CANCEL__)}function Wa(e,t,n){fe.call(this,e??"canceled",fe.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Wa,fe,{__CANCEL__:!0});const wT=null;function ST(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const bT=nn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),R.isString(o)&&l.push("path="+o),R.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function xT(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _T(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ow(e,t){return e&&!xT(t)?_T(e,t):t}const ET=nn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=R.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function kT(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function CT(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];a||(a=u),n[i]=l,r[i]=u;let d=o,f=0;for(;d!==i;)f+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const h=c&&u-c;return h?Math.round(f*1e3/h):void 0}}function Ug(e,t){let n=0;const r=CT(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const RT=typeof XMLHttpRequest<"u",PT=RT&&function(e){return new Promise(function(n,r){let i=e.data;const o=bn.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}R.isFormData(i)&&(nn.isStandardBrowserEnv||nn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+p))}const c=Ow(e.baseURL,e.url);u.open(e.method.toUpperCase(),Rw(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const h=bn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),g={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};ST(function(v){n(v),l()},function(v){r(v),l()},g),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new fe("Request aborted",fe.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||Pw;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new fe(p,g.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,u)),u=null},nn.isStandardBrowserEnv){const h=(e.withCredentials||ET(c))&&e.xsrfCookieName&&bT.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&R.forEach(o.toJSON(),function(p,g){u.setRequestHeader(g,p)}),R.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ug(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ug(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{u&&(r(!h||h.type?new Wa(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=kT(c);if(f&&nn.protocols.indexOf(f)===-1){r(new fe("Unsupported protocol "+f+":",fe.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Ms={http:wT,xhr:PT};R.forEach(Ms,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const IT={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?Ms[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new fe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(Ms,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ms};function Ec(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Wa(null,e)}function Bg(e){return Ec(e),e.headers=bn.from(e.headers),e.data=_c.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),IT.getAdapter(e.adapter||op.adapter)(e).then(function(r){return Ec(e),r.data=_c.call(e,e.transformResponse,r),r.headers=bn.from(r.headers),r},function(r){return Tw(r)||(Ec(e),r&&r.response&&(r.response.data=_c.call(e,e.transformResponse,r.response),r.response.headers=bn.from(r.response.headers))),Promise.reject(r)})}const Vg=e=>e instanceof bn?e.toJSON():e;function Gi(e,t){t=t||{};const n={};function r(u,c,d){return R.isPlainObject(u)&&R.isPlainObject(c)?R.merge.call({caseless:d},u,c):R.isPlainObject(c)?R.merge({},c):R.isArray(c)?c.slice():c}function i(u,c,d){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function o(u,c){if(!R.isUndefined(c))return r(void 0,c)}function a(u,c){if(R.isUndefined(c)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c)=>i(Vg(u),Vg(c),!0)};return R.forEach(Object.keys(e).concat(Object.keys(t)),function(c){const d=l[c]||i,f=d(e[c],t[c],c);R.isUndefined(f)&&d!==s||(n[c]=f)}),n}const Nw="1.2.1",ap={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ap[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Wg={};ap.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Nw+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new fe(i(a," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!Wg[a]&&(Wg[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function TT(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new fe("option "+o+" must be "+l,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+o,fe.ERR_BAD_OPTION)}}const df={assertOptions:TT,validators:ap},An=df.validators;class Cl{constructor(t){this.defaults=t,this.interceptors={request:new zg,response:new zg}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Gi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&df.assertOptions(r,{silentJSONParsing:An.transitional(An.boolean),forcedJSONParsing:An.transitional(An.boolean),clarifyTimeoutError:An.transitional(An.boolean)},!1),i!==void 0&&df.assertOptions(i,{encode:An.function,serialize:An.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&R.merge(o.common,o[n.method]),a&&R.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=bn.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let c,d=0,f;if(!l){const p=[Bg.bind(this),void 0];for(p.unshift.apply(p,s),p.push.apply(p,u),f=p.length,c=Promise.resolve(n);d<f;)c=c.then(p[d++],p[d++]);return c}f=s.length;let h=n;for(d=0;d<f;){const p=s[d++],g=s[d++];try{h=p(h)}catch(b){g.call(this,b);break}}try{c=Bg.call(this,h)}catch(p){return Promise.reject(p)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Gi(this.defaults,t);const n=Ow(t.baseURL,t.url);return Rw(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Cl.prototype[t]=function(n,r){return this.request(Gi(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Gi(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Cl.prototype[t]=n(),Cl.prototype[t+"Form"]=n(!0)});const Ds=Cl;class sp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new Wa(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new sp(function(i){t=i}),cancel:t}}}const OT=sp;function NT(e){return function(n){return e.apply(null,n)}}function AT(e){return R.isObject(e)&&e.isAxiosError===!0}function Aw(e){const t=new Ds(e),n=mw(Ds.prototype.request,t);return R.extend(n,Ds.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Aw(Gi(e,i))},n}const Ge=Aw(op);Ge.Axios=Ds;Ge.CanceledError=Wa;Ge.CancelToken=OT;Ge.isCancel=Tw;Ge.VERSION=Nw;Ge.toFormData=_u;Ge.AxiosError=fe;Ge.Cancel=Ge.CanceledError;Ge.all=function(t){return Promise.all(t)};Ge.spread=NT;Ge.isAxiosError=AT;Ge.mergeConfig=Gi;Ge.AxiosHeaders=bn;Ge.formToJSON=e=>Iw(R.isHTMLForm(e)?new FormData(e):e);Ge.default=Ge;const $T=Ge,xn=$T.create({baseURL:"https://api.themoviedb.org/3"}),Cu="https://image.tmdb.org/t/p/w200/",lp="https://image.tmdb.org/t/p/original/",MT="https://image.tmdb.org/t/p/w300/",bt="74348df6e62e8463f45893fa98b36690",wn={getTrending:`/trending/all/week?api_key=${bt}`,getPopularMovies:`/movie/popular?api_key=${bt}`,getUpcoming:`/movie/upcoming?api_key=${bt}`,getDiscoverMovie:`/discover/movie?api_key=${bt}`,getPopularTv:`tv/popular?api_key=${bt}`,getOnAir:`/tv/on_the_air?api_key=${bt}`,getDiscoverTv:`/discover/tv?api_key=${bt}`,getMovieGenre:`/genre/movie/list?api_key=${bt}`,getTvGenre:`/genre/tv/list?api_key=${bt}`},DT=()=>{const[e,t]=S.useState([]),n=`${lp}${e==null?void 0:e.backdrop_path}`;S.useEffect(()=>{(async()=>{const a=await xn.get(wn.getTrending);t(a.data.results[Math.floor(Math.random()*a.data.results.length-1)])})()},[]);const r=Xr(),i=(o,a)=>{r(`/details/${o}/${a}`),window.scroll(0,0)};return N(LT,{children:[N("div",{className:"top",children:[w("div",{className:"bg",style:{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:`url(${n})`,width:"100%"}}),w("div",{className:"footer"})]}),w("div",{className:"main ",children:N("div",{className:"main__data container",children:[w("h2",{children:e.first_air_date==="tv"?"Series":"Movie"}),w("h1",{children:e.title||e.name}),N("h4",{children:["Rated ",w("span",{children:e.vote_average}),w("h5",{children:e.release_date})]}),w("p",{children:e.overview}),w("button",{onClick:()=>i(e.first_air_date?"tv":"movie",e.id),children:w("a",{href:"",children:"Watch Movie"})})]})})]})},LT=lt.div`
  margin-bottom: 5rem;
  .top {
    .bg {
      min-height: 92vh;
      object-fit: cover;
      position: relative;
      background-repeat: no-repeat;
      filter: brightness(30%);
      position: relative;
      object-fit: contain;
    }
    .footer {
      height: 12rem;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(15, 15, 15, 0.781),
        #181717
      );
      /* background-color: red; */
    }
  }
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: start;
    &__data {
      display: flex;
      flex-direction: column;
      /* justify-content: center;
      align-items: center; */
      width: 60%;
      @media (max-width: 999px) {
        width: 98%;
        @media (min-width: 700px) {
          width: 80%;
        }
      }
      h2 {
        text-decoration: underline;
      }
      h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        @media (max-width: 699px) {
          font-size: 1.5rem;
        }
      }

      h4 {
        display: flex;

        gap: 0.5rem;
        margin-bottom: 1.8rem;
        span {
          width: 40px;
          height: 20px;
          padding: 0.2rem;
          justify-content: center;
          align-items: center;
          background-color: green;

          display: flex;
          font-size: small;
        }
        h5 {
          margin-left: 2rem;
          text-decoration: underline;
        }
      }
      button {
        margin-top: 2rem;
        width: max-content;
        padding: 10px;
        font-size: medium;
        display: flex;
        justify-content: center;
        gap: 1rem;
        font-weight: 700;
        border: none;

        background-color: var(--btn);
        transition: var(--trans);
        a {
          color: var(--text);
        }
        &:hover {
          box-shadow: var(--btn-s);
        }
      }
      p {
        width: 100%;
        margin: auto;
        @media (max-width: 699px) {
        }
      }
    }
  }
`,ps=({title:e,getUrl:t,link:n})=>{const[r,i]=S.useState([]);S.useEffect(()=>{(async()=>{const c=await xn.get(t);i(c.data.results)})()},[t]);function o(u,c){return u.length>c?u.substr(0,c-1)+"...":u}function a(u,c){return u.length>c?u.substr(0,c-1)+"":u}const s=Xr(),l=(u,c)=>{s(`/details/${u}/${c}`),window.scroll(0,0)};return w(zT,{children:N("div",{className:"main container",children:[w("div",{className:"header",children:w("h1",{children:e})}),w("div",{className:"main__data ",children:r.map((u,c)=>N("div",{className:"deatils",onClick:()=>l(u.first_air_date?"tv":"movie",u.id),children:[w("img",{src:`${Cu}${u.poster_path}`,alt:""}),w("div",{className:"desc",children:w("p",{children:o(`${u.title||u.name}`,15)})}),w("p",{className:"date",children:a(`${u.first_air_date||u.release_date}`,5)}),w("div",{className:"rate",children:w("span",{children:u.vote_average})})]},c))})]})})},zT=lt.div`
  display: flex;
  flex-direction: column;
  .main {
    padding-top: 0;
    .header {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        margin-left: 2rem;
      }
      h1 {
        @media (max-width: 699px) {
          font-size: larger;
        }
      }
    }

    &__data {
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      scroll-behavior: smooth;
      margin-bottom: 1rem;
      gap: 0.5rem;
      padding-bottom: 1rem;
      cursor: pointer;
      ::-webkit-scrollbar {
        display: none;
      }
      .deatils {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        position: relative;

        img {
          width: 200px;
          object-fit: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          border-radius: 0.2rem;
          @media (max-width: 699px) {
            width: 160px;
          }
        }
        .desc {
          position: absolute;
          z-index: 999;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          height: 5vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0.5rem;
          background-color: #000000b2;
          border-bottom-left-radius: 0.2rem;
          border-bottom-right-radius: 0.2rem;

          p {
            font-size: medium;
            @media (max-width: 699px) {
              font-size: smaller;
            }
          }
        }
        .date {
          font-size: small;
          font-weight: 900;
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
        }
        .rate {
          position: absolute;
          z-index: 999;
          top: 0.2rem;
          right: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            width: 40px;
            height: 20px;
            justify-content: center;
            align-items: center;
            background-color: green;

            display: flex;
            font-size: small;
          }
        }
      }
    }
  }
`;function kc(e){return e&&Vi(e)==="object"&&e.constructor===Object}function qi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{clone:!0},r=n.clone?B({},e):e;return kc(e)&&kc(t)&&Object.keys(t).forEach(function(i){i!=="__proto__"&&(kc(t[i])&&i in e?r[i]=qi(e[i],t[i],n):r[i]=t[i])}),r}function Rl(e){for(var t="https://mui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}function up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.min(Math.max(t,e),n)}function jT(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&n[0].length===1&&(n=n.map(function(r){return r+r})),n?"rgb".concat(n.length===4?"a":"","(").concat(n.map(function(r,i){return i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3}).join(", "),")"):""}function FT(e){e=qr(e);var t=e,n=t.values,r=n[0],i=n[1]/100,o=n[2]/100,a=i*Math.min(o,1-o),s=function(d){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(d+r/30)%12;return o-a*Math.max(Math.min(f-3,9-f,1),-1)},l="rgb",u=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(l+="a",u.push(n[3])),Ru({type:l,values:u})}function qr(e){if(e.type)return e;if(e.charAt(0)==="#")return qr(jT(e));var t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla"].indexOf(n)===-1)throw new Error(Rl(3,e));var r=e.substring(t+1,e.length-1).split(",");return r=r.map(function(i){return parseFloat(i)}),{type:n,values:r}}function Ru(e){var t=e.type,n=e.values;return t.indexOf("rgb")!==-1?n=n.map(function(r,i){return i<3?parseInt(r,10):r}):t.indexOf("hsl")!==-1&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function UT(e,t){var n=ff(e),r=ff(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function ff(e){e=qr(e);var t=e.type==="hsl"?qr(FT(e)).values:e.values;return t=t.map(function(n){return n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.15;return ff(e)>.5?$w(e,t):Mw(e,t)}function it(e,t){return e=qr(e),t=up(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.values[3]=t,Ru(e)}function $w(e,t){if(e=qr(e),t=up(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1)for(var n=0;n<3;n+=1)e.values[n]*=1-t;return Ru(e)}function Mw(e,t){if(e=qr(e),t=up(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return Ru(e)}function Ue(e,t){if(e==null)return{};var n=xh(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var $n=["xs","sm","md","lg","xl"];function BT(e){var t=e.values,n=t===void 0?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,r=e.unit,i=r===void 0?"px":r,o=e.step,a=o===void 0?5:o,s=Ue(e,["values","unit","step"]);function l(h){var p=typeof n[h]=="number"?n[h]:h;return"@media (min-width:".concat(p).concat(i,")")}function u(h){var p=$n.indexOf(h)+1,g=n[$n[p]];if(p===$n.length)return l("xs");var b=typeof g=="number"&&p>0?g:h;return"@media (max-width:".concat(b-a/100).concat(i,")")}function c(h,p){var g=$n.indexOf(p);return g===$n.length-1?l(h):"@media (min-width:".concat(typeof n[h]=="number"?n[h]:h).concat(i,") and ")+"(max-width:".concat((g!==-1&&typeof n[$n[g+1]]=="number"?n[$n[g+1]]:p)-a/100).concat(i,")")}function d(h){return c(h,h)}function f(h){return n[h]}return B({keys:$n,values:n,up:l,down:u,between:c,only:d,width:f},s)}function VT(e,t,n){var r;return B({gutters:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:",`
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      `].join(`
`)),B({paddingLeft:t(2),paddingRight:t(2)},o,Mt({},e.up("sm"),B({paddingLeft:t(3),paddingRight:t(3)},o[e.up("sm")])))},toolbar:(r={minHeight:56},Mt(r,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),Mt(r,e.up("sm"),{minHeight:64}),r)},n)}var WT={black:"#000",white:"#fff"};const Pl=WT;var HT={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};const cp=HT;var KT={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"};const Cc=KT;var GT={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};const Rc=GT;var qT={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};const Pc=qT;var JT={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};const Ic=JT;var QT={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};const Tc=QT;var YT={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};const Oc=YT;var Hg={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Pl.white,default:cp[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Nc={text:{primary:Pl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:cp[800],default:"#303030"},action:{active:Pl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Kg(e,t,n,r){var i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Mw(e.main,i):t==="dark"&&(e.dark=$w(e.main,o)))}function XT(e){var t=e.primary,n=t===void 0?{light:Cc[300],main:Cc[500],dark:Cc[700]}:t,r=e.secondary,i=r===void 0?{light:Rc.A200,main:Rc.A400,dark:Rc.A700}:r,o=e.error,a=o===void 0?{light:Pc[300],main:Pc[500],dark:Pc[700]}:o,s=e.warning,l=s===void 0?{light:Ic[300],main:Ic[500],dark:Ic[700]}:s,u=e.info,c=u===void 0?{light:Tc[300],main:Tc[500],dark:Tc[700]}:u,d=e.success,f=d===void 0?{light:Oc[300],main:Oc[500],dark:Oc[700]}:d,h=e.type,p=h===void 0?"light":h,g=e.contrastThreshold,b=g===void 0?3:g,v=e.tonalOffset,m=v===void 0?.2:v,y=Ue(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function x(O){var z=UT(O,Nc.text.primary)>=b?Nc.text.primary:Hg.text.primary;return z}var _=function(z){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,J=arguments.length>2&&arguments[2]!==void 0?arguments[2]:300,Z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:700;if(z=B({},z),!z.main&&z[$]&&(z.main=z[$]),!z.main)throw new Error(Rl(4,$));if(typeof z.main!="string")throw new Error(Rl(5,JSON.stringify(z.main)));return Kg(z,"light",J,m),Kg(z,"dark",Z,m),z.contrastText||(z.contrastText=x(z.main)),z},k={dark:Nc,light:Hg},I=qi(B({common:Pl,type:p,primary:_(n),secondary:_(i,"A400","A200","A700"),error:_(a),warning:_(l),info:_(c),success:_(f),grey:cp,contrastThreshold:b,getContrastText:x,augmentColor:_,tonalOffset:m},k[p]),y);return I}function Dw(e){return Math.round(e*1e5)/1e5}function ZT(e){return Dw(e)}var Gg={textTransform:"uppercase"},qg='"Roboto", "Helvetica", "Arial", sans-serif';function eO(e,t){var n=typeof t=="function"?t(e):t,r=n.fontFamily,i=r===void 0?qg:r,o=n.fontSize,a=o===void 0?14:o,s=n.fontWeightLight,l=s===void 0?300:s,u=n.fontWeightRegular,c=u===void 0?400:u,d=n.fontWeightMedium,f=d===void 0?500:d,h=n.fontWeightBold,p=h===void 0?700:h,g=n.htmlFontSize,b=g===void 0?16:g,v=n.allVariants,m=n.pxToRem,y=Ue(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]),x=a/14,_=m||function(O){return"".concat(O/b*x,"rem")},k=function(z,$,J,Z,te){return B({fontFamily:i,fontWeight:z,fontSize:_($),lineHeight:J},i===qg?{letterSpacing:"".concat(Dw(Z/$),"em")}:{},te,v)},I={h1:k(l,96,1.167,-1.5),h2:k(l,60,1.2,-.5),h3:k(c,48,1.167,0),h4:k(c,34,1.235,.25),h5:k(c,24,1.334,0),h6:k(f,20,1.6,.15),subtitle1:k(c,16,1.75,.15),subtitle2:k(f,14,1.57,.1),body1:k(c,16,1.5,.15),body2:k(c,14,1.43,.15),button:k(f,14,1.75,.4,Gg),caption:k(c,12,1.66,.4),overline:k(c,12,2.66,1,Gg)};return qi(B({htmlFontSize:b,pxToRem:_,round:ZT,fontFamily:i,fontSize:a,fontWeightLight:l,fontWeightRegular:c,fontWeightMedium:f,fontWeightBold:p},I),y,{clone:!1})}var tO=.2,nO=.14,rO=.12;function Ce(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(tO,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(nO,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(rO,")")].join(",")}var iO=["none",Ce(0,2,1,-1,0,1,1,0,0,1,3,0),Ce(0,3,1,-2,0,2,2,0,0,1,5,0),Ce(0,3,3,-2,0,3,4,0,0,1,8,0),Ce(0,2,4,-1,0,4,5,0,0,1,10,0),Ce(0,3,5,-1,0,5,8,0,0,1,14,0),Ce(0,3,5,-1,0,6,10,0,0,1,18,0),Ce(0,4,5,-2,0,7,10,1,0,2,16,1),Ce(0,5,5,-3,0,8,10,1,0,3,14,2),Ce(0,5,6,-3,0,9,12,1,0,3,16,2),Ce(0,6,6,-3,0,10,14,1,0,4,18,3),Ce(0,6,7,-4,0,11,15,1,0,4,20,3),Ce(0,7,8,-4,0,12,17,2,0,5,22,4),Ce(0,7,8,-4,0,13,19,2,0,5,24,4),Ce(0,7,9,-4,0,14,21,2,0,5,26,4),Ce(0,8,9,-5,0,15,22,2,0,6,28,5),Ce(0,8,10,-5,0,16,24,2,0,6,30,5),Ce(0,8,11,-5,0,17,26,2,0,6,32,5),Ce(0,9,11,-5,0,18,28,2,0,7,34,6),Ce(0,9,12,-6,0,19,29,2,0,7,36,6),Ce(0,10,13,-6,0,20,31,3,0,8,38,7),Ce(0,10,13,-6,0,21,33,3,0,8,40,7),Ce(0,10,14,-6,0,22,35,3,0,8,42,7),Ce(0,11,14,-7,0,23,36,3,0,9,44,8),Ce(0,11,15,-7,0,24,38,3,0,9,46,8)];const oO=iO;var aO={borderRadius:4};const sO=aO;function hf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lO(e){if(Array.isArray(e))return hf(e)}function uO(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lw(e,t){if(e){if(typeof e=="string")return hf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hf(e,t)}}function cO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(e){return lO(e)||uO(e)||Lw(e)||cO()}function dO(e){if(Array.isArray(e))return e}function fO(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function hO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pO(e,t){return dO(e)||fO(e,t)||Lw(e,t)||hO()}function mO(e){var t=e.spacing||8;return typeof t=="number"?function(n){return t*n}:Array.isArray(t)?function(n){return t[n]}:typeof t=="function"?t:function(){}}function gO(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8;if(e.mui)return e;var t=mO({spacing:e}),n=function(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return o.length===0?t(1):o.length===1?t(o[0]):o.map(function(s){if(typeof s=="string")return s;var l=t(s);return typeof l=="number"?"".concat(l,"px"):l}).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var Jg={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Qg={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Yg(e){return"".concat(Math.round(e),"ms")}const vO={easing:Jg,duration:Qg,create:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["all"],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.duration,i=r===void 0?Qg.standard:r,o=n.easing,a=o===void 0?Jg.easeInOut:o,s=n.delay,l=s===void 0?0:s;return Ue(n,["duration","easing","delay"]),(Array.isArray(t)?t:[t]).map(function(u){return"".concat(u," ").concat(typeof i=="string"?i:Yg(i)," ").concat(a," ").concat(typeof l=="string"?l:Yg(l))}).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var n=t/36;return Math.round((4+15*Math.pow(n,.25)+n/5)*10)}};var yO={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const wO=yO;function dp(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.breakpoints,n=t===void 0?{}:t,r=e.mixins,i=r===void 0?{}:r,o=e.palette,a=o===void 0?{}:o,s=e.spacing,l=e.typography,u=l===void 0?{}:l,c=Ue(e,["breakpoints","mixins","palette","spacing","typography"]),d=XT(a),f=BT(n),h=gO(s),p=qi({breakpoints:f,direction:"ltr",mixins:VT(f,h,i),overrides:{},palette:d,props:{},shadows:oO,typography:eO(d,u),spacing:h,shape:sO,transitions:vO,zIndex:wO},c),g=arguments.length,b=new Array(g>1?g-1:0),v=1;v<g;v++)b[v-1]=arguments[v];return p=b.reduce(function(m,y){return qi(m,y)},p),p}var SO=typeof Symbol=="function"&&Symbol.for;const zw=SO?Symbol.for("mui.nested"):"__THEME_NESTED__";var bO=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function xO(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.disableGlobal,n=t===void 0?!1:t,r=e.productionPrefix,i=r===void 0?"jss":r,o=e.seed,a=o===void 0?"":o,s=a===""?"":"".concat(a,"-"),l=0,u=function(){return l+=1,l};return function(c,d){var f=d.options.name;if(f&&f.indexOf("Mui")===0&&!d.options.link&&!n){if(bO.indexOf(c.key)!==-1)return"Mui-".concat(c.key);var h="".concat(s).concat(f,"-").concat(c.key);return!d.options.theme[zw]||a!==""?h:"".concat(h,"-").concat(u())}return"".concat(s).concat(i).concat(u())}}function _O(e){var t=e.theme,n=e.name,r=e.props;if(!t||!t.props||!t.props[n])return r;var i=t.props[n],o;for(o in i)r[o]===void 0&&(r[o]=i[o]);return r}var Xg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ha=(typeof window>"u"?"undefined":Xg(window))==="object"&&(typeof document>"u"?"undefined":Xg(document))==="object"&&document.nodeType===9;function Zg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i1(r.key),r)}}function jw(e,t,n){return t&&Zg(e.prototype,t),n&&Zg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pf(e,t){return pf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pf(e,t)}function fp(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pf(e,t)}function mf(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var EO={}.constructor;function gf(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(gf);if(e.constructor!==EO)return e;var t={};for(var n in e)t[n]=gf(e[n]);return t}function hp(e,t,n){e===void 0&&(e="unnamed");var r=n.jss,i=gf(t),o=r.plugins.onCreateRule(e,i,n);return o||(e[0],null)}var ev=function(t,n){for(var r="",i=0;i<t.length&&t[i]!=="!important";i++)r&&(r+=n),r+=t[i];return r},Dr=function(t){if(!Array.isArray(t))return t;var n="";if(Array.isArray(t[0]))for(var r=0;r<t.length&&t[r]!=="!important";r++)n&&(n+=", "),n+=ev(t[r]," ");else n=ev(t,", ");return t[t.length-1]==="!important"&&(n+=" !important"),n};function io(e){return e&&e.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function So(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}function va(e,t,n){n===void 0&&(n={});var r="";if(!t)return r;var i=n,o=i.indent,a=o===void 0?0:o,s=t.fallbacks;n.format===!1&&(a=-1/0);var l=io(n),u=l.linebreak,c=l.space;if(e&&a++,s)if(Array.isArray(s))for(var d=0;d<s.length;d++){var f=s[d];for(var h in f){var p=f[h];p!=null&&(r&&(r+=u),r+=So(h+":"+c+Dr(p)+";",a))}}else for(var g in s){var b=s[g];b!=null&&(r&&(r+=u),r+=So(g+":"+c+Dr(b)+";",a))}for(var v in t){var m=t[v];m!=null&&v!=="fallbacks"&&(r&&(r+=u),r+=So(v+":"+c+Dr(m)+";",a))}return!r&&!n.allowEmpty||!e?r:(a--,r&&(r=""+u+r+u),So(""+e+c+"{"+r,a)+So("}",a))}var kO=/([[\].#*$><+~=|^:(),"'`\s])/g,tv=typeof CSS<"u"&&CSS.escape,pp=function(e){return tv?tv(e):e.replace(kO,"\\$1")},Fw=function(){function e(n,r,i){this.type="style",this.isProcessed=!1;var o=i.sheet,a=i.Renderer;this.key=n,this.options=i,this.style=r,o?this.renderer=o.renderer:a&&(this.renderer=new a)}var t=e.prototype;return t.prop=function(r,i,o){if(i===void 0)return this.style[r];var a=o?o.force:!1;if(!a&&this.style[r]===i)return this;var s=i;(!o||o.process!==!1)&&(s=this.options.jss.plugins.onChangeValue(i,r,this));var l=s==null||s===!1,u=r in this.style;if(l&&!u&&!a)return this;var c=l&&u;if(c?delete this.style[r]:this.style[r]=s,this.renderable&&this.renderer)return c?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,s),this;var d=this.options.sheet;return d&&d.attached,this},e}(),vf=function(e){fp(t,e);function t(r,i,o){var a;a=e.call(this,r,i,o)||this;var s=o.selector,l=o.scoped,u=o.sheet,c=o.generateId;return s?a.selectorText=s:l!==!1&&(a.id=c(mf(mf(a)),u),a.selectorText="."+pp(a.id)),a}var n=t.prototype;return n.applyTo=function(i){var o=this.renderer;if(o){var a=this.toJSON();for(var s in a)o.setProperty(i,s,a[s])}return this},n.toJSON=function(){var i={};for(var o in this.style){var a=this.style[o];typeof a!="object"?i[o]=a:Array.isArray(a)&&(i[o]=Dr(a))}return i},n.toString=function(i){var o=this.options.sheet,a=o?o.options.link:!1,s=a?B({},i,{allowEmpty:!0}):i;return va(this.selectorText,this.style,s)},jw(t,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var o=this.renderer,a=this.renderable;if(!(!a||!o)){var s=o.setSelector(a,i);s||o.replaceRule(a,this)}}},get:function(){return this.selectorText}}]),t}(Fw),CO={onCreateRule:function(t,n,r){return t[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new vf(t,n,r)}},Ac={indent:1,children:!0},RO=/@([\w-]+)/,PO=function(){function e(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var o=n.match(RO);this.at=o?o[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new Pu(B({},i,{parent:this}));for(var a in r)this.rules.add(a,r[a]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.indexOf=function(r){return this.rules.indexOf(r)},t.addRule=function(r,i,o){var a=this.rules.add(r,i,o);return a?(this.options.jss.plugins.onProcessRule(a),a):null},t.replaceRule=function(r,i,o){var a=this.rules.replace(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),a},t.toString=function(r){r===void 0&&(r=Ac);var i=io(r),o=i.linebreak;if(r.indent==null&&(r.indent=Ac.indent),r.children==null&&(r.children=Ac.children),r.children===!1)return this.query+" {}";var a=this.rules.toString(r);return a?this.query+" {"+o+a+o+"}":""},e}(),IO=/@media|@supports\s+/,TO={onCreateRule:function(t,n,r){return IO.test(t)?new PO(t,n,r):null}},$c={indent:1,children:!0},OO=/@keyframes\s+([\w-]+)/,yf=function(){function e(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var o=n.match(OO);o&&o[1]?this.name=o[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var a=i.scoped,s=i.sheet,l=i.generateId;this.id=a===!1?this.name:pp(l(this,s)),this.rules=new Pu(B({},i,{parent:this}));for(var u in r)this.rules.add(u,r[u],B({},i,{parent:this}));this.rules.process()}var t=e.prototype;return t.toString=function(r){r===void 0&&(r=$c);var i=io(r),o=i.linebreak;if(r.indent==null&&(r.indent=$c.indent),r.children==null&&(r.children=$c.children),r.children===!1)return this.at+" "+this.id+" {}";var a=this.rules.toString(r);return a&&(a=""+o+a+o),this.at+" "+this.id+" {"+a+"}"},e}(),NO=/@keyframes\s+/,AO=/\$([\w-]+)/g,wf=function(t,n){return typeof t=="string"?t.replace(AO,function(r,i){return i in n?n[i]:r}):t},nv=function(t,n,r){var i=t[n],o=wf(i,r);o!==i&&(t[n]=o)},$O={onCreateRule:function(t,n,r){return typeof t=="string"&&NO.test(t)?new yf(t,n,r):null},onProcessStyle:function(t,n,r){return n.type!=="style"||!r||("animation-name"in t&&nv(t,"animation-name",r.keyframes),"animation"in t&&nv(t,"animation",r.keyframes)),t},onChangeValue:function(t,n,r){var i=r.options.sheet;if(!i)return t;switch(n){case"animation":return wf(t,i.keyframes);case"animation-name":return wf(t,i.keyframes);default:return t}}},MO=function(e){fp(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.toString=function(i){var o=this.options.sheet,a=o?o.options.link:!1,s=a?B({},i,{allowEmpty:!0}):i;return va(this.key,this.style,s)},t}(Fw),DO={onCreateRule:function(t,n,r){return r.parent&&r.parent.type==="keyframes"?new MO(t,n,r):null}},LO=function(){function e(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){var i=io(r),o=i.linebreak;if(Array.isArray(this.style)){for(var a="",s=0;s<this.style.length;s++)a+=va(this.at,this.style[s]),this.style[s+1]&&(a+=o);return a}return va(this.at,this.style,r)},e}(),zO=/@font-face/,jO={onCreateRule:function(t,n,r){return zO.test(t)?new LO(t,n,r):null}},FO=function(){function e(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){return va(this.key,this.style,r)},e}(),UO={onCreateRule:function(t,n,r){return t==="@viewport"||t==="@-ms-viewport"?new FO(t,n,r):null}},BO=function(){function e(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var t=e.prototype;return t.toString=function(r){if(Array.isArray(this.value)){for(var i="",o=0;o<this.value.length;o++)i+=this.key+" "+this.value[o]+";",this.value[o+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},e}(),VO={"@charset":!0,"@import":!0,"@namespace":!0},WO={onCreateRule:function(t,n,r){return t in VO?new BO(t,n,r):null}},rv=[CO,TO,$O,DO,jO,UO,WO],HO={process:!0},iv={force:!0,process:!0},Pu=function(){function e(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var t=e.prototype;return t.add=function(r,i,o){var a=this.options,s=a.parent,l=a.sheet,u=a.jss,c=a.Renderer,d=a.generateId,f=a.scoped,h=B({classes:this.classes,parent:s,sheet:l,jss:u,Renderer:c,generateId:d,scoped:f,name:r,keyframes:this.keyframes,selector:void 0},o),p=r;r in this.raw&&(p=r+"-d"+this.counter++),this.raw[p]=i,p in this.classes&&(h.selector="."+pp(this.classes[p]));var g=hp(p,i,h);if(!g)return null;this.register(g);var b=h.index===void 0?this.index.length:h.index;return this.index.splice(b,0,g),g},t.replace=function(r,i,o){var a=this.get(r),s=this.index.indexOf(a);a&&this.remove(a);var l=o;return s!==-1&&(l=B({},o,{index:s})),this.add(r,i,l)},t.get=function(r){return this.map[r]},t.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},t.indexOf=function(r){return this.index.indexOf(r)},t.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},t.register=function(r){this.map[r.key]=r,r instanceof vf?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof yf&&this.keyframes&&(this.keyframes[r.name]=r.id)},t.unregister=function(r){delete this.map[r.key],r instanceof vf?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof yf&&delete this.keyframes[r.name]},t.update=function(){var r,i,o;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],o=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],o=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,o);else for(var a=0;a<this.index.length;a++)this.updateOne(this.index[a],i,o)},t.updateOne=function(r,i,o){o===void 0&&(o=HO);var a=this.options,s=a.jss.plugins,l=a.sheet;if(r.rules instanceof e){r.rules.update(i,o);return}var u=r.style;if(s.onUpdate(i,r,l,o),o.process&&u&&u!==r.style){s.onProcessStyle(r.style,r,l);for(var c in r.style){var d=r.style[c],f=u[c];d!==f&&r.prop(c,d,iv)}for(var h in u){var p=r.style[h],g=u[h];p==null&&p!==g&&r.prop(h,null,iv)}}},t.toString=function(r){for(var i="",o=this.options.sheet,a=o?o.options.link:!1,s=io(r),l=s.linebreak,u=0;u<this.index.length;u++){var c=this.index[u],d=c.toString(r);!d&&!a||(i&&(i+=l),i+=d)}return i},e}(),Uw=function(){function e(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=B({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new Pu(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(r,i,o){var a=this.queue;this.attached&&!a&&(this.queue=[]);var s=this.rules.add(r,i,o);return s?(this.options.jss.plugins.onProcessRule(s),this.attached?(this.deployed&&(a?a.push(s):(this.insertRule(s),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),s):(this.deployed=!1,s)):null},t.replaceRule=function(r,i,o){var a=this.rules.get(r);if(!a)return this.addRule(r,i,o);var s=this.rules.replace(r,i,o);return s&&this.options.jss.plugins.onProcessRule(s),this.attached?(this.deployed&&this.renderer&&(s?a.renderable&&this.renderer.replaceRule(a.renderable,s):this.renderer.deleteRule(a)),s):(this.deployed=!1,s)},t.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},t.addRules=function(r,i){var o=[];for(var a in r){var s=this.addRule(a,r[a],i);s&&o.push(s)}return o},t.getRule=function(r){return this.rules.get(r)},t.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},t.indexOf=function(r){return this.rules.indexOf(r)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},t.updateOne=function(r,i,o){return this.rules.updateOne(r,i,o),this},t.toString=function(r){return this.rules.toString(r)},e}(),KO=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(r,i,o){for(var a=0;a<this.registry.onCreateRule.length;a++){var s=this.registry.onCreateRule[a](r,i,o);if(s)return s}return null},t.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,o=0;o<this.registry.onProcessRule.length;o++)this.registry.onProcessRule[o](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},t.onProcessStyle=function(r,i,o){for(var a=0;a<this.registry.onProcessStyle.length;a++)i.style=this.registry.onProcessStyle[a](i.style,i,o)},t.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},t.onUpdate=function(r,i,o,a){for(var s=0;s<this.registry.onUpdate.length;s++)this.registry.onUpdate[s](r,i,o,a)},t.onChangeValue=function(r,i,o){for(var a=r,s=0;s<this.registry.onChangeValue.length;s++)a=this.registry.onChangeValue[s](a,i,o);return a},t.use=function(r,i){i===void 0&&(i={queue:"external"});var o=this.plugins[i.queue];o.indexOf(r)===-1&&(o.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(a,s){for(var l in s)l in a&&a[l].push(s[l]);return a},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),GO=function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(r){var i=this.registry,o=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||o>=this.index){i.push(r);return}for(var a=0;a<i.length;a++)if(i[a].options.index>o){i.splice(a,0,r);return}}},t.reset=function(){this.registry=[]},t.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},t.toString=function(r){for(var i=r===void 0?{}:r,o=i.attached,a=xh(i,["attached"]),s=io(a),l=s.linebreak,u="",c=0;c<this.registry.length;c++){var d=this.registry[c];o!=null&&d.attached!==o||(u&&(u+=l),u+=d.toString(a))}return u},jw(e,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),e}(),Uo=new GO,Sf=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),bf="2f1acc6c3a606b082e5eef5e54414ffb";Sf[bf]==null&&(Sf[bf]=0);var ov=Sf[bf]++,av=function(t){t===void 0&&(t={});var n=0,r=function(o,a){n+=1;var s="",l="";return a&&(a.options.classNamePrefix&&(l=a.options.classNamePrefix),a.options.jss.id!=null&&(s=String(a.options.jss.id))),t.minify?""+(l||"c")+ov+s+n:l+o.key+"-"+ov+(s?"-"+s:"")+"-"+n};return r},Bw=function(t){var n;return function(){return n||(n=t()),n}},qO=function(t,n){try{return t.attributeStyleMap?t.attributeStyleMap.get(n):t.style.getPropertyValue(n)}catch{return""}},JO=function(t,n,r){try{var i=r;if(Array.isArray(r)&&(i=Dr(r)),t.attributeStyleMap)t.attributeStyleMap.set(n,i);else{var o=i?i.indexOf("!important"):-1,a=o>-1?i.substr(0,o-1):i;t.style.setProperty(n,a,o>-1?"important":"")}}catch{return!1}return!0},QO=function(t,n){try{t.attributeStyleMap?t.attributeStyleMap.delete(n):t.style.removeProperty(n)}catch{}},YO=function(t,n){return t.selectorText=n,t.selectorText===n},Vw=Bw(function(){return document.querySelector("head")});function XO(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}function ZO(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}function e3(e){for(var t=Vw(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===e)return r}return null}function t3(e){var t=Uo.registry;if(t.length>0){var n=XO(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=ZO(t,e),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=e.insertionPoint;if(r&&typeof r=="string"){var i=e3(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function n3(e,t){var n=t.insertionPoint,r=t3(t);if(r!==!1&&r.parent){r.parent.insertBefore(e,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,o=i.parentNode;o&&o.insertBefore(e,i.nextSibling);return}Vw().appendChild(e)}var r3=Bw(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),sv=function(t,n,r){try{"insertRule"in t?t.insertRule(n,r):"appendRule"in t&&t.appendRule(n)}catch{return!1}return t.cssRules[r]},lv=function(t,n){var r=t.cssRules.length;return n===void 0||n>r?r:n},i3=function(){var t=document.createElement("style");return t.textContent=`
`,t},o3=function(){function e(n){this.getPropertyValue=qO,this.setProperty=JO,this.removeProperty=QO,this.setSelector=YO,this.hasInsertedRules=!1,this.cssRules=[],n&&Uo.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,o=r.meta,a=r.element;this.element=a||i3(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),o&&this.element.setAttribute("data-meta",o);var s=r3();s&&this.element.setAttribute("nonce",s)}var t=e.prototype;return t.attach=function(){if(!(this.element.parentNode||!this.sheet)){n3(this.element,this.sheet.options);var r=Boolean(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},t.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},t.insertRules=function(r,i){for(var o=0;o<r.index.length;o++)this.insertRule(r.index[o],o,i)},t.insertRule=function(r,i,o){if(o===void 0&&(o=this.element.sheet),r.rules){var a=r,s=o;if(r.type==="conditional"||r.type==="keyframes"){var l=lv(o,i);if(s=sv(o,a.toString({children:!1}),l),s===!1)return!1;this.refCssRule(r,l,s)}return this.insertRules(a.rules,s),s}var u=r.toString();if(!u)return!1;var c=lv(o,i),d=sv(o,u,c);return d===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,c,d),d)},t.refCssRule=function(r,i,o){r.renderable=o,r.options.parent instanceof Uw&&this.cssRules.splice(i,0,o)},t.deleteRule=function(r){var i=this.element.sheet,o=this.indexOf(r);return o===-1?!1:(i.deleteRule(o),this.cssRules.splice(o,1),!0)},t.indexOf=function(r){return this.cssRules.indexOf(r)},t.replaceRule=function(r,i){var o=this.indexOf(r);return o===-1?!1:(this.element.sheet.deleteRule(o),this.cssRules.splice(o,1),this.insertRule(i,o))},t.getRules=function(){return this.element.sheet.cssRules},e}(),a3=0,s3=function(){function e(n){this.id=a3++,this.version="10.9.2",this.plugins=new KO,this.options={id:{minify:!1},createGenerateId:av,Renderer:Ha?o3:null,plugins:[]},this.generateId=av({minify:!1});for(var r=0;r<rv.length;r++)this.plugins.use(rv[r],{queue:"internal"});this.setup(n)}var t=e.prototype;return t.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=B({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},t.createStyleSheet=function(r,i){i===void 0&&(i={});var o=i,a=o.index;typeof a!="number"&&(a=Uo.index===0?0:Uo.index+1);var s=new Uw(r,B({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:a}));return this.plugins.onProcessSheet(s),s},t.removeStyleSheet=function(r){return r.detach(),Uo.remove(r),this},t.createRule=function(r,i,o){if(i===void 0&&(i={}),o===void 0&&(o={}),typeof r=="object")return this.createRule(void 0,r,i);var a=B({},o,{name:r,jss:this,Renderer:this.options.Renderer});a.generateId||(a.generateId=this.generateId),a.classes||(a.classes={}),a.keyframes||(a.keyframes={});var s=hp(r,i,a);return s&&this.plugins.onProcessRule(s),s},t.use=function(){for(var r=this,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return o.forEach(function(s){r.plugins.use(s)}),this},e}(),Ww=function(t){return new s3(t)},mp=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Hw(e){var t=null;for(var n in e){var r=e[n],i=typeof r;if(i==="function")t||(t={}),t[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var o=Hw(r);o&&(t||(t={}),t[n]=o)}}return t}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */Ww();var Kw=Date.now(),Mc="fnValues"+Kw,Dc="fnStyle"+ ++Kw,l3=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var o=hp(n,{},i);return o[Dc]=r,o},onProcessStyle:function(n,r){if(Mc in r||Dc in r)return n;var i={};for(var o in n){var a=n[o];typeof a=="function"&&(delete n[o],i[o]=a)}return r[Mc]=i,n},onUpdate:function(n,r,i,o){var a=r,s=a[Dc];s&&(a.style=s(n)||{});var l=a[Mc];if(l)for(var u in l)a.prop(u,l[u](n),o)}}};const u3=l3;var lr="@global",xf="@global ",c3=function(){function e(n,r,i){this.type="global",this.at=lr,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new Pu(B({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.addRule=function(r,i,o){var a=this.rules.add(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),a},t.replaceRule=function(r,i,o){var a=this.rules.replace(r,i,o);return a&&this.options.jss.plugins.onProcessRule(a),a},t.indexOf=function(r){return this.rules.indexOf(r)},t.toString=function(r){return this.rules.toString(r)},e}(),d3=function(){function e(n,r,i){this.type="global",this.at=lr,this.isProcessed=!1,this.key=n,this.options=i;var o=n.substr(xf.length);this.rule=i.jss.createRule(o,r,B({},i,{parent:this}))}var t=e.prototype;return t.toString=function(r){return this.rule?this.rule.toString(r):""},e}(),f3=/\s*,\s*/g;function Gw(e,t){for(var n=e.split(f3),r="",i=0;i<n.length;i++)r+=t+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function h3(e,t){var n=e.options,r=e.style,i=r?r[lr]:null;if(i){for(var o in i)t.addRule(o,i[o],B({},n,{selector:Gw(o,e.selector)}));delete r[lr]}}function p3(e,t){var n=e.options,r=e.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,lr.length)!==lr)){var o=Gw(i.substr(lr.length),e.selector);t.addRule(o,r[i],B({},n,{selector:o})),delete r[i]}}function m3(){function e(n,r,i){if(!n)return null;if(n===lr)return new c3(n,r,i);if(n[0]==="@"&&n.substr(0,xf.length)===xf)return new d3(n,r,i);var o=i.parent;return o&&(o.type==="global"||o.options.parent&&o.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function t(n,r){n.type!=="style"||!r||(h3(n,r),p3(n,r))}return{onCreateRule:e,onProcessRule:t}}var uv=/\s*,\s*/g,g3=/&/g,v3=/\$([\w-]+)/g;function y3(){function e(i,o){return function(a,s){var l=i.getRule(s)||o&&o.getRule(s);return l?l.selector:s}}function t(i,o){for(var a=o.split(uv),s=i.split(uv),l="",u=0;u<a.length;u++)for(var c=a[u],d=0;d<s.length;d++){var f=s[d];l&&(l+=", "),l+=f.indexOf("&")!==-1?f.replace(g3,c):c+" "+f}return l}function n(i,o,a){if(a)return B({},a,{index:a.index+1});var s=i.options.nestingLevel;s=s===void 0?1:s+1;var l=B({},i.options,{nestingLevel:s,index:o.indexOf(i)+1});return delete l.name,l}function r(i,o,a){if(o.type!=="style")return i;var s=o,l=s.options.parent,u,c;for(var d in i){var f=d.indexOf("&")!==-1,h=d[0]==="@";if(!(!f&&!h)){if(u=n(s,l,u),f){var p=t(d,s.selector);c||(c=e(l,a)),p=p.replace(v3,c);var g=s.key+"-"+d;"replaceRule"in l?l.replaceRule(g,i[d],B({},u,{selector:p})):l.addRule(g,i[d],B({},u,{selector:p}))}else h&&l.addRule(d,{},u).addRule(s.key,i[d],{selector:s.selector});delete i[d]}}return i}return{onProcessStyle:r}}var w3=/[A-Z]/g,S3=/^ms-/,Lc={};function b3(e){return"-"+e.toLowerCase()}function qw(e){if(Lc.hasOwnProperty(e))return Lc[e];var t=e.replace(w3,b3);return Lc[e]=S3.test(t)?"-"+t:t}function Il(e){var t={};for(var n in e){var r=n.indexOf("--")===0?n:qw(n);t[r]=e[n]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(Il):t.fallbacks=Il(e.fallbacks)),t}function x3(){function e(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=Il(n[r]);return n}return Il(n)}function t(n,r,i){if(r.indexOf("--")===0)return n;var o=qw(r);return r===o?n:(i.prop(o,n),null)}return{onProcessStyle:e,onChangeValue:t}}var C=mp&&CSS?CSS.px:"px",ms=mp&&CSS?CSS.ms:"ms",ai=mp&&CSS?CSS.percent:"%",_3={"animation-delay":ms,"animation-duration":ms,"background-position":C,"background-position-x":C,"background-position-y":C,"background-size":C,border:C,"border-bottom":C,"border-bottom-left-radius":C,"border-bottom-right-radius":C,"border-bottom-width":C,"border-left":C,"border-left-width":C,"border-radius":C,"border-right":C,"border-right-width":C,"border-top":C,"border-top-left-radius":C,"border-top-right-radius":C,"border-top-width":C,"border-width":C,"border-block":C,"border-block-end":C,"border-block-end-width":C,"border-block-start":C,"border-block-start-width":C,"border-block-width":C,"border-inline":C,"border-inline-end":C,"border-inline-end-width":C,"border-inline-start":C,"border-inline-start-width":C,"border-inline-width":C,"border-start-start-radius":C,"border-start-end-radius":C,"border-end-start-radius":C,"border-end-end-radius":C,margin:C,"margin-bottom":C,"margin-left":C,"margin-right":C,"margin-top":C,"margin-block":C,"margin-block-end":C,"margin-block-start":C,"margin-inline":C,"margin-inline-end":C,"margin-inline-start":C,padding:C,"padding-bottom":C,"padding-left":C,"padding-right":C,"padding-top":C,"padding-block":C,"padding-block-end":C,"padding-block-start":C,"padding-inline":C,"padding-inline-end":C,"padding-inline-start":C,"mask-position-x":C,"mask-position-y":C,"mask-size":C,height:C,width:C,"min-height":C,"max-height":C,"min-width":C,"max-width":C,bottom:C,left:C,top:C,right:C,inset:C,"inset-block":C,"inset-block-end":C,"inset-block-start":C,"inset-inline":C,"inset-inline-end":C,"inset-inline-start":C,"box-shadow":C,"text-shadow":C,"column-gap":C,"column-rule":C,"column-rule-width":C,"column-width":C,"font-size":C,"font-size-delta":C,"letter-spacing":C,"text-decoration-thickness":C,"text-indent":C,"text-stroke":C,"text-stroke-width":C,"word-spacing":C,motion:C,"motion-offset":C,outline:C,"outline-offset":C,"outline-width":C,perspective:C,"perspective-origin-x":ai,"perspective-origin-y":ai,"transform-origin":ai,"transform-origin-x":ai,"transform-origin-y":ai,"transform-origin-z":ai,"transition-delay":ms,"transition-duration":ms,"vertical-align":C,"flex-basis":C,"shape-margin":C,size:C,gap:C,grid:C,"grid-gap":C,"row-gap":C,"grid-row-gap":C,"grid-column-gap":C,"grid-template-rows":C,"grid-template-columns":C,"grid-auto-rows":C,"grid-auto-columns":C,"box-shadow-x":C,"box-shadow-y":C,"box-shadow-blur":C,"box-shadow-spread":C,"font-line-height":C,"text-shadow-x":C,"text-shadow-y":C,"text-shadow-blur":C};function Jw(e){var t=/(-[a-z])/g,n=function(a){return a[1].toUpperCase()},r={};for(var i in e)r[i]=e[i],r[i.replace(t,n)]=e[i];return r}var E3=Jw(_3);function Bo(e,t,n){if(t==null)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=Bo(e,t[r],n);else if(typeof t=="object")if(e==="fallbacks")for(var i in t)t[i]=Bo(i,t[i],n);else for(var o in t)t[o]=Bo(e+"-"+o,t[o],n);else if(typeof t=="number"&&isNaN(t)===!1){var a=n[e]||E3[e];return a&&!(t===0&&a===C)?typeof a=="function"?a(t).toString():""+t+a:t.toString()}return t}function k3(e){e===void 0&&(e={});var t=Jw(e);function n(i,o){if(o.type!=="style")return i;for(var a in i)i[a]=Bo(a,i[a],t);return i}function r(i,o){return Bo(o,i,t)}return{onProcessStyle:n,onChangeValue:r}}var Po="",_f="",Qw="",Yw="",C3=Ha&&"ontouchstart"in document.documentElement;if(Ha){var zc={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},R3=document.createElement("p"),jc=R3.style,P3="Transform";for(var Fc in zc)if(Fc+P3 in jc){Po=Fc,_f=zc[Fc];break}Po==="Webkit"&&"msHyphens"in jc&&(Po="ms",_f=zc.ms,Yw="edge"),Po==="Webkit"&&"-apple-trailing-word"in jc&&(Qw="apple")}var Q={js:Po,css:_f,vendor:Qw,browser:Yw,isTouch:C3};function I3(e){return e[1]==="-"||Q.js==="ms"?e:"@"+Q.css+"keyframes"+e.substr(10)}var T3={noPrefill:["appearance"],supportedProperty:function(t){return t!=="appearance"?!1:Q.js==="ms"?"-webkit-"+t:Q.css+t}},O3={noPrefill:["color-adjust"],supportedProperty:function(t){return t!=="color-adjust"?!1:Q.js==="Webkit"?Q.css+"print-"+t:t}},N3=/[-\s]+(.)?/g;function A3(e,t){return t?t.toUpperCase():""}function gp(e){return e.replace(N3,A3)}function pr(e){return gp("-"+e)}var $3={noPrefill:["mask"],supportedProperty:function(t,n){if(!/^mask/.test(t))return!1;if(Q.js==="Webkit"){var r="mask-image";if(gp(r)in n)return t;if(Q.js+pr(r)in n)return Q.css+t}return t}},M3={noPrefill:["text-orientation"],supportedProperty:function(t){return t!=="text-orientation"?!1:Q.vendor==="apple"&&!Q.isTouch?Q.css+t:t}},D3={noPrefill:["transform"],supportedProperty:function(t,n,r){return t!=="transform"?!1:r.transform?t:Q.css+t}},L3={noPrefill:["transition"],supportedProperty:function(t,n,r){return t!=="transition"?!1:r.transition?t:Q.css+t}},z3={noPrefill:["writing-mode"],supportedProperty:function(t){return t!=="writing-mode"?!1:Q.js==="Webkit"||Q.js==="ms"&&Q.browser!=="edge"?Q.css+t:t}},j3={noPrefill:["user-select"],supportedProperty:function(t){return t!=="user-select"?!1:Q.js==="Moz"||Q.js==="ms"||Q.vendor==="apple"?Q.css+t:t}},F3={supportedProperty:function(t,n){if(!/^break-/.test(t))return!1;if(Q.js==="Webkit"){var r="WebkitColumn"+pr(t);return r in n?Q.css+"column-"+t:!1}if(Q.js==="Moz"){var i="page"+pr(t);return i in n?"page-"+t:!1}return!1}},U3={supportedProperty:function(t,n){if(!/^(border|margin|padding)-inline/.test(t))return!1;if(Q.js==="Moz")return t;var r=t.replace("-inline","");return Q.js+pr(r)in n?Q.css+r:!1}},B3={supportedProperty:function(t,n){return gp(t)in n?t:!1}},V3={supportedProperty:function(t,n){var r=pr(t);return t[0]==="-"||t[0]==="-"&&t[1]==="-"?t:Q.js+r in n?Q.css+t:Q.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+t:!1}},W3={supportedProperty:function(t){return t.substring(0,11)!=="scroll-snap"?!1:Q.js==="ms"?""+Q.css+t:t}},H3={supportedProperty:function(t){return t!=="overscroll-behavior"?!1:Q.js==="ms"?Q.css+"scroll-chaining":t}},K3={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},G3={supportedProperty:function(t,n){var r=K3[t];return r&&Q.js+pr(r)in n?Q.css+r:!1}},Xw={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},q3=Object.keys(Xw),J3=function(t){return Q.css+t},Q3={supportedProperty:function(t,n,r){var i=r.multiple;if(q3.indexOf(t)>-1){var o=Xw[t];if(!Array.isArray(o))return Q.js+pr(o)in n?Q.css+o:!1;if(!i)return!1;for(var a=0;a<o.length;a++)if(!(Q.js+pr(o[0])in n))return!1;return o.map(J3)}return!1}},Zw=[T3,O3,$3,M3,D3,L3,z3,j3,F3,U3,B3,V3,W3,H3,G3,Q3],cv=Zw.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),Y3=Zw.filter(function(e){return e.noPrefill}).reduce(function(e,t){return e.push.apply(e,Wt(t.noPrefill)),e},[]),Io,Cr={};if(Ha){Io=document.createElement("p");var Uc=window.getComputedStyle(document.documentElement,"");for(var Bc in Uc)isNaN(Bc)||(Cr[Uc[Bc]]=Uc[Bc]);Y3.forEach(function(e){return delete Cr[e]})}function Ef(e,t){if(t===void 0&&(t={}),!Io)return e;if(Cr[e]!=null)return Cr[e];(e==="transition"||e==="transform")&&(t[e]=e in Io.style);for(var n=0;n<cv.length&&(Cr[e]=cv[n](e,Io.style,t),!Cr[e]);n++);try{Io.style[e]=""}catch{return!1}return Cr[e]}var si={},X3={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},Z3=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Mn;function eN(e,t,n){if(t==="var")return"var";if(t==="all")return"all";if(n==="all")return", all";var r=t?Ef(t):", "+Ef(n);return r||t||n}Ha&&(Mn=document.createElement("p"));function dv(e,t){var n=t;if(!Mn||e==="content")return t;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=e+n;if(si[r]!=null)return si[r];try{Mn.style[e]=n}catch{return si[r]=!1,!1}if(X3[e])n=n.replace(Z3,eN);else if(Mn.style[e]===""&&(n=Q.css+n,n==="-ms-flex"&&(Mn.style[e]="-ms-flexbox"),Mn.style[e]=n,Mn.style[e]===""))return si[r]=!1,!1;return Mn.style[e]="",si[r]=n,si[r]}function tN(){function e(i){if(i.type==="keyframes"){var o=i;o.at=I3(o.at)}}function t(i){for(var o in i){var a=i[o];if(o==="fallbacks"&&Array.isArray(a)){i[o]=a.map(t);continue}var s=!1,l=Ef(o);l&&l!==o&&(s=!0);var u=!1,c=dv(l,Dr(a));c&&c!==a&&(u=!0),(s||u)&&(s&&delete i[o],i[l||o]=c||a)}return i}function n(i,o){return o.type!=="style"?i:t(i)}function r(i,o){return dv(o,Dr(i))||i}return{onProcessRule:e,onProcessStyle:n,onChangeValue:r}}function nN(){var e=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},o=Object.keys(n).sort(e),a=0;a<o.length;a++)i[o[a]]=n[o[a]];return i}}}function rN(){return{plugins:[u3(),m3(),y3(),x3(),k3(),typeof window>"u"?null:tN(),nN()]}}function eS(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.baseClasses,n=e.newClasses;if(e.Component,!n)return t;var r=B({},t);return Object.keys(n).forEach(function(i){n[i]&&(r[i]="".concat(t[i]," ").concat(n[i]))}),r}var iN={set:function(t,n,r,i){var o=t.get(n);o||(o=new Map,t.set(n,o)),o.set(r,i)},get:function(t,n,r){var i=t.get(n);return i?i.get(r):void 0},delete:function(t,n,r){var i=t.get(n);i.delete(r)}};const xi=iN;var oN=ie.createContext(null);const tS=oN;function Iu(){var e=ie.useContext(tS);return e}var aN=Ww(rN()),sN=xO(),lN=new Map,uN={disableGeneration:!1,generateClassName:sN,jss:aN,sheetsCache:null,sheetsManager:lN,sheetsRegistry:null},cN=ie.createContext(uN),fv=-1e9;function dN(){return fv+=1,fv}var fN={};const hN=fN;function pN(e){var t=typeof e=="function";return{create:function(r,i){var o;try{o=t?e(r):e}catch(l){throw l}if(!i||!r.overrides||!r.overrides[i])return o;var a=r.overrides[i],s=B({},o);return Object.keys(a).forEach(function(l){s[l]=qi(s[l],a[l])}),s},options:{}}}function mN(e,t,n){var r=e.state,i=e.stylesOptions;if(i.disableGeneration)return t||{};r.cacheClasses||(r.cacheClasses={value:null,lastProp:null,lastJSS:{}});var o=!1;return r.classes!==r.cacheClasses.lastJSS&&(r.cacheClasses.lastJSS=r.classes,o=!0),t!==r.cacheClasses.lastProp&&(r.cacheClasses.lastProp=t,o=!0),o&&(r.cacheClasses.value=eS({baseClasses:r.cacheClasses.lastJSS,newClasses:t,Component:n})),r.cacheClasses.value}function gN(e,t){var n=e.state,r=e.theme,i=e.stylesOptions,o=e.stylesCreator,a=e.name;if(!i.disableGeneration){var s=xi.get(i.sheetsManager,o,r);s||(s={refs:0,staticSheet:null,dynamicStyles:null},xi.set(i.sheetsManager,o,r,s));var l=B({},o.options,i,{theme:r,flip:typeof i.flip=="boolean"?i.flip:r.direction==="rtl"});l.generateId=l.serverGenerateClassName||l.generateClassName;var u=i.sheetsRegistry;if(s.refs===0){var c;i.sheetsCache&&(c=xi.get(i.sheetsCache,o,r));var d=o.create(r,a);c||(c=i.jss.createStyleSheet(d,B({link:!1},l)),c.attach(),i.sheetsCache&&xi.set(i.sheetsCache,o,r,c)),u&&u.add(c),s.staticSheet=c,s.dynamicStyles=Hw(d)}if(s.dynamicStyles){var f=i.jss.createStyleSheet(s.dynamicStyles,B({link:!0},l));f.update(t),f.attach(),n.dynamicSheet=f,n.classes=eS({baseClasses:s.staticSheet.classes,newClasses:f.classes}),u&&u.add(f)}else n.classes=s.staticSheet.classes;s.refs+=1}}function vN(e,t){var n=e.state;n.dynamicSheet&&n.dynamicSheet.update(t)}function yN(e){var t=e.state,n=e.theme,r=e.stylesOptions,i=e.stylesCreator;if(!r.disableGeneration){var o=xi.get(r.sheetsManager,i,n);o.refs-=1;var a=r.sheetsRegistry;o.refs===0&&(xi.delete(r.sheetsManager,i,n),r.jss.removeStyleSheet(o.staticSheet),a&&a.remove(o.staticSheet)),t.dynamicSheet&&(r.jss.removeStyleSheet(t.dynamicSheet),a&&a.remove(t.dynamicSheet))}}function wN(e,t){var n=ie.useRef([]),r,i=ie.useMemo(function(){return{}},t);n.current!==i&&(n.current=i,r=e()),ie.useEffect(function(){return function(){r&&r()}},[i])}function SN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.name,r=t.classNamePrefix,i=t.Component,o=t.defaultTheme,a=o===void 0?hN:o,s=Ue(t,["name","classNamePrefix","Component","defaultTheme"]),l=pN(e),u=n||r||"makeStyles";l.options={index:dN(),name:n,meta:u,classNamePrefix:u};var c=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=Iu()||a,p=B({},ie.useContext(cN),s),g=ie.useRef(),b=ie.useRef();wN(function(){var m={name:n,state:{},stylesCreator:l,stylesOptions:p,theme:h};return gN(m,f),b.current=!1,g.current=m,function(){yN(m)}},[h,l]),ie.useEffect(function(){b.current&&vN(g.current,f),b.current=!0});var v=mN(g.current,f.classes,i);return v};return c}function nS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=nS(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Te(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=nS(e))&&(r&&(r+=" "),r+=t);return r}function bN(e,t){if(typeof t=="function"){var n=t(e);return n}return B({},e,t)}function rS(e){var t=e.children,n=e.theme,r=Iu(),i=ie.useMemo(function(){var o=r===null?n:bN(r,n);return o!=null&&(o[zw]=r!==null),o},[n,r]);return ie.createElement(tS.Provider,{value:i},t)}var xN=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(r){var i=n.defaultTheme,o=n.withTheme,a=o===void 0?!1:o,s=n.name,l=Ue(n,["defaultTheme","withTheme","name"]),u=s,c=SN(t,B({defaultTheme:i,Component:r,name:s||r.displayName,classNamePrefix:u},l)),d=ie.forwardRef(function(h,p){h.classes;var g=h.innerRef,b=Ue(h,["classes","innerRef"]),v=c(B({},r.defaultProps,h)),m,y=b;return(typeof s=="string"||a)&&(m=Iu()||i,s&&(y=_O({theme:m,name:s,props:b})),a&&!y.theme&&(y.theme=m)),ie.createElement(r,B({ref:g||p,classes:v},y))});return Vy(d,r),d}};const _N=xN;var EN=dp();const iS=EN;function oS(){var e=Iu()||iS;return e}function cn(e,t){return _N(e,B({defaultTheme:iS},t))}function mt(e){if(typeof e!="string")throw new Error(Rl(7));return e.charAt(0).toUpperCase()+e.slice(1)}var kN=function(t){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:t.typography.pxToRem(24),transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter})},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorAction:{color:t.palette.action.active},colorError:{color:t.palette.error.main},colorDisabled:{color:t.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:t.typography.pxToRem(20)},fontSizeLarge:{fontSize:t.typography.pxToRem(35)}}},aS=S.forwardRef(function(t,n){var r=t.children,i=t.classes,o=t.className,a=t.color,s=a===void 0?"inherit":a,l=t.component,u=l===void 0?"svg":l,c=t.fontSize,d=c===void 0?"medium":c,f=t.htmlColor,h=t.titleAccess,p=t.viewBox,g=p===void 0?"0 0 24 24":p,b=Ue(t,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return S.createElement(u,B({className:Te(i.root,o,s!=="inherit"&&i["color".concat(mt(s))],d!=="default"&&d!=="medium"&&i["fontSize".concat(mt(d))]),focusable:"false",viewBox:g,color:f,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},b),r,h?S.createElement("title",null,h):null)});aS.muiName="SvgIcon";const hv=cn(kN,{name:"MuiSvgIcon"})(aS);function ei(e,t){var n=function(i,o){return ie.createElement(hv,B({ref:o},i),e)};return n.muiName=hv.muiName,ie.memo(ie.forwardRef(n))}function kf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:166,n;function r(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var s=this,l=function(){e.apply(s,o)};clearTimeout(n),n=setTimeout(l,t)}return r.clear=function(){clearTimeout(n)},r}function CN(e){return e&&e.ownerDocument||document}function RN(e){var t=CN(e);return t.defaultView||window}function pv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function PN(e){var t=e.controlled,n=e.default;e.name,e.state;var r=S.useRef(t!==void 0),i=r.current,o=S.useState(n),a=o[0],s=o[1],l=i?t:a,u=S.useCallback(function(c){i||s(c)},[]);return[l,u]}var IN=typeof window<"u"?S.useLayoutEffect:S.useEffect;function Gn(e){var t=S.useRef(e);return IN(function(){t.current=e}),S.useCallback(function(){return t.current.apply(void 0,arguments)},[])}function Ls(e,t){return S.useMemo(function(){return e==null&&t==null?null:function(n){pv(e,n),pv(t,n)}},[e,t])}var Tu=!0,Cf=!1,mv=null,TN={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ON(e){var t=e.type,n=e.tagName;return!!(n==="INPUT"&&TN[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function NN(e){e.metaKey||e.altKey||e.ctrlKey||(Tu=!0)}function Vc(){Tu=!1}function AN(){this.visibilityState==="hidden"&&Cf&&(Tu=!0)}function $N(e){e.addEventListener("keydown",NN,!0),e.addEventListener("mousedown",Vc,!0),e.addEventListener("pointerdown",Vc,!0),e.addEventListener("touchstart",Vc,!0),e.addEventListener("visibilitychange",AN,!0)}function MN(e){var t=e.target;try{return t.matches(":focus-visible")}catch{}return Tu||ON(t)}function DN(){Cf=!0,window.clearTimeout(mv),mv=window.setTimeout(function(){Cf=!1},100)}function LN(){var e=S.useCallback(function(t){var n=$i.findDOMNode(t);n!=null&&$N(n.ownerDocument)},[]);return{isFocusVisible:MN,onBlurVisible:DN,ref:e}}function zN(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.boundaryCount,n=t===void 0?1:t,r=e.componentName,i=r===void 0?"usePagination":r,o=e.count,a=o===void 0?1:o,s=e.defaultPage,l=s===void 0?1:s,u=e.disabled,c=u===void 0?!1:u,d=e.hideNextButton,f=d===void 0?!1:d,h=e.hidePrevButton,p=h===void 0?!1:h,g=e.onChange,b=e.page,v=e.showFirstButton,m=v===void 0?!1:v,y=e.showLastButton,x=y===void 0?!1:y,_=e.siblingCount,k=_===void 0?1:_,I=Ue(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),O=PN({controlled:b,default:l,name:i,state:"page"}),z=pO(O,2),$=z[0],J=z[1],Z=function(P,D){b||J(D),g&&g(P,D)},te=function(P,D){var j=D-P+1;return Array.from({length:j},function(H,E){return P+E})},ue=te(1,Math.min(n,a)),ce=te(Math.max(a-n+1,n+1),a),ye=Math.max(Math.min($-k,a-n-k*2-1),n+2),ne=Math.min(Math.max($+k,n+k*2+2),ce[0]-2),T=[].concat(Wt(m?["first"]:[]),Wt(p?[]:["previous"]),Wt(ue),Wt(ye>n+2?["start-ellipsis"]:n+1<a-n?[n+1]:[]),Wt(te(ye,ne)),Wt(ne<a-n-1?["end-ellipsis"]:a-n>n?[a-n]:[]),Wt(ce),Wt(f?[]:["next"]),Wt(x?["last"]:[])),F=function(P){switch(P){case"first":return 1;case"previous":return $-1;case"next":return $+1;case"last":return a;default:return null}},V=T.map(function(W){return typeof W=="number"?{onClick:function(D){Z(D,W)},type:"page",page:W,selected:W===$,disabled:c,"aria-current":W===$?"true":void 0}:{onClick:function(D){Z(D,F(W))},type:W,page:F(W),selected:!1,disabled:c||W.indexOf("ellipsis")===-1&&(W==="next"||W==="last"?$>=a:$<=1)}});return B({items:V},I)}const gv=ie.createContext(null);function vp(e,t){var n=function(o){return t&&S.isValidElement(o)?t(o):o},r=Object.create(null);return e&&S.Children.map(e,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function jN(e,t){e=e||{},t=t||{};function n(c){return c in t?t[c]:e[c]}var r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var a,s={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var u=r[l][a];s[r[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<i.length;a++)s[i[a]]=n(i[a]);return s}function Nr(e,t,n){return n[t]!=null?n[t]:e.props[t]}function FN(e,t){return vp(e.children,function(n){return S.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Nr(n,"appear",e),enter:Nr(n,"enter",e),exit:Nr(n,"exit",e)})})}function UN(e,t,n){var r=vp(e.children),i=jN(t,r);return Object.keys(i).forEach(function(o){var a=i[o];if(S.isValidElement(a)){var s=o in t,l=o in r,u=t[o],c=S.isValidElement(u)&&!u.props.in;l&&(!s||c)?i[o]=S.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:Nr(a,"exit",e),enter:Nr(a,"enter",e)}):!l&&s&&!c?i[o]=S.cloneElement(a,{in:!1}):l&&s&&S.isValidElement(u)&&(i[o]=S.cloneElement(a,{onExited:n.bind(null,a),in:u.props.in,exit:Nr(a,"exit",e),enter:Nr(a,"enter",e)}))}}),i}var BN=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},VN={component:"div",childFactory:function(t){return t}},yp=function(e){fp(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var a=o.handleExited.bind(mf(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,o){var a=o.children,s=o.handleExited,l=o.firstRender;return{children:l?FN(i,s):UN(i,a,s),firstRender:!1}},n.handleExited=function(i,o){var a=vp(this.props.children);i.key in a||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(s){var l=B({},s.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,o=i.component,a=i.childFactory,s=xh(i,["component","childFactory"]),l=this.state.contextValue,u=BN(this.state.children).map(a);return delete s.appear,delete s.enter,delete s.exit,o===null?ie.createElement(gv.Provider,{value:l},u):ie.createElement(gv.Provider,{value:l},ie.createElement(o,s,u))},t}(ie.Component);yp.propTypes={};yp.defaultProps=VN;const WN=yp;var HN=typeof window>"u"?S.useEffect:S.useLayoutEffect;function KN(e){var t=e.classes,n=e.pulsate,r=n===void 0?!1:n,i=e.rippleX,o=e.rippleY,a=e.rippleSize,s=e.in,l=e.onExited,u=l===void 0?function(){}:l,c=e.timeout,d=S.useState(!1),f=d[0],h=d[1],p=Te(t.ripple,t.rippleVisible,r&&t.ripplePulsate),g={width:a,height:a,top:-(a/2)+o,left:-(a/2)+i},b=Te(t.child,f&&t.childLeaving,r&&t.childPulsate),v=Gn(u);return HN(function(){if(!s){h(!0);var m=setTimeout(v,c);return function(){clearTimeout(m)}}},[v,s,c]),S.createElement("span",{className:p,style:g},S.createElement("span",{className:b}))}var Rf=550,GN=80,qN=function(t){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(Rf,"ms ").concat(t.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(t.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(Rf,"ms ").concat(t.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(t.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}},JN=S.forwardRef(function(t,n){var r=t.center,i=r===void 0?!1:r,o=t.classes,a=t.className,s=Ue(t,["center","classes","className"]),l=S.useState([]),u=l[0],c=l[1],d=S.useRef(0),f=S.useRef(null);S.useEffect(function(){f.current&&(f.current(),f.current=null)},[u]);var h=S.useRef(!1),p=S.useRef(null),g=S.useRef(null),b=S.useRef(null);S.useEffect(function(){return function(){clearTimeout(p.current)}},[]);var v=S.useCallback(function(_){var k=_.pulsate,I=_.rippleX,O=_.rippleY,z=_.rippleSize,$=_.cb;c(function(J){return[].concat(Wt(J),[S.createElement(KN,{key:d.current,classes:o,timeout:Rf,pulsate:k,rippleX:I,rippleY:O,rippleSize:z})])}),d.current+=1,f.current=$},[o]),m=S.useCallback(function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=arguments.length>2?arguments[2]:void 0,O=k.pulsate,z=O===void 0?!1:O,$=k.center,J=$===void 0?i||k.pulsate:$,Z=k.fakeElement,te=Z===void 0?!1:Z;if(_.type==="mousedown"&&h.current){h.current=!1;return}_.type==="touchstart"&&(h.current=!0);var ue=te?null:b.current,ce=ue?ue.getBoundingClientRect():{width:0,height:0,left:0,top:0},ye,ne,T;if(J||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)ye=Math.round(ce.width/2),ne=Math.round(ce.height/2);else{var F=_.touches?_.touches[0]:_,V=F.clientX,W=F.clientY;ye=Math.round(V-ce.left),ne=Math.round(W-ce.top)}if(J)T=Math.sqrt((2*Math.pow(ce.width,2)+Math.pow(ce.height,2))/3),T%2===0&&(T+=1);else{var P=Math.max(Math.abs((ue?ue.clientWidth:0)-ye),ye)*2+2,D=Math.max(Math.abs((ue?ue.clientHeight:0)-ne),ne)*2+2;T=Math.sqrt(Math.pow(P,2)+Math.pow(D,2))}_.touches?g.current===null&&(g.current=function(){v({pulsate:z,rippleX:ye,rippleY:ne,rippleSize:T,cb:I})},p.current=setTimeout(function(){g.current&&(g.current(),g.current=null)},GN)):v({pulsate:z,rippleX:ye,rippleY:ne,rippleSize:T,cb:I})},[i,v]),y=S.useCallback(function(){m({},{pulsate:!0})},[m]),x=S.useCallback(function(_,k){if(clearTimeout(p.current),_.type==="touchend"&&g.current){_.persist(),g.current(),g.current=null,p.current=setTimeout(function(){x(_,k)});return}g.current=null,c(function(I){return I.length>0?I.slice(1):I}),f.current=k},[]);return S.useImperativeHandle(n,function(){return{pulsate:y,start:m,stop:x}},[y,m,x]),S.createElement("span",B({className:Te(o.root,a),ref:b},s),S.createElement(WN,{component:null,exit:!0},u))});const QN=cn(qN,{flip:!1,name:"MuiTouchRipple"})(S.memo(JN));var YN={root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},XN=S.forwardRef(function(t,n){var r=t.action,i=t.buttonRef,o=t.centerRipple,a=o===void 0?!1:o,s=t.children,l=t.classes,u=t.className,c=t.component,d=c===void 0?"button":c,f=t.disabled,h=f===void 0?!1:f,p=t.disableRipple,g=p===void 0?!1:p,b=t.disableTouchRipple,v=b===void 0?!1:b,m=t.focusRipple,y=m===void 0?!1:m,x=t.focusVisibleClassName,_=t.onBlur,k=t.onClick,I=t.onFocus,O=t.onFocusVisible,z=t.onKeyDown,$=t.onKeyUp,J=t.onMouseDown,Z=t.onMouseLeave,te=t.onMouseUp,ue=t.onTouchEnd,ce=t.onTouchMove,ye=t.onTouchStart,ne=t.onDragLeave,T=t.tabIndex,F=T===void 0?0:T,V=t.TouchRippleProps,W=t.type,P=W===void 0?"button":W,D=Ue(t,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),j=S.useRef(null);function H(){return $i.findDOMNode(j.current)}var E=S.useRef(null),Y=S.useState(!1),M=Y[0],se=Y[1];h&&M&&se(!1);var ee=LN(),le=ee.isFocusVisible,G=ee.onBlurVisible,Me=ee.ref;S.useImperativeHandle(r,function(){return{focusVisible:function(){se(!0),j.current.focus()}}},[]),S.useEffect(function(){M&&y&&!g&&E.current.pulsate()},[g,y,M]);function be(L,X){var De=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v;return Gn(function(Le){X&&X(Le);var Nt=De;return!Nt&&E.current&&E.current[L](Le),!0})}var re=be("start",J),je=be("stop",ne),ae=be("stop",te),pe=be("stop",function(L){M&&L.preventDefault(),Z&&Z(L)}),pt=be("start",ye),Ae=be("stop",ue),Tt=be("stop",ce),Bt=be("stop",function(L){M&&(G(L),se(!1)),_&&_(L)},!1),et=Gn(function(L){j.current||(j.current=L.currentTarget),le(L)&&(se(!0),O&&O(L)),I&&I(L)}),q=function(){var X=H();return d&&d!=="button"&&!(X.tagName==="A"&&X.href)},we=S.useRef(!1),wr=Gn(function(L){y&&!we.current&&M&&E.current&&L.key===" "&&(we.current=!0,L.persist(),E.current.stop(L,function(){E.current.start(L)})),L.target===L.currentTarget&&q()&&L.key===" "&&L.preventDefault(),z&&z(L),L.target===L.currentTarget&&q()&&L.key==="Enter"&&!h&&(L.preventDefault(),k&&k(L))}),Sr=Gn(function(L){y&&L.key===" "&&E.current&&M&&!L.defaultPrevented&&(we.current=!1,L.persist(),E.current.stop(L,function(){E.current.pulsate(L)})),$&&$(L),k&&L.target===L.currentTarget&&q()&&L.key===" "&&!L.defaultPrevented&&k(L)}),Je=d;Je==="button"&&D.href&&(Je="a");var Ot={};Je==="button"?(Ot.type=P,Ot.disabled=h):((Je!=="a"||!D.href)&&(Ot.role="button"),Ot["aria-disabled"]=h);var so=Ls(i,n),Ka=Ls(Me,j),lo=Ls(so,Ka),Ga=S.useState(!1),Ou=Ga[0],uo=Ga[1];S.useEffect(function(){uo(!0)},[]);var de=Ou&&!g&&!h;return S.createElement(Je,B({className:Te(l.root,u,M&&[l.focusVisible,x],h&&l.disabled),onBlur:Bt,onClick:k,onFocus:et,onKeyDown:wr,onKeyUp:Sr,onMouseDown:re,onMouseLeave:pe,onMouseUp:ae,onDragLeave:je,onTouchEnd:Ae,onTouchMove:Tt,onTouchStart:pt,ref:lo,tabIndex:h?-1:F},Ot,D),s,de?S.createElement(QN,B({ref:E,center:a},V)):null)});const ya=cn(YN,{name:"MuiButtonBase"})(XN),vv=ei(S.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),yv=ei(S.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),wv=ei(S.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Sv=ei(S.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));var ZN=function(t){return{root:B({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:t.palette.text.primary}),page:{transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:t.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:t.palette.action.focus},"&$selected":{backgroundColor:t.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:it(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.palette.action.selected}},"&$disabled":{opacity:1,color:t.palette.action.disabled,backgroundColor:t.palette.action.selected}},"&$disabled":{opacity:t.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:t.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15),"& $icon":{fontSize:t.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:t.palette.primary.dark,"@media (hover: none)":{backgroundColor:t.palette.primary.main}},"&$disabled":{color:t.palette.action.disabled}}},textSecondary:{"&$selected":{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:t.palette.secondary.dark,"@media (hover: none)":{backgroundColor:t.palette.secondary.main}},"&$disabled":{color:t.palette.action.disabled}}},outlined:{border:"1px solid ".concat(t.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(t.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:t.palette.primary.main,border:"1px solid ".concat(it(t.palette.primary.main,.5)),backgroundColor:it(t.palette.primary.main,t.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:it(t.palette.primary.main,t.palette.action.activatedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:t.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:t.palette.secondary.main,border:"1px solid ".concat(it(t.palette.secondary.main,.5)),backgroundColor:it(t.palette.secondary.main,t.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:it(t.palette.secondary.main,t.palette.action.activatedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:t.palette.action.disabled}}},rounded:{borderRadius:t.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:t.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:t.typography.pxToRem(20),margin:"0 -8px"}}},eA=S.forwardRef(function(t,n){var r=t.classes,i=t.className,o=t.color,a=o===void 0?"standard":o,s=t.component,l=t.disabled,u=l===void 0?!1:l,c=t.page,d=t.selected,f=d===void 0?!1:d,h=t.shape,p=h===void 0?"round":h,g=t.size,b=g===void 0?"medium":g,v=t.type,m=v===void 0?"page":v,y=t.variant,x=y===void 0?"text":y,_=Ue(t,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),k=oS(),I=k.direction==="rtl"?{previous:Sv,next:wv,last:vv,first:yv}:{previous:wv,next:Sv,first:vv,last:yv},O=I[m];return m==="start-ellipsis"||m==="end-ellipsis"?S.createElement("div",{ref:n,className:Te(r.root,r.ellipsis,u&&r.disabled,b!=="medium"&&r["size".concat(mt(b))])},"…"):S.createElement(ya,B({ref:n,component:s,disabled:u,focusVisibleClassName:r.focusVisible,className:Te(r.root,r.page,r[x],r[p],i,a!=="standard"&&r["".concat(x).concat(mt(a))],u&&r.disabled,f&&r.selected,b!=="medium"&&r["size".concat(mt(b))])},_),m==="page"&&c,O?S.createElement(O,{className:r.icon}):null)});const tA=cn(ZN,{name:"MuiPaginationItem"})(eA);var nA={root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}};function rA(e,t,n){return e==="page"?"".concat(n?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var iA=S.forwardRef(function(t,n){t.boundaryCount;var r=t.classes,i=t.className,o=t.color,a=o===void 0?"standard":o;t.count,t.defaultPage,t.disabled;var s=t.getItemAriaLabel,l=s===void 0?rA:s;t.hideNextButton,t.hidePrevButton,t.onChange,t.page;var u=t.renderItem,c=u===void 0?function(x){return S.createElement(tA,x)}:u,d=t.shape,f=d===void 0?"round":d;t.showFirstButton,t.showLastButton,t.siblingCount;var h=t.size,p=h===void 0?"medium":h,g=t.variant,b=g===void 0?"text":g,v=Ue(t,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),m=zN(B({},t,{componentName:"Pagination"})),y=m.items;return S.createElement("nav",B({"aria-label":"pagination navigation",className:Te(r.root,i),ref:n},v),S.createElement("ul",{className:r.ul},y.map(function(x,_){return S.createElement("li",{key:_},c(B({},x,{color:a,"aria-label":l(x.type,x.page,x.selected),shape:f,size:p,variant:b})))})))});const oA=cn(nA,{name:"MuiPagination"})(iA),aA=dp({palette:{type:"dark"}}),sS=({setPage:e,numPages:t=50})=>{const n=r=>{e(r),window.scroll(0,0)};return w(sA,{children:w(rS,{theme:aA,children:w(oA,{count:t,onChange:r=>n(r.target.textContent),variant:"outlined",color:"primary"})})})},sA=lt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`,lA=ei(S.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));var uA=function(t){var n=t.palette.type==="light"?t.palette.grey[300]:t.palette.grey[700],r=it(t.palette.text.primary,.26);return{root:{fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:t.palette.getContrastText(n),backgroundColor:n,borderRadius:32/2,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:t.palette.type==="light"?t.palette.grey[700]:t.palette.grey[300],fontSize:t.typography.pxToRem(12)},"& $avatarColorPrimary":{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark},"& $avatarColorSecondary":{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:oi(n,.08)},"&:active":{boxShadow:t.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:oi(t.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:oi(t.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:oi(n,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:oi(t.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:oi(t.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat(t.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:it(t.palette.text.primary,t.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:it(t.palette.primary.main,t.palette.action.hoverOpacity)}},outlinedSecondary:{color:t.palette.secondary.main,border:"1px solid ".concat(t.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:it(t.palette.secondary.main,t.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:t.palette.type==="light"?t.palette.grey[700]:t.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:r,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:it(r,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:it(t.palette.primary.contrastText,.7),"&:hover, &:active":{color:t.palette.primary.contrastText}},deleteIconColorSecondary:{color:it(t.palette.secondary.contrastText,.7),"&:hover, &:active":{color:t.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:it(t.palette.primary.main,.7),"&:hover, &:active":{color:t.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:it(t.palette.secondary.main,.7),"&:hover, &:active":{color:t.palette.secondary.main}}}};function bv(e){return e.key==="Backspace"||e.key==="Delete"}var cA=S.forwardRef(function(t,n){var r=t.avatar,i=t.classes,o=t.className,a=t.clickable,s=t.color,l=s===void 0?"default":s,u=t.component,c=t.deleteIcon,d=t.disabled,f=d===void 0?!1:d,h=t.icon,p=t.label,g=t.onClick,b=t.onDelete,v=t.onKeyDown,m=t.onKeyUp,y=t.size,x=y===void 0?"medium":y,_=t.variant,k=_===void 0?"default":_,I=Ue(t,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),O=S.useRef(null),z=Ls(O,n),$=function(P){P.stopPropagation(),b&&b(P)},J=function(P){P.currentTarget===P.target&&bv(P)&&P.preventDefault(),v&&v(P)},Z=function(P){P.currentTarget===P.target&&(b&&bv(P)?b(P):P.key==="Escape"&&O.current&&O.current.blur()),m&&m(P)},te=a!==!1&&g?!0:a,ue=x==="small",ce=u||(te?ya:"div"),ye=ce===ya?{component:"div"}:{},ne=null;if(b){var T=Te(l!=="default"&&(k==="default"?i["deleteIconColor".concat(mt(l))]:i["deleteIconOutlinedColor".concat(mt(l))]),ue&&i.deleteIconSmall);ne=c&&S.isValidElement(c)?S.cloneElement(c,{className:Te(c.props.className,i.deleteIcon,T),onClick:$}):S.createElement(lA,{className:Te(i.deleteIcon,T),onClick:$})}var F=null;r&&S.isValidElement(r)&&(F=S.cloneElement(r,{className:Te(i.avatar,r.props.className,ue&&i.avatarSmall,l!=="default"&&i["avatarColor".concat(mt(l))])}));var V=null;return h&&S.isValidElement(h)&&(V=S.cloneElement(h,{className:Te(i.icon,h.props.className,ue&&i.iconSmall,l!=="default"&&i["iconColor".concat(mt(l))])})),S.createElement(ce,B({role:te||b?"button":void 0,className:Te(i.root,o,l!=="default"&&[i["color".concat(mt(l))],te&&i["clickableColor".concat(mt(l))],b&&i["deletableColor".concat(mt(l))]],k!=="default"&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[l]],f&&i.disabled,ue&&i.sizeSmall,te&&i.clickable,b&&i.deletable),"aria-disabled":f?!0:void 0,tabIndex:te||b?0:void 0,onClick:g,onKeyDown:J,onKeyUp:Z,ref:z},ye,I),F||V,S.createElement("span",{className:Te(i.label,ue&&i.labelSmall)},p),ne)});const xv=cn(uA,{name:"MuiChip"})(cA);var dA=function(t){var n;return{root:B({},t.typography.button,(n={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Mt(n,t.breakpoints.up("sm"),{padding:"6px 24px"}),Mt(n,"overflow","hidden"),Mt(n,"whiteSpace","normal"),Mt(n,"textAlign","center"),Mt(n,t.breakpoints.up("sm"),{minWidth:160}),n)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:t.palette.text.secondary,"&$selected":{color:t.palette.primary.main},"&$disabled":{color:t.palette.text.disabled}},textColorSecondary:{color:t.palette.text.secondary,"&$selected":{color:t.palette.secondary.main},"&$disabled":{color:t.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:t.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}},fA=S.forwardRef(function(t,n){var r=t.classes,i=t.className,o=t.disabled,a=o===void 0?!1:o,s=t.disableFocusRipple,l=s===void 0?!1:s,u=t.fullWidth,c=t.icon,d=t.indicator,f=t.label,h=t.onChange,p=t.onClick,g=t.onFocus,b=t.selected,v=t.selectionFollowsFocus,m=t.textColor,y=m===void 0?"inherit":m,x=t.value,_=t.wrapped,k=_===void 0?!1:_,I=Ue(t,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]),O=function(J){h&&h(J,x),p&&p(J)},z=function(J){v&&!b&&h&&h(J,x),g&&g(J)};return S.createElement(ya,B({focusRipple:!l,className:Te(r.root,r["textColor".concat(mt(y))],i,a&&r.disabled,b&&r.selected,f&&c&&r.labelIcon,u&&r.fullWidth,k&&r.wrapped),ref:n,role:"tab","aria-selected":b,disabled:a,onClick:O,onFocus:z,tabIndex:b?0:-1},I),S.createElement("span",{className:r.wrapper},c,f),d)});const _v=cn(dA,{name:"MuiTab"})(fA),hA=ei(S.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),pA=ei(S.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));var li;function lS(){if(li)return li;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),li="reverse",e.scrollLeft>0?li="default":(e.scrollLeft=1,e.scrollLeft===0&&(li="negative")),document.body.removeChild(e),li}function Ev(e,t){var n=e.scrollLeft;if(t!=="rtl")return n;var r=lS();switch(r){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}function mA(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function gA(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:function(){},o=r.ease,a=o===void 0?mA:o,s=r.duration,l=s===void 0?300:s,u=null,c=t[e],d=!1,f=function(){d=!0},h=function p(g){if(d){i(new Error("Animation cancelled"));return}u===null&&(u=g);var b=Math.min(1,(g-u)/l);if(t[e]=a(b)*(n-c)+c,b>=1){requestAnimationFrame(function(){i(null)});return}requestAnimationFrame(p)};return c===n?(i(new Error("Element already at target position")),f):(requestAnimationFrame(h),f)}var vA={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function yA(e){var t=e.onChange,n=Ue(e,["onChange"]),r=S.useRef(),i=S.useRef(null),o=function(){r.current=i.current.offsetHeight-i.current.clientHeight};return S.useEffect(function(){var a=kf(function(){var s=r.current;o(),s!==r.current&&t(r.current)});return window.addEventListener("resize",a),function(){a.clear(),window.removeEventListener("resize",a)}},[t]),S.useEffect(function(){o(),t(r.current)},[t]),S.createElement("div",B({style:vA,ref:i},n))}var wA=function(t){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},colorPrimary:{backgroundColor:t.palette.primary.main},colorSecondary:{backgroundColor:t.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}},SA=S.forwardRef(function(t,n){var r=t.classes,i=t.className,o=t.color,a=t.orientation,s=Ue(t,["classes","className","color","orientation"]);return S.createElement("span",B({className:Te(r.root,r["color".concat(mt(o))],i,a==="vertical"&&r.vertical),ref:n},s))});const bA=cn(wA,{name:"PrivateTabIndicator"})(SA);var xA={root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},_A=S.createElement(hA,{fontSize:"small"}),EA=S.createElement(pA,{fontSize:"small"}),kA=S.forwardRef(function(t,n){var r=t.classes,i=t.className,o=t.direction,a=t.orientation,s=t.disabled,l=Ue(t,["classes","className","direction","orientation","disabled"]);return S.createElement(ya,B({component:"div",className:Te(r.root,i,s&&r.disabled,a==="vertical"&&r.vertical),ref:n,role:null,tabIndex:null},l),o==="left"?_A:EA)});const CA=cn(xA,{name:"MuiTabScrollButton"})(kA);var RA=function(t){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Mt({},t.breakpoints.down("xs"),{display:"none"}),indicator:{}}},PA=S.forwardRef(function(t,n){var r=t["aria-label"],i=t["aria-labelledby"],o=t.action,a=t.centered,s=a===void 0?!1:a,l=t.children,u=t.classes,c=t.className,d=t.component,f=d===void 0?"div":d,h=t.indicatorColor,p=h===void 0?"secondary":h,g=t.onChange,b=t.orientation,v=b===void 0?"horizontal":b,m=t.ScrollButtonComponent,y=m===void 0?CA:m,x=t.scrollButtons,_=x===void 0?"auto":x,k=t.selectionFollowsFocus,I=t.TabIndicatorProps,O=I===void 0?{}:I,z=t.TabScrollButtonProps,$=t.textColor,J=$===void 0?"inherit":$,Z=t.value,te=t.variant,ue=te===void 0?"standard":te,ce=Ue(t,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),ye=oS(),ne=ue==="scrollable",T=ye.direction==="rtl",F=v==="vertical",V=F?"scrollTop":"scrollLeft",W=F?"top":"left",P=F?"bottom":"right",D=F?"clientHeight":"clientWidth",j=F?"height":"width",H=S.useState(!1),E=H[0],Y=H[1],M=S.useState({}),se=M[0],ee=M[1],le=S.useState({start:!1,end:!1}),G=le[0],Me=le[1],be=S.useState({overflow:"hidden",marginBottom:null}),re=be[0],je=be[1],ae=new Map,pe=S.useRef(null),pt=S.useRef(null),Ae=function(){var L=pe.current,X;if(L){var De=L.getBoundingClientRect();X={clientWidth:L.clientWidth,scrollLeft:L.scrollLeft,scrollTop:L.scrollTop,scrollLeftNormalized:Ev(L,ye.direction),scrollWidth:L.scrollWidth,top:De.top,bottom:De.bottom,left:De.left,right:De.right}}var Le;if(L&&Z!==!1){var Nt=pt.current.children;if(Nt.length>0){var ut=Nt[ae.get(Z)];Le=ut?ut.getBoundingClientRect():null}}return{tabsMeta:X,tabMeta:Le}},Tt=Gn(function(){var de,L=Ae(),X=L.tabsMeta,De=L.tabMeta,Le=0;if(De&&X)if(F)Le=De.top-X.top+X.scrollTop;else{var Nt=T?X.scrollLeftNormalized+X.clientWidth-X.scrollWidth:X.scrollLeft;Le=De.left-X.left+Nt}var ut=(de={},Mt(de,W,Le),Mt(de,j,De?De[j]:0),de);if(isNaN(se[W])||isNaN(se[j]))ee(ut);else{var ni=Math.abs(se[W]-ut[W]),ri=Math.abs(se[j]-ut[j]);(ni>=1||ri>=1)&&ee(ut)}}),Bt=function(L){gA(V,pe.current,L)},et=function(L){var X=pe.current[V];F?X+=L:(X+=L*(T?-1:1),X*=T&&lS()==="reverse"?-1:1),Bt(X)},q=function(){et(-pe.current[D])},we=function(){et(pe.current[D])},wr=S.useCallback(function(de){je({overflow:null,marginBottom:-de})},[]),Sr=function(){var L={};L.scrollbarSizeListener=ne?S.createElement(yA,{className:u.scrollable,onChange:wr}):null;var X=G.start||G.end,De=ne&&(_==="auto"&&X||_==="desktop"||_==="on");return L.scrollButtonStart=De?S.createElement(y,B({orientation:v,direction:T?"right":"left",onClick:q,disabled:!G.start,className:Te(u.scrollButtons,_!=="on"&&u.scrollButtonsDesktop)},z)):null,L.scrollButtonEnd=De?S.createElement(y,B({orientation:v,direction:T?"left":"right",onClick:we,disabled:!G.end,className:Te(u.scrollButtons,_!=="on"&&u.scrollButtonsDesktop)},z)):null,L},Je=Gn(function(){var de=Ae(),L=de.tabsMeta,X=de.tabMeta;if(!(!X||!L)){if(X[W]<L[W]){var De=L[V]+(X[W]-L[W]);Bt(De)}else if(X[P]>L[P]){var Le=L[V]+(X[P]-L[P]);Bt(Le)}}}),Ot=Gn(function(){if(ne&&_!=="off"){var de=pe.current,L=de.scrollTop,X=de.scrollHeight,De=de.clientHeight,Le=de.scrollWidth,Nt=de.clientWidth,ut,ni;if(F)ut=L>1,ni=L<X-De-1;else{var ri=Ev(pe.current,ye.direction);ut=T?ri<Le-Nt-1:ri>1,ni=T?ri>1:ri<Le-Nt-1}(ut!==G.start||ni!==G.end)&&Me({start:ut,end:ni})}});S.useEffect(function(){var de=kf(function(){Tt(),Ot()}),L=RN(pe.current);return L.addEventListener("resize",de),function(){de.clear(),L.removeEventListener("resize",de)}},[Tt,Ot]);var so=S.useCallback(kf(function(){Ot()}));S.useEffect(function(){return function(){so.clear()}},[so]),S.useEffect(function(){Y(!0)},[]),S.useEffect(function(){Tt(),Ot()}),S.useEffect(function(){Je()},[Je,se]),S.useImperativeHandle(o,function(){return{updateIndicator:Tt,updateScrollButtons:Ot}},[Tt,Ot]);var Ka=S.createElement(bA,B({className:u.indicator,orientation:v,color:p},O,{style:B({},se,O.style)})),lo=0,Ga=S.Children.map(l,function(de){if(!S.isValidElement(de))return null;var L=de.props.value===void 0?lo:de.props.value;ae.set(L,lo);var X=L===Z;return lo+=1,S.cloneElement(de,{fullWidth:ue==="fullWidth",indicator:X&&!E&&Ka,selected:X,selectionFollowsFocus:k,onChange:g,textColor:J,value:L})}),Ou=function(L){var X=L.target,De=X.getAttribute("role");if(De==="tab"){var Le=null,Nt=v!=="vertical"?"ArrowLeft":"ArrowUp",ut=v!=="vertical"?"ArrowRight":"ArrowDown";switch(v!=="vertical"&&ye.direction==="rtl"&&(Nt="ArrowRight",ut="ArrowLeft"),L.key){case Nt:Le=X.previousElementSibling||pt.current.lastChild;break;case ut:Le=X.nextElementSibling||pt.current.firstChild;break;case"Home":Le=pt.current.firstChild;break;case"End":Le=pt.current.lastChild;break}Le!==null&&(Le.focus(),L.preventDefault())}},uo=Sr();return S.createElement(f,B({className:Te(u.root,c,F&&u.vertical),ref:n},ce),uo.scrollButtonStart,uo.scrollbarSizeListener,S.createElement("div",{className:Te(u.scroller,ne?u.scrollable:u.fixed),style:re,ref:pe,onScroll:so},S.createElement("div",{"aria-label":r,"aria-labelledby":i,className:Te(u.flexContainer,F&&u.flexContainerVertical,s&&!ne&&u.centered),onKeyDown:Ou,ref:pt,role:"tablist"},Ga),E&&Ka),uo.scrollButtonEnd)});const IA=cn(RA,{name:"MuiTabs"})(PA),TA=({setPage:e,get_Url:t,selectedGenres:n,setSelectedGenres:r})=>{const[i,o]=S.useState([]),a=l=>{r([...n,l]),o(i.filter(u=>u.id!==l.id)),e(1)},s=l=>{r(n.filter(u=>u.id!==l.id)),o([...i,l]),e(1)};return S.useEffect(()=>{(async()=>{const u=await xn.get(t);return o(u.data.genres),()=>{o({})}})()},[t]),N(OA,{children:[i.map((l,u)=>w("div",{className:"main",children:w(xv,{label:l.name,style:{margin:2,flexDirection:"row-reverse"},size:"small",clickable:!0,onClick:()=>a(l)},l.id)},u)),n&&n.map(l=>w("div",{className:"main",children:w(xv,{label:l.name,style:{margin:2},size:"small",color:"primary",clickable:!0,onDelete:()=>s(l)},l.id)}))]})},OA=lt.div`
  padding-top: 6rem;
  border-radius: 0.4rem;
  width: 50%;
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 6px;
    height: 4px;
    display: none;
  }

  @media (max-width: 950px) {
    width: 100%;
    grid-template-columns: repeat(10, 1fr);
  }
`,NA=e=>e.length<1?"":e.map(n=>n.id).reduce((n,r)=>n+","+r),uS=({getUrl:e})=>{const[t,n]=S.useState([]),[r,i]=S.useState(1),[o,a]=S.useState(),[s,l]=S.useState([]),u="https://www.movienewz.com/img/films/poster-holder.jpg",c=NA(s);S.useEffect(()=>{(async()=>{const g=await xn.get(`${e}&page=${r}&with_genres=${c}`);n(g.data.results),a(g.data.total_pages)})()},[e,r,c]);function d(p,g){return p.length>g?p.substr(0,g-1)+"...":p}const f=Xr(),h=(p,g)=>{f(`/details/${p}/${g}`),window.scroll(0,0)};return N("div",{children:[w(TA,{get_Url:wn.getMovieGenre,setPage:i,selectedGenres:s,setSelectedGenres:l}),w(AA,{children:N("div",{className:"main  container",children:[!(t!=null&&t.length)&&w("h3",{children:"No movies available"}),w("div",{className:"main__data ",children:t.map((p,g)=>N("div",{className:"details",onClick:()=>h(p.first_air_date?"tv":"movie",p.id),children:[w("img",{src:p!=null&&p.poster_path?`${Cu}${p.poster_path}`:u,alt:""}),w("div",{className:"desc",children:w("p",{children:d(`${p.title||p.name}`,15)})}),w("p",{className:"date",children:p.first_air_date||p.release_date}),w("div",{className:"rate",children:w("span",{children:p.vote_average})})]},g))})]})}),o>1&&w(sS,{setPage:i,numPages:o})]})},AA=lt.div`
  min-height: 90vh;
  /* padding: 2rem 0; */

  .main {
    padding-top: 2rem;
    h3 {
      text-align: center;
    }
    &__data {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      @media (max-width: 699px) {
        gap: 0.5rem;
      }
      .details {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        position: relative;
        cursor: pointer;
        transition: var(--trans);
        &:hover {
          .desc {
            background-color: #414040;
          }
        }
        @media (max-width: 699px) {
          width: 160px;
        }
        img {
          width: 200px;
          object-fit: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          border-radius: 0.2rem;
          @media (max-width: 699px) {
            width: 160px;
          }
        }
        .desc {
          position: absolute;
          z-index: 999;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          height: 5vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0.5rem;
          /* background-color: #222121dd; */
          background-color: #000000b2;
          border-bottom-left-radius: 0.2rem;
          border-bottom-right-radius: 0.2rem;

          p {
            font-size: medium;
            @media (max-width: 699px) {
              font-size: smaller;
            }
          }
        }
        .date {
          font-size: small;
          font-weight: 900;
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
        }
        .rate {
          position: absolute;
          z-index: 999;
          top: 0.1rem;
          right: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            width: 40px;
            height: 20px;
            justify-content: center;
            align-items: center;
            background-color: green;

            display: flex;
            font-size: small;
          }
        }
      }
    }
  }
`,$A=({movie:e})=>{const t=Xr(),n="https://www.movienewz.com/img/films/poster-holder.jpg",r=(o,a)=>{t(`/details/${o}/${a}`),window.scroll(0,0)};function i(o,a){return o.length>a?o.substr(0,a-1)+"...":o}return w(MA,{children:N("div",{className:"main container",children:[!(e!=null&&e.length)&&w("h3",{children:"No movies available"}),w("div",{className:"main__data",children:e.map((o,a)=>N("div",{className:"details",onClick:()=>r(o.first_air_date?"tv":"movie",o.id),children:[w("img",{src:o!=null&&o.poster_path?`${Cu}${o.poster_path}`:n,alt:""}),w("div",{className:"desc",children:w("p",{children:i(`${o.title||o.name}`,15)})}),w("p",{className:"date",children:o.first_air_date||o.release_date}),w("div",{className:"rate",children:w("span",{children:o.vote_average})})]},a))})]})})},MA=lt.div`
  min-height: 90vh;

  .main {
    padding-top: 2rem;
    h3 {
      text-align: center;
    }
    &__data {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      @media (max-width: 699px) {
        gap: 0.4rem;
      }
      .details {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        position: relative;
        @media (max-width: 699px) {
          width: 160px;
        }
        img {
          width: 200px;
          object-fit: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          border-radius: 0.2rem;
          @media (max-width: 699px) {
            width: 160px;
          }
        }
        .desc {
          position: absolute;
          z-index: 999;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          height: 5vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0.5rem;
          background-color: #000000b2;
          border-bottom-left-radius: 0.2rem;
          border-bottom-right-radius: 0.2rem;

          p {
            font-size: medium;
            @media (max-width: 699px) {
              font-size: smaller;
            }
          }
        }
        .date {
          font-size: small;
          font-weight: 900;
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
        }
        .rate {
          position: absolute;
          z-index: 999;
          top: 0.1rem;
          right: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            width: 40px;
            height: 20px;
            justify-content: center;
            align-items: center;
            background-color: green;

            display: flex;
            font-size: small;
          }
        }
      }
    }
  }
`;var cS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kv=ie.createContext&&ie.createContext(cS),ur=globalThis&&globalThis.__assign||function(){return ur=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ur.apply(this,arguments)},DA=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function dS(e){return e&&e.map(function(t,n){return ie.createElement(t.tag,ur({key:n},t.attr),dS(t.child))})}function ti(e){return function(t){return ie.createElement(LA,ur({attr:ur({},e.attr)},t),dS(e.child))}}function LA(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=DA(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ie.createElement("svg",ur({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:ur(ur({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ie.createElement("title",null,o),e.children)};return kv!==void 0?ie.createElement(kv.Consumer,null,function(n){return t(n)}):t(cS)}function fS(e){return ti({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"defs",attr:{},child:[{tag:"clipPath",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"}}]}]},{tag:"path",attr:{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}},{tag:"path",attr:{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"}}]})(e)}function hS(e){return ti({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(e)}function pS(e){return ti({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const zA=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!1),i=S.useRef(null),o=S.useRef(null);return w(jA,{children:e?w(mS,{}):N("div",{className:"form",children:[w("h2",{children:"Create account"}),N("form",{action:"",children:[N("div",{className:"input",children:[w("label",{htmlFor:"",children:"Email (personal or work)"}),w("input",{type:"email",placeholder:"example@gmail.com",required:!0,ref:i}),w("label",{htmlFor:"",children:"password"}),N("div",{className:"pass",children:[w("input",{type:n===!1?"password":"text",placeholder:"Enter password",ref:o,required:!0}),w("span",{onClick:()=>{r(!n)},className:"eye",children:n===!1?w(fS,{}):w(hS,{})}),w("input",{type:n===!1?"password":"text",placeholder:"Confirm password",ref:o,required:!0})]})]}),w("button",{type:"submit",style:{marginTop:" 1rem"},onClick:c=>{c.preventDefault(),tR(Kr,i.current.value,o.current.value).then(()=>{}).catch(()=>{})},children:"Sign up"})]}),w("p",{className:"or",children:" or"}),N("button",{onClick:()=>{DR(Kr,tw).then(()=>{}).catch(()=>{})},children:[w(pS,{})," ",w("span",{children:" Sign in with Google "})]}),N("div",{className:"up",children:[w("p",{children:w("span",{children:" Have an account?"})}),w("p",{className:"link",onClick:()=>{t(!0)},children:"Sign In"})]})]})})},jA=lt.div`
  .form {
    background-color: var(--bg);

    padding: 2rem 0.8rem;
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 900;
      @media (max-width: 699px) {
        font-size: 1.5rem;
      }
    }
    p {
      text-align: center;
      margin: 0.5rem 0;
    }
    .link {
      text-decoration: underline;
      cursor: pointer;
      font-size: smaller;
    }
    button {
      width: 100%;
      padding: 10px;
      font-size: smaller;
      display: flex;
      justify-content: center;
      text-align: center;
      gap: 1rem;
      font-weight: 700;
      border: none;
      cursor: pointer;
      background-color: var(--btn);
      color: var(--text);
      transition: var(--trans);
      &:hover {
        box-shadow: var(--btn-s);
      }
      svg {
        font-size: 1.5rem;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 20vw;
      @media (max-width: 999px) {
        width: 85vw;
        @media (min-width: 700px) {
          width: 50vw;
        }
      }
      .input {
        display: flex;
        flex-direction: column;
        label {
          font-size: smaller;
          font-weight: 700;
          margin-left: 0.2rem;
        }
        input {
          /* width: 100%; */
          padding: 10px;
          margin-bottom: 1rem;
          font-size: medium;
          background-color: transparent;
          border: 2px solid #313131;
          color: var(--text);
          border-radius: none;
          @media (max-width: 699px) {
            font-size: medium;
          }
        }
        .pass {
          position: relative;
          input {
            width: 100%;
          }
          span {
            position: absolute;
            content: "";
            top: 0.6rem;
            right: 1rem;
            font-size: 1.2rem;
            color: var(--bg);
            cursor: pointer;
          }
        }
      }
    }
  }
`,FA=()=>{const[e,t]=S.useState("");return w(UA,{children:N("div",{className:"form",children:[w("h2",{children:"Reset password"}),N("form",{action:"",children:[w("input",{type:"email",placeholder:"example@gmail.com",onChange:r=>t(r.currentTarget.value)}),w("button",{type:"submit",onClick:async r=>{r.preventDefault(),await eR(Kr,e),console.log("Password reset email sent")},children:"Reset"})]})]})})},UA=lt.div`
  .form {
    background-color: var(--bg);
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 900;
      @media (max-width: 699px) {
        font-size: 1.5rem;
      }
    }
    form {
      input {
        padding: 10px;
        margin-bottom: 1rem;
        font-size: medium;
        background-color: transparent;
        border: 2px solid #313131;
        color: var(--text);
        border-radius: none;
        @media (max-width: 699px) {
          font-size: medium;
        }
      }
    }
  }
`,mS=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!1),[i,o]=S.useState(!1),a=S.useRef(),s=S.useRef();return w(BA,{children:e?w(zA,{}):i?w(FA,{}):N("div",{className:"form",children:[w("h2",{children:"Sign In"}),N("form",{action:"",children:[N("div",{className:"input",children:[w("label",{htmlFor:"",children:"Email (personal or work)"}),w("input",{type:"email",placeholder:"example@gmail.com",required:!0,ref:a}),w("label",{htmlFor:"",children:"password"}),N("div",{className:"pass",children:[w("input",{type:n===!1?"password":"text",placeholder:"Enter password",className:"pass",ref:s,required:!0}),w("span",{onClick:()=>{r(!n)},className:"eye",children:n===!1?w(fS,{}):w(hS,{})})]})]}),w("button",{type:"submit",style:{marginTop:" 1rem"},onClick:f=>{f.preventDefault(),nR(Kr,a.current.value,s.current.value).then(()=>{}).catch(()=>{})},children:"Login"})]}),w("p",{className:"or",children:" or"}),N("button",{onClick:()=>{TR(Kr,tw).then(()=>{}).catch(()=>{})},children:[w(pS,{})," ",w("span",{children:" Sign in with Google"})]}),N("div",{className:"up",children:[w("p",{children:w("span",{children:"Dont have an account !"})}),N("div",{className:"btn",children:[w("p",{className:"link",onClick:()=>{t(!n)},children:"create one?"}),w("p",{onClick:()=>{o(!0),t(!1)},children:"Forgot password?"})]})]})]})})},BA=lt.div`
  .form {
    background-color: var(--bg);
    padding: 2rem 0.8rem;
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 900;
      @media (max-width: 699px) {
        font-size: 1.5rem;
      }
    }
    p {
      text-align: center;
      margin: 0.5rem 0;
    }

    .btn {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      p {
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
        font-size: smaller;
      }
    }
    button {
      width: 100%;
      padding: 10px;
      font-size: smaller;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      font-weight: 700;
      border: none;

      background-color: var(--btn);
      color: var(--text);
      transition: var(--trans);

      &:hover {
        box-shadow: var(--btn-s);
      }
      svg {
        font-size: 1.5rem;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 20vw;
      @media (max-width: 999px) {
        /* width: 100vw; */
        width: 85vw;
        @media (min-width: 700px) {
          width: 50vw;
        }
      }
      .input {
        display: flex;
        flex-direction: column;
        label {
          font-size: smaller;
          font-weight: 700;
          margin-left: 0.2rem;
        }
        input {
          /* width: 100%; */
          padding: 10px;
          margin-bottom: 1rem;
          font-size: medium;
          /* background-color: var(--text); */
          background-color: transparent;
          border: 2px solid #313131;
          color: var(--text);
          border-radius: none;
          @media (max-width: 699px) {
            font-size: medium;
          }
        }
        .pass {
          position: relative;
          input {
            width: 100%;
          }
          span {
            position: absolute;
            content: "";
            top: 0.6rem;
            right: 1rem;
            font-size: 1.2rem;
            color: var(--bg);
            cursor: pointer;
          }
        }
      }
    }
  }
`,VA="/movie-clone/assets/feature-1-e44d7e30.png",WA=()=>{const[e,t]=S.useState([]);return S.useEffect(()=>{(async()=>{const r=await xn.get(wn.getTrending);t(r.data.results[Math.floor(Math.random()*r.data.results.length-1)])})()},[]),w(HA,{children:N("div",{className:"desc",children:[N("div",{className:"desc__detail container",children:[N("div",{className:"details",children:[w("h1",{children:"Enjoy on your Tv"}),w("p",{children:"Watch on smart Tvs,PlayStore,Xbox,Chromecast and more."})]}),w("img",{src:VA,alt:""})]}),N("div",{className:"desc__detail container",children:[w("img",{src:`${lp}${e==null?void 0:e.backdrop_path}`,alt:""}),N("div",{className:"details",children:[w("h4",{children:e.media_type==="tv"?"Series":"Movie"}),w("h2",{children:e.title||e.name}),w("h1",{children:"Watch everywhere."}),w("p",{children:"Stream unlimited movie and Tv show traiker on your phone,tablet,laptop and tv."})]})]}),N("div",{className:"main container",children:[w("h1",{children:"Frequently Asked Questions"}),N("ul",{children:[N("div",{className:"data",children:[w("input",{type:"radio",name:"main",id:"first"}),w("label",{htmlFor:"first",children:"What is s-trailer?"}),w("div",{className:"content",children:w("p",{children:"S-Trailer is a popular movie streaming site that allows users to watch a wide variety of films, including popular releases and classic movies. With a user-friendly interface and a large selection of genres, S-Trailer makes it easy for users to find and enjoy their favorite films. The site also features high-quality video and sound, ensuring a top-notch viewing experience. Whether you're a film enthusiast or just looking for a fun way to spend an evening, S-Trailer is a great choice for movie streaming."})})]}),N("div",{className:"data",children:[w("input",{type:"radio",name:"main",id:"second"}),w("label",{htmlFor:"second",children:"What can I watch in s-trailer?"}),w("div",{className:"content",children:w("p",{children:"S-Trailer offers a wide variety of films to choose from, including popular releases, classic movies, and independent films. Users can browse through different genres, such as action, comedy, drama, horror, and more, to find films that match their interests. S-Trailer also features a selection of TV shows and documentaries for users to watch. Some of the popular films that can be found on S-Trailer include The Godfather, The Shawshank Redemption, Pulp Fiction, and The Dark Knight. The site is constantly updating its selection, so there is always something new to discover."})})]}),N("div",{className:"data",children:[w("input",{type:"radio",name:"main",id:"third"}),w("label",{htmlFor:"third",children:"How does it work?"}),w("div",{className:"content",children:w("p",{children:"To use S-Trailer, users must first create an account and choose a subscription plan. Once the account is set up, users can browse the site's selection of movies and select a film to watch. The movie will then begin streaming on the user's device, allowing them to watch it in high-definition with no interruptions. Users can also create playlists of their favorite movies and TV shows to easily access them in the future. S-Trailer also offers recommendations based on a user's viewing history to help them discover new films to enjoy."})})]}),N("div",{className:"data",children:[w("input",{type:"radio",name:"main",id:"fourth"}),w("label",{htmlFor:"fourth",children:"How can I cancle?"}),N("div",{className:"content",children:[w("p",{children:"To cancel your S-Trailer subscription, you can follow these steps:"}),N("p",{children:[w("span",{children:"1: "}),'Log into your S-Trailer account and go to the "Account" section.']}),N("p",{children:[w("span",{children:"2: "}),'Scroll down and click on the "Cancel Membership" button.']}),N("p",{children:[w("span",{children:"3: "}),"Follow the prompts to confirm your cancellation."]}),w("p",{children:"If you are unable to cancel your subscription online, you can also contact S-Trailer's customer service team for assistance. They will be able to help you cancel your account and answer any questions you may have. Please note that you will continue to have access to the service until the end of your current billing period."})]})]}),N("div",{className:"data",children:[w("input",{type:"radio",name:"main",id:"fifth"}),w("label",{htmlFor:"fifth",children:"How to be come a member?"}),N("div",{className:"content",children:[w("p",{children:"To become a member of S-Trailer, follow these steps:"}),N("p",{children:[w("span",{children:"1: "}),'Go to the S-Trailer website and click on the "Sign Up" button in the top right corner of the page.']}),N("p",{children:[w("span",{children:"2: "}),"Enter your email address and create a password."]}),N("p",{children:[w("span",{children:"3: "}),"Choose a subscription plan that best fits your needs."]}),N("p",{children:[w("span",{children:"4: "}),"Enter your payment information to complete the process."]}),w("p",{children:"Once you have completed these steps, you will be a member of S-Trailer and can begin accessing the site's wide selection of movies and TV shows. You will also be able to use features such as creating playlists and receiving recommendations based on your viewing history."})]})]})]})]})]})})},HA=lt.div`
  .main {
    margin: 60px auto;
    width: 100%;
    max-width: 750px;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      margin-bottom: 2rem;
      @media (max-width: 699px) {
        font-size: x-large;
      }
    }
    ul {
      width: 100%;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      gap: 0.5rem;
      .data {
        display: flex;
        flex-direction: column;
        text-align: center;
        label {
          display: flex;
          align-items: center;
          padding: 15px;
          font-size: 1rem;
          background-color: #303030;
          margin-bottom: 2px;
          cursor: pointer;
          position: relative;
          &::after {
            content: "+";
            position: absolute;
            right: 20px;
            font-size: 1.5rem;
            font-weight: 900;
          }
        }
        input[type="radio"] {
          display: none;
        }
        .content {
          background-color: #303030;
          text-align: left;
          padding: 0 15px;
          max-height: 0;
          overflow: hidden;
          p {
            margin: 0.2rem 0;
          }
          span {
            color: #fff;
            font-size: 1.1rem;
            font-weight: 500;
          }
        }
      }
    }
    ul input[type="radio"]:checked + label + .content {
      padding: 20px 15px;
      max-height: 600px;
    }
  }
  .desc {
    &__detail {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 4px solid #313131;

      padding-bottom: 50px;
      padding-top: 50px;
      gap: 3rem;

      img {
        width: 600px;

        object-fit: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      @media (max-width: 999px) {
        flex-direction: column;
        img {
          width: 350px;
          object-fit: contain;
          background-position: center;
        }
        @media (min-width: 700px) {
          img {
            width: 600px;
          }
        }
      }

      .details {
        h2 {
          color: var(--btn);
        }
        @media (max-width: 699px) {
          h2 {
            font-size: larger;
          }
          h1 {
            font-size: x-large;
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;function KA(e){return ti({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function GA(e){return ti({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function gS(e){return ti({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function vS(e){return ti({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"}}]})(e)}const qA=[{name:"Home",link:"/"},{name:"Movies",link:"/movie"},{name:"Series",link:"/tv"}],oo=()=>{const[e,t]=S.useState(!1),n=Xr(),r=()=>{n("/profile"),window.scroll(0,0)};return window.onscroll=()=>(t(window.pageYOffset!==0),()=>window.onscroll=null),w(JA,{children:N("div",{className:`navbar ${e?"scroll":""}`,children:[w("div",{className:"logo",children:N(Tr,{to:"/",children:[w("h1",{children:"S"}),w("h4",{children:"Trailers"})]})}),w("ul",{children:qA.map((i,o)=>w("li",{children:w(GE,{to:i.link,exact:!0,onClick:()=>window.scroll(0,0),children:i.name})},o))}),N("div",{className:"main",children:[w(Tr,{to:"/search",children:w(gS,{})}),w("div",{className:"profile",onClick:r,children:w(vS,{})})]})]})})},JA=lt.div`
  .scroll {
    background-color: #141414dd;
    width: 100%;
    animation: load 1s alternate;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    position: fixed;
    z-index: 9999;
    @media (max-width: 699px) {
      padding: 1.2rem;
      .logo {
        display: none;
      }
    }
    @media (min-width: 700px) {
      padding: 0 10rem;
      @media (max-width: 999px) {
        padding: 0 6rem;
      }
    }
    .logo {
      a {
        color: #b40202;
        margin-bottom: 1rem;
        @media (max-width: 699px) {
          text-align: center;
        }
        h1 {
          font-weight: 900;
          font-size: 2.5rem;
          margin-left: 1rem;
          @media (max-width: 699px) {
            margin-left: 0;
          }
        }
        h4 {
          margin-top: -0.9rem;
        }
      }
    }
    .main {
      display: flex;
      gap: 2rem;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 1.5rem;
        color: var(--text);
        cursor: pointer;
        transition: var(--trans);
        &:hover {
          color: var(--btn);
        }
        @media (max-width: 699px) {
          font-size: 1.3rem;
        }
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      li {
        a {
          color: var(--text);
          font-weight: 500;
          cursor: pointer;
          transition: var(--trans);
          &:hover {
            color: #b40202;
          }
          @media (max-width: 699px) {
            font-size: smaller;
          }
        }
        .active {
          color: #b40202;
        }
      }
    }
  }
  @keyframes load {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`,ao=()=>w(QA,{children:N("div",{className:"footer",children:[N("div",{className:"main",children:[N("div",{className:"left",children:[N("div",{className:"logo",children:[w("h1",{children:"S"}),w("h4",{children:"Trailers"})]}),w("p",{children:"Welcome to home of Trailers."})]}),N("div",{className:"right",children:[N("ul",{className:"links",children:[w("li",{children:w(Tr,{to:"/search",onClick:()=>window.scroll(0,0),children:"Search"})}),w("li",{children:w(Tr,{to:"/",onClick:()=>window.scroll(0,0),children:"Home"})}),w("li",{children:w(Tr,{to:"/movie",onClick:()=>window.scroll(0,0),children:"Movies"})}),w("li",{children:w(Tr,{to:"/tv",onClick:()=>window.scroll(0,0),children:"Series"})})]}),N("div",{className:"info",children:[w("h2",{children:"Get in touch "}),N("div",{className:"all",children:[N("div",{className:"social",children:[w("a",{href:"https://www.linkedin.com/in/samson-njuguna-896a02243/",target:"_blank",rel:"noreferrer",children:w(GA,{})}),w("a",{href:"https://github.com/sam-njuguna",target:"_blank",rel:"noreferrer",children:w(KA,{})})]}),w("div",{className:"email",children:w("p",{children:"sam.x.njuguna@gmail.com"})})]})]})]})]}),N("p",{className:"copy",children:["© 2022 All Rights Reserved.Design and Created by",w("span",{children:" Samson Njuguna"})," ."," "]})]})}),QA=lt.div`
  background-color: #050505;
  margin-top: 5rem;
  font-size: 0.9rem;
  padding: 1rem;
  .copy {
    margin-top: 0.5rem;
    padding: 0.5rem;
    text-align: center;
    border-top: 1px solid #464545;
    font-size: small;
    span {
      color: #b40202;
    }
  }
  .footer {
    width: 85%;
    margin: 0 auto;
    @media (max-width: 699px) {
      width: 95%;
      margin: 0 auto;
    }
    .main {
      display: flex;
      align-items: center;

      justify-content: space-between;
      @media (max-width: 699px) {
        flex-direction: column;
      }
      .left {
        .logo {
          color: #b40202;
          margin-bottom: 1rem;
          @media (max-width: 699px) {
            text-align: center;
          }
          h1 {
            font-weight: 900;
            font-size: 2.5rem;
            margin-left: 1rem;
            @media (max-width: 699px) {
              margin-left: 0;
            }
          }
          h4 {
            margin-top: -0.9rem;
          }
        }
        p {
          @media (max-width: 699px) {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;
        @media (max-width: 699px) {
          gap: 2rem;
        }
        ul {
          margin-top: 1.5rem;
          li {
            margin-bottom: 0.5rem;
          }
          a {
            color: white;
            font-weight: 600;
            font-size: smaller;
            &:hover {
              color: #b40202;
              transition: 0.5s ease;
            }
          }
        }
        .info {
          h2 {
            font-size: 1.2rem;
          }
          .all {
            .social {
              display: flex;
              gap: 1rem;
              margin-top: 1rem;
              a {
                color: #fff;
                margin-bottom: 0.5rem;
                width: 50px;
                height: 50px;
                background-color: var(--bg);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;

                svg {
                  font-size: 25px;
                }
                &:hover {
                  color: var(--btn);
                  transition: 0.5s ease;
                }
              }
            }
            .email {
              cursor: pointer;
              &:hover {
                color: #b40202;
                transition: 0.5s ease;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`,YA=()=>N("div",{children:[w(oo,{}),w(DT,{}),w(ps,{title:"Trending Movies",getUrl:wn.getUpcoming,link:"/movie"}),w(ps,{title:"Popular Movies",getUrl:wn.getPopularMovies,link:"/movie"}),w(ps,{title:"On Air  Series",getUrl:wn.getOnAir,link:"/tv"}),w(ps,{title:"Popular Series",getUrl:wn.getPopularTv,link:"/tv"}),w(ao,{})]}),XA="/movie-clone/assets/header-img-ee5b00d8.png",ZA=()=>{const[e,t]=S.useState(!1),n=()=>{t(!e)};return N(Ol,{children:[N(e4,{children:[w("img",{src:XA,alt:""}),N("div",{className:"main ",children:[N("div",{className:"home",children:[N("div",{className:"logo",children:[w("h1",{children:"S"}),w("h4",{children:"Trailers"})]}),w("button",{className:"btn login-btn",onClick:n,children:"Sign In"})]}),w("div",{className:"login",children:e?w(mS,{}):N("div",{className:"details",children:[w("h1",{children:"Unlimited Trailer of Movies,Tv Series and more."}),w("h3",{children:"Watch anywhere,cancel any time."}),w("h4",{children:"Ready to watch? create or restart your membership"}),w("div",{className:"l-input",children:N("form",{children:[w("input",{type:"email",placeholder:"Email Address"}),w("button",{className:"l-btn btn",onClick:n,children:"Get Started"})]})})]})})]})]}),w(WA,{}),w(ao,{})]})},e4=lt.div`
  img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;

    min-height: 105vh;
    position: relative;
    filter: brightness(20%);
    position: relative;
    /* @media (max-width: 699px) {
      height: 120vh;
    } */
  }
  .main {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    .home {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 1rem;
      .logo {
        color: #b40202;
        @media (max-width: 699px) {
          text-align: center;
        }
        h1 {
          font-weight: 900;
          font-size: 2.5rem;
          margin-left: 1rem;
          @media (max-width: 699px) {
            margin-left: 0;
          }
        }
        h4 {
          margin-top: -0.9rem;
        }
      }
      button {
        width: max-content;
        padding: 10px;
        font-size: medium;
        font-weight: 700;
        border: none;
        background-color: var(--btn);
        color: var(--text);
        transition: var(--trans);
        &:hover {
          box-shadow: var(--btn-s);
        }
        @media (max-width: 699px) {
          padding: 10px;
          font-size: small;
        }
      }

      @media (min-width: 700px) {
        padding: 1rem 6rem;
      }
    }
    .login {
      padding-top: 3rem;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
      .details {
        text-align: center;
        margin: 1rem;
        h1 {
          @media (max-width: 699px) {
            font-size: x-large;
          }
        }
        h3 {
          @media (max-width: 699px) {
            font-size: smaller;
          }
        }
        form {
          width: 100%;
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            padding: 10px;
            border: none;
            font-size: 1rem;
            @media (max-width: 699px) {
              padding: 8px;
            }
          }
          p {
            margin-left: 0.5rem;
          }

          button {
            width: max-content;
            padding: 10px;
            font-size: medium;
            align-items: center;
            font-weight: 700;
            border: none;
            background-color: var(--btn);
            color: var(--text);
            transition: var(--trans);
            &:hover {
              box-shadow: var(--btn-s);
            }

            @media (max-width: 699px) {
              padding: 10px;
              font-size: small;
            }
          }
        }
      }
    }
  }
`,t4=()=>N("div",{children:[w(oo,{}),w(uS,{getUrl:wn.getDiscoverMovie}),w(ao,{})]}),n4=()=>{const[e,t]=S.useState(),[n,r]=S.useState(),[i,o]=S.useState([]),a=S.useRef(null),s=`${lp}${e==null?void 0:e.backdrop_path}`,l="https://www.movienewz.com/img/films/poster-holder.jpg",u=TE();return S.useEffect(()=>{(async()=>{const d=await xn.get(`/${u.type}/${u.id}?api_key=${bt}`);t(d.data)})()},[u.type,u.id]),S.useEffect(()=>{(async()=>{const d=await xn.get(`/${u.type}/${u.id}/credits?api_key=${bt}`);o(d.data.cast.slice(0,20))})()},[u.type,u.id]),S.useEffect(()=>{(async()=>{const d=await xn.get(`/${u.type}/${u.id}/videos?api_key=${bt}`);r(d.data.results.slice(0,3))})()},[u.type,u.id]),N(Ol,{children:[w(oo,{}),w(r4,{children:N("div",{className:"main",children:[N("div",{className:"detail",children:[N("div",{className:"top",children:[w("div",{className:"bg",style:{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:`url(${s})`}}),w("div",{className:"footer"})]}),w("div",{className:"info",children:N("div",{className:"container ",children:[w("div",{className:"header",children:w("img",{src:`${MT}${e==null?void 0:e.poster_path}`,alt:""})}),N("div",{className:"desc",children:[w("h1",{className:"title",children:(e==null?void 0:e.name)||(e==null?void 0:e.title)}),w("h4",{className:"date",children:(e==null?void 0:e.first_air_date)||(e==null?void 0:e.release_date)}),w("p",{className:"genre",children:(e==null?void 0:e.genres)&&(e==null?void 0:e.genres.slice(0,8).map((c,d)=>w("span",{children:c==null?void 0:c.name},d)))}),w("div",{className:"over",children:w("p",{children:e==null?void 0:e.overview})}),w("div",{className:"season",children:(e==null?void 0:e.seasons)&&(e==null?void 0:e.seasons.map((c,d)=>N("div",{className:"sea",children:[w("p",{children:c==null?void 0:c.name}),w("p",{children:c==null?void 0:c.air_date})]},d)))}),N("div",{className:"casts",children:[w("h3",{style:{marginTop:"1rem"},children:"Casts"}),w("div",{className:"casts__all",children:i&&i.map((c,d)=>N("div",{className:"casts__all__cast",children:[w("img",{src:c!=null&&c.profile_path?`${Cu}${c.profile_path}`:l,alt:""}),w("span",{children:c==null?void 0:c.name},d)]}))})]})]})]})})]}),N("div",{className:" container videos",children:[w("h1",{children:"Trailers"}),n&&n.map((c,d)=>N("div",{className:"video",children:[w("div",{className:"title",children:w("h3",{children:c.name})}),w("iframe",{src:`https://www.youtube.com/embed/${c.key}`,ref:a,frameborder:"0",width:"100%",margin:"0 auto",title:"video"})]},d))]})]})})]})},r4=lt.div`
  .main {
    display: flex;
    flex-direction: column;

    @media (max-width: 699px) {
      gap: 4rem;
    }
  }
  .detail {
    .top {
      position: relative;
      .bg {
        min-height: 100vh;
        object-fit: contain;
        position: relative;
        background-repeat: no-repeat;
        filter: brightness(30%);
        position: relative;
      }
      .footer {
        height: 10rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(
          180deg,
          transparent,
          rgba(15, 15, 15, 0.626),
          #131313
        );
        /* background-color: red; */
      }
    }
    .info {
      position: absolute;
      top: 0;
      padding-top: 2rem;

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        width: 80%;
        margin: 0 auto;
        @media (max-width: 699px) {
          flex-direction: column;
          gap: 0;
          .header {
            display: none;
          }
        }
        .desc {
          h1 {
            @media (max-width: 699px) {
              font-size: x-large;
            }
          }
          h4 {
            font-size: smaller;
            text-decoration: underline;
          }
          .genre {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            gap: 0.5rem;
            margin-top: 1rem;
            span {
              background-color: var(--bg);
              margin-bottom: 1rem;
              width: max-content;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              padding: 0.4rem 0.6rem;
              border-radius: 20px;
              font-size: smaller;
              font-weight: 800;
            }
          }
          .season {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            gap: 0.5rem;
            .sea {
              background-color: red;
              margin-top: 1rem;
              width: 90px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              p {
                font-size: smaller;
                font-weight: 600;
              }
            }
          }
          .casts {
            overflow: hidden;
            margin-top: 1rem;

            &__all {
              display: flex;
              overflow-y: hidden;
              overflow-x: scroll;
              scroll-behavior: smooth;
              margin-bottom: 1rem;
              gap: 0.5rem;
              padding-bottom: 1rem;
              width: 50vw;
              margin-top: 0.5rem;
              ::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 699px) {
                width: 96vw;
              }
              &__cast {
                display: flex;
                flex-direction: column;
                span {
                  text-align: center;
                  font-size: smaller;
                  font-weight: 600;
                }
                img {
                  height: 160px;
                  object-fit: contain;
                  @media (max-width: 699px) {
                    height: 130px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .videos {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 1rem;
    h1 {
      text-align: center;
      margin-bottom: 0.9rem;
      text-decoration: underline;
    }
    @media (max-width: 699px) {
      width: 98%;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
    iframe {
      height: 500px;
      object-fit: contain;
      background-position: center;
      background-size: cover;
      @media (max-width: 699px) {
        height: 400px;
      }
    }
  }
`,i4=[{quality:"4k + HDR",name:"Premium"},{quality:"1080p",name:"Basic"},{quality:"720p",name:"Standard"}],o4=()=>{const e=jy(c1),t=Xr();return N(Ol,{children:[w(oo,{}),w(a4,{children:w("div",{className:"profile container",children:N("div",{className:"all",children:[w("h2",{children:"Edit Profile"}),N("div",{className:"info",children:[w("div",{className:"info__icon",children:w(vS,{})}),N("div",{className:"info__details",children:[w("h4",{children:e.email}),N("div",{className:"plans",children:[w("h3",{children:"Plans"}),w("div",{className:"screen-plan",children:i4.map((n,r)=>N("div",{className:"info-plan",children:[N("div",{className:"info-detail",children:[w("h5",{children:n.name}),w("p",{children:n.quality})]}),w("button",{children:"Subscribe"})]},r))}),w("button",{onClick:()=>aR(Kr,t("/")),children:"Sign Out"})]})]})]})]})})}),w(ao,{})]})},a4=lt.div`
  .profile {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    margin-left: -1rem;
    .all {
      display: flex;
      flex-direction: column;
      h2 {
        border-bottom: 2px solid #313131;
        width: 100%;
        margin-bottom: 0.6rem;
      }
      .info {
        display: flex;
        justify-content: space-between;
        gap: 0.9rem;
        width: 30vw;
        border-bottom: 2px solid #313131;
        width: 100%;
        padding-bottom: 0.9rem;

        @media (max-width: 699px) {
          width: 70vw;
        }
        &__icon {
          font-size: 2rem;
        }
        &__details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          h4 {
            background-color: #313131;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0.5rem;
          }
          button {
            width: 100%;
            padding: 10px;
            font-size: medium;
            display: flex;
            justify-content: center;
            gap: 1rem;
            font-weight: 700;
            border: none;
            margin-top: 2rem;
            background-color: var(--btn);
            color: var(--text);
            transition: var(--trans);
            &:hover {
              box-shadow: var(--btn-s);
            }
          }
          .plans {
            display: flex;
            flex-direction: column;
            margin-top: 0.5rem;
            h3 {
              text-decoration: underline;
              font-size: medium;
              font-weight: 800;
              margin-bottom: 0.5rem;
            }
            .screen-plan {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              .info-plan {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 30vw;

                @media (max-width: 699px) {
                  width: 70vw;
                }
                h5 {
                  font-weight: 900;
                }
                p {
                  font-size: smaller;
                }
              }

              button {
                width: max-content;
                padding: 10px;
                font-size: smaller;
                display: flex;
                justify-content: center;
                gap: 1rem;
                font-weight: 700;
                border: none;
                margin-top: 0;
                background-color: var(--btn);
                color: var(--text);
                transition: var(--trans);
                &:hover {
                  box-shadow: var(--btn-s);
                }
              }
            }
          }
        }
      }
    }
  }
`,s4=()=>{const[e,t]=S.useState([]),[n,r]=S.useState(0),[i,o]=S.useState(""),[a,s]=S.useState(1),[l,u]=S.useState(),c=dp({palette:{type:"dark",primary:{main:"#fff"}}}),d=async()=>{try{const{data:h}=await xn.get(`/search/${n?"tv":"movie"}?api_key=${bt}&language=en-US&query=${i}&page=${a}`);t(h.results),u(h.total_pages)}catch(h){console.error(h)}};S.useEffect(()=>{window.scroll(0,0),d()},[n,a]);const f=h=>{h.preventDefault(),d()};return N("div",{className:"all",children:[w(oo,{}),N(l4,{children:[N(rS,{theme:c,children:[N("div",{className:"field",children:[w("p",{whileInView:{x:[-100,0],opacity:[0,1]},transition:{duration:.5},type:"submit",onClick:f,children:w(gS,{})}),w("input",{type:"text",placeholder:"Search..",onChange:h=>o(h.target.value),onKeyPress:h=>h.key==="Enter"&&f(h)})]}),w("div",{className:"tabs",children:N(IA,{value:n,indicatorColor:"primary",textColor:"primary",onChange:(h,p)=>{r(p),s(1)},className:"tab",style:{width:"70%",margin:"0 auto"},"aria-label":"disabled tabs example",children:[w(_v,{style:{width:"20%",margin:"0 auto"},label:" Movies"}),w(_v,{style:{width:"20%",margin:"0 auto"},label:"Series"})]})})]}),w("div",{className:"movies",children:w($A,{movie:e})}),l>1&&w(sS,{setPage:s,numOfPages:l})]}),w(ao,{})]})},l4=lt.div`
  padding-top: 5rem;
  min-height: 80vh;
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    input {
      padding: 0.7rem;
      border: 2px solid #fff;
      background-color: transparent;
      width: 30%;
      color: white;
      font-size: medium;

      @media (max-width: 950px) {
        width: 70%;
      }
    }
    p {
      background-color: transparent;
      color: #b40202;
      border: 2px solid var(--text);
      padding: 0.5rem;

      svg {
        cursor: pointer;
        font-size: large;
        &:hover {
          transition: 0.2s ease;
        }
      }
    }
  }
  .tabs {
    margin-top: 1rem;
    padding: 0 6rem;
    @media (max-width: 950px) {
      padding: 0 2rem;
    }
  }
`,u4=()=>w("div",{children:N("div",{children:[w(oo,{}),w(uS,{getUrl:wn.getDiscoverTv}),w(ao,{})]})}),c4=()=>{const e=jy(c1),t=B_();return S.useEffect(()=>oR(Kr,r=>{t(r?Dk({uid:r.uid,email:r.email}):Lk())}),[t]),w("div",{className:"main",children:e?w(UE,{children:N(Ol,{children:[w(_r,{path:"/",element:w(YA,{}),exact:!0}),w(_r,{path:"/movie",element:w(t4,{}),exact:!0}),w(_r,{path:"/tv",element:w(u4,{}),exact:!0}),w(_r,{path:"/search",element:w(s4,{}),exact:!0}),w(_r,{path:"/details/:type/:id",element:w(n4,{}),exact:!0}),w(_r,{path:"/profile",element:w(o4,{}),exact:!0})]})}):w(ZA,{})})},d4=kk({reducer:{user:zk}});Hc.createRoot(document.getElementById("root")).render(w(ie.StrictMode,{children:w(KE,{children:w(j_,{store:d4,children:w(c4,{})})})}));
