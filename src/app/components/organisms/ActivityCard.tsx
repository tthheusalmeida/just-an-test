"use client";

import Button from "../atoms/Button";
import AnimatedComponent from "../molecules/AnimatedComponent";
import { mergeClassNames } from "@/utils/classNames";

export interface ActivityCardData {
  image: React.ReactElement;
  title: string;
  text: string[];
}

export interface ActivityCardProps {
  image: React.ReactElement;
  title: string;
  text: string[];
  className?: string;
  onClick: () => void;
}

export default function ActivityCard({
  image,
  title,
  text,
  className,
  onClick,
}: ActivityCardProps) {
  return (
    <div className={mergeClassNames("flex flex-col items-center", className)}>
      <AnimatedComponent HTMLtag="div" className="inline-block">
        {image}
      </AnimatedComponent>

      <AnimatedComponent
        HTMLtag="h4"
        className="font-semibold text-2xl text-center my-6 italic"
      >
        {title}
      </AnimatedComponent>

      <div className="flex flex-col gap-3">
        {text.slice(0, 2).map((line, index) => (
          <AnimatedComponent
            HTMLtag="p"
            key={index}
            className="text-center text-base"
          >
            {line}
          </AnimatedComponent>
        ))}
      </div>

      <Button variant="primary" className="mt-8 mb-9" onClick={onClick}>
        Saiba mais
      </Button>
    </div>
  );
}
