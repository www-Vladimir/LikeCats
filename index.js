/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar app = null;\n\nwindow.onload = function () {\n  Vue.component('box-cats', {\n    props: {\n      info: {\n        type: Object,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    template: \"\\n\\t\\t<div class=\\\"goods-item\\\">\\n\\t\\t<img class=\\\"img-cats\\\" :src=\\\"info[0].url\\\" :id=\\\"info[0].id\\\" alt=\\\"Kot\\\">\\n\\t\\t</div>\\n\\t\\t\"\n  }), Vue.component('list-cats', {\n    props: {\n      info_data: {\n        type: Object,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    template: \"\\n\\t\\t<div class=\\\"goodsCard\\\" :id=\\\"info_data.id\\\">\\n\\t\\t     <div class=\\\"goodsList\\\">\\n\\t\\t \\t\\t<img class=\\\"img-cats\\\" :src=\\\"info_data.url\\\" alt=\\\"Kot\\\">\\n\\t\\t     </div>\\n\\t\\t\\t <div class=\\\"blockLaki\\\">\\n\\t\\t\\t<button class=\\\"goods-title\\\" @click=\\\"deletCat\\\" > \\u0423\\u0431\\u0440\\u0430\\u0442\\u044C \\u0438\\u0437 \\u043B\\u044E\\u0431\\u0438\\u043C\\u0447\\u0438\\u043A\\u043E\\u0432 </button>\\n\\t\\t\\t </div>\\n\\t\\t\\t </div>\\n\\t\\t\",\n    methods: {\n      deletCat: function deletCat() {\n        this.$emit('del_cat', this.info_data.id);\n      }\n    }\n  });\n  app = new Vue({\n    el: '#root',\n    data: {\n      searchValue: '',\n      isVisibleCat: true,\n      snack: true,\n      errorMessage: '',\n      basketGoodsItems: [],\n      url: \"https://api.thecatapi.com/v1/images/search\",\n      info: [{\n        url: __webpack_require__(/*! ../../../../../../src/img/catO4kax.png */ \"./src/img/catO4kax.png\"),\n        id: '111',\n        categories: [{\n          nameCat: 'Котик без имени:( '\n        }]\n      }],\n      selectedCat: [],\n      catList: []\n    },\n    methods: {\n      xhr: function xhr() {\n        this.info = \"Requesting ...\";\n        var rq = new XMLHttpRequest();\n\n        rq.onreadystatechange = function (vm) {\n          if (this.readyState === XMLHttpRequest.DONE) {\n            if (this.status === 200) {\n              vm.info = JSON.parse(this.response);\n              console.log(vm.info);\n            } else {\n              vm.info = \"Request Failed\";\n            }\n          }\n\n          console.log(vm.info);\n        }.bind(rq, this);\n\n        rq.open('GET', this.url);\n        rq.setRequestHeader(\"x-api-key\", \"594bbe42-29d2-4378-93df-e4e8a3613f6d\");\n        rq.send();\n      },\n      fetch: function (_fetch) {\n        function fetch() {\n          return _fetch.apply(this, arguments);\n        }\n\n        fetch.toString = function () {\n          return _fetch.toString();\n        };\n\n        return fetch;\n      }(function () {\n        return fetch(this.url, {\n          headers: {\n            \"x-api-key\": \"594bbe42-29d2-4378-93df-e4e8a3613f6d\"\n          }\n        }).then(function (res) {\n          return res.json();\n        });\n      }),\n      isVisible: function isVisible() {\n        this.xhr();\n        this.isVisibleCat = false;\n      },\n      lick: function lick() {\n        if (this.info[0] !== \"R\") {\n          this.selectedCat.push(this.info[0]);\n          this.xhr();\n          this.snack = false;\n        }\n      },\n      visiblCardCat: function visiblCardCat(data) {\n        var index = this.selectedCat.findIndex(function (n) {\n          return n.id === data;\n        });\n\n        if (index !== -1) {\n          this.selectedCat.splice(index, 1);\n        }\n      }\n    } // computed: {\n    // \tcat_image() {\n    // \t\tif (!this.info[0].url) {\n    // \t\t\treturn\n    // \t\t}\n    // \t\tconst fileName = require(this.info[0].url)\n    // \t\treturn fileName // the module request\n    // \t},\n    // }\n\n  });\n};\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/kosmos-oboi.jpg */ \"./src/img/kosmos-oboi.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\nhtml {\\n\\t/* Это изображение отобразиться на всю страницу */\\n\\tbackground: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center;\\n\\t/* Принудительно указываем высоту равную 100% от высоты окна браузера */\\n\\tmin-height: 100%;\\n\\t/* Магия */\\n\\tbackground-size: cover;\\n\\tbackground-attachment: fixed;\\n\\tscroll-behavior: smooth;\\n}\\n\\n[v-cloak] {\\n\\tdisplay: none;\\n}\\n\\nh2 {\\n\\tfont-size: 2.5em;\\n}\\n\\np {\\n\\tfont-size: 1.5em;\\n}\\n\\n.container {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-align: start;\\n\\t-ms-flex-align: start;\\n\\talign-items: flex-start;\\n\\t-webkit-box-pack: justify;\\n\\t-ms-flex-pack: justify;\\n\\tjustify-content: space-between;\\n\\tmargin-top: 10px;\\n\\tpadding: 0 10px;\\n}\\n\\nh2 {\\n\\ttext-align: center;\\n}\\n\\nheader {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-pack: center;\\n\\t-ms-flex-pack: center;\\n\\tjustify-content: center;\\n\\tbackground: #111;\\n\\tcolor: aliceblue;\\n}\\n\\n.button {\\n\\tmargin: 20px auto;\\n\\tpadding: 10px 50px;\\n\\tfont-size: 20px;\\n\\tfont-weight: bold;\\n\\tbackground: #628abb;\\n\\tcolor: #ebf9f9;\\n\\tborder-radius: 10px;\\n}\\n\\n.blockButton {\\n\\twidth: 100%;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-pack: center;\\n\\t-ms-flex-pack: center;\\n\\tjustify-content: center;\\n}\\n\\n.cat {\\n\\tposition: relative;\\n\\ttop: 0px;\\n\\tleft: 37%;\\n\\twidth: 25%;\\n}\\n\\n.goods-list {\\n\\twidth: 100%;\\n\\tborder: 3px solid #628abb;\\n\\tbackground: #000d1e;\\n\\t-webkit-box-sizing: border-box;\\n\\tbox-sizing: border-box;\\n\\tpadding: 20px 80px;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-ms-flex-pack: distribute;\\n\\tjustify-content: space-around;\\n\\t-ms-flex-wrap: wrap;\\n\\tflex-wrap: wrap;\\n}\\n\\n.blockTitleCats {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-orient: vertical;\\n\\t-webkit-box-direction: normal;\\n\\t-ms-flex-direction: column;\\n\\tflex-direction: column;\\n\\t-webkit-box-align: center;\\n\\t-ms-flex-align: center;\\n\\talign-items: center;\\n\\tborder: 3px solid #628abb;\\n\\tborder-radius: 10px 10px 0 0;\\n\\tmin-height: 70vh;\\n}\\n\\n.blockTitleCats h2 {\\n\\tcolor: white;\\n}\\n\\n.goods-item {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-orient: vertical;\\n\\t-webkit-box-direction: normal;\\n\\t-ms-flex-direction: column;\\n\\tflex-direction: column;\\n\\t-webkit-box-align: center;\\n\\t-ms-flex-align: center;\\n\\talign-items: center;\\n\\twidth: 60%;\\n\\tmin-width: 240px;\\n\\tmin-height: 300px;\\n\\tmargin-bottom: 10px;\\n\\t-webkit-box-sizing: border-box;\\n\\tbox-sizing: border-box;\\n\\tborder-radius: 20px;\\n\\toverflow: hidden;\\n\\tmax-width: 50vh;\\n}\\n\\n.goodsList {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-orient: vertical;\\n\\t-webkit-box-direction: normal;\\n\\t-ms-flex-direction: column;\\n\\tflex-direction: column;\\n\\t-webkit-box-align: center;\\n\\t-ms-flex-align: center;\\n\\talign-items: center;\\n\\tbackground: #dfe6f4;\\n\\twidth: 10vw;\\n\\tmin-width: 120px;\\n\\t-webkit-box-sizing: border-box;\\n\\tbox-sizing: border-box;\\n\\tborder-radius: 20px;\\n\\toverflow: hidden;\\n\\tfloat: left;\\n}\\n\\n.goodsCard {\\n\\twidth: 100%;\\n\\twidth: calc(100% - 10px);\\n\\tbackground: rgba(18, 4, 64, 0.197);\\n\\tmargin-bottom: 10px;\\n\\tmargin-right: 10px;\\n\\tborder-radius: 10px;\\n\\tborder: 3px solid #628abb;\\n\\t-webkit-box-sizing: border-box;\\n\\tbox-sizing: border-box;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-ms-flex-wrap: wrap;\\n\\tflex-wrap: wrap;\\n\\t-webkit-box-pack: center;\\n\\t-ms-flex-pack: center;\\n\\tjustify-content: center;\\n}\\n\\n.blockLaki {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-orient: vertical;\\n\\t-webkit-box-direction: normal;\\n\\t-ms-flex-direction: column;\\n\\tflex-direction: column;\\n\\t-webkit-box-flex: 1;\\n\\t-ms-flex: 1;\\n\\tflex: 1;\\n}\\n\\n.goodsCard h4 {\\n\\tcolor: #ddd;\\n}\\n\\n.goods-title {\\n\\tmargin: 0.5em 1em;\\n\\tpadding: 5px 10px;\\n\\tbackground: #d33535;\\n\\tright: 12px;\\n\\ttop: 10px;\\n\\tborder-radius: 10px;\\n\\tcolor: aliceblue;\\n\\tline-height: 2em;\\n\\tfont-size: 1.2em;\\n}\\n\\n.goods-title:hover {\\n\\tbackground: #f30c0c;\\n\\tcursor: pointer;\\n}\\n\\n.img-cats {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\t-o-object-fit: cover;\\n\\tobject-fit: cover;\\n\\tmargin: 0 auto;\\n}\\n\\n.buttonLike {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-pack: center;\\n\\t-ms-flex-pack: center;\\n\\tjustify-content: center;\\n\\t-ms-flex-wrap: wrap;\\n\\tflex-wrap: wrap;\\n}\\n\\n.buttonLike__like {\\n\\tmargin: 2px 5px;\\n\\tbackground: #035010;\\n}\\n\\n.buttonLike__next {\\n\\tmargin: 2px 5px;\\n\\tbackground: #ac3619;\\n}\\n\\n.boxButtonCat {\\n\\tpadding: 30px;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-pack: center;\\n\\t-ms-flex-pack: center;\\n\\tjustify-content: center;\\n}\\n\\n.listLike {\\n\\t-webkit-box-flex: 1;\\n\\t-ms-flex: 1;\\n\\tflex: 1;\\n\\twidth: 50%;\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-orient: vertical;\\n\\t-webkit-box-direction: normal;\\n\\t-ms-flex-direction: column;\\n\\tflex-direction: column;\\n\\tmax-height: 667px;\\n\\toverflow: auto;\\n\\ttext-align: center;\\n}\\n\\n.boxСhoiceCats {\\n\\t-webkit-box-flex: 2;\\n\\t-ms-flex: 2;\\n\\tflex: 2;\\n}\\n\\n.box_listLike {\\n\\tdisplay: -webkit-box;\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-webkit-box-orient: vertical;\\n\\t-webkit-box-direction: normal;\\n\\t-ms-flex-direction: column;\\n\\tflex-direction: column;\\n\\toverflow: auto;\\n\\ttext-align: center;\\n}\\n\\n.listLike h2,\\n.listLike p {\\n\\tcolor: #ddd;\\n}\\n\\n/* Собственно сам слайдер */\\n.slider {\\n\\twidth: 74vw;\\n\\t-o-object-fit: cover;\\n\\tobject-fit: cover;\\n\\tmax-width: 90%;\\n\\tposition: relative;\\n\\tmargin: auto;\\n\\theight: calc(1em + 40vw);\\n\\tmargin-bottom: 15px;\\n}\\n\\n/* Картинка мастабируется по отношению к родительскому элементу */\\n.catImg {\\n\\t-o-object-fit: cover;\\n\\tobject-fit: cover;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\theight: calc(1em + 40vw);\\n\\tborder: none !important;\\n\\t-webkit-box-shadow: none !important;\\n\\tbox-shadow: none !important;\\n}\\n\\n/* Кртачка слайдера */\\n.blockSlaider {\\n\\tdisplay: block;\\n\\twidth: 100%;\\n\\theight: 100%;\\n}\\n\\n/* Кнопки вперед и назад */\\n.slider .prev,\\n.slider .next {\\n\\tcursor: pointer;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\ttop: 50%;\\n\\twidth: auto;\\n\\tmargin-top: -22px;\\n\\tpadding: 16px;\\n\\tcolor: #070707;\\n\\tfont-weight: bold;\\n\\tfont-size: 18px;\\n\\t-webkit-transition: 0.6s ease;\\n\\ttransition: 0.6s ease;\\n\\tborder-radius: 0 3px 3px 0;\\n}\\n\\n.slider .next {\\n\\tright: 0;\\n\\tborder-radius: 3px 0 0 3px;\\n}\\n\\n.slider .prev {\\n\\tleft: 0;\\n}\\n\\n/* При наведении на кнопки добавляем фон кнопок */\\n.slider .prev:hover,\\n.slider .next:hover {\\n\\tbackground-color: rgba(12, 166, 30, 0.8);\\n}\\n\\n/* Заголовок слайда */\\n.slideText {\\n\\ttext-align: center;\\n\\tposition: absolute;\\n\\tcolor: #fff;\\n\\tfont-size: calc(1.2em + 3.8vw);\\n\\tfont-weight: bold;\\n\\twidth: calc(100% - 20px);\\n\\t/* Выравнивание текста по горизонтали и по вертикали*/\\n\\tleft: 50%;\\n\\ttop: 80%;\\n\\tpadding: 3px 10px;\\n\\t-webkit-transform: translate(-50%, -50%);\\n\\ttransform: translate(-50%, -50%);\\n\\t/* Тень*/\\n\\ttext-shadow: 1px 1px 1px #000, 0 0 1em #000;\\n\\tbackground: rgba(159, 3, 3, 0.8);\\n}\\n\\n/* Кружочки */\\n.slider-dots {\\n\\ttext-align: center;\\n}\\n\\n.slider-dots_item {\\n\\tcursor: pointer;\\n\\theight: 12px;\\n\\twidth: 12px;\\n\\tmargin: 0 2px;\\n\\tbackground-color: #ddd;\\n\\tborder-radius: 50%;\\n\\tdisplay: inline-block;\\n\\t-webkit-transition: background-color 0.6s ease;\\n\\ttransition: background-color 0.6s ease;\\n}\\n\\n.slider-dots_item:hover {\\n\\tbackground-color: #aaa;\\n}\\n\\n/* Анимация слайдов */\\n.slider .item {\\n\\twidth: 75vw;\\n\\t-webkit-animation-name: fade;\\n\\t-webkit-animation-duration: 1.5s;\\n\\tanimation-name: fade;\\n\\tanimation-duration: 1.5s;\\n}\\n\\n@-webkit-keyframes fade {\\n\\tfrom {\\n\\t\\topacity: 0.4;\\n\\t}\\n\\tto {\\n\\t\\topacity: 1;\\n\\t}\\n}\\n\\n@keyframes fade {\\n\\tfrom {\\n\\t\\topacity: 0.4;\\n\\t}\\n\\tto {\\n\\t\\topacity: 1;\\n\\t}\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/catO4kax.png":
/*!******************************!*\
  !*** ./src/img/catO4kax.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e32a381dd54ebf87eff9.png\";\n\n//# sourceURL=webpack://project/./src/img/catO4kax.png?");

/***/ }),

/***/ "./src/img/kosmos-oboi.jpg":
/*!*********************************!*\
  !*** ./src/img/kosmos-oboi.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa4cdc7de6c3b634e220.jpg\";\n\n//# sourceURL=webpack://project/./src/img/kosmos-oboi.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;