import React, { useState } from "react"
import "./index.css"

// Define a functional component named ToDoList
function ToDoList() {

    // Define a state variable named tasks using the useState hook
    // The initial value of tasks is an empty array
    const [tasks, setTasks] = useState([]);
    
    // Define a state variable named newTask using the useState hook
    // The initial value of newTask is an empty string
    const [newTask, setNewTask] = useState("");

    // Define a function named handleInputChange that takes an event object as an argument
    // This function updates the value of newTask with the value of the input field
    function handleInputChange(event) {
        // Set newTask to the value of the input field
        setNewTask(event.target.value);
    }

    // Define a function named addTask that does not take any arguments
    // This function checks if newTask is not empty and adds it to the tasks array
    function addTask(){

        // Check if newTask is not empty
        if (newTask.trim() !== "") {
        // Create a new array by spreading the elements of tasks and adding newTask to the end
        setTasks(t => [...t, newTask]);
        // Set newTask to an empty string
        setNewTask("");
        }
    }

    // Define a function named deleteTask that takes an index as an argument
    // This function creates a new array by filtering out the element at the specified index
    function deleteTask(index){
        // Create a new array by filtering out the element at the specified index
        const updatedTasks = tasks.filter((_, i) => i !== index);
        // Update the tasks state with the new array
        setTasks(updatedTasks);
    }

    // Define a function named moveTaskUp that takes an index as an argument
    // This function moves the task at the specified index up one position
    function moveTaskUp(index){
        // Check if the index is greater than 0
        if (index > 0) {
            // Create a new array by copying the elements of tasks
            const updatedTasks = [...tasks];
            // Swap the elements at the specified index and the element before it
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            // Update the tasks state with the new array
            setTasks(updatedTasks);
        }
    }

    // Define a function named moveTaskDown that takes an index as an argument
    // This function moves the task at the specified index down one position
    function moveTaskDown(index){
        // Check if the index is less than the length of tasks minus 1
        if (index < tasks.length - 1) {
            // Create a new array by copying the elements of tasks
            const updatedTasks = [...tasks];
            // Swap the elements at the specified index and the element after it
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            // Update the tasks state with the new array
            setTasks(updatedTasks);
        }
    }

    // Return JSX code that represents the To Do List UI
    return (
    <div className="ToDoList">

        <h1>To Do List</h1>

        <div>
            <input 
            type="text" 
            placeholder="Enter a task..."
            // Set the value of the input field to the value of newTask
            value={newTask}
            // Call the handleInputChange function when the value of the input field changes
            onChange={handleInputChange}/>
            <button 
            className="add-button"
            // Call the addTask function when the button is clicked
            onClick={addTask}>Add Task</button>
        </div>

        <ol>
            {// Map over the tasks array and render a list item for each task
            tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                    type="button" class="btn btn-success"
                        // Call the deleteTask function with the index of the task when the button is clicked
                        onClick={() => deleteTask(index)}>
                        🗑️
                    </button>
                    <button 
                        className="move-button"
                        // Call the moveTaskUp function with the index of the task when the button is clicked
                        onClick={() => moveTaskUp(index)}>
                        ⬆️
                    </button>
                    <button 
                        className="move-button"
                        // Call the moveTaskDown function with the index of the task when the button is clicked
                        onClick={() => moveTaskDown(index)}>
                        ⬇️
                    </button>
                </li>
            )}
        </ol>

    </div>);
}

export default ToDoList
