import {
  QueryConstraint,
  WhereFilterOp,
  collection,
  limit as firestoreLimit,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from '../app';
import { timestampToDate } from '../timestampToDate';

type Props<T> = {
  path: string;
  parseT: (value: { [key: string]: unknown }) => T;
  options?: Options;
};

export type Options = {
  limit?: number;
  queryConstraints?: QueryConstraint[];
  lastVisibleId?: string;
  deletedShown?: boolean;
};

export const list = async <T>({
  path,
  parseT,
  options,
}: Props<T>): Promise<T[]> => {
  // 100件以上のデータを取得する場合は、limitを変更
  const { limit, queryConstraints = [] } = options || {};
  const collectionRef = collection(db, path);
  const assembledQueryConstraints = queryConstraints;
  if (limit) assembledQueryConstraints.push(firestoreLimit(limit));
  const q = query(collectionRef, ...assembledQueryConstraints);
  const { docs } = await getDocs(q);
  const data: T[] = [];
  docs.forEach((queryDocumentSnapshot) => {
    const datum = {
      id: queryDocumentSnapshot.id,
      ...timestampToDate(queryDocumentSnapshot.data()),
    };
    try {
      data.push(parseT(datum));
    } catch (error) {
      console.log(`Document: ${path}/${datum.id}`);
      console.error(error);
    }
  });
  return data;
};

export const safeWhere = <T, K extends keyof T>(
  fieldPath: K extends string ? K : never,
  opStr: WhereFilterOp,
  value: T[K] | T[K][],
) => where(fieldPath, opStr, value);
