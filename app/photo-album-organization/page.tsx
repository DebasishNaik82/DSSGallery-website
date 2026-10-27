import Link from 'next/link';
import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Organize Photos into Albums on Android | DSS Gallery Guide',
  description:
    'Learn how to organize your photos and videos into custom albums on Android. Discover folder discovery, smart collections, and offline tagging with DSS Gallery.',
  alternates: {
    canonical: getAbsoluteUrl('/photo-album-organization'),
  },
  openGraph: {
    title: 'How to Organize Photos into Albums on Android | DSS Gallery Guide',
    description:
      'Learn how to organize your photos and videos into custom albums on Android. Discover folder discovery, smart collections, and offline tagging with DSS Gallery.',
    url: getAbsoluteUrl('/photo-album-organization'),
  },
};

export default function PhotoAlbumOrganizationPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Photo Album Organization', item: '/photo-album-organization' },
  ]);

  return (
    <ContentPage title="How to Organize Photos and Videos into Albums on Android">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-900 dark:text-white">
          As phone camera resolutions increase and messaging apps deliver hundreds of media files weekly, managing an unorganized camera roll can quickly become overwhelming. Here is how modern Android photo organization works and how you can organize your library into clean, custom albums.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          1. Understanding Folder Buckets vs. Virtual Albums
        </h2>
        <p>
          On Android, media is physically stored across multiple file system directories known as <em>bucket folders</em> (such as <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">DCIM/Camera</code>, <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">Pictures/Screenshots</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">Download</code>).
        </p>
        <p>
          DSS Gallery automatically discovers these physical folder buckets on your device and pairs them with <strong>virtual custom albums</strong> stored in a local SQLite Room database. This allows you to group photos from trips, family gatherings, or creative projects into custom collections without duplicating files or fragmenting storage.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          2. Step-by-Step: Creating a Custom Album in DSS Gallery
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Open the Albums Tab:</strong> Launch DSS Gallery and tap the <strong>Albums</strong> tab from the bottom navigation bar.
          </li>
          <li>
            <strong>Create New Collection:</strong> Tap the <em>&ldquo;New Album&rdquo;</em> button and assign a descriptive name (e.g., &ldquo;Summer Vacation&rdquo; or &ldquo;Receipts&rdquo;).
          </li>
          <li>
            <strong>Select Photos &amp; Videos:</strong> Browse your date-grouped timeline and tap multiple items to select them in batch mode.
          </li>
          <li>
            <strong>Confirm Assignment:</strong> Tap <em>&ldquo;Add to Album&rdquo;</em>. Your photos are instantly linked to the new album metadata while retaining their original timeline positions.
          </li>
        </ol>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          3. Leveraging Smart Collections &amp; Favorites
        </h2>
        <p>
          In addition to user-created albums, DSS Gallery provides built-in <strong>Smart Collections</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Camera:</strong> Instant access to all primary camera photos and video recordings.</li>
          <li><strong>Screenshots:</strong> Automatically filters device screen captures for quick reference.</li>
          <li><strong>Favorites Hub:</strong> One-tap heart icon on any photo or video automatically curates it into your dedicated Favorites collection, filterable by date and media type.</li>
          <li><strong>Videos &amp; Downloads:</strong> Dedicated views specifically isolating media formats.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          4. Safe Deletion &amp; Recycle Bin Recovery
        </h2>
        <p>
          When cleaning up unwanted photos while organizing albums, accidental deletions can occur. DSS Gallery incorporates a local <strong>Recycle Bin</strong> with non-destructive soft-delete. Items moved to the bin remain on disk and can be restored back to their original albums or permanently purged at your discretion.
        </p>

        <div className="mt-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1A1A1A]">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Ready to organize your Android photo gallery?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Download the official DSS Gallery APK or review the complete feature breakdown.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/download"
              className="px-6 py-2.5 bg-[#1D70E8] text-white text-sm font-medium rounded-full hover:bg-[#1557b0] transition-colors"
            >
              Download Latest APK
            </Link>
            <Link
              href="/features"
              className="px-6 py-2.5 bg-white dark:bg-[#242424] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              View All Features
            </Link>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
