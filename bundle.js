"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/**
 * Explicando const
 */
var a = 1;
a = (_readOnlyError("a"), 3); // ERRO, NÃO FAÇA ISSO

var usuario = {
  nome: 'Alan'
};
usuario.nome = 'Cleiton'; // PODE FAZER, é chamado de mutar uma variável

/**
 * Explicando let
 */

function test(x) {
  var y = 2;

  if (x > 5) {
    z = 1; // a function não tem acesso a essa variável, já que ela foi criada dentro do if

    console.log(x, y);
  }
}

test(10);
