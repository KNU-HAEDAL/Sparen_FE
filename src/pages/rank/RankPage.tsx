import AllRank from './components/all';
import MyRank from './components/my';
import * as S from './styles';
import TopBar from '@/components/top-bar/TopBar';

const RankPage = () => {
  return (
    <>
      <TopBar
        type='Page'
        title='랭킹'
        backgroundColor='var(--color--green-06)'
      />
      <S.RankLayout>
        <S.PageLayout>
          <MyRank />
        </S.PageLayout>
        <S.PageLayout>
          <AllRank />
        </S.PageLayout>
      </S.RankLayout>
    </>
  );
};

export default RankPage;
