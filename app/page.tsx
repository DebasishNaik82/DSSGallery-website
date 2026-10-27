import Link from 'next/link';
import { getLatestRelease } from '../lib/github';
import FaqPreview from '../components/faq-preview';

function formatFileSize(bytes?: number): string | null {
  if (typeof bytes !== 'number' || Number.isNaN(bytes) || bytes <= 0) {
    return null;
  }
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
}

function formatReleaseDate(dateString?: string): string | null {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function extractMinAndroidVersion(body?: string): string | null {
  if (!body) return null;
  const match = body.match(/minimum\s+android(?:\s+version)?\s*[:\-]?\s*([A-Za-z0-9.+ ]+)/i);
  return match ? match[1].trim() : null;
}

export default async function Home() {
  let release: any = null;
  try {
    release = await getLatestRelease();
  } catch {
    release = null;
  }

  const apkAsset =
    release?.assets?.find((asset: any) =>
      asset?.name?.toLowerCase().endsWith('.apk')
    ) || release?.assets?.[0];

  const rawVersion = release?.tag_name || release?.name || '1.0';
  const latestVersion = rawVersion.replace(/^v/i, '');
  const apkSize = formatFileSize(apkAsset?.size);
  const lastUpdated = formatReleaseDate(release?.published_at);
  const minAndroid = extractMinAndroidVersion(release?.body);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-20 max-w-5xl">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center text-center pt-8 pb-4 md:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Your Gallery. Your Memories. Your Way.
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
          DSS Gallery is an Android gallery application designed to help users browse and explore their personal photos and videos through a clean, intuitive interface. Its interface supports light and dark themes and provides convenient navigation for supported gallery features.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/download"
            className="px-8 py-3.5 bg-[#1D70E8] text-white rounded-full font-medium hover:bg-[#1557b0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D70E8] focus-visible:ring-offset-2 transition-colors"
          >
            Download Latest APK
          </Link>
          <Link
            href="/whats-new"
            className="px-8 py-3.5 bg-white dark:bg-[#242424] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D70E8] focus-visible:ring-offset-2 transition-colors"
          >
            Explore What&apos;s New
          </Link>
        </div>
      </section>

      {/* 2. Why DSS Gallery Section */}
      <section aria-labelledby="why-dss-gallery-heading" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="why-dss-gallery-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3"
          >
            Why DSS Gallery
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Built for everyday Android media management with a focus on clarity, comfort, and local control.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Clean & Intuitive Interface"
            description="Browse your personal photos and videos through an organized timeline with customizable grid layouts and clear navigation."
          />
          <FeatureCard
            title="Light & Dark Themes"
            description="Switch seamlessly between light mode, dark mode, and system default themes to match your viewing preference."
          />
          <FeatureCard
            title="Convenient Media Browsing"
            description="View photos and videos full-screen with smooth zoom gestures, native video playback, and detailed EXIF media information."
          />
          <FeatureCard
            title="Albums & Favorites Support"
            description="Explore device folders, smart collections, custom albums, and a dedicated Favorites hub to revisit key moments."
            linkHref="/photo-album-organization"
            linkLabel="Learn how to organize albums"
          />
          <FeatureCard
            title="Offline Search & Recycle Bin"
            description="Find media quickly using local search filters and protect against accidental deletion with Recycle Bin recovery."
          />
          <FeatureCard
            title="Privacy-Focused Offline Design"
            description="Operates locally on your Android device using standard Android media permissions without requiring cloud accounts."
            linkHref="/offline-gallery-app"
            linkLabel="Read our offline storage guide"
          />
        </div>

        <div className="text-center pt-2">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D70E8] hover:underline"
          >
            <span>Explore all DSS Gallery features &amp; capabilities</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* 3. App Information Section */}
      <section aria-labelledby="app-info-heading" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="app-info-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
          >
            App Information
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Official release specifications synced directly from our published repository.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoItem
            label="Latest App Version"
            value={latestVersion || 'Not yet published'}
          />
          <InfoItem
            label="APK File Size"
            value={apkSize || 'Available upon release'}
          />
          <InfoItem
            label="Minimum Android"
            value={minAndroid || 'See release notes'}
          />
          <InfoItem
            label="Last Updated"
            value={lastUpdated || 'Pending release'}
          />
        </dl>
      </section>

      {/* 4. Download Section */}
      <section aria-labelledby="download-cta-heading">
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#242424] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#1D70E8]/10 text-[#1D70E8] dark:bg-[#1D70E8]/20 dark:text-blue-300">
              <span>Android APK Package (.apk)</span>
            </div>
            <h2
              id="download-cta-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            >
              Get DSS Gallery for Android
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Download the latest official Android APK directly from this website. Review the version details and release notes before installing on your device.
            </p>
            {(latestVersion || apkSize) && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {latestVersion && <span>Version: {latestVersion}</span>}
                {apkSize && <span>Size: {apkSize}</span>}
                {lastUpdated && <span>Released: {lastUpdated}</span>}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/download"
              className="px-7 py-3.5 bg-[#1D70E8] text-white text-center rounded-full font-medium hover:bg-[#1557b0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D70E8] focus-visible:ring-offset-2 transition-colors whitespace-nowrap"
            >
              Download Latest APK
            </Link>
            <Link
              href="/whats-new"
              className="px-6 py-3.5 bg-slate-100 dark:bg-[#111111] text-slate-900 dark:text-white text-center rounded-full font-medium hover:bg-slate-200 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D70E8] focus-visible:ring-offset-2 transition-colors whitespace-nowrap"
            >
              View What&apos;s New
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQ Preview Section */}
      <section aria-labelledby="faq-preview-heading" className="space-y-6 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2
              id="faq-preview-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Quick answers about installing and updating DSS Gallery.
            </p>
          </div>
          <Link
            href="/faq"
            className="text-sm font-semibold text-[#1D70E8] hover:underline whitespace-nowrap"
          >
            View All FAQs &rarr;
          </Link>
        </div>

        <FaqPreview />
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  linkHref,
  linkLabel,
}: {
  title: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#242424] flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2.5">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
      {linkHref && linkLabel && (
        <div className="pt-4 mt-auto">
          <Link
            href={linkHref}
            className="text-xs sm:text-sm font-semibold text-[#1D70E8] hover:underline inline-flex items-center gap-1"
          >
            <span>{linkLabel}</span>
            <span>&rarr;</span>
          </Link>
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#242424]">
      <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
        {label}
      </dt>
      <dd className="text-lg font-bold text-slate-900 dark:text-white truncate">
        {value}
      </dd>
    </div>
  );
}
