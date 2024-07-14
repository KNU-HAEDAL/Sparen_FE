import { axiosClient } from '../AxiosClient';
import { UserRankingResponse } from './rank.response';

export async function getUserRanking(
  page: number,
  size: number
): Promise<UserRankingResponse> {
  try {
    const response = await axiosClient.get('/api/users/ranking', {
      params: { page, size },
    });
    console.log('getUserRanking response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('유저 랭킹을 불러오는데 실패했습니다.');
  }
}
