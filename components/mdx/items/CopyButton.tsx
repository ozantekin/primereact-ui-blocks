"use client";
import { Button } from "primereact/button";
import React from "react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text, ...props }: CopyButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <Button
      className="absolute right-3 top-3"
      size="small"
      icon={isCopied ? "pi pi-check" : "pi pi-copy"}
      onClick={copy}
      disabled={isCopied}
      aria-label="Copy"
      {...props}
    />
  );
}
