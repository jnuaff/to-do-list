import Card from '../UI/Card'
import "./TaskItem.css";
import TaskDate from '../UI/TaskDate';

const TaskItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  const finishHandler = () => {
    props.onFinish(props.id)
  }

  return (
    <Card className="task-item">
    <TaskDate date={props.date}/>
      <div className="task-item__description">
        <h2>{props.description}</h2>
        <div className="task-item__time">{props.time}</div>
        <button className="task-item__delete" onClick={deleteHandler}>Delete</button>
        <button className="task-item__finish" onClick={finishHandler}>Finish</button>
      </div>
    </Card>
  );
}

export default TaskItem;

