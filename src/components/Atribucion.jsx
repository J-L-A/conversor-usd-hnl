import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

/*
 * Componente de atribución requerido por la rúbrica y ExchangeRate-API.
 */
export default function Atribucion() {
  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        <Link
          href="https://www.exchangerate-api.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Rates By Exchange Rate API
        </Link>
      </Typography>
    </Box>
  )
}
