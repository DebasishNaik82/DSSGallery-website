import { fetchChangelog } from '../../lib/github';
import ContentPage from '../../components/content-page';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAbsoluteUrl, generateBreadcrumbSchema } from '../../lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What's New & Release Notes",
  description: 'Read official DSS Gallery release notes, feature additions, improvements, and bug fixes.',
  alternates: {
    canonical: getAbsoluteUrl('/whats-new'),
  },
  openGraph: {
    title: "What's New | DSS Gallery",
    description: 'Read official DSS Gallery release notes, feature additions, improvements, and bug fixes.',
    url: getAbsoluteUrl('/whats-new'),
  },
};

export default async function WhatsNew() {
  let changelog = '';

  try {
    changelog = await fetchChangelog();
  } catch (error) {
    console.error(error);
  }

  // Strip the "# Changelog" title and intro preamble before the first "## " version section
  const cleanedChangelog = changelog
    ? changelog.replace(/^[\s\S]*?(?=^##\s+)/m, '').trim()
    : '';

  const versionSections = cleanedChangelog
    ? cleanedChangelog
        .split(/^##\s+/m)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: "What's New", item: '/whats-new' },
  ]);

  return (
    <ContentPage title="What's New">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
        Explore recent updates, new features, and improvements for DSS Gallery. Each section details the official changelog entries published for each release milestone.
      </p>
      {versionSections.length > 0 ? (
        <div className="space-y-10">
          {versionSections.length > 1 && (
            <nav
              aria-label="Release versions"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1A1A]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Jump to Release
              </p>
              <div className="flex flex-wrap gap-2">
                {versionSections.map((section, index) => {
                  const rawTitle = section.split('\n')[0].replace(/\[|\]/g, '').trim();
                  const anchor = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <a
                      key={index}
                      href={`#${anchor}`}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 dark:bg-[#242424] text-slate-800 dark:text-slate-200 hover:bg-[#1D70E8] hover:text-white transition-colors"
                    >
                      {rawTitle}
                    </a>
                  );
                })}
              </div>
            </nav>
          )}

          <div className="space-y-8">
            {versionSections.map((section, index) => {
              const isLatest = index === 0;
              const lines = section.split('\n');
              const rawTitle = lines[0].replace(/\[|\]/g, '').trim();
              const content = lines
                .slice(1)
                .join('\n')
                .replace(/^---\s*$/gm, '')
                .trim();
              const anchor = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');

              return (
                <section
                  key={index}
                  id={anchor}
                  className={`p-6 md:p-8 rounded-3xl border transition-colors ${
                    isLatest
                      ? 'border-[#1D70E8]/40 bg-white dark:bg-[#1A1A1A] shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1A1A1A]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                      Version {rawTitle.replace(/^v/i, '')}
                    </h2>
                    {isLatest && (
                      <span className="inline-block px-3.5 py-1 text-xs font-semibold text-white bg-[#1D70E8] rounded-full">
                        Latest Release
                      </span>
                    )}
                  </div>

                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ node, ...props }) => (
                          <p className="mb-5 text-base leading-relaxed text-slate-700 dark:text-slate-300" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3
                            className="text-lg md:text-xl font-semibold mt-8 mb-4 pt-5 border-t border-slate-200 dark:border-slate-800 text-[#1D70E8] first:mt-4 first:pt-0 first:border-t-0"
                            {...props}
                          />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul className="list-disc pl-6 space-y-2.5 my-3" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="list-decimal pl-6 space-y-2.5 my-3" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="leading-relaxed text-slate-700 dark:text-slate-300" {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong className="font-semibold text-slate-900 dark:text-white" {...props} />
                        ),
                        code: ({ node, ...props }) => (
                          <code
                            className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#242424] text-slate-900 dark:text-slate-100 font-mono text-xs md:text-sm"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {content}
                    </ReactMarkdown>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-red-500">
          Failed to load release notes.{' '}
          <a
            href="https://github.com/DebasishNaik82/DSSGALLERY/blob/main/CHANGELOG.md"
            className="underline"
          >
            View on GitHub
          </a>
        </p>
      )}
    </ContentPage>
  );
}
