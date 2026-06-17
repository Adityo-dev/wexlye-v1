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
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-[#0B0B12]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="font-mono text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          wexlye
          <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            .dev
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/35">
            Start a project
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            className="border-zinc-200 dark:border-zinc-700"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-6 lg:hidden dark:border-zinc-800 dark:bg-[#0B0B12]">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-700 dark:text-zinc-300"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => setOpen(false)}
              className="mt-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white"
            >
              Start a project
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
