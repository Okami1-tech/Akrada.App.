# Akrada - Campus Navigation Platform

A production-ready Progressive Web App for campus navigation and location intelligence.

## Features
- Interactive campus maps with Mapbox
- Location search and filtering
- Category-based navigation
- Premium subscription system
- Multi-university support
- Mobile-first responsive design

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- Mapbox GL
- Paystack
- Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and add your credentials
4. Run development server: `npm run dev`

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `NEXT_PUBLIC_MAPBOX_TOKEN` - Your Mapbox access token
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` - Your Paystack public key
- `PAYSTACK_SECRET_KEY` - Your Paystack secret key

## Deployment

Deploy to Vercel with one click or manually configure your hosting provider.