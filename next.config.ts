import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Fix for multiple lockfiles warning - specify the correct workspace root
  outputFileTracingRoot: path.join(process.cwd()),

  /* config options here */
};

export default nextConfig;
