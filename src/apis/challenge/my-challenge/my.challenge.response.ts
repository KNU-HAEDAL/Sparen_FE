import { ChallengeData } from '@/interface/apis/challenge';

export interface PageData {
  totalPage: number;
  hasNext: boolean;
  data: ChallengeData[];
}

export interface MyChallengeResponse {
  result: string;
  data: PageData;
  message: string;
  errorCode: string;
}
