_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"2x0o":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("o0o1"),i=n.n(a),s=n("HaE+"),r=n("1OyB"),o=n("vuIU"),l=n("2MRG"),c=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"login",value:function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.post("/sessions",t).then((function(e){return e})).catch((function(e){var t={};e&&e.response?e.response.data.forEach((function(e){t[e.field]=!0})):(console.log(e),t.general="Ocorreu um problema ao efetuar seu login");throw t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.get("/session",t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"forgot",value:function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.post("/forgot",t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},MbLX:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("rePB"),i=n("1OyB"),s=n("vuIU"),r=n("Ji7U"),o=n("md7G"),l=n("foSv"),c=n("MX0m"),u=n.n(c),p=n("q1tI"),x=n.n(p),m=n("YFqc"),f=n.n(m),d=x.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var g=function(e){Object(r.a)(n,e);var t=h(n);function n(e){var a;Object(i.a)(this,n),a=t.call(this,e);var s=[{href:"//github.com/guildatech/",label:"Github",icon:"../static/icons8-github-24.png"},{href:"//t.me/guildatech",label:"Telegram",icon:"../static/icons8-telegram-24.png"},{href:"//twitter.com/guildatech",label:"Twitter",icon:"../static/icons8-twitter-24.png"},{href:"login",label:"Login",icon:"../static/user.svg"}].map((function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}));return a.state={links:s},a}return Object(s.a)(n,[{key:"render",value:function(){return d("nav",{className:"jsx-11747080"},d("ul",{className:"jsx-11747080"},d("li",{id:"menu",className:"jsx-11747080 "+((this.props.updateMenu?"":"hide")||"")},d("input",{onClick:this.props.updateMenu,type:"checkbox",id:"checkboxmenu",name:"checkboxmenu",className:"jsx-11747080"}),d("label",{className:"jsx-11747080 guilda-menu"},d("span",{className:"jsx-11747080"}),d("span",{className:"jsx-11747080"}),d("span",{className:"jsx-11747080"}))),d("li",{id:"gt-logo",className:"jsx-11747080"},d(f.a,{prefetch:!0,href:"/"},d("a",{className:"jsx-11747080 logo"},d("img",{src:"static/logo.png",className:"jsx-11747080"}),d("span",{className:"jsx-11747080"},"Guilda",d("strong",{className:"jsx-11747080"},"Tech"))))),d("ul",{className:"jsx-11747080 network-links"},this.state.links.map((function(e){var t,n=e.key,i=e.href,s=e.label,r=e.icon;return d("li",{key:n,className:"jsx-11747080"},d(f.a,{href:i,prefetch:"false"},d("a",{className:"jsx-11747080"},d("img",(t={"aria-label":s,alt:s,title:s,tooltip:s,src:r},Object(a.a)(t,"aria-label",s),Object(a.a)(t,"style",{width:"24px"}),Object(a.a)(t,"className","jsx-11747080"),t)))))})))),d(u.a,{id:"11747080"},["#checkboxmenu.jsx-11747080{position:absolute;width:26px;height:26px;z-index:999;opacity:0;cursor:pointer;}",".guilda-menu.jsx-11747080{cursor:pointer;z-index:99;background:red;position:relative;heigh:26px;}",".guilda-menu.jsx-11747080 span.jsx-11747080{display:block;width:30px;height:2px;position:absolute;background:black;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;top:5px;}",".guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(1){-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transition:all 300ms ease;transition:all 300ms ease;}",".guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(2){top:50%;-webkit-transition:all 0.1s ease,all 300ms ease;transition:all 0.1s ease,all 300ms ease;}",".guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(3){-webkit-transition:all 300ms ease;transition:all 300ms ease;-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;top:80%;}","#checkboxmenu.jsx-11747080:checked~.guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(1){-webkit-transform:rotate(40deg);-ms-transform:rotate(40deg);transform:rotate(40deg);width:31px;height:4px;}","#checkboxmenu.jsx-11747080:checked~.guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(3){-webkit-transform:rotate(-40deg);-ms-transform:rotate(-40deg);transform:rotate(-40deg);width:31px;height:4px;}","#checkboxmenu.jsx-11747080:checked~.guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(2){opacity:0;width:3px;}","body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}","nav.jsx-11747080{z-index:10;text-align:center;}","ul.jsx-11747080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-11747080>ul.jsx-11747080{padding:4px 16px;}","li.jsx-11747080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}","a.jsx-11747080{color:var(--guildatech-color-primary);-webkit-text-decoration:none;text-decoration:none;font-size:13px;}","a.logo.jsx-11747080{color:#000;font-weight:700;}","a.logo.jsx-11747080 strong.jsx-11747080{font-weight:700;color:var(--guildatech-color-primary);border-bottom:2px solid black;}","a.logo.jsx-11747080 img.jsx-11747080{height:30px;vertical-align:middle;}",".network-links.jsx-11747080 a.jsx-11747080::after{content:'';display:block;width:0;height:2px;background:#000;-webkit-transition:width 0.8s;transition:width 0.8s;}","#menu.jsx-11747080{width:30px;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;padding:6px 0px;}",".network-links.jsx-11747080 a.jsx-11747080:hover.jsx-11747080::after{width:100%;}","#checkboxmenu.jsx-11747080:checked~*.jsx-11747080 aside.jsx-11747080 nav.jsx-11747080{background:red;}","#menu.jsx-11747080,#gt-logo.jsx-11747080{-webkit-transition:all 200ms;transition:all 200ms;}","@media (min-width:768px){#menu.jsx-11747080{-webkit-transform:translateX(-150px);-ms-transform:translateX(-150px);transform:translateX(-150px);}#gt-logo.jsx-11747080{-webkit-transform:translateX(-45px);-ms-transform:translateX(-45px);transform:translateX(-45px);}}",".hide.jsx-11747080>*.jsx-11747080{display:none !important;}"]))}}]),n}(p.Component)},O2ls:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n("o0o1"),i=n.n(a),s=n("HaE+"),r=n("rePB"),o=n("1OyB"),l=n("vuIU"),c=n("JX7q"),u=n("Ji7U"),p=n("md7G"),x=n("foSv"),m=n("MX0m"),f=n.n(m),d=n("q1tI"),h=n.n(d),g=n("chY9"),b=n("tXcZ"),j=n("MbLX"),k=n("YFqc"),w=n.n(k),y=(n("RAIx"),n("2x0o")),v=n("I83c"),N=n("nOHt"),O=n.n(N),S=h.a.createElement;function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(x.a)(e);if(t){var i=Object(x.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}var _=function(e){Object(u.a)(n,e);var t=X(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={email:"",password:"",error:null,success:null,loading:null,errors:{}},e.handleChange=e.handleChange.bind(Object(c.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){v.a.isAuthenticated()&&O.a.push("/authenticated/")}},{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(r.a)({},t,n))}},{key:"authenticate",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.login(t);case 3:n=e.sent,v.a.login(n.data.token),this.setState({success:!0}),O.a.push("/authenticated/posts"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({error:!0,errors:e.t0});case 12:this.setState({loading:!1});case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){if(!this.state.loading){this.setState({loading:!0,success:null,error:null,errors:{}}),e.preventDefault();var t={email:this.state.email,password:this.state.password};this.authenticate(t)}}},{key:"render",value:function(){return S(d.Fragment,null,S(b.a,{title:"GuildaTech"}),S(j.a,null),S("main",{className:"jsx-3090198066"},S(g.g,null,S("h1",{className:"jsx-3090198066"}," Acesse sua conta"),S("form",{onSubmit:this.handleSubmit,className:"jsx-3090198066 login-formulario "},this.state.loading?S(g.a,null,"Autenticando"):null,this.state.success?S(g.a,{success:!0},"Acert\xf4 miseravi"):null,this.state.error?S(g.a,{danger:!0},this.state.errors.general||"Algo de errado n\xe3o est\xe1 certo."):null,S("br",{className:"jsx-3090198066"}),S(g.e,{label:"E-mail",type:"email",id:"email",required:!0,invalid:!!this.state.errors.email,onChange:this.handleChange}),this.state.errors.email?S("span",{className:"jsx-3090198066 validation"},"E-mail n\xe3o encontrado"):null,S(g.e,{label:"Senha",required:!0,type:"password",id:"password",invalid:this.state.errors.password,onChange:this.handleChange}),this.state.errors.password?S("span",{className:"jsx-3090198066 validation"},"Senha inv\xe1lida"):null,S("span",{className:"jsx-3090198066 forgot-password"},S(w.a,{href:"forgot"},S("a",{className:"jsx-3090198066"},"N\xe3o lembra sua senha? "))),S(g.c,{type:"submit",title:"Acessar"})),S("span",{className:"jsx-3090198066 register"},S(w.a,{href:"register"},S("a",{className:"jsx-3090198066"},"\xc9 a sua primeira vez aqui? ")))),S(f.a,{id:"3090198066"},["body{margin:0;padding:0px;}","h1.jsx-3090198066{color:black;text-align:center;font-size:36px;font-weight:900;padding:15px 5px;}","h1.jsx-3090198066:first-letter{color:var(--guildatech-color-primary);}","a.logo.jsx-3090198066{margin:15px 0px;padding:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","a.logo.jsx-3090198066 img.jsx-3090198066{height:100px;vertical-align:middle;margin:auto;}","main.jsx-3090198066{position:relative;width:100%;height:calc(100% - 100px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","form.jsx-3090198066{position:relative;}",".login-formulario.jsx-3090198066{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","@media (max-width:768px){main.jsx-3090198066{height:auto;}}",".forgot-password.jsx-3090198066{font-size:12px;padding:5px;margin-bottom:10px;-webkit-align-self:normal;-ms-flex-item-align:normal;align-self:normal;margin-left:35px;}",".forgot-password.jsx-3090198066 a.jsx-3090198066{color:#616060;}",".register.jsx-3090198066{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px;text-align:center;padding:10px 40px;font-weight:700;margin:25px 15px;border-bottom:2px solid var(--guildatech-color-primary);}",".register.jsx-3090198066 a.jsx-3090198066{color:black;}",".validation.jsx-3090198066{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;padding:0px 50px;font-weight:700;font-size:14px;color:var(--guildatech-color-red);}"])))}}]),n}(d.Component)},RAIx:function(e,t,n){},tXcZ:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),s=n("8Kt/"),r=n.n(s),o=i.a.createElement;t.a=function(e){return o(r.a,null,o("meta",{charSet:"UTF-8"}),o("title",null,e.title||""),o("meta",{name:"description",content:e.description||""}),o("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),o("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),o("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),o("link",{rel:"icon",href:"/static/favicon.ico"}),o("meta",{property:"og:url",content:e.url||""}),o("meta",{property:"og:title",content:e.title||""}),o("meta",{property:"og:description",content:e.description||""}),o("meta",{name:"twitter:site",content:e.url||""}),o("meta",{name:"twitter:card",content:"summary_large_image"}),o("meta",{name:"twitter:image",content:e.ogImage||""}),o("meta",{property:"og:image",content:e.ogImage||""}),o("meta",{property:"og:image:width",content:"1200"}),o("meta",{property:"og:image:height",content:"630"}))}},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])}},[["u6Hu",0,1,3,2,4,6,7,8,5]]]);