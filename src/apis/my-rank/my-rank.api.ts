import { MyRankResponse } from './my-rank.response';
import { axiosClient } from '@/apis/AxiosClient';
import { useQuery } from '@tanstack/react-query';

const getMyRankPath = () => '/api/user/my-ranking';

const UserQueryKey = [getMyRankPath()];

const getMyRank = async (): Promise<MyRankResponse> => {
  const response = await axiosClient.get(getMyRankPath());
  return response.data;
};

export const useGetMyRank = () => {
  return useQuery<MyRankResponse, Error>({
    queryKey: UserQueryKey,
    queryFn: getMyRank,
  });
};
