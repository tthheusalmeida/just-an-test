import SectionTemplate from "@/templates/SectionTemplate";
import TransparentBackground from "../molecules/TransparentBackground";
import QuotationMarks from "../molecules/QuotationMarks";
import Title from "../atoms/Title";
import Testimonial, { TestimonialData } from "../molecules/Testimonial";
import AnimatedComponent from "../molecules/AnimatedComponent";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials: TestimonialData[] = [
    {
      name: "F. G",
      age: 32,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "F. G",
      age: 32,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "F. G",
      age: 32,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <SectionTemplate
      id="testimonials"
      className="relative flex flex-col items-center justify-center"
      isTranparentBackgroud
    >
      <Image
        src="/testimonials/logo.png"
        alt="Background"
        height={700}
        width={700}
        priority
        className="hidden absolute left-[25%] -top-46 -translate-x-1/2 translate-y-1/2"
      />
      <TransparentBackground className="items-center text-darkTurquoise-100 sm:grid sm:grid-cols-2 sm:gap-10">
        <div className="flex flex-col items-center sm:items-start">
          <QuotationMarks className="mt-20 mb-5 sm:m-0" />

          <Title className="font-normal font-aboreto text-[32px]/[36px] mx-10 sm:m-0 sm:p-0 sm:text-left sm:my-8">
            O que dizem meus pacientes
          </Title>
          <AnimatedComponent
            HTMLtag="span"
            className="text-2xl/[24px] text-center sm:text-left mt-12"
          >
            Relatos reais de pessoas que vivenciaram o processo terapêutico.
          </AnimatedComponent>
        </div>

        <div className="flex flex-col gap-6 my-12 sm:hidden">
          {testimonials.map((item, index) => (
            <Testimonial key={index} {...item} />
          ))}
        </div>

        <div className="relative h-[700px] overflow-hidden mt-12 mb-4 hidden sm:block">
          <div className="animate-scroll-vertical flex flex-col gap-6 hover:[animation-play-state:paused] ml-10">
            {testimonials.map((item, index) => (
              <Testimonial key={`a-${index}`} {...item} />
            ))}
            {testimonials.map((item, index) => (
              <Testimonial key={`b-${index}`} {...item} />
            ))}
          </div>
        </div>
      </TransparentBackground>
    </SectionTemplate>
  );
}
