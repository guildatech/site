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
      audio: null,
      label: 'Play'
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
        this.setState({
          label: 'Pause'
        });
        audioEl.play();
      } else {
        this.setState({
          label: 'Play'
        });
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
          lineNumber: 31,
          columnNumber: 7
        }
      }, __jsx("button", {
        onClick: this.playAudio,
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, this.state.label, " Audio")), __jsx("audio", {
        className: "jsx-3374878104" + " " + "audio-element",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "../static/quem_programa_0001_Will.mp3",
        className: "jsx-3374878104",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3374878104",
        __self: this
      }, ".overlay.jsx-3374878104{position:absolute;width:0vw;height:0vh;background:#000;opacity:0;-webkit-transition:opacity 400ms;transition:opacity 400ms;z-index:1;}.overlay.show.jsx-3374878104{opacity:0.2;width:100vw;height:100vh;}@media (min-width:768px){.overlay.jsx-3374878104{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcZ3VpbGRhXFxzaXRlXFxjb21wb25lbnRzXFxwbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NvQixBQUcrQixBQVNOLEFBT0csWUFOSCxDQU9aLEtBaEJVLE1BVUcsSUFURixTQVViLEVBVGtCLGdCQUNOLFVBQ2UsMERBQ2YsVUFDWiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXGd1aWxkYVxcc2l0ZVxcY29tcG9uZW50c1xccGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7YXVkaW86bnVsbCwgbGFiZWw6J1BsYXknfTtcclxuICAgIHRoaXMucGxheUF1ZGlvID0gdGhpcy5wbGF5QXVkaW8uYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG5cclxuICBwbGF5QXVkaW8oKSB7XHJcbiAgICBsZXQgYXVkaW9FbDtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvKSB7XHJcbiAgICAgIGF1ZGlvRWwgPSB0aGlzLnN0YXRlLmF1ZGlvO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGF1ZGlvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXVkaW8tZWxlbWVudFwiKVswXTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF1ZGlvOiBhdWRpb0VsIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGF1ZGlvRWwucGF1c2VkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbDogJ1BhdXNlJyB9KTtcclxuICAgICAgYXVkaW9FbC5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWw6ICdQbGF5JyB9KTtcclxuICAgICAgYXVkaW9FbC5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnBsYXlBdWRpb30+XHJcbiAgICAgICAgICA8c3Bhbj57IHRoaXMuc3RhdGUubGFiZWwgfSBBdWRpbzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YXVkaW8gY2xhc3NOYW1lPVwiYXVkaW8tZWxlbWVudFwiPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIuLi9zdGF0aWMvcXVlbV9wcm9ncmFtYV8wMDAxX1dpbGwubXAzXCI+PC9zb3VyY2U+XHJcbiAgICAgICAgPC9hdWRpbz5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMHZoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm92ZXJsYXkuc2hvdyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\guilda\\\\site\\\\components\\\\player.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwic3RhdGUiLCJhdWRpbyIsImxhYmVsIiwicGxheUF1ZGlvIiwiYmluZCIsImF1ZGlvRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRTdGF0ZSIsInBhdXNlZCIsInBsYXkiLCJwYXVzZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdxQkEsTTs7Ozs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFDQyxXQUFLLEVBQUMsSUFBUDtBQUFhQyxXQUFLLEVBQUM7QUFBbkIsS0FBYjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLHlHQUFqQjtBQUhZO0FBS2I7Ozs7Z0NBRVc7QUFDVixVQUFJQyxPQUFKOztBQUNBLFVBQUksS0FBS0wsS0FBTCxDQUFXQyxLQUFmLEVBQXNCO0FBQ3BCSSxlQUFPLEdBQUcsS0FBS0wsS0FBTCxDQUFXQyxLQUFyQjtBQUNELE9BRkQsTUFFTztBQUVMSSxlQUFPLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBVjtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFUCxlQUFLLEVBQUVJO0FBQVQsU0FBZDtBQUNEOztBQUNELFVBQUlBLE9BQU8sQ0FBQ0ksTUFBWixFQUFvQjtBQUNsQixhQUFLRCxRQUFMLENBQWM7QUFBRU4sZUFBSyxFQUFFO0FBQVQsU0FBZDtBQUNBRyxlQUFPLENBQUNLLElBQVI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRixRQUFMLENBQWM7QUFBRU4sZUFBSyxFQUFFO0FBQVQsU0FBZDtBQUNBRyxlQUFPLENBQUNNLEtBQVI7QUFDRDtBQUNGOzs7NkJBQ1E7QUFDUCxhQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsZUFBTyxFQUFFLEtBQUtSLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRLEtBQUtILEtBQUwsQ0FBV0UsS0FBbkIsV0FERixDQURGLEVBSUU7QUFBQSw0Q0FBaUIsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsV0FBRyxFQUFDLHVDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBSkY7QUFBQTtBQUFBO0FBQUEscTdGQURGO0FBaUNEOzs7O0VBM0RpQ1UsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmM0N2JhNDJhNDc5MWFmMmIxMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge2F1ZGlvOm51bGwsIGxhYmVsOidQbGF5J307XHJcbiAgICB0aGlzLnBsYXlBdWRpbyA9IHRoaXMucGxheUF1ZGlvLmJpbmQodGhpcyk7XHJcblxyXG4gIH1cclxuXHJcbiAgcGxheUF1ZGlvKCkge1xyXG4gICAgbGV0IGF1ZGlvRWw7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hdWRpbykge1xyXG4gICAgICBhdWRpb0VsID0gdGhpcy5zdGF0ZS5hdWRpbztcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBhdWRpb0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1ZGlvLWVsZW1lbnRcIilbMF07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogYXVkaW9FbCB9KTtcclxuICAgIH1cclxuICAgIGlmIChhdWRpb0VsLnBhdXNlZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWw6ICdQYXVzZScgfSk7XHJcbiAgICAgIGF1ZGlvRWwucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsOiAnUGxheScgfSk7XHJcbiAgICAgIGF1ZGlvRWwucGF1c2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wbGF5QXVkaW99PlxyXG4gICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLmxhYmVsIH0gQXVkaW88L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGF1ZGlvIGNsYXNzTmFtZT1cImF1ZGlvLWVsZW1lbnRcIj5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vc3RhdGljL3F1ZW1fcHJvZ3JhbWFfMDAwMV9XaWxsLm1wM1wiPjwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcztcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdmVybGF5LnNob3cge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9