"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
      return (
            <section className="">
                  <div className="">
                        <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="relative overflow-hidden  bg-linear-to-br from-emerald-600 via-green-600 to-teal-600 p-8 sm:p-16 text-center"
                        >
                              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                              <div className="relative">
                                    <h2 className="text-3xl  font-bold text-white tracking-tight">
                                          Ready to Grow Your Service Business?
                                    </h2>
                                    <p className="mt-4 text-xs md:text-lg text-white/80 max-w-2xl mx-auto">
                                          Join Danfe today. Register as a service provider, buy
                                          subscription plans, and start getting quality job leads instantly.
                                    </p>

                                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                          <Link href="/auth/register">
                                                <Button
                                                      size="lg"
                                                      className="h-12 px-8 rounded-full text-base bg-white text-emerald-700 hover:bg-white/90 shadow-xl"
                                                >
                                                      Start Free Trial
                                                      <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                          </Link>

                                    </div>
                              </div>
                        </motion.div>
                  </div>
            </section>
      );
}
