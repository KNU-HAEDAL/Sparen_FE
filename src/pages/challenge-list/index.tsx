import { useCallback, useEffect, useState } from 'react';

import Contents from './components/contents';
import { useGetChallengeList } from '@/apis/challenge-list/getChallengeList.api';
import { Tab, Tabs } from '@/components/common/tabs';
import { TabPanel } from '@/components/common/tabs/tap-panels';
import TopBar from '@/components/features/layout/top-bar';
import { Box, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Challenge = {
  id: number;
  title: string;
  content: string;
  participantCount: number;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC';
  startDate: string;
  endDate: string;
};

const ChallengeList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allData, setAllData] = useState<Challenge[]>([]);
  const [page, setPage] = useState(0);

  const categoryList = [
    { label: '건강', data: 'HEALTH' },
    { label: '에코', data: 'ECHO' },
    { label: '나눔', data: 'SHARE' },
    { label: '봉사', data: 'VOLUNTEER' },
  ];

  const { data, isLoading } = useGetChallengeList(page, 20);

  useEffect(() => {
    if (data) {
      setAllData((prevData) => [...prevData, ...data.data.data]);
    }
  }, [data]);

  const handleSelectedTab = (value: number) => {
    setActiveTab(value);
    sessionStorage.setItem('activeTab', String(value));
  };

  const filteredData = allData.filter(
    (item) => item.category === categoryList[activeTab].data
  );

  const loadNextPage = useCallback(() => {
    if (data?.data.hasNext && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [data, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      loadNextPage();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadNextPage]);

  return (
    <>
      <TopBar type='Page' title='챌린지 목록' backgroundColor='#fff' />
      <ChallengeListLayout>
        <Tabs selectedTab={activeTab} onChange={handleSelectedTab}>
          {categoryList.map((category, index) => (
            <Tab key={category.label} label={category.label} value={index} />
          ))}
        </Tabs>
        <TabPanelsLayout>
          {categoryList.map((_, index) => (
            <TabPanel key={index} value={activeTab} selectedIndex={index}>
              <>
                {filteredData.map((challenge) => (
                  <Contents
                    key={challenge.id}
                    title={challenge.title}
                    content={challenge.content}
                    startDate={challenge.startDate}
                    endDate={challenge.endDate}
                    participantCount={challenge.participantCount}
                  />
                ))}
              </>
            </TabPanel>
          ))}
        </TabPanelsLayout>
        {isLoading && <Spinner />}
      </ChallengeListLayout>
    </>
  );
};

export default ChallengeList;

const ChallengeListLayout = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 1.5rem;
  padding-bottom: 6rem;
`;

const TabPanelsLayout = styled(Box)`
  margin: 1rem 0;
`;
