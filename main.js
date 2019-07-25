
function soma (a, b) {
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
function soma2(a = 3, b = 6) {
    return a + b;
}

soma2(); // vai retornar 9, porque agora se vc não colocar argumentos, vai ter um valor padrão atribuido
soma2(1); // vai retornar 7, pelo mesmo motivo
soma2(1,4); // vai retornar 5, porque a prioridade é o argumento que é passado, os valores padrão só vão
// ser usados se não tiver sido passado argumentos


/**
 * só uma curiosidade: essa função dá pra usar a arrow pra ficar menor e mais simples
 */

 const soma3 = (a = 3, b = 6) => a + b;