import { getPageImage, source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { gitConfig } from '@/lib/layout.shared';
import type React from 'react';
import type { DocData } from 'fumadocs-mdx/runtime/types';
import type { MDXContent } from 'mdx/types';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // Cast to include DocData properties (body, toc, etc.) which are added by
  // fumadocs-mdx at runtime but not reflected in the base PageData type.
  const data = page.data as typeof page.data & DocData;
  const MDX = data.body as MDXContent;

  return (
    <DocsPage 
      toc={data.toc} 
      full={(page.data as any).full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const slug = params.slug?.join('/') || '';
  const baseUrl = 'https://docs.plexcord.club';
  const pageDataExt = page.data as any;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: `${baseUrl}/docs/${slug}`,
      siteName: 'Plexcord Documentation',
      images: [
        {
          url: pageDataExt.image || getPageImage(page).url,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
      images: [pageDataExt.image || getPageImage(page).url],
    },
    alternates: {
      canonical: `${baseUrl}/docs/${slug}`,
    },
  };
}
