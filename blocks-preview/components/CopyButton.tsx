"use client";

import { ButtonHTMLAttributes, useState } from "react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  src?: string;
}

export default function CopyButton({
  value,
  src,
  className,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div>
      <button
        className={`group relative z-10 flex size-6 shrink-0 items-center justify-center rounded-sm bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${className}`}
        onClick={() => copyToClipboard(value)}
        {...props}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
