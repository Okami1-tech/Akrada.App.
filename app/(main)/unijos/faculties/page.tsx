// app/(main)/(unijos)/unijos/faculties/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, GraduationCap, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Faculties & Schools | Akrada',
  description: 'Find all faculties and schools on University of Jos campus. View departments and contact information.',
  keywords: ['unijos faculties', 'campus schools', 'jos nigeria faculties', 'university faculties'],
}

export default function UnijosFacultiesPage() {
  const faculties = [
    {
      id: '1',
      name: 'Faculty of Science',
      location: 'Science Complex',
      departments: 12,
      dean: 'Prof. John Doe',
      contact: 'science@unijos.edu.ng',
      description: 'Home to various science disciplines including Computer Science, Mathematics, Physics, Chemistry, and Biology.'
    },
    {
      id: '2',
      name: 'Faculty of Medicine',
      location: 'Medical Complex',
      departments: 8,
      dean: 'Prof. Jane Smith',
      contact: 'medicine@unijos.edu.ng',
      description: 'Leading medical education and research facility with state-of-the-art laboratories and clinical training centers.'
    },
    {
      id: '3',
      name: 'Faculty of Social Sciences',
      location: 'Social Sciences Complex',
      departments: 10,
      dean: 'Prof. Michael Johnson',
      contact: 'socsciences@unijos.edu.ng',
      description: 'Comprehensive social sciences education covering Economics, Political Science, Sociology, Psychology, and more.'
    },
    {
      id: '4',
      name: 'Faculty of Engineering',
      location: 'Engineering Complex',
      departments: 7,
      dean: 'Prof. Sarah Williams',
      contact: 'engineering@unijos.edu.ng',
      description: 'Modern engineering education with programs in Civil, Mechanical, Electrical, Chemical, and Computer Engineering.'
    },
    {
      id: '5',
      name: 'Faculty of Law',
      location: 'Law Complex',
      departments: 4,
      dean: 'Prof. David Brown',
      contact: 'law@unijos.edu.ng',
      description: 'Premier legal education institution with comprehensive law programs and extensive legal resources.'
    },
    {
      id: '6',
      name: 'Faculty of Arts',
      location: 'Arts Complex',
      departments: 9,
      dean: 'Prof. Mary Johnson',
      contact: 'arts@unijos.edu.ng',
      description: 'Cultural and creative arts education covering Literature, History, Philosophy, Linguistics, and Fine Arts.'
    },
    {
      id: '7',
      name: 'Faculty of Education',
      location: 'Education Complex',
      departments: 6,
      dean: 'Prof. Robert Davis',
      contact: 'education@unijos.edu.ng',
      description: 'Teacher education and pedagogical training with focus on quality instruction and educational leadership.'
    },
    {
      id: '8',
      name: 'Faculty of Management Sciences',
      location: 'Business Complex',
      departments: 5,
      dean: 'Prof. Lisa Anderson',
      contact: 'management@unijos.edu.ng',
      description: 'Business and management education with programs in Business Administration, Accounting, and Finance.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Faculties</h1>
          <p className="text-gray-400">Find all faculties and schools on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty) => (
            <Card key={faculty.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                    <span>{faculty.name}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {faculty.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {faculty.departments} departments
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Dean: {faculty.dean}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Contact: {faculty.contact}</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-300">{faculty.description}</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  View Departments
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