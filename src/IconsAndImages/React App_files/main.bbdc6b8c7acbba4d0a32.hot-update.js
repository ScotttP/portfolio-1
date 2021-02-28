webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Account */ "./src/Components/Account.js");
/* harmony import */ var _Components_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Dashboard */ "./src/Components/Dashboard.js");
/* harmony import */ var _Components_History__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/History */ "./src/Components/History.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Navbar */ "./src/Components/Navbar.js");
/* harmony import */ var _Components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Login */ "./src/Components/Login.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './Components/SignUp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Scottpribe/the-odin-project/expense-tracker/src/App.js";











const App = () => {
  const currentUser = null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Components_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        render: () => currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Components_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Dashboard",
        render: () => !currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 22
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Components_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 49
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/History",
        render: () => !currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 22
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Components_History__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 49
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Account",
        render: () => !currentUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 22
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Components_Account__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 49
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Login",
        component: _Components_Login__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Login",
        component: !(function webpackMissingModule() { var e = new Error("Cannot find module './Components/SignUp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, undefined);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.bbdc6b8c7acbba4d0a32.hot-update.js.map