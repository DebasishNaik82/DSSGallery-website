import { getLatestRelease, getReleases } from '../../lib/github';
import ContentPage from '../../components/content-page';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Official Android APK & Version History',
  description:
    'Download the latest official DSS Gallery APK for Android and explore complete version history, release notes, package size, and installation requirements.',
  alternates: {
    canonical: getAbsoluteUrl('/download'),
  },
  openGraph: {
    title: 'Download Official Android APK & Version History | DSS Gallery',
    description:
      'Download the latest official DSS Gallery APK for Android and explore complete version history, release notes, package size, and installation requirements.',
    url: getAbsoluteUrl('/download'),
  },
};

function formatSize(bytes?: number): string | null {
  if (typeof bytes !== 'number' || bytes <= 0) return null;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default async function Download() {
  let release: any = null;
  let releases: any[] = [];

  try {
    const [latest, all] = await Promise.all([
      getLatestRelease().catch(() => null),
      getReleases().catch(() => []),
    ]);
    release = latest;
    releases = Array.isArray(all) ? all : [];
  } catch (error) {
    console.error('Failed to load release data:', error);
  }

  const apkAsset =
    release?.assets?.find((asset: any) =>
      asset?.name?.toLowerCase().endsWith('.apk')
    ) || release?.assets?.[0];

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Download', item: '/download' },
  ]);

  return (
    <ContentPage title="Download DSS Gallery">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Download the official DSS Gallery APK release directly to your Android device. Review version specifications, compatibility information, and installation instructions before proceeding.
      </p>

      {/* Latest Production APK Card */}
      <div className="my-8 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1A1A] shadow-sm">
        {release ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Version {(release.tag_name || '1.0').replace(/^v/i, '')}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1D70E8]/10 text-[#1D70E8] dark:bg-[#1D70E8]/20 dark:text-blue-300">
                Latest Production APK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-slate-600 dark:text-slate-400">
              {apkAsset?.name && (
                <div>
                  Package: <span className="font-mono text-slate-900 dark:text-slate-200">{apkAsset.name}</span>
                </div>
              )}
              {apkAsset?.size && (
                <div>
                  Size: <span className="font-semibold text-slate-900 dark:text-slate-200">{formatSize(apkAsset.size)}</span>
                </div>
              )}
              {release.published_at && (
                <div>
                  Published:{' '}
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    {new Date(release.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              )}
            </div>

            {release.body && (
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                {release.body}
              </p>
            )}

            {apkAsset?.browser_download_url ? (
              <a
                href={apkAsset.browser_download_url}
                className="inline-block px-7 py-3.5 bg-[#1D70E8] text-white rounded-full font-medium hover:bg-[#1557b0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D70E8] focus-visible:ring-offset-2 transition-colors"
              >
                Download APK ({formatSize(apkAsset.size) || 'Latest'})
              </a>
            ) : (
              <p className="text-slate-500 text-sm">Release package link is pending upload.</p>
            )}
          </>
        ) : (
          <p className="text-slate-600 dark:text-slate-400">
            No APK release is currently published. Please check back later or visit our{' '}
            <a href="https://github.com/DebasishNaik82/DSSGALLERY/releases" className="text-[#1D70E8] underline">
              GitHub Releases
            </a>{' '}
            page.
          </p>
        )}
      </div>

      {/* Installation Instructions */}
      <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
        Android Installation Instructions
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <li>Tap the <strong>Download APK</strong> button above to download the file directly to your Android device.</li>
        <li>Open your browser&apos;s download history or your device&apos;s <em>Files</em> / <em>Downloads</em> manager and select the downloaded <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono">.apk</code> file.</li>
        <li>If prompted by Android with an <em>&ldquo;Install unknown apps&rdquo;</em> prompt, tap <em>Settings</em> and toggle <em>&ldquo;Allow from this source&rdquo;</em>.</li>
        <li>Review the requested standard storage permissions and tap <strong>Install</strong>.</li>
        <li>Once installation completes, tap <strong>Open</strong> to launch DSS Gallery.</li>
      </ol>

      {/* Compatibility */}
      <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900 dark:text-white">
        Compatibility &amp; System Requirements
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <li><strong>Operating System:</strong> Compatible with Android 10 (API level 29) and higher.</li>
        <li><strong>Storage Permissions:</strong> Uses Android standard MediaStore APIs for photos and videos without requiring broad file access.</li>
        <li><strong>Network Usage:</strong> Zero network permissions required; operates completely offline.</li>
      </ul>

      {/* Dedicated Version History Section */}
      <section id="version-history" className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Version History &amp; Release Archive
          </h2>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Synced live with GitHub Releases
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Chronological record of all published DSS Gallery Android releases. Each entry displays the official version tag, release date, and links to the official release milestone.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1A1A]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-[#242424]/50">
                <th className="py-4 px-6 font-semibold">Version</th>
                <th className="py-4 px-6 font-semibold">Release Date</th>
                <th className="py-4 px-6 font-semibold text-right">Details</th>
              </tr>
            </thead>
            <tbody>
              {releases.map((rel: any) => (
                <tr
                  key={rel.id}
                  className="border-b border-slate-100 dark:border-slate-800/80 hover:bg-slate-50/50 dark:hover:bg-[#242424]/30 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-slate-900 dark:text-white">
                    <span className="font-mono">{rel.tag_name}</span>
                    {rel.tag_name === release?.tag_name && (
                      <span className="ml-2.5 px-2 py-0.5 text-xs font-semibold rounded-full bg-[#1D70E8]/10 text-[#1D70E8] dark:bg-[#1D70E8]/20 dark:text-blue-300">
                        Latest
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400 text-sm">
                    {new Date(rel.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href={rel.html_url || `https://github.com/DebasishNaik82/DSSGALLERY/releases/tag/${rel.tag_name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#1D70E8] hover:underline"
                    >
                      Release Notes &rarr;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {releases.length === 0 && (
            <p className="p-6 text-slate-500 dark:text-slate-400 text-sm">
              No historical releases found. Check our{' '}
              <a
                href="https://github.com/DebasishNaik82/DSSGALLERY/releases"
                className="text-[#1D70E8] underline"
              >
                GitHub Releases
              </a>{' '}
              page.
            </p>
          )}
        </div>
      </section>
    </ContentPage>
  );
}
