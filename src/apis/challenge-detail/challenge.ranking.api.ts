import { AxiosError } from 'axios';

import { axiosClient } from '../AxiosClient';
import { ChallengeRankingData } from './challenge.ranking.response';

type ChallengeRankingParams = {
  id: number;
  page: number;
};

export async function getChallengeRanking({
  id,
  page,
}: ChallengeRankingParams): Promise<ChallengeRankingData[]> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${id}/rankings?page=${page}&size=4`
    );
    console.log('getChallengeRanking response: ', response.data);
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
