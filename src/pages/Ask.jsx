import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import classes from './AskForm.module.css';

function Ask(props){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDescription, setEnteredDescription] = useState('')
    console.log("Ask",props)

    function submitHandler(event){
        event.preventDefault();

        axios
        .post(
          "https://questionbox-team-thunder-api.herokuapp.com/api/questions/",
            {
                "title": enteredTitle,
                "description": enteredDescription
            },
           {
            headers: { Authorization: `Token ${props.token}` },
          }
        )
        .then((res) => {
          console.log(res);
          
        });
    }
    const handleChange = (inputType, event) => {
        if (inputType === 'title') {
            setEnteredTitle(event.target.value);
        }
        if (inputType === 'description') {
            setEnteredDescription(event.target.value);
        }
    }

 return props.isLoggedIn ? (
     
     <form className={classes.form} onSubmit={submitHandler} >
         <div className={classes.control}>
             <label htmlFor="title">Question Title </label>
             <input 
             type="text" 
             required id="title" 
             value={props.title} 
             onChange={(e) => handleChange('title', e)} />
         </div>
         <div className={classes.control}>
             <label htmlFor="description">Question Description </label>
             <textarea
             id="description"
             required rows='6'
             value={props.description}
             onChange={(e) => handleChange('description', e)}
            ></textarea>
         </div>
         <div className={classes.actions}>
             <button disabled={!props.isLoggedIn}>Add Question</button>
         </div>
     </form>

 ) : ( <Link to="/register">Want to ask a question? Please create an account.</Link>) 
}

export default Ask;