import { AxiosError } from 'axios';

import { axiosClient } from '../AxiosClient';
import type {
  GetReviewResponse,
  ChallengeAvgScoreData,
} from './review.response';

type GetReviewParams = {
  challengeGroupId: number;
  page: number;
  size: number;
};

export async function getReview({
  challengeGroupId,
  page,
  size,
}: GetReviewParams): Promise<GetReviewResponse> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${challengeGroupId}/reviews?page=${page}&size=${size}`
    );
    // console.log('getReview response: ', response.data); // 전체 응답 로그
    // console.log('getReview response data: ', response.data.data); // 실제 데이터 부분 확인
    return response.data.data;
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

type ChallengeAvgScoreParams = {
  challengeGroupId: number;
};

export async function getChallegeAvgScore({
  challengeGroupId,
}: ChallengeAvgScoreParams): Promise<ChallengeAvgScoreData> {
  try {
    const response = await axiosClient.get(
      `api/challengeGroups/${challengeGroupId}/reviews/score`
    );
    // console.log('getChallegeAvgScore response: ', response.data);

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

type PostReviewParams = {
  challengeId: number;
  content: string;
  rating: number;
  difficulty: number | undefined;
  achievement: number | undefined;
};

export async function postReview({
  challengeId,
  content,
  rating,
  difficulty,
  achievement,
}: PostReviewParams): Promise<void> {
  const requestBody = { content, rating, difficulty, achievement };

  try {
    const response = await axiosClient.post(
      `/api/challenges/${challengeId}/reviews`,
      requestBody
    );
    console.log('postReview response: ', response.data);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data;
    }
    // AxiosError가 아닌 경우 일반적인 예외 처리
    throw new Error('postReview error: unexpected');
  }
}
