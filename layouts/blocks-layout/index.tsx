import Sidebar from "@/pr/layouts/blocks-layout/components/Sidebar";
import { ChildContainerProps } from "@/pr/types";

export default function BlocksLayoutView({ children }: ChildContainerProps) {
  return (
    <div className="items-start md:grid md:grid-cols-[14rem_minmax(0,1fr)] md:gap-6">
      <Sidebar />
      {children}
    </div>
  );
}
