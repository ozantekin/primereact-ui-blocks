import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

const FEATURE_DETAILS = [
  {
    icon: "pi pi-prime",
    title: "Developer community support",
    description:
      "We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships.",
  },
  {
    icon: "pi pi-book",
    title: "Industry-leading documentation",
    description:
      "Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.",
  },
  {
    icon: "pi pi-thumbs-up",
    title: "Simple and affordable",
    description:
      "From boarding passes to movie tickets, there&apos;s pretty much nothing you can&apos;t do.",
  },
];

export default function FeatureDetailsWithIcons() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 place-items-center	">
      <div className="text-pretty space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Collaborative tools to design better user experience
        </h2>
        <Divider />
        <p className="text-muted-foreground">
          We help businesses bring ideas to life in the digital world, by
          designing and implementing the technology tools that they need to win.
        </p>
        <Button
          label="Contact sales to learn more"
          link
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => window.open("https://react.dev", "_blank")}
          className="pl-0 text-slate-950"
        />
      </div>

      <div className="space-y-6 lg:space-y-10">
        {FEATURE_DETAILS.map((detail, index) => (
          <div className="flex gap-6" key={index}>
            <span className="border rounded-full size-12 shrink-0 text-center flex">
              <i className={`${detail.icon} text- m-auto`} />
            </span>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold">
                {detail.title}
              </h3>
              <p className="text-muted-foreground">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
