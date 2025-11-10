import { mergeClassNames } from "@/utils/classNames";
import AnimatedComponent from "../molecules/AnimatedComponent";

interface TextDividerProps {
  text: string;
  textClassName?: string;
  lineClassName?: string;
  className?: string;
}

export default function TextDivider({
  text,
  textClassName,
  lineClassName,
  className,
}: TextDividerProps) {
  const defaultLineClasses = "flex-1 bg-darkTurquoise-200 h-[1px]";

  return (
    <AnimatedComponent
      HTMLtag="div"
      className={mergeClassNames(
        "flex items-center w-full gap-1.5 text-darkTurquoise-200",
        className
      )}
    >
      <div className={mergeClassNames(defaultLineClasses, lineClassName)} />
      <span
        className={mergeClassNames("font-aboreto text-[8px]", textClassName)}
      >
        {text}
      </span>
      <div className={mergeClassNames(defaultLineClasses, lineClassName)} />
    </AnimatedComponent>
  );
}
