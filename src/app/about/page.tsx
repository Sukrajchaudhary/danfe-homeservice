"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ArrowRight, Target, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import Link from "next/link";

const values = [
      {
            icon: Target,
            title: "Our Mission",
            description:
                  "To be the most reliable and efficient bridge between homeowners and professional service providers.",
            gradient: "from-emerald-500 to-green-500",
      },
      {
            icon: Heart,
            title: "Trust First",
            description:
                  "Safety and trust are our top priorities. We verify every professional to ensure your home is in safe hands.",
            gradient: "from-green-500 to-teal-500",
      },
      {
            icon: Lightbulb,
            title: "Innovation",
            description:
                  "We use smart technology to make booking and managing home services as easy as tap, tap, done.",
            gradient: "from-teal-500 to-emerald-500",
      },
      {
            icon: ShieldCheck,
            title: "Quality Support",
            description:
                  "Our dedicated support team is available 24/7 to ensure every job is completed to your satisfaction.",
            gradient: "from-emerald-600 to-green-600",
      },
];

const team = [
      {
            name: "Sunil Sharma",
            role: "Founder & CEO",
            avatar: "S",
            gradient: "from-emerald-600 to-green-600",
      },
      {
            name: "Priya Rana",
            role: "Head of Operations",
            avatar: "P",
            gradient: "from-green-500 to-teal-500",
      },
      {
            name: "Bishal Thapa",
            role: "Service Coordinator",
            avatar: "B",
            gradient: "from-teal-500 to-emerald-500",
      },
      {
            name: "Deepa Rai",
            role: "Community Manager",
            avatar: "D",
            gradient: "from-emerald-400 to-green-400",
      },
];

export default function AboutPage() {
      return (
            <div className="min-h-screen flex flex-col">
                  <Navbar />

                  {/* Hero */}
                  <section className="relative overflow-hidden py-20 sm:py-32">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <div className="absolute -top-40 left-1/3 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px]" />
                              <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
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
                                          Our Story
                                    </Badge>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                          Elevating Home Care with{" "}
                                          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                                Modern Solutions
                                          </span>
                                    </h1>
                                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                          We started Danfe Home Services with a simple vision: to bring trust,
                                          quality, and professional reliability to every household in our community.
                                    </p>
                              </motion.div>
                        </div>
                  </section>

                  {/* Values */}
                  <section className="py-16 sm:py-24 bg-emerald-50/30 dark:bg-emerald-950/10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-center mb-12"
                              >
                                    <h2 className="text-3xl sm:text-4xl font-bold">Our core Values</h2>
                                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                                          The principles that define our commitment to homeowners and service professionals.
                                    </p>
                              </motion.div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {values.map((value, index) => (
                                          <motion.div
                                                key={value.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                          >
                                                <Card className="border-border/50 bg-background/50 backdrop-blur-sm h-full text-center hover:shadow-md transition-shadow">
                                                      <CardContent className="p-6">
                                                            <div
                                                                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-lg mb-4`}
                                                            >
                                                                  <value.icon className="h-6 w-6 text-white" />
                                                            </div>
                                                            <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                                                                  {value.title}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                  {value.description}
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </motion.div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Team */}
                  <section className="py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-center mb-12"
                              >
                                    <h2 className="text-3xl sm:text-4xl font-bold">The Faces Behind Danfe</h2>
                                    <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                                          Meet the team working around the clock to ensure your home services are handled by the best experts.
                                    </p>
                              </motion.div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {team.map((member, index) => (
                                          <motion.div
                                                key={member.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                          >
                                                <Card className="border-border/50 bg-background/50 text-center group hover:border-emerald-500/30 transition-all duration-300">
                                                      <CardContent className="p-6">
                                                            <motion.div
                                                                  whileHover={{ scale: 1.05 }}
                                                                  className={`mx-auto h-20 w-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg`}
                                                            >
                                                                  {member.avatar}
                                                            </motion.div>
                                                            <h3 className="font-semibold">{member.name}</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                  {member.role}
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </motion.div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* CTA */}
                  <section className="py-20 mb-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                              >
                                    <h2 className="text-3xl font-bold mb-4">
                                          Ready to experience the difference?
                                    </h2>
                                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                                          Join thousands of families who trust Danfe Home Services for their daily needs.
                                    </p>
                                    <Link href="/auth/register">
                                          <Button
                                                size="lg"
                                                className="h-12 px-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
                                          >
                                                Join Us Today <ArrowRight className="ml-2 h-4 w-4" />
                                          </Button>
                                    </Link>
                              </motion.div>
                        </div>
                  </section>

                  <Footer />
            </div>
      );
}
