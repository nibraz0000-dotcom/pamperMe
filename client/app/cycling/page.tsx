import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Indoor Cycling Studio Software | pamperMe",
  description: "Easy bike booking, automated waitlists, and membership management built for indoor cycling studios.",
};

export default function CyclingPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The cycling software that keeps your studio spinning."
      heroSubtitle="Easy bike booking, automated waitlists, and membership management built for indoor cycling studios."
    />
  );
}
