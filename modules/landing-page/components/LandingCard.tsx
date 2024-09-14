import Link from "next/link";
import { LANDING_CARD_DATA } from "@/pr/modules/landing-page/constants";
import { REF } from "@/pr/lib/constants";

interface CardContentProps {
  card: {
    title: string;
    description: string;
    icon: string;
    href?: string;
  };
}

function CardContent({ card }: CardContentProps) {
  return (
    <div className="border shadow rounded-md p-4 space-y-2 relative">
      {card.href && (
        <i className="pi pi-external-link text-pretty absolute top-2 right-2 text-indigo-600" />
      )}
      <div className="size-10 text-center inline-flex rounded-md bg-indigo-50">
        <i className={`${card.icon} text-lg text-indigo-600 m-auto`} />
      </div>
      <h6 className="font-medium">{card.title}</h6>
      <p className="text-pretty text-sm">{card.description}</p>
    </div>
  );
}

export default function LandingCard() {
  return (
    <>
      {LANDING_CARD_DATA.map((card, index) =>
        card.href ? (
          <Link key={index} href={`${card.href}?ref=${REF}`} target="_blank">
            <CardContent card={card} />
          </Link>
        ) : (
          <CardContent key={index} card={card} />
        )
      )}
    </>
  );
}
