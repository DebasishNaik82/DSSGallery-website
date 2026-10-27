import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Official Terms & Conditions governing the use of the DSS Gallery Android application and official website.',
  alternates: {
    canonical: getAbsoluteUrl('/terms'),
  },
  openGraph: {
    title: 'Terms & Conditions | DSS Gallery',
    description: 'Official Terms & Conditions governing the use of the DSS Gallery Android application and official website.',
    url: getAbsoluteUrl('/terms'),
  },
};

export default function Terms() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Terms & Conditions', item: '/terms' },
  ]);

  return (
    <ContentPage title="Terms and Conditions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">
          1. Acceptance of Terms
        </h2>
        <p>
          By downloading, installing, or accessing the DSS Gallery application or browsing this official website, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          2. Software License &amp; Usage
        </h2>
        <p>
          DSS Gallery is provided as an Android gallery utility for personal media management. You retain complete ownership and intellectual property rights in your personal photos and videos.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          3. APK Distribution &amp; Updates
        </h2>
        <p>
          Official APK packages are published exclusively via this official website and our official GitHub release repository. We recommend downloading APKs solely from verified official sources.
        </p>
      </div>
    </ContentPage>
  );
}
