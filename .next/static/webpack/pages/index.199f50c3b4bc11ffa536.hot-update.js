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
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  })), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
        lineNumber: 88,
        columnNumber: 15
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["safeSpace"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }), popularFilms && popularFilms.length ? __jsx(_components_cardSlider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Popular Movies",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
        lineNumber: 150,
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
      lineNumber: 163,
      columnNumber: 28
    }
  }, "Y\xFCkleniyor..."), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7__["footerSpace"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUdsb2JhbFN0YXRlIiwiZ2xvYmFsU3RhdGUiLCJzZXRHbG9iYWxTdGF0ZSIsInVzZVN0YXRlIiwicG9wdWxhckZpbG1zIiwic2V0UG9wdWxhckZpbG1zIiwiZXJyIiwic2V0RXJyIiwidG9vbEJveFNlYXJjaFZhbHVlIiwic2V0VG9vbEJveFNlYXJjaFZhbHVlIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInNlYXJjaCIsIm1haW5QYXJhbWV0ZXJzIiwicyIsInkiLCJtYWluUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VFZmZlY3QiLCJhcGlrZXkiLCJBUElfS0VZIiwiciIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJTZWFyY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0Iiwic3R5bGVfY29udGFpbmVyIiwibGFiZWwiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImtleSIsImlkIiwidGl0bGUiLCJkYXRhIiwic3R5bGVfc2FmZVNwYWNlIiwibGVuZ3RoIiwibWFwIiwiZmlsbSIsImZpbG1JbmRleCIsIlRpdGxlIiwiUG9zdGVyIiwiUGxvdCIsImltZGJSYXRpbmciLCJZZWFyIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmb250RmFtaWx5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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkEvRXhCLEVBNkZDO0FBQUssYUFBUyxFQUFFQyw2REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdGRCxDQU5ELENBRE0sQ0FBUDtBQXdHQSxDQWpLRDs7R0FBTWxGLEk7VUFDaUNDLHdEOzs7S0FEakNELEk7QUFrS1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5OWY1MGMzYjRiYzExZmZhNTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vc2VydmVyJztcbmltcG9ydCB7IEFQSV9LRVksIEhPU1QgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcblx0Y29udGFpbmVyIGFzIHN0eWxlX2NvbnRhaW5lcixcblx0c2FmZVNwYWNlIGFzIHN0eWxlX3NhZmVTcGFjZSxcblx0Zm9vdGVyU3BhY2UgYXMgc3R5bGVfZm9vdGVyU3BhY2Vcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCBXZWxjb21lIGZyb20gJy4uL2NvbXBvbmVudHMvd2VsY29tZSc7XG5pbXBvcnQgVG9vbGJveCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2xib3gnO1xuaW1wb3J0IENhcmRTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkU2xpZGVyJztcbmltcG9ydCBGaWxtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbG1DYXJkJztcbmltcG9ydCB7XG5cdGFzeW5jRm9yRWFjaFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vY29udGV4dCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdGNvbnN0IFtnbG9iYWxTdGF0ZSwgc2V0R2xvYmFsU3RhdGVdID0gdXNlR2xvYmFsU3RhdGUoKTtcblx0Y29uc3QgW3BvcHVsYXJGaWxtcywgc2V0UG9wdWxhckZpbG1zXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3Rvb2xCb3hTZWFyY2hWYWx1ZSwgc2V0VG9vbEJveFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0ge1xuXHRcdFx0czogdG9vbEJveFNlYXJjaFZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGlmKHR5cGUpIG1haW5QYXJhbWV0ZXJzLnR5cGUgPSB0eXBlO1xuICAgICAgICBpZih5ZWFyKSBtYWluUGFyYW1ldGVycy55ID0geWVhcjtcblx0XHRjb25zdCBtYWluUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG1haW5QYXJhbWV0ZXJzKTtcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3NlYXJjaD9cIiArIG1haW5RdWVyeTtcbiAgICB9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBtYWluUGFyYW1ldGVycyA9IHtcblx0XHRcdGFwaWtleTogQVBJX0tFWSxcblx0XHRcdHR5cGU6ICdtb3ZpZScsXG5cdFx0XHRyOiAnanNvbicsXG5cdFx0XHRzOiAnYWJlJyAvLyBBcGluaW4gaW1kYiBwb2ludCDDvHplcmluZGUgYXJhbWEgYsO2bMO8bcO8IG9sbWFkxLHEn8SxIGnDp2luIGtlbmRpbSBzYWxsYWTEsW0gYnUga8Sxc23EsS5cblx0XHR9O1xuXHRcdGNvbnN0IG1haW5RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobWFpblBhcmFtZXRlcnMpO1xuXHRcdGFwaSh7XG5cdFx0XHR1cmw6IEhPU1QgKyAnPycgKyBtYWluUXVlcnlcblx0XHR9KVxuXHRcdC50aGVuKGFzeW5jIChyZXMpID0+IHtcblx0XHRcdGlmIChyZXMuUmVzcG9uc2UgPT09ICdUcnVlJykge1xuXHRcdFx0XHRsZXQgZnVsbHlEYXRhID0gW107XG5cdFx0XHRcdGF3YWl0IGFzeW5jRm9yRWFjaChyZXMuU2VhcmNoLCBhc3luYyAoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW1QYXJhbWV0ZXJzID0ge1xuXHRcdFx0XHRcdFx0YXBpa2V5OiBBUElfS0VZLFxuXHRcdFx0XHRcdFx0cGxvdDogJ3Nob3J0Jyxcblx0XHRcdFx0XHRcdHR5cGU6ICdtb3ZpZScsXG5cdFx0XHRcdFx0XHRyOiAnanNvbicsXG5cdFx0XHRcdFx0XHRpOiBpdGVtLmltZGJJRFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBpdGVtUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGl0ZW1QYXJhbWV0ZXJzKTtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaSh7XG5cdFx0XHRcdFx0XHR1cmw6IEhPU1QgKyAnPycgKyBpdGVtUXVlcnlcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRsZXQgaXRlbURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG5cdFx0XHRcdFx0ZnVsbHlEYXRhLnB1c2goaXRlbURhdGEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2V0UG9wdWxhckZpbG1zKGZ1bGx5RGF0YSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRFcnIoe1xuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc1snRXJyb3InXVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRhbGVydChlcnIubWVzc2FnZSk7XG5cdFx0fSk7XG5cdH0sIFtdKTtcblx0cmV0dXJuIDxMYXlvdXQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlX2NvbnRhaW5lcn0+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PFdlbGNvbWVcblx0XHRcdFx0XHR0aXRsZT1cIldlbGNvbWUgdG8gTW92aWVVUC5cIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIFwiXG5cdFx0XHRcdFx0dG9vbGJveD17PFRvb2xib3hcblx0XHRcdFx0XHRcdGJ1dHRvbj17e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJTZWFyY2hcIixcblx0XHRcdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50OiBcImNvbnRhaW5lZFwiLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcInByaW1hcnlcIixcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiBzZWFyY2goKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0c2VhcmNoPXt7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0b29sQm94U2VhcmNoVmFsdWUsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAoZSkgPT4gc2V0VG9vbEJveFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHllYXI9e3tcblx0XHRcdFx0XHRcdFx0a2V5OiBcInRvb2xib3hZZWFyXCIsXG5cdFx0XHRcdFx0XHRcdGlkOiBcImRyb3Bkb3duLWl0ZW0tYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIlllYXJcIixcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IGUgPT4gc2V0WWVhcihlLnRhcmdldC52YWx1ZSksXG5cdFx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJBbnlcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIjIwMTlcIlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiMjAyMFwiXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dHlwZT17e1xuXHRcdFx0XHRcdFx0XHRrZXk6IFwidG9vbGJveFR5cGVcIixcblx0XHRcdFx0XHRcdFx0aWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiVHlwZVwiLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogZSA9PiBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKSxcblx0XHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIkFueVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiU2VyaWVzXCJcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIk1vdmllXCJcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIkVwaXNvZGVcIlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlX3NhZmVTcGFjZX0+PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwb3B1bGFyRmlsbXMgJiYgcG9wdWxhckZpbG1zLmxlbmd0aCA/XG5cdFx0XHRcdFx0XHQ8Q2FyZFNsaWRlclxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIlBvcHVsYXIgTW92aWVzXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHBvcHVsYXJGaWxtcy5tYXAoKGZpbG0sIGZpbG1JbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxGaWxtQ2FyZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWRiSUQ9e2ZpbG0uaW1kYklEfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleD17ZmlsbUluZGV4fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17ZmlsbS5UaXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2U9e2ZpbG0uUG9zdGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50PXtmaWxtLlBsb3R9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZGJQb2ludD17ZmlsbS5pbWRiUmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e1wiZmlsbS1cIitmaWxtSW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHllYXI9e2ZpbG0uWWVhcn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9DYXJkU2xpZGVyPlxuXHRcdFx0XHRcdDogZXJyID8gZXJyLm1lc3NhZ2UgOiA8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdUb3A6IDQwLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nQm90dG9tOiA0MCxcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRmb250RmFtaWx5OiAnUG9wcGlucydcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0WcO8a2xlbml5b3IuLi5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVfZm9vdGVyU3BhY2V9PjwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvZGl2PlxuXHQ8L0xheW91dD5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==