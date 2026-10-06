import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Laser & Hair Removal Studio Software | pamperMe",
  description: "Effortless 24/7 online booking, secure deposits, and client management for laser and waxing studios.",
};

export default function HairRemovalPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The booking software that smooths out your scheduling."
      heroSubtitle="Effortless 24/7 online booking, secure deposits, and client management for laser and waxing studios."
    />
  );
}
