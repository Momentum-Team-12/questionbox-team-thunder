import React from 'react'
import QuestionList from "../components/QuestionList"

function Homepage (){
    const questiondummy =
  [{
    pk: 1,
    title: 'What is NC state bird?',
    description: 'I think its a cardinal, can anyone confirm?',
    created_at:'June 1, 2022'
  },
  {
    pk: 1,
    title: 'What genre of music is the Rolling Stones?',
    description: 'I must know.',
    created_at:'June 2, 2022'
  }];

return (

    <QuestionList questions={questiondummy} />

)
}



export default Homepage;