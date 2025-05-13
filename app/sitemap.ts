import { MetadataRoute } from 'next';
import { getAllProjectSlugs } from '@/lib/projects';
import { getAllBlogSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';
  
  // Get all project and blog slugs
  const projectSlugs = getAllProjectSlugs();
  const blogSlugs = getAllBlogSlugs();
  
  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];
  
  // Project routes
  const projectRoutes = projectSlugs.map(slug => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Blog routes
  const blogRoutes = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  return [...routes, ...projectRoutes, ...blogRoutes];
}