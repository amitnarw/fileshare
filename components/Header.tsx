"use client"

import { Cloud } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle
import React, { useState } from 'react'; // Import React for state if making this a Client Component

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <div className="relative p-2.5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-lg">
            <Cloud className="h-6 w-6 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl" />
          </div>
          <div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              FileShare
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Secure file sharing</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 md:space-x-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/faq">FAQ</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/about">About Us</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-full left-0 w-full z-40 bg-white dark:bg-gray-950 shadow-md md:hidden transition-all duration-300 ease-in-out transform
          ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}
        >
          <div className="flex flex-col p-4 space-y-4">
            {/* Placeholder Links */}
            <Link href="/" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/faq" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              FAQ
            </Link>
            <Link href="/about" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              About Us
            </Link>
            <Link href="/contact" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Contact Us
            </Link>

            {/* Action Buttons - Placeholder */}
            {/* You might want to place these within the mobile menu as well */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <ThemeToggle />
            </div>
            <Button asChild variant="default" className="w-full">
              <Link href="#">Login / Signup</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="#">View Source</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Replace with state-driven icon based on menu open/closed */}
            {menuOpen ?
              <X className="h-6 w-6" />
              :
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
    </header>
  );
}