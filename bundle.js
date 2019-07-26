"use strict";

var nome = 'Alan';
var idade = 23; // sem o template literal, vc precisa ficar concatenando
// demais, isso é muito chato e feio e dificil de ler

console.log("Meu nome é " + nome + " e tenho " + idade + " anos."); // com o template literal, o visual fica muito mais limpo e
// fácil de entender, fora que fica igual as outras
// linguagens de programação

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));
