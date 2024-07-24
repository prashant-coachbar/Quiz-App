import { useRef, useState } from "react";
import questions from "../questions";
import Progress from "./Progress";

let isCorrect = false;
export default function Quiz({ handleQuiz, setAnswer }) {
  const [qcount, setQCount] = useState(1);
  const [selected, setSelected] = useState(-1);
  const [color, setColor] = useState("");
  const choose = useRef();

  const quizOn = qcount <= questions.length;
  if (!quizOn) {
    return;
  }
  const { id, text, answers, correct } = questions[qcount - 1];
  function handleClick(ans, answers, index) {
    setSelected(index);
    setAnswer((prev) => {
      const update = [...prev];
      if (update.length === 0) {
        return [ans];
      }
      const popped = update[update.length - 1];
      if (answers.includes(popped)) {
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
          {answers.map((ans, index) => (
            <li className="answer" key={`${id}-${index}`}>
              <button
                ref={choose}
                className={selected === index ? `selected ${color}` : ""}
                onClick={() => handleClick(ans, answers, index)}
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
