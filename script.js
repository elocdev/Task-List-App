let tasks;

// Function to load tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
if (Array.isArray(savedTasks)) {
    tasks = savedTasks;
}
else {
    tasks = [{
        title: 'Get Groceries',
        id: 'id1'
        }, {
        title: 'Wash Car',
        id: 'id2'
        }, {
        title: 'Buy new tires',
        id: 'id3'
        }
    ];
}

renderTask();

// Function to create task
function createTask(title) {
    const id = '' + new Date().getTime();
    tasks.push({
        title: title,
        id: id
    });

    saveTasks();
}

// Function to remove task
function removeTask(idToDelete) {
    tasks = tasks.filter( function (tasks) {
        if(tasks.id === idToDelete) {
            return false;
        }
        else {
            return true;
        }
    });

    saveTasks();
}

// Function to mark task done and undone
var checkMark = document.querySelector('ul');
checkMark.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);



// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add task used in button HTML
function addTask() {
    const taskItem = document.getElementById('task-item').value;
    if (taskItem !== '') {
        createTask(taskItem);
        renderTask();
    }
    else {
        alert('Please enter a task');
    }
    document.getElementById('task-item').value = '';
}

// Function to delete task
function deleteTask(event) {
    const delButton = event.target;
    const idToDelete = delButton.id;
    removeTask(idToDelete);
    renderTask();
}

// Function to render the task list on screen
function renderTask() {
    // Resetting Task List
    document.getElementById('task-list').innerHTML = '';

    tasks.forEach(function(tasks) {
        const element = document.createElement('li');
        element.innerText = tasks.title;
        const delButton = document.createElement('button');
        delButton.classList.add('delete-button');
        delButton.innerText = 'X';
        delButton.onclick = deleteTask;
        delButton.id = tasks.id;
        element.appendChild(delButton);
        const taskList = document.getElementById('task-list');
        taskList.appendChild(element);
    });
}