import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 16px 0 0;
`;

export const Category = styled.div`
  margin: 20px 30px 0;
  font-size: var(--font-size-xs);
  color: var(--color-green-01);
`;

export const Title = styled.div`
  margin: 0 30px;
  font-size: var(--font-size-xl);
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Text = styled.div`
  font-size: var(--font-size-sm);
`;

export const BoldText = styled.div`
  font-size: var(--font-size-sm);
  font-weight: bold;
  flex-shrink: 0;
`;

export const SubText = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-grey-01);
  margin: 0 30px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  gap: 4px;
`;

export const RowList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    background-color: transparent;
    display: none;
  }
  gap: 16px;
  padding: 0 16px 16px;
`;
