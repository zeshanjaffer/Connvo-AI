import Hero from '@/components/sections/Hero';
import Modes from '@/components/sections/Modes';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import NewsletterBanner from '@/components/sections/NewsletterBanner';
import PromoBanner from '@/components/sections/PromoBanner';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import MobileStickyButton from '@/components/ui/MobileStickyButton';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Modes />
      <Features />
      <Pricing />
      <Testimonials />
      <NewsletterBanner />
      <PromoBanner />
      <FAQ />
      <Contact />
      <Footer />
      <MobileStickyButton />
    </main>
  );
}
