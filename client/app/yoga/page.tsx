import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Yoga Studio Software & Class Scheduling | pamperMe",
  description: "Easy class scheduling, automated memberships, and seamless student management for modern yoga studios.",
};

export default function YogaPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The yoga studio software that brings balance to your business."
      heroSubtitle="Easy class scheduling, automated memberships, and seamless student management for modern yoga studios."
    />
  );
}
