"use strict";

var arr = [1, 2, 3, 4, 5, 7, 10, 13];
/**
 * map:
 * ele entra em cada um dos items no array e  executa uma function sobre ele.
 * No final é retornado uma nova array com as  * modificações feitas
 */

var novoArray = arr.map(function (item, index) {
  return item * 2;
});
console.log(novoArray);
/**
 * reduce:
 * basicamente é uma função para juntar todos os valores dentro de uma array de números
 */

var sum = arr.reduce(function (anterior, atual, index) {
  return anterior + atual;
});
console.log('sum: ' + sum);
/**
 * filter:
 * filtrar uma array e retornar só os items que atendem a uma condição especifica imposta por você
 */

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
/**
 * find:
 * encontrar um item específico na lista que atenda a condição imposta
 */

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
