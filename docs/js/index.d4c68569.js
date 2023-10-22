(function(){"use strict";var e={1235:function(e,t,a){var n=a(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Home")],1)},i=[],o=function(){var e=this,t=e._self._c;return t("el-container",[t("textarea",{ref:"inputRef",staticStyle:{opacity:"0",position:"fixed",left:"-999999px",top:"-999999px"},domProps:{value:e.text}}),t("el-header",[e._v("新竹成滷味")]),t("el-tabs",{model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},e._l(e.tabs,(function(a,n){return t("el-tab-pane",{attrs:{label:a.label,name:a.name}},[t("div",{staticClass:"content"},e._l(e.currentMenu,(function(a,n){return t("div",{staticClass:"product",class:[a.count>0?"selected":""]},[t("span",{staticClass:"name"},[e._v(e._s(a.name)+" "+e._s(a.remark)+"   $"+e._s(a.prize))]),t("el-input-number",{staticClass:"btn",attrs:{disabled:a.disable,min:0,max:20},model:{value:a.count,callback:function(t){e.$set(a,"count",t)},expression:"item.count"}})],1)})),0)])})),1),t("div",{staticClass:"footer"},[t("div",{staticClass:"flavor"},[t("div",{staticClass:"mg-bottom"},[t("el-tooltip",{attrs:{placement:"top",disabled:""===this.text}},[t("pre",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(this.text))]),t("span",{staticClass:"total"},[t("el-link",[e._v("共計"+e._s(e.total.count)+"樣 "+e._s(e.total.prize)+"元"),t("i",{staticClass:"el-icon-shopping-bag-1 el-icon--right"})])],1)])],1),t("el-radio-group",{model:{value:e.spicy,callback:function(t){e.spicy=t},expression:"spicy"}},e._l(e.spicyOption,(function(a,n){return t("el-radio",{staticClass:"mg-bottom",attrs:{label:a.value}},[e._v(e._s(a.label))])})),1),t("div",{staticClass:"mg-bottom"},e._l(e.remark,(function(a,n){return t("el-checkbox",{model:{value:a.check,callback:function(t){e.$set(a,"check",t)},expression:"detail.check"}},[e._v(e._s(a.name))])})),1),t("el-radio-group",{model:{value:e.sauce,callback:function(t){e.sauce=t},expression:"sauce"}},e._l(e.sauceOption,(function(a,n){return t("el-radio",{staticClass:"mg-bottom",attrs:{label:a.value}},[e._v(e._s(a.label))])})),1)],1),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{staticClass:"cp-btn",attrs:{size:"small",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy()}}},[e._v("複製")])],1)])],1)},l=[],c={computed:{currentMenu:function(){return this.menu[this.current]},total:function(){let e={count:0,prize:0};return Object.entries(this.menu).forEach((t=>{t[1].forEach((t=>{e.count+=t.count,e.prize+=t.count*t.prize}))})),e},text:function(){let e="";return Object.entries(this.menu).forEach((t=>{t[1].forEach((t=>{if(t.count>0){const a=t.name+"("+t.count+") $"+t.count*t.prize;e+=a+"\n"}}))})),e}},data(){return{spicy:0,sauce:0,tabs:[{name:"meat",label:"肉類"},{name:"vegetable",label:"青菜"},{name:"other",label:"火鍋料、其他"},{name:"noodle",label:"麵類"}],shoppingCart:[],current:"meat",menu:{meat:[{name:"豬腱肉",remark:"(1兩)",prize:35,count:0,disable:!1},{name:"豬耳朵",remark:"",prize:35,count:0,disable:!1},{name:"豬肉片",remark:"",prize:35,count:0,disable:!1},{name:"雞肉串",remark:"",prize:35,count:0,disable:!1},{name:"豬心",remark:"",prize:35,count:0,disable:!1},{name:"豬皮",remark:"",prize:35,count:0,disable:!1},{name:"鴨胗",remark:"",prize:35,count:0,disable:!1},{name:"鴨心",remark:"",prize:35,count:0,disable:!1},{name:"豆腐鴨血",remark:"(冬天限定)",prize:35,count:0,disable:!1},{name:"大腸",remark:"(1兩)",prize:50,count:0,disable:!1},{name:"牛肉片",remark:"",prize:50,count:0,disable:!1},{name:"鴨腸",remark:"",prize:50,count:0,disable:!1}],vegetable:[{name:"蘿蔔",remark:"",prize:10,count:0,disable:!1},{name:"高麗菜",remark:"",prize:35,count:0,disable:!1},{name:"空心菜",remark:"",prize:35,count:0,disable:!1},{name:"花椰菜",remark:"",prize:35,count:0,disable:!1},{name:"大陸妹",remark:"",prize:35,count:0,disable:!0},{name:"娃娃菜",remark:"",prize:35,count:0,disable:!1},{name:"水蓮",remark:"",prize:35,count:0,disable:!1},{name:"金針菇",remark:"",prize:35,count:0,disable:!1},{name:"秀珍菇",remark:"",prize:35,count:0,disable:!1},{name:"四季豆",remark:"",prize:35,count:0,disable:!1},{name:"玉米筍",remark:"",prize:35,count:0,disable:!1},{name:"小黃瓜",remark:"",prize:35,count:0,disable:!1},{name:"香菇",remark:"",prize:35,count:0,disable:!1},{name:"青椒",remark:"",prize:35,count:0,disable:!1},{name:"絲瓜",remark:"",prize:35,count:0,disable:!1},{name:"木耳",remark:"",prize:35,count:0,disable:!1}],noodle:[{name:"科學麵",remark:"",prize:20,count:0,disable:!1},{name:"冬粉",remark:"",prize:20,count:0,disable:!1},{name:"烏龍麵",remark:"",prize:25,count:0,disable:!1},{name:"關廟麵",remark:"",prize:25,count:0,disable:!1}],other:[{name:"章魚丸",remark:"(1顆)",prize:10,count:0,disable:!1},{name:"魚包蛋",remark:"(1顆)",prize:10,count:0,disable:!1},{name:"水晶餃",remark:"(2顆)",prize:10,count:0,disable:!1},{name:"乳酪絲起司丸",remark:"(1顆)",prize:10,count:0,disable:!1},{name:"海帶",remark:"(1片)",prize:10,count:0,disable:!1},{name:"小豆干",remark:"(3塊)",prize:20,count:0,disable:!1},{name:"蟹肉棒",remark:"(3個)",prize:20,count:0,disable:!1},{name:"甜不辣",remark:"(3片)",prize:20,count:0,disable:!1},{name:"招牌米血",remark:"",prize:25,count:0,disable:!1},{name:"芋頭糕",remark:"",prize:25,count:0,disable:!1},{name:"大豆皮",remark:"",prize:25,count:0,disable:!1},{name:"黑豆干",remark:"",prize:25,count:0,disable:!1},{name:"蘭花干",remark:"",prize:25,count:0,disable:!1},{name:"竹輪",remark:"",prize:25,count:0,disable:!1},{name:"豆包",remark:"",prize:25,count:0,disable:!1},{name:"米腸",remark:"",prize:25,count:0,disable:!1},{name:"魚蛋(魚卵卷)",remark:"",prize:30,count:0,disable:!1},{name:"貢丸",remark:"",prize:30,count:0,disable:!1},{name:"魚餃",remark:"",prize:30,count:0,disable:!1},{name:"黃金魚蛋",remark:"",prize:30,count:0,disable:!1},{name:"鳥蛋",remark:"",prize:30,count:0,disable:!1},{name:"素腰花",remark:"",prize:30,count:0,disable:!1},{name:"大黑輪",remark:"",prize:30,count:0,disable:!1},{name:"鑫鑫腸",remark:"",prize:30,count:0,disable:!1},{name:"魚板豆腐",remark:"",prize:30,count:0,disable:!1},{name:"百頁豆腐",remark:"",prize:35,count:0,disable:!1}]},remark:[{name:"不要香油",check:!1},{name:"不要榨菜",check:!1}],spicyOption:[{label:"不辣",value:0},{label:"微辣",value:1},{label:"小辣",value:2},{label:"中辣",value:3},{label:"大辣",value:4}],sauceOption:[{label:"醬正常",value:0},{label:"不加醬(只有胡椒、香油)",value:1},{label:"醬少(清淡)",value:2},{label:"醬多(重口味)",value:3}]}},methods:{getMenu(e){this.current=e},copy(){let e=!1,t=this.text;if(0!==this.spicy){e=!0;const a=this.spicyOption.filter((e=>e.value===this.spicy));t+=a[0].label+" "}if(this.remark.forEach((a=>{a.check&&(e=!0,t+=a.name+" ")})),0!==this.sauce){e=!0;const a=this.sauceOption.filter((e=>e.value===this.sauce));t+=a[0].label+" "}e&&(t+="\n"),t+="\n共計 "+this.total.count+" 樣 "+this.total.prize+" 元",this.$refs.inputRef.value=t,this.$el.querySelector("textarea").select(),document.execCommand("copy"),this.$el.querySelector(".cp-btn").focus(),this.$notify({type:"success",title:"成功複製"})}}},s=c,u=a(1001),m=(0,u.Z)(s,o,l,!1,null,null,null),p=m.exports,d={name:"App",components:{Home:p}},b=d,f=(0,u.Z)(b,r,i,!1,null,null,null),k=f.exports,z=a(8499),v=a.n(z),h=a(3691);n["default"].use(v(),{locale:h.Z}),n["default"].config.productionTip=!1,new n["default"]({render:e=>e(k)}).$mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,n,r,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(l=!1,i<o&&(o=i));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={826:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,o=n[0],l=n[1],c=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var u=c(a)}for(t&&t(n);s<o.length;s++)i=o[s],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1235)}));n=a.O(n)})();
//# sourceMappingURL=index.d4c68569.js.map