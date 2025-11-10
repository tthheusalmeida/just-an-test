import AnimatedComponent from "./AnimatedComponent";

interface AboutCardProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

export default function AboutCard({ icon, title, text }: AboutCardProps) {
  return (
    <AnimatedComponent
      HTMLtag="div"
      className="flex flex-col items-center justify-start mx-20 sm:mx-6 sm:min-h-36"
    >
      {icon}
      <AnimatedComponent
        HTMLtag="span"
        className="text-2xl font-semibold hidden sm:inline mt-6"
      >
        {title}
      </AnimatedComponent>
      <AnimatedComponent
        HTMLtag="span"
        className="text-base text-center mt-2 sm:mt-4"
      >
        {text}
      </AnimatedComponent>
    </AnimatedComponent>
  );
}
