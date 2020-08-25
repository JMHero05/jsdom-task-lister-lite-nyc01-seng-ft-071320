document.addEventListener("DOMContentLoaded", () => {

  const submit = document.querySelector('#create-task-form');
  const des = document.querySelectorAll('input')[0];
  const sButton = submit.querySelectorAll('input')[1];
  const list = document.querySelector('#tasks');

  
  sButton.addEventListener('click', function(e) {
    e.preventDefault();
    list.target
    let toDoLi = document.createElement('li');
    let listItem = list.appendChild(toDoLi);
    listItem.innerText = des.value;
    
  })
  
});






// let addToDo = function(e) {
//   const sButt = e.target;
//   sButt.append()
// }
// function addTextNode(inputVal) {
//   const list = document.querySelector('#tasks');
//   let toDoLi = document.createElement('li');
//   let listItem = list.appendChild(toDoLi);
//   listItem.innerText = inputVal;
// }

// function addTextNode(text) {
//   // let newText = document.createTextNode(text);
//   const list = document.querySelector('#tasks');


//   let toDoLi = document.createElement('li');
//   let listItem = list.appendChild(toDoLi);
//   listItem.innerText = text;
// }



