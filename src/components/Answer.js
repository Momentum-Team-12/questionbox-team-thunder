import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Answer = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get("https://questionbox-team-thunder-api.herokuapp.com/api/answers")
      .then((res) => {
        console.log(res.data);
        setAnswers(res.data);
      });
  }, []);

  return (
    <>
      {answers.map((answer) => (
        <div>
          <p>{answer.description}</p>
          <p>{answer.author}</p>
          <p>{answer.created_at}</p>
        </div>
      ))}
    </>
  );
};
export default Answer;
