// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "test.mdx": () => import("../content/docs/test.mdx?collection=docs"), "glossary/fine-tuning.mdx": () => import("../content/docs/glossary/fine-tuning.mdx?collection=docs"), "glossary/index.mdx": () => import("../content/docs/glossary/index.mdx?collection=docs"), "glossary/inference.mdx": () => import("../content/docs/glossary/inference.mdx?collection=docs"), "glossary/machine-learning.mdx": () => import("../content/docs/glossary/machine-learning.mdx?collection=docs"), "glossary/neural-network.mdx": () => import("../content/docs/glossary/neural-network.mdx?collection=docs"), "glossary/prompt-engineering.mdx": () => import("../content/docs/glossary/prompt-engineering.mdx?collection=docs"), "glossary/transformer.mdx": () => import("../content/docs/glossary/transformer.mdx?collection=docs"), }),
};
export default browserCollections;