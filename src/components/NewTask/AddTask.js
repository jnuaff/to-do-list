// The form to add Tasks

import { useState, useContext } from "react";
import { FilteredDayContext } from "../store/FilteredDayContext";
import { TasksContext } from "../store/TasksContext";
import "./AddTask.css";

const AddTask = (props) => {
  const [enteredDescr, setEnteredDescr] = useState(""); // description
  const [enteredTime, setEnteredTime] = useState(""); // time
  const [enteredDay, setEnteredDay] = useState(""); // day
  const [, setTasks] = useContext(TasksContext); // Get the context from Provider
  const [, setFilteredDay] = useContext(FilteredDayContext); // Get the context from Filter

  const addDescriptionHandler = (event) => {
    setEnteredDescr(event.target.value);
  };

  const addTimeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const addDayHandler = (event) => {
    setEnteredDay(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredDescr === "" || enteredDay === "" || enteredTime === "") {
      alert("please enter a valid value");
      return; // Boolean for empty inputs
    } else {
      addingNewTask(); // to keep submitHandler() leaner
    }
  };

  const addingNewTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        date: enteredDay,
        description: enteredDescr,
        time: enteredTime,
        completed: false,
        id: Math.random().toString(),
      },
    ]);

    setFilteredDay(enteredDay); // set filteredDay automatic to the submitted day
    setEnteredDescr("");
    setEnteredTime("");
    setEnteredDay("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescr}
            onChange={addDescriptionHandler}
          />
        </div>
        <div className="new-task__control">
          <label>Time</label>
          <input type="time" value={enteredTime} onChange={addTimeHandler} />
        </div>
        <div className="new-task__control">
          <label>Choose a day</label>
          <select value={enteredDay} onChange={addDayHandler}>
            <option value="" disabled hidden>
              Select your day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
      </div>
      <div className="new-task__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;
