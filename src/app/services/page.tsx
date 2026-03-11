"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
  Users,
  Zap,
  ArrowRight,
  Wrench,
  Droplets,
  Sun,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ServiceCategoryCard } from "@/components/services/ServiceCategoryCard";

const serviceList = [
  {
    icon: Droplets,
    title: "Plumbing Services",
    slug: "plumbing",
    description:
      "Expert leaking pipe repairs, tap installations, drain cleaning, and full bathroom plumbing solutions.",
    features: [
      "24/7 Emergency Repairs",
      "Licensed Professionals",
      "Fixed Pricing",
    ],
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Electrical Works",
    slug: "electrical",
    description:
      "Safe electrical wiring, appliance repairs, lighting installations, and emergency fuse fixes.",
    features: [
      "Safety First Approach",
      "Certified Electricians",
      "Wiring & Earthing",
    ],
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Paintbrush,
    title: "Home Painting",
    slug: "painting",
    description:
      "Professional interior and exterior painting services with premium quality finishes and textures.",
    features: [
      "Surface Preparation",
      "Texture Painting",
      "Dust-free Process",
    ],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Appliance Repair",
    slug: "appliance",
    description:
      "Reliable repair services for washing machines, refrigerators, microwaves, and other home appliances.",
    features: [
      "Genuine Spare Parts",
      "Multi-brand Support",
      "Service Warranty",
    ],
    gradient: "from-emerald-600 to-green-600",
  },
  {
    icon: Sun,
    title: "Cleaning Services",
    slug: "cleaning",
    description:
      "Deep cleaning for homes, kitchens, and water tanks. Professional grade equipment and eco-friendly products.",
    features: [
      "Sofa & Carpet Cleaning",
      "Water Tank Sanitation",
      "Post-construction Clean",
    ],
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Smart Home",
    slug: "security",
    description:
      "CCTV installations, smart lock setups, and home automation systems for modern secured living.",
    features: [
      "Remote Monitoring",
      "Smart Door Locks",
      "Motion Sensors",
    ],
    gradient: "from-emerald-400 to-green-400",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-1.5 text-sm font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600"
              >
                Official Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Premium Home Services{" "}
                <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  at Your Doorstep
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to maintain, repair, and upgrade your home — managed by verified professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceList.map((service, index) => (
                <ServiceCategoryCard 
                  key={service.slug}
                  index={index}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                Need a skilled professional?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join Danfe today. Register to grow your business or book a service instantly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-linear-to-r from-emerald-600 to-green-600 text-white shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
                  >
                    Register as Service Provider <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
