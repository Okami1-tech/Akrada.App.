// app/(main)/map/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { MapContainer } from '@/components/map/map-container';
import { LoadingSpinner } from '@/components/common/loading-spinner';

export default function MapPage() {
  const [locations, setLocations] = useState<any[]>([]);
  const [school, setSchool] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMapData();
  }, []);

  const loadMapData = async () => {
    try {
      // Load UNIJOS as default
      const { data: schoolData } = await supabase
        .from('schools')
        .select('*')
        .eq('slug', 'unijos')
        .single();

      if (schoolData) {
        setSchool(schoolData);
        
        // Load locations for UNIJOS
        const { data: locationData } = await supabase
          .from('locations')
          .select('*')
          .eq('school_id', schoolData.id);

        setLocations(locationData || []);
      }
    } catch (error) {
      console.error('Error loading map data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <MapContainer
      locations={locations}
      school={school}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      onLocationSelect={(location) => {
        // Handle location selection
        console.log('Selected location:', location);
      }}
    />
  );
}