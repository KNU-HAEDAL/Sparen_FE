import { TierInfo } from './../../interface/apis/tier/index';

export type User = {
  id: number;
  nickname: string;
  profileImageUrl: string;
  tierInfo: TierInfo;
};

export type ReviewData = {
  challengeId: number;
  challengeTitle: string;
  challengeDifficulty: number;
  user: User;
  content: string;
  rating: number;
};

export type GetReviewResponse = {
  totalPage: number;
  hasNext: boolean;
  data: ReviewData[];
};

//

export type RatingCount = { [key: string | number]: number };

export type ChallengeAvgScoreData = {
  averageRating: number;
  ratingCount: RatingCount;
};

//

export type PostReviewData = number;
