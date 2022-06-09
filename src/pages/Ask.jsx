import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import classes from './AskForm.module.css';

function Ask(props){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDescription, setEnteredDescription] = useState('')
    console.log(props)

    function submitHandler(event){
        event.preventDefault();

        axios
        .post(
          "https://questionbox-team-thunder-api.herokuapp.com/api/questions",
          
            {
                "title": enteredTitle,
                "description": enteredDescription
            }
          , {
            headers: { Authorization: `token ${props.token}` },
          }
        )
        .then((res) => {
          console.log(res);
          
        });
    }
    

 return props.isLoggedIn ? (
     
     <form className={classes.form} onSubmit={submitHandler} >
         <div className={classes.control}>
             <label htmlFor="title">Question Title </label>
             <input type="text" required id="title"  />
         </div>
         <div className={classes.control}>
             <label htmlFor="description">Question Description </label>
             <textarea
             id="description"
             required rows='6'
           
            
            ></textarea>
         </div>
         <div className={classes.actions}>
             <button disabled={!props.isLoggedIn}>Add Question</button>
         </div>
     </form>

 ) : ( <Link to="/register">Want to ask a question? Please create an account.</Link>) 
}

export default Ask;