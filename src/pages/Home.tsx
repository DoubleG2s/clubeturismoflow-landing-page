import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Features from '../components/Features';
import Journey from '../components/Journey';
import AIAssistant from '../components/AIAssistant';
import SalesFinance from '../components/SalesFinance';
import MultiTenant from '../components/MultiTenant';
import Subscription from '../components/Subscription';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Features />
      <Journey />
      <AIAssistant />
      <SalesFinance />
      <MultiTenant />
      <Subscription />
      <FAQ />
      <ContactForm />
    </main>
  );
}
