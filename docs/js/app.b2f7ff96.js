(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],f=0,v=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0176":function(t,e,a){"use strict";var n=a("fcb4"),r=a.n(n);r.a},3504:function(t){t.exports=JSON.parse('{"app":{"name":"数字签名验证","overline":"wuhan.support 志愿者证书","slogan":["驰援一线","传递温暖"]},"footer":{"eula":"最终用户许可协议","privacy":"隐私声明","team":"wuhan.support 团队","source":"源代码"},"menu":{"languages":"语言选择"},"verifier":{"details":{"title":"验证信息","subtitle":"本页面的验证结果是根据下列信息进行计算的"},"statuses":[{"title":"正在计算","subtitle":"正在计算数字签名真实性，请稍候..."},{"title":"证书为真","subtitle":"证书数字签名验证成功"},{"title":"数字签名无效","subtitle":"证书数字签名验证失败：数字签名无效"},{"title":"缺失必要参数","subtitle":"证书数字签名验证失败：缺失必要参数"}]},"field":{"name":"姓名","group":"组别"}}')},"3c85":function(t,e,a){},"49f8":function(t,e,a){var n={"./en.json":"edd4","./zh.json":"3504"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="49f8"},"73ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.20104083.svg"},b0a0:function(t,e,a){"use strict";var n=a("73ec"),r=a.n(n);r.a},ccee:function(t,e,a){"use strict";var n=a("3c85"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:t.dark}},[n("v-content",{attrs:{app:""}},[n("v-container",[n("v-row",{staticClass:"text-center fill-height",attrs:{align:"start",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"locale-switcher"},[n("v-btn",{staticClass:"mx-1",attrs:{icon:""},on:{click:function(e){return t.changeDark(!t.dark)}}},[n("v-icon",[t._v("mdi-invert-colors")])],1),n("LocaleSwitcher")],1),n("v-img",{staticClass:"mx-auto py-3",staticStyle:{"margin-top":"36px"},attrs:{src:a("9b19"),"aspect-ratio":"4.4","max-width":"256px",contain:""}}),n("v-row",{staticClass:"pb-3 mx-1",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[n("span",{staticClass:"overline text-center"},[t._v(" "+t._s(t.$t("app.overline"))+" ")]),n("h1",{staticClass:"headline font-weight-bold text-center"},[t._v(" "+t._s(t.$t("app.name"))+" ")])])],1),n("v-divider"),n("Verifier",{staticClass:"my-4",attrs:{query:t.query}})],1)],1)],1)],1),n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"text-center pb-2 anim",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, .08)"},attrs:{flat:"",tile:""}},[n("v-card-text",[n("span",[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://wuhan.support",target:"_blank"}},[n("strong",[t._v(" "+t._s(t.$t("footer.team"))+" ")])])]),n("br"),n("v-btn",{staticClass:"mt-1",attrs:{small:"",outlined:"",href:"https://github.com/wuhan-support/certificate-verify",target:"_blank"}},[n("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-github ")]),t._v(" "+t._s(t.$t("footer.source"))+" ")],1)],1)],1)],1)],1)},i=[],s=(a("fb6a"),a("ac1f"),a("841c"),a("d4ec")),o=a("bee2"),c=a("262e"),l=a("2caf"),u=a("9ab4"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},v=[],d=n["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),m=d,h=a("2877"),p=a("6544"),b=a.n(p),g=a("62ad"),y=a("a523"),C=a("adda"),w=a("0fd9"),x=Object(h["a"])(m,f,v,!1,null,null,null),A=x.exports;b()(x,{VCol:g["a"],VContainer:y["a"],VImg:C["a"],VRow:w["a"]});var _,L=a("60a3"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:t.styles.color+"--text"},[a("v-icon",{staticClass:"mx-auto text-center",attrs:{"x-large":"",color:t.styles.color}},[t._v(" "+t._s(t.styles.icon)+" ")]),a("h1",{staticClass:"display-1 font-weight-bold mt-2 mb-1"},[t._v(" "+t._s(t.statusText.title)+" ")]),a("p",{staticClass:"subtitle-1"},[t._v(" "+t._s(t.statusText.subtitle)+" ")])],1),3!==t.result?a("v-card",{staticClass:"anim"},[a("v-fade-transition",[0===t.result||2===t.result?a("v-overlay",{class:(0!==t.result?"stripped-":"")+"background anim",attrs:{absolute:"",opacity:"0.9"}},[a("div",{staticClass:"d-flex flex-column justify-center"},[0===t.result?a("v-progress-circular",{staticClass:"mx-auto",attrs:{indeterminate:""}}):a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-alert ")]),a("span",{staticClass:"mt-3 title"},[t._v(t._s(t.statusText.title))])],1)]):t._e()],1),a("v-card-title",[a("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("verifier.details.title"))+" ")])]),a("v-card-subtitle",[a("p",{staticClass:"subtitle-1 text-left"},[t._v(" "+t._s(t.$t("verifier.details.subtitle"))+" ")])]),a("v-card-text",[a("v-list",{staticClass:"text-left anim"},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-account ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.args.name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.$t("field.name"))+" ")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-account-group ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.args.group)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.$t("field.group"))+" ")])],1)],1)],1)],1)],1):t._e()],1)},k=[],I=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),O=a("72bf");(function(t){t[t["WAITING"]=0]="WAITING",t[t["OK"]=1]="OK",t[t["SIGNATURE_MISMATCH"]=2]="SIGNATURE_MISMATCH",t[t["ILLEGAL_ARGUMENTS"]=3]="ILLEGAL_ARGUMENTS"})(_||(_={}));var V=_,S=(a("a15b"),a("1276"),a("ddb0"),a("4187")),R="-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n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\nzQy94KM=\n=ZgzG\n-----END PGP PUBLIC KEY BLOCK-----";function G(t,e,a){return T.apply(this,arguments)}function T(){return T=Object(I["a"])(regeneratorRuntime.mark((function t(e,a,n){var r,i,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e&&""!==e&&a&&""!==a&&n&&""!==n){t.next=2;break}return t.abrupt("return",Promise.reject(V.ILLEGAL_ARGUMENTS));case 2:return r=[e,a].join("-"),i="-----BEGIN PGP SIGNATURE-----\n\n".concat(n.split("_").join("\n"),"\n-----END PGP SIGNATURE-----"),t.next=6,S["key"].readArmored(R);case 6:return s=t.sent.keys[0],o=S["message"].fromText(r),t.next=10,S["signature"].readArmored(i);case 10:return c=t.sent,t.abrupt("return",new Promise((function(t,e){S["verify"]({publicKeys:s,message:o,signature:c}).then((function(a){return console.info("verification result",a),a&&1===a.signatures.length&&a.signatures[0].valid?t(V.OK):e(V.SIGNATURE_MISMATCH)})).catch((function(t){return console.error(t),e(V.SIGNATURE_MISMATCH)}))})));case 12:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}var E=G;function P(t){return new Promise((function(e){return setTimeout(e,t)}))}var M=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.result=V.WAITING,t}return Object(o["a"])(a,[{key:"mounted",value:function(){this.verify()}},{key:"verify",value:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.args,E(e.name,e.group,e.signature).then((function(t){P(3e3*Math.random()+1e3).then((function(){a.result=t}))})).catch((function(t){t===V.ILLEGAL_ARGUMENTS?a.result=V.ILLEGAL_ARGUMENTS:P(3e3*Math.random()+1e3).then((function(){a.result=V.SIGNATURE_MISMATCH}))}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"statusText",get:function(){var t=this.$t("verifier.statuses");return t[this.result]}},{key:"styles",get:function(){switch(this.result){case V.WAITING:return{color:"grey",icon:"mdi-timer"};case V.OK:return{color:"green",icon:"mdi-check"};case V.ILLEGAL_ARGUMENTS:return{color:"deep-orange",icon:"mdi-help-circle"};case V.SIGNATURE_MISMATCH:return{color:"red",icon:"mdi-alert-circle"};default:return{color:"red",icon:"mdi-help-circle"}}}},{key:"args",get:function(){var t=O["parse"](this.query),e=t.n,a=t.g,n=t.s;return{name:e,group:a,signature:n}}}]),a}(L["c"]);Object(u["a"])([Object(L["b"])()],M.prototype,"query",void 0),M=Object(u["a"])([L["a"]],M);var N=M,D=N,B=(a("0176"),a("b0af")),W=a("99d9"),U=a("0789"),Y=a("132d"),Q=a("8860"),K=a("da13"),F=a("5d23"),q=a("34c3"),z=a("a797"),X=a("490a"),H=Object(h["a"])(D,j,k,!1,null,"cc3f4abc",null),J=H.exports;b()(H,{VCard:B["a"],VCardSubtitle:W["a"],VCardText:W["b"],VCardTitle:W["c"],VFadeTransition:U["b"],VIcon:Y["a"],VList:Q["a"],VListItem:K["a"],VListItemContent:F["b"],VListItemIcon:q["a"],VListItemSubtitle:F["c"],VListItemTitle:F["d"],VOverlay:z["a"],VProgressCircular:X["a"]});var Z,$,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{bottom:"",left:"","open-on-hover":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mx-1",attrs:{icon:""}},n),[a("v-icon",[t._v("mdi-translate")])],1)]}}])},[a("v-list",[a("v-subheader",{staticStyle:{height:"36px"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"grey lighten-1"}},[t._v(" mdi-translate ")]),t._v(" "+t._s(t.$t("menu.languages"))+" ")],1),a("v-list-item-group",{attrs:{mandatory:""},model:{value:t.activeLocale,callback:function(e){t.activeLocale=e},expression:"activeLocale"}},t._l(t.localizations,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-title",{staticClass:"mr-2"},[t._v(" "+t._s(e.name)+" ")]),e.beta?a("v-list-item-action",[a("v-icon",{attrs:{small:""}},[t._v(" mdi-beta ")])],1):t._e(),a("v-list-item-action-text",{staticClass:"monospace ml-2"},[t._v(" "+t._s(e.id)+" ")])],1)})),1)],1)],1)},et=[],at=(a("99af"),a("7db0"),a("c975"),a("257e")),nt=a("ade3"),rt=Object(L["a"])(($=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;Object(s["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r)),Object(nt["a"])(Object(at["a"])(t),"localizations",[{id:"zh",name:"中文"},{id:"en",name:"English"}]),t}return Object(o["a"])(a,[{key:"changeLocale",value:function(t){this.$i18n.locale=t,this.$vuetify.lang.current=t,document.title="".concat(this.$t("app.name")," | wuhan.support"),document.documentElement.lang=t}},{key:"activeLocale",get:function(){var t=this;return this.localizations.indexOf(this.localizations.find((function(e){return e.id===t.$i18n.locale})))},set:function(t){var e=this.localizations[t];this.changeLocale(e.id)}}]),a}(L["c"]),Z=$))||Z,it=rt,st=a("8336"),ot=a("1800"),ct=a("1baa"),lt=a("e449"),ut=a("e0c7"),ft=Object(h["a"])(it,tt,et,!1,null,"20ba5899",null),vt=ft.exports;b()(ft,{VBtn:st["a"],VIcon:Y["a"],VList:Q["a"],VListItem:K["a"],VListItemAction:ot["a"],VListItemActionText:F["a"],VListItemGroup:ct["a"],VListItemTitle:F["d"],VMenu:lt["a"],VSubheader:ut["a"]});a("5319");function dt(){var t,e,a,n=window.navigator,r=["language","browserLanguage","systemLanguage","userLanguage"],i=null;if(Array.isArray(n.languages))for(t=0;t<n.languages.length;t++)if(e=n.languages[t],a=e.length,!i&&a&&(i=e),e&&a>2)return e;for(t=0;t<r.length;t++){var s=r[t];if(e=n[s],null!=e&&(a=e.length,!i&&a&&(i=e),e&&a>2))return e}return i}function mt(){var t=dt().replace("_","-");if(!t)return"zh";var e=t.split("-");return 1===e.length?t:2===e.length?e[0]:t}var ht={getFirstBrowserLanguage:mt},pt=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.query=window.location.search.slice(1),t.dark=!1,t}return Object(o["a"])(a,[{key:"created",value:function(){var t=ht.getFirstBrowserLanguage();this.$i18n.locale=t,this.$vuetify.lang.current=t,document.title="".concat(this.$t("app.name")," | wuhan.support"),document.documentElement.lang=t}},{key:"mounted",value:function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?this.changeDark(!0):this.changeDark(!1)}},{key:"changeDark",value:function(t){this.$vuetify.theme.dark=t,this.dark=t}}]),a}(L["c"]);pt=Object(u["a"])([Object(L["a"])({components:{LocaleSwitcher:vt,Verifier:J,HelloWorld:A}})],pt);var bt=pt,gt=bt,yt=(a("ccee"),a("b0a0"),a("7496")),Ct=a("a75b"),wt=a("ce7e"),xt=a("553a"),At=Object(h["a"])(gt,r,i,!1,null,"343c5ee2",null),_t=At.exports;b()(At,{VApp:yt["a"],VBtn:st["a"],VCard:B["a"],VCardText:W["b"],VCol:g["a"],VContainer:y["a"],VContent:Ct["a"],VDivider:wt["a"],VFooter:xt["a"],VIcon:Y["a"],VImg:C["a"],VRow:w["a"]});var Lt=a("f309");n["a"].use(Lt["a"]);var jt=new Lt["a"]({}),kt=(a("4160"),a("466d"),a("159b"),a("a925"));function It(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];e[r]=t(a)}})),e}n["a"].use(kt["a"]);var Ot=new kt["a"]({locale:"zh",fallbackLocale:"zh",messages:It()});n["a"].config.productionTip=!1,new n["a"]({vuetify:jt,i18n:Ot,render:function(t){return t(_t)}}).$mount("#app")},edd4:function(t){t.exports=JSON.parse('{"app":{"name":"Digital Signature Verification","overline":"wuhan.support Volunteer Certificate","slogan":["Science","Openness","Support"]},"footer":{"eula":"End-user License Agreement","privacy":"Privacy Policy","team":"wuhan.support Organization","source":"Source"},"menu":{"languages":"Language"},"verifier":{"details":{"title":"Personnel Information","subtitle":"The verification result on this page is calculated based on the information as shown as below."},"statuses":[{"title":"Calculating...","subtitle":"Calculating validity of the digital signature..."},{"title":"Certificate is Trusted","subtitle":"The digital signature on the certificate is valid."},{"title":"Invalid Signature","subtitle":"Digital Signature on the certificate has failed to be validated."},{"title":"Missing Mandatory Parameters","subtitle":"Failed to verify certificate integrity: missing mandatory parameters."}]},"field":{"name":"Name","group":"Team"}}')},fcb4:function(t,e,a){}});
//# sourceMappingURL=app.b2f7ff96.js.map