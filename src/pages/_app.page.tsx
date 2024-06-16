import { HeaderLayout } from '@/components/layout/HeaderLayout';
import { MemberProvider } from '@/contexts/member.context';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MemberProvider>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </MemberProvider>
  );
}
