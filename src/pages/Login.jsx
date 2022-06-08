import { useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import classes from './Login.module.css';
import axios from "axios";



function Login (setAuth, isLoggedIn) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState("");

    function submitHandler(event){
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const loginData= {
            username: enteredUsername,
            password: enteredPassword,
        }
        axios
        .post(
          "https://questionbox-team-thunder-api.herokuapp.com/api/auth/token/login/",
          loginData
        )
        .then((res) => {
            setToken(loginData, res.data.auth_token)  
        });  
        
        
    }

return(
    loggedIn ? <Navigate to="/" /> :

        <form onSubmit={submitHandler}>
 
        <h2>Login</h2>

        
         <div className={classes.control}>
             <label htmlFor="username">Username </label>
             <input type="text" required id="username" ref={usernameInputRef} />
         </div>
         <div className={classes.control}>
             <label htmlFor="password">Password </label>
             <input type="password" required id="password" ref={passwordInputRef} />
         </div>
         <div className={classes.actions}>
             <button>Submit</button>
         </div>
     <ul>
        <li>
        <Link to='/register'>Create an account?</Link>
        </li>
    </ul>
    </form>
    )
}


export default Login;