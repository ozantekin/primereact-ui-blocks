import React from "react";

export const BasicItems = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h1
        className="font-heading mt-2 scroll-m-20 text-4xl font-bold"
        {...props}
      />
    );
  },
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h2
        className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
        {...props}
      />
    );
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h3
        className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
        {...props}
      />
    );
  },
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h4
        className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
        {...props}
      />
    );
  },
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h5
        className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
        {...props}
      />
    );
  },
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h6
        className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
        {...props}
      />
    );
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
    return <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />;
  },
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => {
    return <ul className="my-6 ml-6 list-disc" {...props} />;
  },
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => {
    return <ol className="my-6 ml-6 list-decimal" {...props} />;
  },
  li: (props: React.HTMLAttributes<HTMLElement>) => {
    return <li className="mt-2" {...props} />;
  },
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => {
    return <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />;
  },
  table: (props: React.HTMLAttributes<HTMLTableElement>) => {
    return (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full" {...props} />
      </div>
    );
  },
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => {
    return <tr className="m-0 border-t p-0" {...props} />;
  },
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => {
    return (
      <th
        className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    );
  },
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => {
    return (
      <td
        className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
        {...props}
      />
    );
  },
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    return (
      <code
        className="rounded-sm bg-slate-50 px-[0.5rem] py-1 font-mono text-sm text-foreground text-pretty leading-relaxed text-white"
        {...props}
      />
    );
  },
};
