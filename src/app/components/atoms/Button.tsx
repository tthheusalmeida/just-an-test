"use client";

import { mergeClassNames } from "@/utils/classNames";
import { VscLoading } from "react-icons/vsc";
import AnimatedComponent from "../molecules/AnimatedComponent";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "terciary";
  size?: "small" | "normal";
  disableAnimation?: boolean;
  shadow?: boolean;
  isFull?: boolean;
  isLoading?: boolean;
}

const buttonVariants = {
  primary:
    "bg-darkTurquoise-400 text-darkTurquoise-100 hover:enabled:bg-darkTurquoise-600 hover:enabled:text-darkTurquoise-100",
  secondary:
    "bg-white text-darkTurquoise-500 hover:enabled:bg-darkTurquoise-300 hover:enabled:text-white",
  terciary:
    "bg-white text-darkTurquoise-700 hover:enabled:bg-darkTurquoise-100 hover:enabled:text-darkTurquoise-400",
};

const isLodingVariants = {
  primary: "animate-spin text-darkTurquoise-100",
  secondary: "animate-spin text-darkTurquoise-400",
  terciary: "",
};

const sizeVariants = {
  small: "px-2 py-3.5 gap-2",
  normal: "px-4 py-3.5 gap-4",
};

export default function Button({
  children,
  className,
  variant,
  shadow = false,
  isFull = true,
  isLoading = false,
  disableAnimation = false,
  size = "normal",
  ...rest
}: ButtonProps) {
  const childrenClasses = [
    "flex items-center gap-4",
    "select-none",
    isLoading ? "invisible" : "visible",
  ].join(" ");

  const loadingClasses = [
    "absolute",
    "left-1/2 -translate-x-1/2",
    variant ? isLodingVariants[variant] : "",
  ].join(" ");

  return (
    <AnimatedComponent
      HTMLtag="button"
      className={mergeClassNames(
        "relative inline-flex justify-center items-center",
        sizeVariants[size],
        "text-base font-normal",
        "transition-colors duration-200 cursor-pointer",
        "disabled:cursor-not-allowed",
        "rounded-lg",
        isFull ? "w-3/5 sm:w-[200px]" : "",
        shadow ? "shadow-md" : "",
        variant ? buttonVariants[variant] : "",
        className ?? ""
      )}
      disableAnimation={disableAnimation}
      {...rest}
    >
      <span className={childrenClasses}>{children}</span>
      {isLoading && <VscLoading size={20} className={loadingClasses} />}
    </AnimatedComponent>
  );
}
