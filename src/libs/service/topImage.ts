import { getSelectedEsquisses } from './firestore/esquisse';

export const getTopImage = async ({
  workId,
}: {
  workId: string;
}): Promise<string> => {
  const selectedEsquisses = await getSelectedEsquisses({ workId });

  const sortedEsquisses = selectedEsquisses.sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  });
  const topImage = sortedEsquisses[0]?.topImage || '';

  return topImage;
};
