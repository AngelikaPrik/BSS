import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Footer, Header, Sidebar } from '@widgets'

const theme = createTheme({
  typography: {
    fontFamily: ['Kanit', 'sans-serif'].join(','),
    h2: {
      fontSize: '3.2rem',
      fontWeight: 'normal',
      '@media (max-width:900px)': {
        fontSize: '2.8rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.4rem',
      },
      '@media (max-width:450px)': {
        fontSize: '2.2rem',
      },
    },
    h5: {
      fontSize: '1.6rem',
      fontWeight: 500,
      '@media (max-width:450px)': {
        fontSize: '1.4rem',
      },
    },
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
      <Sidebar />
      <Footer />
    </ThemeProvider>
  )
}
