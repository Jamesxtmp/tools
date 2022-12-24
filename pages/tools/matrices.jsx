import Layout from "../../components/Layout";
import KeyboardGrid from "../../components/matematicas/KeyboardGrid";
// import {BlockMath, InlineMath} from "react-katex"

export default function matrices() {
    return (
        <Layout>
            <KeyboardGrid></KeyboardGrid>
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