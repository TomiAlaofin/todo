//enter input
//click add todo
//get text written within  the box
//stack it 
const getinput = document.getElementById('add-todo-btn');
getinput.addEventListener('click', displayTask);
function displayTask(){
    const inputField = document.getElementById('todo-input');
    const inputValue =inputField.value;
    if(inputValue.trim() === ''){
        alert('Enter a task');
    }
    else{
        const list = document.createElement('li');
        list.textContent = inputValue;
        const todoList = document.getElementById('todo-list')
        todoList.appendChild(list);
    }

}