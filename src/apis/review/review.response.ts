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

export const DummyReviewData: ReviewData[] = [
  {
    challengeId: 1,
    challengeTitle: '쓰레기 줍기 챌린지',
    challengeDifficulty: 0,
    user: {
      id: 2000,
      nickname: '뽀롱뽀롱 뽀로로 노는 게 젤 좋아',
      profileImageUrl: 'string',
      tierInfo: {
        tier: '노비 III',
        totalExp: 0,
        currentExp: 0,
      },
    },
    content:
      '매일 매일 꾸준히 했더니 습관이 형성되었어요. 습관도 만들고 포인트도 얻고 좋아요 굿',
    rating: 4,
  },
];

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
