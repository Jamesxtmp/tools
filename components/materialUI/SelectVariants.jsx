import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { capitalize } from '../helpers/capitalizer';

export default function SelectVariants({ options = ['Sin Opciones'], selectName = 'Select' }) {
  const [choice, setChoice] = useState('');

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{selectName}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={choice}
          onChange={handleChange}
          label="Choice"
        >
          {options.map( op => {
              return(
                <MenuItem value={op}>{capitalize(op)}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </div>
  )
}