import { mergeClassNames } from "@/utils/classNames";
import Image from "next/image";
import AnimatedComponent from "./AnimatedComponent";

interface QuotationMarksProps {
  dark?: boolean;
  className?: string;
}

export default function QuotationMarks({
  dark,
  className,
}: QuotationMarksProps) {
  return (
    <AnimatedComponent
      HTMLtag="div"
      className={mergeClassNames("flex gap-2", className)}
    >
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <Image
            alt="quotation marks"
            src={
              dark
                ? "/icons/quotation-marks-dark.svg"
                : "/icons/quotation-marks-light.svg"
            }
            priority
            width={28}
            height={43}
            key={`${index}`}
          />
        ))}
    </AnimatedComponent>
  );
}
