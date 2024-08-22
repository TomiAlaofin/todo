//enter input
//click add todo
//get text written within  the box
//stack it 
const getinput = document.getElementById('add-todo-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list')
getinput.addEventListener('click', displayTask);

function displayTask(){
    const inputValue =todoInput.value.trim();
    if(inputValue === ''){
        alert('Enter a task');
    }
    else{
        const list = document.createElement('li');
        list.textContent = inputValue;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id= 'deleteButton';
        deleteButton.addEventListener('click', () => removeTask(list));
        list.appendChild(deleteButton);
        todoList.appendChild(list);
        todoInput.value = ''; // clear input field
    }
}
function removeTask(listItem){
    listItem.remove();
}
//when a new task is added, add a delete option