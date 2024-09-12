"use client";
import { Blocks } from "@/pr/.contentlayer/generated";
import Link from "next/link";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { format, parseISO } from "date-fns";
import { Button } from "primereact/button";
import { set } from "lodash";
import { usePathname } from "next/navigation";

export default function BlockCard(block: Blocks) {
  const pathname = usePathname();

  return (
    <Link
      href={block.url}
      className="block group"
      onClick={() => set(window, "$routeContext.backToPage", pathname)}
    >
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
