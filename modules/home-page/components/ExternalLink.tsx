import Link from "next/link";
import React from "react";

interface ExternalLinkProps extends React.PropsWithChildren {
  href: string;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link
      href={`${href}?ref=primereactblocks.com`}
      target="_blank"
      className="font-medium"
    >
      {children}
    </Link>
  );
}
