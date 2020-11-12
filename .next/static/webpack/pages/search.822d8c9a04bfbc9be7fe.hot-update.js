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
        console.log(index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInRvb2xCb3hTZWFyY2hWYWx1ZSIsInNldFRvb2xCb3hTZWFyY2hWYWx1ZSIsImVyciIsInNldEVyciIsInNlYXJjaGVkRmlsbXMiLCJzZXRTZWFyY2hlZEZpbG1zIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfc2VhcmNoVGV4dCIsInNlYXJjaCIsInJlcGxhY2UiLCJtYWluUGFyYW1ldGVycyIsImFwaWtleSIsIkFQSV9LRVkiLCJyIiwicyIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0IiwidGl0bGUiLCJ0b1N0cmluZyIsInNlbGVjdGVkIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJsYWJlbCIsInByb3BzIiwidmFyaWFudCIsImNvbG9yIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJrZXkiLCJpZCIsImV2ZW50IiwiaW5kZXgiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0eWxlX3RpdGxlIiwiZmxleFdyYXAiLCJsZW5ndGgiLCJtYXAiLCJmaWxtIiwiZmlsbUluZGV4IiwiVGl0bGUiLCJQb3N0ZXIiLCJQbG90IiwiaW1kYlJhdGluZyIsIlllYXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBR0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUVUO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3NCQyxzREFBUSxDQUFDLEdBQUQsQ0FEOUI7QUFBQSxNQUNLQyxJQURMO0FBQUEsTUFDV0MsT0FEWDs7QUFBQSxtQkFFa0NGLHNEQUFRLENBQUMsRUFBRCxDQUYxQztBQUFBLE1BRUtHLFVBRkw7QUFBQSxNQUVpQkMsYUFGakI7O0FBQUEsbUJBR2tESixzREFBUSxDQUFDLEVBQUQsQ0FIMUQ7QUFBQSxNQUdLSyxrQkFITDtBQUFBLE1BR3lCQyxxQkFIekI7O0FBQUEsbUJBSW9CTixzREFBUSxDQUFDLElBQUQsQ0FKNUI7QUFBQSxNQUlLTyxHQUpMO0FBQUEsTUFJVUMsTUFKVjs7QUFBQSxtQkFLd0NSLHNEQUFRLENBQUMsRUFBRCxDQUxoRDtBQUFBLE1BS0tTLGFBTEw7QUFBQSxNQUtvQkMsZ0JBTHBCOztBQUFBLG1CQU1zQlYsc0RBQVEsQ0FBQyxJQUFELENBTjlCO0FBQUEsTUFNS1csSUFOTDtBQUFBLE1BTVdDLE9BTlg7O0FBQUEsbUJBT3NCWixzREFBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9LYSxJQVBMO0FBQUEsTUFPV0MsT0FQWDs7QUFRRkMseURBQVMsQ0FBQyxZQUFNO0FBQ1piLFdBQU8sQ0FBQ2MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUFQOztBQUNBLFFBQU1DLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxNQUFoQixDQUF1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R0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLFNBQVAsRUFBcUI7QUFDbkMsV0FBTyxNQUFDLDZEQUFEO0FBQ0gsWUFBTSxFQUFFRCxJQUFJLENBQUN0QyxNQURWO0FBRUgsV0FBSyxFQUFFdUMsU0FGSjtBQUdILFdBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUhUO0FBSUgsV0FBSyxFQUFFRixJQUFJLENBQUNHLE1BSlQ7QUFLSCxhQUFPLEVBQUVILElBQUksQ0FBQ0ksSUFMWDtBQU1ILGVBQVMsRUFBRUosSUFBSSxDQUFDSyxVQU5iO0FBT0gsU0FBRyxFQUFFLFVBQVFKLFNBUFY7QUFRSCxVQUFJLEVBQUVELElBQUksQ0FBQ00sSUFSUjtBQVNILGVBQVMsRUFBQyxRQVRQO0FBVUgsV0FBSyxFQUFFO0FBQ0hDLGtCQUFVLEVBQUUsQ0FEVDtBQUVIQyxtQkFBVyxFQUFFO0FBRlYsT0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFlSCxHQWhCRCxDQURKLEdBa0JFaEYsR0FBRyxHQUFHQSxHQUFHLENBQUMwQyxPQUFQLEdBQWlCO0FBQ2xCLFNBQUssRUFBRTtBQUNISyxXQUFLLEVBQUUsTUFESjtBQUVIa0MsZ0JBQVUsRUFBRSxFQUZUO0FBR0hDLG1CQUFhLEVBQUUsRUFIWjtBQUlIbEMsYUFBTyxFQUFFLE1BSk47QUFLSG1DLG9CQUFjLEVBQUUsUUFMYjtBQU1IQyxnQkFBVSxFQUFFLFFBTlQ7QUFPSEMsZ0JBQVUsRUFBRTtBQVBULEtBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEzQjlCLENBckdHLENBQVA7QUFnSkgsQ0F4TUQ7O0dBQU03RixNOztLQUFBQSxNO0FBeU1TQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guODIyZDhjOWEwNGJmYmM5YmU3ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICB1c2VTdGF0ZVxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXRcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgVG9vbGJveCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90b29sYm94XCI7XHJcbmltcG9ydCB7XHJcbiAgICB0aXRsZSBhcyBzdHlsZV90aXRsZVxyXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBUElfS0VZLFxyXG4gICAgSE9TVFxyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIGFzeW5jRm9yRWFjaFxyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZlclwiO1xyXG5pbXBvcnQgRmlsbUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmlsbUNhcmRcIjtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIi9cIik7XHJcbiAgICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0b29sQm94U2VhcmNoVmFsdWUsIHNldFRvb2xCb3hTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hlZEZpbG1zLCBzZXRTZWFyY2hlZEZpbG1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICBjb25zdCBfc2VhcmNoVGV4dCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9zPVwiLCBcIlwiKS5yZXBsYWNlKC8lMjAvZywgXCIgXCIpO1xyXG4gICAgICAgIHNldFNlYXJjaFRleHQoX3NlYXJjaFRleHQpO1xyXG4gICAgICAgIGNvbnN0IG1haW5QYXJhbWV0ZXJzID0ge1xyXG5cdFx0XHRhcGlrZXk6IEFQSV9LRVksXHJcblx0XHRcdHR5cGU6ICdtb3ZpZScsXHJcblx0XHRcdHI6ICdqc29uJyxcclxuXHRcdFx0czogX3NlYXJjaFRleHRcclxuXHRcdH07XHJcblx0XHRjb25zdCBtYWluUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG1haW5QYXJhbWV0ZXJzKTtcclxuXHRcdGFwaSh7XHJcblx0XHRcdHVybDogSE9TVCArICc/JyArIG1haW5RdWVyeVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuXHRcdFx0aWYgKHJlcy5SZXNwb25zZSA9PT0gJ1RydWUnKSB7XHJcblx0XHRcdFx0bGV0IGZ1bGx5RGF0YSA9IFtdO1xyXG5cdFx0XHRcdGF3YWl0IGFzeW5jRm9yRWFjaChyZXMuU2VhcmNoLCBhc3luYyAoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbVBhcmFtZXRlcnMgPSB7XHJcblx0XHRcdFx0XHRcdGFwaWtleTogQVBJX0tFWSxcclxuXHRcdFx0XHRcdFx0cGxvdDogJ3Nob3J0JyxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ21vdmllJyxcclxuXHRcdFx0XHRcdFx0cjogJ2pzb24nLFxyXG5cdFx0XHRcdFx0XHRpOiBpdGVtLmltZGJJRFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbVF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpdGVtUGFyYW1ldGVycyk7XHJcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaSh7XHJcblx0XHRcdFx0XHRcdHVybDogSE9TVCArICc/JyArIGl0ZW1RdWVyeVxyXG5cdFx0XHRcdFx0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG5cdFx0XHRcdFx0ZnVsbHlEYXRhLnB1c2goaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblx0XHRcdFx0c2V0U2VhcmNoZWRGaWxtcyhmdWxseURhdGEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEVycih7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXNbJ0Vycm9yJ11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG4gICAgICAgIDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VhcmNoIHJlc3VsdHMgZm9yIFwiICsgc2VhcmNoVGV4dC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0MFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvb2xCb3hTZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0VG9vbEJveFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbGJveFllYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJZZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQsIGluZGV4LCB2YWx1ZSkgPT4gc2V0WWVhcih2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJBbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbGJveFR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZXZlbnQsIGluZGV4LCB2YWx1ZSkgPT4ge2NvbnNvbGUubG9nKGluZGV4KX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJBbnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJNb3ZpZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIkVwaXNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX3RpdGxlfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTAlXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFNlYXJjaCByZXN1bHQgZm9yIHt5ZWFyfSA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fT57c2VhcmNoVGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zICYmIHNlYXJjaGVkRmlsbXMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZEZpbG1zLm1hcCgoZmlsbSwgZmlsbUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmlsbUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZGJJRD17ZmlsbS5pbWRiSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17ZmlsbUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpbG0uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZmlsbS5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtmaWxtLlBsb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWRiUG9pbnQ9e2ZpbG0uaW1kYlJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJmaWxtLVwiK2ZpbG1JbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e2ZpbG0uWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogZXJyID8gZXJyLm1lc3NhZ2UgOiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1BvcHBpbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBZw7xrbGVuaXlvci4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==