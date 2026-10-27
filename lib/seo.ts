export const baseUrl = 'https://dssgallery.vercel.app';

export function getAbsoluteUrl(path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : getAbsoluteUrl(item.item),
    })),
  };
}

export function generateSoftwareApplicationSchema(version = '1.0') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DSS Gallery',
    operatingSystem: 'Android 10 and higher',
    applicationCategory: 'PhotographyApplication',
    softwareVersion: version,
    fileFormat: 'application/vnd.android.package-archive',
    description:
      'DSS Gallery is a privacy-first, offline Android gallery application built with Kotlin and Jetpack Compose for browsing, organizing, and editing personal photos and videos.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: getAbsoluteUrl('/'),
    downloadUrl: getAbsoluteUrl('/download'),
    featureList: [
      'Offline media management with zero cloud upload requirements',
      'Date-grouped timeline and multi-column responsive grid',
      'Smart albums, device folders, and curated Favorites hub',
      'Full-screen viewer with EXIF telemetry and pinch-to-zoom',
      'Built-in photo cropping, filters, and video trimming',
      'Recycle Bin soft-deletion protection and restoration',
      'Material Design 3 with Light and Dark themes',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DSS Gallery',
    url: getAbsoluteUrl('/'),
    description:
      'Official website for DSS Gallery, providing Android APK downloads, release notes, and documentation.',
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
