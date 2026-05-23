// app/(main)/(unijos)/unijos/clinics/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Clock, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Clinics & Health Centers | Akrada',
  description: 'Find all medical clinics and health centers on University of Jos campus. View services and hours.',
  keywords: ['unijos clinics', 'campus health centers', 'jos nigeria medical', 'university health services'],
}

export default function UnijosClinicsPage() {
  const clinics = [
    {
      id: '1',
      name: 'Main Campus Clinic',
      location: 'Central Campus',
      hours: '8:00 AM - 6:00 PM',
      services: ['General Consultation', 'First Aid', 'Prescription Refills'],
      phone: '+234 123 456 7890'
    },
    {
      id: '2',
      name: 'Student Health Center',
      location: 'Students Hostel Area',
      hours: '24 Hours',
      services: ['Emergency Care', 'Health Screening', 'Vaccinations'],
      phone: '+234 123 456 7891'
    },
    {
      id: '3',
      name: 'Faculty Medical Clinic',
      location: 'Faculty Complex',
      hours: '7:00 AM - 8:00 PM',
      services: ['Specialist Consultations', 'Laboratory Tests', 'Pharmacy'],
      phone: '+234 123 456 7892'
    },
    {
      id: '4',
      name: 'Dental Clinic',
      location: 'Medical Faculty',
      hours: '9:00 AM - 5:00 PM',
      services: ['Dental Checkups', 'Cleanings', 'Extractions'],
      phone: '+234 123 456 7893'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Clinics</h1>
          <p className="text-gray-400">Find all medical clinics and health centers on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic) => (
            <Card key={clinic.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{clinic.name}</span>
                  <Stethoscope className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {clinic.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {clinic.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    {clinic.phone}
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Services:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {clinic.services.map((service, idx) => (
                        <li key={idx}>• {service}</li>
                      ))}
                    </ul>
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