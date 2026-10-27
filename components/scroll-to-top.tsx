'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#242424]/95 text-slate-700 dark:text-slate-200 shadow-sm hover:bg-[#1D70E8] hover:border-[#1D70E8] hover:text-white dark:hover:bg-[#1D70E8] dark:hover:border-[#1D70E8] dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D70E8] transition-all duration-200 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
