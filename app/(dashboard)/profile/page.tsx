// app/(dashboard)/profile/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, Mail, GraduationCap, MapPin, Star } from 'lucide-react';
import { useSubscription } from '@/hooks/use-subscription';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    email: '',
    school_id: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{type: string, text: string} | null>(null);

  const { isPremium, loading: subscriptionLoading } = useSubscription();

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      router.push('/login');
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (profile) {
      setUser(profile);
      setFormData({
        email: profile.email,
        school_id: profile.school_id,
      });
    }

    setLoading(false);
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setMessage({ type: 'error', text: 'Not authenticated' });
        setSaving(false);
        return;
      }

      const { error } = await supabase
        .from('profiles')
        .update({
          email: formData.email,
        })
        .eq('id', session.user.id);

      if (error) {
        throw error;
      }

      // Update email in auth as well
      if (session.user.email !== formData.email) {
        const { error: updateEmailError } = await supabase.auth.updateUser({
          email: formData.email,
        });

        if (updateEmailError) {
          throw updateEmailError;
        }
      }

      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to update profile' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-gray-400">Manage your Akrada account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {message && (
                  <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
                    <AlertDescription>{message.text}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 bg-gray-800 border-gray-600"
                        disabled={saving}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>School</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        value="University of Jos (UNIJOS)"
                        className="pl-10 bg-gray-800 border-gray-600 cursor-not-allowed"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleSaveProfile} 
                  disabled={saving}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Subscription</span>
                    <div className="flex items-center">
                      {subscriptionLoading ? (
                        <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
                      ) : (
                        <>
                          <Star className={`w-4 h-4 mr-1 ${isPremium ? 'text-yellow-400' : 'text-gray-400'}`} />
                          <span>{isPremium ? 'Premium' : 'Free'}</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Member Since</span>
                    <span>{user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Account ID</span>
                    <span className="text-sm text-gray-400 truncate max-w-[100px]">{user?.id?.substring(0, 8)}...</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/qr/IGNPCKFYUQUSJ1" target="_blank" rel="noopener noreferrer">
                    Contact Support
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href="/settings">Account Settings</a>
                </Button>
                
                <Button variant="destructive" className="w-full" asChild>
                  <a href="/settings">Delete Account</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}