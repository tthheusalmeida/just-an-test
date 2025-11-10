"use client";

import FooterLabels from "../molecules/FooterLabels";
import { mergeClassNames } from "@/utils/classNames";
import Logo from "../molecules/Logo";
import TextDivider from "../atoms/TextDivider";
import Image from "next/image";
import { tabsList, scrollIntoSection } from "./NavigationTabs";
import AnimatedComponent from "../molecules/AnimatedComponent";
import MinorSectionTemplate from "@/templates/MinorSectionTemplate";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <MinorSectionTemplate
      className={mergeClassNames(className, "px-4 py-9 bg-white")}
      noPaddingTop
      noPaddingBottom
    >
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-16 items-center justify-center w-full rounded-lg bg-darkTurquoise-700 px-4">
        <AnimatedComponent
          HTMLtag="div"
          className="flex flex-col items-center justify-between select-none mt-10 lg:mt-0"
        >
          <Logo classNameLogo="w-16 h-16 mb-3.5" />

          <div className="flex flex-col">
            <AnimatedComponent
              HTMLtag="h1"
              className="font-aboreto text-darkTurquoise-200 text-2xl"
            >
              Jéssica Rodrigues
            </AnimatedComponent>

            <TextDivider text="Psicóloga" textClassName="text-xs" />
          </div>
        </AnimatedComponent>

        <div className="flex flex-col gap-4 items-center text-center text-white lg:m-8">
          <AnimatedComponent
            HTMLtag="h4"
            className="text-darkTurquoise-300 italic font-bold"
          >
            Contato
          </AnimatedComponent>
          <AnimatedComponent HTMLtag="p" className="font-light">
            Atendimento Online
          </AnimatedComponent>
          <AnimatedComponent HTMLtag="div">
            <strong>Agende através do WhatsApp:</strong>
            <AnimatedComponent HTMLtag="p" className="font-light">
              (31) 98474 2155
            </AnimatedComponent>
          </AnimatedComponent>

          <AnimatedComponent HTMLtag="p" className="text-base/[18px]">
            <strong>ATENÇÃO: </strong> Este site não oferece atendimento de
            emergência. Se você ou alguém estiver em risco, procure um hospital
            ou ligue 192 (SAMU).
          </AnimatedComponent>

          <AnimatedComponent HTMLtag="span">
            <a
              href="https://www.instagram.com/jessicarpsicologa/"
              target="_blank"
            >
              <Image
                src="/footer/instagram-icon.png"
                width={40}
                height={40}
                alt="Instagram logo"
              />
            </a>
          </AnimatedComponent>
        </div>

        <div className="mb-10 lg:mb-0">
          <AnimatedComponent
            HTMLtag="h4"
            className="text-darkTurquoise-300 italic font-bold mb-4 text-center"
          >
            Mapa do Site
          </AnimatedComponent>

          <div className="flex flex-col gap-2">
            {tabsList.map((item, index) => (
              <AnimatedComponent
                key={index}
                HTMLtag="span"
                className="text-center"
              >
                <span
                  className="font-light text-darkTurquoise-300 hover:text-darkTurquoise-100 text-center"
                  onClick={() => scrollIntoSection(item.id)}
                >
                  {item.label}
                </span>
              </AnimatedComponent>
            ))}
          </div>
        </div>
      </div>

      <FooterLabels />
    </MinorSectionTemplate>
  );
}
