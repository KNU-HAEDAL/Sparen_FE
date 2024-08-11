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

export type PostReviewData = number;

export type ChallengeAvgScoreData = {
  averageRating: number;
  ratingCount: {
    [key: string]: number;
  };
};
