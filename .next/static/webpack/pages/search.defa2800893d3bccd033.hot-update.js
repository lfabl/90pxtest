webpackHotUpdate_N_E("pages/search",{

/***/ "./components/toolbox/index.js":
/*!*************************************!*\
  !*** ./components/toolbox/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./components/toolbox/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "D:\\Works\\customer\\nextjs-blog\\components\\toolbox\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Toolbox = function Toolbox(_ref) {
  var year = _ref.year,
      type = _ref.type,
      search = _ref.search,
      button = _ref.button,
      position = _ref.position;
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3__["table"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3__["content"],
    style: {
      position: position ? position : "absolute",
      width: position === "relative" ? "auto" : "100%",
      bottom: position === "relative" ? "initial" : "-135px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, year && year.data ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    id: year.id,
    label: year.title,
    select: true,
    style: {
      width: "20%"
    },
    value: year.value,
    onChange: year.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, year.data.map(function (item, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: year.key + index,
      value: item.value
    }, item.props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 44
      }
    }), item.value);
  })) : null, type && type.data ? __jsx(TextField, {
    id: type.id,
    label: type.title,
    select: true,
    style: {
      width: "20%"
    },
    value: type.value,
    onChange: type.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, type.data.map(function (item, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: type.key + index,
      value: item.value
    }, item.props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 44
      }
    }), item.value);
  })) : null, search ? __jsx(TextField, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "Movie Name",
    value: search.value,
    onChange: search.onChange
  }, search.props, {
    style: {
      width: "45%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  })) : null, button ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button.props, {
    style: {
      width: "9%",
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }), button.label) : null)));
};

_c = Toolbox;
/* harmony default export */ __webpack_exports__["default"] = (Toolbox);

var _c;

$RefreshReg$(_c, "Toolbox");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYm94L2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvb2xib3giLCJ5ZWFyIiwidHlwZSIsInNlYXJjaCIsImJ1dHRvbiIsInBvc2l0aW9uIiwic3R5bGVfY29udGFpbmVyIiwic3R5bGVfdGFibGUiLCJzdHlsZV9jb250ZW50Iiwid2lkdGgiLCJib3R0b20iLCJkYXRhIiwiaWQiLCJ0aXRsZSIsInZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJwcm9wcyIsIm1hcmdpblRvcCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7O0FBTUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FNVjtBQUFBLE1BTEZDLElBS0UsUUFMRkEsSUFLRTtBQUFBLE1BSkZDLElBSUUsUUFKRkEsSUFJRTtBQUFBLE1BSEZDLE1BR0UsUUFIRkEsTUFHRTtBQUFBLE1BRkZDLE1BRUUsUUFGRkEsTUFFRTtBQUFBLE1BREZDLFFBQ0UsUUFERkEsUUFDRTtBQUNGLFNBQU87QUFDSCxhQUFTLEVBQUVDLDJEQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSDtBQUFLLGFBQVMsRUFBRUMsdURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUMseURBQWhCO0FBQStCLFNBQUssRUFBRTtBQUNsQ0gsY0FBUSxFQUFFQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxVQURFO0FBRWxDSSxXQUFLLEVBQUVKLFFBQVEsS0FBSyxVQUFiLEdBQTBCLE1BQTFCLEdBQW1DLE1BRlI7QUFHbENLLFlBQU0sRUFBRUwsUUFBUSxLQUFLLFVBQWIsR0FBMEIsU0FBMUIsR0FBc0M7QUFIWixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTVFKLElBQUksSUFBSUEsSUFBSSxDQUFDVSxJQUFiLEdBQ0ksTUFBQyx3REFBRDtBQUNJLE1BQUUsRUFBRVYsSUFBSSxDQUFDVyxFQURiO0FBRUksU0FBSyxFQUFFWCxJQUFJLENBQUNZLEtBRmhCO0FBR0ksVUFBTSxNQUhWO0FBSUksU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBRTtBQURKLEtBSlg7QUFPSSxTQUFLLEVBQUVSLElBQUksQ0FBQ2EsS0FQaEI7QUFRSSxZQUFRLEVBQUViLElBQUksQ0FBQ2MsUUFSbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdRZCxJQUFJLENBQUNVLElBQUwsQ0FBVUssR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQixXQUFPLE1BQUMsMERBQUQ7QUFDSCxTQUFHLEVBQUVqQixJQUFJLENBQUNrQixHQUFMLEdBQVNELEtBRFg7QUFFSCxXQUFLLEVBQUVELElBQUksQ0FBQ0g7QUFGVCxPQUdDRyxJQUFJLENBQUNHLEtBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1GSCxJQUFJLENBQUNILEtBTkgsQ0FBUDtBQVFILEdBVEQsQ0FYUixDQURKLEdBeUJJLElBL0JaLEVBa0NRWixJQUFJLElBQUlBLElBQUksQ0FBQ1MsSUFBYixHQUNJLE1BQUMsU0FBRDtBQUNJLE1BQUUsRUFBRVQsSUFBSSxDQUFDVSxFQURiO0FBRUksU0FBSyxFQUFFVixJQUFJLENBQUNXLEtBRmhCO0FBR0ksVUFBTSxNQUhWO0FBSUksU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBRTtBQURKLEtBSlg7QUFPSSxTQUFLLEVBQUVQLElBQUksQ0FBQ1ksS0FQaEI7QUFRSSxZQUFRLEVBQUVaLElBQUksQ0FBQ2EsUUFSbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdRYixJQUFJLENBQUNTLElBQUwsQ0FBVUssR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQixXQUFPLE1BQUMsMERBQUQ7QUFDSCxTQUFHLEVBQUVoQixJQUFJLENBQUNpQixHQUFMLEdBQVNELEtBRFg7QUFFSCxXQUFLLEVBQUVELElBQUksQ0FBQ0g7QUFGVCxPQUdDRyxJQUFJLENBQUNHLEtBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1GSCxJQUFJLENBQUNILEtBTkgsQ0FBUDtBQVFILEdBVEQsQ0FYUixDQURKLEdBeUJJLElBM0RaLEVBOERRWCxNQUFNLEdBQ0YsTUFBQyxTQUFEO0FBQ0ksU0FBSyxFQUFDLFlBRFY7QUFFSSxTQUFLLEVBQUVBLE1BQU0sQ0FBQ1csS0FGbEI7QUFHSSxZQUFRLEVBQUVYLE1BQU0sQ0FBQ1k7QUFIckIsS0FJUVosTUFBTSxDQUFDaUIsS0FKZjtBQUtJLFNBQUssRUFBRTtBQUNIWCxXQUFLLEVBQUU7QUFESixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERSxHQVdGLElBekVaLEVBNEVRTCxNQUFNLEdBQ0YsTUFBQyx3REFBRCx5RkFDUUEsTUFBTSxDQUFDZ0IsS0FEZjtBQUVJLFNBQUssRUFBRTtBQUNIWCxXQUFLLEVBQUUsSUFESjtBQUVIWSxlQUFTLEVBQUU7QUFGUixLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPS2pCLE1BQU0sQ0FBQ2tCLEtBUFosQ0FERSxHQVdGLElBdkZaLENBREosQ0FIRyxDQUFQO0FBZ0dILENBdkdEOztLQUFNdEIsTztBQXdHU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmRlZmEyODAwODkzZDNiY2NkMDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgU2VsZWN0LFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBUZXh0XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBjb250YWluZXIgYXMgc3R5bGVfY29udGFpbmVyLFxyXG4gICAgdGFibGUgYXMgc3R5bGVfdGFibGUsXHJcbiAgICBjb250ZW50IGFzIHN0eWxlX2NvbnRlbnRcclxufSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgVG9vbGJveCA9ICh7XHJcbiAgICB5ZWFyLFxyXG4gICAgdHlwZSxcclxuICAgIHNlYXJjaCxcclxuICAgIGJ1dHRvbixcclxuICAgIHBvc2l0aW9uXHJcbn0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9jb250YWluZXJ9XHJcbiAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlX3RhYmxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlX2NvbnRlbnR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24gPyBwb3NpdGlvbiA6IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwb3NpdGlvbiA9PT0gXCJyZWxhdGl2ZVwiID8gXCJhdXRvXCIgOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogcG9zaXRpb24gPT09IFwicmVsYXRpdmVcIiA/IFwiaW5pdGlhbFwiIDogXCItMTM1cHhcIlxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyICYmIHllYXIuZGF0YSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt5ZWFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3llYXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eWVhci52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt5ZWFyLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhci5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt5ZWFyLmtleStpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAmJiB0eXBlLmRhdGEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dHlwZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0eXBlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3R5cGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dHlwZS5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZS5rZXkraW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW92aWUgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaC5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5zZWFyY2gucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5idXR0b24ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==