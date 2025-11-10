import AnimatedComponent from "../molecules/AnimatedComponent";
import Logo from "../molecules/Logo";
import Menu from "../molecules/Menu";
import PageTemplate from "@/templates/PageTemplate";
import NavigationTabs from "./NavigationTabs";
import TextDivider from "../atoms/TextDivider";

export default function Header() {
  return (
    <AnimatedComponent
      HTMLtag="div"
      className="fixed top-0 left-0 lg:max-w-[var(--page-width)] lg:top-18 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 trals w-dvw z-50"
      slideUp
    >
      <PageTemplate>
        <div className="flex items-center justify-between sm:justify-around h-12 sm:h-32 mt-4 border-t-[3px] border-darkTurquoise-200 rounded-lg select-none mx-4 bg-darkTurquoise-700 px-4 py-2">
          <Logo className="block sm:hidden" />
          <div className="flex flex-col sm:hidden">
            <h1 className="font-aboreto text-darkTurquoise-200">
              Jéssica Rodrigues
            </h1>

            <TextDivider text="Psicóloga" />
          </div>

          <div className="hidden sm:flex flex-col lg:gap-5 lg:flex-row gap-2 items-center">
            <Logo />

            <div className="flex flex-col">
              <h1 className="font-aboreto text-darkTurquoise-200">
                Jéssica Rodrigues
              </h1>

              <TextDivider text="Psicóloga" />
            </div>
          </div>

          <NavigationTabs className="hidden md:inline" />
          <Menu className="block md:hidden" />
        </div>
      </PageTemplate>
    </AnimatedComponent>
  );
}
