import { useState } from 'react';

import { AccountForm } from '@/components/pages/account/AccountForm';
import { EmailSend } from '@/components/pages/account/EmailSend';
import { NavFooter } from '@/components/pages/common/NavFooter';

const Home = () => {
  const [page, setPage] = useState<'account' | 'email'>('account');

  const contents = (page: 'account' | 'email') => {
    switch (page) {
      case 'account':
        return <AccountForm setPage={setPage} />;
      case 'email':
        return <EmailSend />;
    }
  };

  return (
    <>
      {contents(page)}
      <NavFooter />
    </>
  );
};

export default Home;
