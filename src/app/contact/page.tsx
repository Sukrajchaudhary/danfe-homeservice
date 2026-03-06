"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
      Mail,
      Phone,
      MapPin,
      Send,
      Loader2,
      Clock,
      MessageSquare,
} from "lucide-react";
import { useCreateQuery } from "@/hooks/use-queries";

const contactInfo = [
      {
            icon: Mail,
            title: "Email Us",
            detail: "support@organizehub.com",
            description: "We'll respond within 24 hours",
            gradient: "from-violet-500 to-indigo-500",
      },
      {
            icon: Phone,
            title: "Call Us",
            detail: "+1 (555) 123-4567",
            description: "Mon-Fri, 9AM-6PM EST",
            gradient: "from-blue-500 to-cyan-500",
      },
      {
            icon: MapPin,
            title: "Visit Us",
            detail: "123 Innovation Blvd",
            description: "San Francisco, CA 94105",
            gradient: "from-emerald-500 to-teal-500",
      },
      {
            icon: Clock,
            title: "Business Hours",
            detail: "Mon-Fri, 9AM-6PM",
            description: "EST (UTC-5)",
            gradient: "from-amber-500 to-orange-500",
      },
];

export default function ContactPage() {
      const createQueryMutation = useCreateQuery();
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            message: "",
      });

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            createQueryMutation.mutate(
                  {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                  },
                  {
                        onSuccess: () => {
                              toast.success("Message sent! We'll get back to you within 24 hours.");
                              setFormData({ name: "", email: "", subject: "", message: "" });
                        },
                        onError: (error) => {
                              toast.error(error.message || "Failed to send message. Please try again.");
                        },
                  }
            );
      };

      return (
            <div className="min-h-screen flex flex-col">
                  <Navbar />

                  {/* Hero */}
                  <section className="relative overflow-hidden py-20 sm:py-28">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <div className="absolute top-1/4 -right-20 w-72 h-72 bg-violet-500/15 rounded-full blur-[100px]" />
                              <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px]" />
                        </div>
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                              >
                                    <Badge
                                          variant="secondary"
                                          className="mb-6 px-4 py-1.5 text-sm font-medium border border-violet-500/20 bg-violet-500/10 text-violet-400"
                                    >
                                          <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
                                          Contact Us
                                    </Badge>
                                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                          Get in{" "}
                                          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                                Touch
                                          </span>
                                    </h1>
                                    <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                                          Have a question or want to learn more? We&apos;d love to hear from
                                          you. Reach out and we&apos;ll respond as fast as we can.
                                    </p>
                              </motion.div>
                        </div>
                  </section>

                  {/* Contact Info Cards */}
                  <section className="py-4">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {contactInfo.map((info, index) => (
                                          <motion.div
                                                key={info.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                          >
                                                <Card className="border-border/50 bg-background/50 backdrop-blur-sm text-center h-full">
                                                      <CardContent className="p-6">
                                                            <div
                                                                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg mb-3`}
                                                            >
                                                                  <info.icon className="h-5 w-5 text-white" />
                                                            </div>
                                                            <h3 className="font-semibold mb-1">{info.title}</h3>
                                                            <p className="text-sm font-medium text-foreground">
                                                                  {info.detail}
                                                            </p>
                                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                                  {info.description}
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          </motion.div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  {/* Contact Form */}
                  <section className="py-16 sm:py-24">
                        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                              >
                                    <Card className="border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl shadow-violet-500/5">
                                          <CardContent className="p-6 sm:p-8">
                                                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                                                <form onSubmit={handleSubmit} className="space-y-5">
                                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                  <Label htmlFor="contact-name">Full Name</Label>
                                                                  <Input
                                                                        id="contact-name"
                                                                        placeholder="John Doe"
                                                                        value={formData.name}
                                                                        onChange={(e) =>
                                                                              setFormData({ ...formData, name: e.target.value })
                                                                        }
                                                                        className="h-11"
                                                                        required
                                                                  />
                                                            </div>
                                                            <div className="space-y-2">
                                                                  <Label htmlFor="contact-email">Email</Label>
                                                                  <Input
                                                                        id="contact-email"
                                                                        type="email"
                                                                        placeholder="john@example.com"
                                                                        value={formData.email}
                                                                        onChange={(e) =>
                                                                              setFormData({ ...formData, email: e.target.value })
                                                                        }
                                                                        className="h-11"
                                                                        required
                                                                  />
                                                            </div>
                                                      </div>

                                                      <div className="space-y-2">
                                                            <Label htmlFor="contact-subject">Subject</Label>
                                                            <Input
                                                                  id="contact-subject"
                                                                  placeholder="How can we help?"
                                                                  value={formData.subject}
                                                                  onChange={(e) =>
                                                                        setFormData({ ...formData, subject: e.target.value })
                                                                  }
                                                                  className="h-11"
                                                                  required
                                                            />
                                                      </div>

                                                      <div className="space-y-2">
                                                            <Label htmlFor="contact-message">Message</Label>
                                                            <textarea
                                                                  id="contact-message"
                                                                  placeholder="Tell us more about your inquiry..."
                                                                  value={formData.message}
                                                                  onChange={(e) =>
                                                                        setFormData({ ...formData, message: e.target.value })
                                                                  }
                                                                  className="flex min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                                                  required
                                                            />
                                                      </div>

                                                      <Button
                                                            type="submit"
                                                            className="w-full h-11 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/25"
                                                            disabled={createQueryMutation.isPending}
                                                      >
                                                            {createQueryMutation.isPending ? (
                                                                  <>
                                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                        Sending...
                                                                  </>
                                                            ) : (
                                                                  <>
                                                                        Send Message
                                                                        <Send className="ml-2 h-4 w-4" />
                                                                  </>
                                                            )}
                                                      </Button>
                                                </form>
                                          </CardContent>
                                    </Card>
                              </motion.div>
                        </div>
                  </section>

                  <Footer />
            </div>
      );
}
