import localFont from "next/font/local";
import { WindowSizeProvider } from "@/contexts/WindowSizeContext";
import "@/styles/app/globals.css";

const aquireFont = localFont({
  src: [
    {
      path: "../assets/fonts/aquire-font/AquireLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/aquire-font/Aquire.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/aquire-font/AquireBold.otf",
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
