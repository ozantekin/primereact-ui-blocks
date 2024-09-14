import { notFound } from "next/navigation";
import DocsPageView from "@/pr/modules/docs-page";
import { allDocs } from "@/pr/.contentlayer/generated";

interface DocsPageProps {
  params: {
    slug: string[];
  };
}

async function getDocsFromParams(props: DocsPageProps) {
  const { params } = props;
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  DocsPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocsPage(props: DocsPageProps) {
  const { params } = props;
  const doc = await getDocsFromParams({ params });

  if (!doc) {
    notFound();
  }

  return <DocsPageView doc={doc} />;
}
