"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
      Star,
      MapPin,
      CheckCircle2,
      Phone,
      MessageSquare,
      ArrowLeft,
      Briefcase
} from "lucide-react";

// Mock data for service providers
const mockProviders = [
      {
            id: "p1",
            name: "Arjun Thapa",
            role: "Master Plumber",
            category: "plumbing",
            rating: 4.9,
            reviews: 124,
            location: "Kathmandu",
            experience: "8 years",
            avatar: "https://images.unsplash.com/photo-1540561214060-f47a5089f899?w=100&h=100&fit=crop",
            verified: true,
            price: "$25/hr",
            status: "Available Now"
      },
      {
            id: "p2",
            name: "Sita Rimal",
            role: "Senior Electrician",
            category: "electrical",
            rating: 4.8,
            reviews: 89,
            location: "Lalitpur",
            experience: "5 years",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
            verified: true,
            price: "$30/hr",
            status: "Busy"
      },
      {
            id: "p3",
            name: "Bikram Shah",
            role: "Professional Painter",
            category: "painting",
            rating: 4.7,
            reviews: 56,
            location: "Bhaktapur",
            experience: "10 years",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            verified: true,
            price: "$20/hr",
            status: "Available Tomorrow"
      },
      {
            id: "p4",
            name: "Deepak Lama",
            role: "HVAC Specialist",
            category: "appliance",
            rating: 4.9,
            reviews: 210,
            location: "Kathmandu",
            experience: "12 years",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            verified: true,
            price: "$35/hr",
            status: "Available Now"
      },
      {
            id: "p5",
            name: "Maya Gurung",
            role: "Cleaning Expert",
            category: "cleaning",
            rating: 4.6,
            reviews: 156,
            location: "Pokhara",
            experience: "4 years",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            verified: true,
            price: "$15/hr",
            status: "Available Now"
      }
];

export default function CategoryProvidersPage({ params }: { params: Promise<{ id: string }> }) {
      const { id } = use(params);
      const [activeProviders, setActiveProviders] = useState(mockProviders);

      useEffect(() => {
            // Filter providers based on category slug
            // In a real app, this would be an API call
            const filtered = mockProviders.filter(p => p.category === id);
            if (filtered.length > 0) {
                  setActiveProviders(filtered);
            } else {
                  // If no specifically filtered providers, show all but labeled as "all"
                  setActiveProviders(mockProviders);
            }
      }, [id]);

      const categoryTitle = id.charAt(0).toUpperCase() + id.slice(1);

      return (
            <div className="min-h-screen flex flex-col">
                  <Navbar />

                  <main className="flex-1 bg-muted/30 py-12">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              {/* Header */}
                              <div className="mb-8 sm:mb-12">
                                    <Link
                                          href="/services"
                                          className="inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors mb-6 group"
                                    >
                                          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                          All Services
                                    </Link>
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                          <div className="space-y-2">
                                                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">Selected Category</Badge>
                                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                                                      {categoryTitle} <span className="text-emerald-600">Experts</span>
                                                </h1>
                                                <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                                                      Connect with top-rated {id} professionals in your area. All providers are verified and background-checked.
                                                </p>
                                          </div>
                                          <div className="flex items-center gap-2 pb-1">
                                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">
                                                      {activeProviders.length} Professionals Available
                                                </span>
                                          </div>
                                    </div>
                              </div>

                              {/* Providers Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {activeProviders.map((provider) => (
                                          <motion.div
                                                key={provider.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4 }}
                                          >
                                                <Card className="flex flex-col border-border/40 bg-background/60 backdrop-blur-sm hover:bg-background transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 group h-full">
                                                      <CardHeader className="p-5 pb-3">
                                                            <div className="flex items-start justify-between">
                                                                  <div className="flex items-center gap-3">
                                                                        <div className="relative">
                                                                              <Avatar className="h-14 w-14 sm:h-12 sm:w-12 border-2 border-background shadow-md">
                                                                                    <AvatarImage src={provider.avatar} className="object-cover" />
                                                                                    <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm font-bold">
                                                                                          {provider.name.charAt(0)}
                                                                                    </AvatarFallback>
                                                                              </Avatar>
                                                                              {provider.verified && (
                                                                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                                                                          <CheckCircle2 className="h-4 w-4 text-emerald-500 fill-emerald-500" />
                                                                                    </div>
                                                                              )}
                                                                        </div>
                                                                        <div>
                                                                              <h3 className="font-bold text-base sm:text-sm leading-tight group-hover:text-emerald-600 transition-colors">
                                                                                    {provider.name}
                                                                              </h3>
                                                                              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                                                                                    <Briefcase className="h-3 w-3" />
                                                                                    {provider.role}
                                                                              </p>
                                                                        </div>
                                                                  </div>
                                                                  <Badge
                                                                        variant="outline"
                                                                        className={`text-[9px] uppercase font-bold px-2 py-0.5 leading-none rounded-full border-none hidden sm:inline-flex ${provider.status === "Available Now"
                                                                                    ? "bg-emerald-500/10 text-emerald-600"
                                                                                    : "bg-orange-500/10 text-orange-600"
                                                                              }`}
                                                                  >
                                                                        {provider.status.split(' ')[0]}
                                                                  </Badge>
                                                            </div>
                                                      </CardHeader>

                                                      <CardContent className="px-5 py-0 flex-1">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                  <div className="flex items-center gap-0.5">
                                                                        <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
                                                                        <span className="text-sm font-bold ml-1">{provider.rating}</span>
                                                                        <span className="text-[10px] text-muted-foreground ml-1">({provider.reviews})</span>
                                                                  </div>
                                                                  <div className="w-1 h-1 rounded-full bg-border" />
                                                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                                        <MapPin className="h-3 w-3" />
                                                                        {provider.location}
                                                                  </div>
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border/30">
                                                                  <div className="space-y-0.5">
                                                                        <span className="text-[10px] text-muted-foreground uppercase font-semibold">Experience</span>
                                                                        <p className="text-xs font-bold">{provider.experience}</p>
                                                                  </div>
                                                                  <div className="space-y-0.5 text-right">
                                                                        <span className="text-[10px] text-muted-foreground uppercase font-semibold">Rate</span>
                                                                        <p className="text-xs font-black text-emerald-600">{provider.price}</p>
                                                                  </div>
                                                            </div>
                                                      </CardContent>

                                                      <CardFooter className="p-4 grid grid-cols-2 gap-2">
                                                            <Button variant="ghost" size="sm" className="h-10 sm:h-9 hover:bg-emerald-50 hover:text-emerald-600 border border-transparent hover:border-emerald-100 transition-all">
                                                                  <MessageSquare className="mr-2 h-4 w-4 sm:h-3.5 sm:w-3.5" />
                                                                  Chat
                                                            </Button>
                                                            <Link href={`/profile/${provider.id}`} className="w-full">
                                                                  <Button size="sm" className="w-full h-10 sm:h-9 bg-linear-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all font-bold">
                                                                        View Profile
                                                                  </Button>
                                                            </Link>
                                                      </CardFooter>
                                                </Card>
                                          </motion.div>
                                    ))}
                              </div>
                        </div>
                  </main>

                  <Footer />
            </div>
      );
}
