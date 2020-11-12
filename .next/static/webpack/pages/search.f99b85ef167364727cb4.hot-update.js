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
    onKeyUp: function onKeyUp(e) {
      if (e.keyCode === 13 && button && button.props && button.props.onClick) {
        button.onClick();
      }
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
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYm94L2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvb2xib3giLCJ5ZWFyIiwidHlwZSIsInNlYXJjaCIsImJ1dHRvbiIsInBvc2l0aW9uIiwic3R5bGVfY29udGFpbmVyIiwic3R5bGVfdGFibGUiLCJzdHlsZV9jb250ZW50Iiwid2lkdGgiLCJib3R0b20iLCJkYXRhIiwiaWQiLCJ0aXRsZSIsIm9uQ2hhbmdlIiwibWFwIiwiaXRlbSIsImluZGV4Iiwia2V5IiwidmFsdWUiLCJwcm9wcyIsImUiLCJrZXlDb2RlIiwib25DbGljayIsIm1hcmdpblRvcCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBOztBQU1BLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BTVY7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxJQUlFLFFBSkZBLElBSUU7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxNQUVFLFFBRkZBLE1BRUU7QUFBQSxNQURGQyxRQUNFLFFBREZBLFFBQ0U7QUFDRixTQUFPO0FBQ0gsYUFBUyxFQUFFQywyREFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0g7QUFBSyxhQUFTLEVBQUVDLHVEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLHlEQUFoQjtBQUErQixTQUFLLEVBQUU7QUFDbENILGNBQVEsRUFBRUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsVUFERTtBQUVsQ0ksV0FBSyxFQUFFSixRQUFRLEtBQUssVUFBYixHQUEwQixNQUExQixHQUFtQyxNQUZSO0FBR2xDSyxZQUFNLEVBQUVMLFFBQVEsS0FBSyxVQUFiLEdBQTBCLFNBQTFCLEdBQXNDO0FBSFosS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1RSixJQUFJLElBQUlBLElBQUksQ0FBQ1UsSUFBYixHQUNJLE1BQUMsMkRBQUQ7QUFDSSxNQUFFLEVBQUVWLElBQUksQ0FBQ1csRUFEYjtBQUVJLFNBQUssRUFBRVgsSUFBSSxDQUFDWSxLQUZoQjtBQUdJLFVBQU0sTUFIVjtBQUlJLFNBQUssRUFBRTtBQUNISixXQUFLLEVBQUU7QUFESixLQUpYO0FBT0ksWUFBUSxFQUFFUixJQUFJLENBQUNhLFFBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVUWIsSUFBSSxDQUFDVSxJQUFMLENBQVVJLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0IsV0FBTyxNQUFDLDBEQUFEO0FBQ0gsU0FBRyxFQUFFaEIsSUFBSSxDQUFDaUIsR0FBTCxHQUFTRCxLQURYO0FBRUgsV0FBSyxFQUFFRCxJQUFJLENBQUNHO0FBRlQsT0FHQ0gsSUFBSSxDQUFDSSxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNRkosSUFBSSxDQUFDRyxLQU5ILENBQVA7QUFRSCxHQVRELENBVlIsQ0FESixHQXdCSSxJQTlCWixFQWlDUWpCLElBQUksSUFBSUEsSUFBSSxDQUFDUyxJQUFiLEdBQ0ksTUFBQywyREFBRDtBQUNJLE1BQUUsRUFBRVQsSUFBSSxDQUFDVSxFQURiO0FBRUksU0FBSyxFQUFFVixJQUFJLENBQUNXLEtBRmhCO0FBR0ksVUFBTSxNQUhWO0FBSUksU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBRTtBQURKLEtBSlg7QUFPSSxZQUFRLEVBQUVQLElBQUksQ0FBQ1ksUUFQbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVRWixJQUFJLENBQUNTLElBQUwsQ0FBVUksR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQixXQUFPLE1BQUMsMERBQUQ7QUFDSCxTQUFHLEVBQUVmLElBQUksQ0FBQ2dCLEdBQUwsR0FBU0QsS0FEWDtBQUVILFdBQUssRUFBRUQsSUFBSSxDQUFDRztBQUZULE9BR0NILElBQUksQ0FBQ0ksS0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTUZKLElBQUksQ0FBQ0csS0FOSCxDQUFQO0FBUUgsR0FURCxDQVZSLENBREosR0F3QkksSUF6RFosRUE0RFFoQixNQUFNLEdBQ0YsTUFBQywyREFBRDtBQUNJLFNBQUssRUFBQyxZQURWO0FBRUksU0FBSyxFQUFFQSxNQUFNLENBQUNnQixLQUZsQjtBQUdJLFlBQVEsRUFBRWhCLE1BQU0sQ0FBQ1c7QUFIckIsS0FJUVgsTUFBTSxDQUFDaUIsS0FKZjtBQUtJLFNBQUssRUFBRTtBQUNIWCxXQUFLLEVBQUU7QUFESixLQUxYO0FBUUksV0FBTyxFQUFFLGlCQUFDWSxDQUFELEVBQU87QUFDWixVQUFHQSxDQUFDLENBQUNDLE9BQUYsS0FBYyxFQUFkLElBQW9CbEIsTUFBcEIsSUFBOEJBLE1BQU0sQ0FBQ2dCLEtBQXJDLElBQThDaEIsTUFBTSxDQUFDZ0IsS0FBUCxDQUFhRyxPQUE5RCxFQUF1RTtBQUNuRW5CLGNBQU0sQ0FBQ21CLE9BQVA7QUFDSDtBQUNKLEtBWkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURFLEdBZ0JGLElBNUVaLEVBK0VRbkIsTUFBTSxHQUNGLE1BQUMsd0RBQUQseUZBQ1FBLE1BQU0sQ0FBQ2dCLEtBRGY7QUFFSSxTQUFLLEVBQUU7QUFDSFgsV0FBSyxFQUFFLElBREo7QUFFSGUsZUFBUyxFQUFFO0FBRlIsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0twQixNQUFNLENBQUNxQixLQVBaLENBREUsR0FXRixJQTFGWixDQURKLENBSEcsQ0FBUDtBQW1HSCxDQTFHRDs7S0FBTXpCLE87QUEyR1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5mOTliODVlZjE2NzM2NDcyN2NiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgVGV4dEZpZWxkXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgY29udGFpbmVyIGFzIHN0eWxlX2NvbnRhaW5lcixcclxuICAgIHRhYmxlIGFzIHN0eWxlX3RhYmxlLFxyXG4gICAgY29udGVudCBhcyBzdHlsZV9jb250ZW50XHJcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvb2xib3ggPSAoe1xyXG4gICAgeWVhcixcclxuICAgIHR5cGUsXHJcbiAgICBzZWFyY2gsXHJcbiAgICBidXR0b24sXHJcbiAgICBwb3NpdGlvblxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVfY29udGFpbmVyfVxyXG4gICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZV90YWJsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZV9jb250ZW50fSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uID8gcG9zaXRpb24gOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogcG9zaXRpb24gPT09IFwicmVsYXRpdmVcIiA/IFwiYXV0b1wiIDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IHBvc2l0aW9uID09PSBcInJlbGF0aXZlXCIgPyBcImluaXRpYWxcIiA6IFwiLTEzNXB4XCJcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhciAmJiB5ZWFyLmRhdGEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17eWVhci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt5ZWFyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3llYXIub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3llYXIua2V5K2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlICYmIHR5cGUuZGF0YSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0eXBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3R5cGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dHlwZS5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZS5rZXkraW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW92aWUgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaC5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5zZWFyY2gucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDEzICYmIGJ1dHRvbiAmJiBidXR0b24ucHJvcHMgJiYgYnV0dG9uLnByb3BzLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLm9uQ2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5idXR0b24ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjklXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==