import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import classes from './AnswerInput.module.css';

function AnswerInput(props) {
  const titleInputRef = useRef();
  const answerInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAnswer = answerInputRef.current.value;

    const answerData = {
      title: enteredTitle,
      description: enteredAnswer,
    };
    axios
      .post(
        "https://questionbox-team-thunder-api.herokuapp.com/api/answers/", 
        answerData 
      )
      .then((res) => {
        console.log(res);
      })
  }
  return props.isLoggedIn ? (
    <form className="form" onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="answer">Add an Answer </label>
        <textarea id="answer" required rows="6" ref={answerInputRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button>Submit</button>
      </div>
    </form>
  ): (<Link to="/register">Want to provide an answer? Please create an account.</Link>) 
}

export default AnswerInput;
