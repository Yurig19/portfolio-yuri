import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
};

export default createNextIntlPlugin()(nextConfig);
