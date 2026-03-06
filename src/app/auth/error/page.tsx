"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, AlertTriangle } from "lucide-react";

export default function AuthErrorPage() {
      return (
            <div className="relative min-h-screen flex items-center justify-center p-4">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-red-500/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px]" />
                  </div>

                  <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-md text-center"
                  >
                        <Link href="/" className="inline-flex items-center gap-2 mb-8">
                              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25">
                                    <Sparkles className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                    OrganizeHub
                              </span>
                        </Link>

                        <Card className="border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl">
                              <CardContent className="p-8">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 mx-auto mb-4">
                                          <AlertTriangle className="h-8 w-8 text-red-500" />
                                    </div>
                                    <h1 className="text-2xl font-bold mb-2">Authentication Error</h1>
                                    <p className="text-muted-foreground mb-6">
                                          There was a problem signing you in. This could be due to an
                                          expired session or invalid credentials. Please try again.
                                    </p>
                                    <div className="flex flex-col gap-2">
                                          <Link href="/auth/login">
                                                <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                                                      Try Again
                                                </Button>
                                          </Link>
                                          <Link href="/">
                                                <Button variant="outline" className="w-full">
                                                      Go Home
                                                </Button>
                                          </Link>
                                    </div>
                              </CardContent>
                        </Card>
                  </motion.div>
            </div>
      );
}
