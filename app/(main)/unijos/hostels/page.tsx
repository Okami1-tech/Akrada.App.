// app/(main)/(unijos)/unijos/hostels/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, Bed } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Hostels & Accommodation | Akrada',
  description: 'Find all hostels and accommodation options on University of Jos campus. View locations and details.',
  keywords: ['unijos hostels', 'campus accommodation', 'jos nigeria hostels', 'student housing'],
}

export default function UnijosHostelsPage() {
  const hostels = [
    {
      id: '1',
      name: 'Male Hostel Complex',
      location: 'Main Campus',
      capacity: '500',
      type: 'Male',
      facilities: ['Canteen', 'Laundry', 'Common Room']
    },
    {
      id: '2',
      name: 'Female Hostel Complex',
      location: 'Main Campus',
      capacity: '450',
      type: 'Female',
      facilities: ['Canteen', 'Laundry', 'Study Room']
    },
    {
      id: '3',
      name: 'Postgraduate Hostel',
      location: 'Postgraduate Area',
      capacity: '200',
      type: 'Mixed',
      facilities: ['Library', 'Common Room', 'Kitchen']
    },
    {
      id: '4',
      name: 'New Hostel Complex',
      location: 'South Campus',
      capacity: '300',
      type: 'Mixed',
      facilities: ['Cafe', 'Laundry', 'Recreation Center']
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Hostels</h1>
          <p className="text-gray-400">Find all accommodation options on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostels.map((hostel) => (
            <Card key={hostel.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{hostel.name}</span>
                  <div className="text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                    {hostel.type}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {hostel.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    Capacity: {hostel.capacity}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Bed className="w-4 h-4 mr-2" />
                    Facilities: {hostel.facilities.join(', ')}
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