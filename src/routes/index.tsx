import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';
import NavBarLayout from '@/components/features/layout/nav-bar-layout';
import ErrorPage from '@/pages/ErrorPage';
import ChallengeDetailPage from '@/pages/challenge-detail';
import ChallengeList from '@/pages/challenge-list';
import ChallengeRecord from '@/pages/challenge-record';
import DashBoardPage from '@/pages/dashboard';
import LoginPage from '@/pages/login';
import RedirectPage from '@/pages/login/components/redirect';
import MainPage from '@/pages/main';
import MyChallengePage from '@/pages/my-challenge';
import MyChallengeRecord from '@/pages/my-challenge-record';
import RankPage from '@/pages/rank';
import RegisterPage from '@/pages/register';
import Review from '@/pages/review';
import ReviewWrite from '@/pages/review-write';
import ShortsPage from '@/pages/shorts';
import { RouterPath } from '@/routes/path.ts';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: (
      <NavBarLayout>
        <Outlet />
      </NavBarLayout>
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
            element: (
              <ProtectedRoute>
                <MyChallengePage />
              </ProtectedRoute>
            ),
          },
          {
            path: RouterPath.myRecord,
            element: (
              <ProtectedRoute>
                <MyChallengeRecord />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: RouterPath.rank,
        element: (
          <ProtectedRoute>
            <RankPage />
          </ProtectedRoute>
        ),
      },
      {
        path: RouterPath.dashboard,
        element: (
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: RouterPath.notFound,
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: RouterPath.challenge,
    children: [
      {
        path: `:id`,
        element: (
          <ProtectedRoute>
            <ChallengeDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: `:id/${RouterPath.review}`,
        element: (
          <ProtectedRoute>
            <Review />
          </ProtectedRoute>
        ),
      },
      {
        path: RouterPath.record,
        element: (
          <ProtectedRoute>
            <ChallengeRecord />
          </ProtectedRoute>
        ),
      },
      {
        path: `:id/${RouterPath.write}`,
        element: (
          <ProtectedRoute>
            <ReviewWrite />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: RouterPath.shorts,
    element: <ShortsPage />,
  },
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: '/oauth/:provider/redirect',
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
