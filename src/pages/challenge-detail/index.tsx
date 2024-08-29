import { MouseEvent, SetStateAction, useEffect, useState } from 'react';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
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
import DefaultImage from '@/assets/Default-Image.svg';
import { Tab, TabPanel, Tabs } from '@/components/common/tab';
import TopBar from '@/components/features/layout/top-bar';

const ChallengeDetailPage = () => {
  const tabsList = ['설명', '랭킹'];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [data, setData] = useState<ChallengeDetailData | undefined>(undefined);

  const handleSelectedTab = (
    e: SetStateAction<number> | MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setActiveTab(e as SetStateAction<number>);
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
        <Tabs selectedTab={activeTab} onChange={(e) => handleSelectedTab(e)}>
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
