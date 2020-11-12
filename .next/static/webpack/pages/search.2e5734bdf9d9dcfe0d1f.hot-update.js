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
    style: {
      maxWidth: direction && direction === "column" ? "200px" : "auto"
    },
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
      lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxtQ2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJGaWxtQ2FyZCIsInRpdGxlIiwiaW1kYlBvaW50IiwiYnV0dG9ucyIsImluZGV4IiwiaW1hZ2UiLCJ5ZWFyIiwiY29udGVudCIsImltZGJJRCIsInN0eWxlIiwiZGlyZWN0aW9uIiwidXNlR2xvYmFsU3RhdGUiLCJnbG9iYWxTdGF0ZSIsInNldEdsb2JhbFN0YXRlIiwiaXNGYXZvcml0ZSIsIm15RmF2b3JpdGVzIiwiZmluZEluZGV4IiwiZSIsImNvbnRhaW5lclN0eWxlRm9yRGlyZWN0aW9uIiwiZmxleERpcmVjdGlvbiIsImltZGJTdGlja2VyQ29udGFpbmVyRm9yRGlyZWN0aW9uIiwibWFyZ2luVG9wIiwic3RseWVfY29udGFpbmVyIiwic3R5bGVfaW1hZ2UiLCJvYmplY3RGaXQiLCJzdHlsZV9yaWdodENvbnRhaW5lciIsInN0eWxlX2ltZGJSb3ciLCJzdHlsZV9pbWRiU3RpY2tlckNvbnRhaW5lciIsInN0eWxlX2ltZGJTdGlja2VyIiwic3R5bGVfaW1kYlBvaW50Iiwic3RseWVfeWVhciIsIm1heFdpZHRoIiwic2V0RmF2b3JpdGVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BV1g7QUFBQTs7QUFBQSxNQVZGQyxLQVVFLFFBVkZBLEtBVUU7QUFBQSxNQVRGQyxTQVNFLFFBVEZBLFNBU0U7QUFBQSxNQVJGQyxPQVFFLFFBUkZBLE9BUUU7QUFBQSxNQVBGQyxLQU9FLFFBUEZBLEtBT0U7QUFBQSxNQU5GQyxLQU1FLFFBTkZBLEtBTUU7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxPQUlFLFFBSkZBLE9BSUU7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxLQUVFLFFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUtNLFVBQVUsR0FBRyxvQkFBSCxHQUEwQixrQkFSekMsQ0FyREosQ0FyQkcsQ0FBUDtBQXNGSCxDQTFHRDs7R0FBTWQsUTtVQVlvQ1csdUQ7OztLQVpwQ1gsUTtBQTJHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjJlNTczNGJkZjlkOWRjZmUwZDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XHJcbmltcG9ydCB7XHJcbiAgICBjb250YWluZXIgYXMgc3RseWVfY29udGFpbmVyLFxyXG4gICAgcmlnaHRDb250YWluZXIgYXMgc3R5bGVfcmlnaHRDb250YWluZXIsXHJcbiAgICBpbWFnZSBhcyBzdHlsZV9pbWFnZSxcclxuICAgIGltZGJSb3cgYXMgc3R5bGVfaW1kYlJvdyxcclxuICAgIGltZGJTdGlja2VyQ29udGFpbmVyIGFzIHN0eWxlX2ltZGJTdGlja2VyQ29udGFpbmVyLFxyXG4gICAgaW1kYlN0aWNrZXIgYXMgc3R5bGVfaW1kYlN0aWNrZXIsXHJcbiAgICB5ZWFyIGFzIHN0bHllX3llYXIsXHJcbiAgICBpbWRiUG9pbnQgYXMgc3R5bGVfaW1kYlBvaW50XHJcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEZpbG1DYXJkID0gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgaW1kYlBvaW50LFxyXG4gICAgYnV0dG9ucyxcclxuICAgIGluZGV4LFxyXG4gICAgaW1hZ2UsXHJcbiAgICB5ZWFyLFxyXG4gICAgY29udGVudCxcclxuICAgIGltZGJJRCxcclxuICAgIHN0eWxlLFxyXG4gICAgZGlyZWN0aW9uXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtnbG9iYWxTdGF0ZSwgc2V0R2xvYmFsU3RhdGVdID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuICAgIGNvbnN0IGlzRmF2b3JpdGUgPSBnbG9iYWxTdGF0ZS5teUZhdm9yaXRlcy5maW5kSW5kZXgoZSA9PiBlID09PSBpbWRiSUQpICE9PSAtMTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlRm9yRGlyZWN0aW9uID0gZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA9PT0gXCJjb2x1bW5cIiA/IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiXHJcbiAgICB9IDoge307XHJcbiAgICBjb25zdCBpbWRiU3RpY2tlckNvbnRhaW5lckZvckRpcmVjdGlvbiA9IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPT09IFwiY29sdW1uXCIgPyB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEycHhcIlxyXG4gICAgfSA6IHt9O1xyXG4gICAgcmV0dXJuIDxkaXZcclxuICAgICAgICBrZXk9eydmaWxtcy0nICsgaW5kZXh9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdGx5ZV9jb250YWluZXJ9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgIC4uLmNvbnRhaW5lclN0eWxlRm9yRGlyZWN0aW9uXHJcbiAgICAgICAgfX1cclxuICAgID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlICE9PSBcIk4vQVwiID9cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA9PT0gXCJjb2x1bW5cIiA/IFwiY29udGFpblwiIDogXCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX3JpZ2h0Q29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1kYlBvaW50IHx8IGJ1dHRvbnMgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9pbWRiUm93fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1kYlBvaW50ICYmIGltZGJQb2ludCAhPT0gXCJOL0FcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX2ltZGJTdGlja2VyQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaW1kYlN0aWNrZXJDb250YWluZXJGb3JEaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX2ltZGJTdGlja2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJTURiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVfaW1kYlBvaW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1kYlBvaW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RseWVfeWVhcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3llYXJ9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA9PT0gXCJjb2x1bW5cIiA/IFwiMjAwcHhcIiA6IFwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudCAmJiBjb250ZW50ICE9PSBcIk4vQVwiID8gY29udGVudCA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17aXNGYXZvcml0ZSA/IFwib3V0bGluZWRcIjogXCJjb250YWluZWRcIn1cclxuXHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2xvYmFsU3RhdGUuc2V0RmF2b3JpdGVTdGF0ZShpbWRiSUQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNGYXZvcml0ZSA/IFwiQWRkZWQgdG8gZmF2b3JpdGVzXCIgOiBcIkFkZCB0byBmYXZvcml0ZXNcIn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmlsbUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==