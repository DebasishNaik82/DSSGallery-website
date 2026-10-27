import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us & Design Philosophy',
  description:
    'Learn about DSS Gallery, an offline, privacy-first Android gallery application designed with Kotlin, Jetpack Compose, and Material Design 3.',
  alternates: {
    canonical: getAbsoluteUrl('/about'),
  },
  openGraph: {
    title: 'About Us & Design Philosophy | DSS Gallery',
    description:
      'Learn about DSS Gallery, an offline, privacy-first Android gallery application designed with Kotlin, Jetpack Compose, and Material Design 3.',
    url: getAbsoluteUrl('/about'),
  },
};

export default function About() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About Us', item: '/about' },
  ]);

  return (
    <ContentPage title="About DSS Gallery">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
        DSS Gallery is an Android application created to provide a straightforward, private, and visually appealing way to browse personal photos and videos. Built with Kotlin and Jetpack Compose, the app emphasizes local media control, clean navigation, accessible controls, and seamless support for light and dark viewing preferences.
      </p>
      
      <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
        Core Design Philosophy
      </h2>
      <ul className="list-disc pl-6 space-y-2.5 text-slate-700 dark:text-slate-300 leading-relaxed">
        <li><strong>Privacy by Architecture:</strong> Zero internet permissions requested in the Android manifest. Your media never leaves your device.</li>
        <li><strong>Simplicity &amp; Speed:</strong> Clean, uncluttered layout engineered with Android MediaStore queries and Room persistence for instant loading.</li>
        <li><strong>User-Focused Navigation:</strong> Intuitive timeline browsing, multi-column density choices, and a dedicated Favorites hub.</li>
        <li><strong>Consistent Visual Identity:</strong> Thoughtfully crafted Material Design 3 interface with fluid support for system default, light, and dark modes.</li>
        <li><strong>Transparency:</strong> Open release documentation, verifiable changelog entries, and full policy details.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
        What This Official Website Provides
      </h2>
      <ul className="list-disc pl-6 space-y-2.5 text-slate-700 dark:text-slate-300 leading-relaxed">
        <li>Verified official Android APK download packages</li>
        <li>Latest version release notes and changelog details</li>
        <li>Complete release history and publication archive</li>
        <li>Installation guidance and device compatibility specifications</li>
        <li>Privacy Policy and Terms &amp; Conditions</li>
      </ul>
    </ContentPage>
  );
}
