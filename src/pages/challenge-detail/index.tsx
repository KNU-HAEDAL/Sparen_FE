import { useEffect, useState } from 'react';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
// import { getChallengeRanking } from '../../apis/challenge-detail/challenge.ranking.api';
import Description from './description/';
import Ranking from './ranking/';
import {
  Image,
  ImageMask,
  TabPanelContainer,
  TabsContainer,
  Wrapper,
} from './styles';
import { type ChallengeDetailData } from '@/apis/challenge-detail/challenge.detail.response';
// import { type ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';
import DefaultImage from '@/assets/Default-Image.svg';
import { Tab, TabPanel, Tabs } from '@/components/common/tab';
import TopBar from '@/components/features/layout/top-bar';

const ChallengeDetailPage = () => {
  const tabsList = ['설명', '랭킹'];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [data, setData] = useState<ChallengeDetailData | undefined>(undefined);
  // const [rankingData, setRankingData] = useState<
  //   ChallengeRankingData[] | undefined
  // >(undefined);

  const handleSelectedTab = (value: number) => {
    setActiveTab(value);
  };

  useEffect(() => {
    // 디폴트로 "설명" 탭 선택되어 있음
    const fetchChallengeDetail = async () => {
      try {
        const res = await getChallengeDetail(1);
        setData(res);
        // console.log('challenge detail data: ', res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChallengeDetail();
  }, []);

  // useEffect(() => {
  //   const fetchChallengeRanking = async () => {
  //     // "랭킹" 탭이 선택되면
  //     if (activeTab === 1) {
  //       try {
  //         const res = await getChallengeRanking({ id: 1, page: 1 });
  //         setRankingData(res);
  //         console.log('challenge ranking: ', res);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };

  //   fetchChallengeRanking();
  // }, [activeTab]);

  return (
    <Wrapper>
      <TopBar type='Page' title={'챌린지 상세정보'} backgroundColor='#fff' />
      <ImageMask>
        {data ? (
          <Image src={data.imageUrls[0]} />
        ) : (
          <div>
            <Image src={DefaultImage} />
          </div>
        )}
      </ImageMask>
      <TabsContainer>
        <Tabs
          selectedTab={activeTab}
          onChange={(e, value) => handleSelectedTab(value)}
        >
          {tabsList.map((t, index) => (
            <Tab key={t} label={t} value={index} />
          ))}
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          {data && <Description data={data} />}
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          {data && <Ranking title={data.title} category={data.category} />}
        </TabPanel>
      </TabPanelContainer>
    </Wrapper>
  );
};

export default ChallengeDetailPage;
