import { useState } from 'react';

import { AccountForm } from '@/components/pages/account/AccountForm';
import { EmailSend } from '@/components/pages/account/EmailSend';

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

  return <> {contents(page)}</>;
};

export default Home;
