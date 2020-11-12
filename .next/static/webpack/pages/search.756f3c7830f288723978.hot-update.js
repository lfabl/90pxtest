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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      updateSearch = _useState8[0],
      setUpdateSearch = _useState8[1];

  var search = function search(_ref2) {
    var s = _ref2.s,
        type = _ref2.type,
        y = _ref2.y;
    var mainParameters = {
      apikey: _constants__WEBPACK_IMPORTED_MODULE_8__["API_KEY"],
      type: 'movie',
      r: 'json',
      s: s
    };
    if (type) mainParameters.type = type;
    if (y) mainParameters.y = y;
    var mainQuery = new URLSearchParams(mainParameters);
    Object(_server__WEBPACK_IMPORTED_MODULE_10__["default"])({
      url: _constants__WEBPACK_IMPORTED_MODULE_8__["HOST"] + '?' + mainQuery
    }).then( /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
        var fullyData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(res.Response === 'True')) {
                  _context2.next = 8;
                  break;
                }

                fullyData = [];
                _context2.next = 4;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["asyncForEach"])(res.Search, /*#__PURE__*/function () {
                  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {
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
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 4:
                setSearchedFilms(fullyData);
                setSearchText(s);
                _context2.next = 9;
                break;

              case 8:
                setErr({
                  message: res['Error']
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }())["catch"](function (err) {
      alert(err.message);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setPath(window.location.pathname);

    var _searchText = window.location.search.replace("?s=", "").replace(/%20/g, " ");

    setSearchText(_searchText);
    search({
      s: _searchText
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setPath(window.location.pathname);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (updateSearch) search(updateSearch);
  }, [updateSearch]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setUpdateSearch(null);
  }, [searchedFilms]);
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
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
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "table-cell"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx(_components_toolbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "relative",
    button: {
      label: "Search",
      props: {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          setUpdateSearch({
            s: toolBoxSearchValue,
            type: type,
            y: year
          });
        }
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
      onChange: function onChange(event) {
        return setYear(event.target.value);
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
      onChange: function onChange(event) {
        return setType(event.target.value);
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
      lineNumber: 130,
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
      lineNumber: 193,
      columnNumber: 9
    }
  }, "Search result for ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 31
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
      lineNumber: 202,
      columnNumber: 9
    }
  }, searchedFilms && searchedFilms.length && updateSearch === null ? searchedFilms.map(function (film, filmIndex) {
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
        lineNumber: 213,
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
      lineNumber: 229,
      columnNumber: 39
    }
  }, "Y\xFCkleniyor...")));
};

