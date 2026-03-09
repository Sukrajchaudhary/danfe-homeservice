"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PillButton } from "@/components/ui/PillButton";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, stats } from "@/config/landing-page";

const changeableTexts = [
      "Hire Home Service Talents",
      "Start Your Career",
      "Sell Your Services"
];

export function Hero() {
      const [textIndex, setTextIndex] = useState(0);

      useEffect(() => {
            const interval = setInterval(() => {
                  setTextIndex((prev) => (prev + 1) % changeableTexts.length);
            }, 3000);
            return () => clearInterval(interval);
      }, []);

      return (
            <section className="relative overflow-hidden">
                  {/* Background linear Orbs */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px]" />
                        <div className="absolute top-20 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />
                  </div>

                  <div className="relative mx-auto max-w-7xl px-4 py-30">
                        <motion.div
                              initial="initial"
                              animate="animate"
                              variants={staggerContainer}
                              className="mx-auto max-w-4xl text-center"
                        >
                              <motion.div variants={fadeInUp}>
                                    <Badge
                                          variant="secondary"
                                          className="mb-6 px-4 py-1.5 text-sm font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/15"
                                    >
                                          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                                          Reliable Home Services
                                    </Badge>
                              </motion.div>

                              <motion.h1
                                    variants={fadeInUp}
                                    className="text-4xl font-bold tracking-tight"
                              >
                                    Expert Care to{" "}
                                    <div className="h-[1.1em] overflow-hidden mt-2">
                                          <AnimatePresence mode="wait">
                                                <motion.span
                                                      key={textIndex}
                                                      initial={{ y: 20, opacity: 0 }}
                                                      animate={{ y: 0, opacity: 1 }}
                                                      exit={{ y: -20, opacity: 0 }}
                                                      transition={{ duration: 0.5 }}
                                                      className="block text-3xl sm:text-4xl lg:text-5xl bg-linear-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent"
                                                >
                                                      {changeableTexts[textIndex]}
                                                </motion.span>
                                          </AnimatePresence>
                                    </div>
                              </motion.h1>

                              <motion.p
                                    variants={fadeInUp}
                                    className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                              >
                                    Find verified plumbers, electricians, and service professionals.
                                    Register your skills, find quality jobs, and manage your profession with ease.
                              </motion.p>

                              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/auth/register">
                                          <PillButton
                                                size="lg"
                                                className="h-12 px-10 text-base"
                                                motionProps={{ variants: fadeInUp }}
                                          >
                                                Join as Professional
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                          </PillButton>
                                    </Link>
                                    <Link href="/services">
                                          <PillButton
                                                variant="outline"
                                                size="lg"
                                                className="h-12 px-10 text-base"
                                                motionProps={{ variants: fadeInUp }}
                                          >
                                                Browse Services
                                          </PillButton>
                                    </Link>
                              </div>

                              {/* Stats */}
                              <motion.div
                                    variants={fadeInUp}
                                    className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
                              >
                                    {stats.map((stat) => (
                                          <div key={stat.label} className="text-center">
                                                <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                                      {stat.value}
                                                </div>
                                                <div className="mt-1 text-sm text-muted-foreground">
                                                      {stat.label}
                                                </div>
                                          </div>
                                    ))}
                              </motion.div>
                        </motion.div>
                  </div>
            </section>
      );
}
