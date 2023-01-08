import {useRef, useEffect, useState} from "react";

import sayHi from "../../components/helpers/sayHi";

import Layout from "../../components/Layout";
import KeyboardGrid from "../../components/matematicas/KeyboardGrid";
import {BlockMath, InlineMath} from "react-katex";

export default function matrices() {
  const [keysOut, setKeysOut] = useState(["\\bullet"]);
  const [cursor, setCursor] = useState(0);

  function wriringKeys(newKey) {
    switch (newKey) {
      case "icon_HighlightOff":
        setKeysOut([]);
        break;
      case "\\leftleftarrows":
        break;
      case "\\leftarrow":
        setCursor(cursor - 1);
        setKeysOut([
          ...keysOut.filter((el, i) => i < cursor -1  && el != "\\bullet" ),
          "\\bullet",
          ...keysOut.filter((el, i) => i >= cursor -1  && el != "\\bullet"),
        ]);
        break;
      case "\\rightarrow":
        setCursor(cursor + 1);
        setKeysOut([
          ...keysOut.filter((el, i) => i < cursor -1  && el != "\\bullet" ),
          "\\bullet",
          ...keysOut.filter((el, i) => i >= cursor -1  && el != "\\bullet"),
        ]);
        break;
      case "\\rightrightarrows":
        break;
      case "icon_CheckOutlined":
        break;
      case "shift":
        break;
      default:
        setKeysOut([...keysOut, newKey]);
        break;
    }
  }

  return (
    <Layout>
      <input type="text" />
      <KeyboardGrid/>
      {/* <BlockMath math={`
            \\begin{pmatrix}
                1 & 5 & 0\\\\
                7 & 3 & 8\\\\
                3 & 0 & 1
            \\end{pmatrix}
            `} /> */}
    </Layout>
  );
}
