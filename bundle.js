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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_opciones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/opciones */ \"./src/modulos/opciones.js\");\n/* harmony import */ var _modulos_copiar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/copiar */ \"./src/modulos/copiar.js\");\n/* harmony import */ var _modulos_clases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/clases */ \"./src/modulos/clases.js\");\n\n\n\nvar copiar = document.getElementById('copiar');\nvar traductor = document.getElementsByName('traductor')[0];\n/*--------------------------------------------------*/\n\n/*Seleccion de opciones*/\n\n/*--------------------------------------------------*/\n\nObject(_modulos_opciones__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/*--------------------------------------------------*/\n\n/*Copiar traduccion*/\n\n/*--------------------------------------------------*/\n\ncopiar.addEventListener(\"click\", _modulos_copiar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/*--------------------------------------------------*/\n\n/*Clases*/\n\n/*--------------------------------------------------*/\n\nvar valor = new Array();\nvar c = 0;\ntraductor.aceptar.addEventListener(\"click\", function (e) {\n  valor[c] = new _modulos_clases__WEBPACK_IMPORTED_MODULE_2__[\"default\"](traductor.escribir.value);\n  /*Validar metodos */\n\n  if (traductor.className == 'Binario-Hexadecimal') valor[c].binarioHexadecimal();else if (traductor.className == 'Binario-Decimal') valor[c].binariosDecimales();else if (traductor.className == 'Hexadecimal-Binario') valor[c].hexadecimalBinario();else if (traductor.className == 'Hexadecimal-Decimal') valor[c].hexadecimalDecimal();else if (traductor.className == 'Decimal-Binario') valor[c].decimalBinario();else if (traductor.className == 'Decimal-Hexadecimal') valor[c].decimalHexadecimal();\n  c++;\n}); //----------------SOLO BINARIOS A DECIMAL--------------//\n\n/*traductor.escribir.addEventListener(\"keypress\",function(e){\r\n    var key = window.event ? e.which : e.keyCode;\r\n    if (key < 48 || key > 49) {\r\n        e.preventDefault();\r\n    }\r\n},false);*/\n\n/*INVESTIGAR:\r\n.charCodeAt() \r\nString.fromCharCode()*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulos/clases.js":
/*!*******************************!*\
  !*** ./src/modulos/clases.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formula */ \"./src/modulos/formula.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar cajaResultado = document.getElementById('resultado');\n/*Funcion para imprimir resultados en lantalla */\n\nvar imprimir = function imprimir(variable) {\n  /*Crear elemento 'p' y texto */\n  var texto = document.createTextNode(variable),\n      elemento = document.createElement('p');\n  /*Unir elemento a texto */\n\n  elemento.appendChild(texto);\n  /*Atributos de elementos */\n\n  elemento.setAttribute('id', 'texto-resultado');\n  /*Retornar el nuevo texto */\n\n  return cajaResultado.replaceChild(elemento, cajaResultado.children[0]);\n};\n/*Clases*/\n\n\nvar Operador =\n/*#__PURE__*/\nfunction () {\n  function Operador(valor) {\n    _classCallCheck(this, Operador);\n\n    this.valor = valor;\n  }\n\n  _createClass(Operador, [{\n    key: \"binariosDecimales\",\n    value: function binariosDecimales() {\n      var resultado = Object(_formula__WEBPACK_IMPORTED_MODULE_0__[\"binariosDecimales\"])(this.valor);\n\n      imprimir(resultado);\n    }\n  }, {\n    key: \"decimalBinario\",\n    value: function decimalBinario() {\n      var resultado = Object(_formula__WEBPACK_IMPORTED_MODULE_0__[\"decimalBinario\"])(this.valor);\n\n      imprimir(resultado);\n    }\n  }, {\n    key: \"hexadecimalBinario\",\n    value: function hexadecimalBinario() {\n      var resultado = Object(_formula__WEBPACK_IMPORTED_MODULE_0__[\"hexadecimalBinario\"])(this.valor);\n\n      imprimir(resultado);\n    }\n  }, {\n    key: \"binarioHexadecimal\",\n    value: function binarioHexadecimal() {\n      var resultado = Object(_formula__WEBPACK_IMPORTED_MODULE_0__[\"binarioHexadecimal\"])(this.valor);\n\n      imprimir(resultado);\n    }\n  }, {\n    key: \"decimalHexadecimal\",\n    value: function decimalHexadecimal() {\n      var resultado = Object(_formula__WEBPACK_IMPORTED_MODULE_0__[\"decimalHexadecimal\"])(this.valor);\n\n      imprimir(resultado);\n    }\n  }, {\n    key: \"hexadecimalDecimal\",\n    value: function hexadecimalDecimal() {\n      var resultado = Object(_formula__WEBPACK_IMPORTED_MODULE_0__[\"hexadecimalDecimal\"])(this.valor);\n\n      imprimir(resultado);\n    }\n  }]);\n\n  return Operador;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Operador);\n\n//# sourceURL=webpack:///./src/modulos/clases.js?");

