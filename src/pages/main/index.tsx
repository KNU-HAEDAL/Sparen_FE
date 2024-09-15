import Category from './components/category';
import Review from './components/review';
import Strick from './components/strick';
import Tier from './components/tier';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const MainPage = () => {
  return (
    <>
      <TopBar type='Main' backgroundColor='#fff' title={''} />
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
