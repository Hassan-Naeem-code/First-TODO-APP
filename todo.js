console.log('Muhammad Hassan Naeem');
console.log(document.childNodes[1].childNodes[2]);

var todoInput = document.getElementById('todo');
var listToShowData = document.getElementById('list');

var editItemNode;
var addBTN = document.getElementById('btnForAdd');






function addTodo() {
    console.log(todoInput);
    console.log(todoInput.value);
    var li = document.createElement('li');
    var liText = document.createTextNode(todoInput.value);
    li.appendChild(liText);
    var delteBtn = document.createElement('button');
    // var deleteBtnText = document.createTextNode('DELETE');
    // delteBtn.appendChild(deleteBtnText);
    delteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    var editBtn = document.createElement('button');
    // var editBtnText = document.createTextNode('EDIT');
    // editBtn.appendChild(editBtnText);
    editBtn.innerHTML = '<i class="fas fa-check"></i>';
    delteBtn.setAttribute('id', 'deleteTheTodo');
    editBtn.setAttribute('id', 'editTheTodo');
    delteBtn.setAttribute('onclick', 'deleteTheItems(this)');
    delteBtn.setAttribute('title', 'DELETE THIS TODO');
    editBtn.setAttribute('onclick', 'editTheItems(this)');
    editBtn.setAttribute('title', 'EDIT THIS TODO');
    delteBtn.style.marginRight = '-240px';
    editBtn.style.marginRight = '-120px';
    li.appendChild(delteBtn);
    li.appendChild(editBtn);
    listToShowData.appendChild(li);
    todoInput.value = '';
}


function deleteTheItems(elementToDelete) {
    console.log(elementToDelete);
    elementToDelete.parentNode.remove();
}


function editTheItems(elementToEdit) {
    console.log(elementToEdit.parentNode.firstChild.nodeValue);
    editItemNode = elementToEdit;
    todoInput.value = elementToEdit.parentNode.firstChild.nodeValue;
    addBTN.setAttribute('onclick', 'saveItem()');

}


function saveItem() {
    console.log('hello editing', editItemNode);
    editItemNode.parentNode.firstChild.nodeValue = todoInput.value;
    addBTN.setAttribute('onclick', 'addTodo()');
    todoInput.value = '';
    editItemNode = undefined;
}


function deleteAll() {
    listToShowData.innerHTML = '';
}