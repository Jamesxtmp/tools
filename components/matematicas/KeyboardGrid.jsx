import { useEffect, useRef, useState } from "react";

import {InlineMath} from "react-katex";
import {ButtonBase} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Backspace } from "@mui/icons-material";
import { HighlightOff } from "@mui/icons-material";
import { CheckOutlined } from "@mui/icons-material";

export default function FullWidthGrid({ funcReturn }) {

  //True para mapeo 1 y False para mapeo 2
  const [mapType, setMapType] = useState(true)


  function nada(){
    alert('Click')
  }
  function shift(){
    setMapType(!mapType)
  }


  const keyboarMap = [
    {simbol: "icon_HighlightOff", size: 2, action: nada},
    {simbol: "\\leftleftarrows", size: 2, action: nada},
    {simbol: "\\leftarrow", size: 2, action: nada},
    {simbol: "\\rightarrow", size: 2, action: nada},
    {simbol: "\\rightrightarrows", size: 2, action: nada},
    {simbol: "icon_CheckOutlined", size: 2, action: nada},
    {simbol: "sin", size: 2, action: nada},
    {simbol: "\\pi", size: 2, action: nada},
    {simbol: "7", size: 2, action: nada},
    {simbol: "8", size: 2, action: nada},
    {simbol: "9", size: 2, action: nada},
    {simbol: "\\frac{\\Box}{\\Box}", size: 2, action: nada},
    {simbol: "cos", size: 2, action: nada},
    {simbol: "\\sqrt[\\Box]{\\Box}", size: 2, action: nada},
    {simbol: "4", size: 2, action: nada},
    {simbol: "5", size: 2, action: nada},
    {simbol: "6", size: 2, action: nada},
    {simbol: "\\times", size: 2, action: nada},
    {simbol: "tan", size: 2, action: nada},
    {simbol: "\\Box^\\Box", size: 2, action: nada},
    {simbol: "1", size: 2, action: nada},
    {simbol: "2", size: 2, action: nada},
    {simbol: "3", size: 2, action: nada},
    {simbol: "-", size: 2, action: nada},
    {simbol: "abc", size: 2, action: shift},
    {simbol: "(\\Box)", size: 2, action: nada},
    {simbol: "0", size: 2, action: nada},
    {simbol: ".", size: 2, action: nada},
    {simbol: "icon_Backspace", size: 2, action: nada},
    {simbol: "+", size: 2, action: nada},
  ]
  const keyboarMap2 = [
    {simbol: "icon_HighlightOff", size: 2, action: nada},
    {simbol: "\\leftleftarrows", size: 2, action: nada},
    {simbol: "\\leftarrow", size: 2, action: nada},
    {simbol: "\\rightarrow", size: 2, action: nada},
    {simbol: "\\rightrightarrows", size: 2, action: nada},
    {simbol: "icon_CheckOutlined", size: 2, action: nada},
    {simbol: "sin^{-1}", size: 2, action: nada},
    {simbol: "e", size: 2, action: nada},
    {simbol: "a", size: 2, action: nada},
    {simbol: "b", size: 2, action: nada},
    {simbol: "c", size: 2, action: nada},
    {simbol: "\\frac{\\Box}{\\Box}", size: 2, action: nada},
    {simbol: "cos^{-1}", size: 2, action: nada},
    {simbol: "\\log", size: 2, action: nada},
    {simbol: "i", size: 2, action: nada},
    {simbol: "j", size: 2, action: nada},
    {simbol: "k", size: 2, action: nada},
    {simbol: "\\times", size: 2, action: nada},
    {simbol: "tan^{-1}", size: 2, action: nada},
    {simbol: "!", size: 2, action: nada},
    {simbol: "x", size: 2, action: nada},
    {simbol: "y", size: 2, action: nada},
    {simbol: "z", size: 2, action: nada},
    {simbol: "-", size: 2, action: nada},
    {simbol: "123", size: 2, action: shift},
    {simbol: "\\frac{d}{dx}", size: 2, action: nada},
    {simbol: "\\int dx", size: 2, action: nada},
    {simbol: "\\sum", size: 2, action: nada},
    {simbol: "icon_Backspace", size: 2, action: nada},
    {simbol: "+", size: 2, action: nada},
  ]
  function jsxReturn(keyData) {
    return (
      <Grid item xs={keyData.size} md={2}>
        <ButtonBase onClick={ () => keyData.action() } sx={{width: "100%"}}>
          <Paper elevation={3}
            sx={{
              width: "100%",
              p: 0.5,
              height: 35,
              display:'flex',
              alignItems:"center",
              justifyContent:"center"
              }}>
            {
              keyData.simbol.includes('icon')
              ? keyData.simbol.includes('Backspace') ? <Backspace fontSize="small" />
                : keyData.simbol.includes('HighlightOff') ? <HighlightOff fontSize="small" />
                  : keyData.simbol.includes('CheckOutlined') ? <CheckOutlined fontSize="small" />
                  : <InlineMath math={keyData.simbol} />
              : <InlineMath math={keyData.simbol} />
            }
          </Paper>
        </ButtonBase>
      </Grid>
    )
  }
  return (
      <Box sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        position: 'absolute',
        bottom: '20px'
        }}>
        <Grid container spacing={0.5} sx={{ width:'80%' }}>
          { mapType 
          ? keyboarMap.map((keyData) => jsxReturn(keyData) )
          : keyboarMap2.map((keyData) => jsxReturn(keyData) )
          }
        </Grid>
      </Box>
  );
}
