import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./Components/SmoothScroll/page";

export const metadata: Metadata = {
  title: "David Obioha",
  description: "Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
