import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111111] mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 md:col-span-1 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <Image
                src={logoImg}
                alt="DSS Gallery Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
              <span>DSS Gallery</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs">
              Your Gallery. Your Memories. Your Way. Privacy-first, offline Android photo and video gallery application.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/features" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/download" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Download APK
              </Link>
              <Link href="/whats-new" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                What&apos;s New
              </Link>
              <Link href="/download#version-history" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Version History
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5">
              Guides &amp; Resources
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/offline-gallery-app" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Offline Gallery Guide
              </Link>
              <Link href="/photo-album-organization" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Organizing Albums
              </Link>
              <Link href="/faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} DSS Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
