(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tab/friends/friends"],{

/***/ 28:
/*!****************************************************************************!*\
  !*** D:/demo/erGouChat/main.js?{"page":"pages%2Ftab%2Ffriends%2Ffriends"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);

__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _friends = _interopRequireDefault(__webpack_require__(/*! ./pages/tab/friends/friends.vue */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_friends.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 29:
/*!*******************************************************!*\
  !*** D:/demo/erGouChat/pages/tab/friends/friends.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends.vue?vue&type=template&id=5f641590& */ 30);
/* harmony import */ var _friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.vue?vue&type=script&lang=js& */ 32);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);

var renderjs




/* normalize component */

var component = Object(_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/tab/friends/friends.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/*!**************************************************************************************!*\
  !*** D:/demo/erGouChat/pages/tab/friends/friends.vue?vue&type=template&id=5f641590& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friends.vue?vue&type=template&id=5f641590& */ 31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_template_id_5f641590___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 31:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/demo/erGouChat/pages/tab/friends/friends.vue?vue&type=template&id=5f641590& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    tarBarHeader: function() {
      return __webpack_require__.e(/*! import() | components/tarBarHeader/tarBarHeader */ "components/tarBarHeader/tarBarHeader").then(__webpack_require__.bind(null, /*! @/components/tarBarHeader/tarBarHeader.vue */ 63))
    },
    scrollArea: function() {
      return __webpack_require__.e(/*! import() | components/scrollArea/scrollArea */ "components/scrollArea/scrollArea").then(__webpack_require__.bind(null, /*! @/components/scrollArea/scrollArea.vue */ 70))
    },
    friendsList: function() {
      return __webpack_require__.e(/*! import() | components/friendsList/friendsList */ "components/friendsList/friendsList").then(__webpack_require__.bind(null, /*! @/components/friendsList/friendsList.vue */ 82))
    },
    showSelect: function() {
      return __webpack_require__.e(/*! import() | components/showSelect/showSelect */ "components/showSelect/showSelect").then(__webpack_require__.bind(null, /*! @/components/showSelect/showSelect.vue */ 89))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 32:
/*!********************************************************************************!*\
  !*** D:/demo/erGouChat/pages/tab/friends/friends.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../LenovoQMDownload/SoftMgr/1954-2020-07-22033532-1595360132222/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friends.vue?vue&type=script&lang=js& */ 33);
/* harmony import */ var _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LenovoQMDownload_SoftMgr_1954_2020_07_22033532_1595360132222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friends_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/demo/erGouChat/pages/tab/friends/friends.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















var _friends = _interopRequireDefault(__webpack_require__(/*! ../../../common/json/friends.json */ 34));
var _pinyin = __webpack_require__(/*! ../../../common/utils/pinyin.js */ 35);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { friendsList: [] };}, created: function created() {this.friendsList = (0, _pinyin.pinyinsetData)(_friends.default);}, methods: { selectAZ: function selectAZ(name) {this.$refs.scrollView.scrollID(name); // console.log(this.$refs.scrollView,name);
    } } };exports.default = _default;

/***/ })

},[[28,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tab/friends/friends.js.map