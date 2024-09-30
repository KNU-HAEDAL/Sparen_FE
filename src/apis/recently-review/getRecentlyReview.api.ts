import { RecentlyReviewResponse } from './getRecentlyReview.response';
import { axiosClient } from '@/apis/AxiosClient';
import { useQuery } from '@tanstack/react-query';

const getRecentlyReviewPath = () => '/api/challengeGroups/shorts';

const recentlyReviewQueryKey = [getRecentlyReviewPath()];

const getRecentlyReview = async (
  page: number,
  size: number
): Promise<RecentlyReviewResponse> => {
  const response = await axiosClient.get(getRecentlyReviewPath(), {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

export const useGetRecentlyReview = (page: number, size: number) => {
  return useQuery<RecentlyReviewResponse, Error>({
    queryKey: [recentlyReviewQueryKey, page, size],
    queryFn: () => getRecentlyReview(page, size),
  });
};
