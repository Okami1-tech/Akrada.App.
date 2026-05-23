// app/(main)/(unijos)/unijos/departments/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Departments & Offices | Akrada',
  description: 'Find all academic departments and administrative offices on University of Jos campus.',
  keywords: ['unijos departments', 'campus offices', 'jos nigeria departments', 'university offices'],
}

export default function UnijosDepartmentsPage() {
  const departments = [
    {
      id: '1',
      name: 'Computer Science Department',
      location: 'Science Faculty',
      faculty: 'Faculty of Science',
      contact: 'cs@unijos.edu.ng'
    },
    {
      id: '2',
      name: 'Medicine Department',
      location: 'Medical Faculty',
      faculty: 'Faculty of Medicine',
      contact: 'med@unijos.edu.ng'
    },
    {
      id: '3',
      name: 'Economics Department',
      location: 'Social Sciences Faculty',
      faculty: 'Faculty of Social Sciences',
      contact: 'econ@unijos.edu.ng'
    },
    {
      id: '4',
      name: 'Engineering Department',
      location: 'Engineering Faculty',
      faculty: 'Faculty of Engineering',
      contact: 'eng@unijos.edu.ng'
    },
    {
      id: '5',
      name: 'Law Department',
      location: 'Law Faculty',
      faculty: 'Faculty of Law',
      contact: 'law@unijos.edu.ng'
    },
    {
      id: '6',
      name: 'Education Department',
      location: 'Education Faculty',
      faculty: 'Faculty of Education',
      contact: 'edu@unijos.edu.ng'
    },
    {
      id: '7',
      name: 'Registrar Office',
      location: 'Admin Building',
      faculty: 'Administrative',
      contact: 'registrar@unijos.edu.ng'
    },
    {
      id: '8',
      name: 'Dean of Students Office',
      location: 'Student Affairs',
      faculty: 'Student Affairs',
      contact: 'dos@unijos.edu.ng'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Departments</h1>
          <p className="text-gray-400">Find all academic departments and administrative offices on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Card key={dept.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{dept.name}</span>
                  <Building className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {dept.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {dept.faculty}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Contact: {dept.contact}</span>
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