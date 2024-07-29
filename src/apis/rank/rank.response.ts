import { UserData } from '@/interface/apis/user';

export interface PageData {
  totalPage: number;
  hasNext: boolean;
  data: UserData[];
}

export interface tierInfo {
  tier: string;
  totalExp: number;
  currentExp: number;
}

export interface UserRankingResponse {
  result: 'SUCCESS' | 'FAIL';
  data: {
    totalPage: number;
    hasNext: boolean;
    data: [
      {
        id: number;
        nickname: 'string';
        profileImageUrl: 'string';
        email: 'string';
        tierInfo: tierInfo;
      },
    ];
  };
  message: 'string';
  errorCode: 'string';
}
