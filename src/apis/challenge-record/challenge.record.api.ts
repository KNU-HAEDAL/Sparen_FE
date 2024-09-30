import { AxiosError } from 'axios';

import { multiPartClient, axiosClient } from '../AxiosClient';
import {
  ApiResponse,
  ChallengeRecordData,
  ChallengeRecordDetailData,
  ChallengeVerificationData,
  CompleteChallengeData,
} from './challenge.record.response';

// POST: /api/challenges/{challengeId}/verification
export async function postVerification(
  challengeId: number,
  content: string,
  image: File
): Promise<void> {
  const requestBody = new FormData();
  requestBody.append(
    'body',
    new Blob([JSON.stringify({ content })], { type: 'application/json' })
  );
  requestBody.append('image', image);

  const response = await multiPartClient.post<ChallengeVerificationData>(
    `api/challenges/${challengeId}/verification`,
    requestBody
  );
  console.log('postVerification response: ', response.data); // test
}

export async function getChallengeRecord(
  challengeId: number
): Promise<ChallengeRecordData> {
  try {
    const response = await axiosClient.get(
      `api/challenges/${challengeId}/record`
    );
    // console.log('getChallengeRecord response: ', response.data); // test
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `getChallengeRecord error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('getChallengeRecord error: unexpected');
    }
  }
}

// GET: /api/challenges/record/{recordId}
export async function getChallengeRecordDetailorigin(
  id: number
): Promise<ChallengeRecordDetailData> {
  const response = await axiosClient.get<
    ApiResponse<ChallengeRecordDetailData>
  >(`api/challenges/record/${id}`);
  console.log('getChallengeRecordDetail response: ', response.data);
  return response.data.data;
}

export async function getChallengeRecordDetail(
  recordId: number
): Promise<ChallengeRecordDetailData> {
  const response = await axiosClient.get(`api/challenges/record/${recordId}`);
  return response.data;
}

// GET: /api/user/challenges/completes
export async function getCompletesChallenge(
  page: number,
  size: number
): Promise<CompleteChallengeData> {
  try {
    const response = await axiosClient.get<ApiResponse<CompleteChallengeData>>(
      `/api/user/challenges/completes`,
      {
        params: { page, size },
      }
    );
    console.log('getCompletesChallenge response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getCompletesChallenge error: ');
  }
}
