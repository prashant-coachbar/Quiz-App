import quizComplete from "../assets/quiz-complete.png";
import questions from "../questions";
import SummaryStats from "./SummaryStats";
export default function Summary({ selectedAnswers }) {

    let correctAnswers = 0;
    let skippedAnswers = 0;
    questions.map((question, index) => selectedAnswers[index]===" " && ++skippedAnswers);
    questions.map((question, index) => question.correct === selectedAnswers[index] && ++correctAnswers);
    const incorrectAnswers = questions.length - correctAnswers - skippedAnswers;
    const skippedScore = Math.round((skippedAnswers / questions.length) * 100);
    const correctScore = Math.round((correctAnswers / questions.length) * 100);
    const incorrectScore = 100 - skippedScore - correctScore;

  return (
    <>
      <div id="summary">
        <img src={quizComplete} alt="Winner trophy" />
        <h2>quiz completed</h2>
        <div id="summary-stats">
          <SummaryStats number={skippedScore} text="skipped" />
          <SummaryStats number={correctScore} text="Answered Correctly" />
          <SummaryStats number={incorrectScore} text="Answered Incorrectly" />
        </div>
        <ol>
          {questions.map((question,index) => (
            <li key={question.id}>
                  <h3>{index +1}</h3>
              <p className="question">{question.text}</p>
              <p className={question.correct===selectedAnswers[index]?"user-answer correct":"user-answer wrong"}>{selectedAnswers[index]}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
