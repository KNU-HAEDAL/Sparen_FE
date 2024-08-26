export interface Token {
  accessToken: string;
  refreshToken: string;
}

export type UserResponseData = {
  result?: 'SUCCESS' | 'FAIL';
  data: {
    accessToken: string;
    refreshToken: string;
    userInfo: {
      id: number;
      nickname: string;
      profileImageUrl: string;
      email: string;
      tierInfo: {
        tier: string;
        totalExp: number;
        currentExp: number;
      };
    };
  };
  message: string;
  errorCode: string;
};

export type RefreshTokenResponse = {
  result?: 'SUCCESS' | 'FAIL';
  data: {
    accessToken: string;
  };
  message: string;
  errorCode: string;
};
