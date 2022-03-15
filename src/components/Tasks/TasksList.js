// Render the list from the provider.
import { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksFilter from "./TasksFilter";
import "./TasksList.css";
import { TasksContext } from "../store/TasksContext";
import { FilteredDayContext } from "../store/FilteredDayContext";

const TasksList = () => {
  const [tasks, setTasks] = useContext(TasksContext);


  const [filteredDay, setFilteredDay] = useContext(FilteredDayContext);

  const filterChangeHandler = (selectedDay) => {
    setFilteredDay(selectedDay); // gives the value from TasksFilter to filtered date.
  };

  const deleteTaskHandler = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTaskHandler = (taskId) => {
    // will get the task and change
    setTasks(
      tasks.map((task) => {
        // the boolean 'completed'
        if (task.id === taskId) {
          //gets task
          return {
            ...task,
            completed: !task.completed, // makes the oposite.
          };
        }
        return task; // return exactly same task but with 'completed' changed.
      })
    );
  };

  const filteredTasks = tasks.filter((task) => { // set the tasks to filter
    if(task.date === filteredDay) { // get the day, and inside the day 
      return task.completed === false  // get only the ones that are false
    } else {
      return task.date === filteredDay
    }
  });



  let tasksContent = ( // create condition
    <h3 className="tasks-list__fallback">
      Hey! it look's like you're free this day
    </h3>
  );

  if (filteredTasks.length > 0) {
    tasksContent = filteredTasks.map((task) => (
      
      <TaskItem
        date={task.date}
        setFilteredDay={task.date}
        description={task.description} //render TaskItem through props
        time={task.time}
        key={task.id}
        isComplete={task.completed}
        onDelete={() => {
          deleteTaskHandler(task.id);
        }}
        onFinish={() => {
          completeTaskHandler(task.id);
        }}
      />
    ));
  }

  return (
    // the composition of this TasksList it's a the if condition
    // and the filter.
    // {taskContent} would be in this case or a h3 or the list render
    <div className="items">
      <TasksFilter
        selected={filteredDay} // filteredDay from addTask or onChangeFilter from user
        onChangeFilter={filterChangeHandler}
      />
      {tasksContent}
    </div>
  );
};

export default TasksList;
