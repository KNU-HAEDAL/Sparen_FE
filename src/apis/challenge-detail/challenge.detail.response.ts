export type Challenge = {
  id: number;
  difficulty: number;
  onceExp: number;
  successExp: number;
  count: number;
  period: number;
};

export type ChallengeDetailData = {
  id: number;
  title: string;
  content: string;
  participantCount: number;
  startDate: string;
  endDate: string;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC';
  guide: string;
  maxDifficulty: number;
  imageUrls: string[];
  challenges: Challenge[];
};
