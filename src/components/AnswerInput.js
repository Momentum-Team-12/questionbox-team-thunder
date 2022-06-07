import { useRef } from "react";
import "../pages/AskForm.module.css";

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
    props.onAddQuestion(answerData);
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor="title">Question Title </label>
        {/* <input type="text" required id="title" ref={titleInputRef} /> */}
      </div>
      <div className="control">
        <label htmlFor="answer">Answer Description </label>
        <textarea id="answer" required rows="6" ref={answerInputRef}></textarea>
      </div>
      <div className="actions">
        <button>Add Answer</button>
      </div>
    </form>
  );
}

export default AnswerInput;
