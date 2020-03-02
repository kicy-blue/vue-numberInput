(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/numberInput"],{

/***/ 21:
/*!*********************************************************!*\
  !*** E:/code/wx/numberInput/components/numberInput.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberInput.vue?vue&type=template&id=4306a4be&scoped=true& */ 22);
/* harmony import */ var _numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberInput.vue?vue&type=script&lang=js& */ 24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numberInput.vue?vue&type=style&index=0&id=4306a4be&scoped=true&lang=scss& */ 26);
/* harmony import */ var _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4306a4be",
  null,
  false,
  _numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/code/wx/numberInput/components/numberInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 22:
/*!****************************************************************************************************!*\
  !*** E:/code/wx/numberInput/components/numberInput.vue?vue&type=template&id=4306a4be&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./numberInput.vue?vue&type=template&id=4306a4be&scoped=true& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_template_id_4306a4be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 23:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/code/wx/numberInput/components/numberInput.vue?vue&type=template&id=4306a4be&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 24:
/*!**********************************************************************************!*\
  !*** E:/code/wx/numberInput/components/numberInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./numberInput.vue?vue&type=script&lang=js& */ 25);
/* harmony import */ var _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 25:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/code/wx/numberInput/components/numberInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    value: {
      type: String,
      default: '' },

    type: String,
    unit: {
      type: String,
      require: true } },


  data: function data() {
    return {
      cvalue: '' };

  },

  onLoad: function onLoad(options) {
  },
  methods: {
    isInteger: function isInteger(num) {
      if (!isNaN(Number(num)) && Number(num) % 1 === 0) {
        return true;
      }
      return false;
    },
    onInput: function onInput(e) {var _this = this;
      var cval = e.target.value;
      cval = cval.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
      cval = cval.replace(/^\./g, ""); //验证第一个字符是数字而不是
      cval = cval.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
      cval = cval.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      // cval = cval.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3'); //只能输入一个小数
      cval = cval.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
      console.log('cval', cval);
      //setTimeout 目的为了更新显示的input框里的值
      this.$emit('input', '');
      setTimeout(function () {
        _this.$emit('input', cval);
      }, 0);
    },
    reduce: function reduce() {
      if (this.value >= 1) {
        var newVal = Number(this.value) - 1;
        if (!this.isInteger(newVal)) {
          newVal = newVal.toFixed(2);
        }
        this.$emit('input', newVal);
      }
    },
    add: function add(e) {
      var newVal = Number(this.value) + 1;
      if (!this.isInteger(newVal)) {
        newVal = newVal.toFixed(2);
      }
      this.$emit('input', newVal);
    } } };exports.default = _default;

/***/ }),

/***/ 26:
/*!*******************************************************************************************************************!*\
  !*** E:/code/wx/numberInput/components/numberInput.vue?vue&type=style&index=0&id=4306a4be&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./numberInput.vue?vue&type=style&index=0&id=4306a4be&scoped=true&lang=scss& */ 27);
/* harmony import */ var _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_sytin_Downloads_HBuilderX_2_4_1_20191114_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_numberInput_vue_vue_type_style_index_0_id_4306a4be_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 27:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/code/wx/numberInput/components/numberInput.vue?vue&type=style&index=0&id=4306a4be&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/numberInput.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/numberInput-create-component',
    {
        'components/numberInput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(21))
        })
    },
    [['components/numberInput-create-component']]
]);
