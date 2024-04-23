import { HeaderLayout } from "@/components/layout/HeaderLayout";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderLayout>
      <Component {...pageProps} />
    </HeaderLayout>
  );
}
