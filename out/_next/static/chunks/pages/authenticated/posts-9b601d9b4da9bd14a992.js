_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"5pyr":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var a=n("o0o1"),s=n.n(a),i=n("HaE+"),r=n("1OyB"),o=n("vuIU"),c=n("JX7q"),u=n("Ji7U"),l=n("md7G"),d=n("foSv"),p=n("MX0m"),h=n.n(p),f=n("q1tI"),b=n.n(f),v=n("chY9"),x=n("TUpd"),y=b.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(d.a)(t);if(e){var s=Object(d.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var g=function(t){Object(u.a)(n,t);var e=m(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={adicao:!1,error:null,success:null,loading:null,errors:{},post:a.props.editable?a.props.editable:{post_title:"",post_body:""},invalid:{post_title:!1,post_body:!1}},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a.delete=a.delete.bind(Object(c.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.state.post),this.props.editable&&this.props.editable.id&&this.setState({post:this.props.editable})}},{key:"handleChange",value:function(t){var e=t.target.name,n=t.target.value;this.state.post[e]=n,this.setState({post:this.state.post})}},{key:"hasInvalid",value:function(){return this.state.invalid.post_body||this.state.invalid.post_title}},{key:"save",value:function(){var t=Object(i.a)(s.a.mark((function t(e){var n=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return t.next=4,x.a.update(e);case 4:t.next=8;break;case 6:return t.next=8,x.a.save(e);case 8:this.setState({success:!0}),setTimeout((function(){n.props.onFinish()})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),this.setState({error:!0,errors:t.t0});case 15:this.setState({loading:!1});case 16:case"end":return t.stop()}}),t,this,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(i.a)(s.a.mark((function t(){var e,n=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.post,t.prev=1,t.next=4,x.a.delete(e);case 4:this.setState({success:!0}),setTimeout((function(){n.props.onFinish()})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.setState({error:!0,errors:t.t0});case 11:this.setState({loading:!1});case 12:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"handleSubmit",value:function(t){t.preventDefault(),this.state.invalid={post_title:!1,post_body:!1},this.state.invalid.post_title=!this.state.post.post_title,this.state.invalid.post_body=!this.state.post.post_body,this.setState({invalid:this.state.invalid}),this.hasInvalid()||this.save(this.state.post)}},{key:"render",value:function(){return y(f.Fragment,null,y("article",{className:"jsx-2797865608"},null==this.state.post?null:y("form",{onSubmit:this.handleSubmit,className:"jsx-2797865608 novo-post-formulario "},this.state.loading?y(v.a,null,"Salvando"):null,this.state.success?y(v.a,{success:!0},"Post bonito, post bem feito e salvo com sucesso."):null,this.state.error?y(v.a,{danger:!0},this.state.errors.general||"Algo de errado n\xe3o est\xe1 certo."):null,y(v.e,{label:"Titulo",type:"text",required:!0,id:"post_title",minLength:"4",onChange:this.handleChange,value:this.state.post.post_title,invalid:this.state.errors.post_title}),this.state.errors.post_title?y("span",{className:"jsx-2797865608 validation"},"T\xedtulo inv\xe1lido"):null,y(v.d,{id:"post_body",onChange:this.handleChange,value:this.state.post.post_body,invalid:this.state.invalid.post_body}),this.state.errors.post_body?y("span",{className:"jsx-2797865608 validation"}):null,y(v.c,{type:"submit",title:"Salvar",disabled:this.state.success}),y(v.c,{type:"button",danger:!0,title:"Deletar",onClick:this.delete}))),y(h.a,{id:"2797865608"},["div.jsx-2797865608{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","thead.jsx-2797865608 *.jsx-2797865608,tbody.jsx-2797865608 td.jsx-2797865608{text-align:left;}","tfoot.jsx-2797865608{text-align:center;}"]))}}]),n}(f.Component)},"74yT":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authenticated/posts",function(){return n("C6ig")}])},C6ig:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));var a=n("o0o1"),s=n.n(a),i=n("HaE+"),r=n("1OyB"),o=n("vuIU"),c=n("JX7q"),u=n("Ji7U"),l=n("md7G"),d=n("foSv"),p=n("MX0m"),h=n.n(p),f=n("q1tI"),b=n.n(f),v=n("zwHo"),x=n("W+qN"),y=n("chY9"),m=n("5pyr"),g=n("I83c"),j=n("TUpd"),w=n("2x0o"),k=n("nOHt"),_=n.n(k),O=b.a.createElement;function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(d.a)(t);if(e){var s=Object(d.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var S=function(t){Object(u.a)(n,t);var e=N(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={newOrEdit:!1,posts:[],errors:[],loading:null,editable:null,pagination:{data:[]}},t.list=t.list.bind(Object(c.a)(t)),t.updateView=t.updateView.bind(Object(c.a)(t)),t.edit=t.edit.bind(Object(c.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){g.a.isAuthenticated()?this.getUser():_.a.push("/")}},{key:"updateView",value:function(){this.setState({newOrEdit:!this.state.newOrEdit})}},{key:"getUser",value:function(){var t=this;w.a.get().then((function(e){t.setState({user:e.data}),console.log(e),e&&t.list(e.data)}))}},{key:"list",value:function(){var t=Object(i.a)(s.a.mark((function t(e){var n,a=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0});try{n={size:10,page:1,user_id:e.id},j.a.pagination(n).then((function(t){a.setState({pagination:t.data})})).finally((function(){a.setState({loading:!1})}))}catch(s){console.log(s)}case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"edit",value:function(t){var e=this.state.pagination.data.find((function(e){return e.id==t.id}));this.setState({editable:e}),this.updateView()}},{key:"render",value:function(){var t=this;return O(f.Fragment,null,O(v.a,null),O(x.a,null,O("div",{className:"jsx-1968154216"},this.state.newOrEdit?O("section",{className:"jsx-1968154216"},O("h3",{className:"jsx-1968154216"},"Novo Post"),O("br",{className:"jsx-1968154216"}),O(m.default,{editable:this.state.editable,onFinish:this.updateView})):O("section",{className:"jsx-1968154216"},O(y.c,{onClick:this.updateView,type:"button",title:"Novo",style:{padding:"5px",margin:"0px 10px 0px 5px"}}),O("h3",{style:{display:"inline-block"},className:"jsx-1968154216"},"Posts"),O("table",{className:"jsx-1968154216"},O("thead",{className:"jsx-1968154216"},O("tr",{className:"jsx-1968154216"},O("th",{width:"60",className:"jsx-1968154216"}),O("th",{className:"jsx-1968154216"},"Titulo"))),O("tbody",{className:"jsx-1968154216"},this.state.pagination.data.map((function(e,n){return O("tr",{key:n,className:"jsx-1968154216"},O("td",{className:"jsx-1968154216"},O(y.c,{data:{id:e.id},onClick:t.edit,type:"button",title:"Editar",style:{padding:"5px",margin:"0px 10px 0px 5px"}})),O("td",{className:"jsx-1968154216"},e.post_title))}))),this.state.pagination.data.length?null:O("tfoot",{className:"jsx-1968154216"},O("tr",{className:"jsx-1968154216"},O("td",{className:"jsx-1968154216"}),O("td",{className:"jsx-1968154216"},"Voc\xea ainda n\xe3o escreveu nenhum post."))))))),O(h.a,{id:"1968154216"},["div.jsx-1968154216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","thead.jsx-1968154216 *.jsx-1968154216,tbody.jsx-1968154216 td.jsx-1968154216{text-align:left;}","tfoot.jsx-1968154216{text-align:center;}","table.jsx-1968154216{width:100%;border-collapse:collapse;margin:0;padding:0;background-color:#fff;}","th.jsx-1968154216{text-align:left;}","th.jsx-1968154216,td.jsx-1968154216{border:1px solid #dfdfdf;padding:1rem;}"]))}}]),n}(f.Component)},TUpd:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("o0o1"),s=n.n(a),i=n("HaE+"),r=n("1OyB"),o=n("vuIU"),c=n("2MRG"),u=function(t){var e={};t&&t.response?t.response.data.forEach((function(t){e[t.field]=!0})):(console.log(t),e.general="Ocorreu um problema ao efetuar seu login");throw e},l=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"search",value:function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("/blog_posts").then((function(t){return t})).catch((function(t){throw t})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"pagination",value:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("/blog_posts/pagination",{params:e}).then((function(t){return t})).catch((function(t){throw t})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.get("/blog_posts/".concat(e)).then((function(t){return t})).catch((function(t){throw t})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"save",value:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.post("/blog_posts",e).then((function(t){return t})).catch(u));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.put("/blog_posts/".concat(e.id),e).then((function(t){return t})).catch(u));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.delete("/blog_posts/".concat(e.id),e).then((function(t){return t})).catch(u));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}()}},[["74yT",0,1,3,2,4,6,7,8,9,5]]]);