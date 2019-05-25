webpackHotUpdate("static/development/pages/artigos.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/alan/www/git/site/components/menu.js";



var menus = [{
  href: "/index",
  label: "Início"
}, {
  href: "/artigos",
  label: "Artigos"
}, {
  href: "/projetos",
  label: "Projetos"
}, {
  href: "/eventos",
  label: "Eventos"
}, {
  href: "/jobs",
  label: "Jobs"
}].map(function (menu) {
  menu.key = "menu-".concat(menu.href, "-").concat(menu.label);
  return menu;
});

var Menu = function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: "jsx-1126257058",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1126257058",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    className: "jsx-1126257058",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, menus.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      className: "jsx-1126257058",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1126257058",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, label, " ")));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1126257058",
    __self: this
  }, "Link.jsx-1126257058{cursor:pointer;}aside.jsx-1126257058{width:150px;height:100vh;padding:20px 20px 20px 0px;background:#fff;position:fixed;overflow:auto;}aside.jsx-1126257058 ol.jsx-1126257058{list-style:none;font-size:18px;width:100%;padding-left:0px;margin-left:0px;}aside.jsx-1126257058 li.jsx-1126257058{width:100%;color:#000;font-weight:700;background:white;padding:15px 10px 15px 25px;margin:5px 0px;}aside.jsx-1126257058 li.jsx-1126257058 a.jsx-1126257058{color:#000;-webkit-text-decoration:none;text-decoration:none;}aside.jsx-1126257058 li.jsx-1126257058:first-letter{color:#e9b625;}aside.jsx-1126257058 li.jsx-1126257058:hover{color:white !important;background:#e9b625;}aside.jsx-1126257058 li.jsx-1126257058:hover a.jsx-1126257058{color:white !important;}aside.jsx-1126257058 li.jsx-1126257058:hover.jsx-1126257058:first-letter{color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYW4vd3d3L2dpdC9zaXRlL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdCLEFBR29CLEFBR0MsQUFRSSxBQVFMLEFBUUEsQUFLRyxBQUlTLEFBSUEsQUFJWixXQXhCQSxBQVFTLEFBaUJ0QixDQXpDZSxFQTZCZixDQWhDRixDQVdtQixNQVNDLENBZ0JHLEFBSW5CLEVBcEMyQixNQVFoQixPQVNNLElBUkEsQUF3Qm5CLFVBaENrQixHQWlCWSxJQVJaLEVBZXhCLE9BdkJ1QixPQVNqQixRQVJnQixBQWdCQyxjQWZqQixDQWdCQSIsImZpbGUiOiIvaG9tZS9hbGFuL3d3dy9naXQvc2l0ZS9jb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IG1lbnVzID0gW1xuICB7IGhyZWY6IFwiL2luZGV4XCIsIGxhYmVsOiBcIkluw61jaW9cIiB9LFxuICB7IGhyZWY6IFwiL2FydGlnb3NcIiwgbGFiZWw6IFwiQXJ0aWdvc1wiIH0sXG4gIHsgaHJlZjogXCIvcHJvamV0b3NcIiwgbGFiZWw6IFwiUHJvamV0b3NcIiB9LFxuICB7IGhyZWY6IFwiL2V2ZW50b3NcIiwgbGFiZWw6IFwiRXZlbnRvc1wiIH0sXG4gIHsgaHJlZjogXCIvam9ic1wiLCBsYWJlbDogXCJKb2JzXCIgfVxuXS5tYXAobWVudSA9PiB7XG4gIG1lbnUua2V5ID0gYG1lbnUtJHttZW51LmhyZWZ9LSR7bWVudS5sYWJlbH1gO1xuICByZXR1cm4gbWVudTtcbn0pO1xuXG5jb25zdCBNZW51ID0gKCkgPT4gKFxuICAgIDxhc2lkZT5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICAge21lbnVzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICA8bGkga2V5PXtrZXl9PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YT57bGFiZWx9IDwvYT4gICAgICAgICAgXG4gICAgICAgIFx0ICA8L2xpPiBcbiAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L25hdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBMaW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgICAgYXNpZGUge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICAgIGFzaWRlIG9sIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICB9XG5cbiAgICAgIGFzaWRlIGxpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggMjVweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgfVxuYXNpZGUgbGkgYSB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblxufVxuICAgICAgYXNpZGUgbGk6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgY29sb3I6ICNlOWI2MjU7XG4gICAgICB9XG5cbiAgICAgIGFzaWRlIGxpOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWI2MjU7XG4gICAgICB9IFxuICAgICAgYXNpZGUgbGk6aG92ZXIgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYXNpZGUgbGk6aG92ZXI6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPC9hc2lkZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXX0= */\n/*@ sourceURL=/home/alan/www/git/site/components/menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=artigos.js.0ef8aaa224645bf1aaec.hot-update.js.map