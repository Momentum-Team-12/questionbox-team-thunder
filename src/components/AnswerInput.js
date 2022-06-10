import { useState } from "react";
import axios from 'axios'
import classes from './AnswerInput.module.css';

function AnswerInput(props) {
  const [enteredDescription, setEnteredDescription] = useState('')
  console.log("Answer",props)

  function submitHandler(event){
      event.preventDefault();

      axios
      .post(
        "https://questionbox-team-thunder-api.herokuapp.com/api/questions/${props.id/answers/",
          {
              "description": enteredDescription
          },
         {
          headers: { Authorization : `Token ${props.token}` },
        }
      )
      .then((res) => {
        console.log(res);
        
      });
  }
  const handleChange = (inputType, event) => {
      if (inputType === 'description') {
          setEnteredDescription(event.target.value);
      }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="answer">Add an Answer </label>
        <textarea 
        id="answer" 
        required rows="6" 
        onChange={(e) => handleChange('description', e)}></textarea>
      </div>
      <div className={classes.actions}>
        <button>Submit</button>
      </div>
    </form>
  )  
}

export default AnswerInput;
