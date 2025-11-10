import { mergeClassNames } from "@/utils/classNames";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighlightText({
  children,
  className,
}: HighlightTextProps) {
  return (
    <span
      className={mergeClassNames("font-bold text-darkTurquoise-700", className)}
    >
      {children}
    </span>
  );
}
