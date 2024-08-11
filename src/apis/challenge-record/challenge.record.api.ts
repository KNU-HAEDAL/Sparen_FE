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
  id: number,
  image: File,
  content: string
): Promise<any> {
  const formData = new FormData();
  formData.append(
    'body',
    new Blob([JSON.stringify({ content })], { type: 'application/json' })
  );
  formData.append('image', image);

  const response = await multiPartClient.post<ChallengeVerificationData>(
    `api/challenges/${id}/verifications`,
    formData
  );
  console.log('postVerification response: ', response.data);
  return response.data;
}

// GET: /api/challenges/{challengeId}/record
export async function getChallengeRecord(
  id: number
): Promise<ChallengeRecordData> {
  const response = await axiosClient.get<ApiResponse<ChallengeRecordData>>(
    `api/challenges/${id}/record`
  );
  console.log('getChallengeRecord response: ', response.data);
  return response.data.data;
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
