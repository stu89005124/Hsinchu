(function(){"use strict";var n={3461:function(n,t,e){var r=e(6369),i=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("Home")],1)},o=[],a=function(){var n=this,t=n._self._c;return t("el-container",[t("el-header",[n._v("新竹城滷味")]),t("el-container",{staticClass:"content"},[t("el-aside",{attrs:{width:"120px"}},n._l(n.shoppingCart,(function(e,r){return t("div",{staticClass:"shopping-cart"},[t("span",[n._v(n._s(e.name))]),t("span",{staticClass:"price"},[t("span",[n._v("("+n._s(e.count)+")  ")]),t("span",[n._v("$"+n._s(e.count*e.prize))])])])})),0),t("el-container",{staticClass:"container"},[t("el-main",[t("div",{staticClass:"category-bar"},[t("el-button",{attrs:{size:"medium"},on:{click:function(t){return n.getMenu("meat")}}},[n._v("肉類")]),t("el-button",{attrs:{size:"medium"},on:{click:function(t){return n.getMenu("vegetable")}}},[n._v("青菜")]),t("el-button",{attrs:{size:"medium"},on:{click:function(t){return n.getMenu("ball")}}},[n._v("丸子")])],1),t("div",{staticClass:"menu-content"},n._l(n.currentMenu,(function(e,r){return t("el-card",{staticClass:"product",attrs:{shadow:"hover"}},[t("div",[n._v(n._s(e.name)),t("el-button",{attrs:{size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(t){return n.addCart(e)}}})],1)])})),1)])],1)],1),t("div",{staticClass:"footer"},[t("div",{staticClass:"total"},[n._v("共計"+n._s(n.total.count)+"樣 "+n._s(n.total.prize)+"元")])])],1)},u=[],c=(e(7658),{computed:{currentMenu:function(){return this.menu[this.current]},total:function(){let n={count:0,prize:0};return this.shoppingCart.forEach((t=>{n.count+=t.count,n.prize+=t.count*t.prize})),n}},data(){return{shoppingCart:[],current:"meat",menu:{meat:[{name:"豬肉",prize:35},{name:"牛肉",prize:35},{name:"雞肉",prize:35},{name:"腱肉",prize:35}],vegetable:[{name:"高麗菜",prize:35},{name:"空心菜",prize:35},{name:"花椰菜",prize:35},{name:"木耳",prize:35}],ball:[{name:"貢丸",prize:35},{name:"雲餃",prize:35},{name:"鑫鑫腸",prize:35}]}}},methods:{getMenu(n){this.current=n},addCart(n){let t=this.shoppingCart.find((t=>t.name===n.name));t?t.count++:this.shoppingCart.push({name:n.name,prize:n.prize,count:1})}}}),s=c,l=e(1001),p=(0,l.Z)(s,a,u,!1,null,null,null),f=p.exports,d={name:"App",components:{Home:f}},m=d,v=(0,l.Z)(m,i,o,!1,null,null,null),h=v.exports,b=e(8499),_=e.n(b),g=e(3691);r["default"].use(_(),{locale:g.Z}),r["default"].config.productionTip=!1,new r["default"]({render:n=>n(h)}).$mount("#app")}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}e.m=n,function(){e.amdO={}}(),function(){var n=[];e.O=function(t,r,i,o){if(!r){var a=1/0;for(l=0;l<n.length;l++){r=n[l][0],i=n[l][1],o=n[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){n.splice(l--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,i,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var i,o,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(i in u)e.o(u,i)&&(e.m[i]=u[i]);if(c)var l=c(e)}for(t&&t(r);s<a.length;s++)o=a[s],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(l)},r=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(3461)}));r=e.O(r)})();
//# sourceMappingURL=app.bb54c38e.js.map