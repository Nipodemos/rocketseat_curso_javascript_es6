const Usuario = {
    nome: 'Diego',
    idade:23,
    endereco: {
        cidade: 'RS',
        estado: 'SC',
    },
}

/**
 * tendo como exemplo o objeto acima, se eu fosse pegar várias
 * informações dele, as coisas podem ficar bem verbosas:
 */
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.estado;


/**
 * aí que entra a desestruturação:
 * de certa forma é como declarar várias variaveis numa linha só
 * a diferença é que ela pega o valor de um objeto, deixando mais limpo e intuitivo o código
 */
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


/**
 * voce pode também usar desestruturação nos parametros da função
 * útil pra vc pegar já valores separados do objeto
 * talvez fique até mais facil de entender na hora de ler o código
 * ou não
 */

 // versão sem desestruturação
function mostraNome(usuario) {
    console.log(usuario.nome);
}

// com a desestruturação
function mostraNome2( {nome, idade} ) {
    console.log(nome,idade);
}