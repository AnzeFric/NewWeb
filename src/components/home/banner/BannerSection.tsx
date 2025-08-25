"use client";

import Image from "next/image";
import main_background from "@/assets/main_background.webp";
import styles from "./style.module.css";
import { useRef, useState } from "react";
import { DeviceType } from "@/interfaces/device";
import MobileSection from "./devices/MobileSection";
import DesktopSection from "./devices/DesktopSection";

interface Props {
  deviceType: DeviceType;
}

export default function BannerSection({ deviceType }: Readonly<Props>) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (!menu) return;

    setMenuOpened((prev) => !prev);
    document.body.style.overflow = menuOpened ? "unset" : "hidden";
  };

  return (
    <div className={styles.container}>
      <Image
        src={main_background}
        className={styles.image}
        alt="Entry background image"
        fill
      />
      {(deviceType === "mobile" || deviceType === "tablet") && (
        <MobileSection
          menuRef={menuRef}
          toggleMenu={toggleMenu}
          menuOpened={menuOpened}
        />
      )}

      {deviceType == "desktop" && <DesktopSection />}
    </div>
  );
}
