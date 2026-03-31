/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import MultiTenant from './components/MultiTenant';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <MultiTenant />
        <Features />
        <SocialProof />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
