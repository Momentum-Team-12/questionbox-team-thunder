import NavBar from './components/NavBar'
import QuestionList from './components/QuestionList'
import Question from './components/Question'
import { useState } from 'react'


function App() {
  const [questions, setQuestions] = useState ([
    {
      pk: 1,
      title: 'What is NC state bird?',
      body: 'I think its a cardinal, can anyone confirm?',
      created_at:'June 1, 2022'
    },
    {
      pk: 1,
      title: 'What genre of music is the Rolling Stones?',
      body: 'I must know.',
      created_at:'June 2, 2022'
    },
  ])

  return (
    <div className="App">
      <NavBar />
      {questions.map((QuestionList))}
      <QuestionList title={QuestionList.title} body={QuestionList.body} />
    </div>
  );
}

export default App;
