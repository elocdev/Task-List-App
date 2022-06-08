let todos = ['Get Groceries', 'Wash Car', 'Buy new tires'];


todos.forEach(function (todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});