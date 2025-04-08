'use client';

import { Particles } from '@/components/magicui/particles';
import { useTheme } from 'next-themes';

export function ThemeParticles() {
  const { theme } = useTheme();

  return (
    <Particles
      className='absolute inset-0 z-0'
      quantity={300}
      ease={80}
      color={theme === 'dark' ? '#ffffff' : '#000000'}
      refresh
    />
  );
}
