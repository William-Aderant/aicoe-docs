import { getAllGlossaryTerms, getGlossaryCategories } from '@/lib/glossary';
import GlossaryClient from './glossary-client';

export default function GlossaryPage() {
  const allTerms = getAllGlossaryTerms();
  const categories = getGlossaryCategories();

  return <GlossaryClient initialTerms={allTerms} initialCategories={categories} />;
}
