let inputBox = document.getElementById('input-box');
let addButton = document.getElementById('add-button');
let itemList = document.getElementById('item-list');

function addItem() {
    let inputValue = inputBox.value;

    let listItem = document.createElement('li');
    listItem.textContent = inputValue;

    listItem.classList.add('list-item');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', ()=>{
        itemList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
    inputBox.value = '';
}

addButton.addEventListener('click', addItem);