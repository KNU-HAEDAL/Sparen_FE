export const RouterPath = {
  root: '/',
  main: '/',
  challenge: 'challenge',
  myRecord: 'my-record',
  shorts: 'shorts',
  rank: 'rank',
  dashboard: 'dashboard',
  login: 'login',
  redirect: 'redirect',
  auth: 'auth',
  register: 'register',
};

export const getDynamicPath = {
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `${RouterPath.auth}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
