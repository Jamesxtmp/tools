import {InlineMath} from "react-katex";
import {ButtonBase} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Backspace } from "@mui/icons-material";
import { HighlightOff } from "@mui/icons-material";
import { CheckOutlined } from "@mui/icons-material";

export default function FullWidthGrid() {
  function sayHello() {
    alert('hola')
  }
  const keyboarMap = [
    {simbol: "icon_HighlightOff", size: 2, action: sayHello },
    {simbol: "\\leftleftarrows", size: 2, action: sayHello },
    {simbol: "\\leftarrow", size: 2, action: sayHello },
    {simbol: "\\rightarrow", size: 2, action: sayHello },
    {simbol: "\\rightrightarrows", size: 2, action: sayHello },
    {simbol: "icon_CheckOutlined", size: 2, action: sayHello },
    {simbol: "sin", size: 2, action: sayHello },
    {simbol: "\\pi", size: 2, action: sayHello },
    {simbol: "7", size: 2, action: sayHello },
    {simbol: "8", size: 2, action: sayHello },
    {simbol: "9", size: 2, action: sayHello },
    {simbol: "\\frac{\\Box}{\\Box}", size: 2, action: sayHello },
    {simbol: "cos", size: 2, action: sayHello },
    {simbol: "\\sqrt[\\Box]{\\Box}", size: 2, action: sayHello },
    {simbol: "4", size: 2, action: sayHello },
    {simbol: "5", size: 2, action: sayHello },
    {simbol: "6", size: 2, action: sayHello },
    {simbol: "\\times", size: 2, action: sayHello },
    {simbol: "tan", size: 2, action: sayHello },
    {simbol: "\\Box^\\Box", size: 2, action: sayHello },
    {simbol: "1", size: 2, action: sayHello },
    {simbol: "2", size: 2, action: sayHello },
    {simbol: "3", size: 2, action: sayHello },
    {simbol: "-", size: 2, action: sayHello },
    {simbol: "shift", size: 2, action: sayHello },
    {simbol: "(\\Box)", size: 2, action: sayHello },
    {simbol: "0", size: 2, action: sayHello },
    {simbol: ".", size: 2, action: sayHello },
    {simbol: "icon_Backspace", size: 2, action: sayHello },
    {simbol: "+", size: 2, action: sayHello },
  ];
  return (
      <Box sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        position: 'absolute',
        bottom: '20px'
        }}>
        <Grid container spacing={0.5} sx={{ width:'80%' }}>
          {keyboarMap.map((keyData) => {
            return (
              <Grid item xs={keyData.size} md={2}>
                <ButtonBase onClick={ keyData.action } sx={{width: "100%"}}>
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
          })}
        </Grid>
      </Box>
  );
}
