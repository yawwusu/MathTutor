import "katex/dist/katex.min.css";
import * as Katex from "react-katex";

function ReactKatex({ question }) {
  return <Katex.InlineMath math={question} />;
}

export default ReactKatex;
