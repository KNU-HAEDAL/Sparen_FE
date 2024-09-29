import { ChallengeResponse } from './getReview.response';
import { axiosClient } from '@/apis/AxiosClient';
import { useQuery } from '@tanstack/react-query';

const getReviewPath = () => '/api/challengeGroups/reviews';

const ReviewQueryKey = [getReviewPath()];

const getReview = async (
  page: number,
  size: number
): Promise<ChallengeResponse> => {
  const response = await axiosClient.get(getReviewPath(), {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

export const useGetReview = (page: number, size: number) => {
  return useQuery<ChallengeResponse, Error>({
    queryKey: [ReviewQueryKey, page, size],
    queryFn: () => getReview(page, size),
  });
};
