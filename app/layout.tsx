import localFont from "next/font/local";
import type { Metadata } from "next";
import RootProvider from "@/pr/providers/RootProvider";
import { ChildContainerProps } from "@/pr/types";
import RootLayoutView from "@/pr/layouts/RootLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Primereact Blocks",
  description: "Fast and Easy Development with Pre-built UI Blocks",
};

export default function RootLayout({ children }: ChildContainerProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-screen overflow-x-hidden scroll-smooth`}
      >
        <RootProvider>
          <RootLayoutView>{children}</RootLayoutView>
        </RootProvider>
      </body>
    </html>
  );
}
