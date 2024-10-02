import { Link } from 'react-router-dom';

import * as S from './styles';
import NotChallenge from '@/assets/UserImage.svg';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';
import { ChallengeData } from '@/interface/apis/challenge';
import { RouterPath } from '@/routes/path';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ChallengeListProps = {
  BackgroundColor: string;
  color: string;
  BorderColor: string;
  challenges: ChallengeData[];
};

const ChallengeList = ({
  BackgroundColor,
  color,
  BorderColor,
  challenges,
}: ChallengeListProps) => {
  return (
    <>
      {challenges.length === 0 ? (
        <Box
          display='flex'
          flexDirection='column'
          marginTop='2rem'
          alignItems='center'
          justifyContent='space-between'
          gap={10}
        >
          <Image opacity='0.5' width='8rem' src={NotChallenge} />
          <Text
            fontSize='var(--font-size-md)'
            fontStyle='normal'
            fontWeight='700'
          >
            진행 중인 챌린지가 없습니다.
          </Text>
        </Box>
      ) : (
        <ChallengeListBox>
          {challenges.map((challenge, index) => (
            <ChallengeItem key={index}>
              <S.ChallengeImgContainer>
                <Image
                  filter='opacity(0.5) drop-shadow(0 0 0 #c0c0c0)'
                  src={FinishStamp}
                />
              </S.ChallengeImgContainer>
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
              <Box
                className='verify-button'
                display='flex'
                padding='1rem 0.625rem'
                justifyContent='center'
                alignItems='center'
                height='1rem'
                borderRadius='0.625rem'
                backgroundColor={BackgroundColor}
                borderColor={BorderColor}
                cursor='pointer'
              >
                <Link
                  to={`/${RouterPath.challenge}/${RouterPath.record}?id=${challenge.challengeId}&category=${challenge.category}&title=${challenge.title}`}
                >
                  <Text
                    fontSize='var(--font-size-sm)'
                    fontStyle='normal'
                    fontWeight='700'
                    lineHeight='normal'
                    color={color}
                  >
                    인증 기록
                  </Text>
                </Link>
              </Box>
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
