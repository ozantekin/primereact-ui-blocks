import { allDocs, Docs } from "@/pr/.contentlayer/generated";
import { compareAsc } from "date-fns";

export default function createPrevAndNext(doc: Docs) {
  const docs = allDocs.sort((a, b) =>
    compareAsc(new Date(a.date), new Date(b.date))
  );

  const index = docs.findIndex((p) => p._id === doc._id);
  const prev = index > 0 ? docs[index - 1] : null;
  const next = index + 1 < docs.length ? docs[index + 1] : null;

  return {
    next,
    prev,
  };
}
