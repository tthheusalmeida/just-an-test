import AnimatedComponent from "./AnimatedComponent";

interface FooterLabelsProps {
  disableAnimation?: boolean;
}

export default function FooterLabels({
  disableAnimation = false,
}: FooterLabelsProps) {
  return (
    <AnimatedComponent
      disableAnimation={disableAnimation}
      HTMLtag="div"
      className="flex flex-col gap-2 items-center mt-10 lg:flex-row lg:justify-between w-full"
    >
      <div className="flex flex-col items-center lg:items-start">
        <AnimatedComponent
          disableAnimation={disableAnimation}
          HTMLtag="span"
          delay={0}
        >
          Responsável Técnico:
        </AnimatedComponent>
        <AnimatedComponent
          disableAnimation={disableAnimation}
          HTMLtag="span"
          delay={0}
          className="font-bold text-darkTurquoise-400 mb-11 lg:mb-0"
        >
          Jéssica Rodrigues | CRP: 04/65123
        </AnimatedComponent>
      </div>

      <div className="flex flex-col items-center lg:items-end lg:flex-col-reverse">
        <AnimatedComponent
          disableAnimation={disableAnimation}
          HTMLtag="span"
          delay={0}
        >
          Desenvolvido com carinho por
          <a
            href="https://almeida-matheus.com/"
            target="_blank"
            className="font-bold text-darkTurquoise-400 ml-1"
          >
            Matheus Almeida
          </a>
        </AnimatedComponent>
        <AnimatedComponent
          disableAnimation={disableAnimation}
          HTMLtag="span"
          delay={0}
        >
          © 2025. Todos os direitos reservados
        </AnimatedComponent>
      </div>
    </AnimatedComponent>
  );
}
