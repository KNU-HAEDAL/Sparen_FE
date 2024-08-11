import { AxiosError } from 'axios';

import { axiosClient } from '../AxiosClient';
import type {
  GetReviewResponse,
  PostReviewData,
  ChallengeAvgScoreData,
} from './review.response';

type GetReviewParams = {
  challengeGroupId: number;
  page: number;
  size: number;
};

type PostReviewParams = {
  challengeId: number;
  content: string;
  rating: number;
};

type ChallengeAvgScoreParams = {
  challengeGroupId: number;
};

export async function getReview({
  challengeGroupId,
  page,
  size = 5,
}: GetReviewParams): Promise<GetReviewResponse> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${challengeGroupId}/reviews`,
      {
        params: { page, size },
      }
    );
    console.log('getReview response: ', response.data);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `getReview error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('getReview error: unexpected');
    }
  }
}

export async function postReview({
  challengeId,
  content,
  rating,
}: PostReviewParams): Promise<PostReviewData> {
  const body = { content, rating };
  console.log('json : ', JSON.stringify(body));
  try {
    const response = await axiosClient.post(
      `api/challenges/${challengeId}/reviews`,
      JSON.stringify(body)
    );
    console.log('postReview response: ', response.data);

    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `postReview error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('postReview error: unexpected');
    }
  }
}

export async function getChallegeAvgScore({
  challengeGroupId,
}: ChallengeAvgScoreParams): Promise<ChallengeAvgScoreData> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${challengeGroupId}/reviews/score`
    );
    console.log('getChallegeAvgScore response: ', response.data);

    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `getChallegeAvgScore error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('getChallegeAvgScore error: unexpected');
    }
  }
}
