import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeComponent } from "./lib/rehype-component";
import rehypeSlug from "rehype-slug";

export const Docs = defineDocumentType(() => ({
  name: "Docs",
  contentType: "mdx",
  filePathPattern: `docs/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    items: { type: "string", required: false },
    group: { type: "string", required: false },
    badge: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc: any) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "./preview",
  documentTypes: [Docs],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" || node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;

            node.__rawString__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "github-light",
          keepBackground: false,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }

            preElement.properties["__rawString__"] = node.__rawString__;
          }
        });
      },
    ],
  },
});
