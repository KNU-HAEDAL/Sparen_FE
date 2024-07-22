import { axiosClient } from '@/apis/AxiosClient';

type params = {
  page: number;
  size: number;
  category: string;
};

// 카테고리 버튼 눌렀을때 -> 해당 페이지 호출
export async function getChallengeList({ page, size, category }: params) {
  try {
    const response = await axiosClient.get(`/api/challengeGroups`, {
      params: { page, size, category },
    });
    console.log('getChallengeList response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getChallengeList error: ');
  }
}
