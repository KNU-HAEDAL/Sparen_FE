import { Data } from '@/interface/apis/tier';
import { UserData } from '@/interface/apis/user';

export interface UserInfoResponse {
  result: string;
  data: {
    nickname: string;
    totalPage: number;
    hasNext: boolean;
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
