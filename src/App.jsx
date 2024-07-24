import { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Quiz from "./components/Quiz";

function App() {
  const [quizEnded, setQuizEnded] = useState("");
  const [answer, setAnswer] = useState([]);
  const [s, sets] = useState("");
  console.log(answer);
  function handleQuiz() {
    setQuizEnded("true");
  }
  return (
    <>
      <Header />
      {quizEnded === "" && (
        <div className="start"><button id="start" onClick={()=>setQuizEnded("false")}>
          Take the shot!
              </button>
              </div>
      )}
      {quizEnded === "true" && <Summary selectedAnswers={answer} />}
      {quizEnded === "false" && (
        <Quiz handleQuiz={handleQuiz} setAnswer={setAnswer} />
      )}
    </>
  );
}

export default App;
