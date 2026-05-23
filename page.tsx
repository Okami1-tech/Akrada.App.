// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MapPin, Users, Navigation, Star } from 'lucide-react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Redirect to signup
    setTimeout(() => {
      window.location.href = '/signup';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Akrada</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/unijos" className="hover:text-purple-400 transition-colors">
              UNIJOS
            </Link>
            <Link href="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button onClick={handleGetStarted} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Get Started'}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Navigate Your Campus
            <br />
            <span className="text-purple-400">Intelligently</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            The ultimate campus navigation and location intelligence platform. 
            Find everything you need on campus with precision and ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleGetStarted}>
              Start Exploring UNIJOS
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/unijos">View Campus Map</Link>
            </Button>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Navigation className="w-8 h-8" />,
              title: 'Precise Navigation',
              description: 'Navigate campus with pinpoint accuracy using our detailed map system.'
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: 'Campus Intelligence',
              description: 'Discover hidden gems and essential locations across campus.'
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Community Driven',
              description: 'Built by students, for students with community contributions.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students who use Akrada to navigate their campus with confidence.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleGetStarted}>
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}