// app/(main)/(unijos)/unijos/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Search, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'University of Jos (UNIJOS) Campus Map | Akrada',
  description: 'Interactive campus map of University of Jos with location search, navigation, and campus intelligence features.',
  keywords: ['unijos', 'university of jos', 'campus map', 'jos nigeria', 'university navigation'],
}

export default function UnijosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            University of Jos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Navigate the UNIJOS campus with precision using our interactive map and location intelligence platform.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-5 h-5 mr-2 text-purple-400" />
                Search Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Find any location on campus instantly</p>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link href="/unijos/search">Search Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                Campus Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Explore the full UNIJOS campus map</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/unijos/map">View Map</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-purple-400" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Browse locations by category</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/unijos/categories">View Categories</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Location Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Campus Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Restaurants', path: '/unijos/restaurants', icon: '🍽️' },
              { name: 'Hostels', path: '/unijos/hostels', icon: '🏠' },
              { name: 'Lecture Halls', path: '/unijos/lecture-halls', icon: '🎓' },
              { name: 'Libraries', path: '/unijos/libraries', icon: '📚' },
              { name: 'Clinics', path: '/unijos/clinics', icon: '🏥' },
              { name: 'Departments', path: '/unijos/departments', icon: '🏢' },
              { name: 'Gates', path: '/unijos/gates', icon: '🚪' },
              { name: 'Banks', path: '/unijos/banks', icon: '🏦' },
            ].map((category, index) => (
              <Link key={index} href={category.path}>
                <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h3 className="font-medium">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Navigate UNIJOS?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students using Akrada to find their way around the University of Jos campus.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}