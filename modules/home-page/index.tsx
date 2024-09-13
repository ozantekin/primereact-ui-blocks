import { allBlocks } from "@/pr/.contentlayer/generated";
import BlockSection from "@/pr/modules/home-page/components/BlockSection";
import ExternalLink from "@/pr/modules/home-page/components/ExternalLink";
import HomeCard from "@/pr/modules/home-page/components/HomeCard";
import PackagesOrbitingCircles from "@/pr/modules/home-page/components/PackagesOrbitingCircles";
import { compareDesc } from "date-fns";

export default function HomePage() {
  const pageSections = allBlocks
    .filter((block) => block.group === "PAGE_SECTIONS")
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const applicationSections = allBlocks
    .filter((block) => block.group === "APPLICATION_UI")
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="space-y-8">
      <section className="grid lg:grid-cols-2">
        <div className="space-y-4 text-pretty ">
          <h2 className="font-bold text-3xl text-indigo-600">
            Fast and Easy Development with Pre-built UI Blocks
          </h2>
          <p>
            PrimeReact UI Blocks offers customizable, user-friendly components
            for fast interface creation. Built with{" "}
            <ExternalLink
              href="https://tailwindcss.com"
              children="Tailwind CSS"
            />
            ,{" "}
            <ExternalLink href="https://primereact.org" children="PrimeReact" />
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
            <HomeCard />
          </div>
        </div>
        <PackagesOrbitingCircles />
      </section>

      <BlockSection title="Page Sections" blocks={pageSections} />
      <BlockSection title="Application UI" blocks={applicationSections} />
    </div>
  );
}
