import { format, parseISO } from "date-fns";
import { Docs } from "contentlayer/generated";
import { Mdx } from "@/pr/ui-kit/mdx";
import BackToPage from "@/pr/components/BackToPage";
import { PageOfContents } from "@/pr/modules/docs-page/components/PageOfContents";
import { getPageOfContents } from "@/pr/lib/toc";

interface DocsPageProps {
  doc: Docs;
}

export default async function DocsPageView({ doc }: DocsPageProps) {
  const toc = await getPageOfContents(doc.body.raw);

  return (
    <div className="relative h-full lg:gap-8 xl:grid xl:grid-cols-[1fr_16rem]">
      <main className="py-4 px-8">
        <div className="space-y-2 mb-10">
          <BackToPage type="text" />

          <div>
            <h1 className="text-3xl font-bold">{doc.title}</h1>
            <span className="text-slate-600 text-sm">
              <span className="font-medium">Updated:</span>{" "}
              <time dateTime={doc.date}>
                {format(parseISO(doc.date), "LLLL d, yyyy")}
              </time>
            </span>
          </div>
        </div>

        <Mdx code={doc.body.code} />
      </main>

      <aside className="hidden py-4 px-8 text-sm xl:block border-l">
        <div className="sticky top-[73px]">
          <PageOfContents toc={toc} />
        </div>
      </aside>
    </div>
  );
}
