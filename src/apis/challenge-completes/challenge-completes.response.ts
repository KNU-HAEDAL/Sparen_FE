import ApiResponse from '../ApiResponse';

export type ChallengeData = {
  id: number;
  challengeGroupId: number;
  title: string;
  successDate: string;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER';
  reviewWritten: boolean;
};

export type ChallengeCompletes = {
  totalPage: number;
  hasNext: boolean;
  data: ChallengeData[];
};

export type ChallengeCompletesResponse = ApiResponse<ChallengeCompletes>;
