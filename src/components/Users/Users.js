import UserLogin from "./UserLogin";
import CreateUser from "./CreateUser";
import { useState } from "react";

const Users = (props) => {
  const [creatingUser, setCreatingUser] = useState(false);

  const startCreatingUserHandler = () => {
    setCreatingUser(true);
  };

  const stopCreatingUserHandler = () => {
      setCreatingUser(false)
  }

  return (
    <div>
      {creatingUser ? (
        <CreateUser onUserAdded={stopCreatingUserHandler}
        onLogin = {props.onUserLogged}
         />
      ) : (
        <UserLogin onAddingUser={startCreatingUserHandler}
        onLogin = {props.onUserLogged} />
        
      )}
    </div>
  );
};

export default Users;
