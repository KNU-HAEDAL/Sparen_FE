type Challenge = {
  id: number;
  participantCount: number;
  difficulty: number;
  onceExp: number;
  successExp: number;
  dayType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  dayCount: number;
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
