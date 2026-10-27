import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateFaqSchema, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Find answers to common questions about DSS Gallery, including Android compatibility, APK installation steps, media permissions, and offline privacy.',
  alternates: {
    canonical: getAbsoluteUrl('/faq'),
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | DSS Gallery',
    description:
      'Find answers to common questions about DSS Gallery, including Android compatibility, APK installation steps, media permissions, and offline privacy.',
    url: getAbsoluteUrl('/faq'),
  },
};

const faqItems = [
  {
    question: 'What is DSS Gallery?',
    answer:
      'DSS Gallery is an offline, privacy-first Android photo and video gallery application designed to help users browse, organize, and edit their personal media with Material Design 3 and light/dark theme support.',
  },
  {
    question: 'Where can I download the official DSS Gallery APK?',
    answer:
      'You can download verified DSS Gallery APK releases directly from the official website Download page, which links directly to releases published on our GitHub repository.',
  },
  {
    question: 'Which Android versions are supported by DSS Gallery?',
    answer:
      'DSS Gallery is built for modern Android devices supporting standard Android MediaStore APIs, including scoped storage on Android 10+ and granular media permissions on Android 13 and 14+. Review the release notes for minimum version requirements for each release.',
  },
  {
    question: 'How do I install the DSS Gallery APK on my device?',
    answer:
      'Download the official APK from this website, open the file from your download notifications or file manager, enable "Install unknown apps" for your browser or file manager if prompted by Android, and follow the installation prompts.',
  },
  {
    question: 'Why does Android display a warning when installing the APK?',
    answer:
      'Android displays standard security notices for applications downloaded outside Google Play. Always verify you are downloading from the official DSS Gallery website and confirm file integrity before proceeding with installation.',
  },
  {
    question: 'Does DSS Gallery upload my photos or videos to the cloud?',
    answer:
      'No. DSS Gallery operates completely offline on your device with zero cloud tracking, zero remote telemetry, and no mandatory cloud accounts. Your personal media files remain on your device.',
  },
  {
    question: 'How do I update DSS Gallery to the newest version?',
    answer:
      'Visit the What’s New or Download page to view the latest published release notes, download the updated compatible APK, and install it over your existing version. Your local albums and settings are preserved.',
  },
];

export default function FAQ() {
  const faqSchema = generateFaqSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'FAQ', item: '/faq' },
  ]);

  return (
    <ContentPage title="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
        Find clear answers to frequently asked questions about DSS Gallery installation, Android compatibility, device permissions, and security.
      </p>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1A1A]"
          >
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
              {item.question}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
