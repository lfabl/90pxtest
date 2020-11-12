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
      _setYear = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      type = _useState7[0],
      _setType = _useState7[1];

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
      year: year,
      setYear: function setYear(event, index, value) {
        return _setYear(value);
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
      type: type,
      setType: function setType(event, index, value) {
        return _setType(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfc2VhcmNoVGV4dCIsInNlYXJjaCIsInJlcGxhY2UiLCJtYWluUGFyYW1ldGVycyIsImFwaWtleSIsIkFQSV9LRVkiLCJyIiwicyIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidGl0bGUiLCJ0b1N0cmluZyIsInNlbGVjdGVkIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsYWJlbCIsInByb3BzIiwidmFyaWFudCIsImNvbG9yIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJrZXkiLCJpZCIsImV2ZW50IiwiaW5kZXgiLCJkYXRhIiwic3R5bGVfdGl0bGUiLCJmbGV4V3JhcCIsImxlbmd0aCIsIm1hcCIsImZpbG0iLCJmaWxtSW5kZXgiLCJUaXRsZSIsIlBvc3RlciIsIlBsb3QiLCJpbWRiUmF0aW5nIiwiWWVhciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFHQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BRVQ7QUFBQTs7QUFBQTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsR0FBRCxDQUQ5QjtBQUFBLE1BQ0tDLElBREw7QUFBQSxNQUNXQyxPQURYOztBQUFBLG1CQUVrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjFDO0FBQUEsTUFFS0csVUFGTDtBQUFBLE1BRWlCQyxhQUZqQjs7QUFBQSxtQkFHa0RKLHNEQUFRLENBQUMsRUFBRCxDQUgxRDtBQUFBLE1BR0tLLGtCQUhMO0FBQUEsTUFHeUJDLHFCQUh6Qjs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsSUFBRCxDQUo1QjtBQUFBLE1BSUtPLEdBSkw7QUFBQSxNQUlVQyxNQUpWOztBQUFBLG1CQUt3Q1Isc0RBQVEsQ0FBQyxFQUFELENBTGhEO0FBQUEsTUFLS1MsYUFMTDtBQUFBLE1BS29CQyxnQkFMcEI7O0FBQUEsbUJBTXNCVixzREFBUSxDQUFDLElBQUQsQ0FOOUI7QUFBQSxNQU1LVyxJQU5MO0FBQUEsTUFNV0MsUUFOWDs7QUFBQSxtQkFPc0JaLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT0thLElBUEw7QUFBQSxNQU9XQyxRQVBYOztBQVFGQyx5REFBUyxDQUFDLFlBQU07QUFDWmIsV0FBTyxDQUFDYyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQVA7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixL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RUFBT0MsU0FBUCxFQUFxQjtBQUNuQyxXQUFPLE1BQUMsNkRBQUQ7QUFDSCxZQUFNLEVBQUVELElBQUksQ0FBQ3BDLE1BRFY7QUFFSCxXQUFLLEVBQUVxQyxTQUZKO0FBR0gsV0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBSFQ7QUFJSCxXQUFLLEVBQUVGLElBQUksQ0FBQ0csTUFKVDtBQUtILGFBQU8sRUFBRUgsSUFBSSxDQUFDSSxJQUxYO0FBTUgsZUFBUyxFQUFFSixJQUFJLENBQUNLLFVBTmI7QUFPSCxTQUFHLEVBQUUsVUFBUUosU0FQVjtBQVFILFVBQUksRUFBRUQsSUFBSSxDQUFDTSxJQVJSO0FBU0gsZUFBUyxFQUFDLFFBVFA7QUFVSCxXQUFLLEVBQUU7QUFDSEMsa0JBQVUsRUFBRSxDQURUO0FBRUhDLG1CQUFXLEVBQUU7QUFGVixPQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQWVILEdBaEJELENBREosR0FrQkU5RSxHQUFHLEdBQUdBLEdBQUcsQ0FBQzBDLE9BQVAsR0FBaUI7QUFDbEIsU0FBSyxFQUFFO0FBQ0hLLFdBQUssRUFBRSxNQURKO0FBRUhnQyxnQkFBVSxFQUFFLEVBRlQ7QUFHSEMsbUJBQWEsRUFBRSxFQUhaO0FBSUhoQyxhQUFPLEVBQUUsTUFKTjtBQUtIaUMsb0JBQWMsRUFBRSxRQUxiO0FBTUhDLGdCQUFVLEVBQUUsUUFOVDtBQU9IQyxnQkFBVSxFQUFFO0FBUFQsS0FEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTNCOUIsQ0FyR0csQ0FBUDtBQWdKSCxDQXhNRDs7R0FBTTNGLE07O0tBQUFBLE07QUF5TVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4zYjVjMzUyMDFiZjk3ZmJjMmQ2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVN0YXRlXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dFwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBUb29sYm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rvb2xib3hcIjtcclxuaW1wb3J0IHtcclxuICAgIHRpdGxlIGFzIHN0eWxlX3RpdGxlXHJcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtcclxuICAgIEFQSV9LRVksXHJcbiAgICBIT1NUXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgYXN5bmNGb3JFYWNoXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmVyXCI7XHJcbmltcG9ydCBGaWxtQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWxtQ2FyZFwiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKHtcclxuXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiL1wiKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Rvb2xCb3hTZWFyY2hWYWx1ZSwgc2V0VG9vbEJveFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaGVkRmlsbXMsIHNldFNlYXJjaGVkRmlsbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IF9zZWFyY2hUZXh0ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP3M9XCIsIFwiXCIpLnJlcGxhY2UoLyUyMC9nLCBcIiBcIik7XHJcbiAgICAgICAgc2V0U2VhcmNoVGV4dChfc2VhcmNoVGV4dCk7XHJcbiAgICAgICAgY29uc3QgbWFpblBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRzOiBfc2VhcmNoVGV4dFxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IG1haW5RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobWFpblBhcmFtZXRlcnMpO1xyXG5cdFx0YXBpKHtcclxuXHRcdFx0dXJsOiBIT1NUICsgJz8nICsgbWFpblF1ZXJ5XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG5cdFx0XHRpZiAocmVzLlJlc3BvbnNlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0XHRsZXQgZnVsbHlEYXRhID0gW107XHJcblx0XHRcdFx0YXdhaXQgYXN5bmNGb3JFYWNoKHJlcy5TZWFyY2gsIGFzeW5jIChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUGFyYW1ldGVycyA9IHtcclxuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxyXG5cdFx0XHRcdFx0XHRwbG90OiAnc2hvcnQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnbW92aWUnLFxyXG5cdFx0XHRcdFx0XHRyOiAnanNvbicsXHJcblx0XHRcdFx0XHRcdGk6IGl0ZW0uaW1kYklEXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGl0ZW1QYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBIT1NUICsgJz8nICsgaXRlbVF1ZXJ5XHJcblx0XHRcdFx0XHR9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcblx0XHRcdFx0XHRmdWxseURhdGEucHVzaChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHRcdFx0XHRzZXRTZWFyY2hlZEZpbG1zKGZ1bGx5RGF0YSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0RXJyKHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc1snRXJyb3InXVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0YWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJzXHJcbiAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWFyY2ggcmVzdWx0cyBmb3IgXCIgKyBzZWFyY2hUZXh0LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJjb250YWluZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdG9vbEJveFNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRUb29sQm94U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sYm94WWVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlllYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRZZWFyOiAoZXZlbnQsIGluZGV4LCB2YWx1ZSkgPT4gc2V0WWVhcih2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJBbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbGJveFR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZTogKGV2ZW50LCBpbmRleCwgdmFsdWUpID0+IHNldFR5cGUodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU2VyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTW92aWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJFcGlzb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV90aXRsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWFyY2ggcmVzdWx0IGZvciB7eWVhcn0gPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ29sZGVucm9kXCIgfX0+e3NlYXJjaFRleHR9PC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcyAmJiBzZWFyY2hlZEZpbG1zLmxlbmd0aCA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcy5tYXAoKGZpbG0sIGZpbG1JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZpbG1DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiSUQ9e2ZpbG0uaW1kYklEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxtLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ZpbG0uUG9zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZmlsbS5QbG90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1kYlBvaW50PXtmaWxtLmltZGJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wiZmlsbS1cIitmaWxtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXtmaWxtLlllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IGVyciA/IGVyci5tZXNzYWdlIDogPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWcO8a2xlbml5b3IuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=