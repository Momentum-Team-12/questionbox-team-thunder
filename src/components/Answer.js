import React from "react";
import { useState, useEffect } from "react";

const Answer = (props) => {
  const [answer, setAnswer] = useState([]);

  return (
    <>
      <p>{props.description}</p>
      <p>{props.author}</p>
      <p>{props.created_at}</p>
    </>
  );
};

export default Answer;
