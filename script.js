// const formEl = document.querySelector(".form")

// const inputEl = document.querySelector(".input")

// console.log(inputEl.value);

// const ulEl = document.querySelector(".list")

// formEl.addEventListener("submit", (event)=>{
//    event.preventDefault();
//    toDoList()
// })

// function toDoList(){
//     let newTask = inputEl.value;
//     const liEl = document.createElement("li");
//     liEl.innerText = newTask;
//     ulEl.appendChild(liEl)
// }


// two

// const formEl = document.querySelector(".form");
// const inputEl = document.querySelector(".input");
// const ulEl = document.querySelector(".list");

// function toDoList() {
//   const newTask = inputEl.value.trim();
//   if (newTask !== "") {
//     try {
//       const liEl = document.createElement("li");
//       liEl.innerText = newTask;
//       ulEl.appendChild(liEl);
//       inputEl.value = "";
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const checkBtnEl = document.creatElement
//   ("div")

//   checkBtnEl.innerHTML = `<i class="fas fa-check-square">`

//   liEl.appendChild(checkBtnEl)
// }

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   toDoList();
// });

// three

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"))

list.forEach(task=>{
    toDoList(task)
})


function toDoList(task) {
  const newTask = inputEl.value.trim();
  if (newTask !== "") {
    try {
      const liEl = document.createElement("li");
      liEl.innerText = newTask;
      ulEl.appendChild(liEl);
      inputEl.value = "";

      const checkBtnEl = document.createElement("div");
      checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
      liEl.appendChild(checkBtnEl);

      const trashBtnEl = document.createElement("div")
      trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
      liEl.appendChild(trashBtnEl);

      checkBtnEl.addEventListener("click", ()=>{
          liEl.classList.toggle("checked")
      })

      updateLocalStorage()

      trashBtnEl.addEventListener("click", ()=>{
           liEl.remove();
      });

      updateLocalStorage()


    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Please enter a task.");
  }
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li")
    list = []
    liEls.forEach(liEl=>{
        list.push({
            name:liEl.innerText,
            checked: liEl.classList.
            contains("checked")

        })
    })

    localStorage.setItem("list", JSON.stringify(list))
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});