import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Official Privacy Policy for the DSS Gallery Android application and its official website.',
  alternates: {
    canonical: getAbsoluteUrl('/privacy'),
  },
  openGraph: {
    title: 'Privacy Policy | DSS Gallery',
    description: 'Official Privacy Policy for the DSS Gallery Android application and its official website.',
    url: getAbsoluteUrl('/privacy'),
  },
};

export default function Privacy() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Privacy Policy', item: '/privacy' },
  ]);

  return (
    <ContentPage title="Privacy Policy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <p>
          This Privacy Policy explains how DSS Gallery and this official website handle information. DSS Gallery is developed as a privacy-first, offline Android gallery application.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          1. Local Processing &amp; Zero Cloud Transmission
        </h2>
        <p>
          DSS Gallery processes photos and videos locally on your Android device. The application does not upload, sync, or transmit your media to external servers, cloud databases, or third-party trackers.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          2. Android Permissions
        </h2>
        <p>
          The application requests standard Android storage permissions (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">READ_MEDIA_IMAGES</code>, <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">READ_MEDIA_VIDEO</code> on Android 13+, and Android MediaStore storage access on older supported versions) strictly to index and display your local photos and videos.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          3. Analytics &amp; Tracking
        </h2>
        <p>
          The application contains zero advertising SDKs, zero third-party telemetry frameworks, and zero behavioral tracking tools.
        </p>
      </div>
    </ContentPage>
  );
}
