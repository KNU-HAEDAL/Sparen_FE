import { UserData } from '@/interface/apis/user';

export interface UserRankingResponse {
  result: string;
  data: {
    totalPage: number;
    hasNext: boolean;
    data: UserData[];
  };
  message: string;
  errorCode: string;
}
