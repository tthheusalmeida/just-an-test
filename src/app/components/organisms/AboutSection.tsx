"use client";

import SectionTemplate from "@/templates/SectionTemplate";
import Title from "../atoms/Title";
import TextDivider from "../atoms/TextDivider";
import Image from "next/image";
import Button from "../atoms/Button";
import UnorderedList from "../molecules/UnorderedList";
import QuotationMarks from "../molecules/QuotationMarks";

import AnimatedComponent from "../molecules/AnimatedComponent";
import { useState } from "react";
import ModalText from "../molecules/ModalText";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  const education = [
    "Graduação em Psicologia pela UNI-BH",
    "Especialista em Terapia Cognitivo-Comportamental (TCC) pela PUC Minas",
    "Especialista em Psicopatologia pelo Instituto PBE",
  ];

  const sessionsDetails = [
    "Identificar e modificar padrões mentais que geram sofrimento;",
    "Desenvolver novas formas de pensar e agir;",
    "Fortalecer autocontrole e autonomia psicológica e emocional.",
  ];

  return (
    <SectionTemplate
      id="about"
      className="flex flex-col items-center"
      noPaddingTop
      noPaddingInline
    >
      <div className="flex flex-col items-center bg-white lg:pt-24">
        <div className="flex flex-col sm:grid grid-cols-2 gap-12 items-center sm:items-start sm:px-4 mt-16">
          <AnimatedComponent
            HTMLtag="div"
            className="relative w-full aspect-[4/5] sm:inline-block hidden rounded-[180px] overflow-hidden"
          >
            <Image
              src="/about/about-image.jpeg"
              alt="Jéssica lendo um livro"
              fill
              className="object-cover pointer-events-none"
            />
          </AnimatedComponent>

          <div className="flex flex-col items-center sm:">
            <div>
              <Title className="font-normal font-aboreto text-darkTurquoise-900 z-1 text-[32px] sm:text-4xl">
                Jéssica Rodrigues
              </Title>

              <TextDivider
                text="PSICÓLOGA | CRP 04/65123"
                textClassName="text-base text-darkTurquoise-500"
                lineClassName="text-darkTurquoise-500"
                className="z-1"
              />
            </div>

            <AnimatedComponent HTMLtag="div" className="inline-block">
              <Image
                src="/about/about-image.jpeg"
                alt="Jéssica lendo um livro"
                width={283}
                height={294}
                priority
                fetchPriority="high"
                placeholder="empty"
                className="object-cover block sm:hidden pointer-events-none py-3 my-7 rounded-full"
              />
            </AnimatedComponent>

            <div className="flex flex-col items-center sm:items-start px-8 sm:pt-6">
              <AnimatedComponent HTMLtag="h4" className="font-semibold">
                Formação e Especializações{" "}
              </AnimatedComponent>
              <UnorderedList items={education} className="!mb-4" />

              <AnimatedComponent HTMLtag="h4" className="font-semibold">
                A curiosidade que me trouxe até aqui
              </AnimatedComponent>

              <AnimatedComponent HTMLtag="p" className="font-light">
                Desde cedo, os “porquês” me movem. Essa curiosidade me levou da
                mineração à computação, até que uma iniciação ciêntifica me
                levou à psicologia.
              </AnimatedComponent>
              <AnimatedComponent HTMLtag="p" className="font-light mb-4">
                E foi aqui que encontrei meu caminho: entender o comportamento
                humano.
              </AnimatedComponent>

              <AnimatedComponent HTMLtag="p" className="font-light mb-4">
                Na Terapia Cognitivo-Comportamental (TCC), descobri uma
                abordagem que une ciência e sensibilidade, ajudando pessoas a
                compreender seus próprios porquês e a viver com mais leveza e
                clareza emocional.
              </AnimatedComponent>

              <AnimatedComponent HTMLtag="h4" className="font-semibold">
                Durante as sessões, trabalhamos juntos para:
              </AnimatedComponent>

              <UnorderedList items={sessionsDetails} className="!mb-4" />

              <AnimatedComponent HTMLtag="p" className="font-light mb-14">
                Nossa função juntos é que vc aprenda a reproduzir sozinho o que
                desenvolvemos em consultas.
              </AnimatedComponent>

              <Button
                onClick={() => setIsOpen(true)}
                variant="primary"
                className="self-center"
              >
                Saiba mais sobre mim
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <QuotationMarks dark className="mb-9 sm:self-start sm:-ml-20" />

          <AnimatedComponent
            HTMLtag="h2"
            className="font-bold text-[32px]/[36px] line text-center text-darkTurquoise-500 mb-10"
          >
            Ajudo você a se sentir melhor vestindo sua própria pele.
          </AnimatedComponent>

          <AnimatedComponent
            HTMLtag="span"
            className="text-[20px] text-black/55 text-center mx-10 mb-10"
          >
            Minha missão é ajudar você a se reconectar consigo mesmo(a),
            enfrentando <br className="hidden sm:block" /> suas dores com
            coragem e construindo uma nova forma de existir no mundo.
          </AnimatedComponent>

          <AnimatedComponent
            HTMLtag="p"
            className="font-aboreto text-[20px] mb-16 sm:self-end-safe"
          >
            - Jéssica Rodrigues
          </AnimatedComponent>
        </div>
      </div>

      <ModalText
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Sobre mim"
      >
        <p>
          Vou te contar brevemente como cheguei até aqui e por que estamos
          falando sobre psicologia.
        </p>
        <p>
          Desde criança, os “porquês” sempre me acompanharam. Respostas simples
          nunca me bastavam. E esse traço curioso me seguiu pela vida.
        </p>
        <p>
          Nasci em Ouro Preto (MG), cidade linda, histórica e universitária. Na
          adolescência, segui o caminho mais comum da época e cursei o ensino
          médio técnico em mineração no CEFET. Mas as matérias específicas me
          entediavam. Foi na biblioteca, lendo por conta própria sobre
          comportamento e personalidade, que comecei a encontrar um verdadeiro
          sentido.
        </p>
        <p>
          Depois, tentei Ciência da Computação. Na época (2011), a área ainda
          não tinha o hype atual. Persisti por um tempo, até que entrei, por
          engano, em uma sala onde alunos faziam uma iniciação científica: eles
          criavam um plug-in para ler emoções nas postagens do Facebook e
          Twitter.
        </p>
        <p>
          Fiquei quieta no fundo da sala, mas algo em mim gritou: “é isso!”. Me
          ofereci para cuidar da parte psicológica da pesquisa — e não queria,
          de jeito nenhum, a parte de programação.
        </p>
        <p>
          Foi ali que entendi: meu caminho era a psicologia. Só havia um detalhe
          — não havia curso de psicologia na minha cidade.
        </p>
        <p>
          Continuei tentando o ENEM e, um tempo depois, consegui uma bolsa em
          Belo Horizonte. Quando entrei na graduação, senti que finalmente
          estava no lugar certo. Mesmo depois de dias cansativos de trabalho,
          era só pisar na faculdade que algo em mim “acordava”.
        </p>
        <p>
          Os estudos sobre comportamento me encantavam, mas faltava algo. Até
          que, em uma aula sobre Terapia Cognitivo-Comportamental, tudo se
          encaixou. Mais uma vez, aquele estalo: <strong>“é isso!”</strong>.
        </p>
        <p>
          Com a TCC, finalmente comecei a responder perguntas como:{" "}
          <strong>
            Por que penso assim? Por que me comporto assim? Por que me sinto
            assim?
          </strong>
        </p>
        <p>
          Encontrei uma abordagem baseada em ciência, com métodos claros,
          protocolos e técnicas eficazes — e, ao mesmo tempo, profundamente
          humana.
        </p>
        <p>
          Hoje, como psicóloga, ajudo você a entender seus próprios porquês. O
          processo que conduzimos juntos é mais do que autoconhecimento: é
          treinamento para que você ganhe autonomia, autocontrole e leveza
          emocional.
        </p>
        <p>
          Porque no fim das contas,{" "}
          <strong>
            ajudo você a se sentir melhor vestindo sua própria pele
          </strong>
          .
        </p>

        <p className="font-aboreto text-[20px] py-8 text-right">
          - Jéssica Rodrigues
        </p>
      </ModalText>
    </SectionTemplate>
  );
}
