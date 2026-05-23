// app/(main)/(unijos)/unijos/lecture-halls/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Lecture Halls & Classrooms | Akrada',
  description: 'Find all lecture halls and classrooms on University of Jos campus. View capacity and schedule.',
  keywords: ['unijos lecture halls', 'campus classrooms', 'jos nigeria lecture halls', 'university classrooms'],
}

export default function UnijosLectureHallsPage() {
  const lectureHalls = [
    {
      id: '1',
      name: 'Main Lecture Theatre',
      location: 'Central Campus',
      capacity: '500',
      building: 'Main Building',
      floors: 'Ground Floor'
    },
    {
      id: '2',
      name: 'Science Block A',
      location: 'Science Faculty',
      capacity: '200',
      building: 'Science Block',
      floors: '1st Floor'
    },
    {
      id: '3',
      name: 'Social Sciences Hall',
      location: 'Social Sciences Faculty',
      capacity: '150',
      building: 'Social Sciences Building',
      floors: '2nd Floor'
    },
    {
      id: '4',
      name: 'Medical Lecture Hall',
      location: 'Medical Faculty',
      capacity: '100',
      building: 'Medical Building',
      floors: 'Ground Floor'
    },
    {
      id: '5',
      name: 'Computer Lab Hall',
      location: 'IT Department',
      capacity: '80',
      building: 'IT Building',
      floors: '1st Floor'
    },
    {
      id: '6',
      name: 'Arts Auditorium',
      location: 'Arts Faculty',
      capacity: '300',
      building: 'Arts Complex',
      floors: 'Ground Floor'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Lecture Halls</h1>
          <p className="text-gray-400">Find all lecture halls and classrooms on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectureHalls.map((hall) => (
            <Card key={hall.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{hall.name}</span>
                  <div className="text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                    {hall.capacity} seats
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {hall.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    Capacity: {hall.capacity}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Building: {hall.building}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Floor: {hall.floors}</span>
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