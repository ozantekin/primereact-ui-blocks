import { Badge } from "primereact/badge";
import { CopyButton } from "./CopyButton";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  __rawString__?: string;
  ["data-language"]?: string;
}

export function PreCustom(props: PreProps) {
  const {
    children,
    __rawString__ = "",
    ["data-language"]: dataLanguage = "Shell",
  } = props;

  return (
    <pre
      className={`rounded-xl relative overflow-hidden p-[0.5rem] shadow-smooth bg-slate-100`}
      {...props}
    >
      <Badge value={dataLanguage} className="absolute bottom-3 right-3" />
      <CopyButton text={__rawString__} />
      {children}
    </pre>
  );
}
