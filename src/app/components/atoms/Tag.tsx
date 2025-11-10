import { mergeClassNames } from "@/utils/classNames";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={mergeClassNames(
        "px-3 py-1",
        "text-xs text-darkTurquoise-700 font-bold capitalize select-none",
        "rounded-full border border-darkTurquoise-700",
        "transition-all duration-200",
        "bg-darkTurquoise-700/10",
        className
      )}
    >
      {children}
    </span>
  );
}
