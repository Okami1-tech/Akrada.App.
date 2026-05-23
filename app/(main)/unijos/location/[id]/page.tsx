// app/(main)/(unijos)/unijos/location/[id]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Phone, Users } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: location } = await supabase
    .from('locations')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!location) {
    return {}
  }

  return {
    title: `${location.name} | Akrada`,
    description: `Find ${location.name} on University of Jos campus. View location details and directions.`,
    keywords: [location.name, 'unijos', 'campus location', location.category],
  }
}

export default async function LocationDetailPage({ params }: Props) {
  const { data: location } = await supabase
    .from('locations')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href={`/unijos/${location.category}`} className="text-purple-400 hover:text-purple-300 underline mb-4 inline-block">
            ← Back to {location.category}
          </Link>
          <h1 className="text-3xl font-bold mt-4">{location.name}</h1>
          <p className="text-gray-400">Location on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-800 rounded-lg mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                      <p className="text-gray-400">Interactive Map Preview</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                    <span>{location.name}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-purple-400" />
                    <span>Category: {location.category}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-2 text-purple-400" />
                    <span>Contact: Available to premium users</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-purple-400" />
                    <span>Hours: Available to premium users</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>About This Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  This location is part of the University of Jos campus navigation system. 
                  Use Akrada to find directions and explore nearby locations.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>Nearby Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span>Lecture Hall A</span>
                    <span className="text-sm text-gray-400">200m</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span>Cafeteria</span>
                    <span className="text-sm text-gray-400">150m</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span>Library</span>
                    <span className="text-sm text-gray-400">300m</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}