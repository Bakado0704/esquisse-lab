import { useEffect, useRef, useState } from 'react';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useFadeIn } from '@/hooks/useFadeIn';
import { clearScroll, onScroll } from '@/hooks/useScroll';
import { getChats } from '@/libs/service/firestore/chat';
import { Chat } from '@/types/application/chat.types';
import { Esquisse } from '@/types/application/esquisse.types';

type UseEsquisseItemProps = {
  esquisse: Esquisse;
  styles: {
    readonly [key: string]: string;
  };
};

export const useEsquisseItem = ({ esquisse, styles }: UseEsquisseItemProps) => {
  const { esquisseId: selectedEsquisseId } = useEsquisseIdContext();

  const [isEsquisseActive, setIsEsquisseActive] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const targetId = esquisse.id + '_id';

  useFadeIn({ targetId, styles });

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const fetchedChats = await getChats({ chatIds: esquisse.chatIds });
        setChats(fetchedChats);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      }
    };

    fetchChats();
  }, [esquisse]);

  useEffect(() => {
    if (esquisse.id === selectedEsquisseId) {
      setIsEsquisseActive(true);
      onScroll(selectedEsquisseId, 'top');

      return () => {
        clearScroll();
      };
    }
  }, [esquisse, selectedEsquisseId]);

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
  }, [isEsquisseActive, chats, esquisse]);

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
