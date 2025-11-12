import MinorSectionTemplate from "@/templates/MinorSectionTemplate";

export default function TogetherMessage() {
  return (
    <MinorSectionTemplate
      className="text-3xl gap-8 px-4 min-h-[545px] lg:min-h-64 text-darkTurquoise-100"
      noPaddingTop
      noPaddingBottom
      isTranparentBackgroud
    >
      <span className="text-center mt-28 lg:mt-0">
        <strong className="font-semibold">
          A terapia é um processo colaborativo:
        </strong>{" "}
        Você traz sua história, eu trago a técnica.
      </span>
      <span className="text-center mb-28 lg:mb-0">
        Juntos, construímos clareza, autonomia e equilíbrio emocional.
      </span>
    </MinorSectionTemplate>
  );
}
