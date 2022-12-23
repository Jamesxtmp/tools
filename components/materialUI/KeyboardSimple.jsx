import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { HighlightOff } from "@mui/icons-material";
import { Backspace } from "@mui/icons-material";
import {ButtonBase} from "@mui/material";
import {InlineMath} from "react-katex";

const KeyTo = ({simbol = ","}) => {
  return (
    <ButtonBase>
      <Paper
        sx={{
          padding: 1,
          width: 35,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: 0.2,
        }}
        elevation={4}>
        {
            simbol.includes('icon')
            ? simbol.includes('HighlightOff')
                ? <HighlightOff />
                : <Backspace />
            : <InlineMath math={simbol} />
        }
      </Paper>
    </ButtonBase>
  );
};

export default function KeyboardSimple() {
  return (
    <Box
      sx={{
        width: 230,
      }}>
      <KeyTo simbol="icon_HighlightOff"></KeyTo>
      <KeyTo simbol="\leftarrow"></KeyTo>
      <KeyTo simbol="\uparrow"></KeyTo>
      <KeyTo simbol="\downarrow"></KeyTo>
      <KeyTo simbol="\rightarrow"></KeyTo>
      <KeyTo simbol="icon_Backspace"></KeyTo>

      <KeyTo simbol="\sin"></KeyTo>
      <KeyTo simbol="\pi"></KeyTo>
      <KeyTo simbol="7"></KeyTo>
      <KeyTo simbol="8"></KeyTo>
      <KeyTo simbol="9"></KeyTo>
      <KeyTo simbol="\div"></KeyTo>

      <KeyTo simbol="\cos"></KeyTo>
      <KeyTo simbol="\surd"></KeyTo>
      <KeyTo simbol="4"></KeyTo>
      <KeyTo simbol="5"></KeyTo>
      <KeyTo simbol="6"></KeyTo>
      <KeyTo simbol="\times"></KeyTo>

      <KeyTo simbol="\tan"></KeyTo>
      <KeyTo simbol="x^2"></KeyTo>
      <KeyTo simbol="1"></KeyTo>
      <KeyTo simbol="2"></KeyTo>
      <KeyTo simbol="3"></KeyTo>
      <KeyTo simbol="-"></KeyTo>

      <KeyTo simbol="alt"></KeyTo>
      <KeyTo simbol="()"></KeyTo>
      <KeyTo simbol="0"></KeyTo>
      <KeyTo simbol="."></KeyTo>
      <KeyTo simbol="\leftharpoonup"></KeyTo>
      <KeyTo simbol="+"></KeyTo>
    </Box>
  );
}
