import React, { useState, useReducer, useContext } from "react";
import Card from "../UI/Card";
import "../Users/UserLogin.css";
import { UsersContext } from "../store/UsersContext";
import { PasswordsContext } from "../store/PasswordsContext";

function loginReducer(state, action) {
  switch (action.type) {
    case "error": {
      return {
        ...state, // U or P incorrect
        error: true,
        isLoading: false, // behaevour of loading page.
      };
    }
    case "success": {
      return {
        ...state, // formular dissapear and start calendar.
        isLoading: false,
      };
    }

    case "loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
  }
}

const initialState = {
  error: false,
  isLoading: false,
};

const UserLogin = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { error, isLoading } = state;
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [users] = useContext(UsersContext);
  const [passwords] = useContext(PasswordsContext);

  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  let usernameCorrect = users.includes(enteredUsername);
  let passwordCorrect = passwords.includes(enteredPassword);

  const authenticationHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "loading" });
    setTimeout(() => {
      // setTimeout to reproduce the loading behavour.
      if (usernameCorrect && passwordCorrect) {
        loginHandler();
        setEnteredUsername("");
        setEnteredPassword("");
      } else {
        dispatch({ type: "error" });
        setEnteredUsername("");
        setEnteredPassword("");
      }
    }, 1000);
  };

  const loginHandler = () => {
    dispatch({ type: "success" });
    props.onLogin();
  };

  return (
    <div>
      <Card className="login">
        <form className="form" onSubmit={authenticationHandler}>
          <h3 className="text-login">Please, Login!</h3>
          {error && <p className="error">Incorrect password or username</p>}
          <div className="login_controls">
            <div className="login__control">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                value={enteredUsername}
                onChange={addUsernameHandler}
              ></input>
            </div>
            <div className="login__control">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                value={enteredPassword}
                onChange={addPasswordHandler}
              ></input>
            </div>
            <div className="login button" disabled={isLoading}>
              <button type="submit" onClick={authenticationHandler}>
                {isLoading ? "Logging in..." : "Log in"}
              </button>
              <button
                className="button"
                type="button"
                onClick={props.onAddingUser}
              >
                Create User
              </button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default UserLogin;
