"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/home/Hero";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { ServiceCarousel } from "@/components/common/ServiceCarousel";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const featuredServices = [
  {
    image: "https://images.unsplash.com/photo-1562259920-25a451d99b18?q=80&w=800&auto=format&fit=crop",
    title: "Painting",
    provider: "Sajilo Sewa",
    rating: 4.7,
    reviewCount: 13,
    price: 25.00,
    unit: "Sq. Ft",
    description: "Give your home a fresh new look with vibrant colors. Now available in Kathmandu.",
    isVerified: true
  },
  {
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    title: "Hire a Electrician",
    provider: "Sajilo Sewa",
    rating: 4.7,
    reviewCount: 13,
    price: 500.00,
    unit: "Hour",
    description: "Looking for electrician in Kathmandu? Sajilo Sewa provides expert electricians.",
    isVerified: true
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    title: "Bathroom Renovation",
    provider: "Sajilo Project",
    rating: 0.0,
    reviewCount: 0,
    price: 1000.00,
    unit: "Starting From",
    description: "Ready to transform your outdated or leaking bathroom into a modern spaces.",
    isVerified: true
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661333333333-87f58a38546b?q=80&w=800&auto=format&fit=crop",
    title: "Winter Offer on Geysers - Hilltak",
    provider: "Sajilo Sewa",
    rating: 4.7,
    reviewCount: 13,
    price: 9500.00,
    unit: "Starting From",
    description: "Keep your home warm this winter with exclusive discounts on Hilltak geysers.",
    isVerified: true
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58551eb?q=80&w=800&auto=format&fit=crop",
    title: "Winter Offer on Tritech Solar Water Heaters",
    provider: "Sajilo Sewa",
    rating: 4.7,
    reviewCount: 13,
    price: 39500.00,
    unit: "Starting From",
    description: "This winter, enjoy non-stop hot water with Tritech Solar Water heaters.",
    isVerified: true
  }
];

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
      </main>

      <Footer />
    </div>
  );
}
