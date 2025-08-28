"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { DeviceType } from "@/constants/interfaces/device";

type WindowContextType = {
  width: number;
  height: number;
  deviceType: DeviceType;
};

const WindowSizeContext = createContext<WindowContextType>({
  width: 0,
  height: 0,
  deviceType: "desktop",
});

interface Props {
  children: ReactNode;
}

export function WindowSizeProvider({ children }: Readonly<Props>) {
  const [windowContext, setWindowContext] = useState<WindowContextType>({
    width: 0,
    height: 0,
    deviceType: "desktop",
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let deviceType: DeviceType = "desktop";

      if (width < 720) deviceType = "mobile";
      else if (width < 1280) deviceType = "tablet";

      setWindowContext({
        width: window.innerWidth,
        height: window.innerHeight,
        deviceType,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={windowContext}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export function useWindowSize() {
  return useContext(WindowSizeContext);
}
