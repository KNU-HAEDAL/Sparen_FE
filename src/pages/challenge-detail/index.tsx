import { useEffect, useState } from 'react';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
import Description from './description/';
import Ranking from './ranking/';
import { ReviewSection } from './review-section/';
import * as S from './styles';
import { type ChallengeDetailData } from '@/apis/challenge-detail/challenge.detail.response';
import DefaultImage from '@/assets/Default-Image.svg';
import { Tab, TabPanel, Tabs } from '@/components/common/tab';
import TopBar from '@/components/features/layout/top-bar';

const ChallengeDetailPage = () => {
  const tabsList = ['설명', '랭킹', '리뷰'];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [data, setData] = useState<ChallengeDetailData | undefined>(undefined);

  const handleSelectedTab = (value: number) => {
    setActiveTab(value);
  };

  useEffect(() => {
    // 디폴트로 "설명" 탭 선택되어 있음
    const fetchChallengeDetail = async () => {
      try {
        const res = await getChallengeDetail(20);
        setData(res);
        // console.log('challenge detail data: ', res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChallengeDetail();
  }, []);

  return (
    <S.Wrapper>
      <TopBar type='Page' title={'챌린지 상세정보'} backgroundColor='#fff' />
      <S.ImageMask>
        {data?.imageUrls?.length ? (
          data.imageUrls.map((img, index) => <S.Image key={index} src={img} />)
        ) : (
          <S.Image src={DefaultImage} />
        )}
      </S.ImageMask>
      <S.ChallengeTitleWrapper>
        <S.Category>{data?.category}</S.Category>
        <S.Title>{data?.title}</S.Title>
      </S.ChallengeTitleWrapper>
      <S.TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleSelectedTab}>
          {tabsList.map((t, index) => (
            <Tab key={t} label={t} value={index} />
          ))}
        </Tabs>
      </S.TabsContainer>
      <S.TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          {data && <Description data={data} />}
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          {data && <Ranking id={data.id} />}
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          {data && <ReviewSection id={data.id} />}
        </TabPanel>
      </S.TabPanelContainer>
    </S.Wrapper>
  );
};

export default ChallengeDetailPage;
