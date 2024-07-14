import { UserData } from '@/interface/apis/user';

interface PageData {
  totalPage: number;
  hasNext: boolean;
  data: UserData[];
}

export interface UserRankingResponse {
  result: string;
  data: PageData[];
  message: string;
  errorCode: string;
}
