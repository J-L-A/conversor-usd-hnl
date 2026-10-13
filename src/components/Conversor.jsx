import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  Box,
  Button,
} from '@mui/material'
import { obtenerTasaHNL } from '../services/tasaService'

export default function Conversor() {
  const [cantidadUSD, setCantidadUSD] = useState('1')
  const [tasaCambio, setTasaCambio] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const actualizarTasa = (tasa) => {
    if (tasa) {
      setTasaCambio(tasa)
    } else {
      setError('No se pudo obtener la tasa de cambio.')
    }
    setCargando(false)
  }

  const reintentar = async () => {
    setCargando(true)
    setError(null)
    actualizarTasa(await obtenerTasaHNL())
  }

  useEffect(() => {
    obtenerTasaHNL().then(actualizarTasa)
  }, [])

  const totalLempiras = tasaCambio
    ? (Number(cantidadUSD || 0) * tasaCambio).toFixed(2)
    : '0.00'

  return (
    <Card id="conversor-card" sx={{ maxWidth: 460, mx: 'auto', mt: 2, borderRadius: 3, boxShadow: 3 }}>
      <CardContent sx={{ p: 3 }}>
        {cargando ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4, gap: 2 }}>
            <CircularProgress />
            <Typography color="text.secondary">Cargando tasa de cambio...</Typography>
          </Box>
        ) : error ? (
          <Alert severity="error" action={<Button color="inherit" size="small" onClick={reintentar}>Reintentar</Button>}>
            {error}
          </Alert>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Typography id="tasa-actual" variant="subtitle1" color="text.secondary" align="center" fontWeight={600}>
              1 USD = {tasaCambio.toFixed(2)} HNL
            </Typography>

            <TextField
              id="cantidad-usd"
              label="Cantidad en USD"
              type="number"
              fullWidth
              value={cantidadUSD}
              onChange={(e) => setCantidadUSD(e.target.value)}
              slotProps={{
                htmlInput: { min: 0, step: 'any' },
                input: { startAdornment: <InputAdornment position="start">$</InputAdornment> },
              }}
            />

            <Box
              id="resultado-box"
              sx={{ p: 2.5, bgcolor: '#e8f5e9', borderRadius: 2, textAlign: 'center', border: '1px solid #c8e6c9' }}
            >
              <Typography variant="caption" color="text.secondary" display="block">
                TOTAL EN LEMPIRAS
              </Typography>
              <Typography id="resultado-total" variant="h4" color="secondary.main" fontWeight="bold">
                L. {totalLempiras}
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}
