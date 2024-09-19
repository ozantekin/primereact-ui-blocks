import React from "react";
import { Button } from "primereact/button";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  __rawString__?: string;
}

export function PreCustom(props: PreProps) {
  const { children, __rawString__ = "" } = props;

  const [isCopied, setIsCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(__rawString__);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <pre
      className={`rounded-xl relative overflow-hidden p-[0.5rem] shadow-smooth bg-slate-100`}
      {...props}
    >
      <Button
        unstyled
        className="absolute right-3 top-3"
        size="small"
        icon={isCopied ? "pi pi-check" : "pi pi-copy"}
        onClick={copy}
        disabled={isCopied}
        aria-label="Copy"
      />

      {children}
    </pre>
  );
}
