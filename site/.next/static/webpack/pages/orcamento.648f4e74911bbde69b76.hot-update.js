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

 // useState serve  para iclus??o de informa??oes na base de dados

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
                form: form
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
                type: 'error',
                message: "Erro: Or??amento n??o enviado com sucesso"
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
        lineNumber: 72,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Site de vendas de produto de supermecados para revendedores"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top {\n                background-color:#0a1970;\n                color:#fff;\n                padding-top:40px;\n                padding-bottom:40px\n                margin-bottom: 0rem !important\n             }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4",
          children: " Or\xE7amento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      fluid: true,
      className: "form-orcamento",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".form-orcamento{\n               padding-top:80px;\n               padding-bottom:80px;\n               background-color:#fff;\n               margin-bottom:0rem !important;\n         }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        children: [respose.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "danger",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 41
        }, this) : "", respose.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "success",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 43
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
          onSubmit: sendSocitacaos,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "name",
              children: "Nome:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Digite seu nome",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "email",
              children: "Email:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "email",
              email: "email",
              id: "email",
              placeholder: "Digite seu email",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "fone",
              children: "Telefone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "fone",
              id: "fone",
              placeholder: "(xx)xxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "zap",
              children: "Telefone:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "text",
              name: "zap",
              id: "zap",
              placeholder: "(xx) x xxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
              "for": "projeto",
              children: "Projeto:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
              type: "textarea",
              name: "projeto",
              id: "projeto",
              placeholder: "Fale sobre o seu projeto...",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            type: "submit",
            outline: true,
            color: "primary",
            children: "Solicitar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JjYW1lbnRvLmpzIl0sIm5hbWVzIjpbIm9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwiZm9uZSIsInphcCIsInByb2pldG8iLCJzb2xpY2l0YWNhb3MiLCJzZXRTb2xpY2l0YWNhb3MiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9zZSIsInNldFJlc3Bvc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZFNvY2l0YWNhb3MiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXNDOztDQUNSOztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBRXNCQyxzREFBUSxDQUFDO0FBQzlDQyxRQUFJLEVBQUMsRUFEeUM7QUFFOUNDLFNBQUssRUFBQyxFQUZ3QztBQUc5Q0MsUUFBSSxFQUFDLEVBSHlDO0FBSTlDQyxPQUFHLEVBQUMsRUFKMEM7QUFLOUNDLFdBQU8sRUFBQztBQUxzQyxHQUFELENBRjlCO0FBQUEsTUFFWEMsWUFGVztBQUFBLE1BRUdDLGVBRkg7O0FBQUEsbUJBVVdQLHNEQUFRLENBQUM7QUFDbkNRLFlBQVEsRUFBQyxLQUQwQjtBQUVuQ0MsUUFBSSxFQUFDLEVBRjhCO0FBR25DQyxXQUFPLEVBQUM7QUFIMkIsR0FBRCxDQVZuQjtBQUFBLE1BVVhDLE9BVlc7QUFBQSxNQVVIQyxVQVZHOztBQWdCbEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBR1AsZUFBZSxpQ0FBS0Qs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dGF0aWMvd2VicGFjay9wYWdlcy9vcmNhbWVudG8uNjQ4ZjRlNzQ5MTFiYmRlNjliNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JzsgLy8gdXNlU3RhdGUgc2VydmUgIHBhcmEgaWNsdXPDo28gZGUgaW5mb3JtYcOnb2VzIG5hIGJhc2UgZGUgZGFkb3NcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy8gaW1wb3J0YXIgVGFnIEhlcmRcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCxBbGVydH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBSb3RhcGUgZnJvbSAnLi4vY29tcG9uZW50cy9Sb2RhcGUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9yY2FtZW50bygpIHtcclxuXHJcbiAgIGNvbnN0IFtzb2xpY2l0YWNhb3MgLHNldFNvbGljaXRhY2Fvc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIG5hbWU6JycsXHJcbiAgICAgIGVtYWlsOicnLFxyXG4gICAgICBmb25lOicnLFxyXG4gICAgICB6YXA6JycsXHJcbiAgICAgIHByb2pldG86JydcclxuICAgfSk7XHJcblxyXG4gICBjb25zdCBbcmVzcG9zZSxzZXRSZXNwb3NlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgZm9ybVNhdmU6ZmFsc2UsXHJcbiAgICAgIHR5cGU6JycsXHJcbiAgICAgIG1lc3NhZ2U6JydcclxuICAgfSlcclxuXHJcbiAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSBlID0+c2V0U29saWNpdGFjYW9zKHsuLi5zb2xpY2l0YWNhb3MsW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgXHJcbiAgIGNvbnN0IHNlbmRTb2NpdGFjYW9zID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHNvbGljaXRhY2FvcylcclxuXHJcbiAgICAgIHNldFJlc3Bvc2Uoe2Zvcm19KVxyXG5cclxuXHJcblxyXG4gICAgICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL29yY2FtZW50b1wiLHtcclxuICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShzb2xpY2l0YWNhb3MpLFxyXG4gICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYocmVzcG9uc2VFbnYuZXJyb3Ipe1xyXG4gICAgICAgICBzZXRSZXNwb3NlKHtcclxuICAgICAgICAgICAgdHlwZTonZXJyb3InLFxyXG4gICAgICAgICAgICBtZXNzYWdlOnJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICBzZXRSZXNwb3NlKHtcclxuICAgICAgICAgICAgdHlwZTonc3VjY2VzcycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6cmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgfWNhdGNoKGVycil7XHJcbiAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgdHlwZTonZXJyb3InLFxyXG4gICAgICAgIG1lc3NhZ2U6XCJFcnJvOiBPcsOnYW1lbnRvIG7Do28gZW52aWFkbyBjb20gc3VjZXNzb1wiXHJcbiAgICAgfSk7XHJcbiAgICBcclxuICAgfVxyXG5cclxuXHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8SGVhZD5cclxuICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICBPcsOnYW1lbnRvXHJcbiAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaXRlIGRlIHZlbmRhcyBkZSBwcm9kdXRvIGRlIHN1cGVybWVjYWRvcyBwYXJhIHJldmVuZGVkb3Jlc1wiLz5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZGVzY3ItdG9wXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBgLmRlc2NyLXRvcCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYTE5NzA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjQwcHhcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudFxyXG4gICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj4gT3LDp2FtZW50bzwvaDE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tb3JjYW1lbnRvXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAge2AuZm9ybS1vcmNhbWVudG97XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1gfVxyXG5cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAge3Jlc3Bvc2UudHlwZSA9PT0gJ2Vycm9yJyA/IDxBbGVydCBjb2xvciA9XCJkYW5nZXJcIj57cmVzcG9zZS5tZXNzYWdlfTwvQWxlcnQ+OlwiXCJ9XHJcbiAgICAgICAgICAgIHtyZXNwb3NlLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxBbGVydCBjb2xvciA9XCJzdWNjZXNzXCI+e3Jlc3Bvc2UubWVzc2FnZX08L0FsZXJ0PjpcIlwifVxyXG5cclxuICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRTb2NpdGFjYW9zfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5hbWVcIj5Ob21lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IG5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgZW1haWw9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZm9uZVwiPlRlbGVmb25lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb25lXCIgaWQ9XCJmb25lXCIgcGxhY2Vob2xkZXI9XCIoeHgpeHh4eC14eHh4XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInphcFwiPlRlbGVmb25lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6YXBcIiBpZD1cInphcFwiIHBsYWNlaG9sZGVyPVwiKHh4KSB4IHh4eHgteHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJwcm9qZXRvXCI+UHJvamV0bzo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInByb2pldG9cIiBpZD1cInByb2pldG9cIiBwbGFjZWhvbGRlcj1cIkZhbGUgc29icmUgbyBzZXUgcHJvamV0by4uLlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJwcmltYXJ5XCI+U29saWNpdGFyPC9CdXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICA8Um90YXBlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yY2FtZW50bztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==