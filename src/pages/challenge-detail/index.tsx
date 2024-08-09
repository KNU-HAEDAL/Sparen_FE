import { useState, useEffect } from 'react';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
import { Tabs, Tab, TabPanel } from '../../components/tab/slide-Tab';
import TopBar from '../../components/top-bar/top-Bar';
import Description from './description/';
import Ranking from './ranking/';
import {
  TabsContainer,
  TabPanelContainer,
  Image,
  ImageMask,
  Wrapper,
} from './styles';
import DefaultImage from '@/assets/Default-Image.svg';

type Challenge = {
  id: number;
  participantCount: number;
  difficulty: number;
  onceExp: number;
  successExp: number;
  dayType: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  dayCount: number;
};

export type ChallengeDetailData = {
  id: number;
  title: string;
  content: string;
  participantCount: number;
  startDate: string;
  endDate: string;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC';
  guide: string;
  maxDifficulty: number;
  imageUrls: string[];
  challenges: Challenge[];
};

const ChallengeDetailPage = () => {
  const tabsList = [
    { label: '챌린지', value: 0 },
    { label: '랭킹', value: 1 },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<ChallengeDetailData | null>(null);

  //   const handleSelectedTab = (
  //     e: React.MouseEvent<HTMLDivElement, MouseEvent>
  //   ) => {
  //     setActiveTab(e.target.value);
  //   };

  const handleSelectedTab = (value: number) => {
    setActiveTab(value);
  };

  useEffect(() => {
    getChallengeDetail(1).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  return (
    <Wrapper>
      <TopBar title={'챌린지 상세정보'} />
      <ImageMask>
        {data ? (
          <Image src={data.imageUrls[0]} />
        ) : (
          <div>
            <Image src={DefaultImage} />{' '}
          </div>
        )}
      </ImageMask>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleSelectedTab}>
          {tabsList
            ? tabsList.map((t) => (
                <Tab key={t.value} label={t.label} value={t.value} />
              ))
            : 'tab 목록 없음'}
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          {data ? <Description data={data} /> : null}
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          {data ? (
            <Ranking title={data.title} category={data.category} />
          ) : null}
        </TabPanel>
      </TabPanelContainer>
    </Wrapper>
  );
};

export default ChallengeDetailPage;
