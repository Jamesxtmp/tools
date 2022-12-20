/*
 * Se implementa:
 * <Matriz values={matrizValues} type={'p'} display={'inline'}/>
 * 
 * values: Matris Bidimencional
 * values = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
   ]
 * type: "p"(Parentecis) "b"(Corchetes) "B"(Llaves) "v"(Barras) "V"(Doble Barra)
 * display: "block"(Bloque Centrado) "inline"(En linea)
*/


import {BlockMath, InlineMath} from "react-katex"

export default function Matriz({values, type = 'p', display = 'block'}) {

    //Generador de String Para KaTex a base de un arreglo bidimencional
    let mathFill = `\\begin{${type}matrix}`
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[0].length; j++) {
            mathFill += `${values[i][j] === undefined ? '0' : values[i][j]}`
            if( j <  values[0].length - 1 ){
                mathFill += `&`
            }else{
                mathFill += `\\\\ `
            }
        } 
    }
    mathFill += `\\end{${type}matrix}`


    //Renderizado condicinal segun el dsplay
    if(display != 'block'){
        return(
            <>
                <InlineMath
                    math={mathFill}
                />
            </>
        )
    }else{
        return (
            <>
                <BlockMath
                    math={mathFill}
                />
            </>
        )
    }
}