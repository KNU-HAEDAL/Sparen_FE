import * as S from './styles';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ChallengeListProps = {
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
}: ChallengeListProps) => {
  return (
    <>
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
              border='1px solid'
            >
              <Text
              <Text
                fontSize='0.875rem'
                fontStyle='normal'
                fontWeight='700'
                lineHeight='normal'
                color={color}
              >
                리뷰 쓰기
              </Text>
            </Box>
          </Box>
        ))}
      </ChallengeListBox>
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
