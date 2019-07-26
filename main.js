const nome = 'Alan';
const idade = 23;

// sem o template literal, vc precisa ficar concatenando
// demais, isso é muito chato e feio e dificil de ler
console.log("Meu nome é " + nome + " e tenho " + idade + " anos." );

// com o template literal, o visual fica muito mais limpo e
// fácil de entender, fora que fica igual as outras
// linguagens de programação
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);