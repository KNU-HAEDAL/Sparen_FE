import styled from '@emotion/styled';

export const Outer = styled.div`
  border-radius: 20px;
  border: var(--color-grey-02) 0.5px solid;
  padding: 16px;
  flex-shrink: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 16px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BoldText = styled.div`
  font-size: var(--font-size-sm);
  font-weight: bold;
  flex-shrink: 0;
`;

export const Text = styled.div`
  font-size: var(--font-size-sm);
`;

export const SubText = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-grey-02);
  flex-shrink: 0;
`;

export const Bar = styled.div<{ width: number }>`
  border-radius: 10px;
  height: 10px;
  background: linear-gradient(90deg, #457a82, #5cc6ba);
  width: ${({ width }) => `${width}px`};
  flex-shrink: 0;
`;

export const MaxBar = styled.div`
  border-radius: 10px;
  height: 10px;
  background: var(--color-grey-02);
  width: 100px;
  flex-shrink: 0;
`;

export const ExpContent = styled.div`
  font-size: var(--font-size-xs);
  background-size: contain;
  text-align: center;
  color: var(--color-green-01);
  padding: 3px;
  border-radius: 20px;
  border: var(--color-green-01) 1px solid;
  flex-shrink: 0;
  padding: 2px 6px;
`;

export const Btn = styled.button`
  border-radius: 20px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  font-weight: bold;
  font-size: var(--font-size-md);
  width: 100%;
  height: 45px;
  border: none;
`;
