import { AxiosError } from 'axios';

import { axiosClient } from '../AxiosClient';
import type { GetChallengeRankingResponse } from './challenge.ranking.response';

type ChallengeRankingParams = {
  challengeGroupId: number;
  page: number;
  size: number;
};

export async function getChallengeRanking({
  challengeGroupId,
  page,
  size,
}: ChallengeRankingParams): Promise<GetChallengeRankingResponse> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${challengeGroupId}/rankings?page=${page}&size=${size}`
    );
    // console.log('getReview response: ', response.data); // 전체 응답 로그
    // console.log('getReview response data: ', response.data.data); // 실제 데이터 부분 확인
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
