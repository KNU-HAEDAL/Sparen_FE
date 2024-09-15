export const RouterPath = {
  root: '/',
  main: '/',
  challenge: 'challenge',
  record: 'record',
  detail: 'detail',
  myRecord: 'my-record',
  shorts: 'shorts',
  rank: 'rank',
  dashboard: 'dashboard',
  login: 'login',
  redirect: 'redirect',
  auth: 'auth',
  register: 'register',
  review: 'review',
  write: 'write',
};

// 로그인 필요한 페이지라면 로그인 페이지로 리다이렉트, 로그인 완료 시 원래 페이지로 돌아가는 함수
export const getDynamicPath = {
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `${RouterPath.auth}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
