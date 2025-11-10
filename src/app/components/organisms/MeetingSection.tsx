"use client";

import SectionTemplate from "@/templates/SectionTemplate";
import Title from "@/app/components/atoms/Title";
import AnimatedComponent from "../molecules/AnimatedComponent";
import { mergeClassNames } from "@/utils/classNames";
import Button from "../atoms/Button";
import Image from "next/image";
import ModalText from "../molecules/ModalText";
import { useState } from "react";

export default function MeetingSection() {
  const meetingData = [
    {
      title: "Primeira Sessão",
      subtitle: "Acolhimento e Escuta",
      description: (
        <span className="font-light">
          Um espaço seguro para você falar no seu ritmo. Vamos efinimos
          objetivos terapêuticos e explico comoa TCC funciona.
        </span>
      ),
      text: "A primeira sessão em Terapia Cognitivo-Comportamental (TCC) é um momento de acolhimento e escuta. Nela, você terá espaço para contar, no seu ritmo, o que o trouxe até aqui. O objetivo principal é compreender sua história, identificar suas principais queixas e começar a mapear padrões de pensamentos, emoções, comportamentos e principalmente estabelecer seus objetivos terapeuticos. Também explico como a TCC funciona, quais são as etapas do processo terapêutico e tiramos dúvidas sobre o funcionamento da terapia. Mais do que tudo, essa é uma oportunidade para você se sentir seguro(a) e entender que não está sozinho(a) nesse caminho.",
    },
    {
      title: "Duração",
      subtitle: "Seu momento de Pausa",
      description: (
        <span className="font-light">
          Cada encontro dura cerca de <strong>50 minutos</strong>, com foco nos
          seus objetivos e experiências da semana.
        </span>
      ),
      text: "Cada atendimento terá a duração de 50 minutos. Em cada consulta, seguiremos uma estrutura semi-definida, direcionada aos objetivos terapêuticos e à redução dos sintomas que mais impactam sua vida no momento. Também haverá espaço para abordar acontecimentos relevantes da sua semana, garantindo que o tratamento seja personalizado e conectado à sua realidade.",
    },
    {
      title: "Frequência",
      subtitle: "Consistência é Essencia",
      description: (
        <span className="font-light">
          As sessões são semanais para garantir resultados sólidos das técnicas
          de TCC aplicadas.
        </span>
      ),
      text: "A frequência dos atendimentos, inicialmente, será semanal, mesmo que você já tenha participado de outro processo psicoterapêutico. Essa regularidade é fundamental para que possamos avançar de forma consistente pelas principais etapas do tratamento em Terapia Cognitivo-Comportamental: avaliação e conceituação de caso, psicoeducação e definição de objetivos, intervenção com treino de habilidades e reestruturação cognitiva e, por fim, prevenção de recaídas. Respeitar essa sequência favorece a evolução e a redução dos sintomas, promovendo ganhos mais rápidos e duradouros. Quando a frequência não é mantida, o progresso tende a ser mais lento, dificultando a estabilidade emocional e podendo comprometer os resultados esperados.",
    },
    {
      title: "Ambiente Virtual",
      subtitle: "Segurança e Conforto",
      description: (
        <span className="font-light">
          Atendimentos <strong>100% on-line</strong>, com eficácia comprovada
          pela ciência. Você cuida da mente onde estiver.
        </span>
      ),
      text: "Nossas consultas acontecerão em ambiente virtual, que já possui comprovação científica de eficácia equivalente ao atendimento presencial. Além disso, o formato online oferece benefícios como a ausência de deslocamento, eliminação do tempo de espera em salas de clínica e a possibilidade de levar o processo terapêutico para onde você estiver, otimizando seu tempo. O espaço terapêutico será sempre livre de julgamentos, o que significa que não discutiremos o que é “certo” ou “errado”, mas sim se o que está acontecendo ou passando pela sua mente contribui ou não para o seu bem-estar e preservação emocional.",
    },
    {
      title: "Confidencialidade e Vínculo",
      subtitle: "Seu Espaço Seguro",
      description: (
        <span className="font-light">
          Tudo o que é compartilhado é protegido por sigilo profissional.
          Confiança, empatia e acolhimento são a base do nosso processo
          terapêutico
        </span>
      ),
      text: "Todo o processo terapêutico é protegido por sigilo profissional. Isso significa que tudo o que for conversado durante as sessões permanecerá restrito a esse espaço. Essa garantia é essencial para que você se sinta confortável, seguro(a) e confiante para compartilhar seus pensamentos, sentimentos e experiências, sem receio de que qualquer conteúdo seja exposto.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const isEven = (value: number) => value % 2 === 0;
  const isOdd = (value: number) => value % 2 !== 0;
  const isLastItem = (index: number) => index === meetingData.length - 1;
  const isOddAndLastItem = (index: number) =>
    isOdd(meetingData.length) && isLastItem(index);

  return (
    <SectionTemplate
      id="meeting"
      className="flex flex-col items-center"
      noPaddingTop
      noPaddingInline
    >
      <div className="flex flex-col items-center bg-white">
        <div className="relative mt-16 px-4 lg:mt-40">
          <Title className="font-normal font-aboreto text-darkTurquoise-900 z-1 text-[32px] lg:text-5xl">
            Como serão nossos encontros
          </Title>

          <AnimatedComponent
            HTMLtag="div"
            className="flex flex-row items-center justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-7/12 z-1"
          >
            <Image
              alt="Jéssica em reunião"
              src="/meeting/on-meeting.jpeg"
              width={339}
              height={379}
              className="rounded-full mx-auto mt-7 mb-9 lg:hidden"
            />

            <Image
              alt="Jéssica em reunião"
              src="/meeting/on-meeting.jpeg"
              width={400}
              height={532}
              className="rounded-full mx-auto hidden lg:inline-block"
            />
          </AnimatedComponent>

          <div className="lg:grid lg:grid-cols-2 lg:mt-32 z-0">
            {meetingData.map((item, index) => (
              <AnimatedComponent
                HTMLtag="div"
                className={mergeClassNames(
                  "flex flex-col gap-2 px-10 text-xl py-8 lg:px-0 lg:py-6 lg:pb-24",
                  "lg:w-12/12 lg:border-t lg:border-darkTurquoise-300",
                  meetingData.length !== index + 1
                    ? "border-b lg:border-b-0 border-darkTurquoise-300"
                    : "",
                  isEven(index)
                    ? "lg:justify-self-start lg:pr-60"
                    : "lg:justify-self-end lg:pl-60",
                  isOddAndLastItem(index)
                    ? "lg:col-span-2 lg:justify-self-center lg:w-4/8 lg:border-none lg:px-16"
                    : ""
                )}
                key={index}
              >
                <div
                  className={mergeClassNames(
                    "flex flex-col gap-0 lg:flex-row text-center lg:text-lg",
                    isEven(index) ? "lg:justify-start" : "lg:justify-end",
                    isOddAndLastItem(index) ? "lg:justify-center" : ""
                  )}
                >
                  <h4 className="font-extrabold lg:pr-2">{item.title}</h4>
                  <p className="font-semibold lg:pl-2 lg:border-l-[1px] lg:border-darkTurquoise-700">
                    {item.subtitle}
                  </p>
                </div>

                <span
                  className={mergeClassNames(
                    "text-center lg:text-base",
                    isEven(index) ? "lg:text-left" : "lg:text-right",
                    isOddAndLastItem(index) && "lg:text-center"
                  )}
                >
                  {item.description}
                </span>
              </AnimatedComponent>
            ))}
          </div>
        </div>

        <Button
          variant="primary"
          className="mt-3 mb-10 mx-auto"
          onClick={() => setIsOpen(true)}
        >
          Veja mais detalhes
        </Button>
      </div>

      <ModalText
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Etapas do Atendimento"
      >
        {meetingData.map((item, index) => (
          <div key={index}>
            <strong className="">{item.title}</strong>

            <p className="mt-2 mb-4">{item.text}</p>
          </div>
        ))}
      </ModalText>
    </SectionTemplate>
  );
}
