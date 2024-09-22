import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTab = styled.div<{
  active?: boolean;
  onClick?: () => void;
  inactiveStyle?: React.CSSProperties;
}>`
  z-index: 1;
  color: var(--color-grey-02);
  width: 50%; /* 각 Tab의 너비를 50%로 설정하여 두 개의 Tab이 꽉 차도록 설정 */
  font-size: var(--font-size-md);
  background-color: transparent;
  border: none;
  height: 38px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
      color: var(--color-green-01);
      font-weight: 600;
      border-radius: 10px;
    `}
`;

export const StyledTabs = styled.div<{
  position?: string;
}>`
  position: ${(props) => props.position || 'absolute'};

  display: flex;
  position: relative;
  align-self: center;
  margin: 0 16px;
  height: 46px;
  border-radius: 10px;
  background-color: var(--color-green-06);
`;

export const TabsHolder = styled.div`
  display: flex;
  justify-content: space-between; /* Tab들이 좌우로 정렬되도록 설정 */
  width: 100%;
`;

// 선택된 탭
export const TabSlider = styled.div<{
  width: number;
  index: number;
}>`
  position: absolute;
  top: 4px;
  height: 38px;
  background-color: var(--color-white);
  border-radius: 10px;
  margin: 0 4px;

  /* 슬라이딩 애니메이션 */
  transition: 0.2s;
  transform: ${({ width, index }) => `translateX(${width * index}px)`};
  width: ${({ width }) => `${width}px`};
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
