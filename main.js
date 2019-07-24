/* Começo do ensinamento*/

class List {
    constructor(){
        this.data = [];
    }
    
    add(data){
        this.data.push(data)
    }
}

class TodoList  extends List {
    constructor(){
        super();
        this.usuario = 'Alan';
    }
    
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    minhaLista.add('Novo Todo');
}



/*Método estático
Basicamente é algum método de uma classe que vc não precisa instanciar pra poder acessar.
Normalmente vc faz:

var minhaClasse = Classe();
minhaClasse.metodo();

mas com métodos estáticos, vc pode invocar direto, sem inicializar variável:

Classe.metodo();

*/
class TodoListEstatica {
    constructor(){
        this.todos = [];
        
    }
    /**
     * Lembrete: métodos estáticos não sabem de nada do resto da classe
     * então por exmeplo, esse addTodo na verdade não sabe da existencia do array todos
     * então esse código gera um erro e não funciona
     */
    static addTodo(){
        this.todos.push('Novo Todo');
        console.log
    }
}

TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();

/**
 * Exemplo de método abstrato funcional
*/

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,3));