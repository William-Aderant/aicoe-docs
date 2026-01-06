'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { filterTermsByCategory, searchTerms, groupTermsAlphabetically, getAvailableLetters, type GlossaryTerm, type GlossaryCategory } from '@/lib/glossary';
import { Search, Filter } from 'lucide-react';

interface GlossaryClientProps {
  initialTerms: GlossaryTerm[];
  initialCategories: GlossaryCategory[];
}

export default function GlossaryClient({ initialTerms, initialCategories }: GlossaryClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Filter and search terms
  const filteredTerms = useMemo(() => {
    let terms = initialTerms;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      terms = filterTermsByCategory(terms, selectedCategory);
    }
    
    // Apply search
    if (searchQuery) {
      terms = searchTerms(terms, searchQuery);
    }
    
    // Apply letter filter
    if (selectedLetter) {
      const grouped = groupTermsAlphabetically(terms);
      terms = grouped.get(selectedLetter) || [];
    }
    
    return terms.sort((a, b) => a.title.localeCompare(b.title));
  }, [initialTerms, selectedCategory, searchQuery, selectedLetter]);

  const availableLetters = useMemo(() => {
    return getAvailableLetters(initialTerms);
  }, [initialTerms]);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">AI Glossary</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive glossary of AI-related terms and definitions for engineers.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search terms..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedLetter(null); // Clear letter filter when searching
            }}
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              selectedCategory === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {initialCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                selectedCategory === category.name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Alphabetical Index */}
        <div className="flex flex-wrap gap-2">
          {availableLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => {
                setSelectedLetter(selectedLetter === letter ? null : letter);
                setSearchQuery(''); // Clear search when selecting letter
              }}
              className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                selectedLetter === letter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'} found
      </div>

      {/* Terms Grid */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((term) => (
            <TermCard key={term.slug} term={term} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No terms found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedLetter(null);
            }}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

function TermCard({ term }: { term: GlossaryTerm }) {
  return (
    <Link
      href={`/docs/glossary/${term.slug}`}
      className="block p-4 border rounded-lg hover:border-primary transition-colors group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {term.title}
        </h3>
        <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground whitespace-nowrap">
          {term.category}
        </span>
      </div>
      {term.description && (
        <p className="text-sm text-muted-foreground line-clamp-2">
          {term.description}
        </p>
      )}
    </Link>
  );
}

