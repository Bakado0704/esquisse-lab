import { HeaderLayout } from '@/components/layout/HeaderLayout';
import { FormWorkProvider } from '@/contexts/formWork.context';
import { MemberProvider } from '@/contexts/member.context';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MemberProvider>
      <FormWorkProvider>
        <HeaderLayout>
          <Component {...pageProps} />
        </HeaderLayout>
      </FormWorkProvider>
    </MemberProvider>
  );
}
