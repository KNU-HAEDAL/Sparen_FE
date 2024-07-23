import ShortsContents from './components/contents';
import ShortsImage from './components/image';
import ShortsInfo from './components/info';
import * as S from './styles';
import TopBar from '@/components/features/layout/top-bar';

const Index = () => {
  return (
    <>
      <TopBar type='Page' title='' backgroundColor='var(--color--green-06)' />
      <S.ShortsPageLayout>
        <ShortsContents />
        <ShortsImage />
        <ShortsInfo />
      </S.ShortsPageLayout>
    </>
  );
};

export default Index;
