import { ChildContainerProps } from "@/pr/types";
import LandingLayoutView from "@/pr/layouts/LandingLayout";

export default function LandingLayout({ children }: ChildContainerProps) {
  return <LandingLayoutView>{children}</LandingLayoutView>;
}
