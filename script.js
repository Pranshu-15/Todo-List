let todoList = [];
displayItems();
function addTodo() {
    let inputElement = document.querySelector('#todoInput');
    let dateElement = document.querySelector('#todoDate');
    let todoItem = inputElement.value;
    let dateItem = dateElement.value;
    todoList.push({
        item: todoItem,
        dueDate: dateItem,
        });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todoContainer');
    let newHtml = ''
    for(let i = 0; i < todoList.length; i++){
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="myDelBtn" onclick = "todoList.splice(${i} , 1);displayItems()">Delete</button>
        
        `
    }
    containerElement.innerHTML = newHtml;
}