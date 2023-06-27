import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}