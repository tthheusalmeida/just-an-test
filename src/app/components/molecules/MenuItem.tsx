import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { mergeClassNames } from "@/utils/classNames";
import Link from "next/link";

interface MenuItemProps {
  label: string;
  path: string;
  onClick?: () => void;
}

export default function MenuItem({ label, path, onClick }: MenuItemProps) {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      router.prefetch(path);
    }
  }, [path, router]);

  return (
    <div
      className="flex flex-col items-end justify-center capitalize cursor-pointer min-w-28 w-full group"
      onClick={() => onClick?.()}
    >
      <Link
        className={mergeClassNames(
          "text-4xl sm:text-5xl font-semibold transition-all duration-200",
          "sm:group-hover:text-darkTurquoise-500/50",
          "text-darkTurquoise-500"
        )}
        href={path}
      >
        {label}
      </Link>

      <div className="w-full relative mt-2">
        <div
          className={mergeClassNames(
            "hidden sm:block sm:w-full sm:group-hover:w-0 transition-all duration-200",
            "border sm:border-darkTurquoise-700",
            "absolute top-0 left-0"
          )}
        />
        <div className="block w-full border border-darkTurquoise-700 sm:border-darkTurquoise-700/50" />
      </div>
    </div>
  );
}
