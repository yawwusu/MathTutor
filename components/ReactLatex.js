import Head from "next/head";
import * as Latex from "react-latex";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

function ReactLatex({ question }) {
  return (
    <>
      <Head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex text-3xl max-w-screen max-h-screen ">
        <div className="flex items-center justify-evenly">
          <button>
            <ArrowLeftIcon />
            Prev
          </button>
          <div className="flex flex-col items-center justify-center bg-gray-100 p-5 mx-3 rounded-xl">
            <p className="flex flex-auto text-center mb-5">
              <Latex>{question?.question}</Latex>
            </p>
            <form action="post">
              <input type="radio" id="A" value="A" value="a" />
              <label className="px-3" htmlFor="A">
                <Latex>{question?.option_a}</Latex>{" "}
              </label>
              <br />
              <input type="radio" id="B" value="B" value="b" />
              <label className="px-3" htmlFor="B">
                <Latex>{question?.option_b}</Latex>{" "}
              </label>
              <br />
              <input type="radio" id="C" value="C" value="c" />
              <label className="px-3" htmlFor="C">
                <Latex>{question?.option_c}</Latex>{" "}
              </label>
              <br />
              <input type="radio" id="D" value="D" value="d" />
              <label className="px-3" htmlFor="D">
                <Latex>{question?.option_d}</Latex>{" "}
              </label>
            </form>
            <button className="bg-green-500 px-10 py-2 mt-5 rounded-full">
              Check
            </button>
          </div>
          <button>
            <ArrowRightIcon /> Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ReactLatex;
