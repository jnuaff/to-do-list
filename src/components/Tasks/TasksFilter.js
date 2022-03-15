import "./TasksFilter.css";

const TasksFilter = (props) => {


  const dropdownChangeHandler = (event) => { // connect to taskslist
    props.onChangeFilter(event.target.value); // get the selected day and pass it trough props
    
  };



  return (
    <div className="tasks-filter">
      <div className="tasks-filter__control">
        <label>Filter by day</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
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
  );
};

export default TasksFilter;