"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
      useBlogs,
      useFeaturedTrips,
      useCategories,
      useTestimonials,
      useActivePlans,
} from "@/hooks";
import {
      Calendar,
      MapPin,
      Star,
      Users,
      TrendingUp,
      Heart,
      MessageSquare,
      ArrowRight,
      Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export default function BlogsPage() {
      const [page, setPage] = useState(1);
      const { data: blogsData, isLoading: blogsLoading } = useBlogs(page, 6);
      const { data: featuredTrips, isLoading: tripsLoading } = useFeaturedTrips();
      const { data: categoriesData, isLoading: categoriesLoading } =
            useCategories(1, 8);
      const { data: testimonialsData, isLoading: testimonialsLoading } =
            useTestimonials(1, 3);
      const { data: plans, isLoading: plansLoading } = useActivePlans();

      return (
            <div className="min-h-screen flex flex-col">
                  <Navbar />

                  {/* Hero Section */}
                  <section className="relative overflow-hidden py-20 sm:py-28">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px]" />
                              <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-green-500/15 rounded-full blur-[120px]" />
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
                                          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                                          Tips & Industry News
                                    </Badge>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                          Master Your{" "}
                                          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                                Service Profession
                                          </span>
                                    </h1>
                                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                                          Expert guides for home maintenance, professional plumbing tips,
                                          and stories from our verified service providers.
                                    </p>
                              </motion.div>
                        </div>
                  </section>

                  {/* Featured Services Section */}
                  <section className="py-16 bg-muted/30">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="flex items-center justify-between mb-8">
                                    <div>
                                          <h2 className="text-3xl font-bold">Featured Services</h2>
                                          <p className="text-muted-foreground mt-1">
                                                Top-rated maintenance solutions by verified experts
                                          </p>
                                    </div>
                                    <Link href="/services">
                                          <Button variant="outline">
                                                View All
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                          </Button>
                                    </Link>
                              </div>

                              {tripsLoading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {[...Array(3)].map((_, i) => (
                                                <Card key={i}>
                                                      <Skeleton className="h-48 w-full rounded-t-lg" />
                                                      <CardContent className="p-6">
                                                            <Skeleton className="h-6 w-3/4 mb-2" />
                                                            <Skeleton className="h-4 w-full mb-4" />
                                                            <Skeleton className="h-4 w-1/2" />
                                                      </CardContent>
                                                </Card>
                                          ))}
                                    </div>
                              ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {featuredTrips?.slice(0, 3).map((trip, index) => (
                                                <motion.div
                                                      key={trip._id}
                                                      initial={{ opacity: 0, y: 20 }}
                                                      animate={{ opacity: 1, y: 0 }}
                                                      transition={{ delay: index * 0.1 }}
                                                >
                                                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                                            <div className="relative h-48 bg-gradient-to-br from-emerald-500 to-green-500 overflow-hidden">
                                                                  {trip.coverImage && (
                                                                        <img
                                                                              src={trip.coverImage}
                                                                              alt={trip.title}
                                                                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                        />
                                                                  )}
                                                                  <div className="absolute top-4 right-4">
                                                                        <Badge className="bg-white/90 text-emerald-600 hover:bg-white">
                                                                              Certified
                                                                        </Badge>
                                                                  </div>
                                                            </div>
                                                            <CardContent className="p-6">
                                                                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                                                                        {trip.title}
                                                                  </h3>
                                                                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                                                        {trip.shortDescription || trip.description}
                                                                  </p>
                                                                  <div className="flex items-center justify-between text-sm">
                                                                        <div className="flex items-center gap-4">
                                                                              <span className="flex items-center gap-1 text-muted-foreground">
                                                                                    <Calendar className="h-4 w-4" />
                                                                                    {trip.duration}
                                                                              </span>
                                                                              {trip.location && (
                                                                                    <span className="flex items-center gap-1 text-muted-foreground">
                                                                                          <MapPin className="h-4 w-4" />
                                                                                          {trip.location}
                                                                                    </span>
                                                                              )}
                                                                        </div>
                                                                  </div>
                                                                  <div className="mt-4 flex items-center justify-between">
                                                                        <div className="text-2xl font-bold text-emerald-600">
                                                                              ${trip.discountPrice || trip.price}
                                                                              {trip.discountPrice && (
                                                                                    <span className="text-sm text-muted-foreground line-through ml-2">
                                                                                          ${trip.price}
                                                                                    </span>
                                                                              )}
                                                                        </div>
                                                                        <Button size="sm" className="group-hover:bg-emerald-600">
                                                                              Book Now
                                                                        </Button>
                                                                  </div>
                                                            </CardContent>
                                                      </Card>
                                                </motion.div>
                                          ))}
                                    </div>
                              )}
                        </div>
                  </section>

                  {/* Blogs Section */}
                  <section className="py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
                                    <p className="text-muted-foreground mt-2">
                                          Stay updated with our latest stories and insights
                                    </p>
                              </div>

                              {blogsLoading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {[...Array(6)].map((_, i) => (
                                                <Card key={i}>
                                                      <Skeleton className="h-48 w-full rounded-t-lg" />
                                                      <CardContent className="p-6">
                                                            <Skeleton className="h-6 w-3/4 mb-2" />
                                                            <Skeleton className="h-4 w-full mb-2" />
                                                            <Skeleton className="h-4 w-2/3" />
                                                      </CardContent>
                                                </Card>
                                          ))}
                                    </div>
                              ) : (
                                    <>
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {blogsData?.docs.map((blog, index) => (
                                                      <motion.div
                                                            key={blog._id}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.1 }}
                                                      >
                                                            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                                                  {blog.coverImage && (
                                                                        <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-green-500/20 overflow-hidden">
                                                                              <img
                                                                                    src={blog.coverImage}
                                                                                    alt={blog.title}
                                                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                                              />
                                                                        </div>
                                                                  )}
                                                                  <CardContent className="p-6 flex-1 flex flex-col">
                                                                        <div className="flex items-center gap-2 mb-3">
                                                                              {blog.tags?.slice(0, 2).map((tag) => (
                                                                                    <Badge
                                                                                          key={tag}
                                                                                          variant="secondary"
                                                                                          className="text-xs"
                                                                                    >
                                                                                          {tag}
                                                                                    </Badge>
                                                                              ))}
                                                                        </div>
                                                                        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-emerald-600 transition-colors cursor-pointer">
                                                                              {blog.title}
                                                                        </h3>
                                                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                                                                              {blog.excerpt || blog.content.substring(0, 150)}...
                                                                        </p>
                                                                        <div className="flex items-center justify-between pt-4 border-t">
                                                                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                                                    <span className="flex items-center gap-1">
                                                                                          <Heart className="h-4 w-4" />
                                                                                          {blog.likesCount || 0}
                                                                                    </span>
                                                                                    <span className="flex items-center gap-1">
                                                                                          <MessageSquare className="h-4 w-4" />
                                                                                          {blog.commentsCount || 0}
                                                                                    </span>
                                                                              </div>
                                                                              <Button variant="ghost" size="sm">
                                                                                    Read More
                                                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                                              </Button>
                                                                        </div>
                                                                  </CardContent>
                                                            </Card>
                                                      </motion.div>
                                                ))}
                                          </div>

                                          {/* Pagination */}
                                          {blogsData && blogsData.totalPages > 1 && (
                                                <div className="flex justify-center gap-2 mt-12">
                                                      <Button
                                                            variant="outline"
                                                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                                                            disabled={page === 1}
                                                      >
                                                            Previous
                                                      </Button>
                                                      <div className="flex items-center gap-2">
                                                            {[...Array(blogsData.totalPages)].map((_, i) => (
                                                                  <Button
                                                                        key={i}
                                                                        variant={page === i + 1 ? "default" : "outline"}
                                                                        onClick={() => setPage(i + 1)}
                                                                        size="sm"
                                                                  >
                                                                        {i + 1}
                                                                  </Button>
                                                            ))}
                                                      </div>
                                                      <Button
                                                            variant="outline"
                                                            onClick={() =>
                                                                  setPage((p) => Math.min(blogsData.totalPages, p + 1))
                                                            }
                                                            disabled={page === blogsData.totalPages}
                                                      >
                                                            Next
                                                      </Button>
                                                </div>
                                          )}
                                    </>
                              )}
                        </div>
                  </section>

                  {/* Categories Section */}
                  <section className="py-16 bg-muted/30">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold">Browse Categories</h2>
                                    <p className="text-muted-foreground mt-2">
                                          Explore content by your interests
                                    </p>
                              </div>

                              {categoriesLoading ? (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                          {[...Array(8)].map((_, i) => (
                                                <Skeleton key={i} className="h-32 rounded-lg" />
                                          ))}
                                    </div>
                              ) : (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                          {categoriesData?.docs.map((category, index) => (
                                                <motion.div
                                                      key={category._id}
                                                      initial={{ opacity: 0, scale: 0.9 }}
                                                      whileInView={{ opacity: 1, scale: 1 }}
                                                      viewport={{ once: true }}
                                                      transition={{ delay: index * 0.05 }}
                                                >
                                                      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                                                            <CardContent className="p-6 text-center">
                                                                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                        <TrendingUp className="h-6 w-6 text-white" />
                                                                  </div>
                                                                  <h3 className="font-semibold group-hover:text-emerald-600 transition-colors">
                                                                        {category.name}
                                                                  </h3>
                                                                  {category.description && (
                                                                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                                                              {category.description}
                                                                        </p>
                                                                  )}
                                                            </CardContent>
                                                      </Card>
                                                </motion.div>
                                          ))}
                                    </div>
                              )}
                        </div>
                  </section>

                  {/* Testimonials Section */}
                  <section className="py-16">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold">What Our Users Say</h2>
                                    <p className="text-muted-foreground mt-2">
                                          Real experiences from our community
                                    </p>
                              </div>

                              {testimonialsLoading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                          {[...Array(3)].map((_, i) => (
                                                <Card key={i}>
                                                      <CardContent className="p-6">
                                                            <Skeleton className="h-20 w-full mb-4" />
                                                            <Skeleton className="h-4 w-1/2" />
                                                      </CardContent>
                                                </Card>
                                          ))}
                                    </div>
                              ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                          {testimonialsData?.docs.map((testimonial, index) => (
                                                <motion.div
                                                      key={testimonial._id}
                                                      initial={{ opacity: 0, y: 20 }}
                                                      whileInView={{ opacity: 1, y: 0 }}
                                                      viewport={{ once: true }}
                                                      transition={{ delay: index * 0.1 }}
                                                >
                                                      <Card className="h-full hover:shadow-lg transition-shadow">
                                                            <CardContent className="p-6">
                                                                  <div className="flex items-center gap-1 mb-4">
                                                                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                                              <Star
                                                                                    key={i}
                                                                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                                              />
                                                                        ))}
                                                                  </div>
                                                                  <p className="text-muted-foreground mb-6 italic">
                                                                        "{testimonial.content}"
                                                                  </p>
                                                                  <div className="flex items-center gap-3">
                                                                        <Avatar>
                                                                              <AvatarImage src={testimonial.avatar} />
                                                                              <AvatarFallback className="bg-gradient-to-br from-emerald-600 to-green-600 text-white">
                                                                                    {testimonial.name
                                                                                          .split(" ")
                                                                                          .map((n) => n[0])
                                                                                          .join("")}
                                                                              </AvatarFallback>
                                                                        </Avatar>
                                                                        <div>
                                                                              <p className="font-semibold">{testimonial.name}</p>
                                                                              {testimonial.title && (
                                                                                    <p className="text-sm text-muted-foreground">
                                                                                          {testimonial.title}
                                                                                    </p>
                                                                              )}
                                                                        </div>
                                                                  </div>
                                                            </CardContent>
                                                      </Card>
                                                </motion.div>
                                          ))}
                                    </div>
                              )}
                        </div>
                  </section>

                  {/* Plans Section */}
                  <section className="py-16 bg-muted/30">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold">Choose Your Plan</h2>
                                    <p className="text-muted-foreground mt-2">
                                          Select the perfect plan for your needs
                                    </p>
                              </div>

                              {plansLoading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                          {[...Array(3)].map((_, i) => (
                                                <Skeleton key={i} className="h-96 rounded-lg" />
                                          ))}
                                    </div>
                              ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                          {plans?.slice(0, 3).map((plan, index) => (
                                                <motion.div
                                                      key={plan._id}
                                                      initial={{ opacity: 0, y: 20 }}
                                                      whileInView={{ opacity: 1, y: 0 }}
                                                      viewport={{ once: true }}
                                                      transition={{ delay: index * 0.1 }}
                                                >
                                                      <Card
                                                            className={`h-full hover:shadow-2xl transition-all duration-300 ${index === 1
                                                                  ? "border-emerald-500 shadow-lg scale-105"
                                                                  : ""
                                                                  }`}
                                                      >
                                                            <CardHeader>
                                                                  {index === 1 && (
                                                                        <Badge className="w-fit mb-2 bg-emerald-600">
                                                                              Most Popular
                                                                        </Badge>
                                                                  )}
                                                                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                                                  <div className="mt-4">
                                                                        <span className="text-4xl font-bold">
                                                                              ${plan.price}
                                                                        </span>
                                                                        <span className="text-muted-foreground">
                                                                              /{plan.duration}
                                                                        </span>
                                                                  </div>
                                                            </CardHeader>
                                                            <CardContent>
                                                                  <ul className="space-y-3 mb-6">
                                                                        {plan.features.map((feature, i) => (
                                                                              <li key={i} className="flex items-start gap-2">
                                                                                    <div className="mt-0.5 rounded-full bg-emerald-500/10 p-1">
                                                                                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                                                    </div>
                                                                                    <span className="text-sm">{feature}</span>
                                                                              </li>
                                                                        ))}
                                                                  </ul>
                                                                  <Button
                                                                        className={`w-full ${index === 1
                                                                              ? "bg-emerald-600 hover:bg-emerald-700"
                                                                              : ""
                                                                              }`}
                                                                        variant={index === 1 ? "default" : "outline"}
                                                                  >
                                                                        Get Started
                                                                  </Button>
                                                            </CardContent>
                                                      </Card>
                                                </motion.div>
                                          ))}
                                    </div>
                              )}
                        </div>
                  </section>

                  <Footer />
            </div>
      );
}
