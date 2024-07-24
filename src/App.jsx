import { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Quiz from "./components/Quiz";

function App() {
    const [quizEnded, setQuizEnded] = useState(false);
    const [answer, setAnswer] = useState([])
    const [s, sets] = useState("");
    console.log(answer);
    function handleQuiz() {
        setQuizEnded(true);
    }
  return (
    <>
      <Header />
      {quizEnded ? <Summary selectedAnswers={answer} /> : <Quiz handleQuiz={handleQuiz} setAnswer={setAnswer} />}
    </>
  );
}

export default App;
