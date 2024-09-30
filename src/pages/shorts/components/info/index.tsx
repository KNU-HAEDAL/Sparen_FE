import CategoryIcon from './category-icons';
import StartIcon from '@/assets/challenge/Start-Icon.svg';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Info = {
  participantCount?: number;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC';
};

type Props = {
  info?: Info;
  onClick: (id: number) => void;
  id: number;
};

const ShortsInfo = ({ info, id, onClick }: Props) => {
  return (
    <>
      <ShortsInfoLayout>
        <CategoryIcon category={info?.category} />
        <ShortsInfoTextBox>
          <Box display='flex'>
            <Text
              color='#000'
              fontSize='1.125rem'
              fontStyle='normal'
              fontWeight='700'
              lineHeight='normal'
              textAlign='center'
              alignItems='center'
            >
              누적 참여자 :&nbsp;
            </Text>
            <Text textAlign='center' alignItems='center'>
              {info?.participantCount !== undefined
                ? `${info.participantCount} 명`
                : '정보 없음'}
            </Text>
          </Box>
          <ShortsStartBox onClick={() => onClick(id)}>
            <Image width='1rem' height='1.25rem' src={StartIcon} />
          </ShortsStartBox>
        </ShortsInfoTextBox>
      </ShortsInfoLayout>
    </>
  );
};

export default ShortsInfo;

export const ShortsInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  align-items: center;
  padding: 2rem 0;
`;

export const ShortsInfoTextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const ShortsStartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background-color: #5cc6ba;
  /* padding: 1rem; */
`;
