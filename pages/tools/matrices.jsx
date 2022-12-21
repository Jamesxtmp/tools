import Layout from "../../components/Layout";

import {BlockMath, InlineMath} from "react-katex"

export default function matrices() {
    return (
        <Layout>
            <BlockMath math={`
            \\begin{pmatrix}
                1 & 5 & 0\\\\
                7 & 3 & 8\\\\
                3 & 0 & 1
            \\end{pmatrix}
            `} />
        </Layout>
    );
}