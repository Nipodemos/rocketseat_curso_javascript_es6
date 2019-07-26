// rest
const usuario = {
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

 
const {nome, ...resto} = usuario;
//nome = Diego
//rest = {idade: 23, empresa: 'Rocketseat'}
console.log(nome, resto);


/**
 * dá pra usar em arrays também, só preste atenção na
 * sintaxe. Aqui vc usa colchetes pra pegar os valores
 */
const arra = [1,2,3,4,5];

const [a, b, ...c] = arra;
// a = 1
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
function soma(a,b,c ) {
    return a + b + c;
}
console.log(soma(1,3));

//mas se usar o operador rest:
// params = [ 1, 3, 5, 6, 1]
function soma2(...params){
    return params.reduce((anterior, atual) => {
        return anterior + atual;
    });
}
console.log(soma2(1,3,5,6,1));

// ou vc pode pegar alguns valores e colocar em 
// variaveis especificas e receber o resto em uma
// outra variavel
function soma3(a,b, ...params) {
    return params;
}
console.log(soma3(1,3,5,7,3,1,9,5,7));


// SPREAD
/**
 * se usa igualzinho usa no dart
 * to com preguiça de digitar, lê aí
 */
const arr1 = [1,2,3];
const arr2 = [4,5,6];

/**
 * pegando todos os itens da array e colocando nessa
 * outra array, em vez de colocar só a referencia
 * aquela array, que é o que aconteceria sem o spread
 */
const arr3 = [...arr1, ...arr2];

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario2 = {
    ...usuario1,
    nome: 'Gabriel'
};
console.log(usuario2);
