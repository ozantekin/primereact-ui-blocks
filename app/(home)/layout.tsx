import { ChildContainerProps } from "@/pr/types";
import HomeLayoutView from "@/pr/layouts/HomeLayout";

export default function HomeLayout({ children }: ChildContainerProps) {
  return <HomeLayoutView>{children}</HomeLayoutView>;
}
