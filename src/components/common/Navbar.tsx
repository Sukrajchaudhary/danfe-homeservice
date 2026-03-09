"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PillButton } from "@/components/ui/PillButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
      Menu,
      LayoutDashboard,
      LogOut,
      User,
      Sparkles,
      Search,
      MapPin,
      ChevronsUpDown,
      Check,
} from "lucide-react";

import { Input } from "@/components/ui/input";



// Removed navLinks as per request


export function Navbar() {
      const pathname = usePathname();
      const { data: session, status } = useSession();
      const [mobileOpen, setMobileOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const [selectedLocation, setSelectedLocation] = useState("Kathmandu");

      const locations = ["Kathmandu", "Pokhara", "Butwal"];


      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 20);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
            <header
                  className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
                        ? "border-border/60 bg-background shadow-md shadow-emerald-500/5"
                        : "border-border/40 bg-background"
                        }`}
            >
                  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                              <div
                                    className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#006767] shadow-lg shadow-teal-900/10 transition-transform duration-300 group-hover:rotate-12"
                              >
                                    <Sparkles className="h-5 w-5 text-white" />
                              </div>
                              <span className="text-xl font-black text-[#006767] tracking-tight">
                                    Danfe
                              </span>

                        </Link>

                        {/* Desktop Search & Tools */}
                        <div className="hidden md:flex flex-1 items-center justify-end gap-4 max-w-5xl mx-8">
                              <Link
                                    href="/become-expert"
                                    className="text-sm font-bold text-slate-700 hover:text-[#006767] transition-colors whitespace-nowrap mr-2"
                              >
                                    Choose your Location
                              </Link>

                              {/* Separate Location Selector */}
                              <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                          <div className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white rounded-sm cursor-pointer focus-within:ring-2 focus-within:ring-orange-500/20 data-[state=open]:border-orange-500 hover:border-orange-500/50 hover:bg-slate-50 transition-all h-11 min-w-[170px]">
                                                <MapPin className="h-4 w-4 text-[#006767]" />
                                                <span className="text-sm font-semibold text-slate-700">{selectedLocation}</span>
                                                <ChevronsUpDown className="ml-auto h-4 w-4 text-slate-400" />
                                          </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-[200px] p-1 shadow-xl border-slate-100" align="start">
                                          {locations.map((loc) => (
                                                <DropdownMenuItem
                                                      key={loc}
                                                      onClick={() => setSelectedLocation(loc)}
                                                      className="flex items-center justify-between cursor-pointer py-3 px-3 rounded-lg text-slate-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors focus:bg-orange-50 focus:text-orange-600"
                                                >
                                                      {loc}
                                                      {selectedLocation === loc && <Check className="h-4 w-4 text-orange-600 font-bold" />}
                                                </DropdownMenuItem>
                                          ))}
                                    </DropdownMenuContent>
                              </DropdownMenu>



                        </div>


                        {/* Right Side */}
                        <div className="flex items-center gap-3">

                              {status === "loading" ? (
                                    <div className="h-9 w-20 animate-pulse rounded-lg bg-muted" />
                              ) : session ? (
                                    <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                                <Button
                                                      variant="ghost"
                                                      className="relative h-9 w-9 rounded-full"
                                                >
                                                      <Avatar className="h-9 w-9 ring-2 ring-emerald-500/20">
                                                            <AvatarImage
                                                                  src={session.user?.image || ""}
                                                                  alt={session.user?.name || ""}
                                                            />
                                                            <AvatarFallback className="bg-linear-to-br from-emerald-600 to-green-600 text-white text-xs font-bold">
                                                                  {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                                                            </AvatarFallback>
                                                      </Avatar>
                                                </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent className="w-56" align="end" forceMount>
                                                <div className="flex items-center gap-2 p-2">
                                                      <Avatar className="h-8 w-8">
                                                            <AvatarImage src={session.user?.image || ""} />
                                                            <AvatarFallback className="bg-linear-to-br from-emerald-600 to-green-600 text-white text-xs">
                                                                  {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                                                            </AvatarFallback>
                                                      </Avatar>
                                                      <div className="flex flex-col">
                                                            <p className="text-sm font-medium">{session.user?.name}</p>
                                                            <p className="text-xs text-muted-foreground truncate">
                                                                  {session.user?.email}
                                                            </p>
                                                      </div>
                                                </div>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem asChild>
                                                      <Link href="/dashboard" className="cursor-pointer">
                                                            <LayoutDashboard className="mr-2 h-4 w-4" />
                                                            Dashboard
                                                      </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                      <Link href="/profile" className="cursor-pointer">
                                                            <User className="mr-2 h-4 w-4" />
                                                            Profile
                                                      </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                      className="cursor-pointer text-destructive focus:text-destructive"
                                                      onClick={() => signOut({ callbackUrl: "/" })}
                                                >
                                                      <LogOut className="mr-2 h-4 w-4" />
                                                      Sign Out
                                                </DropdownMenuItem>
                                          </DropdownMenuContent>
                                    </DropdownMenu>
                              ) : (
                                    <div className="hidden md:flex items-center gap-4">
                                          <Link href="/auth/login">
                                                <PillButton size="lg" className="px-6 rounded-sm">
                                                      Sign In
                                                </PillButton>
                                          </Link>
                                    </div>
                              )}


                              {/* Mobile Menu */}
                              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                                    <SheetTrigger asChild className="md:hidden">
                                          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-sm">
                                                <Menu className="h-5 w-5" />
                                          </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-80 p-0">
                                          <div className="flex flex-col h-full">
                                                <div className="flex items-center justify-between p-4 border-b">
                                                      <span className="text-lg font-black text-[#006767] tracking-tight">
                                                            Danfe
                                                      </span>
                                                </div>

                                                <div className="px-4 py-2 flex flex-col gap-3 border-b">
                                                      {/* Mobile Location Selector */}
                                                      <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                  <div className="flex items-center gap-2 px-3 py-2 border border-slate-200 bg-slate-50 rounded-sm cursor-pointer hover:bg-slate-100 transition-colors">
                                                                        <MapPin className="h-4 w-4 text-[#006767]" />
                                                                        <span className="text-sm font-medium text-slate-700">{selectedLocation}</span>
                                                                        <ChevronsUpDown className="ml-auto h-4 w-4 text-slate-400" />
                                                                  </div>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-[calc(100vw-64px)] mx-4 p-1 shadow-lg" align="start">
                                                                  {locations.map((loc) => (
                                                                        <DropdownMenuItem
                                                                              key={loc}
                                                                              onClick={() => setSelectedLocation(loc)}
                                                                              className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600"
                                                                        >
                                                                              {loc}
                                                                              {selectedLocation === loc && <Check className="h-4 w-4 text-orange-600" />}
                                                                        </DropdownMenuItem>
                                                                  ))}
                                                            </DropdownMenuContent>
                                                      </DropdownMenu>


                                                </div>


                                                <nav className="flex flex-col gap-2 p-4">
                                                      <Link
                                                            href="/become-expert"
                                                            className="flex items-center gap-3 px-3 py-3 text-base font-bold text-slate-600 hover:bg-slate-50 hover:text-[#006767] border-l-4 border-transparent rounded-lg"
                                                            onClick={() => setMobileOpen(false)}
                                                      >
                                                            Become an Expert
                                                      </Link>
                                                </nav>
                                                {!session && (
                                                      <div className="mt-auto p-4 border-t flex flex-col gap-3">
                                                            <Link href="/auth/login" onClick={() => setMobileOpen(false)}>
                                                                  <PillButton className="w-full rounded-sm">
                                                                        Sign In
                                                                  </PillButton>
                                                            </Link>

                                                      </div>
                                                )}
                                          </div>
                                    </SheetContent>
                              </Sheet>
                        </div>
                  </div>
            </header>

      );
}
