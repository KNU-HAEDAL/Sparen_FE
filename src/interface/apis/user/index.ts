import { TierInfo } from '../tier';

export interface UserData {
  currentExp: any;
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  tierInfo: TierInfo;
}

export interface User {
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  tierInfo: string;
  currentExp: number;
}
