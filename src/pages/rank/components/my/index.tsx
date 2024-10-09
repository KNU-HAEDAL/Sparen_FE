import { TextContainer } from '../../styles';
import { useGetMyRank } from '@/apis/my-rank/my-rank.api';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyRank = () => {
  const { data } = useGetMyRank();

  const tierDetails = data?.data.tierInfo
    ? getTierDetails(data?.data.tierInfo.tier)
    : { color: 'var(--color-class-02)' };
  return (
    <>
      <MyRankLayout>
        <Text fontSize='var(--font-size-xl)' fontWeight='700' color='#457A82'>
          내 순위
        </Text>
        <RankInfoContainer>
          <RankPosition>
            <Text fontWeight='700'>{data?.data.rank}위</Text>
          </RankPosition>
          <Box display='flex'>
            <Image width='4.5rem' src={Profile} />
          </Box>
          <TextContainer>
            <Text fontSize='var(--font-size-xl)' fontWeight='650'>
              {data?.data.nickname}
            </Text>
            <Text color={tierDetails?.color} fontWeight='700' fontSize='1.2rem'>
              {data?.data.tierInfo.tier}
            </Text>
          </TextContainer>
        </RankInfoContainer>
      </MyRankLayout>
    </>
  );
};

export default MyRank;

export const MyRankLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green-06);
  border-bottom: 1px solid #bdc5cd;
`;

export const RankInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  gap: 0.6rem;
  padding: 1rem 0.5rem;
`;

export const RankPosition = styled.div`
  width: 3rem;
  text-align: center;
  white-space: nowrap;
`;
