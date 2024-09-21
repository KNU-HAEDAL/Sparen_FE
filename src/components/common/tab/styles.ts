import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TabsContainer = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  align-self: center;
  width: 90%;
  margin: 0 auto;
  height: 55px;
  border-radius: 20px;
  background-color: var(--color-green-06);
`;

export const TabPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 50px;
  text-align: center;
`;

export const StylizedTab = styled.div<{
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
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
      color: var(--color-green-01);
      font-weight: 600;
      border-radius: 20px;
    `}
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

export const TabHeaderContainer = styled.div<{
  position?: string;
}>`
  position: ${(props) => props.position || 'absolute'};
  width: 100%;
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
  top: 3px;
  height: 50px;
  background-color: var(--color-white);
  border-radius: 20px;

  /* 슬라이딩 애니메이션 */
  transition: 0.2s;
  transform: ${({ width, index }) => `translateX(${width * index}px)`};
  width: ${({ width }) => `${width}px`};
`;
