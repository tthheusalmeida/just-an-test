import { mergeClassNames } from "@/utils/classNames";
import AnimatedComponent from "../molecules/AnimatedComponent";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  disableAnimation?: boolean;
}

export default function Title({
  children,
  className,
  disableAnimation,
}: TitleProps) {
  return (
    <AnimatedComponent
      className={mergeClassNames(
        "text-4xl sm:text-6xl font-bold text-center",
        className
      )}
      HTMLtag="h1"
      disableAnimation={disableAnimation}
    >
      {children}
    </AnimatedComponent>
  );
}
