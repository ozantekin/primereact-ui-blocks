import { allBlocks } from "@/pr/.contentlayer/generated";
import BlockCard from "@/pr/components/BlockCard";
import { compareDesc } from "date-fns";
import { Divider } from "primereact/divider";

export default function HomePage() {
  const marketingBlocks = allBlocks
    .filter((block) => block.group === "marketing")
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const formBlocks = allBlocks
    .filter((block) => block.group === "form")
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="space-y-8">
      <section className="max-w-4xl  space-y-2 text-pretty">
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
      </section>

      <section className="py-4 space-y-4">
        <h3 className="text-xl font-semibold">Marketing</h3>
        <Divider />
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6">
          {marketingBlocks.map((post) => (
            <BlockCard key={post.url} {...post} />
          ))}
        </div>
      </section>

      <section className="py-4 space-y-4">
        <h3 className="text-xl font-semibold">Form</h3>
        <Divider />
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6">
          {formBlocks.map((post) => (
            <BlockCard key={post.url} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}
