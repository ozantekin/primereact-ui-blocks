import { allBlocks } from "@/pr/.contentlayer/generated";
import BlockSection from "@/pr/modules/home-page/components/BlockSection";
import ExternalLink from "@/pr/modules/home-page/components/ExternalLink";
import { HOME_CARD_DATA } from "@/pr/modules/home-page/constants";
import { compareDesc } from "date-fns";

export default function HomePage() {
  const pageSections = allBlocks
    .filter((block) => block.group === "PAGE_SECTIONS")
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="space-y-8">
      <section className="max-w-4xl space-y-4 text-pretty">
        <h2 className="font-bold text-3xl text-indigo-600">
          Fast and Easy Development with Pre-built UI Blocks
        </h2>
        <p>
          PrimeReact UI Blocks offers customizable, user-friendly components for
          fast interface creation. Built with
          <ExternalLink
            href="https://tailwindcss.com"
            children="Tailwind CSS"
          />
          , <ExternalLink href="https://primereact.org" children="PrimeReact" />
          , and{" "}
          <ExternalLink
            href="https://primereact.org/icons"
            children="PrimeIcons"
          />
          , these blocks simplify your development process.
        </p>
        <p>
          This unofficial PrimeReact extension speeds up your project with
          pre-built UI components. Not affiliated with PrimeTek.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
          {HOME_CARD_DATA.map((card, index) => (
            <div key={index} className="border shadow rounded-md p-4 space-y-2">
              <div className="size-10 text-center inline-flex rounded-md bg-indigo-50">
                <i className={`${card.icon} text-lg text-indigo-600 m-auto`} />
              </div>
              <h6 className="font-medium">{card.title}</h6>
              <p className="text-pretty text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <BlockSection title="Page sections" blocks={pageSections} />
    </div>
  );
}
