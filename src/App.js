import useLocalStorageState from 'use-local-storage-state'
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Ask from './pages/Ask';
import Layout from './components/Layout';
import QandA from "./pages/QandA";

function App() {
  const [token, setToken] =  ('reactLibraryToken', '')
  const [username, setUsername] = useLocalStorageState(
  'reactLibraryUsername',
  ''
)
  const setAuth = (username,token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = username && token

  const handleLogout = () => {
    setAuth('','')
  }

  return (
  <Layout>
  <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/ask' element={<Ask />}/>
    <Route path='/login' element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}/>
    <Route path="/question/:id" element={<QandA />} />
  </Routes>
  </Layout>
  
  );

}

export default App;
