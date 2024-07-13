import { TierInfo } from '../tier';

export interface UserData {
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  tierInfo: TierInfo;
}
