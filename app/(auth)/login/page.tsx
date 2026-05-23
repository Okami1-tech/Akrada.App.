// app/(auth)/login/page.tsx
import { LoginForm } from '@/components/auth/login-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Akrada</h1>
          <p className="text-gray-400 mt-2">Campus Navigation & Intelligence</p>
        </div>
        
        <LoginForm />
        
        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-purple-400 hover:text-purple-300 underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}