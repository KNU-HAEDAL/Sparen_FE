import ChallengeImg from '@/assets/challenge/Challenge-Img.png';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ShortsImage = () => {
  return (
    <>
      <ShortsImageBox>
        <Image width='100%' src={ChallengeImg} />
      </ShortsImageBox>
    </>
  );
};

export default ShortsImage;

export const ShortsImageBox = styled.div`
  display: flex;
  margin: 1rem 0;
`;
