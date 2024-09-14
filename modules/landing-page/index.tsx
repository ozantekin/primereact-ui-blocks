import ExternalLink from "@/pr/modules/landing-page/components/ExternalLink";
import LandingCard from "@/pr/modules/landing-page/components/LandingCard";
import PackagesOrbitingCircles from "@/pr/modules/landing-page/components/PackagesOrbitingCircles";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="space-y-8">
      <section className="grid lg:grid-cols-2">
        <div className="space-y-4 text-pretty ">
          <h2 className="font-bold text-3xl text-indigo-600">
            Fast and Easy Development with Pre-built UI Docs
          </h2>
          <p>
            PrimeReact UI Docs offers customizable, user-friendly components for
            fast interface creation. Built with{" "}
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
            , these docs simplify your development process.
          </p>
          <p>
            This unofficial PrimeReact extension speeds up your project with
            pre-built UI components. Not affiliated with PrimeTek.
          </p>
          <Link
            href="/docs"
            className="p-button font-bold !text-white inline-block"
          >
            Get Started
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
            <LandingCard />
          </div>
        </div>
        <PackagesOrbitingCircles />
      </section>
    </div>
  );
}
