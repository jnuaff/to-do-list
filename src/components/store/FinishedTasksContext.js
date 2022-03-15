import React, {useState, createContext} from 'react';

export const FinishedTasksContext = createContext();

export const FinishedTasksProvider = (props) => {
    const [finishedTasks, setFinishedTasks] = useState([]);
    

      return(
          <FinishedTasksContext.Provider value={[finishedTasks, setFinishedTasks]}> 
              {props.children}
          </FinishedTasksContext.Provider>
      )
}