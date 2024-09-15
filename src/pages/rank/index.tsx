import AllRank from './components/all';
import MyRank from './components/my';
import * as S from './styles';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';

const RankPage = () => {
  return (
    <>
      <TopBar
        type='Page'
        title='랭킹'
        backgroundColor='var(--color-green-06)'
      />
      <div style={{ height: HEADER_HEIGHT }} />

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
