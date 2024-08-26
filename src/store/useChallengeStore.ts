import { create } from 'zustand';

export type challengeState = {
  challengeTitle?: string;
};

export type challengeAction = {
  setChallengeTitle: (title: string) => void;
};

// challenge 관련 store
export const useChallengeStore = create<challengeState & challengeAction>(
  (set) => ({
    challengeTitle: '',

    setChallengeTitle: (challengeTitle) => set({ challengeTitle }),
  })
);
