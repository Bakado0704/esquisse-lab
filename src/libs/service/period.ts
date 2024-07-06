import { getSelectedEsquisses } from './firestore/esquisse';

export type Period = {
  startDate: Date;
  endDate: Date;
};

export const getPeriod = async ({
  workId,
}: {
  workId: string;
}): Promise<Period> => {
  try {
    const esquisses = await getSelectedEsquisses({ workId });

    if (esquisses.length === 0) {
      const now = new Date();
      return {
        startDate: now,
        endDate: now,
      };
    }

    const startDate = new Date(
      Math.min(...esquisses.map((esquisse) => esquisse.createdAt.getTime())),
    );
    const endDate = new Date(
      Math.max(...esquisses.map((esquisse) => esquisse.createdAt.getTime())),
    );

    return {
      startDate,
      endDate,
    };
  } catch (error) {
    console.error('Error fetching period:', error);
    throw new Error('Failed to fetch period');
  }
};
