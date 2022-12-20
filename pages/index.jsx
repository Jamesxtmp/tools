import Layout from "../components/Layout";

// import "katex/dist/katex.min.css";
import {BlockMath} from "react-katex";

export default function () {
  return (
    <Layout>
      <BlockMath
        math={`
          A \\neq 
          \\begin{pmatrix}
          2 & 5 & 0\\\\
          7 & 3 & 8\\\\
          3 & 0 & 1
          \\end{pmatrix}
          `}
      />
    </Layout>
  );
}
