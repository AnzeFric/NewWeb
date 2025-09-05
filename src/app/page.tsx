"use client";

import BannerSection from "@/components/home/BannerSection";
import EducationSection from "@/components/home/EducationSection";
import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import { useWindowSize } from "@/contexts/WindowSizeContext";
import { useEffect, useState } from "react";
import eduStyles from "@/constants/styles/components/home/education-styles.module.css";
import workStyles from "@/constants/styles/components/home/work-styles.module.css";
import WorkSection from "@/components/home/WorkSection";

// Sections to add: Hobbies
export default function Home() {
  const { deviceType } = useWindowSize();
  const [educationFocused, setEducationFocused] = useState(false);
  const [workFocused, setWorkFocused] = useState(false);

  useEffect(() => {
    const eduSection = document.querySelector(
      `.${eduStyles.educationContainer}`
    );
    const workSection = document.querySelector(`.${workStyles.workContainer}`);

    let eduObserver: IntersectionObserver | null = null;
    let workObserver: IntersectionObserver | null = null;

    if (eduSection) {
      eduObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEducationFocused(true);
            eduObserver?.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      eduObserver.observe(eduSection);
    }

    if (workSection) {
      workObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setWorkFocused(true);
            workObserver?.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      workObserver.observe(workSection);
    }

    return () => {
      eduObserver?.disconnect();
      workObserver?.disconnect();
    };
  }, []);

  // Scrolls to top after page reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <ContainerWrapper sections={3}>
      {({ scrollDown }) => (
        <>
          <BannerSection
            scrollDown={() => scrollDown(deviceType !== "desktop")}
          />
          <EducationSection focused={educationFocused} />
          <WorkSection focused={workFocused} />
        </>
      )}
    </ContainerWrapper>
  );
}
