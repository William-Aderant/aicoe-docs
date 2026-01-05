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
"[project]/app/docs/glossary/glossary-client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/docs/glossary/glossary-client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/docs/glossary/glossary-client.tsx <module evaluation>", "default");
}),
"[project]/app/docs/glossary/glossary-client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/docs/glossary/glossary-client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/docs/glossary/glossary-client.tsx", "default");
}),
"[project]/app/docs/glossary/glossary-client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$docs$2f$glossary$2f$glossary$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/docs/glossary/glossary-client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$docs$2f$glossary$2f$glossary$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/docs/glossary/glossary-client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$docs$2f$glossary$2f$glossary$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/docs/glossary/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>GlossaryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/glossary.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$docs$2f$glossary$2f$glossary$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/docs/glossary/glossary-client.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function GlossaryPage() {
    const allTerms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllGlossaryTerms"])();
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlossaryCategories"])();
    // Convert to serializable data (strip out page objects)
    const termsData = allTerms.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["termToData"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$docs$2f$glossary$2f$glossary$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialTerms: termsData,
        initialCategories: categories
    }, void 0, false, {
        fileName: "[project]/app/docs/glossary/page.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/docs/glossary/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/docs/glossary/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__923c5c58._.js.map