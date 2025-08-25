"use client";

import BannerSection from "@/components/home/banner/BannerSection";
import TeamSection from "@/components/home/team/TeamSection";
import { useEffect, useState } from "react";
import { DeviceType } from "@/interfaces/device";

export default function Home() {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 720) setDeviceType("mobile");
    else if (width < 1280) setDeviceType("tablet");
    else setDeviceType("desktop");
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <BannerSection deviceType={deviceType} />
      <TeamSection />
    </div>
  );
}
