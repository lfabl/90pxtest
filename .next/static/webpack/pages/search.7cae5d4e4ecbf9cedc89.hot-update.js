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

    var _searchJSON = Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["getUrlVars"])(window.location.href);

    var _searchText = _searchJSON.s.replace("?s=", "").replace(/%20/g, " ");

    setSearchText(_searchText);
    var params = {
      s: _searchText
    };

    if (_searchJSON.type) {
      params.type = _searchJSON.type;
      setType(_searchJSON.type);
    }

    if (_searchJSON.y) {
      params.y = _searchJSON.y;
      setYear(_searchJSON.y);
    }

    search(params);
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
      lineNumber: 106,
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
      lineNumber: 107,
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
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "table-cell"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 133,
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
      lineNumber: 140,
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
      lineNumber: 203,
      columnNumber: 9
    }
  }, "Search result for ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 212,
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
        lineNumber: 223,
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
      lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVwZGF0ZVNlYXJjaCIsInNldFVwZGF0ZVNlYXJjaCIsInNlYXJjaCIsInMiLCJ5IiwibWFpblBhcmFtZXRlcnMiLCJhcGlrZXkiLCJBUElfS0VZIiwiciIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl9zZWFyY2hKU09OIiwiZ2V0VXJsVmFycyIsImhyZWYiLCJfc2VhcmNoVGV4dCIsInJlcGxhY2UiLCJwYXJhbXMiLCJ0aXRsZSIsInRvU3RyaW5nIiwic2VsZWN0ZWQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImxhYmVsIiwicHJvcHMiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJrZXkiLCJpZCIsImV2ZW50IiwiZGF0YSIsInN0eWxlX3RpdGxlIiwiZmxleFdyYXAiLCJsZW5ndGgiLCJtYXAiLCJmaWxtIiwiZmlsbUluZGV4IiwiVGl0bGUiLCJQb3N0ZXIiLCJQbG90IiwiaW1kYlJhdGluZyIsIlllYXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBR0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUVUO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3NCQyxzREFBUSxDQUFDLEdBQUQsQ0FEOUI7QUFBQSxNQUNLQyxJQURMO0FBQUEsTUFDV0MsT0FEWDs7QUFBQSxtQkFFa0NGLHNEQUFRLENBQUMsRUFBRCxDQUYxQztBQUFBLE1BRUtHLFVBRkw7QUFBQSxNQUVpQkMsYUFGakI7O0FBQUEsbUJBR2tESixzREFBUSxDQUFDLEVBQUQsQ0FIMUQ7QUFBQSxNQUdLSyxrQkFITDtBQUFBLE1BR3lCQyxxQkFIekI7O0FBQUEsbUJBSW9CTixzREFBUSxDQUFDLElBQUQsQ0FKNUI7QUFBQSxNQUlLTyxHQUpMO0FBQUEsTUFJVUMsTUFKVjs7QUFBQSxtQkFLd0NSLHNEQUFRLENBQUMsRUFBRCxDQUxoRDtBQUFBLE1BS0tTLGFBTEw7QUFBQSxNQUtvQkMsZ0JBTHBCOztBQUFBLG1CQU1zQlYsc0RBQVEsQ0FBQyxJQUFELENBTjlCO0FBQUEsTUFNS1csSUFOTDtBQUFBLE1BTVdDLE9BTlg7O0FBQUEsbUJBT3NCWixzREFBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9LYSxJQVBMO0FBQUEsTUFPV0MsT0FQWDs7QUFBQSxtQkFRc0NkLHNEQUFRLENBQUMsSUFBRCxDQVI5QztBQUFBLE1BUUtlLFlBUkw7QUFBQSxNQVFtQkMs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R0FBTWxHLE07O0tBQUFBLE07QUEyT1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC43Y2FlNWQ0ZTRlY2JmOWNlZGM4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVN0YXRlXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dFwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBUb29sYm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rvb2xib3hcIjtcclxuaW1wb3J0IHtcclxuICAgIHRpdGxlIGFzIHN0eWxlX3RpdGxlXHJcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtcclxuICAgIEFQSV9LRVksXHJcbiAgICBIT1NUXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgYXN5bmNGb3JFYWNoLCBnZXRVcmxWYXJzXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmVyXCI7XHJcbmltcG9ydCBGaWxtQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWxtQ2FyZFwiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKHtcclxuXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiL1wiKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Rvb2xCb3hTZWFyY2hWYWx1ZSwgc2V0VG9vbEJveFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaGVkRmlsbXMsIHNldFNlYXJjaGVkRmlsbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1cGRhdGVTZWFyY2gsIHNldFVwZGF0ZVNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHNlYXJjaCA9ICh7XHJcbiAgICAgICAgcyxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHlcclxuICAgIH0pID0+IHtcclxuICAgICAgICBsZXQgbWFpblBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRzOiBzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih0eXBlKSBtYWluUGFyYW1ldGVycy50eXBlID0gdHlwZTtcclxuICAgICAgICBpZih5KSBtYWluUGFyYW1ldGVycy55ID0geTtcclxuXHRcdGNvbnN0IG1haW5RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobWFpblBhcmFtZXRlcnMpO1xyXG5cdFx0YXBpKHtcclxuXHRcdFx0dXJsOiBIT1NUICsgJz8nICsgbWFpblF1ZXJ5XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG5cdFx0XHRpZiAocmVzLlJlc3BvbnNlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0XHRsZXQgZnVsbHlEYXRhID0gW107XHJcblx0XHRcdFx0YXdhaXQgYXN5bmNGb3JFYWNoKHJlcy5TZWFyY2gsIGFzeW5jIChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUGFyYW1ldGVycyA9IHtcclxuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxyXG5cdFx0XHRcdFx0XHRwbG90OiAnc2hvcnQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnbW92aWUnLFxyXG5cdFx0XHRcdFx0XHRyOiAnanNvbicsXHJcblx0XHRcdFx0XHRcdGk6IGl0ZW0uaW1kYklEXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGl0ZW1QYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBIT1NUICsgJz8nICsgaXRlbVF1ZXJ5XHJcblx0XHRcdFx0XHR9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcblx0XHRcdFx0XHRmdWxseURhdGEucHVzaChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaGVkRmlsbXMoZnVsbHlEYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFRleHQocyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0RXJyKHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc1snRXJyb3InXVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0YWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBjb25zdCBfc2VhcmNoSlNPTiA9IGdldFVybFZhcnMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGNvbnN0IF9zZWFyY2hUZXh0ID0gX3NlYXJjaEpTT04ucy5yZXBsYWNlKFwiP3M9XCIsIFwiXCIpLnJlcGxhY2UoLyUyMC9nLCBcIiBcIik7XHJcbiAgICAgICAgc2V0U2VhcmNoVGV4dChfc2VhcmNoVGV4dCk7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgczogX3NlYXJjaFRleHRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKF9zZWFyY2hKU09OLnR5cGUpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnR5cGUgPSBfc2VhcmNoSlNPTi50eXBlO1xyXG4gICAgICAgICAgICBzZXRUeXBlKF9zZWFyY2hKU09OLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihfc2VhcmNoSlNPTi55KSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy55ID0gX3NlYXJjaEpTT04ueTtcclxuICAgICAgICAgICAgc2V0WWVhcihfc2VhcmNoSlNPTi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoKHBhcmFtcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih1cGRhdGVTZWFyY2gpIHNlYXJjaCh1cGRhdGVTZWFyY2gpO1xyXG4gICAgfSwgW3VwZGF0ZVNlYXJjaF0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVcGRhdGVTZWFyY2gobnVsbCk7XHJcbiAgICB9LCBbc2VhcmNoZWRGaWxtc10pO1xyXG4gICAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICAgICAgPEJyZWFkY3J1bWJzXHJcbiAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWFyY2ggcmVzdWx0cyBmb3IgXCIgKyBzZWFyY2hUZXh0LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDQwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwidGFibGUtY2VsbFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJjb250YWluZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcGRhdGVTZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczogdG9vbEJveFNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHllYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b29sQm94U2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHNldFRvb2xCb3hTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2xib3hZZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWWVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudCkgPT4gc2V0WWVhcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2xib3hUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudCkgPT4gc2V0VHlwZShldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiQW55XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU2VyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiTW92aWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJFcGlzb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV90aXRsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEwJVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWFyY2ggcmVzdWx0IGZvciA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fT57c2VhcmNoVGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zICYmIHNlYXJjaGVkRmlsbXMubGVuZ3RoICYmIHVwZGF0ZVNlYXJjaCA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcy5tYXAoKGZpbG0sIGZpbG1JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZpbG1DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiSUQ9e2ZpbG0uaW1kYklEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxtLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ZpbG0uUG9zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZmlsbS5QbG90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1kYlBvaW50PXtmaWxtLmltZGJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wiZmlsbS1cIitmaWxtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXtmaWxtLlllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IGVyciA/IGVyci5tZXNzYWdlIDogPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdQb3BwaW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWcO8a2xlbml5b3IuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=