"use client";

import { useState, useRef } from "react";
import NavSection from "@/components/global/nav/NavSection";
import styles from "@/styles/app/styles.module.css";

export default function HirePage() {
  const [menuOpened, setMenuOpened] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuRef.current) return;
    setMenuOpened((prev) => !prev);
    document.body.style.overflow = menuOpened ? "unset" : "hidden";
  };

  return (
    <div className={styles.container}>
      <NavSection
        menuRef={menuRef}
        toggleMenu={toggleMenu}
        menuOpened={menuOpened}
      />
    </div>
  );
}
