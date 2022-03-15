import '../UI/TaskDate.css'

const TaskDate = (props) => {
  const day = props.date.toLocaleString("en-US", { weekday: "long" });

  return (

    <div className="task-date">
      <div className="task-date__day">{day}</div>
        
    </div>
  );
}

export default TaskDate;