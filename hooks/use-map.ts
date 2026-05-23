// hooks/use-map.ts
import { useState, useEffect, useRef } from 'react'
import { mapboxgl } from '@/lib/mapbox'
import { Location } from '@/types'

export function useMap(containerRef: React.RefObject<HTMLDivElement>, locations: Location[], school: any) {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [school.longitude, school.latitude],
      zoom: school.zoom_level || 15,
      attributionControl: false,
    })

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    
    map.on('load', () => {
      setIsLoading(false)
    })

    mapRef.current = map

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [containerRef, school])

  useEffect(() => {
    if (!mapRef.current || !locations.length) return

    // Remove existing markers first
    const existingMarkers = document.querySelectorAll('.location-marker')
    existingMarkers.forEach(marker => marker.remove())

    // Add new markers
    locations.forEach(location => {
      const el = document.createElement('div')
      el.className = 'location-marker'
      el.innerHTML = `
        <div class="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `

      new mapboxgl.Marker({
        element: el,
        anchor: 'center',
      })
      .setLngLat([location.longitude, location.latitude])
      .addTo(mapRef.current!)
    })
  }, [locations])

  return { map: mapRef.current, isLoading }
}