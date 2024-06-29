import { HeaderLayout } from '@/components/layout/HeaderLayout';
import { FormEsquisseProvider } from '@/contexts/formEsquisse.context';
import { FormWorkProvider } from '@/contexts/formWork.context';
import { MemberProvider } from '@/contexts/member.context';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MemberProvider>
      <FormEsquisseProvider>
        <FormWorkProvider>
          <HeaderLayout>
            <Component {...pageProps} />
          </HeaderLayout>
        </FormWorkProvider>
      </FormEsquisseProvider>
    </MemberProvider>
  );
}
