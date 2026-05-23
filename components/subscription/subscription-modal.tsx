// components/subscription/subscription-modal.tsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PricingCard } from './pricing-card';
import { supabase } from '@/lib/supabase/client';

interface SubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscriptionModal({ open, onOpenChange }: SubscriptionModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (plan: 'monthly' | 'yearly') => {
    setLoading(true);
    
    try {
      // Get current user
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('Not authenticated');

      // Create Paystack payment
      const amount = plan === 'monthly' ? 87900 : 1010000; // Paystack expects kobo
      const reference = `SUB_${Date.now()}_${session.user.id}`;

      // Here you would typically make a call to your backend to create a Paystack transaction
      // For now, we'll simulate the process
      
      // In a real app, you'd make an API call to your backend
      const response = await fetch('/api/paystack/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: session.user.email,
          amount,
          reference,
          plan,
          user_id: session.user.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to Paystack checkout
        window.location.href = data.authorization_url;
      } else {
        throw new Error('Failed to create subscription');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Error creating subscription');
    } finally {
      setLoading(false);
    }
  };

  const features = [
    'Full location search',
    'Access to all aliases',
    'Advanced campus intelligence',
    'Priority customer support',
    'Early access to new features',
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl">Upgrade to Premium</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <PricingCard
            plan="monthly"
            price={879}
            features={features}
            onSubscribe={handleSubscribe}
          />
          <PricingCard
            plan="yearly"
            price={10100}
            features={features}
            popular={true}
            onSubscribe={handleSubscribe}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}