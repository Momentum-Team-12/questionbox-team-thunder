import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import classes from "./Login.module.css";
import axios from "axios";

const Register = ({ isLoggedIn, setRegisterSuccess, registerSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e) => {
    console.log("making post");
    e.preventDefault();
    setError("");
    console.log(username, password);

    axios
      .post(
        "https://questionbox-team-thunder-api.herokuapp.com/api/auth/users/",
        {
          username: username,
          password: password,
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsRegistered(true);
        setRegisterSuccess(true);
        console.log(isRegistered);
      })
      .catch((e) => setError(e.message));
  };

  if (isRegistered) {
    console.log("Registered!");
    return <Navigate to="/login" />;
  }

  return (
    <div className={classes.control}>
      <h2>Create an Account</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleRegistration}>
        <div className={classes.control}>
          <label htmlFor="username">Add Username </label>
          <div className={classes.control}>
            <input
              type="text"
              id="username"
              className="input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label className="label" htmlFor="password">
            Add Password
          </label>
          <div className={classes.control}>
            <input
              type="password"
              id="password"
              className="input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
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
    </div>
  );
};

export default Register;
