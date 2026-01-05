import { source } from './source';
import type { InferPageType } from 'fumadocs-core/source';

// Serializable type for client components (no functions)
export type GlossaryTermData = {
  title: string;
  slug: string;
  category: string;
  relatedTerms?: string[];
  description?: string;
  projects?: string[];
};

// Full type for server-side use (includes page object)
export type GlossaryTerm = GlossaryTermData & {
  page: InferPageType<typeof source>;
};

export type GlossaryCategory = {
  name: string;
  count: number;
};

/**
 * Get all glossary terms from the source
 */
export function getAllGlossaryTerms(): GlossaryTerm[] {
  const allPages = source.getPages();
  const glossaryPages = allPages.filter((page) => 
    page.slugs[0] === 'glossary' && page.slugs.length > 1
  );

  return glossaryPages.map((page) => {
    const frontmatter = page.data as any;
    return {
      title: page.data.title,
      slug: page.slugs[page.slugs.length - 1],
      category: frontmatter.category || 'Uncategorized',
      relatedTerms: frontmatter.relatedTerms || [],
      description: page.data.description || frontmatter.description,
      projects: frontmatter.projects || [],
      page,
    };
  });
}

/**
 * Get a single glossary term by slug
 */
export function getGlossaryTerm(slug: string): GlossaryTerm | null {
  const page = source.getPage(['glossary', slug]);
  if (!page) return null;

  const frontmatter = page.data as any;
  return {
    title: page.data.title,
    slug,
    category: frontmatter.category || 'Uncategorized',
    relatedTerms: frontmatter.relatedTerms || [],
    description: page.data.description || frontmatter.description,
    projects: frontmatter.projects || [],
    page,
  };
}

/**
 * Get all unique categories from glossary terms
 */
export function getGlossaryCategories(): GlossaryCategory[] {
  const terms = getAllGlossaryTerms();
  const categoryMap = new Map<string, number>();

  terms.forEach((term) => {
    const count = categoryMap.get(term.category) || 0;
    categoryMap.set(term.category, count + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Convert GlossaryTerm to serializable GlossaryTermData
 */
export function termToData(term: GlossaryTerm): GlossaryTermData {
  return {
    title: term.title,
    slug: term.slug,
    category: term.category,
    relatedTerms: term.relatedTerms,
    description: term.description,
    projects: term.projects,
  };
}

/**
 * Filter terms by category
 */
export function filterTermsByCategory(terms: GlossaryTermData[], category: string): GlossaryTermData[] {
  if (!category || category === 'All') return terms;
  return terms.filter((term) => term.category === category);
}

/**
 * Search terms by query string
 */
export function searchTerms(terms: GlossaryTermData[], query: string): GlossaryTermData[] {
  if (!query.trim()) return terms;

  const lowerQuery = query.toLowerCase();
  return terms.filter((term) => {
    const titleMatch = term.title.toLowerCase().includes(lowerQuery);
    const descMatch = term.description?.toLowerCase().includes(lowerQuery);
    const categoryMatch = term.category.toLowerCase().includes(lowerQuery);
    return titleMatch || descMatch || categoryMatch;
  });
}

/**
 * Group terms alphabetically
 */
export function groupTermsAlphabetically(terms: GlossaryTermData[]): Map<string, GlossaryTermData[]> {
  const grouped = new Map<string, GlossaryTermData[]>();

  terms.forEach((term) => {
    const firstLetter = term.title.charAt(0).toUpperCase();
    const letter = /[A-Z]/.test(firstLetter) ? firstLetter : '#';
    
    if (!grouped.has(letter)) {
      grouped.set(letter, []);
    }
    grouped.get(letter)!.push(term);
  });

  // Sort terms within each letter group
  grouped.forEach((terms, letter) => {
    terms.sort((a, b) => a.title.localeCompare(b.title));
  });

  return grouped;
}

/**
 * Get all letters that have terms
 */
export function getAvailableLetters(terms: GlossaryTermData[]): string[] {
  const grouped = groupTermsAlphabetically(terms);
  return Array.from(grouped.keys()).sort();
}

/**
 * Filter terms by project
 */
export function filterTermsByProject(terms: GlossaryTermData[], project: string): GlossaryTermData[] {
  if (!project || project === 'All') return terms;
  return terms.filter((term) => term.projects?.includes(project));
}

/**
 * Get all unique projects from glossary terms
 */
export function getGlossaryProjects(): { name: string; slug: string; count: number }[] {
  const terms = getAllGlossaryTerms();
  const projectMap = new Map<string, number>();

  terms.forEach((term) => {
    term.projects?.forEach((project) => {
      const count = projectMap.get(project) || 0;
      projectMap.set(project, count + 1);
    });
  });

  const projectNames: Record<string, string> = {
    'meeting-summary': 'Meeting Summary',
    'landing-page': 'Landing Page',
    'forms-workflow': 'Forms Workflow',
  };

  return Array.from(projectMap.entries())
    .map(([slug, count]) => ({ name: projectNames[slug] || slug, slug, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get terms for a specific project
 */
export function getTermsForProject(projectSlug: string): GlossaryTerm[] {
  const allTerms = getAllGlossaryTerms();
  return allTerms.filter((term) => term.projects?.includes(projectSlug));
}

/**
 * Get related terms for a given term
 */
export function getRelatedTerms(term: GlossaryTerm): GlossaryTerm[] {
  if (!term.relatedTerms || term.relatedTerms.length === 0) return [];

  const allTerms = getAllGlossaryTerms();
  const related: GlossaryTerm[] = [];

  term.relatedTerms.forEach((relatedSlug) => {
    const relatedTerm = allTerms.find((t) => t.slug === relatedSlug);
    if (relatedTerm) {
      related.push(relatedTerm);
    }
  });

  return related;
}

