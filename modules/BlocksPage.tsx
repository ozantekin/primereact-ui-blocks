import { format, parseISO } from "date-fns";
import { allBlocks } from "contentlayer/generated";
import { Mdx } from "@/pr/components/mdx";
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
        <time dateTime={block.date} className="mb-1 text-slate-600 text-sm">
          {format(parseISO(block.date), "LLLL d, yyyy")}
        </time>
      </div>

      <div>
        <Mdx code={block.body.code} />
      </div>
    </article>
  );
}
