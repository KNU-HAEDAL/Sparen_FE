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

export const Wrapper = styled.div``;

type StylizedTabProps = {
  active?: boolean;
  onClick?: () => void;
  inactiveStyle?: React.CSSProperties;
};

export const StylizedTab = styled.div<StylizedTabProps>`
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

type StyledTabPanelProps = {
  active: boolean;
};

export const StyledTabPanel = styled.div<StyledTabPanelProps>`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

type TabHeaderContainerProps = {
  position?: string;
};

export const TabHeaderContainer = styled.div<TabHeaderContainerProps>`
  position: ${(props) => props.position || 'absolute'};
  width: 100%;
`;

export const TabsHolder = styled.div`
  display: flex;
  justify-content: space-between; /* Tab들이 좌우로 정렬되도록 설정 */
  width: 100%;
`;

type TabSliderProps = {
  width: number;
  index: number;
};

export const TabSlider = styled.div<TabSliderProps>`
  position: absolute;
  top: 3px;
  height: 50px;
  background-color: var(--color-white);
  border-radius: 20px;
  transition: 0.2s;
  transform: ${({ width, index }) => `translateX(${width * index}px)`};
  width: ${({ width }) => `${width}px`};
`;
