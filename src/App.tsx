import './App.scss'
import { ThemeProvider, createTheme } from '@mui/material'
import WhatIs from './WhatIs'
import HowToCount from './HowToCount'
import Calc from './Calc'
import Navbar from './Navbar'

function App() {


  const theme = createTheme({

    palette: {
      mode: 'dark',
      primary: {
        main: '#1ebca0',
      },
      secondary: {
        main: '#bc1e3b',
      },
      background: {
        default: '#120f1a',
        paper: '#00000e',
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className='siteBody' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, paddingBottom: 40 }}>
          <Navbar />
          <WhatIs />
          <HowToCount />
          <Calc />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
