import { useEffect, useState } from "react";

let interval;
export default function Progress({
  setQCount,
  qcount,
  handleQuiz,
  onColor,
  setColor,
  setSelected,
  setAnswer,
}) {
    const time = 10;
    const timer = time * 1000;
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    setRemainingTime(timer);
    // console.log(qcount, "mm");
    interval = setInterval(() => {
      //   console.log("interval");
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => {};
  }, [qcount]);

  useEffect(() => {
    // console.log(remainingTime, "bb");
    if (remainingTime === 0) {
      onColor();
      setAnswer((prev) => {
        const update = [...prev];
        if (update.length < qcount) {
          update.push(" ");
        }
        return [...update];
      });
    }
    if (remainingTime < -1000) {
      if (qcount === 7) {
        handleQuiz();
      }
      setColor("");
      setSelected(-1);
      setQCount((prev) => prev + 1);
      clearInterval(interval);
    }
  }, [remainingTime]);
  //   console.log("rerender");

  return <progress value={remainingTime} max={timer} />;
}
