import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { authLocalStorage } from '@/utils/storage';

type AuthInfo = {
  id: string;
  nickname: string;
  token: string;
};

export const AuthContext = createContext<AuthInfo | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const currentAuthToken = authLocalStorage.get();
  const [isReady, setIsReady] = useState(!currentAuthToken);

  const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>(undefined);

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

  if (!isReady) return <></>;
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
