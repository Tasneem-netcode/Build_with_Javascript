let addItemButton = document.querySelector("#add-item");
let itemList = document.querySelector("#item-list");

addItemButton.addEventListener("click", (e) => {
    const newItemText = document.querySelector("#new-item").value;
    if (newItemText.trim() === "") {
        alert("Please enter a valid item.");
        return; // Stop the function if input is invalid
    }else{
        document.querySelector("#new-item").value = ""; 
    }
    // Create a new list item
    if(newItemText){
        let newItem = document.createElement("li");
        newItem.textContent = newItemText;
        // Append the new item to the list 
        itemList.appendChild(newItem);
    }

});