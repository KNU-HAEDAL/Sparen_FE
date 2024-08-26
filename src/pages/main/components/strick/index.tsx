import StrickCalendar from '../strick-calendar';
import DownArrow from '@/assets/main/Down-Arrow.svg';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Strick = () => {
  const currentDay = 3;
  return (
    <>
      <Text
        fontSize='var(--font-size-xl)'
        fontWeight='700'
        color='#000'
        marginLeft='1rem'
        marginBottom='1rem'
      >
        스트릭
      </Text>
      <StrickLayout>
        <StrickInfo>
          <Text fontSize='var(--font-size-xl)' fontWeight='700'>
            현재 {currentDay}일
          </Text>
          <StrickMonthBox>
            <Text fontSize='1rem' fontWeight='1.25rem'>
              6월
            </Text>
            <Image
              width='0.78rem'
              height='0.45rem'
              color='#000'
              src={DownArrow}
              alt='Down Arrow'
            />
          </StrickMonthBox>
        </StrickInfo>
        <StrickCalendar />
      </StrickLayout>
    </>
  );
};

export default Strick;

const StrickLayout = styled.div`
  height: 17.5rem;
  flex-shrink: 0;
  margin: 1rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StrickInfo = styled.div`
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  gap: 0.625rem;
`;

const StrickMonthBox = styled.div`
  display: inline-flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  border-radius: 0.4375rem;
  border: 1px solid var(--color-green--01);
  background: #fff;
`;
