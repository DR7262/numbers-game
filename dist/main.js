(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());i.push([n.id,"html {\n    --main-font: Helvetica, sans-serif;\n    --main-bg-color: rgb(33, 39, 50);\n    --main-font-color: rgb(230, 230, 233);\n    font-family: var(--main-font);\n    font-weight: bold;\n    background-color: var(--main-bg-color);\n    color: var(--main-font-color);\n    letter-spacing: -.5px;\n    text-align: center;\n}\n\nbody {\n    margin: 0 auto;\n}\n\n#main-header {\n    display: flex;\n    justify-content: space-around;\n    height: 3rem;\n    width: 100%;\n    position: top;\n    margin: 0;\n    align-items: center;\n}\n\n#header-box {\n    outline: 2px white solid;\n    display: flex;\n    justify-content: space-between;\n    padding: 2px;\n    flex-grow: 1;\n    margin: 8px;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\n#app {\n    margin: 0 auto;\n    display: flex;\n    max-width: 500px;\n    flex-direction: column;\n    padding-top: 16px;\n    gap: 50px\n}\n\n#target {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#target-number,\n.gameButton {\n    color:var(--main-bg-color);\n    background-color: var(--main-font-color);\n    padding: 6px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n}\n\n#buttons {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n#numbers,\n#operators {\n    width: 100%;\n    display: grid;\n    overflow: auto;\n    display: grid;\n    gap: 10px;\n    padding: 10px;\n    grid-template-rows: repeat(1, 1fr);\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n}\n\n.gameButton {\n    height: 30px;\n    border-radius: 3px;\n    font-weight: bold;\n    border: none;\n    box-shadow: 0 3px 0 0 rgb(93, 93, 93);\n    transition: box-shadow .05s ease, background-color, .05s ease, translate .05s ease;\n    &.operator {\n        font-size: 1.3rem;\n        border-radius: 10px;\n        height: 30px;\n    }\n    &.evaluate {\n        width: 30px;\n        height: 20px;\n    }\n}\n\n.gameButton:active {\n    box-shadow: 0 2px 0 0 rgb(48, 48, 48);\n    background-color: rgb(211, 211, 211);\n    translate: 0 5%;\n}\n\n.gameButton:hover {\n    background-color: rgb(255, 255, 255);\n}\n\n#currentOperation,\n.pastOperation {\n    background-color: black;\n    color: black;\n    border-radius: 9px;\n    display: flex;\n    justify-content: space-between;\n    height: 25px;\n    padding: 10px;\n    gap: 25px;\n    position: relative;\n    z-index: 1;\n}\n\n.numerator,\n.answer {\n    background-color: black;\n    box-shadow: 0 3px 0 0 rgb(93, 93, 93);\n    flex: 3;\n    color: var(--main-font-color);\n}\n\n.chosenOperator,\n.equalsSign {\n    flex: 1;\n    width: 30px;\n    background-color: black;\n    color: var(--main-font-color);\n    box-shadow: 0 3px 0 0 rgb(93, 93, 93);\n}\n\n.numerator,\n.chosenOperator {\n    align-content: center;\n    border-radius: 3px;\n    font-size: 1rem;\n}\n\n#historyMenu {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    background-color: rgb(67, 62, 84);\n    transform: translateY(2px);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.historyTitle {\n    background-color: black;\n    color: var(--main-font-color);\n    border-radius: 5px;\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    padding: 5px;\n    transform: translateY(10px);\n}\n\n#main-footer {\n    display: flex;\n    justify-content: space-around;\n    height: 3rem;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    margin: 0;\n    align-items: center;\n    letter-spacing: -1px;\n    font-size: .7rem;\n}",""]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var o=e(72),r=e.n(o),a=e(825),i=e.n(a),s=e(659),c=e.n(s),d=e(56),l=e.n(d),p=e(540),u=e.n(p),m=e(113),f=e.n(m),g=e(208),x={};x.styleTagTransform=f(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),r()(g.A,x),g.A&&g.A.locals&&g.A.locals;const h={target:200,numbers:[10,25,7,50,2,8]};document.getElementById("target-number").textContent=h.target,function(){const n=document.getElementById("numbers");for(let t in h.numbers){let e=document.createElement("button");e.classList.add("number","gameButton"),e.textContent=h.numbers[t],n.appendChild(e)}}(),function(){const n=document.getElementById("operators");let t=["+","-","x","÷"];for(let e in t){let o=document.createElement("button");o.classList.add("operator","gameButton"),o.textContent=t[e],n.appendChild(o)}}(),function(){const n=document.getElementById("currentOperation");let t=["numerator left","chosenOperator","numerator right","equalsSign"];for(let e in t){let o=document.createElement("div"),r=t[e].split(/\s+/);console.log(t[e].split());for(let n in r)o.classList.add(r[n]);o.classList.contains("chosenOperator")?o.textContent="+":o.classList.contains("equalsSign")&&(o.textContent="="),n.appendChild(o)}let e=document.createElement("div");e.classList.add("answer"),e.textContent=" ",n.appendChild(e)}(),function(){let n=document.getElementById("history"),t=document.createElement("div");t.setAttribute("id","historyMenu");let e=document.createElement("div");e.classList.add("historyTitle"),e.textContent="History";let o=document.createElement("div");o.classList.add("historyButtons");let r=document.createElement("button");r.classList.add("undoButton","gameButton"),r.textContent="Undo",o.appendChild(r),t.appendChild(e),t.appendChild(o),n.appendChild(t);let a=document.createElement("div");a.classList.add("pastOperation");let i=["numerator left","chosenOperator","numerator right","equalsSign","old answer"];for(let n in i){let t=document.createElement("div"),e=i[n].split(/\s+/);console.log(i[n].split());for(let n in e)t.classList.add(e[n]);t.classList.contains("chosenOperator")?t.textContent="+":t.classList.contains("equalsSign")&&(t.textContent="="),a.appendChild(t)}n.appendChild(a)}()})();