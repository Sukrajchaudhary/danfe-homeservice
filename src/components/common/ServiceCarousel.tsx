"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard, ServiceItem } from "./ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCarouselProps {
      title: string;
      services: ServiceItem[];
      className?: string;
}

export function ServiceCarousel({
      title,
      services,
      className = ""
}: ServiceCarouselProps) {
      const containerRef = useRef<HTMLDivElement>(null);
      const [canScrollLeft, setCanScrollLeft] = useState(false);
      const [canScrollRight, setCanScrollRight] = useState(true);

      const checkScroll = () => {
            if (containerRef.current) {
                  const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                  setCanScrollLeft(scrollLeft > 5);
                  setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
            }
      };

      useEffect(() => {
            const container = containerRef.current;
            if (container) {
                  container.addEventListener("scroll", checkScroll);
                  checkScroll();
            }
            window.addEventListener("resize", checkScroll);

            return () => {
                  if (container) container.removeEventListener("scroll", checkScroll);
                  window.removeEventListener("resize", checkScroll);
            };
      }, []);

      const scroll = (direction: "left" | "right") => {
            if (containerRef.current) {
                  const scrollAmount = containerRef.current.clientWidth * 0.7;
                  containerRef.current.scrollBy({
                        left: direction === "left" ? -scrollAmount : scrollAmount,
                        behavior: "smooth",
                  });
            }
      };

      return (
            <section className={`mt-10 bg-white overflow-hidden ${className}`}>
                  <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between mb-4">
                              <h2 className="text-2xl font-bold text-[#1e293b] tracking-tight sm:text-3xl">
                                    {title}
                              </h2>
                        </div>

                        <div className="relative group">
                              {/* Navigation Controls */}
                              <AnimatePresence>
                                    {canScrollLeft && (
                                          <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="absolute -left-5 top-[35%] z-20 hidden md:block"
                                          >
                                                <Button
                                                      variant="outline"
                                                      size="icon"
                                                      className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-xl hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                                                      onClick={() => scroll("left")}
                                                >
                                                      <ChevronLeft className="h-6 w-6" />
                                                </Button>
                                          </motion.div>
                                    )}
                              </AnimatePresence>

                              <AnimatePresence>
                                    {canScrollRight && (
                                          <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="absolute -right-5 top-[35%] z-20 hidden md:block"
                                          >
                                                <Button
                                                      variant="outline"
                                                      size="icon"
                                                      className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-xl hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                                                      onClick={() => scroll("right")}
                                                >
                                                      <ChevronRight className="h-6 w-6" />
                                                </Button>
                                          </motion.div>
                                    )}
                              </AnimatePresence>

                              {/* Carousel Viewport */}
                              <div
                                    ref={containerRef}
                                    className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 px-1 scroll-smooth"
                                    style={{
                                          msOverflowStyle: 'none',
                                          scrollbarWidth: 'none',
                                          WebkitOverflowScrolling: 'touch'
                                    }}
                              >
                                    <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

                                    {services.map((service, index) => (
                                          <div
                                                key={index}
                                                className="flex-none w-[85%] sm:w-[50%] md:w-[33.333%] lg:w-[25%] xl:w-[20%] snap-start "
                                          >

                                                <ServiceCard {...service} />
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
}
