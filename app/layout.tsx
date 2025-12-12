import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




export const metadata: Metadata = {
  title: "Portfolio In Maintenance",
  description: "A Jonior Full stack developer that builds scalabale backend with UX focused frontend with JavaScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
