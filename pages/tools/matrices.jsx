import Layout from "../../components/Layout";
import KeyboardSimple from "../../components/materialUI/KeyboardSimple";
// import {BlockMath, InlineMath} from "react-katex"

export default function matrices() {
    return (
        <Layout>
            <KeyboardSimple></KeyboardSimple>
            {/* { console.log( mfe ) } */}

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