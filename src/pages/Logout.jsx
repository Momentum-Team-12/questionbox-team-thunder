import { Navigate } from "react-router-dom";
import classes from "./Login.module.css";


export const Logout = ({ setAuth, setToken, setUsername, isLoggedIn }) => {
  const setLogout = () => {
    setUsername("");
    setToken("");
    setAuth("", "");
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />; 
     
  }

  return (
    <ul>
      <h1>Are you sure you want to log out?</h1>
      <div className={classes.actions}>
        <button onClick={() => setLogout()}>Yes, Log me out</button>
      </div>
    </ul>
  );
};

export default Logout;