import { useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Container } from '@mui/material';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ diplay:'inlineBlock' }}>
        <Grow in={checked} timeout={300}>
          {icon}
        </Grow>
        <Grow in={checked} timeout={450}>
          {icon}
        </Grow>
        <Grow in={checked} timeout={600}>
          {icon}
        </Grow>
        <Grow in={checked} timeout={600}>
          {icon}
        </Grow>
      </Box>
    </Box>
  );
}