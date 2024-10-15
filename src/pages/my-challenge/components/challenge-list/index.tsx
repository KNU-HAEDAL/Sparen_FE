import { useNavigate, Link } from 'react-router-dom';

import * as S from './styles';
import NotChallenge from '@/assets/UserImage.svg';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';
import CTA from '@/components/common/cta';
import EmptyState from '@/components/common/empty-state';
import { ChallengeData } from '@/interface/apis/challenge';
import { RouterPath } from '@/routes/path';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ChallengeListProps = {
  challengeList: ChallengeData[];
};

const ChallengeList = ({ challengeList }: ChallengeListProps) => {
  const navigate = useNavigate();

  return (
    <>
      {challengeList.length === 0 ? (
        <EmptyState>
          <Image
            opacity='0.5'
            width='8rem'
            src={NotChallenge}
            margin='0 0 16px 0'
          />
          <p className='highlight'>진행 중인 챌린지가 없습니다.</p>
          <p>마음에 드는 챌린지를 신청해보세요.</p>
        </EmptyState>
      ) : (
        <ChallengeListBox>
          {challengeList.map((challenge, index) => (
            <ChallengeItem key={index}>
              <S.ChallengeImgContainer>
                <Image
                  filter='opacity(0.5) drop-shadow(0 0 0 #c0c0c0)'
                  src={FinishStamp}
                />
              </S.ChallengeImgContainer>
              <Link
                to={`/${RouterPath.challenge}/${challenge.challengeGroupId}`}
              >
                <Text
                  className='challenge-title'
                  fontSize='var(--font-size-md)'
                  fontStyle='normal'
                  fontWeight='600'
                  alignSelf='center'
                  margin='0 auto 0 0'
                >
                  {challenge.title}
                </Text>
              </Link>
              <RecordButton
                label='인증 기록'
                display='block'
                onClick={() =>
                  navigate(
                    `/${RouterPath.challenge}/${RouterPath.record}?id=${challenge.challengeId}&category=${challenge.category}&title=${challenge.title}`
                  )
                }
              />
            </ChallengeItem>
          ))}
        </ChallengeListBox>
      )}
    </>
  );
};

export default ChallengeList;

const ChallengeListBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  > div:not(:last-child) {
    border-bottom: 1px solid var(--color-green-06);
  }
`;

const ChallengeItem = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 8px 0;
`;

const RecordButton = styled(CTA)``;
