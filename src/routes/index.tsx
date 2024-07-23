import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import NavBar from '@/components/features/layout/nav-bar';
import DashBoardPage from '@/pages/dashboard';
import LoginPage from '@/pages/login';
import RedirectPage from '@/pages/login/components/redirect';
import MainPage from '@/pages/main';
import MyChallengePage from '@/pages/my-challenge';
import RankPage from '@/pages/rank';
import RegisterPage from '@/pages/register';
import ShortsPage from '@/pages/shorts';
import { RouterPath } from '@/routes/path.ts';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: (
      <NavBar>
        <Outlet />
      </NavBar>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RouterPath.challenge,
        children: [
          {
            index: true,
            element: <MyChallengePage />,
          },
        ],
      },
      {
        path: RouterPath.shorts,
        element: <ShortsPage />,
      },
      {
        path: RouterPath.rank,
        element: <RankPage />,
      },
      {
        path: RouterPath.dashboard,
        element: <DashBoardPage />,
      },
    ],
  },
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.redirect,
    element: <RedirectPage />,
  },
  {
    path: RouterPath.auth,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: RouterPath.register,
        element: <RegisterPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};