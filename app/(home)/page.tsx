import Link from "next/link";
import { Button } from "primereact/button";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlocks, Blocks } from "contentlayer/generated";

function PostCard(post: Blocks) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allBlocks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="space-y-4">
      <div className="max-w-4xl  space-y-2 text-pretty">
        <h2 className="font-bold text-2xl">
          Easy-to-use UI Blocks for your next project!
        </h2>
        <p>
          primereact/ui blocks is a collection of easy-to-use UI components for
          your next project. It is built with Tailwind CSS and PrimeReact.
        </p>
        <p>
          This is an unofficial extension of PrimeReact, and it is not
          affiliated with PrimeTek.
        </p>
      </div>
      <Button label="Get Started" />

      {posts.map((post) => (
        <PostCard key={post.url} {...post} />
      ))}
    </div>
  );
}
