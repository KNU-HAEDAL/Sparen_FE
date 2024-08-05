import { multiPartClient, axiosClient } from '../AxiosClient';

export async function postVerification(id, image, content) {
  const formData = new FormData();
  formData.append(
    'body',
    new Blob([JSON.stringify({ content })], { type: 'application/json' })
  );
  formData.append('image', new Blob([image], { type: 'image/**' }));

  try {
    const response = await multiPartClient.post(
      `api/challenges/${id}/verifications`,
      formData
    );
    console.log('postVerification response: ', response.data);
    return response.data.data;
  } catch {
    throw new Error('postVerification error');
  }
}

export async function getChallengeRecord(id) {
  try {
    const response = await axiosClient.get(`api/challenges/${id}/record`);
    console.log('getChallengeRecord response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getChallengeRecord error');
  }
}

export async function getChallengeRecordDetail(id) {
  try {
    const response = await axiosClient.get(`api/challenges/record/${id}`);
    console.log('getChallengeRecordDetail response: ', response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('getChallengeRecordDetail error: ');
  }
}

export async function getCompletesChallenge(page, size) {
  try {
    const response = await axiosClient.get(`/api/user/challenges/completes`, {
      params: { page, size },
    });
    console.log('getCompletesChallenge response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('getCompletesChallenge error: ');
  }
}
