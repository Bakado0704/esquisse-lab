import { Esquisse } from '@/types/application/esquisse.types';

import {
  chatRepository,
  esquisseRepository,
  workRepository,
} from './repository/firebase';

export const getEsquisses = async ({
  sortKey,
  limit,
}: {
  sortKey: 'desc' | 'asc';
  limit: number;
}): Promise<Esquisse[]> => {
  try {
    const esquisses = await esquisseRepository.list([
      ['createdAt', sortKey, { limit }],
    ]);
    return esquisses;
  } catch (error) {
    throw new Error('Failed to fetch esquisses');
  }
};

export const getSelectedEsquisses = async ({
  workId,
}: {
  workId: string;
}): Promise<Esquisse[]> => {
  try {
    const work = await workRepository.get({ id: workId });
    const esquisses = await Promise.all(
      work.esquisseIds.map(async (id) => {
        const esquisse = await esquisseRepository.get({ id });
        return esquisse;
      }),
    );
    return esquisses;
  } catch (error) {
    throw new Error(`Failed to fetch selected esquisses for workId ${workId}`);
  }
};

export const getEsquisse = async ({
  esquisseId,
}: {
  esquisseId: string;
}): Promise<Esquisse> => {
  try {
    const esquisse = await esquisseRepository.get({ id: esquisseId });
    if (!esquisse) {
      throw new Error(`Esquisse with id ${esquisseId} not found`);
    }
    return esquisse;
  } catch (error) {
    throw new Error(`Failed to fetch esquisse with id ${esquisseId}`);
  }
};

export const deleteEsquisse = async ({
  esquisseId,
}: {
  esquisseId: string;
}): Promise<void> => {
  try {
    const esquisse = await esquisseRepository.get({ id: esquisseId });
    const work = await workRepository.get({ id: esquisse.workId });
    const filteredEsquisseIds = work.esquisseIds.filter(
      (id) => id !== esquisseId,
    );

    await workRepository.update(esquisse.workId, {
      esquisseIds: filteredEsquisseIds,
    });

    await Promise.all(
      esquisse.chatIds.map(async (chatId) => {
        await chatRepository.deleteDoc({
          id: chatId,
        });
      }),
    );

    await esquisseRepository.deleteDoc({
      id: esquisseId,
    });
  } catch (error) {
    console.error(`Failed to delete esquisse with id ${esquisseId}:`, error);
    throw new Error(`Failed to delete esquisse with id ${esquisseId}`);
  }
};
