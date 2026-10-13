import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Conversor from './components/Conversor'
import Atribucion from './components/Atribucion'

// Configuración del tema de Material UI con paleta profesional
const tema = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2e7d32',
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 5 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            Conversor USD a HNL
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Conversor de Dólares a Lempiras en tiempo real
          </Typography>
        </Box>

        <Conversor />
        <Atribucion />
      </Container>
    </ThemeProvider>
  )
}
