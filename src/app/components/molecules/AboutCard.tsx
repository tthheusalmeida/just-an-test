interface AboutCardProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

export default function AboutCard({ icon, title, text }: AboutCardProps) {
  return (
    <div className="flex flex-col items-center justify-start mx-20 sm:mx-6 sm:min-h-36">
      {icon}
      <span className="text-2xl font-semibold hidden sm:inline mt-6">
        {title}
      </span>
      <span className="text-base text-center mt-2 sm:mt-4">{text}</span>
    </div>
  );
}
