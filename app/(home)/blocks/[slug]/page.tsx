import { format, parseISO } from "date-fns";
import { allBlocks } from "contentlayer/generated";
import { Mdx } from "@/pr/components/mdx";

export const generateStaticParams = async () =>
  allBlocks.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allBlocks.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allBlocks.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
