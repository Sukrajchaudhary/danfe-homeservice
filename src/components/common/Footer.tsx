"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
      Star,
      Facebook,
      Instagram,
      Music,
      Phone,
      MessageCircle,
      CheckCircle,
} from "lucide-react";

const footerLinks = {
      "Quick Links": [
            { label: "Notifications", href: "#" },
            { label: "Device Login", href: "#" },
            { label: "Subscription Plan", href: "#" },
            { label: "Transactions", href: "#" },
      ],
      "Company": [
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "#" },
            { label: "Help & Support", href: "#" },
      ],
      "Legal": [
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Refund Policy", href: "#" },
      ],
};

export function Footer() {
      return (
            <footer className="relative bg-[#266265] overflow-hidden">


                  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                              {/* Brand Section */}
                              <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                          <div className="bg-white p-2 rounded-xs shadow-lg">
                                                <div className="flex items-center gap-2">
                                                      <CheckCircle className="h-6 w-6 text-[#006767]" />
                                                      <span className="text-[#006767] font-black text-lg tracking-tight">Danfe</span>
                                                </div>
                                          </div>
                                    </div>

                                    <p className="text-teal-50/70 text-sm font-medium leading-relaxed max-w-xs">
                                          Your trusted partner for professional plumbing, electrical, and essential home services. Quality maintenance made simple.
                                    </p>

                                    <div className="space-y-4 pt-2">
                                          <h4 className="text-white font-black text-sm uppercase tracking-widest">Customer Support</h4>
                                          <div className="space-y-3">
                                                <a href="tel:+97723591379" className="flex items-center gap-3 text-teal-50/80 hover:text-white transition-colors group">
                                                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                                                            <Phone className="h-4 w-4" />
                                                      </div>
                                                      <span className="text-sm font-bold">+977 23591379</span>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 text-teal-50/80 hover:text-white transition-colors group">
                                                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                                                            <MessageCircle className="h-4 w-4" />
                                                      </div>
                                                      <span className="text-sm font-bold">WhatsApp Support</span>
                                                </a>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-4">
                                          {[Facebook, Instagram, Music].map((Icon, i) => (
                                                <motion.a
                                                      key={i}
                                                      whileHover={{ scale: 1.1, y: -2 }}
                                                      href="#"
                                                      className="h-10 w-10 flex items-center justify-center rounded-full bg-teal-800/50 text-white hover:bg-[#008080] transition-all border border-teal-700/50"
                                                >
                                                      <Icon className="h-5 w-5" />
                                                </motion.a>
                                          ))}
                                    </div>
                              </div>

                              {/* Links Sections */}
                              {Object.entries(footerLinks).map(([title, links]) => (
                                    <div key={title} className="space-y-6">
                                          <h4 className="text-white font-black text-base tracking-tight">
                                                {title}
                                          </h4>
                                          <ul className="space-y-4">
                                                {links.map((link) => (
                                                      <li key={link.label}>
                                                            <Link
                                                                  href={link.href}
                                                                  className="text-teal-50/70 hover:text-white text-sm font-bold transition-colors block"
                                                            >
                                                                  {link.label}
                                                            </Link>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              ))}
                        </div>

                        <div className="border-t border-white/10 pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                              <div className="text-center md:text-left space-y-2">
                                    <p className="text-teal-50/50 text-[11px] font-bold uppercase tracking-[0.2em]">
                                          © 2026 Danfe. All Rights Reserved.
                                    </p>
                                    <p className="text-teal-50/40 text-[10px] font-medium tracking-wide">
                                          Professional Home Maintenance Solutions
                                    </p>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}
