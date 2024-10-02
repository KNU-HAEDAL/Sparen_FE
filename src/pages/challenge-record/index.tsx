import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Records from './records';
import Verification from './verification';
import { getChallengeRecord } from '@/apis/challenge-record/challenge.record.api';
import { ChallengeRecordData } from '@/apis/challenge-record/challenge.record.response';
import ChallengeTitle from '@/components/common/challenge-title';
import { Tab, Tabs } from '@/components/common/tabs';
import { TabPanel, TabPanels } from '@/components/common/tabs/tab-panels';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import { formatCategory } from '@/utils/formatters';
import styled from '@emotion/styled';

const ChallengeRecord = () => {
  // ?id=:id&category=:category&title=:title
  const [searchParams] = useSearchParams();
  const challengeId = Number(searchParams.get('id')) || 0;
  const challengeCategory = searchParams.get('category') || '';
  const challengeTitle = searchParams.get('title') || '';

  const [activeTab, setActiveTab] = useState<number>(() => {
    // 세션 스토리지에 저장된 값 | 기본값 0
    const savedTab = sessionStorage.getItem('activeTab');
    return savedTab ? Number(savedTab) : 0;
  });

  const [records, setRecords] = useState<ChallengeRecordData | null>(); // api 응답 데이터 전체
  const [recordIdList, setRecordIdList] = useState<number[]>([]); // 한 챌린지의 인증기록 id 리스트

  // recordId를 recordList에 추가하는 함수
  const fillRecordList = (length: number, values: number[]) => {
    const newRecordIdList = new Array(length).fill(-1); // 모두 -1로 초기화
    for (let i = 0; i < values.length; i++) {
      newRecordIdList[i] = values[i]; // recordId로 바꾸기
    }
    setRecordIdList(newRecordIdList);
  };

  // Verification으로 비동기 데이터 전달
  const [successCount, setSuccessCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [endDate, setEndDate] = useState<string>('');
  const tabsList = [
    {
      label: '인증 기록',
      panel: records && (
        <Records records={records} recordIdList={recordIdList} />
      ),
    },
    {
      label: '인증하기',
      panel: (
        <Verification
          challengeId={challengeId}
          setActiveTab={setActiveTab}
          successCount={successCount}
          totalCount={totalCount}
          endDate={endDate}
        />
      ),
    },
  ];

  const handleSelectedTab = (value: number) => {
    setActiveTab(value as 0 | 1);
    sessionStorage.setItem('activeTab', String(value));
  };

  // activeTab이 변경될 때 (인증 등록 후) records 데이터를 새로 페칭
  useEffect(() => {
    if (activeTab === 0) {
      getChallengeRecord(challengeId)
        .then((res) => {
          setRecords(res);
          fillRecordList(res.totalCount, res.recordIds);
          setSuccessCount(res.successCount);
          setTotalCount(res.totalCount);
          setEndDate(res.endDate);
        })
        .catch((error) => {
          // API에서 받은 오류 객체일 경우
          if (error?.result === 'FAIL') {
            console.error('Error fetching records:', error);
          } else {
            // 예상치 못한 오류 처리
            console.error('Error fetching records: unexpected, ', error);
          }
        });
    }
  }, [activeTab, challengeId]);

  return (
    <>
      <TopBar type='Page' title='챌린지 기록' backgroundColor='#fff' />
      <Wrapper>
        <ChallengeTitle
          category={formatCategory(challengeCategory)}
          title={challengeTitle}
        />
        <Tabs selectedTab={activeTab} onChange={handleSelectedTab}>
          {tabsList.map((t, index) => (
            <Tab key={t.label} label={t.label} value={index} />
          ))}
        </Tabs>
        <TabPanels>
          {tabsList.map((t, index) => (
            <TabPanel key={index} value={activeTab} selectedIndex={index}>
              {t.panel ?? undefined}
            </TabPanel>
          ))}
        </TabPanels>
      </Wrapper>
    </>
  );
};

export default ChallengeRecord;

const Wrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  display: flex;
  flex-direction: column;
  flex: 1;
`;
