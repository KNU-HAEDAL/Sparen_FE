import { ChallengeListResponse } from './getChallengeList.response';
import { axiosClient } from '@/apis/AxiosClient';
import { useQuery } from '@tanstack/react-query';

const getChallengeListPath = () => '/api/challengeGroups/shorts';

const challengeListQueryKey = [getChallengeListPath()];

const getChallengeList = async (
  page: number,
  size: number
): Promise<ChallengeListResponse> => {
  const response = await axiosClient.get(getChallengeListPath(), {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

export const useGetChallengeList = (page: number, size: number) => {
  return useQuery<ChallengeListResponse, Error>({
    queryKey: [challengeListQueryKey, page, size],
    queryFn: () => getChallengeList(page, size),
  });
};
