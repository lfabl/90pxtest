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

  var search = function search(_ref2) {
    var s = _ref2.s,
        type = _ref2.type,
        y = _ref2.y;
    setSearchedFilms([]);
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
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
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
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "table-cell"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 116,
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
          search({
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
      lineNumber: 123,
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
      lineNumber: 186,
      columnNumber: 9
    }
  }, "Search result for ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 195,
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
        lineNumber: 206,
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
      lineNumber: 222,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInNlYXJjaCIsInMiLCJ5IiwibWFpblBhcmFtZXRlcnMiLCJhcGlrZXkiLCJBUElfS0VZIiwiciIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl9zZWFyY2hUZXh0IiwicmVwbGFjZSIsInRpdGxlIiwidG9TdHJpbmciLCJzZWxlY3RlZCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibGFiZWwiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImtleSIsImlkIiwiZXZlbnQiLCJkYXRhIiwic3R5bGVfdGl0bGUiLCJmbGV4V3JhcCIsImxlbmd0aCIsIm1hcCIsImZpbG0iLCJmaWxtSW5kZXgiLCJUaXRsZSIsIlBvc3RlciIsIlBsb3QiLCJpbWRiUmF0aW5nIiwiWWVhciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFHQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BRVQ7QUFBQTs7QUFBQTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsR0FBRCxDQUQ5QjtBQUFBLE1BQ0tDLElBREw7QUFBQSxNQUNXQyxPQURYOztBQUFBLG1CQUVrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRjFDO0FBQUEsTUFFS0csVUFGTDtBQUFBLE1BRWlCQyxhQUZqQjs7QUFBQSxtQkFHa0RKLHNEQUFRLENBQUMsRUFBRCxDQUgxRDtBQUFBLE1BR0tLLGtCQUhMO0FBQUEsTUFHeUJDLHFCQUh6Qjs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsSUFBRCxDQUo1QjtBQUFBLE1BSUtPLEdBSkw7QUFBQSxNQUlVQyxNQUpWOztBQUFBLG1CQUt3Q1Isc0RBQVEsQ0FBQyxFQUFELENBTGhEO0FBQUEsTUFLS1MsYUFMTDtBQUFBLE1BS29CQyxnQkFMcEI7O0FBQUEsbUJBTXNCVixzREFBUSxDQUFDLElBQUQsQ0FOOUI7QUFBQSxNQU1LVyxJQU5MO0FBQUEsTUFNV0MsT0FOWDs7QUFBQSxtQkFPc0JaLHNEQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT0thLElBUEw7QUFBQSxNQU9XQyxPQVBYOztBQVFGLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLFFBSVQ7QUFBQSxRQUhGQyxDQUdFLFNBSEZBLENBR0U7QUFBQSxRQUZGSCxJQUVFLFNBRkZBLElBRUU7QUFBQSxRQURGSSxDQUNFLFNBREZBLENBQ0U7QUFDRlAsb0JBQWdCLENBQUMsRUFB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QUFFLEVBRlQ7QUFHSEMsbUJBQWEsRUFBRSxFQUhaO0FBSUhoQyxhQUFPLEVBQUUsTUFKTjtBQUtIaUMsb0JBQWMsRUFBRSxRQUxiO0FBTUhDLGdCQUFVLEVBQUUsUUFOVDtBQU9IQyxnQkFBVSxFQUFFO0FBUFQsS0FEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTNCOUIsQ0ExR0csQ0FBUDtBQXFKSCxDQXpORDs7R0FBTTVGLE07O0tBQUFBLE07QUEwTlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5mNDJkMTcxZThiZWRmNGQyZTFhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVN0YXRlXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dFwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBUb29sYm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rvb2xib3hcIjtcclxuaW1wb3J0IHtcclxuICAgIHRpdGxlIGFzIHN0eWxlX3RpdGxlXHJcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtcclxuICAgIEFQSV9LRVksXHJcbiAgICBIT1NUXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgYXN5bmNGb3JFYWNoXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmVyXCI7XHJcbmltcG9ydCBGaWxtQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWxtQ2FyZFwiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKHtcclxuXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiL1wiKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Rvb2xCb3hTZWFyY2hWYWx1ZSwgc2V0VG9vbEJveFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaGVkRmlsbXMsIHNldFNlYXJjaGVkRmlsbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHNlYXJjaCA9ICh7XHJcbiAgICAgICAgcyxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHlcclxuICAgIH0pID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hlZEZpbG1zKFtdKTtcclxuICAgICAgICBsZXQgbWFpblBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRzOiBzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih0eXBlKSBtYWluUGFyYW1ldGVycy50eXBlID0gdHlwZTtcclxuICAgICAgICBpZih5KSBtYWluUGFyYW1ldGVycy55ID0geTtcclxuXHRcdGNvbnN0IG1haW5RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobWFpblBhcmFtZXRlcnMpO1xyXG5cdFx0YXBpKHtcclxuXHRcdFx0dXJsOiBIT1NUICsgJz8nICsgbWFpblF1ZXJ5XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG5cdFx0XHRpZiAocmVzLlJlc3BvbnNlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0XHRsZXQgZnVsbHlEYXRhID0gW107XHJcblx0XHRcdFx0YXdhaXQgYXN5bmNGb3JFYWNoKHJlcy5TZWFyY2gsIGFzeW5jIChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUGFyYW1ldGVycyA9IHtcclxuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxyXG5cdFx0XHRcdFx0XHRwbG90OiAnc2hvcnQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnbW92aWUnLFxyXG5cdFx0XHRcdFx0XHRyOiAnanNvbicsXHJcblx0XHRcdFx0XHRcdGk6IGl0ZW0uaW1kYklEXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGl0ZW1QYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBIT1NUICsgJz8nICsgaXRlbVF1ZXJ5XHJcblx0XHRcdFx0XHR9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcblx0XHRcdFx0XHRmdWxseURhdGEucHVzaChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHRcdFx0XHRzZXRTZWFyY2hlZEZpbG1zKGZ1bGx5RGF0YSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0RXJyKHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc1snRXJyb3InXVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0YWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBjb25zdCBfc2VhcmNoVGV4dCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9zPVwiLCBcIlwiKS5yZXBsYWNlKC8lMjAvZywgXCIgXCIpO1xyXG4gICAgICAgIHNldFNlYXJjaFRleHQoX3NlYXJjaFRleHQpO1xyXG4gICAgICAgIHNlYXJjaCh7XHJcbiAgICAgICAgICAgIHM6IF9zZWFyY2hUZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJzXHJcbiAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWFyY2ggcmVzdWx0cyBmb3IgXCIgKyBzZWFyY2hUZXh0LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJjb250YWluZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczogdG9vbEJveFNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHllYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b29sQm94U2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHNldFRvb2xCb3hTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2xib3hZZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWWVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudCkgPT4gc2V0WWVhcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2xib3hUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudCkgPT4gc2V0VHlwZShldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU2VyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTW92aWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJFcGlzb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV90aXRsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWFyY2ggcmVzdWx0IGZvciA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fT57c2VhcmNoVGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zICYmIHNlYXJjaGVkRmlsbXMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zLm1hcCgoZmlsbSwgZmlsbUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmlsbUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJJRD17ZmlsbS5pbWRiSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17ZmlsbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpbG0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZmlsbS5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtmaWxtLlBsb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiUG9pbnQ9e2ZpbG0uaW1kYlJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJmaWxtLVwiK2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e2ZpbG0uWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogZXJyID8gZXJyLm1lc3NhZ2UgOiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1BvcHBpbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBZw7xrbGVuaXlvci4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==