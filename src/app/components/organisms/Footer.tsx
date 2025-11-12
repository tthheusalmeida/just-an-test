"use client";

import FooterLabels from "../molecules/FooterLabels";
import { mergeClassNames } from "@/utils/classNames";
import Logo from "../molecules/Logo";
import TextDivider from "../atoms/TextDivider";
import Image from "next/image";
import { tabsList, scrollIntoSection } from "./NavigationTabs";
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
        <div className="flex flex-col items-center justify-between select-none mt-10 lg:mt-0">
          <Logo classNameLogo="w-16 h-16 mb-3.5" />

          <div className="flex flex-col">
            <h1 className="font-aboreto text-darkTurquoise-200 text-2xl">
              Jéssica Rodrigues
            </h1>

            <TextDivider text="Psicóloga" textClassName="text-xs" />
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center text-center text-white lg:m-8">
          <h4 className="text-darkTurquoise-300 italic font-bold">Contato</h4>
          <p className="font-light">Atendimento Online</p>
          <div>
            <strong>Agende através do WhatsApp:</strong>
            <p className="font-light">(31) 98474 2155</p>
          </div>

          <p className="text-base/[18px]">
            <strong>ATENÇÃO: </strong> Este site não oferece atendimento de
            emergência. Se você ou alguém estiver em risco, procure um hospital
            ou ligue 192 (SAMU).
          </p>

          <span>
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
          </span>
        </div>

        <div className="mb-10 lg:mb-0">
          <h4 className="text-darkTurquoise-300 italic font-bold mb-4 text-center">
            Mapa do Site
          </h4>

          <div className="flex flex-col gap-2">
            {tabsList.map((item, index) => (
              <span key={index} className="text-center">
                <span
                  className="font-light text-darkTurquoise-300 hover:text-darkTurquoise-100 text-center"
                  onClick={() => scrollIntoSection(item.id)}
                >
                  {item.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <FooterLabels />
    </MinorSectionTemplate>
  );
}
