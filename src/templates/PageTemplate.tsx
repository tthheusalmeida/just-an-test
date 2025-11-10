import { mergeClassNames } from "@/utils/classNames";

export default function PageTemplate({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={mergeClassNames(
        "relative mx-auto w-full",
        // "flex flex-col items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
