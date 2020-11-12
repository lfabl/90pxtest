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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUdsb2JhbFN0YXRlIiwiZ2xvYmFsU3RhdGUiLCJzZXRHbG9iYWxTdGF0ZSIsInVzZVN0YXRlIiwicG9wdWxhckZpbG1zIiwic2V0UG9wdWxhckZpbG1zIiwiZXJyIiwic2V0RXJyIiwidG9vbEJveFNlYXJjaFZhbHVlIiwic2V0VG9vbEJveFNlYXJjaFZhbHVlIiwieWVhciIsInNldFllYXIiLCJ0eXBlIiwic2V0VHlwZSIsInNlYXJjaCIsIm1haW5QYXJhbWV0ZXJzIiwiYXBpa2V5IiwiQVBJX0tFWSIsInIiLCJzIiwieSIsIm1haW5RdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInVzZUVmZmVjdCIsImFwaSIsInVybCIsIkhPU1QiLCJ0aGVuIiwicmVzIiwiUmVzcG9uc2UiLCJmdWxseURhdGEiLCJhc3luY0ZvckVhY2giLCJTZWFyY2giLCJpdGVtIiwiaXRlbVBhcmFtZXRlcnMiLCJwbG90IiwiaSIsImltZGJJRCIsIml0ZW1RdWVyeSIsInJlc3BvbnNlIiwiaXRlbURhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwibWVzc2FnZSIsImFsZXJ0Iiwic3R5bGVfY29udGFpbmVyIiwibGFiZWwiLCJwcm9wcyIsInZhcmlhbnQiLCJjb2xvciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwia2V5IiwiaWQiLCJ0aXRsZSIsImRhdGEiLCJzdHlsZV9zYWZlU3BhY2UiLCJsZW5ndGgiLCJtYXAiLCJmaWxtIiwiZmlsbUluZGV4IiwiVGl0bGUiLCJQb3N0ZXIiLCJQbG90IiwiaW1kYlJhdGluZyIsIlllYXIiLCJ3aWR0aCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRGYW1pbHkiLCJzdHlsZV9m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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkzMWJlZjg1MWQ2YmU2ZThkOWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vc2VydmVyJztcbmltcG9ydCB7IEFQSV9LRVksIEhPU1QgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcblx0Y29udGFpbmVyIGFzIHN0eWxlX2NvbnRhaW5lcixcblx0c2FmZVNwYWNlIGFzIHN0eWxlX3NhZmVTcGFjZSxcblx0Zm9vdGVyU3BhY2UgYXMgc3R5bGVfZm9vdGVyU3BhY2Vcbn0gZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCBXZWxjb21lIGZyb20gJy4uL2NvbXBvbmVudHMvd2VsY29tZSc7XG5pbXBvcnQgVG9vbGJveCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2xib3gnO1xuaW1wb3J0IENhcmRTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkU2xpZGVyJztcbmltcG9ydCBGaWxtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbG1DYXJkJztcbmltcG9ydCB7XG5cdGFzeW5jRm9yRWFjaFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vY29udGV4dCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdGNvbnN0IFtnbG9iYWxTdGF0ZSwgc2V0R2xvYmFsU3RhdGVdID0gdXNlR2xvYmFsU3RhdGUoKTtcblx0Y29uc3QgW3BvcHVsYXJGaWxtcywgc2V0UG9wdWxhckZpbG1zXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3Rvb2xCb3hTZWFyY2hWYWx1ZSwgc2V0VG9vbEJveFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1haW5QYXJhbWV0ZXJzID0ge1xuXHRcdFx0YXBpa2V5OiBBUElfS0VZLFxuXHRcdFx0dHlwZTogJ21vdmllJyxcblx0XHRcdHI6ICdqc29uJyxcblx0XHRcdHM6IHRvb2xCb3hTZWFyY2hWYWx1ZVxuICAgICAgICB9O1xuICAgICAgICBpZih0eXBlKSBtYWluUGFyYW1ldGVycy50eXBlID0gdHlwZTtcbiAgICAgICAgaWYoeWVhcikgbWFpblBhcmFtZXRlcnMueSA9IHllYXI7XG5cdFx0Y29uc3QgbWFpblF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhtYWluUGFyYW1ldGVycyk7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zZWFyY2g/XCIgKyBtYWluUXVlcnk7XG4gICAgfVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbWFpblBhcmFtZXRlcnMgPSB7XG5cdFx0XHRhcGlrZXk6IEFQSV9LRVksXG5cdFx0XHR0eXBlOiAnbW92aWUnLFxuXHRcdFx0cjogJ2pzb24nLFxuXHRcdFx0czogJ2FiZScgLy8gQXBpbmluIGltZGIgcG9pbnQgw7x6ZXJpbmRlIGFyYW1hIGLDtmzDvG3DvCBvbG1hZMSxxJ/EsSBpw6dpbiBrZW5kaW0gc2FsbGFkxLFtIGJ1IGvEsXNtxLEuXG5cdFx0fTtcblx0XHRjb25zdCBtYWluUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG1haW5QYXJhbWV0ZXJzKTtcblx0XHRhcGkoe1xuXHRcdFx0dXJsOiBIT1NUICsgJz8nICsgbWFpblF1ZXJ5XG5cdFx0fSlcblx0XHQudGhlbihhc3luYyAocmVzKSA9PiB7XG5cdFx0XHRpZiAocmVzLlJlc3BvbnNlID09PSAnVHJ1ZScpIHtcblx0XHRcdFx0bGV0IGZ1bGx5RGF0YSA9IFtdO1xuXHRcdFx0XHRhd2FpdCBhc3luY0ZvckVhY2gocmVzLlNlYXJjaCwgYXN5bmMgKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtUGFyYW1ldGVycyA9IHtcblx0XHRcdFx0XHRcdGFwaWtleTogQVBJX0tFWSxcblx0XHRcdFx0XHRcdHBsb3Q6ICdzaG9ydCcsXG5cdFx0XHRcdFx0XHR0eXBlOiAnbW92aWUnLFxuXHRcdFx0XHRcdFx0cjogJ2pzb24nLFxuXHRcdFx0XHRcdFx0aTogaXRlbS5pbWRiSURcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgaXRlbVF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpdGVtUGFyYW1ldGVycyk7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkoe1xuXHRcdFx0XHRcdFx0dXJsOiBIT1NUICsgJz8nICsgaXRlbVF1ZXJ5XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bGV0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuXHRcdFx0XHRcdGZ1bGx5RGF0YS5wdXNoKGl0ZW1EYXRhKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNldFBvcHVsYXJGaWxtcyhmdWxseURhdGEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0RXJyKHtcblx0XHRcdFx0XHRtZXNzYWdlOiByZXNbJ0Vycm9yJ11cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0YWxlcnQoZXJyLm1lc3NhZ2UpO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cdHJldHVybiA8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZV9jb250YWluZXJ9PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxXZWxjb21lXG5cdFx0XHRcdFx0dGl0bGU9XCJXZWxjb21lIHRvIE1vdmllVVAuXCJcblx0XHRcdFx0XHRjb250ZW50PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBcIlxuXHRcdFx0XHRcdHRvb2xib3g9ezxUb29sYm94XG5cdFx0XHRcdFx0XHRidXR0b249e3tcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiU2VhcmNoXCIsXG5cdFx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudDogXCJjb250YWluZWRcIixcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHNlYXJjaD17e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdG9vbEJveFNlYXJjaFZhbHVlLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKGUpID0+IHNldFRvb2xCb3hTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSlcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR5ZWFyPXt7XG5cdFx0XHRcdFx0XHRcdGtleTogXCJ0b29sYm94WWVhclwiLFxuXHRcdFx0XHRcdFx0XHRpZDogXCJkcm9wZG93bi1pdGVtLWJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJZZWFyXCIsXG5cdFx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJBbnlcIixcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIjIwMTlcIlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiMjAyMFwiXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dHlwZT17e1xuXHRcdFx0XHRcdFx0XHRrZXk6IFwidG9vbGJveFR5cGVcIixcblx0XHRcdFx0XHRcdFx0aWQ6IFwiZHJvcGRvd24taXRlbS1idXR0b25cIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiVHlwZVwiLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiQW55XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJTZXJpZXNcIlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiTW92aWVcIlxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiRXBpc29kZVwiXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVfc2FmZVNwYWNlfT48L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvcHVsYXJGaWxtcyAmJiBwb3B1bGFyRmlsbXMubGVuZ3RoID9cblx0XHRcdFx0XHRcdDxDYXJkU2xpZGVyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPVwiUG9wdWxhciBNb3ZpZXNcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cG9wdWxhckZpbG1zLm1hcCgoZmlsbSwgZmlsbUluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPEZpbG1DYXJkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGltZGJJRD17ZmlsbS5pbWRiSUR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4PXtmaWxtSW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtmaWxtLlRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZT17ZmlsbS5Qb3N0ZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ9e2ZpbG0uUGxvdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1kYlBvaW50PXtmaWxtLmltZGJSYXRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJmaWxtLVwiK2ZpbG1JbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0eWVhcj17ZmlsbS5ZZWFyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0NhcmRTbGlkZXI+XG5cdFx0XHRcdFx0OiBlcnIgPyBlcnIubWVzc2FnZSA6IDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1RvcDogNDAsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdCb3R0b206IDQwLFxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdQb3BwaW5zJ1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRZw7xrbGVuaXlvci4uLlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZV9mb290ZXJTcGFjZX0+PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9