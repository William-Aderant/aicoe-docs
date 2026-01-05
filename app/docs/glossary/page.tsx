import { getAllGlossaryTerms, getGlossaryCategories, getGlossaryProjects, termToData } from '@/lib/glossary';
import GlossaryClient from './glossary-client';

export default function GlossaryPage() {
  const allTerms = getAllGlossaryTerms();
  const categories = getGlossaryCategories();
  const projects = getGlossaryProjects();
  
  // Convert to serializable data (strip out page objects)
  const termsData = allTerms.map(termToData);

  return <GlossaryClient initialTerms={termsData} initialCategories={categories} initialProjects={projects} />;
}
