import { RouterPath } from '@/routes/path';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ChallengeRecord = () => {
  return (
    <>
      <Text
        marginLeft='1rem'
        marginTop='2rem'
        fontWeight='700'
        fontSize='var(--font-size-xl)'
      >
        내기록
      </Text>
      <ChallengeRecordListButton
        href={`${RouterPath.challenge}/${RouterPath.myRecord}`}
      >
        완료한 챌린지 목록
      </ChallengeRecordListButton>
    </>
  );
};

export default ChallengeRecord;

const ChallengeRecordListButton = styled.a`
  display: flex;
  padding: 0.75rem 6rem 0.5rem 6rem;
  justify-content: center;
  border-radius: 1.25rem;
  margin: 1rem 1rem 2rem 1rem;
  cursor: pointer;
  background-color: var(--color-green-01);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: var(--font-size-xl);
  color: #fff;
`;
