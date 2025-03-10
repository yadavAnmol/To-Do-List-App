// Select important elements
const inputField = document.querySelector(".input");
const addButton = document.querySelector(".add");
const showButton = document.querySelector(".show");
const editButton = document.querySelector(".edit");
const exitButton = document.querySelector(".exit");

// Create an array to store tasks
let tasks = [];

// Function to add a new task
addButton.addEventListener("click", () => {
    let task = inputField.value.trim(); // Get input value and remove extra spaces

    if (task) {
        tasks.push(task); // Add task to the list
        alert("Task Added: " + task);
        inputField.value = ""; // Clear input field after adding
    } else {
        alert("Please enter a valid task!"); // Show error if input is empty
    }
});

// Function to show all tasks
showButton.addEventListener("click", () => {
    if (tasks.length > 0) {
        alert("Your Tasks:\n" + tasks.join("\n")); // Show tasks in an alert box
    } else {
        alert("No tasks found!");
    }
});

// Function to edit a task
editButton.addEventListener("click", () => {
    let oldTask = prompt("Enter the task you want to edit:");

    if (oldTask && tasks.includes(oldTask)) {
        let newTask = prompt("Enter the new task:");
        
        if (newTask) {
            let index = tasks.indexOf(oldTask);
            tasks[index] = newTask; // Replace old task with new one
            alert("Task updated successfully!");
        } else {
            alert("New task cannot be empty!");
        }
    } else {
        alert("Task not found!");
    }
});

// Function to exit (clear tasks)
exitButton.addEventListener("click", () => {
    tasks = []; // Clear all tasks
    alert("All tasks cleared!");
});
