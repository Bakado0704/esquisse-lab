import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps as NextErrorProps } from 'next/error';

import { CustomError } from '@/components/pages/error/CustomError';

interface ErrorProps extends NextErrorProps {
  hasGetInitialPropsRun?: boolean;
}

const errorMessage = ({ statusCode }: { statusCode: number }) => {
  switch (statusCode) {
    case 404:
      return 'ページが見つかりません。URLに間違いがないかご確認ください。';
    case 500:
      return 'サーバーエラーが発生しました。しばらくしてから再度お試しください。';
    default:
      return 'エラーが発生しました。';
  }
};

const MyError = ({ statusCode }: ErrorProps & { err?: Error }) => {
  return (
    <CustomError
      statusCode={statusCode}
      detail={errorMessage({ statusCode })}
    />
  );
};

MyError.getInitialProps = async (context: NextPageContext) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);

  const { res, err } = context;

  const newErrorInitialProps: ErrorProps = {
    ...errorInitialProps,
    hasGetInitialPropsRun: true,
  };

  if (res?.statusCode === 404) {
    return newErrorInitialProps;
  }

  if (err) {
    return errorInitialProps;
  }

  return errorInitialProps;
};

export default MyError;
