import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  content: { title: string; content: string }[] | undefined;
};

const ShortsContents = ({ content }: Props) => {
  return (
    <>
      <ShortsContentsBox>
        <Text fontSize='var(--font-size-xxl)' fontWeight='700' color='#457A82'>
          {content?.[0].title}
        </Text>
        <Text>{content?.[0].content}</Text>
        <Text fontSize='var(--font-size-xs)' fontWeight='400' color='#797979'>
          사회적 책임감을 높이고 환경 보호 의식을 증진하기 위한 운동 중
          하나입니다. 이 챌린지는 일상에서 마주하는 길거리나 공원 등 공공장소에
          흩뿌려진 쓰레기를 주변을 깨끗하게 만들기 위해 자발적으로 줍는 것을
          촉구합니다.
        </Text>
      </ShortsContentsBox>
    </>
  );
};

export default ShortsContents;

const ShortsContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
`;
