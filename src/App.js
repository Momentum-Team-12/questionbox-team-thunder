import Question from './components/Question'
import { useState } from 'react'


function App() {
  const [questions, setQuestions] = useState ([
    {
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
    },
  ])

  return (
    <div className="App">
      <h1>RanDOM Questions</h1>
      {questions.map((question) => (
      <Question 
      title={question.title} 
      description={question.description} 
      created_at={question.created_at}
       />
      ))}
    </div>
  );
}

export default App;
