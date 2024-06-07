import { create } from 'zustand';

export const useUserInfoStore = create((set) => ({
  userId: 0,
  userNickname: '',
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
