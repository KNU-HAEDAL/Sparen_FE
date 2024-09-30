import ApiResponse from '@/apis/ApiResponse';

export type RecentlyReviewResponse = {
  totalPage: number;
  hasNext: boolean;
  data: {
    challengeId: number;
    challengeTitle: string;
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
    content: string;
    rating: number;
  }[];
};

export type ChallengeListResponse = ApiResponse<RecentlyReviewResponse>;
