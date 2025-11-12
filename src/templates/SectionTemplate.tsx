import { mergeClassNames } from "@/utils/classNames";
import Image from "next/image";

interface SectionTemplateProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  classNameExternal?: string;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
  noPaddingInline?: boolean;
  isTranparentBackgroud?: boolean;
  showBackground?: boolean;
}

export default function SectionTemplate({
  children,
  id,
  className,
  classNameExternal,
  noPaddingTop = false,
  noPaddingBottom = false,
  noPaddingInline = false,
  isTranparentBackgroud = false,
  showBackground = false,
}: SectionTemplateProps) {
  return (
    <div
      className={mergeClassNames(
        "min-h-dvh w-full flex flex-col items-center justify-center relative",
        isTranparentBackgroud ? "bg-transparent" : "bg-white",
        classNameExternal
      )}
    >
      {showBackground && (
        <>
          <Image
            src="/hero/hero-mobile.png"
            alt="Jéssica olhando em diagonal"
            fill
            priority
            fetchPriority="high"
            placeholder="empty"
            className="object-cover block sm:hidden pointer-events-none"
          />
          <Image
            src="/hero/hero-desktop.png"
            alt="Jéssica olhando em diagonal"
            fill
            priority
            fetchPriority="high"
            placeholder="empty"
            className="object-cover object-center pointer-events-none select-none sm:block hidden"
          />
        </>
      )}

      <div
        className={mergeClassNames(
          "max-w-[var(--page-width)] relative w-full min-h-dvh",
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
