_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"7/uR":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("1OyB"),i=n("vuIU"),r=n("Ji7U"),s=n("md7G"),o=n("foSv"),c=n("MX0m"),l=n.n(c),u=n("q1tI"),p=n.n(u),f=n("chY9"),x=p.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var i=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var d=function(t){Object(r.a)(n,t);var e=m(n);function n(t){return Object(a.a)(this,n),e.call(this,t)}return Object(i.a)(n,[{key:"render",value:function(){return x(u.Fragment,null,x("main",{className:"jsx-1235354984"},x(f.b,{path:this.props.path}),x("section",{className:"jsx-1235354984"},this.props.children)),x(l.a,{id:"1235354984"},["main.jsx-1235354984{padding-left:220px;}","main.jsx-1235354984>section.jsx-1235354984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}","@media (max-width:768px){main.jsx-1235354984{padding:10px 20px !important;}}"]))}}]),n}(u.Component)},MbLX:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n("rePB"),i=n("1OyB"),r=n("vuIU"),s=n("Ji7U"),o=n("md7G"),c=n("foSv"),l=n("MX0m"),u=n.n(l),p=n("q1tI"),f=n.n(p),x=n("YFqc"),m=n.n(x),d=f.a.createElement;function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var i=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var j=function(t){Object(s.a)(n,t);var e=h(n);function n(t){var a;Object(i.a)(this,n),a=e.call(this,t);var r=[{href:"//github.com/guildatech/",label:"Github",icon:"../static/icons8-github-24.png"},{href:"//t.me/guildatech",label:"Telegram",icon:"../static/icons8-telegram-24.png"},{href:"//twitter.com/guildatech",label:"Twitter",icon:"../static/icons8-twitter-24.png"},{href:"login",label:"Login",icon:"../static/user.svg"}].map((function(t){return t.key="nav-link-".concat(t.href,"-").concat(t.label),t}));return a.state={links:r},a}return Object(r.a)(n,[{key:"render",value:function(){return d("nav",{className:"jsx-11747080"},d("ul",{className:"jsx-11747080"},d("li",{id:"menu",className:"jsx-11747080 "+((this.props.updateMenu?"":"hide")||"")},d("input",{onClick:this.props.updateMenu,type:"checkbox",id:"checkboxmenu",name:"checkboxmenu",className:"jsx-11747080"}),d("label",{className:"jsx-11747080 guilda-menu"},d("span",{className:"jsx-11747080"}),d("span",{className:"jsx-11747080"}),d("span",{className:"jsx-11747080"}))),d("li",{id:"gt-logo",className:"jsx-11747080"},d(m.a,{prefetch:!0,href:"/"},d("a",{className:"jsx-11747080 logo"},d("img",{src:"static/logo.png",className:"jsx-11747080"}),d("span",{className:"jsx-11747080"},"Guilda",d("strong",{className:"jsx-11747080"},"Tech"))))),d("ul",{className:"jsx-11747080 network-links"},this.state.links.map((function(t){var e,n=t.key,i=t.href,r=t.label,s=t.icon;return d("li",{key:n,className:"jsx-11747080"},d(m.a,{href:i,prefetch:"false"},d("a",{className:"jsx-11747080"},d("img",(e={"aria-label":r,alt:r,title:r,tooltip:r,src:s},Object(a.a)(e,"aria-label",r),Object(a.a)(e,"style",{width:"24px"}),Object(a.a)(e,"className","jsx-11747080"),e)))))})))),d(u.a,{id:"11747080"},["#checkboxmenu.jsx-11747080{position:absolute;width:26px;height:26px;z-index:999;opacity:0;cursor:pointer;}",".guilda-menu.jsx-11747080{cursor:pointer;z-index:99;background:red;position:relative;heigh:26px;}",".guilda-menu.jsx-11747080 span.jsx-11747080{display:block;width:30px;height:2px;position:absolute;background:black;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;top:5px;}",".guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(1){-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transition:all 300ms ease;transition:all 300ms ease;}",".guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(2){top:50%;-webkit-transition:all 0.1s ease,all 300ms ease;transition:all 0.1s ease,all 300ms ease;}",".guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(3){-webkit-transition:all 300ms ease;transition:all 300ms ease;-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;top:80%;}","#checkboxmenu.jsx-11747080:checked~.guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(1){-webkit-transform:rotate(40deg);-ms-transform:rotate(40deg);transform:rotate(40deg);width:31px;height:4px;}","#checkboxmenu.jsx-11747080:checked~.guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(3){-webkit-transform:rotate(-40deg);-ms-transform:rotate(-40deg);transform:rotate(-40deg);width:31px;height:4px;}","#checkboxmenu.jsx-11747080:checked~.guilda-menu.jsx-11747080 span.jsx-11747080:nth-child(2){opacity:0;width:3px;}","body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}","nav.jsx-11747080{z-index:10;text-align:center;}","ul.jsx-11747080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-11747080>ul.jsx-11747080{padding:4px 16px;}","li.jsx-11747080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}","a.jsx-11747080{color:var(--guildatech-color-primary);-webkit-text-decoration:none;text-decoration:none;font-size:13px;}","a.logo.jsx-11747080{color:#000;font-weight:700;}","a.logo.jsx-11747080 strong.jsx-11747080{font-weight:700;color:var(--guildatech-color-primary);border-bottom:2px solid black;}","a.logo.jsx-11747080 img.jsx-11747080{height:30px;vertical-align:middle;}",".network-links.jsx-11747080 a.jsx-11747080::after{content:'';display:block;width:0;height:2px;background:#000;-webkit-transition:width 0.8s;transition:width 0.8s;}","#menu.jsx-11747080{width:30px;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;padding:6px 0px;}",".network-links.jsx-11747080 a.jsx-11747080:hover.jsx-11747080::after{width:100%;}","#checkboxmenu.jsx-11747080:checked~*.jsx-11747080 aside.jsx-11747080 nav.jsx-11747080{background:red;}","#menu.jsx-11747080,#gt-logo.jsx-11747080{-webkit-transition:all 200ms;transition:all 200ms;}","@media (min-width:768px){#menu.jsx-11747080{-webkit-transform:translateX(-150px);-ms-transform:translateX(-150px);transform:translateX(-150px);}#gt-logo.jsx-11747080{-webkit-transform:translateX(-45px);-ms-transform:translateX(-45px);transform:translateX(-45px);}}",".hide.jsx-11747080>*.jsx-11747080{display:none !important;}"]))}}]),n}(p.Component)},RAIx:function(t,e,n){},RPPq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var a=n("1OyB"),i=n("vuIU"),r=n("Ji7U"),s=n("md7G"),o=n("foSv"),c=n("q1tI"),l=n.n(c),u=n("kwih"),p=n("7/uR"),f=l.a.createElement;function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(o.a)(t);if(e){var i=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var m=function(t){Object(r.a)(n,t);var e=x(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return f(c.Fragment,null,f(u.a,null),f(p.a,{path:"Projetos"}))}}]),n}(c.Component)},kwih:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n("1OyB"),i=n("vuIU"),r=n("JX7q"),s=n("Ji7U"),o=n("md7G"),c=n("foSv"),l=n("MX0m"),u=n.n(l),p=n("q1tI"),f=n.n(p),x=n("MbLX"),m=n("YFqc"),d=n.n(m),h=(n("RAIx"),f.a.createElement);function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var i=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var b=function(t){Object(s.a)(n,t);var e=j(n);function n(t){var i;Object(a.a)(this,n),i=e.call(this,t);var r=[{href:"/",label:"In\xedcio"},{href:"/posts",label:"Posts"},{href:"/podcast",label:"Podcast"},{href:"/projetos",label:"Projetos"},{href:"/eventos",label:"Eventos"},{href:"/jobs",label:"Jobs"}].map((function(t){return t.key="menu-".concat(t.href,"-").concat(t.label),t}));return i.state={menus:r},i}return Object(i.a)(n,[{key:"render",value:function(){return h("aside",{className:"jsx-2818824396 "+((this.props.menuAberto?"aside-open":"aside-close")||"")},h("nav",{className:"jsx-2818824396"},h("ol",{className:"jsx-2818824396"},this.state.menus.map((function(t){var e=t.key,n=t.href,a=t.label;return h(d.a,{key:e,href:n},h("li",{key:e,className:"jsx-2818824396"},h("a",{className:"jsx-2818824396"},a," ")))})))),h(u.a,{id:"2818824396"},["aside.jsx-2818824396{width:150px;height:100vh;padding:20px 20px 20px 0px;background:#fff;position:fixed;overflow:auto;z-index:10;}","aside.jsx-2818824396 ol.jsx-2818824396{list-style:none;font-size:18px;width:100%;padding-left:0px;margin-left:0px;}","link.jsx-2818824396{cursor:pointer;}","aside.jsx-2818824396 li.jsx-2818824396{width:100%;color:#000;font-weight:700;background:white;padding:15px 10px 15px 25px;margin:5px 0px;cursor:pointer;}","aside.jsx-2818824396 li.jsx-2818824396 a.jsx-2818824396{color:#000;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}","aside.jsx-2818824396 li.jsx-2818824396:first-letter{color:var(--guildatech-color-primary);}","aside.jsx-2818824396 li.jsx-2818824396:hover{color:white !important;background:var(--guildatech-color-primary);}","aside.jsx-2818824396 li.jsx-2818824396:hover a.jsx-2818824396{color:white !important;}","aside.jsx-2818824396 li.jsx-2818824396:hover.jsx-2818824396:first-letter{color:#000;}","aside.jsx-2818824396{-webkit-transition:left 300ms;transition:left 300ms;}","@media (max-width:768px){aside.jsx-2818824396{position:absolute;left:-150px;}.aside-open.jsx-2818824396{left:-150px;}.aside-open.jsx-2818824396{left:0px;width:250px;}}"]))}}]),n}(p.Component),g=n("tXcZ"),y=f.a.createElement;function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var i=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var v=function(t){Object(s.a)(n,t);var e=w(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).state={menuAberto:!1},t.updateMenu=t.updateMenu.bind(Object(r.a)(t)),t}return Object(i.a)(n,[{key:"updateMenu",value:function(){this.setState({menuAberto:!this.state.menuAberto})}},{key:"render",value:function(){return y(p.Fragment,null,y(g.a,{title:"GuildaTech"}),y(x.a,{updateMenu:this.updateMenu}),y(b,{menuAberto:this.state.menuAberto}),y("div",{className:"jsx-3374878104 "+((this.state.menuAberto?"overlay show":"overlay")||"")}),y(u.a,{id:"3374878104"},[".overlay.jsx-3374878104{position:absolute;width:0vw;height:0vh;background:#000;opacity:0;-webkit-transition:opacity 400ms;transition:opacity 400ms;z-index:1;}",".overlay.show.jsx-3374878104{opacity:0.2;width:100vw;height:100vh;}","@media (min-width:768px){.overlay.jsx-3374878104{display:none;}}"]))}}]),n}(p.Component)},tXcZ:function(t,e,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("8Kt/"),s=n.n(r),o=i.a.createElement;e.a=function(t){return o(s.a,null,o("meta",{charSet:"UTF-8"}),o("title",null,t.title||""),o("meta",{name:"description",content:t.description||""}),o("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),o("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),o("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),o("link",{rel:"icon",href:"/static/favicon.ico"}),o("meta",{property:"og:url",content:t.url||""}),o("meta",{property:"og:title",content:t.title||""}),o("meta",{property:"og:description",content:t.description||""}),o("meta",{name:"twitter:site",content:t.url||""}),o("meta",{name:"twitter:card",content:"summary_large_image"}),o("meta",{name:"twitter:image",content:t.ogImage||""}),o("meta",{property:"og:image",content:t.ogImage||""}),o("meta",{property:"og:image:width",content:"1200"}),o("meta",{property:"og:image:height",content:"630"}))}},"xx5/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projetos",function(){return n("RPPq")}])}},[["xx5/",0,1,3,2,4,6,5]]]);