"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXItems } from "./items";

interface MdxProps {
  code: string;
}

export function Mdx(props: MdxProps) {
  const { code } = props;
  const Component = useMDXComponent(code);

  return <Component components={MDXItems} />;
}
