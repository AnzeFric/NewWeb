import styles from "@/constants/styles/components/global/container-styles.module.css";
import { useWindowSize } from "@/contexts/WindowSizeContext";
import { useCallback, useEffect, useRef } from "react";
import NavSection from "@/components/global/nav/NavSection";

interface Props {
  sections: number; // Num of sections in the children
  children: (args: {
    scrollUp: () => void;
    scrollDown: (isMobile: boolean) => void;
  }) => React.ReactNode;
}

export default function ContainerWrapper({
  sections,
  children,
}: Readonly<Props>) {
  const { height, deviceType } = useWindowSize();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageNum = useRef(0);

  // Function to disable middle mouse button scrolling
  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  }, []);

  const scrollDown = useCallback(
    (isMobile: boolean) => {
      if (!scrollContainerRef.current) return;
      if (pageNum.current >= sections - 1) return;

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
    },
    [height, sections]
  );

  const scrollUp = useCallback(() => {
    if (!scrollContainerRef.current) return;
    if (pageNum.current <= 0) return;

    pageNum.current -= 1;
    scrollContainerRef.current.style.transform = `translate3d(0px, -${
      height * pageNum.current
    }px, 0px)`;
  }, [height]);

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
      window.addEventListener("mousedown", handleMouseDown);

      return () => {
        document.removeEventListener("wheel", scroll);
        window.removeEventListener("mousedown", handleMouseDown);
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
      <div className={styles.contentContainer}>
        {children({
          scrollUp,
          scrollDown,
        })}
      </div>
    </div>
  );
}
