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
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Projects\\guilda\\site\\components\\player.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Player = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    _this = _super.call(this);
    _this.state = {
      audio: {}
    };
    _this.playAudio = _this.playAudio.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "playAudio",
    value: function playAudio() {
      var audioEl;

      if (this.state.audio) {
        audioEl = this.state.audio;
      } else {
        audioEl = document.getElementsByClassName("audio-element")[0];
        this.setState({
          audio: audioEl
        });
      }

      if (audioEl.paused) {
        audioEl.play();
      } else {
        audioEl.pause();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }, __jsx("button", {
        onClick: this.playAudio,
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }, this.state.audio.paused ? 'Play' : 'Pause', " Audio")), __jsx("audio", {
        className: "jsx-3374878104" + " " + "audio-element",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "../static/quem_programa_0001_Will.mp3",
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3374878104",
        __self: this
      }, ".overlay.jsx-3374878104{position:absolute;width:0vw;height:0vh;background:#000;opacity:0;-webkit-transition:opacity 400ms;transition:opacity 400ms;z-index:1;}.overlay.show.jsx-3374878104{opacity:0.2;width:100vw;height:100vh;}@media (min-width:768px){.overlay.jsx-3374878104{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcZ3VpbGRhXFxzaXRlXFxjb21wb25lbnRzXFxwbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUcrQixBQVNOLEFBT0csWUFOSCxDQU9aLEtBaEJVLE1BVUcsSUFURixTQVViLEVBVGtCLGdCQUNOLFVBQ2UsMERBQ2YsVUFDWiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXGd1aWxkYVxcc2l0ZVxcY29tcG9uZW50c1xccGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7YXVkaW86e319O1xyXG4gICAgdGhpcy5wbGF5QXVkaW8gPSB0aGlzLnBsYXlBdWRpby5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblxyXG4gIHBsYXlBdWRpbygpIHtcclxuICAgIGxldCBhdWRpb0VsO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8pIHtcclxuICAgICAgYXVkaW9FbCA9IHRoaXMuc3RhdGUuYXVkaW87XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgYXVkaW9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdWRpby1lbGVtZW50XCIpWzBdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXVkaW86IGF1ZGlvRWwgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXVkaW9FbC5wYXVzZWQpIHtcclxuICAgICAgYXVkaW9FbC5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdWRpb0VsLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucGxheUF1ZGlvfT5cclxuICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmF1ZGlvLnBhdXNlZCA/ICdQbGF5JyA6J1BhdXNlJyB9IEF1ZGlvPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxhdWRpbyBjbGFzc05hbWU9XCJhdWRpby1lbGVtZW50XCI+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL3N0YXRpYy9xdWVtX3Byb2dyYW1hXzAwMDFfV2lsbC5tcDNcIj48L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3ZlcmxheS5zaG93IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Projects\\\\guilda\\\\site\\\\components\\\\player.js */"));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwic3RhdGUiLCJhdWRpbyIsInBsYXlBdWRpbyIsImJpbmQiLCJhdWRpb0VsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2V0U3RhdGUiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFHcUJBLE07Ozs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQUE7O0FBQ1o7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsV0FBSyxFQUFDO0FBQVAsS0FBYjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLHlHQUFqQjtBQUhZO0FBS2I7Ozs7Z0NBRVc7QUFDVixVQUFJQyxPQUFKOztBQUNBLFVBQUksS0FBS0osS0FBTCxDQUFXQyxLQUFmLEVBQXNCO0FBQ3BCRyxlQUFPLEdBQUcsS0FBS0osS0FBTCxDQUFXQyxLQUFyQjtBQUNELE9BRkQsTUFFTztBQUVMRyxlQUFPLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBVjtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFTixlQUFLLEVBQUVHO0FBQVQsU0FBZDtBQUNEOztBQUNELFVBQUlBLE9BQU8sQ0FBQ0ksTUFBWixFQUFvQjtBQUNsQkosZUFBTyxDQUFDSyxJQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0xMLGVBQU8sQ0FBQ00sS0FBUjtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUNQLGFBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUSxlQUFPLEVBQUUsS0FBS1IsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU8sS0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQWlCTyxNQUFqQixHQUEwQixNQUExQixHQUFrQyxPQUF6QyxXQURGLENBREYsRUFJRTtBQUFBLDRDQUFpQixlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUSxXQUFHLEVBQUMsdUNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FKRjtBQUFBO0FBQUE7QUFBQSx5MEZBREY7QUFpQ0Q7Ozs7RUF6RGlDRywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YTQ2ZWVmNzk4OTc5MDIyMGUxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7YXVkaW86e319O1xyXG4gICAgdGhpcy5wbGF5QXVkaW8gPSB0aGlzLnBsYXlBdWRpby5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblxyXG4gIHBsYXlBdWRpbygpIHtcclxuICAgIGxldCBhdWRpb0VsO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8pIHtcclxuICAgICAgYXVkaW9FbCA9IHRoaXMuc3RhdGUuYXVkaW87XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgYXVkaW9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdWRpby1lbGVtZW50XCIpWzBdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXVkaW86IGF1ZGlvRWwgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXVkaW9FbC5wYXVzZWQpIHtcclxuICAgICAgYXVkaW9FbC5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdWRpb0VsLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucGxheUF1ZGlvfT5cclxuICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmF1ZGlvLnBhdXNlZCA/ICdQbGF5JyA6J1BhdXNlJyB9IEF1ZGlvPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxhdWRpbyBjbGFzc05hbWU9XCJhdWRpby1lbGVtZW50XCI+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL3N0YXRpYy9xdWVtX3Byb2dyYW1hXzAwMDFfV2lsbC5tcDNcIj48L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3ZlcmxheS5zaG93IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==