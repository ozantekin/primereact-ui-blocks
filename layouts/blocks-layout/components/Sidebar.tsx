"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pr } from "@/pr/lib/pr";
import { SIDEBAR_ITEMS } from "@/pr/layouts/blocks-layout/constant";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 bottom-0 shrink-0 z-30 hidden h-[calc(100dvh-94px)] w-full  md:sticky md:block border-r py-4">
      <div className="h-full p-1">
        <div className="grid grid-flow-row auto-rows-max p-1 text-sm">
          <ul className="space-y-1">
            {SIDEBAR_ITEMS.map((item) => {
              const { url, label, badge } = item;
              return (
                <li key={url}>
                  <Link
                    href={url}
                    rel="noopener noreferrer"
                    className={pr(
                      "flex h-8 items-center justify-between gap-4 rounded-sm px-8 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:text-black/70 border border-transparent",
                      pathname === url &&
                        "rounded-sm bg-gray-50 border-gray-200"
                    )}
                  >
                    <div>
                      <span> {label} </span>
                      <span className="text-xs text-indigo-600"> {badge} </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
