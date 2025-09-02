'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-background'>
      <Card className='w-full max-w-md shadow-xl border-border'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className='space-y-6'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type='submit' className='w-full'>
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
