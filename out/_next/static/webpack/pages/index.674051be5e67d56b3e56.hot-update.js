webpackHotUpdate_N_E("pages/index",{

/***/ "./components/player.js":
/*!******************************!*\
  !*** ./components/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Projects\\guilda\\site\\components\\player.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Player = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    return _super.call(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "playAudio",
    value: function playAudio() {
      var audioEl;

      if (this.audio) {
        audioEl = this.audio;
      } else {
        audioEl = document.getElementsByClassName("audio-element")[0];
        this.setState({
          audio: audioEl
        });
      }

      if (this.audioEl.paused) {
        this.audioEl.play();
      } else {
        this.audioEl.pause();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }, __jsx("button", {
        onClick: this.playAudio,
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, "Play Audio")), __jsx("audio", {
        className: "jsx-3374878104" + " " + "audio-element",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "../static/quem_programa_0001_Will.mp3",
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3374878104",
        __self: this
      }, ".overlay.jsx-3374878104{position:absolute;width:0vw;height:0vh;background:#000;opacity:0;-webkit-transition:opacity 400ms;transition:opacity 400ms;z-index:1;}.overlay.show.jsx-3374878104{opacity:0.2;width:100vw;height:100vh;}@media (min-width:768px){.overlay.jsx-3374878104{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcZ3VpbGRhXFxzaXRlXFxjb21wb25lbnRzXFxwbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUcrQixBQVNOLEFBT0csWUFOSCxDQU9aLEtBaEJVLE1BVUcsSUFURixTQVViLEVBVGtCLGdCQUNOLFVBQ2UsMERBQ2YsVUFDWiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXGd1aWxkYVxcc2l0ZVxcY29tcG9uZW50c1xccGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBwbGF5QXVkaW8oKSB7XHJcbiAgICBsZXQgYXVkaW9FbDtcclxuICAgIGlmICh0aGlzLmF1ZGlvKSB7XHJcbiAgICAgIGF1ZGlvRWwgPSB0aGlzLmF1ZGlvO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGF1ZGlvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXVkaW8tZWxlbWVudFwiKVswXTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF1ZGlvOiBhdWRpb0VsIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXVkaW9FbC5wYXVzZWQpIHtcclxuICAgICAgdGhpcy5hdWRpb0VsLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXVkaW9FbC5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnBsYXlBdWRpb30+XHJcbiAgICAgICAgICA8c3Bhbj5QbGF5IEF1ZGlvPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxhdWRpbyBjbGFzc05hbWU9XCJhdWRpby1lbGVtZW50XCI+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL3N0YXRpYy9xdWVtX3Byb2dyYW1hXzAwMDFfV2lsbC5tcDNcIj48L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3ZlcmxheS5zaG93IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Projects\\\\guilda\\\\site\\\\components\\\\player.js */"));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiYXVkaW9FbCIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2V0U3RhdGUiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJwbGF5QXVkaW8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR3FCQSxNOzs7OztBQUNuQixvQkFBYztBQUFBOztBQUFBO0FBR2I7Ozs7Z0NBRVc7QUFDVixVQUFJQyxPQUFKOztBQUNBLFVBQUksS0FBS0MsS0FBVCxFQUFnQjtBQUNkRCxlQUFPLEdBQUcsS0FBS0MsS0FBZjtBQUNELE9BRkQsTUFFTztBQUVMRCxlQUFPLEdBQUdFLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBVjtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFSCxlQUFLLEVBQUVEO0FBQVQsU0FBZDtBQUNEOztBQUNELFVBQUksS0FBS0EsT0FBTCxDQUFhSyxNQUFqQixFQUF5QjtBQUN2QixhQUFLTCxPQUFMLENBQWFNLElBQWI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLTixPQUFMLENBQWFPLEtBQWI7QUFDRDtBQUNGOzs7NkJBQ1E7QUFDUCxhQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsZUFBTyxFQUFFLEtBQUtDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQURGLEVBSUU7QUFBQSw0Q0FBaUIsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsV0FBRyxFQUFDLHVDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBSkY7QUFBQTtBQUFBO0FBQUEseXFGQURGO0FBaUNEOzs7O0VBdkRpQ0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc0MDUxYmU1ZTY3ZDU2YjNlNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcGxheUF1ZGlvKCkge1xyXG4gICAgbGV0IGF1ZGlvRWw7XHJcbiAgICBpZiAodGhpcy5hdWRpbykge1xyXG4gICAgICBhdWRpb0VsID0gdGhpcy5hdWRpbztcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBhdWRpb0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1ZGlvLWVsZW1lbnRcIilbMF07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogYXVkaW9FbCB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1ZGlvRWwucGF1c2VkKSB7XHJcbiAgICAgIHRoaXMuYXVkaW9FbC5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1ZGlvRWwucGF1c2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wbGF5QXVkaW99PlxyXG4gICAgICAgICAgPHNwYW4+UGxheSBBdWRpbzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YXVkaW8gY2xhc3NOYW1lPVwiYXVkaW8tZWxlbWVudFwiPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIuLi9zdGF0aWMvcXVlbV9wcm9ncmFtYV8wMDAxX1dpbGwubXAzXCI+PC9zb3VyY2U+XHJcbiAgICAgICAgPC9hdWRpbz5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMHZoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm92ZXJsYXkuc2hvdyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=