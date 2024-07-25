import { useEffect, useRef, useState } from "react";
import questions from "../questions";
import Progress from "./Progress";

let isCorrect = false;
export default function Quiz({ handleQuiz, setAnswer }) {
  const [qcount, setQCount] = useState(1);
  const [selected, setSelected] = useState(-1);
  const [color, setColor] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const { id, text, answers, correct } = questions[qcount - 1];
  useEffect(() => {
    console.log("shuffled");
    setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
  }, [answers]);

  function handleClick(ans, shuffledAnswers, index) {
    setSelected(index);
    setAnswer((prev) => {
      const update = [...prev];
      if (update.length === 0) {
        return [ans];
      }
      const popped = update[update.length - 1];
      if (shuffledAnswers.includes(popped)) {
        update[update.length - 1] = ans;
        return [...update];
      }
      return [...update, ans];
    });
    isCorrect = correct === ans;
  }

  function handleColor() {
    isCorrect ? setColor("correct") : setColor("wrong");
  }

  return (
    <div id="quiz">
      <section id="question">
        <Progress
          setQCount={setQCount}
          qcount={qcount}
          handleQuiz={handleQuiz}
          onColor={handleColor}
          setColor={setColor}
          setSelected={setSelected}
          setAnswer={setAnswer}
        />
        <h2>{text}</h2>
      </section>
      <section>
        <ul id="answers">
          {shuffledAnswers.map((ans, index) => (
            <li className="answer" key={`${id}-${index}`}>
              <button
                className={selected === index ? `selected ${color}` : ""}
                onClick={() => handleClick(ans, shuffledAnswers, index)}
              >
                {ans}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
