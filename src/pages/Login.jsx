import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Login.module.css';

function Login ({ setAuth, isLoggedIn }) {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        setError('')

        axios.post('https://questionbox-team-thunder-api.herokuapp.com/api/auth/token/login/', {
            username: username,
            password: password,
        })
        .then((res) => {
            setAuth(username, res.data.auth_token)
        }
        )
        .catch((event) => setError(event.message))
    }
    if (isLoggedIn) {
        return <Navigate to="/" replace={true} />
    }

return(
        <form onSubmit={handleLogin}>
        <h2>Login</h2>
         <div className={classes.control}>
             <label htmlFor="username">Username </label>
             <input type="text" required id="username" onChange={(event) => setUsername(event.target.value)} />
         </div>
         <div className={classes.control}>
             <label htmlFor="password">Password </label>
             <input type="password" required id="password" onChange={(event) => setPassword(event.target.value)} />
         </div>
         <div className={classes.actions}>
             <button>Login</button>
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