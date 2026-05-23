// lib/auth.ts
import { supabase } from '@/lib/supabase/client'

export async function getCurrentUser() {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return null
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  return profile
}

export async function updateUserProfile(updates: any) {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', session.user.id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}