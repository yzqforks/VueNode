(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{10:function(t,a,c){},11:function(t,a,c){"use strict";var n=c(10);c.n(n).a},12:function(t,a,c){"use strict";var n={props:["explainName","isAccount"],methods:{goback:function(){this.$router.back()}}},e=(c(11),c(4)),s=Object(e.a)(n,function(){var a=this,t=a.$createElement,c=a._self._c||t;return c("div",{staticClass:"fixed-header"},[c("div",{staticClass:"explain"},[c("a",{directives:[{name:"show",rawName:"v-show",value:!a.isAccount,expression:"!isAccount"}],staticClass:"goback",attrs:{href:"javascript:;",id:"goback"},on:{click:function(t){return a.goback()}}}),a._v(a._s(a.explainName))])])},[],!1,null,"be3325b0",null);a.a=s.exports},21:function(t,a,c){},42:function(t,a,c){"use strict";var n=c(21);c.n(n).a},81:function(t,a,c){"use strict";c.r(a);var n={data:function(){return{isAccount:!0,explainName:"欢迎来到锦囊团"}},components:{explain:c(12).a}},e=(c(42),c(4)),s=Object(e.a)(n,function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"account-wraper"},[c("explain",{attrs:{explainName:t.explainName,isAccount:t.isAccount}}),t._v(" "),c("div",{staticClass:"account-check"},[c("router-link",{staticClass:"account-check-btn",attrs:{tag:"div",to:{name:"Login"},"active-class":"this-account-model"}},[c("span",[t._v("登录")])]),t._v(" "),c("router-link",{staticClass:"account-check-btn",attrs:{tag:"div",to:{name:"Regist"},"active-class":"this-account-model"}},[c("span",[t._v("注册")])])],1),t._v(" "),c("router-view")],1)},[],!1,null,"d553dbc4",null);a.default=s.exports}}]);