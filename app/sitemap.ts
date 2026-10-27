import { MetadataRoute } from 'next';
import { getAbsoluteUrl } from '../lib/seo';

interface RouteConfig {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const routes: RouteConfig[] = [
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/features', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/download', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/whats-new', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/offline-gallery-app', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/photo-album-organization', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
