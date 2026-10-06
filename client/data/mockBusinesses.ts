export interface BusinessRecord {
  id: string;
  name: string;
  locations: string;
  owner: string;
  logoType: 'text' | 'image';
  logoText?: string;
  logoSubtext?: string;
  imageSrc?: string;
  description: string;
  address: string;
  category: string;
}

export const mockBusinessesDatabase: BusinessRecord[] = [
  {
    id: 'lakme-thakurpukur',
    name: 'Lakme Salon Thakurpukur',
    locations: '2 Locations',
    owner: 'Lakme Salon T.',
    logoType: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=150&auto=format&fit=crop&q=80',
    description: 'Expert bridal makeovers, signature hair coloring, and rejuvenating skin therapies.',
    address: 'Thakurpukur Main Road, Kolkata',
    category: 'Salon & Spa',
  },
  {
    id: 'tereika-garden',
    name: 'Tereika Garden',
    locations: '2 Locations',
    owner: 'Tereika G.',
    logoType: 'text',
    logoText: 'AKM',
    logoSubtext: 'ALON',
    description: 'Luxury botanical salon and wellness retreat with bespoke beauty consultations.',
    address: 'Park Street Ave, Downtown',
    category: 'Hair & Wellness',
  },
  {
    id: 'luxe-studio',
    name: 'Luxe Studio & Med Spa',
    locations: '3 Locations',
    owner: 'Luxe Beauty Group',
    logoType: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&auto=format&fit=crop&q=80',
    description: 'Advanced aesthetic skin treatments, hydrafacials, and hair care services.',
    address: 'West Beverly Hills, CA',
    category: 'Med Spa & Aesthetics',
  },
  {
    id: 'urban-barber',
    name: 'Urban Barber Co.',
    locations: '1 Location',
    owner: 'Urban Styles Ltd',
    logoType: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=150&auto=format&fit=crop&q=80',
    description: 'Traditional hot towel shaves, modern fades, and precision beard grooming.',
    address: 'East Village, NY',
    category: 'Barbershop',
  },
  {
    id: 'serenity-nail-spa',
    name: 'Serenity Nail & Brow Lounge',
    locations: '2 Locations',
    owner: 'Elena Rostova',
    logoType: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=150&auto=format&fit=crop&q=80',
    description: 'Artisanal nail extensions, gel manicures, and microblading treatments.',
    address: '5th Avenue Suite 400, NY',
    category: 'Nails & Brows',
  },
  {
    id: 'bliss-massage-wellness',
    name: 'Bliss Massage & Bodywork',
    locations: '1 Location',
    owner: 'Marcus Vance',
    logoType: 'text',
    logoText: 'BLISS',
    logoSubtext: 'SPA',
    description: 'Deep tissue therapy, hot stone relaxation, and Swedish sports massages.',
    address: 'Ocean Blvd, Santa Monica, CA',
    category: 'Massage & Bodywork',
  }
];

export function searchBusinesses(query: string): BusinessRecord[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];
  return mockBusinessesDatabase.filter(
    (b) =>
      b.name.toLowerCase().includes(trimmed) ||
      b.owner.toLowerCase().includes(trimmed) ||
      b.address.toLowerCase().includes(trimmed) ||
      b.category.toLowerCase().includes(trimmed)
  );
}
