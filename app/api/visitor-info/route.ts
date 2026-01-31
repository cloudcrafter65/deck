import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get IP from various headers (Vercel, Cloudflare, etc.)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const vercelIp = request.headers.get('x-vercel-forwarded-for');

  const ip = vercelIp?.split(',')[0]?.trim() ||
             forwardedFor?.split(',')[0]?.trim() ||
             realIp ||
             'Unknown';

  // Get geo info from Vercel headers
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') || '';
  const region = request.headers.get('x-vercel-ip-country-region') || '';

  return NextResponse.json({
    ip,
    country,
    city: city ? decodeURIComponent(city) : '',
    region: region ? decodeURIComponent(region) : '',
    timestamp: new Date().toISOString(),
  });
}
