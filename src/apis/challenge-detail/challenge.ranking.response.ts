export type UserData = {
  id: number;
  nickname: string;
  profileImageUrl: string;
  tierInfo: {
    tier: string;
    totalExp: number;
    currentExp: number;
  };
};

export type ChallengeRankingData = {
  ranking: number;
  acquiredPoint: number;
  user: UserData;
};
// ChallengeRankingData[]로 반환됨

export const DummyRankingList: ChallengeRankingData[] = [
  {
    ranking: 1,
    acquiredPoint: 800,
    user: {
      id: 0,
      nickname: '뽀로로가 뽀롱뽀롱 노는 게 젤 좋아',
      profileImageUrl: 'string',
      tierInfo: {
        tier: '양반IV',
        totalExp: 0,
        currentExp: 0,
      },
    },
  },
  {
    ranking: 2,
    acquiredPoint: 800,
    user: {
      id: 0,
      nickname: '하츄핑',
      profileImageUrl: 'string',
      tierInfo: {
        tier: '평민I',
        totalExp: 0,
        currentExp: 0,
      },
    },
  },
  {
    ranking: 3,
    acquiredPoint: 800,
    user: {
      id: 0,
      nickname: '파산핑',
      profileImageUrl: 'string',
      tierInfo: {
        tier: '상민II',
        totalExp: 0,
        currentExp: 0,
      },
    },
  },
  {
    ranking: 4,
    acquiredPoint: 800,
    user: {
      id: 0,
      nickname: '유재석',
      profileImageUrl: 'string',
      tierInfo: {
        tier: '상민III',
        totalExp: 0,
        currentExp: 0,
      },
    },
  },
  {
    ranking: 5,
    acquiredPoint: 800,
    user: {
      id: 0,
      nickname: '조셉',
      profileImageUrl: 'string',
      tierInfo: {
        tier: '노비IV',
        totalExp: 0,
        currentExp: 0,
      },
    },
  },
];

export type GetChallengeRankingResponse = {
  totalPage: number;
  hasNext?: boolean;
  myRanking?: {
    ranking: number;
    acquiredPoint: number;
    user: UserData;
  };
  data: ChallengeRankingData[];
};
