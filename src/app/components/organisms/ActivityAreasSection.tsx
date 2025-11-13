"use client";

import { useState } from "react";
import SectionTemplate from "@/templates/SectionTemplate";
import Title from "../atoms/Title";
import AnimatedComponent from "../molecules/AnimatedComponent";
import ActivityCard, { ActivityCardData } from "./ActivityCard";
import Image from "next/image";
import Button from "../atoms/Button";
import ModalText from "../molecules/ModalText";

export default function ActivityAreasSection() {
  const [showAll, setShowAll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const cardList: ActivityCardData[] = [
    {
      image: (
        <Image
          alt="certification"
          src="/areas/ansiedade.png"
          width={500}
          height={56}
        />
      ),
      title: "Ansiedade",
      text: [
        "A TCC ajuda a identificar e controlar os pensamentos que disparam crises de ansiedade.",
        "Você aprende técnicas práticas para lidar com o medo, as preocupações, impaciência e procrastinação.",
        "A ansiedade é um sentimento normal, mas quando excessiva pode se tornar prejudicial aumentando nossa irritabilidade, impaciência, agitação, insônia, e até perda de memória. Além disso, pode causar sofrimentos como falta de ar, suor excessivo, náuseas e dores de cabeça. Entender como a ansiedade desencadeia em você particularmente é muito importante para o desenvolvimento do alívio. Mas apenas identificar não é suficiente, vamos também aprender técnicas para manejar os sintomas que mais te incomodam até que você consiga viver sob sua própria pele.",
      ],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Dificuldade de autoestima",
      text: [
        "a",
        "definir.",
        "A baixa autoestima pode se manifestar em pensamentos autocríticos, insegurança, comparação constante e sensação de não ser “bom o suficiente”. Isso afeta diretamente três pilares fundamentais: a autoimagem (como você enxerga sua aparência e presença), o autoconceito (como você interpreta seu valor e identidade) e a autoeficácia (a confiança na sua capacidade de realizar e enfrentar desafios). A Terapia Cognitivo-Comportamental (TCC) ajuda a identificar e modificar pensamentos disfuncionais sobre si mesmo, desenvolver uma visão mais realista e compassiva da própria história, além de fortalecer habilidades emocionais que contribuem para uma autoestima mais saudável e estável. E por fim, ajudar a você a viver bem na sua própria pele.",
      ],
    },

    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Depressão",
      text: [
        "A terapia oferece estratégias para compreender e modificar padrões que mantêm o desânimo.",
        "O objetivo é restaurar o prazer de viver e reconstruir uma rotina com propósito.",
        "A tristeza é uma emoção humana e natural. Mas quando ela se torna persistente, pode começar a afetar significativamente sua vida — especialmente quando vem acompanhada de desânimo constante, lentidão para realizar tarefas simples, excesso de sono, sensação de vazio ou perda de sentido na vida. Quando esses sinais se acumulam, é possível que estejamos diante de um quadro de depressão. A Terapia Cognitivo-Comportamental (TCC) oferece um caminho para compreender e modificar esses padrões, por meio de estratégias práticas e baseadas em evidências. O objetivo é ajudar você a recuperar o prazer de viver, retomar a motivação e reconstruir uma rotina com mais significado e leveza.",
      ],
    },

    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Relacionamentos",
      text: [
        "a",
        "definir.",
        "Problemas nos relacionamentos — sejam afetivos, familiares ou sociais — muitas vezes surgem da dificuldade de se comunicar, da tendência a interpretar o comportamento do outro de forma negativa ou de padrões repetitivos que geram frustração e afastamento. A Terapia Cognitivo-Comportamental (TCC) contribui para melhorar esses vínculos ao ajudar você a reconhecer seus próprios padrões de pensamento, desenvolver habilidades de comunicação assertiva, lidar com emoções intensas e criar formas mais saudáveis de se relacionar consigo mesmo e com os outros.",
      ],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Transtorno do pânico",
      text: [
        "a",
        "definir.",
        "As crises de pânico costumam surgir de forma intensa e inesperada, acompanhadas de sintomas como falta de ar, aceleração dos batimentos, tontura, sensação de desmaio ou de que algo muito ruim vai acontecer. Com o tempo, o medo de ter novas crises pode levar à evitação de lugares ou situações, impactando a liberdade e a qualidade de vida. A Terapia Cognitivo-Comportamental (TCC) é uma das abordagens mais eficazes para o tratamento do pânico, ajudando a identificar e reestruturar pensamentos catastróficos, reduzir a sensibilidade ao medo e retomar gradualmente a autonomia sobre a própria vida.",
      ],
    },
    {
      image: (
        <Image
          alt="estresse"
          src="/areas/estresse.png"
          width={500}
          height={56}
        />
      ),
      title: "Estresse e Burnout",
      text: [
        "A TCC ensina a reconhecer gatilhos do estresse e a estabelecer limites saudáveis.",
        "Com isso vc recupera foco, energia, sentido de vida e equilíbrio emocional.",
        "Quando o estresse se torna constante e ultrapassa os limites do corpo e da mente, pode evoluir para o burnout — um estado de esgotamento físico, mental e emocional, geralmente relacionado ao trabalho ou a responsabilidades excessivas. Sintomas como irritabilidade, cansaço extremo, dificuldade de concentração, sensação de incapacidade e perda de motivação são sinais de alerta. A Terapia Cognitivo-Comportamental (TCC) ajuda a identificar os gatilhos do estresse, modificar padrões de pensamento que mantêm a sobrecarga e desenvolver estratégias para estabelecer limites, recuperar o equilíbrio e reconstruir uma rotina mais saudável e sustentável.",
      ],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "TEPT",
      text: [
        "a",
        "definir.",
        "O Transtorno de Estresse Pós-Traumático (TEPT) pode surgir após vivências traumáticas, como abusos, acidentes, perdas ou situações de violência. Ele se manifesta por meio de flashbacks, pesadelos, hipervigilância, insônia, irritabilidade e uma forte evitação de tudo que relembre o trauma. Muitas vezes, a pessoa sente que está revivendo o evento, mesmo após muito tempo. A Terapia Cognitivo-Comportamental (TCC) oferece recursos validados para o tratamento do TEPT, ajudando a ressignificar a experiência traumática, reduzir os sintomas e restaurar a sensação de segurança e controle sobre a própria vida.",
      ],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "TDAH ",
      text: ["a", "definir.", "a definir"],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Procrastinação ",
      text: ["a", "definir.", "a defenir"],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "TOC",
      text: ["a", "definir.", "a definir"],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Fobias específicas",
      text: ["a", "definir.", "a definir"],
    },
    {
      image: (
        <Image
          alt="depressao"
          src="/areas/depressao.png"
          width={500}
          height={56}
        />
      ),
      title: "Bipolaridade",
      text: ["a", "definir.", "a definir"],
    },
  ];

  const visibleCards = showAll ? cardList : cardList.slice(0, 3);

  const handleClickOnActivityCard = (title: string, text: string) => {
    setModalTitle(title);
    setModalContent(text);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <SectionTemplate
      id="activity-areas"
      className="flex flex-col items-center bg-white"
      noPaddingTop
    >
      <div className="flex flex-col items-center justify-center gap-2 lg:mt-24">
        <Title className="font-normal font-aboreto text-darkTurquoise-900 text-[32px] mt-16">
          Áreas de Atuação
        </Title>

        <AnimatedComponent
          HTMLtag="span"
          className="italic text-darkTurquoise-400 text-2xl flex flex-row items-center justify-center gap-2 w-full mb-11"
        >
          <div className="hidden sm:block w-full h-[1px] bg-darkTurquoise-300 ml-2"></div>
          <span className="whitespace-nowrap">Como a TCC pode te ajudar?</span>
          <div className="hidden sm:block w-full h-[1px] bg-darkTurquoise-300 ml-2"></div>
        </AnimatedComponent>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:justify-items-center relative">
        {visibleCards.map((item, index) => (
          <ActivityCard
            key={index}
            {...item}
            onClick={() => handleClickOnActivityCard(item.title, item.text[2])}
            style={{ zIndex: index }}
          />
        ))}
      </div>

      {!showAll && (
        <Button
          variant="terciary"
          className="my-5"
          onClick={() => setShowAll(true)}
        >
          Ver Todos
        </Button>
      )}

      <ModalText isOpen={isOpen} onClose={handleCloseModal} title={modalTitle}>
        {modalContent}
      </ModalText>
    </SectionTemplate>
  );
}
