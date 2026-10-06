import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Brow & Lash Booking Software | pamperMe",
  description: "Smart 24/7 appointments, secure deposit collection, and effortless management for brow and lash artists.",
};

export default function BrowLashPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The booking software that keeps your lash beds full."
      heroSubtitle="Smart 24/7 appointments, secure deposit collection, and effortless management for brow and lash artists."
    />
  );
}
