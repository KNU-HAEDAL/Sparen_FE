export interface TierInfo {
  tier: string;
  totalExp: number;
  currentExp: number;
}

interface DayCount {
  date: string;
  count: number;
}

export interface Data {
  dayCounts: DayCount[];
}
