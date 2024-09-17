import StartIcon from '@/assets/challenge/Start-Icon.svg';
import EcoIcon from '@/assets/main/Eco-Logo.svg';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ShortsInfo = () => {
  return (
    <>
      <ShortsInfoLayout>
        <ShortsInfoIconBox>
          <Image width='1.5rem' height='1.5rem' src={EcoIcon} />
        </ShortsInfoIconBox>
        <ShortsInfoTextBox>
          <Text
            color='#000'
            fontSize='1.125rem'
            fontStyle='normal'
            fontWeight='700'
            lineHeight='normal'
          >
            누적 참여자 :&nbsp;
          </Text>
          <Text>125명</Text>
        </ShortsInfoTextBox>
      </ShortsInfoLayout>
      <ShortsStartBox>
        <Image width='1rem' height='1.25rem' src={StartIcon} />
      </ShortsStartBox>
    </>
  );
};

export default ShortsInfo;

export const ShortsInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  align-items: center;
`;

export const ShortsInfoIconBox = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid var(--color-green-01);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ShortsInfoTextBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
`;

export const ShortsStartBox = styled.div`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;

  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5rem;

  margin: 1rem 19rem 2rem;
  background: #5cc6ba;
  padding: 1.5rem;
`;
