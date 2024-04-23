"use client";
import { Inter } from "next/font/google";

import { HeaderLayout } from "@/components/layout/HeaderLayout";

import "@/styles/globals.scss";
import "destyle.css";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <HeaderLayout>{children}</HeaderLayout>
      </body>
    </html>
  );
}
