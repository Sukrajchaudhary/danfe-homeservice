"use client";

import { use } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Separator } from "@/components/ui/separator";
import { featuredServices } from "@/data/services";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceInfo } from "@/components/services/ServiceInfo";
import { BookingSidebar } from "@/components/services/BookingSidebar";
import { ServiceReviews } from "@/components/services/ServiceReviews";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Find service in centralized data or fallback to first one if not found
  const serviceData = featuredServices.find((s) => s.id === id) || featuredServices[0];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{serviceData.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Details */}
            <div className="flex-1 space-y-8">
              <ServiceGallery images={serviceData.images} title={serviceData.title} />

              <ServiceInfo
                description={serviceData.description}
                price={serviceData.price}
                unit={serviceData.unit}
                features={serviceData.features}
              />

              <Separator className="my-12" />

              <ServiceReviews rating={serviceData.rating} reviewCount={serviceData.reviewCount} />
            </div>

            {/* Right Column: Booking Sidebar */}
            <div className="w-full lg:w-[420px]">
              <BookingSidebar price={serviceData.price} unit={serviceData.unit} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
