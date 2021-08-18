import Head from "next/head";
import * as Latex from "react-latex";
// import ReactKatex from "../components/ReactKatex";

function RenderLatex({ question }) {
  return (
    <>
      {/* Style for React-Latex */}
      <Head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Head>
      <Latex>{question}</Latex>
      {/* <ReactKatex question={question[0]} /> */}
    </>
  );
}

export default RenderLatex;
