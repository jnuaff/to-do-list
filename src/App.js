import { useState } from "react";
import "./App.css";
import { TasksProvider } from "./components/store/TasksContext";
import { UsersProvider } from "./components/store/UsersContext";
import { PasswordsProvider } from "./components/store/PasswordsContext";
import { FilteredDayProvider } from "./components/store/FilteredDayContext";
import FirstTask from "./components/NewTask/FirstTask";
import { useEffect } from "react";
import TasksList from "./components/Tasks/TasksList";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import TasksFinished from "./components/Tasks/TasksFinished";

const App = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [showingTasksFinished, setShowingTasksFinished] = useState(false)

  const userLoggedHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setUserLogged(true);
  };

  const userLogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setUserLogged(false);
  };

  useEffect(() => {
    const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInformation === "1") {
      setUserLogged(true);
    }
  }, []);

  const changeTabHandler = (event) => {
    event.preventDefault();
    setShowingTasksFinished(!showingTasksFinished);
  }

  return (
    <TasksProvider>
      <FilteredDayProvider>
        <UsersProvider>
          <PasswordsProvider>
            <div className="App">
              {!userLogged && (
                <Users
                  onUserLogged={userLoggedHandler}
                  onLogout={userLogoutHandler}
                />
              )}

              {userLogged && ( // If user logged from userLogin.js is true, then show everything.
                <>
                  <main>
                    <Header onLogout={userLogoutHandler} onChangeTab={changeTabHandler} />
                    {!showingTasksFinished && (
                      <div>
                        <FirstTask />
                        <TasksList />
                      </div>
                    )}

                    {showingTasksFinished && <TasksFinished />}
                  </main>
                </>
              )}
            </div>
          </PasswordsProvider>
        </UsersProvider>
      </FilteredDayProvider>
    </TasksProvider>
  );
}

export default App;