/***/ }),

/***/ "./src/modulos/copiar.js":
/*!*******************************!*\
  !*** ./src/modulos/copiar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar generarContraseña = function generarContraseña() {\n  var elemento = document.createElement('input'),\n      texto = document.getElementById('texto-resultado').innerHTML;\n  elemento.setAttribute('value', texto);\n  document.body.appendChild(elemento);\n  elemento.select();\n  document.execCommand('copy');\n  document.body.removeChild(elemento);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generarContraseña);\n\n//# sourceURL=webpack:///./src/modulos/copiar.js?");

/***/ }),

/***/ "./src/modulos/formula.js":
/*!********************************!*\
  !*** ./src/modulos/formula.js ***!
  \********************************/
/*! exports provided: binariosDecimales, decimalBinario, hexadecimalBinario, binarioHexadecimal, decimalHexadecimal, hexadecimalDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"binariosDecimales\", function() { return binariosDecimales; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decimalBinario\", function() { return decimalBinario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexadecimalBinario\", function() { return hexadecimalBinario; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"binarioHexadecimal\", function() { return binarioHexadecimal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decimalHexadecimal\", function() { return decimalHexadecimal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexadecimalDecimal\", function() { return hexadecimalDecimal; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/modulos/variables.js\");\n\nvar valorSumatoria = new Array(_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regla.length);\nvar resultado = 0;\n/*------------------------------------VALIDAR FUNCIONES BINAROS Y HEXADECIMALES--------------------------------- */\n\nvar validarBinario = function validarBinario(valor) {\n  /*Validacion de 0 y 1 */\n  for (var c = 0; c < valor.length; c++) {\n    if (valor[c] == 0 || valor[c] == 1 || valor[c] == undefined || valor[c] == ' ') ;else valor = '0'; // console.log(valor[c]);\n  }\n\n  return valor;\n};\n\nvar validarHexadecimal = function validarHexadecimal(valor) {\n  for (var i = 0; i < valor.length; i++) {\n    if (valor[i] == 1 || valor[i] == 2 || valor[i] == 3 || valor[i] == 4 || valor[i] == 5 || valor[i] == 6 || valor[i] == 7 || valor[i] == 8 || valor[i] == 9 || valor[i] == 'a' || valor[i] == 'b' || valor[i] == 'c' || valor[i] == 'd' || valor[i] == 'e' || valor[i] == 'f' || valor[i] == 'A' || valor[i] == 'B' || valor[i] == 'C' || valor[i] == 'D' || valor[i] == 'E' || valor[i] == 'F' || valor[i] == ' ') ;else valor = '0';\n  }\n\n  return valor;\n};\n/*----------------------------------------------------------------------------------------------------------------*/\n\n\nvar binariosDecimales = function binariosDecimales(valor) {\n  valor = validarBinario(valor);\n  var separador = valor.split(\" \"),\n      invertir = new Array(),\n      imprimir = new Array();\n\n  for (var c = 0; c < separador.length; c++) {\n    invertir[c] = separador[c].length - 1;\n\n    for (var i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regla.length; i++) {\n      valorSumatoria[i] = _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regla[i] * separador[c][invertir[c]--];\n    }\n\n    for (var _i = 0; _i < separador[c].length; _i++) {\n      resultado = resultado + valorSumatoria[_i];\n    }\n\n    imprimir[c] = resultado;\n    resultado = 0;\n  }\n\n  return imprimir.join(' ');\n};\n\nvar decimalBinario = function decimalBinario(valor) {\n  var separador = valor.split(\" \"),\n      resultadoDecimal = new Array(),\n      imprimir = new Array(),\n      invertir = 0;\n\n  for (var c = 0; c < separador.length; c++) {\n    var m = 0;\n\n    for (var i = _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regla.length - 1; i >= 0; i--) {\n      if (separador[c] >= _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regla[i]) {\n        separador[c] = separador[c] - _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regla[i];\n        resultadoDecimal[invertir++] = 1;\n      } else {\n        resultadoDecimal[invertir++] = 0;\n      }\n\n      if (resultadoDecimal[m] == 0) {\n        resultadoDecimal.splice(m, 1, undefined);\n        m++;\n      }\n    }\n\n    imprimir[c] = resultadoDecimal.join('');\n    invertir = 0;\n  }\n\n  return imprimir.join(' ');\n};\n\nvar hexadecimalBinario = function hexadecimalBinario(valor) {\n  valor = validarHexadecimal(valor);\n  var separador = valor.split(' '),\n      almacenar = new Array();\n\n  for (var m = 0; m < separador.length; m++) {\n    var guardar = new Array(),\n        _resultado = new Array();\n    /*Validar Datos hexadecimales*/\n\n\n    for (var i = 0; i < separador[m].length; i++) {\n      if (separador[m][i] == 'A' || separador[m][i] == 'a') guardar[i] = '10';else if (separador[m][i] == 'B' || separador[m][i] == 'b') guardar[i] = '11';else if (separador[m][i] == 'C' || separador[m][i] == 'c') guardar[i] = '12';else if (separador[m][i] == 'D' || separador[m][i] == 'd') guardar[i] = '13';else if (separador[m][i] == 'E' || separador[m][i] == 'e') guardar[i] = '14';else if (separador[m][i] == 'F' || separador[m][i] == 'f') guardar[i] = '15';else guardar[i] = separador[m][i];\n    }\n    /*ciclo de valores divididos en arreglos*/\n\n\n    for (var _i2 = 0; _i2 < guardar.length; _i2++) {\n      /*almacenar elementos undefined a el elemento del arreglo 'resultado' */\n      _resultado[_i2] = new Array(4);\n\n      for (var c = 0; c < _resultado[_i2].length; c++) {\n        _resultado[_i2][c] = undefined;\n      }\n      /*convertir los elementos decimales del arreglo 'guardar' a hexadecimales con la funcion  'decimalBinario()'*/\n\n\n      guardar[_i2] = decimalBinario(guardar[_i2]);\n      guardar[_i2] = guardar[_i2].split('');\n      /*convertir el resultado de la funcion  'decimalBinario()' en arreglo*/\n\n      var contador = guardar[_i2].length - 1;\n      /*crear un contador que contenga los valores del arreglo 'guardar[i]' */\n\n      /*Alamacenar los valores de arreglo 'guardar[i]' en la variable 'resultado[i]' */\n\n      for (var _c = _resultado[_i2].length - 1; _c >= 0; _c--) {\n        _resultado[_i2][_c] = guardar[_i2][contador--];\n        /*Si hay un valor del arreglo 'resultado[i]' con undefined, convertirlo a valor 0*/\n\n        if (_resultado[_i2][_c] == undefined) _resultado[_i2][_c] = '0';\n      }\n      /*Convertir los valores del arreglo 'resultado[i]' en un resultado caracter y almacelarlo en 'guardar[i]'*/\n\n\n      guardar[_i2] = _resultado[_i2].join(\"\");\n    }\n    /*Los valores del arreglo guardar y convertila de arreglos a valor caracter*/\n\n\n    almacenar[m] = guardar.join('');\n  }\n  /*Retornar los valores del arreglo guardar y convertila de arreglos a valor caracter*/\n\n\n  return almacenar.join(' ');\n};\n\nvar binarioHexadecimal = function binarioHexadecimal(valor) {\n  valor = validarBinario(valor);\n  var separador = valor.split(' '),\n      almacenarResultado = new Array();\n\n  for (var m = 0; m < separador.length; m++) {\n    var almacenar = new Array(),\n        agrupar = new Array();\n    var contadorAlmacen = 0;\n    /*Almacenar 'valor' en varible almacenar*/\n\n    for (var i = separador[m].length - 1; i >= 0; i--) {\n      almacenar[contadorAlmacen++] = separador[m][i];\n    }\n\n    contadorAlmacen = 0;\n    var contador = 0;\n    /*Agrupar los arreglos en cuatro sifras*/\n\n    for (var c = 0; c <= agrupar.length; c++) {\n      if (contador < almacenar.length) {\n        agrupar[contadorAlmacen] = new Array();\n\n        for (var _i3 = 0; _i3 < 4; _i3++) {\n          agrupar[contadorAlmacen][_i3] = almacenar[contador++];\n          if (agrupar[contadorAlmacen][_i3] == undefined) agrupar[contadorAlmacen][_i3] = '0';\n        }\n\n        contadorAlmacen++;\n      }\n    }\n    /*Invertir la posicion del arreglo de los valores 'agrupar'*/\n\n\n    var agruparTotal = new Array();\n\n    for (var _i4 = 0; _i4 <= agrupar.length - 1; _i4++) {\n      contadorAlmacen = 0;\n      agruparTotal[_i4] = new Array();\n\n      for (var _c2 = agrupar[_i4].length - 1; _c2 >= 0; _c2--) {\n        agruparTotal[_i4][contadorAlmacen++] = agrupar[_i4][_c2];\n      }\n    }\n    /*Transformar lo valores binarios a decimales y convertilos a hexadecimales con la funcion 'binariosDecimales()'*/\n\n\n    contadorAlmacen = 0;\n\n    for (var _i5 = agrupar.length - 1; _i5 >= 0; _i5--) {\n      agrupar[contadorAlmacen] = binariosDecimales(agruparTotal[_i5].join(''));\n      if (agrupar[contadorAlmacen] == '10') agrupar[contadorAlmacen] = 'A';else if (agrupar[contadorAlmacen] == '11') agrupar[contadorAlmacen] = 'B';else if (agrupar[contadorAlmacen] == '12') agrupar[contadorAlmacen] = 'C';else if (agrupar[contadorAlmacen] == '13') agrupar[contadorAlmacen] = 'D';else if (agrupar[contadorAlmacen] == '14') agrupar[contadorAlmacen] = 'E';else if (agrupar[contadorAlmacen] == '15') agrupar[contadorAlmacen] = 'F';\n      contadorAlmacen++;\n    }\n\n    almacenarResultado[m] = agrupar.join('');\n  } // Retornar valores almacenados en la varible 'almacenarResultado'\n\n\n  return almacenarResultado.join(' ');\n};\n\nvar decimalHexadecimal = function decimalHexadecimal(valor) {\n  var separador = valor.split(' '),\n      binario = new Array(),\n      hexadecimal = new Array();\n\n  for (var i = 0; i <= separador.length - 1; i++) {\n    binario[i] = decimalBinario(separador[i]);\n    hexadecimal[i] = binarioHexadecimal(binario[i]);\n  }\n\n  return hexadecimal.join(' ');\n};\n\nvar hexadecimalDecimal = function hexadecimalDecimal(valor) {\n  valor = validarHexadecimal(valor);\n  var separador = valor.split(' '),\n      binario = new Array(),\n      decimal = new Array();\n\n  for (var i = 0; i < separador.length; i++) {\n    binario[i] = hexadecimalBinario(separador[i]);\n    decimal[i] = binariosDecimales(binario[i]);\n  }\n\n  return decimal.join(' ');\n};\n\n\n\n//# sourceURL=webpack:///./src/modulos/formula.js?");

/***/ }),

