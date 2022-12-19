//React Imports
import { useState } from "react"

//Components Imports
import Layout from "../components/Layout"

//Material UI Imports
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Tools () {
    const categorias = {
        Matematicas: [
            'Matices',
            'Probalbilidad'
        ],
        Programacion: [
            'Seccion'
        ],
        Administracion: [
            'Orden de alumnos'
        ]
    }
    const [age, setAge] = useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }
    return (
        <Layout>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Asignatura</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
                >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                <MenuItem value={10}>Matematicas</MenuItem>
                <MenuItem value={20}>Probabilidad</MenuItem>
                <MenuItem value={30}>Programacion</MenuItem>
                </Select>
            </FormControl>
        </Layout>
    );
}

/*
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectSmall() {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
*/