import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Question from "./components/Question";
import Ask from "./pages/Ask";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/QandA" element={<Question />} />
        {/* <Route path='/QandA' element={<Answer />}/>
    <Route path='/QandA' element={<AnswerInput />}/> */}
      </Routes>
    </Layout>
  );
}

export default App;
