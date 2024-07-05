import { Esquisse } from '@/types/application/esquisse.types';

import { esquisseRepository, workRepository } from './repository/firebase';

export const getEsquisses = async (): Promise<Esquisse[]> => {
  try {
    const esquisses = await esquisseRepository.list();
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
    if (!work) {
      throw new Error(`Work with id ${workId} not found`);
    }
    const esquisses = await esquisseRepository.list([
      ['id', 'array-contains-any', work.esquisseIds],
    ]);
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
    console.error(`Failed to fetch esquisse with id ${esquisseId}:`, error);
    throw new Error(`Failed to fetch esquisse with id ${esquisseId}`);
  }
};
