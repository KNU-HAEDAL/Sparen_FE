import { AxiosError } from 'axios';

import { axiosClient } from '../AxiosClient';

export async function getChallengeDetail(id: number) {
  try {
    const response = await axiosClient.get(`api/challengeGroups/${id}`);
    console.log('getChallengeDetail response: ', response.data);

    // status 따라 예외 처리 필요

    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `getChallengeDetail error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('getChallengeDetail error: unexpected');
    }
  }
}

export async function joinChallenge(id: number) {
  try {
    const response = await axiosClient.post(`api/challenges/${id}/join`);
    console.log('joinChallenge response: ', response.data);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        `joinChallenge error: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error('joinChallenge error: unexpected');
    }
  }
}
