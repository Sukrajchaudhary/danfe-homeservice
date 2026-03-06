"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
      Star,
      MapPin,
      CheckCircle2,
      Phone,
      MessageSquare,
      ArrowLeft,
      Calendar,
      ShieldCheck,
      Award,
      Zap,
      Wrench,
      Clock,
      ThumbsUp,
      User,
      Briefcase,
      Image as ImageIcon,
      FileText,
      CheckCircle,
      Eye
} from "lucide-react";

// Mock data for a detailed provider profile
const mockProviderProfiles: Record<string, any> = {
      "p1": {
            id: "p1",
            name: "Asim Pun Magar",
            role: "Middle UX Designer, Data Entry Specialist, Frontend Developer",
            professionalTitle: "UI/UX Designer, Data Entry Specialist, Frontend Developer",
            location: "Gokarneshwor - Nepal",
            about: "UI/UX Designer, Data Entry Specialist, Frontend Developer",
            stats: [
                  { label: "Total Earnings", value: "NPR 0" },
                  { label: "Rating", value: "0" },
                  { label: "Total Jobs", value: "0" }
            ],
            skills: [
                  "Graphic Design Services", "Website and App UI/UX Design", "Development & IT",
                  "Web Development", "CMS and No Code Development", "UI/UX Design",
                  "Writing and Translation", "Copywriting"
            ],
            workHistory: [
                  {
                        title: "Junior Digital Technology and Software Developer",
                        company: "EasyMy Learning – Sundarijal",
                        duration: "1.5 years of experience"
                  },
                  {
                        title: "IT Head",
                        company: "Xavier Computer & Coding Club – Kathmandu, Nepal",
                        duration: "1 year of experience"
                  }
            ],
            certificates: [
                  {
                        title: "IT Head",
                        date: "Achieved 08 September 2025",
                        image: "https://images.unsplash.com/photo-1589330694653-96b6379963e6?w=200&h=150&fit=crop"
                  },
                  {
                        title: "Junior Digital Technology and Software Developer",
                        date: "Achieved 24 May 2025",
                        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=150&fit=crop"
                  }
            ],
            gallery: [
                  "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
                  "https://images.unsplash.com/photo-1621905252507-b354bc2addcc?w=400&h=400&fit=crop"
            ],
            reviews: []
      }
};

