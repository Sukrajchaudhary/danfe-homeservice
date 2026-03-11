"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/home/Hero";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { ServiceCarousel } from "@/components/common/ServiceCarousel";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { featuredServices } from "@/data/services";

// Removed redundant mock data

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="grow">
        <Hero />

        <ServiceCategories />

        <ServiceCarousel
          title="Featured Services"
          services={featuredServices}
          className="mb-12"
        />

        <Pricing />

        <Testimonials />
        <CTA />

        <FAQ />

      </main>

      <Footer />
    </div>
  );
}
