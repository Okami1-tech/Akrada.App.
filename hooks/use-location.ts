// hooks/use-location.ts
import { useState, useEffect } from 'react'
import { Location } from '@/types'

export function useLocation() {
  const [currentPosition, setCurrentPosition] = useState<GeolocationPosition | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    setIsLoading(true)
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(position)
        setIsLoading(false)
      },
      (err) => {
        setError(err.message)
        setIsLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    )
  }, [])

  return { currentPosition, error, isLoading }
}