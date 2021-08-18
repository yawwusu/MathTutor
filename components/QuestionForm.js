import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import RenderLatex from "./RenderLatex";

function QuestionForm({ question }) {
  const [choice, setChoice] = React.useState(current.context.choice);

  const [isCorrect, setIsCorrect] = React.useState(null);

  const displayMessage = (check) => {
    if (check === null) {
      return;
    } else if (check === true) {
      return "Correct";
    } else if (check === false) {
      return "Sorry, wrong Answer";
    }
    //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    choice === question.answer ? setIsCorrect(true) : setIsCorrect(false);
  };

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="flex text-3xl max-w-screen max-h-screen ">
      <div className="flex items-center justify-evenly">
        <button>
          <ArrowLeftIcon />
          Prev
        </button>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 mx-3 rounded-xl">
          <span className="c-yellow-500">{displayMessage(isCorrect)}</span>
          <p className="flex flex-auto text-center mb-5">
            <RenderLatex question={question?.question} />
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
                  <RenderLatex question={question?.option_a} />
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
                  <RenderLatex question={question?.option_b} />
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
                  <RenderLatex question={question?.option_c} />
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
                  <RenderLatex question={question?.option_d} />
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
        <button>
          <ArrowRightIcon />
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionForm;
