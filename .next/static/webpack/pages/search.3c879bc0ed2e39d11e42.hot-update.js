webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search/index.js":
/*!*******************************!*\
  !*** ./pages/search/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout */ "./layout/index.js");
/* harmony import */ var _components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/breadcrumbs */ "./components/breadcrumbs/index.js");
/* harmony import */ var _components_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/toolbox */ "./components/toolbox/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/search/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../server */ "./server/index.js");
/* harmony import */ var _components_filmCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/filmCard */ "./components/filmCard/index.js");




var _this = undefined,
    _jsxFileName = "D:\\Works\\customer\\nextjs-blog\\pages\\search\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var Search = function Search(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("/"),
      path = _useState[0],
      setPath = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      searchText = _useState2[0],
      setSearchText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      toolBoxSearchValue = _useState3[0],
      setToolBoxSearchValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      err = _useState4[0],
      setErr = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      searchedFilms = _useState5[0],
      setSearchedFilms = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      type = _useState7[0],
      setType = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setPath(window.location.pathname);

    var _searchText = window.location.search.replace("?s=", "").replace(/%20/g, " ");

    setSearchText(_searchText);
    var mainParameters = {
      apikey: _constants__WEBPACK_IMPORTED_MODULE_8__["API_KEY"],
      type: 'movie',
      r: 'json',
      s: _searchText
    };
    var mainQuery = new URLSearchParams(mainParameters);
    Object(_server__WEBPACK_IMPORTED_MODULE_10__["default"])({
      url: _constants__WEBPACK_IMPORTED_MODULE_8__["HOST"] + '?' + mainQuery
    }).then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
        var fullyData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(res.Response === 'True')) {
                  _context2.next = 7;
                  break;
                }

                fullyData = [];
                _context2.next = 4;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["asyncForEach"])(res.Search, /*#__PURE__*/function () {
                  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {
                    var itemParameters, itemQuery, response, itemData;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            itemParameters = {
                              apikey: _constants__WEBPACK_IMPORTED_MODULE_8__["API_KEY"],
                              plot: 'short',
                              type: 'movie',
                              r: 'json',
                              i: item.imdbID
                            };
                            itemQuery = new URLSearchParams(itemParameters);
                            _context.next = 4;
                            return Object(_server__WEBPACK_IMPORTED_MODULE_10__["default"])({
                              url: _constants__WEBPACK_IMPORTED_MODULE_8__["HOST"] + '?' + itemQuery
                            });

                          case 4:
                            response = _context.sent;
                            itemData = JSON.parse(JSON.stringify(response));
                            fullyData.push(itemData);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 4:
                setSearchedFilms(fullyData);
                _context2.next = 8;
                break;

              case 7:
                setErr({
                  message: res['Error']
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"](function (err) {
      alert(err.message);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setPath(window.location.pathname);
  });
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 12
    }
  }, __jsx(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: [{
      title: "Home",
      url: "/"
    }, {
      title: "Search results for " + searchText.toString(),
      selected: true
    }],
    path: path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      width: "100%",
      display: "table",
      marginTop: 20,
      marginBottom: 40
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "table-cell"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      paddingLeft: "10%",
      paddingRight: "10%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_components_toolbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "relative",
    button: {
      label: "Search",
      props: {
        variant: "contained",
        color: "primary"
      }
    },
    search: {
      value: toolBoxSearchValue,
      onChange: function onChange(e) {
        return setToolBoxSearchValue(e.target.value);
      }
    },
    year: {
      key: "toolboxYear",
      id: "dropdown-item-button",
      title: "Year",
      value: year,
      onChange: function onChange(event, index, value) {
        return setYear(value);
      },
      data: [{
        value: "Any",
        "default": true
      }, {
        value: "2019"
      }, {
        value: "2020"
      }]
    },
    type: {
      key: "toolboxType",
      id: "dropdown-item-button",
      title: "Type",
      value: type,
      onChange: function onChange(event, index, value) {
        alert(index);
      },
      data: [{
        value: "Any",
        "default": true
      }, {
        value: "Series"
      }, {
        value: "Movie"
      }, {
        value: "Episode"
      }]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  })))), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["title"],
    style: {
      paddingRight: "10%",
      paddingLeft: "10%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, "Search result for ", year, " ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 38
    }
  }, searchText)), __jsx("div", {
    style: {
      paddingRight: "10%",
      paddingLeft: "10%",
      display: "flex",
      flexWrap: "wrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, searchedFilms && searchedFilms.length ? searchedFilms.map(function (film, filmIndex) {
    return __jsx(_components_filmCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      imdbID: film.imdbID,
      index: filmIndex,
      title: film.Title,
      image: film.Poster,
      content: film.Plot,
      imdbPoint: film.imdbRating,
      key: "film-" + filmIndex,
      year: film.Year,
      direction: "column",
      style: {
        marginLeft: 8,
        marginRight: 8
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 32
      }
    });
  }) : err ? err.message : __jsx("div", {
    style: {
      width: "100%",
      paddingTop: 40,
      paddingBottom: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: 'Poppins'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 39
    }
  }, "Y\xFCkleniyor...")));
};

