import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlocks, Blocks } from "contentlayer/generated";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { Divider } from "primereact/divider";

function BlockCard(block: Blocks) {
  return (
    <Link href={block.url} className="block group">
      <Card title={block.title} subTitle={block.items} className="relative">
        <Badge value={block.badge} className="absolute top-2 right-2" />
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <time dateTime={block.date} className="text-sm text-slate-600">
            {format(parseISO(block.date), "LLLL d, yyyy")}
          </time>
          <Button
            text
            icon="pi pi-arrow-right"
            severity="secondary"
            aria-label="Read more"
            className="transform group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </div>
      </Card>
    </Link>
  );
}

export default function Home() {
  const marketingBlocks = allBlocks
    .filter((block) => block.group === "marketing")
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
        <h3 className="text-xl font-semibold">Call to Action</h3>
        <Divider />
      </section>
    </div>
  );
}
