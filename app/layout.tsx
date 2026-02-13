import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Obioha",
  description: "David's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
