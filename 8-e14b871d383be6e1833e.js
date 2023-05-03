"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8],{96008:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var o,r,i,c,a,u=t(15007),s=t(1597),l=t(95223);!function(n){n.Call="call",n.Reply="reply",n.Syn="syn",n.SynAck="synAck",n.Ack="ack"}(o||(o={})),function(n){n.Fulfilled="fulfilled",n.Rejected="rejected"}(r||(r={})),function(n){n.ConnectionDestroyed="ConnectionDestroyed",n.ConnectionTimeout="ConnectionTimeout",n.NoIframeSrc="NoIframeSrc"}(i||(i={})),function(n){n.DataCloneError="DataCloneError"}(c||(c={})),function(n){n.Message="message"}(a||(a={}));var d={"http:":"80","https:":"443"},f=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,g=["file:","data:"],v=function(n){return{name:n.name,message:n.message,stack:n.stack}},m=0,h=function(){return++m},p=function(n){return n?n.split("."):[]},y=function(n,e,t){var o=p(e);return o.reduce((function(n,e,r){return void 0===n[e]&&(n[e]={}),r===o.length-1&&(n[e]=t),n[e]}),n),n},w=function n(e,t){var o={};return Object.keys(e).forEach((function(r){var i=e[r],c=function(n,e){var t=p(e||"");return t.push(n),function(n){return n.join(".")}(t)}(r,t);"object"==typeof i&&Object.assign(o,n(i,c)),"function"==typeof i&&(o[c]=i)})),o},S=function(n,e,t,c,u){var s=e.localName,l=e.local,d=e.remote,f=e.originForSending,g=e.originForReceiving,v=!1;u("".concat(s,": Connecting call sender"));var m=function(n){return function(){for(var e=arguments.length,t=new Array(e),m=0;m<e;m++)t[m]=arguments[m];var p;u("".concat(s,": Sending ").concat(n,"() call"));try{d.closed&&(p=!0)}catch(w){p=!0}if(p&&c(),v){var y=new Error("Unable to send ".concat(n,"() call due ")+"to destroyed connection");throw y.code=i.ConnectionDestroyed,y}return new Promise((function(e,i){var c=h();l.addEventListener(a.Message,(function t(f){if(f.source===d&&f.data.penpal===o.Reply&&f.data.id===c)if("*"===g||f.origin===g){var v=f.data;u("".concat(s,": Received ").concat(n,"() reply")),l.removeEventListener(a.Message,t);var m,h,p=v.returnValue;v.returnValueIsError&&(m=p,h=new Error,Object.keys(m).forEach((function(n){return h[n]=m[n]})),p=h),(v.resolution===r.Fulfilled?e:i)(p)}else u("".concat(s," received message from origin ").concat(f.origin," which did not match expected origin ").concat(g))}));var v={penpal:o.Call,id:c,methodName:n,args:t};d.postMessage(v,f)}))}},p=t.reduce((function(n,e){return n[e]=m(e),n}),{});return Object.assign(n,function(n){var e={};for(var t in n)y(e,t,n[t]);return e}(p)),function(){v=!0}},E=function(n,e,t,i,u){var s,l,d=i.destroy,f=i.onDestroy,g={};return function(i){if("*"===e||i.origin===e){u("Parent: Handshake - Received ACK");var m={localName:"Parent",local:window,remote:i.source,originForSending:t,originForReceiving:e};s&&s(),s=function(n,e,t){var i=n.localName,u=n.local,s=n.remote,l=n.originForSending,d=n.originForReceiving,f=!1,g=function(n){if(n.source===s&&n.data.penpal===o.Call)if("*"===d||n.origin===d){var a=n.data,u=a.methodName,g=a.args,m=a.id;t("".concat(i,": Received ").concat(u,"() call"));var h=function(n){return function(e){if(t("".concat(i,": Sending ").concat(u,"() reply")),f)t("".concat(i,": Unable to send ").concat(u,"() reply due to destroyed connection"));else{var a={penpal:o.Reply,id:m,resolution:n,returnValue:e};n===r.Rejected&&e instanceof Error&&(a.returnValue=v(e),a.returnValueIsError=!0);try{s.postMessage(a,l)}catch(g){if(g.name===c.DataCloneError){var d={penpal:o.Reply,id:m,resolution:r.Rejected,returnValue:v(g),returnValueIsError:!0};s.postMessage(d,l)}throw g}}}};new Promise((function(n){return n(e[u].apply(e,g))})).then(h(r.Fulfilled),h(r.Rejected))}else t("".concat(i," received message from origin ").concat(n.origin," which did not match expected origin ").concat(d))};return u.addEventListener(a.Message,g),function(){f=!0,u.removeEventListener(a.Message,g)}}(m,n,u),f(s),l&&l.forEach((function(n){delete g[n]})),l=i.data.methodNames;var h=S(g,m,l,d,u);return f(h),g}u("Parent: Handshake - Received ACK message from origin ".concat(i.origin," which did not match expected origin ").concat(e))}},k=function(n){var e=n.iframe,t=n.methods,r=void 0===t?{}:t,c=n.childOrigin,u=n.timeout,s=n.debug,l=function(n){return function(){if(n){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];(e=console).log.apply(e,["[Penpal]"].concat(o))}}}(void 0!==s&&s),v=function(n,e){var t=[],o=!1;return{destroy:function(r){o||(o=!0,e("".concat(n,": Destroying connection")),t.forEach((function(n){n(r)})))},onDestroy:function(n){o?n():t.push(n)}}}("Parent",l),m=v.onDestroy,h=v.destroy;c||(!function(n){if(!n.src&&!n.srcdoc){var e=new Error("Iframe must have src or srcdoc property defined.");throw e.code=i.NoIframeSrc,e}}(e),c=function(n){if(n&&g.find((function(e){return n.startsWith(e)})))return"null";var e,t,o,r=document.location,i=f.exec(n);i?(e=i[1]?i[1]:r.protocol,t=i[2],o=i[4]):(e=r.protocol,t=r.hostname,o=r.port);var c=o&&o!==d[e]?":".concat(o):"";return"".concat(e,"//").concat(t).concat(c)}(e.src));var p="null"===c?"*":c,y=w(r),S=function(n,e,t,r){return function(i){if(i.source)if("*"===t||i.origin===t){n("Parent: Handshake - Received SYN, responding with SYN-ACK");var c={penpal:o.SynAck,methodNames:Object.keys(e)};i.source.postMessage(c,r)}else n("Parent: Handshake - Received SYN message from origin ".concat(i.origin," which did not match expected origin ").concat(t))}}(l,y,c,p),k=E(y,c,p,v,l),I=new Promise((function(n,t){var r=function(n,e){var t;return void 0!==n&&(t=window.setTimeout((function(){var t=new Error("Connection timed out after ".concat(n,"ms"));t.code=i.ConnectionTimeout,e(t)}),n)),function(){clearTimeout(t)}}(u,h),c=function(t){if(t.source===e.contentWindow&&t.data)if(t.data.penpal!==o.Syn)if(t.data.penpal!==o.Ack);else{var i=k(t);i&&(r(),n(i))}else S(t)};window.addEventListener(a.Message,c),l("Parent: Awaiting handshake"),function(n,e){var t=e.destroy,o=e.onDestroy,r=setInterval((function(){n.isConnected||(clearInterval(r),t())}),6e4);o((function(){clearInterval(r)}))}(e,v),m((function(n){window.removeEventListener(a.Message,c),n&&t(n)}))}));return{promise:I,destroy:function(){h()}}},I=t(42075),C=t(26777),R=t(158),b=function(n){var e,t=n.src,o=n.height,r=void 0===o?"calc(100vh - var(--spectrum-global-dimension-size-800))":o,i=n.location,c=(0,u.useRef)(null),a=(0,u.useContext)(C.Z),d=(a.ims,a.isLoadingIms),f=(0,u.useState)(null),g=f[0],v=f[1],m=(0,u.useState)(!1),h=m[0],p=m[1];(0,u.useEffect)((function(){g&&(0===c.current.clientHeight?g.onHide():g.onShow())}),[i.pathname]),(0,u.useEffect)((function(){if(p(!1),null!=c&&!d){e=window.adobeIMS;var n=w();return function(){n.destroy()}}}),[c,d]);var y=(0,R.Bm)(t)?t:(0,s.dq)(t),w=function(){var n=k({iframe:c.current,childOrigin:(0,R.Bm)(t)?new URL(t).origin:window.origin,methods:{scrollTop:function(n){var e;void 0===n&&(n=0),null!==(e=document)&&void 0!==e&&e.scrollingElement&&(document.scrollingElement.scrollTop=n)},getURL:function(){var n,e;return null===(n=window)||void 0===n||null===(e=n.location)||void 0===e?void 0:e.href},setURL:function(n){var e;null!==(e=window)&&void 0!==e&&e.location&&(window.location=n)},setHeight:function(n){c.current.style.height=n},getIMSAccessToken:function(){var n;return null!==(n=e)&&void 0!==n&&n.isSignedInUser()?e.getAccessToken():null},getIMSProfile:function(){var n;return null!==(n=e)&&void 0!==n&&n.isSignedInUser()?e.getProfile():null},signIn:function(){e&&!e.isSignedInUser()&&e.signIn()},signOut:function(){e&&e.isSignedInUser()&&e.signOut()},getIMSClientId:function(){return e?e.adobeIdData.client_id:null}}});return n.promise.then((function(n){0===c.current.clientHeight?n.onHide():n.onShow(),v(n)})),p(!0),n};return(0,l.tZ)(u.default.Fragment,null,(0,l.tZ)("iframe",{title:"Main content",ref:c,src:h?y:"",css:(0,l.iv)("display:block;height:",r,";width:100%;border:none;","")}),(0,l.tZ)(I.$,null))}}}]);
//# sourceMappingURL=8-e14b871d383be6e1833e.js.map