"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
// import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/create", label: "Create" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Text Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold font-oswald tracking-wide">
            Next<span className="text-blue-600 dark:text-blue-500">Pro</span>
          </Link>
        </div>

        {/* Middle: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 font-inter text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-3 font-inter">
          <ModeToggle></ModeToggle>
          <Button variant="ghost" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ModeToggle></ModeToggle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b bg-background px-4 pt-2 pb-6 space-y-4 font-inter">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col space-y-2 pt-4 border-t">
            <Button variant="outline" className="w-full justify-center" asChild>
              <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700" asChild>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}