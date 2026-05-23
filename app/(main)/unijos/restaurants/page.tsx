// app/(main)/(unijos)/unijos/restaurants/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UNIJOS Restaurants & Dining | Akrada',
  description: 'Find all restaurants and dining spots on University of Jos campus. Discover locations, hours, and reviews.',
  keywords: ['unijos restaurants', 'campus dining', 'jos nigeria food', 'university restaurants'],
}

export default function UnijosRestaurantsPage() {
  const restaurants = [
    {
      id: '1',
      name: 'Main Campus Restaurant',
      location: 'Main Campus Area',
      rating: 4.5,
      hours: '7:00 AM - 9:00 PM',
      capacity: 'Large',
    },
    {
      id: '2',
      name: 'Students Union Restaurant',
      location: 'Students Union Building',
      rating: 4.2,
      hours: '8:00 AM - 8:00 PM',
      capacity: 'Medium',
    },
    {
      id: '3',
      name: 'Guest House Restaurant',
      location: 'Guest House Complex',
      rating: 4.0,
      hours: '6:00 AM - 10:00 PM',
      capacity: 'Small',
    },
    {
      id: '4',
      name: 'Staff Quarters Canteen',
      location: 'Staff Quarters',
      rating: 4.3,
      hours: '7:00 AM - 7:00 PM',
      capacity: 'Medium',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">UNIJOS Restaurants</h1>
          <p className="text-gray-400">Find all dining locations on University of Jos campus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{restaurant.name}</span>
                  <div className="flex items-center text-yellow-400">
                    {'★'.repeat(Math.floor(restaurant.rating))}
                    {'☆'.repeat(5 - Math.floor(restaurant.rating))}
                    <span className="ml-2 text-sm text-gray-400">{restaurant.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {restaurant.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {restaurant.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    Capacity: {restaurant.capacity}
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