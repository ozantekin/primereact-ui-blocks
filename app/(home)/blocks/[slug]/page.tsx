import { allBlocks } from "contentlayer/generated";
import BlocksPage from "@/pr/modules/BlocksPage";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const block = allBlocks.find(
    (block) => block._raw.flattenedPath === params.slug
  );
  if (!block) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: block.title };
};

export const generateStaticParams = async () =>
  allBlocks.map((block) => ({ slug: block._raw.flattenedPath }));

interface BlocksProps {
  params: { slug: string };
}

export default function Blocks({ params }: BlocksProps) {
  return <BlocksPage params={params} />;
}
