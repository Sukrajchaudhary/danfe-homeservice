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
      X,
      Home,
      LayoutDashboard,
      LogOut,
      User,
      Sparkles,
} from "lucide-react";

const navLinks = [
      { href: "/", label: "Home", icon: Home },
      { href: "/services", label: "Services" },
      { href: "/blogs", label: "Blogs" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
];

export function Navbar() {
      const pathname = usePathname();
      const { data: session, status } = useSession();
      const [mobileOpen, setMobileOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

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
                                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#006767] shadow-lg shadow-teal-900/10 transition-transform duration-300 group-hover:rotate-12"
                              >
                                    <Sparkles className="h-5 w-5 text-white" />
                              </div>
                              <span className="text-xl font-black text-[#006767] tracking-tight">
                                    Danfe Home Services
                              </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-2">
                              {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    const isHome = link.href === "/";

                                    if (isHome) {
                                          return (
                                                <Link key={link.href} href={link.href}>
                                                      <PillButton
                                                            size="sm"
                                                            className="px-6"
                                                            variant={isActive ? "default" : "default"} // Custom logic if needed
                                                      >
                                                            {link.label}
                                                      </PillButton>
                                                </Link>
                                          );
                                    }

                                    return (
                                          <Link key={link.href} href={link.href}>
                                                <div
                                                      className={`relative px-4 py-2 text-sm font-semibold transition-colors ${isActive
                                                            ? "text-[#006767]"
                                                            : "text-slate-600 hover:text-[#006767]"
                                                            }`}
                                                >
                                                      {link.label}
                                                      {isActive && (
                                                            <motion.div
                                                                  layoutId="navindicator"
                                                                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#006767]"
                                                            />
                                                      )}
                                                </div>
                                          </Link>
                                    );
                              })}
                        </nav>

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
                                    <div className="hidden md:flex items-center gap-2">
                                          <Link href="/auth/login">
                                                <Button variant="ghost" size="sm" className="font-bold text-slate-600 hover:text-[#006767]">
                                                      Sign In
                                                </Button>
                                          </Link>
                                          <Link href="/auth/register">
                                                <PillButton size="sm" className="px-6">
                                                      Get Started
                                                </PillButton>
                                          </Link>
                                    </div>
                              )}

                              {/* Mobile Menu */}
                              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                                    <SheetTrigger asChild className="md:hidden">
                                          <Button variant="ghost" size="icon" className="h-9 w-9">
                                                <Menu className="h-5 w-5" />
                                          </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-80 p-0">
                                          <div className="flex flex-col h-full">
                                                <div className="flex items-center justify-between p-4 border-b">
                                                      <span className="text-lg font-black text-[#006767] tracking-tight">
                                                            Danfe Home Services
                                                      </span>
                                                </div>
                                                <nav className="flex flex-col gap-2 p-4">
                                                      {navLinks.map((link) => {
                                                            const isActive = pathname === link.href;
                                                            const isHome = link.href === "/";

                                                            if (isHome) {
                                                                  return (
                                                                        <Link
                                                                              key={link.href}
                                                                              href={link.href}
                                                                              onClick={() => setMobileOpen(false)}
                                                                              className="mb-2"
                                                                        >
                                                                              <PillButton className="w-full justify-center">
                                                                                    {link.label}
                                                                              </PillButton>
                                                                        </Link>
                                                                  );
                                                            }

                                                            return (
                                                                  <Link
                                                                        key={link.href}
                                                                        href={link.href}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className={`flex items-center gap-3 px-3 py-3 text-base font-bold transition-all rounded-lg ${isActive
                                                                              ? "bg-teal-50 text-[#006767] border-l-4 border-[#006767]"
                                                                              : "text-slate-600 hover:bg-slate-50 hover:text-[#006767] border-l-4 border-transparent"
                                                                              }`}
                                                                  >
                                                                        {link.label}
                                                                  </Link>
                                                            );
                                                      })}
                                                </nav>
                                                {!session && (
                                                      <div className="mt-auto p-4 border-t flex flex-col gap-3">
                                                            <Link href="/auth/login" onClick={() => setMobileOpen(false)}>
                                                                  <Button variant="outline" className="w-full rounded-full border-[#006767] text-[#006767] font-bold">
                                                                        Sign In
                                                                  </Button>
                                                            </Link>
                                                            <Link href="/auth/register" onClick={() => setMobileOpen(false)}>
                                                                  <PillButton className="w-full">
                                                                        Get Started
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
