"use client";
import { ChildContainerProps } from "@/pr/types";
import { set } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeLayoutView({ children }: ChildContainerProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-slate-100 bg-slate-50 py-3 p-4">
        <div className="flex justify-between lg:justify-center items-center flex-wrap lg:gap-6 gap-1 container mx-auto">
          <span className="font-semibold">🚀 New Blocks Released!</span>
          <span className="line-height-3">
            Page Section is now available. Try it in your next project!
          </span>
        </div>
      </div>

      <header className="border-b border-slate-200 p-4">
        <div className="container mx-auto">
          <Link
            className="font-semibold"
            href="/"
            onClick={() => set(window, "$routeContext.backToPage", pathname)}
          >
            primereact/ blocks
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 lg:py-12">
        <div className="container mx-auto">{children}</div>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50 p-4">
        <div className="flex lg:justify-between justify-center flex-wrap lg:gap-6 gap-1 container mx-auto">
          <span className="text-sm">
            Developed by{" "}
            <Link
              className="font-medium"
              href="https://x.com/ozanmakers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ozan
            </Link>
            .
          </span>
          <span className="text-sm">
            © 2024{" "}
            <Link
              className="font-medium"
              href="https://lamalab.agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lama Lab
            </Link>
            . All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
