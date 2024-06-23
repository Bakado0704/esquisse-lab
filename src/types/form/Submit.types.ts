import { Esquisse } from '../firestore/esquisse.types';
import { Work } from '../firestore/work.types';

export type Submit = {
  esquisseObj: Esquisse;
  workObj: Work;
};