/***/ "./src/modulos/opciones.js":
/*!*********************************!*\
  !*** ./src/modulos/opciones.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar opciones = document.getElementById('opciones'),\n    subOpciones = document.getElementById('subOpciones'),\n    traductor = document.getElementById('traductor');\n\nvar funcionOpciones = function funcionOpciones() {\n  var _loop = function _loop(c) {\n    opciones.children[0].children[c].addEventListener('click', function () {\n      for (var i = 0; i < opciones.children[2].children.length; i++) {\n        if (i == c) {\n          opciones.children[2].children[i].className = 'block';\n          opciones.children[0].children[i].className = 'press';\n        } else {\n          opciones.children[2].children[i].className = 'none';\n          opciones.children[0].children[i].className = '';\n        }\n      }\n    });\n  };\n\n  for (var c = 0; c < opciones.children[0].children.length; c++) {\n    _loop(c);\n  }\n\n  var _loop2 = function _loop2(m) {\n    var _loop3 = function _loop3(c) {\n      subOpciones.children[m].children[c].addEventListener('click', function () {\n        /*Agregar variables con los valos innerHTML de 'opciones' y 'subOpciones'*/\n        var opcionesInner = opciones.children[0].children[m].innerHTML,\n            subOpcionesInner = subOpciones.children[m].children[c].innerHTML;\n        /*------------------------------------------------------------------------*/\n\n        for (var i = 0; i < subOpciones.children[m].children.length; i++) {\n          if (i == c) {\n            subOpciones.children[m].children[i].className = 'press';\n            /*Agregar color obscuro a la opcion seleccionada  */\n\n            traductor.className = \"\".concat(opcionesInner, \"-\").concat(subOpcionesInner);\n            /*Agregar clases al formulario*/\n          } else {\n            subOpciones.children[m].children[i].className = '';\n          }\n        }\n      });\n    };\n\n    for (var c = 0; c < subOpciones.children[m].children.length; c++) {\n      _loop3(c);\n    }\n  };\n\n  for (var m = 0; m < subOpciones.children.length; m++) {\n    _loop2(m);\n  } // subOpciones.children[0].children[0].addEventListener('click',()=>{\n  //     traductor.className = 'binario-Hexadecimal';\n  // });\n  // subOpciones.children[0].children[1].addEventListener('click',()=>{\n  //     traductor.className = 'binario-Decimal';\n  // });\n  // subOpciones.children[0].children[1].addEventListener('click',()=>{\n  //     traductor.className = 'hexadecimal-Binario';\n  // });\n  // subOpciones.children[0].children[1].addEventListener('click',()=>{\n  //     traductor.className = 'hexadecimal-Decimal';\n  // });\n  // subOpciones.children[0].children[1].addEventListener('click',()=>{\n  //     traductor.className = 'decimal-Binario';\n  // });\n  // subOpciones.children[0].children[1].addEventListener('click',()=>{\n  //     traductor.className = 'decimal-Hexadecimal';\n  // });\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (funcionOpciones);\n\n//# sourceURL=webpack:///./src/modulos/opciones.js?");

/***/ }),

/***/ "./src/modulos/variables.js":
/*!**********************************!*\
  !*** ./src/modulos/variables.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar objetos = {\n  regla: new Array(20),\n  resultado: setInterval(function () {\n    for (var i = 0; i < objetos.regla.length; i++) {\n      objetos.regla[i] = Math.pow(2, i);\n    }\n  }, 30)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (objetos);\n\n//# sourceURL=webpack:///./src/modulos/variables.js?");

/***/ })

/******/ });