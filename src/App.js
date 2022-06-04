import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';



function App() {



  return (
  <Layout>
  <Routes>
    <Route path='/' element={<Homepage />}/>
  </Routes>
  </Layout>
  
  )
  
}

export default App;
