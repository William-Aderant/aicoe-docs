// @ts-nocheck
import * as __fd_glob_8 from "../content/docs/glossary/transformer.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/glossary/prompt-engineering.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/glossary/neural-network.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/glossary/machine-learning.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/glossary/inference.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/glossary/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/glossary/fine-tuning.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/test.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "test.mdx": __fd_glob_1, "glossary/fine-tuning.mdx": __fd_glob_2, "glossary/index.mdx": __fd_glob_3, "glossary/inference.mdx": __fd_glob_4, "glossary/machine-learning.mdx": __fd_glob_5, "glossary/neural-network.mdx": __fd_glob_6, "glossary/prompt-engineering.mdx": __fd_glob_7, "glossary/transformer.mdx": __fd_glob_8, });