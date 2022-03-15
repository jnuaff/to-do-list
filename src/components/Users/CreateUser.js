import "./CreateUser.css";
import Card from "../UI/Card";
import { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { UsersContext } from "../store/UsersContext";
import { PasswordsContext } from "../store/PasswordsContext";

const CreateUser = (props) => {
  const [newEnteredUsername, setNewEnteredUsername] = useState("");
  const [newEnteredPassword, setNewEnteredPassword] = useState("");
  const [users, setUsers] = useContext(UsersContext);
  const [passwords, setPasswords] = useContext(PasswordsContext);


  

  const saveNewEnteredUsername = (event) => {
    setNewEnteredUsername(event.target.value);
    
  };

  const saveNewEnteredPassword = (event) => {
    setNewEnteredPassword(event.target.value);
  };

  const newUsersData = (prevUsers) => {
    setUsers((prevUsers) => [...prevUsers, newEnteredUsername]);
    
    
  };

  const newPasswordsData = (prevPasswords) => {
    setPasswords((prevPasswords) => [...prevPasswords, newEnteredPassword]);
    
  };

  const saveUserData = (event) => {
    event.preventDefault();
    if(newEnteredPassword === '' || newEnteredUsername === '' ) {
      alert('please enter a valid username/password')
    } else {
      
    newPasswordsData();
    newUsersData();
    successHandler();
    }
    


  };

  const successHandler = () => {
    console.log(users);
    console.log(passwords);
    setNewEnteredPassword('');
    setNewEnteredUsername('');
    props.onUserAdded();
  }

  return (
    <Card className="login">
      <form className="form" onSubmit={saveUserData}>
        <h3 className="text-login">Create User</h3>
        <div className="login_controls">
          <div className="login__control">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              value={newEnteredUsername}
              onChange={saveNewEnteredUsername}
            ></input>
          </div>
          <div className="login__control">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              value={newEnteredPassword}
              onChange={saveNewEnteredPassword}
            ></input>
          </div>
          <div className="login button" type="submit" >
            <button type="submit">Create</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default CreateUser;
