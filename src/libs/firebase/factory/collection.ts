import { FirestoreCollectionPath } from '@/types/firestore/FirestorePath.types';

import { create } from '../collection/create';
import { deleteDoc } from '../collection/delete';
import { exists } from '../collection/exists';
import { get } from '../collection/get';
import { list } from '../collection/list';
import { update } from '../collection/update';

type Repository<T> = {
  get: ({
    id,
    isWithoutId,
  }: Pick<Parameters<typeof get<T>>[0], 'id' | 'isWithoutId'>) => ReturnType<
    typeof get<T>
  >;
  list: (
    queryConstraints?: Parameters<typeof list<T>>[0]['queryConstraints'],
  ) => ReturnType<typeof list<T>>;
  create: (
    inputData: Omit<T, 'id' | 'createdAt'> & { id?: string },
  ) => ReturnType<typeof create<T>>;
  update: (
    id: string,
    { ...inputData }: Omit<Partial<T>, 'id'>,
  ) => ReturnType<typeof update<T>>;
  deleteDoc: ({
    id,
  }: Pick<Parameters<typeof deleteDoc>[0], 'id'>) => ReturnType<
    typeof deleteDoc
  >;
  exists: ({
    id,
  }: Pick<Parameters<typeof exists>[0], 'id'>) => ReturnType<typeof exists>;
};

type CreateRepositoryProps<T> = {
  path: FirestoreCollectionPath;
  parseT: (value: { [key: string]: any }) => T;
};

export const createRepository = <T>({
  path,
  parseT,
}: CreateRepositoryProps<T>): Repository<T> => ({
  get: ({ id, isWithoutId }) => get<T>({ path, id, parseT, isWithoutId }),
  list: (queryConstraints) => list<T>({ path, queryConstraints, parseT }),
  create: (inputData) => create<T>({ path, parseT, inputData }),
  update: (id, inputData) => update<T>({ path, id, ...inputData }),
  deleteDoc: ({ id }) => deleteDoc({ path, id }),
  exists: ({ id }) => exists({ path, id }),
});
