import { RefreshTokenResponse, UserResponseData } from './auth.response';
import { axiosClient } from '@/apis/AxiosClient';
import { BASE_URL } from '@/constants/URI';
import { useMutation } from '@tanstack/react-query';

type UserRequestData = {
  email: string;
  password: string;
};

interface RegisterParams extends UserRequestData {
  nickname: string;
}

export const getLoginPath = () => `${BASE_URL}/api/auth/login`;

export const loginUser = async (userData: UserRequestData) => {
  const response = await axiosClient.post(getLoginPath(), userData);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (userData: UserRequestData) => loginUser(userData),
  });
};

/**
 * provider에 소셜 플랫폼을 추가하여 소셜 로그인 기능 구현
 */
// export async function login(provider, code, state) {
// const resp = await axiosClient.post(
//   '/api/auth/oauth2',
//   provider,
//   code,
//   state
// );
// return resp.data;
// }

/**
 * email, password, nickname을 받아 회원가입 요청
 */
export async function setRegister({
  email,
  password,
  nickname,
}: RegisterParams): Promise<UserResponseData> {
  try {
    const response = await axiosClient.post('/api/auth/signup', {
      email,
      password,
      nickname,
    });
    console.log(response.data);
    return response.data;
  } catch {
    throw new Error('register error');
  }
}

export async function postRefreshToken(): Promise<RefreshTokenResponse> {
  const response = await axiosClient.post(`${BASE_URL}/api/auth/refresh`);
  console.log('postRefreshToken response: ', response.data);
  return response.data;
}
