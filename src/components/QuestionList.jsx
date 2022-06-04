import Question from './Question'
import { useState } from 'react'

function QuestionList(props) {
    const [questions, setQuestions] = useState([])


return (
    <div className="App">
      <h1>RanDOM Questions</h1>
      {props.questions.map((question) => (
      <Question 
      title={question.title} 
      description={question.description} 
      created_at={question.created_at}
       />
      ))}
    </div>
  );
}

  export default QuestionList;