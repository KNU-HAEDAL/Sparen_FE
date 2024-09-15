import { ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { RouterPath } from './path';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const location = useLocation();

  // accessToken이 없으면 로그인페이지로 리다이렉트, 있으면 자식 요소(페이지) 렌더링
  useEffect(() => {
    if (!accessToken) {
      alert('로그인 후 이용해주세요.');
      navigate(getDynamicPath.login(location.pathname)); // host 빼고 경로만
    }
  }, [accessToken, location.pathname, navigate]);

  return accessToken ? <>{children}</> : null;
};

// 로그인 필요한 페이지라면 로그인 페이지로 리다이렉트, 로그인 완료 시 원래 페이지로 돌아가는 함수
const getDynamicPath = {
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `/${RouterPath.auth}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
