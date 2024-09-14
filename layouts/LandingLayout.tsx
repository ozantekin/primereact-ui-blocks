import { ChildContainerProps } from "@/pr/types";

export default function LandingLayoutView({ children }: ChildContainerProps) {
  return (
    <main className="flex-1 px-8 py-6 lg:py-12">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
