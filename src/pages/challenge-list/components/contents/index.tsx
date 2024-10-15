import { useState } from 'react';

import { formatDate } from '@/utils/formatters';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  participantCount: number;
  id: number;
  onClick: (id: number) => void;
};

const Contents = ({
  title,
  content,
  startDate,
  endDate,
  participantCount,
  onClick,
  id,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleBoxClick = () => {
    setIsClicked(!isClicked);
    onClick(id);
  };

  const period = `${formatDate(startDate)} ~ ${formatDate(endDate)}`;

  return (
    <ContentsBox onClick={handleBoxClick} isClicked={isClicked}>
      <Box mb={2}>
        <Text
          fontSize='1.25rem'
          fontWeight='bold'
          color='var(--color-green-04)'
        >
          {title}
        </Text>
      </Box>
      <FlexBox mb={4}>
        <TextItem isClicked={isClicked}>{content}</TextItem>
        <TextItem isClicked={isClicked}>
          누적 참여자 수 : {participantCount}명
        </TextItem>
      </FlexBox>
      <Box>
        <Text mb={1.5} fontSize='1.2rem' fontWeight='700'>
          챌린지 신청 가능 기간
        </Text>
        <TextItem isClicked={isClicked}>{period}</TextItem>
      </Box>
    </ContentsBox>
  );
};

export default Contents;

const ContentsBox = styled(Box)<{ isClicked: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ isClicked }) =>
    isClicked ? 'var(--color-green-06)' : 'var(--color-green-01)'};
  border-radius: 1.2rem;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextItem = styled(Text)<{ isClicked: boolean }>`
  color: ${({ isClicked }) => (isClicked ? '#000' : '#fff')};
  font-size: 1rem;
`;
