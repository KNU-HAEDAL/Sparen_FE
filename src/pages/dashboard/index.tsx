import Strick from '../main/components/strick';
import Record from './components/challenge-record';
import UserInfo from './components/user-info';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const DashBoardPage = () => {
  return (
    <>
      <TopBar
        type='Page'
        title='대시보드'
        backgroundColor='var(--color-green-06)'
      />
      <DashBoardLayout>
        <UserInfo />
        <Record />
        <Strick />
      </DashBoardLayout>
    </>
  );
};

export default DashBoardPage;

const DashBoardLayout = styled.section`
  height: 52.625rem;
`;
