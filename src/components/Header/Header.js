import { useContext } from "react";
import { UsersContext } from "../store/UsersContext";
import "../Header/Header.css";

const Header = (props) => {
  const [users] = useContext(UsersContext);

  return (
    <header className="main-header">
      <h3>Username: {users}</h3>
      <nav className="nav">
        <ul>
          <li>
            <a onClick={props.onChangeTab} href="/">Finished Tasks</a>
          </li>
          <li>
            <button className="button-nav" onClick={props.onLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
