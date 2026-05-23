// app/(main)/(unijos)/unijos/gates/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Gates & Entry Points | Akrada',
  description: 'Find all gates and entry points to University of Jos campus. View operating hours and security.',
  keywords: ['unijos gates', 'campus entry points', 'jos nigeria gates', 'university gates'],
}

export default function UnijosGatesPage() {
  const gates = [
    {
      id: '1',
      name: 'Main Gate',
      location: 'Kaduna Road',
      hours: '24 Hours',
      security: 'Guarded',
      access: 'All vehicles and pedestrians'
    },
    {
      id: '2',
      name: 'Staff Gate',
      location: 'Staff Quarters',
      hours: '5:00 AM - 11:00 PM',
      security: 'Security Personnel',
      access: 'Staff and authorized personnel'
    },
    {
      id: '3',
      name: 'Student Gate',
      location: 'South Campus',
      hours: '6:00 AM - 10:00 PM',
      security: 'Security Personnel',
      access: 'Students and visitors'
    },
    {
      id: '4',
      name: 'Medical Gate',
      location: 'Medical Faculty',
      hours: '24 Hours',
      security: 'Medical Staff',
      access: 'Emergency vehicles and medical staff'
    },
    {
      id: '5',
      name: 'Market Gate',
      location: 'North Campus',
      hours: '7:00 AM - 8:00 PM',
      security: 'Security Personnel',
      access: 'Vendors and market visitors'
    },
    {
      id: '6',
      name: 'Guest House Gate',
      location: 'Guest House Complex',
      hours: '6:00 AM - 12:00 AM',
      security: 'Security Personnel',
      access: 'Visitors and guests'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Gates</h1>
          <p className="text-gray-400">Find all gates and entry points to University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gates.map((gate) => (
            <Card key={gate.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{gate.name}</span>
                  <Shield className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {gate.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {gate.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Shield className="w-4 h-4 mr-2" />
                    Security: {gate.security}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Access: {gate.access}</span>
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