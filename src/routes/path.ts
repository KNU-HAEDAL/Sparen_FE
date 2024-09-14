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

export const getDynamicPath = {
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `${RouterPath.auth}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
