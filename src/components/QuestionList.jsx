import Question from "./Question";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./QuestionList.module.css";
import axios from "axios";



function QuestionList(props) {
  const [questions, setQuestions] = useState([]);
  let { search } = useParams();

  useEffect(() => {
    const params = new URLSearchParams({
      format: "json"
    })
    if (search) params.search=search;
    const requestUrl =  `https://questionbox-team-thunder-api.herokuapp.com/api/all_questions/?${params.toString()}`
    console.log(requestUrl)
    axios
      .get( 
        requestUrl
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
