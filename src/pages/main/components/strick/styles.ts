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

export const StrickMonthBox = styled.div`
  display: inline-flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  border-radius: 0.4375rem;
  border: 1px solid var(--color-green--01);
  background: #fff;
`;
