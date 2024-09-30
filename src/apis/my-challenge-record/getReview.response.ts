import ApiResponse from '@/apis/ApiResponse';

export type ChallengeUser = {
  id: number;
  nickname: string;
  profileImageUrl: string;
  tierInfo: {
    tier: string;
    totalExp: number;
    currentExp: number;
  };
};

export type ChallengeData = {
  challengeId: number;
  challengeTitle: string;
  user: ChallengeUser;
  content: string;
  rating: number;
};

export type ChallengeResponseData = {
  totalPage: number;
  hasNext: boolean;
  data: ChallengeData[];
};

export type ChallengeResponse = ApiResponse<ChallengeResponseData>;
