'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, X } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] relative'>
      <header className='text-left w-full max-w-4xl mb-16'>
        <h1 className='text-4xl font-bold'>Full Stack Developer</h1>
        <p className='text-gray-500 mt-2'>
          Crafting high-performance, responsive, and user-friendly web
          applications using modern technologies, clean code, and best practices
          for seamless user experiences.
        </p>
        <div className='flex gap-4 mt-4'>
          <Button variant='default' className='flex items-center gap-2'>
            <Mail size={16} /> Hire me
          </Button>
          <Button variant='outline' size='icon'>
            <Mail size={16} />
          </Button>
          <Button variant='outline' size='icon'>
            <Mail size={16} />
          </Button>
        </div>
      </header>

      <section className='w-full max-w-4xl mb-16'>
        <Card>
          <CardHeader>
            <CardTitle>Latest Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-gray-600'>
              Showcasing some of my most recent work.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className='w-full max-w-4xl mb-16'>
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-gray-600'>
              Technologies and tools I specialize in.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className='w-full max-w-4xl mb-16'>
        <Card>
          <CardHeader>
            <CardTitle>Latest Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-gray-600'>
              Read my latest thoughts and insights on web development.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
