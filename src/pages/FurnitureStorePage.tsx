import { PageLayout } from '../components/templates/PageLayout';
import { Navbar } from '../components/organisms/Navbar';
import { HeroSection } from '../components/organisms/HeroSection';
import { TrustBar } from '../components/organisms/TrustBar';
import { FeaturedProducts } from '../components/organisms/FeaturedProducts';
import { ShopGrid } from '../components/organisms/ShopGrid';
import { BrandStory } from '../components/organisms/BrandStory';
import { ProcessSection } from '../components/organisms/ProcessSection';
import { B2BSection } from '../components/organisms/B2BSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { Footer } from '../components/organisms/Footer';

export function FurnitureStorePage() {
  return (
    <PageLayout>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <TrustBar />
        <FeaturedProducts />
        <ShopGrid />
        <BrandStory />
        <ProcessSection />
        <B2BSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
