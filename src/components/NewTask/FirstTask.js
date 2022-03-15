// Boolean from the begining to start adding task.
import React, { useState } from "react";

import AddTask from "./AddTask";
import "./FirstTask.css";

const FirstTask = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

 
  return (
    <div className="new-task">
      {!isEditing && <button onClick={startEditingHandler}>New Task</button>}
      {isEditing && (
        <AddTask
        onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default FirstTask;