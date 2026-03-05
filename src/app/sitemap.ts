/*
 * This file is part of docs.plexcord.club.
 * Copyright (c) 2026 Plexcord.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://docs.plexcord.club';
  const currentDate = new Date();

  // Get all pages (English only)
  const pages = source.getPages();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add homepage
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1,
  });

  // Add all documentation pages
  pages.forEach((page) => {
    const url = `${baseUrl}${page.url}`;
    const lastMod = (page.data as any).lastModified || currentDate;

    sitemapEntries.push({
      url,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: page.url === '/docs' ? 0.9 : 0.8,
    });
  });

  return sitemapEntries;
}
