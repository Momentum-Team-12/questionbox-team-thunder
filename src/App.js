import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Ask from './pages/Ask';
import Layout from './components/Layout';
import 



function App() {

  return (
  <Layout>
  <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/ask' element={<Ask />}/>
    <Rout path='/questions/:questionPk' element={QuestionDetail token={token} />}/>
  </Routes>
  </Layout>
  
  )
  
}

export default App;
