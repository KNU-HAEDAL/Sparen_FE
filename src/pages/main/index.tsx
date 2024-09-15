import Category from './components/category';
import Review from './components/review';
import Strick from './components/strick';
import Tier from './components/tier';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const MainPage = () => {
  return (
    <>
      <TopBar type='Main' backgroundColor='#fff' title={''} />
      <div style={{ height: HEADER_HEIGHT }} />

      <LoginPageLayout>
        <Category />
        <Tier />
        <Strick />
        <Review />
      </LoginPageLayout>
    </>
  );
};

export default MainPage;

const LoginPageLayout = styled.div`
  min-height: 100vh;
`;
