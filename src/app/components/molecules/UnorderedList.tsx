import { mergeClassNames } from "@/utils/classNames";
import AnimatedComponent from "./AnimatedComponent";

interface UnorderedListProps {
  items: string[];
  className?: string;
}

export default function UnorderedList({
  items,
  className,
}: UnorderedListProps) {
  return (
    <ul className={mergeClassNames("list-none", className)}>
      {items.map((item: string, index: number) => (
        <AnimatedComponent
          HTMLtag="li"
          className="flex pl-2 items-start"
          key={index}
        >
          <span className="pr-2 flex-shrink-0">•</span>

          <span className="flex-1 font-light">{item}</span>
        </AnimatedComponent>
      ))}
    </ul>
  );
}
