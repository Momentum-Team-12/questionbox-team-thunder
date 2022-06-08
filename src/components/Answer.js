import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Answer = (props) => {
  const [answer, setAnswer] = useState(null);
  console.log(props)
  
  useEffect(() => {
    axios
      .get(`https://questionbox-team-thunder-api.herokuapp.com/api/answers/${props.id}`)
      .then((res) => {
        console.log(res.data);
        setAnswer(res.data);
      });
  }, []);

  return answer ? (
        <div>
          <p>{answer.description}</p>
          <p>{answer.author}</p>
          <p>{answer.created_at}</p>
        </div>
  ) : '';
};
export default Answer;
