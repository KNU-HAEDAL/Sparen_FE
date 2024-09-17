import { shortsResponse } from './getShorts.response';
import { axiosClient } from '@/apis/AxiosClient';
import { useQuery } from '@tanstack/react-query';

const getShortsPath = () => '/api/challengeGroups/shorts';

const ShortsQueryKey = [getShortsPath()];

const getShorts = async (): Promise<shortsResponse> => {
  const response = await axiosClient.get(getShortsPath());

  return response.data;
};

export const useGetShorts = () => {
  return useQuery<shortsResponse, Error>({
    queryKey: ShortsQueryKey,
    queryFn: getShorts,
  });
};
