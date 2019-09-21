webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/autoComplete/index.jsx":
/*!*******************************************!*\
  !*** ./components/autoComplete/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/andy/code/private-projects/pokeapi/components/autoComplete/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var autoComplete = function autoComplete(props) {
  var options = props.options,
      onSelect = props.onSelect;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(options),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      fList = _React$useState4[0],
      setFList = _React$useState4[1];

  function _onChange(e) {
    setValue(e.target.value);
    var newList = options.filter(function (poke) {
      return poke.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFList(newList);
  }

  return __jsx("div", {
    className: "auto-complete-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("input", {
    id: "poke-search",
    placeholder: "Search Pokemon...",
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: value,
    type: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "auto-complete-options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, fList.map(function (poke, i) {
    return __jsx("li", {
      onClick: function onClick() {
        onSelect(poke);
      },
      key: "".concat(poke.name, "-").concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, poke.name.substr(0)[0].toUpperCase(), poke.name.substring(1).toLowerCase());
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (autoComplete);

/***/ })

})
//# sourceMappingURL=index.js.ebb6de77e9c7579be2de.hot-update.js.map