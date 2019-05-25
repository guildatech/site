webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-1944699517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1944699517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    className: "jsx-1944699517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, menus.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      className: "jsx-1944699517",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1944699517",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, label, " ")));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1944699517",
    __self: this
  }, "aside.jsx-1944699517{width:150px;height:100vh;padding:20px 20px 20px 0px;background:#fff;position:fixed;overflow:auto;}aside.jsx-1944699517 ol.jsx-1944699517{list-style:none;font-size:18px;width:100%;padding-left:0px;margin-left:0px;}aside.jsx-1944699517 li.jsx-1944699517{width:100%;color:#000;font-weight:700;background:white;padding:15px 10px 15px 25px;margin:5px 0px;}aside.jsx-1944699517 li.jsx-1944699517 a.jsx-1944699517{color:#000;-webkit-text-decoration:none;text-decoration:none;}aside.jsx-1944699517 li.jsx-1944699517:first-letter{color:#e9b625;}aside.jsx-1944699517 li.jsx-1944699517:hover{color:white !important;background:#e9b625;}aside.jsx-1944699517 li.jsx-1944699517:hover a.jsx-1944699517{color:white !important;}aside.jsx-1944699517 li.jsx-1944699517:hover.jsx-1944699517:first-letter{color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsYW4vd3d3L2dpdC9zaXRlL2NvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdCLEFBSXFCLEFBUUksQUFRTCxBQVFBLEFBS0csQUFJUyxBQUlBLEFBSVosV0F4QkEsQUFRUyxBQWlCdEIsQ0F6Q2UsRUE2QmYsRUFyQmlCLE1BU0MsQ0FnQkcsQUFJbkIsRUFwQzJCLE1BUWhCLE9BU00sSUFSQSxBQXdCbkIsVUFoQ2tCLEdBaUJZLElBUlosRUFleEIsT0F2QnVCLE9BU2pCLFFBUmdCLEFBZ0JDLGNBZmpCLENBZ0JBIiwiZmlsZSI6Ii9ob21lL2FsYW4vd3d3L2dpdC9zaXRlL2NvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgbWVudXMgPSBbXG4gIHsgaHJlZjogXCIvaW5kZXhcIiwgbGFiZWw6IFwiSW7DrWNpb1wiIH0sXG4gIHsgaHJlZjogXCIvYXJ0aWdvc1wiLCBsYWJlbDogXCJBcnRpZ29zXCIgfSxcbiAgeyBocmVmOiBcIi9wcm9qZXRvc1wiLCBsYWJlbDogXCJQcm9qZXRvc1wiIH0sXG4gIHsgaHJlZjogXCIvZXZlbnRvc1wiLCBsYWJlbDogXCJFdmVudG9zXCIgfSxcbiAgeyBocmVmOiBcIi9qb2JzXCIsIGxhYmVsOiBcIkpvYnNcIiB9XG5dLm1hcChtZW51ID0+IHtcbiAgbWVudS5rZXkgPSBgbWVudS0ke21lbnUuaHJlZn0tJHttZW51LmxhYmVsfWA7XG4gIHJldHVybiBtZW51O1xufSk7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiAoXG4gICAgPGFzaWRlPlxuICAgICAgPG5hdj5cbiAgICAgICAgPG9sPlxuICAgICAgICAgICB7bWVudXMubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgPGE+e2xhYmVsfSA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L25hdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcbiAgICAgIGFzaWRlIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gICAgICBhc2lkZSBvbCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgfVxuXG4gICAgICBhc2lkZSBsaSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDI1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgIH1cbmFzaWRlIGxpIGEge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cbn1cbiAgICAgIGFzaWRlIGxpOmZpcnN0LWxldHRlciB7XG4gICAgICAgIGNvbG9yOiAjZTliNjI1O1xuICAgICAgfVxuXG4gICAgICBhc2lkZSBsaTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTliNjI1O1xuICAgICAgfSBcbiAgICAgIGFzaWRlIGxpOmhvdmVyIGEge1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGFzaWRlIGxpOmhvdmVyOmZpcnN0LWxldHRlciB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDwvYXNpZGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19 */\n/*@ sourceURL=/home/alan/www/git/site/components/menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.86a59582fb298ab220e5.hot-update.js.map