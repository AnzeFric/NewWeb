"use client";

import BannerSection from "@/components/home/BannerSection";
import EducationSection from "@/components/home/EducationSection";
import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import { useWindowSize } from "@/contexts/WindowSizeContext";
import { useEffect, useState } from "react";
import eduStyles from "@/constants/styles/components/home/education-styles.module.css";

// Sections: Education, Work history, Projects, Hobbies
export default function Home() {
  const { deviceType } = useWindowSize();
  const [educationFocused, setEducationFocused] = useState(false);

  useEffect(() => {
    const eduSection = document.querySelector(
      `.${eduStyles.educationContainer}`
    );

    if (eduSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEducationFocused(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(eduSection);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // Scrolls to top after page reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <ContainerWrapper sections={2}>
      {({ scrollDown }) => (
        <>
          <BannerSection
            scrollDown={() => scrollDown(deviceType !== "desktop")}
          />
          <EducationSection focused={educationFocused} />
        </>
      )}
    </ContainerWrapper>
  );
}
