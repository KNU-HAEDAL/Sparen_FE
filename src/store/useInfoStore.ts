import { create } from 'zustand';

export interface InfoState {
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  userEmail: string;
  userTier: string;
  userTotalExp: number;
  userCurrentExp: number;
  updateNickname: string;
}

export interface InfoAction extends InfoState {
  setUserId: (userId: number) => void;
  setUserNickname: (userNickname: string) => void;
  setUserProfileImageUrl: (userProfileImageUrl: string) => void;
  setUserEmail: (userEmail: string) => void;
  setUserTier: (userTier: string) => void;
  setUserTotalExp: (userTotalExp: number) => void;
  setUserCurrentExp: (userCurrentExp: number) => void;
  setUpdateNickname: (updateNickname: string) => void;
}

export const useInfoStore = create<InfoState & InfoAction>((set) => ({
  userId: 0,
  userNickname: 'nickname',
  userProfileImageUrl: '',
  userEmail: '',
  userTier: '',
  userTotalExp: 0,
  userCurrentExp: 0,
  updateNickname: '',

  setUserId: (userId) => set({ userId }),
  setUserNickname: (userNickname) => set({ userNickname }),
  setUserProfileImageUrl: (userProfileImageUrl) => set({ userProfileImageUrl }),
  setUserEmail: (userEmail) => set({ userEmail }),
  //   setTierInfo: (tierInfo) => set({ tierInfo }),
  setUpdateNickname: async (updateNickname) => set({ updateNickname }),
  setUserTier: (userTier) => set({ userTier }),
  setUserTotalExp: (userTotalExp) => set({ userTotalExp }),
  setUserCurrentExp: (userCurrentExp) => set({ userCurrentExp }),
}));
