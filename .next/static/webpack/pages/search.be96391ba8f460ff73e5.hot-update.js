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
      year: year,
      setYear: setYear,
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
      setType: setType,
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
  }, "Search result for ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfc2VhcmNoVGV4dCIsInNlYXJjaCIsInJlcGxhY2UiLCJtYWluUGFyYW1ldGVycyIsImFwaWtleSIsIkFQSV9LRVkiLCJyIiwicyIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidGl0bGUiLCJ0b1N0cmluZyIsInNlbGVjdGVkIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsYWJlbCIsInByb3BzIiwidmFyaWFudCIsImNvbG9yIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJrZXkiLCJpZCIsImRhdGEiLCJzdHlsZV90aXRsZSIsImZsZXhXcmFwIiwibGVuZ3RoIiwibWFwIiwiZmlsbSIsImZpbG1JbmRleCIsIlRpdGxlIiwiUG9zdGVyIiwiUGxvdCIsImltZGJSYXRpbmciLCJZZWFyIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUdBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FFVDtBQUFBOztBQUFBOztBQUFBLGtCQUNzQkMsc0RBQVEsQ0FBQyxHQUFELENBRDlCO0FBQUEsTUFDS0MsSUFETDtBQUFBLE1BQ1dDLE9BRFg7O0FBQUEsbUJBRWtDRixzREFBUSxDQUFDLEVBQUQsQ0FGMUM7QUFBQSxNQUVLRyxVQUZMO0FBQUEsTUFFaUJDLGFBRmpCOztBQUFBLG1CQUdrREosc0RBQVEsQ0FBQyxFQUFELENBSDFEO0FBQUEsTUFHS0ssa0JBSEw7QUFBQSxNQUd5QkMscUJBSHpCOztBQUFBLG1CQUlvQk4sc0RBQVEsQ0FBQyxJQUFELENBSjVCO0FBQUEsTUFJS08sR0FKTDtBQUFBLE1BSVVDLE1BSlY7O0FBQUEsbUJBS3dDUixzREFBUSxDQUFDLEVBQUQsQ0FMaEQ7QUFBQSxNQUtLUyxhQUxMO0FBQUEsTUFLb0JDLGdCQUxwQjs7QUFBQSxtQkFNc0JWLHNEQUFRLENBQUMsSUFBRCxDQU45QjtBQUFBLE1BTUtXLElBTkw7QUFBQSxNQU1XQyxPQU5YOztBQUFBLG1CQU9zQlosc0RBQVEsQ0FBQyxJQUFELENBUDlCO0FBQUEsTUFPS2EsSUFQTDtBQUFBLE1BT1dDLE9BUFg7O0FBUUZDLHlEQUFTLENBQUMsWUFBTTtBQUNaYixXQUFPLENBQUNjLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBUDs7QUFDQSxRQUFNQyxXQUFXLEdBQUdILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkcsTUFBaEIsQ0FBdUJDLE9BQXZCLENBQStCLEtBQS9CLEVBQXNDLEVBQXRDLEVBQTBDQSxPQUExQyxDQUFrRCxNQUFsRCxFQUEwRCxHQUExRCxDQUFwQjs7QUFDQWpCLGlCQUFhLENBQUNlLFdBQUQsQ0FBYjtBQUNBLFFBQU1HLGNBQWMsR0FBRztBQUM1QkMsWUFBTSxFQUFFQyxrREFEb0I7QUFFNUJYLFVBQUksRUFBRSxPQUZzQjtBQUc1QlksT0FBQyxFQUFFLE1BSHlCO0FBSTVCQyxPQUFDLEVBQUVQO0FBSnlCLEtBQXZCO0FBTU4sUUFBTVEsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0JOLGNBQXBCLENBQWxCO0FBQ0FPLDREQUFHLENBQUM7QUFDSEMsU0FBRyxFQUFFQywrQ0FBSSxHQUFHLEdBQVAsR0FBYUo7QUFEZixLQUFELENBQUgsQ0FHQ0ssSUFIRDtBQUFBLG1NQUdNLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNEQSxHQUFHLENBQUNDLFFBQUosS0FBaUIsTUFEaEI7QUFBQTtBQUFBO0FBQUE7O0FBRUFDLHlCQUZBLEdBRVksRUFGWjtBQUFBO0FBQUEsdUJBR0VDLDZEQUFZLENBQUNILEdBQUcsQ0FBQ2xDLE1BQUw7QUFBQSwrTUFBYSxpQkFBT3NDLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCQywwQ0FEd0IsR0FDUDtBQUN0QmYsb0NBQU0sRUFBRUMsa0RBRGM7QUFFdEJlLGtDQUFJLEVBQUUsT0FGZ0I7QUFHdEIxQixrQ0FBSSxFQUFFLE9BSGdCO0FBSXRCWSwrQkFBQyxFQUFFLE1BSm1CO0FBS3RCZSwrQkFBQyxFQUFFSCxJQUFJLENBQUNJO0FBTGMsNkJBRE87QUFReEJDLHFDQVJ3QixHQVFaLElBQUlkLGVBQUosQ0FBb0JVLGNBQXBCLENBUlk7QUFBQTtBQUFBLG1DQVNQVCx3REFBRyxDQUFDO0FBQzFCQyxpQ0FBRyxFQUFFQywrQ0FBSSxHQUFHLEdBQVAsR0FBYVc7QUFEUSw2QkFBRCxDQVRJOztBQUFBO0FBU3hCQyxvQ0FUd0I7QUFZWEMsb0NBWlcsR0FZQUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSixRQUFmLENBQVgsQ0FaQTtBQWE5QlIscUNBQVMsQ0FBQ2EsSUFBVixDQUFlSixRQUFmOztBQWI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIZDs7QUFBQTtBQWtCSmxDLGdDQUFnQixDQUFDeUIsU0FBRCxDQUFoQjtBQWxCSTtBQUFBOztBQUFBO0FBb0JKM0Isc0JBQU0sQ0FBQztBQUNOeUMseUJBQU8sRUFBRWhCLEdBQUcsQ0FBQyxPQUFEO0FBRE4saUJBQUQsQ0FBTjs7QUFwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FITjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE0Qk8sVUFBQzFCLEdBQUQsRUFBUztBQUNmMkMsV0FBSyxDQUFDM0MsR0FBRyxDQUFDMEMsT0FBTCxDQUFMO0FBQ0EsS0E5QkQ7QUErQkcsR0ExQ1EsRUEwQ04sRUExQ00sQ0FBVDtBQTJDQWxDLHlEQUFTLENBQUMsWUFBTTtBQUNaYixXQUFPLENBQUNjLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakIsQ0FBUDtBQUNILEdBRlEsQ0FBVDtBQUdBLFNBQU8sTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQywrREFBRDtBQUNJLFFBQUksRUFBRSxDQUNGO0FBQ0lpQyxXQUFLLEVBQUUsTUFEWDtBQUVJckIsU0FBRyxFQUFFO0FBRlQsS0FERSxFQUtGO0FBQ0lxQixXQUFLLEVBQUUsd0JBQXdCaEQsVUFBVSxDQUFDaUQsUUFBWCxFQURuQztBQUVJQyxjQUFRLEVBQUU7QUFGZCxLQUxFLENBRFY7QUFXSSxRQUFJLEVBQUVwRCxJQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERyxFQWNIO0FBQ0ksU0FBSyxFQUFFO0FBQ0hxRCxXQUFLLEVBQUUsTUFESjtBQUVIQyxhQUFPLEVBQUUsT0FGTjtBQUdIQyxlQUFTLEVBQUUsRUFIUjtBQUlIQyxrQkFBWSxFQUFFO0FBSlgsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFDSSxTQUFLLEVBQUU7QUFDSEYsYUFBTyxFQUFFO0FBRE4sS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFDSSxTQUFLLEVBQUU7QUFDSEEsYUFBTyxFQUFFLE1BRE47QUFFSEcsaUJBQVcsRUFBRSxLQUZWO0FBR0hDLGtCQUFZLEVBQUU7QUFIWCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxNQUFDLDJEQUFEO0FBQ0ksWUFBUSxFQUFDLFVBRGI7QUFFSSxVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFLFFBREg7QUFFSkMsV0FBSyxFQUFFO0FBQ0hDLGVBQU8sRUFBRSxXQUROO0FBRUhDLGFBQUssRUFBRTtBQUZKO0FBRkgsS0FGWjtBQVNJLFVBQU0sRUFBRTtBQUNKQyxXQUFLLEVBQUUzRCxrQkFESDtBQUVKNEQsY0FBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsZUFBTzVELHFCQUFxQixDQUFDNEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNILEtBQVYsQ0FBNUI7QUFBQTtBQUZOLEtBVFo7QUFhSSxRQUFJLEVBQUU7QUFDRkksU0FBRyxFQUFFLGFBREg7QUFFRkMsUUFBRSxFQUFFLHNCQUZGO0FBR0ZsQixXQUFLLEVBQUUsTUFITDtBQUlGeEMsVUFBSSxFQUFFQSxJQUpKO0FBS0ZDLGFBQU8sRUFBRUEsT0FMUDtBQU1GMEQsVUFBSSxFQUFFLENBQ0Y7QUFDSU4sYUFBSyxFQUFFLEtBRFg7QUFFSSxtQkFBUztBQUZiLE9BREUsRUFLRjtBQUNJQSxhQUFLLEVBQUU7QUFEWCxPQUxFLEVBUUY7QUFDSUEsYUFBSyxFQUFFO0FBRFgsT0FSRTtBQU5KLEtBYlY7QUFnQ0ksUUFBSSxFQUFFO0FBQ0ZJLFNBQUcsRUFBRSxhQURIO0FBRUZDLFFBQUUsRUFBRSxzQkFGRjtBQUdGbEIsV0FBSyxFQUFFLE1BSEw7QUFJRnRDLFVBQUksRUFBRUEsSUFKSjtBQUtGQyxhQUFPLEVBQUVBLE9BTFA7QUFNRndELFVBQUksRUFBRSxDQUNGO0FBQ0lOLGFBQUssRUFBRSxLQURYO0FBRUksbUJBQVM7QUFGYixPQURFLEVBS0Y7QUFDSUEsYUFBSyxFQUFFO0FBRFgsT0FMRSxFQVFGO0FBQ0lBLGFBQUssRUFBRTtBQURYLE9BUkUsRUFXRjtBQUNJQSxhQUFLLEVBQUU7QUFEWCxPQVhFO0FBTkosS0FoQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBTEosQ0FSSixDQWRHLEVBNEZIO0FBQ0ksYUFBUyxFQUFFTyx1REFEZjtBQUVJLFNBQUssRUFBRTtBQUNIWixrQkFBWSxFQUFFLEtBRFg7QUFFSEQsaUJBQVcsRUFBRTtBQUZWLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFPc0I7QUFBTSxTQUFLLEVBQUU7QUFBRUssV0FBSyxFQUFFO0FBQVQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDNUQsVUFBdEMsQ0FQdEIsQ0E1RkcsRUFxR0g7QUFDSSxTQUFLLEVBQUU7QUFDSHdELGtCQUFZLEVBQUUsS0FEWDtBQUVIRCxpQkFBVyxFQUFFLEtBRlY7QUFHSEgsYUFBTyxFQUFFLE1BSE47QUFJSGlCLGNBQVEsRUFBRTtBQUpQLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNRL0QsYUFBYSxJQUFJQSxhQUFhLENBQUNnRSxNQUEvQixHQUNJaEUsYUFBYSxDQUFDaUUsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLFNBQVAsRUFBcUI7QUFDbkMsV0FBTyxNQUFDLDZEQUFEO0FBQ0gsWUFBTSxFQUFFRCxJQUFJLENBQUNsQyxNQURWO0FBRUgsV0FBSyxFQUFFbUMsU0FGSjtBQUdILFdBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUhUO0FBSUgsV0FBSyxFQUFFRixJQUFJLENBQUNHLE1BSlQ7QUFLSCxhQUFPLEVBQUVILElBQUksQ0FBQ0ksSUFMWDtBQU1ILGVBQVMsRUFBRUosSUFBSSxDQUFDSyxVQU5iO0FBT0gsU0FBRyxFQUFFLFVBQVFKLFNBUFY7QUFRSCxVQUFJLEVBQUVELElBQUksQ0FBQ00sSUFSUjtBQVNILGVBQVMsRUFBQyxRQVRQO0FBVUgsV0FBSyxFQUFFO0FBQ0hDLGtCQUFVLEVBQUUsQ0FEVDtBQUVIQyxtQkFBVyxFQUFFO0FBRlYsT0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFlSCxHQWhCRCxDQURKLEdBa0JFNUUsR0FBRyxHQUFHQSxHQUFHLENBQUMwQyxPQUFQLEdBQWlCO0FBQ2xCLFNBQUssRUFBRTtBQUNISyxXQUFLLEVBQUUsTUFESjtBQUVIOEIsZ0JBQVUsRUFBRSxFQUZUO0FBR0hDLG1CQUFhLEVBQUUsRUFIWjtBQUlIOUIsYUFBTyxFQUFFLE1BSk47QUFLSCtCLG9CQUFjLEVBQUUsUUFMYjtBQU1IQyxnQkFBVSxFQUFFLFFBTlQ7QUFPSEMsZ0JBQVUsRUFBRTtBQVBULEtBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQjlCLENBckdHLENBQVA7QUFnSkgsQ0F4TUQ7O0dBQU16RixNOztLQUFBQSxNO0FBeU1TQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guYmU5NjM5MWJhOGY0NjBmZjczZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICB1c2VTdGF0ZVxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXRcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgVG9vbGJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b29sYm94XCI7XHJcbmltcG9ydCB7XHJcbiAgICB0aXRsZSBhcyBzdHlsZV90aXRsZVxyXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBUElfS0VZLFxyXG4gICAgSE9TVFxyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIGFzeW5jRm9yRWFjaFxyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZlclwiO1xyXG5pbXBvcnQgRmlsbUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmlsbUNhcmRcIjtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIi9cIik7XHJcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0b29sQm94U2VhcmNoVmFsdWUsIHNldFRvb2xCb3hTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hlZEZpbG1zLCBzZXRTZWFyY2hlZEZpbG1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBjb25zdCBfc2VhcmNoVGV4dCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9zPVwiLCBcIlwiKS5yZXBsYWNlKC8lMjAvZywgXCIgXCIpO1xyXG4gICAgICAgIHNldFNlYXJjaFRleHQoX3NlYXJjaFRleHQpO1xyXG4gICAgICAgIGNvbnN0IG1haW5QYXJhbWV0ZXJzID0ge1xyXG5cdFx0XHRhcGlrZXk6IEFQSV9LRVksXHJcblx0XHRcdHR5cGU6ICdtb3ZpZScsXHJcblx0XHRcdHI6ICdqc29uJyxcclxuXHRcdFx0czogX3NlYXJjaFRleHRcclxuXHRcdH07XHJcblx0XHRjb25zdCBtYWluUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG1haW5QYXJhbWV0ZXJzKTtcclxuXHRcdGFwaSh7XHJcblx0XHRcdHVybDogSE9TVCArICc/JyArIG1haW5RdWVyeVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuXHRcdFx0aWYgKHJlcy5SZXNwb25zZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdFx0bGV0IGZ1bGx5RGF0YSA9IFtdO1xyXG5cdFx0XHRcdGF3YWl0IGFzeW5jRm9yRWFjaChyZXMuU2VhcmNoLCBhc3luYyAoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbVBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdFx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0XHRcdFx0cGxvdDogJ3Nob3J0JyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0XHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRcdFx0XHRpOiBpdGVtLmltZGJJRFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbVF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpdGVtUGFyYW1ldGVycyk7XHJcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaSh7XHJcblx0XHRcdFx0XHRcdHVybDogSE9TVCArICc/JyArIGl0ZW1RdWVyeVxyXG5cdFx0XHRcdFx0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG5cdFx0XHRcdFx0ZnVsbHlEYXRhLnB1c2goaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblx0XHRcdFx0c2V0U2VhcmNoZWRGaWxtcyhmdWxseURhdGEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEVycih7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXNbJ0Vycm9yJ11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG4gICAgICAgIDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoIHJlc3VsdHMgZm9yIFwiICsgc2VhcmNoVGV4dC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0MFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvb2xCb3hTZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0VG9vbEJveFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbGJveFllYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJZZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0WWVhcjogc2V0WWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkFueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sYm94VHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUeXBlOiBzZXRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU2VyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTW92aWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJFcGlzb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV90aXRsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWFyY2ggcmVzdWx0IGZvciA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fT57c2VhcmNoVGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zICYmIHNlYXJjaGVkRmlsbXMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zLm1hcCgoZmlsbSwgZmlsbUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmlsbUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJJRD17ZmlsbS5pbWRiSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17ZmlsbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpbG0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZmlsbS5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtmaWxtLlBsb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiUG9pbnQ9e2ZpbG0uaW1kYlJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJmaWxtLVwiK2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e2ZpbG0uWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogZXJyID8gZXJyLm1lc3NhZ2UgOiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1BvcHBpbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBZw7xrbGVuaXlvci4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==