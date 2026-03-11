"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/config/landing-page";

export function Testimonials() {
      return (
            <section className="py-20 bg-emerald-50/10">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-8"
                        >
                              <Badge
                                    variant="secondary"
                                    className="mb-4 px-4 py-1 text-xs font-medium border-emerald-200 text-emerald-700"
                              >
                                    Success Stories
                              </Badge>
                              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                    Trusted by{" "}
                                    <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                          Professionals & Homeowners
                                    </span>{" "}
                                    Alike
                              </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {testimonials.map((testimonial, index) => (
                                    <motion.div
                                          key={testimonial.name}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                          <Card className="border-border/50 bg-background/50 backdrop-blur-sm h-full hover:shadow-md transition-shadow">
                                                <CardContent className="p-6">
                                                      <div className="flex items-center gap-1 mb-4">
                                                            {[...Array(5)].map((_, i) => (
                                                                  <Star
                                                                        key={i}
                                                                        className="h-4 w-4 fill-emerald-400 text-emerald-400"
                                                                  />
                                                            ))}
                                                      </div>
                                                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                            &ldquo;{testimonial.content}&rdquo;
                                                      </p>
                                                      <div className="flex items-center gap-3">
                                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-green-600 text-white font-bold text-sm">
                                                                  {testimonial.avatar}
                                                            </div>
                                                            <div>
                                                                  <p className="text-sm font-semibold">{testimonial.name}</p>
                                                                  <p className="text-xs text-muted-foreground">
                                                                        {testimonial.role}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </CardContent>
                                          </Card>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}
