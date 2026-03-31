import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import MultiTenant from '../components/MultiTenant';
import Features from '../components/Features';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <MultiTenant />
      <Features />
      <SocialProof />
      <FAQ />
      <ContactForm />
    </main>
  );
}
