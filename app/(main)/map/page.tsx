// app/(main)/map/page.tsx - SIMPLIFIED VERSION
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { MapContainer } from '@/components/map/map-container';

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
      const { data: schoolData } = await supabase
        .from('schools')
        .select('*')
        .eq('slug', 'unijos')
        .single();

      if (schoolData) {
        setSchool(schoolData);
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <MapContainer
      locations={locations}
      school={school}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      onLocationSelect={(location) => console.log('Selected:', location)}
    />
  );
}
