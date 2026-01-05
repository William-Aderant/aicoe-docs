module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/docs/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/docs/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mdx-components.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMDXComponents",
    ()=>getMDXComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$mdx$2e$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/mdx.server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$mdx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/mdx.js [app-rsc] (ecmascript)");
;
function getMDXComponents(components) {
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$mdx$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        ...components
    };
}
}),
"[project]/lib/glossary.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "filterTermsByCategory",
    ()=>filterTermsByCategory,
    "getAllGlossaryTerms",
    ()=>getAllGlossaryTerms,
    "getAvailableLetters",
    ()=>getAvailableLetters,
    "getGlossaryCategories",
    ()=>getGlossaryCategories,
    "getGlossaryTerm",
    ()=>getGlossaryTerm,
    "getRelatedTerms",
    ()=>getRelatedTerms,
    "groupTermsAlphabetically",
    ()=>groupTermsAlphabetically,
    "searchTerms",
    ()=>searchTerms,
    "termToData",
    ()=>termToData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/source.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function getAllGlossaryTerms() {
    const allPages = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].getPages();
    const glossaryPages = allPages.filter((page)=>page.slugs[0] === 'glossary' && page.slugs.length > 1);
    return glossaryPages.map((page)=>{
        const frontmatter = page.data;
        return {
            title: page.data.title,
            slug: page.slugs[page.slugs.length - 1],
            category: frontmatter.category || 'Uncategorized',
            relatedTerms: frontmatter.relatedTerms || [],
            description: page.data.description || frontmatter.description,
            page
        };
    });
}
function getGlossaryTerm(slug) {
    const page = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].getPage([
        'glossary',
        slug
    ]);
    if (!page) return null;
    const frontmatter = page.data;
    return {
        title: page.data.title,
        slug,
        category: frontmatter.category || 'Uncategorized',
        relatedTerms: frontmatter.relatedTerms || [],
        description: page.data.description || frontmatter.description,
        page
    };
}
function getGlossaryCategories() {
    const terms = getAllGlossaryTerms();
    const categoryMap = new Map();
    terms.forEach((term)=>{
        const count = categoryMap.get(term.category) || 0;
        categoryMap.set(term.category, count + 1);
    });
    return Array.from(categoryMap.entries()).map(([name, count])=>({
            name,
            count
        })).sort((a, b)=>a.name.localeCompare(b.name));
}
function termToData(term) {
    return {
        title: term.title,
        slug: term.slug,
        category: term.category,
        relatedTerms: term.relatedTerms,
        description: term.description
    };
}
function filterTermsByCategory(terms, category) {
    if (!category || category === 'All') return terms;
    return terms.filter((term)=>term.category === category);
}
function searchTerms(terms, query) {
    if (!query.trim()) return terms;
    const lowerQuery = query.toLowerCase();
    return terms.filter((term)=>{
        const titleMatch = term.title.toLowerCase().includes(lowerQuery);
        const descMatch = term.description?.toLowerCase().includes(lowerQuery);
        const categoryMatch = term.category.toLowerCase().includes(lowerQuery);
        return titleMatch || descMatch || categoryMatch;
    });
}
function groupTermsAlphabetically(terms) {
    const grouped = new Map();
    terms.forEach((term)=>{
        const firstLetter = term.title.charAt(0).toUpperCase();
        const letter = /[A-Z]/.test(firstLetter) ? firstLetter : '#';
        if (!grouped.has(letter)) {
            grouped.set(letter, []);
        }
        grouped.get(letter).push(term);
    });
    // Sort terms within each letter group
    grouped.forEach((terms, letter)=>{
        terms.sort((a, b)=>a.title.localeCompare(b.title));
    });
    return grouped;
}
function getAvailableLetters(terms) {
    const grouped = groupTermsAlphabetically(terms);
    return Array.from(grouped.keys()).sort();
}
function getRelatedTerms(term) {
    if (!term.relatedTerms || term.relatedTerms.length === 0) return [];
    const allTerms = getAllGlossaryTerms();
    const related = [];
    term.relatedTerms.forEach((relatedSlug)=>{
        const relatedTerm = allTerms.find((t)=>t.slug === relatedSlug);
        if (relatedTerm) {
            related.push(relatedTerm);
        }
    });
    return related;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/docs/glossary/[term]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>TermPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/source.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$page$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/layouts/docs/page/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$mdx$2e$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/mdx.server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/glossary.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
async function TermPage(props) {
    const params = await props.params;
    const termSlug = params.term;
    const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlossaryTerm"])(termSlug);
    if (!term) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const page = term.page;
    const MDX = page.data.body;
    const relatedTerms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRelatedTerms"])(term);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$page$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocsPage"], {
        toc: page.data.toc,
        full: page.data.full,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/docs/glossary",
                    className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                    children: "← Back to Glossary"
                }, void 0, false, {
                    fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$page$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocsTitle"], {
                        children: page.data.title
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground",
                        children: term.category
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$page$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocsDescription"], {
                children: page.data.description
            }, void 0, false, {
                fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$docs$2f$page$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DocsBody"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDX, {
                    components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMDXComponents"])({
                        a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$mdx$2e$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRelativeLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"], page)
                    })
                }, void 0, false, {
                    fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            relatedTerms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 pt-8 border-t",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold mb-4",
                        children: "Related Terms"
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: relatedTerms.map((relatedTerm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/docs/glossary/${relatedTerm.slug}`,
                                className: "px-3 py-1 rounded-md bg-muted hover:bg-muted/80 transition-colors text-sm",
                                children: relatedTerm.title
                            }, relatedTerm.slug, false, {
                                fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/[term]/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/docs/glossary/[term]/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
async function generateStaticParams() {
    const allPages = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["source"].getPages();
    const glossaryPages = allPages.filter((page)=>page.slugs[0] === 'glossary' && page.slugs.length > 1);
    return glossaryPages.map((page)=>({
            term: page.slugs[page.slugs.length - 1]
        }));
}
async function generateMetadata(props) {
    const params = await props.params;
    const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlossaryTerm"])(params.term);
    if (!term) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const page = term.page;
    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageImage"])(page).url
        }
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/docs/glossary/[term]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/docs/glossary/[term]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c16baa3._.js.map