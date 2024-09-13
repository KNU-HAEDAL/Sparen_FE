import { AxiosError } from 'axios';

import { axiosClient } from '../AxiosClient';
import { ChallengeRankingData } from './challenge.ranking.response';

type ChallengeRankingParams = {
  id: number;
  page: number;
  size: number;
};

export async function getChallengeRanking({
  id,
  page,
  size,
}: ChallengeRankingParams): Promise<ChallengeRankingData[]> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${id}/rankings?page=${page}&size=${size}`
    );
    // console.log('getChallengeRanking response: ', response.data);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `getChallengeRanking error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('getChallengeRanking error: unexpected');
    }
  }
}
