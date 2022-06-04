import { Route, Routes } from 'react-router-dom';
import Question from './components/Question'
import QuestionList from './components/QuestionList'
import Homepage from './pages/Homepage'
import { useState } from 'react'


function App() {



  return (
  <Routes>
    <Route path='/' element={<Homepage />}/>
  </Routes>
  
  )
  
}

export default App;
