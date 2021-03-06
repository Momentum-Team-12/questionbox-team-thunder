import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestionDetail from "../components/QuestionDetail";
import Answer from "../components/Answer";
import AnswerInput from "../components/AnswerInput";

function QandA() {
  let { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://questionbox-team-thunder-api.herokuapp.com/api/questions/${id}`
      )
      .then((res) => {
        console.log(res);
        setQuestion(res.data);
      });
}, []);

  return (
    <>
      {question && <QuestionDetail {...question} />}
      {question && question.answers.length > 0 && question.answers.map((answerId) => <Answer id={answerId} />)}
    <AnswerInput />
    </>
  );
}

export default QandA;