"use client";

import { mergeClassNames } from "@/utils/classNames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoProps {
  className?: string;
  classNameLogo?: string;
}

export default function Logo({
  classNameLogo,
  className,
}: Readonly<LogoProps>) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={mergeClassNames(
        "flex items-center gap-2.5 cursor-pointer text-xl sm:text-2xl",
        className
      )}
    >
      <Image
        alt="Logo"
        src="/header/logo.png"
        priority
        width={32}
        height={32}
        className={mergeClassNames("md:hidden inline", classNameLogo)}
      />

      <Image
        alt="Logo"
        src="/header/logo.png"
        priority
        width={42}
        height={42}
        className={mergeClassNames("hidden md:inline", classNameLogo)}
      />
    </Link>
  );
}
