import ShortsIcon from '@/assets/nav-icon/Challenge-Shorts.svg';
import DashboardIcon from '@/assets/nav-icon/DashBoard.svg';
import MainIcon from '@/assets/nav-icon/Home.svg';
import ChallengeIcon from '@/assets/nav-icon/My-Challenge.svg';
import RankIcon from '@/assets/nav-icon/Ranking.svg';

export const NavBarData = [
  {
    title: 'challenge',
    icon: ChallengeIcon,
    path: '/challenge',
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
