import { LandingPage } from "./LandingPage/LandingPage"
import { createTheme, ThemeProvider } from "@mui/material"
import { Footer } from "./LandingPage/components/Footer"


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
        <Footer />
      </ThemeProvider>

    </>
  )
}

export default App
