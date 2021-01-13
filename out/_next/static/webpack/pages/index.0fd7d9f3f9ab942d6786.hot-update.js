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
      }, __jsx("div", {
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, __jsx("button", {
        onClick: this.playAudio,
        className: "jsx-1737080837" + " " + "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, __jsx("span", {
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, this.state.label)), __jsx("p", {
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, "Epis\xF3dio ", __jsx("b", {
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, "0001"), " ", __jsx("br", {
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 33
        }
      }), "Convidado ", __jsx("b", {
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }
      }, "Will "))), __jsx("audio", {
        className: "jsx-1737080837" + " " + "audio-element",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "../static/quem_programa_0001_Will.mp3",
        className: "jsx-1737080837",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1737080837",
        __self: this
      }, ".overlay.jsx-1737080837{position:absolute;width:0vw;height:0vh;background:#000;opacity:0;-webkit-transition:opacity 400ms;transition:opacity 400ms;z-index:1;}.overlay.show.jsx-1737080837{opacity:0.2;width:100vw;height:100vh;}@media (min-width:768px){.overlay.jsx-1737080837{display:none;}}button.jsx-1737080837{background:var(--guildatech-color-yellow-ligth);border:2px solid var(--guildatech-color-primary);box-shadow:2px 2px 6px rgba(0,0,0,0.6);width:50px;height:50px;border-radius:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcZ3VpbGRhXFxzaXRlXFxjb21wb25lbnRzXFxwbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUcrQixBQVNOLEFBT0csQUFJaUMsWUFWcEMsQ0FPWixLQWhCVSxNQVVHLElBVEYsU0FVYixFQVRrQixTQWtCaUMsT0FqQnZDLFVBQ2UsZ0NBaUJjLDBCQWhCN0IsVUFDWixHQWdCYSxXQUNDLFlBQ00sbUJBQ3BCIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcZ3VpbGRhXFxzaXRlXFxjb21wb25lbnRzXFxwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHthdWRpbzpudWxsLCBsYWJlbDonUGxheSd9O1xyXG4gICAgdGhpcy5wbGF5QXVkaW8gPSB0aGlzLnBsYXlBdWRpby5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblxyXG4gIHBsYXlBdWRpbygpIHtcclxuICAgIGxldCBhdWRpb0VsO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8pIHtcclxuICAgICAgYXVkaW9FbCA9IHRoaXMuc3RhdGUuYXVkaW87XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgYXVkaW9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdWRpby1lbGVtZW50XCIpWzBdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXVkaW86IGF1ZGlvRWwgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXVkaW9FbC5wYXVzZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsOiAnUGF1c2UnIH0pO1xyXG4gICAgICBhdWRpb0VsLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbDogJ1BsYXknIH0pO1xyXG4gICAgICBhdWRpb0VsLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucGxheUF1ZGlvfT5cclxuICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS5sYWJlbCB9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxwPkVwaXPDs2RpbyA8Yj4wMDAxPC9iPiA8YnIvPlxyXG4gICAgICAgIENvbnZpZGFkbyA8Yj5XaWxsIDwvYj48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGF1ZGlvIGNsYXNzTmFtZT1cImF1ZGlvLWVsZW1lbnRcIj5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vc3RhdGljL3F1ZW1fcHJvZ3JhbWFfMDAwMV9XaWxsLm1wM1wiPjwvc291cmNlPlxyXG4gICAgICAgICA8L2F1ZGlvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3ZlcmxheS5zaG93IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ndWlsZGF0ZWNoLWNvbG9yLXllbGxvdy1saWd0aCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWd1aWxkYXRlY2gtY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\guilda\\\\site\\\\components\\\\player.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwic3RhdGUiLCJhdWRpbyIsImxhYmVsIiwicGxheUF1ZGlvIiwiYmluZCIsImF1ZGlvRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRTdGF0ZSIsInBhdXNlZCIsInBsYXkiLCJwYXVzZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdxQkEsTTs7Ozs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFDQyxXQUFLLEVBQUMsSUFBUDtBQUFhQyxXQUFLLEVBQUM7QUFBbkIsS0FBYjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLHlHQUFqQjtBQUhZO0FBS2I7Ozs7Z0NBRVc7QUFDVixVQUFJQyxPQUFKOztBQUNBLFVBQUksS0FBS0wsS0FBTCxDQUFXQyxLQUFmLEVBQXNCO0FBQ3BCSSxlQUFPLEdBQUcsS0FBS0wsS0FBTCxDQUFXQyxLQUFyQjtBQUNELE9BRkQsTUFFTztBQUVMSSxlQUFPLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBVjtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFUCxlQUFLLEVBQUVJO0FBQVQsU0FBZDtBQUNEOztBQUNELFVBQUlBLE9BQU8sQ0FBQ0ksTUFBWixFQUFvQjtBQUNsQixhQUFLRCxRQUFMLENBQWM7QUFBRU4sZUFBSyxFQUFFO0FBQVQsU0FBZDtBQUNBRyxlQUFPLENBQUNLLElBQVI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRixRQUFMLENBQWM7QUFBRU4sZUFBSyxFQUFFO0FBQVQsU0FBZDtBQUNBRyxlQUFPLENBQUNNLEtBQVI7QUFDRDtBQUNGOzs7NkJBQ1E7QUFDUCxhQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQTJCLGVBQU8sRUFBRSxLQUFLUixTQUF6QztBQUFBLDRDQUFrQixRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVEsS0FBS0gsS0FBTCxDQUFXRSxLQUFuQixDQURGLENBRkEsRUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFaLE9BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF4QixnQkFDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFYsQ0FMQSxDQURGLEVBU0U7QUFBQSw0Q0FBaUIsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsV0FBRyxFQUFDLHVDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBVEY7QUFBQTtBQUFBO0FBQUEsc3hIQURGO0FBOENEOzs7O0VBeEVpQ1UsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZkN2Q5ZjNmOWFiOTQyZDY3ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge2F1ZGlvOm51bGwsIGxhYmVsOidQbGF5J307XHJcbiAgICB0aGlzLnBsYXlBdWRpbyA9IHRoaXMucGxheUF1ZGlvLmJpbmQodGhpcyk7XHJcblxyXG4gIH1cclxuXHJcbiAgcGxheUF1ZGlvKCkge1xyXG4gICAgbGV0IGF1ZGlvRWw7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hdWRpbykge1xyXG4gICAgICBhdWRpb0VsID0gdGhpcy5zdGF0ZS5hdWRpbztcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBhdWRpb0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1ZGlvLWVsZW1lbnRcIilbMF07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogYXVkaW9FbCB9KTtcclxuICAgIH1cclxuICAgIGlmIChhdWRpb0VsLnBhdXNlZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWw6ICdQYXVzZScgfSk7XHJcbiAgICAgIGF1ZGlvRWwucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsOiAnUGxheScgfSk7XHJcbiAgICAgIGF1ZGlvRWwucGF1c2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5wbGF5QXVkaW99PlxyXG4gICAgICAgICAgPHNwYW4+eyB0aGlzLnN0YXRlLmxhYmVsIH08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHA+RXBpc8OzZGlvIDxiPjAwMDE8L2I+IDxici8+XHJcbiAgICAgICAgQ29udmlkYWRvIDxiPldpbGwgPC9iPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YXVkaW8gY2xhc3NOYW1lPVwiYXVkaW8tZWxlbWVudFwiPlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIuLi9zdGF0aWMvcXVlbV9wcm9ncmFtYV8wMDAxX1dpbGwubXAzXCI+PC9zb3VyY2U+XHJcbiAgICAgICAgIDwvYXVkaW8+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcztcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdmVybGF5LnNob3cge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWd1aWxkYXRlY2gtY29sb3IteWVsbG93LWxpZ3RoKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3VpbGRhdGVjaC1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==