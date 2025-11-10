import { mergeClassNames } from "@/utils/classNames";
import AnimatedComponent from "./AnimatedComponent";

export interface TestimonialData {
  name: string;
  age: number;
  description: string;
}

interface TestimonialProps {
  name: string;
  age: number;
  description: string;
  className?: string;
}

export default function Testimonial({
  name,
  age,
  description,
  className,
}: TestimonialProps) {
  return (
    <AnimatedComponent
      HTMLtag="div"
      className={mergeClassNames(
        "w-full rounded-lg p-4 flex flex-col gap-4",
        "transition-all duration-300 hover:-translate-x-10",
        "bg-darkTurquoise-100/15 text-darkTurquoise-100",
        "hover:bg-darkTurquoise-100 hover:text-darkTurquoise-500",
        className
      )}
    >
      <div className="flex gap-2 items-baseline">
        <span className="font-semibold text-2xl">{name}</span>
        <span className="text-xs">{age} anos</span>
      </div>

      <p className="font-normal text-base text-justify">{description}</p>
    </AnimatedComponent>
  );
}
