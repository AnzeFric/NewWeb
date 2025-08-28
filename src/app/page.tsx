"use client";

import BannerSection from "@/components/home/BannerSection";
import ReferenceSection from "@/components/home/ReferenceSection";
import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import { useWindowSize } from "@/contexts/WindowSizeContext";

export default function Home() {
  const { deviceType } = useWindowSize();

  return (
    <ContainerWrapper sections={3}>
      {({ scrollUp, scrollDown }) => (
        <>
          <BannerSection
            scrollDown={() => scrollDown(deviceType !== "desktop")}
          />
          <ReferenceSection />
          <ReferenceSection />
        </>
      )}
    </ContainerWrapper>
  );
}
