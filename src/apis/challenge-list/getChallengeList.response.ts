import ApiResponse from '@/apis/ApiResponse';

export type ChallengeListData = {
  totalPage: number;
  hasNext: boolean;
  data: {
    id: number;
    title: string;
    content: string;
    participantCount: number;
    startDate: string;
    endDate: string;
    category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC';
  }[];
};

export type ChallengeListResponse = ApiResponse<ChallengeListData>;
