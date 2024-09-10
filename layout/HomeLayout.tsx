import { ChildContainerProps } from "@/pr/types";
import Link from "next/link";

export default function HomeLayoutView({ children }: ChildContainerProps) {
  return (
    <div className="flex flex-column min-h-screen">
      <div className="border-bottom-1 border-gray-100 bg-gray-100 py-2 px-4 flex justify-content-between lg:justify-content-center align-items-center flex-wrap lg:gap-6 gap-2">
        <span className="font-semibold">🚀 New Component Released!</span>
        <span className="line-height-3">
          Header component is now available. Try it in your next project!
        </span>
      </div>

      <header className="border-bottom-1 border-200 px-4 py-3">
        <Link className="font-bold text-lg" href="/">
          primereact/ui blocks
        </Link>
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="border-top-1 border-200 px-4 py-3 flex lg:justify-content-between justify-content-center flex-wrap lg:gap-6 gap-2">
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
      </footer>
    </div>
  );
}
