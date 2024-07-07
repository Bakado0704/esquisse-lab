import { Loader } from '@/components/common';
import { HeaderLayout } from '@/components/layout/HeaderLayout';
import { AuthProvider } from '@/contexts/auth.context';
import { ErrorProvider } from '@/contexts/error.context';
import { EsquissesProvider } from '@/contexts/esquisse.context';
import { EsquisseIdProvider } from '@/contexts/esquisseId.context';
import { FormWorkProvider } from '@/contexts/formWork.context';
import { ModalImageProvider } from '@/contexts/image.context';
import { LoadingProvider } from '@/contexts/loading.context';
import { MemberProvider } from '@/contexts/member.context';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorProvider>
      <LoadingProvider>
        <AuthProvider>
          <MemberProvider>
            <FormWorkProvider>
              <EsquissesProvider>
                <EsquisseIdProvider>
                  <ModalImageProvider>
                    <HeaderLayout>
                      <Loader />
                      <Component {...pageProps} />
                    </HeaderLayout>
                  </ModalImageProvider>
                </EsquisseIdProvider>
              </EsquissesProvider>
            </FormWorkProvider>
          </MemberProvider>
        </AuthProvider>
      </LoadingProvider>
    </ErrorProvider>
  );
}
