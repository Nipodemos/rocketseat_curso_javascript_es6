const arr = [1,2,3,4,5,7,10,13];

/**
 * primeira forma: retire a palavra function e coloque um sinal de igual e maior antes do abre-chaves 
 */
const novoArray = arr.map((item)=>{
    return item * 2;
})
console.log(novoArray);


/**
 * segunda forma: se o método tem só um parâmetro, vc pode tirar os parenteses antes da seta
 */
const novoArray2 = arr.map( item => {
    return item * 2;
})
console.log(novoArray);


/**
 * terceira forma: se o conteúdo do método é só uma linha,
 * e essa linha for pra retornar algum valor,
 * tire o abre-chave e fecha-chave e o "return"
 * 
 * Observação do Nipodemos: pra te falar a verdade, acho que ficou limpo até demais a sintaxe,
 * fica até meio dificil perceber de cara que é uma função anonima com parametro item que retorna item * 2 
 */ 
const novoArray3 = arr.map(item => item * 2);
console.log(novoArray);


/**
 * detalhe:
 * vc pode retornar normalmente strings, numeros, arrays e talz, mas quando vc for retornar um objeto, tem uma     sintaxe diferente
 * isso é porque quando vc coloca o abre-chaves ali, ele já acha que é um método que tá seguindo a segunda forma
 * que eu citei umas linhas acima
 */
const novoArray4 = arr.map(item => {nome: 'diego'}); //! ERRO, NÃO FAÇAM ISSO GENTE
console.log(novoArray);
/**
 * modo correto:
 * coloque parenteses ao redor do objeto
 */
const novoArray5 = arr.map(item => ({nome: 'diego'}) ); //AGORA SIM TA CERTO
console.log(novoArray);

