import { getPageImage, source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getGlossaryTerm, getRelatedTerms } from '@/lib/glossary';
import Link from 'next/link';

export default async function TermPage(props: PageProps<'/docs/glossary/[term]'>) {
  const params = await props.params;
  const termSlug = params.term;
  
  const term = getGlossaryTerm(termSlug);
  if (!term) notFound();

  const page = term.page;
  const MDX = page.data.body;
  const relatedTerms = getRelatedTerms(term);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="mb-4">
        <Link 
          href="/docs/glossary"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Glossary
        </Link>
      </div>
      
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <DocsTitle>{page.data.title}</DocsTitle>
        <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
          {term.category}
        </span>
        {term.projects && term.projects.length > 0 && term.projects.map((projectSlug) => {
          const projectNames: Record<string, string> = {
            'meeting-summary': 'Meeting Summary',
            'landing-page': 'Landing Page',
            'forms-workflow': 'Forms Workflow',
          };
          return (
            <Link
              key={projectSlug}
              href={`/docs/projects/${projectSlug}`}
              className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {projectNames[projectSlug] || projectSlug}
            </Link>
          );
        })}
      </div>
      
      <DocsDescription>{page.data.description}</DocsDescription>
      
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>

      {term.projects && term.projects.length > 0 && (
        <div className="mt-8 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Used in Projects</h2>
          <div className="flex flex-wrap gap-2">
            {term.projects.map((projectSlug) => {
              const projectNames: Record<string, string> = {
                'meeting-summary': 'Meeting Summary',
                'landing-page': 'Landing Page',
                'forms-workflow': 'Forms Workflow',
              };
              return (
                <Link
                  key={projectSlug}
                  href={`/docs/projects/${projectSlug}`}
                  className="px-4 py-2 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
                >
                  {projectNames[projectSlug] || projectSlug}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {relatedTerms.length > 0 && (
        <div className="mt-8 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Related Terms</h2>
          <div className="flex flex-wrap gap-2">
            {relatedTerms.map((relatedTerm) => (
              <Link
                key={relatedTerm.slug}
                href={`/docs/glossary/${relatedTerm.slug}`}
                className="px-3 py-1 rounded-md bg-muted hover:bg-muted/80 transition-colors text-sm"
              >
                {relatedTerm.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const allPages = source.getPages();
  const glossaryPages = allPages.filter((page) => 
    page.slugs[0] === 'glossary' && page.slugs.length > 1
  );

  return glossaryPages.map((page) => ({
    term: page.slugs[page.slugs.length - 1],
  }));
}

export async function generateMetadata(props: PageProps<'/docs/glossary/[term]'>): Promise<Metadata> {
  const params = await props.params;
  const term = getGlossaryTerm(params.term);
  if (!term) notFound();

  const page = term.page;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

