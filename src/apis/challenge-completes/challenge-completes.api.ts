import { axiosClient } from '../AxiosClient';
import { ChallengeCompletesResponse } from './challenge-completes.response';
import { useQuery } from '@tanstack/react-query';

export const challengeCompletesPath = () => '/api/user/challenges/completes';

export const ChallengeCompletesQueryKey = [challengeCompletesPath()];

export const getChallengeCompletes = async (
  page: number,
  size: number
): Promise<ChallengeCompletesResponse> => {
  const response = await axiosClient.get(challengeCompletesPath(), {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

export const useGetChallengeCompletes = (page: number, size: number) => {
  return useQuery<ChallengeCompletesResponse, Error>({
    queryKey: [ChallengeCompletesQueryKey, page, size],
    queryFn: () => getChallengeCompletes(page, size),
  });
};
