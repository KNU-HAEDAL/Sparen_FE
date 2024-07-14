import { createBrowserRouter, Outlet } from 'react-router-dom';

import NavBar from '@/components/nav-bar/NavBar';
import DashboardPage from '@/pages/dashboard/dashboardPage';
import MainPage from '@/pages/main/MainPage';
import MyChallengePage from '@/pages/my-challenge/MyChallengePage';
import RankPage from '@/pages/rank/RankPage';
import ShortsPage from '@/pages/shorts/ShortsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar>
          <Outlet />
        </NavBar>
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'challenge',
        children: [
          {
            index: true,
            element: <MyChallengePage />,
          },
        ],
      },
      {
        path: 'shorts',
        element: <ShortsPage />,
      },
      {
        path: 'rank',
        element: <RankPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);
