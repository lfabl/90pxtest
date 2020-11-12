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
      lineNumber: 19,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3__["table"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 13
    }
  }, year && year.data ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: year.id,
    label: year.title,
    select: true,
    style: {
      width: "20%"
    },
    onChange: year.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
        lineNumber: 41,
        columnNumber: 44
      }
    }), item.value);
  })) : null, type && type.data ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: type.id,
    label: type.title,
    select: true,
    style: {
      width: "20%"
    },
    onChange: type.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
        lineNumber: 68,
        columnNumber: 44
      }
    }), item.value);
  })) : null, search ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 84,
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
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYm94L2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvb2xib3giLCJ5ZWFyIiwidHlwZSIsInNlYXJjaCIsImJ1dHRvbiIsInBvc2l0aW9uIiwic3R5bGVfY29udGFpbmVyIiwic3R5bGVfdGFibGUiLCJzdHlsZV9jb250ZW50Iiwid2lkdGgiLCJib3R0b20iLCJkYXRhIiwiaWQiLCJ0aXRsZSIsIm9uQ2hhbmdlIiwibWFwIiwiaXRlbSIsImluZGV4Iiwia2V5IiwidmFsdWUiLCJwcm9wcyIsIm1hcmdpblRvcCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBOztBQU1BLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BTVY7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxJQUlFLFFBSkZBLElBSUU7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxNQUVFLFFBRkZBLE1BRUU7QUFBQSxNQURGQyxRQUNFLFFBREZBLFFBQ0U7QUFDRixTQUFPO0FBQ0gsYUFBUyxFQUFFQywyREFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0g7QUFBSyxhQUFTLEVBQUVDLHVEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLHlEQUFoQjtBQUErQixTQUFLLEVBQUU7QUFDbENILGNBQVEsRUFBRUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsVUFERTtBQUVsQ0ksV0FBSyxFQUFFSixRQUFRLEtBQUssVUFBYixHQUEwQixNQUExQixHQUFtQyxNQUZSO0FBR2xDSyxZQUFNLEVBQUVMLFFBQVEsS0FBSyxVQUFiLEdBQTBCLFNBQTFCLEdBQXNDO0FBSFosS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1RSixJQUFJLElBQUlBLElBQUksQ0FBQ1UsSUFBYixHQUNJLE1BQUMsMkRBQUQ7QUFDSSxNQUFFLEVBQUVWLElBQUksQ0FBQ1csRUFEYjtBQUVJLFNBQUssRUFBRVgsSUFBSSxDQUFDWSxLQUZoQjtBQUdJLFVBQU0sTUFIVjtBQUlJLFNBQUssRUFBRTtBQUNISixXQUFLLEVBQUU7QUFESixLQUpYO0FBT0ksWUFBUSxFQUFFUixJQUFJLENBQUNhLFFBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVUWIsSUFBSSxDQUFDVSxJQUFMLENBQVVJLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0IsV0FBTyxNQUFDLDBEQUFEO0FBQ0gsU0FBRyxFQUFFaEIsSUFBSSxDQUFDaUIsR0FBTCxHQUFTRCxLQURYO0FBRUgsV0FBSyxFQUFFRCxJQUFJLENBQUNHO0FBRlQsT0FHQ0gsSUFBSSxDQUFDSSxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNRkosSUFBSSxDQUFDRyxLQU5ILENBQVA7QUFRSCxHQVRELENBVlIsQ0FESixHQXdCSSxJQTlCWixFQWlDUWpCLElBQUksSUFBSUEsSUFBSSxDQUFDUyxJQUFiLEdBQ0ksTUFBQywyREFBRDtBQUNJLE1BQUUsRUFBRVQsSUFBSSxDQUFDVSxFQURiO0FBRUksU0FBSyxFQUFFVixJQUFJLENBQUNXLEtBRmhCO0FBR0ksVUFBTSxNQUhWO0FBSUksU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBRTtBQURKLEtBSlg7QUFPSSxZQUFRLEVBQUVQLElBQUksQ0FBQ1ksUUFQbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVRWixJQUFJLENBQUNTLElBQUwsQ0FBVUksR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQixXQUFPLE1BQUMsMERBQUQ7QUFDSCxTQUFHLEVBQUVmLElBQUksQ0FBQ2dCLEdBQUwsR0FBU0QsS0FEWDtBQUVILFdBQUssRUFBRUQsSUFBSSxDQUFDRztBQUZULE9BR0NILElBQUksQ0FBQ0ksS0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUZKLElBQUksQ0FBQ0csS0FOSCxDQUFQO0FBUUgsR0FURCxDQVZSLENBREosR0F3QkksSUF6RFosRUE0RFFoQixNQUFNLEdBQ0YsTUFBQywyREFBRDtBQUNJLFNBQUssRUFBQyxZQURWO0FBRUksU0FBSyxFQUFFQSxNQUFNLENBQUNnQixLQUZsQjtBQUdJLFlBQVEsRUFBRWhCLE1BQU0sQ0FBQ1c7QUFIckIsS0FJUVgsTUFBTSxDQUFDaUIsS0FKZjtBQUtJLFNBQUssRUFBRTtBQUNIWCxXQUFLLEVBQUU7QUFESixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERSxHQVdGLElBdkVaLEVBMEVRTCxNQUFNLEdBQ0YsTUFBQyx3REFBRCx5RkFDUUEsTUFBTSxDQUFDZ0IsS0FEZjtBQUVJLFNBQUssRUFBRTtBQUNIWCxXQUFLLEVBQUUsSUFESjtBQUVIWSxlQUFTLEVBQUU7QUFGUixLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPS2pCLE1BQU0sQ0FBQ2tCLEtBUFosQ0FERSxHQVdGLElBckZaLENBREosQ0FIRyxDQUFQO0FBOEZILENBckdEOztLQUFNdEIsTztBQXNHU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjYwYjVjMTI4NGNiYTUyMTU4YWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBUZXh0RmllbGRcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjb250YWluZXIgYXMgc3R5bGVfY29udGFpbmVyLFxyXG4gICAgdGFibGUgYXMgc3R5bGVfdGFibGUsXHJcbiAgICBjb250ZW50IGFzIHN0eWxlX2NvbnRlbnRcclxufSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgVG9vbGJveCA9ICh7XHJcbiAgICB5ZWFyLFxyXG4gICAgdHlwZSxcclxuICAgIHNlYXJjaCxcclxuICAgIGJ1dHRvbixcclxuICAgIHBvc2l0aW9uXHJcbn0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9jb250YWluZXJ9XHJcbiAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlX3RhYmxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlX2NvbnRlbnR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24gPyBwb3NpdGlvbiA6IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwb3NpdGlvbiA9PT0gXCJyZWxhdGl2ZVwiID8gXCJhdXRvXCIgOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogcG9zaXRpb24gPT09IFwicmVsYXRpdmVcIiA/IFwiaW5pdGlhbFwiIDogXCItMTM1cHhcIlxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyICYmIHllYXIuZGF0YSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt5ZWFyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3llYXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17eWVhci5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17eWVhci5rZXkraW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgJiYgdHlwZS5kYXRhID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3R5cGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHlwZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0eXBlLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlLmtleStpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3ZpZSBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2VhcmNoLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNlYXJjaC5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmJ1dHRvbi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9vbGJveDsiXSwic291cmNlUm9vdCI6IiJ9