// app/(main)/(unijos)/unijos/libraries/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Libraries & Study Areas | Akrada',
  description: 'Find all libraries and study areas on University of Jos campus. View opening hours and resources.',
  keywords: ['unijos libraries', 'campus libraries', 'jos nigeria libraries', 'study areas'],
}

export default function UnijosLibrariesPage() {
  const libraries = [
    {
      id: '1',
      name: 'Main Library',
      location: 'Central Campus',
      hours: '7:00 AM - 10:00 PM',
      capacity: '1000',
      resources: ['Books', 'Journals', 'Computers', 'Study Rooms']
    },
    {
      id: '2',
      name: 'Science Library',
      location: 'Science Faculty',
      hours: '8:00 AM - 9:00 PM',
      capacity: '300',
      resources: ['Science Books', 'Research Papers', 'Lab Equipment']
    },
    {
      id: '3',
      name: 'Social Sciences Library',
      location: 'Social Sciences Faculty',
      hours: '8:00 AM - 9:00 PM',
      capacity: '250',
      resources: ['Social Science Books', 'Databases', 'Conference Room']
    },
    {
      id: '4',
      name: 'Medical Library',
      location: 'Medical Faculty',
      hours: '24 Hours',
      capacity: '200',
      resources: ['Medical Books', 'Journals', 'Online Resources']
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Libraries</h1>
          <p className="text-gray-400">Find all libraries and study areas on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((library) => (
            <Card key={library.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{library.name}</span>
                  <BookOpen className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {library.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {library.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    Capacity: {library.capacity}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Resources: {library.resources.join(', ')}
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  View on Map
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/unijos">Back to UNIJOS Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}