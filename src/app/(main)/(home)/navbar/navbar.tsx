'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#EFEFEA]/80 backdrop-blur-md transition-colors duration-300 dark:border-[#16211C] dark:bg-[#090D0B]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link
          href="#"
          className="font-mono text-lg font-semibold tracking-tight text-[#1A2420] dark:text-[#ECF1EE]"
        >
          wexlye
          <span className="bg-gradient-to-r from-[#1E3F2B] to-[#2E5A44] bg-clip-text text-transparent dark:from-[#52E095] dark:to-[#52E095]">
            .dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#55635B] transition-colors hover:text-[#1A2420] dark:text-[#8FA399] dark:hover:text-[#ECF1EE]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button className="bg-[#1E3F2B] text-[#EFEFEA] shadow-md hover:bg-[#12291B] dark:bg-[#52E095] dark:text-[#090D0B] dark:hover:bg-[#41C782]">
            Start a project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            className="border-zinc-200 dark:border-[#16211C]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-zinc-200 bg-[#EFEFEA] px-6 py-6 lg:hidden dark:border-[#16211C] dark:bg-[#090D0B]">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#1A2420] dark:text-[#ECF1EE]"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#1E3F2B] text-[#EFEFEA] dark:bg-[#52E095] dark:text-[#090D0B]"
            >
              Start a project
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
