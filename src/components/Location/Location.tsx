import { useEffect, useState } from 'react'
import axios from 'axios'

interface LocationData {
  city: string
  state: string
}

export const Location = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null)

  useEffect(() => {
    // Função para obter a localização do usuário
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords

            try {
              const apiKey = 'e0ae00ebcce0430faa30697a689e7b16'
              const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`,
              )

              if (response.data.results.length > 0) {
                const city = response.data.results[0].components.city
                const state = response.data.results[0].components.state_code
                setLocationData({ city, state })
              }
            } catch (error) {
              console.error(
                'Erro ao obter a localização:',
                // , error.message
              )
            }
          },
          (error) => {
            console.error('Erro ao obter a localização:', error.message)
          },
        )
      } else {
        console.error('Geolocalização não é suportada neste navegador.')
      }
    }

    getLocation()
  }, [])

  const formatLocationString = () => {
    if (locationData) {
      return `${locationData.city}, ${locationData.state}`
    }
    return 'Obtendo localização...'
  }

  return <div>{formatLocationString()}</div>
}
