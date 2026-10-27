import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/navigation';
import { Providers } from '../components/providers';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import { baseUrl, getAbsoluteUrl, generateWebSiteSchema, generateSoftwareApplicationSchema } from '../lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'DSS Gallery | Photo & Video Gallery App for Android',
    template: '%s | DSS Gallery',
  },
  description:
    'Discover DSS Gallery, an Android photo and video gallery app for browsing media and organizing your photos. Explore its features and compatibility.',
  applicationName: 'DSS Gallery',
  authors: [{ name: 'DSS Gallery Team' }],
  generator: 'Next.js',
  keywords: [
    'DSS Gallery',
    'Android gallery app',
    'photo gallery app',
    'offline gallery APK',
    'private photo manager Android',
    'gallery app without cloud',
    'DSS Gallery APK download',
  ],
  alternates: {
    canonical: getAbsoluteUrl('/'),
  },
  verification: {
    google: '9jZDM8686DPhJ6g41RMg1_wh90fp_fPl08gN23BQIOw',
  },
  openGraph: {
    title: 'DSS Gallery | Official Android App & APK Download',
    description:
      'Official website for DSS Gallery, a privacy-first, offline Android gallery app. Download the latest APK and view release updates.',
    url: getAbsoluteUrl('/'),
    siteName: 'DSS Gallery',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSS Gallery | Official Android App & APK Download',
    description:
      'Official website for DSS Gallery, a privacy-first, offline Android gallery app. Download the latest APK and view release updates.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = generateWebSiteSchema();
  const softwareAppSchema = generateSoftwareApplicationSchema('1.0');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body className="bg-[#DADADA] dark:bg-[#111111] text-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <Providers>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
