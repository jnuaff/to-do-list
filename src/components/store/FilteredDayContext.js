// This context is to put a default value for the filter (monday)
// Then i will use it fro TaskList (assignin a default value)
// And use it for new task, to get the day of the new task and
// assign it as a new value.

import React, {useState, createContext} from 'react';

export const FilteredDayContext = createContext();

export const FilteredDayProvider = (props) => {
    const [filteredDay, setFilteredDay] = useState("Monday");
    

      return(
          <FilteredDayContext.Provider value={[filteredDay, setFilteredDay]}> 
              {props.children}
          </FilteredDayContext.Provider>
      )
}