import { format, parseISO } from "date-fns";
import { allBlocks } from "contentlayer/generated";
import { Mdx } from "@/pr/ui-kit/mdx";
import BackToPage from "@/pr/components/BackToPage";

interface BlocksPageProps {
  params: { slug: string };
}

export default function BlocksPage({ params }: BlocksPageProps) {
  const block = allBlocks.find(
    (block) => block._raw.flattenedPath === params.slug
  );
  if (!block) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="space-y-3">
      <BackToPage type="text" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold">{block.title}</h1>
        <span className="text-slate-600 text-sm">
          <span className="font-medium">Updated:</span>{" "}
          <time dateTime={block.date}>
            {format(parseISO(block.date), "LLLL d, yyyy")}
          </time>
        </span>
      </div>

      <div>
        <Mdx code={block.body.code} />
      </div>
    </article>
  );
}
