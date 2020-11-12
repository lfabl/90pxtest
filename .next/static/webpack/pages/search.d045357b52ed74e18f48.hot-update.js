webpackHotUpdate_N_E("pages/search",{

/***/ "./components/filmCard/index.js":
/*!**************************************!*\
  !*** ./components/filmCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./components/filmCard/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "D:\\Works\\customer\\nextjs-blog\\components\\filmCard\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FilmCard = function FilmCard(_ref) {
  _s();

  var title = _ref.title,
      imdbPoint = _ref.imdbPoint,
      buttons = _ref.buttons,
      index = _ref.index,
      image = _ref.image,
      year = _ref.year,
      content = _ref.content,
      imdbID = _ref.imdbID,
      style = _ref.style,
      direction = _ref.direction;

  var _useGlobalState = Object(_context__WEBPACK_IMPORTED_MODULE_4__["useGlobalState"])(),
      _useGlobalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalState, 2),
      globalState = _useGlobalState2[0],
      setGlobalState = _useGlobalState2[1];

  var isFavorite = globalState.myFavorites.findIndex(function (e) {
    return e === imdbID;
  }) !== -1;
  var containerStyleForDirection = direction && direction === "column" ? {
    flexDirection: "column"
  } : {};
  var imdbStickerContainerForDirection = direction && direction === "column" ? {
    marginTop: "12px"
  } : {};
  return __jsx("div", {
    key: 'films-' + index,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["container"],
    style: _objectSpread(_objectSpread({}, style), containerStyleForDirection),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  }, image !== "N/A" ? __jsx("img", {
    src: image,
    height: "200px",
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["image"],
    style: {
      objectFit: direction && direction === "column" ? "contain" : "cover"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }) : null, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["rightContainer"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, imdbPoint || buttons ? __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbRow"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, imdbPoint && imdbPoint !== "N/A" ? __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbStickerContainer"],
    style: _objectSpread({}, imdbStickerContainerForDirection),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbSticker"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, "IMDb"), __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbPoint"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, imdbPoint)) : null, buttons ? buttons : null) : null, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["year"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, year), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, content && content !== "N/A" ? content : null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: isFavorite ? "outlined" : "contained",
    color: "primary",
    style: {
      marginTop: 20
    },
    onClick: function onClick() {
      return globalState.setFavoriteState(imdbID);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, isFavorite ? "Added to favorites" : "Add to favorites")));
};

_s(FilmCard, "Gfz5Tk17MefnFDt7KDp/7Vm1qLM=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_4__["useGlobalState"]];
});

_c = FilmCard;
/* harmony default export */ __webpack_exports__["default"] = (FilmCard);

var _c;

$RefreshReg$(_c, "FilmCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxtQ2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGaWxtQ2FyZCIsInRpdGxlIiwiaW1kYlBvaW50IiwiYnV0dG9ucyIsImluZGV4IiwiaW1hZ2UiLCJ5ZWFyIiwiY29udGVudCIsImltZGJJRCIsInN0eWxlIiwiZGlyZWN0aW9uIiwidXNlR2xvYmFsU3RhdGUiLCJnbG9iYWxTdGF0ZSIsInNldEdsb2JhbFN0YXRlIiwiaXNGYXZvcml0ZSIsIm15RmF2b3JpdGVzIiwiZmluZEluZGV4IiwiZSIsImNvbnRhaW5lclN0eWxlRm9yRGlyZWN0aW9uIiwiZmxleERpcmVjdGlvbiIsImltZGJTdGlja2VyQ29udGFpbmVyRm9yRGlyZWN0aW9uIiwibWFyZ2luVG9wIiwic3RseWVfY29udGFpbmVyIiwic3R5bGVfaW1hZ2UiLCJvYmplY3RGaXQiLCJzdHlsZV9yaWdodENvbnRhaW5lciIsInN0eWxlX2ltZGJSb3ciLCJzdHlsZV9pbWRiU3RpY2tlckNvbnRhaW5lciIsInN0eWxlX2ltZGJTdGlja2VyIiwic3R5bGVfaW1kYlBvaW50Iiwic3RseWVfeWVhciIsInNldEZhdm9yaXRlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFXQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQVdYO0FBQUE7O0FBQUEsTUFWRkMsS0FVRSxRQVZGQSxLQVVFO0FBQUEsTUFURkMsU0FTRSxRQVRGQSxTQVNFO0FBQUEsTUFSRkMsT0FRRSxRQVJGQSxPQVFFO0FBQUEsTUFQRkMsS0FPRSxRQVBGQSxLQU9FO0FBQUEsTUFORkMsS0FNRSxRQU5GQSxLQU1FO0FBQUEsTUFMRkMsSUFLRSxRQUxGQSxJQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsS0FFRSxRQUZGQSxLQUVFO0FB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QU1kLFE7VUFZb0NXLHVEOzs7S0FacENYLFE7QUF1R1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5kMDQ1MzU3YjUyZWQ3NGUxOGY0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xyXG5pbXBvcnQge1xyXG4gICAgY29udGFpbmVyIGFzIHN0bHllX2NvbnRhaW5lcixcclxuICAgIHJpZ2h0Q29udGFpbmVyIGFzIHN0eWxlX3JpZ2h0Q29udGFpbmVyLFxyXG4gICAgaW1hZ2UgYXMgc3R5bGVfaW1hZ2UsXHJcbiAgICBpbWRiUm93IGFzIHN0eWxlX2ltZGJSb3csXHJcbiAgICBpbWRiU3RpY2tlckNvbnRhaW5lciBhcyBzdHlsZV9pbWRiU3RpY2tlckNvbnRhaW5lcixcclxuICAgIGltZGJTdGlja2VyIGFzIHN0eWxlX2ltZGJTdGlja2VyLFxyXG4gICAgeWVhciBhcyBzdGx5ZV95ZWFyLFxyXG4gICAgaW1kYlBvaW50IGFzIHN0eWxlX2ltZGJQb2ludFxyXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBGaWxtQ2FyZCA9ICh7XHJcbiAgICB0aXRsZSxcclxuICAgIGltZGJQb2ludCxcclxuICAgIGJ1dHRvbnMsXHJcbiAgICBpbmRleCxcclxuICAgIGltYWdlLFxyXG4gICAgeWVhcixcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbWRiSUQsXHJcbiAgICBzdHlsZSxcclxuICAgIGRpcmVjdGlvblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbZ2xvYmFsU3RhdGUsIHNldEdsb2JhbFN0YXRlXSA9IHVzZUdsb2JhbFN0YXRlKCk7XHJcbiAgICBjb25zdCBpc0Zhdm9yaXRlID0gZ2xvYmFsU3RhdGUubXlGYXZvcml0ZXMuZmluZEluZGV4KGUgPT4gZSA9PT0gaW1kYklEKSAhPT0gLTE7XHJcbiAgICBjb25zdCBjb250YWluZXJTdHlsZUZvckRpcmVjdGlvbiA9IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgfSA6IHt9O1xyXG4gICAgY29uc3QgaW1kYlN0aWNrZXJDb250YWluZXJGb3JEaXJlY3Rpb24gPSBkaXJlY3Rpb24gJiYgZGlyZWN0aW9uID09PSBcImNvbHVtblwiID8ge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMnB4XCJcclxuICAgIH0gOiB7fTtcclxuICAgIHJldHVybiA8ZGl2XHJcbiAgICAgICAga2V5PXsnZmlsbXMtJyArIGluZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3RseWVfY29udGFpbmVyfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAuLi5jb250YWluZXJTdHlsZUZvckRpcmVjdGlvblxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZSAhPT0gXCJOL0FcIiA/XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyBcImNvbnRhaW5cIiA6IFwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9yaWdodENvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZGJQb2ludCB8fCBidXR0b25zID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVfaW1kYlJvd31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJQb2ludCAmJiBpbWRiUG9pbnQgIT09IFwiTi9BXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWRiU3RpY2tlckNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmltZGJTdGlja2VyQ29udGFpbmVyRm9yRGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWRiU3RpY2tlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU1EYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX2ltZGJQb2ludH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltZGJQb2ludH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0bHllX3llYXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudCAmJiBjb250ZW50ICE9PSBcIk4vQVwiID8gY29udGVudCA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17aXNGYXZvcml0ZSA/IFwib3V0bGluZWRcIjogXCJjb250YWluZWRcIn1cclxuXHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2xvYmFsU3RhdGUuc2V0RmF2b3JpdGVTdGF0ZShpbWRiSUQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNGYXZvcml0ZSA/IFwiQWRkZWQgdG8gZmF2b3JpdGVzXCIgOiBcIkFkZCB0byBmYXZvcml0ZXNcIn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmlsbUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==