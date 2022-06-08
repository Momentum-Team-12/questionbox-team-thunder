import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import classes from './AskForm.module.css';

function Ask(){
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();

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

 return(
     <form className={classes.form} onSubmit={submitHandler}>
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
             <button>Add Question</button>
         </div>
     </form>

 )   
}

export default Ask;