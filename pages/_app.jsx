import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import '../styles/global.css'

export default function ({Component, pageProps}) {
    const theme = createTheme({
        palette: {
          primary: purple,
        },
      })
    return (
        <div>
            
            <ThemeProvider theme={theme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        </div>
    )
}