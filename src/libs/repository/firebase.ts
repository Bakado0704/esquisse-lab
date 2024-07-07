import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { parseChat } from '@/types/firestore/chat.types';
import { parseEquisse } from '@/types/firestore/esquisse.types';
import { parseTag } from '@/types/firestore/tag.types';
import { parseUser } from '@/types/firestore/user.types';
import { parseWork } from '@/types/firestore/work.types';

import { createRepository as createCollectionRepository } from '../firebase/factory/collection';

export const chatRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.CHAT,
  parseT: parseChat,
});

export const esquisseRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.ESQUISSE,
  parseT: parseEquisse,
});

export const tagRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.TAG,
  parseT: parseTag,
});

export const userRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.USER,
  parseT: parseUser,
});

export const workRepository = createCollectionRepository({
  path: FIRESTORE_COLLECTION_NAME.WORK,
  parseT: parseWork,
});
