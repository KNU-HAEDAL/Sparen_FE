import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
import { DescriptionSection } from './description-section';
import { RankingSection } from './ranking-section/';
import { ReviewSection } from './review-section/';
import * as S from './styles';
import { type ChallengeDetailData } from '@/apis/challenge-detail/challenge.detail.response';
import DefaultImage from '@/assets/Default-Image.svg';
import { Tab, TabPanel, Tabs } from '@/components/common/tab';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';

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

  const tabsList = [
    {
      label: '설명',
      component: data ? <DescriptionSection data={data} /> : null,
    },
    {
      label: '랭킹',
      component: data ? <RankingSection id={challengeGroupId} /> : null,
    },
    {
      label: '리뷰',
      component: data ? <ReviewSection id={challengeGroupId} /> : null,
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
  }, []);

  // 챌린지 리뷰 페이지에 필요한 챌린지 제목 세션 스토리지에 저장
  useEffect(() => {
    if (data?.title) {
      sessionStorage.setItem('challengeGroupTitle', data.title);
    }
  }, [data?.title]);

  return (
    <S.Wrapper>
      <TopBar type='Page' title={'챌린지 상세정보'} backgroundColor='#fff' />
      <div style={{ height: HEADER_HEIGHT }} />

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
            <Tab key={t.label} label={t.label} value={index} />
          ))}
        </Tabs>
      </S.TabsContainer>
      <S.TabPanelContainer>
        {tabsList.map((t, index) => (
          <TabPanel key={index} value={activeTab} selectedIndex={index}>
            {t.component ?? undefined}
          </TabPanel>
        ))}
      </S.TabPanelContainer>
    </S.Wrapper>
  );
};

export default ChallengeDetailPage;
