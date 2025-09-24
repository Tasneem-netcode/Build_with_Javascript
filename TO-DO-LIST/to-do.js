//add task in to do 
console.log("✅ JS loaded!"); 

let addBtn = document.querySelector("#Addtask");
// let taskInput = document.querySelector(".todo-item");
let taskList = document.querySelector(".todo-list");

//clicking the addbtn a new checkbox item will be appreadred to class task-
addBtn.addEventListener("click" , (e) => {

    //Create new task container
    let newTask = document.createElement("div");
    newTask.classList.add("todo-item");

    //Create checkbox
    let checkbox = document.createElement("input");
    console.log(checkbox);
    checkbox.type = "checkbox";
    // checkbox.classList.add("task-checkbox");

    //Create label
    // let label = document.createElement("label");
    // label.textContent = taskInput.value;
    // label.classList.add("task-label");

    //editable text 
    let Tasktext = document.createElement("span");
    Tasktext.contentEditable = true;
    Tasktext.classList.add("task-text");
    Tasktext.innerText = " ";

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
    taskInput.value = ""; // Clear input field

    //Focus on text so user can start typing 
    Tasktext.focus();
});