export type ApiResponse<T> = {
  result: string;
  data: T;
  message: string;
  errorCode: string;
};

export type ChallengeRecordData = {
  title: string;
  totalCount: number;
  successCount: number;
  startDate: string;
  endDate: string;
  recordIds: number[];
};

export type ChallengeRecordDetailData = {
  result: string;
  data: {
    id: 0;
    createdAt: string;
    content: string;
    imageUrl: string;
  };
  message: string;
  errorCode: string;
};

export type CompleteChallengeData = {
  totalPage: number;
  hasNext: boolean;
  data: CompleteChallengeItem[];
};

export type CompleteChallengeItem = {
  id: number;
  title: string;
  successDate: string;
  category: string;
  reviewWritten: boolean;
};

export type ChallengeVerificationData = {
  body: {
    contents: string;
  };
  image: string;
};
