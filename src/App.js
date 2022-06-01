import { Route, Routes } from "react-router-dom";
import Questions from "./components/questions";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/questions" element={<Questions />} />
    </Routes>

    // <>
    // <div className="App">
    //  <h1 className="text-3xl font-bold">
    //     Hello world!
    //  </h1>
    // </div>
    // </>
  );
}

export default App;
