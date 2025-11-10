import PageLayout from "@/layouts/PageLayout";
import HeroSection from "../app/components/organisms/HeroSection";
import AboutSection from "@/app/components/organisms/AboutSection";
import WhatsChange from "@/app/components/organisms/WhatsChange";
import ActivityAreasSection from "@/app/components/organisms/ActivityAreasSection";
import TestimonialsSection from "@/app/components/organisms/TestimonialsSection";
import MeetingSection from "@/app/components/organisms/MeetingSection";
import TogetherMessage from "@/app/components/organisms/TogetherMessage";
import ContactSection from "@/app/components/organisms/ContactSection";
import FAQSection from "@/app/components/organisms/FAQSection";
import Footer from "@/app/components/organisms/Footer";
import WhatsAppButton from "@/app/components/organisms/WhatsAppButton";

export default function HomeTemplate() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <WhatsChange />
      <ActivityAreasSection />
      <TestimonialsSection />
      <MeetingSection />
      <TogetherMessage />
      <ContactSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </PageLayout>
  );
}
