webpackJsonp([4],{106:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{imgInfo:{},imgs:[]}},created:function(){var t=this,n=this.$route.params.imgId;this.$axios.get("getimageInfo/"+n).then(function(n){t.imgInfo=n.data.message[0]}),this.$axios.get("getthumimages/"+n).then(function(n){t.imgs=n.data.message,t.imgs.forEach(function(t){t.h=400,t.w=600})})}}},144:function(t,n,e){var i=e(145);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(2)("1c6af89a",i,!1)},145:function(t,n,e){(t.exports=e(1)(void 0)).push([t.i,"\nimg[data-v-b36bf80e]{\r\n    width: 100%;\n}\nli[data-v-b36bf80e] {\r\n    list-style: none;\n}\nul[data-v-b36bf80e] {\r\n    margin: 0;\r\n    padding: 0;\n}\n.photo-title[data-v-b36bf80e] {\r\n    overflow: hidden;\n}\n.photo-title[data-v-b36bf80e],\r\n.photo-desc[data-v-b36bf80e] {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    padding-left: 5px;\n}\n.photo-title p[data-v-b36bf80e] {\r\n    color: #13c2f7;\r\n    font-size: 20px;\r\n    font-weight: bold;\n}\n.photo-title span[data-v-b36bf80e] {\r\n    margin-right: 20px;\n}\n.photo-desc p[data-v-b36bf80e] {\r\n    font-size: 18px;\n}\r\n\r\n",""])},146:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav-bar",{attrs:{title:"图文详情"}}),t._v(" "),e("div",{staticClass:"photo-title"},[e("p",[t._v(t._s(t.imgInfo.title))]),t._v(" "),e("span",[t._v("发起日期："+t._s(t._f("convertTime")(t.imgInfo.add_time)))]),t._v(" "),e("span",[t._v(t._s(t.imgInfo.click)+"次浏览")]),t._v(" "),e("span",[t._v("分类：民生经济")])]),t._v(" "),e("my-ul",t._l(t.imgs,function(n,i){return e("my-li",{key:i},[e("img",{staticClass:"preview-img",attrs:{src:n.src},on:{click:function(n){t.$preview.open(i,t.imgs)}}})])})),t._v(" "),e("div",{staticClass:"photo-desc"},[e("p",{domProps:{innerHTML:t._s(t.imgInfo.content)}})]),t._v(" "),e("comment",{attrs:{cid:t.$route.params.imgId}})],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};n.a=o},94:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(106),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);var r=e(146),s=!1,f=function(t){s||e(144)},c=e(3)(o.a,r.a,!1,f,"data-v-b36bf80e",null);c.options.__file="src\\components\\Photo\\PhotoDetail.vue",n.default=c.exports}});