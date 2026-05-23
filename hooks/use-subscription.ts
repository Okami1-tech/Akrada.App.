// hooks/use-subscription.ts
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

export function useSubscription() {
  const [isPremium, setIsPremium] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkSubscriptionStatus()
  }, [])

  const checkSubscriptionStatus = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data, error } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', session.user.id)
        .single()

      if (data) {
        setIsPremium(data.is_premium)
      }
    } catch (error) {
      console.error('Error checking subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  return { isPremium, loading }
}