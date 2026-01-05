// source.config.ts
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var customFrontmatterSchema = frontmatterSchema.extend({
  projects: z.array(z.string()).optional()
});
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: customFrontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    // MDX options
  }
});
export {
  source_config_default as default,
  docs
};
