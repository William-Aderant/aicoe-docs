import { getPageImage, source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getTermsForProject } from '@/lib/glossary';
import Link from 'next/link';

export default async function ProjectPage(props: PageProps<'/docs/projects/[project]'>) {
  const params = await props.params;
  const projectSlug = params.project;
  
  const page = source.getPage(['projects', projectSlug]);
  if (!page) notFound();

  const MDX = page.data.body;
  const tools = getTermsForProject(projectSlug);

  const projectNames: Record<string, string> = {
    'meeting-summary': 'Meeting Summary',
    'landing-page': 'Landing Page',
    'forms-workflow': 'Forms Workflow',
  };

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="mb-4">
        <Link 
          href="/docs/projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
      
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>

      {tools.length > 0 && (
        <div className="mt-8 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/docs/glossary/${tool.slug}`}
                className="block p-4 border rounded-lg hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">
                  {tool.title}
                </h3>
                {tool.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                )}
                <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                  {tool.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return [
    { project: 'meeting-summary' },
    { project: 'landing-page' },
    { project: 'forms-workflow' },
  ];
}

export async function generateMetadata(props: PageProps<'/docs/projects/[project]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(['projects', params.project]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

