import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTabs = styled.div<{
  position?: string;
}>`
  display: flex;
  justify-content: space-between; /* Tab들이 좌우로 정렬되도록 설정 */
  position: relative;
  align-self: center;
  height: 46px;
  margin: 0 16px;
  padding: 4px 0;
  border-radius: 10px;
  background-color: var(--color-green-06);
`;

// 선택된 탭
export const TabSlider = styled.div<{
  width: number;
  index: number;
}>`
  position: absolute;
  top: 4px;
  width: ${({ width }) => `${width}px`};
  height: 38px;
  background-color: var(--color-white);
  border-radius: 10px;

  /* 슬라이딩 애니메이션 */
  transition: 0.2s;
  transform: ${({ width, index }) => `translateX(${width * index}px)`};
`;

export const StyledTab = styled.div<{
  active?: boolean;
  onClick?: () => void;
  inactiveStyle?: React.CSSProperties;
}>`
  z-index: 1;
  width: 50%; /* 각 Tab의 너비를 50%로 설정하여 두 개의 Tab이 꽉 차도록 설정 */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: var(--font-size-md);
  color: var(--color-grey-02);
  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
      color: var(--color-green-01);
      font-weight: 600;
    `}
`;

export const StyledTabPanels = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  text-align: center;
`;

export const StyledTabPanel = styled.div<{
  active: boolean;
}>`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
