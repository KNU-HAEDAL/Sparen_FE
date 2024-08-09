import { Link } from 'react-router-dom';

import * as S from './styles';
import NotChallenge from '@/assets/UserImage.svg';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';
import { RouterPath } from '@/routes/path';
import { useChallengeStore } from '@/store/useChallengeStore';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ChallengeListProps = {
  BackgroundColor: string;
  color: string;
  BorderColor: string;
  challenges: {
    id: number;
    title: string;
  }[];
};

const ChallengeList = ({
  BackgroundColor,
  color,
  BorderColor,
  challenges,
}: ChallengeListProps) => {
  const { setChallengeTitle } = useChallengeStore();

  const handleSaveTitle = (title: string) => {
    setChallengeTitle(title);
  };

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

          <Text fontSize='1.2rem' fontStyle='normal' fontWeight='700'>
            진행중인 챌린지가 없습니다.
          </Text>
        </Box>
      ) : (
        <ChallengeListBox>
          {challenges.map((challenge) => (
            <Box
              display='flex'
              marginLeft='1rem'
              width='100%'
              justifyContent='space-between'
              gap='10px'
              alignItems='center'
              flexDirection='row'
              key={challenge.id}
            >
              <S.ChallengeImgContainer>
                <Image
                  filter='opacity(0.5) drop-shadow(0 0 0 #c0c0c0)'
                  src={FinishStamp}
                />
              </S.ChallengeImgContainer>
              <Box display='flex' margin='1rem 0'>
                <Text fontSize='1.2rem' fontStyle='normal' fontWeight='700'>
                  {challenge.title}
                </Text>
              </Box>
              <Box
                display='flex'
                padding='1rem 0.625rem'
                justifyContent='center'
                alignItems='center'
                height='1rem'
                borderRadius='0.625rem'
                backgroundColor={BackgroundColor}
                borderColor={BorderColor}
                onClick={() => handleSaveTitle(challenge.title)}
              >
                <Link to={RouterPath.reviewWrite}>
                  <Text
                    fontSize='0.875rem'
                    fontStyle='normal'
                    fontWeight='700'
                    lineHeight='normal'
                    color={color}
                  >
                    리뷰 쓰기
                  </Text>
                </Link>
              </Box>
            </Box>
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

  // border-bottom: 1px solid #d4d6dd;
  background-color: #fff;
`;
