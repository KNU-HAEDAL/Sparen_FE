import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Contents from './components/contents';
import { useGetChallengeList } from '@/apis/challenge-list/getChallengeList.api';
import { Tab, Tabs } from '@/components/common/tabs';
import { TabPanel } from '@/components/common/tabs/tab-panels';
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
  sessionStorage.setItem('challengeDetailActiveTab', '0'); // 챌린지 디테일의 탭을 초기화

  const [activeTab, setActiveTab] = useState<number>(() => {
    // 세션 스토리지에 저장된 값 | 기본값 0
    const savedTab = sessionStorage.getItem('challengeListActiveTab');
    return savedTab ? Number(savedTab) : 0;
  });
  const [allData, setAllData] = useState<Challenge[]>([]);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/challenge/${id}`);
  };

  const categoryList = useMemo(
    () => [
      { label: '에코', data: 'ECHO' },
      { label: '나눔', data: 'SHARE' },
      { label: '봉사', data: 'VOLUNTEER' },
      { label: '건강', data: 'HEALTH' },
    ],
    []
  );

  useEffect(() => {
    const savedCategory = sessionStorage.getItem('category');
    if (savedCategory) {
      const tabIndex = categoryList.findIndex(
        (category) => category.data === savedCategory
      );
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
        // sessionStorage.setItem('challengeListActiveTab', String(tabIndex)); // 다른 페이지 갔다가 돌아올 때
      }
    }
  }, [categoryList]);

  const { data, isLoading } = useGetChallengeList(page, 20);

  useEffect(() => {
    if (data) {
      setAllData((prevData) => [...prevData, ...data.data.data]);
    }
  }, [data]);

  const handleSelectedTab = (value: number) => {
    setActiveTab(value);
    sessionStorage.setItem('challengeListActiveTab', String(value));
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
                    onClick={() => handleNavigate(challenge.id)}
                    id={challenge.id}
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
  padding-bottom: 6rem;
`;

const TabPanelsLayout = styled(Box)`
  margin: 1rem 1.5rem;
`;
