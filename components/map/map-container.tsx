// components/map/map-container.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { mapboxgl } from '@/lib/mapbox';
import { Location } from '@/types';
import { CATEGORIES } from '@/constants/categories';
import { LocationMarker } from './location-marker';
import { SearchBar } from './search-bar';
import { CategoryFilter } from './category-filter';
import { Button } from '../ui/button';
import { Navigation, MapPin, Filter } from 'lucide-react';

interface MapContainerProps {
  locations: Location[];
  school: any;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  onLocationSelect?: (location: Location) => void;
}

export function MapContainer({ 
  locations, 
  school, 
  selectedCategory, 
  onCategoryChange, 
  onLocationSelect 
}: MapContainerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [school.longitude, school.latitude],
      zoom: school.zoom_level || 15,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    map.on('load', () => {
      setIsLoading(false);
      
      // Add location markers
      locations.forEach(location => {
        if (selectedCategory && location.category !== selectedCategory) return;
        
        const markerElement = document.createElement('div');
        markerElement.innerHTML = `
          <div class="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `;

        const marker = new mapboxgl.Marker({
          element: markerElement,
          anchor: 'center',
        })
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);

        markerElement.addEventListener('click', () => {
          onLocationSelect?.(location);
          map.flyTo({
            center: [location.longitude, location.latitude],
            zoom: 17,
            duration: 1000,
          });
        });

        markersRef.current.push(marker);
      });
    });

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add filtered markers
    locations.forEach(location => {
      if (selectedCategory && location.category !== selectedCategory) return;
      
      const markerElement = document.createElement('div');
      markerElement.innerHTML = `
        <div class="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `;

      const marker = new mapboxgl.Marker({
        element: markerElement,
        anchor: 'center',
      })
      .setLngLat([location.longitude, location.latitude])
      .addTo(mapRef.current!);

      markerElement.addEventListener('click', () => {
        onLocationSelect?.(location);
        mapRef.current!.flyTo({
          center: [location.longitude, location.latitude],
          zoom: 17,
          duration: 1000,
        });
      });

      markersRef.current.push(marker);
    });
  }, [locations, selectedCategory]);

  return (
    <div className="relative h-screen w-full">
      <div ref={mapContainerRef} className="w-full h-full" />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="text-white text-lg">Loading campus map...</div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <SearchBar />
        <CategoryFilter 
          categories={CATEGORIES} 
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      {/* Location info panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Campus Navigation</h3>
            <p className="text-sm text-gray-400">UNIJOS Campus Map</p>
          </div>
          <Button size="sm" variant="outline">
            <Navigation className="w-4 h-4 mr-2" />
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
useEffect(() => {
  if (!mapRef.current || !locations.length) return

  // Only run on client
  if (typeof window === 'undefined') return

  // ... rest of marker code stays the same
}, [locations, selectedCategory])