export default function ProviderProfilePage({ params }: { params: Promise<{ id: string }> }) {
      const { id } = use(params);
      const profile = mockProviderProfiles[id] || mockProviderProfiles["p1"];
      const [activeTab, setActiveTab] = useState("about");

      return (
            <div className="min-h-screen flex flex-col bg-[#f0f9f9]">
                  <Navbar />

                  <main className="flex-1 pb-20">
                        {/* Banner Image */}
                        <div className="h-40 sm:h-56 md:h-72 w-full overflow-hidden relative group">
                              <img
                                    src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=600&fit=crop"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    alt="Banner"
                              />
                              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
                        </div>

                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-10">
                              {/* Floating Profile Card */}
                              <Card className="border-none shadow-2xl rounded-md bg-white overflow-hidden mb-6 sm:mb-8 transition-all hover:shadow-teal-500/10">
                                    <CardContent className="p-4 sm:p-8">
                                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                                      <div className="relative">
                                                            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 rounded-md border-4 border-white shadow-xl">
                                                                  <AvatarImage src={`https://images.unsplash.com/photo-1540561214060-f47a5089f899?w=300&h=300&fit=crop`} className="object-cover" />
                                                                  <AvatarFallback className="text-3xl bg-teal-600 text-white font-bold">AP</AvatarFallback>
                                                            </Avatar>
                                                            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-lg border border-slate-100">
                                                                  <CheckCircle className="h-5 w-5 text-emerald-500 fill-emerald-50" />
                                                            </div>
                                                      </div>
                                                      <div className="text-center sm:text-left space-y-1 sm:space-y-2 mt-2 sm:mt-0">
                                                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">{profile.name}</h2>
                                                            <div className="flex items-center justify-center sm:justify-start gap-2 text-teal-600 font-bold">
                                                                  <MapPin className="h-4 w-4" />
                                                                  <span className="text-sm tracking-tight">{profile.location}</span>
                                                            </div>
                                                            <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                                                                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700 font-black px-6 h-9 rounded-md transition-all active:scale-95">
                                                                        Hire Me
                                                                  </Button>
                                                                  <Button size="sm" variant="outline" className="border-teal-100 text-teal-700 hover:bg-teal-50 font-black h-9 rounded-md px-6">
                                                                        Message
                                                                  </Button>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full lg:w-auto mt-4 lg:mt-0">
                                                      {profile.stats.map((stat: any, index: number) => (
                                                            <div key={index} className="bg-slate-50/50 rounded-md p-3 sm:p-5 text-center border border-slate-100 flex flex-col justify-center min-w-0 transition-all hover:bg-white hover:border-teal-100 hover:shadow-md group">
                                                                  <div className="text-base sm:text-2xl font-black text-slate-900 group-hover:text-teal-600 transition-colors">{stat.value}</div>
                                                                  <div className="text-[9px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 line-clamp-1">{stat.label}</div>
                                                            </div>
                                                      ))}
                                                </div>
                                          </div>
                                    </CardContent>
                              </Card>

                              <Tabs defaultValue="about" onValueChange={setActiveTab} className="w-full">
                                    {/* Pill Navigation */}
                                    <div className="flex justify-center sm:justify-start mb-8">
                                          <TabsList className="bg-white/60 backdrop-blur-md p-1.5 h-auto rounded-full w-fit shadow-sm border border-slate-200/50 flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
                                                <TabsTrigger
                                                      value="about"
                                                      className="rounded-full px-5 sm:px-8 py-2.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-500 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95"
                                                >
                                                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                      About
                                                </TabsTrigger>
                                                <TabsTrigger
                                                      value="work"
                                                      className="rounded-full px-5 sm:px-8 py-2.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-500 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95"
                                                >
                                                      <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                      History
                                                </TabsTrigger>
                                                <TabsTrigger
                                                      value="portfolio"
                                                      className="rounded-full px-5 sm:px-8 py-2.5 data-[state=active]:bg-teal-700 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-500 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95"
                                                >
                                                      <ImageIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                      Portfolio
                                                </TabsTrigger>
                                          </TabsList>
                                    </div>

                                    {/* Main Content Sections */}
                                    <div className="bg-white/60 backdrop-blur-md rounded-md shadow-xl p-5 sm:p-10 space-y-10 sm:space-y-12 border border-white/40">

                                          {/* Tab Content: About (matches the sections in image) */}
                                          <TabsContent value="about" className="m-0 space-y-10 sm:space-y-14 outline-none">
                                                <motion.div
                                                      initial={{ opacity: 0, y: 10 }}
                                                      animate={{ opacity: 1, y: 0 }}
                                                      className="space-y-10 sm:space-y-14"
                                                >
                                                      <section className="space-y-4">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                                        <FileText className="h-5 w-5 text-white" />
                                                                  </div>
                                                                  <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Professional Title</h3>
                                                            </div>
                                                            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 ml-1 leading-tight">{profile.professionalTitle}</h2>
                                                      </section>

                                                      <section className="space-y-4 sm:space-y-6">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                                        <User className="h-5 w-5 text-white" />
                                                                  </div>
                                                                  <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-[0.2em]">About Me</h3>
                                                            </div>
                                                            <div className="ml-1 pl-4 sm:pl-6 border-l-4 border-teal-500/30 py-1 transition-all hover:border-teal-500">
                                                                  <p className="text-slate-600 font-medium leading-relaxed sm:text-lg">
                                                                        {profile.about}
                                                                  </p>
                                                            </div>
                                                      </section>

                                                      <section className="space-y-4 sm:space-y-6">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                                        <Zap className="h-5 w-5 text-white" />
                                                                  </div>
                                                                  <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Skills & Expertise</h3>
                                                            </div>
                                                            <div className="ml-1 flex flex-wrap gap-2">
                                                                  {profile.skills.map((skill: string, i: number) => (
                                                                        <Badge
                                                                              key={i}
                                                                              className="bg-teal-50/50 text-teal-700 hover:bg-teal-600 hover:text-white border-teal-100 font-extrabold px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm transition-all rounded-md cursor-default"
                                                                        >
                                                                              {skill}
                                                                        </Badge>
                                                                  ))}
                                                            </div>
                                                      </section>

                                                      <section className="space-y-4 sm:space-y-6">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                                        <Briefcase className="h-5 w-5 text-white" />
                                                                  </div>
                                                                  <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Working Experience</h3>
                                                            </div>
                                                            <div className="ml-1 space-y-6 sm:space-y-10">
                                                                  {profile.workHistory.map((work: any, i: number) => (
                                                                        <div key={i} className="group relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 before:transition-colors hover:before:bg-teal-500">
                                                                              <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-teal-700 transition-colors leading-tight">{work.title}</h4>
                                                                              <p className="text-slate-500 font-bold mt-1 text-sm sm:text-base">{work.company}</p>
                                                                              <div className="flex items-center gap-2 mt-2">
                                                                                    <Clock className="h-3.5 w-3.5 text-teal-500" />
                                                                                    <p className="text-teal-600/70 text-xs font-black uppercase tracking-widest">{work.duration}</p>
                                                                              </div>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      </section>

                                                      <section className="space-y-6 sm:space-y-10 pt-8 sm:pt-12 border-t border-slate-100">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                                        <Award className="h-5 w-5 text-white" />
                                                                  </div>
                                                                  <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Certificates</h3>
                                                            </div>
                                                            <div className="ml-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                                  {profile.certificates.map((cert: any, i: number) => (
                                                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white/50 backdrop-blur-sm border border-slate-100 p-3 sm:p-5 rounded-md transition-all hover:bg-white hover:shadow-xl hover:border-teal-100 group">
                                                                              <div className="h-24 sm:h-20 w-full sm:w-32 rounded-md overflow-hidden shrink-0 shadow-sm transition-transform group-hover:scale-[1.02]">
                                                                                    <img src={cert.image} className="w-full h-full object-cover" alt="Cert" />
                                                                              </div>
                                                                              <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                                                    <h4 className="font-black text-slate-900 text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-teal-700 transition-colors">{cert.title}</h4>
                                                                                    <div className="flex items-center gap-2 mt-2">
                                                                                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                                                                          <span className="text-[10px] sm:text-xs text-slate-400 font-extrabold uppercase tracking-widest">{cert.date}</span>
                                                                                    </div>
                                                                              </div>
                                                                              <button className="h-10 w-10 sm:h-9 sm:w-9 rounded-md bg-slate-50 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all active:scale-90 border border-slate-100">
                                                                                    <Eye className="h-4 w-4" />
                                                                              </button>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      </section>
                                                </motion.div>
                                          </TabsContent>

                                          <TabsContent value="work" className="m-0 outline-none">
                                                <div className="py-12 text-center text-slate-400 font-bold italic">
                                                      Detailed Work History records are shown in the main About tab.
                                                </div>
                                          </TabsContent>

                                          <TabsContent value="portfolio" className="m-0 outline-none">
                                                <motion.div
                                                      initial={{ opacity: 0, scale: 0.95 }}
                                                      animate={{ opacity: 1, scale: 1 }}
                                                      className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
                                                >
                                                      {profile.gallery.map((img: string, i: number) => (
                                                            <motion.div
                                                                  key={i}
                                                                  whileHover={{ y: -5 }}
                                                                  className="aspect-square rounded-md overflow-hidden group cursor-pointer border-4 border-white shadow-xl relative"
                                                            >
                                                                  <img src={img} alt="Work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                                                  <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                                                        <div className="bg-white/20 p-3 rounded-full border border-white/30">
                                                                              <Eye className="h-6 w-6 text-white" />
                                                                        </div>
                                                                  </div>
                                                            </motion.div>
                                                      ))}
                                                </motion.div>
                                          </TabsContent>
                                    </div>
                              </Tabs>

                              {/* Separate Reviews Section at Bottom */}
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-12 sm:mt-16 bg-white/60 backdrop-blur-md rounded-md shadow-xl p-5 sm:p-10 border border-white/40"
                              >
                                    <div className="flex items-center gap-3 mb-8 sm:mb-12">
                                          <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-md bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                <Star className="h-5 w-5 text-white" />
                                          </div>
                                          <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Client Reviews</h3>
                                    </div>

                                    <div className="py-12 sm:py-20 text-center bg-slate-50/50 rounded-md border border-dashed border-slate-200">
                                          <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                                                <MessageSquare className="h-10 w-10 text-teal-200" />
                                          </div>
                                          <p className="text-slate-400 font-extrabold uppercase tracking-[0.3em] text-xs sm:text-sm">No reviews yet</p>
                                          <p className="text-slate-300 text-xs mt-2 font-medium">This professional is ready for their first project!</p>
                                    </div>
                              </motion.div>
                        </div>
                  </main>

                  <Footer />
            </div>
      );
}
