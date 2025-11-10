import { mergeClassNames } from "@/utils/classNames";

interface TransparentBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function TransparentBackground({
  children,
  className,
}: Readonly<TransparentBackgroundProps>) {
  return (
    <div
      className={mergeClassNames("flex flex-col w-full text-white", className)}
    >
      {children}
    </div>
  );
}
