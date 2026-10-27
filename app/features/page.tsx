import Link from 'next/link';
import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features & Capabilities | Android Photo & Video Gallery',
  description:
    'Explore verified features of DSS Gallery: offline timeline browsing, smart collections, custom albums, favorites hub, EXIF telemetry, built-in editors, and recycle bin.',
  alternates: {
    canonical: getAbsoluteUrl('/features'),
  },
  openGraph: {
    title: 'Features & Capabilities | DSS Gallery for Android',
    description:
      'Explore verified features of DSS Gallery: offline timeline browsing, smart collections, custom albums, favorites hub, EXIF telemetry, built-in editors, and recycle bin.',
    url: getAbsoluteUrl('/features'),
  },
};

const verifiedFeatures = [
  {
    title: 'Date-Grouped Photo & Video Timeline',
    description:
      'Automatically organizes photos and videos chronologically with clean date headers (Today, Yesterday, and localized dates). Supports customizable grid densities (2, 3, or 4 columns) for high-density browsing or large thumbnail inspection.',
  },
  {
    title: 'Albums & Smart Collections',
    description:
      'Includes automatic smart collections for Camera, Favorites, Screenshots, Videos, Downloads, and Recently Added. Automatically discovers physical device folders and supports user-created custom albums backed by local Room database metadata.',
  },
  {
    title: 'Curated Favorites Hub',
    description:
      'Dedicated Favorites screen with multi-condition filtering: filter by media type (Photos, Videos, or All) and date ranges (All Time, Today, Last 7 Days, Last 30 Days, This Year), with built-in slideshow playback.',
  },
  {
    title: 'Full-Screen Media Viewer & EXIF Telemetry',
    description:
      'Edge-to-edge swipeable media viewer with native video playback controls, smooth pinch-to-zoom (up to 4.5x), and an in-depth EXIF Telemetry Sheet displaying camera model, aperture, shutter speed, ISO, focal length, color space, and GPS coordinates when available.',
  },
  {
    title: 'Built-in Photo & Video Editors',
    description:
      'Crop, rotate in 90-degree increments, lock aspect ratio presets, and apply visual filters on photos. Trim videos on a frame-accurate timeline with audio toggle and instant playback preview before saving.',
  },
  {
    title: 'Recycle Bin & Data Loss Protection',
    description:
      'Non-destructive soft-delete protects against accidental file deletion. Deleted photos and videos can be restored to their original timeline positions or permanently deleted with two-step confirmation prompts.',
  },
  {
    title: 'Offline Search & Discovery',
    description:
      'Fast offline search across filenames, folder bucket names, custom album names, user captions, and tags, with persistent recent search history.',
  },
  {
    title: 'Material Design 3 & Dynamic Themes',
    description:
      'Engineered with Jetpack Compose following Material 3 guidelines. Fluidly toggles between System Default, Light Mode, and Dark Mode with consistent contrast.',
  },
  {
    title: 'Privacy-First Architecture (Zero Internet Permission)',
    description:
      'The application declares zero INTERNET permissions in its AndroidManifest.xml. Media is processed strictly on-device using Android standard MediaStore scoped storage APIs.',
  },
];

export default function FeaturesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Features', item: '/features' },
  ]);

  return (
    <ContentPage title="Features & Capabilities">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-8">
        DSS Gallery is built from the ground up as a fast, offline Android photo and video gallery application. Every feature is designed for reliable local media management, user comfort, and zero cloud tracking.
      </p>

      <div className="space-y-6">
        {verifiedFeatures.map((feature, index) => (
          <div
            key={index}
            className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1A1A] transition-colors"
          >
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2.5">
              {feature.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl border border-[#1D70E8]/30 bg-[#1D70E8]/5 dark:bg-[#1D70E8]/10 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Experience DSS Gallery on Android
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          Download the latest official APK package directly from this website or view our release notes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/download"
            className="px-7 py-3 bg-[#1D70E8] text-white rounded-full font-medium hover:bg-[#1557b0] transition-colors"
          >
            Download Latest APK
          </Link>
          <Link
            href="/offline-gallery-app"
            className="px-7 py-3 bg-white dark:bg-[#242424] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Why Offline Storage Matters
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
