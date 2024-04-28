"use client";
import { Inter } from "next/font/google";

import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { MemberProvider } from "@/contexts/member.context";
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
        <MemberProvider>
          <HeaderLayout>{children}</HeaderLayout>
        </MemberProvider>
      </body>
    </html>
  );
}
