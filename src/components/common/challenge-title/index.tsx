import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ChallengeTitleProps = {
  category: string;
  title: string;
};

const ChallengeTitle = ({ category, title }: ChallengeTitleProps) => {
  return (
    <Wrapper>
      <Text fontSize='var(--font-size-xs)' color='var(--color-green-01)'>
        {category}
      </Text>
      <Text fontSize='var(--font-size-xl)' fontWeight='700'>
        {title}
      </Text>
    </Wrapper>
  );
};

export default ChallengeTitle;

const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
