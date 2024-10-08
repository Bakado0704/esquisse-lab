import { getSelectedEsquisses } from '@/libs/repository/individual/esquisse';
import { getWork } from '@/libs/repository/individual/work';
import { getTopImage } from '@/libs/service/topImage';
import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/application/work.types';

export type WorkData = { imgUrl: string; work: Work; esquisses: Esquisse[] };

export const FetchWorkData = async ({
  workId,
}: {
  workId: string;
}): Promise<WorkData> => {
  const imgUrl = await getTopImage({ workId });
  const work = await getWork({ workId });
  const esquisses = await getSelectedEsquisses({ workId });

  return { imgUrl, work, esquisses };
};
