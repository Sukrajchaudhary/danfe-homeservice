"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PillButton } from "@/components/ui/PillButton";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  features,
  testimonials,
  stats,
  pricingPlans
} from "@/config/landing-page";

const changeableTexts = [
  "Hire Home Service Talents",
  "Start Your Career",
  "Sell Your Services"
];

export default function HomePage() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % changeableTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background linear Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-20 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
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
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
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

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-emerald-50/30 dark:bg-emerald-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-xs font-medium border-emerald-200 text-emerald-700"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Professional Help for{" "}
              <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Every Need
              </span>
            </h2>
            <p className="mt-4 text-md text-balance text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to scheduled maintenance, Danfe Home Services
              connects you with the best in the business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${feature.slug}`}>
                  <Card className="group relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 h-full cursor-pointer">
                    <CardContent className="p-6">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${feature.gradient} shadow-lg mb-4`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-xs font-medium border-emerald-200 text-emerald-700"
            >
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Simple, Transparent{" "}
              <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Subscription Plans
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right plan to grow your service business and reach more customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative flex flex-col h-full border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-emerald-500 shadow-lg shadow-emerald-500/10 scale-105 z-10' : 'hover:border-emerald-500/30'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Badge className="bg-emerald-600 text-white px-3 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                      {plan.duration !== "tailored" && (
                        <span className="text-sm font-semibold text-muted-foreground">/{plan.duration}</span>
                      )}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <PillButton
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </PillButton>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32 bg-emerald-50/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
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
                        <p className="text-sm font-semibold">
                          {testimonial.name}
                        </p>
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

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-green-600 to-teal-600 p-8 sm:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Ready to Grow Your Service Business?
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Join Danfe Home Services today. Register as a service provider,
                buy subscription plans, and start getting quality job leads instantly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base bg-white text-emerald-700 hover:bg-white/90 shadow-xl"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-base border-white/30 text-white hover:bg-white/10"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
