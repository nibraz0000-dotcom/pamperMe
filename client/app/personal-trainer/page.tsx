import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Personal Trainer Software & Client Booking | pamperMe",
  description: "Easy session scheduling, client tracking, and mobile payments designed for independent personal trainers.",
};

export default function PersonalTrainerPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The training software that lets you focus on fitness."
      heroSubtitle="Easy session scheduling, client tracking, and mobile payments designed for independent personal trainers."
    />
  );
}
