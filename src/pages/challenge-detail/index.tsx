import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getChallengeDetail } from '../../apis/challenge-detail/challenge.detail.api';
import { DescriptionSection } from './description-section';
import { RankingSection } from './ranking-section/';
import { ReviewSection } from './review-section/';
import { type ChallengeDetailData } from '@/apis/challenge-detail/challenge.detail.response';
import DefaultImage from '@/assets/Default-Image.svg';
import { Tabs, Tab } from '@/components/common/tabs';
import { TabPanels, TabPanel } from '@/components/common/tabs/tab-panels';
import TopBar from '@/components/features/layout/top-bar';
import { formatCategory } from '@/utils/formatters';
import styled from '@emotion/styled';

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
      <Wrapper>
        <ImageList>
          {data?.imageUrls?.length ? (
            data.imageUrls.map((img, index) => <Image key={index} src={img} />)
          ) : (
            <DefaultImageMask>
              <StyledDefaultImage src={DefaultImage} alt='이미지' />
            </DefaultImageMask>
          )}
        </ImageList>

        <ChallengeTitleWrapper>
          <Category>{formatCategory(data?.category)}</Category>
          <Title>{data?.title}</Title>
        </ChallengeTitleWrapper>

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

export default ChallengeDetailPage;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.44rem; // 하단 내브 바 높이
`;

export const ImageList = styled.div`
  margin: 0 0 16px;
  height: 100vw;
  max-height: 480px; // 최대 너비가 480px라서 고정값으로 설정한 것임
  display: flex;
  overflow-x: scroll;
`;

export const Image = styled.img`
  position: relative;
  margin: auto;
  align-self: center;
  display: block;
  object-fit: cover;
  width: 100%;
`;

export const DefaultImageMask = styled.div`
  background-color: var(--color-green-06);
  position: relative;
  width: 100vw;
  display: flex;
`;

export const StyledDefaultImage = styled.img`
  position: relative;
  margin: auto;
  align-self: center;
  display: block;
  object-fit: cover;
  opacity: 50%;
`;

export const ChallengeTitleWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Category = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-green-01);
`;

export const Title = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;
