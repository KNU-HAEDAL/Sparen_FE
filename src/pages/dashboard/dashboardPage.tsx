import Strick from '../main/components/Strick';
import Record from './components/challenge-record';
import UserInfo from './components/user-info';
import * as S from './styles';
import TopBar from '@/components/top-bar/TopBar';

const DashboardPage = () => {
  return (
    <>
      <TopBar
        type='Page'
        title='대시보드'
        backgroundColor='var(--color-green-06)'
      />
      <S.DashBoardLayout>
        <UserInfo />
        <Record />
        <Strick />
      </S.DashBoardLayout>
    </>
  );
};

export default DashboardPage;
