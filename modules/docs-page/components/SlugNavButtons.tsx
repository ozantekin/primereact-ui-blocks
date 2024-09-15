"use client";
import { Docs } from "@/pr/.contentlayer/generated";
import createPrevAndNext from "@/pr/lib/createPrevAndNext";
import { Button } from "primereact/button";
import { ScrollTop } from "primereact/scrolltop";

interface NavigationButtonProps {
  doc: Docs | null;
  type: "prev" | "next";
}

function NavigationButton({ doc, type }: NavigationButtonProps) {
  if (!doc) return <div />;

  const Icon = type === "next" ? "pi pi-arrow-right" : "pi pi-arrow-left";
  return (
    <Button
      unstyled
      onClick={() => window.open(doc.url, "_self")}
      className="flex items-center justify-center h-12 text-sm text-center gap-2 slate-600 hover:bg-slate-100 transition-colors duration-200 px-4 rounded-md"
    >
      {type === "next" && <span>{doc.title}</span>}
      <i className={Icon} />
      {type === "prev" && <span>{doc.title}</span>}
    </Button>
  );
}

interface SlugNavButtonsProps {
  doc: Docs;
}

function SlugNavButtons({ doc }: SlugNavButtonsProps) {
  const { next, prev } = createPrevAndNext(doc);

  return (
    <nav className="my-5 flex items-center justify-between">
      <NavigationButton type="prev" doc={prev} />
      <ScrollTop
        unstyled
        className="size-12 rounded-md text-slate-600 hover:bg-slate-100 transition-colors duration-200"
        icon="pi pi-arrow-up"
      />
      <NavigationButton type="next" doc={next} />
    </nav>
  );
}

export default SlugNavButtons;
