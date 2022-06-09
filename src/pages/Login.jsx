import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import classes from "./Login.module.css";
import axios from "axios";

function Login({ setAuth, isLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    axios
      .post(
        "https://questionbox-team-thunder-api.herokuapp.com/api/auth/token/login/",
        {
          username: username,
          password: password,
        }
      )
      .then((res) => {
        setAuth(username, res.data.auth_token);
      })
      .catch((e) => setError(e.message));
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className={classes.control}>
      <h2>Log In</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className={classes.control}>
          <label htmlFor="username">Username </label>
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
            Password
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
          <button>Submit</button>
        </div>
        <ul>
          <li>
            <Link to="/register">Need to create an account?</Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Login;
