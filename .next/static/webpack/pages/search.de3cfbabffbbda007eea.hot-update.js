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
    setPath(window.location.pathname); //const _searchText = window.location.search.replace("?s=", "").replace(/%20/g, " ");

    var _searchJSON = Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["getUrlVars"])(window.location.href);

    console.log("DATA:", _searchJSON);
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
      lineNumber: 98,
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
      lineNumber: 99,
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
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: "table-cell"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 125,
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
      lineNumber: 132,
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
      lineNumber: 195,
      columnNumber: 9
    }
  }, "Search result for ", __jsx("span", {
    style: {
      color: "goldenrod"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
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
      lineNumber: 204,
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
        lineNumber: 215,
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
      lineNumber: 231,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVwZGF0ZVNlYXJjaCIsInNldFVwZGF0ZVNlYXJjaCIsInNlYXJjaCIsInMiLCJ5IiwibWFpblBhcmFtZXRlcnMiLCJhcGlrZXkiLCJBUElfS0VZIiwiciIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl9zZWFyY2hKU09OIiwiZ2V0VXJsVmFycyIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiX3NlYXJjaFRleHQiLCJ0aXRsZSIsInRvU3RyaW5nIiwic2VsZWN0ZWQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImxhYmVsIiwicHJvcHMiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJrZXkiLCJpZCIsImV2ZW50IiwiZGF0YSIsInN0eWxlX3RpdGxlIiwiZmxleFdyYXAiLCJsZW5ndGgiLCJtYXAiLCJmaWxtIiwiZmlsbUluZGV4IiwiVGl0bGUiLCJQb3N0ZXIiLCJQbG90IiwiaW1kYlJhdGluZyIsIlllYXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBR0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUVUO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3NCQyxzREFBUSxDQUFDLEdBQUQsQ0FEOUI7QUFBQSxNQUNLQyxJQURMO0FBQUEsTUFDV0MsT0FEWDs7QUFBQSxtQkFFa0NGLHNEQUFRLENBQUMsRUFBRCxDQUYxQztBQUFBLE1BRUtHLFVBRkw7QUFBQSxNQUVpQkMsYUFGakI7O0FBQUEsbUJBR2tESixzREFBUSxDQUFDLEVBQUQsQ0FIMUQ7QUFBQSxNQUdLSyxrQkFITDtBQUFBLE1BR3lCQyxxQkFIekI7O0FBQUEsbUJBSW9CTixzREFBUSxDQUFDLElBQUQsQ0FKNUI7QUFBQSxNQUlLTyxHQUpMO0FBQUEsTUFJVUMsTUFKVjs7QUFBQSxtQkFLd0NSLHNEQUFRLENBQUMsRUFBRCxDQUxoRDtBQUFBLE1BS0tTLGFBTEw7QUFBQSxNQUtvQkMsZ0JBTHBCOztBQUFBLG1CQU1zQlYsc0RBQVEsQ0FBQyxJQUFELENBTjlCO0FBQUEsTUFNS1csSUFOTDtBQUFBLE1BTVdDLE9BTlg7O0FBQUEsbUJBT3NCWixzREFBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9LYSxJQVBMO0FBQUEsTUFPV0MsT0FQWDs7QUFBQSxtQkFRc0NkLHNEQUFRLENBQUMsSUFBRCxDQVI5QztBQUFBLE1BUUtlLFlBUkw7QUFBQSxNQVFtQkMsZUFS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QU8sRUFBRUgsSUFBSSxDQUFDSSxJQUxYO0FBTUgsZUFBUyxFQUFFSixJQUFJLENBQUNLLFVBTmI7QUFPSCxTQUFHLEVBQUUsVUFBUUosU0FQVjtBQVFILFVBQUksRUFBRUQsSUFBSSxDQUFDTSxJQVJSO0FBU0gsZUFBUyxFQUFDLFFBVFA7QUFVSCxXQUFLLEVBQUU7QUFDSEMsa0JBQVUsRUFBRSxDQURUO0FBRUhDLG1CQUFXLEVBQUU7QUFGVixPQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQWVILEdBaEJELENBREosR0FrQkVyRixHQUFHLEdBQUdBLEdBQUcsQ0FBQ3VDLE9BQVAsR0FBaUI7QUFDbEIsU0FBSyxFQUFFO0FBQ0hlLFdBQUssRUFBRSxNQURKO0FBRUhnQyxnQkFBVSxFQUFFLEVBRlQ7QUFHSEMsbUJBQWEsRUFBRSxFQUhaO0FBSUhoQyxhQUFPLEVBQUUsTUFKTjtBQUtIaUMsb0JBQWMsRUFBRSxRQUxiO0FBTUhDLGdCQUFVLEVBQUUsUUFOVDtBQU9IQyxnQkFBVSxFQUFFO0FBUFQsS0FEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTNCOUIsQ0ExR0csQ0FBUDtBQXFKSCxDQWxPRDs7R0FBTWxHLE07O0tBQUFBLE07QUFtT1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5kZTNjZmJhYmZmYmJkYTAwN2VlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIHVzZVN0YXRlXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dFwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBUb29sYm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rvb2xib3hcIjtcclxuaW1wb3J0IHtcclxuICAgIHRpdGxlIGFzIHN0eWxlX3RpdGxlXHJcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHtcclxuICAgIEFQSV9LRVksXHJcbiAgICBIT1NUXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgYXN5bmNGb3JFYWNoLCBnZXRVcmxWYXJzXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vc2VydmVyXCI7XHJcbmltcG9ydCBGaWxtQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWxtQ2FyZFwiO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKHtcclxuXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiL1wiKTtcclxuICAgIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Rvb2xCb3hTZWFyY2hWYWx1ZSwgc2V0VG9vbEJveFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaGVkRmlsbXMsIHNldFNlYXJjaGVkRmlsbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1cGRhdGVTZWFyY2gsIHNldFVwZGF0ZVNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHNlYXJjaCA9ICh7XHJcbiAgICAgICAgcyxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHlcclxuICAgIH0pID0+IHtcclxuICAgICAgICBsZXQgbWFpblBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRzOiBzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih0eXBlKSBtYWluUGFyYW1ldGVycy50eXBlID0gdHlwZTtcclxuICAgICAgICBpZih5KSBtYWluUGFyYW1ldGVycy55ID0geTtcclxuXHRcdGNvbnN0IG1haW5RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobWFpblBhcmFtZXRlcnMpO1xyXG5cdFx0YXBpKHtcclxuXHRcdFx0dXJsOiBIT1NUICsgJz8nICsgbWFpblF1ZXJ5XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG5cdFx0XHRpZiAocmVzLlJlc3BvbnNlID09PSAnVHJ1ZScpIHtcclxuXHRcdFx0XHRsZXQgZnVsbHlEYXRhID0gW107XHJcblx0XHRcdFx0YXdhaXQgYXN5bmNGb3JFYWNoKHJlcy5TZWFyY2gsIGFzeW5jIChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUGFyYW1ldGVycyA9IHtcclxuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxyXG5cdFx0XHRcdFx0XHRwbG90OiAnc2hvcnQnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnbW92aWUnLFxyXG5cdFx0XHRcdFx0XHRyOiAnanNvbicsXHJcblx0XHRcdFx0XHRcdGk6IGl0ZW0uaW1kYklEXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zdCBpdGVtUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGl0ZW1QYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBIT1NUICsgJz8nICsgaXRlbVF1ZXJ5XHJcblx0XHRcdFx0XHR9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcblx0XHRcdFx0XHRmdWxseURhdGEucHVzaChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaGVkRmlsbXMoZnVsbHlEYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFRleHQocyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0RXJyKHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc1snRXJyb3InXVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0YWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAvL2NvbnN0IF9zZWFyY2hUZXh0ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP3M9XCIsIFwiXCIpLnJlcGxhY2UoLyUyMC9nLCBcIiBcIik7XHJcbiAgICAgICAgY29uc3QgX3NlYXJjaEpTT04gPSBnZXRVcmxWYXJzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEE6XCIsIF9zZWFyY2hKU09OKTtcclxuICAgICAgICBzZXRTZWFyY2hUZXh0KF9zZWFyY2hUZXh0KTtcclxuICAgICAgICBzZWFyY2goe1xyXG4gICAgICAgICAgICBzOiBfc2VhcmNoVGV4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodXBkYXRlU2VhcmNoKSBzZWFyY2godXBkYXRlU2VhcmNoKTtcclxuICAgIH0sIFt1cGRhdGVTZWFyY2hdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXBkYXRlU2VhcmNoKG51bGwpO1xyXG4gICAgfSwgW3NlYXJjaGVkRmlsbXNdKTtcclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG4gICAgICAgIDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoIHJlc3VsdHMgZm9yIFwiICsgc2VhcmNoVGV4dC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0MFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBkYXRlU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHM6IHRvb2xCb3hTZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB5ZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdG9vbEJveFNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRUb29sQm94U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sYm94WWVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlllYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHNldFllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkFueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sYm94VHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHNldFR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkFueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlNlcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk1vdmllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiRXBpc29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVfdGl0bGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgU2VhcmNoIHJlc3VsdCBmb3IgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ29sZGVucm9kXCIgfX0+e3NlYXJjaFRleHR9PC9zcGFuPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoZWRGaWxtcyAmJiBzZWFyY2hlZEZpbG1zLmxlbmd0aCAmJiB1cGRhdGVTZWFyY2ggPT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkRmlsbXMubWFwKChmaWxtLCBmaWxtSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGaWxtQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1kYklEPXtmaWxtLmltZGJJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtmaWxtSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZmlsbS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtmaWxtLlBvc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2ZpbG0uUGxvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJQb2ludD17ZmlsbS5pbWRiUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcImZpbG0tXCIrZmlsbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17ZmlsbS5ZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiBlcnIgPyBlcnIubWVzc2FnZSA6IDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnUG9wcGlucydcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFnDvGtsZW5peW9yLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXSwic291cmNlUm9vdCI6IiJ9