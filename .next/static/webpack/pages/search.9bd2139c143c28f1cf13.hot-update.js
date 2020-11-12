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
                  _context2.next = 7;
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
      lineNumber: 95,
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
      lineNumber: 96,
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
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "table-cell"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 122,
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
      lineNumber: 129,
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
      lineNumber: 192,
      columnNumber: 9
    }
  }, "Search result for ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 201,
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
        lineNumber: 212,
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
      lineNumber: 228,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVwZGF0ZVNlYXJjaCIsInNldFVwZGF0ZVNlYXJjaCIsInNlYXJjaCIsInMiLCJ5IiwibWFpblBhcmFtZXRlcnMiLCJhcGlrZXkiLCJBUElfS0VZIiwiciIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl9zZWFyY2hUZXh0IiwicmVwbGFjZSIsInRpdGxlIiwidG9TdHJpbmciLCJzZWxlY3RlZCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGFiZWwiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImtleSIsImlkIiwiZXZlbnQiLCJkYXRhIiwic3R5bGVfdGl0bGUiLCJmbGV4V3JhcCIsImxlbmd0aCIsIm1hcCIsImZpbG0iLCJmaWxtSW5kZXgiLCJUaXRsZSIsIlBvc3RlciIsIlBsb3QiLCJpbWRiUmF0aW5nIiwiWWVhciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFHQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BRVQ7QUFBQTs7QUFBQTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsR0FBRCxDQUQ5QjtBQUFBLE1BQ0tDLElBREw7QUFBQSxNQUNXQyxPQURYOztBQUFBLG1CQUVrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjFDO0FBQUEsTUFFS0csVUFGTDtBQUFBLE1BRWlCQyxhQUZqQjs7QUFBQSxtQkFHa0RKLHNEQUFRLENBQUMsRUFBRCxDQUgxRDtBQUFBLE1BR0tLLGtCQUhMO0FBQUEsTUFHeUJDLHFCQUh6Qjs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsSUFBRCxDQUo1QjtBQUFBLE1BSUtPLEdBSkw7QUFBQSxNQUlVQyxNQUpWOztBQUFBLG1CQUt3Q1Isc0RBQVEsQ0FBQyxFQUFELENBTGhEO0FBQUEsTUFLS1MsYUFMTDtBQUFBLE1BS29CQyxnQkFMcEI7O0FBQUEsbUJBTXNCVixzREFBUSxDQUFDLElBQUQsQ0FOOUI7QUFBQSxNQU1LVyxJQU5MO0FBQUEsTUFNV0MsT0FOWDs7QUFBQSxtQkFPc0JaLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT0thLElBUEw7QUFBQSxNQU9XQyxPQVBYOztBQUFBLG1CQVFzQ2Qsc0RBQVEsQ0FBQyxJQUFELENBUjlDO0FBQUEsTUFRS2UsWUFSTDtBQUFBLE1BUW1CQyxlQVJuQjs7QUFTRixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxRQUlU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T0gsU0FBRyxFQUFFLFVBQVFKLFNBUFY7QUFRSCxVQUFJLEVBQUVELElBQUksQ0FBQ00sSUFSUjtBQVNILGVBQVMsRUFBQyxRQVRQO0FBVUgsV0FBSyxFQUFFO0FBQ0hDLGtCQUFVLEVBQUUsQ0FEVDtBQUVIQyxtQkFBVyxFQUFFO0FBRlYsT0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFlSCxHQWhCRCxDQURKLEdBa0JFakYsR0FBRyxHQUFHQSxHQUFHLENBQUN1QyxPQUFQLEdBQWlCO0FBQ2xCLFNBQUssRUFBRTtBQUNIVyxXQUFLLEVBQUUsTUFESjtBQUVIZ0MsZ0JBQVUsRUFBRSxFQUZUO0FBR0hDLG1CQUFhLEVBQUUsRUFIWjtBQUlIaEMsYUFBTyxFQUFFLE1BSk47QUFLSGlDLG9CQUFjLEVBQUUsUUFMYjtBQU1IQyxnQkFBVSxFQUFFLFFBTlQ7QUFPSEMsZ0JBQVUsRUFBRTtBQVBULEtBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQjlCLENBMUdHLENBQVA7QUFxSkgsQ0EvTkQ7O0dBQU05RixNOztLQUFBQSxNO0FBZ09TQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guOWJkMjEzOWMxNDNjMjhmMWNmMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICB1c2VTdGF0ZVxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXRcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgVG9vbGJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b29sYm94XCI7XHJcbmltcG9ydCB7XHJcbiAgICB0aXRsZSBhcyBzdHlsZV90aXRsZVxyXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBUElfS0VZLFxyXG4gICAgSE9TVFxyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIGFzeW5jRm9yRWFjaFxyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZlclwiO1xyXG5pbXBvcnQgRmlsbUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmlsbUNhcmRcIjtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIi9cIik7XHJcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0b29sQm94U2VhcmNoVmFsdWUsIHNldFRvb2xCb3hTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hlZEZpbG1zLCBzZXRTZWFyY2hlZEZpbG1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXBkYXRlU2VhcmNoLCBzZXRVcGRhdGVTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBzZWFyY2ggPSAoe1xyXG4gICAgICAgIHMsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB5XHJcbiAgICB9KSA9PiB7XHJcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0ge1xyXG5cdFx0XHRhcGlrZXk6IEFQSV9LRVksXHJcblx0XHRcdHR5cGU6ICdtb3ZpZScsXHJcblx0XHRcdHI6ICdqc29uJyxcclxuXHRcdFx0czogc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYodHlwZSkgbWFpblBhcmFtZXRlcnMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgaWYoeSkgbWFpblBhcmFtZXRlcnMueSA9IHk7XHJcblx0XHRjb25zdCBtYWluUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG1haW5QYXJhbWV0ZXJzKTtcclxuXHRcdGFwaSh7XHJcblx0XHRcdHVybDogSE9TVCArICc/JyArIG1haW5RdWVyeVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuXHRcdFx0aWYgKHJlcy5SZXNwb25zZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdFx0bGV0IGZ1bGx5RGF0YSA9IFtdO1xyXG5cdFx0XHRcdGF3YWl0IGFzeW5jRm9yRWFjaChyZXMuU2VhcmNoLCBhc3luYyAoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbVBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdFx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0XHRcdFx0cGxvdDogJ3Nob3J0JyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0XHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRcdFx0XHRpOiBpdGVtLmltZGJJRFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbVF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpdGVtUGFyYW1ldGVycyk7XHJcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaSh7XHJcblx0XHRcdFx0XHRcdHVybDogSE9TVCArICc/JyArIGl0ZW1RdWVyeVxyXG5cdFx0XHRcdFx0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG5cdFx0XHRcdFx0ZnVsbHlEYXRhLnB1c2goaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblx0XHRcdFx0c2V0U2VhcmNoZWRGaWxtcyhmdWxseURhdGEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEVycih7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXNbJ0Vycm9yJ11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgY29uc3QgX3NlYXJjaFRleHQgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/cz1cIiwgXCJcIikucmVwbGFjZSgvJTIwL2csIFwiIFwiKTtcclxuICAgICAgICBzZXRTZWFyY2hUZXh0KF9zZWFyY2hUZXh0KTtcclxuICAgICAgICBzZWFyY2goe1xyXG4gICAgICAgICAgICBzOiBfc2VhcmNoVGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodXBkYXRlU2VhcmNoKSBzZWFyY2godXBkYXRlU2VhcmNoKTtcclxuICAgIH0sIFt1cGRhdGVTZWFyY2hdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXBkYXRlU2VhcmNoKG51bGwpO1xyXG4gICAgfSwgW3NlYXJjaGVkRmlsbXNdKTtcclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG4gICAgICAgIDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoIHJlc3VsdHMgZm9yIFwiICsgc2VhcmNoVGV4dC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0MFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBkYXRlU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHM6IHRvb2xCb3hTZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB5ZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdG9vbEJveFNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRUb29sQm94U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sYm94WWVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlllYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHNldFllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkFueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sYm94VHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHNldFR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkFueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlNlcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk1vdmllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiRXBpc29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVfdGl0bGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgU2VhcmNoIHJlc3VsdCBmb3IgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ29sZGVucm9kXCIgfX0+e3NlYXJjaFRleHR9PC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcyAmJiBzZWFyY2hlZEZpbG1zLmxlbmd0aCAmJiB1cGRhdGVTZWFyY2ggPT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkRmlsbXMubWFwKChmaWxtLCBmaWxtSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGaWxtQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1kYklEPXtmaWxtLmltZGJJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtmaWxtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZmlsbS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtmaWxtLlBvc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2ZpbG0uUGxvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJQb2ludD17ZmlsbS5pbWRiUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcImZpbG0tXCIrZmlsbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17ZmlsbS5ZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiBlcnIgPyBlcnIubWVzc2FnZSA6IDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnUG9wcGlucydcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFnDvGtsZW5peW9yLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXSwic291cmNlUm9vdCI6IiJ9