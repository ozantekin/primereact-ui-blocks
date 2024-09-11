import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeComponent } from "./lib/rehype-component";

export const Blocks = defineDocumentType(() => ({
  name: "Blocks",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (block) => `/blocks/${block._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blocks",
  documentTypes: [Blocks],
  mdx: {
    rehypePlugins: [
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