_s(Search, "2e5D2lzyfVMb/6eIm/VjaSCBu8c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVwZGF0ZVNlYXJjaCIsInNldFVwZGF0ZVNlYXJjaCIsInNlYXJjaCIsInMiLCJ5IiwibWFpblBhcmFtZXRlcnMiLCJhcGlrZXkiLCJBUElfS0VZIiwiciIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl9zZWFyY2hUZXh0IiwicmVwbGFjZSIsInRpdGxlIiwidG9TdHJpbmciLCJzZWxlY3RlZCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGFiZWwiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImtleSIsImlkIiwiZXZlbnQiLCJkYXRhIiwic3R5bGVfdGl0bGUiLCJmbGV4V3JhcCIsImxlbmd0aCIsIm1hcCIsImZpbG0iLCJmaWxtSW5kZXgiLCJUaXRsZSIsIlBvc3RlciIsIlBsb3QiLCJpbWRiUmF0aW5nIiwiWWVhciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFHQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BRVQ7QUFBQTs7QUFBQTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsR0FBRCxDQUQ5QjtBQUFBLE1BQ0tDLElBREw7QUFBQSxNQUNXQyxPQURYOztBQUFBLG1CQUVrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjFDO0FBQUEsTUFFS0csVUFGTDtBQUFBLE1BRWlCQyxhQUZqQjs7QUFBQSxtQkFHa0RKLHNEQUFRLENBQUMsRUFBRCxDQUgxRDtBQUFBLE1BR0tLLGtCQUhMO0FBQUEsTUFHeUJDLHFCQUh6Qjs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsSUFBRCxDQUo1QjtBQUFBLE1BSUtPLEdBSkw7QUFBQSxNQUlVQyxNQUpWOztBQUFBLG1CQUt3Q1Isc0RBQVEsQ0FBQyxFQUFELENBTGhEO0FBQUEsTUFLS1MsYUFMTDtBQUFBLE1BS29CQyxnQkFMcEI7O0FBQUEsbUJBTXNCVixzREFBUSxDQUFDLElBQUQsQ0FOOUI7QUFBQSxNQU1LVyxJQU5MO0FBQUEsTUFNV0MsT0FOWDs7QUFBQSxtQkFPc0JaLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT0thLElBUEw7QUFBQSxNQU9XQyxPQVBYOztBQUFBLG1CQVFzQ2Qsc0RBQVEsQ0FBQyxJQUFELENBUjlDO0FBQUEsTUFRS2UsWUFSTDtBQUFBLE1BUW1CQyxlQVJuQjs7QUFTRixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxRQUlUO0FBQUEsUUFIRkMsQ0FHRSxTQUhGQSxDQUdFO0FBQUEsUUFGRkwsSUFFRSxTQUZGQSxJQUVFO0FBQUEsUUFERk0sQ0FDRSxTQURGQSxDQUNFO0FBQ0YsUUFBSUMsY0FBYyxHQUFHO0FBQzFCQyxZQUFNLEVBQUVDLGtEQURrQjtBQUUxQlQsVUFBSSxFQUFFLE9BRm9CO0FBRzFCVSxPQUFDLEVBQUUsTUFIdUI7QUFJMUJMLE9BQUMsRUFBRUE7QUFKdUIsS0FBckI7QUFNQSxRQUFHTCxJQUFILEVBQVNPLGNBQWMsQ0FBQ1AsSUFBZixHQUFzQkEsSUFBdEI7QUFDVCxRQUFHTSxDQUFILEVBQU1DLGNBQWMsQ0FBQ0QsQ0FBZixHQUFtQkEsQ0FBbkI7QUFDWixRQUFNSyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQkwsY0FBcEIsQ0FBbEI7QUFDQU0sNERBQUcsQ0FBQztBQUNIQyxTQUFHLEVBQUVDLCtDQUFJLEdBQUcsR0FBUCxHQUFhSjtBQURmLEtBQUQsQ0FBSCxDQUdDSyxJQUhEO0FBQUEsbU1BR00sa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0RBLEdBQUcsQ0FBQ0MsUUFBSixLQUFpQixNQURoQjtBQUFBO0FBQUE7QUFBQTs7QUFFQUMseUJBRkEsR0FFWSxFQUZaO0FBQUE7QUFBQSx1QkFHRUMsNkRBQVksQ0FBQ0gsR0FBRyxDQUFDL0IsTUFBTDtBQUFBLCtNQUFhLGlCQUFPbUMsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJDLDBDQUR3QixHQUNQO0FBQ3RCZCxvQ0FBTSxFQUFFQyxrREFEYztBQUV0QmMsa0NBQUksRUFBRSxPQUZnQjtBQUd0QnZCLGtDQUFJLEVBQUUsT0FIZ0I7QUFJdEJVLCtCQUFDLEVBQUUsTUFKbUI7QUFLdEJjLCtCQUFDLEVBQUVILElBQUksQ0FBQ0k7QUFMYyw2QkFETztBQVF4QkMscUNBUndCLEdBUVosSUFBSWQsZUFBSixDQUFvQlUsY0FBcEIsQ0FSWTtBQUFBO0FBQUEsbUNBU1BULHdEQUFHLENBQUM7QUFDMUJDLGlDQUFHLEVBQUVDLCtDQUFJLEdBQUcsR0FBUCxHQUFhVztBQURRLDZCQUFELENBVEk7O0FBQUE7QUFTeEJDLG9DQVR3QjtBQVlYQyxvQ0FaVyxHQVlBQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVKLFFBQWYsQ0FBWCxDQVpBO0FBYTlCUixxQ0FBUyxDQUFDYSxJQUFWLENBQWVKLFFBQWY7O0FBYjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhkOztBQUFBO0FBa0JRL0IsZ0NBQWdCLENBQUNzQixTQUFELENBQWhCO0FBQ0E1Qiw2QkFBYSxDQUFDYyxDQUFELENBQWI7QUFuQlI7QUFBQTs7QUFBQTtBQXFCSlYsc0JBQU0sQ0FBQztBQUNOc0MseUJBQU8sRUFBRWhCLEdBQUcsQ0FBQyxPQUFEO0FBRE4saUJBQUQsQ0FBTjs7QUFyQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FITjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE2Qk8sVUFBQ3ZCLEdBQUQsRUFBUztBQUNmd0MsV0FBSyxDQUFDeEMsR0FBRyxDQUFDdUMsT0FBTCxDQUFMO0FBQ0EsS0EvQkQ7QUFnQ0csR0E5Q0Q7O0FBK0NBRSx5REFBUyxDQUFDLFlBQU07QUFDWjlDLFdBQU8sQ0FBQytDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBUDs7QUFDQSxRQUFNQyxXQUFXLEdBQUdILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmpDLE1BQWhCLENBQXVCb0MsT0FBdkIsQ0FBK0IsS0FBL0IsRUFBc0MsRUFBdEMsRUFBMENBLE9BQTFDLENBQWtELE1BQWxELEVBQTBELEdBQTFELENBQXBCOztBQUNBakQsaUJBQWEsQ0FBQ2dELFdBQUQsQ0FBYjtBQUNBbkMsVUFBTSxDQUFDO0FBQ0hDLE9BQUMsRUFBRWtDO0FBREEsS0FBRCxDQUFOO0FBR0gsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVFBSix5REFBUyxDQUFDLFlBQU07QUFDWjlDLFdBQU8sQ0FBQytDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBUDtBQUNILEdBRlEsQ0FBVDtBQUdBSCx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHakMsWUFBSCxFQUFpQkUsTUFBTSxDQUFDRixZQUFELENBQU47QUFDcEIsR0FGUSxFQUVOLENBQUNBLFlBQUQsQ0FGTSxDQUFUO0FBR0FpQyx5REFBUyxDQUFDLFlBQU07QUFDWmhDLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0gsR0FGUSxFQUVOLENBQUNQLGFBQUQsQ0FGTSxDQUFUO0FBR0EsU0FBTyxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLCtEQUFEO0FBQ0ksUUFBSSxFQUFFLENBQ0Y7QUFDSTZDLFdBQUssRUFBRSxNQURYO0FBRUkzQixTQUFHLEVBQUU7QUFGVCxLQURFLEVBS0Y7QUFDSTJCLFdBQUssRUFBRSx3QkFBd0JuRCxVQUFVLENBQUNvRCxRQUFYLEVBRG5DO0FBRUlDLGNBQVEsRUFBRTtBQUZkLEtBTEUsQ0FEVjtBQVdJLFFBQUksRUFBRXZELElBWFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURHLEVBY0g7QUFDSSxTQUFLLEVBQUU7QUFDSHdELFdBQUssRUFBRSxNQURKO0FBRUhDLGFBQU8sRUFBRSxPQUZOO0FBR0hDLGVBQVMsRUFBRSxFQUhSO0FBSUhDLGtCQUFZLEVBQUU7QUFKWCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRSTtBQUNJLFNBQUssRUFBRTtBQUNIRixhQUFPLEVBQUU7QUFETixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUNJLFNBQUssRUFBRTtBQUNIQSxhQUFPLEVBQUUsTUFETjtBQUVIRyxpQkFBVyxFQUFFLEtBRlY7QUFHSEMsa0JBQVksRUFBRTtBQUhYLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsMkRBQUQ7QUFDSSxZQUFRLEVBQUMsVUFEYjtBQUVJLFVBQU0sRUFBRTtBQUNKQyxXQUFLLEVBQUUsUUFESDtBQUVKQyxXQUFLLEVBQUU7QUFDSEMsZUFBTyxFQUFFLFdBRE47QUFFSEMsYUFBSyxFQUFFLFNBRko7QUFHSEMsZUFBTyxFQUFFLG1CQUFNO0FBQ1huRCx5QkFBZSxDQUFDO0FBQ1pFLGFBQUMsRUFBRWIsa0JBRFM7QUFFWlEsZ0JBQUksRUFBRUEsSUFGTTtBQUdaTSxhQUFDLEVBQUVSO0FBSFMsV0FBRCxDQUFmO0FBS0g7QUFURTtBQUZILEtBRlo7QUFnQkksVUFBTSxFQUFFO0FBQ0p5RCxXQUFLLEVBQUUvRCxrQkFESDtBQUVKZ0UsY0FBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsZUFBT2hFLHFCQUFxQixDQUFDZ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNILEtBQVYsQ0FBNUI7QUFBQTtBQUZOLEtBaEJaO0FBb0JJLFFBQUksRUFBRTtBQUNGSSxTQUFHLEVBQUUsYUFESDtBQUVGQyxRQUFFLEVBQUUsc0JBRkY7QUFHRm5CLFdBQUssRUFBRSxNQUhMO0FBSUZlLGNBQVEsRUFBRSxrQkFBQ0ssS0FBRDtBQUFBLGVBQVc5RCxPQUFPLENBQUM4RCxLQUFLLENBQUNILE1BQU4sQ0FBYUgsS0FBZCxDQUFsQjtBQUFBLE9BSlI7QUFLRk8sVUFBSSxFQUFFLENBQ0Y7QUFDSVAsYUFBSyxFQUFFLEtBRFg7QUFFSSxtQkFBUztBQUZiLE9BREUsRUFLRjtBQUNJQSxhQUFLLEVBQUU7QUFEWCxPQUxFLEVBUUY7QUFDSUEsYUFBSyxFQUFFO0FBRFgsT0FSRTtBQUxKLEtBcEJWO0FBc0NJLFFBQUksRUFBRTtBQUNGSSxTQUFHLEVBQUUsYUFESDtBQUVGQyxRQUFFLEVBQUUsc0JBRkY7QUFHRm5CLFdBQUssRUFBRSxNQUhMO0FBSUZlLGNBQVEsRUFBRSxrQkFBQ0ssS0FBRDtBQUFBLGVBQVc1RCxPQUFPLENBQUM0RCxLQUFLLENBQUNILE1BQU4sQ0FBYUgsS0FBZCxDQUFsQjtBQUFBLE9BSlI7QUFLRk8sVUFBSSxFQUFFLENBQ0Y7QUFDSVAsYUFBSyxFQUFFLEtBRFg7QUFFSSxtQkFBUztBQUZiLE9BREUsRUFLRjtBQUNJQSxhQUFLLEVBQUU7QUFEWCxPQUxFLEVBUUY7QUFDSUEsYUFBSyxFQUFFO0FBRFgsT0FSRSxFQVdGO0FBQ0lBLGFBQUssRUFBRTtBQURYLE9BWEU7QUFMSixLQXRDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FMSixDQVJKLENBZEcsRUFpR0g7QUFDSSxhQUFTLEVBQUVRLHVEQURmO0FBRUksU0FBSyxFQUFFO0FBQ0hkLGtCQUFZLEVBQUUsS0FEWDtBQUVIRCxpQkFBVyxFQUFFO0FBRlYsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU9zQjtBQUFNLFNBQUssRUFBRTtBQUFFSyxXQUFLLEVBQUU7QUFBVCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0MvRCxVQUF0QyxDQVB0QixDQWpHRyxFQTBHSDtBQUNJLFNBQUssRUFBRTtBQUNIMkQsa0JBQVksRUFBRSxLQURYO0FBRUhELGlCQUFXLEVBQUUsS0FGVjtBQUdISCxhQUFPLEVBQUUsTUFITjtBQUlIbUIsY0FBUSxFQUFFO0FBSlAsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU1FwRSxhQUFhLElBQUlBLGFBQWEsQ0FBQ3FFLE1BQS9CLElBQXlDL0QsWUFBWSxLQUFLLElBQTFELEdBQ0lOLGFBQWEsQ0FBQ3NFLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxTQUFQLEVBQXFCO0FBQ25DLFdBQU8sTUFBQyw2REFBRDtBQUNILFlBQU0sRUFBRUQsSUFBSSxDQUFDMUMsTUFEVjtBQUVILFdBQUssRUFBRTJDLFNBRko7QUFHSCxXQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FIVDtBQUlILFdBQUssRUFBRUYsSUFBSSxDQUFDRyxNQUpUO0FBS0gsYUFBTyxFQUFFSCxJQUFJLENBQUNJLElBTFg7QUFNSCxlQUFTLEVBQUVKLElBQUksQ0FBQ0ssVUFOYjtBQU9ILFNBQUcsRUFBRSxVQUFRSixTQVBWO0FBUUgsVUFBSSxFQUFFRCxJQUFJLENBQUNNLElBUlI7QUFTSCxlQUFTLEVBQUMsUUFUUDtBQVVILFdBQUssRUFBRTtBQUNIQyxrQkFBVSxFQUFFLENBRFQ7QUFFSEMsbUJBQVcsRUFBRTtBQUZWLE9BVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBZUgsR0FoQkQsQ0FESixHQWtCRWpGLEdBQUcsR0FBR0EsR0FBRyxDQUFDdUMsT0FBUCxHQUFpQjtBQUNsQixTQUFLLEVBQUU7QUFDSFcsV0FBSyxFQUFFLE1BREo7QUFFSGdDLGdCQUFVLEVBQUUsRUFGVDtBQUdIQyxtQkFBYSxFQUFFLEVBSFo7QUFJSGhDLGFBQU8sRUFBRSxNQUpOO0FBS0hpQyxvQkFBYyxFQUFFLFFBTGI7QUFNSEMsZ0JBQVUsRUFBRSxRQU5UO0FBT0hDLGdCQUFVLEVBQUU7QUFQVCxLQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBM0I5QixDQTFHRyxDQUFQO0FBcUpILENBaE9EOztHQUFNOUYsTTs7S0FBQUEsTTtBQWlPU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjc1NmYzYzc4MzBmMjg4NzIzOTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgdXNlU3RhdGVcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vbGF5b3V0XCI7XHJcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IFRvb2xib3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJveFwiO1xyXG5pbXBvcnQge1xyXG4gICAgdGl0bGUgYXMgc3R5bGVfdGl0bGVcclxufSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQVBJX0tFWSxcclxuICAgIEhPU1RcclxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBhc3luY0ZvckVhY2hcclxufSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IEZpbG1DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpbG1DYXJkXCI7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoe1xyXG5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoXCIvXCIpO1xyXG4gICAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdG9vbEJveFNlYXJjaFZhbHVlLCBzZXRUb29sQm94U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoZWRGaWxtcywgc2V0U2VhcmNoZWRGaWxtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VwZGF0ZVNlYXJjaCwgc2V0VXBkYXRlU2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgc2VhcmNoID0gKHtcclxuICAgICAgICBzLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgeVxyXG4gICAgfSkgPT4ge1xyXG4gICAgICAgIGxldCBtYWluUGFyYW1ldGVycyA9IHtcclxuXHRcdFx0YXBpa2V5OiBBUElfS0VZLFxyXG5cdFx0XHR0eXBlOiAnbW92aWUnLFxyXG5cdFx0XHRyOiAnanNvbicsXHJcblx0XHRcdHM6IHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHR5cGUpIG1haW5QYXJhbWV0ZXJzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIGlmKHkpIG1haW5QYXJhbWV0ZXJzLnkgPSB5O1xyXG5cdFx0Y29uc3QgbWFpblF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhtYWluUGFyYW1ldGVycyk7XHJcblx0XHRhcGkoe1xyXG5cdFx0XHR1cmw6IEhPU1QgKyAnPycgKyBtYWluUXVlcnlcclxuXHRcdH0pXHJcblx0XHQudGhlbihhc3luYyAocmVzKSA9PiB7XHJcblx0XHRcdGlmIChyZXMuUmVzcG9uc2UgPT09ICdUcnVlJykge1xyXG5cdFx0XHRcdGxldCBmdWxseURhdGEgPSBbXTtcclxuXHRcdFx0XHRhd2FpdCBhc3luY0ZvckVhY2gocmVzLlNlYXJjaCwgYXN5bmMgKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW1QYXJhbWV0ZXJzID0ge1xyXG5cdFx0XHRcdFx0XHRhcGlrZXk6IEFQSV9LRVksXHJcblx0XHRcdFx0XHRcdHBsb3Q6ICdzaG9ydCcsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdtb3ZpZScsXHJcblx0XHRcdFx0XHRcdHI6ICdqc29uJyxcclxuXHRcdFx0XHRcdFx0aTogaXRlbS5pbWRiSURcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW1RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaXRlbVBhcmFtZXRlcnMpO1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IEhPU1QgKyAnPycgKyBpdGVtUXVlcnlcclxuXHRcdFx0XHRcdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuXHRcdFx0XHRcdGZ1bGx5RGF0YS5wdXNoKGl0ZW1EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoZWRGaWxtcyhmdWxseURhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoVGV4dChzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRFcnIoe1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzWydFcnJvciddXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRhbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IF9zZWFyY2hUZXh0ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP3M9XCIsIFwiXCIpLnJlcGxhY2UoLyUyMC9nLCBcIiBcIik7XHJcbiAgICAgICAgc2V0U2VhcmNoVGV4dChfc2VhcmNoVGV4dCk7XHJcbiAgICAgICAgc2VhcmNoKHtcclxuICAgICAgICAgICAgczogX3NlYXJjaFRleHRcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHVwZGF0ZVNlYXJjaCkgc2VhcmNoKHVwZGF0ZVNlYXJjaCk7XHJcbiAgICB9LCBbdXBkYXRlU2VhcmNoXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFVwZGF0ZVNlYXJjaChudWxsKTtcclxuICAgIH0sIFtzZWFyY2hlZEZpbG1zXSk7XHJcbiAgICByZXR1cm4gPExheW91dD5cclxuICAgICAgICA8QnJlYWRjcnVtYnNcclxuICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlYXJjaCByZXN1bHRzIGZvciBcIiArIHNlYXJjaFRleHQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBwYXRoPXtwYXRofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJ0YWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJ0YWJsZS1jZWxsXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImNvbnRhaW5lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVwZGF0ZVNlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzOiB0b29sQm94U2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogeWVhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvb2xCb3hTZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0VG9vbEJveFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbGJveFllYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJZZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50KSA9PiBzZXRZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJBbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbGJveFR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50KSA9PiBzZXRUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJBbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJNb3ZpZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkVwaXNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX3RpdGxlfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFNlYXJjaCByZXN1bHQgZm9yIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRlbnJvZFwiIH19PntzZWFyY2hUZXh0fTwvc3Bhbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaGVkRmlsbXMgJiYgc2VhcmNoZWRGaWxtcy5sZW5ndGggJiYgdXBkYXRlU2VhcmNoID09PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zLm1hcCgoZmlsbSwgZmlsbUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmlsbUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJJRD17ZmlsbS5pbWRiSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17ZmlsbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpbG0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZmlsbS5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtmaWxtLlBsb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiUG9pbnQ9e2ZpbG0uaW1kYlJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJmaWxtLVwiK2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e2ZpbG0uWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogZXJyID8gZXJyLm1lc3NhZ2UgOiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1BvcHBpbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBZw7xrbGVuaXlvci4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==