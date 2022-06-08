import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
import AnswerInput from "../components/AnswerInput";

function QandA (){
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
    {question && <Question {...question} />}
    <Answer />
    <AnswerInput />
    </>
    );
    }
    
export default QandA;