_s(Search, "GkONnFrj5OCuXYcV0MsVZNWgkTU=");

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfc2VhcmNoVGV4dCIsInNlYXJjaCIsInJlcGxhY2UiLCJtYWluUGFyYW1ldGVycyIsImFwaWtleSIsIkFQSV9LRVkiLCJyIiwicyIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidGl0bGUiLCJ0b1N0cmluZyIsInNlbGVjdGVkIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsYWJlbCIsInByb3BzIiwidmFyaWFudCIsImNvbG9yIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJrZXkiLCJpZCIsImV2ZW50IiwiaW5kZXgiLCJkYXRhIiwic3R5bGVfdGl0bGUiLCJmbGV4V3JhcCIsImxlbmd0aCIsIm1hcCIsImZpbG0iLCJmaWxtSW5kZXgiLCJUaXRsZSIsIlBvc3RlciIsIlBsb3QiLCJpbWRiUmF0aW5nIiwiWWVhciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFHQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BRVQ7QUFBQTs7QUFBQTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsR0FBRCxDQUQ5QjtBQUFBLE1BQ0tDLElBREw7QUFBQSxNQUNXQyxPQURYOztBQUFBLG1CQUVrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjFDO0FBQUEsTUFFS0csVUFGTDtBQUFBLE1BRWlCQyxhQUZqQjs7QUFBQSxtQkFHa0RKLHNEQUFRLENBQUMsRUFBRCxDQUgxRDtBQUFBLE1BR0tLLGtCQUhMO0FBQUEsTUFHeUJDLHFCQUh6Qjs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsSUFBRCxDQUo1QjtBQUFBLE1BSUtPLEdBSkw7QUFBQSxNQUlVQyxNQUpWOztBQUFBLG1CQUt3Q1Isc0RBQVEsQ0FBQyxFQUFELENBTGhEO0FBQUEsTUFLS1MsYUFMTDtBQUFBLE1BS29CQyxnQkFMcEI7O0FBQUEsbUJBTXNCVixzREFBUSxDQUFDLElBQUQsQ0FOOUI7QUFBQSxNQU1LVyxJQU5MO0FBQUEsTUFNV0MsT0FOWDs7QUFBQSxtQkFPc0JaLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT0thLElBUEw7QUFBQSxNQU9XQyxPQVBYOztBQVFGQyx5REFBUyxDQUFDLFlBQU07QUFDWmIsV0FBTyxDQUFDYyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQVA7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixL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QUFPQyxTQUFQLEVBQXFCO0FBQ25DLFdBQU8sTUFBQyw2REFBRDtBQUNILFlBQU0sRUFBRUQsSUFBSSxDQUFDcEMsTUFEVjtBQUVILFdBQUssRUFBRXFDLFNBRko7QUFHSCxXQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FIVDtBQUlILFdBQUssRUFBRUYsSUFBSSxDQUFDRyxNQUpUO0FBS0gsYUFBTyxFQUFFSCxJQUFJLENBQUNJLElBTFg7QUFNSCxlQUFTLEVBQUVKLElBQUksQ0FBQ0ssVUFOYjtBQU9ILFNBQUcsRUFBRSxVQUFRSixTQVBWO0FBUUgsVUFBSSxFQUFFRCxJQUFJLENBQUNNLElBUlI7QUFTSCxlQUFTLEVBQUMsUUFUUDtBQVVILFdBQUssRUFBRTtBQUNIQyxrQkFBVSxFQUFFLENBRFQ7QUFFSEMsbUJBQVcsRUFBRTtBQUZWLE9BVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBZUgsR0FoQkQsQ0FESixHQWtCRTlFLEdBQUcsR0FBR0EsR0FBRyxDQUFDMEMsT0FBUCxHQUFpQjtBQUNsQixTQUFLLEVBQUU7QUFDSEssV0FBSyxFQUFFLE1BREo7QUFFSGdDLGdCQUFVLEVBQUUsRUFGVDtBQUdIQyxtQkFBYSxFQUFFLEVBSFo7QUFJSGhDLGFBQU8sRUFBRSxNQUpOO0FBS0hpQyxvQkFBYyxFQUFFLFFBTGI7QUFNSEMsZ0JBQVUsRUFBRSxRQU5UO0FBT0hDLGdCQUFVLEVBQUU7QUFQVCxLQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBM0I5QixDQXJHRyxDQUFQO0FBZ0pILENBeE1EOztHQUFNM0YsTTs7S0FBQUEsTTtBQXlNU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjNjODc5YmMwZWQyZTM5ZDExZTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgdXNlU3RhdGVcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vbGF5b3V0XCI7XHJcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IFRvb2xib3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJveFwiO1xyXG5pbXBvcnQge1xyXG4gICAgdGl0bGUgYXMgc3R5bGVfdGl0bGVcclxufSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQVBJX0tFWSxcclxuICAgIEhPU1RcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBhc3luY0ZvckVhY2hcclxufSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IEZpbG1DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpbG1DYXJkXCI7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoe1xyXG5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoXCIvXCIpO1xyXG4gICAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdG9vbEJveFNlYXJjaFZhbHVlLCBzZXRUb29sQm94U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoZWRGaWxtcywgc2V0U2VhcmNoZWRGaWxtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgY29uc3QgX3NlYXJjaFRleHQgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/cz1cIiwgXCJcIikucmVwbGFjZSgvJTIwL2csIFwiIFwiKTtcclxuICAgICAgICBzZXRTZWFyY2hUZXh0KF9zZWFyY2hUZXh0KTtcclxuICAgICAgICBjb25zdCBtYWluUGFyYW1ldGVycyA9IHtcclxuXHRcdFx0YXBpa2V5OiBBUElfS0VZLFxyXG5cdFx0XHR0eXBlOiAnbW92aWUnLFxyXG5cdFx0XHRyOiAnanNvbicsXHJcblx0XHRcdHM6IF9zZWFyY2hUZXh0XHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgbWFpblF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhtYWluUGFyYW1ldGVycyk7XHJcblx0XHRhcGkoe1xyXG5cdFx0XHR1cmw6IEhPU1QgKyAnPycgKyBtYWluUXVlcnlcclxuXHRcdH0pXHJcblx0XHQudGhlbihhc3luYyAocmVzKSA9PiB7XHJcblx0XHRcdGlmIChyZXMuUmVzcG9uc2UgPT09ICdUcnVlJykge1xyXG5cdFx0XHRcdGxldCBmdWxseURhdGEgPSBbXTtcclxuXHRcdFx0XHRhd2FpdCBhc3luY0ZvckVhY2gocmVzLlNlYXJjaCwgYXN5bmMgKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW1QYXJhbWV0ZXJzID0ge1xyXG5cdFx0XHRcdFx0XHRhcGlrZXk6IEFQSV9LRVksXHJcblx0XHRcdFx0XHRcdHBsb3Q6ICdzaG9ydCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdtb3ZpZScsXHJcblx0XHRcdFx0XHRcdHI6ICdqc29uJyxcclxuXHRcdFx0XHRcdFx0aTogaXRlbS5pbWRiSURcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW1RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaXRlbVBhcmFtZXRlcnMpO1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IEhPU1QgKyAnPycgKyBpdGVtUXVlcnlcclxuXHRcdFx0XHRcdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuXHRcdFx0XHRcdGZ1bGx5RGF0YS5wdXNoKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cdFx0XHRcdHNldFNlYXJjaGVkRmlsbXMoZnVsbHlEYXRhKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRFcnIoe1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzWydFcnJvciddXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRhbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHR9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPExheW91dD5cclxuICAgICAgICA8QnJlYWRjcnVtYnNcclxuICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlYXJjaCByZXN1bHRzIGZvciBcIiArIHNlYXJjaFRleHQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBwYXRoPXtwYXRofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJ0YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJ0YWJsZS1jZWxsXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImNvbnRhaW5lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b29sQm94U2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHNldFRvb2xCb3hTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2xib3hZZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWWVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50LCBpbmRleCwgdmFsdWUpID0+IHNldFllYXIodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2xib3hUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50LCBpbmRleCwgdmFsdWUpID0+IHthbGVydChpbmRleCl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU2VyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTW92aWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJFcGlzb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV90aXRsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWFyY2ggcmVzdWx0IGZvciB7eWVhcn0gPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ29sZGVucm9kXCIgfX0+e3NlYXJjaFRleHR9PC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcyAmJiBzZWFyY2hlZEZpbG1zLmxlbmd0aCA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcy5tYXAoKGZpbG0sIGZpbG1JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZpbG1DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiSUQ9e2ZpbG0uaW1kYklEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxtLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ZpbG0uUG9zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZmlsbS5QbG90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1kYlBvaW50PXtmaWxtLmltZGJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wiZmlsbS1cIitmaWxtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXtmaWxtLlllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IGVyciA/IGVyci5tZXNzYWdlIDogPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWcO8a2xlbml5b3IuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=