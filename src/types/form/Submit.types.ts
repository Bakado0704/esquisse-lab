import { Esquisse } from '../firestore/esquisse.types';
import { Work } from '../firestore/work.types';

export type EsquisseSubmit = {
  esquisseObj: Esquisse;
  workObj: Work;
};

export type WorkSubmit = {
  workObj: Work;
};
