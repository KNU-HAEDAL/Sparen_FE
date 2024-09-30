import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  content: string;
};

const ShortsContents = ({ title, content }: Props) => {
  return (
    <ShortsContentsBox>
      <Text fontSize='var(--font-size-xxl)' fontWeight='700' color='#457A82'>
        {title ? title : '제목 없음'}
      </Text>
      <Text>{content ? content : '내용 없음'}</Text>
    </ShortsContentsBox>
  );
};

export default ShortsContents;

const ShortsContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
`;
