export type ChallengeRankingData = {
  ranking: number;
  acquiredPoint: number;
  user: {
    id: number;
    nickname: string;
    profileImageUrl: string;
    tierInfo: {
      tier: string;
      totalExp: number;
      currentExp: number;
    };
  };
};
// ChallengeRankingData[]로 반환됨
