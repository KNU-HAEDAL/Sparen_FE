import { shortsResponse } from './getShorts.response';
import { axiosClient } from '@/apis/AxiosClient';
import { useQuery } from '@tanstack/react-query';

const getShortsPath = () => '/api/challengeGroups/shorts';

const ShortsQueryKey = [getShortsPath()];

const getShorts = async (
  page: number,
  size: number
): Promise<shortsResponse> => {
  const response = await axiosClient.get(getShortsPath(), {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

export const useGetShorts = (page: number, size: number) => {
  return useQuery<shortsResponse, Error>({
    queryKey: [ShortsQueryKey, page, size],
    queryFn: () => getShorts(page, size),
  });
};
