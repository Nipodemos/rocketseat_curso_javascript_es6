const nome = 'Diego';
const idade = 23;

/**
 * simples porém muito útil
 * na hora que vc tiver definindo objetos, caso a
 * key seja igual o value, vc pode omitir um dos dois
 */

//do jeito antigo e repetitivo fica assim:
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat',
};


// do jeito bom fica assim, sem repetição
const usuario2 = {
    nome,
    idade,
    empresa: 'Rocketseat',
};