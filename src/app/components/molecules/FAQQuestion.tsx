import { mergeClassNames } from "@/utils/classNames";
import { IoChevronUp } from "react-icons/io5";
import AnimatedComponent from "./AnimatedComponent";

interface FAQQuestionProps {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

export default function FAQQuestion({
  question,
  answer,
  open = false,
  onClick,
}: FAQQuestionProps) {
  return (
    <AnimatedComponent
      HTMLtag="div"
      className={mergeClassNames(
        "border-l-2 border-darkTurquoise-400 transition-all duration-300 bg-opacity-10"
      )}
    >
      <div
        className={mergeClassNames(
          "flex items-center justify-between gap-4 transition-all duration-300 cursor-pointer select-none",
          open ? "bg-darkTurquoise-400" : "bg-transparent"
        )}
        onClick={onClick}
      >
        <span className="text-white text-base ml-2 flex-1 break-words font-bold">
          {question}
        </span>

        <div className="w-9 flex-shrink-0 flex items-center justify-center min-h-7">
          <IoChevronUp
            size={20}
            className={mergeClassNames(
              "text-white transition-transform duration-300",
              open ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
      </div>

      <div
        className={mergeClassNames(
          "overflow-hidden transition-all duration-500 ease-in-out pl-2",
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        )}
      >
        <p className="text-white text-sm">{answer}</p>
      </div>
    </AnimatedComponent>
  );
}
