import SectionTemplate from "@/templates/SectionTemplate";
import Title from "@/app/components/atoms/Title";
import TextDivider from "../atoms/TextDivider";
import AnimatedComponent from "../molecules/AnimatedComponent";
import NavigationButton from "../atoms/NavigationButton";

export default function HeroSection() {
  return (
    <SectionTemplate
      id="home"
      className="relative flex flex-col items-center justify-center w-full h-full"
      noPaddingTop
      noPaddingBottom
      noPaddingInline
      isTranparentBackgroud
      showBackground
    >
      <div className="bg-white w-[900px] h-[900px] rounded-full blur-[100px] absolute left-1/2 top-1/2 -translate-x-[30%] -translate-y-[40%] z-0 sm:block hidden" />
      <div className="flex flex-col items-center w-full h-dvh sm:h-10/12 sm:w-8/12 sm:absolute sm:top-0 sm:right-0 bg-red">
        <div className="relative flex flex-col select-none items-center justify-end pb-16 sm:pb-14 px-7 w-full h-3/4 z-0 overflow-clip">
          <div className="z-1 text-center">
            <Title className="font-normal font-aboreto text-darkTurquoise-900">
              Jéssica Rodrigues
            </Title>

            <TextDivider
              text="Psicáloga clínica"
              textClassName="text-[20px] text-darkTurquoise-500"
              lineClassName="text-darkTurquoise-500"
            />

            <AnimatedComponent
              HTMLtag="span"
              className="font-normal font-aboreto text-darkTurquoise-500 text-base"
            >
              Terapia Cognitivo-Comportamental
            </AnimatedComponent>
          </div>

          <div className="bg-white w-96 h-96 rounded-full blur-3xl absolute -bottom-60 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 sm:hidden block"></div>
        </div>
        <div className="flex flex-col justify-center items-center font-light gap-6 p-4 sm:p-0 w-full bg-white sm:bg-transparent h-1/4 sm:h-fit z-1">
          <AnimatedComponent
            HTMLtag="span"
            className="text-lg text-center sm:text"
          >
            Atendimento psicoterapêutico online
            <br /> baseado em ciência e acolhimento
          </AnimatedComponent>

          <NavigationButton>Saiba mais</NavigationButton>
        </div>
      </div>
    </SectionTemplate>
  );
}
