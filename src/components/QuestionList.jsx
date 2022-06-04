import Question from './Question'
import { useState } from 'react'
import classes from './QuestionList.module.css'

function QuestionList(props) {
    const [questions, setQuestions] = useState([])


return (
    <div className={classes.list}>
      <h2 className={classes.header}>All Questions</h2>
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