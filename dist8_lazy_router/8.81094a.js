webpackJsonp([8],{108:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{changeStatus:function(t){console.log(t)},loadBottom:function(){console.log("上拉触发了"),this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded()}},data:function(){return{goodsList:[],isAutoFill:!1,allLoaded:!1}},created:function(){var t=this,n=this.$route.query.page||1;this.$axios.get("getgoods?pageindex="+n).then(function(n){t.goodsList=n.data.message}).catch(function(t){return console.log(t)})}}},150:function(t,n,a){var o=a(151);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(2)("ef6401b2",o,!1)},151:function(t,n,a){(t.exports=a(1)(void 0)).push([t.i,"\nul[data-v-60cb8ad3] {\r\n    overflow: hidden;\n}\nli[data-v-60cb8ad3] {\r\n    width: 50%;\r\n    float: left;\r\n    padding: 6px;\r\n    box-sizing: border-box;\n}\nli > a[data-v-60cb8ad3]:not(.mui-btn) {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 1px solid #5c5c5c;\r\n    box-shadow: 0 0 4px #666;\r\n    width: 100%;\r\n    display: block;\n}\nli > a:not(.mui-btn) img[data-v-60cb8ad3] {\r\n     width: 100%;\n}\n.sell > span[data-v-60cb8ad3] {\r\n    float: left;\r\n    color: red;\r\n    text-align: left;\n}\n.detail >.hot[data-v-60cb8ad3] {\r\n    float: left;\r\n    text-align: left;\r\n    font-size: 15px;\n}\n.detail >.count[data-v-60cb8ad3] {\r\n    float: right;\r\n    text-align: right;\r\n    font-size: 15px;\n}\r\n\r\n\r\n/*撑开，去除浮动没有的高度*/\n.detail[data-v-60cb8ad3] {\r\n    overflow: hidden;\n}\n.desc[data-v-60cb8ad3] {\r\n    color: rgba(92, 92, 92, 0.8);\r\n    background-color: rgba(0, 0, 0, 0.2);\n}\nimg[data-v-60cb8ad3] {\r\n    height: 200px;\n}\r\n",""])},152:function(t,n,a){"use strict";var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticStyle:{height:"627px"}},[a("nav-bar",{attrs:{title:"商品列表"}}),t._v(" "),a("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"auto-fill":t.isAutoFill,"bottom-all-loaded":t.allLoaded},on:{"bottom-status-change":t.changeStatus}},[a("ul",{ref:"ul"},t._l(t.goodsList,function(n){return a("li",{key:n.id},[a("a",[a("img",{attrs:{src:n.img_url}}),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t._f("convertTitle")(n.title,25)))]),t._v(" "),a("div",{staticClass:"desc"},[a("div",{staticClass:"sell"},[a("span",[t._v("￥"+t._s(n.sell_price))]),t._v(" "),a("s",[t._v("￥"+t._s(n.market_price))])]),t._v(" "),a("div",{staticClass:"detail"},[a("div",{staticClass:"hot"},[t._v("\r\n                                热卖中\r\n                            ")]),t._v(" "),a("div",{staticClass:"count"},[t._v("\r\n                                剩"+t._s(n.stock_quantity)+"件\r\n                            ")])])])])])}))])],1)};o._withStripped=!0;var e={render:o,staticRenderFns:[]};n.a=e},96:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(108),e=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(n,t,function(){return o[t]})}(i);var r=a(152),s=!1,d=function(t){s||a(150)},l=a(3)(e.a,r.a,!1,d,"data-v-60cb8ad3",null);l.options.__file="src\\components\\Goods\\GoodsList_test.vue",n.default=l.exports}});