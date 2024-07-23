export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const KAKAO_REST_API_KEY = import.meta.env.VITE_APP_KAKAO_API_KEY;
export const NAVER_REST_API_KEY = import.meta.env.VITE_APP_NAVER_API_KEY;
export const GOGGLE_REST_API_KEY = import.meta.env.VITE_APP_GOOGLE_API_KEY;
export const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
// export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
