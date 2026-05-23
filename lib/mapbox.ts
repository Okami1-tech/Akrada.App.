// lib/mapbox.ts
import mapboxgl from 'mapbox-gl';

// Set access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export { mapboxgl };