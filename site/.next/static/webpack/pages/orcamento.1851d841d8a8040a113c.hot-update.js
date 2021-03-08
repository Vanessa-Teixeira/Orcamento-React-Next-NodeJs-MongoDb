webpackHotUpdate_N_E("pages/orcamento",{

/***/ "./pages/orcamento.js":
/*!****************************!*\
  !*** ./pages/orcamento.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Rodape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Rodape */ "./components/Rodape.js");





var _jsxFileName = "C:\\Users\\Vanessa\\Desktop\\curso node-react-react native\\site\\pages\\orcamento.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // useState serve  para iclusão de informaçoes na base de dados

 // importar Tag Herd






function orcamento() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    fone: '',
    zap: '',
    projeto: ''
  }),
      solicitacaos = _useState[0],
      setSolicitacaos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      respose = _useState2[0],
      setRespose = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setSolicitacaos(_objectSpread(_objectSpread({}, solicitacaos), {}, Object(C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  };

  var sendSocitacaos = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return C_Users_Vanessa_Desktop_curso_node_react_react_native_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(solicitacaos);
              setRespose({
                formSave: true
              });
              _context.prev = 3;
              _context.next = 6;
              return fetch("http://localhost:5000/orcamento", {
                method: 'POST',
                body: JSON.stringify(solicitacaos),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setRespose({
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setRespose({
                  formSave: false,
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              setRespose({
                formSave: false,
                type: 'error',
                message: "Erro: Orçamento não enviado com sucesso"
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function sendSocitacaos(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Or\xE7amento"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Site de vendas de produto de supermecados para revendedores"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top {\n                background-color:#0a1970;\n                color:#fff;\n                padding-top:40px;\n                padding-bottom:40px\n                margin-bottom: 0rem !important\n             }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4",
          children: " Or\xE7amento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      fluid: true,
      className: "form-orcamento",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".form-orcamento{\n               padding-top:80px;\n               padding-bottom:80px;\n               background-color:#fff;\n               margin-bottom:0rem !important;\n         }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        children: [respose.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "danger",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 41
        }, this) : "", respose.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "success",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 43
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
          onSubmit: sendSocitacaos,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "name",
              children: "Nome:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Digite seu nome",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "email",
              children: "Email:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "email",
              email: "email",
              id: "email",
              placeholder: "Digite seu email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "fone",
              children: "Telefone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "fone",
              id: "fone",
              placeholder: "(xx)xxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "zap",
              children: "Telefone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "zap",
              id: "zap",
              placeholder: "(xx) x xxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "projeto",
              children: "Projeto:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "textarea",
              name: "projeto",
              id: "projeto",
              placeholder: "Fale sobre o seu projeto...",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 19
          }, this), respose, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            type: "submit",
            outline: true,
            color: "primary",
            children: "Solicitar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 7
  }, this);
}

_s(orcamento, "UPj8043ElEz0V6A5nGegOFtTeHk=");

/* harmony default export */ __webpack_exports__["default"] = (orcamento);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JjYW1lbnRvLmpzIl0sIm5hbWVzIjpbIm9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwiZm9uZSIsInphcCIsInByb2pldG8iLCJzb2xpY2l0YWNhb3MiLCJzZXRTb2xpY2l0YWNhb3MiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9zZSIsInNldFJlc3Bvc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZFNvY2l0YWNhb3MiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBc0M7O0NBQ1I7O0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFFc0JDLHNEQUFRLENBQUM7QUFDOUNDLFFBQUksRUFBQyxFQUR5QztBQUU5Q0MsU0FBSyxFQUFDLEVBRndDO0FBRzlDQyxRQUFJLEVBQUMsRUFIeUM7QUFJOUNDLE9BQUcsRUFBQyxFQUowQztBQUs5Q0MsV0FBTyxFQUFDO0FBTHNDLEdBQUQsQ0FGOUI7QUFBQSxNQUVYQyxZQUZXO0FBQUEsTUFFR0MsZUFGSDs7QUFBQSxtQkFVV1Asc0RBQVEsQ0FBQztBQUNuQ1EsWUFBUSxFQUFDLEtBRDBCO0FBRW5DQyxRQUFJLEVBQUMsRUFGOEI7QUFHbkNDLFdBQU8sRUFBQztBQUgyQixHQUFELENBVm5CO0FBQUEsTUFVWEMsT0FWVztBQUFBLE1BVUhDLFVBVkc7O0FBZ0JsQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFHUCxlQUFlLGlDQUFLRCxZQUFMLDRLQUFtQlEsQ0FBQyxDQUFDQyxNQUFGLENBQVNkLElBQTVCLEVBQWtDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBM0MsR0FBbEI7QUFBQSxHQUF2Qjs7QUFFQSxNQUFNQyxjQUFjO0FBQUEsOFVBQUcsaUJBQU1ILENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQSxlQUFDLENBQUNJLGNBQUY7QUFFQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZZCxZQUFaO0FBRUFNLHdCQUFVLENBQUM7QUFBQ0osd0JBQVEsRUFBQztBQUFWLGVBQUQsQ0FBVjtBQUxvQjtBQUFBO0FBQUEscUJBV0phLEtBQUssQ0FBQyxpQ0FBRCxFQUFtQztBQUNyREMsc0JBQU0sRUFBQyxNQUQ4QztBQUVyREMsb0JBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVuQixZQUFmLENBRmdEO0FBR3JEb0IsdUJBQU8sRUFBQztBQUFDLGtDQUFlO0FBQWhCO0FBSDZDLGVBQW5DLENBWEQ7O0FBQUE7QUFXaEJDLGlCQVhnQjtBQUFBO0FBQUEscUJBaUJNQSxHQUFHLENBQUNDLElBQUosRUFqQk47O0FBQUE7QUFpQmRDLHlCQWpCYzs7QUFtQnBCLGtCQUFHQSxXQUFXLENBQUNDLEtBQWYsRUFBcUI7QUFDbEJsQiwwQkFBVSxDQUFDO0FBQ1JILHNCQUFJLEVBQUMsT0FERztBQUVSQyx5QkFBTyxFQUFDbUIsV0FBVyxDQUFDbkI7QUFGWixpQkFBRCxDQUFWO0FBSUYsZUFMRCxNQUtLO0FBQ0ZFLDBCQUFVLENBQUM7QUFDUkosMEJBQVEsRUFBQyxLQUREO0FBRVJDLHNCQUFJLEVBQUMsU0FGRztBQUdSQyx5QkFBTyxFQUFDbUIsV0FBVyxDQUFDbkI7QUFIWixpQkFBRCxDQUFWO0FBS0Y7O0FBOUJtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlDckJFLHdCQUFVLENBQUM7QUFDUkosd0JBQVEsRUFBQyxLQUREO0FBRVJDLG9CQUFJLEVBQUMsT0FGRztBQUdSQyx1QkFBTyxFQUFDO0FBSEEsZUFBRCxDQUFWOztBQWpDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZE8sY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUE0Q0Esc0JBQ0c7QUFBQSw0QkFDRyxxRUFBQyxnREFBRDtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFTRyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEgsZUFVRyxxRUFBQyxvREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBaUIsZUFBUyxFQUFDLFdBQTNCO0FBQUEsOEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQVlHLHFFQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQyxhQUFyQjtBQUFBLCtCQUNHO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZILGVBNEJHLHFFQUFDLG9EQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFpQixlQUFTLEVBQUMsZ0JBQTNCO0FBQUEsOEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQVVHLHFFQUFDLG9EQUFEO0FBQUEsbUJBQ0NOLE9BQU8sQ0FBQ0YsSUFBUixLQUFpQixPQUFqQixnQkFBMkIscUVBQUMsZ0RBQUQ7QUFBTyxlQUFLLEVBQUUsUUFBZDtBQUFBLG9CQUF3QkUsT0FBTyxDQUFDRDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUEzQixHQUE0RSxFQUQ3RSxFQUVDQyxPQUFPLENBQUNGLElBQVIsS0FBaUIsU0FBakIsZ0JBQTZCLHFFQUFDLGdEQUFEO0FBQU8sZUFBSyxFQUFFLFNBQWQ7QUFBQSxvQkFBeUJFLE9BQU8sQ0FBQ0Q7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBN0IsR0FBK0UsRUFGaEYsZUFJRyxxRUFBQywrQ0FBRDtBQUFNLGtCQUFRLEVBQUVPLGNBQWhCO0FBQUEsa0NBQ0cscUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRyxxRUFBQyxnREFBRDtBQUFPLHFCQUFJLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRyxxRUFBQyxnREFBRDtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDLE1BQXhCO0FBQStCLGdCQUFFLEVBQUMsTUFBbEM7QUFBeUMseUJBQVcsRUFBQyxpQkFBckQ7QUFDQSxzQkFBUSxFQUFFSjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURILGVBT0cscUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRyxxRUFBQyxnREFBRDtBQUFPLHFCQUFJLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRyxxRUFBQyxnREFBRDtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFvQixtQkFBSyxFQUFDLE9BQTFCO0FBQWtDLGdCQUFFLEVBQUMsT0FBckM7QUFBNkMseUJBQVcsRUFBQyxrQkFBekQ7QUFDQSxzQkFBUSxFQUFFQTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBILGVBYUcscUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRyxxRUFBQyxnREFBRDtBQUFPLHFCQUFJLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRyxxRUFBQyxnREFBRDtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDLE1BQXhCO0FBQStCLGdCQUFFLEVBQUMsTUFBbEM7QUFBeUMseUJBQVcsRUFBQyxlQUFyRDtBQUNBLHNCQUFRLEVBQUVBO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkgsZUFtQkcscUVBQUMsb0RBQUQ7QUFBQSxvQ0FDRyxxRUFBQyxnREFBRDtBQUFPLHFCQUFJLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRyxxRUFBQyxnREFBRDtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDLEtBQXhCO0FBQThCLGdCQUFFLEVBQUMsS0FBakM7QUFBdUMseUJBQVcsRUFBQyxrQkFBbkQ7QUFDQSxzQkFBUSxFQUFFQTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CSCxlQXlCRyxxRUFBQyxvREFBRDtBQUFBLG9DQUNHLHFFQUFDLGdEQUFEO0FBQU8scUJBQUksU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxlQUVHLHFFQUFDLGdEQUFEO0FBQU8sa0JBQUksRUFBQyxVQUFaO0FBQXVCLGtCQUFJLEVBQUMsU0FBNUI7QUFBc0MsZ0JBQUUsRUFBQyxTQUF6QztBQUFtRCx5QkFBVyxFQUFDLDZCQUEvRDtBQUNBLHNCQUFRLEVBQUVBO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekJILEVBOEJJRixPQTlCSixlQStCRyxxRUFBQyxpREFBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBTyxNQUE3QjtBQUE4QixpQkFBSyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9CSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJILGVBc0ZHLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Rkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUE2RkY7O0dBM0pRWixTOztBQTZKTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JjYW1lbnRvLjE4NTFkODQxZDhhODA0MGExMTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7IC8vIHVzZVN0YXRlIHNlcnZlICBwYXJhIGljbHVzw6NvIGRlIGluZm9ybWHDp29lcyBuYSBiYXNlIGRlIGRhZG9zXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7IC8vIGltcG9ydGFyIFRhZyBIZXJkXHJcbmltcG9ydCB7IENvbnRhaW5lciwgSnVtYm90cm9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsQWxlcnR9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgUm90YXBlIGZyb20gJy4uL2NvbXBvbmVudHMvUm9kYXBlJztcclxuXHJcblxyXG5mdW5jdGlvbiBvcmNhbWVudG8oKSB7XHJcblxyXG4gICBjb25zdCBbc29saWNpdGFjYW9zICxzZXRTb2xpY2l0YWNhb3NdID0gdXNlU3RhdGUoe1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBlbWFpbDonJyxcclxuICAgICAgZm9uZTonJyxcclxuICAgICAgemFwOicnLFxyXG4gICAgICBwcm9qZXRvOicnXHJcbiAgIH0pO1xyXG5cclxuICAgY29uc3QgW3Jlc3Bvc2Usc2V0UmVzcG9zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGZvcm1TYXZlOmZhbHNlLFxyXG4gICAgICB0eXBlOicnLFxyXG4gICAgICBtZXNzYWdlOicnXHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PnNldFNvbGljaXRhY2Fvcyh7Li4uc29saWNpdGFjYW9zLFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZX0pO1xyXG4gIFxyXG4gICBjb25zdCBzZW5kU29jaXRhY2FvcyA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhzb2xpY2l0YWNhb3MpXHJcblxyXG4gICAgICBzZXRSZXNwb3NlKHtmb3JtU2F2ZTp0cnVlfSlcclxuXHJcblxyXG5cclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9vcmNhbWVudG9cIix7XHJcbiAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoc29saWNpdGFjYW9zKSxcclxuICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGlmKHJlc3BvbnNlRW52LmVycm9yKXtcclxuICAgICAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgICAgIHR5cGU6J2Vycm9yJyxcclxuICAgICAgICAgICAgbWVzc2FnZTpyZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgICAgIGZvcm1TYXZlOmZhbHNlLFxyXG4gICAgICAgICAgICB0eXBlOidzdWNjZXNzJyxcclxuICAgICAgICAgICAgbWVzc2FnZTpyZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICB9Y2F0Y2goZXJyKXtcclxuICAgICBzZXRSZXNwb3NlKHtcclxuICAgICAgICBmb3JtU2F2ZTpmYWxzZSxcclxuICAgICAgICB0eXBlOidlcnJvcicsXHJcbiAgICAgICAgbWVzc2FnZTpcIkVycm86IE9yw6dhbWVudG8gbsOjbyBlbnZpYWRvIGNvbSBzdWNlc3NvXCJcclxuICAgICB9KTtcclxuICAgIFxyXG4gICB9XHJcblxyXG5cclxuICAgfSBcclxuICAgXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgIE9yw6dhbWVudG9cclxuICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNpdGUgZGUgdmVuZGFzIGRlIHByb2R1dG8gZGUgc3VwZXJtZWNhZG9zIHBhcmEgcmV2ZW5kZWRvcmVzXCIvPlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJkZXNjci10b3BcIj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGAuZGVzY3ItdG9wIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzBhMTk3MDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NDBweFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50XHJcbiAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPiBPcsOnYW1lbnRvPC9oMT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICA8L0p1bWJvdHJvbj5cclxuXHJcbiAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZm9ybS1vcmNhbWVudG9cIj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICB7YC5mb3JtLW9yY2FtZW50b3tcclxuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6ODBweDtcclxuICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ODBweDtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgfWB9XHJcblxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICB7cmVzcG9zZS50eXBlID09PSAnZXJyb3InID8gPEFsZXJ0IGNvbG9yID1cImRhbmdlclwiPntyZXNwb3NlLm1lc3NhZ2V9PC9BbGVydD46XCJcIn1cclxuICAgICAgICAgICAge3Jlc3Bvc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gPEFsZXJ0IGNvbG9yID1cInN1Y2Nlc3NcIj57cmVzcG9zZS5tZXNzYWdlfTwvQWxlcnQ+OlwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c2VuZFNvY2l0YWNhb3N9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgbm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBlbWFpbD1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJmb25lXCI+VGVsZWZvbmU6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZvbmVcIiBpZD1cImZvbmVcIiBwbGFjZWhvbGRlcj1cIih4eCl4eHh4LXh4eHhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiemFwXCI+VGVsZWZvbmU6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInphcFwiIGlkPVwiemFwXCIgcGxhY2Vob2xkZXI9XCIoeHgpIHggeHh4eC14eHh4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInByb2pldG9cIj5Qcm9qZXRvOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwicHJvamV0b1wiIGlkPVwicHJvamV0b1wiIHBsYWNlaG9sZGVyPVwiRmFsZSBzb2JyZSBvIHNldSBwcm9qZXRvLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICB7cmVzcG9zZX1cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj5Tb2xpY2l0YXI8L0J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIDxSb3RhcGUgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JjYW1lbnRvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9