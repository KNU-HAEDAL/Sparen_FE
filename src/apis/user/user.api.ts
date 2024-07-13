// import { axiosClient } from '../AxiosClient';
import { axiosClient } from '../AxiosClient';
import {
  FixUserInfoResponse,
  UserStrickResponse,
  UserInfoResponse,
} from './user.response';

export async function getUserInfo(): Promise<UserInfoResponse> {
  try {
    const response = await axiosClient.get('/api/user');
    console.log('getUserInfo response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('유저 정보를 불러오는데 실패했습니다.');
  }
}

export async function fixUserInfo(
  nickname: string
): Promise<FixUserInfoResponse> {
  try {
    const response = await axiosClient.put('/api/user', {
      nickname,
    });
    console.log('fixUserInfo response:', response.data);
    return response.data;
  } catch (error) {
    console.error('FixUserInfo error:', error);
    throw new Error('Failed to update user info');
  }
}

export async function getUserRankings(
  page: number,
  size: number
): Promise<UserInfoResponse> {
  try {
    const response = await axiosClient.get('api/user/ranking', {
      params: { page, size },
    });
    console.log('getUserRank response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('유저 랭킹을 불러오는데 실패했습니다.');
  }
}

export async function getUserStrick(
  startDate: string,
  endDate: string
): Promise<UserStrickResponse> {
  try {
    const response = await axiosClient.get('api/user/strick', {
      params: { startDate, endDate },
    });
    console.log('getUserStrick response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('유저 스트릭을 불러오는데 실패했습니다.');
  }
}
