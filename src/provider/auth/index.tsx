import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { authLocalStorage } from '@/utils/storage';

type AuthInfo = {
  id: string;
  nickname: string;
  token: string;
};

type AuthContextData = {
  authInfo: AuthInfo | undefined;
  setAuthInfo: (authInfo: AuthInfo) => void;
  // clearAuthInfo: () => void;
};

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const currentAuthToken = authLocalStorage.get();
  const [isReady, setIsReady] = useState(!currentAuthToken);
  const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>(undefined);

  const handleAuthInfo = (currentAuthInfo: AuthInfo) => {
    setAuthInfo(currentAuthInfo);
    authLocalStorage.set(currentAuthInfo.token);
  };

  useEffect(() => {
    if (currentAuthToken) {
      setAuthInfo({
        id: currentAuthToken,
        nickname: currentAuthToken,
        token: currentAuthToken,
      });
      setIsReady(true);
    }
  }, [currentAuthToken]);

  if (!isReady) return null;
  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo: handleAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
