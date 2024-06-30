import { getEsquisses } from './getEsquisse';

type Period = {
  startDate: Date;
  endDate: Date;
};

export const getPeriod = ({ workId }: { workId: string }): Period => {
  const esquisses = getEsquisses().filter((esquisse) => esquisse.id === workId);

  if (esquisses.length === 0) {
    return {
      startDate: new Date(),
      endDate: new Date(),
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
};
