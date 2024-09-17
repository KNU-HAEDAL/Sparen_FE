import ApiResponse from '@/apis/ApiResponse';

export type shortsData = {
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

export type shortsResponse = ApiResponse<shortsData>;
