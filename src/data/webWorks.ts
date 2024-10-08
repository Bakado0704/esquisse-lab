import daiwaEsgFundImg from '@/assets/portfolio/daiwaEsgFund.png';
import daiwaSustainabilityImg from '@/assets/portfolio/daiwaSustainability.png';
import gameImg from '@/assets/portfolio/game.png';
import ipadmateImg from '@/assets/portfolio/ipadmate.png';
import ipadmateKidImg from '@/assets/portfolio/ipadmateKids.png';
import labImg from '@/assets/portfolio/lab.png';
import mizunoteImg from '@/assets/portfolio/mizunote.png';
import esquisseLabImg from '@/assets/portfolio/portfolio.png';
import rakutenImg from '@/assets/portfolio/rakuten.png';
import teachMeBizImg from '@/assets/portfolio/studist.webp';
import tekkonImg from '@/assets/portfolio/tekkon.png';
import ticketDiveImg from '@/assets/portfolio/ticketDive.png';
import { Web } from '@/types/application/web.types';

const iconImageUrl =
  'https://firebasestorage.googleapis.com/v0/b/esquisse-lab.appspot.com/o/778614_1720249622419.jpeg?alt=media&token=2badb7d6-c73e-4717-88b3-6420ae5e6123';

export const webWorks: Web[] = [
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(aliz株式会社)',
    startDate: new Date('2022-07-01T00:00:00Z'),
    endDate: new Date('2022-08-01T00:00:00Z'),
    workId: 'web1',
    subject: 'tekkon',
    link: 'https://tekkon.com/',
    description: 'tekkonの実装を行いました。',
    imageUrl: tekkonImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(aliz株式会社)',
    startDate: new Date('2022-08-01T00:00:00Z'),
    endDate: new Date('2022-09-01T00:00:00Z'),
    workId: 'web2',
    subject: '大和ESGファンド',
    link: 'https://www.daiwa-am.co.jp/esg/',
    description: '大和ESGファンドの実装を行いました。',
    imageUrl: daiwaEsgFundImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(aliz株式会社)',
    startDate: new Date('2022-09-01T00:00:00Z'),
    endDate: new Date('2022-10-01T00:00:00Z'),
    workId: 'web3',
    subject: '大和サステイナビリティ',
    link: 'https://www.daiwa-am.co.jp/company/sustainability',
    description: '大和サステイナビリティの実装を行いました。',
    imageUrl: daiwaSustainabilityImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(aliz株式会社)',
    startDate: new Date('2022-10-01T00:00:00Z'),
    endDate: new Date('2022-11-01T00:00:00Z'),
    workId: 'web4',
    subject: 'mizunote',
    link: 'https://mizunote.earth/',
    description: 'mizunoteの実装を行いました。',
    imageUrl: mizunoteImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: '個人制作',
    startDate: new Date('2022-10-01T00:00:00Z'),
    endDate: new Date('2023-03-01T00:00:00Z'),
    workId: 'web5',
    subject: 'タップゲーム',
    link: 'https://github.com/Bakado0704/factoryGame',
    description: 'ReactNativeを使って、スマホゲームを作りました。',
    imageUrl: gameImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(aliz株式会社)',
    startDate: new Date('2023-01-01T00:00:00Z'),
    endDate: new Date('2023-02-01T00:00:00Z'),
    workId: 'web6',
    subject: 'ipadmate',
    link: 'https://nft.ipadmate.jp/',
    description: 'ipadmateの実装を行いました。',
    imageUrl: ipadmateImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(aliz株式会社)',
    startDate: new Date('2023-02-01T00:00:00Z'),
    endDate: new Date('2023-03-01T00:00:00Z'),
    workId: 'web7',
    subject: 'ipadmateKids',
    link: 'https://kids.ipadmate.jp/',
    description: 'ipadmateKidsの実装を行いました。',
    imageUrl: ipadmateKidImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(株式会社レターファン)',
    startDate: new Date('2023-10-01T00:00:00Z'),
    endDate: new Date(),
    workId: 'web8',
    subject: 'TicketDive',
    link: 'https://ticketdive.com/',
    description: 'ticketDiveの実装を行いました。',
    imageUrl: ticketDiveImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: '個人制作',
    startDate: new Date('2024-03-01T00:00:00Z'),
    endDate: new Date(),
    workId: 'web9',
    subject: 'EsquisseLab',
    link: 'https://esquisse-lab.vercel.app',
    description: 'EsquisseLabの実装を行いました。',
    imageUrl: esquisseLabImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: '個人制作',
    startDate: new Date('2024-10-01T00:00:00Z'),
    endDate: new Date(),
    workId: 'web10',
    subject: '建築環境学研究室HP',
    link: 'https://sites.google.com/eis.hokudai.ac.jp/kankyou6/home',
    description: '北大建築環境学研究室のホームページの実装を行いました。',
    imageUrl: labImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(楽天グループ)',
    startDate: new Date('2024-08-05T00:00:00Z'),
    endDate: new Date('2024-08-09T00:00:00Z'),
    workId: 'web11',
    subject: '避難所評価アプリ',
    link: 'https://evac-deploy-v01d42s-projects.vercel.app/',
    description:
      'テーマは「日本の防災・減災を推進するため、楽天のサービスを活用した革新的なソリューションを開発する」というもので、「楽天のAPIを使用する」という制約がありました。この制約により、議論は難航しましたが、最終的に「自治体向けに避難所の物資在庫を管理・点数化し、その評価を地図上で市民に公開することで防災意識を高める、避難所評価アプリ」を開発することになりました。',
    imageUrl: rakutenImg,
    iconImageUrl,
  },
  {
    userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
    type: 'インターン(株式会社スタディスト)',
    startDate: new Date('2024-09-01T00:00:00Z'),
    endDate: new Date(),
    workId: 'web12',
    subject: 'TeachMeBiz',
    link: 'https://biz.teachme.jp/',
    description: 'TeachMeBizの実装を行いました。',
    imageUrl: teachMeBizImg,
    iconImageUrl,
  },
];
