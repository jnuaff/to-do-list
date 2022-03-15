import { useContext } from "react";
import "./TasksFinished.css";
import TaskItem from "./TaskItem";
import { TasksContext } from "../store/TasksContext";

const TasksFinished = () => {
  const [tasks,] = useContext(TasksContext)

  const completedTasks = tasks.filter((task) => {
    return task.completed === true;
          
  });

  let finishedTasks = ( // create condition
    <h3 className="finished-tasks-list__fallback">
      No tasks finished this week :(
    </h3>
  );

  if (completedTasks.length > 0) {
    finishedTasks = completedTasks.map((task) => (
      
      <TaskItem
        date={task.date}
        setFilteredDay={task.date}
        description={task.description} //render TaskItem through props
        time={task.time}
        key={task.id}
        isComplete={task.completed}
      />
    )); }


  return (
    <div className="finished-items">
     {finishedTasks}
    </div>
  );
};

export default TasksFinished;
