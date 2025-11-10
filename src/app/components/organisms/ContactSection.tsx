import SectionTemplate from "@/templates/SectionTemplate";
import Title from "../atoms/Title";
import { FaWhatsapp } from "react-icons/fa";
import Form from "./Form";
import AnimatedComponent from "../molecules/AnimatedComponent";

export default function CTASection() {
  return (
    <SectionTemplate
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-between bg-white lg:gap-12"
    >
      <div className="flex flex-col items-center lg:justify-center lg:min-h-[627px]">
        <Title className="font-normal font-aboreto text-[32px]/[36px] mx-10 mb-1 lg:text-4xl">
          Agende uma consulta
        </Title>
        <AnimatedComponent
          HTMLtag="span"
          className="text-2xl/[24px] text-center text-darkTurquoise-300 italic"
        >
          Psicologa Online
        </AnimatedComponent>

        <AnimatedComponent
          HTMLtag="p"
          className="text-base/[16px] italic text-black text-center mx-14 mt-5"
        >
          Agende através dos botões abaixo ou preencha o formulário a seguir.
          Nossa equipe de atendimento entrará em contato em breve.
        </AnimatedComponent>

        <AnimatedComponent
          HTMLtag="div"
          className="rounded-lg bg-darkTurquoise-400 text-white h-14 flex gap-3 items-center justify-center my-11 px-4 w-fit"
        >
          <FaWhatsapp size={24} className="text-white" />
          <a
            className="text-base mx-2"
            href="https://wa.me/5531984742155"
            target="_blank"
          >
            <span>WhatsApp: </span>
            <strong>(31) 98474 2155</strong>
          </a>
        </AnimatedComponent>
      </div>

      <Form />
    </SectionTemplate>
  );
}
