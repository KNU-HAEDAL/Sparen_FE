import ApiResponse from '../ApiResponse';

export type MyRankData = {
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  tierInfo: {
    tier: string;
    totalExp: number;
    currentExp: number;
  };
  role: 'USER' | 'ADMIN';
  rank: number;
};

export type MyRankResponse = ApiResponse<MyRankData>;
