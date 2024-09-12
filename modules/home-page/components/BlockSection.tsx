import { Blocks } from "@/pr/.contentlayer/generated";
import BlockCard from "@/pr/modules/home-page/components/BlockCard";
import { Divider } from "primereact/divider";

interface BlockSectionProps {
  title: string;
  blocks: Blocks[];
}

export default function BlockSection({ title, blocks }: BlockSectionProps) {
  return (
    <section className="py-4 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Divider />
      <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6">
        {blocks.map((post) => (
          <BlockCard key={post.url} {...post} />
        ))}
      </div>
    </section>
  );
}
