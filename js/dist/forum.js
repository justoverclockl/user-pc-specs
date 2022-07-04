module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/AddPcSpecsFields.js":
/*!**************************************************!*\
  !*** ./src/forum/components/AddPcSpecsFields.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPcSpecsFields; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);






var AddPcSpecsFields = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AddPcSpecsFields, _Component);

  function AddPcSpecsFields() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AddPcSpecsFields.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.cpu = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.cpu());
    this.ram = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.ram());
    this.motherboard = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.motherboard());
    this.gpu = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.gpu());
    this.storage = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.storage());
    this.cabinet = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.cabinet());
    this.operating_system = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.operating_system());
  };

  _proto.view = function view(vnode) {
    return m("form", {
      onsubmit: this.onsubmit.bind(this)
    }, m("fieldset", {
      className: "pc-specs"
    }, m("legend", null, "Pc Specs"), m("label", {
      className: "pc-specs-label",
      htmlFor: "cpu"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.cpu')), m("input", {
      className: "FormControl",
      name: "cpu",
      id: "cpu",
      type: "text",
      value: this.cpu,
      bidi: this.cpu
    }), m("label", {
      className: "pc-specs-label",
      htmlFor: "ram"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.ram')), m("input", {
      className: "FormControl",
      name: "ram",
      id: "ram",
      type: "text",
      value: this.ram,
      bidi: this.ram
    }), m("label", {
      className: "pc-specs-label",
      htmlFor: "motherboard"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.motherboard')), m("input", {
      className: "FormControl",
      name: "motherboard",
      id: "motherboard",
      type: "text",
      value: this.motherboard,
      bidi: this.motherboard
    }), m("label", {
      className: "pc-specs-label",
      htmlFor: "gpu"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.gpu')), m("input", {
      className: "FormControl",
      name: "gpu",
      id: "gpu",
      type: "text",
      value: this.gpu,
      bidi: this.gpu
    }), m("label", {
      className: "pc-specs-label",
      htmlFor: "storage"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.storage')), m("input", {
      className: "FormControl",
      name: "storage",
      id: "storage",
      type: "text",
      value: this.storage,
      bidi: this.storage
    }), m("label", {
      className: "pc-specs-label",
      htmlFor: "cabinet"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.cabinet')), m("input", {
      className: "FormControl",
      name: "cabinet",
      id: "cabinet",
      type: "text",
      value: this.cabinet,
      bidi: this.cabinet
    }), m("label", {
      className: "pc-specs-label",
      htmlFor: "operating_system"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.so'), " :"), m("input", {
      className: "FormControl",
      name: "operating_system",
      id: "operating_system",
      type: "text",
      value: this.operating_system,
      bidi: this.operating_system
    }), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button Button--primary pc-specs",
      type: "submit"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.savePcSpecs'))));
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    var user = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    user.save({
      cpu: this.cpu(),
      ram: this.ram(),
      motherboard: this.motherboard(),
      storage: this.storage(),
      cabinet: this.cabinet(),
      gpu: this.gpu(),
      operating_system: this.operating_system()
    }).then(function () {
      return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show({
        type: 'success'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-user-pc-specs.forum.specsSaved'));
    });
  };

  return AddPcSpecsFields;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AddPcSpecsFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AddPcSpecsFields */ "./src/forum/components/AddPcSpecsFields.js");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6__);







flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/user-pc-specs', function () {
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.cpu = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('cpu');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.motherboard = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('motherboard');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.ram = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('ram');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.gpu = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('gpu');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.storage = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('storage');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.cabinet = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('cabinet');
  flarum_common_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.operating_system = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('operating_system');
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'settingsItems', function (items) {
    items.add('pcSpecs', m(_components_AddPcSpecsFields__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'footerItems', function (items) {
    var imgPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-user-pc-specs/';
    var user = this.attrs.post.user();
    if (!user) return;
    items.add('pcSpecs', m("details", {
      id: "pc-details"
    }, m("summary", {
      className: "pc-specs-summary"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-user-pc-specs.forum.pcSpecsOf'), " ", user.username()), m("div", {
      className: "pcSpecs-container"
    }, m("div", {
      className: "pc-specs",
      title: user.cpu(),
      id: "cpu"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'cpu.png',
      alt: user.cpu()
    }), user.cpu()), m("div", {
      className: "pc-specs",
      title: user.ram(),
      id: "ram"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'ram.png',
      alt: user.ram()
    }), user.ram()), m("div", {
      className: "pc-specs",
      title: user.motherboard(),
      id: "motherboard"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'motherboard.png',
      alt: user.motherboard()
    }), user.motherboard()), m("div", {
      className: "pc-specs",
      title: user.gpu(),
      id: "gpu"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'gpu.png',
      alt: user.gpu()
    }), user.gpu()), m("div", {
      className: "pc-specs",
      title: user.storage(),
      id: "storage"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'hdd.png',
      alt: user.storage()
    }), user.storage()), m("div", {
      className: "pc-specs",
      title: user.cabinet(),
      id: "cabinet"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'case.png',
      alt: user.cabinet()
    }), user.cabinet()), m("div", {
      className: "pc-specs",
      title: user.operating_system(),
      id: "operating-system"
    }, m("img", {
      className: "pc-specs-img",
      src: imgPath + 'windows.png',
      alt: user.operating_system()
    }), user.operating_system()))));
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'oncreate', function () {
    var user = this.attrs.post.user();
    var cpuEl = document.getElementById('cpu');
    var ramEl = document.getElementById('ram');
    var moboEl = document.getElementById('motherboard');
    var gpuEl = document.getElementById('gpu');
    var storageEl = document.getElementById('storage');
    var cabinetEl = document.getElementById('cabinet');
    var soEl = document.getElementById('operating-system');

    if (user.cpu() === '') {
      cpuEl.remove();
    }

    if (user.ram() === '') {
      ramEl.remove();
    }

    if (user.motherboard() === '') {
      moboEl.remove();
    }

    if (user.gpu() === '') {
      gpuEl.remove();
    }

    if (user.storage() === '') {
      storageEl.remove();
    }

    if (user.cabinet() === '') {
      cabinetEl.remove();
    }

    if (user.operating_system() === '') {
      soEl.remove();
    }
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map