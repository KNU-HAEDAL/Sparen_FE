import {
  cloneElement,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TabsProps = {
  selectedTab: number;
  onChange: (value: number) => void;
  children: ReactElement[];
};

export const Tabs = ({ selectedTab, onChange, children }: TabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Tab refs 배열
  const [tabWidths, setTabWidths] = useState<number[]>([]); // 각 Tab 너비 저장

  // 각 Tab의 너비를 계산하여 상태로 저장
  useEffect(() => {
    if (tabRefs.current.length > 0) {
      const widths = tabRefs.current.map(
        (ref) => ref?.getBoundingClientRect().width || 0
      );
      setTabWidths(widths);
    }
  }, [children]);

  const sliderWidth = tabWidths[selectedTab] - 4 || 0; // 여백 4px 빼기

  const tabs = children.map((child, index) => {
    const handleClick = () => {
      onChange(child.props.value);
    };

    return cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
      ref: (el: HTMLDivElement) => (tabRefs.current[index] = el), // Tab 요소에 ref 연결
    });
  });

  return (
    <StyledTabs ref={containerRef}>
      {tabs}
      <TabSlider width={sliderWidth} index={selectedTab} />
    </StyledTabs>
  );
};

type TabProps = {
  label: string;
  value: number;
  active?: boolean;
  onClick?: () => void;
};

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ label, active, onClick }, ref) => {
    return (
      <StyledTab active={active} onClick={onClick} ref={ref}>
        {label}
      </StyledTab>
    );
  }
);

// displayName 설정으로 경고 해결
Tab.displayName = 'Tab';

// 스타일 정의
export const TABS_HEIGHT = '46px';

export const StyledTabs = styled.div<{
  position?: string;
}>`
  display: flex;
  position: relative;
  height: ${TABS_HEIGHT};
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
  left: 4px;
  width: ${({ width }) => `${width}px`};
  height: calc(${TABS_HEIGHT} - 8px);
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
  width: 50%;
  height: 100%;
  white-space: nowrap; // 글자 줄바꿈 없음
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
