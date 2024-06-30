import { useEffect, useRef, useState } from 'react';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { clearScroll, onScroll } from '@/hooks/useScroll';
import { getChats } from '@/libs/getChats';

type UseEsquisseItemProps = {
  esquisseId: string;
};

export const useEsquisseItem = ({ esquisseId }: UseEsquisseItemProps) => {
  const { esquisseId: selectedEsquisseId } = useEsquisseIdContext();
  const [isEsquisseActive, setIsEsquisseActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (esquisseId === selectedEsquisseId) {
      setIsEsquisseActive(true);
      onScroll(selectedEsquisseId, 'top');

      return () => {
        clearScroll();
      };
    }
  }, []);

  useEffect(() => {
    const baseHeight = window.innerWidth <= 768 ? 58 : 72;
    if (containerRef.current && contentRef.current) {
      if (isEsquisseActive) {
        containerRef.current.style.height =
          baseHeight + contentRef.current.clientHeight + 'px';
      } else {
        containerRef.current.style.height = baseHeight + 'px';
      }
    }
  }, [isEsquisseActive]);

  const chats = getChats().filter((chat) => chat.esquisseId === esquisseId);

  const toggleEsquisse = () => {
    setIsEsquisseActive(!isEsquisseActive);
  };
  const onEsquisseOpen = () => {
    if (!isEsquisseActive) {
      setIsEsquisseActive(true);
    }
  };

  return {
    chats,
    isEsquisseActive,
    containerRef,
    contentRef,
    toggleEsquisse,
    onEsquisseOpen,
  };
};
