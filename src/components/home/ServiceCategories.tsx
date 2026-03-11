"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
      { name: "Automobile", icon: "/services/Automobile.webp", href: "/services/automobile" },
      { name: "Home Repairs", icon: "/services/Home repair.webp", href: "/services/home-repairs" },
      { name: "Pet Care", icon: "/services/Pet.webp", href: "/services/pet-care" },
      { name: "Professional Services", icon: "/services/Professionalservices.webp", href: "/services/professional-services" },
      { name: "Health & Wellness", icon: "/services/Health.webp", href: "/services/health-wellness" },
      { name: "Tech and Digital Services", icon: "/services/Digital and tech.webp", href: "/services/tech-digital" },
      { name: "Personal Service", icon: "/services/Personal service.webp", href: "/services/personal-service" },
      { name: "Home Improvement", icon: "/services/Home improvement.webp", href: "/services/home-improvement" },
      { name: "Professional Trainings", icon: "/services/Training.webp", href: "/services/professional-trainings" },
];

export function ServiceCategories() {
      return (
            <section className="py-12 bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 ">
                        <div className="text-start mb-4">
                              <h2 className="text-2xl font-semibold  tracking-tight">
                                    Find By Category                              </h2>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-x-6 gap-y-6 ">

                              {categories.map((category, index) => (
                                    <motion.div
                                          key={category.name}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.5, delay: index * 0.05 }}
                                          className="flex flex-col w-full h-full items-center text-center group"
                                    >
                                          <Link href={category.href} className="flex flex-col items-center group">
                                                <div className="relative w-24 h-24   transition-all duration-300 group-hover:scale-110">
                                                      <Image
                                                            src={category.icon}
                                                            alt={category.name}
                                                            fill
                                                            className="object-cover"
                                                            priority={index < 7}
                                                      />
                                                </div>
                                                <span className="text-xs md:text-sm font-medium text-slate-600 group-hover:text-[#006767] transition-colors leading-tight">
                                                      {category.name}
                                                </span>
                                          </Link>

                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}
