import * as React from "react";
import { useMachine } from "@xstate/react";
import { practiceMachine } from "../utils/practiceMachine";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import RenderLatex from "./RenderLatex";
import { updateProgress } from "../lib/db";

function QuestionForm({ questions }) {
  // const [current, send] = useMachine(practiceMachine);
  const [choice, setChoice] = React.useState(null);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  // console.log("current", current.value);

  const [isCorrect, setIsCorrect] = React.useState(null);

  const displayMessage = (check) => {
    // if (current.value.solved === "success") {
    //   console.log("correct");
    // } else {
    //   console.log("wrong");
    // }

    if (check === null) {
      return;
    } else if (check === true) {
      updateProgress(100 / questions.length);
      return "Correct";
    } else if (check === false) {
      return "Sorry, wrong Answer";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    choice === questions[questionNumber].answer
      ? setIsCorrect(true)
      : setIsCorrect(false);
    // if (current.value.unsolved === "choosing") {
    //   send("SUBMIT");
    // }
  };

  const handleChange = (e) => {
    setChoice(e.target.value);
    // if (current.value.unsolved === "idle") {
    //   send("CHOOSE");
    // }
  };

  const goToNextQuestion = () => {
    if (questionNumber < questions?.length) {
      setQuestionNumber(questionNumber + 1);
      setIsCorrect(null);
    }
    // if (current?.questionNumber < questions?.length) {
    // send("CHOOSE");
    // }
  };

  const goToPrevQuestion = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
      setIsCorrect(null);
    }
    // if (current?.questionNumber < questions?.length) {
    // send("CHOOSE");
    // }
  };

  return (
    <div className="flex text-3xl max-w-screen max-h-screen ">
      <div className="flex items-center justify-evenly">
        <button
          className="disabled:bg-gray-400"
          disabled={questionNumber === 0}
          onClick={goToPrevQuestion}
        >
          <ArrowLeftIcon />
          Prev
        </button>
        <div className="flex flex-col items-center justify-center p-5 mx-3 rounded-xl bg-gray-100">
          <span
            className={`flex w-full justify-center ${
              isCorrect === null
                ? ""
                : isCorrect === true
                ? "p-2 mb-1 bg-green-500"
                : "p-2 mb-1 bg-red-300"
            }`}
          >
            {displayMessage(isCorrect)}
          </span>
          <p className="flex flex-auto text-center mb-5">
            <RenderLatex question={questions?.[questionNumber]?.question} />
          </p>
          <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  type="radio"
                  name="options"
                  value="a"
                  onChange={handleChange}
                  disabled={isCorrect !== null}
                />
                <label className="px-3" htmlFor="A">
                  <RenderLatex
                    question={questions?.[questionNumber]?.option_a}
                  />
                </label>
              </li>

              <li>
                <input
                  className="px-2"
                  type="radio"
                  name="options"
                  value="b"
                  onChange={handleChange}
                  disabled={isCorrect !== null}
                />
                <label className="px-3" htmlFor="B">
                  <RenderLatex
                    question={questions?.[questionNumber]?.option_b}
                  />
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  name="options"
                  value="c"
                  onChange={handleChange}
                  disabled={isCorrect !== null}
                />
                <label className="px-3" htmlFor="C">
                  <RenderLatex
                    question={questions?.[questionNumber]?.option_c}
                  />
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  name="options"
                  value="d"
                  onChange={handleChange}
                  disabled={isCorrect !== null}
                />
                <label className="px-3" htmlFor="D">
                  <RenderLatex
                    question={questions?.[questionNumber]?.option_d}
                  />
                </label>
              </li>
            </ul>
            <button
              type="submit"
              className="bg-green-200 disabled:bg-green-200 hover:bg-green-400 px-10 py-2 mt-5 rounded-full"
              disabled={!choice}
            >
              Check
            </button>
          </form>
        </div>
        <button
          disabled={questionNumber === questions.length - 1}
          onClick={goToNextQuestion}
        >
          <ArrowRightIcon />
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionForm;
