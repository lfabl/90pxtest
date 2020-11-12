webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server */ "./server/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout */ "./layout/index.js");
/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/welcome */ "./components/welcome/index.js");
/* harmony import */ var _components_toolbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/toolbox */ "./components/toolbox/index.js");
/* harmony import */ var _components_cardSlider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/cardSlider */ "./components/cardSlider/index.js");
/* harmony import */ var _components_filmCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/filmCard */ "./components/filmCard/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context */ "./context/index.js");




var _this = undefined,
    _jsxFileName = "D:\\Works\\customer\\nextjs-blog\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var Home = function Home() {
  _s();

  var _useGlobalState = Object(_context__WEBPACK_IMPORTED_MODULE_14__["useGlobalState"])(),
      _useGlobalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useGlobalState, 2),
      globalState = _useGlobalState2[0],
      setGlobalState = _useGlobalState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      popularFilms = _useState[0],
      setPopularFilms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      err = _useState2[0],
      setErr = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      toolBoxSearchValue = _useState3[0],
      setToolBoxSearchValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      year = _useState4[0],
      setYear = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      type = _useState5[0],
      setType = _useState5[1];

  var search = function search() {
    var mainParameters = {
      apikey: _constants__WEBPACK_IMPORTED_MODULE_6__["API_KEY"],
      type: 'movie',
      r: 'json',
      s: toolBoxSearchValue
    };
    if (type) mainParameters.type = type;
    if (year) mainParameters.y = year;
    var mainQuery = new URLSearchParams(mainParameters);
    window.location.href = "/search?" + mainQuery;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var mainParameters = {
      apikey: _constants__WEBPACK_IMPORTED_MODULE_6__["API_KEY"],
      type: 'movie',
      r: 'json',
      s: 'abe' // Apinin imdb point üzerinde arama bölümü olmadığı için kendim salladım bu kısmı.

    };
    var mainQuery = new URLSearchParams(mainParameters);
    Object(_server__WEBPACK_IMPORTED_MODULE_5__["default"])({
      url: _constants__WEBPACK_IMPORTED_MODULE_6__["HOST"] + '?' + mainQuery
    }).then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
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
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_13__["asyncForEach"])(res.Search, /*#__PURE__*/function () {
                  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {
                    var itemParameters, itemQuery, response, itemData;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            itemParameters = {
                              apikey: _constants__WEBPACK_IMPORTED_MODULE_6__["API_KEY"],
                              plot: 'short',
                              type: 'movie',
                              r: 'json',
                              i: item.imdbID
                            };
                            itemQuery = new URLSearchParams(itemParameters);
                            _context.next = 4;
                            return Object(_server__WEBPACK_IMPORTED_MODULE_5__["default"])({
                              url: _constants__WEBPACK_IMPORTED_MODULE_6__["HOST"] + '?' + itemQuery
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
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 4:
                setPopularFilms(fullyData);
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
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (err) {
      alert(err.message);
    });
  }, []);
  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  })), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }
  }, __jsx(_components_welcome__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Welcome to MovieUP.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    toolbox: __jsx(_components_toolbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      button: {
        label: "Search",
        props: {
          variant: "contained",
          color: "primary",
          onClick: function onClick() {
            return search();
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
        onChange: function onChange(e) {
          return setYear(e.target.value);
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
        onChange: function onChange(e) {
          return setType(e.target.value);
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
        lineNumber: 91,
        columnNumber: 15
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["safeSpace"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }), popularFilms && popularFilms.length ? __jsx(_components_cardSlider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Popular Movies",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, popularFilms.map(function (film, filmIndex) {
    return __jsx(_components_filmCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      imdbID: film.imdbID,
      index: filmIndex,
      title: film.Title,
      image: film.Poster,
      content: film.Plot,
      imdbPoint: film.imdbRating,
      key: "film-" + filmIndex,
      year: film.Year,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    });
  })) : err ? err.message : __jsx("div", {
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
      lineNumber: 166,
      columnNumber: 28
    }
  }, "Y\xFCkleniyor..."), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["footerSpace"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }))));
};

