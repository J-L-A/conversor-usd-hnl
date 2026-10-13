// Servicio para obtener la tasa de cambio USD a HNL desde ExchangeRate-API
export async function obtenerTasaHNL() {
  try {
    const respuesta = await fetch('https://open.er-api.com/v6/latest/USD')
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta de la API')
    }
    const data = await respuesta.json()
    return data.rates.HNL
  } catch (error) {
    console.error('Error al obtener la tasa:', error)
    return null
  }
}
