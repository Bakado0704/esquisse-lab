import { HeaderLayout } from '@/components/layout/HeaderLayout';
import { AuthProvider } from '@/contexts/auth.context';
import { EsquisseIdProvider } from '@/contexts/esquisseId.context';
import { FormWorkProvider } from '@/contexts/formWork.context';
import { MemberProvider } from '@/contexts/member.context';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MemberProvider>
        <FormWorkProvider>
          <EsquisseIdProvider>
            <HeaderLayout>
              <Component {...pageProps} />
            </HeaderLayout>
          </EsquisseIdProvider>
        </FormWorkProvider>
      </MemberProvider>
    </AuthProvider>
  );
}
