import ShortsIcon from '@/assets/nav-icon/Challenge-Shorts.svg';
import DashboardIcon from '@/assets/nav-icon/DashBoard.svg';
import MainIcon from '@/assets/nav-icon/Home.svg';
import ChallengeIcon from '@/assets/nav-icon/My-Challenge.svg';
import RankIcon from '@/assets/nav-icon/Ranking.svg';
import { RouterPath } from '@/routes/path';

export const navBarData = [
  {
    title: 'challenge',
    icon: ChallengeIcon,
    path: `/${RouterPath.challenge}/${RouterPath.inProgress}`,
  },
  {
    title: 'shorts',
    icon: ShortsIcon,
    path: '/shorts',
  },
  {
    title: 'main',
    icon: MainIcon,
    path: '/',
  },
  {
    title: 'rank',
    icon: RankIcon,
    path: '/rank',
  },
  {
    title: 'dashboard',
    icon: DashboardIcon,
    path: '/dashboard',
  },
];
