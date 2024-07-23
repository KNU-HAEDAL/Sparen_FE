import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { axiosClient } from '../AxiosClient';
import { AuthResponse } from './auth.response';
import { BASE_URL } from '@/constants/URI';
import { authLocalStorage } from '@/utils/storage';

interface loginParams {
  email: string;
  password: string;
}

interface RegisterParams extends loginParams {
  nickname: string;
}

const AuthApi = (code: string | null) => {
  const navigate = useNavigate();

  // 인가코드 받아서 토큰 요청
  useEffect(() => {
    if (code) {
      axios
        .get(`${BASE_URL}/oauth2?code=${code}`, {
          withCredentials: true,
        })
        .then((res) => {
          const accessToken = res.headers.authorization;
          console.log(accessToken);

          // 로컬 스토리지에 토큰 저장
          localStorage.setItem('accessToken', accessToken);

          navigate('/');
        })
        .catch((error) => {
          console.error('Error during OAuth2 redirect:', error);
          // logOut();
        });
    }
  }, [code, navigate]);
};

export default AuthApi;
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
}: RegisterParams): Promise<AuthResponse> {
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

/**
 * email, password를 받아 로그인 요청
 */
export async function setLogin({
  email,
  password,
}: loginParams): Promise<AuthResponse> {
  const response = await axiosClient.post('/api/auth/login', {
    email,
    password,
  });
  const { accessToken } = response.data.data;
  authLocalStorage.set(accessToken);
  return response.data;
}
