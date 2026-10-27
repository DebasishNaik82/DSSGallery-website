'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const homepageFaqs: FAQItem[] = [
  {
    question: 'How do I install DSS Gallery?',
    answer:
      'Download the latest official APK from the Download page, open the file from your browser downloads or file manager, grant permission to install from your browser or file manager if prompted by Android, and follow the on-screen installation prompts.',
  },
  {
    question: 'Which Android versions are supported?',
    answer:
      'Compatibility depends on the specific APK release. DSS Gallery is designed for modern Android devices and supports scoped storage and granular media permissions (Android 10 through Android 14+). Please check the release details on the Download or What’s New page before installing.',
  },
  {
    question: 'How can I find the latest updates?',
    answer:
      'You can check the What’s New page for official changelog details on new features, improvements, and bug fixes, or visit the Download and History pages to see the latest published APK version and release date.',
  },
];

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {homepageFaqs.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-preview-panel-${index}`;
        const buttonId = `faq-preview-button-${index}`;

        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#242424] overflow-hidden transition-colors"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-[#1D70E8] dark:hover:text-[#1D70E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1D70E8] transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#1D70E8] dark:text-[#1D70E8]' : ''
                  }`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-5 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
