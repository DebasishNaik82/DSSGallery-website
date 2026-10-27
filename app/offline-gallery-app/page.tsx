import Link from 'next/link';
import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline Gallery App for Android | Private Local Storage',
  description:
    'Discover why an offline gallery app offers superior privacy and performance. Learn how DSS Gallery browses photos locally with zero cloud uploads or data costs.',
  alternates: {
    canonical: getAbsoluteUrl('/offline-gallery-app'),
  },
  openGraph: {
    title: 'Offline Gallery App for Android | Private Local Storage | DSS Gallery',
    description:
      'Discover why an offline gallery app offers superior privacy and performance. Learn how DSS Gallery browses photos locally with zero cloud uploads or data costs.',
    url: getAbsoluteUrl('/offline-gallery-app'),
  },
};

export default function OfflineGalleryAppPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Offline Gallery App', item: '/offline-gallery-app' },
  ]);

  return (
    <ContentPage title="Why Choose an Offline Gallery App for Android?">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-900 dark:text-white">
          Many modern gallery apps require mandatory cloud logins, automatic background photo syncing, and constant internet connectivity. For millions of Android users in India and worldwide, an offline photo viewer provides significant advantages in privacy, mobile data savings, and responsiveness.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          1. Complete Privacy &amp; Zero Cloud Transmission
        </h2>
        <p>
          Cloud gallery apps routinely scan personal photos for remote indexing, facial clustering, and behavioral telemetry. In contrast, a true offline gallery app operates strictly within your phone&apos;s sandbox.
        </p>
        <p>
          DSS Gallery declares <strong>no internet permission</strong> (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">android.permission.INTERNET</code>) in its application manifest. Because the operating system physically prohibits the app from opening network sockets, your photos and personal videos can never be uploaded or leaked to third-party servers.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          2. No Mobile Data Consumption
        </h2>
        <p>
          In regions with metered data plans or variable network coverage, cloud sync apps can silently consume gigabytes of bandwidth uploading high-resolution camera reels and 4K recordings. An offline gallery app accesses your media directly from local storage, loading albums and thumbnails instantly without consuming mobile data.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          3. Instant Local MediaStore Performance
        </h2>
        <p>
          Instead of waiting for remote thumbnail fetches or cloud authentication handshakes, DSS Gallery queries the native Android <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">MediaStore</code> and caches folder metadata in a fast, local SQLite database (Room). This architecture ensures:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Immediate thumbnail generation for photos and videos.</li>
          <li>Smooth 60fps / 120fps timeline scrolling across thousands of items.</li>
          <li>Fast full-resolution pinch-to-zoom without waiting for cloud downloads.</li>
          <li>Instant offline search across filenames, folders, and tags.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          4. Scoped Storage Compliance (Android 10 to 14+)
        </h2>
        <p>
          Rather than demanding dangerous legacy storage permissions like broad file system access, modern offline galleries use granular permissions. On Android 13 and 14+, DSS Gallery uses specific photo and video permissions (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">READ_MEDIA_IMAGES</code> and <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">READ_MEDIA_VIDEO</code>), ensuring that documents, downloads, and app data remain completely untouched.
        </p>

        <div className="mt-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1A1A1A]">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Looking for an offline gallery for your Android device?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Download the official DSS Gallery APK or review the full feature breakdown.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/download"
              className="px-6 py-2.5 bg-[#1D70E8] text-white text-sm font-medium rounded-full hover:bg-[#1557b0] transition-colors"
            >
              Download APK
            </Link>
            <Link
              href="/features"
              className="px-6 py-2.5 bg-white dark:bg-[#242424] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
