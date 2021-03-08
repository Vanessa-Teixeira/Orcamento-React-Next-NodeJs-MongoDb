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
              _context.prev = 2;
              _context.next = 5;
              return fetch("http://localhost:5000/orcamento", {
                method: 'POST',
                body: JSON.stringify(solicitacaos),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setRespose({
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setRespose({
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setRespose({
                type: 'error',
                message: "Erro: Orçamento não enviado com sucesso"
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
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
        lineNumber: 70,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Site de vendas de produto de supermecados para revendedores"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top {\n                background-color:#0a1970;\n                color:#fff;\n                padding-top:40px;\n                padding-bottom:40px\n                margin-bottom: 0rem !important\n             }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4",
          children: " Or\xE7amento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      fluid: true,
      className: "form-orcamento",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".form-orcamento{\n               padding-top:80px;\n               padding-bottom:80px;\n               background-color:#fff;\n               margin-bottom:0rem !important;\n         }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        children: [respose.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "danger",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 41
        }, this) : "", respose.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "success",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 43
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
          onSubmit: sendSocitacaos,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "name",
              children: "Nome:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Digite seu nome",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "email",
              children: "Email:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "email",
              email: "email",
              id: "email",
              placeholder: "Digite seu email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "fone",
              children: "Telefone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "fone",
              id: "fone",
              placeholder: "(xx)xxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "zap",
              children: "Telefone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "zap",
              id: "zap",
              placeholder: "(xx) x xxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "projeto",
              children: "Projeto:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "textarea",
              name: "projeto",
              id: "projeto",
              placeholder: "Fale sobre o seu projeto...",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            type: "submit",
            outline: true,
            color: "primary",
            children: "Solicitar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JjYW1lbnRvLmpzIl0sIm5hbWVzIjpbIm9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwiZm9uZSIsInphcCIsInByb2pldG8iLCJzb2xpY2l0YWNhb3MiLCJzZXRTb2xpY2l0YWNhb3MiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9zZSIsInNldFJlc3Bvc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZFNvY2l0YWNhb3MiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBc0M7O0NBQ1I7O0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFFc0JDLHNEQUFRLENBQUM7QUFDOUNDLFFBQUksRUFBQyxFQUR5QztBQUU5Q0MsU0FBSyxFQUFDLEVBRndDO0FBRzlDQyxRQUFJLEVBQUMsRUFIeUM7QUFJOUNDLE9BQUcsRUFBQyxFQUowQztBQUs5Q0MsV0FBTyxFQUFDO0FBTHNDLEdBQUQsQ0FGOUI7QUFBQSxNQUVYQyxZQUZXO0FBQUEsTUFFR0MsZUFGSDs7QUFBQSxtQkFVV1Asc0RBQVEsQ0FBQztBQUNuQ1EsWUFBUSxFQUFDLEtBRDBCO0FBRW5DQyxRQUFJLEVBQUMsRUFGOEI7QUFHbkNDLFdBQU8sRUFBQztBQUgyQixHQUFELENBVm5CO0FBQUEsTUFVWEMsT0FWVztBQUFBLE1BVUhDLFVBVkc7O0FBZ0JsQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFHUCxlQUFlLGlDQUFLRCxZQUFMLDRL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cUJBQUksS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxlQUVHLHFFQUFDLGdEQUFEO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFJLEVBQUMsS0FBeEI7QUFBOEIsZ0JBQUUsRUFBQyxLQUFqQztBQUF1Qyx5QkFBVyxFQUFDLGtCQUFuRDtBQUNBLHNCQUFRLEVBQUVBO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJILGVBeUJHLHFFQUFDLG9EQUFEO0FBQUEsb0NBQ0cscUVBQUMsZ0RBQUQ7QUFBTyxxQkFBSSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBRUcscUVBQUMsZ0RBQUQ7QUFBTyxrQkFBSSxFQUFDLFVBQVo7QUFBdUIsa0JBQUksRUFBQyxTQUE1QjtBQUFzQyxnQkFBRSxFQUFDLFNBQXpDO0FBQW1ELHlCQUFXLEVBQUMsNkJBQS9EO0FBQ0Esc0JBQVEsRUFBRUE7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkgsZUErQkcscUVBQUMsaURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sTUFBN0I7QUFBOEIsaUJBQUssRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCSCxlQXNGRyxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBNkZGOztHQXZKUWQsUzs7QUF5Sk1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yY2FtZW50by4wYjA5ZDhmMTQ3OGI4ZjBhNzRkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyAvLyB1c2VTdGF0ZSBzZXJ2ZSAgcGFyYSBpY2x1c8OjbyBkZSBpbmZvcm1hw6dvZXMgbmEgYmFzZSBkZSBkYWRvc1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnOyAvLyBpbXBvcnRhciBUYWcgSGVyZFxyXG5pbXBvcnQgeyBDb250YWluZXIsIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LEFsZXJ0fSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IFJvdGFwZSBmcm9tICcuLi9jb21wb25lbnRzL1JvZGFwZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gb3JjYW1lbnRvKCkge1xyXG5cclxuICAgY29uc3QgW3NvbGljaXRhY2FvcyAsc2V0U29saWNpdGFjYW9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgZW1haWw6JycsXHJcbiAgICAgIGZvbmU6JycsXHJcbiAgICAgIHphcDonJyxcclxuICAgICAgcHJvamV0bzonJ1xyXG4gICB9KTtcclxuXHJcbiAgIGNvbnN0IFtyZXNwb3NlLHNldFJlc3Bvc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICBmb3JtU2F2ZTpmYWxzZSxcclxuICAgICAgdHlwZTonJyxcclxuICAgICAgbWVzc2FnZTonJ1xyXG4gICB9KVxyXG5cclxuICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT5zZXRTb2xpY2l0YWNhb3Moey4uLnNvbGljaXRhY2FvcyxbZS50YXJnZXQubmFtZV06ZS50YXJnZXQudmFsdWV9KTtcclxuICBcclxuICAgY29uc3Qgc2VuZFNvY2l0YWNhb3MgPSBhc3luYyBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coc29saWNpdGFjYW9zKVxyXG5cclxuXHJcblxyXG4gICAgICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL29yY2FtZW50b1wiLHtcclxuICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShzb2xpY2l0YWNhb3MpLFxyXG4gICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYocmVzcG9uc2VFbnYuZXJyb3Ipe1xyXG4gICAgICAgICBzZXRSZXNwb3NlKHtcclxuICAgICAgICAgICAgdHlwZTonZXJyb3InLFxyXG4gICAgICAgICAgICBtZXNzYWdlOnJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICBzZXRSZXNwb3NlKHtcclxuICAgICAgICAgICAgdHlwZTonc3VjY2VzcycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6cmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgfWNhdGNoKGVycil7XHJcbiAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgdHlwZTonZXJyb3InLFxyXG4gICAgICAgIG1lc3NhZ2U6XCJFcnJvOiBPcsOnYW1lbnRvIG7Do28gZW52aWFkbyBjb20gc3VjZXNzb1wiXHJcbiAgICAgfSk7XHJcbiAgICBcclxuICAgfVxyXG5cclxuXHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICBPcsOnYW1lbnRvXHJcbiAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaXRlIGRlIHZlbmRhcyBkZSBwcm9kdXRvIGRlIHN1cGVybWVjYWRvcyBwYXJhIHJldmVuZGVkb3Jlc1wiLz5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZGVzY3ItdG9wXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBgLmRlc2NyLXRvcCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYTE5NzA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjQwcHhcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudFxyXG4gICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj4gT3LDp2FtZW50bzwvaDE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tb3JjYW1lbnRvXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAge2AuZm9ybS1vcmNhbWVudG97XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1gfVxyXG5cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAge3Jlc3Bvc2UudHlwZSA9PT0gJ2Vycm9yJyA/IDxBbGVydCBjb2xvciA9XCJkYW5nZXJcIj57cmVzcG9zZS5tZXNzYWdlfTwvQWxlcnQ+OlwiXCJ9XHJcbiAgICAgICAgICAgIHtyZXNwb3NlLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxBbGVydCBjb2xvciA9XCJzdWNjZXNzXCI+e3Jlc3Bvc2UubWVzc2FnZX08L0FsZXJ0PjpcIlwifVxyXG5cclxuICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRTb2NpdGFjYW9zfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5hbWVcIj5Ob21lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IG5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgZW1haWw9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZm9uZVwiPlRlbGVmb25lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb25lXCIgaWQ9XCJmb25lXCIgcGxhY2Vob2xkZXI9XCIoeHgpeHh4eC14eHh4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInphcFwiPlRlbGVmb25lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6YXBcIiBpZD1cInphcFwiIHBsYWNlaG9sZGVyPVwiKHh4KSB4IHh4eHgteHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJwcm9qZXRvXCI+UHJvamV0bzo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInByb2pldG9cIiBpZD1cInByb2pldG9cIiBwbGFjZWhvbGRlcj1cIkZhbGUgc29icmUgbyBzZXUgcHJvamV0by4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJwcmltYXJ5XCI+U29saWNpdGFyPC9CdXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICA8Um90YXBlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yY2FtZW50bztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==