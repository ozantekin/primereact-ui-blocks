"use client";

import React from "react";
import Link from "next/link";
import { get } from "lodash";

interface BackToPageProps {
  type?: "icon" | "text";
  href?: string;
}

export default function BackToPage(props: BackToPageProps) {
  const { type = "icon", href } = props;

  const computedBackToPageUrl = React.useMemo(() => {
    if (typeof window === "undefined") return `/`;
    return get(window, "$routeContext.backToPage") ?? `/`;
  }, []);

  return (
    <React.Fragment>
      {type === "icon" && (
        <Link
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border shadow"
          href={href ?? computedBackToPageUrl}
        >
          <i className="pi pi-chevron-left" />
        </Link>
      )}
      {type === "text" && (
        <Link
          className="inline-flex items-center shrink-0 gap-0.5 h-10 group"
          href={href ?? computedBackToPageUrl}
        >
          <i className="pi pi-chevron-left transform group-hover:-translate-x-[0.5px] transition-transform duration-200" />
          <span className="ml-0.5 text-sm font-medium">Back</span>
        </Link>
      )}
    </React.Fragment>
  );
}
