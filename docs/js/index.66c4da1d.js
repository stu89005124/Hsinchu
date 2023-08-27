(function(){"use strict";var e={4342:function(e,n,t){var i=t(6369),a=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("Home")],1)},r=[],o=function(){var e=this,n=e._self._c;return n("el-container",[n("textarea",{ref:"inputRef",staticStyle:{opacity:"0",position:"fixed",left:"-999999px",top:"-999999px"},domProps:{value:e.text}}),n("el-header",[e._v("新竹成滷味")]),n("el-tabs",{model:{value:e.current,callback:function(n){e.current=n},expression:"current"}},e._l(e.tabs,(function(t,i){return n("el-tab-pane",{attrs:{label:t.label,name:t.name}},[n("div",{staticClass:"content"},e._l(e.currentMenu,(function(t,i){return n("div",{staticClass:"product",class:[t.count>0?"selected":""]},[n("span",{staticClass:"name"},[e._v(e._s(t.name)+"   $"+e._s(t.prize))]),n("el-input-number",{staticClass:"btn",attrs:{disabled:t.disable,min:0,max:20},model:{value:t.count,callback:function(n){e.$set(t,"count",n)},expression:"item.count"}})],1)})),0)])})),1),n("div",{staticClass:"footer"},[n("i",{staticClass:"el-icon-shopping-cart-2"}),n("span",{staticClass:"total"},[e._v("共計"+e._s(e.total.count)+"樣 "+e._s(e.total.prize)+"元")]),e._l(e.remark,(function(t,i){return n("el-checkbox",{model:{value:t.check,callback:function(n){e.$set(t,"check",n)},expression:"detail.check"}},[e._v(e._s(t.name))])})),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{staticClass:"cp-btn",attrs:{size:"mini",icon:"el-icon-document-copy"},on:{click:function(n){return e.copy()}}},[e._v("複製點餐欄")])],1)],2)],1)},c=[],u={computed:{currentMenu:function(){return this.menu[this.current]},total:function(){let e={count:0,prize:0};return Object.entries(this.menu).forEach((n=>{n[1].forEach((n=>{e.count+=n.count,e.prize+=n.count*n.prize}))})),e},text:function(){let e="",n=!1;return Object.entries(this.menu).forEach((n=>{n[1].forEach((n=>{if(n.count>0){const t=n.name+"("+n.count+")$"+n.count*n.prize;e+=t+"\n"}}))})),this.remark.forEach((t=>{t.check&&(n=!0,e+=t.name+" ")})),n&&(e+="\n"),e+="\n共計"+this.total.count+"樣 "+this.total.prize+" 元",e}},data(){return{tabs:[{name:"meat",label:"肉類"},{name:"vegetable",label:"青菜"},{name:"other",label:"火鍋料、其他"},{name:"noodle",label:"麵類"}],shoppingCart:[],current:"meat",menu:{meat:[{name:"豬腱肉(1兩)",prize:35,count:0,disable:!1},{name:"豬耳朵",prize:35,count:0,disable:!1},{name:"豬肉片",prize:35,count:0,disable:!1},{name:"雞肉串",prize:35,count:0,disable:!1},{name:"豬心",prize:35,count:0,disable:!1},{name:"豬皮",prize:35,count:0,disable:!1},{name:"鴨胗",prize:35,count:0,disable:!1},{name:"鴨心",prize:35,count:0,disable:!1},{name:"豆腐鴨血(冬天限定)",prize:35,count:0,disable:!0},{name:"大腸(1兩)",prize:50,count:0,disable:!1},{name:"牛肉片",prize:50,count:0,disable:!1},{name:"鴨腸",prize:50,count:0,disable:!1}],vegetable:[{name:"蘿蔔",prize:10,count:0,disable:!1},{name:"高麗菜",prize:35,count:0,disable:!1},{name:"空心菜",prize:35,count:0,disable:!1},{name:"花椰菜",prize:35,count:0,disable:!1},{name:"大陸妹",prize:35,count:0,disable:!0},{name:"娃娃菜",prize:35,count:0,disable:!1},{name:"水蓮",prize:35,count:0,disable:!1},{name:"金針菇",prize:35,count:0,disable:!1},{name:"秀珍菇",prize:35,count:0,disable:!1},{name:"四季豆",prize:35,count:0,disable:!0},{name:"玉米筍",prize:35,count:0,disable:!1},{name:"小黃瓜",prize:35,count:0,disable:!1},{name:"香菇",prize:35,count:0,disable:!1},{name:"青椒",prize:35,count:0,disable:!1},{name:"絲瓜",prize:35,count:0,disable:!1},{name:"木耳",prize:35,count:0,disable:!1}],noodle:[{name:"科學麵",prize:20,count:0,disable:!1},{name:"冬粉",prize:20,count:0,disable:!1},{name:"烏龍麵",prize:25,count:0,disable:!1},{name:"關廟麵",prize:25,count:0,disable:!1}],other:[{name:"水晶餃(2顆)",prize:10,count:0,disable:!1},{name:"乳酪絲起司丸(1顆)",prize:10,count:0,disable:!1},{name:"海帶(1片)",prize:10,count:0,disable:!1},{name:"小豆干(3塊)",prize:20,count:0,disable:!1},{name:"蟹肉棒(3個)",prize:20,count:0,disable:!1},{name:"甜不辣(3片)",prize:20,count:0,disable:!1},{name:"招牌米血",prize:25,count:0,disable:!1},{name:"芋頭糕",prize:25,count:0,disable:!1},{name:"大豆皮",prize:25,count:0,disable:!1},{name:"黑豆干",prize:25,count:0,disable:!1},{name:"蘭花干",prize:25,count:0,disable:!1},{name:"竹輪",prize:25,count:0,disable:!1},{name:"豆包",prize:25,count:0,disable:!1},{name:"米腸",prize:25,count:0,disable:!1},{name:"貢丸",prize:30,count:0,disable:!1},{name:"魚餃",prize:30,count:0,disable:!1},{name:"黃金魚蛋",prize:30,count:0,disable:!1},{name:"鳥蛋",prize:30,count:0,disable:!1},{name:"素腰花",prize:30,count:0,disable:!1},{name:"大黑輪",prize:30,count:0,disable:!1},{name:"鑫鑫腸",prize:30,count:0,disable:!1},{name:"百頁豆腐",prize:35,count:0,disable:!1}]},remark:[{name:"微辣",check:!1},{name:"小辣",check:!1},{name:"中辣",check:!1},{name:"大辣",check:!1},{name:"不要香油",check:!1},{name:"不要榨菜",check:!1},{name:"不加醬(只有胡椒、香油)",check:!1},{name:"醬多(重口味)",check:!1},{name:"醬少(清淡)",check:!1}]}},methods:{getMenu(e){this.current=e},copy(){navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(this.text).then((()=>{this.$notify({type:"success",title:"成功複製"})})):this.$refs.inputRef.value&&(this.$refs.inputRef.value=this.text,this.$el.querySelector("textarea").select(),document.execCommand("copy"),this.$notify({type:"success",title:"成功複製"}))}}},l=u,s=t(1001),p=(0,s.Z)(l,o,c,!1,null,null,null),d=p.exports,m={name:"App",components:{Home:d}},b=m,f=(0,s.Z)(b,a,r,!1,null,null,null),z=f.exports,h=t(8499),v=t.n(h),y=t(3691);i["default"].use(v(),{locale:y.Z}),i["default"].config.productionTip=!1,new i["default"]({render:e=>e(z)}).$mount("#app")}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var r=n[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,i,a,r){if(!i){var o=1/0;for(s=0;s<e.length;s++){i=e[s][0],a=e[s][1],r=e[s][2];for(var c=!0,u=0;u<i.length;u++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[u])}))?i.splice(u--,1):(c=!1,r<o&&(o=r));if(c){e.splice(s--,1);var l=a();void 0!==l&&(n=l)}}return n}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[i,a,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={826:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var a,r,o=i[0],c=i[1],u=i[2],l=0;if(o.some((function(n){return 0!==e[n]}))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(u)var s=u(t)}for(n&&n(i);l<o.length;l++)r=o[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(s)},i=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(4342)}));i=t.O(i)})();
//# sourceMappingURL=index.66c4da1d.js.map