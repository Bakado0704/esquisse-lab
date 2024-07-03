import { useEffect } from 'react';

type fadeInPrpos = {
  targetId: string;
  styles: {
    readonly [key: string]: string;
  };
};

export const useFadeIn = ({ targetId, styles }: fadeInPrpos) => {
  useEffect(() => {
    const container = document.getElementById('scrollContainer');
    const target = document.getElementById(targetId);

    if (container && target) {
      const handleScroll = () => {
        const targetRect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight * 0.8;

        if (targetRect.top <= windowHeight) {
          target.classList.add(styles.open);
        }
      };

      container.addEventListener('scroll', handleScroll);

      handleScroll();

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
};
