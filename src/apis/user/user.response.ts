import { Data } from '@/interface/apis/tier';
import { UserData } from '@/interface/apis/user';

export interface UserInfoResponse {
  result: string;
  data: {
    tierInfo: { tier: string; totalExp: number; currentExp: number };
    id: number;
    nickname: string;
    totalPage: number;
    hasNext: boolean;
    profileImageUrl: string;
    email: string;
    data: UserData[];
  };
  message: string;
  errorCode: string;
}

export interface FixUserInfoResponse {
  nickname: string;
}

export interface UserStrickResponse {
  result: string;
  data: Data[];
  message: string;
  errorCode: string;
}
