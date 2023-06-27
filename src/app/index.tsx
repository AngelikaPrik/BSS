import { Header } from '@widgets/header'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Kanit', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#fff',
    },
    info: {
      main: '#D5BA5C',
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}
