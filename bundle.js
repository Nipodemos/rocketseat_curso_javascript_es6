"use strict";

function soma(a, b) {
  return a + b;
}
/**
 * se vc chamar a função soma e colocar apenas um argumento, vai rolar um erro
 */


soma(1); // erro "NaN" => Not a Number, porque o parametro b está undefined

soma(); // erro "NaN" => Not a Number denovo, porque os dois parametros estão undefined

/**
 * com valores padrão:
 */

function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

soma2(); // vai retornar 9, porque agora se vc não colocar argumentos, vai ter um valor padrão atribuido

soma2(1); // vai retornar 7, pelo mesmo motivo

soma2(1, 4); // vai retornar 5, porque a prioridade é o argumento que é passado, os valores padrão só vão
// ser usados se não tiver sido passado argumentos

/**
 * só uma curiosidade: essa função dá pra usar a arrow pra ficar menor e mais simples
 */

var soma3 = function soma3() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};
