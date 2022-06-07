import Question from "./Question";
import { useEffect, useState } from "react";
import classes from "./QuestionList.module.css";
import axios from "axios";


function QuestionList(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://questionbox-team-thunder-api.herokuapp.com/api/all_questions/?format=json"
      )
      .then((res) => {
        console.log(res);
        setQuestions(res.data);
      });
  },[]);

  return (
    <div className={classes.list}>
      <h2 className={classes.header}>All Questions</h2>
      {questions && questions.map((question) => (
        <Question
          id={question.id}
          title={question.title}
          author={question.author}
          created_at={question.created_at}
          key={question.id}
        />
      ))}
    
    </div>
  );
}

export default QuestionList;
