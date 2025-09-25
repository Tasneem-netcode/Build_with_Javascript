//add task in to do
console.log("✅ JS loaded!");

let addBtn = document.querySelector("#Addtask");
let taskList = document.querySelector(".todo-list");


function createTask(initialText = ""){
    //Create new task container
    let newTask = document.createElement("div");
    newTask.classList.add("todo-item");
  
    //Create checkbox
    let checkbox = document.createElement("input");
    console.log(checkbox);
    checkbox.type = "checkbox";
  
    //editable text
    let Tasktext = document.createElement("span");
    Tasktext.contentEditable = true;
    Tasktext.classList.add("task-text");
    Tasktext.dataset.placeholder = "Enter your task here...";
    Tasktext.innerText = initialText;

   //Handle Enter key to save and create new task
    Tasktext.addEventListener("keydown", (e) =>{
        if(e.key === "Enter"){
            e.preventDefault(); // Prevent newline
            if(Tasktext.innerText.trim() !== ""){
                createTask(""); // Create new task
                Tasktext.blur(); // Remove focus from current task
            }
        }
    });

// Show placeholder when empty
    Tasktext.addEventListener("blur", () => {
        if (Tasktext.innerText.trim() === "") {
            Tasktext.innerText = "";
        }
    });

  //Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(newTask);
  });

  //Append checkbox, label, and delete button to new task container
  newTask.appendChild(checkbox);
  newTask.appendChild(Tasktext);
  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);

  //Focus on text so user can start typing
  Tasktext.focus();
}

//Add task button event listener
addBtn.addEventListener("click", () => {
    createTask();
});

//Completed task - when checkbox is checked the text will be strikethrough
taskList.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    let taskItem = e.target.parentElement;
    let taskText = taskItem.querySelector(".task-text");
    taskText.style.textDecoration = e.target.checked ? "line-through" : "none";
  }
});


//Filter buttons
let filterAllBtn = document.querySelectorAll(".filter-button");
filterAllBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let filter = button.getAttribute("data-filter"); //get the value of data-filter attribute
    let tasks = taskList.querySelectorAll(".todo-item");

    tasks.forEach((task) => {
      let checkbox = task.querySelector("input[type='checkbox']");

      if (filter === "active" && checkbox.checked) {
        task.style.display = "none";
      } else if (filter === "completed" && !checkbox.checked) {
        task.style.display = "none";
      } else {
        task.style.display = "flex";
      }
    });
  });
});

console.log(location.href);
console.log(navigator.userAgent);

//Store tasks in local storage
window.addEventListener("beforeunload", () => {
    let tasks = [];
   let taskItems =  document.querySelectorAll(".todo-item");
   taskItems.forEach(item => {
    let text = item.querySelector(".task-text").innerText;
    let completed = item.querySelector("input[type='checkbox']").checked;
    tasks.push({text, completed});
   });
   localStorage.setItem("tasks", JSON.stringify(tasks));
});

//Load tasks from local storage
window.addEventListener("load", () => {
    taskList.innerHTML = ""; // Clear existing tasks
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTask(task.text);// Create task with saved text
        let lastTask = taskList.lastChild;
        let checkbox = lastTask.querySelector("input[type='checkbox']");
        checkbox.checked = task.completed; // Set checkbox state
        let taskText = lastTask.querySelector(".task-text");
        taskText.style.textDecoration = task.completed ? "line-through" : "none"; // Set text decoration
        taskText.blur(); // Remove focus from the task


    });

});

//Initial load of tasks
window.dispatchEvent(new Event("load"));

//Add background color for button when clicked
let buttons = document.querySelectorAll(".filter-button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.style.backgroundColor = ""); // Reset all buttons
        button.style.backgroundColor = "#b493dcff"; // Change to desired color on click
    });
});