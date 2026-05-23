// types/index.ts
export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
  school_id: string;
  aliases: string[];
  votes: number;
  created_at: string;
  updated_at: string;
}

export interface School {
  id: string;
  name: string;
  slug: string;
  latitude: number;
  longitude: number;
  zoom_level: number;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  school_id: string;
  is_premium: boolean;
  role: 'user' | 'admin';
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: 'monthly' | 'yearly';
  amount: number;
  currency: string;
  status: 'active' | 'cancelled' | 'expired';
  start_date: string;
  end_date: string;
}

export interface AliasVote {
  id: string;
  location_id: string;
  user_id: string;
  alias: string;
  created_at: string;
}