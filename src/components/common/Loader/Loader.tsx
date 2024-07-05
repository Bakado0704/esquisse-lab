import { useEffect } from 'react';

import { useLoadingContext } from '@/contexts/loading.context';

import styles from './Loader.module.scss';

const Loader = () => {
  const { loading } = useLoadingContext();

  useEffect(() => {
    if (!loading || !window) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return null;
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [loading]);

  return loading ? (
    <div className={styles['loading-cover']}>
      <span className={styles.loader} />
    </div>
  ) : null;
};

export default Loader;
