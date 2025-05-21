// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { dmSans } from "./fonts";

export const metadata: Metadata = {
  title: "Md Rashadul Islam – Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
