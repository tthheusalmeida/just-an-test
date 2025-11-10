import { mergeClassNames } from "@/utils/classNames";

interface SectionTemplateProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  classNameExternal?: string;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
  noPaddingInline?: boolean;
  isTranparentBackgroud?: boolean;
}

export default function MinorSectionTemplate({
  children,
  id,
  className,
  classNameExternal,
  noPaddingTop = false,
  noPaddingBottom = false,
  noPaddingInline = false,
  isTranparentBackgroud = false,
}: SectionTemplateProps) {
  return (
    <div
      className={mergeClassNames(
        "w-full flex flex-col items-center justify-center",
        isTranparentBackgroud ? "bg-transparent" : "bg-white",
        classNameExternal
      )}
    >
      <div
        className={mergeClassNames(
          "max-w-[var(--page-width)] flex flex-col items-center justify-center",
          noPaddingTop ? "" : "pt-16",
          noPaddingBottom ? "" : "pb-8",
          noPaddingInline ? "" : "px-4",
          isTranparentBackgroud ? "bg-transparent" : "bg-white",
          className
        )}
        id={id}
      >
        {children}
      </div>
    </div>
  );
}
