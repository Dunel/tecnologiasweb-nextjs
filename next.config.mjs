/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'firebasestorage.googleapis.com'},
        { hostname: 'people.com' },  
        { hostname: 'laverdadnoticias.com' },  
        { hostname: 'mejorconsalud.as.com' },  
        { hostname: 'aceternity.com' },  
        { hostname: 'images.unsplash.com' },  
        { hostname: 'i0.wp.com' },  
        { hostname: 'procinal.com' },  
      ]
    }
  }

export default nextConfig;
