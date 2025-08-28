"use client";

import BannerSection from "@/components/home/BannerSection";
import EducationSection from "@/components/home/EducationSection";
import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import { useWindowSize } from "@/contexts/WindowSizeContext";

// Sections: Education, Work history, Projects, Hobbies
export default function Home() {
  const { deviceType } = useWindowSize();

  return (
    <ContainerWrapper sections={2}>
      {({ scrollDown }) => (
        <>
          <BannerSection
            scrollDown={() => scrollDown(deviceType !== "desktop")}
          />
          <EducationSection />
        </>
      )}
    </ContainerWrapper>
  );
}
