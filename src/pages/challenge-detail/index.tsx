import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
import { DescriptionSection } from './description-section';
import { RankingSection } from './ranking-section/';
import { ReviewSection } from './review-section/';
import * as S from './styles';
import { type ChallengeDetailData } from '@/apis/challenge-detail/challenge.detail.response';
import DefaultImage from '@/assets/Default-Image.svg';
import { Tabs, Tab } from '@/components/common/tabs';
import { TabPanels, TabPanel } from '@/components/common/tabs/tap-panels';
import TopBar from '@/components/features/layout/top-bar';

// const CHALLENGE_GROUP_ID = 38;

const ChallengeDetailPage = () => {
  const { id } = useParams();
  const challengeGroupId = Number(id);

  const [activeTab, setActiveTab] = useState<number>(() => {
    // 세션 스토리지에 저장된 값 | 기본값 0
    const savedTab = sessionStorage.getItem('activeTab');
    return savedTab ? Number(savedTab) : 0;
  });
  const [data, setData] = useState<ChallengeDetailData | undefined>(undefined);

  const categoryList = [
    { label: '건강', data: 'HEALTH' },
    { label: '에코', data: 'ECHO' },
    { label: '나눔', data: 'SHARE' },
    { label: '봉사', data: 'VOLUNTEER' },
    { label: '기타', data: 'ETC' },
  ];

  // data.category에 맞는 label 찾기
  const categoryLabel =
    categoryList.find((c) => c.data === data?.category)?.label || '';

  const tabsList = [
    {
      label: '설명',
      panel: data ? <DescriptionSection data={data} /> : null,
    },
    {
      label: '랭킹',
      panel: data ? <RankingSection id={challengeGroupId} /> : null,
    },
    {
      label: '리뷰',
      panel: data ? <ReviewSection id={challengeGroupId} /> : null,
    },
  ];

  const handleSelectedTab = (value: number) => {
    setActiveTab(value);
    sessionStorage.setItem('activeTab', String(value));
  };

  useEffect(() => {
    const fetchChallengeDetail = async () => {
      try {
        const res = await getChallengeDetail(challengeGroupId);
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChallengeDetail();
  }, [challengeGroupId]);

  // 챌린지 리뷰 페이지에 필요한 챌린지 제목 세션 스토리지에 저장
  useEffect(() => {
    if (data?.title) {
      sessionStorage.setItem('challengeGroupTitle', data.title);
    }
  }, [data?.title]);

  return (
    <>
      <TopBar type='Page' title={'챌린지 상세 정보'} backgroundColor='#fff' />
      <S.Wrapper>
        <S.ImageList>
          {data?.imageUrls?.length ? (
            data.imageUrls.map((img, index) => (
              <S.Image key={index} src={img} />
            ))
          ) : (
            <S.DefaultImageMask>
              <S.DefaultImage src={DefaultImage} />
            </S.DefaultImageMask>
          )}
        </S.ImageList>
        <S.ChallengeTitleWrapper>
          <S.Category>{categoryLabel}</S.Category>
          <S.Title>{data?.title}</S.Title>
        </S.ChallengeTitleWrapper>

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
      </S.Wrapper>
    </>
  );
};

export default ChallengeDetailPage;
