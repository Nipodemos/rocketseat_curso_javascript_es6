"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// rest
var usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};
/**
 * rest em variaveis é útil pra em vez de vc pegar algo
 * especifico de um objeto, vc pode pegar uma parte
 * numa variável, e pegar o resto do objeto na outra 
 * variavel
 */

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); //nome = Diego
//rest = {idade: 23, empresa: 'Rocketseat'}


console.log(nome, resto);
/**
 * dá pra usar em arrays também, só preste atenção na
 * sintaxe. Aqui vc usa colchetes pra pegar os valores
 */

var arra = [1, 2, 3, 4, 5];
var a = arra[0],
    b = arra[1],
    c = arra.slice(2); // a = 1
// b = 2
// c = [ 3, 4, 5 ]

console.log(a);
console.log(b);
console.log(c);
/**
 * rest é bacana pra casos em que vc não sabe quantos
 * parametros a função vai receber
 * vc pode definir um primeiro ou segundo padrão, e 
 * usar o rest pra pegar o resto deles 
*/
// vamos super que vc queria receber quantos números 
// quiser. Se colocar assim fica muito ruim.

function soma(a, b, c) {
  return a + b + c;
}

console.log(soma(1, 3)); //mas se usar o operador rest:
// params = [ 1, 3, 5, 6, 1]

function soma2() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (anterior, atual) {
    return anterior + atual;
  });
}

console.log(soma2(1, 3, 5, 6, 1)); // ou vc pode pegar alguns valores e colocar em 
// variaveis especificas e receber o resto em uma
// outra variavel

function soma3(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return params;
}

console.log(soma3(1, 3, 5, 7, 3, 1, 9, 5, 7)); // SPREAD

/**
 * se usa igualzinho usa no dart
 * to com preguiça de digitar, lê aí
 */

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
/**
 * pegando todos os itens da array e colocando nessa
 * outra array, em vez de colocar só a referencia
 * aquela array, que é o que aconteceria sem o spread
 */

var arr3 = [].concat(arr1, arr2);
var usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Gabriel'
});

console.log(usuario2);
