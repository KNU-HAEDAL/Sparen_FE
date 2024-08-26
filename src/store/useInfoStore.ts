import { create } from 'zustand';

import { UserData } from '@/interface/apis/user';

export interface UserInfo {
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  tierInfo: {
    tier: string;
    totalExp: number;
    currentExp: number;
  };
}

export interface InfoState {
  userInfo: UserInfo | null;
}

export interface InfoAction extends InfoState {
  setUserInfo: (userInfo: {
    nickname: string;
    totalPage: number;
    hasNext: boolean;
    data: UserData[];
  }) => void;
}

export const useInfoStore = create<InfoState & InfoAction>((set) => ({
  userInfo: null,

  setUserInfo: (userInfo) => set({ userInfo }),
}));
