"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { PillButton } from "@/components/ui/PillButton";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "@/config/landing-page";

export function Pricing() {
      return (
            <section className="py-10">
                  <div className="mx-auto max-w-7xl px-4">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-8"
                        >
                              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                                    Simple, Transparent{" "}
                                    <span className="bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                          Subscription Plans
                                    </span>
                              </h2>
                              <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
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
                                          <Card
                                                className={`relative flex flex-col h-full border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${plan.popular
                                                            ? "border-emerald-500 shadow-lg shadow-emerald-500/10 scale-105 z-10"
                                                            : "hover:border-emerald-500/30"
                                                      }`}
                                          >
                                                {plan.popular && (
                                                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                            <Badge className="bg-emerald-600 text-white px-3 py-1">
                                                                  Most Popular
                                                            </Badge>
                                                      </div>
                                                )}
                                                <CardHeader>
                                                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                                                      <div className="mt-4 flex items-baseline gap-1">
                                                            <span className="text-4xl font-bold tracking-tight">
                                                                  {plan.price}
                                                            </span>
                                                            {plan.duration !== "tailored" && (
                                                                  <span className="text-sm font-semibold text-muted-foreground">
                                                                        /{plan.duration}
                                                                  </span>
                                                            )}
                                                      </div>
                                                      <CardDescription className="mt-2 text-balance">
                                                            {plan.description}
                                                      </CardDescription>
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
      );
}
