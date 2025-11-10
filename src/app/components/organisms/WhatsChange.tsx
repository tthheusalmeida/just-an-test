import MinorSectionTemplate from "@/templates/MinorSectionTemplate";
import Image from "next/image";
import Title from "../atoms/Title";
import AnimatedComponent from "../molecules/AnimatedComponent";
import AboutCard from "../molecules/AboutCard";

export default function WhatsChange() {
  const aboutCard: { icon: React.ReactElement; title: string; text: string }[] =
    [
      {
        icon: (
          <Image
            alt="chat-bubble"
            src="/about/chat-bubble.png"
            width={56}
            height={56}
          />
        ),
        title: "Confiança",
        text: "Reestrutura crenças negativas e fortalece sua autoestima.",
      },
      {
        icon: (
          <Image alt="brain" src="/about/brain.png" width={56} height={56} />
        ),
        title: "Controle",
        text: "Mostra que você pode escolher como reagir às situações.",
      },
      {
        icon: (
          <Image
            alt="certification"
            src="/about/certification.png"
            width={56}
            height={56}
          />
        ),
        title: "Produtividade",
        text: "Ajuda a vencer a procrastinação e manter o foco.",
      },
    ];
  return (
    <MinorSectionTemplate
      className="lg:flex lg:flex-row gap-8 text-darkTurquoise-100 px-4"
      isTranparentBackgroud
      noPaddingTop
      noPaddingBottom
    >
      <div className="sm:flex sm:flex-col sm:justify-center">
        <div className="sm:flex items-center">
          <Title className="font-normal font-aboreto text-[32px] sm:text-4xl mt-16 sm:mt-0 sm:text-left whitespace-nowrap">
            O que muda
          </Title>

          <div className="hidden sm:block w-full h-[1px] bg-white ml-2"></div>
        </div>
        <AnimatedComponent
          HTMLtag="span"
          className="text-2xl sm:text-[32px] text-center whitespace-nowrap"
        >
          durante os atendimentos?
        </AnimatedComponent>
      </div>

      <AnimatedComponent
        HTMLtag="div"
        className="flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-10 my-12"
      >
        {aboutCard.map((item, index) => (
          <AboutCard key={index} {...item} />
        ))}
      </AnimatedComponent>
    </MinorSectionTemplate>
  );
}
