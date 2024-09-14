"use client";
import { ChildContainerProps } from "@/pr/types";
import { set } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayoutView({ children }: ChildContainerProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-slate-100 bg-slate-50 py-3 px-8">
        <div className="flex justify-between lg:justify-center items-center flex-wrap lg:gap-6 gap-1 container mx-auto">
          <span className="font-semibold">🚀 New Blocks Released!</span>
          <span className="line-height-3">
            Page Section is now available. Try it in your next project!
          </span>
        </div>
      </div>

      <header className="border-b border-slate-200 py-4 px-8 sticky top-0 z-50 bg-white">
        <Link
          className="font-semibold"
          href="/"
          onClick={() => set(window, "$routeContext.backToPage", pathname)}
        >
          primereact/ blocks
        </Link>
      </header>

      {children}

      <footer className="border-t py-4 px-8">
        <div className="flex lg:justify-between justify-center flex-wrap lg:gap-6 gap-1">
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
