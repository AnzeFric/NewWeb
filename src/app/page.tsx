"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import NavSection from "@/components/global/nav/NavSection";
import BannerSection from "@/components/home/BannerSection";
import styles from "@/styles/app/styles.module.css";
import ReferenceSection from "@/components/home/ReferenceSection";
import { useWindowSize } from "@/contexts/WindowSizeContext";

export default function Home() {
  const { height } = useWindowSize();

  const [menuOpened, setMenuOpened] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageNum = useRef(0);

  const TOTAL_PAGES = 3; // Number of sections

  const toggleMenu = () => {
    if (!menuRef.current) return;
    setMenuOpened((prev) => !prev);
    document.body.style.overflow = menuOpened ? "unset" : "hidden";
  };

  const scrollDown = () => {
    if (!scrollContainerRef.current) return;
    if (pageNum.current >= TOTAL_PAGES - 1) return;

    pageNum.current += 1;
    scrollContainerRef.current.style.transform = `translate3d(0px, -${
      height * pageNum.current
    }px, 0px)`;
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
      e.preventDefault(); // Without it scrolls past the start of section
      e.deltaY > 0 ? scrollDown() : scrollUp();
    },
    [scrollDown, scrollUp]
  );

  useEffect(() => {
    document.addEventListener("wheel", scroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", scroll);
    };
  }, [scroll]);

  return (
    <div ref={scrollContainerRef} className={styles.container}>
      <NavSection
        menuRef={menuRef}
        toggleMenu={toggleMenu}
        menuOpened={menuOpened}
      />
      <BannerSection scrollDown={scrollDown} />
      <ReferenceSection />
      <ReferenceSection />
    </div>
  );
}
