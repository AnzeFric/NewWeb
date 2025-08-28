"use client";

import { useEffect, useRef, useCallback } from "react";
import NavSection from "@/components/global/nav/NavSection";
import BannerSection from "@/components/home/BannerSection";
import styles from "@/styles/app/styles.module.css";
import ReferenceSection from "@/components/home/ReferenceSection";
import { useWindowSize } from "@/contexts/WindowSizeContext";

export default function Home() {
  const { height, deviceType } = useWindowSize();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageNum = useRef(0);

  const TOTAL_PAGES = 3; // Number of sections

  const scrollDown = (isMobile: boolean) => {
    if (!scrollContainerRef.current) return;
    if (pageNum.current >= TOTAL_PAGES - 1) return;

    if (isMobile) {
      window.scrollBy({
        top: height - window.scrollY,
        behavior: "smooth",
      });
    } else {
      pageNum.current += 1;
      scrollContainerRef.current.style.transform = `translate3d(0px, -${
        height * pageNum.current
      }px, 0px)`;
    }
  };

  const scrollUp = () => {
    if (!scrollContainerRef.current) return;
    if (pageNum.current <= 0) return;

    pageNum.current -= 1;
    scrollContainerRef.current.style.transform = `translate3d(0px, -${
      height * pageNum.current
    }px, 0px)`;
  };

  const scroll = useCallback(
    (e: WheelEvent) => {
      if (deviceType === "desktop") {
        e.preventDefault(); // Without it scrolls past the start of section
        e.deltaY > 0 ? scrollDown(false) : scrollUp();
      }
    },
    [deviceType, scrollDown, scrollUp]
  );

  useEffect(() => {
    if (deviceType === "desktop") {
      document.addEventListener("wheel", scroll, { passive: false });

      return () => {
        document.removeEventListener("wheel", scroll);
      };
    }
  }, [deviceType, scroll]);

  return (
    <div
      ref={scrollContainerRef}
      className={
        deviceType === "desktop" ? styles.container : styles.mobileContainer
      }
    >
      <NavSection />
      <BannerSection scrollDown={() => scrollDown(deviceType !== "desktop")} />
      <ReferenceSection />
      <ReferenceSection />
    </div>
  );
}
