import { Chat } from '../firestore/chat.types';
import { Esquisse } from '../firestore/esquisse.types';
import { User } from '../firestore/user.types';
import { Work } from '../firestore/work.types';

export type EsquisseSubmit = {
  esquisseObj: Esquisse;
  workObj: Work;
};

export type WorkSubmit = {
  workObj: Work;
};

export type UserSubmit = {
  userObj: User;
};

export type ChatSubmit = {
  chatObj: Chat;
};
