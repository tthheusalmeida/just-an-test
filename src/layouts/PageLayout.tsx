import { TabsProvider } from "@/contexts/TabsContext";

import Header from "@/app/components/organisms/Header";
import PageTemplate from "@/templates/PageTemplate";
import ScrollSpy from "@/app/components/organisms/ScrollSpy";
import Background from "@/app/components/molecules/Background";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTemplate>
      <TabsProvider>
        <Header />
        {children}
        <ScrollSpy />

        <Background />
      </TabsProvider>
    </PageTemplate>
  );
}
