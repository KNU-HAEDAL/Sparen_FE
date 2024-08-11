import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StrickCalendar = () => {
  return (
    <>
      <StrickCalendarLayout>
        <CalendarMonth>
          <MonthText>S</MonthText>
          <MonthText>M</MonthText>
          <MonthText>T</MonthText>
          <MonthText>W</MonthText>
          <MonthText>T</MonthText>
          <MonthText>F</MonthText>
          <MonthText>S</MonthText>
        </CalendarMonth>
        <CalenderInfo>
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
          <CalenderItem bgColor='#d9d9d9' />
        </CalenderInfo>
      </StrickCalendarLayout>
      <MonthTextContainer>
        <MonthTextItem>7월</MonthTextItem>
        <MonthTextItem>8월</MonthTextItem>
        <MonthTextItem>9월</MonthTextItem>
      </MonthTextContainer>
    </>
  );
};

export default StrickCalendar;

const Container = styled(Box)`
  display: flex;
`;

const TextStyle = styled(Text)`
  color: #b3b3b3;
  text-align: center;
`;

const StrickCalendarLayout = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin: 0 1rem;
`;

const CalendarMonth = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  gap: 1px;
`;

const CalenderInfo = styled(Container)`
  width: 18rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 0.125rem;
  flex-wrap: wrap;
`;

const CalenderItem = styled.div<{ bgColor: string }>`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background-color: ${(props) => props.bgColor};
`;

const MonthTextContainer = styled(Container)`
  flex-direction: row;
  width: 13rem;
  margin: 1rem 4rem;
  justify-content: space-between;
`;

const MonthTextItem = styled(TextStyle)`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MonthText = styled(TextStyle)`
  font-size: 0.9rem;
  font-weight: 500;
`;
