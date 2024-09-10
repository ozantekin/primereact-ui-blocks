import { ChildContainerProps } from "@/pr/types";
import HomeLayoutView from "@/pr/layout/HomeLayout";

export default function HomeLayout({ children }: ChildContainerProps) {
  return <HomeLayoutView>{children}</HomeLayoutView>;
}
