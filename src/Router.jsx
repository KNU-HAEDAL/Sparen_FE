import { Outlet } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import NavigateBar from './components/nav-bar/navigate-Bar';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavigateBar>
          <Outlet />
        </NavigateBar>
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
