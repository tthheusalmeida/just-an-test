"use client";

import SectionTemplate from "@/templates/SectionTemplate";
import Title from "@/app/components/atoms/Title";
import AnimatedComponent from "../molecules/AnimatedComponent";
import TransparentBackground from "../molecules/TransparentBackground";
import FAQQuestion from "../molecules/FAQQuestion";

import { useState } from "react";

export default function FAQSection() {
  const [faqData, setFaqData] = useState([
    {
      question: "Entenda como funciona a terapia",
      answer:
        "A psicoterapia que ofereço é baseada na TCC e tem um formato semi-estruturado: isso significa que cada sessão tem um foco claro, mas também há espaço para acolher aquilo que estiver acontecendo com você no momento. Começamos portanto com encontros semanais (mesmo que você já tenha feito terapia anteriormente), ao passo que sua estabilização vai chegando, os encontros podem ser espaçados. Trabalharemos principalmente com metas terapêuticas e estratégias personalizadas, sempre respeitando o seu ritmo. A terapia é voltada para o presente, prática e colaborativa — você participa ativamente do processo. O acompanhamento é de média duração, e ao longo do tempo, você aprende ferramentas que vão te ajudar a lidar com seus pensamentos, emoções e comportamentos com mais clareza.",
      open: false,
    },
    {
      question: "Quero saber mais sobre a abordagem",
      answer:
        "A TCC é uma abordagem terapêutica que se baseia em um princípio simples e poderoso: nossos pensamentos influenciam nossas emoções e ações. Quando estamos presos a pensamentos distorcidos, negativos ou excessivamente rígidos, isso pode nos levar a emoções intensas como ansiedade, culpa, tristeza ou raiva. Ao identificar esses padrões, a TCC nos convida a refletir, questionar e reestruturar essas crenças — promovendo mudanças emocionais e comportamentais reais. É um trabalho de autoconhecimento prático, com resultados valiosos para quem busca mais qualidade de vida emocional.",
      open: false,
    },
    {
      question: "Descubra o que esperar das sessões",
      answer:
        "Nas sessões de TCC, você pode esperar um espaço seguro, acolhedor e estruturado, onde suas experiências são levadas a sério e tratadas com respeito e técnica. Cada encontro tem um objetivo claro, mas você também poderá trazer o que estiver sentindo no momento. A ideia é equilibrar foco com acolhimento. Com o tempo, você aprenderá a reconhecer padrões de pensamento que causam sofrimento, a desenvolver estratégias de enfrentamento e a se tornar mais independente emocionalmente. Não é apenas sobre “falar dos problemas” — é sobre aprender a lidar com eles de forma mais saudável, duradoura e prática.",
      open: false,
    },
    {
      question: "Entenda como funciona a terapia",
      answer:
        "A psicoterapia que ofereço é baseada na TCC e tem um formato semi-estruturado: isso significa que cada sessão tem um foco claro, mas também há espaço para acolher aquilo que estiver acontecendo com você no momento. Começamos portanto com encontros semanais (mesmo que você já tenha feito terapia anteriormente), ao passo que sua estabilização vai chegando, os encontros podem ser espaçados. Trabalharemos principalmente com metas terapêuticas e estratégias personalizadas, sempre respeitando o seu ritmo. A terapia é voltada para o presente, prática e colaborativa — você participa ativamente do processo. O acompanhamento é de média duração, e ao longo do tempo, você aprende ferramentas que vão te ajudar a lidar com seus pensamentos, emoções e comportamentos com mais clareza.",
      open: false,
    },
    {
      question: "Quero saber mais sobre a abordagem",
      answer:
        "A TCC é uma abordagem terapêutica que se baseia em um princípio simples e poderoso: nossos pensamentos influenciam nossas emoções e ações. Quando estamos presos a pensamentos distorcidos, negativos ou excessivamente rígidos, isso pode nos levar a emoções intensas como ansiedade, culpa, tristeza ou raiva. Ao identificar esses padrões, a TCC nos convida a refletir, questionar e reestruturar essas crenças — promovendo mudanças emocionais e comportamentais reais. É um trabalho de autoconhecimento prático, com resultados valiosos para quem busca mais qualidade de vida emocional.",
      open: false,
    },
    {
      question: "Descubra o que esperar das sessões",
      answer:
        "Nas sessões de TCC, você pode esperar um espaço seguro, acolhedor e estruturado, onde suas experiências são levadas a sério e tratadas com respeito e técnica. Cada encontro tem um objetivo claro, mas você também poderá trazer o que estiver sentindo no momento. A ideia é equilibrar foco com acolhimento. Com o tempo, você aprenderá a reconhecer padrões de pensamento que causam sofrimento, a desenvolver estratégias de enfrentamento e a se tornar mais independente emocionalmente. Não é apenas sobre “falar dos problemas” — é sobre aprender a lidar com eles de forma mais saudável, duradoura e prática.",
      open: false,
    },
    {
      question: "Entenda como funciona a terapia",
      answer:
        "A psicoterapia que ofereço é baseada na TCC e tem um formato semi-estruturado: isso significa que cada sessão tem um foco claro, mas também há espaço para acolher aquilo que estiver acontecendo com você no momento. Começamos portanto com encontros semanais (mesmo que você já tenha feito terapia anteriormente), ao passo que sua estabilização vai chegando, os encontros podem ser espaçados. Trabalharemos principalmente com metas terapêuticas e estratégias personalizadas, sempre respeitando o seu ritmo. A terapia é voltada para o presente, prática e colaborativa — você participa ativamente do processo. O acompanhamento é de média duração, e ao longo do tempo, você aprende ferramentas que vão te ajudar a lidar com seus pensamentos, emoções e comportamentos com mais clareza.",
      open: false,
    },
    {
      question: "Quero saber mais sobre a abordagem",
      answer:
        "A TCC é uma abordagem terapêutica que se baseia em um princípio simples e poderoso: nossos pensamentos influenciam nossas emoções e ações. Quando estamos presos a pensamentos distorcidos, negativos ou excessivamente rígidos, isso pode nos levar a emoções intensas como ansiedade, culpa, tristeza ou raiva. Ao identificar esses padrões, a TCC nos convida a refletir, questionar e reestruturar essas crenças — promovendo mudanças emocionais e comportamentais reais. É um trabalho de autoconhecimento prático, com resultados valiosos para quem busca mais qualidade de vida emocional.",
      open: false,
    },
    {
      question: "Descubra o que esperar das sessões",
      answer:
        "Nas sessões de TCC, você pode esperar um espaço seguro, acolhedor e estruturado, onde suas experiências são levadas a sério e tratadas com respeito e técnica. Cada encontro tem um objetivo claro, mas você também poderá trazer o que estiver sentindo no momento. A ideia é equilibrar foco com acolhimento. Com o tempo, você aprenderá a reconhecer padrões de pensamento que causam sofrimento, a desenvolver estratégias de enfrentamento e a se tornar mais independente emocionalmente. Não é apenas sobre “falar dos problemas” — é sobre aprender a lidar com eles de forma mais saudável, duradoura e prática.",
      open: false,
    },
  ]);

  const toggleQuestion = (index: number) => {
    setFaqData((prev) =>
      prev.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  return (
    <SectionTemplate
      id="faq"
      className="flex flex-col items-center"
      isTranparentBackgroud
    >
      <TransparentBackground className="items-center">
        <Title className="font-normal font-aboreto text-white mt-20">
          Perguntas Frequentes
        </Title>

        <span className="flex flex-col lg:flex-row lg:gap-2 items-center justify-center lg:mt-7 lg:mb-16">
          <AnimatedComponent
            HTMLtag="span"
            className="text-white text-base/[16px] text-center mt-2 lg:m-0"
          >
            Ficou alguma dúvida?
          </AnimatedComponent>
          <AnimatedComponent
            HTMLtag="span"
            className="text-white text-base/[16px] text-center mb-8 lg:m-0"
          >
            Pronto(a) para dar o próximo passo?
          </AnimatedComponent>
        </span>

        <div className="flex flex-col gap-4 w-full max-w-2xl lg:max-w-8/12 mb-5">
          {faqData.map((item, index) => (
            <FAQQuestion
              {...item}
              key={index}
              onClick={() => toggleQuestion(index)}
            />
          ))}
        </div>
      </TransparentBackground>
    </SectionTemplate>
  );
}
