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
