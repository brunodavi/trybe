// Arrays Básico

function testList() {

    let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

    tasksList.unshift('Fazer exercícios da Trybe'); // adiciona mais uma tarefa no começo
    tasksList.pop(); // remove uma tarefa da lista
    tasksList.shift() // remove um tarefa no começo da lista
    console.log(tasksList.indexOf('Reunião')); // mostra o index do elemento
    console.log(tasksList);
}

// Ex 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Ex 2
let indexOfPortfolio = menu[2];
console.log(indexOfPortfolio);

// Ex 3
menu.push('Contatos')
console.log(menu);