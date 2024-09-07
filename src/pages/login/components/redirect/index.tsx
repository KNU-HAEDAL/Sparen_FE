// import { BASE_URL } from '@/constants/URI';
import { useEffect } from 'react';

import { UserResponseData } from '@/apis/auth/auth.response';
import { SocialLoginQuery } from '@/apis/auth/social-login.api';

const RedirectPage = () => {
  // const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleSuccess = (data: UserResponseData) => {
    const accessToken = data.data.accessToken;
    const refreshToken = data.data.refreshToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const { mutate, isPending, isError, error } = SocialLoginQuery(handleSuccess);

  useEffect(() => {
    if (code) {
      mutate({ code, provider: 'kakao', state: 'string' });
    }
  }, [code, mutate]);
  // const code = new URLSearchParams(window.location.search).get('code');
  // const provider = 'KAKAO';
  // const state = 'string';

  // console.log(`${BASE_URL}/oauth2?code=${code}`);
  // AuthAPI(code, provider, state);
  // AuthAPI(code);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {isError && error && <div>{error.message}</div>}
      {!isPending && !isError && <div>Complete!</div>}
    </div>
  );
};

export default RedirectPage;
