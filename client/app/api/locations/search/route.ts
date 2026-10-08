import { NextResponse } from 'next/server';

interface LocationResult {
  id: string;
  name: string;
  district?: string;
  state?: string;
  country?: string;
  postcode?: string;
  fullAddress: string;
  lat?: number;
  lon?: number;
}

const CURATED_CITIES: LocationResult[] = [
  {
    id: 'curated-clt-1',
    name: 'Kozhikode',
    district: 'Kozhikode District',
    state: 'Kerala',
    country: 'India',
    postcode: '673001',
    fullAddress: 'Kozhikode, Kerala, India',
    lat: 11.2588,
    lon: 75.7804,
  },
  {
    id: 'curated-clt-2',
    name: 'Calicut',
    district: 'Kozhikode',
    state: 'Kerala',
    country: 'India',
    postcode: '673001',
    fullAddress: 'Calicut, Kerala, India',
    lat: 11.2588,
    lon: 75.7804,
  },
  {
    id: 'curated-clt-3',
    name: 'Mavoor Road',
    district: 'Kozhikode',
    state: 'Kerala',
    country: 'India',
    postcode: '673004',
    fullAddress: 'Mavoor Road, Kozhikode, Kerala, India',
    lat: 11.2612,
    lon: 75.795,
  },
  {
    id: 'curated-clt-4',
    name: 'Palayam',
    district: 'Kozhikode',
    state: 'Kerala',
    country: 'India',
    postcode: '673001',
    fullAddress: 'Palayam, Kozhikode, Kerala, India',
    lat: 11.2482,
    lon: 75.7825,
  },
  {
    id: 'curated-clt-5',
    name: 'Mananchira',
    district: 'Kozhikode',
    state: 'Kerala',
    country: 'India',
    postcode: '673001',
    fullAddress: 'Mananchira, Kozhikode, Kerala, India',
    lat: 11.252,
    lon: 75.7792,
  },
  {
    id: 'curated-clt-6',
    name: 'Kochi',
    district: 'Ernakulam',
    state: 'Kerala',
    country: 'India',
    postcode: '682001',
    fullAddress: 'Kochi, Kerala, India',
    lat: 9.9312,
    lon: 76.2673,
  },
  {
    id: 'curated-clt-7',
    name: 'Thiruvananthapuram',
    district: 'Thiruvananthapuram',
    state: 'Kerala',
    country: 'India',
    postcode: '695001',
    fullAddress: 'Thiruvananthapuram, Kerala, India',
    lat: 8.5241,
    lon: 76.9366,
  },
  {
    id: 'curated-clt-8',
    name: 'Thrissur',
    district: 'Thrissur',
    state: 'Kerala',
    country: 'India',
    postcode: '680001',
    fullAddress: 'Thrissur, Kerala, India',
    lat: 10.5276,
    lon: 76.2144,
  },
  {
    id: 'curated-clt-9',
    name: 'Kannur',
    district: 'Kannur',
    state: 'Kerala',
    country: 'India',
    postcode: '670001',
    fullAddress: 'Kannur, Kerala, India',
    lat: 11.8745,
    lon: 75.3704,
  },
  {
    id: 'curated-clt-10',
    name: 'Malappuram',
    district: 'Malappuram',
    state: 'Kerala',
    country: 'India',
    postcode: '676505',
    fullAddress: 'Malappuram, Kerala, India',
    lat: 11.0732,
    lon: 76.074,
  },
  {
    id: 'curated-clt-11',
    name: 'Bengaluru',
    district: 'Bengaluru Urban',
    state: 'Karnataka',
    country: 'India',
    postcode: '560001',
    fullAddress: 'Bengaluru, Karnataka, India',
    lat: 12.9716,
    lon: 77.5946,
  },
  {
    id: 'curated-clt-12',
    name: 'Mumbai',
    district: 'Mumbai Suburban',
    state: 'Maharashtra',
    country: 'India',
    postcode: '400001',
    fullAddress: 'Mumbai, Maharashtra, India',
    lat: 19.076,
    lon: 72.8777,
  },
  {
    id: 'curated-clt-13',
    name: 'Dubai',
    district: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    postcode: '',
    fullAddress: 'Dubai, United Arab Emirates',
    lat: 25.2048,
    lon: 55.2708,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim() || '';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: LocationResult[] = [];
  const seenAddresses = new Set<string>();

  // 1. Try Photon (OpenStreetMap geocoder)
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1000);

    const photonRes = await fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=7`,
      {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'PamperMe-Venue-Search/1.0',
        },
      }
    );
    clearTimeout(timeout);

    if (photonRes.ok) {
      const data = await photonRes.json();
      if (data?.features?.length) {
        for (let i = 0; i < data.features.length; i++) {
          const feat = data.features[i];
          const props = feat.properties || {};
          const name = props.name || props.street || props.city || query;
          const district = props.district || props.county || props.city;
          const state = props.state;
          const country = props.country;
          const postcode = props.postcode;
          const coords = feat.geometry?.coordinates;

          const parts = [name, district !== name ? district : null, state, country].filter(Boolean);
          const fullAddress = parts.join(', ');

          if (!seenAddresses.has(fullAddress.toLowerCase())) {
            seenAddresses.add(fullAddress.toLowerCase());
            results.push({
              id: `geo-${i}-${props.osm_id || i}`,
              name,
              district,
              state,
              country,
              postcode,
              fullAddress,
              lat: coords?.[1],
              lon: coords?.[0],
            });
          }
        }
      }
    }
  } catch {
    // If Photon fails or times out, proceed to fallback
  }

  // 2. Add local curated matches if not already covered
  const lowerQ = query.toLowerCase();
  for (const item of CURATED_CITIES) {
    if (
      item.name.toLowerCase().includes(lowerQ) ||
      item.fullAddress.toLowerCase().includes(lowerQ) ||
      (item.district && item.district.toLowerCase().includes(lowerQ))
    ) {
      if (!seenAddresses.has(item.fullAddress.toLowerCase())) {
        seenAddresses.add(item.fullAddress.toLowerCase());
        results.push(item);
      }
    }
  }

  return NextResponse.json({ results: results.slice(0, 8) });
}
