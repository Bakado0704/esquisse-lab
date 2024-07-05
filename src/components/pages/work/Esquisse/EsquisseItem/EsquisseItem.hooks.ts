import { useEffect, useRef, useState } from 'react';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useFadeIn } from '@/hooks/useFadeIn';
import { clearScroll, onScroll } from '@/hooks/useScroll';
import { getChats } from '@/libs/getChats';
import { Chat } from '@/types/application/chat.types';

type UseEsquisseItemProps = {
  esquisseId: string;
  styles: {
    readonly [key: string]: string;
  };
};

export const useEsquisseItem = ({
  esquisseId,
  styles,
}: UseEsquisseItemProps) => {
  const { esquisseId: selectedEsquisseId } = useEsquisseIdContext();
  const [isEsquisseActive, setIsEsquisseActive] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const targetId = esquisseId + '_id';

  useFadeIn({ targetId, styles });

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const fetchedChats = await getChats({ esquisseId });
        setChats(fetchedChats);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      }
    };

    fetchChats();
  }, [esquisseId]);

  useEffect(() => {
    if (esquisseId === selectedEsquisseId) {
      setIsEsquisseActive(true);
      onScroll(selectedEsquisseId, 'top');

      return () => {
        clearScroll();
      };
    }
  }, [esquisseId, selectedEsquisseId]);

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

  const toggleEsquisse = () => {
    setIsEsquisseActive(!isEsquisseActive);
  };

  const onEsquisseOpen = () => {
    if (!isEsquisseActive) {
      setIsEsquisseActive(true);
    }
  };

  return {
    targetId,
    chats,
    isEsquisseActive,
    containerRef,
    contentRef,
    toggleEsquisse,
    onEsquisseOpen,
  };
};
