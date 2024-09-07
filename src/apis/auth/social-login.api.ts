/**
 * provider에 소셜 플랫폼을 추가하여 소셜 로그인 기능 구현
 */
import { axiosClient, queryClient } from '../AxiosClient';
import { UserResponseData } from './auth.response';
import { useMutation } from '@tanstack/react-query';

type SocialLoginParams = {
  provider: 'kakao' | 'google' | 'naver';
  code: string;
  state: string;
};
export const socialLogin = async ({
  provider,
  code,
  state,
}: SocialLoginParams): Promise<UserResponseData> => {
  try {
    const response = await axiosClient.post('api/auth/oauth2', {
      provider,
      code,
      state,
    });
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    throw error;
  }
};

export const SocialLoginQuery = (
  onSuccess: (data: UserResponseData) => void
) => {
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: ({ provider, code, state }: SocialLoginParams) =>
      socialLogin({ provider, code, state }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['socialLogin'] });
      onSuccess(data);
    },
  });

  return { mutate, data, isPending, isError, error };
};
