import styled from '@emotion/styled';

export const StrickLayout = styled.div`
  height: 17.5rem;
  flex-shrink: 0;
  margin: 1rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const StrickInfo = styled.div`
  margin: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  gap: 0.625rem;
`;

export const StrickMonthContainer = styled.div`
  display: inline-flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  border-radius: 0.4375rem;
  border: 1px solid var(--green--01, #5cc6ba);
  background: #fff;
`;

export const StrickMonthImg = styled.img`
  width: 0.78125rem;
  height: 0.4375rem;
  color: #000;
`;

export const StrickCalendarLayout = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin: 0 1rem;
`;

export const CalendarMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1px;
`;

export const MonthText = styled.div`
  color: #b3b3b3;
  text-align: center;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CalenderInfo = styled.div`
  display: flex;
  width: 18rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 0.125rem;
  /* margin: 0 1rem; */
  flex-wrap: wrap;
`;

export const CalenderItem = styled.div<{ bgColor: string }>`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  /* background: #d9d9d9; */
  background-color: ${(props) => props.bgColor};
`;

export const MonthTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 13rem;
  margin: 1rem 4rem;
  justify-content: space-between;
`;

export const MonthTextItem = styled.div`
  color: #b3b3b3;
  text-align: center;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
