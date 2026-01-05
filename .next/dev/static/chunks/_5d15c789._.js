(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/content/docs/glossary/index.mdx.js?collection=docs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_markdown",
    ()=>_markdown,
    "default",
    ()=>MDXContent,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
let _markdown = "\n\nThis page provides an interactive glossary of AI-related terms. Use the search and filters above to find specific terms.\n";
let frontmatter = {
    "title": "Glossary",
    "description": "A comprehensive glossary of AI-related terms and definitions"
};
let structuredData = {
    "contents": [
        {
            "heading": undefined,
            "content": "This page provides an interactive glossary of AI-related terms. Use the search and filters above to find specific terms."
        }
    ],
    "headings": []
};
const toc = [];
function _createMdxContent(props) {
    const _components = {
        p: "p",
        ...props.components
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
        children: "This page provides an interactive glossary of AI-related terms. Use the search and filters above to find specific terms."
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
_c = MDXContent;
var _c;
__turbopack_context__.k.register(_c, "MDXContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/docs/test.mdx.js?collection=docs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_markdown",
    ()=>_markdown,
    "default",
    ()=>MDXContent,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
let _markdown = "\n\n## Code Block\n\n```js\nconsole.log('Hello World');\n```\n\n## Cards\n\n<Cards>\n  <Card title=\"Learn more about Next.js\" href=\"https://nextjs.org/docs\" />\n\n  <Card title=\"Learn more about Fumadocs\" href=\"https://fumadocs.dev\" />\n</Cards>\n";
let frontmatter = {
    "title": "Components",
    "description": "Components"
};
let structuredData = {
    "contents": [],
    "headings": [
        {
            "id": "code-block",
            "content": "Code Block"
        },
        {
            "id": "cards",
            "content": "Cards"
        }
    ]
};
const toc = [
    {
        depth: 2,
        url: "#code-block",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Code Block"
        })
    },
    {
        depth: 2,
        url: "#cards",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Cards"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        pre: "pre",
        span: "span",
        ...props.components
    }, { Card, Cards } = _components;
    if (!Card) _missingMdxReference("Card", true);
    if (!Cards) _missingMdxReference("Cards", true);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "code-block",
                children: "Code Block"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                        "--shiki-light": "#24292e",
                        "--shiki-dark": "#e1e4e8",
                        "--shiki-light-bg": "#fff",
                        "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(_components.span, {
                            className: "line",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                    },
                                    children: "console."
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                    },
                                    children: "log"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                    },
                                    children: "("
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: "'Hello World'"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    })
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "cards",
                children: "Cards"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Cards, {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Card, {
                        title: "Learn more about Next.js",
                        href: "https://nextjs.org/docs"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Card, {
                        title: "Learn more about Fumadocs",
                        href: "https://fumadocs.dev"
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
_c = MDXContent;
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
var _c;
__turbopack_context__.k.register(_c, "MDXContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/docs/index.mdx.js?collection=docs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_markdown",
    ()=>_markdown,
    "default",
    ()=>MDXContent,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
let _markdown = "\n\nWelcome to the docs! You can start writing documents in `/content/docs`.\n\n## What is Next?\n\n<Cards>\n  <Card title=\"Learn more about Next.js\" href=\"https://nextjs.org/docs\" />\n\n  <Card title=\"Learn more about Fumadocs\" href=\"https://fumadocs.dev\" />\n</Cards>\n";
let frontmatter = {
    "title": "Hello World",
    "description": "Your first document"
};
let structuredData = {
    "contents": [
        {
            "heading": undefined,
            "content": "Welcome to the docs! You can start writing documents in /content/docs."
        }
    ],
    "headings": [
        {
            "id": "what-is-next",
            "content": "What is Next?"
        }
    ]
};
const toc = [
    {
        depth: 2,
        url: "#what-is-next",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "What is Next?"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        p: "p",
        ...props.components
    }, { Card, Cards } = _components;
    if (!Card) _missingMdxReference("Card", true);
    if (!Cards) _missingMdxReference("Cards", true);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(_components.p, {
                children: [
                    "Welcome to the docs! You can start writing documents in ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                        children: "/content/docs"
                    }),
                    "."
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "what-is-next",
                children: "What is Next?"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Cards, {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Card, {
                        title: "Learn more about Next.js",
                        href: "https://nextjs.org/docs"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Card, {
                        title: "Learn more about Fumadocs",
                        href: "https://fumadocs.dev"
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
_c = MDXContent;
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
var _c;
__turbopack_context__.k.register(_c, "MDXContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.source/server.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "docs",
    ()=>docs
]);
// @ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$glossary$2f$index$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/docs/glossary/index.mdx.js?collection=docs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$test$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/docs/test.mdx.js?collection=docs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$index$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/docs/index.mdx.js?collection=docs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$mdx$2f$dist$2f$runtime$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-mdx/dist/runtime/server.js [app-client] (ecmascript)");
;
;
;
;
const create = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$mdx$2f$dist$2f$runtime$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["server"])({
    "doc": {
        "passthroughs": [
            "extractedReferences"
        ]
    }
});
const docs = await create.docs("docs", "content/docs", {}, {
    "index.mdx": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$index$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "test.mdx": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$test$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "glossary/index.mdx": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$docs$2f$glossary$2f$index$2e$mdx$2e$js$3f$collection$3d$docs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/source.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getLLMText",
    ()=>getLLMText,
    "getPageImage",
    ()=>getPageImage,
    "source",
    ()=>source
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.source/server.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/source/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$plugins$2f$lucide$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/source/plugins/lucide-icons.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loader"])({
    baseUrl: '/docs',
    source: __TURBOPACK__imported__module__$5b$project$5d2f2e$source$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["docs"].toFumadocsSource(),
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$source$2f$plugins$2f$lucide$2d$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lucideIconsPlugin"])()
    ]
});
function getPageImage(page) {
    const segments = [
        ...page.slugs,
        'image.png'
    ];
    return {
        segments,
        url: `/og/docs/${segments.join('/')}`
    };
}
async function getLLMText(page) {
    const processed = await page.data.getText('processed');
    return `# ${page.data.title}

${processed}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/glossary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/source.ts [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function getAllGlossaryTerms() {
    const allPages = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["source"].getPages();
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
    const page = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$source$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["source"].getPage([
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/docs/glossary/glossary-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>GlossaryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/glossary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function GlossaryClient({ initialTerms, initialCategories }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selectedLetter, setSelectedLetter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Filter and search terms
    const filteredTerms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryClient.useMemo[filteredTerms]": ()=>{
            let terms = initialTerms;
            // Apply category filter
            if (selectedCategory !== 'All') {
                terms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterTermsByCategory"])(terms, selectedCategory);
            }
            // Apply search
            if (searchQuery) {
                terms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchTerms"])(terms, searchQuery);
            }
            // Apply letter filter
            if (selectedLetter) {
                const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupTermsAlphabetically"])(terms);
                terms = grouped.get(selectedLetter) || [];
            }
            return terms.sort({
                "GlossaryClient.useMemo[filteredTerms]": (a, b)=>a.title.localeCompare(b.title)
            }["GlossaryClient.useMemo[filteredTerms]"]);
        }
    }["GlossaryClient.useMemo[filteredTerms]"], [
        initialTerms,
        selectedCategory,
        searchQuery,
        selectedLetter
    ]);
    const availableLetters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlossaryClient.useMemo[availableLetters]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableLetters"])(initialTerms);
        }
    }["GlossaryClient.useMemo[availableLetters]"], [
        initialTerms
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-2",
                        children: "AI Glossary"
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg",
                        children: "A comprehensive glossary of AI-related terms and definitions for engineers."
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search terms...",
                                value: searchQuery,
                                onChange: (e)=>{
                                    setSearchQuery(e.target.value);
                                    setSelectedLetter(null); // Clear letter filter when searching
                                },
                                className: "w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory('All'),
                                className: `px-3 py-1 rounded-md text-sm transition-colors ${selectedCategory === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`,
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            initialCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory(category.name),
                                    className: `px-3 py-1 rounded-md text-sm transition-colors ${selectedCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`,
                                    children: [
                                        category.name,
                                        " (",
                                        category.count,
                                        ")"
                                    ]
                                }, category.name, true, {
                                    fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: availableLetters.map((letter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedLetter(selectedLetter === letter ? null : letter);
                                    setSearchQuery(''); // Clear search when selecting letter
                                },
                                className: `px-2 py-1 rounded text-sm font-medium transition-colors ${selectedLetter === letter ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`,
                                children: letter
                            }, letter, false, {
                                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-muted-foreground",
                children: [
                    filteredTerms.length,
                    " ",
                    filteredTerms.length === 1 ? 'term' : 'terms',
                    " found"
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            filteredTerms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: filteredTerms.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TermCard, {
                        term: term
                    }, term.slug, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No terms found matching your criteria."
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSearchQuery('');
                            setSelectedCategory('All');
                            setSelectedLetter(null);
                        },
                        className: "mt-4 text-primary hover:underline",
                        children: "Clear all filters"
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(GlossaryClient, "q2JBV9EDXfmwdmBkktExX4+PdFY=");
_c = GlossaryClient;
function TermCard({ term }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/docs/glossary/${term.slug}`,
        className: "block p-4 border rounded-lg hover:border-primary transition-colors group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-lg group-hover:text-primary transition-colors",
                        children: term.title
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground whitespace-nowrap",
                        children: term.category
                    }, void 0, false, {
                        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            term.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground line-clamp-2",
                children: term.description
            }, void 0, false, {
                fileName: "[project]/app/docs/glossary/glossary-client.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/docs/glossary/glossary-client.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = TermCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlossaryClient");
__turbopack_context__.k.register(_c1, "TermCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
]);

//# sourceMappingURL=_5d15c789._.js.map