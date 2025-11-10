import Image from "next/image";
import AnimatedComponent from "./AnimatedComponent";

export default function Background() {
  return (
    <AnimatedComponent
      HTMLtag="div"
      className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-background)] blur-[1px]"
    >
      <Image
        src="/background/background.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center blur-[1px]"
      />
    </AnimatedComponent>
  );
}
