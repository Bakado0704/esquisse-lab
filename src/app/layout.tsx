import { HeaderLayout } from "@/components/layout/HeaderLayout";
import "destyle.css";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <link rel="stylesheet" href="https://use.typekit.net/ttx3gce.css" />
        <HeaderLayout>{children}</HeaderLayout>
      </body>
    </html>
  );
}
