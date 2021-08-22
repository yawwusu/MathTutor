import * as React from "react";
import { useMachine } from "@xstate/react";
import { practiceMachine } from "../utils/practiceMachine";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import RenderLatex from "./RenderLatex";
import { updateProgress } from "../lib/db";

function QuestionForm({ questions }) {
  const [current, send] = useMachine(practiceMachine);
  // const [choice, setChoice] = React.useState(null);
  // const [questionNumber, setQuestionNumber] = React.useState(0);
  console.log("current", current);
  current.context.questions = questions;

  // const [isCorrect, setIsCorrect] = React.useState(null);

  const displayMessage = (check) => {
    if (current.value.solved === "success") {
      return "Correct";
    } else if (current.value.solved === "failure") {
      return "Sorry, wrong answer";
    } else {
      return;
    }

    // if (check === null) {
    //   return;
    // } else if (check === true) {
    //   updateProgress(100 / questions.length);
    //   return "Correct";
    // } else if (check === false) {
    //   return "Sorry, wrong Answer";
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // choice === questions[questionNumber].answer
    //   ? setIsCorrect(true)
    //   : setIsCorrect(false);
    if (current.value.unsolved === "choosing") {
      send("SUBMIT");
    }
  };

  const handleChange = (e) => {
    // setChoice(e.target.value);
    if (current.value.unsolved === "idle") {
      send("CHOOSE");
    }
    current.context.choice = e.target.value;
  };

  const goToNextQuestion = () => {
    // if (questionNumber < questions?.length) {
    //   setQuestionNumber(questionNumber + 1);
    //   setIsCorrect(null);
    // }
    if (current?.context?.curr_question_id < questions?.length) {
      send("NEXT");
    }
  };

  const goToPrevQuestion = () => {
    // if (questionNumber > 0) {
    //   setQuestionNumber(questionNumber - 1);
    //   setIsCorrect(null);
    // }
    if (current?.context?.curr_question_id < questions?.length) {
      send("PREV");
    }
  };

  return (
    <div className="flex text-3xl max-w-screen max-h-screen ">
      <div className="flex items-center justify-evenly">
        <button
          className="disabled:text-gray-300"
          disabled={current?.context?.curr_question_id === 0}
          onClick={goToPrevQuestion}
        >
          <ArrowLeftIcon />
          Prev
        </button>
        <div className="flex flex-col items-center justify-center p-5 mx-3 rounded-xl bg-gray-100">
          <span
            className={`flex w-full justify-center ${
              current?.value?.unsolved
                ? ""
                : current?.value?.solved === "success"
                ? "p-2 mb-1 bg-green-500"
                : "p-2 mb-1 bg-red-300"
            }`}
          >
            {displayMessage()}
          </span>
          <p className="flex flex-auto text-center mb-5">
            <RenderLatex
              question={
                questions?.[current?.context?.curr_question_id]?.question
              }
            />
          </p>
          <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  type="radio"
                  name="options"
                  value="a"
                  onChange={handleChange}
                  disabled={current?.value?.solved}
                  // checked={current?.context?.choice === "a"}
                />
                <label className="px-3" htmlFor="A">
                  <RenderLatex
                    question={
                      questions?.[current?.context?.curr_question_id]?.option_a
                    }
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
                  disabled={current?.value?.solved}
                  // checked={current?.context?.choice === "b"}
                />
                <label className="px-3" htmlFor="B">
                  <RenderLatex
                    question={
                      questions?.[current?.context?.curr_question_id]?.option_b
                    }
                  />
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  name="options"
                  value="c"
                  onChange={handleChange}
                  disabled={current?.value?.solved}
                  // checked={current?.context?.choice === "c"}
                />
                <label className="px-3" htmlFor="C">
                  <RenderLatex
                    question={
                      questions?.[current?.context?.curr_question_id]?.option_c
                    }
                  />
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  name="options"
                  value="d"
                  onChange={handleChange}
                  disabled={current?.value?.solved}
                  // checked={current?.context?.choice === "d"}
                />
                <label className="px-3" htmlFor="D">
                  <RenderLatex
                    question={
                      questions?.[current?.context?.curr_question_id]?.option_d
                    }
                  />
                </label>
              </li>
            </ul>
            <button
              type="submit"
              className="bg-green-200 disabled:bg-green-200 hover:bg-green-400 px-10 py-2 mt-5 rounded-full"
              disabled={current.value.unsolved !== "choosing"}
            >
              Check
            </button>
          </form>
        </div>
        <button
          className="disabled:text-gray-300"
          disabled={current?.context?.curr_question_id === questions.length - 1}
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
