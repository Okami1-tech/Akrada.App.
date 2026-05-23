// components/subscription/pricing-card.tsx
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: 'monthly' | 'yearly';
  price: number;
  features: string[];
  popular?: boolean;
  onSubscribe: (plan: 'monthly' | 'yearly') => void;
}

export function PricingCard({ 
  plan, 
  price, 
  features, 
  popular = false, 
  onSubscribe 
}: PricingCardProps) {
  return (
    <div className={`relative p-6 bg-gray-900 rounded-xl border ${
      popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'
    }`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
          Most Popular
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">
          {plan === 'monthly' ? 'Monthly' : 'Annual'} Plan
        </h3>
        <div className="text-3xl font-bold mb-1">
          ₦{price.toLocaleString()}
          <span className="text-sm text-gray-400">
            {plan === 'monthly' ? '/month' : '/year'}
          </span>
        </div>
        <p className="text-gray-400">
          Save {plan === 'yearly' ? '17%' : '0'} with annual billing
        </p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${
          popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 hover:bg-gray-600'
        }`}
        onClick={() => onSubscribe(plan)}
      >
        Subscribe Now
      </Button>
    </div>
  );
}