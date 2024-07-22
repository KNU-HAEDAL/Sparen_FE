import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { BASE_URI } from '@/constants/URL.ts';

const AuthApi = (code: string | null) => {
  const navigate = useNavigate();

  // 인가코드 받아서 토큰 요청
  useEffect(() => {
    if (code) {
      axios
        .get(`${BASE_URI}/oauth2?code=${code}`, {
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
