module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "8fAO":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./index.scss
var index = __webpack_require__("8fAO");

// CONCATENATED MODULE: ./components/autoComplete/index.jsx
var __jsx = external_react_default.a.createElement;


const autoComplete = props => {
  const {
    options,
    onSelect
  } = props;
  const [value, setValue] = external_react_default.a.useState('');
  const [fList, setFList] = external_react_default.a.useState(options);

  function onChange(e) {
    setValue(e.target.value);
    const newList = options.filter(poke => poke.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFList(newList);
  }

  return __jsx("div", {
    className: "auto-complete-wrapper"
  }, __jsx("input", {
    id: "poke-search",
    placeholder: "Search Pokémon...",
    onChange: e => onChange(e),
    value: value,
    type: "search"
  }), __jsx("div", {
    className: "auto-complete-options"
  }, __jsx("ul", null, fList.map((poke, i) => __jsx("li", {
    onClick: () => {
      onSelect(poke);
    },
    key: `${poke.name}-${i}`
  }, poke.name.substr(0)[0].toUpperCase(), poke.name.substring(1).toLowerCase())))));
};

/* harmony default export */ var components_autoComplete = (autoComplete);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;






const Home = props => {
  const [list, setList] = external_react_default.a.useState(props.list);
  const [selectedPoke, setSelectedPoke] = external_react_default.a.useState(null);

  function onSelect(poke) {
    external_axios_default.a.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    external_axios_default.a.get(poke.url).then(res => {
      setSelectedPoke(res.data);
      window.location.hash = "";
      window.location.hash = "#poke-card";
    });
  }

  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx("div", {
    className: "search-wrapper"
  }, pages_jsx(components_autoComplete, {
    options: list,
    onSelect: poke => onSelect(poke)
  })), selectedPoke !== null && pages_jsx(external_react_default.a.Fragment, null, pages_jsx("div", {
    id: 'poke-card',
    className: "poke-card"
  }, pages_jsx("h4", null, selectedPoke.name.substr(0)[0].toUpperCase(), selectedPoke.name.substring(1).toLowerCase(), " - ", selectedPoke.id >= 100 ? selectedPoke.id : selectedPoke.id >= 10 ? `0${selectedPoke.id}` : `00${selectedPoke.id}`), pages_jsx("div", {
    className: "row mt-2"
  }, pages_jsx("div", {
    className: "col-6"
  }, pages_jsx("p", null, "Normal"), pages_jsx("img", {
    src: selectedPoke.sprites.front_default,
    className: "img-fluid"
  })), pages_jsx("div", {
    className: "col-6"
  }, pages_jsx("p", null, "Shiny"), pages_jsx("img", {
    src: selectedPoke.sprites.front_shiny,
    className: "img-fluid"
  }))), pages_jsx("div", {
    className: "row"
  }, pages_jsx("div", {
    className: "col-12 mt-2"
  }, pages_jsx("h5", null, "Abilities"), pages_jsx("div", {
    className: "row"
  }, selectedPoke.abilities.map((ability, i) => pages_jsx("div", {
    className: "col-6 ability"
  }, pages_jsx("p", null, "Name: ", ability.ability.name)))), pages_jsx("hr", null)), pages_jsx("div", {
    className: "col-12 mt-2"
  }, pages_jsx("h5", null, "Moves"), pages_jsx("div", {
    className: "row"
  }, selectedPoke.moves.map((move, index) => pages_jsx("div", {
    className: "col-3 move"
  }, pages_jsx("p", null, "Name: ", move.move.name)))))))));
};

Home.getInitialProps = async ({
  req
}) => {
  const res = await external_isomorphic_unfetch_default()('https://pokeapi.co/api/v2/pokemon?limit=964');
  const list = await res.json();
  return {
    list: list.results
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });