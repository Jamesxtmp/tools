import '../styles/global.css'
import "katex/dist/katex.min.css";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function ({Component, pageProps}) {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        </div>
    )
}