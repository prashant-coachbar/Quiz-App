import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="A notepad with a pen" />
      <h1>React Quiz</h1>
    </header>
  );
}
