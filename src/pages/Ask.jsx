import { useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import classes from './AskForm.module.css';

function Ask(props){
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    console.log(props)

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const questionData= {
            title: enteredTitle,
            description: enteredDescription,
        };

        axios
        .post(
          "https://questionbox-team-thunder-api.herokuapp.com/api/questions",
          questionData
        )
        .then((res) => {
          console.log(res);
          
        });
    }
    

 return props.isLoggedIn ? (
     
     <form className={classes.form} onSubmit={submitHandler} >
         <div className={classes.control}>
             <label htmlFor="title">Question Title </label>
             <input type="text" required id="title" ref={titleInputRef} />
         </div>
         <div className={classes.control}>
             <label htmlFor="description">Question Description </label>
             <textarea
             id="description"
             required rows='6'
            ref={descriptionInputRef}
            ></textarea>
         </div>
         <div className={classes.actions}>
             <button disabled={!props.isLoggedIn}>Add Question</button>
         </div>
     </form>

 ) : ( <Link to="/register">Want to ask a question? Please create an account.</Link>) 
}

export default Ask;