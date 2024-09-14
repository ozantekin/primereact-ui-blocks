import BlocksLayoutView from "@/pr/layouts/blocks-layout";
import { ChildContainerProps } from "@/pr/types";

export default function BlocksLayout({ children }: ChildContainerProps) {
  return <BlocksLayoutView>{children}</BlocksLayoutView>;
}
