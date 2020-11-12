webpackHotUpdate_N_E("pages/index",{

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
    value: year.value,
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
        lineNumber: 42,
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
    value: type.value,
    onChange: type.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 70,
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
        button.props.onClick();
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYm94L2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvb2xib3giLCJ5ZWFyIiwidHlwZSIsInNlYXJjaCIsImJ1dHRvbiIsInBvc2l0aW9uIiwic3R5bGVfY29udGFpbmVyIiwic3R5bGVfdGFibGUiLCJzdHlsZV9jb250ZW50Iiwid2lkdGgiLCJib3R0b20iLCJkYXRhIiwiaWQiLCJ0aXRsZSIsInZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJwcm9wcyIsImUiLCJrZXlDb2RlIiwib25DbGljayIsIm1hcmdpblRvcCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBOztBQU1BLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BTVY7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxJQUlFLFFBSkZBLElBSUU7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxNQUVFLFFBRkZBLE1BRUU7QUFBQSxNQURGQyxRQUNFLFFBREZBLFFBQ0U7QUFDRixTQUFPO0FBQ0gsYUFBUyxFQUFFQywyREFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0g7QUFBSyxhQUFTLEVBQUVDLHVEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLHlEQUFoQjtBQUErQixTQUFLLEVBQUU7QUFDbENILGNBQVEsRUFBRUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsVUFERTtBQUVsQ0ksV0FBSyxFQUFFSixRQUFRLEtBQUssVUFBYixHQUEwQixNQUExQixHQUFtQyxNQUZSO0FBR2xDSyxZQUFNLEVBQUVMLFFBQVEsS0FBSyxVQUFiLEdBQTBCLFNBQTFCLEdBQXNDO0FBSFosS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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L3dlYnBhY2svcGFnZXMvaW5kZXguNGE4NDhhNzU3M2M3NDZjY2UzZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBNZW51SXRlbSxcclxuICAgIFRleHRGaWVsZFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIGNvbnRhaW5lciBhcyBzdHlsZV9jb250YWluZXIsXHJcbiAgICB0YWJsZSBhcyBzdHlsZV90YWJsZSxcclxuICAgIGNvbnRlbnQgYXMgc3R5bGVfY29udGVudFxyXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBUb29sYm94ID0gKHtcclxuICAgIHllYXIsXHJcbiAgICB0eXBlLFxyXG4gICAgc2VhcmNoLFxyXG4gICAgYnV0dG9uLFxyXG4gICAgcG9zaXRpb25cclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlX2NvbnRhaW5lcn1cclxuICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVfdGFibGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVfY29udGVudH0gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiA/IHBvc2l0aW9uIDogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHBvc2l0aW9uID09PSBcInJlbGF0aXZlXCIgPyBcImF1dG9cIiA6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBwb3NpdGlvbiA9PT0gXCJyZWxhdGl2ZVwiID8gXCJpbml0aWFsXCIgOiBcIi0xMzVweFwiXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXIgJiYgeWVhci5kYXRhID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3llYXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17eWVhci50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3llYXIub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3llYXIua2V5K2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlICYmIHR5cGUuZGF0YSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0eXBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3R5cGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0eXBlLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlLmtleStpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3ZpZSBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2VhcmNoLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNlYXJjaC5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gMTMgJiYgYnV0dG9uICYmIGJ1dHRvbi5wcm9wcyAmJiBidXR0b24ucHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ucHJvcHMub25DbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmJ1dHRvbi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9vbGJveDsiXSwic291cmNlUm9vdCI6IiJ9