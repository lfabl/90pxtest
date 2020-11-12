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
      objectFit: direction && direction === "column" ? "contain" : "cover",
      maxWidth: direction && direction === "column" ? "250px" : "auto"
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
      lineNumber: 56,
      columnNumber: 9
    }
  }, imdbPoint || buttons ? __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbRow"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, imdbPoint && imdbPoint !== "N/A" ? __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbStickerContainer"],
    style: _objectSpread({}, imdbStickerContainerForDirection),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbSticker"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, "IMDb"), __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["imdbPoint"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, imdbPoint)) : null, buttons ? buttons : null) : null, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5__["year"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, year), __jsx("h4", {
    style: {
      maxWidth: direction && direction === "column" ? "250px" : "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, title), __jsx("p", {
    style: {
      maxWidth: direction && direction === "column" ? "250px" : "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxtQ2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGaWxtQ2FyZCIsInRpdGxlIiwiaW1kYlBvaW50IiwiYnV0dG9ucyIsImluZGV4IiwiaW1hZ2UiLCJ5ZWFyIiwiY29udGVudCIsImltZGJJRCIsInN0eWxlIiwiZGlyZWN0aW9uIiwidXNlR2xvYmFsU3RhdGUiLCJnbG9iYWxTdGF0ZSIsInNldEdsb2JhbFN0YXRlIiwiaXNGYXZvcml0ZSIsIm15RmF2b3JpdGVzIiwiZmluZEluZGV4IiwiZSIsImNvbnRhaW5lclN0eWxlRm9yRGlyZWN0aW9uIiwiZmxleERpcmVjdGlvbiIsImltZGJTdGlja2VyQ29udGFpbmVyRm9yRGlyZWN0aW9uIiwibWFyZ2luVG9wIiwic3RseWVfY29udGFpbmVyIiwic3R5bGVfaW1hZ2UiLCJvYmplY3RGaXQiLCJtYXhXaWR0aCIsInN0eWxlX3JpZ2h0Q29udGFpbmVyIiwic3R5bGVfaW1kYlJvdyIsInN0eWxlX2ltZGJTdGlja2VyQ29udGFpbmVyIiwic3R5bGVfaW1kYlN0aWNrZXIiLCJzdHlsZV9pbWRiUG9pbnQiLCJzdGx5ZV95ZWFyIiwic2V0RmF2b3JpdGVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BV1g7QUFBQTs7QUFBQSxNQVZGQyxLQVVFLFFBVkZBLEtBVUU7QUFBQSxNQVRGQyxTQVNFLFFBVEZBLFNBU0U7QUFBQSxNQVJGQyxPQVFFLFFBUkZBLE9BUUU7QUFBQSxNQVBGQyxLQU9FLFFBUEZBLEtBT0U7QUFBQSxNQU5GQyxLQU1FLFFBTkZBLEtBTUU7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxPQUlFLFFBSkZBLE9BSUU7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxLQUVFLFFB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LEdBQUcsVUFBSCxHQUFlLFdBRHRDO0FBRVIsU0FBSyxFQUFDLFNBRkU7QUFHSSxTQUFLLEVBQUU7QUFDSE8sZUFBUyxFQUFFO0FBRFIsS0FIWDtBQU1JLFdBQU8sRUFBRTtBQUFBLGFBQU1ULFdBQVcsQ0FBQ29CLGdCQUFaLENBQTZCeEIsTUFBN0IsQ0FBTjtBQUFBLEtBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFLTSxVQUFVLEdBQUcsb0JBQUgsR0FBMEIsa0JBUnpDLENBM0RKLENBdEJHLENBQVA7QUE2RkgsQ0FqSEQ7O0dBQU1kLFE7VUFZb0NXLHVEOzs7S0FacENYLFE7QUFrSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC42ZTY1OGNjNTNkN2U2YTViNTUwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xyXG5pbXBvcnQge1xyXG4gICAgY29udGFpbmVyIGFzIHN0bHllX2NvbnRhaW5lcixcclxuICAgIHJpZ2h0Q29udGFpbmVyIGFzIHN0eWxlX3JpZ2h0Q29udGFpbmVyLFxyXG4gICAgaW1hZ2UgYXMgc3R5bGVfaW1hZ2UsXHJcbiAgICBpbWRiUm93IGFzIHN0eWxlX2ltZGJSb3csXHJcbiAgICBpbWRiU3RpY2tlckNvbnRhaW5lciBhcyBzdHlsZV9pbWRiU3RpY2tlckNvbnRhaW5lcixcclxuICAgIGltZGJTdGlja2VyIGFzIHN0eWxlX2ltZGJTdGlja2VyLFxyXG4gICAgeWVhciBhcyBzdGx5ZV95ZWFyLFxyXG4gICAgaW1kYlBvaW50IGFzIHN0eWxlX2ltZGJQb2ludFxyXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBGaWxtQ2FyZCA9ICh7XHJcbiAgICB0aXRsZSxcclxuICAgIGltZGJQb2ludCxcclxuICAgIGJ1dHRvbnMsXHJcbiAgICBpbmRleCxcclxuICAgIGltYWdlLFxyXG4gICAgeWVhcixcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbWRiSUQsXHJcbiAgICBzdHlsZSxcclxuICAgIGRpcmVjdGlvblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbZ2xvYmFsU3RhdGUsIHNldEdsb2JhbFN0YXRlXSA9IHVzZUdsb2JhbFN0YXRlKCk7XHJcbiAgICBjb25zdCBpc0Zhdm9yaXRlID0gZ2xvYmFsU3RhdGUubXlGYXZvcml0ZXMuZmluZEluZGV4KGUgPT4gZSA9PT0gaW1kYklEKSAhPT0gLTE7XHJcbiAgICBjb25zdCBjb250YWluZXJTdHlsZUZvckRpcmVjdGlvbiA9IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgfSA6IHt9O1xyXG4gICAgY29uc3QgaW1kYlN0aWNrZXJDb250YWluZXJGb3JEaXJlY3Rpb24gPSBkaXJlY3Rpb24gJiYgZGlyZWN0aW9uID09PSBcImNvbHVtblwiID8ge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIxMnB4XCJcclxuICAgIH0gOiB7fTtcclxuICAgIHJldHVybiA8ZGl2XHJcbiAgICAgICAga2V5PXsnZmlsbXMtJyArIGluZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3RseWVfY29udGFpbmVyfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIC4uLnN0eWxlLFxyXG4gICAgICAgICAgICAuLi5jb250YWluZXJTdHlsZUZvckRpcmVjdGlvblxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZSAhPT0gXCJOL0FcIiA/XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyBcImNvbnRhaW5cIiA6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyBcIjI1MHB4XCIgOiBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9yaWdodENvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZGJQb2ludCB8fCBidXR0b25zID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVfaW1kYlJvd31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJQb2ludCAmJiBpbWRiUG9pbnQgIT09IFwiTi9BXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWRiU3RpY2tlckNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmltZGJTdGlja2VyQ29udGFpbmVyRm9yRGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWRiU3RpY2tlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU1EYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX2ltZGJQb2ludH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltZGJQb2ludH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0bHllX3llYXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoNFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA9PT0gXCJjb2x1bW5cIiA/IFwiMjUwcHhcIiA6IFwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBkaXJlY3Rpb24gJiYgZGlyZWN0aW9uID09PSBcImNvbHVtblwiID8gXCIyNTBweFwiIDogXCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50ICYmIGNvbnRlbnQgIT09IFwiTi9BXCIgPyBjb250ZW50IDogbnVsbH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXtpc0Zhdm9yaXRlID8gXCJvdXRsaW5lZFwiOiBcImNvbnRhaW5lZFwifVxyXG5cdFx0XHRcdGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnbG9iYWxTdGF0ZS5zZXRGYXZvcml0ZVN0YXRlKGltZGJJRCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpc0Zhdm9yaXRlID8gXCJBZGRlZCB0byBmYXZvcml0ZXNcIiA6IFwiQWRkIHRvIGZhdm9yaXRlc1wifVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWxtQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9