_s(Home, "+hf09KvOMok1K/OSELazRpArGgw=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_14__["useGlobalState"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUdsb2JhbFN0YXRlIiwiZ2xvYmFsU3RhdGUiLCJzZXRHbG9iYWxTdGF0ZSIsInVzZVN0YXRlIiwicG9wdWxhckZpbG1zIiwic2V0UG9wdWxhckZpbG1zIiwiZXJyIiwic2V0RXJyIiwidG9vbEJveFNlYXJjaFZhbHVlIiwic2V0VG9vbEJveFNlYXJjaFZhbHVlIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInNlYXJjaCIsIm1haW5QYXJhbWV0ZXJzIiwiYXBpa2V5IiwiQVBJX0tFWSIsInIiLCJzIiwieSIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVzZUVmZmVjdCIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJTZWFyY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0Iiwic3R5bGVfY29udGFpbmVyIiwibGFiZWwiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImtleSIsImlkIiwidGl0bGUiLCJkYXRhIiwic3R5bGVfc2FmZVNwYWNlIiwibGVuZ3RoIiwibWFwIiwiZmlsbSIsImZpbG1JbmRleCIsIlRpdGxlIiwiUG9zdGVyIiwiUGxvdCIsImltZGJSYXRpbmciLCJZZWFyIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5Iiwic3R5bGVfZm9vdGVyU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLHdCQUNvQkMsZ0VBQWMsRUFEbEM7QUFBQTtBQUFBLE1BQ1hDLFdBRFc7QUFBQSxNQUNFQyxjQURGOztBQUFBLGtCQUVzQkMsc0RBQVEsRUFGOUI7QUFBQSxNQUVYQyxZQUZXO0FBQUEsTUFFR0MsZUFGSDs7QUFBQSxtQkFHSUYsc0RBQVEsQ0FBQyxJQUFELENBSFo7QUFBQSxNQUdYRyxHQUhXO0FBQUEsTUFHTkMsTUFITTs7QUFBQSxtQkFJa0NKLHNEQUFRLENBQUMsRUFBRCxDQUoxQztBQUFBLE1BSVhLLGtCQUpXO0FBQUEsTUFJU0MscUJBSlQ7O0FBQUEsbUJBS1NOLHNEQUFRLENBQUMsSUFBRCxDQUxqQjtBQUFBLE1BS1JPLElBTFE7QUFBQSxNQUtGQyxPQUxFOztBQUFBLG1CQU1TUixzREFBUSxDQUFDLElBQUQsQ0FOakI7QUFBQSxNQU1SUyxJQU5RO0FBQUEsTUFNRkMsT0FORTs7QUFPZixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLFFBQUlDLGNBQWMsR0FBRztBQUMxQkMsWUFBTSxFQUFFQyxrREFEa0I7QUFFMUJMLFVBQUksRUFBRSxPQUZvQjtBQUcxQk0sT0FBQyxFQUFFLE1BSHVCO0FBSTFCQyxPQUFDLEVBQUVYO0FBSnVCLEtBQXJCO0FBTUEsUUFBR0ksSUFBSCxFQUFTRyxjQUFjLENBQUNILElBQWYsR0FBc0JBLElBQXRCO0FBQ1QsUUFBR0YsSUFBSCxFQUFTSyxjQUFjLENBQUNLLENBQWYsR0FBbUJWLElBQW5CO0FBQ2YsUUFBTVcsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0JQLGNBQXBCLENBQWxCO0FBQ0FRLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsYUFBYUosU0FBcEM7QUFDRyxHQVhEOztBQWFISyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNWCxjQUFjLEdBQUc7QUFDdEJDLFlBQU0sRUFBRUMsa0RBRGM7QUFFdEJMLFVBQUksRUFBRSxPQUZnQjtBQUd0Qk0sT0FBQyxFQUFFLE1BSG1CO0FBSXRCQyxPQUFDLEVBQUUsS0FKbUIsQ0FJYjs7QUFKYSxLQUF2QjtBQU1BLFFBQU1FLFNBQVMsR0FBRyxJQUFJQyxlQUFKLENBQW9CUCxjQUFwQixDQUFsQjtBQUNBWSwyREFBRyxDQUFDO0FBQ0hDLFNBQUcsRUFBRUMsK0NBQUksR0FBRyxHQUFQLEdBQWFSO0FBRGYsS0FBRCxDQUFILENBR0NTLElBSEQ7QUFBQSxrTUFHTSxrQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDREEsR0FBRyxDQUFDQyxRQUFKLEtBQWlCLE1BRGhCO0FBQUE7QUFBQTtBQUFBOztBQUVBQyx5QkFGQSxHQUVZLEVBRlo7QUFBQTtBQUFBLHVCQUdFQyw4REFBWSxDQUFDSCxHQUFHLENBQUNJLE1BQUw7QUFBQSwrTUFBYSxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJDLDBDQUR3QixHQUNQO0FBQ3RCckIsb0NBQU0sRUFBRUMsa0RBRGM7QUFFdEJxQixrQ0FBSSxFQUFFLE9BRmdCO0FBR3RCMUIsa0NBQUksRUFBRSxPQUhnQjtBQUl0Qk0sK0JBQUMsRUFBRSxNQUptQjtBQUt0QnFCLCtCQUFDLEVBQUVILElBQUksQ0FBQ0k7QUFMYyw2QkFETztBQVF4QkMscUNBUndCLEdBUVosSUFBSW5CLGVBQUosQ0FBb0JlLGNBQXBCLENBUlk7QUFBQTtBQUFBLG1DQVNQVix1REFBRyxDQUFDO0FBQzFCQyxpQ0FBRyxFQUFFQywrQ0FBSSxHQUFHLEdBQVAsR0FBYVk7QUFEUSw2QkFBRCxDQVRJOztBQUFBO0FBU3hCQyxvQ0FUd0I7QUFZMUJDLG9DQVowQixHQVlmQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVKLFFBQWYsQ0FBWCxDQVplO0FBYTlCVCxxQ0FBUyxDQUFDYyxJQUFWLENBQWVKLFFBQWY7O0FBYjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhkOztBQUFBO0FBa0JKdEMsK0JBQWUsQ0FBQzRCLFNBQUQsQ0FBZjtBQWxCSTtBQUFBOztBQUFBO0FBb0JKMUIsc0JBQU0sQ0FBQztBQUNOeUMseUJBQU8sRUFBRWpCLEdBQUcsQ0FBQyxPQUFEO0FBRE4saUJBQUQsQ0FBTjs7QUFwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FITjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE0Qk8sVUFBQ3pCLEdBQUQsRUFBUztBQUNmMkMsV0FBSyxDQUFDM0MsR0FBRyxDQUFDMEMsT0FBTCxDQUFMO0FBQ0EsS0E5QkQ7QUErQkEsR0F2Q1EsRUF1Q04sRUF2Q00sQ0FBVDtBQXdDQSxTQUFPLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOO0FBQUssYUFBUyxFQUFFRSwyREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsRUFFQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQztBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBREQsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUNDLFNBQUssRUFBQyxxQkFEUDtBQUVDLFdBQU8sRUFBQyxpTUFGVDtBQUdDLFdBQU8sRUFBRSxNQUFDLDREQUFEO0FBQ1IsWUFBTSxFQUFFO0FBQ1BDLGFBQUssRUFBRSxRQURBO0FBRVBDLGFBQUssRUFBRTtBQUNOQyxpQkFBTyxFQUFFLFdBREg7QUFFTkMsZUFBSyxFQUFFLFNBRkQ7QUFHTkMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNekMsTUFBTSxFQUFaO0FBQUE7QUFISDtBQUZBLE9BREE7QUFTUixZQUFNLEVBQUU7QUFDUDBDLGFBQUssRUFBRWhELGtCQURBO0FBRVBpRCxnQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsaUJBQU9qRCxxQkFBcUIsQ0FBQ2lELENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxLQUFWLENBQTVCO0FBQUE7QUFGSCxPQVRBO0FBYVIsVUFBSSxFQUFFO0FBQ0xJLFdBQUcsRUFBRSxhQURBO0FBRUxDLFVBQUUsRUFBRSxzQkFGQztBQUdMQyxhQUFLLEVBQUUsTUFIRjtBQUlMTCxnQkFBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEsaUJBQUkvQyxPQUFPLENBQUMrQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0gsS0FBVixDQUFYO0FBQUEsU0FKTjtBQUtMTyxZQUFJLEVBQUUsQ0FDTDtBQUNDUCxlQUFLLEVBQUUsS0FEUjtBQUVDLHFCQUFTO0FBRlYsU0FESyxFQUtMO0FBQ0NBLGVBQUssRUFBRTtBQURSLFNBTEssRUFRTDtBQUNDQSxlQUFLLEVBQUU7QUFEUixTQVJLO0FBTEQsT0FiRTtBQStCUixVQUFJLEVBQUU7QUFDTEksV0FBRyxFQUFFLGFBREE7QUFFTEMsVUFBRSxFQUFFLHNCQUZDO0FBR0xDLGFBQUssRUFBRSxNQUhGO0FBSUxMLGdCQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxpQkFBSTdDLE9BQU8sQ0FBQzZDLENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxLQUFWLENBQVg7QUFBQSxTQUpOO0FBS0xPLFlBQUksRUFBRSxDQUNMO0FBQ0NQLGVBQUssRUFBRSxLQURSO0FBRUMscUJBQVM7QUFGVixTQURLLEVBS0w7QUFDQ0EsZUFBSyxFQUFFO0FBRFIsU0FMSyxFQVFMO0FBQ0NBLGVBQUssRUFBRTtBQURSLFNBUkssRUFXTDtBQUNDQSxlQUFLLEVBQUU7QUFEUixTQVhLO0FBTEQsT0EvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQTBEQztBQUFLLGFBQVMsRUFBRVEsMkRBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExREQsRUE0REU1RCxZQUFZLElBQUlBLFlBQVksQ0FBQzZELE1BQTdCLEdBQ0MsTUFBQywrREFBRDtBQUNDLFNBQUssRUFBQyxnQkFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU3RCxZQUFZLENBQUM4RCxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFxQjtBQUNyQyxXQUFPLE1BQUMsNkRBQUQ7QUFDTixZQUFNLEVBQUVELElBQUksQ0FBQzNCLE1BRFA7QUFFTixXQUFLLEVBQUU0QixTQUZEO0FBR04sV0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBSE47QUFJTixXQUFLLEVBQUVGLElBQUksQ0FBQ0csTUFKTjtBQUtOLGFBQU8sRUFBRUgsSUFBSSxDQUFDSSxJQUxSO0FBTU4sZUFBUyxFQUFFSixJQUFJLENBQUNLLFVBTlY7QUFPTixTQUFHLEVBQUUsVUFBUUosU0FQUDtBQVFOLFVBQUksRUFBRUQsSUFBSSxDQUFDTSxJQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQVVBLEdBWEQsQ0FKRixDQURELEdBbUJFbkUsR0FBRyxHQUFHQSxHQUFHLENBQUMwQyxPQUFQLEdBQWlCO0FBQ3JCLFNBQUssRUFBRTtBQUNOMEIsV0FBSyxFQUFFLE1BREQ7QUFFTkMsZ0JBQVUsRUFBRSxFQUZOO0FBR05DLG1CQUFhLEVBQUUsRUFIVDtBQUlOQyxhQUFPLEVBQUUsTUFKSDtBQUtOQyxvQkFBYyxFQUFFLFFBTFY7QUFNTkMsZ0JBQVUsRUFBRSxRQU5OO0FBT05DLGdCQUFVLEVBQUU7QUFQTixLQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBL0V4QixFQTZGQztBQUFLLGFBQVMsRUFBRUMsNkRBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3RkQsQ0FORCxDQURNLENBQVA7QUF3R0EsQ0FwS0Q7O0dBQU1sRixJO1VBQ2lDQyx3RDs7O0tBRGpDRCxJO0FBcUtTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZGY3YTU0NjZkZGM3N2FhYWIzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3NlcnZlcic7XG5pbXBvcnQgeyBBUElfS0VZLCBIT1NUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7XG5cdGNvbnRhaW5lciBhcyBzdHlsZV9jb250YWluZXIsXG5cdHNhZmVTcGFjZSBhcyBzdHlsZV9zYWZlU3BhY2UsXG5cdGZvb3RlclNwYWNlIGFzIHN0eWxlX2Zvb3RlclNwYWNlXG59IGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi9jb21wb25lbnRzL3dlbGNvbWUnO1xuaW1wb3J0IFRvb2xib3ggZnJvbSAnLi4vY29tcG9uZW50cy90b29sYm94JztcbmltcG9ydCBDYXJkU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZFNsaWRlcic7XG5pbXBvcnQgRmlsbUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9maWxtQ2FyZCc7XG5pbXBvcnQge1xuXHRhc3luY0ZvckVhY2hcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gJy4uL2NvbnRleHQnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBbZ2xvYmFsU3RhdGUsIHNldEdsb2JhbFN0YXRlXSA9IHVzZUdsb2JhbFN0YXRlKCk7XG5cdGNvbnN0IFtwb3B1bGFyRmlsbXMsIHNldFBvcHVsYXJGaWxtc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFt0b29sQm94U2VhcmNoVmFsdWUsIHNldFRvb2xCb3hTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGxldCBtYWluUGFyYW1ldGVycyA9IHtcblx0XHRcdGFwaWtleTogQVBJX0tFWSxcblx0XHRcdHR5cGU6ICdtb3ZpZScsXG5cdFx0XHRyOiAnanNvbicsXG5cdFx0XHRzOiB0b29sQm94U2VhcmNoVmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYodHlwZSkgbWFpblBhcmFtZXRlcnMudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmKHllYXIpIG1haW5QYXJhbWV0ZXJzLnkgPSB5ZWFyO1xuXHRcdGNvbnN0IG1haW5RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobWFpblBhcmFtZXRlcnMpO1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc2VhcmNoP1wiICsgbWFpblF1ZXJ5O1xuICAgIH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IG1haW5QYXJhbWV0ZXJzID0ge1xuXHRcdFx0YXBpa2V5OiBBUElfS0VZLFxuXHRcdFx0dHlwZTogJ21vdmllJyxcblx0XHRcdHI6ICdqc29uJyxcblx0XHRcdHM6ICdhYmUnIC8vIEFwaW5pbiBpbWRiIHBvaW50IMO8emVyaW5kZSBhcmFtYSBiw7Zsw7xtw7wgb2xtYWTEscSfxLEgacOnaW4ga2VuZGltIHNhbGxhZMSxbSBidSBrxLFzbcSxLlxuXHRcdH07XG5cdFx0Y29uc3QgbWFpblF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhtYWluUGFyYW1ldGVycyk7XG5cdFx0YXBpKHtcblx0XHRcdHVybDogSE9TVCArICc/JyArIG1haW5RdWVyeVxuXHRcdH0pXG5cdFx0LnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuXHRcdFx0aWYgKHJlcy5SZXNwb25zZSA9PT0gJ1RydWUnKSB7XG5cdFx0XHRcdGxldCBmdWxseURhdGEgPSBbXTtcblx0XHRcdFx0YXdhaXQgYXN5bmNGb3JFYWNoKHJlcy5TZWFyY2gsIGFzeW5jIChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbVBhcmFtZXRlcnMgPSB7XG5cdFx0XHRcdFx0XHRhcGlrZXk6IEFQSV9LRVksXG5cdFx0XHRcdFx0XHRwbG90OiAnc2hvcnQnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ21vdmllJyxcblx0XHRcdFx0XHRcdHI6ICdqc29uJyxcblx0XHRcdFx0XHRcdGk6IGl0ZW0uaW1kYklEXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGl0ZW1RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaXRlbVBhcmFtZXRlcnMpO1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpKHtcblx0XHRcdFx0XHRcdHVybDogSE9TVCArICc/JyArIGl0ZW1RdWVyeVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGxldCBpdGVtRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblx0XHRcdFx0XHRmdWxseURhdGEucHVzaChpdGVtRGF0YSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzZXRQb3B1bGFyRmlsbXMoZnVsbHlEYXRhKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldEVycih7XG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzWydFcnJvciddXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGFsZXJ0KGVyci5tZXNzYWdlKTtcblx0XHR9KTtcblx0fSwgW10pO1xuXHRyZXR1cm4gPExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVfY29udGFpbmVyfT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8V2VsY29tZVxuXHRcdFx0XHRcdHRpdGxlPVwiV2VsY29tZSB0byBNb3ZpZVVQLlwiXG5cdFx0XHRcdFx0Y29udGVudD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgXCJcblx0XHRcdFx0XHR0b29sYm94PXs8VG9vbGJveFxuXHRcdFx0XHRcdFx0YnV0dG9uPXt7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIlNlYXJjaFwiLFxuXHRcdFx0XHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IFwicHJpbWFyeVwiLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHNlYXJjaCgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRzZWFyY2g9e3tcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRvb2xCb3hTZWFyY2hWYWx1ZSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IChlKSA9PiBzZXRUb29sQm94U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0eWVhcj17e1xuXHRcdFx0XHRcdFx0XHRrZXk6IFwidG9vbGJveFllYXJcIixcblx0XHRcdFx0XHRcdFx0aWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiWWVhclwiLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogZSA9PiBzZXRZZWFyKGUudGFyZ2V0LnZhbHVlKSxcblx0XHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIkFueVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiMjAxOVwiXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogXCIyMDIwXCJcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR0eXBlPXt7XG5cdFx0XHRcdFx0XHRcdGtleTogXCJ0b29sYm94VHlwZVwiLFxuXHRcdFx0XHRcdFx0XHRpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJUeXBlXCIsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBlID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiQW55XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJTZXJpZXNcIlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiTW92aWVcIlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiRXBpc29kZVwiXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVfc2FmZVNwYWNlfT48L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvcHVsYXJGaWxtcyAmJiBwb3B1bGFyRmlsbXMubGVuZ3RoID9cblx0XHRcdFx0XHRcdDxDYXJkU2xpZGVyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPVwiUG9wdWxhciBNb3ZpZXNcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cG9wdWxhckZpbG1zLm1hcCgoZmlsbSwgZmlsbUluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPEZpbG1DYXJkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZGJJRD17ZmlsbS5pbWRiSUR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4PXtmaWxtSW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtmaWxtLlRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZT17ZmlsbS5Qb3N0ZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ9e2ZpbG0uUGxvdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1kYlBvaW50PXtmaWxtLmltZGJSYXRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJmaWxtLVwiK2ZpbG1JbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0eWVhcj17ZmlsbS5ZZWFyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0NhcmRTbGlkZXI+XG5cdFx0XHRcdFx0OiBlcnIgPyBlcnIubWVzc2FnZSA6IDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1RvcDogNDAsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IDQwLFxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdQb3BwaW5zJ1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRZw7xrbGVuaXlvci4uLlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZV9mb290ZXJTcGFjZX0+PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9