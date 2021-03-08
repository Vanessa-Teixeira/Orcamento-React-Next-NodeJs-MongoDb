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
              se;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JjYW1lbnRvLmpzIl0sIm5hbWVzIjpbIm9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwiZm9uZSIsInphcCIsInByb2pldG8iLCJzb2xpY2l0YWNhb3MiLCJzZXRTb2xpY2l0YWNhb3MiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9zZSIsInNldFJlc3Bvc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZFNvY2l0YWNhb3MiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFzQzs7Q0FDUjs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUVzQkMsc0RBQVEsQ0FBQztBQUM5Q0MsUUFBSSxFQUFDLEVBRHlDO0FBRTlDQyxTQUFLLEVBQUMsRUFGd0M7QUFHOUNDLFFBQUksRUFBQyxFQUh5QztBQUk5Q0MsT0FBRyxFQUFDLEVBSjBDO0FBSzlDQyxXQUFPLEVBQUM7QUFMc0MsR0FBRCxDQUY5QjtBQUFBLE1BRVhDLFlBRlc7QUFBQSxNQUVHQyxlQUZIOztBQUFBLG1CQVVXUCxzREFBUSxDQUFDO0FBQ25DUSxZQUFRLEVBQUMsS0FEMEI7QUFFbkNDLFFBQUksRUFBQyxFQUY4QjtBQUduQ0MsV0FBTyxFQUFDO0FBSDJCLEdBQUQsQ0FWbkI7QUFBQSxNQVVYQyxPQVZXO0FBQUEsTUFVSEMsVUFWRzs7QUFnQmxCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUdQLGVBQWUsaUNBQUtELFlB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MTgzMTM2YmVhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnOyAvLyB1c2VTdGF0ZSBzZXJ2ZSAgcGFyYSBpY2x1c8OjbyBkZSBpbmZvcm1hw6dvZXMgbmEgYmFzZSBkZSBkYWRvc1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnOyAvLyBpbXBvcnRhciBUYWcgSGVyZFxyXG5pbXBvcnQgeyBDb250YWluZXIsIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LEFsZXJ0fSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IFJvdGFwZSBmcm9tICcuLi9jb21wb25lbnRzL1JvZGFwZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gb3JjYW1lbnRvKCkge1xyXG5cclxuICAgY29uc3QgW3NvbGljaXRhY2FvcyAsc2V0U29saWNpdGFjYW9zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgZW1haWw6JycsXHJcbiAgICAgIGZvbmU6JycsXHJcbiAgICAgIHphcDonJyxcclxuICAgICAgcHJvamV0bzonJ1xyXG4gICB9KTtcclxuXHJcbiAgIGNvbnN0IFtyZXNwb3NlLHNldFJlc3Bvc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICBmb3JtU2F2ZTpmYWxzZSxcclxuICAgICAgdHlwZTonJyxcclxuICAgICAgbWVzc2FnZTonJ1xyXG4gICB9KVxyXG5cclxuICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT5zZXRTb2xpY2l0YWNhb3Moey4uLnNvbGljaXRhY2FvcyxbZS50YXJnZXQubmFtZV06ZS50YXJnZXQudmFsdWV9KTtcclxuICBcclxuICAgY29uc3Qgc2VuZFNvY2l0YWNhb3MgPSBhc3luYyBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coc29saWNpdGFjYW9zKVxyXG5cclxuICAgICAgc2VcclxuXHJcblxyXG5cclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9vcmNhbWVudG9cIix7XHJcbiAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoc29saWNpdGFjYW9zKSxcclxuICAgICAgICAgaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGlmKHJlc3BvbnNlRW52LmVycm9yKXtcclxuICAgICAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgICAgIHR5cGU6J2Vycm9yJyxcclxuICAgICAgICAgICAgbWVzc2FnZTpyZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgICAgIHR5cGU6J3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOnJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgIH1jYXRjaChlcnIpe1xyXG4gICAgIHNldFJlc3Bvc2Uoe1xyXG4gICAgICAgIHR5cGU6J2Vycm9yJyxcclxuICAgICAgICBtZXNzYWdlOlwiRXJybzogT3LDp2FtZW50byBuw6NvIGVudmlhZG8gY29tIHN1Y2Vzc29cIlxyXG4gICAgIH0pO1xyXG4gICAgXHJcbiAgIH1cclxuXHJcblxyXG4gICB9IFxyXG4gICBcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgT3LDp2FtZW50b1xyXG4gICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2l0ZSBkZSB2ZW5kYXMgZGUgcHJvZHV0byBkZSBzdXBlcm1lY2Fkb3MgcGFyYSByZXZlbmRlZG9yZXNcIi8+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImRlc2NyLXRvcFwiPlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYC5kZXNjci10b3Age1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMGExOTcwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0MHB4XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnRcclxuICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+IE9yw6dhbWVudG88L2gxPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJmb3JtLW9yY2FtZW50b1wiPlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgIHtgLmZvcm0tb3JjYW1lbnRve1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4MHB4O1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9YH1cclxuXHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIHtyZXNwb3NlLnR5cGUgPT09ICdlcnJvcicgPyA8QWxlcnQgY29sb3IgPVwiZGFuZ2VyXCI+e3Jlc3Bvc2UubWVzc2FnZX08L0FsZXJ0PjpcIlwifVxyXG4gICAgICAgICAgICB7cmVzcG9zZS50eXBlID09PSAnc3VjY2VzcycgPyA8QWxlcnQgY29sb3IgPVwic3VjY2Vzc1wiPntyZXNwb3NlLm1lc3NhZ2V9PC9BbGVydD46XCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzZW5kU29jaXRhY2Fvc30+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJuYW1lXCI+Tm9tZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSBub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIGVtYWlsPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImZvbmVcIj5UZWxlZm9uZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9uZVwiIGlkPVwiZm9uZVwiIHBsYWNlaG9sZGVyPVwiKHh4KXh4eHgteHh4eFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJ6YXBcIj5UZWxlZm9uZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemFwXCIgaWQ9XCJ6YXBcIiBwbGFjZWhvbGRlcj1cIih4eCkgeCB4eHh4LXh4eHhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwicHJvamV0b1wiPlByb2pldG86PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJwcm9qZXRvXCIgaWQ9XCJwcm9qZXRvXCIgcGxhY2Vob2xkZXI9XCJGYWxlIHNvYnJlIG8gc2V1IHByb2pldG8uLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwicHJpbWFyeVwiPlNvbGljaXRhcjwvQnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICA8L0p1bWJvdHJvbj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgPFJvdGFwZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmNhbWVudG87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=