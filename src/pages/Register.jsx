import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import axios from "axios";

function Register() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(loginData);
    axios
      .post(
        "https://questionbox-team-thunder-api.herokuapp.com/api/auth/users/",
        loginData
      )
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <form onSubmit={submitHandler}>
    <h2>Create an Account</h2>
      <div className={classes.control}>
        <label htmlFor="username">Add Username </label>
        <input type="text" required id="username" ref={usernameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Add Password </label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Sign Up</button>
      </div>
      <ul>
        <li>
          <Link to="/login">Have an account? Login</Link>
        </li>
      </ul>
    </form>
  );
}

export default Register;
