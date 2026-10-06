import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Nail Salon Booking & Management Software | pamperMe",
  description: "Smart online booking, staff management, and seamless payments for busy nail technicians and salons.",
};

export default function NailPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The nail salon software that polishes your daily operations."
      heroSubtitle="Smart online booking, staff management, and seamless payments for busy nail technicians and salons."
    />
  );
}
