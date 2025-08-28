import localFont from "next/font/local";
import { WindowSizeProvider } from "@/contexts/WindowSizeContext";
import "@/constants/styles/app/globals.css";

const aquireFont = localFont({
  src: [
    {
      path: "../constants/assets/fonts/aquire-font/AquireLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../constants/assets/fonts/aquire-font/Aquire.otf",
      weight: "400",
    },
    {
      path: "../constants/assets/fonts/aquire-font/AquireBold.otf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-aquire",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aquireFont.variable}>
      <body>
        <WindowSizeProvider>{children}</WindowSizeProvider>
      </body>
    </html>
  );
}
