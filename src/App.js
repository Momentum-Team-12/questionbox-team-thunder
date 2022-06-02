import { useState } from "react";
import Answer from "./components/Answer";

function App() {
  const [answers, setAnswers] = useState([
    {
      pk: 1,
      body: "I think its a cardinal, can anyone confirm?",
      created_at: "June 1, 2022",
    },
    {
      pk: 1,
      body: "I must know.",
      created_at: "June 2, 2022",
    },
  ]);

  return (
    <>
      {answers.map(Answer)}
      <Answer body={Answer.body} created_at={Answer.created_at} />
    </>
  );
}

export default App;
