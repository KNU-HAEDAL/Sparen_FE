import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-radius: 20px;
  border: var(--color-grey-02) 0.5px solid;
  padding: 16px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8px;
  align-items: center;
`;

export const BoldText = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 600;
  flex-shrink: 0;
`;

export const Text = styled.span`
  font-size: var(--font-size-sm);
`;

export const SubText = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-grey-02);
  flex-shrink: 0;
`;

export const DifficultyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BarBox = styled.div`
  position: relative;
  display: inline-block;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100px;
  height: 10px;
`;

export const MaxBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  height: 10px;
  background: var(--color-green-06);
  width: 100px;
`;

export const Bar = styled(MaxBar)<{ width: number }>`
  background: linear-gradient(90deg, #457a82, #5cc6ba);
  width: ${({ width }) => `${width}px`};
  z-index: 1;
`;

export const TimesPeriodContent = styled(Text)`
  margin: 0 0 0 auto;
`;
