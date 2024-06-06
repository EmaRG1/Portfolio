import { LandingPage } from "./LandingPage/LandingPage"
import { createTheme, ThemeProvider } from "@mui/material"


const theme = createTheme({
  typography: {
    fontFamily: [
      '"Poppins", sans-serif'
    ]
  }
})

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>

    </>
  )
}

export default App
