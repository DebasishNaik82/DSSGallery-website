'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './theme-toggle';
import { Menu, X } from 'lucide-react';
import logoImg from '../logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/download', label: 'Download' },
    { href: '/whats-new', label: "What's New" },
    { href: '/download#version-history', label: 'History' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 lg:gap-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0"
        >
          <Image
            src={logoImg}
            alt="DSS Gallery Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg object-contain shrink-0"
            referrerPolicy="no-referrer"
            priority
          />
          <span>DSS Gallery</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-600 dark:text-slate-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="/download"
            className="px-4 py-2 text-xs font-medium text-white bg-[#1D70E8] rounded-full hover:bg-[#1557b0] transition-colors whitespace-nowrap"
          >
            Download APK
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-4 sm:px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111111] flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-200 dark:border-slate-800">
            <ThemeToggle />
            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-sm font-medium text-white bg-[#1D70E8] rounded-full hover:bg-[#1557b0] transition-colors"
            >
              Download APK
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
