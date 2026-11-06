import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Features from '../components/Features';
import JourneyCards from '../components/JourneyCards';
import ProTrader from '../components/ProTrader';
import Support from '../components/Support';
import Academy from '../components/Academy';
import Testimonials from '../components/Testimonials';
import ReadyToGrow from '../components/ReadyToGrow';

export default function Home() {
  return (
    <main>
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Mission / Value Proposition */}
      <Mission />

      {/* 4. Core Offerings & Features */}
      <Features />

      {/* 5. Investor Journey Cards */}
      <JourneyCards />

      {/* 6. Pro Trader Tools */}
      <ProTrader />

      {/* 7. Human-First Support */}
      <Support />

      {/* 8. Derayah Academy & Learn */}
      <Academy />

      {/* 9. Customer Testimonials */}
      <Testimonials />

      {/* 10. Call to Action (Ready to Grow) */}
      <ReadyToGrow />
    </main>
  );
}

