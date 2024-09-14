import { Docs } from "@/pr/.contentlayer/generated";
import DocCard from "@/pr/modules/landing-page/components/DocCard";
import { Divider } from "primereact/divider";

interface DocSectionProps {
  title: string;
  docs: Docs[];
}

export default function DocSection({ title, docs }: DocSectionProps) {
  return (
    <section className="py-4 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Divider />
      <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6">
        {docs.map((doc) => (
          <DocCard key={doc.url} {...doc} />
        ))}
      </div>
    </section>
  );
}
