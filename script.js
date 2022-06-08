let todo1 = 'Get Groceries';
let todo2 = 'Wash Car';
let todo3 = 'Buy new tires';


function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}

addTodo(todo1);
addTodo(todo3);