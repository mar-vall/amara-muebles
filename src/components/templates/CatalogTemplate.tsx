import React from 'react';
import { TopNavBar } from '../organisms/TopNavBar';
import { SidebarFilters } from '../organisms/SidebarFilters';
import { PromoBanner } from '../organisms/PromoBanner';
import { TrustSection } from '../organisms/TrustSection';
import { Footer } from '../organisms/Footer';
import { CatalogProductCard } from '../molecules/CatalogProductCard';
import { products } from '../../data/products';
import { Navbar } from '../organisms/Navbar';

export const CatalogTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20 max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Colección Completa
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubre nuestra selección de muebles diseñados con maderas nobles y sostenibles. Cada pieza celebra la belleza natural del roble, nogal y teca, aportando calidez y elegancia atemporal a tu hogar.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <SidebarFilters />

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm text-muted-foreground">
                Mostrando {products.length} productos
              </span>
              <select className="bg-transparent border-none text-foreground text-xs uppercase tracking-widest focus:ring-0 cursor-pointer pr-8 font-semibold">
                <option>Recomendados</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
                <option>Nuevos Ingresos</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((product) => (
                <CatalogProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        <PromoBanner />

        {/* SEO/Trust Section */}
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};
