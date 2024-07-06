import { createBrowserRouter, Outlet } from 'react-router-dom';

import NavBar from '@/components/nav-bar/NavBar';
import Challenge from '@/pages/challenge/ChallengePage';
import Dashboard from '@/pages/dashboard/DashboardPage';
import MainPage from '@/pages/main/MainPage';
import Rank from '@/pages/rank/RankPage';
import Shorts from '@/pages/shorts/ShortsPage';

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
        element: <Challenge />,
      },
      {
        path: 'shorts',
        element: <Shorts />,
      },
      {
        path: 'rank',
        element: <Rank />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
