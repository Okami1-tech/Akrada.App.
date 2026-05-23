// app/(main)/(unijos)/unijos/banks/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Banks & ATMs | Akrada',
  description: 'Find all banks and ATMs on University of Jos campus. View operating hours and services.',
  keywords: ['unijos banks', 'campus ATMs', 'jos nigeria banking', 'university banking'],
}

export default function UnijosBanksPage() {
  const banks = [
    {
      id: '1',
      name: 'First Bank ATM',
      location: 'Main Campus Square',
      hours: '24 Hours',
      services: ['ATM', 'Cash Deposit'],
      bank: 'First Bank'
    },
    {
      id: '2',
      name: 'Access Bank Branch',
      location: 'Students Hostel Area',
      hours: '8:00 AM - 4:00 PM',
      services: ['Banking', 'Loans', 'ATM'],
      bank: 'Access Bank'
    },
    {
      id: '3',
      name: 'GTBank ATM',
      location: 'Main Library',
      hours: '24 Hours',
      services: ['ATM', 'Transfer'],
      bank: 'Guaranty Trust Bank'
    },
    {
      id: '4',
      name: 'UBA ATM',
      location: 'Science Faculty',
      hours: '24 Hours',
      services: ['ATM', 'Bill Payment'],
      bank: 'United Bank for Africa'
    },
    {
      id: '5',
      name: 'Zenith Bank Branch',
      location: 'Admin Building',
      hours: '9:00 AM - 3:00 PM',
      services: ['Banking', 'Credit', 'ATM'],
      bank: 'Zenith Bank'
    },
    {
      id: '6',
      name: 'Ecobank ATM',
      location: 'Medical Faculty',
      hours: '24 Hours',
      services: ['ATM', 'Transfer'],
      bank: 'Ecobank'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Banks & ATMs</h1>
          <p className="text-gray-400">Find all banks and ATMs on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banks.map((bank) => (
            <Card key={bank.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{bank.name}</span>
                  <DollarSign className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {bank.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {bank.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Bank: {bank.bank}</span>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Services:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {bank.services.map((service, idx) => (
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