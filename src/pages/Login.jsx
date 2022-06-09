import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import axios from "axios";



function Login (props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

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
          console.log(res);
        });  

        
    }

return(
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
        <Link to='/register'>Sign Up</Link>
        </li>
    </ul>
    </form>
    )
}


export default Login;