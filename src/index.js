document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form')
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = e.target['new-task-description'].value
    const taskLi = document.createElement('li')
    taskLi.textContent = task
    const button = document.createElement('button')
    button.textContent = 'X'
    taskLi.append(button)
    button.addEventListener('click', function (e) {
      const taskLi = e.target.parentElement
      taskLi.remove()
    })
    const tasks = document.getElementById('tasks')
    tasks.append(taskLi)
  })













  // const submit = document.querySelector('#create-task-form');
  // const des = document.querySelectorAll('input')[0];
  // const sButton = submit.querySelectorAll('input')[1];
  // const list = document.querySelector('#tasks');
  // const libutt = document.querySelector("#tasks > li > button");
  // const listItem = document.querySelector('#tasks > li')
  // const button = document.getElementsByTagName(button)

  // sButton.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   list.target
  //   let toDoLi = document.createElement('li');
  //   let listItem = list.appendChild(toDoLi);
  //   listItem.innerHTML = `
  //   ${des.value}
  //   <button data-description="${des.value}">X</button>
  //   `
  // })

  // This is where we tried to implement instructor solution,
  // but did not completely work with the solution we had for
  // initial deliverables.
  // button.addEventListener('click', function (e) {
  //   const taskLi = e.target.parentElement
  //   taskLi.remove()
  // })

  // libutt.forEach(addEventListener('click', function (e) {
  //     const listItem = e.target;
  //     if (libutt[])
  //   })


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